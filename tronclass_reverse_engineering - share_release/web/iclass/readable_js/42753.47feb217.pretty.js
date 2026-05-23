(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    42753
  ], {
    77062:(t, e, i)=>{
      i.d(e, {
        Vo:()=>Si, d:()=>qe, hw:()=>xi, i3:()=>ui, JF:()=>_i, pH:()=>pi, yp:()=>fi, J0:()=>bi, Gv:()=>Ci, KT:()=>Mi, Bg:()=>ki, Qp:()=>wi
      });
      var o={
      };
      i.r(o), i.d(o, {
        Line:()=>U, applyMatrix:()=>I, compare:()=>S, distance:()=>B, floydWarshall:()=>L, fractionToLine:()=>V, getAdjMatrix:()=>T, getBBoxBoundLine:()=>j, getCircleCenterByPoints:()=>E, getCircleIntersectByPoint:()=>C, getDegree:()=>z, getEllipseIntersectByPoint:()=>_, getLineIntersect:()=>k, getPointsCenter:()=>K, getRectIntersectByPoint:()=>M, intersectBBox:()=>W, invertMatrix:()=>P, isPointInPolygon:()=>X, isPointsOverlap:()=>H, isPolygonsIntersect:()=>R, itemIntersectByLine:()=>J, lerp:()=>tt, lerpArray:()=>et, move:()=>F, pointLineDistance:()=>$, pointLineSquareDist:()=>q, pointRectSquareDist:()=>Q, rotate:()=>O, scale:()=>D, scaleMatrix:()=>N, squareDist:()=>Z, translate:()=>A
      });
      var n={
      };
      i.r(n), i.d(n, {
        cloneBesidesImg:()=>Lt, getAnimateCfgWithCallback:()=>Tt, getBBox:()=>vt, getComboBBox:()=>Bt, getLabelPosition:()=>xt, getLetterWidth:()=>Ct, getLoopCfgs:()=>bt, getTextSize:()=>_t, plainCombosToTrees:()=>Pt, reconstructTree:()=>Et, shouldRefreshEdge:()=>Nt, traverseTree:()=>kt, traverseTreeUp:()=>Mt, truncateLabelByLength:()=>It
      });
      var a={
      };
      i.r(a), i.d(a, {
        calculationItemsBBox:()=>Rt, cloneEvent:()=>Yt, formatPadding:()=>zt, isNaN:()=>Wt, isViewportChanged:()=>Xt, processParallelEdges:()=>Ut, uniqueId:()=>Ot
      });
      var r={
      };
      i.r(r), i.d(r, {
        getClosedSpline:()=>Le, getControlPoint:()=>Ee, getSpline:()=>Pe, getStarPath:()=>ze, paddedHull:()=>Oe, pathToPoints:()=>Ne, pointsToPolygon:()=>Be, roundedHull:()=>De
      });
      var s={
      };
      i.r(s), i.d(s, {
        defaultSubjectColors:()=>yi
      });
      var l={
      };
      i.r(l), i.d(l, {
        isForce:()=>mi
      });
      var h=i(224425);
      const d={
        getDefaultCfg:function(){
          return{
          }
        }, getEvents:function(){
          return{
          }
        }, updateCfg:function(t){
          return Object.assign(this, t), !0
        }, shouldBegin:function(){
          return!0
        }, shouldUpdate:function(){
          return!0
        }, shouldEnd:function(){
          return!0
        }, bind:function(t){
          var e=this, i=this.events;
          this.graph=t, "drag-canvas"!==this.type&&"brush-select"!==this.type&&"lasso-select"!==this.type||t.get("canvas").set("draggable", !0), (0, h.each)(i, (function(e, i){
            t.on(i, e)
          })), document.addEventListener("visibilitychange", (function(){
            e.keydown=!1
          }))
        }, unbind:function(t){
          var e=this.events, i=t.get("canvas").get("draggable");
          "drag-canvas"!==this.type&&"brush-select"!==this.type&&"lasso-select"!==this.type||t.get("canvas").set("draggable", !1), (0, h.each)(e, (function(e, i){
            t.off(i, e)
          })), t.get("canvas").set("draggable", i)
        }, get:function(t){
          return this[
            t
          ]
        }, set:function(t, e){
          return this[
            t
          ]
          =e, this
        }
      };
      const c=function(){
        function t(){
        }
        return t.registerBehavior=function(e, i){
          if(!i)throw new Error("please specify handler for this behavior: ".concat(e));
          var o=(0, h.clone)(d);
          Object.assign(o, i);
          var n=function(t){
            var e=this;
            Object.assign(this, this.getDefaultCfg(), t);
            var i=this.getEvents();
            this.events=null;
            var o={
            };
            i&&((0, h.each)(i, (function(t, i){
              o[
                i
              ]
              =(0, h.wrapBehavior)(e, t)
            })), this.events=o)
          };
          n.prototype=o, t.types[
            e
          ]
          =n
        }, t.hasBehavior=function(e){
          return!!t.types[
            e
          ]
        }, t.getBehavior=function(e){
          return t.types[
            e
          ]
        }, t.types={
        }, t
      }
      (), g=c;
      var u=i(331635), p=i(313302), f=i(883278), y=i(318050), m=i(630329), v=i(591409), b=i(240842), x=f.pd, S=function(t){
        return function(e, i){
          return e[
            t
          ]
          -i[
            t
          ]
        }
      }, w=function(t, e, i){
        return t>=e&&t<=i
      }, k=function(t, e, i, o){
        var n=i.x-t.x, a=i.y-t.y, r=e.x-t.x, s=e.y-t.y, l=o.x-i.x, h=o.y-i.y, d=r*h-s*l, c=1/d;
        if(d*d>1e-4*(r*r+s*s)*(l*l+h*h)){
          var g=(n*h-a*l)*c, u=(n*s-a*r)*c;
          return w(g, 0, 1)&&w(u, 0, 1)?{
            x:t.x+g*r, y:t.y+g*s
          }
          :null
        }
        return null
      }, M=function(t, e){
        var i=t.x, o=t.y, n=t.width, a=t.height, r=[
        ], s={
          x:i+n/2, y:o+a/2
        };
        r.push({
          x:i, y:o
        }), r.push({
          x:i+n, y:o
        }), r.push({
          x:i+n, y:o+a
        }), r.push({
          x:i, y:o+a
        }), r.push({
          x:i, y:o
        });
        for(var l=null, h=1;
        h<r.length&&!(l=k(r[
          h-1
        ], r[
          h
        ], s, e));
        h++);
        return l
      }, C=function(t, e){
        var i=t.x, o=t.y, n=t.r, a=e.x-i, r=e.y-o;
        if(a*a+r*r<n*n)return null;
        var s=Math.atan(r/a);
        return{
          x:i+Math.abs(n*Math.cos(s))*Math.sign(a), y:o+Math.abs(n*Math.sin(s))*Math.sign(r)
        }
      }, _=function(t, e){
        var i=t.rx, o=t.ry, n=t.x, a=t.y, r=e.x-n, s=e.y-a, l=Math.atan2(s/o, r/i);
        return l<0&&(l+=2*Math.PI), {
          x:n+i*Math.cos(l), y:a+o*Math.sin(l)
        }
      }, I=function(t, e, i){
        void 0===i&&(i=1);
        var o=[
          t.x, t.y, i
        ];
        return e&&!isNaN(e[
          0
        ])||(e=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]), m.transformMat3(o, o, e), {
          x:o[
            0
          ], y:o[
            1
          ]
        }
      }, P=function(t, e, i){
        void 0===i&&(i=1), e&&!isNaN(e[
          0
        ])||(e=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]);
        var o=v.invert([
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ], e);
        o||(o=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]);
        var n=[
          t.x, t.y, i
        ];
        return m.transformMat3(n, n, o), {
          x:n[
            0
          ], y:n[
            1
          ]
        }
      }, E=function(t, e, i){
        var o=t.x-e.x, n=t.y-e.y, a=t.x-i.x, r=t.y-i.y, s=(t.x*t.x-e.x*e.x-e.y*e.y+t.y*t.y)/2, l=(t.x*t.x-i.x*i.x-i.y*i.y+t.y*t.y)/2, h=n*a-o*r;
        return{
          x:-(r*s-n*l)/h, y:-(o*l-a*s)/h
        }
      }, B=function(t, e){
        var i=t.x-e.x, o=t.y-e.y;
        return Math.sqrt(i*i+o*o)
      }, N=function(t, e){
        var i=[
        ];
        return t.forEach((function(t){
          var o=[
          ];
          t.forEach((function(t){
            o.push(t*e)
          })), i.push(o)
        })), i
      }, L=function(t){
        for(var e=[
        ], i=t.length, o=0;
        o<i;
        o+=1){
          e[
            o
          ]
          =[
          ];
          for(var n=0;
          n<i;
          n+=1)o===n?e[
            o
          ]
          [
            n
          ]
          =0:0!==t[
            o
          ]
          [
            n
          ]
          &&t[
            o
          ]
          [
            n
          ]
          ?e[
            o
          ]
          [
            n
          ]
          =t[
            o
          ]
          [
            n
          ]
          :e[
            o
          ]
          [
            n
          ]
          =1/0
        }
        for(var a=0;
        a<i;
        a+=1)for(o=0;
        o<i;
        o+=1)for(n=0;
        n<i;
        n+=1)e[
          o
        ]
        [
          n
        ]
        >e[
          o
        ]
        [
          a
        ]
        +e[
          a
        ]
        [
          n
        ]
        &&(e[
          o
        ]
        [
          n
        ]
        =e[
          o
        ]
        [
          a
        ]
        +e[
          a
        ]
        [
          n
        ]);
        return e
      }, T=function(t, e){
        var i=t.nodes, o=t.edges, n=[
        ], a={
        };
        if(!i)throw new Error("invalid nodes data!");
        return i&&i.forEach((function(t, e){
          a[
            t.id
          ]
          =e;
          n.push([
          ])
        })), o&&o.forEach((function(t){
          var i=t.source, o=t.target, r=a[
            i
          ], s=a[
            o
          ];
          n[
            r
          ]
          [
            s
          ]
          =1, e||(n[
            s
          ]
          [
            r
          ]
          =1)
        })), n
      }, A=function(t, e){
        t.translate(e.x, e.y)
      }, F=function(t, e, i, o){
        void 0===o&&(o={
          duration:500
        });
        var n=t.getMatrix();
        n||(n=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]);
        var a=t.getCanvasBBox(), r=e.x-a.minX, s=e.y-a.minY;
        if(i){
          var l=r*n[
            0
          ], h=s*n[
            4
          ], d=0, c=0, g=0, u=0;
          t.animate((function(t){
            return n=x(n, [
              [
                "t", (g=l*t)-d, (u=h*t)-c
              ]
            ]), d=g, c=u, {
              matrix:n
            }
          }), o)
        }
        else{
          var p=x(n, [
            [
              "t", r, s
            ]
          ]);
          t.setMatrix(p)
        }
      }, D=function(t, e){
        var i=t.getMatrix();
        i||(i=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]);
        var o=e;
        (0, h.isArray)(e)||(o=[
          e, e
        ]), (0, h.isArray)(e)&&1===e.length&&(o=[
          e[
            0
          ], e[
            0
          ]
        ]), i=x(i, [
          [
            "s", o[
              0
            ], o[
              1
            ]
          ]
        ]), t.setMatrix(i)
      }, O=function(t, e){
        var i=t.getMatrix();
        i||(i=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]), i=x(i, [
          [
            "r", e
          ]
        ]), t.setMatrix(i)
      }, z=function(t, e, i){
        for(var o=[
        ], n=0;
        n<t;
        n++)o[
          n
        ]
        =0;
        return i.forEach((function(t){
          t.source&&(o[
            e[
              t.source
            ]
          ]
          +=1), t.target&&(o[
            e[
              t.target
            ]
          ]
          +=1)
        })), o
      };
      function Y(t, e, i){
        return(i[
          0
        ]
        -t[
          0
        ])*(e[
          1
        ]
        -t[
          1
        ])==(e[
          0
        ]
        -t[
          0
        ])*(i[
          1
        ]
        -t[
          1
        ])&&Math.min(t[
          0
        ], e[
          0
        ])<=i[
          0
        ]
        &&i[
          0
        ]
        <=Math.max(t[
          0
        ], e[
          0
        ])&&Math.min(t[
          1
        ], e[
          1
        ])<=i[
          1
        ]
        &&i[
          1
        ]
        <=Math.max(t[
          1
        ], e[
          1
        ])
      }
      var X=function(t, e, i){
        var o=!1, n=t.length;
        function a(t){
          return Math.abs(t)<1e-6?0:t<0?-1:1
        }
        if(n<=2)return!1;
        for(var r=0;
        r<n;
        r++){
          var s=t[
            r
          ], l=t[
            (r+1)%n
          ];
          if(Y(s, l, [
            e, i
          ]))return!0;
          a(s[
            1
          ]
          -i)>0!=a(l[
            1
          ]
          -i)>0&&a(e-(i-s[
            1
          ])*(s[
            0
          ]
          -l[
            0
          ])/(s[
            1
          ]
          -l[
            1
          ])-s[
            0
          ])<0&&(o=!o)
        }
        return o
      }, W=function(t, e){
        return!(e.minX>t.maxX||e.maxX<t.minX||e.minY>t.maxY||e.maxY<t.minY)
      }, R=function(t, e){
        var i=function(t){
          var e=t.map((function(t){
            return t[
              0
            ]
          })), i=t.map((function(t){
            return t[
              1
            ]
          }));
          return{
            minX:Math.min.apply(null, e), maxX:Math.max.apply(null, e), minY:Math.min.apply(null, i), maxY:Math.max.apply(null, i)
          }
        }, o=function(t){
          for(var e=[
          ], i=t.length, o=0;
          o<i-1;
          o++){
            var n=t[
              o
            ], a=t[
              o+1
            ];
            e.push({
              from:{
                x:n[
                  0
                ], y:n[
                  1
                ]
              }, to:{
                x:a[
                  0
                ], y:a[
                  1
                ]
              }
            })
          }
          if(e.length>1){
            var r=t[
              0
            ], s=t[
              i-1
            ];
            e.push({
              from:{
                x:s[
                  0
                ], y:s[
                  1
                ]
              }, to:{
                x:r[
                  0
                ], y:r[
                  1
                ]
              }
            })
          }
          return e
        };
        if(t.length<2||e.length<2)return!1;
        var n=i(t), a=i(e);
        if(!W(n, a))return!1;
        var r=!1;
        if((0, h.each)(e, (function(e){
          if(X(t, e[
            0
          ], e[
            1
          ]))return r=!0, !1
        })), r)return!0;
        if((0, h.each)(t, (function(t){
          if(X(e, t[
            0
          ], t[
            1
          ]))return r=!0, !1
        })), r)return!0;
        var s=o(t), l=o(e), d=!1;
        return(0, h.each)(l, (function(t){
          if(function(t, e){
            var i=!1;
            return(0, h.each)(t, (function(t){
              if(k(t.from, t.to, e.from, e.to))return i=!0, !1
            })), i
          }
          (s, t))return d=!0, !1
        })), d
      }, U=function(){
        function t(t, e, i, o){
          this.x1=t, this.y1=e, this.x2=i, this.y2=o
        }
        return t.prototype.getBBox=function(){
          var t=Math.min(this.x1, this.x2), e=Math.min(this.y1, this.y2), i=Math.max(this.x1, this.x2), o=Math.max(this.y1, this.y2);
          return{
            x:t, y:e, minX:t, minY:e, maxX:i, maxY:o, width:i-t, height:o-e
          }
        }, t
      }
      (), j=function(t, e){
        return{
          top:[
            t.minX, t.minY, t.maxX, t.minY
          ], left:[
            t.minX, t.minY, t.minX, t.maxY
          ], bottom:[
            t.minX, t.maxY, t.maxX, t.maxY
          ], right:[
            t.maxX, t.minY, t.maxX, t.maxY
          ]
        }
        [
          e
        ]
      }, G=function(t, e){
        var i=(e.x2-e.x1)*(t.y1-e.y1)-(e.y2-e.y1)*(t.x1-e.x1), o=(t.x2-t.x1)*(t.y1-e.y1)-(t.y2-t.y1)*(t.x1-e.x1), n=(e.y2-e.y1)*(t.x2-t.x1)-(e.x2-e.x1)*(t.y2-t.y1);
        if(n){
          var a=i/n, r=o/n;
          if(a>=0&&a<=1&&r>=0&&r<=1)return a
        }
        return Number.POSITIVE_INFINITY
      }, J=function(t, e){
        for(var i=[
          "top", "left", "bottom", "right"
        ], o=t.getBBox(), n=0, a=[
        ], r=0;
        r<4;
        r++){
          var s=j(o, i[
            r
          ]), l=s[
            0
          ], h=s[
            1
          ], d=s[
            2
          ], c=s[
            3
          ];
          a[
            r
          ]
          =k({
            x:e.x1, y:e.y1
          }, {
            x:e.x2, y:e.y2
          }, {
            x:l, y:h
          }, {
            x:d, y:c
          }), a[
            r
          ]
          &&(n+=1)
        }
        return[
          a, n
        ]
      }, V=function(t, e){
        for(var i=[
          "top", "left", "bottom", "right"
        ], o=t.getBBox(), n=Number.POSITIVE_INFINITY, a=0, r=0;
        r<4;
        r++){
          var s=j(o, i[
            r
          ]), l=s[
            0
          ], h=s[
            1
          ], d=s[
            2
          ], c=s[
            3
          ], g=G(e, new U(l, h, d, c));
          (g=Math.abs(g-.5))>=0&&g<=1&&(a+=1, n=g<n?g:n)
        }
        return 0===a?-1:n
      }, K=function(t){
        var e=0, i=0;
        if(t.length>0){
          for(var o=0, n=t;
          o<n.length;
          o++){
            var a=n[
              o
            ];
            e+=a.x, i+=a.y
          }
          e/=t.length, i/=t.length
        }
        return{
          x:e, y:i
        }
      }, Z=function(t, e){
        return Math.pow(t.x-e.x, 2)+Math.pow(t.y-e.y, 2)
      }, q=function(t, e){
        var i, o=e.x1, n=e.y1, a=e.x2-o, r=e.y2-n, s=t.x-o, l=t.y-n, h=s*a+l*r;
        i=h<=0||(h=(s=a-s)*a+(l=r-l)*r)<=0?0:h*h/(a*a+r*r);
        var d=s*s+l*l-i;
        return d<0&&(d=0), d
      }, H=function(t, e, i){
        return void 0===i&&(i=.001), Math.pow(t.x-e.x, 2)+Math.pow(t.y-e.y, 2)<Math.pow(i, 2)
      }, Q=function(t, e){
        var i=t.x<e.x, o=t.x>e.x+e.width, n=t.y>e.y+e.height, a=t.y<e.y;
        if(!(i||o||n||a))return 0;
        if(n&&!i&&!o)return Math.pow(e.y+e.height-t.y, 2);
        if(a&&!i&&!o)return Math.pow(t.y-e.y, 2);
        if(i&&!n&&!a)return Math.pow(e.x-t.x, 2);
        if(o&&!n&&!a)return Math.pow(e.x+e.width-t.x, 2);
        var r=Math.min(Math.abs(e.x-t.x), Math.abs(e.x+e.width-t.x)), s=Math.min(Math.abs(e.y-t.y), Math.abs(e.y+e.height-t.y));
        return r*r+s*s
      }, $=function(t, e){
        var i=t[
          0
        ], o=t[
          1
        ], n=t[
          2
        ], a=t[
          3
        ], r=e.x, s=e.y, l=[
          n-i, a-o
        ];
        if(b.exactEquals(l, [
          0, 0
        ]))return NaN;
        var h=[
          -l[
            1
          ], l[
            0
          ]
        ];
        b.normalize(h, h);
        var d=[
          r-i, s-o
        ];
        return Math.abs(b.dot(d, h))
      }, tt=function(t, e, i){
        return t+(e-t)*i
      }, et=function(t, e, i){
        for(var o=Math.min(t.length, e.length), n=new Array(o), a=0;
        a<o;
        a++)n[
          a
        ]
        =tt(t[
          a
        ], e[
          a
        ], i);
        return n
      }, it="rgb(95, 149, 255)", ot="rgb(0, 0, 0)", nt="rgb(247, 250, 255)", at="rgb(239, 244, 255)", rt="rgb(253, 253, 253)", st="rgb(250, 250, 250)", lt="rgb(224, 224, 224)", ht="rgb(234, 234, 234)", dt="#4572d9";
      const ct={
        version:"0.8.23", rootContainerClassName:"root-container", nodeContainerClassName:"node-container", edgeContainerClassName:"edge-container", comboContainerClassName:"combo-container", delegateContainerClassName:"delegate-container", defaultLoopPosition:"top", nodeLabel:{
          style:{
            fill:"#000", fontSize:12, textAlign:"center", textBaseline:"middle"
          }, offset:4
        }, defaultNode:{
          type:"circle", style:{
            lineWidth:1, stroke:it, fill:at
          }, size:20, color:it, linkPoints:{
            size:8, lineWidth:1, fill:nt, stroke:it
          }
        }, nodeStateStyles:{
          active:{
            fill:nt, stroke:it, lineWidth:2, shadowColor:it, shadowBlur:10
          }, selected:{
            fill:"rgb(255, 255, 255)", stroke:it, lineWidth:4, shadowColor:it, shadowBlur:10, "text-shape":{
              fontWeight:500
            }
          }, highlight:{
            fill:"rgb(223, 234, 255)", stroke:dt, lineWidth:2, "text-shape":{
              fontWeight:500
            }
          }, inactive:{
            fill:nt, stroke:"rgb(191, 213, 255)", lineWidth:1
          }, disable:{
            fill:st, stroke:lt, lineWidth:1
          }
        }, edgeLabel:{
          style:{
            fill:ot, textAlign:"center", textBaseline:"middle", fontSize:12
          }
        }, defaultEdge:{
          type:"line", size:1, style:{
            stroke:lt, lineAppendWidth:2
          }, color:lt
        }, edgeStateStyles:{
          active:{
            stroke:it, lineWidth:1
          }, selected:{
            stroke:it, lineWidth:2, shadowColor:it, shadowBlur:10, "text-shape":{
              fontWeight:500
            }
          }, highlight:{
            stroke:it, lineWidth:2, "text-shape":{
              fontWeight:500
            }
          }, inactive:{
            stroke:ht, lineWidth:1
          }, disable:{
            stroke:"rgb(245, 245, 245)", lineWidth:1
          }
        }, comboLabel:{
          style:{
            fill:ot, textBaseline:"middle", fontSize:12
          }, refY:10, refX:10
        }, defaultCombo:{
          type:"circle", style:{
            fill:rt, lineWidth:1, stroke:lt, r:5, width:20, height:10
          }, size:[
            20, 5
          ], color:lt, padding:[
            25, 20, 15, 20
          ]
        }, comboStateStyles:{
          active:{
            stroke:it, lineWidth:1, fill:nt
          }, selected:{
            stroke:it, lineWidth:2, fill:rt, shadowColor:it, shadowBlur:10, "text-shape":{
              fontWeight:500
            }
          }, highlight:{
            stroke:dt, lineWidth:2, fill:rt, "text-shape":{
              fontWeight:500
            }
          }, inactive:{
            stroke:lt, fill:rt, lineWidth:1
          }, disable:{
            stroke:ht, fill:st, lineWidth:1
          }
        }, delegateStyle:{
          fill:"#F3F9FF", fillOpacity:.5, stroke:"#1890FF", strokeOpacity:.9, lineDash:[
            5, 5
          ]
        }, windowFontFamily:"undefined"!=typeof window&&window.getComputedStyle&&document.body&&window.getComputedStyle(document.body, null).getPropertyValue("font-family")||"Arial, sans-serif"
      }, gt={
        " ":.3329986572265625, a:.5589996337890625, A:.6569992065429687, b:.58599853515625, B:.6769989013671875, c:.5469985961914062, C:.7279998779296875, d:.58599853515625, D:.705999755859375, e:.554998779296875, E:.63699951171875, f:.37299957275390627, F:.5769989013671875, g:.5909988403320312, G:.7479995727539063, h:.555999755859375, H:.7199996948242188, i:.255999755859375, I:.23699951171875, j:.26699981689453123, J:.5169998168945312, k:.5289993286132812, K:.6899993896484375, l:.23499908447265624, L:.5879989624023437, m:.854998779296875, M:.8819992065429687, n:.5589996337890625, N:.7189987182617188, o:.58599853515625, O:.7669998168945312, p:.58599853515625, P:.6419998168945312, q:.58599853515625, Q:.7669998168945312, r:.3649993896484375, R:.6759994506835938, s:.504998779296875, S:.6319992065429687, t:.354998779296875, T:.6189987182617187, u:.5599990844726562, U:.7139999389648437, v:.48199920654296874, V:.6389999389648438, w:.754998779296875, W:.929998779296875, x:.5089996337890625, X:.63699951171875, y:.4959991455078125, Y:.66199951171875, z:.48699951171875, Z:.6239990234375, 0:.6, 1:.40099945068359377, 2:.6, 3:.6, 4:.6, 5:.6, 6:.6, 7:.5469985961914062, 8:.6, 9:.6, "[":.3329986572265625, "]":.3329986572265625, ",":.26399993896484375, ".":.26399993896484375, ";":.26399993896484375, ":":.26399993896484375, "{":.3329986572265625, "}":.3329986572265625, "\\":.5, "|":.19499969482421875, "=":.604998779296875, "+":.604998779296875, "-":.604998779296875, _:.5, "`":.3329986572265625, " ~":.8329986572265625, "!":.3329986572265625, "@":.8579986572265625, "#":.6, $:.6, "%":.9699996948242188, "^":.517999267578125, "&":.7259994506835937, "*":.505999755859375, "(":.3329986572265625, ")":.3329986572265625, "<":.604998779296875, ">":.604998779296875, "/":.5, "?":.53699951171875
      };
      var ut=Math.PI, pt=Math.sin, ft=Math.cos, yt=pt(ut/8), mt=ft(ut/8), vt=function(t, e){
        var i=t.getBBox(), o={
          x:i.minX, y:i.minY
        }, n={
          x:i.maxX, y:i.maxY
        };
        if(e){
          var a=e.getMatrix();
          a||(a=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), o=I(o, a), n=I(n, a)
        }
        var r=o.x, s=o.y, l=n.x, h=n.y;
        return{
          x:r, y:s, minX:r, minY:s, maxX:l, maxY:h, width:l-r, height:h-s
        }
      }, bt=function(t){
        var e=t.sourceNode||t.targetNode, i=e.get("group").getMatrix();
        i||(i=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ]);
        var o=e.getKeyShape(), n=o.getBBox(), a=t.loopCfg||{
        }, r=a.dist||2*Math.max(n.width, n.height), s=a.position||ct.defaultLoopPosition, l=[
          (n.minX+n.maxX)/2+i[
            6
          ], (n.minY+n.maxY)/2+i[
            7
          ]
        ], h=[
          t.startPoint.x, t.startPoint.y
        ], d=[
          t.endPoint.x, t.endPoint.y
        ], c=n.height/2, g=n.width/2, u=c, p=c, f=u*yt, y=u*mt, m=p*yt, v=p*mt, x=o.get("type"), S=Math.min(c/2, g/2), w=Math.min(c, g), k=(null==a?void 0:a.pointPadding)?Math.min(w, null==a?void 0:a.pointPadding):S;
        if(h[
          0
        ]
        ===d[
          0
        ]
        &&h[
          1
        ]
        ===d[
          1
        ]){
          switch(s){
            case"top":"circle"===x?(h=[
              l[
                0
              ]
              -f, l[
                1
              ]
              -y
            ], d=[
              l[
                0
              ]
              +m, l[
                1
              ]
              -v
            ]):(h=[
              l[
                0
              ]
              -k, l[
                1
              ]
              -c
            ], d=[
              l[
                0
              ]
              +k, l[
                1
              ]
              -c
            ]);
            break;
            case"top-right":u=c, p=g, "circle"===x?(h=[
              l[
                0
              ]
              +(f=u*yt), l[
                1
              ]
              -(y=u*mt)
            ], d=[
              l[
                0
              ]
              +(v=p*mt), l[
                1
              ]
              -(m=p*yt)
            ]):(h=[
              l[
                0
              ]
              +g-k, l[
                1
              ]
              -c
            ], d=[
              l[
                0
              ]
              +g, l[
                1
              ]
              -c+k
            ]);
            break;
            case"right":u=g, p=g, "circle"===x?(h=[
              l[
                0
              ]
              +(y=u*mt), l[
                1
              ]
              -(f=u*yt)
            ], d=[
              l[
                0
              ]
              +(v=p*mt), l[
                1
              ]
              +(m=p*yt)
            ]):(h=[
              l[
                0
              ]
              +g, l[
                1
              ]
              -k
            ], d=[
              l[
                0
              ]
              +g, l[
                1
              ]
              +k
            ]);
            break;
            case"bottom-right":u=g, p=c, "circle"===x?(h=[
              l[
                0
              ]
              +(y=u*mt), l[
                1
              ]
              +(f=u*yt)
            ], d=[
              l[
                0
              ]
              +(m=p*yt), l[
                1
              ]
              +(v=p*mt)
            ]):(h=[
              l[
                0
              ]
              +g, l[
                1
              ]
              +c-k
            ], d=[
              l[
                0
              ]
              +g-k, l[
                1
              ]
              +c
            ]);
            break;
            case"bottom":u=c, p=c, "circle"===x?(h=[
              l[
                0
              ]
              +(f=u*yt), l[
                1
              ]
              +(y=u*mt)
            ], d=[
              l[
                0
              ]
              -(m=p*yt), l[
                1
              ]
              +(v=p*mt)
            ]):(h=[
              l[
                0
              ]
              -k, l[
                1
              ]
              +c
            ], d=[
              l[
                0
              ]
              +k, l[
                1
              ]
              +c
            ]);
            break;
            case"bottom-left":u=c, p=g, "circle"===x?(h=[
              l[
                0
              ]
              -(f=u*yt), l[
                1
              ]
              +(y=u*mt)
            ], d=[
              l[
                0
              ]
              -(v=p*mt), l[
                1
              ]
              +(m=p*yt)
            ]):(h=[
              l[
                0
              ]
              -g, l[
                1
              ]
              +c-k
            ], d=[
              l[
                0
              ]
              -g+k, l[
                1
              ]
              +c
            ]);
            break;
            case"left":u=g, p=g, "circle"===x?(h=[
              l[
                0
              ]
              -(y=u*mt), l[
                1
              ]
              +(f=u*yt)
            ], d=[
              l[
                0
              ]
              -(v=p*mt), l[
                1
              ]
              -(m=p*yt)
            ]):(h=[
              l[
                0
              ]
              -g, l[
                1
              ]
              -k
            ], d=[
              l[
                0
              ]
              -g, l[
                1
              ]
              +k
            ]);
            break;
            case"top-left":u=g, p=c, "circle"===x?(h=[
              l[
                0
              ]
              -(y=u*mt), l[
                1
              ]
              -(f=u*yt)
            ], d=[
              l[
                0
              ]
              -(m=p*yt), l[
                1
              ]
              -(v=p*mt)
            ]):(h=[
              l[
                0
              ]
              -g+k, l[
                1
              ]
              -c
            ], d=[
              l[
                0
              ]
              -g, l[
                1
              ]
              -c+k
            ]);
            break;
            default:h=[
              l[
                0
              ]
              -(f=(u=g)*yt), l[
                1
              ]
              -(y=u*mt)
            ], d=[
              l[
                0
              ]
              +(m=(p=g)*yt), l[
                1
              ]
              -(v=p*mt)
            ]
          }
          if(!1===a.clockwise){
            var M=[
              h[
                0
              ], h[
                1
              ]
            ];
            h=[
              d[
                0
              ], d[
                1
              ]
            ], d=[
              M[
                0
              ], M[
                1
              ]
            ]
          }
        }
        var C=[
          h[
            0
          ]
          -l[
            0
          ], h[
            1
          ]
          -l[
            1
          ]
        ], _=(u+r)/u, I=(p+r)/p;
        !1===a.clockwise&&(_=(p+r)/p, I=(u+r)/u);
        var P=b.scale([
          0, 0
        ], C, _), E=[
          l[
            0
          ]
          +P[
            0
          ], l[
            1
          ]
          +P[
            1
          ]
        ], B=[
          d[
            0
          ]
          -l[
            0
          ], d[
            1
          ]
          -l[
            1
          ]
        ], N=b.scale([
          0, 0
        ], B, I), L=[
          l[
            0
          ]
          +N[
            0
          ], l[
            1
          ]
          +N[
            1
          ]
        ];
        return t.startPoint={
          x:h[
            0
          ], y:h[
            1
          ]
        }, t.endPoint={
          x:d[
            0
          ], y:d[
            1
          ]
        }, t.controlPoints=[
          {
            x:E[
              0
            ], y:E[
              1
            ]
          }, {
            x:L[
              0
            ], y:L[
              1
            ]
          }
        ], t
      }, xt=function(t, e, i, o, n){
        var a=1e-4, r=[
        ], s=null==t?void 0:t.getPoint(e);
        if(!s)return{
          x:0, y:0, angle:0
        };
        if(e<a)r=t.getStartTangent().reverse();
        else if(e>.9999)r=t.getEndTangent();
        else{
          var l=null==t?void 0:t.getPoint(e+a);
          r.push([
            s.x, s.y
          ]), r.push([
            l.x, l.y
          ])
        }
        var h=Math.atan2(r[
          1
        ]
        [
          1
        ]
        -r[
          0
        ]
        [
          1
        ], r[
          1
        ]
        [
          0
        ]
        -r[
          0
        ]
        [
          0
        ]);
        if(h<0&&(h+=2*ut), i&&(s.x+=ft(h)*i, s.y+=pt(h)*i), o){
          var d=h-ut/2;
          h>.5*ut&&h<1.5*ut&&(d-=ut), s.x+=ft(d)*o, s.y+=pt(d)*o
        }
        var c={
          x:s.x, y:s.y, angle:h
        };
        return n?(h>.5*ut&&h<1.5*ut&&(h-=ut), (0, u.__assign)({
          rotate:h
        }, c)):c
      }, St=function t(e, i, o, n){
        if(!1===n(e, i, o))return!1;
        if(e&&e.children)for(var a=e.children.length-1;
        a>=0;
        a--)if(!t(e.children[
          a
        ], e, a, n))return!1;
        return!0
      }, wt=function t(e, i, o, n){
        if(e&&e.children)for(var a=e.children.length-1;
        a>=0;
        a--)if(!t(e.children[
          a
        ], e, a, n))return;
        return!1!==n(e, i, o)
      }, kt=function(t, e){
        "function"==typeof e&&St(t, null, -1, e)
      }, Mt=function(t, e){
        "function"==typeof e&&wt(t, null, -1, e)
      }, Ct=function(t, e){
        return e*(gt[
          t
        ]
        ||1)
      }, _t=function(t, e){
        var i=0, o=new RegExp("[一-龥]+");
        return t.split("").forEach((function(t){
          o.test(t)?i+=e:i+=Ct(t, e)
        })), [
          i, e
        ]
      }, It=function(t, e){
        return"number"!=typeof e||e<=0||e>=t.length?t:t.substring(0, e)+"..."
      }, Pt=function(t, e){
        var i=[
        ], o={
        }, n={
        };
        t.forEach((function(t){
          n[
            t.id
          ]
          =t
        })), t.forEach((function(t, e){
          var a=(0, h.clone)(t);
          a.itemType="combo", a.children=void 0, a.parentId===a.id?(console.warn("The parentId for combo ".concat(a.id, " can not be the same as the combo's id")), delete a.parentId):a.parentId&&!n[
            a.parentId
          ]
          &&(console.warn("The parent combo for combo ".concat(a.id, " does not exist!")), delete a.parentId);
          var r=o[
            a.id
          ];
          if(r){
            if(a.children=r.children, o[
              a.id
            ]
            =a, !(r=a).parentId)return void i.push(r);
            var s=o[
              r.parentId
            ];
            if(s)s.children?s.children.push(a):s.children=[
              a
            ];
            else{
              var l={
                id:r.parentId, children:[
                  r
                ]
              };
              o[
                r.parentId
              ]
              =l, o[
                a.id
              ]
              =a
            }
          }
          else if((0, h.isString)(t.parentId)){
            var d=o[
              t.parentId
            ];
            if(d)d.children?d.children.push(a):d.children=[
              a
            ], o[
              a.id
            ]
            =a;
            else{
              var c={
                id:t.parentId, children:[
                  a
                ]
              };
              o[
                c.id
              ]
              =c, o[
                a.id
              ]
              =a
            }
          }
          else i.push(a), o[
            a.id
          ]
          =a
        }));
        var a={
        };
        (e||[
        ]).forEach((function(t){
          a[
            t.id
          ]
          =t;
          var e=o[
            t.comboId
          ];
          if(e){
            var i={
              id:t.id, comboId:t.comboId
            };
            e.children?e.children.push(i):e.children=[
              i
            ], i.itemType="node", o[
              t.id
            ]
            =i
          }
        }));
        var r=0;
        return i.forEach((function(t){
          t.depth=r+10, kt(t, (function(t){
            var e, i=o[
              t.id
            ].itemType;
            e="node"===i?o[
              t.comboId
            ]
            :o[
              t.parentId
            ], t.depth=e&&"node"===i?r+1:r+10, r<t.depth&&(r=t.depth);
            var n=a[
              t.id
            ];
            return n&&(n.depth=t.depth), !0
          }))
        })), i
      }, Et=function(t, e, i){
        var o, n, a=t, r={
          root:{
            children:t
          }
        }, s=!1, l="root";
        (t||[
        ]).forEach((function(t){
          if(!s)return t.id===e?(n=t, "combo"===t.itemType?n.parentId=i:n.comboId=i, void(s=!0)):void kt(t, (function(t){
            var o;
            return r[
              t.id
            ]
            ={
              children:(null==t?void 0:t.children)||[
              ]
            }, a=null===(o=r[
              t.parentId||t.comboId||"root"
            ])||void 0===o?void 0:o.children, !t||!t.removed&&e!==t.id||!a||(l=t.parentId||t.comboId||"root", n=t, "combo"===t.itemType?n.parentId=i:n.comboId=i, s=!0, !1)
          }))
        }));
        var h=(a=null===(o=r[
          l
        ])||void 0===o?void 0:o.children)?a.indexOf(n):-1;
        if(h>-1&&a.splice(h, 1), s||(n={
          id:e, itemType:"node", comboId:i
        }, r[
          e
        ]
        ={
          children:void 0
        }), e){
          var d=!1;
          if(i){
            var c=0;
            (t||[
            ]).forEach((function(t){
              d||kt(t, (function(t){
                return i!==t.id||(d=!0, t.children?t.children.push(n):t.children=[
                  n
                ], c=t.depth, "node"===n.itemType?n.depth=c+2:n.depth=c+1, !1)
              }))
            }))
          }
          else i&&d||"node"===n.itemType||t.push(n);
          var g=n.depth;
          kt(n, (function(t){
            return"node"===t.itemType?g+=2:g+=1, t.depth=g, !0
          }))
        }
        return t
      }, Bt=function(t, e, i){
        var o={
          minX:1/0, minY:1/0, maxX:-1/0, maxY:-1/0, x:void 0, y:void 0, width:void 0, height:void 0, centerX:void 0, centerY:void 0
        };
        if(!t||0===t.length){
          var n=(null==i?void 0:i.getModel())||{
          }, a=n.x, r=n.y, s=n.fixSize, l=n.collapsed, d=n.fixCollapseSize, c=l?d:s, g=(0, h.isArray)(c)?c:[
            c, c
          ], u=g[
            0
          ], p=g[
            1
          ], f=[
            u/2, p/2
          ];
          return{
            minX:a-f[
              0
            ], minY:r-f[
              1
            ], maxX:a+f[
              0
            ], maxY:r+f[
              1
            ], x:a, y:r, width:u, height:p
          }
        }
        return t.forEach((function(t){
          var i=e.findById(t.id);
          if(i&&i.isVisible()){
            i.set("bboxCanvasCache", void 0);
            var n=i.getCanvasBBox();
            n.x&&o.minX>n.minX&&(o.minX=n.minX), n.y&&o.minY>n.minY&&(o.minY=n.minY), n.x&&o.maxX<n.maxX&&(o.maxX=n.maxX), n.y&&o.maxY<n.maxY&&(o.maxY=n.maxY)
          }
        })), o.x=(o.minX+o.maxX)/2, o.y=(o.minY+o.maxY)/2, o.width=o.maxX-o.minX, o.height=o.maxY-o.minY, o.centerX=(o.minX+o.maxX)/2, o.centerY=(o.minY+o.maxY)/2, "circle"===(null==i?void 0:i.getKeyShape().get("type"))&&(o.width=Math.hypot(o.height, o.width), o.height=o.width), Object.keys(o).forEach((function(t){
          o[
            t
          ]
          !==1/0&&o[
            t
          ]
          !==-1/0||(o[
            t
          ]
          =void 0)
        })), o
      }, Nt=function(t){
        var e=(0, h.isNumber)(t.x)||(0, h.isNumber)(t.y)||t.type||t.anchorPoints||t.size;
        return t.style&&(e=e||(0, h.isNumber)(t.style.r)||(0, h.isNumber)(t.style.width)||(0, h.isNumber)(t.style.height)||(0, h.isNumber)(t.style.rx)||(0, h.isNumber)(t.style.ry)), e
      }, Lt=function(t){
        var e={
        };
        return Object.keys(t).forEach((function(i){
          var o=t[
            i
          ];
          if("img"!==i||(0, h.isString)(o))if((0, h.isObject)(o)&&!(0, h.isArray)(o)){
            var n={
            };
            Object.keys(o).forEach((function(t){
              var e=o[
                t
              ];
              ("img"!==t||(0, h.isString)(e))&&(n[
                t
              ]
              =(0, h.clone)(e))
            })), e[
              i
            ]
            =n
          }
          else e[
            i
          ]
          =(0, h.clone)(o)
        })), e
      }, Tt=function(t){
        var e, i=t.animateCfg, o=t.callback;
        if(i)if(e=(0, h.clone)(i), i.callback){
          var n=i.callback;
          e.callback=function(){
            o(), n()
          }
        }
        else e.callback=o;
        else e={
          duration:500, callback:o
        };
        return e
      }, At=function(t){
        if(!t)return console.error("G6 Error Tips: the data must be defined"), !1;
        var e=t.nodes, i=t.edges, o=t.combos, n=void 0===o?[
        ]
        :o;
        if(!e&&!i){
          var a=!0;
          return kt(t, (function(t){
            return!!(0, h.isString)(t.id)||(a=!1, !1)
          })), a
        }
        var r=(e||[
        ]).find((function(t){
          return!(0, h.isString)(t.id)
        }));
        if(r)return console.warn("G6 Warning Tips: missing 'id' property, or %c".concat(r.id, "%c is not a string."), "font-size: 20px; color: red;", ""), !1;
        var s=(e||[
        ]).map((function(t){
          return t.id
        })), l=null==n?void 0:n.map((function(t){
          return t.id
        })), d=(0, u.__spreadArray)((0, u.__spreadArray)([
        ], s, !0), l, !0), c=(i||[
        ]).find((function(t){
          return!d.includes(t.source)||!d.includes(t.target)
        }));
        return!c||(console.warn("G6 Warning Tips: The source %c".concat(c.source, "%c or the target %c").concat(c.target, "%c of the edge do not exist in the nodes or combos."), "font-size: 20px; color: red;", "", "font-size: 20px; color: red;", ""), !1)
      };
      const Ft=function(){
        function t(t){
          this.graph=t, this.destroyed=!1, this.modes=t.get("modes")||{
            default:[
            ]
          }, this.formatModes(), this.mode=t.get("defaultMode")||"default", this.currentBehaves=[
          ], this.setMode(this.mode)
        }
        return t.prototype.formatModes=function(){
          var t=this.modes;
          (0, h.each)(t, (function(t){
            (0, h.each)(t, (function(e, i){
              (0, h.isString)(e)&&(t[
                i
              ]
              ={
                type:e
              })
            }))
          }))
        }, t.prototype.setBehaviors=function(t){
          var e, i=this.graph, o=this.modes[
            t
          ], n=[
          ];
          (0, h.each)(o||[
          ], (function(t){
            var o=c.getBehavior(t.type||t);
            o&&(e=new o(t))&&(e.bind(i), n.push(e))
          })), this.currentBehaves=n
        }, t.mergeBehaviors=function(t, e){
          return(0, h.each)(e, (function(e){
            t.indexOf(e)<0&&((0, h.isString)(e)&&(e={
              type:e
            }), t.push(e))
          })), t
        }, t.filterBehaviors=function(t, e){
          var i=[
          ];
          return t.forEach((function(t){
            var o="";
            o=(0, h.isString)(t)?t:t.type, e.indexOf(o)<0&&i.push(t)
          })), i
        }, t.prototype.setMode=function(t){
          var e=this.modes, i=this.graph, o=t;
          e[
            o
          ]
          &&(i.emit("beforemodechange", {
            mode:t
          }), (0, h.each)(this.currentBehaves, (function(t){
            t.delegate&&t.delegate.remove(), t.unbind(i)
          })), this.setBehaviors(o), i.emit("aftermodechange", {
            mode:t
          }), this.mode=t)
        }, t.prototype.getMode=function(){
          return this.mode
        }, t.prototype.manipulateBehaviors=function(e, i, o){
          var n, a=this;
          if(n=(0, h.isArray)(e)?e:[
            e
          ], (0, h.isArray)(i))return(0, h.each)(i, (function(e){
            a.modes[
              e
            ]
            ?a.modes[
              e
            ]
            =o?t.mergeBehaviors(a.modes[
              e
            ]
            ||[
            ], n):t.filterBehaviors(a.modes[
              e
            ]
            ||[
            ], n):o&&(a.modes[
              e
            ]
            =n)
          })), this;
          var r=i;
          return i||(r=this.mode), this.modes[
            r
          ]
          ||o&&(this.modes[
            r
          ]
          =n), this.modes[
            r
          ]
          =o?t.mergeBehaviors(this.modes[
            r
          ]
          ||[
          ], n):t.filterBehaviors(this.modes[
            r
          ]
          ||[
          ], n), this.formatModes(), this.setMode(this.mode), this
        }, t.prototype.updateBehavior=function(t, e, i){
          (0, h.isString)(t)&&(t={
            type:t
          });
          var o=[
          ];
          if(i&&i!==this.mode&&"default"!==i){
            if(!(o=this.modes[
              i
            ])||!o.length)return console.warn("Update behavior failed! There is no behaviors in this mode on the graph."), this;
            var n=o.length;
            for(r=0;
            r<n;
            r++){
              if((s=o[
                r
              ]).type===t.type||s===t.type)return s===t.type&&(s={
                type:s
              }), Object.assign(s, e), o[
                r
              ]
              =s, this;
              r===n-1&&console.warn("Update behavior failed! There is no such behavior in the mode")
            }
          }
          else{
            if(!(o=this.currentBehaves)||!o.length)return console.warn("Update behavior failed! There is no behaviors in this mode on the graph."), this;
            for(var a=o.length, r=0;
            r<a;
            r++){
              var s;
              if((s=o[
                r
              ]).type===t.type)return s.updateCfg(e), this;
              r===a-1&&console.warn("Update behavior failed! There is no such behavior in the mode")
            }
          }
          return this
        }, t.prototype.destroy=function(){
          this.graph=null, this.modes=null, this.currentBehaves=null, this.destroyed=!0
        }, t
      }
      ();
      var Dt=function(t){
        function e(e, i){
          var o=t.call(this, e, i)||this;
          return o.item=i.item, o.canvasX=i.canvasX, o.canvasY=i.canvasY, o.wheelDelta=i.wheelDelta, o.detail=i.detail, o
        }
        return(0, u.__extends)(e, t), e
      }
      (i(930577).Event), Ot=function(t){
        return"".concat(t, "-").concat(Math.random()).concat(Date.now())
      }, zt=function(t){
        if((0, h.isArray)(t))switch(t.length){
          case 4:return t;
          case 3:return t.push(t[
            1
          ]), t;
          case 2:return t.concat(t);
          case 1:return[
            t[
              0
            ], t[
              0
            ], t[
              0
            ], t[
              0
            ]
          ];
          default:return[
            0, 0, 0, 0
          ]
        }
        if((0, h.isNumber)(t))return[
          t, t, t, t
        ];
        if((0, h.isString)(t)){
          var e=parseInt(t, 10);
          return[
            e, e, e, e
          ]
        }
        return[
          0, 0, 0, 0
        ]
      }, Yt=function(t){
        var e=new Dt(t.type, t);
        return e.clientX=t.clientX, e.clientY=t.clientY, e.x=t.x, e.y=t.y, e.target=t.target, e.currentTarget=t.currentTarget, e.bubbles=!0, e.item=t.item, e
      }, Xt=function(t){
        if(!t)return!1;
        for(var e=[
          1, 0, 0, 0, 1, 0, 0, 0, 1
        ], i=0;
        i<9;
        i++)if(t[
          i
        ]
        !==e[
          i
        ])return!0;
        return!1
      }, Wt=function(t){
        return Number.isNaN(Number(t))
      }, Rt=function(t){
        for(var e=1/0, i=-1/0, o=1/0, n=-1/0, a=0;
        a<t.length;
        a++){
          var r=t[
            a
          ].getBBox(), s=r.minX, l=r.minY, h=r.maxX, d=r.maxY;
          s<e&&(e=s), l<o&&(o=l), h>i&&(i=h), d>n&&(n=d)
        }
        return{
          x:Math.floor(e), y:Math.floor(o), width:Math.ceil(i)-Math.floor(e), height:Math.ceil(n)-Math.floor(o), minX:e, minY:o, maxX:i, maxY:n
        }
      }, Ut=function(t, e, i, o, n){
        void 0===e&&(e=15), void 0===i&&(i="quadratic"), void 0===o&&(o=void 0), void 0===n&&(n=void 0);
        for(var a=t.length, r=2*e, s=[
          "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"
        ], l={
        }, h=[
        ], d={
        }, c=0;
        c<a;
        c++){
          var g=t[
            c
          ], u=g.source, p=g.target, f="".concat(u, "-").concat(p);
          if(!h[
            c
          ]){
            l[
              f
            ]
            ||(l[
              f
            ]
            =[
            ]), h[
              c
            ]
            =!0, l[
              f
            ].push(g);
            for(var y=0;
            y<a;
            y++)if(c!==y){
              var m=t[
                y
              ], v=m.source, b=m.target;
              h[
                y
              ]
              ||(u===b&&p===v?(l[
                f
              ].push(m), h[
                y
              ]
              =!0, d[
                "".concat(v, "|").concat(b, "|").concat(l[
                  f
                ].length-1)
              ]
              =!0):u===v&&p===b&&(l[
                f
              ].push(m), h[
                y
              ]
              =!0))
            }
          }
        }
        for(var x in l)for(var S=l[
          x
        ], w=S.length, k=0;
        k<w;
        k++){
          var M=S[
            k
          ];
          if(M.source!==M.target)if(1===w&&o&&M.source!==M.target)M.type=o;
          else{
            M.type=i;
            var C=(k%2==0?1:-1)*(d[
              "".concat(M.source, "|").concat(M.target, "|").concat(k)
            ]
            ?-1:1);
            M.curveOffset=w%2==1?C*Math.ceil(k/2)*r:C*(Math.floor(k/2)*r+e)
          }
          else n&&(M.type=n), M.loopCfg={
            position:s[
              k%8
            ], dist:20*Math.floor(k/8)+50
          }
        }
        return t
      }, jt=i(247114);
      const Gt=function(){
        function t(t){
          this.destroyed=!1, this.graph=t, this.destroyed=!1
        }
        return t.prototype.getViewCenter=function(){
          var t=this.getFormatPadding(), e=this.graph, i=this.graph.get("width"), o=e.get("height");
          return{
            x:(i-t[
              1
            ]
            -t[
              3
            ])/2+t[
              3
            ], y:(o-t[
              0
            ]
            -t[
              2
            ])/2+t[
              0
            ]
          }
        }, t.prototype.fitCenter=function(t, e){
          var i, o=this.graph, n=o.get("group"), a=o.getNodes();
          if(a.length>o.get("optimizeThreshold")){
            var r=1/0, s=1/0, l=-1/0, h=-1/0;
            a.forEach((function(t){
              var e=t.getModel(), i=e.x, o=e.y;
              r>i&&(r=i), s>o&&(s=o), l<i&&(l=i), h<o&&(h=o)
            }));
            var d=n.getMatrix()||[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ], c=I({
              x:r, y:s
            }, d), g=c.x, u=c.y, p=I({
              x:l, y:h
            }, d), f=p.x, y=p.y;
            i={
              minX:g, maxX:f, minY:u, maxY:y, width:f-g, height:y-u, x:g, y:u
            }
          }
          else i=n.getCanvasBBox();
          if(0!==i.width&&0!==i.height){
            var m=this.getViewCenter(), v=i.x+i.width/2, b=i.y+i.height/2;
            o.translate(m.x-v, m.y-b, t, e)
          }
        }, t.prototype.animatedFitView=function(t, e, i, o, n, a, r, s){
          var l=this.graph;
          i=i||{
            duration:500, easing:"easeCubic"
          };
          var h=o.x+n.x-a.x-o.minX, d=o.y+n.y-a.y-o.minY;
          if(!Wt(h)&&!Wt(d)){
            var c=(0, jt.pd)([
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ], [
              [
                "t", h, d
              ]
            ]);
            if(s){
              var g=l.get("minZoom"), u=l.get("maxZoom"), p=r;
              g&&r<g?(p=g, console.warn("fitview failed, ratio out of range, ratio: %f", r, "graph minzoom has been used instead")):u&&r>u&&(p=u, console.warn("fitview failed, ratio out of range, ratio: %f", r, "graph maxzoom has been used instead"));
              var f=(0, jt.pd)(c, [
                [
                  "t", -n.x, -n.y
                ], [
                  "s", p, p
                ], [
                  "t", n.x, n.y
                ]
              ]), y=Tt({
                animateCfg:i, callback:function(){
                  t.setMatrix(f), l.emit("viewportchange", {
                    action:"translate", matrix:c
                  }), l.emit("viewportchange", {
                    action:"zoom", matrix:f
                  })
                }
              });
              t.stopAnimate(), t.setMatrix(e), t.animate((function(t){
                return{
                  matrix:et(e, f, t)
                }
              }), y)
            }
            else{
              var m=Tt({
                animateCfg:i, callback:function(){
                  l.emit("viewportchange", {
                    action:"translate", matrix:c
                  })
                }
              });
              t.animate((function(t){
                return{
                  matrix:et(e, c, t)
                }
              }), m)
            }
          }
        }, t.prototype.fitView=function(t, e){
          var i, o=this.graph, n=this.getFormatPadding(), a=o.get("width"), r=o.get("height"), s=o.get("group"), l=s.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ];
          s.resetMatrix();
          var h=o.getNodes();
          if(h.length>o.get("optimizeThreshold")){
            var d=1/0, c=1/0, g=-1/0, u=-1/0;
            h.forEach((function(t){
              var e=t.getModel(), i=e.x, o=e.y;
              d>i&&(d=i), c>o&&(c=o), g<i&&(g=i), u<o&&(u=o)
            })), i={
              minX:d, maxX:g, minY:c, maxY:u, width:g-d, height:u-c, x:d, y:c
            }
          }
          else i=s.getCanvasBBox();
          if(0!==i.width&&0!==i.height){
            var p=this.getViewCenter(), f={
              x:i.x+i.width/2, y:i.y+i.height/2
            }, y=(a-n[
              1
            ]
            -n[
              3
            ])/i.width, m=(r-n[
              0
            ]
            -n[
              2
            ])/i.height, v=y;
            if(y>m&&(v=m), t)this.animatedFitView(s, l, e, i, p, f, v, !0);
            else{
              var b=p.x-f.x, x=p.y-f.y;
              if(Wt(b)||Wt(x))return;
              o.translate(b, x), o.zoom(v, p)||console.warn("zoom failed, ratio out of range, ratio: %f", v)
            }
          }
        }, t.prototype.fitViewByRules=function(t, e, i){
          var o, n=t.onlyOutOfViewPort, a=void 0!==n&&n, r=t.direction, s=void 0===r?"both":r, l=t.ratioRule, h=void 0===l?"min":l, d=this.graph, c=this.getFormatPadding(), g=d.get("width"), u=d.get("height"), p=d.get("group"), f=p.getMatrix()||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ];
          p.resetMatrix();
          var y=d.getNodes();
          if(y.length>d.get("optimizeThreshold")){
            var m=1/0, v=1/0, b=-1/0, x=-1/0;
            y.forEach((function(t){
              var e=t.getModel(), i=e.x, o=e.y;
              m>i&&(m=i), v>o&&(v=o), b<i&&(b=i), x<o&&(x=o)
            })), o={
              minX:m, maxX:b, minY:v, maxY:x, width:b-m, height:x-v, x:m, y:v
            }
          }
          else o=p.getCanvasBBox();
          if(0!==o.width&&0!==o.height){
            var S, w=this.getViewCenter(), k={
              x:o.x+o.width/2, y:o.y+o.height/2
            }, M=(g-c[
              1
            ]
            -c[
              3
            ])/o.width, C=(u-c[
              0
            ]
            -c[
              2
            ])/o.height;
            if(S="x"===s?M:"y"===s?C:"max"===h?Math.max(M, C):Math.min(M, C), a&&(S=S<1?S:1), e)this.animatedFitView(p, f, i, o, w, k, S, !0);
            else{
              var _=d.getZoom()*S, I=d.get("minZoom");
              _<I&&(_=I, console.warn("fitview failed, ratio out of range, ratio: %f", S, "graph minzoom has been used instead")), d.translate(w.x-k.x, w.y-k.y), d.zoomTo(_, w)
            }
          }
        }, t.prototype.getFormatPadding=function(){
          var t=this.graph.get("fitViewPadding");
          return zt(t)
        }, t.prototype.focusPoint=function(t, e, i){
          var o=this, n=this.getViewCenter(), a=this.getPointByCanvas(n.x, n.y), r=this.graph.get("group").getMatrix();
          if(r||(r=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), e){
            var s=(a.x-t.x)*r[
              0
            ], l=(a.y-t.y)*r[
              4
            ], h=0, d=0, c=0, g=0;
            this.graph.get("canvas").animate((function(t){
              c=s*t, g=l*t, o.graph.translate(c-h, g-d), h=c, d=g
            }), (0, u.__assign)({
            }, i))
          }
          else this.graph.translate((a.x-t.x)*r[
            0
          ], (a.y-t.y)*r[
            4
          ])
        }, t.prototype.getPointByCanvas=function(t, e){
          var i=this.graph.get("group").getMatrix();
          return i||(i=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), P({
            x:t, y:e
          }, i)
        }, t.prototype.getPointByClient=function(t, e){
          var i=this.graph.get("canvas").getPointByClient(t, e);
          return this.getPointByCanvas(i.x, i.y)
        }, t.prototype.getClientByPoint=function(t, e){
          var i=this.graph.get("canvas"), o=this.getCanvasByPoint(t, e), n=i.getClientByPoint(o.x, o.y);
          return{
            x:n.x, y:n.y
          }
        }, t.prototype.getCanvasByPoint=function(t, e){
          var i=this.graph.get("group").getMatrix();
          return i||(i=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), I({
            x:t, y:e
          }, i)
        }, t.prototype.focus=function(t, e, i){
          if((0, h.isString)(t)&&(t=this.graph.findById(t)), t){
            var o=0, n=0;
            if(t.getType&&"edge"===t.getType()){
              var a=t.getSource().get("group").getMatrix(), r=t.getTarget().get("group").getMatrix();
              a&&r?(o=(a[
                6
              ]
              +r[
                6
              ])/2, n=(a[
                7
              ]
              +r[
                7
              ])/2):(a||r)&&(o=a?a[
                6
              ]
              :r[
                6
              ], n=a?a[
                7
              ]
              :r[
                7
              ])
            }
            else{
              var s=t.get("group").getMatrix();
              s||(s=[
                1, 0, 0, 0, 1, 0, 0, 0, 1
              ]), o=s[
                6
              ], n=s[
                7
              ]
            }
            this.focusPoint({
              x:o, y:n
            }, e, i)
          }
        }, t.prototype.focusItems=function(t, e, i, o){
          if(t.length){
            var n=this.graph, a=this.getFormatPadding(), r=n.get("width"), s=n.get("height"), l=n.get("group"), h=l.getMatrix()||[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ];
            l.resetMatrix();
            for(var d={
              x:0, y:0, minX:Number.MAX_SAFE_INTEGER, minY:Number.MAX_SAFE_INTEGER, maxX:Number.MIN_SAFE_INTEGER, maxY:Number.MIN_SAFE_INTEGER, width:0, height:0
            }, c=0, g=t;
            c<g.length;
            c++){
              var u=g[
                c
              ].getBBox();
              u.minX<d.minX&&(d.minX=u.minX), u.minY<d.minY&&(d.minY=u.minY), u.maxX>d.maxX&&(d.maxX=u.maxX), u.maxY>d.maxY&&(d.maxY=u.maxY)
            }
            if(d.x=d.minX, d.y=d.minY, d.width=d.maxX-d.minX, d.height=d.maxY-d.minY, 0!==d.width&&0!==d.height){
              var p=this.getViewCenter(), f={
                x:d.x+d.width/2, y:d.y+d.height/2
              }, y=(r-a[
                1
              ]
              -a[
                3
              ])/d.width, m=(s-a[
                0
              ]
              -a[
                2
              ])/d.height, v=y;
              y>m&&(v=m), i?this.animatedFitView(l, h, o, d, p, f, v, e):(n.translate(p.x-f.x, p.y-f.y), e&&!n.zoom(v, p)&&console.warn("zoom failed, ratio out of range, ratio: %f", v))
            }
          }
        }, t.prototype.changeSize=function(t, e){
          var i=this.graph;
          if(!(0, h.isNumber)(t)||!(0, h.isNumber)(e))throw Error("invalid canvas width & height, please make sure width & height type is number");
          i.set({
            width:t, height:e
          }), i.get("canvas").changeSize(t, e), i.get("plugins").forEach((function(t){
            t.get("gridContainer")&&t.positionInit()
          }))
        }, t.prototype.destroy=function(){
          this.graph=null, this.destroyed=!1
        }, t
      }
      ();
      function Jt(t){
        return(Jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      function Vt(t){
        if("string"!=typeof t)return t;
        var e=function(t){
          if("string"!=typeof t)return t;
          try{
            return JSON.parse(t.trim())
          }
          catch(e){
            return t.trim()
          }
        }, i=e(t);
        if("string"!=typeof i)return i;
        for(var o=function(t){
          return t[
            t.length-1
          ]
        }, n=t.trim(), a=[
        ], r=[
        ], s=function(){
          for(var t=[
          ], e=0;
          e<arguments.length;
          e++)t[
            e
          ]
          =arguments[
            e
          ];
          return t.some((function(t){
            return o(r)===t
          }))
        }, l=null, h=0, d="";
        h<n.length;
        ){
          var c=n[
            h
          ], g=s('"', "'");
          if(g||c.trim()){
            var u="\\"===n[
              h-1
            ], p=s("}"), f=s("]"), y=s(","), m=o(a);
            if(g)if(o(r)!==c||u)d+=c;
            else{
              r.pop();
              var v=e(d);
              m.push(v), l=v, d=""
            }
            else if(f&&","===c)d&&(m.push(e(d)), d="");
            else if(p&&":"===c)r.push(","), d&&(m.push(d), d="");
            else if(y&&","===c)d&&(m.push(e(d)), d=""), r.pop();
            else if("}"===c&&(p||y)){
              d&&(m.push(e(d)), d=""), y&&r.pop();
              for(var b={
              }, x=1;
              x<m.length;
              x+=2)b[
                m[
                  x-1
                ]
              ]
              =m[
                x
              ];
              a.pop(), a.length&&o(a).push(b), r.pop(), l=b
            }
            else"]"===c&&f?(d&&(m.push(e(d)), d=""), a.pop(), a.length&&o(a).push(m), r.pop(), l=m):"{"===c?(a.push([
            ]), r.push("}")):"["===c?(a.push([
            ]), r.push("]")):'"'===c?r.push('"'):"'"===c?r.push("'"):d+=c;
            h+=1
          }
          else h+=1
        }
        return l||d
      }
      function Kt(t, e){
        var i={
        }, o=t.getAttributeNames&&t.getAttributeNames()||[
        ], n=t.children&&Array.from(t.children).map((function(t){
          return Kt(t, e)
        })), a={
        }, r=t.tagName?t.tagName.toLowerCase():"group";
        return"text"===r&&(i.text=t.innerText), a.type=r, "img"===r&&(a.type="image"), Array.from(o).forEach((function(e){
          var o=e.split("-").reduce((function(t, e){
            return t+e.charAt(0).toUpperCase()+e.slice(1)
          })), n=t.getAttribute(e);
          try{
            if("style"===o||"attrs"===o){
              var r=Vt(n);
              i=(0, u.__assign)((0, u.__assign)({
              }, i), r)
            }
            else a[
              o
            ]
            =Vt(n)
          }
          catch(t){
            if("style"===o)throw t;
            a[
              o
            ]
            =n
          }
        })), a.attrs=i, e&&e.style&&a.name&&"object"===Jt(e.style[
          a.name
        ])&&(a.attrs=(0, u.__assign)((0, u.__assign)({
        }, a.attrs), e.style[
          a.name
        ])), e&&e.style&&a.keyshape&&(a.attrs=(0, u.__assign)((0, u.__assign)({
        }, a.attrs), e.style)), n.length&&(a.children=n), a
      }
      function Zt(t, e){
        var i;
        void 0===e&&(e={
          x:0, y:0
        });
        var o=(0, u.__assign)({
          x:0, y:0, width:0, height:0
        }, e);
        if(null===(i=t.children)||void 0===i?void 0:i.length){
          var n=t.attrs, a=void 0===n?{
          }
          :n, r=a.marginTop, s=(0, u.__assign)({
          }, e);
          r&&(s.y+=r);
          for(var l=0;
          l<t.children.length;
          l++){
            t.children[
              l
            ].attrs.key="".concat(a.key||"root", " -").concat(l, " ");
            var h=Zt(t.children[
              l
            ], s);
            if(h.bbox){
              var d=h.bbox;
              "inline"===h.attrs.next?s.x+=h.bbox.width:s.y+=h.bbox.height, d.width+d.x>o.width&&(o.width=d.width+d.x), d.height+d.y>o.height&&(o.height=d.height+d.y)
            }
          }
        }
        return t.bbox=function(t, e, i){
          var o, n, a=t.attrs, r=void 0===a?{
          }
          :a, s={
            x:e.x||0, y:e.y||0, width:i.width||0, height:i.height||0
          };
          switch(t.type){
            case"maker":case"circle":r.r&&(n=2*r.r, o=2*r.r);
            break;
            case"text":r.text&&(n=_t(r.text, r.fontSize||12)[
              0
            ], o=16, s.y+=o, s.height=o, s.width=n, t.attrs=(0, u.__assign)({
              fontSize:12, fill:"#000"
            }, r));
            break;
            default:r.width&&(n=r.width), r.height&&(o=r.height)
          }
          return o>=0&&(s.height=o), n>=0&&(s.width=n), r.marginTop&&(s.y+=r.marginTop), r.marginLeft&&(s.x+=r.marginLeft), s
        }
        (t, e, o), t.attrs=(0, u.__assign)((0, u.__assign)({
        }, t.attrs), t.bbox), t
      }
      function qt(t, e){
        var i, o, n, a, r=(t||{
        }).type, s=((null==e?void 0:e.attrs)||{
        }).key;
        if(s&&t&&(t.attrs.key=s), !t&&e)return{
          action:"delete", val:e, type:r, key:s
        };
        if(t&&!e)return{
          action:"add", val:t, type:r
        };
        if(!t&&!e)return{
          action:"same", type:r
        };
        var l=[
        ];
        if((null===(i=t.children)||void 0===i?void 0:i.length)>0||(null===(o=e.children)||void 0===o?void 0:o.length)>0)for(var h=Math.max(null===(n=t.children)||void 0===n?void 0:n.length, null===(a=e.children)||void 0===a?void 0:a.length), d=e.children||[
        ], c=t.children||[
        ], g=0;
        g<h;
        g+=1)l.push(qt(c[
          g
        ], d[
          g
        ]));
        var u=Object.keys(e.attrs), p=Object.keys(t.attrs);
        return e.type!==t.type?{
          action:"restructure", nowTarget:t, formerTarget:e, key:s, children:l
        }
        :u.filter((function(t){
          return"children"!==t
        })).some((function(i){
          return t.attrs[
            i
          ]
          !==e.attrs[
            i
          ]
          ||!p.includes(i)
        }))?{
          action:"change", val:t, children:l, type:r, key:s
        }
        :{
          action:"same", children:l, type:r, key:s
        }
      }
      function Ht(t){
        var e={
        }, i=function(e){
          var i=function(t){
            return function(e){
              for(var i=t.length, o=[
              ], n=0, a="";
              n<i;
              )if("{"===t[
                n
              ]
              &&"{"===t[
                n+1
              ])o.push(a), a="", n+=2;
              else if("}"===t[
                n
              ]
              &&"}"===t[
                n+1
              ]){
                if(o.length){
                  var r=o.pop();
                  a=(0, h.get)(e, a, r.endsWith("=")?'"{'.concat(a, '}"'):a), o.push(r+a)
                }
                n+=2, a=""
              }
              else a+=t[
                n
              ], n+=1;
              return o.push(a), o.map((function(t, e){
                return o[
                  e-1
                ]
                &&o[
                  e-1
                ].endsWith("=")?'"{'.concat(t, '}"'):t
              })).join("")
            }
          }
          ("function"==typeof t?t(e):t)(e), o=document.createElement("div");
          o.innerHTML=i;
          var n=Zt(Kt(o.children[
            0
          ], e));
          return o.remove(), n
        };
        return{
          draw:function(t, o){
            var n=i(t), a=o;
            return function t(e){
              var i=e.attrs, n=void 0===i?{
              }
              :i, r=e.bbox, s=e.type, l=e.children, h=(0, u.__rest)(e, [
                "attrs", "bbox", "type", "children"
              ]);
              if("group"!==e.type){
                var d=o.addShape(e.type, (0, u.__assign)({
                  attrs:n, origin:{
                    bbox:r, type:s, children:l
                  }
                }, h));
                e.keyshape&&(a=d)
              }
              e.children&&e.children.forEach((function(e){
                return t(e)
              }))
            }
            (n), e[
              t.id
            ]
            =[
              n
            ], a
          }, update:function(t, o){
            e[
              t.id
            ]
            ||(e[
              t.id
            ]
            =[
            ]);
            var n=o.getContainer(), a=n.get("children"), r=i(t), s=qt(r, e[
              t.id
            ].pop()), l=function t(e){
              var i;
              "group"!==e.type&&n.addShape(e.type, {
                attrs:e.attrs
              }), (null===(i=e.children)||void 0===i?void 0:i.length)&&e.children.map((function(e){
                return t(e)
              }))
            }, h=function t(e){
              var i, o=a.find((function(t){
                return t.attrs.key===e.attrs.key
              }));
              o&&n.removeChild(o), (null===(i=e.children)||void 0===i?void 0:i.length)&&e.children.map((function(e){
                return t(e)
              }))
            };
            !function t(e){
              var i=e.key;
              if("group"!==e.type){
                var n=a.find((function(t){
                  return t.attrs.key===i
                }));
                switch(e.action){
                  case"change":if(n){
                    var r=e.val.keyshape?o.getOriginStyle():{
                    };
                    n.attr((0, u.__assign)((0, u.__assign)({
                    }, r), e.val.attrs))
                  }
                  break;
                  case"add":l(e.val);
                  break;
                  case"delete":h(e.val);
                  break;
                  case"restructure":h(e.formerTarget), l(e.nowTarget)
                }
              }
              e.children&&e.children.forEach((function(e){
                return t(e)
              }))
            }
            (s), e[
              t.id
            ].push(r)
          }, getAnchorPoints:function(){
            return[
              [
                0, .5
              ], [
                1, .5
              ], [
                .5, 1
              ], [
                .5, 0
              ]
            ]
          }
        }
      }
      var Qt={
      };
      function $t(t){
        return Qt[
          t
        ]
        ||(Qt[
          t
        ]
        =(0, h.upperFirst)(t)), Qt[
          t
        ]
      }
      var te={
        defaultShapeType:"defaultType", className:null, getShape:function(t){
          var e=this;
          return e[
            t
          ]
          ||e[
            e.defaultShapeType
          ]
          ||e[
            "simple-circle"
          ]
        }, draw:function(t, e, i){
          var o=this.getShape(t);
          i.shapeMap={
          };
          var n=o.draw(e, i);
          return o.afterDraw&&o.afterDraw(e, i, n), n
        }, baseUpdate:function(t, e, i, o){
          var n, a, r=this.getShape(t);
          r.update&&(r.mergeStyle=null===(n=r.getOptions)||void 0===n?void 0:n.call(r, e, o), null===(a=r.update)||void 0===a||a.call(r, e, i, o)), r.afterUpdate&&r.afterUpdate(e, i)
        }, setState:function(t, e, i, o){
          this.getShape(t).setState(e, i, o)
        }, shouldUpdate:function(t){
          return!!this.getShape(t).update
        }, getControlPoints:function(t, e){
          return this.getShape(t).getControlPoints(e)
        }, getAnchorPoints:function(t, e){
          return this.getShape(t).getAnchorPoints(e)
        }
      }, ee={
        options:{
        }, draw:function(t, e){
          return this.drawShape(t, e)
        }, drawShape:function(){
        }, afterDraw:function(){
        }, afterUpdate:function(){
        }, setState:function(){
        }, getControlPoints:function(t){
          return t.controlPoints
        }, getAnchorPoints:function(t){
          var e=this.options.anchorPoints;
          return t.anchorPoints||e
        }
      }, ie=function(){
        function t(){
        }
        return t.registerFactory=function(e, i){
          var o=$t(e), n=te, a=(0, u.__assign)((0, u.__assign)({
          }, n), i);
          return t[
            o
          ]
          =a, a.className=o, a
        }, t.getFactory=function(e){
          return t[
            $t(e)
          ]
        }, t.registerNode=function(e, i, o){
          var n, a=t.Node;
          if("string"==typeof i||"function"==typeof i){
            var r=Ht(i);
            n=(0, u.__assign)((0, u.__assign)({
            }, a.getShape("single-node")), r)
          }
          else if(i.jsx){
            r=Ht(i.jsx);
            n=(0, u.__assign)((0, u.__assign)((0, u.__assign)({
            }, a.getShape("single-node")), r), i)
          }
          else{
            a.getShape(o);
            var s=o?a.getShape(o):ee;
            n=(0, u.__assign)((0, u.__assign)({
            }, s), i)
          }
          return n.type=e, n.itemType="node", a[
            e
          ]
          =n, n
        }, t.registerEdge=function(e, i, o){
          var n=t.Edge, a=o?n.getShape(o):ee, r=(0, u.__assign)((0, u.__assign)({
          }, a), i);
          return r.type=e, r.itemType="edge", n[
            e
          ]
          =r, r
        }, t.registerCombo=function(e, i, o){
          var n=t.Combo, a=o?n.getShape(o):ee, r=(0, u.__assign)((0, u.__assign)({
          }, a), i);
          return r.type=e, r.itemType="combo", n[
            e
          ]
          =r, r
        }, t
      }
      ();
      const oe=ie;
      ie.registerFactory("node", {
        defaultShapeType:"circle"
      }), ie.registerFactory("edge", {
        defaultShapeType:"line"
      }), ie.registerFactory("combo", {
        defaultShapeType:"circle"
      });
      var ne="bboxCache", ae="bboxCanvasCache";
      const re=function(){
        function t(t){
          this._cfg={
          }, this.destroyed=!1, this.optimize=!1;
          var e={
            id:void 0, type:"item", model:{
            }, group:void 0, animate:!1, visible:!0, locked:!1, event:!0, keyShape:void 0, states:[
            ]
          };
          this._cfg=Object.assign(e, this.getDefaultCfg(), t);
          var i=this.get("model"), o=i.id, n=this.get("type");
          void 0===o?o=Ot(n):"string"!=typeof o&&(o=String(o)), this.get("model").id=o, this.set("id", o);
          var a=t.group;
          a&&(a.set("item", this), a.set("id", o)), this.init(), this.draw();
          var r=i.shape||i.type||("edge"===n?"line":"circle"), s=this.get("shapeFactory");
          if(s&&s[
            r
          ]){
            var l=s[
              r
            ].options;
            if(l&&l.stateStyles){
              var d=this.get("styles")||i.stateStyles;
              d=(0, h.deepMix)({
              }, l.stateStyles, d), this.set("styles", d)
            }
          }
        }
        return t.prototype.calculateBBox=function(){
          var t=this.get("keyShape"), e=this.get("group"), i=vt(t, e);
          return i.x=i.minX, i.y=i.minY, i.width=i.maxX-i.minX, i.height=i.maxY-i.minY, i.centerX=(i.minX+i.maxX)/2, i.centerY=(i.minY+i.maxY)/2, i
        }, t.prototype.calculateCanvasBBox=function(){
          var t=this.get("keyShape"), e=this.get("group"), i=vt(t, e);
          return i.x=i.minX, i.y=i.minY, i.width=i.maxX-i.minX, i.height=i.maxY-i.minY, i.centerX=(i.minX+i.maxX)/2, i.centerY=(i.minY+i.maxY)/2, i
        }, t.prototype.drawInner=function(){
          var t=this, e=t.get("shapeFactory"), i=t.get("group"), o=t.get("model");
          i.clear();
          var n=o.visible;
          if(void 0===n||n||t.changeVisibility(n), e){
            t.updatePosition(o);
            var a=t.getShapeCfg(o), r=a.type, s=e.draw(r, a, i);
            s&&(t.set("keyShape", s), s.set("isKeyShape", !0), s.set("draggable", !0)), this.setOriginStyle(), this.set("currentShape", r), this.restoreStates(e, r)
          }
        }, t.prototype.setOriginStyle=function(){
          var t=this.get("group"), e=t.get("children"), i=this.getKeyShape(), o=this, n=i.get("name");
          if(this.get("originStyle")){
            var a=this.get("originStyle");
            n&&!a[
              n
            ]
            &&(a[
              n
            ]
            ={
            });
            var r=this.getCurrentStatesStyle(), s=function(t){
              var i=e[
                t
              ], s=i.get("name"), l=i.attr();
              if(s&&s!==n){
                var d=r[
                  s
                ];
                a[
                  s
                ]
                ||(a[
                  s
                ]
                ={
                }), d?Object.keys(l).forEach((function(t){
                  var e=l[
                    t
                  ];
                  e!==d[
                    t
                  ]
                  &&(a[
                    s
                  ]
                  [
                    t
                  ]
                  =e)
                })):a[
                  s
                ]
                ="image"!==i.get("type")?(0, h.clone)(l):o.getShapeStyleByName(s)
              }
              else{
                var c=i.attr(), g={
                };
                Object.keys(r).forEach((function(t){
                  var e=r[
                    t
                  ];
                  t!==n&&(0, h.isPlainObject)(e)||(g[
                    t
                  ]
                  =e)
                })), Object.keys(c).forEach((function(t){
                  var e=c[
                    t
                  ];
                  g[
                    t
                  ]
                  !==e&&(n?a[
                    n
                  ]
                  [
                    t
                  ]
                  =e:a[
                    t
                  ]
                  =e)
                }))
              }
            };
            for(d=0;
            d<e.length;
            d++)s(d);
            delete a.path, delete a.matrix, delete a.x, delete a.y, a[
              n
            ]
            &&(delete a[
              n
            ].x, delete a[
              n
            ].y, delete a[
              n
            ].matrix, delete a[
              n
            ].path), o.set("originStyle", a)
          }
          else{
            for(var l={
            }, d=0;
            d<e.length;
            d++){
              var c=e[
                d
              ], g=c.get("type"), u=c.get("name");
              if(u&&u!==n)l[
                u
              ]
              ="image"!==g?(0, h.clone)(c.attr()):o.getShapeStyleByName(u), "text"===g&&l[
                u
              ]
              &&(delete l[
                u
              ].x, delete l[
                u
              ].y, delete l[
                u
              ].matrix);
              else{
                var p=o.getShapeStyleByName();
                if(delete p.path, delete p.matrix, n)if(u)l[
                  n
                ]
                =p;
                else{
                  var f=Ot("shape");
                  c.set("name", f), t.shapeMap[
                    f
                  ]
                  =c, l[
                    f
                  ]
                  ="image"!==g?(0, h.clone)(c.attr()):o.getShapeStyleByName(u)
                }
                else Object.assign(l, p)
              }
            }
            o.set("originStyle", l)
          }
        }, t.prototype.restoreStates=function(t, e){
          var i=this, o=i.get("states");
          (0, h.each)(o, (function(o){
            t.setState(e, o, !0, i)
          }))
        }, t.prototype.init=function(){
          var t=oe.getFactory(this.get("type"));
          this.set("shapeFactory", t)
        }, t.prototype.get=function(t){
          return this._cfg[
            t
          ]
        }, t.prototype.set=function(t, e){
          (0, h.isPlainObject)(t)?this._cfg=(0, u.__assign)((0, u.__assign)({
          }, this._cfg), t):this._cfg[
            t
          ]
          =e
        }, t.prototype.getDefaultCfg=function(){
          return{
          }
        }, t.prototype.clearCache=function(){
          this.set(ne, null), this.set(ae, null)
        }, t.prototype.beforeDraw=function(){
        }, t.prototype.afterDraw=function(){
        }, t.prototype.afterUpdate=function(){
        }, t.prototype.draw=function(){
          this.beforeDraw(), this.drawInner(), this.afterDraw()
        }, t.prototype.getShapeStyleByName=function(t){
          var e, i=this.get("group");
          if(e=t?i.shapeMap[
            t
          ]
          ||i.find((function(e){
            return e.get("name")===t
          })):this.getKeyShape()){
            var o={
            };
            return(0, h.each)(e.attr(), (function(t, e){
              ("img"!==e||(0, h.isString)(t))&&(o[
                e
              ]
              =t)
            })), o
          }
          return{
          }
        }, t.prototype.getShapeCfg=function(t, e){
          var i=this.get("styles");
          if(i){
            var o=t;
            return o.style=(0, u.__assign)((0, u.__assign)({
            }, i), t.style), o
          }
          return t
        }, t.prototype.getStateStyle=function(t){
          var e=this.get("styles");
          return e&&e[
            t
          ]
        }, t.prototype.getOriginStyle=function(){
          return this.get("originStyle")
        }, t.prototype.getCurrentStatesStyle=function(){
          var t=this, e={
          }, i=t.getStates();
          return i&&i.length?((0, h.each)(t.getStates(), (function(i){
            e=Object.assign(e, t.getStateStyle(i))
          })), e):this.get("originStyle")
        }, t.prototype.setState=function(t, e){
          var i=this.get("states"), o=this.get("shapeFactory"), n=t, a=t;
          (0, h.isString)(e)&&(n="".concat(t, ":").concat(e), a="".concat(t, ":"));
          var r=i;
          if((0, h.isBoolean)(e)){
            var s=i.indexOf(a);
            if(e){
              if(s>-1)return;
              i.push(n)
            }
            else s>-1&&i.splice(s, 1)
          }
          else if((0, h.isString)(e)){
            var l=i.filter((function(t){
              return t.includes(a)
            }));
            l.length>0&&this.clearStates(l), (r=r.filter((function(t){
              return!t.includes(a)
            }))).push(n), this.set("states", r)
          }
          if(o){
            var d=this.get("model").type;
            o.setState(d, t, e, this)
          }
        }, t.prototype.clearStates=function(t){
          var e=this, i=e.getStates(), o=e.get("shapeFactory"), n=e.get("model").type;
          t||(t=i), (0, h.isString)(t)&&(t=[
            t
          ]);
          var a=i.filter((function(e){
            return-1===t.indexOf(e)
          }));
          e.set("states", a), t.forEach((function(t){
            o.setState(n, t, !1, e)
          }))
        }, t.prototype.setOptimize=function(t){
          this.optimize=t
        }, t.prototype.getContainer=function(){
          return this.get("group")
        }, t.prototype.getKeyShape=function(){
          return this.get("keyShape")
        }, t.prototype.getModel=function(){
          return this.get("model")
        }, t.prototype.getType=function(){
          return this.get("type")
        }, t.prototype.getID=function(){
          return this.get("id")
        }, t.prototype.isItem=function(){
          return!0
        }, t.prototype.getStates=function(){
          return this.get("states")
        }, t.prototype.hasState=function(t){
          return this.getStates().indexOf(t)>=0
        }, t.prototype.refresh=function(t){
          var e=this.get("model");
          this.updatePosition(e), this.updateShape(t), this.afterUpdate(), this.clearCache()
        }, t.prototype.getUpdateType=function(t){
        }, t.prototype.update=function(t, e){
          void 0===e&&(e=void 0);
          var i=this.get("model");
          if("move"===e)this.updatePosition(t);
          else{
            var o=i.visible, n=t.visible;
            o!==n&&void 0!==n&&this.changeVisibility(n);
            var a={
              x:i.x, y:i.y
            };
            t.x=isNaN(+t.x)?i.x:+t.x, t.y=isNaN(+t.y)?i.y:+t.y;
            var r=this.get("styles");
            if(t.stateStyles){
              var s=t.stateStyles;
              (0, h.mix)(r, s), delete t.stateStyles
            }
            Object.assign(i, t), a.x===t.x&&a.y===t.y||this.updatePosition(t), this.updateShape(e)
          }
          this.afterUpdate(), this.clearCache()
        }, t.prototype.updateShape=function(t){
          var e=this.get("shapeFactory"), i=this.get("model"), o=i.type;
          if(e.shouldUpdate(o)&&o===this.get("currentShape")){
            var n=this.getShapeCfg(i, t);
            e.baseUpdate(o, n, this, t), "move"!==t&&this.setOriginStyle()
          }
          else this.draw();
          this.restoreStates(e, o)
        }, t.prototype.updatePosition=function(t){
          var e=this.get("model"), i=isNaN(+t.x)?+e.x:+t.x, o=isNaN(+t.y)?+e.y:+t.y, n=this.get("group");
          if(isNaN(i)||isNaN(o))return!1;
          e.x=i, e.y=o;
          var a=n.getMatrix();
          return(!a||a[
            6
          ]
          !==i||a[
            7
          ]
          !==o)&&(n.resetMatrix(), A(n, {
            x:i, y:o
          }), this.clearCache(), !0)
        }, t.prototype.getBBox=function(){
          var t=this.get(ne);
          return t||(t=this.calculateBBox(), this.set(ne, t)), t
        }, t.prototype.getCanvasBBox=function(){
          var t=this.get(ae);
          return t||(t=this.calculateCanvasBBox(), this.set(ae, t)), t
        }, t.prototype.toFront=function(){
          this.get("group").toFront()
        }, t.prototype.toBack=function(){
          this.get("group").toBack()
        }, t.prototype.show=function(){
          this.changeVisibility(!0)
        }, t.prototype.hide=function(){
          this.changeVisibility(!1)
        }, t.prototype.changeVisibility=function(t){
          var e=this.get("group");
          t?e.show():e.hide(), this.set("visible", t)
        }, t.prototype.isVisible=function(){
          return this.get("visible")
        }, t.prototype.enableCapture=function(t){
          var e=this.get("group");
          e&&e.set("capture", t)
        }, t.prototype.destroy=function(){
          if(!this.destroyed){
            var t=this.get("animate"), e=this.get("group");
            t&&e.stopAnimate(), e.shapeMap={
            }, this.clearCache(), e.remove(), this._cfg=null, this.destroyed=!0
          }
        }, t
      }
      ();
      var se={
        source:"start", target:"end"
      }, le="Node", he="Point";
      const de=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, u.__extends)(e, t), e.prototype.getDefaultCfg=function(){
          return{
            type:"edge", sourceNode:null, targetNode:null, startPoint:null, endPoint:null, linkCenter:!1
          }
        }, e.prototype.setEnd=function(t, e){
          var i=se[
            t
          ]
          +he, o=t+le, n=this.get(o);
          n&&!n.destroyed&&n.removeEdge(this), (0, h.isPlainObject)(e)?(this.set(i, e), this.set(o, null)):e&&(e.addEdge(this), this.set(o, e), this.set(i, null))
        }, e.prototype.getLinkPoint=function(t, e, i){
          var o=se[
            t
          ]
          +he, n=t+le, a=this.get(o);
          if(!a){
            var r=this.get(n), s=t+"Anchor", l=this.getPrePoint(t, i), d=e[
              s
            ];
            (0, h.isNil)(d)||(a=r.getLinkPointByAnchor(d)), a=a||r.getLinkPoint(l), (0, h.isNil)(a.index)||this.set("".concat(t, "AnchorIndex"), a.index)
          }
          return a
        }, e.prototype.getPrePoint=function(t, e){
          if(e&&e.length)return e[
            "source"===t?0:e.length-1
          ];
          var i="source"===t?"target":"source";
          return this.getEndPoint(i)
        }, e.prototype.getEndPoint=function(t){
          var e=t+le, i=se[
            t
          ]
          +he, o=this.get(e);
          return o&&!o.destroyed?o.get("model"):this.get(i)
        }, e.prototype.getControlPointsByCenter=function(t){
          var e=this.getEndPoint("source"), i=this.getEndPoint("target"), o=this.get("shapeFactory"), n=t.type;
          return o.getControlPoints(n, {
            startPoint:e, endPoint:i
          })
        }, e.prototype.getEndCenter=function(t){
          var e=t+le, i=se[
            t
          ]
          +he, o=this.get(e);
          if(o){
            var n=o.getBBox();
            return{
              x:n.centerX, y:n.centerY
            }
          }
          return this.get(i)
        }, e.prototype.init=function(){
          t.prototype.init.call(this), this.setSource(this.get("source")), this.setTarget(this.get("target"))
        }, e.prototype.getShapeCfg=function(e, i){
          var o=this, n=o.get("linkCenter"), a=(null==i?void 0:i.includes("move"))?e:t.prototype.getShapeCfg.call(this, e);
          if(n)a.startPoint=o.getEndCenter("source"), a.endPoint=o.getEndCenter("target");
          else{
            var r=a.controlPoints||o.getControlPointsByCenter(a);
            a.startPoint=o.getLinkPoint("source", e, r), a.endPoint=o.getLinkPoint("target", e, r)
          }
          return a.sourceNode=o.get("sourceNode"), a.targetNode=o.get("targetNode"), a
        }, e.prototype.getModel=function(){
          var t=this.get("model"), e=this.get("source".concat(le)), i=this.get("target".concat(le));
          return e?delete t[
            "source".concat(le)
          ]
          :t.source=this.get("start".concat(he)), i?delete t[
            "target".concat(le)
          ]
          :t.target=this.get("end".concat(he)), (0, h.isString)(t.source)||(0, h.isPlainObject)(t.source)||(t.source=t.source.getID()), (0, h.isString)(t.target)||(0, h.isPlainObject)(t.target)||(t.target=t.target.getID()), t
        }, e.prototype.setSource=function(t){
          this.setEnd("source", t), this.set("source", t)
        }, e.prototype.setTarget=function(t){
          this.setEnd("target", t), this.set("target", t)
        }, e.prototype.getSource=function(){
          return this.get("source")
        }, e.prototype.getTarget=function(){
          return this.get("target")
        }, e.prototype.updatePosition=function(){
          return!1
        }, e.prototype.update=function(t, e){
          void 0===e&&(e=void 0);
          var i=this.get("model"), o=i.visible, n=t.visible;
          o!==n&&void 0!==n&&this.changeVisibility(n);
          var a=this.get("source"), r=this.get("target");
          if(a&&!a.destroyed&&r&&!r.destroyed){
            var s=this.get("styles");
            if(t.stateStyles){
              var l=t.stateStyles;
              (0, h.mix)(s, l), delete t.stateStyles
            }
            Object.assign(i, t), this.updateShape(e), this.afterUpdate(), this.clearCache()
          }
        }, e.prototype.destroy=function(){
          var e=this.get("source".concat(le)), i=this.get("target".concat(le));
          e&&!e.destroyed&&e.removeEdge(this), i&&!i.destroyed&&i.removeEdge(this), t.prototype.destroy.call(this)
        }, e
      }
      (re);
      var ce="anchorPointsCache";
      const ge=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, u.__extends)(e, t), e.prototype.getNearestPoint=function(t, e){
          for(var i=0, o=t[
            0
          ], n=B(t[
            0
          ], e), a=0;
          a<t.length;
          a++){
            var r=t[
              a
            ], s=B(r, e);
            s<n&&(o=r, n=s, i=a)
          }
          return o.anchorIndex=i, o
        }, e.prototype.getDefaultCfg=function(){
          return{
            type:"node", edges:[
            ]
          }
        }, e.prototype.getEdges=function(){
          return this.get("edges")
        }, e.prototype.getInEdges=function(){
          var t=this;
          return this.get("edges").filter((function(e){
            return e.get("target")===t
          }))
        }, e.prototype.getOutEdges=function(){
          var t=this;
          return this.get("edges").filter((function(e){
            return e.get("source")===t
          }))
        }, e.prototype.getNeighbors=function(t){
          var e=this, i=this.get("edges");
          if("target"===t){
            return i.filter((function(t){
              return t.getSource()===e
            })).map((function(t){
              return t.getTarget()
            }))
          }
          if("source"===t){
            return i.filter((function(t){
              return t.getTarget()===e
            })).map((function(t){
              return t.getSource()
            }))
          }
          return i.map((function(t){
            return t.getSource()===e?t.getTarget():t.getSource()
          }))
        }, e.prototype.getLinkPointByAnchor=function(t){
          return this.getAnchorPoints()[
            t
          ]
        }, e.prototype.getLinkPoint=function(t){
          var e, i, o=this.get("keyShape").get("type"), n=this.get("type"), a=this.getBBox();
          "combo"===n?(e=a.centerX||(a.maxX+a.minX)/2, i=a.centerY||(a.maxY+a.minY)/2):(e=a.centerX, i=a.centerY);
          var r, s=this.getAnchorPoints();
          switch(o){
            case"circle":r=C({
              x:e, y:i, r:a.width/2
            }, t);
            break;
            case"ellipse":r=_({
              x:e, y:i, rx:a.width/2, ry:a.height/2
            }, t);
            break;
            default:r=M(a, t)
          }
          var l=r;
          return s.length&&(l||(l=t), l=this.getNearestPoint(s, l)), l||(l={
            x:e, y:i
          }), l
        }, e.prototype.getAnchorPoints=function(){
          var t=this.get(ce);
          if(!t){
            t=[
            ];
            var e=this.get("shapeFactory"), i=this.getBBox(), o=this.get("model"), n=this.getShapeCfg(o), a=o.type, r=e.getAnchorPoints(a, n)||[
            ];
            (0, h.each)(r, (function(e, o){
              var n={
                x:i.minX+e[
                  0
                ]
                *i.width, y:i.minY+e[
                  1
                ]
                *i.height, anchorIndex:o
              };
              t.push(n)
            })), this.set(ce, t)
          }
          return t
        }, e.prototype.addEdge=function(t){
          this.get("edges").push(t)
        }, e.prototype.lock=function(){
          this.set("locked", !0)
        }, e.prototype.unlock=function(){
          this.set("locked", !1)
        }, e.prototype.hasLocked=function(){
          return this.get("locked")
        }, e.prototype.removeEdge=function(t){
          var e=this.getEdges(), i=e.indexOf(t);
          i>-1&&e.splice(i, 1)
        }, e.prototype.clearCache=function(){
          this.set("bboxCache", null), this.set(ce, null)
        }, e.prototype.getUpdateType=function(t){
          var e, i, o, n, a;
          if(t){
            var r=!(0, h.isNil)(t.x), s=!(0, h.isNil)(t.y), l=Object.keys(t);
            return 1===l.length&&(r||s)||2===l.length&&r&&s?"move":(0, h.isNumber)(t.x)||(0, h.isNumber)(t.y)||t.type||t.anchorPoints||t.size||(null==t?void 0:t.style)&&((null===(e=null==t?void 0:t.style)||void 0===e?void 0:e.r)||(null===(i=null==t?void 0:t.style)||void 0===i?void 0:i.width)||(null===(o=null==t?void 0:t.style)||void 0===o?void 0:o.height)||(null===(n=null==t?void 0:t.style)||void 0===n?void 0:n.rx)||(null===(a=null==t?void 0:t.style)||void 0===a?void 0:a.ry))?"bbox|label":l.includes("label")||l.includes("labelCfg")?"style|label":"style"
          }
        }, e.prototype.setState=function(e, i){
          var o=this;
          this.optimize?t.prototype.setState.call(this, e, i):this.runWithBBoxAffected((function(){
            return t.prototype.setState.call(o, e, i)
          }))
        }, e.prototype.clearStates=function(e){
          var i=this;
          this.optimize?t.prototype.clearStates.call(this, e):this.runWithBBoxAffected((function(){
            return t.prototype.clearStates.call(i, e)
          }))
        }, e.prototype.runWithBBoxAffected=function(t){
          var e=[
            "r", "width", "height", "rx", "ry", "lineWidth"
          ], i=this.getKeyShape().attr(), o={
          };
          Object.keys(this.getKeyShape().attr()).forEach((function(t){
            e.includes(t)&&(o[
              t
            ]
            =i[
              t
            ])
          })), t();
          for(var n=this.getKeyShape().attr(), a=0;
          a<e.length;
          a++){
            var r=e[
              a
            ];
            if(n[
              r
            ]
            !==o[
              r
            ]){
              this.clearCache(), this.getEdges().forEach((function(t){
                return t.refresh()
              }));
              break
            }
          }
        }, e
      }
      (re);
      var ue="bboxCache", pe="bboxCanvasCache", fe="sizeCache", ye="anchorPointsCache";
      const me=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, u.__extends)(e, t), e.prototype.getDefaultCfg=function(){
          return{
            type:"combo", nodes:[
            ], edges:[
            ], combos:[
            ]
          }
        }, e.prototype.getShapeCfg=function(t){
          var e=this.get("styles"), i=this.get("bbox");
          if(e&&i){
            var o=t, n=(0, h.isNumber)(t.size)?[
              t.size, t.size
            ]
            :t.size, a=(0, h.isNumber)(t.fixSize)?[
              t.fixSize, t.fixSize
            ]
            :t.fixSize, r=n||a||ct.defaultCombo.size, s={
              r:(Math.max(i.width, i.height)||Math.max(r[
                0
              ], r[
                1
              ]))/2, width:i.width||r[
                0
              ], height:i.height||r[
                1
              ]
            };
            o.style=(0, u.__assign)((0, u.__assign)((0, u.__assign)({
            }, e), t.style), s);
            var l=t.padding||ct.defaultCombo.padding;
            return(0, h.isNumber)(l)?(s.r+=l, s.width+=2*l, s.height+=2*l):(s.r=s.r+Math.max.apply(Math, l), s.width+=l[
              1
            ]
            +l[
              3
            ]
            ||2*l[
              1
            ], s.height+=l[
              0
            ]
            +l[
              2
            ]
            ||2*l[
              0
            ]), this.set(fe, s), o
          }
          return t
        }, e.prototype.calculateCanvasBBox=function(){
          if(!this.destroyed){
            var t=this.get("keyShape"), e=this.get("group"), i=this.get(ue)||{
            }, o=i.x, n=i.x, a=this.get(fe), r=vt(t, e);
            if(r.centerX=(r.minX+r.maxX)/2, r.centerY=(r.minY+r.maxY)/2, a)a.width=Math.max(a.width, r.width), a.height=Math.max(a.height, r.height), this.set(fe, a), "circle"===t.get("type")?(r.width=2*a.r, r.height=2*a.r):(r.width=a.width, r.height=a.height), r.minX=r.centerX-r.width/2, r.minY=r.centerY-r.height/2, r.maxX=r.centerX+r.width/2, r.maxY=r.centerY+r.height/2;
            else r.width=r.maxX-r.minX, r.height=r.maxY-r.minY, r.centerX=(r.minX+r.maxX)/2, r.centerY=(r.minY+r.maxY)/2;
            return r.x=r.minX, r.y=r.minY, r.x===o&&r.y===n||this.set(ye, null), r
          }
        }, e.prototype.getChildren=function(){
          return{
            nodes:this.getNodes(), combos:this.getCombos()
          }
        }, e.prototype.getNodes=function(){
          return this.get("nodes")
        }, e.prototype.getCombos=function(){
          return this.get("combos")
        }, e.prototype.addChild=function(t){
          switch(t.getType()){
            case"node":this.addNode(t);
            break;
            case"combo":this.addCombo(t);
            break;
            default:return console.warn("Only node or combo items are allowed to be added into a combo"), !1
          }
          return!0
        }, e.prototype.addCombo=function(t){
          return this.get("combos").push(t), !0
        }, e.prototype.addNode=function(t){
          return this.get("nodes").push(t), !0
        }, e.prototype.removeChild=function(t){
          switch(t.getType()){
            case"node":this.removeNode(t);
            break;
            case"combo":this.removeCombo(t);
            break;
            default:return console.warn("Only node or combo items are allowed to be added into a combo"), !1
          }
          return!0
        }, e.prototype.removeCombo=function(t){
          if(t){
            var e=this.getCombos(), i=e.indexOf(t);
            return i>-1&&(e.splice(i, 1), !0)
          }
        }, e.prototype.removeNode=function(t){
          if(t){
            var e=this.getNodes(), i=e.indexOf(t);
            return i>-1&&(e.splice(i, 1), !0)
          }
        }, e.prototype.getUpdateType=function(t){
        }, e.prototype.getBBox=function(){
          return this.set(pe, null), this.calculateCanvasBBox()
        }, e.prototype.clearCache=function(){
          this.set(ue, null), this.set(pe, null), this.set(ye, null)
        }, e.prototype.destroy=function(){
          if(!this.destroyed){
            var t=this.get("animate"), e=this.get("group");
            t&&e.stopAnimate(), e.shapeMap={
            }, this.clearCache(), this.set(fe, null), this.set("bbox", null), e.remove(), this._cfg=null, this.destroyed=!0
          }
        }, e
      }
      (ge);
      var ve="node", be="edge", xe="vedge", Se="combo", we="Mapper", ke="stateStyles";
      const Me=function(){
        function t(t){
          var e=this;
          this.edgeToBeUpdateMap={
          }, this.throttleRefresh=(0, h.throttle)((function(t){
            var i=e.graph;
            if(i&&!i.get("destroyed")){
              var o=e.edgeToBeUpdateMap;
              if(o){
                var n=Object.values(o);
                n.length&&(n.forEach((function(t){
                  var e=t.edge;
                  if(e&&!e.destroyed){
                    var i=e.getSource(), o=e.getTarget();
                    i&&!i.destroyed&&o&&!o.destroyed&&e.refresh(t.updateType)
                  }
                })), e.edgeToBeUpdateMap={
                })
              }
            }
          }), 16, {
            trailing:!0, leading:!0
          }), this.graph=t, this.destroyed=!1
        }
        return t.prototype.addItem=function(t, e){
          var i=this.graph, o=t===xe?be:t, n=i.get("".concat(o, "Group"))||i.get("group"), a=(0, h.upperFirst)(o), r=null, s=i.get(o+(0, h.upperFirst)(ke))||{
          }, l=i.get("default"+a);
          e.stateStyles&&(s=e.stateStyles), l&&(0, h.each)(l, (function(t, i){
            (0, h.isObject)(t)&&!(0, h.isArray)(t)?e[
              i
            ]
            =(0, h.deepMix)({
            }, t, e[
              i
            ]):(0, h.isArray)(t)?e[
              i
            ]
            =e[
              i
            ]
            ||(0, h.clone)(l[
              i
            ]):e[
              i
            ]
            =e[
              i
            ]
            ||l[
              i
            ]
          }));
          var d=i.get(o+we);
          if(d){
            var c=d(e);
            c.stateStyles&&(s=c.stateStyles, delete c.stateStyles), (0, h.each)(c, (function(t, i){
              (0, h.isObject)(t)&&!(0, h.isArray)(t)?e[
                i
              ]
              =(0, h.deepMix)({
              }, e[
                i
              ], t):e[
                i
              ]
              =c[
                i
              ]
              ||e[
                i
              ]
            }))
          }
          if(i.emit("beforeadditem", {
            type:t, model:e
          }), t===be||t===xe){
            var g=void 0, u=void 0;
            if(g=e.source, u=e.target, g&&(0, h.isString)(g)&&(g=i.findById(g)), u&&(0, h.isString)(u)&&(u=i.findById(u)), !g||!u)return void console.warn("The source or target node of edge ".concat(e.id, " does not exist!"));
            g.getType&&"combo"===g.getType()&&(e.isComboEdge=!0), u.getType&&"combo"===u.getType()&&(e.isComboEdge=!0), r=new de({
              model:e, source:g, target:u, styles:s, linkCenter:i.get("linkCenter"), group:n.addGroup()
            })
          }
          else if(t===ve)r=new ge({
            model:e, styles:s, group:n.addGroup()
          });
          else if(t===Se){
            var p=e.children, f=Bt(p, i), y=void 0, m=void 0;
            if(isNaN(f.x)?isNaN(e.x)&&(y=100*Math.random()):y=f.x, isNaN(f.y)?isNaN(e.y)&&(m=100*Math.random()):m=f.y, isNaN(e.x)||isNaN(e.y))e.x=y, e.y=m;
            else{
              var v=e.x-y, b=e.y-m;
              this.updateComboSucceeds(e.id, v, b, p)
            }
            var x=n.addGroup();
            x.setZIndex(e.depth), r=new me({
              model:e, styles:s, animate:i.get("animate"), bbox:e.collapsed?Bt([
              ], i):f, group:x
            }), e.collapsed||"circle"!==r.getKeyShape().get("type")||(f.width=Math.hypot(f.height, f.width), f.height=f.width, r.set("bbox", f), r.refresh());
            var S=r.getModel();
            (p||[
            ]).forEach((function(t){
              var e=i.findById(t.id);
              r.addChild(e), t.depth=S.depth+2
            }))
          }
          if(r)return r.setOptimize(i.getNodes().length>i.get("optimizeThreshold")), i.get("".concat(t, "s")).push(r), i.get("itemMap")[
            r.get("id")
          ]
          =r, i.emit("afteradditem", {
            item:r, model:e
          }), r
        }, t.prototype.updateItem=function(t, e){
          var i, o, n=this, a=this.graph;
          if((0, h.isString)(t)&&(t=a.findById(t)), t&&!t.destroyed){
            var r="";
            t.getType&&(r=t.getType());
            var s=a.get(r+we), l=t.getModel(), d=l.x, c=l.y, g=t.getUpdateType(e);
            if(s){
              var p=s((0, h.deepMix)({
              }, l, e)), f=(0, h.deepMix)({
              }, l, p, e);
              p.stateStyles&&(t.set("styles", f.stateStyles), delete f.stateStyles), (0, h.each)(f, (function(t, i){
                e[
                  i
                ]
                =t
              }))
            }
            else(0, h.each)(e, (function(t, i){
              l[
                i
              ]
              &&(0, h.isObject)(t)&&!(0, h.isArray)(t)&&(e[
                i
              ]
              =(0, u.__assign)((0, u.__assign)({
              }, l[
                i
              ]), e[
                i
              ]))
            }));
            if(a.emit("beforeupdateitem", {
              item:t, cfg:e
            }), r===be){
              if(e.source){
                var y=e.source;
                (0, h.isString)(y)&&(y=a.findById(y)), t.setSource(y)
              }
              if(e.target){
                var m=e.target;
                (0, h.isString)(m)&&(m=a.findById(m)), t.setTarget(m)
              }
              t.update(e)
            }
            else if(r===ve){
              t.update(e, g);
              var v=t.getEdges();
              "move"===g?(0, h.each)(v, (function(t){
                n.edgeToBeUpdateMap[
                  t.getID()
                ]
                ={
                  edge:t, updateType:g
                }, n.throttleRefresh()
              })):(null==g?void 0:g.includes("bbox"))&&(0, h.each)(v, (function(t){
                t.refresh(g)
              }))
            }
            else if(r===Se){
              if(t.update(e, g), !isNaN(e.x)||!isNaN(e.y)){
                var b=e.x-d||0, x=e.y-c||0;
                this.updateComboSucceeds(l.id, b, x)
              }
              var S=t.getEdges();
              if(((null==g?void 0:g.includes("bbox"))||"move"===g)&&r===Se){
                var w=t.get("shapeFactory"), k=l.type||"circle";
                (void 0===l.animate||void 0===e.animate?null===(o=null===(i=w[
                  k
                ])||void 0===i?void 0:i.options)||void 0===o?void 0:o.animate:l.animate||e.animate)?setTimeout((function(){
                  if(t&&!t.destroyed){
                    var e=t.getKeyShape();
                    e&&!e.destroyed&&(0, h.each)(S, (function(t){
                      t&&!t.destroyed&&t.refresh()
                    }))
                  }
                }), 201):(0, h.each)(S, (function(t){
                  t.refresh()
                }))
              }
            }
            t.setOptimize(a.getNodes().length>a.get("optimizeThreshold")), a.emit("afterupdateitem", {
              item:t, cfg:e
            })
          }
        }, t.prototype.updateCombo=function(t, e, i){
          var o, n, a=this, r=this.graph;
          if((0, h.isString)(t)&&(t=r.findById(t)), t&&!t.destroyed){
            var s=t.getModel(), l=Bt(e, r, t), d=l.x, c=l.y;
            t.set("bbox", l);
            var g=d, u=c;
            i?(g=isNaN(s.x)?d:s.x, u=isNaN(s.y)?c:s.y):(g=isNaN(d)?s.x:d, u=isNaN(c)?s.y:c), t.update({
              x:g, y:u
            });
            var p=t.get("shapeFactory"), f=s.type||"circle";
            (void 0===s.animate?null===(n=null===(o=p[
              f
            ])||void 0===o?void 0:o.options)||void 0===n?void 0:n.animate:s.animate)?setTimeout((function(){
              if(t&&!t.destroyed){
                var e=t.getKeyShape();
                e&&!e.destroyed&&(t.getShapeCfg(s), a.updateComboEdges(t))
              }
            }), 201):this.updateComboEdges(t)
          }
        }, t.prototype.updateComboEdges=function(t){
          for(var e, i, o=t.getEdges()||[
          ], n=0;
          n<o.length;
          n++){
            var a=o[
              n
            ];
            (null==a?void 0:a.destroyed)||(null===(e=null==a?void 0:a.getSource())||void 0===e?void 0:e.destroyed)||(null===(i=null==a?void 0:a.getTarget())||void 0===i?void 0:i.destroyed)||a.refresh()
          }
        }, t.prototype.collapseCombo=function(t, e){
          void 0===e&&(e=!0);
          var i=this.graph;
          (0, h.isString)(t)&&(t=i.findById(t));
          var o=t.getChildren();
          o.nodes.forEach((function(t){
            i.hideItem(t, e)
          })), o.combos.forEach((function(t){
            i.hideItem(t, e)
          }))
        }, t.prototype.updateComboSucceeds=function(t, e, i, o){
          var n=this;
          void 0===o&&(o=[
          ]);
          var a=this.graph;
          if(e||i){
            var r=o;
            if(!(null==r?void 0:r.length)){
              var s=a.get("comboTrees");
              null==s||s.forEach((function(e){
                kt(e, (function(e){
                  return e.id!==t||(r=e.children, !1)
                }))
              }))
            }
            null==r||r.forEach((function(t){
              var o=a.findById(t.id);
              if(o){
                var r=o.getModel();
                n.updateItem(t.id, {
                  x:(r.x||0)+e, y:(r.y||0)+i
                })
              }
            }))
          }
        }, t.prototype.expandCombo=function(t, e){
          void 0===e&&(e=!0);
          var i=this.graph;
          (0, h.isString)(t)&&(t=i.findById(t));
          var o=t.getChildren(), n=new Set;
          o.nodes.forEach((function(t){
            i.showItem(t, e), t.getEdges().forEach((function(t){
              return n.add(t)
            }))
          })), o.combos.forEach((function(t){
            t.getModel().collapsed?t.show():i.showItem(t, e), t.getEdges().forEach((function(t){
              return n.add(t)
            }))
          })), n.forEach((function(t){
            return t.refresh()
          }))
        }, t.prototype.removeItem=function(t){
          var e=this, i=this.graph;
          if((0, h.isString)(t)&&(t=i.findById(t)), t&&!t.destroyed){
            var o=(0, h.clone)(t.getModel()), n="";
            t.getType&&(n=t.getType()), i.emit("beforeremoveitem", {
              item:o, type:n
            });
            var a=i.get("".concat(n, "s")), r=a.indexOf(t);
            if(r>-1&&a.splice(r, 1), n===be){
              var s=i.get("v".concat(n, "s")), l=s.indexOf(t);
              l>-1&&s.splice(l, 1)
            }
            var d=t.get("id");
            delete i.get("itemMap")[
              d
            ];
            var c=i.get("comboTrees"), g=t.get("id");
            if(n===ve){
              var u=t.getModel().comboId;
              if(c&&u){
                var p=c, f=!1;
                c.forEach((function(t){
                  f||kt(t, (function(t){
                    if(t.id===g&&p){
                      var e=p.indexOf(t);
                      return p.splice(e, 1), f=!0, !1
                    }
                    return p=t.children, !0
                  }))
                }))
              }
              for(var y=(x=t.getEdges()).length-1;
              y>=0;
              y--)i.removeItem(x[
                y
              ], !1);
              u&&i.updateCombo(u)
            }
            else if(n===Se){
              var m, v=t.getModel().parentId, b=!1;
              (c||[
              ]).forEach((function(t){
                b||kt(t, (function(t){
                  return t.id!==g||(m=t, b=!0, !1)
                }))
              })), m.removed=!0, m&&m.children&&m.children.forEach((function(t){
                e.removeItem(t.id)
              }));
              var x;
              for(y=(x=t.getEdges()).length;
              y>=0;
              y--)i.removeItem(x[
                y
              ], !1);
              v&&i.updateCombo(v)
            }
            t.destroy(), i.emit("afterremoveitem", {
              item:o, type:n
            })
          }
        }, t.prototype.setItemState=function(t, e, i){
          var o=this.graph, n=e;
          (0, h.isString)(i)&&(n="".concat(e, ":").concat(i)), t.hasState(n)===i&&i||(0, h.isString)(i)&&t.hasState(n)||(o.emit("beforeitemstatechange", {
            item:t, state:n, enabled:i
          }), t.setState(e, i), o.autoPaint(), o.emit("afteritemstatechange", {
            item:t, state:n, enabled:i
          }))
        }, t.prototype.priorityState=function(t, e){
          var i=this.graph, o=t;
          (0, h.isString)(t)&&(o=i.findById(t)), this.setItemState(o, e, !1), this.setItemState(o, e, !0)
        }, t.prototype.clearItemStates=function(t, e){
          var i=this.graph;
          (0, h.isString)(t)&&(t=i.findById(t)), i.emit("beforeitemstatesclear", {
            item:t, states:e
          }), t.clearStates(e), i.emit("afteritemstatesclear", {
            item:t, states:e
          })
        }, t.prototype.refreshItem=function(t){
          var e=this.graph;
          (0, h.isString)(t)&&(t=e.findById(t)), e.emit("beforeitemrefresh", {
            item:t
          }), t.refresh(), e.emit("afteritemrefresh", {
            item:t
          })
        }, t.prototype.addCombos=function(t, e){
          var i=this, o=this.graph;
          (t||[
          ]).forEach((function(t){
            Mt(t, (function(t){
              var o;
              return e.forEach((function(e){
                e.id===t.id&&(e.children=t.children, e.depth=t.depth, o=e)
              })), o&&i.addItem("combo", o), !0
            }))
          }));
          var n=o.get("comboGroup");
          n&&n.sort()
        }, t.prototype.changeItemVisibility=function(t, e){
          var i=this, o=this.graph;
          if((0, h.isString)(t)&&(t=o.findById(t)), t){
            if(o.emit("beforeitemvisibilitychange", {
              item:t, visible:e
            }), t.changeVisibility(e), t.getType&&t.getType()===ve){
              var n=t.getEdges();
              (0, h.each)(n, (function(t){
                (!e||t.get("source").isVisible()&&t.get("target").isVisible())&&i.changeItemVisibility(t, e)
              }))
            }
            else if(t.getType&&t.getType()===Se){
              var a=o.get("comboTrees"), r=t.get("id"), s=[
              ], l=!1;
              (a||[
              ]).forEach((function(t){
                l||t.children&&0!==t.children.length&&kt(t, (function(t){
                  return t.id!==r||(s=t.children, l=!0, !1)
                }))
              })), s&&(!e||e&&!t.getModel().collapsed)&&s.forEach((function(t){
                var n=o.findById(t.id);
                i.changeItemVisibility(n, e)
              }));
              n=t.getEdges();
              (0, h.each)(n, (function(t){
                (!e||t.get("source").isVisible()&&t.get("target").isVisible())&&i.changeItemVisibility(t, e)
              }))
            }
            return o.emit("afteritemvisibilitychange", {
              item:t, visible:e
            }), t
          }
          console.warn("The item to be shown or hidden does not exist!")
        }, t.prototype.destroy=function(){
          this.graph=null, this.destroyed=!0
        }, t
      }
      ();
      const Ce=function(){
        function t(t){
          this.graph=t, this.destroyed=!1
        }
        return t.prototype.updateState=function(t, e, i){
          var o=this.graph.get("states"), n=e;
          (0, h.isString)(i)&&(n="".concat(e, ":").concat(i)), o[
            n
          ]
          ||(o[
            n
          ]
          =[
          ]), i?o[
            n
          ].push(t):o[
            n
          ]
          =o[
            n
          ].filter((function(e){
            return e!==t
          })), this.graph.set("states", o), this.graph.emit("graphstatechange", {
            states:o
          })
        }, t.prototype.updateStates=function(t, e, i){
          var o=this.graph.get("states");
          ((0, h.isString)(e)?[
            e
          ]
          :e).forEach((function(e){
            var n=e;
            o[
              n
            ]
            ||(o[
              n
            ]
            =[
            ]), (0, h.isString)(i)&&(n="".concat(e, ":").concat(i)), i?o[
              n
            ].push(t):o[
              n
            ]
            =o[
              n
            ].filter((function(e){
              return e!==t
            }))
          })), this.graph.set("states", o), this.graph.emit("graphstatechange", {
            states:e
          })
        }, t.prototype.destroy=function(){
          this.graph=null, this.destroyed=!0
        }, t
      }
      ();
      var _e=i(316293), Ie=function(t, e){
        return t&&e?t.replace(/\\?\{
          ([
            ^{
            }
          ]
          +)\
        }
        /g, (function(t, i){
          if("\\"===t.charAt(0))return t.slice(1);
          var o=e[
            i
          ];
          return 0===o&&(o="0"), o||""
        })):t
      }, Pe=function(t){
        var e=[
        ];
        if(t.length<2)throw new Error("point length must largn than 2, now it's ".concat(t.length));
        for(var i=0, o=t;
        i<o.length;
        i++){
          var n=o[
            i
          ], a=n.x, r=n.y;
          e.push(a), e.push(r)
        }
        var s=(0, _e.iR)(e);
        return s.unshift([
          "M", t[
            0
          ].x, t[
            0
          ].y
        ]), s
      }, Ee=function(t, e, i, o){
        void 0===i&&(i=0), void 0===o&&(o=0);
        var n={
          x:(1-i)*t.x+i*e.x, y:(1-i)*t.y+i*e.y
        }, a=[
          0, 0
        ];
        b.normalize(a, [
          e.x-t.x, e.y-t.y
        ]), a&&(a[
          0
        ]
        ||a[
          1
        ])||(a=[
          0, 0
        ]);
        var r=[
          -a[
            1
          ]
          *o, a[
            0
          ]
          *o
        ];
        return n.x+=r[
          0
        ], n.y+=r[
          1
        ], n
      }, Be=function(t, e){
        var i=t.length;
        if(!i)return"";
        for(var o="", n=0;
        n<i;
        n++){
          var a=t[
            n
          ];
          o+=Ie(0===n?"M{x} {y}":"L{x} {y}", a)
        }
        return e&&(o+="Z"), o
      }, Ne=function(t){
        var e=[
        ];
        return t.forEach((function(t){
          if("A"!==t[
            0
          ])for(var i=1;
          i<t.length;
          i+=2)e.push([
            t[
              i
            ], t[
              i+1
            ]
          ]);
          else{
            var o=t.length;
            e.push([
              t[
                o-2
              ], t[
                o-1
              ]
            ])
          }
        })), e
      }, Le=function(t){
        if(t.length<2)throw new Error("point length must larger than 2, now it's ".concat(t.length));
        var e=t[
          0
        ], i=t[
          1
        ], o=t[
          t.length-1
        ], n=t[
          t.length-2
        ];
        t.unshift(o), t.unshift(n), t.push(e), t.push(i);
        for(var a=[
        ], r=1;
        r<t.length-2;
        r+=1){
          var s=t[
            r-1
          ].x, l=t[
            r-1
          ].y, h=t[
            r
          ].x, d=t[
            r
          ].y, c=t[
            r+1
          ].x, g=t[
            r+1
          ].y, u=h+(c-s)/6, p=d+(g-l)/6, f=c-((r!==t.length-2?t[
            r+2
          ].x:c)-h)/6, y=g-((r!==t.length-2?t[
            r+2
          ].y:g)-d)/6;
          a.push([
            "C", u, p, f, y, c, g
          ])
        }
        return a.unshift([
          "M", o.x, o.y
        ]), a
      }, Te=function(t, e){
        return b.scale([
          0, 0
        ], b.normalize([
          0, 0
        ], t), e)
      }, Ae=function(t, e){
        var i=[
          t[
            1
          ]
          -e[
            1
          ], e[
            0
          ]
          -t[
            0
          ]
        ], o=Math.sqrt(i[
          0
        ]
        *i[
          0
        ]
        +i[
          1
        ]
        *i[
          1
        ]);
        if(0===o)throw new Error("p0 should not be equal to p1");
        return[
          i[
            0
          ]
          /o, i[
            1
          ]
          /o
        ]
      }, Fe=function(t, e){
        return[
          e[
            0
          ]
          -t[
            0
          ], e[
            1
          ]
          -t[
            1
          ]
        ]
      };
      function De(t, e){
        if(!t||t.length<1)return"";
        if(1===t.length)return function(t){
          var i=[
            t[
              0
            ]
            [
              0
            ], t[
              0
            ]
            [
              1
            ]
            -e
          ], o=[
            t[
              0
            ]
            [
              0
            ], t[
              0
            ]
            [
              1
            ]
            +e
          ];
          return"M ".concat(i, " A ").concat(e, ",").concat(e, ",0,0,0,").concat(o, " A ").concat(e, ",").concat(e, ",0,0,0,").concat(i)
        }
        (t);
        if(2===t.length)return function(t){
          var i=b.scale([
            0, 0
          ], Ae(t[
            0
          ], t[
            1
          ]), e), o=b.scale([
            0, 0
          ], i, -1), n=b.add([
            0, 0
          ], t[
            0
          ], i), a=b.add([
            0, 0
          ], t[
            1
          ], i), r=b.add([
            0, 0
          ], t[
            1
          ], o), s=b.add([
            0, 0
          ], t[
            0
          ], o);
          return"M ".concat(n, " L ").concat(a, " A ").concat([
            e, e, "0,0,0", r
          ].join(","), " L ").concat(s, " A ").concat([
            e, e, "0,0,0", n
          ].join(","))
        }
        (t);
        for(var i=new Array(t.length), o=0;
        o<i.length;
        ++o){
          var n=0===o?t[
            t.length-1
          ]
          :t[
            o-1
          ], a=t[
            o
          ], r=b.scale([
            0, 0
          ], Ae(n, a), e);
          i[
            o
          ]
          =[
            b.add([
              0, 0
            ], n, r), b.add([
              0, 0
            ], a, r)
          ]
        }
        var s="A ".concat([
          e, e, "0,0,0,"
        ].join(","));
        return(i=i.map((function(t, e){
          var o="";
          return 0===e&&(o="M ".concat(i[
            i.length-1
          ]
          [
            1
          ], " ")), o+="".concat(s+t[
            0
          ], " L ").concat(t[
            1
          ])
        }))).join(" ")
      }
      function Oe(t, e){
        var i, o, n, a=t.length;
        if(!t||a<1)return"";
        if(1===a)return o=[
          (i=t)[
            0
          ]
          [
            0
          ], i[
            0
          ]
          [
            1
          ]
          -e
        ], n=[
          i[
            0
          ]
          [
            0
          ], i[
            0
          ]
          [
            1
          ]
          +e
        ], "M ".concat(o, " A ").concat([
          e, e, "0,0,0", n
        ].join(","), " A ").concat([
          e, e, "0,0,0", o
        ].join(","));
        if(2===a)return function(t){
          var i=Fe(t[
            0
          ], t[
            1
          ]), o=Te(i, e), n=b.add([
            0, 0
          ], t[
            0
          ], b.scale([
            0, 0
          ], o, -1)), a=b.add([
            0, 0
          ], t[
            1
          ], o), r=1.2*e, s=Te(b.normalize([
            0, 0
          ], i), r), l=b.scale([
            0, 0
          ], s, -1), h=b.add([
            0, 0
          ], n, l), d=b.add([
            0, 0
          ], a, l), c=b.add([
            0, 0
          ], n, s);
          return"M ".concat(n, " C ").concat([
            h, d, a
          ].join(","), " S ").concat([
            c, n
          ].join(","), " Z")
        }
        (t);
        for(var r=t.map((function(e, i){
          var o=t[
            (i+1)%a
          ];
          return{
            p:e, v:b.normalize([
              0, 0
            ], Fe(e, o))
          }
        })), s=0;
        s<r.length;
        ++s){
          var l=s>0?s-1:a-1, h=b.normalize([
            0, 0
          ], b.add([
            0, 0
          ], r[
            l
          ].v, b.scale([
            0, 0
          ], r[
            s
          ].v, -1)));
          r[
            s
          ].p=b.add([
            0, 0
          ], r[
            s
          ].p, b.scale([
            0, 0
          ], h, e))
        }
        return r.map((function(t){
          var e=t.p;
          return{
            x:e[
              0
            ], y:e[
              1
            ]
          }
        }))
      }
      var ze=function(t, e){
        for(var i=[
        ], o=0;
        o<5;
        o++){
          var n=Math.cos((18+72*o)/180*Math.PI)*t, a=Math.sin((18+72*o)/180*Math.PI)*t, r=Math.cos((54+72*o)/180*Math.PI)*e, s=Math.sin((54+72*o)/180*Math.PI)*e;
          0===o?i.push([
            "M", n, -a
          ]):i.push([
            "L", n, -a
          ]), i.push([
            "L", r, -s
          ])
        }
        return i.push([
          "Z"
        ]), i
      }, Ye=function(t, e, i){
        return(t.y-i.y)*(e.x-i.x)-(t.x-i.x)*(e.y-i.y)
      }, Xe=function(t){
        var e=t.map((function(t){
          return{
            x:t.getModel().x, y:t.getModel().y
          }
        }));
        e.sort((function(t, e){
          return t.x===e.x?t.y-e.y:t.x-e.x
        }));
        for(var i={
        }, o=e.length-1;
        o>=0;
        o--){
          var n=e[
            o
          ], a=n.x, r=n.y;
          i[
            "".concat(a, "-").concat(r)
          ]
          &&e.splice(o, 1), i[
            "".concat(a, "-").concat(r)
          ]
          =!0
        }
        if(1===e.length)return e;
        var s=[
        ];
        for(o=0;
        o<e.length;
        o++){
          for(;
          s.length>=2&&Ye(s[
            s.length-2
          ], s[
            s.length-1
          ], e[
            o
          ])<=0;
          )s.pop();
          s.push(e[
            o
          ])
        }
        var l=[
        ];
        for(o=e.length-1;
        o>=0;
        o--){
          for(;
          l.length>=2&&Ye(l[
            l.length-2
          ], l[
            l.length-1
          ], e[
            o
          ])<=0;
          )l.pop();
          l.push(e[
            o
          ])
        }
        return l.pop(), s.pop(), s.concat(l)
      }, We={
        maxRoutingIterations:100, maxMarchingIterations:100, pixelGroupSize:2, edgeR0:10, edgeR1:10, nodeR0:5, nodeR1:10, morphBuffer:5, threshold:.001, skip:16, nodeInfluenceFactor:1, edgeInfluenceFactor:1, negativeNodeInfluenceFactor:-.5
      };
      function Re(t, e, i){
        var o=!1, n=function(t, i){
          return e.cells[
            t+i*e.width
          ]
        }, a=function(t, e){
          var o=0;
          return n(t-1, e-1)>=i&&(o+=1), n(t, e-1)>i&&(o+=2), n(t-1, e)>i&&(o+=4), n(t, e)>i&&(o+=8), o
        }, r=function(i, o){
          for(var n, r, s=i, l=o, h=0;
          h<e.width*e.height;
          h++){
            if(n=s, r=l, t.findIndex((function(t){
              return t.x===s&&t.y===l
            }))>-1){
              if(t[
                0
              ].x===s&&t[
                0
              ].y===l)return!0
            }
            else t.push({
              x:s, y:l
            });
            var d=a(s, l);
            switch(d){
              case-1:return console.warn("Marched out of bounds"), !0;
              case 0:case 3:case 2:case 7:s++;
              break;
              case 12:case 14:case 4:s--;
              break;
              case 6:0===n&&(-1===r?s-=1:s+=1);
              break;
              case 1:case 13:case 5:l--;
              break;
              case 9:1===n&&(0===r?l-=1:l+=1);
              break;
              case 10:case 8:case 11:l++;
              break;
              default:return console.warn("Marching squares invalid state: ".concat(d)), !0
            }
          }
        };
        this.march=function(){
          for(var t=0;
          t<e.width&&!o;
          t+=1)for(var s=0;
          s<e.height&&!o;
          s+=1)n(t, s)>i&&15!==a(t, s)&&(o=r(t, s));
          return o
        }
      }
      var Ue=function(t, e){
        var i=Number.POSITIVE_INFINITY, o=null;
        return t.forEach((function(t){
          var n=V(t, e);
          n>=0&&n<i&&(o=t, i=n)
        })), o
      };
      function je(t, e, i, o, n){
        var a=function(t, e, i){
          var o=null, n=Number.POSITIVE_INFINITY;
          return e.forEach((function(e){
            var a={
              x:t.getModel().x, y:t.getModel().y
            }, r={
              x:e.getModel().x, y:e.getModel().y
            }, s=Z(a, r), l=new U(a.x, a.y, r.x, r.y), h=i.reduce((function(t, e){
              return V(e, l)>0?t+1:t
            }), 0);
            s*Math.pow(h+1, 2)<n&&(o=e, n=s*Math.pow(h+1, 2))
          })), o
        }
        (t, i, e);
        if(null===a)return[
        ];
        return function(t){
          for(var i=[
          ];
          t.length>0;
          ){
            var o=t.pop();
            if(0===t.length){
              i.push(o);
              break
            }
            var n=t.pop(), a=new U(o.x1, o.y1, n.x2, n.y2);
            Ue(e, a)?(i.push(o), t.push(n)):t.push(a)
          }
          return i
        }
        (function(t, e, i, o){
          var n=[
          ], a=[
          ];
          a.push(t);
          for(var r=!0, s=0, l=function(t, e){
            var i=!1;
            return e.forEach((function(e){
              i||(H(t, {
                x:e.x1, y:e.y1
              })||H(t, {
                x:e.x2, y:e.y2
              }))&&(i=!0)
            })), i
          }, h=function(t, e){
            for(var i=0, o=e;
            i<o.length;
            i++){
              var n=o[
                i
              ].getBBox(), a=[
                [
                  n.x, n.y
                ], [
                  n.x+n.width, n.y
                ], [
                  n.x, n.y+n.height
                ], [
                  n.x+n.width, n.y+n.height
                ]
              ];
              if(X(a, t.x, t.y))return!0
            }
            return!1
          };
          r&&s<i;
          ){
            r=!1;
            for(var d=function(){
              var t=a.pop(), i=Ue(e, t);
              if(i){
                var d=J(i, t), c=d[
                  0
                ];
                if(2===d[
                  1
                ]){
                  var g=function(s){
                    for(var d=o, g=Ve(i, d, c, s), u=l(g, a)||l(g, n), p=h(g, e);
                    !u&&p&&d>=1;
                    )g=Ve(i, d/=1.5, c, s), u=l(g, a)||l(g, n), p=h(g, e);
                    !g||u||s&&p||(a.push(new U(t.x1, t.y1, g.x, g.y)), a.push(new U(g.x, g.y, t.x2, t.y2)), r=!0)
                  };
                  g(!0), r||g(!1)
                }
              }
              r||n.push(t), s+=1
            };
            !r&&a.length;
            )d()
          }
          for(;
          a.length;
          )n.push(a.pop());
          return n
        }
        (new U(t.getModel().x, t.getModel().y, a.getModel().x, a.getModel().y), e, o, n))
      }
      var Ge=function(t, e, i){
        var o=Object.assign(We, i), n=K(t.map((function(t){
          return{
            x:t.getModel().x, y:t.getModel().y
          }
        })));
        t=t.sort((function(t, e){
          return Z({
            x:t.getModel().x, y:t.getModel().y
          }, n)-Z({
            x:e.getModel().x, y:e.getModel().y
          }, n)
        }));
        var a=[
        ], r=[
        ];
        t.forEach((function(t){
          je(t, e, a, o.maxRoutingIterations, o.morphBuffer).forEach((function(t){
            r.push(t)
          })), a.push(t)
        }));
        for(var s, l, h, d, c, g=function(t, e, i){
          var o={
            minX:Number.POSITIVE_INFINITY, minY:Number.POSITIVE_INFINITY, maxX:Number.NEGATIVE_INFINITY, maxY:Number.NEGATIVE_INFINITY, width:0, height:0, x:0, y:0
          }, n=[
          ];
          t.forEach((function(t){
            n.push(t.getBBox())
          })), e.forEach((function(t){
            n.push(t.getBBox())
          }));
          for(var a=0, r=n;
          a<r.length;
          a++){
            var s=r[
              a
            ];
            o.minX=(s.minX<o.minX?s.minX:o.minX)-i, o.minY=(s.minY<o.minY?s.minY:o.minY)-i, o.maxX=(s.maxX>o.maxX?s.maxX:o.maxX)+i, o.maxY=(s.maxY>o.maxY?s.maxY:o.maxY)+i
          }
          return o.width=o.maxX-o.minX, o.height=o.maxY-o.minY, o.x=o.minX, o.y=o.minY, o
        }
        (t, r, o.nodeR0), u=(s=g.width, l=g.height, h=o.pixelGroupSize, d=Math.ceil(s/h), c=Math.ceil(l/h), {
          cells:new Float32Array(Math.max(0, d*c)).fill(0), width:d, height:c
        }), p=[
        ], f=[
        ], y=0;
        y<o.maxMarchingIterations;
        y++)if(Je(t, e, r, g, u, o), f=[
        ], new Re(p=[
        ], u, o.threshold).march()){
          var m=p.map((function(t){
            return{
              x:Math.round(t.x*o.pixelGroupSize+g.minX), y:Math.round(t.y*o.pixelGroupSize+g.minY)
            }
          }));
          if(m){
            var v=m.length;
            if(o.skip>1)for(v=Math.floor(m.length/o.skip);
            v<3&&o.skip>1;
            )o.skip-=1, v=Math.floor(m.length/o.skip);
            for(var b=0, x=0;
            x<v;
            x+=1, b+=o.skip)f.push({
              x:m[
                b
              ].x, y:m[
                b
              ].y
            })
          }
          if(f&&function(){
            for(var e=0, i=t;
            e<i.length;
            e++){
              var o=i[
                e
              ], n=f.map((function(t){
                return[
                  t.x, t.y
                ]
              }));
              if(!X(n, o.getBBox().centerX, o.getBBox().centerY))return!1
            }
            return!0
          }
          ())return f;
          if(o.threshold*=.9, y<=.5*o.maxMarchingIterations)o.memberInfluenceFactor*=1.2, o.edgeInfluenceFactor*=1.2;
          else{
            if(!(0!==o.nonMemberInfluenceFactor&&e.length>0))break;
            o.nonMemberInfluenceFactor*=.8
          }
        }
        return f
      };
      function Je(t, e, i, o, n, a){
        function r(t, e){
          var i=Math.floor((t-e)/a.pixelGroupSize);
          return i<0?0:i
        }
        function s(t, e){
          return t*a.pixelGroupSize+e
        }
        var l=(a.nodeR0-a.nodeR1)*(a.nodeR0-a.nodeR1), h=(a.edgeR0-a.edgeR1)*(a.edgeR0-a.edgeR1), d=function(t, e){
          return[
            Math.min(r(t.minX, e+o.minX), n.width), Math.min(r(t.minY, e+o.minY), n.height), Math.min(r(t.maxX, -e+o.minX), n.width), Math.min(r(t.maxY, -e+o.minY), n.height)
          ]
        }, c=function(t, e){
          for(var i=t.getBBox(), r=d(i, a.nodeR1), l=r[
            0
          ], h=r[
            1
          ], c=r[
            2
          ], g=r[
            3
          ], u=h;
          u<g;
          u+=1)for(var p=l;
          p<c;
          p+=1)if(!(e<0&&n[
            p+u*n.width
          ]
          <=0)){
            var f=s(p, o.minX), y=s(u, o.minY), m=Q({
              x:f, y
            }, {
              x:i.minX, y:i.minY, width:i.width, height:i.height
            });
            if(m<Math.pow(a.nodeR1, 2)){
              var v=Math.sqrt(m)-a.nodeR1;
              n.cells[
                p+u*n.width
              ]
              +=e*v*v
            }
          }
        };
        a.nodeInfluenceFactor&&t.forEach((function(t){
          c(t, a.nodeInfluenceFactor/l)
        })), a.edgeInfluenceFactor&&i.forEach((function(t){
          !function(t, e){
            for(var i=t.getBBox(), r=d(i, a.edgeR1), l=r[
              0
            ], h=r[
              1
            ], c=r[
              2
            ], g=r[
              3
            ], u=h;
            u<g;
            u+=1)for(var p=l;
            p<c;
            p+=1)if(!(e<0&&n.cells[
              p+u*n.width
            ]
            <=0)){
              var f=s(p, o.minX), y=s(u, o.minY), m=q({
                x:f, y
              }, t);
              if(m<Math.pow(a.edgeR1, 2)){
                var v=Math.sqrt(m)-a.edgeR1;
                n.cells[
                  p+u*n.width
                ]
                +=e*v*v
              }
            }
          }
          (t, a.edgeInfluenceFactor/h)
        })), a.negativeNodeInfluenceFactor&&e.forEach((function(t){
          c(t, a.negativeNodeInfluenceFactor/l)
        }))
      }
      function Ve(t, e, i, o){
        var n=t.getBBox(), a=i[
          0
        ], r=i[
          1
        ], s=i[
          2
        ], l=i[
          3
        ], h={
          topLeft:{
            x:n.minX-e, y:n.minY-e
          }, topRight:{
            x:n.maxX+e, y:n.minY-e
          }, bottomLeft:{
            x:n.minX-e, y:n.maxY+e
          }, bottomRight:{
            x:n.maxX+e, y:n.maxY+e
          }
        }, d=n.height*n.width;
        function c(t, e){
          return n.width*(.5*(t.y-n.minY+(e.y-n.minY)))
        }
        if(r)return a?o?h.topLeft:h.bottomRight:s?o?h.bottomLeft:h.topRight:c(r, l)<.5*d?r.y>l.y?o?h.topLeft:h.bottomRight:o?h.topRight:h.bottomLeft:r.y<l.y?o?h.bottomLeft:h.topRight:o?h.bottomRight:h.topLeft;
        if(l){
          if(a)return o?h.topRight:h.bottomLeft;
          if(s)return o?h.bottomRight:h.topLeft
        }
        return c(a, s)<.5*d?a.x>s.x?o?h.topLeft:h.bottomRight:o?h.bottomLeft:h.topRight:a.x<s.x?o?h.topRight:h.bottomLeft:o?h.bottomRight:h.topLeft
      }
      const Ke=function(){
        function t(t, e){
          this.cfg=(0, h.deepMix)(this.getDefaultCfg(), e), this.graph=t, this.id=this.cfg.id, this.group=this.cfg.group, this.members=this.cfg.members.map((function(e){
            return(0, h.isString)(e)?t.findById(e):e
          })), this.nonMembers=this.cfg.nonMembers.map((function(e){
            return(0, h.isString)(e)?t.findById(e):e
          })), this.setPadding(), this.setType(), this.path=this.calcPath(this.members, this.nonMembers), this.render()
        }
        return t.prototype.getDefaultCfg=function(){
          return{
            id:"g6-hull", type:"round-convex", members:[
            ], nonMembers:[
            ], style:{
              fill:"lightblue", stroke:"blue", opacity:.2
            }, padding:10
          }
        }, t.prototype.setPadding=function(){
          var t=this.members.length&&this.members[
            0
          ].getKeyShape().getCanvasBBox().width/2;
          this.padding=this.cfg.padding>0?this.cfg.padding+t:10+t, this.cfg.bubbleCfg={
            nodeR0:this.padding-t, nodeR1:this.padding-t, morphBuffer:this.padding-t
          }
        }, t.prototype.setType=function(){
          this.type=this.cfg.type, this.members.length<3&&(this.type="round-convex"), "round-convex"!==this.type&&"smooth-convex"!==this.type&&"bubble"!==this.type&&(console.warn("The hull type should be either round-convex, smooth-convex or bubble, round-convex is used by default."), this.type="round-convex")
        }, t.prototype.calcPath=function(t, e){
          var i, o, n;
          switch(this.type){
            case"round-convex":n=De((i=Xe(t)).map((function(t){
              return[
                t.x, t.y
              ]
            })), this.padding), o=(0, _e.EA)(n);
            break;
            case"smooth-convex":2===(i=Xe(t)).length?(n=De(i.map((function(t){
              return[
                t.x, t.y
              ]
            })), this.padding), o=(0, _e.EA)(n)):i.length>2&&(n=Oe(i.map((function(t){
              return[
                t.x, t.y
              ]
            })), this.padding), o=Le(n));
            break;
            case"bubble":o=(i=Ge(t, e, this.cfg.bubbleCfg)).length>=2&&Le(i)
          }
          return o
        }, t.prototype.render=function(){
          this.group.addShape("path", {
            attrs:(0, u.__assign)({
              path:this.path
            }, this.cfg.style), id:this.id, name:this.cfg.id, capture:!1
          }), this.group.toBack()
        }, t.prototype.addMember=function(t){
          if(t){
            (0, h.isString)(t)&&(t=this.graph.findById(t)), this.members.push(t);
            var e=this.nonMembers.indexOf(t);
            return e>-1&&this.nonMembers.splice(e, 1), this.updateData(this.members, this.nonMembers), !0
          }
        }, t.prototype.addNonMember=function(t){
          if(t){
            (0, h.isString)(t)&&(t=this.graph.findById(t)), this.nonMembers.push(t);
            var e=this.members.indexOf(t);
            return e>-1&&this.members.splice(e, 1), this.updateData(this.members, this.nonMembers), !0
          }
        }, t.prototype.removeMember=function(t){
          if(t){
            (0, h.isString)(t)&&(t=this.graph.findById(t));
            var e=this.members.indexOf(t);
            return e>-1&&(this.members.splice(e, 1), this.updateData(this.members, this.nonMembers), !0)
          }
        }, t.prototype.removeNonMember=function(t){
          if(t){
            (0, h.isString)(t)&&(t=this.graph.findById(t));
            var e=this.nonMembers.indexOf(t);
            return e>-1&&(this.nonMembers.splice(e, 1), this.updateData(this.members, this.nonMembers), !0)
          }
        }, t.prototype.updateData=function(t, e){
          var i=this;
          this.group.findById(this.id).remove(), t&&(this.members=t.map((function(t){
            return(0, h.isString)(t)?i.graph.findById(t):t
          }))), e&&(this.nonMembers=e.map((function(t){
            return(0, h.isString)(t)?i.graph.findById(t):t
          }))), this.path=this.calcPath(this.members, this.nonMembers), this.render()
        }, t.prototype.updateStyle=function(t){
          this.group.findById(this.id).attr((0, u.__assign)({
          }, t))
        }, t.prototype.updateCfg=function(t){
          var e=this;
          this.cfg=(0, h.deepMix)(this.cfg, t), this.id=this.cfg.id, this.group=this.cfg.group, t.members&&(this.members=this.cfg.members.map((function(t){
            return(0, h.isString)(t)?e.graph.findById(t):t
          }))), t.nonMembers&&(this.nonMembers=this.cfg.nonMembers.map((function(t){
            return(0, h.isString)(t)?e.graph.findById(t):t
          }))), this.setPadding(), this.setType(), this.path=this.calcPath(this.members, this.nonMembers), this.render()
        }, t.prototype.contain=function(t){
          var e, i, o=this, n=(e=(0, h.isString)(t)?this.graph.findById(t):t).getKeyShape();
          if("path"===e.get("type"))i=Ne(n.attr("path"));
          else{
            var a=n.getCanvasBBox();
            i=[
              [
                a.minX, a.minY
              ], [
                a.maxX, a.minY
              ], [
                a.maxX, a.maxY
              ], [
                a.minX, a.maxY
              ]
            ]
          }
          return i=i.map((function(t){
            var e=o.graph.getPointByCanvas(t[
              0
            ], t[
              1
            ]);
            return[
              e.x, e.y
            ]
          })), R(i, Ne(this.path))
        }, t.prototype.destroy=function(){
          this.group.remove(), this.cfg=null
        }, t
      }
      ();
      var Ze=f.pd;
      const qe=function(t){
        function e(e){
          var i=t.call(this)||this;
          return i.sortCombos=(0, h.debounce)((function(){
            var t=i.get("comboSorted");
            if(i&&!i.destroyed&&!t){
              i.set("comboSorted", !0);
              var e=[
              ], o={
              };
              (i.get("comboTrees")||[
              ]).forEach((function(t){
                kt(t, (function(t){
                  return e[
                    t.depth
                  ]
                  ?e[
                    t.depth
                  ].push(t.id):e[
                    t.depth
                  ]
                  =[
                    t.id
                  ], o[
                    t.id
                  ]
                  =t.depth, !0
                }))
              })), (i.getEdges().concat(i.get("vedges"))||[
              ]).forEach((function(t){
                var i=t.getModel(), n=o[
                  i.source
                ]
                ||0, a=o[
                  i.target
                ]
                ||0, r=Math.max(n, a);
                e[
                  r
                ]
                ?e[
                  r
                ].push(i.id):e[
                  r
                ]
                =[
                  i.id
                ]
              })), e.forEach((function(t){
                if(t&&t.length)for(var e=t.length-1;
                e>=0;
                e--){
                  var o=i.findById(t[
                    e
                  ]);
                  o&&o.toFront()
                }
              }))
            }
          }), 500, !1), i.cfg=(0, h.deepMix)(i.getDefaultCfg(), e), i.init(), i.animating=!1, i.destroyed=!1, i.cfg.enabledStack&&(i.undoStack=new y.Stack(i.cfg.maxStep), i.redoStack=new y.Stack(i.cfg.maxStep)), i
        }
        return(0, u.__extends)(e, t), e.prototype.init=function(){
          this.initCanvas();
          var t=new Gt(this), e=new Ft(this), i=new Me(this), o=new Ce(this);
          this.set({
            viewController:t, modeController:e, itemController:i, stateController:o
          }), this.initLayoutController(), this.initEventController(), this.initGroups(), this.initPlugins()
        }, e.prototype.initGroups=function(){
          var t=this.get("canvas");
          if(t){
            var e=(t.get("el")||{
            }).id, i=void 0===e?"g6":e, o=t.addGroup({
              id:"".concat(i, "-root"), className:ct.rootContainerClassName
            });
            if(this.get("groupByTypes")){
              var n=o.addGroup({
                id:"".concat(i, "-edge"), className:ct.edgeContainerClassName
              }), a=o.addGroup({
                id:"".concat(i, "-node"), className:ct.nodeContainerClassName
              }), r=o.addGroup({
                id:"".concat(i, "-combo"), className:ct.comboContainerClassName
              });
              r.toBack(), this.set({
                nodeGroup:a, edgeGroup:n, comboGroup:r
              })
            }
            var s=o.addGroup({
              id:"".concat(i, "-delegate"), className:ct.delegateContainerClassName
            });
            this.set({
              delegateGroup:s
            }), this.set("group", o)
          }
        }, e.prototype.getDefaultCfg=function(){
          return{
            container:void 0, width:void 0, height:void 0, renderer:"canvas", modes:{
            }, plugins:[
            ], data:{
            }, fitViewPadding:10, minZoom:.02, maxZoom:10, event:!0, groupByTypes:!0, directed:!1, autoPaint:!0, nodes:[
            ], edges:[
            ], combos:[
            ], vedges:[
            ], itemMap:{
            }, linkCenter:!1, defaultNode:{
            }, defaultEdge:{
            }, nodeStateStyles:{
            }, edgeStateStyles:{
            }, states:{
            }, animate:!1, animateCfg:{
              onFrame:void 0, duration:500, easing:"easeLinear"
            }, callback:void 0, enabledStack:!1, maxStep:10, tooltips:[
            ], optimizeThreshold:1e3
          }
        }, e.prototype.set=function(t, e){
          return(0, h.isPlainObject)(t)?this.cfg=(0, u.__assign)((0, u.__assign)({
          }, this.cfg), t):this.cfg[
            t
          ]
          =e, "enabledStack"!==t||!e||this.undoStack||this.redoStack||(this.undoStack=new y.Stack(this.cfg.maxStep), this.redoStack=new y.Stack(this.cfg.maxStep)), this
        }, e.prototype.get=function(t){
          var e;
          return null===(e=this.cfg)||void 0===e?void 0:e[
            t
          ]
        }, e.prototype.getGroup=function(){
          return this.get("group")
        }, e.prototype.getContainer=function(){
          return this.get("container")
        }, e.prototype.getMinZoom=function(){
          return this.get("minZoom")
        }, e.prototype.setMinZoom=function(t){
          return this.set("minZoom", t)
        }, e.prototype.getMaxZoom=function(){
          return this.get("maxZoom")
        }, e.prototype.setMaxZoom=function(t){
          return this.set("maxZoom", t)
        }, e.prototype.getWidth=function(){
          return this.get("width")
        }, e.prototype.getHeight=function(){
          return this.get("height")
        }, e.prototype.clearItemStates=function(t, e){
          (0, h.isString)(t)&&(t=this.findById(t));
          var i=this.get("itemController");
          e||(e=t.get("states")), i.clearItemStates(t, e), this.get("stateController").updateStates(t, e, !1)
        }, e.prototype.node=function(t){
          "function"==typeof t&&this.set("nodeMapper", t)
        }, e.prototype.edge=function(t){
          "function"==typeof t&&this.set("edgeMapper", t)
        }, e.prototype.combo=function(t){
          "function"==typeof t&&this.set("comboMapper", t)
        }, e.prototype.findById=function(t){
          return this.get("itemMap")[
            t
          ]
        }, e.prototype.find=function(t, e){
          var i, o=this.get("".concat(t, "s"));
          return(0, h.each)(o, (function(t, o){
            if(e(t, o))return i=t
          })), i
        }, e.prototype.findAll=function(t, e){
          var i=[
          ];
          return(0, h.each)(this.get("".concat(t, "s")), (function(t, o){
            e(t, o)&&i.push(t)
          })), i
        }, e.prototype.findAllByState=function(t, e, i){
          return i?this.findAll(t, (function(t){
            return t.hasState(e)&&i(t)
          })):this.findAll(t, (function(t){
            return t.hasState(e)
          }))
        }, e.prototype.translate=function(t, e, i, o){
          var n=this, a=this.get("group"), r=(0, h.clone)(a.getMatrix());
          if(r||(r=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), i){
            var s=Tt({
              animateCfg:o, callback:function(){
                return n.emit("viewportchange", {
                  action:"translate", matrix:a.getMatrix()
                })
              }
            });
            F(a, {
              x:a.getCanvasBBox().x+t, y:a.getCanvasBBox().y+e
            }, i, s||{
              duration:500, easing:"easeCubic"
            })
          }
          else r=Ze(r, [
            [
              "t", t, e
            ]
          ]), a.setMatrix(r), this.emit("viewportchange", {
            action:"translate", matrix:r
          }), this.autoPaint()
        }, e.prototype.moveTo=function(t, e, i, o){
          var n=this.get("group");
          F(n, {
            x:t, y:e
          }, i, o||{
            duration:500, easing:"easeCubic"
          }), this.emit("viewportchange", {
            action:"move", matrix:n.getMatrix()
          })
        }, e.prototype.fitView=function(t, e, i, o){
          t&&this.set("fitViewPadding", t);
          var n=this.get("viewController");
          e?n.fitViewByRules(e, i, o):n.fitView(i, o), this.autoPaint()
        }, e.prototype.fitCenter=function(t, e){
          this.get("viewController").fitCenter(t, e), this.autoPaint()
        }, e.prototype.addBehaviors=function(t, e){
          return this.get("modeController").manipulateBehaviors(t, e, !0), this
        }, e.prototype.removeBehaviors=function(t, e){
          return this.get("modeController").manipulateBehaviors(t, e, !1), this
        }, e.prototype.updateBehavior=function(t, e, i){
          return this.get("modeController").updateBehavior(t, e, i), this
        }, e.prototype.zoom=function(t, e, i, o){
          var n=this, a=this.get("group"), r=(0, h.clone)(a.getMatrix())||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ], s=this.get("minZoom"), l=this.get("maxZoom"), d=this.getZoom()||1, c=d*t, g=t, u=!1;
          if(s&&c<s?(g=s/d, u=!0):l&&c>l&&(g=l/d, u=!0), r=Ze(r, e?[
            [
              "t", -e.x, -e.y
            ], [
              "s", g, g
            ], [
              "t", e.x, e.y
            ]
          ]
          :[
            [
              "s", g, g
            ]
          ]), i){
            var p=(0, h.clone)(a.getMatrix());
            p||(p=[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ]);
            var f=p[
              0
            ], y=f*g, m=Tt({
              animateCfg:o, callback:function(){
                return n.emit("viewportchange", {
                  action:"zoom", matrix:a.getMatrix()
                })
              }
            });
            a.animate((function(t){
              if(1===t)p=r;
              else{
                var i=tt(f, y, t)/p[
                  0
                ];
                p=Ze(p, e?[
                  [
                    "t", -e.x, -e.y
                  ], [
                    "s", i, i
                  ], [
                    "t", e.x, e.y
                  ]
                ]
                :[
                  [
                    "s", i, i
                  ]
                ])
              }
              return{
                matrix:p
              }
            }), m)
          }
          else a.setMatrix(r), this.emit("viewportchange", {
            action:"zoom", matrix:r
          }), this.autoPaint();
          return!u
        }, e.prototype.zoomTo=function(t, e, i, o){
          var n=t/this.getZoom();
          return this.zoom(n, e, i, o)
        }, e.prototype.focusItem=function(t, e, i){
          var o=this.get("viewController"), n=!1;
          e?n=!0:void 0===e&&(n=this.get("animate"));
          var a={
          };
          i?a=i:void 0===i&&(a=this.get("animateCfg")), o.focus(t, n, a), this.autoPaint()
        }, e.prototype.focusItems=function(t, e, i, o){
          this.get("viewController").focusItems(t, e, i, o)
        }, e.prototype.autoPaint=function(){
          this.get("autoPaint")&&this.paint()
        }, e.prototype.paint=function(){
          this.emit("beforepaint"), this.get("canvas").draw(), this.emit("afterpaint")
        }, e.prototype.getPointByClient=function(t, e){
          return this.get("viewController").getPointByClient(t, e)
        }, e.prototype.getClientByPoint=function(t, e){
          return this.get("viewController").getClientByPoint(t, e)
        }, e.prototype.getPointByCanvas=function(t, e){
          return this.get("viewController").getPointByCanvas(t, e)
        }, e.prototype.getCanvasByPoint=function(t, e){
          return this.get("viewController").getCanvasByPoint(t, e)
        }, e.prototype.getGraphCenterPoint=function(){
          var t=this.get("group").getCanvasBBox();
          return{
            x:(t.minX+t.maxX)/2, y:(t.minY+t.maxY)/2
          }
        }, e.prototype.getViewPortCenterPoint=function(){
          return this.getPointByCanvas(this.get("width")/2, this.get("height")/2)
        }, e.prototype.showItem=function(t, e){
          void 0===e&&(e=!0);
          var i=this.get("itemController").changeItemVisibility(t, !0);
          if(e&&this.get("enabledStack")){
            var o=i.getID(), n={
            }, a={
            };
            switch(i.getType()){
              case"node":n.nodes=[
                {
                  id:o, visible:!1
                }
              ], a.nodes=[
                {
                  id:o, visible:!0
                }
              ];
              break;
              case"edge":n.nodes=[
                {
                  id:o, visible:!1
                }
              ], a.edges=[
                {
                  id:o, visible:!0
                }
              ];
              break;
              case"combo":n.nodes=[
                {
                  id:o, visible:!1
                }
              ], a.combos=[
                {
                  id:o, visible:!0
                }
              ]
            }
            this.pushStack("visible", {
              before:n, after:a
            })
          }
        }, e.prototype.hideItem=function(t, e){
          void 0===e&&(e=!0);
          var i=this.get("itemController").changeItemVisibility(t, !1);
          if(e&&this.get("enabledStack")){
            var o=i.getID(), n={
            }, a={
            };
            switch(i.getType()){
              case"node":n.nodes=[
                {
                  id:o, visible:!0
                }
              ], a.nodes=[
                {
                  id:o, visible:!1
                }
              ];
              break;
              case"edge":n.nodes=[
                {
                  id:o, visible:!0
                }
              ], a.edges=[
                {
                  id:o, visible:!1
                }
              ];
              break;
              case"combo":n.nodes=[
                {
                  id:o, visible:!0
                }
              ], a.combos=[
                {
                  id:o, visible:!1
                }
              ]
            }
            this.pushStack("visible", {
              before:n, after:a
            })
          }
        }, e.prototype.refreshItem=function(t){
          this.get("itemController").refreshItem(t)
        }, e.prototype.setAutoPaint=function(t){
          this.set("autoPaint", t), this.get("canvas").set("autoDraw", t)
        }, e.prototype.remove=function(t, e){
          void 0===e&&(e=!0), this.removeItem(t, e)
        }, e.prototype.removeItem=function(t, e){
          void 0===e&&(e=!0);
          var i=t;
          if((0, h.isString)(t)&&(i=this.findById(t)), !i&&(0, h.isString)(t))console.warn("The item ".concat(t, " to be removed does not exist!"));
          else if(i){
            var o="";
            if(i.getType&&(o=i.getType()), e&&this.get("enabledStack")){
              var n=(0, u.__assign)((0, u.__assign)({
              }, i.getModel()), {
                itemType:o
              }), a={
              };
              switch(o){
                case"node":a.nodes=[
                  n
                ], a.edges=[
                ];
                for(var r=i.getEdges(), s=r.length-1;
                s>=0;
                s--)a.edges.push((0, u.__assign)((0, u.__assign)({
                }, r[
                  s
                ].getModel()), {
                  itemType:"edge"
                }));
                break;
                case"edge":a.edges=[
                  n
                ];
                break;
                case"combo":a.combos=[
                  n
                ]
              }
              this.pushStack("delete", {
                before:a, after:{
                }
              })
            }
            if("node"===o)i.getModel().comboId&&this.updateComboTree(i, void 0, !1);
            if(this.get("itemController").removeItem(i), "combo"===o){
              var l=Et(this.get("comboTrees"));
              this.set("comboTrees", l)
            }
          }
        }, e.prototype.innerAddItem=function(t, e, i){
          if(!function(t, e){
            if("node"===t||"combo"===t){
              if(e.id&&!(0, h.isString)(e.id))return console.warn("G6 Warning Tips: missing 'id' property, or the 'id' %c".concat(e.id, "%c is not a string."), "font-size: 20px; color: red;", ""), !1
            }
            else if(!("edge"!==t||e.source&&e.target))return console.warn("G6 Warning Tips: missing 'source' or 'target' for the edge."), !1;
            return!0
          }
          (t, e))return!1;
          if(!e.id||!this.findById(e.id)){
            var o, n=this.get("comboTrees")||[
            ];
            if("combo"===t){
              var a=this.get("itemMap"), r=!1;
              if(n.forEach((function(n){
                r||Mt(n, (function(n){
                  if(e.parentId===n.id){
                    r=!0;
                    var s=(0, u.__assign)({
                      id:e.id, depth:n.depth+2
                    }, e);
                    n.children?n.children.push(s):n.children=[
                      s
                    ], e.depth=s.depth, o=i.addItem(t, e)
                  }
                  var l=a[
                    n.id
                  ];
                  return r&&l&&l.getType&&"combo"===l.getType()&&i.updateCombo(l, n.children), !0
                }))
              })), !r){
                var s=(0, u.__assign)({
                  id:e.id, depth:0
                }, e);
                e.depth=s.depth, n.push(s), o=i.addItem(t, e)
              }
              this.set("comboTrees", n), e.collapsed&&(this.collapseCombo(o, !1), this.updateCombo(o))
            }
            else if("node"===t&&(0, h.isString)(e.comboId)&&n){
              var l;
              (l=this.findById(e.comboId))&&l.getType&&"combo"!==l.getType()&&console.warn("'".concat(e.comboId, "' is not a id of a combo in the graph, the node will be added without combo.")), o=i.addItem(t, e);
              var d=this.get("itemMap"), c=!1, g=!1;
              n.forEach((function(t){
                g||c||Mt(t, (function(t){
                  if(t.id===e.id)return g=!0, !1;
                  if(e.comboId===t.id&&!g){
                    c=!0;
                    var o=(0, h.clone)(e);
                    o.itemType="node", t.children?t.children.push(o):t.children=[
                      o
                    ], o.depth=t.depth+1
                  }
                  return c&&d[
                    t.id
                  ].getType&&"combo"===d[
                    t.id
                  ].getType()&&i.updateCombo(d[
                    t.id
                  ], t.children), !0
                }))
              }))
            }
            else o=i.addItem(t, e);
            if("node"===t&&e.comboId||"combo"===t&&e.parentId)(l=this.findById(e.comboId||e.parentId))&&l.getType&&"combo"===l.getType()&&l.addChild(o);
            return o
          }
          console.warn("This item exists already. Be sure the id %c".concat(e.id, "%c is unique."), "font-size: 20px; color: red;", "")
        }, e.prototype.addItem=function(t, e, i, o){
          void 0===i&&(i=!0), void 0===o&&(o=!0);
          var n=this.get("comboSorted");
          this.set("comboSorted", n&&!o);
          var a=this.get("itemController"), r=this.innerAddItem(t, e, a);
          if(!1===r||!0===r)return r;
          var s=this.get("combos");
          if(s&&s.length>0&&this.sortCombos(), this.autoPaint(), i&&this.get("enabledStack")){
            var l=(0, u.__assign)((0, u.__assign)({
            }, r.getModel()), {
              itemType:t
            }), h={
            };
            switch(t){
              case"node":h.nodes=[
                l
              ];
              break;
              case"edge":h.edges=[
                l
              ];
              break;
              case"combo":h.combos=[
                l
              ]
            }
            this.pushStack("add", {
              before:{
              }, after:h
            })
          }
          return r
        }, e.prototype.addItems=function(t, e, i){
          void 0===t&&(t=[
          ]), void 0===e&&(e=!0), void 0===i&&(i=!0);
          var o=this.get("comboSorted");
          this.set("comboSorted", o&&!i);
          for(var n=this.get("itemController"), a=[
          ], r=0;
          r<t.length;
          r++){
            "edge"!==(s=t[
              r
            ]).type&&"vedge"!==s.type?a.push(this.innerAddItem(s.type, s.model, n)):a.push(void 0)
          }
          for(r=0;
          r<t.length;
          r++){
            var s;
            "edge"!==(s=t[
              r
            ]).type&&"vedge"!==s.type||(a[
              r
            ]
            =this.innerAddItem(s.type, s.model, n))
          }
          if(i){
            var l=this.get("combos");
            l&&l.length>0&&this.sortCombos()
          }
          if(this.autoPaint(), e&&this.get("enabledStack")){
            var h={
              nodes:[
              ], edges:[
              ], combos:[
              ]
            };
            for(r=0;
            r<t.length;
            r++){
              var d=t[
                r
              ].type, c=a[
                r
              ];
              if(c&&!0!==c){
                var g=(0, u.__assign)((0, u.__assign)({
                }, c.getModel()), {
                  itemType:d
                });
                switch(d){
                  case"node":h.nodes.push(g);
                  break;
                  case"edge":h.edges.push(g);
                  break;
                  case"combo":h.combos.push(g)
                }
              }
            }
            this.pushStack("addItems", {
              before:{
              }, after:h
            })
          }
          return a
        }, e.prototype.add=function(t, e, i, o){
          return void 0===i&&(i=!0), void 0===o&&(o=!0), this.addItem(t, e, i, o)
        }, e.prototype.updateItem=function(t, e, i){
          var o=this;
          void 0===i&&(i=!0);
          var n, a=this.get("itemController");
          n=(0, h.isString)(t)?this.findById(t):t;
          var r, s=i&&this.get("enabledStack");
          s&&(r=(0, h.clone)(n.getModel()));
          var l="";
          n.getType&&(l=n.getType());
          var d=(0, u.__spreadArray)([
          ], n.getStates(), !0);
          if("combo"===l&&(0, h.each)(d, (function(t){
            return o.setItemState(n, t, !1)
          })), a.updateItem(n, e), "combo"===l&&(0, h.each)(d, (function(t){
            return o.setItemState(n, t, !0)
          })), s){
            var c={
              nodes:[
              ], edges:[
              ], combos:[
              ]
            }, g={
              nodes:[
              ], edges:[
              ], combos:[
              ]
            }, p=(0, u.__assign)({
              id:r.id
            }, e);
            switch(l){
              case"node":c.nodes.push(r), g.nodes.push(p);
              break;
              case"edge":c.edges.push(r), g.edges.push(p);
              break;
              case"combo":c.combos.push(r), g.combos.push(p)
            }
            this.pushStack("update", {
              before:c, after:g
            })
          }
        }, e.prototype.update=function(t, e, i){
          void 0===i&&(i=!0), this.updateItem(t, e, i)
        }, e.prototype.setItemState=function(t, e, i){
          (0, h.isString)(t)&&(t=this.findById(t)), this.get("itemController").setItemState(t, e, i), this.get("stateController").updateState(t, e, i)
        }, e.prototype.priorityState=function(t, e){
          this.get("itemController").priorityState(t, e)
        }, e.prototype.data=function(t){
          At(t), this.set("data", t)
        }, e.prototype.render=function(){
          var t=this;
          this.set("comboSorted", !1);
          var e=this.get("data");
          if(this.get("enabledStack")&&this.clearStack(), !e)throw new Error("data must be defined first");
          var i=e.nodes, o=void 0===i?[
          ]
          :i, n=e.edges, a=void 0===n?[
          ]
          :n, r=e.combos, s=void 0===r?[
          ]
          :r;
          if(this.clear(!0), this.emit("beforerender"), t.addItems(o.map((function(t){
            return{
              type:"node", model:t
            }
          })), !1, !1), 0!==(null==s?void 0:s.length)){
            var l=Pt(s, o);
            this.set("comboTrees", l), t.addCombos(s)
          }
          t.addItems(a.map((function(t){
            return{
              type:"edge", model:t
            }
          })), !1, !1);
          var h=t.get("animate");
          (t.get("fitView")||t.get("fitCenter"))&&t.set("animate", !1);
          var d=t.get("layoutController");
          if(d){
            if(d.layout(c), this.destroyed)return
          }
          else c();
          function c(){
            (t.get("comboTrees")||[
            ]).forEach((function(e){
              Mt(e, (function(e){
                var i=t.findById(e.id);
                return"combo"===i.getType()&&e.collapsed&&(t.collapseCombo(e.id, !1), t.updateCombo(i)), !0
              }))
            })), t.get("fitView")?t.fitView():t.get("fitCenter")&&t.fitCenter(), t.autoPaint(), t.emit("afterrender"), (t.get("fitView")||t.get("fitCenter"))&&t.set("animate", h), setTimeout((function(){
              var e;
              null===(e=t.getCombos())||void 0===e||e.forEach((function(t){
                t.set("animate", !0)
              }))
            }), 0)
          }
          this.get("groupByTypes")||(s&&0!==s.length?this.sortCombos():e.nodes&&e.edges&&e.nodes.length<e.edges.length?this.getNodes().forEach((function(t){
            t.toFront()
          })):this.getEdges().forEach((function(t){
            t.toBack()
          })))
        }, e.prototype.read=function(t){
          this.data(t), this.render()
        }, e.prototype.diffItems=function(t, e, i){
          var o, n=this, a=this.get("itemMap");
          (0, h.each)(i, (function(i){
            if(o=a[
              i.id
            ]){
              if(n.get("animate")&&"node"===t){
                var r=o.getContainer().getMatrix();
                r||(r=[
                  1, 0, 0, 0, 1, 0, 0, 0, 1
                ]), o.set("originAttrs", {
                  x:r[
                    6
                  ], y:r[
                    7
                  ]
                })
              }
              n.updateItem(o, i, !1)
            }
            else o=n.addItem(t, i, !1);
            o&&e[
              "".concat(t, "s")
            ].push(o)
          }))
        }, e.prototype.changeData=function(t, e){
          var i, o=this;
          void 0===e&&(e=!0);
          var n=this, a=t||n.get("data");
          if(!At(a))return this;
          this.emit("beforechangedata"), e&&this.get("enabledStack")&&this.pushStack("changedata", {
            before:n.save(), after:a
          }), this.set("comboSorted", !1), this.removeHulls(), this.getNodes().map((function(t){
            return n.clearItemStates(t)
          })), this.getEdges().map((function(t){
            return n.clearItemStates(t)
          }));
          var r=this.get("canvas"), s=r.get("localRefresh");
          r.set("localRefresh", !1), n.get("data")||(n.data(a), n.render());
          var l=this.get("itemMap"), d={
            nodes:[
            ], edges:[
            ]
          }, c=a.combos;
          if(c){
            var g=Pt(c, a.nodes);
            this.set("comboTrees", g)
          }
          else this.set("comboTrees", [
          ]);
          this.diffItems("node", d, a.nodes), (0, h.each)(l, (function(t, e){
            l[
              e
            ].getModel().depth=0, t.getType&&"edge"===t.getType()||(t.getType&&"combo"===t.getType()?(delete l[
              e
            ], t.destroy()):d.nodes.indexOf(t)<0&&(delete l[
              e
            ], n.remove(t, !1)))
          }));
          for(var u=this.getCombos(), p=u.length-1;
          p>=0;
          p--)u[
            p
          ].destroyed&&u.splice(p, 1);
          c&&(n.addCombos(c), this.get("groupByTypes")||this.sortCombos()), this.diffItems("edge", d, a.edges), (0, h.each)(l, (function(t, e){
            (!t.getType||"node"!==t.getType()&&"combo"!==t.getType())&&d.edges.indexOf(t)<0&&(delete l[
              e
            ], n.remove(t, !1))
          })), (this.get("comboTrees")||[
          ]).forEach((function(t){
            Mt(t, (function(t){
              return"combo"===o.findById(t.id).getType()&&t.collapsed&&o.collapseCombo(t.id, !1), !0
            }))
          })), this.set({
            nodes:d.nodes, edges:d.edges
          });
          var f=(this.get("layout")||{
          }).relayoutAtChangeData, y=void 0===f||f, m=this.get("layoutController");
          return y&&m&&(m.changeData((function(){
            setTimeout((function(){
              var t;
              null===(t=n.getCombos())||void 0===t||t.forEach((function(t){
                t.set("animate", !0)
              }))
            }), 0)
          })), n.get("animate")&&!m.getLayoutType()?(n.positionsAnimate(), null===(i=n.getCombos())||void 0===i||i.forEach((function(t){
            return t.set("animate", !0)
          }))):n.autoPaint()), setTimeout((function(){
            r.set("localRefresh", s)
          }), 16), this.set("data", a), this.emit("afterchangedata"), this
        }, e.prototype.addCombos=function(t){
          var e=this.get("comboTrees");
          this.get("itemController").addCombos(e, t)
        }, e.prototype.createCombo=function(t, e, i){
          var o=this;
          void 0===i&&(i=!0);
          var n=this.get("itemController");
          this.set("comboSorted", !1);
          var a, r="";
          if(t){
            if((0, h.isString)(t))r=t, a={
              id:t
            };
            else{
              if(!(r=t.id))return void console.warn("Create combo failed. Please assign a unique string id for the adding combo.");
              a=t
            }
            var s=i&&this.get("enabledStack"), l={
              nodes:[
              ], combos:[
              ]
            };
            s&&e.forEach((function(t){
              var e=o.findById(t), i=e.getType();
              if("node"===i||"combo"===i){
                var n=e.getModel();
                l[
                  "".concat(i, "s")
                ].push({
                  id:t, parentId:"node"===i?n.comboId:n.parentId
                })
              }
            }));
            var d=this.get("comboTrees"), c=new Set(e), g=new Map;
            d&&(d.forEach((function(t){
              Mt(t, (function(t, e, i){
                if(c.has(t.id)){
                  if(e){
                    var a=o.findById(e.id), r=o.findById(t.id);
                    e.children.splice(i, 1), a.removeChild(r), n.updateCombo(a, e.children)
                  }
                  "combo"===t.itemType&&g.set(t.id, t)
                }
                return!0
              }))
            })), d=d.filter((function(t){
              return!c.has(t.id)
            })), this.set("comboTrees", d));
            var u={
              nodes:[
              ], combos:[
              ]
            }, p=e.map((function(t){
              var e=o.findById(t), i=e.getModel(), n="";
              e.getType&&(n=e.getType());
              var a=g.get(t)||{
                id:e.getID(), itemType:n
              };
              return"combo"===n?(a.parentId=r, i.parentId=r):"node"===n&&(a.comboId=r, i.comboId=r), s&&u[
                "".concat(n, "s")
              ].push({
                id:i.id, parentId:r
              }), a
            }));
            a.children=p, this.addItem("combo", a, !1), this.set("comboSorted", !1), d&&(d.forEach((function(t){
              kt(t, (function(t){
                return t.id!==r||(t.itemType="combo", t.children=p, !1)
              }))
            })), this.sortCombos()), s&&(u.combos.push(a), this.pushStack("createCombo", {
              before:l, after:u
            }));
            var f=this.findById(r);
            !f.getModel().parentId&&f.getChildren().combos.length&&this.updateComboTree(f, void 0, !1), setTimeout((function(){
              f.set("animate", !0)
            }), 0)
          }
        }, e.prototype.uncombo=function(t, e){
          var i, o, n=this;
          void 0===e&&(e=!0);
          var a=t;
          if((0, h.isString)(t)&&(a=this.findById(t)), !a||a.getType&&"combo"!==a.getType())console.warn("The item is not a combo!");
          else{
            var r=a.getModel(), s=a.getModel().parentId, l=this.get("comboTrees");
            l||(l=[
            ]);
            var d, c=this.get("itemMap"), g=a.get("id"), u=[
            ], p=this.get("combos"), f=this.findById(s), y=e&&this.get("enabledStack"), m={
            };
            if(y&&((m=(0, h.clone)(r)).children=[
            ]), l.forEach((function(t){
              d||Mt(t, (function(t){
                var e;
                if(t.id===g){
                  d=t, a.getEdges().map((function(t){
                    return t.getID()
                  })).forEach((function(t){
                    n.removeItem(t, !1)
                  }));
                  var i=p.indexOf(a);
                  p.splice(i, 1), delete c[
                    g
                  ];
                  var o=(0, h.clone)(a.getModel());
                  a.destroy(), n.emit("afterremoveitem", {
                    item:o, type:"combo"
                  })
                }
                return!s||!d||t.id!==s||(f.removeCombo(a), -1!==(i=(u=t.children).indexOf(d))&&u.splice(i, 1), null===(e=d.children)||void 0===e||e.forEach((function(t){
                  var e=n.findById(t.id), i=e.getModel();
                  e.getType&&"combo"===e.getType()?(t.parentId=s, delete t.comboId, i.parentId=s, delete i.comboId):e.getType&&"node"===e.getType()&&(t.comboId=s, i.comboId=s), f.addChild(e), u.push(t)
                })), n.updateCombo(f), !1)
              }))
            })), !s&&d){
              var v=l.indexOf(d);
              l.splice(v, 1), null===(i=d.children)||void 0===i||i.forEach((function(t){
                t.parentId=void 0;
                var e=n.findById(t.id).getModel();
                delete e.parentId, delete e.comboId, "node"!==t.itemType&&l.push(t)
              }))
            }
            if(y){
              var b={
                nodes:[
                ], combos:[
                ]
              }, x={
                nodes:[
                ], combos:[
                ]
              };
              null===(o=d.children)||void 0===o||o.forEach((function(t){
                var e=n.findById(t.id).getType();
                "node"!==e&&"combo"!==e||(b[
                  "".concat(e, "s")
                ].push({
                  id:t.id, parentId:g
                }), x[
                  "".concat(e, "s")
                ].push({
                  id:t.id, parentId:s
                }))
              })), b.combos.push(m), this.pushStack("uncombo", {
                before:b, after:x
              })
            }
          }
        }, e.prototype.updateCombos=function(t){
          var e=this;
          void 0===t&&(t=!1);
          var i=this, o=this.get("comboTrees"), n=i.get("itemController"), a=i.get("itemMap");
          (o||[
          ]).forEach((function(i){
            Mt(i, (function(i){
              var o;
              if(!i)return!0;
              var r=a[
                i.id
              ];
              if("combo"===(null===(o=null==r?void 0:r.getType)||void 0===o?void 0:o.call(r))){
                var s=(0, u.__spreadArray)([
                ], r.getStates(), !0);
                (0, h.each)(s, (function(t){
                  return e.setItemState(r, t, !1)
                })), n.updateCombo(r, i.children, t), (0, h.each)(s, (function(t){
                  return e.setItemState(r, t, !0)
                }))
              }
              return!0
            }))
          })), i.sortCombos()
        }, e.prototype.updateCombo=function(t){
          var e, i=this, o=t;
          if((0, h.isString)(t)&&(o=this.findById(t)), !o||o.getType&&"combo"!==o.getType())console.warn("The item to be updated is not a combo!");
          else{
            e=o.get("id");
            var n=this.get("comboTrees"), a=this.get("itemController"), r=this.get("itemMap");
            (n||[
            ]).forEach((function(t){
              Mt(t, (function(t){
                if(!t)return!0;
                var o=r[
                  t.id
                ];
                if(e===t.id&&o&&o.getType&&"combo"===o.getType()){
                  var n=(0, u.__spreadArray)([
                  ], o.getStates(), !0);
                  (0, h.each)(n, (function(t){
                    o.getStateStyle(t)&&i.setItemState(o, t, !1)
                  })), a.updateCombo(o, t.children), (0, h.each)(n, (function(t){
                    o.getStateStyle(t)&&i.setItemState(o, t, !0)
                  })), e&&(e=t.parentId)
                }
                return!0
              }))
            }))
          }
        }, e.prototype.updateComboTree=function(t, e, i){
          void 0===i&&(i=!0);
          var o;
          this.set("comboSorted", !1);
          var n, a=(o=(0, h.isString)(t)?this.findById(t):t).getModel(), r=a.comboId||a.parentId, s="";
          if(o.getType&&(s=o.getType()), e&&"combo"===s){
            var l, d=this.get("comboTrees"), c=!0;
            if((d||[
            ]).forEach((function(t){
              l||kt(t, (function(t){
                if(!l)return t.id===o.getID()&&(l=t), !0
              }))
            })), kt(l, (function(t){
              return t.id!==e||(c=!1, !1)
            })), !c)return void console.warn("Failed to update the combo tree! The parentId points to a descendant of the combo!")
          }
          if(i&&this.get("enabledStack")){
            var g={
            }, u={
            };
            "combo"===s?(g.combos=[
              {
                id:a.id, parentId:a.parentId
              }
            ], u.combos=[
              {
                id:a.id, parentId:e
              }
            ]):"node"===s&&(g.nodes=[
              {
                id:a.id, parentId:a.comboId
              }
            ], u.nodes=[
              {
                id:a.id, parentId:e
              }
            ]), this.pushStack("updateComboTree", {
              before:g, after:u
            })
          }
          if(a.parentId||a.comboId){
            var p=this.findById(a.parentId||a.comboId);
            p&&p.removeChild(o)
          }
          ("combo"===s?a.parentId=e:"node"===s&&(a.comboId=e), e)&&((n=this.findById(e))&&n.addChild(o));
          r&&((n=this.findById(r))&&n.removeChild(o));
          var f=Et(this.get("comboTrees"), a.id, e);
          this.set("comboTrees", f), this.updateCombos()
        }, e.prototype.save=function(){
          var t=[
          ], e=[
          ], i=[
          ];
          return(0, h.each)(this.get("nodes"), (function(e){
            t.push(e.getModel())
          })), (0, h.each)(this.get("edges"), (function(t){
            e.push(t.getModel())
          })), (0, h.each)(this.get("combos"), (function(t){
            i.push(t.getModel())
          })), {
            nodes:t, edges:e, combos:i
          }
        }, e.prototype.changeSize=function(t, e){
          return this.get("viewController").changeSize(t, e), this
        }, e.prototype.refresh=function(){
          var t=this;
          if(t.emit("beforegraphrefresh"), t.get("animate"))t.positionsAnimate();
          else{
            var e=t.get("nodes"), i=t.get("edges"), o=t.get("edges");
            (0, h.each)(e, (function(t){
              t.refresh()
            })), (0, h.each)(i, (function(t){
              t.refresh()
            })), (0, h.each)(o, (function(t){
              t.refresh()
            }))
          }
          t.emit("aftergraphrefresh"), t.autoPaint()
        }, e.prototype.getNodes=function(){
          return this.get("nodes")
        }, e.prototype.getEdges=function(){
          return this.get("edges")
        }, e.prototype.getCombos=function(){
          return this.get("combos")
        }, e.prototype.getComboChildren=function(t){
          if((0, h.isString)(t)&&(t=this.findById(t)), t&&(!t.getType||"combo"===t.getType()))return t.getChildren();
          console.warn("The combo does not exist!")
        }, e.prototype.positionsAnimate=function(t){
          var e=this;
          e.emit("beforeanimate");
          var i=e.get("animateCfg"), o=i.onFrame, n=t?e.getNodes().concat(e.getCombos()):e.getNodes(), a=n.map((function(t){
            var e=t.getModel();
            return{
              id:e.id, x:e.x, y:e.y
            }
          }));
          e.stopAnimate();
          var r=e.get("canvas");
          e.animating=!0, setTimeout((function(){
            r.animate((function(i){
              (0, h.each)(a, (function(t){
                var n=e.findById(t.id);
                if(n&&!n.destroyed){
                  var a=n.get("originAttrs"), r=n.get("model"), s=n.getContainer().getMatrix();
                  if(null==a&&(s&&(a={
                    x:s[
                      6
                    ], y:s[
                      7
                    ]
                  }), n.set("originAttrs", a||0)), o){
                    var l=o(n, i, t, a||{
                      x:0, y:0
                    });
                    n.set("model", Object.assign(r, l))
                  }
                  else a?(r.x=a.x+(t.x-a.x)*i, r.y=a.y+(t.y-a.y)*i):(r.x=t.x, r.y=t.y)
                }
              })), e.refreshPositions(t)
            }), {
              duration:i.duration, easing:i.easing, callback:function(){
                (0, h.each)(n, (function(t){
                  t.set("originAttrs", null)
                })), i.callback&&i.callback(), e.emit("afteranimate"), e.animating=!1
              }
            })
          }), 0)
        }, e.prototype.refreshPositions=function(t){
          var e=this;
          e.emit("beforegraphrefreshposition");
          var i, o=e.get("nodes"), n=e.get("edges"), a=e.get("vedges"), r=e.get("combos"), s={
          }, l=function(t){
            (0, h.each)(t, (function(t){
              i=t.getModel();
              var e=t.get("originAttrs");
              if(!e||i.x!==e.x||i.y!==e.y){
                var o=t.updatePosition({
                  x:i.x, y:i.y
                });
                s[
                  i.id
                ]
                =o, i.comboId&&(s[
                  i.comboId
                ]
                =s[
                  i.comboId
                ]
                ||o), i.parentId&&(s[
                  i.parentId
                ]
                =s[
                  i.parentId
                ]
                ||o)
              }
            }))
          };
          l(r), l(o), r&&0!==r.length&&(t?(l(r), e.updateCombos()):e.updateCombos()), (0, h.each)(n, (function(t){
            var e=t.getSource().getModel(), i=t.getTarget();
            if(!(0, h.isPlainObject)(i)){
              var o=i.getModel();
              (s[
                e.id
              ]
              ||s[
                o.id
              ]
              ||t.getModel().isComboEdge)&&t.refresh()
            }
          })), (0, h.each)(a, (function(t){
            t.refresh()
          })), e.emit("aftergraphrefreshposition"), e.autoPaint()
        }, e.prototype.stopAnimate=function(){
          var t=this.get("canvas").cfg.timeline;
          t&&t.stopAllAnimations()
        }, e.prototype.isAnimating=function(){
          return this.animating
        }, e.prototype.getZoom=function(){
          var t=this.get("group").getMatrix();
          return t?t[
            0
          ]
          :1
        }, e.prototype.getCurrentMode=function(){
          return this.get("modeController").getMode()
        }, e.prototype.setMode=function(t){
          return this.get("modeController").setMode(t), this
        }, e.prototype.clear=function(t){
          var e;
          return void 0===t&&(t=!1), null===(e=this.get("canvas"))||void 0===e||e.clear(), this.initGroups(), this.set({
            itemMap:{
            }, nodes:[
            ], edges:[
            ], vedges:[
            ], groups:[
            ], combos:[
            ], comboTrees:[
            ]
          }), t||this.emit("afterrender"), this
        }, e.prototype.updateLayout=function(t, e, i, o){
          var n=this;
          void 0===t&&(t={
          }), void 0===o&&(o=!0);
          var a=this.get("layoutController");
          if((0, h.isString)(t)&&(t={
            type:t
          }), e){
            var r=i;
            r||(r="begin"===e?{
              x:0, y:0
            }
            :{
              x:this.getWidth()/2, y:this.getHeight()/2
            }), r=this.getPointByCanvas(r.x, r.y);
            var s=[
              "force", "gForce", "fruchterman", "force2"
            ];
            s.includes(t.type)||!t.type&&s.includes(null==a?void 0:a.layoutType)?t.center=[
              r.x, r.y
            ]
            :this.once("afterlayout", (function(t){
              var i=n.getGroup().getMatrix()||[
                1, 0, 0, 0, 1, 0, 0, 0, 1
              ];
              r.x=r.x*i[
                0
              ]
              +i[
                6
              ], r.y=r.y*i[
                0
              ]
              +i[
                7
              ];
              var o=n.getGroup().getCanvasBBox(), a=o.minX, s=o.maxX, l=o.minY, h={
                x:(a+s)/2, y:(l+o.maxY)/2
              };
              "begin"===e&&(h.x=a, h.y=l), n.translate(r.x-h.x, r.y-h.y)
            }))
          }
          var l=(0, u.__assign)({
          }, this.get("layout")), d={
          };
          Object.assign(d, l, t), t.pipes&&!t.type?delete d.type:!t.pipes&&d.type&&delete d.pipes, this.set("layout", d), a&&(a.isLayoutTypeSame(d)&&d.gpuEnabled===l.gpuEnabled?a.updateLayoutCfg(d):a.changeLayout(d), o&&this.get("enabledStack")&&this.pushStack("layout", {
            before:l, after:d
          }))
        }, e.prototype.destroyLayout=function(){
          var t=this.get("layoutController");
          null==t||t.destroyLayout()
        }, e.prototype.layout=function(){
          var t, e=this.get("layoutController"), i=this.get("layout");
          i&&e&&(i.workerEnabled?e.layout():(null===(t=e.layoutMethods)||void 0===t?void 0:t.length)?e.relayout(!0):e.layout())
        }, e.prototype.collapseCombo=function(t, e){
          var i=this;
          if(void 0===e&&(e=!0), !this.destroyed)if((0, h.isString)(t)&&(t=this.findById(t)), t){
            this.emit("beforecollapseexpandcombo", {
              action:"collapse", item:t
            });
            var o=t.getModel();
            this.get("itemController").collapseCombo(t, e), o.collapsed=!0;
            var n=this.getEdges().concat(this.get("vedges")), a=[
            ], r=this.get("comboTrees"), s=!1;
            (r||[
            ]).forEach((function(t){
              s||kt(t, (function(t){
                if(s&&t.depth<=o.depth)return!1;
                if(o.id===t.id&&(s=!0), s){
                  var e=i.findById(t.id);
                  e&&e.getType&&"combo"===e.getType()&&(a=(a=a.concat(e.getNodes())).concat(e.getCombos()))
                }
                return!0
              }))
            }));
            var l={
            };
            n.forEach((function(t){
              var e=t.getModel(), n=e.isVEdge, r=e.size, s=void 0===r?1:r;
              if(!t.isVisible()||n){
                var h, d=t.getSource(), c=t.getTarget(), g=null;
                if(d.getModel().id===o.id||a.includes(d)&&!a.includes(c)?(g=c, h=!1):(c.getModel().id===o.id||!a.includes(d)&&a.includes(c))&&(g=d, h=!0), g){
                  if(n)return void i.removeItem(t, !1);
                  for(var u=g.getModel();
                  !g.isVisible();
                  ){
                    var p=u.parentId, f=u.comboId, y=p||f;
                    if(!(g=i.findById(y))||!y)return;
                    u=g.getModel()
                  }
                  var m=u.id, v=h?{
                    source:m, target:o.id, size:s, isVEdge:!0
                  }
                  :{
                    source:o.id, target:m, size:s, isVEdge:!0
                  }, b="".concat(v.source, "-").concat(v.target);
                  if(l[
                    b
                  ])return void(l[
                    b
                  ].size+=s);
                  l[
                    b
                  ]
                  =v
                }
              }
            })), this.addItems(Object.values(l).map((function(t){
              return{
                type:"vedge", model:t
              }
            })), !1), this.emit("aftercollapseexpandcombo", {
              action:"collapse", item:t
            })
          }
          else console.warn("The combo to be collapsed does not exist!")
        }, e.prototype.expandCombo=function(t, e){
          var i=this;
          if(void 0===e&&(e=!0), (0, h.isString)(t)&&(t=this.findById(t)), !t||t.getType&&"combo"!==t.getType())console.warn("The combo to be collapsed does not exist!");
          else{
            this.emit("beforecollapseexpandcombo", {
              action:"expand", item:t
            });
            var o=t.getModel();
            this.get("itemController").expandCombo(t, e), o.collapsed=!1;
            var n=this.getEdges().concat(this.get("vedges")), a=[
            ], r=this.get("comboTrees"), s=!1;
            (r||[
            ]).forEach((function(t){
              s||kt(t, (function(t){
                if(s&&t.depth<=o.depth)return!1;
                if(o.id===t.id&&(s=!0), s){
                  var e=i.findById(t.id);
                  e&&e.getType&&"combo"===e.getType()&&(a=(a=a.concat(e.getNodes())).concat(e.getCombos()))
                }
                return!0
              }))
            }));
            var l={
            };
            n.forEach((function(t){
              if(!t.isVisible()||t.getModel().isVEdge){
                var e, n=t.getSource(), r=t.getTarget(), s=n.get("id"), h=r.get("id"), d=null;
                if(s===o.id||a.includes(n)&&!a.includes(r)?(d=r, e=!1):h===o.id||!a.includes(n)&&a.includes(r)?(d=n, e=!0):a.includes(n)&&a.includes(r)&&n.isVisible()&&r.isVisible()&&t.show(), d){
                  var c=t.getModel(), g=c.isVEdge, u=c.size, p=void 0===u?1:u;
                  if(g)return void i.removeItem(t, !1);
                  for(var f=d.getModel();
                  !d.isVisible();
                  ){
                    var y=f.parentId, m=f.comboId, v=y||m;
                    if(!(d=i.findById(v))||!v)return;
                    f=d.getModel()
                  }
                  for(var b=f.id, x=e?r:n, S=x.getModel();
                  !x.isVisible();
                  ){
                    var w=S.parentId, k=S.comboId, M=w||k;
                    if(!(x=i.findById(M))||!M)return;
                    if(S.comboId===o.id||S.parentId===o.id)break;
                    S=x.getModel()
                  }
                  var C=S.id;
                  if(b){
                    var _=e?{
                      source:b, target:C, isVEdge:!0, size:p
                    }
                    :{
                      source:C, target:b, isVEdge:!0, size:p
                    }, I="".concat(_.source, "-").concat(_.target);
                    if(l[
                      I
                    ])return void(l[
                      I
                    ].size+=p);
                    l[
                      I
                    ]
                    =_
                  }
                }
              }
            })), this.addItems(Object.values(l).map((function(t){
              return{
                type:"vedge", model:t
              }
            })), !1), this.emit("aftercollapseexpandcombo", {
              action:"expand", item:t
            })
          }
        }, e.prototype.collapseExpandCombo=function(t, e){
          if(void 0===e&&(e=!0), (0, h.isString)(t)&&(t=this.findById(t)), t&&(!t.getType||"combo"===t.getType())){
            for(var i=t.getModel(), o=this.findById(i.parentId);
            o;
            ){
              var n=o.getModel();
              if(n.collapsed)return console.warn("Fail to expand the combo since it's ancestor combo is collapsed."), void(o=void 0);
              o=this.findById(n.parentId)
            }
            i.collapsed?this.expandCombo(t, e):this.collapseCombo(t, e), this.updateCombo(t)
          }
        }, e.prototype.getNeighbors=function(t, e){
          var i=t;
          return(0, h.isString)(t)&&(i=this.findById(t)), i.getNeighbors(e)
        }, e.prototype.getNodeDegree=function(t, e, i){
          void 0===e&&(e=void 0), void 0===i&&(i=!1);
          var o=t;
          (0, h.isString)(t)&&(o=this.findById(t));
          var n=this.get("degrees");
          n&&!i||(n=(0, y.getDegree)(this.save()), this.set("degrees", n));
          var a=n[
            o.getID()
          ], r=0;
          if(!a)return 0;
          switch(e){
            case"in":r=a.inDegree;
            break;
            case"out":r=a.outDegree;
            break;
            case"all":r=a;
            break;
            default:r=a.degree
          }
          return r
        }, e.prototype.getUndoStack=function(){
          return this.undoStack
        }, e.prototype.getRedoStack=function(){
          return this.redoStack
        }, e.prototype.getStackData=function(){
          return this.get("enabledStack")?{
            undoStack:this.undoStack.toArray(), redoStack:this.redoStack.toArray()
          }
          :null
        }, e.prototype.clearStack=function(){
          this.get("enabledStack")&&(this.undoStack.clear(), this.redoStack.clear(), this.emit("stackchange", {
            undoStack:this.undoStack, redoStack:this.redoStack
          }))
        }, e.prototype.pushStack=function(t, e, i){
          if(void 0===t&&(t="update"), void 0===i&&(i="undo"), this.get("enabledStack")){
            var o=e?(0, h.clone)(e):{
              before:{
              }, after:(0, h.clone)(this.save())
            };
            "redo"===i?this.redoStack.push({
              action:t, data:o
            }):this.undoStack.push({
              action:t, data:o
            }), this.emit("stackchange", {
              action:t, stackType:i, undoStack:this.undoStack, redoStack:this.redoStack
            })
          }
          else console.warn("请先启用 undo & redo 功能，在实例化 Graph 时候配置 enabledStack: true !")
        }, e.prototype.getAdjMatrix=function(t, e){
          void 0===t&&(t=!0), void 0===e&&(e=this.get("directed"));
          var i=this.get("adjMatrix");
          return i&&t||(i=(0, y.getAdjMatrix)(this.save(), e), this.set("adjMatrix", i)), i
        }, e.prototype.getShortestPathMatrix=function(t, e){
          void 0===t&&(t=!0), void 0===e&&(e=this.get("directed"));
          var i=this.get("adjMatrix"), o=this.get("shortestPathMatrix");
          return i&&t||(i=(0, y.getAdjMatrix)(this.save(), e), this.set("adjMatrix", i)), o&&t||(o=(0, y.floydWarshall)(this.save(), e), this.set("shortestPathMatrix", o)), o
        }, e.prototype.on=function(e, i, o){
          return t.prototype.on.call(this, e, i, o)
        }, e.prototype.destroy=function(){
          var t, e, i, o, n;
          this.emit("beforedestroy"), this.clear(), this.clearStack(), null===(t=this.get("itemController"))||void 0===t||t.destroy(), null===(e=this.get("modeController"))||void 0===e||e.destroy(), null===(i=this.get("viewController"))||void 0===i||i.destroy(), null===(o=this.get("stateController"))||void 0===o||o.destroy(), null===(n=this.get("canvas"))||void 0===n||n.destroy(), this.cfg=null, this.destroyed=!0, this.redoStack=null, this.undoStack=null, this.emit("afterdestroy")
        }, e.prototype.createHull=function(t){
          if(t.members&&!(t.members.length<1)){
            var e=this.get("hullGroup"), i=this.get("hullMap");
            if(i||(i={
            }, this.set("hullMap", i)), e&&!e.get("destroyed")||((e=this.get("group").addGroup({
              id:"hullGroup"
            })).toBack(), this.set("hullGroup", e)), i[
              t.id
            ])return console.warn("Existed hull id."), i[
              t.id
            ];
            var o=e.addGroup({
              id:"".concat(t.id, "-container")
            }), n=new Ke(this, (0, u.__assign)((0, u.__assign)({
            }, t), {
              group:o
            }));
            return i[
              n.id
            ]
            =n, n
          }
          console.warn("Create hull failed! The members is empty.")
        }, e.prototype.getHulls=function(){
          return this.get("hullMap")
        }, e.prototype.getHullById=function(t){
          return this.get("hullMap")[
            t
          ]
        }, e.prototype.removeHull=function(t){
          var e, i;
          i=(0, h.isString)(t)?this.getHullById(t):t, null===(e=this.get("hullMap"))||void 0===e||delete e[
            i.id
          ], i.destroy()
        }, e.prototype.removeHulls=function(){
          var t=this.getHulls();
          t&&Object.keys(t).length&&(Object.keys(t).forEach((function(e){
            t[
              e
            ].destroy()
          })), this.set("hullMap", {
          }))
        }, e
      }
      (p.A);
      function He(t){
        return(He="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      var Qe=f.pd, $e="-shape", ti="-label", ei=[
        "startArrow", "endArrow"
      ], ii={
        lineWidth:1, stroke:void 0, fill:void 0, lineAppendWidth:1, opacity:void 0, strokeOpacity:void 0, fillOpacity:void 0, x:0, y:0, r:10, width:20, height:20, shadowColor:void 0, shadowBlur:0, shadowOffsetX:0, shadowOffsetY:0
      }, oi={
        edge:{
          lineWidth:1, stroke:"#000", lineDash:void 0, startArrow:!1, endArrow:!1, opacity:void 0, strokeOpacity:void 0, fillOpacity:void 0, shadowColor:void 0, shadowBlur:0, shadowOffsetX:0, shadowOffsetY:0
        }, node:ii, combo:ii
      }, ni="-label-bg", ai={
        options:{
          labelCfg:{
            style:{
              fontFamily:ct.windowFontFamily
            }
          }, descriptionCfg:{
            style:{
              fontFamily:ct.windowFontFamily
            }
          }
        }, itemType:"", type:"", getCustomConfig:function(t){
          return{
          }
        }, getOptions:function(t, e){
          return"move"===e||(null==e?void 0:e.includes("bbox"))?t:(0, h.deepMix)({
          }, this.options, this.getCustomConfig(t)||{
          }, t)
        }, draw:function(t, e){
          e.shapeMap={
          }, this.mergeStyle=this.getOptions(t);
          var i=this.drawShape(t, e);
          if(i.set("className", this.itemType+$e), e.shapeMap[
            this.itemType+$e
          ]
          =i, t.label){
            var o=this.drawLabel(t, e);
            o.set("className", this.itemType+ti), e.shapeMap[
              this.itemType+ti
            ]
            =o
          }
          return i
        }, afterDraw:function(t, e, i){
        }, drawShape:function(t, e){
          return null
        }, drawLabel:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)||{
          }).labelCfg||{
          }, o=this.getLabelStyle(t, i, e), n=o.rotate;
          delete o.rotate;
          var a=e.addShape("text", {
            attrs:o, draggable:!0, className:"text-shape", name:"text-shape", labelRelated:!0
          });
          if(e.shapeMap[
            "text-shape"
          ]
          =a, !isNaN(n)&&""!==n){
            var r=a.getBBox(), s=[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ];
            if(o.rotateCenter)switch(o.rotateCenter){
              case"center":s=Qe(s, [
                [
                  "t", -r.width/2, -r.height/2
                ], [
                  "r", n
                ], [
                  "t", r.width/2, r.height/2
                ]
              ]);
              break;
              case"lefttop":s=Qe(s, [
                [
                  "t", -o.x, -o.y
                ], [
                  "r", n
                ], [
                  "t", o.x, o.y
                ]
              ]);
              break;
              case"leftcenter":s=Qe(s, [
                [
                  "t", -o.x, -o.y-r.height/2
                ], [
                  "r", n
                ], [
                  "t", o.x, o.y+r.height/2
                ]
              ]);
              break;
              default:s=Qe(s, [
                [
                  "t", -r.width/2, -r.height/2
                ], [
                  "r", n
                ], [
                  "t", r.width/2, r.height/2
                ]
              ])
            }
            else s=Qe(s, [
              [
                "t", -o.x, -o.y-r.height/2
              ], [
                "r", n
              ], [
                "t", o.x, o.y+r.height/2
              ]
            ]);
            a.setMatrix(s)
          }
          if(o.background){
            var l=this.drawLabelBg(t, e, a), h=this.itemType+ni;
            l.set("classname", h), e.shapeMap[
              h
            ]
            =l, a.toFront()
          }
          return a
        }, drawLabelBg:function(t, e, i){
          var o=this.options.labelCfg, n=(0, h.mix)({
          }, o, t.labelCfg), a=this.getLabelBgStyleByPosition(i, n), r=e.addShape("rect", {
            name:"text-bg-shape", attrs:a, labelRelated:!0
          });
          return e.shapeMap[
            "text-bg-shape"
          ]
          =r, r
        }, getLabelStyleByPosition:function(t, e, i){
          return{
            text:t.label
          }
        }, getLabelBgStyleByPosition:function(t, e){
          return{
          }
        }, getLabelStyle:function(t, e, i){
          var o=this.getLabelStyleByPosition(t, e, i), n="".concat(this.itemType, "Label"), a=ct[
            n
          ]
          ?ct[
            n
          ].style:null;
          return(0, u.__assign)((0, u.__assign)((0, u.__assign)({
          }, a), o), e.style)
        }, getShapeStyle:function(t){
          return t.style
        }, update:function(t, e, i){
          this.updateShapeStyle(t, e, i), this.updateLabel(t, e, i)
        }, updateShapeStyle:function(t, e, i){
          var o, n=e.getContainer(), a=e.getKeyShape(), r=(0, h.mix)({
          }, a.attr(), t.style), s=function(t){
            var e, i=r[
              t
            ];
            if((0, h.isPlainObject)(i)){
              var s=(null===(o=n.shapeMap)||void 0===o?void 0:o[
                t
              ])||n.find((function(e){
                return e.get("name")===t
              }));
              null==s||s.attr(i)
            }
            else a.attr(((e={
            })[
              t
            ]
            =i, e))
          };
          for(var l in r)s(l)
        }, updateLabel:function(t, e, i){
          var o, n, a=e.getContainer(), r=(this.mergeStyle||this.getOptions({
          }, i)||{
          }).labelCfg, s=void 0===r?{
          }
          :r, l=this.itemType+ti, d=a.shapeMap[
            l
          ]
          ||a.find((function(t){
            return t.get("className")===l
          })), c=this.itemType+ni, g=a.shapeMap[
            c
          ]
          ||a.find((function(t){
            return t.get("className")===c
          }));
          if(d&&void 0===t.label&&(a.removeChild(d), delete a.shapeMap[
            l
          ], g&&(a.removeChild(g), delete a.shapeMap[
            c
          ])), t.label||""===t.label)if(d){
            (!i||"bbox|label"===i||"edge"===this.itemType&&"style"!==i)&&(s=(0, h.deepMix)(s, t.labelCfg));
            var p=this.getLabelStyleByPosition(t, s, a), f=null===(o=t.labelCfg)||void 0===o?void 0:o.style, y=(0, u.__assign)((0, u.__assign)({
            }, p), f), m=y.rotate;
            if(delete y.rotate, isNaN(m)||""===m)1!==(null===(n=d.getMatrix())||void 0===n?void 0:n[
              4
            ])&&d.resetMatrix(), d.attr(y);
            else{
              var v=[
                1, 0, 0, 0, 1, 0, 0, 0, 1
              ];
              v=Qe(v, [
                [
                  "t", -y.x, -y.y
                ], [
                  "r", m
                ], [
                  "t", y.x, y.y
                ]
              ]), y.matrix=v, d.attr(y)
            }
            if(g)if(y.background){
              var b=this.getLabelBgStyleByPosition(d, s);
              g.attr(b)
            }
            else a.removeChild(g);
            else y.background&&((g=this.drawLabelBg(t, a, d)).set("classname", c), a.shapeMap[
              c
            ]
            =g, d.toFront())
          }
          else{
            var x=this.drawLabel(t, a);
            x.set("className", l), a.shapeMap[
              l
            ]
            =x
          }
        }, afterUpdate:function(t, e){
        }, setState:function(t, e, i){
          var o, n, a, r=i.get("keyShape");
          if(r&&!r.destroyed){
            var s=i.getType(), l=(0, h.isBoolean)(e)?t:"".concat(t, ":").concat(e), d=this.getStateStyle(l, i), c=i.getStateStyle(l);
            if(c||d){
              var g=(0, h.mix)({
              }, c||d), u=i.getContainer(), p={
                x:1, y:1, cx:1, cy:1, matrix:1
              };
              if("combo"===s&&(p.r=1, p.width=1, p.height=1), e){
                var f=function(t){
                  var e, i=g[
                    t
                  ];
                  if((0, h.isPlainObject)(i)&&!ei.includes(t)){
                    var o=(null===(a=u.shapeMap)||void 0===a?void 0:a[
                      t
                    ])||u.find((function(e){
                      return e.get("name")===t
                    }));
                    null==o||o.attr(i)
                  }
                  else r.attr(((e={
                  })[
                    t
                  ]
                  =i, e))
                };
                for(var y in g)f(y)
              }
              else{
                var m=Lt(i.getCurrentStatesStyle()), v=i.getModel(), b=(0, h.mix)({
                }, v.style, Lt(i.getOriginStyle())), x=r.get("name"), S=r.attr(), w={
                };
                Object.keys(S).forEach((function(t){
                  if("img"!==t){
                    var e=S[
                      t
                    ];
                    e&&"object"===He(e)?w[
                      t
                    ]
                    =(0, h.clone)(e):w[
                      t
                    ]
                    =e
                  }
                }));
                var k={
                }, M=function(t){
                  var e=g[
                    t
                  ];
                  if((0, h.isPlainObject)(e)&&!ei.includes(t)){
                    var i=u.shapeMap[
                      t
                    ]
                    ||u.find((function(e){
                      return e.get("name")===t
                    }));
                    if(i){
                      var o=Lt(i.attr());
                      (0, h.each)(e, (function(e, n){
                        if(t===x&&w[
                          n
                        ]
                        &&!p[
                          n
                        ]){
                          delete w[
                            n
                          ];
                          var a=b[
                            t
                          ]
                          [
                            n
                          ]
                          ||oi[
                            s
                          ]
                          [
                            n
                          ];
                          r.attr(n, a)
                        }
                        else if(o[
                          n
                        ]
                        ||0===o[
                          n
                        ]){
                          delete o[
                            n
                          ];
                          var l=b[
                            t
                          ]
                          [
                            n
                          ]
                          ||oi[
                            s
                          ]
                          [
                            n
                          ];
                          i.attr(n, l)
                        }
                      })), k[
                        t
                      ]
                      =o
                    }
                  }
                  else if(w[
                    t
                  ]
                  &&!p[
                    t
                  ]){
                    delete w[
                      t
                    ];
                    var n=b[
                      t
                    ]
                    ||(b[
                      x
                    ]
                    ?b[
                      x
                    ]
                    [
                      t
                    ]
                    :void 0)||oi[
                      s
                    ]
                    [
                      t
                    ];
                    r.attr(t, n)
                  }
                };
                for(var C in g)M(C);
                for(var y in x?k[
                  x
                ]
                =w:(0, h.mix)(k, w), m)if(!p[
                  y
                ]){
                  var _=m[
                    y
                  ];
                  (0, h.isPlainObject)(_)&&!ei.includes(y)||(x?((0, h.mix)(b[
                    x
                  ], ((n={
                  })[
                    y
                  ]
                  =_, n)), delete b[
                    y
                  ]):(0, h.mix)(b, ((o={
                  })[
                    y
                  ]
                  =_, o)), delete m[
                    y
                  ])
                }
                var I={
                };
                (0, h.deepMix)(I, b, k, m);
                var P=!1, E=function(t){
                  var e, i, o=I[
                    t
                  ];
                  if((0, h.isPlainObject)(o)&&!ei.includes(t)){
                    var n=u.shapeMap[
                      t
                    ]
                    ||u.find((function(e){
                      return e.get("name")===t
                    }));
                    n&&(("text"===n.get("type")||n.get("labelRelated"))&&(delete o.x, delete o.y, delete o.matrix), t===x&&("combo"===s&&(delete o.r, delete o.width, delete o.height), P=!0), n.attr(o))
                  }
                  else if(!P){
                    var a=o||oi[
                      s
                    ]
                    [
                      t
                    ];
                    "combo"===s?x||r.attr(((e={
                    })[
                      t
                    ]
                    =a, e)):r.attr(((i={
                    })[
                      t
                    ]
                    =a, i))
                  }
                };
                for(var B in I)E(B)
              }
            }
          }
        }, getStateStyle:function(t, e){
          var i=e.getModel(), o=e.getType(), n=this.getOptions(i), a=n.stateStyles, r=n.style, s=void 0===r?{
          }
          :r, l=i.stateStyles?i.stateStyles[
            t
          ]
          :a&&a[
            t
          ];
          return"combo"===o?(0, h.clone)(l):(0, h.mix)({
          }, s, l)
        }, getControlPoints:function(t){
          return t.controlPoints
        }, getAnchorPoints:function(t){
          var e, i;
          return(null==t?void 0:t.anchorPoints)||(null===(e=this.getCustomConfig(t))||void 0===e?void 0:e.anchorPoints)||(null===(i=this.options)||void 0===i?void 0:i.anchorPoints)
        }
      }, ri={
        itemType:"node", shapeType:"single-node", labelPosition:"center", offset:ct.nodeLabel.offset, getSize:function(t){
          var e, i=(null===(e=this.mergeStyle)||void 0===e?void 0:e.size)||t.size||this.getOptions({
          }).size||ct.defaultNode.size;
          return(0, h.isArray)(i)&&1===i.length&&(i=[
            i[
              0
            ], i[
              0
            ]
          ]), (0, h.isArray)(i)||(i=[
            i, i
          ]), i
        }, getLabelStyleByPosition:function(t, e){
          var i=e.maxLength, o=t.label;
          i&&(o=It(o, i));
          var n=e.position||this.labelPosition;
          if("center"===n)return{
            x:0, y:0, text:o, textBaseline:"middle", textAlign:"center"
          };
          var a=e.offset;
          (0, h.isNil)(a)&&(a=this.offset);
          var r, s=this.getSize(t);
          switch(n){
            case"top":r={
              x:0, y:-s[
                1
              ]
              /2-a, textBaseline:"bottom", textAlign:"center"
            };
            break;
            case"bottom":r={
              x:0, y:s[
                1
              ]
              /2+a, textBaseline:"top", textAlign:"center"
            };
            break;
            case"left":r={
              x:-s[
                0
              ]
              /2-a, y:0, textBaseline:"middle", textAlign:"right"
            };
            break;
            default:r={
              x:s[
                0
              ]
              /2+a, y:0, textBaseline:"middle", textAlign:"left"
            }
          }
          return r.text=o, r
        }, getLabelBgStyleByPosition:function(t, e){
          var i;
          if(!t)return{
          };
          var o=null===(i=e.style)||void 0===i?void 0:i.background;
          if(!o)return{
          };
          var n=t.getBBox(), a=zt(o.padding), r=n.width+a[
            1
          ]
          +a[
            3
          ], s=n.height+a[
            0
          ]
          +a[
            2
          ];
          return(0, u.__assign)((0, u.__assign)({
            x:n.minX-a[
              3
            ], y:n.minY-a[
              0
            ]
          }, o), {
            width:r, height:s
          })
        }, drawShape:function(t, e){
          var i=this.shapeType, o=this.getShapeStyle(t), n=e.addShape(i, {
            attrs:o, draggable:!0, name:"node-shape"
          });
          return e.shapeMap[
            "node-shape"
          ]
          =n, n
        }, updateLinkPoints:function(t, e){
          var i, o=(this.mergeStyle||this.getOptions(t)).linkPoints, n=e.shapeMap[
            "link-point-left"
          ]
          ||e.find((function(t){
            return"link-point-left"===t.get("className")
          })), a=e.shapeMap[
            "link-point-right"
          ]
          ||e.find((function(t){
            return"link-point-right"===t.get("className")
          })), r=e.shapeMap[
            "link-point-top"
          ]
          ||e.find((function(t){
            return"link-point-top"===t.get("className")
          })), s=e.shapeMap[
            "link-point-bottom"
          ]
          ||e.find((function(t){
            return"link-point-bottom"===t.get("className")
          }));
          n&&(i=n.attr()), a&&!i&&(i=a.attr()), r&&!i&&(i=r.attr()), s&&!i&&(i=s.attr()), i||(i=o);
          var l=(0, h.mix)({
          }, i, t.linkPoints), d=l.fill, c=l.stroke, g=l.lineWidth, p=l.size/2;
          p||(p=l.r);
          var f=t.linkPoints?t.linkPoints:{
            left:void 0, right:void 0, top:void 0, bottom:void 0
          }, y=f.left, m=f.right, v=f.top, b=f.bottom, x=this.getSize(t), S=x[
            0
          ], w=x[
            1
          ], k={
            r:p, fill:d, stroke:c, lineWidth:g
          };
          if(n)y||void 0===y?n.attr((0, u.__assign)((0, u.__assign)({
          }, k), {
            x:-S/2, y:0
          })):(n.remove(), delete e.shapeMap[
            "link-point-left"
          ]);
          else if(y){
            var M="link-point-left";
            e.shapeMap[
              M
            ]
            =e.addShape("circle", {
              attrs:(0, u.__assign)((0, u.__assign)({
              }, k), {
                x:-S/2, y:0
              }), className:M, name:M, isAnchorPoint:!0
            })
          }
          if(a)m||void 0===m||(a.remove(), delete e.shapeMap[
            "link-point-right"
          ]), a.attr((0, u.__assign)((0, u.__assign)({
          }, k), {
            x:S/2, y:0
          }));
          else if(m){
            var C="link-point-right";
            e.shapeMap[
              C
            ]
            =e.addShape("circle", {
              attrs:(0, u.__assign)((0, u.__assign)({
              }, k), {
                x:S/2, y:0
              }), className:C, name:C, isAnchorPoint:!0
            })
          }
          if(r)v||void 0===v||(r.remove(), delete e.shapeMap[
            "link-point-top"
          ]), r.attr((0, u.__assign)((0, u.__assign)({
          }, k), {
            x:0, y:-w/2
          }));
          else if(v){
            var _="link-point-top";
            e.shapeMap[
              _
            ]
            =e.addShape("circle", {
              attrs:(0, u.__assign)((0, u.__assign)({
              }, k), {
                x:0, y:-w/2
              }), className:_, name:_, isAnchorPoint:!0
            })
          }
          if(s)b||void 0===b?s.attr((0, u.__assign)((0, u.__assign)({
          }, k), {
            x:0, y:w/2
          })):(s.remove(), delete e.shapeMap[
            "link-point-bottom"
          ]);
          else if(b){
            var I="link-point-bottom";
            e.shapeMap[
              I
            ]
            =e.addShape("circle", {
              attrs:(0, u.__assign)((0, u.__assign)({
              }, k), {
                x:0, y:w/2
              }), className:I, name:I, isAnchorPoint:!0
            })
          }
        }, updateShape:function(t, e, i, o, n){
          e.get("keyShape").attr((0, u.__assign)({
          }, i)), this.updateLabel(t, e, n), o&&this.updateIcon(t, e)
        }, updateIcon:function(t, e){
          var i=this, o=e.getContainer(), n=(this.mergeStyle||this.getOptions(t)).icon, a=t.icon?t.icon:{
            show:void 0, text:void 0
          }, r=a.show, s=a.text, l=o.shapeMap[
            "".concat(this.type, "-icon")
          ]
          ||o.find((function(t){
            return t.get("name")==="".concat(i.type, "-icon")
          }));
          if(l)if(r||void 0===r){
            var d=(0, h.mix)({
            }, l.attr(), n), c=d.width, g=void 0===c?20:c, p=d.height, f=void 0===p?20:p;
            ("iconfont"===d.fontFamily||d.hasOwnProperty("text"))&&(g=0, f=0), l.attr((0, u.__assign)((0, u.__assign)({
            }, d), {
              x:-g/2, y:-f/2
            }))
          }
          else l.remove(), delete o.shapeMap[
            "".concat(this.type, "-icon")
          ];
          else if(r){
            var y="".concat(this.type, "-icon");
            if(s)o.shapeMap[
              y
            ]
            =o.addShape("text", {
              attrs:(0, u.__assign)({
                x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
              }, n), className:y, name:y
            });
            else{
              g=n.width, f=n.height;
              o.shapeMap[
                y
              ]
              =o.addShape("image", {
                attrs:(0, u.__assign)((0, u.__assign)({
                }, n), {
                  x:-g/2, y:-f/2
                }), className:y, name:y
              })
            }
            var m=o.shapeMap[
              "node-label"
            ]
            ||o.find((function(t){
              return"node-label"===t.get("name")
            }));
            m&&m.toFront()
          }
        }
      }, si=(0, u.__assign)((0, u.__assign)({
      }, ai), ri);
      oe.registerNode("single-node", si);
      var li="edge-shape";
      var hi={
        itemType:"edge", labelPosition:"center", refX:0, refY:0, labelAutoRotate:!1, options:{
          size:ct.defaultEdge.size, style:{
            x:0, y:0, stroke:ct.defaultEdge.style.stroke, lineAppendWidth:ct.defaultEdge.style.lineAppendWidth
          }, labelCfg:{
            style:{
              fill:ct.edgeLabel.style.fill, fontSize:ct.edgeLabel.style.fontSize, fontFamily:ct.windowFontFamily
            }
          }, stateStyles:(0, u.__assign)({
          }, ct.edgeStateStyles)
        }, getPath:function(t){
          var e=[
          ];
          return(0, h.each)(t, (function(t, i){
            0===i?e.push([
              "M", t.x, t.y
            ]):e.push([
              "L", t.x, t.y
            ])
          })), e
        }, getShapeStyle:function(t){
          var e=this.options.style, i={
            stroke:t.color
          }, o=(0, h.mix)({
          }, e, i, t.style), n=t.size||ct.defaultEdge.size, a=(t=this.getPathPoints(t)).startPoint, r=t.endPoint, s=this.getControlPoints(t), l=[
            a
          ];
          s&&(l=l.concat(s)), l.push(r);
          var d=this.getPath(l);
          return(0, h.mix)({
          }, ct.defaultEdge.style, {
            stroke:ct.defaultEdge.color, lineWidth:n, path:d
          }, o)
        }, updateShapeStyle:function(t, e, i){
          var o, n=e.getContainer(), a=(null===(o=e.getKeyShape)||void 0===o?void 0:o.call(e))||n.shapeMap[
            "edge-shape"
          ], r=t.size, s=(t=this.getPathPoints(t)).startPoint, l=t.endPoint, d=this.getControlPoints(t), c=[
            s
          ];
          d&&(c=c.concat(d)), c.push(l);
          var g=a.attr(), p=t.style||{
          };
          void 0===p.stroke&&(p.stroke=t.color);
          var f=t.sourceNode, y=t.targetNode, m={
            radius:p.radius
          };
          d||(m={
            source:f, target:y, offset:p.offset, radius:p.radius
          });
          var v=this.getPath(c, m), b={
          };
          "move"===i?b={
            path:v
          }
          :(g.endArrow&&!1===p.endArrow&&(t.style.endArrow={
            path:""
          }), g.startArrow&&!1===p.startArrow&&(t.style.startArrow={
            path:""
          }), void 0===(b=(0, u.__assign)({
          }, t.style)).lineWidth&&(b.lineWidth=((0, h.isNumber)(r)?r:null==r?void 0:r[
            0
          ])||g.lineWidth), void 0===b.path&&(b.path=v), void 0===b.stroke&&(b.stroke=g.stroke||t.color)), a&&a.attr(b)
        }, getLabelStyleByPosition:function(t, e, i){
          var o, n=e.position||this.labelPosition, a={
          }, r=null==i?void 0:i.shapeMap[
            li
          ];
          o="start"===n?0:"end"===n?1:.5;
          var s, l=e.refX||this.refX, d=e.refY||this.refY;
          if(t.startPoint.x===t.endPoint.x&&t.startPoint.y===t.endPoint.y)return a.x=t.startPoint.x+l, a.y=t.startPoint.y+d, a.text=t.label, a;
          s=(0, h.isNil)(e.autoRotate)?this.labelAutoRotate:e.autoRotate;
          var c=xt(r, o, l, d, s);
          return a.x=c.x, a.y=c.y, a.rotate=c.rotate, a.textAlign=this._getTextAlign(n, c.angle), a.text=t.label, a
        }, getLabelBgStyleByPosition:function(t, e){
          if(!t)return{
          };
          var i=t.getBBox(), o=e.style&&e.style.background;
          if(!o)return{
          };
          var n=o.padding, a=i.width+n[
            1
          ]
          +n[
            3
          ], r=i.height+n[
            0
          ]
          +n[
            2
          ], s=(0, u.__assign)((0, u.__assign)({
          }, o), {
            width:a, height:r, x:i.minX-n[
              3
            ], y:i.minY-n[
              0
            ], matrix:[
              1, 0, 0, 0, 1, 0, 0, 0, 1
            ]
          });
          return((0, h.isNil)(e.autoRotate)?this.labelAutoRotate:e.autoRotate)&&(s.matrix=t.attr("matrix")||[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), s
        }, _getTextAlign:function(t, e){
          var i="center";
          return e?(e%=2*Math.PI, "center"!==t&&(i=e>=0&&e<=Math.PI/2||e>=1.5*Math.PI&&e<2*Math.PI?t:function(t){
            var e=t;
            return"start"===t?e="end":"end"===t&&(e="start"), e
          }
          (t)), i):t
        }, getControlPoints:function(t){
          return t.controlPoints
        }, getPathPoints:function(t){
          return t
        }, drawShape:function(t, e){
          var i=this.getShapeStyle(t), o=e.addShape("path", {
            className:li, name:li, attrs:i
          });
          return e.shapeMap[
            li
          ]
          =o, o
        }, drawLabel:function(t, e){
          var i=this.options.labelCfg, o=(0, h.deepMix)({
          }, i, t.labelCfg), n=this.getLabelStyle(t, o, e), a=n.rotate;
          delete n.rotate;
          var r=e.addShape("text", {
            attrs:n, name:"text-shape", labelRelated:!0, draggable:!0
          });
          if(e.shapeMap[
            "text-shape"
          ]
          =r, isNaN(a)||""===a||r.rotateAtStart(a), n.background){
            var s=this.drawLabelBg(t, e, r, n, a), l=this.itemType+ni;
            s.set("classname", l), e.shapeMap[
              l
            ]
            =s, r.toFront()
          }
          return r
        }, drawLabelBg:function(t, e, i, o, n){
          var a=this.options.labelCfg, r=(0, h.deepMix)({
          }, a, t.labelCfg), s=this.getLabelBgStyleByPosition(i, r), l=e.addShape("rect", {
            name:"text-bg-shape", attrs:s, labelRelated:!0
          });
          return e.shapeMap[
            "text-bg-shape"
          ]
          =l, l
        }
      }, di=(0, u.__assign)((0, u.__assign)({
      }, ai), hi);
      oe.registerEdge("single-edge", di), oe.registerEdge("line", {
        getControlPoints:function(){
        }
      }, "single-edge"), oe.registerEdge("spline", {
        getPath:function(t){
          return Pe(t)
        }
      }, "single-edge"), oe.registerEdge("arc", {
        curveOffset:20, clockwise:1, getControlPoints:function(t){
          var e, i, o=t.startPoint, n=t.endPoint, a=(o.x+n.x)/2, r=(o.y+n.y)/2;
          if(void 0!==t.controlPoints){
            if(i=t.controlPoints[
              0
            ], e=E(o, i, n), o.x<=n.x&&o.y>n.y?this.clockwise=e.x>i.x?0:1:o.x<=n.x&&o.y<n.y?this.clockwise=e.x>i.x?1:0:o.x>n.x&&o.y<=n.y?this.clockwise=e.y<i.y?0:1:this.clockwise=e.y<i.y?1:0, (i.x-o.x)/(i.y-o.y)==(n.x-o.x)/(n.y-o.y))return[
            ]
          }
          else{
            void 0===t.curveOffset&&(t.curveOffset=this.curveOffset), (0, h.isArray)(t.curveOffset)&&(t.curveOffset=t.curveOffset[
              0
            ]), t.curveOffset<0?this.clockwise=0:this.clockwise=1;
            var s={
              x:n.x-o.x, y:n.y-o.y
            }, l=Math.atan2(s.y, s.x);
            i={
              x:t.curveOffset*Math.cos(-Math.PI/2+l)+a, y:t.curveOffset*Math.sin(-Math.PI/2+l)+r
            }, e=E(o, i, n)
          }
          var d=B(o, e);
          return[
            {
              x:d, y:d
            }
          ]
        }, getPath:function(t){
          var e=[
          ];
          return e.push([
            "M", t[
              0
            ].x, t[
              0
            ].y
          ]), 2===t.length?e.push([
            "L", t[
              1
            ].x, t[
              1
            ].y
          ]):e.push([
            "A", t[
              1
            ].x, t[
              1
            ].y, 0, 0, this.clockwise, t[
              2
            ].x, t[
              2
            ].y
          ]), e
        }
      }, "single-edge"), oe.registerEdge("quadratic", {
        curvePosition:.5, curveOffset:-20, getControlPoints:function(t){
          var e=t.controlPoints;
          if(!e||!e.length){
            var i=t.startPoint, o=t.endPoint;
            void 0===t.curveOffset&&(t.curveOffset=this.curveOffset), void 0===t.curvePosition&&(t.curvePosition=this.curvePosition), (0, h.isArray)(t.curveOffset)&&(t.curveOffset=t.curveOffset[
              0
            ]), (0, h.isArray)(t.curvePosition)&&(t.curvePosition=t.curveOffset[
              0
            ]), e=[
              Ee(i, o, t.curvePosition, t.curveOffset)
            ]
          }
          return e
        }, getPath:function(t){
          var e=[
          ];
          return e.push([
            "M", t[
              0
            ].x, t[
              0
            ].y
          ]), e.push([
            "Q", t[
              1
            ].x, t[
              1
            ].y, t[
              2
            ].x, t[
              2
            ].y
          ]), e
        }
      }, "single-edge"), oe.registerEdge("cubic", {
        curvePosition:[
          .5, .5
        ], curveOffset:[
          -20, 20
        ], getControlPoints:function(t){
          var e=t.controlPoints;
          if(void 0===t.curveOffset&&(t.curveOffset=this.curveOffset), void 0===t.curvePosition&&(t.curvePosition=this.curvePosition), (0, h.isNumber)(t.curveOffset)&&(t.curveOffset=[
            t.curveOffset, -t.curveOffset
          ]), (0, h.isNumber)(t.curvePosition)&&(t.curvePosition=[
            t.curvePosition, 1-t.curvePosition
          ]), !e||!e.length||e.length<2){
            var i=t.startPoint, o=t.endPoint;
            e=[
              Ee(i, o, t.curvePosition[
                0
              ], t.curveOffset[
                0
              ]), Ee(i, o, t.curvePosition[
                1
              ], t.curveOffset[
                1
              ])
            ]
          }
          return e
        }, getPath:function(t){
          var e=[
          ];
          return e.push([
            "M", t[
              0
            ].x, t[
              0
            ].y
          ]), e.push([
            "C", t[
              1
            ].x, t[
              1
            ].y, t[
              2
            ].x, t[
              2
            ].y, t[
              3
            ].x, t[
              3
            ].y
          ]), e
        }
      }, "single-edge"), oe.registerEdge("cubic-vertical", {
        curvePosition:[
          .5, .5
        ], minCurveOffset:[
          0, 0
        ], curveOffset:void 0, getControlPoints:function(t){
          var e=t.startPoint, i=t.endPoint;
          void 0===t.curvePosition&&(t.curvePosition=this.curvePosition), void 0===t.curveOffset&&(t.curveOffset=this.curveOffset), void 0===t.minCurveOffset&&(t.minCurveOffset=this.minCurveOffset), (0, h.isNumber)(t.curveOffset)&&(t.curveOffset=[
            t.curveOffset, -t.curveOffset
          ]), (0, h.isNumber)(t.minCurveOffset)&&(t.minCurveOffset=[
            t.minCurveOffset, -t.minCurveOffset
          ]), (0, h.isNumber)(t.curvePosition)&&(t.curvePosition=[
            t.curvePosition, 1-t.curvePosition
          ]);
          var o=i.y-e.y, n=[
            0, 0
          ];
          return t.curveOffset?n=t.curveOffset:Math.abs(o)<Math.abs(t.minCurveOffset[
            0
          ])&&(n=t.minCurveOffset), [
            {
              x:e.x, y:e.y+o*this.curvePosition[
                0
              ]
              +n[
                0
              ]
            }, {
              x:i.x, y:i.y-o*this.curvePosition[
                1
              ]
              +n[
                1
              ]
            }
          ]
        }
      }, "cubic"), oe.registerEdge("cubic-horizontal", {
        curvePosition:[
          .5, .5
        ], minCurveOffset:[
          0, 0
        ], curveOffset:void 0, getControlPoints:function(t){
          var e=t.startPoint, i=t.endPoint;
          void 0===t.curvePosition&&(t.curvePosition=this.curvePosition), void 0===t.curveOffset&&(t.curveOffset=this.curveOffset), void 0===t.minCurveOffset&&(t.minCurveOffset=this.minCurveOffset), (0, h.isNumber)(t.curveOffset)&&(t.curveOffset=[
            t.curveOffset, -t.curveOffset
          ]), (0, h.isNumber)(t.minCurveOffset)&&(t.minCurveOffset=[
            t.minCurveOffset, -t.minCurveOffset
          ]), (0, h.isNumber)(t.curvePosition)&&(t.curvePosition=[
            t.curvePosition, 1-t.curvePosition
          ]);
          var o=i.x-e.x, n=[
            0, 0
          ];
          return t.curveOffset?n=t.curveOffset:Math.abs(o)<Math.abs(t.minCurveOffset[
            0
          ])&&(n=t.minCurveOffset), [
            {
              x:e.x+o*this.curvePosition[
                0
              ]
              +n[
                0
              ], y:e.y
            }, {
              x:i.x-o*this.curvePosition[
                1
              ]
              +n[
                1
              ], y:i.y
            }
          ]
        }
      }, "cubic"), oe.registerEdge("loop", {
        getPathPoints:function(t){
          return bt(t)
        }, getControlPoints:function(t){
          return t.controlPoints
        }, afterDraw:function(t){
          t.controlPoints=void 0
        }, afterUpdate:function(t){
          t.controlPoints=void 0
        }
      }, "cubic");
      var ci={
        itemType:"combo", shapeType:"single-combo", labelPosition:"top", refX:ct.comboLabel.refX, refY:ct.comboLabel.refY, options:{
          style:{
            stroke:ct.defaultCombo.style.stroke, fill:ct.defaultCombo.style.fill, lineWidth:ct.defaultCombo.style.lineWidth
          }, labelCfg:{
            style:{
              fill:ct.comboLabel.style.fill, fontSize:ct.comboLabel.style.fontSize, fontFamily:ct.windowFontFamily
            }
          }, stateStyles:(0, u.__assign)({
          }, ct.comboStateStyles), collapsedSubstituteIcon:{
            show:!1, img:"https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*RsnHRqLfJn4AAAAAAAAAAAAAARQnAQ"
          }
        }, getSize:function(t){
          var e=(0, h.clone)(t.size||this.options.size||ct.defaultCombo.size);
          return(0, h.isArray)(e)&&1===e.length&&(e=[
            e[
              0
            ], e[
              0
            ]
          ]), (0, h.isArray)(e)||(e=[
            e, e
          ]), e
        }, getLabelStyleByPosition:function(t, e){
          var i=e.position||this.labelPosition, o=t.style, n=t.padding||this.options.padding;
          (0, h.isArray)(n)&&(n=Math.max.apply(Math, n));
          var a=e.refX, r=e.refY;
          (0, h.isNil)(a)&&(a=this.refX), (0, h.isNil)(r)&&(r=this.refY);
          var s, l=this.getSize(t), d=(Math.max(o.r, l[
            0
          ]
          /2)||l[
            0
          ]
          /2)+n;
          switch(i){
            case"top":s={
              x:0, y:-d-r, textBaseline:"bottom", textAlign:"center"
            };
            break;
            case"bottom":s={
              x:0, y:d+r, textBaseline:"bottom", textAlign:"center"
            };
            break;
            case"left":s={
              x:-d+a, y:0, textAlign:"left"
            };
            break;
            case"center":s={
              x:0, y:0, text:t.label, textAlign:"center"
            };
            break;
            default:s={
              x:d+a, y:0, textAlign:"right"
            }
          }
          return s.text=t.label, s
        }, drawShape:function(t, e){
          var i=this.shapeType, o=this.getShapeStyle(t);
          return e.addShape(i, {
            attrs:o, draggable:!0, name:"combo-shape"
          })
        }, updateCollapsedIcon:function(t, e, i){
          var o=t.collapsed, n=t.collapsedSubstituteIcon, a=void 0===n?{
          }
          :n, r=Object.assign({
          }, this.options.collapsedSubstituteIcon, a), s=r.show, l=r.img, h=r.width, d=r.height, c=e.getContainer(), g=c.find((function(t){
            return"combo-collapsed-substitute-icon"===t.get("name")
          })), p=g&&!g.destroyed, f=e.get("keyShape");
          if(o&&s){
            if(p)g.show();
            else{
              var y={
                width:h||2*i.r||i.width, height:d||2*i.r||i.height
              };
              g=c.addShape("image", {
                attrs:(0, u.__assign)({
                  img:l, x:-y.width/2, y:-y.height/2
                }, y), name:"combo-collapsed-substitute-icon", draggable:!0
              })
            }
            f.hide()
          }
          else p&&(g.hide(), f.show())
        }, updateShape:function(t, e, i){
          var o=this, n=e.get("keyShape");
          e.get("animate")&&(void 0===t.animate?this.options.animate:t.animate)&&n.animate?(t.collapsed||this.updateCollapsedIcon(t, e, i), n.animate(i, {
            duration:200, easing:"easeLinear", callback:function(){
              t.collapsed&&o.updateCollapsedIcon(t, e, i)
            }
          })):(n.attr((0, u.__assign)({
          }, i)), this.updateCollapsedIcon(t, e, i)), this.updateLabel(t, e)
        }
      }, gi=(0, u.__assign)((0, u.__assign)({
      }, ai), ci);
      oe.registerCombo("single-combo", gi), oe.registerCombo("circle", {
        options:{
          size:[
            ct.defaultCombo.size[
              0
            ], ct.defaultCombo.size[
              0
            ]
          ], padding:Math.max.apply(Math, ct.defaultCombo.padding), animate:!0, style:{
            stroke:ct.defaultCombo.style.stroke, fill:ct.defaultCombo.style.fill, lineWidth:ct.defaultCombo.style.lineWidth
          }, labelCfg:{
            style:{
              fill:ct.comboLabel.style.fill, fontSize:ct.comboLabel.style.fontSize
            }, refX:0, refY:0
          }, stateStyles:(0, u.__assign)({
          }, ct.comboStateStyles), collapsedSubstituteIcon:{
            show:!1, img:"https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*RsnHRqLfJn4AAAAAAAAAAAAAARQnAQ"
          }
        }, shapeType:"circle", labelPosition:"top", drawShape:function(t, e){
          var i=this.getShapeStyle(t);
          return delete i.height, delete i.width, e.addShape("circle", {
            attrs:i, className:"circle-combo", name:"circle-combo", draggable:!0
          })
        }, getShapeStyle:function(t){
          var e=this.options.style, i=t.padding||this.options.padding;
          (0, h.isArray)(i)&&(i=Math.max.apply(Math, i));
          var o, n={
            stroke:t.color
          }, a=(0, h.mix)({
          }, e, n, t.style), r=t.collapsed&&t.fixCollapseSize?t.fixCollapseSize:t.fixSize;
          if(r)o=(0, h.isNumber)(r)?r/2:r[
            0
          ]
          /2;
          else{
            var s=this.getSize(t);
            o=!(0, h.isNumber)(a.r)||isNaN(a.r)?s[
              0
            ]
            /2||ct.defaultCombo.style.r:Math.max(a.r, s[
              0
            ]
            /2)||s[
              0
            ]
            /2
          }
          a.r=o+i;
          var l=(0, u.__assign)({
            x:0, y:0
          }, a);
          return t.style?t.style.r=o:t.style={
            r:o
          }, l
        }, update:function(t, e){
          var i=this.getSize(t), o=t.padding||this.options.padding;
          (0, h.isArray)(o)&&(o=Math.max.apply(Math, o));
          var n, a=(0, h.clone)(t.style), r=t.collapsed&&t.fixCollapseSize?t.fixCollapseSize:t.fixSize;
          n=r?(0, h.isNumber)(r)?r/2:r[
            0
          ]
          /2:Math.max(a.r, i[
            0
          ]
          /2)||i[
            0
          ]
          /2, a.r=n+o;
          var s=e.get("sizeCache");
          s&&(s.r=a.r);
          var l={
            stroke:t.color
          }, d=e.get("keyShape"), c=(0, h.mix)({
          }, d.attr(), l, a);
          t.style?t.style.r=n:t.style={
            r:n
          }, this.updateShape(t, e, c, !0)
        }
      }, "single-combo"), oe.registerCombo("rect", {
        options:{
          size:[
            40, 5
          ], padding:[
            25, 20, 15, 20
          ], animate:!0, style:{
            radius:0, stroke:ct.defaultCombo.style.stroke, fill:ct.defaultCombo.style.fill, lineWidth:ct.defaultCombo.style.lineWidth
          }, labelCfg:{
            style:{
              fill:ct.comboLabel.style.fill, fontSize:ct.comboLabel.style.fontSize, fontFamily:ct.windowFontFamily
            }
          }, anchorPoints:[
            [
              0, .5
            ], [
              1, .5
            ]
          ], stateStyles:(0, u.__assign)({
          }, ct.comboStateStyles), collapsedSubstituteIcon:{
            show:!1, img:"https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*RsnHRqLfJn4AAAAAAAAAAAAAARQnAQ"
          }
        }, shapeType:"rect", labelPosition:"top", drawShape:function(t, e){
          var i=this.getShapeStyle(t);
          return e.addShape("rect", {
            attrs:i, className:"rect-combo", name:"rect-combo", draggable:!0
          })
        }, getLabelStyleByPosition:function(t, e){
          var i=e.position||this.labelPosition, o=t.style, n=t.padding||this.options.padding;
          (0, h.isNumber)(n)&&(n=[
            n, n, n, n
          ]);
          var a=e.refX, r=e.refY;
          (0, h.isNil)(a)&&(a=this.refX), (0, h.isNil)(r)&&(r=this.refY);
          var s, l=-o.width/2-n[
            3
          ], d=o.width/2+n[
            1
          ], c=-o.height/2-n[
            0
          ], g=o.height/2+n[
            2
          ];
          switch(i){
            case"top":s={
              x:l+a, y:c+r, textBaseline:"top", textAlign:"left"
            };
            break;
            case"bottom":s={
              x:0, y:g+r, textBaseline:"top", textAlign:"center"
            };
            break;
            case"left":s={
              x:l+r, y:0, textAlign:"left"
            };
            break;
            case"center":s={
              x:0, y:0, text:t.label, textAlign:"center"
            };
            break;
            case"top-center":s={
              x:0, y:c+r, textBaseline:"top", textAlign:"center"
            };
            break;
            default:s={
              x:d+a, y:0, textAlign:"right"
            }
          }
          return s.text=t.label, s
        }, getShapeStyle:function(t){
          var e=this.options.style, i=t.padding||this.options.padding;
          (0, h.isNumber)(i)&&(i=[
            i, i, i, i
          ]);
          var o, n, a={
            stroke:t.color
          }, r=(0, h.mix)({
          }, e, a, t.style), s=this.getSize(t), l=t.collapsed&&t.fixCollapseSize?t.fixCollapseSize:t.fixSize;
          l?(0, h.isNumber)(l)?(o=l, n=l):(o=l[
            0
          ], n=l[
            1
          ]):(o=!(0, h.isNumber)(r.width)||isNaN(r.width)?s[
            0
          ]
          ||ct.defaultCombo.style.width:Math.max(r.width, s[
            0
          ])||s[
            0
          ], n=!(0, h.isNumber)(r.height)||isNaN(r.height)?s[
            1
          ]
          ||ct.defaultCombo.style.height:Math.max(r.height, s[
            1
          ])||s[
            1
          ]);
          var d=-o/2-i[
            3
          ], c=-n/2-i[
            0
          ];
          r.width=o+i[
            1
          ]
          +i[
            3
          ], r.height=n+i[
            0
          ]
          +i[
            2
          ];
          var g=(0, u.__assign)({
            x:d, y:c
          }, r);
          return t.style?(t.style.width=o, t.style.height=n):t.style={
            width:o, height:n
          }, g
        }, update:function(t, e){
          var i=this.getSize(t), o=t.padding||this.options.padding;
          (0, h.isNumber)(o)&&(o=[
            o, o, o, o
          ]);
          var n, a, r=(0, h.clone)(t.style), s=t.collapsed&&t.fixCollapseSize?t.fixCollapseSize:t.fixSize;
          s?(0, h.isNumber)(s)?(n=s, a=s):(n=s[
            0
          ], a=s[
            1
          ]):(n=Math.max(r.width, i[
            0
          ])||i[
            0
          ], a=Math.max(r.height, i[
            1
          ])||i[
            1
          ]), r.width=n+o[
            1
          ]
          +o[
            3
          ], r.height=a+o[
            0
          ]
          +o[
            2
          ];
          var l=e.get("sizeCache");
          l&&(l.width=r.width, l.height=r.height), r.x=-n/2-o[
            3
          ], r.y=-a/2-o[
            0
          ];
          var d={
            stroke:t.color
          }, c=e.get("keyShape"), g=(0, h.mix)({
          }, c.attr(), d, r);
          t.style?(t.style.width=n, t.style.height=a):t.style={
            width:n, height:a
          }, this.updateShape(t, e, g, !1)
        }
      }, "single-combo"), oe.registerNode("simple-circle", {
        options:{
          size:ct.defaultNode.size, style:{
            x:0, y:0, stroke:ct.defaultNode.style.stroke, fill:ct.defaultNode.style.fill, lineWidth:ct.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:ct.nodeLabel.style.fill, fontSize:ct.nodeLabel.style.fontSize, fontFamily:ct.windowFontFamily
            }
          }, stateStyles:(0, u.__assign)({
          }, ct.nodeStateStyles)
        }, shapeType:"simple-circle", labelPosition:"center", shapeMap:{
        }, drawShape:function(t, e){
          var i=this.getShapeStyle(t), o="".concat(this.type, "-keyShape"), n=e.addShape("circle", {
            attrs:i, className:"".concat(this.type, "-keyShape"), name:o, draggable:!0
          });
          return e.shapeMap[
            o
          ]
          =n, n
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, h.deepMix)({
          }, e, i), n=this.getSize(t)[
            0
          ]
          /2;
          return(0, u.__assign)({
            x:0, y:0, r:n
          }, o)
        }, update:function(t, e, i){
          var o=this.getSize(t), n={
            stroke:t.color, r:o[
              0
            ]
            /2
          }, a=e.get("keyShape"), r=(0, h.deepMix)({
          }, a.attr(), n, t.style);
          this.updateShape(t, e, r, !0, i)
        }
      }, "single-node"), oe.registerNode("simple-rect", {
        options:{
          size:[
            100, 30
          ], style:{
            radius:0, stroke:ct.defaultNode.style.stroke, fill:ct.defaultNode.style.fill, lineWidth:ct.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:ct.nodeLabel.style.fill, fontSize:ct.nodeLabel.style.fontSize, fontFamily:ct.windowFontFamily
            }
          }, anchorPoints:[
            [
              0, .5
            ], [
              1, .5
            ]
          ], stateStyles:(0, u.__assign)({
          }, ct.nodeStateStyles)
        }, shapeType:"simple-rect", labelPosition:"center", drawShape:function(t, e){
          var i=this.getShapeStyle(t);
          return e.addShape("rect", {
            attrs:i, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          })
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, h.mix)({
          }, e, i), n=this.getSize(t), a=o.width||n[
            0
          ], r=o.height||n[
            1
          ];
          return(0, u.__assign)({
            x:-a/2, y:-r/2, width:a, height:r
          }, o)
        }, update:function(t, e, i){
          e.getContainer();
          var o=(this.mergeStyle||this.getOptions(t)).style, n=this.getSize(t), a=e.get("keyShape");
          t.size||(n[
            0
          ]
          =a.attr("width")||o.width, n[
            1
          ]
          =a.attr("height")||o.height);
          var r={
            stroke:t.color, x:-n[
              0
            ]
            /2, y:-n[
              1
            ]
            /2, width:n[
              0
            ], height:n[
              1
            ]
          }, s=(0, h.mix)({
          }, o, a.attr(), r);
          s=(0, h.mix)(s, t.style), this.updateShape(t, e, s, !1, i)
        }
      }, "single-node"), oe.registerNode("image", {
        options:{
          img:"https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*eD7nT6tmYgAAAAAAAAAAAABkARQnAQ", size:200, labelCfg:{
            style:{
              fontFamily:ct.windowFontFamily
            }
          }, clipCfg:{
            show:!1, type:"circle", r:50, rx:50, ry:35, width:50, height:35, points:[
              [
                30, 12
              ], [
                12, 30
              ], [
                30, 48
              ], [
                48, 30
              ]
            ], path:[
              [
                "M", 25, 25
              ], [
                "L", 50, 25
              ], [
                "A", 12.5, 12.5, 0, 1, 1, 50, 50
              ], [
                "A", 12.5, 12.5, 0, 1, 0, 50, 50
              ], [
                "L", 25, 75
              ], [
                "Z"
              ]
            ], x:0, y:0
          }
        }, shapeType:"image", labelPosition:"bottom", drawShape:function(t, e){
          var i=this.shapeType, o=this.getShapeStyle(t);
          delete o.fill;
          var n=e.addShape(i, {
            attrs:o, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          });
          return this.drawClip(t, n), n
        }, drawClip:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).clipCfg;
          if(i.show){
            var o=i.type, n=i.x, a=i.y, r=i.style;
            if("circle"===o){
              var s=i.r;
              e.setClip({
                type:"circle", attrs:(0, u.__assign)({
                  r:s, x:n, y:a
                }, r)
              })
            }
            else if("rect"===o){
              var l=i.width, h=i.height, d=n-l/2, c=a-h/2;
              e.setClip({
                type:"rect", attrs:(0, u.__assign)({
                  x:d, y:c, width:l, height:h
                }, r)
              })
            }
            else if("ellipse"===o){
              var g=i.rx, p=i.ry;
              e.setClip({
                type:"ellipse", attrs:(0, u.__assign)({
                  x:n, y:a, rx:g, ry:p
                }, r)
              })
            }
            else if("polygon"===o){
              var f=i.points;
              e.setClip({
                type:"polygon", attrs:(0, u.__assign)({
                  points:f
                }, r)
              })
            }
            else if("path"===o){
              var y=i.path;
              e.setClip({
                type:"path", attrs:(0, u.__assign)({
                  path:y
                }, r)
              })
            }
          }
        }, getShapeStyle:function(t){
          var e=this.mergeStyle||this.getOptions(t), i=e.style, o=e.img, n=this.getSize(t), a=n[
            0
          ], r=n[
            1
          ];
          return i&&(a=i.width||n[
            0
          ], r=i.height||n[
            1
          ]), (0, u.__assign)({
            x:-a/2, y:-r/2, width:a, height:r, img:o
          }, i)
        }, updateShapeStyle:function(t, e){
          var i=e.getContainer(), o="".concat(this.itemType, "-shape"), n=i.shapeMap[
            o
          ]
          ||i.find((function(t){
            return t.get("className")===o
          }))||e.getKeyShape(), a=this.getShapeStyle(t);
          n&&!n.destroyed&&n.attr(a)
        }
      }, "single-node");
      const ui={
        triangle:function(t, e, i){
          void 0===t&&(t=10), void 0===e&&(e=15), void 0===i&&(i=0);
          var o=2*i;
          return"M ".concat(o, ",0 L ").concat(o+e, ",-").concat(t/2, " L ").concat(o+e, ",").concat(t/2, " Z")
        }, vee:function(t, e, i){
          void 0===t&&(t=15), void 0===e&&(e=20), void 0===i&&(i=0);
          var o=2*i;
          return"M ".concat(o, ",0 L ").concat(o+e, ",-").concat(t/2, "\n        L ").concat(o+2*e/3, ",0 L ").concat(o+e, ",").concat(t/2, " Z")
        }, circle:function(t, e){
          return void 0===t&&(t=5), void 0===e&&(e=0), "M ".concat(2*e, ", 0\n            a ").concat(t, ",").concat(t, " 0 1,0 ").concat(2*t, ",0\n            a ").concat(t, ",").concat(t, " 0 1,0 ").concat(2*-t, ",0")
        }, rect:function(t, e, i){
          void 0===t&&(t=10), void 0===e&&(e=10), void 0===i&&(i=0);
          var o=2*i;
          return"M ".concat(o, ",").concat(-t/2, " \n        L ").concat(o+e, ",").concat(-t/2, " \n        L ").concat(o+e, ",").concat(t/2, " \n        L ").concat(o, ",").concat(t/2, " Z")
        }, diamond:function(t, e, i){
          void 0===t&&(t=15), void 0===e&&(e=15), void 0===i&&(i=0);
          var o=2*i;
          return"M ".concat(o, ",0 \n        L ").concat(o+e/2, ",").concat(-t/2, " \n        L ").concat(o+e, ",0 \n        L ").concat(o+e/2, ",").concat(t/2, " Z")
        }, triangleRect:function(t, e, i, o, n, a){
          void 0===t&&(t=15), void 0===e&&(e=15), void 0===i&&(i=15), void 0===o&&(o=3), void 0===n&&(n=5), void 0===a&&(a=0);
          var r=2*a, s=r+e+n;
          return"M ".concat(r, ",0 L ").concat(r+e, ",-").concat(t/2, " L ").concat(r+e, ",").concat(t/2, " Z\n            M ").concat(s, ", -").concat(i/2, "\n            L ").concat(s+o, " -").concat(i/2, "\n            L ").concat(s+o, " ").concat(i/2, "\n            L ").concat(s, " ").concat(i/2, "\n            Z")
        }
      }, pi={
        collapse:function(t, e, i){
          return[
            [
              "M", t-i, e
            ], [
              "a", i, i, 0, 1, 0, 2*i, 0
            ], [
              "a", i, i, 0, 1, 0, 2*-i, 0
            ], [
              "M", t-i+4, e
            ], [
              "L", t+i-4, e
            ]
          ]
        }, expand:function(t, e, i){
          return[
            [
              "M", t-i, e
            ], [
              "a", i, i, 0, 1, 0, 2*i, 0
            ], [
              "a", i, i, 0, 1, 0, 2*-i, 0
            ], [
              "M", t-i+4, e
            ], [
              "L", t-i+2*i-4, e
            ], [
              "M", t-i+i, e-i+4
            ], [
              "L", t, e+i-4
            ]
          ]
        }, upTriangle:function(t, e, i){
          var o=i*Math.cos(Math.PI/6), n=i*Math.sin(Math.PI/6);
          return[
            [
              "M", t-o, e+n
            ], [
              "L", t+o, e+n
            ], [
              "L", t, e-i
            ], [
              "Z"
            ]
          ]
        }, downTriangle:function(t, e, i){
          var o=i*Math.cos(Math.PI/6), n=i*Math.sin(Math.PI/6);
          return[
            [
              "M", t-o, e-n
            ], [
              "L", t+o, e-n
            ], [
              "L", t, e+i
            ], [
              "Z"
            ]
          ]
        }
      }, fi=oe;
      var yi=[
        "#5F95FF", "#61DDAA", "#65789B", "#F6BD16", "#7262FD", "#78D3F8", "#9661BC", "#F6903D", "#008685", "#F08BB4"
      ], mi=function(t){
        return"force"===t||"g6force"===t||"gForce"===t||"force2"===t
      }, vi=f.pd;
      const bi=(0, u.__assign)((0, u.__assign)((0, u.__assign)((0, u.__assign)((0, u.__assign)((0, u.__assign)((0, u.__assign)({
      }, a), n), r), o), s), l), {
        transform:vi, mat3:v
      });
      const xi=function(){
        function t(t){
          this.graph=t, this.layoutCfg=t.get("layout")||{
          }, this.layoutType=this.getLayoutType(), this.layoutMethods=[
          ], this.initLayout()
        }
        return t.prototype.initLayout=function(){
        }, t.prototype.getLayoutType=function(){
          return this.getLayoutCfgType(this.layoutCfg)
        }, t.prototype.getLayoutCfgType=function(t){
          var e=t.type;
          if(e)return e;
          var i=t.pipes;
          return Array.isArray(i)?i.map((function(t){
            return(null==t?void 0:t.type)||""
          })):null
        }, t.prototype.isLayoutTypeSame=function(t){
          var e=this.getLayoutCfgType(t), i=Array.isArray(this.layoutType), o=Array.isArray(e);
          return i&&o?this.layoutType.every((function(t, i){
            return t===e[
              i
            ]
          })):!Array.isArray(e)&&!Array.isArray(this.layoutType)&&(null==t?void 0:t.type)===this.layoutType
        }, t.prototype.refreshLayout=function(){
          var t=this, e=t.graph, i=t.layoutType, o=t.layoutCfg;
          if(e){
            var n=(void 0===o?{
            }
            :o).animate, a=void 0===n&&("force"===i||"force2"===i), r=mi(i)&&(n||a);
            e.get("animate")&&!r?e.positionsAnimate("comboCombined"===i):e.refreshPositions("comboCombined"===i)
          }
        }, t.prototype.changeLayout=function(t){
          var e=t.disableTriggerLayout, i=(0, u.__rest)(t, [
            "disableTriggerLayout"
          ]);
          this.layoutCfg=i, this.layoutType=i.type||this.layoutType, e||this.layout()
        }, t.prototype.changeData=function(t){
          this.layout(t)
        }, t.prototype.destoryLayoutMethods=function(){
          var t=this.layoutMethods, e=[
          ];
          return null==t||t.forEach((function(t){
            var i, o=null===(i=t.getType)||void 0===i?void 0:i.call(t);
            o&&e.push(o), t.destroy()
          })), this.layoutMethods=[
          ], e
        }, t.prototype.destroyLayout=function(){
          this.destoryLayoutMethods();
          var t=this.graph;
          t&&!t.get("destroyed")&&t.set("layout", void 0), this.layoutCfg=void 0, this.layoutType=void 0, this.layoutMethods=void 0
        }, t.prototype.setDataFromGraph=function(){
          for(var t, e=[
          ], i=[
          ], o=[
          ], n=[
          ], a=[
          ], r=[
          ], s=[
          ], l=this.graph.getNodes(), h=this.graph.getEdges(), d=this.graph.getCombos(), c=l.length, g=0;
          g<c;
          g++){
            var u=l[
              g
            ];
            if(u&&!u.destroyed){
              var p=u.getModel();
              u.isVisible()?e.push(p):i.push(p)
            }
          }
          var f=h.length;
          for(g=0;
          g<f;
          g++){
            var y=h[
              g
            ];
            if(y&&!y.destroyed){
              p=y.getModel();
              y.isVisible()?p.isComboEdge?a.push(p):o.push(p):n.push(p)
            }
          }
          var m=d.length;
          for(g=0;
          g<m;
          g++){
            var v=d[
              g
            ];
            if(!v.destroyed){
              p=v.getModel();
              v.isVisible()?r.push(p):s.push(p)
            }
          }
          return{
            nodes:e, hiddenNodes:i, edges:o, hiddenEdges:n, combos:r, hiddenCombos:s, comboEdges:a, vedges:null===(t=this.graph.get("vedges"))||void 0===t?void 0:t.map((function(t){
              return t.getModel()
            }))
          }
        }, t.prototype.relayout=function(t){
          var e=this, i=this, o=i.graph, n=i.layoutMethods, a=i.layoutCfg;
          if(o&&!o.get("destroyed")){
            var r=Promise.resolve();
            if(t){
              this.data=this.setDataFromGraph();
              var s=this.data.nodes;
              if(!s)return!1;
              r=this.initPositions(a.center, s)
            }
            o.emit("beforelayout"), null==n||n.forEach((function(t, i){
              var o=a[
                i
              ]
              ||a;
              r=r.then((function(){
                var t, r=e.execLayoutMethod(o, i);
                return i===n.length-1&&(null===(t=a.onAllLayoutEnd)||void 0===t||t.call(a)), r
              }))
            }))
          }
        }, t.prototype.filterLayoutData=function(t, e){
          var i, o, n=t.nodes, a=t.edges, r=(0, u.__rest)(t, [
            "nodes", "edges"
          ]);
          if(!n)return t;
          i=(0, h.isFunction)(null==e?void 0:e.nodesFilter)?e.nodesFilter:function(){
            return!0
          };
          var s=n.filter(i);
          if((0, h.isFunction)(null==e?void 0:e.edgesFilter))o=e.edgesFilter;
          else{
            var l=s.reduce((function(t, e){
              return t[
                e.id
              ]
              =!0, t
            }), {
            });
            o=function(t){
              return l[
                t.source
              ]
              &&l[
                t.target
              ]
            }
          }
          return(0, u.__assign)({
            nodes:s, edges:a.filter(o)
          }, r)
        }, t.prototype.getLayoutBBox=function(t){
          var e=this.graph, i=(0, h.groupBy)(e.getNodes(), (function(t){
            return t.getModel().layoutOrder
          })), o=Object.values(i).map((function(t){
            var e=Rt(t);
            return e.size=[
              e.width, e.height
            ], e
          }));
          return{
            groupNodes:Object.values((0, h.groupBy)(t, "layoutOrder")), layoutNodes:o
          }
        }, t.prototype.layoutAnimate=function(){
        }, t.prototype.moveToZero=function(){
          var t=this.graph.get("data").nodes;
          if(void 0!==t[
            0
          ].x&&null!==t[
            0
          ].x&&!Wt(t[
            0
          ].x)){
            for(var e=[
              0, 0
            ], i=t.length, o=0;
            o<i;
            o++){
              var n=t[
                o
              ];
              e[
                0
              ]
              +=n.x, e[
                1
              ]
              +=n.y
            }
            e[
              0
            ]
            /=t.length, e[
              1
            ]
            /=t.length;
            for(o=0;
            o<i;
            o++){
              (n=t[
                o
              ]).x-=e[
                0
              ], n.y-=e[
                1
              ]
            }
          }
        }, t.prototype.initPositions=function(t, e){
          var i;
          return(0, u.__awaiter)(this, void 0, void 0, (function(){
            var o, n, a;
            return(0, u.__generator)(this, (function(r){
              return o=this.graph, (null==e?void 0:e.length)?(n=e.filter((function(t){
                return Wt(t.x)||Wt(t.y)
              })), (a=n?n.length:0)?[
                2, null===(i=this.initWithPreset)||void 0===i?void 0:i.call(this, (function(){
                }), (function(){
                  var e=.85*o.get("width"), i=.85*o.get("height"), r=Math.ceil(Math.sqrt(a)*(e/i)), s=e/(r-1), l=i/(Math.ceil(a/r)-1);
                  isFinite(s)&&s||(s=0), isFinite(l)&&s||(l=0);
                  for(var h=t[
                    0
                  ]
                  -e/2, d=t[
                    1
                  ]
                  -i/2, c=0;
                  c<a;
                  c++){
                    var g=n[
                      c
                    ];
                    Wt(+g.x)&&(!1, g.x=c%r*s+h), Wt(+g.y)&&(!1, g.y=Math.floor(c/r)*l+d)
                  }
                }))
              ]
              :[
                2
              ]):[
                2, Promise.resolve()
              ]
            }))
          }))
        }, t.prototype.destroy=function(){
          this.graph=null, this.destoryLayoutMethods(), this.destroyed=!0
        }, t
      }
      ();
      const Si=function(t){
        this.graph=t, this.destroyed=!1, this.initEvents()
      };
      var wi=fi.registerNode, ki=fi.registerEdge, Mi=fi.registerCombo, Ci=g.registerBehavior, _i=ct;
      fi.registerNode, fi.registerEdge, fi.registerCombo, g.registerBehavior
    }, 542753:(t, e, i)=>{
      i.d(e, {
        TS:()=>gt, Ay:()=>He, Gv:()=>l.Gv, Bg:()=>l.Bg, Qp:()=>l.Qp
      });
      var o={
      };
      i.r(o), i.d(o, {
        getColorSetsBySubjectColors:()=>S, getColorsWithSubjectColor:()=>x, mixColor:()=>b
      });
      var n={
      };
      i.r(n), i.d(n, {
        arrayToTextureData:()=>Y, attributesToTextureData:()=>z, buildTextureData:()=>F, buildTextureDataWithOneEdgeAttr:()=>D, buildTextureDataWithTwoEdgeAttr:()=>O, proccessToFunc:()=>A, radialLayout:()=>X
      });
      var a={
      };
      i.r(a), i.d(a, {
        gpuDetector:()=>W
      });
      var r={
      };
      i.r(r), i.d(r, {
        getBrowserName:()=>R
      });
      var s=i(331635), l=i(77062), h=i(318050), d=i(787302), c=i(906924), g=i(256998), u=i(883278), p=i(224425), f=i(738155), y=i(802520), m=i.n(y), v=i(212713), b=function(t, e, i){
        var o=m()(t), n=m()(e);
        return m()([
          (1-i)*o.red()+i*n.red(), (1-i)*o.green()+i*n.green(), (1-i)*o.blue()+i*n.blue()
        ]).rgb()
      }, x=function(t, e, i, o){
        return void 0===e&&(e="#fff"), void 0===i&&(i="default"), void 0===o&&(o="rgb(150, 150, 150)"), "default"===i?function(t, e, i){
          void 0===e&&(e="#fff"), void 0===i&&(i="rgb(150, 150, 150)");
          var o=b(e, t, .05).rgb().toString(), n=b(e, t, .1).rgb().toString(), a=b(e, t, .2).rgb().toString(), r=b(e, t, .4).rgb().toString(), s=b(e, i, .02).rgb().toString(), l=b(e, i, .05).rgb().toString(), h=b(e, i, .1).rgb().toString(), d=b(e, i, .2).rgb().toString(), c=b(e, i, .3).rgb().toString(), g=(0, v.cM)(t, {
            theme:"default", backgroundColor:e
          }), u=m()(t).hex().toLowerCase(), p=g.indexOf(u), f=t;
          return-1!==p&&(f=g[
            p+1
          ]), {
            mainStroke:t, mainFill:n, activeStroke:t, activeFill:o, inactiveStroke:r, inactiveFill:o, selectedStroke:t, selectedFill:e, highlightStroke:f, highlightFill:a, disableStroke:c, disableFill:l, edgeMainStroke:c, edgeActiveStroke:t, edgeInactiveStroke:d, edgeSelectedStroke:t, edgeHighlightStroke:t, edgeDisableStroke:h, comboMainStroke:c, comboMainFill:s, comboActiveStroke:t, comboActiveFill:o, comboInactiveStroke:c, comboInactiveFill:s, comboSelectedStroke:t, comboSelectedFill:s, comboHighlightStroke:f, comboHighlightFill:s, comboDisableStroke:d, comboDisableFill:l
          }
        }
        (t, e, "rgb(150, 150, 150)"):function(t, e, i){
          void 0===e&&(e="#fff"), void 0===i&&(i="#777");
          var o=b(e, t, .2).rgb().toString(), n=b(e, t, .3).rgb().toString(), a=b(e, t, .6).rgb().toString(), r=b(e, t, .8).rgb().toString(), s=b(e, i, .2).rgb().toString(), l=b(e, i, .25).rgb().toString(), h=b(e, i, .3).rgb().toString(), d=b(e, i, .4).rgb().toString(), c=b(e, i, .5).rgb().toString(), g=(0, v.cM)(t, {
            theme:"dark", backgroundColor:e
          }), u=m()(t).hex().toLowerCase(), p=g.indexOf(u), f=t;
          return-1!==p&&(f=g[
            p+1
          ]), {
            mainStroke:r, mainFill:o, activeStroke:t, activeFill:n, inactiveStroke:r, inactiveFill:o, selectedStroke:t, selectedFill:o, highlightStroke:t, highlightFill:a, disableStroke:c, disableFill:l, edgeMainStroke:i, edgeActiveStroke:t, edgeInactiveStroke:i, edgeSelectedStroke:t, edgeHighlightStroke:t, edgeDisableStroke:h, comboMainStroke:d, comboMainFill:l, comboActiveStroke:t, comboActiveFill:s, comboInactiveStroke:d, comboInactiveFill:l, comboSelectedStroke:t, comboSelectedFill:s, comboHighlightStroke:f, comboHighlightFill:l, comboDisableStroke:d, comboDisableFill:s
          }
        }
        (t, e, "#777")
      }, S=function(t, e, i, o){
        void 0===e&&(e="#fff"), void 0===i&&(i="default"), void 0===o&&(o="rgb(150, 150, 150)");
        var n=[
        ];
        return t.forEach((function(t){
          n.push(x(t, e, i, o))
        })), n
      }, w="rgb(0, 0, 0)", k=x("rgb(95, 149, 255)", "rgb(255, 255, 255)");
      const M={
        version:"0.8.23", rootContainerClassName:"root-container", nodeContainerClassName:"node-container", edgeContainerClassName:"edge-container", comboContainerClassName:"combo-container", delegateContainerClassName:"delegate-container", defaultLoopPosition:"top", nodeLabel:{
          style:{
            fill:"#000", fontSize:12, textAlign:"center", textBaseline:"middle"
          }, offset:4
        }, defaultNode:{
          type:"circle", style:{
            lineWidth:1, stroke:k.mainStroke, fill:k.mainFill
          }, size:20, color:k.mainStroke, linkPoints:{
            size:8, lineWidth:1, fill:k.activeFill, stroke:k.activeStroke
          }
        }, nodeStateStyles:{
          active:{
            fill:k.activeFill, stroke:k.activeStroke, lineWidth:2, shadowColor:k.mainStroke, shadowBlur:10
          }, selected:{
            fill:k.selectedFill, stroke:k.selectedStroke, lineWidth:4, shadowColor:k.selectedStroke, shadowBlur:10, "text-shape":{
              fontWeight:500
            }
          }, highlight:{
            fill:k.highlightFill, stroke:k.highlightStroke, lineWidth:2, "text-shape":{
              fontWeight:500
            }
          }, inactive:{
            fill:k.inactiveFill, stroke:k.inactiveStroke, lineWidth:1
          }, disable:{
            fill:k.disableFill, stroke:k.disableStroke, lineWidth:1
          }
        }, edgeLabel:{
          style:{
            fill:w, textAlign:"center", textBaseline:"middle", fontSize:12
          }
        }, defaultEdge:{
          type:"line", size:1, style:{
            stroke:k.edgeMainStroke, lineAppendWidth:2
          }, color:k.edgeMainStroke
        }, edgeStateStyles:{
          active:{
            stroke:k.edgeActiveStroke, lineWidth:1
          }, selected:{
            stroke:k.edgeSelectedStroke, lineWidth:2, shadowColor:k.edgeSelectedStroke, shadowBlur:10, "text-shape":{
              fontWeight:500
            }
          }, highlight:{
            stroke:k.edgeHighlightStroke, lineWidth:2, "text-shape":{
              fontWeight:500
            }
          }, inactive:{
            stroke:k.edgeInactiveStroke, lineWidth:1
          }, disable:{
            stroke:k.edgeDisableStroke, lineWidth:1
          }
        }, comboLabel:{
          style:{
            fill:w, textBaseline:"middle", fontSize:12
          }, refY:10, refX:10
        }, defaultCombo:{
          type:"circle", style:{
            fill:k.comboMainFill, lineWidth:1, stroke:k.comboMainStroke, r:5, width:20, height:10
          }, size:[
            20, 5
          ], color:k.comboMainStroke, padding:[
            25, 20, 15, 20
          ]
        }, comboStateStyles:{
          active:{
            stroke:k.comboActiveStroke, lineWidth:1, fill:k.comboActiveFill
          }, selected:{
            stroke:k.comboSelectedStroke, lineWidth:2, fill:k.comboSelectedFill, shadowColor:k.comboSelectedStroke, shadowBlur:10, "text-shape":{
              fontWeight:500
            }
          }, highlight:{
            stroke:k.comboHighlightStroke, lineWidth:2, fill:k.comboHighlightFill, "text-shape":{
              fontWeight:500
            }
          }, inactive:{
            stroke:k.comboInactiveStroke, fill:k.comboInactiveFill, lineWidth:1
          }, disable:{
            stroke:k.comboDisableStroke, fill:k.comboDisableFill, lineWidth:1
          }
        }, delegateStyle:{
          fill:"#F3F9FF", fillOpacity:.5, stroke:"#1890FF", strokeOpacity:.9, lineDash:[
            5, 5
          ]
        }, textWaterMarkerConfig:{
          width:150, height:100, compatible:!1, text:{
            x:0, y:60, lineHeight:20, rotate:20, fontSize:14, fontFamily:"Microsoft YaHei", fill:"rgba(0, 0, 0, 0.1)", baseline:"Middle"
          }
        }, imageWaterMarkerConfig:{
          width:150, height:130, compatible:!1, image:{
            x:0, y:0, width:30, height:20, rotate:0
          }
        }, waterMarkerImage:"https://gw.alipayobjects.com/os/s/prod/antv/assets/image/logo-with-text-73b8a.svg"
      };
      var C=function t(e, i){
        var o;
        e.isGroup()&&i.isGroup()&&(null===(o=e.get("children"))||void 0===o||o.forEach((function(e, o){
          var n=i.get("children")[
            o
          ];
          t(e, n)
        })));
        var n=e.get("type"), a=i.get("type");
        if("image"===n&&"image"===a){
          var r=e.get("clipShape");
          r&&i.setClip({
            type:r.get("type"), attrs:r.attr()
          })
        }
      }, _=i(466051), I=l.J0.cloneEvent, P=l.J0.isViewportChanged;
      const E=function(t){
        function e(e){
          var i=t.call(this, e)||this;
          return i.extendEvents=[
          ], i.dragging=!1, i.mousedown=!1, i.preItem=null, i.destroy(), i.graph=e, i.destroyed=!1, i.initEvents(), i
        }
        return(0, s.__extends)(e, t), e.prototype.initEvents=function(){
          var t=this.graph, e=this.extendEvents, i=void 0===e?[
          ]
          :e, o=t.get("canvas"), n=o.get("el"), a=(0, p.wrapBehavior)(this, "onCanvasEvents"), r=(0, p.wrapBehavior)(this, "onExtendEvents"), s=(0, p.wrapBehavior)(this, "onWheelEvent");
          o.off("*").on("*", a), this.canvasHandler=a, i.push((0, _.A)(n, "wheel", s)), "undefined"!=typeof window&&(i.push((0, _.A)(window, "keydown", r)), i.push((0, _.A)(window, "keyup", r)), i.push((0, _.A)(window, "focus", r))), this.resetHandler&&t.off("afterchangedata", this.resetHandler), this.resetHandler=(0, p.wrapBehavior)(this, "resetStatus"), t.on("afterchangedata", this.resetHandler)
        }, e.getItemRoot=function(t){
          for(;
          t&&!t.get("item");
          )t=t.get("parent");
          return t
        }, e.prototype.onCanvasEvents=function(t){
          var i=this, o=this.graph, n=o.get("canvas"), a=t.target, r=t.type;
          switch(r){
            case"drag":this.onCanvasEvents(Object.assign({
            }, t, {
              type:"mousemove"
            }));
            break;
            case"dragend":this.onCanvasEvents(Object.assign({
            }, t, {
              type:"mouseup"
            }));
            break;
            case"mousedown":this.mousedown=!0;
            break;
            case"mouseup":setTimeout((function(){
              return i.mousedown=!1
            }));
            break;
            case"click":if(!this.mousedown)return
          }
          t.canvasX=t.x, t.canvasY=t.y;
          var s={
            x:t.canvasX, y:t.canvasY
          }, l=o.get("group").getMatrix();
          if(l||(l=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]), P(l)&&(s=o.getPointByClient(t.clientX, t.clientY)), t.x=s.x, t.y=s.y, t.currentTarget=o, a===n)return"mousemove"!==r&&"mouseleave"!==r||this.handleMouseMove(t, "canvas"), t.target=n, t.item=null, o.emit(r, t), void o.emit("canvas:".concat(r), t);
          var h=e.getItemRoot(a);
          if(h){
            var d=h.get("item");
            if(!d.destroyed){
              var c=d.getType();
              if(t.target=a, t.item=d, t.canvasX===t.x&&t.canvasY===t.y){
                var g=o.getCanvasByPoint(t.x, t.y);
                t.canvasX=g.x, t.canvasY=g.y
              }
              t.name&&!t.name.includes(":")?(o.emit("".concat(c, ":").concat(r), t), o.emit(r, t)):t.name&&o.emit(t.name, t), "dragstart"===r&&(this.dragging=!0), "dragend"===r&&(this.dragging=!1), "mousemove"===r&&this.handleMouseMove(t, c)
            }
          }
          else o.emit(r, t)
        }, e.prototype.onExtendEvents=function(t){
          this.graph.emit(t.type, t)
        }, e.prototype.onWheelEvent=function(t){
          (0, p.isNil)(t.wheelDelta)&&(t.wheelDelta=-t.detail), this.graph.emit("wheel", t)
        }, e.prototype.handleMouseMove=function(t, e){
          var i=this.graph, o=this.preItem, n=i.get("canvas"), a=t.target===n?null:t.item;
          t=I(t), o&&o!==a&&!o.destroyed&&(t.item=o, this.emitCustomEvent(o.getType(), "mouseleave", t), this.dragging&&this.emitCustomEvent(o.getType(), "dragleave", t)), a&&o!==a&&(t.item=a, this.emitCustomEvent(e, "mouseenter", t), this.dragging&&this.emitCustomEvent(e, "dragenter", t)), this.preItem=a
        }, e.prototype.emitCustomEvent=function(t, e, i){
          i.type=e, this.graph.emit("".concat(t, ":").concat(e), i)
        }, e.prototype.resetStatus=function(){
          this.mousedown=!1, this.dragging=!1, this.preItem=null
        }, e.prototype.destroy=function(){
          var t=this, e=t.graph, i=t.canvasHandler, o=t.extendEvents;
          e.get("canvas").off("*", i), (0, p.each)(o, (function(t){
            t.remove()
          })), this.resetStatus(), this.extendEvents.length=0, this.canvasHandler=null, this.resetHandler=null, this.destroyed=!0
        }, e
      }
      (l.Vo);
      var B=i(984821), N=i(305802), L=i.n(N), T=l.J0.traverseTree, A=function(t, e){
        return t?(0, p.isNumber)(t)?function(e){
          return t
        }
        :t:function(t){
          return e||1
        }
      }, F=function(t, e){
        var i=[
        ], o=[
        ], n={
        }, a=0;
        for(a=0;
        a<t.length;
        a++){
          var r=t[
            a
          ];
          n[
            r.id
          ]
          =a, i.push(r.x), i.push(r.y), i.push(0), i.push(0), o.push([
          ])
        }
        for(a=0;
        a<e.length;
        a++){
          var s=e[
            a
          ];
          o[
            n[
              s.source
            ]
          ].push(n[
            s.target
          ]), o[
            n[
              s.target
            ]
          ].push(n[
            s.source
          ])
        }
        var l=0;
        for(a=0;
        a<t.length;
        a++){
          var h=i.length, d=o[
            a
          ], c=d.length;
          i[
            4*a+2
          ]
          =h, i[
            4*a+3
          ]
          =d.length, l=Math.max(l, d.length);
          for(var g=0;
          g<c;
          ++g){
            var u=d[
              g
            ];
            i.push(+u)
          }
        }
        for(;
        i.length%4!=0;
        )i.push(0);
        return{
          array:new Float32Array(i), maxEdgePerVetex:l
        }
      }, D=function(t, e, i){
        var o=[
        ], n=[
        ], a={
        }, r=0;
        for(r=0;
        r<t.length;
        r++){
          var s=t[
            r
          ];
          a[
            s.id
          ]
          =r, o.push(s.x), o.push(s.y), o.push(0), o.push(0), n.push([
          ])
        }
        for(r=0;
        r<e.length;
        r++){
          var l=e[
            r
          ];
          n[
            a[
              l.source
            ]
          ].push(a[
            l.target
          ]), n[
            a[
              l.source
            ]
          ].push(i(l)), n[
            a[
              l.target
            ]
          ].push(a[
            l.source
          ]), n[
            a[
              l.target
            ]
          ].push(i(l))
        }
        var h=0;
        for(r=0;
        r<t.length;
        r++){
          var d=o.length, c=n[
            r
          ], g=c.length;
          o[
            4*r+2
          ]
          =d, o[
            4*r+3
          ]
          =g/2, h=Math.max(h, g/2);
          for(var u=0;
          u<g;
          ++u){
            var p=c[
              u
            ];
            o.push(+p)
          }
        }
        for(;
        o.length%4!=0;
        )o.push(0);
        return{
          array:new Float32Array(o), maxEdgePerVetex:h
        }
      }, O=function(t, e, i, o){
        var n=[
        ], a=[
        ], r={
        }, s=0;
        for(s=0;
        s<t.length;
        s++){
          var l=t[
            s
          ];
          r[
            l.id
          ]
          =s, n.push(l.x), n.push(l.y), n.push(0), n.push(0), a.push([
          ])
        }
        for(s=0;
        s<e.length;
        s++){
          var h=e[
            s
          ];
          a[
            r[
              h.source
            ]
          ].push(r[
            h.target
          ]), a[
            r[
              h.source
            ]
          ].push(i(h)), a[
            r[
              h.source
            ]
          ].push(o(h)), a[
            r[
              h.source
            ]
          ].push(0), a[
            r[
              h.target
            ]
          ].push(r[
            h.source
          ]), a[
            r[
              h.target
            ]
          ].push(i(h)), a[
            r[
              h.target
            ]
          ].push(o(h)), a[
            r[
              h.target
            ]
          ].push(0)
        }
        var d=0;
        for(s=0;
        s<t.length;
        s++){
          var c=n.length, g=a[
            s
          ], u=g.length;
          n[
            4*s+2
          ]
          =c+1048576*u/4, n[
            4*s+3
          ]
          =0, d=Math.max(d, u/4);
          for(var p=0;
          p<u;
          ++p){
            var f=g[
              p
            ];
            n.push(+f)
          }
        }
        for(;
        n.length%4!=0;
        )n.push(0);
        return{
          array:new Float32Array(n), maxEdgePerVetex:d
        }
      }, z=function(t, e){
        var i=[
        ], o=t.length, n={
        };
        return e.forEach((function(e){
          t.forEach((function(t, a){
            if(void 0===n[
              e[
                t
              ]
            ]
            &&(n[
              e[
                t
              ]
            ]
            =Object.keys(n).length), i.push(n[
              e[
                t
              ]
            ]), a===o-1)for(;
            i.length%4!=0;
            )i.push(0)
          }))
        })), {
          array:new Float32Array(i), count:Object.keys(n).length
        }
      }, Y=function(t){
        for(var e=[
        ], i=t.length, o=t[
          0
        ].length, n=function(o){
          t.forEach((function(t, n){
            if(e.push(t[
              o
            ]), n===i-1)for(;
            e.length%4!=0;
            )e.push(0)
          }))
        }, a=0;
        a<o;
        a++)n(a);
        return new Float32Array(e)
      }, X=function(t, e){
        var i={
          x:1/0, y:1/0
        }, o={
          x:-1/0, y:-1/0
        }, n="x", a="y";
        e&&[
          "V", "TB", "BT"
        ].indexOf(e)>=0&&(a="x", n="y");
        var r=0;
        T(t, (function(t){
          return r++, t.x>o.x&&(o.x=t.x), t.x<i.x&&(i.x=t.x), t.y>o.y&&(o.y=t.y), t.y<i.y&&(i.y=t.y), !0
        }));
        var s=2*Math.PI/r, l=o[
          a
        ]
        -i[
          a
        ];
        return 0===l||T(t, (function(e){
          var o=(e[
            a
          ]
          -i[
            a
          ])/l*(2*Math.PI-s)+s, r=Math.abs("x"===n?e.x-t.x:e.y-t.y);
          return e.x=r*Math.cos(o), e.y=r*Math.sin(o), !0
        })), t
      }, W=function t(){
        return"undefined"==typeof window||"undefined"==typeof document?{
        }
        :{
          canvas:!!window.CanvasRenderingContext2D, webgl:function(){
            try{
              var t=document.createElement("canvas");
              return!(!window.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))
            }
            catch(t){
              return!1
            }
          }
          (), workers:!!window.Worker, fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob, getWebGLErrorMessage:function(){
            var t=document.createElement("div");
            return t.id="webgl-error-message", t.style.fontFamily="monospace", t.style.fontSize="13px", t.style.fontWeight="normal", t.style.textAlign="center", t.style.background="#fff", t.style.color="#000", t.style.padding="1.5em", t.style.width="400px", t.style.margin="5em auto 0", this.webgl||(t.innerHTML=window.WebGLRenderingContext?[
              'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" rel="external nofollow" rel="external nofollow" style="color:#000">WebGL</a>.<br />', 'Find out how to get it <a href="http://get.webgl.org/" rel="external nofollow" rel="external nofollow" style="color:#000">here</a>.'
            ].join("\n"):[
              'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" rel="external nofollow" rel="external nofollow" style="color:#000">WebGL</a>.<br/>', 'Find out how to get it <a href="http://get.webgl.org/" rel="external nofollow" rel="external nofollow" style="color:#000">here</a>.'
            ].join("\n")), t
          }, addGetWebGLMessage:function(e){
            var i=void 0!==(e=e||{
            }).parent?e.parent:document.body, o=void 0!==e.id?e.id:"oldie", n=t().getWebGLErrorMessage();
            n.id=o, i.appendChild(n)
          }
        }
      }, R=function(){
        var t=navigator.userAgent.toLowerCase();
        return t.indexOf("firefox")>-1?"firefox":t.indexOf("safari")>-1?"safari":t.indexOf("opr")>-1?"opera":t.indexOf("chrome")>-1?"chrome":t.indexOf("trident")>-1?"ie 11":t.indexOf("ie")>-1?"ie":"unknown"
      };
      const U=(0, s.__assign)((0, s.__assign)((0, s.__assign)((0, s.__assign)((0, s.__assign)({
      }, l.J0), o), n), a), r);
      var j=U.radialLayout;
      const G=function(){
        function t(t){
          this.type=t.type, this.radial=t.radial, this.config=t
        }
        return t.prototype.init=function(t){
          var e=this;
          this.data=t, this.radial?this.layoutMethod=function(t){
            var i=L()[
              e.type
            ]
            (t, e.config);
            return j(i), i
          }
          :this.layoutMethod=function(t){
            return L()[
              e.type
            ]
            (t, e.config)
          }
        }, t.prototype.execute=function(){
          return this.layoutMethod(this.data, this.config)
        }, t.prototype.layout=function(t){
          return this.init(t), this.execute()
        }, t
      }
      ();
      (0, B.registerLayout)("grid", B.GridLayout), (0, B.registerLayout)("random", B.RandomLayout), (0, B.registerLayout)("force", B.ForceLayout), (0, B.registerLayout)("circular", B.CircularLayout), (0, B.registerLayout)("dagre", B.DagreLayout), (0, B.registerLayout)("dagreCompound", B.DagreCompoundLayout), (0, B.registerLayout)("radial", B.RadialLayout), (0, B.registerLayout)("concentric", B.ConcentricLayout), (0, B.registerLayout)("mds", B.MDSLayout), (0, B.registerLayout)("fruchterman", B.FruchtermanLayout), (0, B.registerLayout)("fruchterman-gpu", B.FruchtermanGPULayout), (0, B.registerLayout)("gForce", B.GForceLayout), (0, B.registerLayout)("force2", B.Force2Layout), (0, B.registerLayout)("gForce-gpu", B.GForceGPULayout), (0, B.registerLayout)("comboForce", B.ComboForceLayout), (0, B.registerLayout)("comboCombined", B.ComboCombinedLayout), (0, B.registerLayout)("forceAtlas2", B.ForceAtlas2Layout);
      const J=function(t, e){
        var i=t.toString(), o=new Blob([
          "importScripts('".concat(e, "');(").concat(i, ")()")
        ], {
          type:"text/javascript"
        });
        return new Worker(URL.createObjectURL(o))
      };
      var V=function(t){
        return void 0===t&&(t="https://unpkg.com/@antv/layout@0.3.23/dist/layout.min.js"), new J((function(){
          var t="LAYOUT_RUN", e="LAYOUT_END", i="LAYOUT_ERROR", o="GPU_LAYOUT_RUN";
          layout.registerLayout("grid", layout.GridLayout), layout.registerLayout("random", layout.RandomLayout), layout.registerLayout("force", layout.ForceLayout), layout.registerLayout("force2", layout.Force2Layout), layout.registerLayout("circular", layout.CircularLayout), layout.registerLayout("dagre", layout.DagreLayout), layout.registerLayout("dagreCompound", layout.DagreCompoundLayout), layout.registerLayout("radial", layout.RadialLayout), layout.registerLayout("concentric", layout.ConcentricLayout), layout.registerLayout("mds", layout.MDSLayout), layout.registerLayout("fruchterman", layout.FruchtermanLayout), layout.registerLayout("fruchterman-gpu", layout.FruchtermanGPULayout), layout.registerLayout("gForce", layout.GForceLayout), layout.registerLayout("gForce-gpu", layout.GForceGPULayout), layout.registerLayout("comboForce", layout.ComboForceLayout), layout.registerLayout("comboCombined", layout.ComboCombinedLayout), layout.registerLayout("forceAtlas2", layout.ForceAtlas2Layout), onmessage=function(n){
            (function(e){
              var i=e.data.type;
              return i===t||i===o
            })(n)&&function(n){
              var a=this;
              switch(n.data.type){
                case t:var r, s=n.data, l=s.nodes, h=s.edges, d=s.layoutCfg, c=(y=void 0===d?{
                }
                :d).type;
                if(!(g=layout.getLayoutByName(c))){
                  this.postMessage({
                    type:i, message:"layout ".concat(c, " not found")
                  });
                  break
                }
                y.onLayoutEnd=function(){
                  a.postMessage({
                    type:e, nodes:l
                  }), null==r||r.destroy()
                }, (r=new g(y)).init({
                  nodes:l, edges:h
                }), r.execute();
                break;
                case o:var g, u=n.data, p=u.nodes, f=(h=u.edges, u.layoutCfg), y=void 0===f?{
                }
                :f, m=u.canvas;
                if(c=y.type, !(g=layout.getLayoutByName(c))){
                  this.postMessage({
                    type:i, message:"layout ".concat(c, " not found")
                  });
                  break
                }
                if("gpu"!==c.split("-")[
                  1
                ]){
                  this.postMessage({
                    type:i, message:"layout ".concat(c, " does not support GPU")
                  });
                  break
                }
                var v=new g(y);
                v.init({
                  nodes:p, edges:h
                }), v.executeWithWorker(m, this)
              }
            }
            (n)
          }
        }), t)
      }, K="LAYOUT_RUN", Z="LAYOUT_END", q="LAYOUT_ERROR", H="LAYOUT_TICK", Q="GPU_LAYOUT_RUN", $="GPU_LAYOUT_END";
      function tt(t){
        return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      var et=function(t){
        return setTimeout(t, 16)
      }, it=function(t){
        return clearTimeout(t)
      }, ot=function(t){
        return("undefined"!=typeof window&&(window.requestAnimationFrame||window.webkitRequestAnimationFrame)||et)(t)
      }, nt=function(t){
        return("undefined"!=typeof window&&(window.cancelAnimationFrame||window.webkitCancelAnimationFrame)||it)(t)
      }, at=[
        "fruchterman", "gForce"
      ], rt=[
        "force", "grid", "circular"
      ];
      const st=function(t){
        function e(e){
          var i=t.call(this, e)||this;
          return i.graph=e, i.layoutCfg=e.get("layout")||{
          }, i.layoutType=i.getLayoutType(), i.worker=null, i.workerData={
          }, i.initLayout(), i
        }
        return(0, s.__extends)(e, t), e.prototype.initLayout=function(){
        }, e.prototype.getWorker=function(){
          return this.worker||("undefined"==typeof Worker?(console.warn("Web worker is not supported in current browser."), this.worker=null):this.worker=V(this.layoutCfg.workerScriptURL)), this.worker
        }, e.prototype.stopWorker=function(){
          var t=this.workerData;
          this.worker&&(this.worker.terminate(), this.worker=null, t.requestId&&(nt(t.requestId), t.requestId=null), t.requestId2&&(nt(t.requestId2), t.requestId2=null))
        }, e.prototype.execLayoutMethod=function(t, e){
          var i=this;
          return new Promise((function(o, n){
            return(0, s.__awaiter)(i, void 0, void 0, (function(){
              var i, a, r, h, d, c, g, u, p;
              return(0, s.__generator)(this, (function(s){
                switch(s.label){
                  case 0:if(!(i=this.graph)||i.get("destroyed"))return[
                    2
                  ];
                  a=t.type, t.onLayoutEnd=function(){
                    i.emit("aftersublayout", {
                      type:a
                    }), o()
                  }, a&&this.isGPU&&(ht(a)?a="".concat(a, "-gpu"):console.warn("The '".concat(a, "' layout does not support GPU calculation for now, it will run in CPU."))), l.J0.isForce(a)?(r=t.onTick, h=t.animate, d=void 0===h&&("force"===a||"force2"===a), u=function(){
                    r&&r(), (h||d)&&i.refreshPositions()
                  }, t.tick=u):"comboForce"!==a&&"comboCombined"!==a||(t.comboTrees=i.get("comboTrees")), !1;
                  try{
                    c=new B.Layouts[
                      a
                    ]
                    (t), this.layoutMethods[
                      e
                    ]
                    &&this.layoutMethods[
                      e
                    ].destroy(), this.layoutMethods[
                      e
                    ]
                    =c
                  }
                  catch(t){
                    console.warn("The layout method: '".concat(a, "' does not exist! Please specify it first.")), n()
                  }
                  return c.enableTick&&(g=t.onTick, u=function(){
                    g&&g(), i.refreshPositions()
                  }, c.tick=u), function(t, e){
                    var i;
                    if(!(null===(i=null==t?void 0:t.nodes)||void 0===i?void 0:i.length))return;
                    t.nodes.forEach((function(t){
                      t.layoutOrder=e
                    }))
                  }
                  (p=this.filterLayoutData(this.data, t), e), c.init(p), i.emit("beforesublayout", {
                    type:a
                  }), [
                    4, c.execute()
                  ];
                  case 1:return s.sent(), c.isCustomLayout&&t.onLayoutEnd&&t.onLayoutEnd(), [
                    2
                  ]
                }
              }))
            }))
          }))
        }, e.prototype.updateLayoutMethod=function(t, e){
          var i=this;
          return new Promise((function(o, n){
            return(0, s.__awaiter)(i, void 0, void 0, (function(){
              var i, n, a, r, h, d, c;
              return(0, s.__generator)(this, (function(s){
                switch(s.label){
                  case 0:return i=this.graph, n=null==e?void 0:e.type, e.onLayoutEnd=function(){
                    i.emit("aftersublayout", {
                      type:n
                    }), o()
                  }, l.J0.isForce(n)&&(a=e.onTick, r=e.animate, h=void 0===r&&("force"===n||"force2"===n), d=function(){
                    null==a||a(), (r||h)&&i.refreshPositions()
                  }, e.tick=d), c=this.filterLayoutData(this.data, e), t.init(c), t.updateCfg(e), i.emit("beforesublayout", {
                    type:n
                  }), [
                    4, t.execute()
                  ];
                  case 1:return s.sent(), t.isCustomLayout&&e.onLayoutEnd&&e.onLayoutEnd(), [
                    2
                  ]
                }
              }))
            }))
          }))
        }, e.prototype.layout=function(t){
          var e, i=this, o=this.graph;
          if(o&&!o.get("destroyed")){
            this.data=this.setDataFromGraph();
            var n=this.data, a=n.nodes, r=n.hiddenNodes;
            if(!a)return!1;
            var l=o.get("width"), h=o.get("height"), d={
            };
            Object.assign(d, {
              width:l, height:h, center:[
                l/2, h/2
              ]
            }, this.layoutCfg), this.layoutCfg=d;
            var c=d.type, g=!1;
            null===(e=this.layoutMethods)||void 0===e||e.forEach((function(t){
              var e;
              return g=!!(null===(e=t.nodes)||void 0===e?void 0:e.length)||g
            }));
            var u=this.destoryLayoutMethods();
            o.emit("beforelayout");
            var p=Promise.resolve();
            g&&c&&1===(null==u?void 0:u.length)&&u[
              0
            ]
            ===c?this.tweakInit():p=this.initPositions(d.center, a), this.initPositions(d.center, r).then(), this.isGPU=dt(d, c);
            var f=d.onLayoutEnd, y=d.layoutEndFormatted, m=d.adjust;
            if(y||(d.layoutEndFormatted=!0, d.onAllLayoutEnd=function(){
              return(0, s.__awaiter)(i, void 0, void 0, (function(){
                return(0, s.__generator)(this, (function(t){
                  switch(t.label){
                    case 0:return f&&f(a), this.refreshLayout(), m&&d.pipes?[
                      4, this.adjustPipesBox(this.data, m)
                    ]
                    :[
                      3, 2
                    ];
                    case 1:t.sent(), this.refreshLayout(), t.label=2;
                    case 2:return o.emit("afterlayout"), [
                      2
                    ]
                  }
                }))
              }))
            }), this.stopWorker(), d.workerEnabled&&this.layoutWithWorker(this.data, t))return!0;
            var v=!1;
            return d.type?(v=!0, p=p.then((function(){
              return(0, s.__awaiter)(i, void 0, void 0, (function(){
                return(0, s.__generator)(this, (function(t){
                  switch(t.label){
                    case 0:return[
                      4, this.execLayoutMethod(d, 0)
                    ];
                    case 1:return[
                      2, t.sent()
                    ]
                  }
                }))
              }))
            }))):d.pipes&&(v=!0, d.pipes.forEach((function(t, e){
              p=p.then((function(){
                return(0, s.__awaiter)(i, void 0, void 0, (function(){
                  return(0, s.__generator)(this, (function(i){
                    switch(i.label){
                      case 0:return[
                        4, this.execLayoutMethod(t, e)
                      ];
                      case 1:return[
                        2, i.sent()
                      ]
                    }
                  }))
                }))
              }))
            }))), v?p.then((function(){
              d.onAllLayoutEnd&&d.onAllLayoutEnd(), t&&t()
            })).catch((function(t){
              console.warn("graph layout failed,", t)
            })):(o.refreshPositions(), null==t||t()), !1
          }
        }, e.prototype.tweakInit=function(){
          var t=this.data, e=this.graph, i=t.nodes, o=t.edges;
          if(null==i?void 0:i.length){
            var n={
            };
            i.forEach((function(t){
              var e=t.x, i=t.y;
              isNaN(e)||isNaN(i)||(n[
                t.id
              ]
              ={
                x:e, y:i
              }, t.mass=t.mass||2)
            })), o.forEach((function(t){
              var e=t.source, i=t.target, o=n[
                e
              ], a=n[
                i
              ];
              !o&&a?n[
                e
              ]
              ={
                x:a.x+80*(Math.random()-.5), y:a.y+80*(Math.random()-.5)
              }
              :!a&&o&&(n[
                i
              ]
              ={
                x:o.x+80*(Math.random()-.5), y:o.y+80*(Math.random()-.5)
              })
            }));
            var a=e.get("width"), r=e.get("height");
            i.forEach((function(t){
              var e=n[
                t.id
              ]
              ||{
                x:a/2+20*(Math.random()-.5), y:r/2+20*(Math.random()-.5)
              };
              t.x=e.x, t.y=e.y
            }))
          }
        }, e.prototype.initWithPreset=function(t, e){
          var i=this;
          return new Promise((function(o, n){
            return(0, s.__awaiter)(i, void 0, void 0, (function(){
              var i, n, a, r, l, h, d;
              return(0, s.__generator)(this, (function(s){
                switch(s.label){
                  case 0:return n=(i=this).layoutCfg, a=i.data, (null==(r=n.preset)?void 0:r.type)&&B.Layouts[
                    null==r?void 0:r.type
                  ]
                  ?(l=dt(r, r.type), h=l?"".concat(r.type, "-gpu"):r.type, d=new B.Layouts[
                    h
                  ]
                  (r), delete n.preset, d.init(a), [
                    4, d.execute()
                  ]):(null==e||e(), o(), [
                    2, !1
                  ]);
                  case 1:return s.sent(), null==t||t(), o(), [
                    2, !0
                  ]
                }
              }))
            }))
          }))
        }, e.prototype.layoutWithWorker=function(t, e){
          var i=this, o=this.layoutCfg, n=this.graph, a=this.getWorker(), r=this.workerData;
          if(!a)return!1;
          r.requestId=null, r.requestId2=null, r.currentTick=null, r.currentTickData=null, n.emit("beforelayout");
          var s=Promise.resolve(), l=!1;
          if(o.type)l=!0, s=s.then((function(){
            return i.runWebworker(a, t, o)
          }));
          else if(o.pipes){
            l=!0;
            for(var h=function(e){
              s=s.then((function(){
                return i.runWebworker(a, t, e)
              }))
            }, d=0, c=o.pipes;
            d<c.length;
            d++){
              h(c[
                d
              ])
            }
          }
          return l&&s.then((function(){
            o.onAllLayoutEnd&&o.onAllLayoutEnd(), null==e||e()
          })).catch((function(t){
            console.error("layout failed", t)
          })), !0
        }, e.prototype.runWebworker=function(t, e, i){
          var o=this, n=this.isGPU, a=this.filterLayoutData(e, i), r=a.nodes, s=a.edges, l=document.createElement("canvas"), h=n&&"undefined"!=typeof window&&window.navigator&&!navigator.gpu&&"OffscreenCanvas"in window&&"transferControlToOffscreen"in l, d=function(t, e){
            var i={
            };
            if(t&&"object"===tt(t))return Object.keys(t).forEach((function(o){
              t.hasOwnProperty(o)&&e(t[
                o
              ])&&(i[
                o
              ]
              =t[
                o
              ])
            })), i;
            return t
          }
          (i, (function(t){
            return"function"!=typeof t
          }));
          if(h){
            var c=l.transferControlToOffscreen();
            d.type="".concat(d.type, "-gpu"), t.postMessage({
              type:Q, nodes:r, edges:s, layoutCfg:d, canvas:c
            }, [
              c
            ])
          }
          else t.postMessage({
            type:K, nodes:r, edges:s, layoutCfg:d
          });
          return new Promise((function(e, n){
            t.onmessage=function(t){
              o.handleWorkerMessage(e, n, t, a, i)
            }
          }))
        }, e.prototype.handleWorkerMessage=function(t, e, i, o, n){
          var a=this.graph, r=this.workerData, s=i.data, l=s.type, h=function(){
            n.onTick&&n.onTick()
          };
          switch(l){
            case H:r.currentTick=s.currentTick, r.currentTickData=s, r.requestId||(r.requestId=ot((function(){
              lt(o, s), a.refreshPositions(), h(), s.currentTick===s.totalTicks?t():r.currentTick===s.totalTicks&&(r.requestId2=ot((function(){
                lt(o, r.currentTickData), a.refreshPositions(), r.requestId2=null, h(), t()
              }))), r.requestId=null
            })));
            break;
            case Z:null==r.currentTick&&(lt(o, s), t());
            break;
            case $:null==r.currentTick&&(!function(t, e){
              for(var i=t.nodes, o=e.vertexEdgeData, n=i.length, a=0;
              a<n;
              a++){
                var r=i[
                  a
                ], s=o[
                  4*a
                ], l=o[
                  4*a+1
                ];
                r.x=s, r.y=l
              }
            }
            (o, s), t());
            break;
            case q:console.warn("Web-Worker layout error!", s.message), e();
            break;
            default:e()
          }
        }, e.prototype.updateLayoutCfg=function(t){
          var e=this, i=this.graph, o=this.layoutMethods;
          if(i&&!i.get("destroyed")){
            var n=t.disableTriggerLayout, a=(0, s.__rest)(t, [
              "disableTriggerLayout"
            ]), r=(0, p.mix)({
            }, this.layoutCfg, a);
            if(this.layoutCfg=r, !n)if(null==o?void 0:o.length){
              if(this.data=this.setDataFromGraph(), this.stopWorker(), !a.workerEnabled||!this.layoutWithWorker(this.data, null)){
                i.emit("beforelayout");
                var l=Promise.resolve(), h=!1;
                1===(null==o?void 0:o.length)?(h=!0, l=l.then((function(){
                  return(0, s.__awaiter)(e, void 0, void 0, (function(){
                    return(0, s.__generator)(this, (function(t){
                      switch(t.label){
                        case 0:return[
                          4, this.updateLayoutMethod(o[
                            0
                          ], r)
                        ];
                        case 1:return[
                          2, t.sent()
                        ]
                      }
                    }))
                  }))
                }))):(null==o?void 0:o.length)&&(h=!0, o.forEach((function(t, i){
                  var o=r.pipes[
                    i
                  ];
                  l=l.then((function(){
                    return(0, s.__awaiter)(e, void 0, void 0, (function(){
                      return(0, s.__generator)(this, (function(e){
                        switch(e.label){
                          case 0:return[
                            4, this.updateLayoutMethod(t, o)
                          ];
                          case 1:return[
                            2, e.sent()
                          ]
                        }
                      }))
                    }))
                  }))
                }))), h&&l.then((function(){
                  r.onAllLayoutEnd&&r.onAllLayoutEnd()
                })).catch((function(t){
                  console.warn("layout failed", t)
                }))
              }
            }
            else this.layout()
          }
        }, e.prototype.adjustPipesBox=function(t, e){
          var i=this;
          return new Promise((function(o){
            var n=t.nodes;
            (null==n?void 0:n.length)||o(), rt.includes(e)||(console.warn("The adjust type ".concat(e, " is not supported yet, please assign it with 'force', 'grid', or 'circular'.")), o());
            var a={
              center:i.layoutCfg.center, nodeSize:function(t){
                return Math.max(t.height, t.width)
              }, preventOverlap:!0, onLayoutEnd:function(){
              }
            }, r=i.getLayoutBBox(n), s=r.groupNodes, l=r.layoutNodes, h=(0, p.clone)(l);
            a.onLayoutEnd=function(){
              null==l||l.forEach((function(t, e){
                var i, o, n, a=t.x-(null===(i=h[
                  e
                ])||void 0===i?void 0:i.x), r=t.y-(null===(o=h[
                  e
                ])||void 0===o?void 0:o.y);
                null===(n=s[
                  e
                ])||void 0===n||n.forEach((function(t){
                  t.x+=a, t.y+=r
                }))
              })), o()
            }, new B.Layouts[
              e
            ]
            (a).layout({
              nodes:l
            })
          }))
        }, e.prototype.destroy=function(){
          this.destoryLayoutMethods();
          var t=this.worker;
          t&&(t.terminate(), this.worker=null), this.destroyed=!0, this.graph.set("layout", void 0), this.layoutCfg=void 0, this.layoutType=void 0, this.layoutMethods=void 0, this.graph=null
        }, e
      }
      (l.hw);
      function lt(t, e){
        for(var i=t.nodes, o=e.nodes, n=i.length, a=0;
        a<n;
        a++){
          var r=i[
            a
          ];
          r.x=o[
            a
          ].x, r.y=o[
            a
          ].y
        }
      }
      function ht(t){
        return at.includes(t)
      }
      function dt(t, e){
        var i=e;
        e&&"gpu"===e.split("-")[
          1
        ]
        &&(i=e.split("-")[
          0
        ], t.gpuEnabled=!0);
        var o=!1;
        return t.gpuEnabled&&(o=!0, W().webgl||(console.warn("Your browser does not support webGL or GPGPU. The layout will run in CPU."), o=!1)), o&&!ht(i)&&(console.warn("The '".concat(i, "' layout does not support GPU calculation for now, it will run in CPU.")), o=!1), o
      }
      var ct=u.pd;
      const gt=function(t){
        function e(e){
          var i=t.call(this, e)||this, o=i.get("defaultNode");
          return o||i.set("defaultNode", {
            type:"circle"
          }), o.type||(o.type="circle", i.set("defaultNode", o)), i.destroyed=!1, i
        }
        return(0, s.__extends)(e, t), e.prototype.initLayoutController=function(){
          var t=new st(this);
          this.set({
            layoutController:t
          })
        }, e.prototype.initEventController=function(){
          var t=new E(this);
          this.set({
            eventController:t
          })
        }, e.prototype.initCanvas=function(){
          var t=this.get("container");
          if("string"==typeof t&&(t=document.getElementById(t), this.set("container", t)), !t)throw new Error("invalid container");
          var e, i=t.clientWidth, o=t.clientHeight, n=this.get("width")||i, a=this.get("height")||o;
          if(this.get("width")||this.get("height")||(this.set("width", i), this.set("height", o)), "svg"===this.get("renderer"))e=new g.Canvas({
            container:t, width:n, height:a
          });
          else{
            var r={
              container:t, width:n, height:a
            }, s=this.get("pixelRatio");
            s&&(r.pixelRatio=s, window.devicePixelRatio=s), e=new c.Canvas(r)
          }
          this.set("canvas", e)
        }, e.prototype.initPlugins=function(){
          var t=this;
          (0, p.each)(t.get("plugins"), (function(e){
            !e.destroyed&&e.initPlugin&&e.initPlugin(t)
          }))
        }, e.prototype.downloadImageWatermark=function(t, e, i, o){
          return(0, s.__awaiter)(this, void 0, void 0, (function(){
            var n, a, r;
            return(0, s.__generator)(this, (function(s){
              switch(s.label){
                case 0:return n=t.style.backgroundImage, a=n.slice(5, n.length-2), (r=new Image).src=a, [
                  4, new Promise((function(t){
                    r.onload=function(){
                      var n=e.createPattern(r, "repeat");
                      e.rect(0, 0, i, o), e.fillStyle=n, e.fill(), t("")
                    }
                  }))
                ];
                case 1:return s.sent(), [
                  2
                ]
              }
            }))
          }))
        }, e.prototype.asyncToDataUrl=function(t, e, i, o, n, a){
          var r=this, l=document.querySelector(".g6-graph-watermarker"), h=this.get("canvas"), d=h.getRenderer(), c=a||h.get("el"), g="";
          t||(t="image/png"), setTimeout((function(){
            return(0, s.__awaiter)(r, void 0, void 0, (function(){
              var a, r, h, u, p, f, y, m, v, b;
              return(0, s.__generator)(this, (function(s){
                switch(s.label){
                  case 0:return"svg"!==d?[
                    3, 1
                  ]
                  :(a=c.cloneNode(!0), r=document.implementation.createDocumentType("svg", "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"), (h=document.implementation.createDocument("http://www.w3.org/2000/svg", "svg", r)).replaceChild(a, h.documentElement), u=(new XMLSerializer).serializeToString(h), g="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(u)), [
                    3, 4
                  ]);
                  case 1:return p=void 0, f=c.getContext("2d"), y=o||this.get("width"), m=n||this.get("height"), v=void 0, l?[
                    4, this.downloadImageWatermark(l, f, y, m)
                  ]
                  :[
                    3, 3
                  ];
                  case 2:s.sent(), s.label=3;
                  case 3:if(e){
                    b="undefined"!=typeof window?window.devicePixelRatio:1;
                    try{
                      p=f.getImageData(0, 0, y*b, m*b), v=f.globalCompositeOperation, f.globalCompositeOperation="destination-over", f.fillStyle=e, f.fillRect(0, 0, y, m)
                    }
                    catch(t){
                      console.error("Download image failed. Out of memory at ImageData creation")
                    }
                  }
                  g=c.toDataURL(t), e&&(f.clearRect(0, 0, y, m), f.putImageData(p, 0, 0), f.globalCompositeOperation=v), s.label=4;
                  case 4:return i&&i(g), [
                    2
                  ]
                }
              }))
            }))
          }), 16)
        }, e.prototype.toDataURL=function(t, e){
          var i=this.get("canvas"), o=i.getRenderer(), n=i.get("el");
          t||(t="image/png");
          var a="";
          if("svg"===o){
            var r=n.cloneNode(!0), s=document.implementation.createDocumentType("svg", "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"), l=document.implementation.createDocument("http://www.w3.org/2000/svg", "svg", s);
            l.replaceChild(r, l.documentElement);
            var h=(new XMLSerializer).serializeToString(l);
            a="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(h))
          }
          else{
            var d=void 0, c=n.getContext("2d"), g=Math.max(this.get("width"), 500), u=Math.max(this.get("height"), 500), p=void 0;
            if(e){
              var f="undefined"!=typeof window&&window.devicePixelRatio||1;
              try{
                d=c.getImageData(0, 0, g*f, u*f), p=c.globalCompositeOperation, c.globalCompositeOperation="destination-over", c.fillStyle=e, c.fillRect(0, 0, g, u)
              }
              catch(t){
                console.error("Download image failed. Out of memory at ImageData creation")
              }
            }
            a=n.toDataURL(t), e&&(c.clearRect(0, 0, g, u), c.putImageData(d, 0, 0), c.globalCompositeOperation=p)
          }
          return a
        }, e.prototype.toFullDataURL=function(t, e, i){
          var o=this.get("group").getCanvasBBox(), n=o.height, a=o.width, r=this.get("renderer"), s=(0, f.A)('<div id="virtual-image"></div>'), l=i?i.backgroundColor:void 0, h=i?i.padding:void 0;
          h?(0, p.isNumber)(h)&&(h=[
            h, h, h, h
          ]):h=[
            0, 0, 0, 0
          ];
          var d=n+h[
            0
          ]
          +h[
            2
          ], u=a+h[
            1
          ]
          +h[
            3
          ], y={
            container:s, height:d, width:u, quickHit:!0
          }, m="svg"===r?new g.Canvas(y):new c.Canvas(y), v=this.get("group").clone(), b=(0, p.clone)(v.getMatrix());
          b||(b=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]);
          var x=(o.maxX+o.minX)/2, S=(o.maxY+o.minY)/2;
          b=ct(b, [
            [
              "t", -x, -S
            ], [
              "t", a/2+h[
                3
              ], n/2+h[
                0
              ]
            ]
          ]), v.resetMatrix(), v.setMatrix(b), m.add(v);
          var w=m.get("el"), k="";
          e||(e="image/png"), setTimeout((function(){
            if("svg"===r){
              var i=w.cloneNode(!0), o=document.implementation.createDocumentType("svg", "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"), n=document.implementation.createDocument("http://www.w3.org/2000/svg", "svg", o);
              n.replaceChild(i, n.documentElement);
              var a=(new XMLSerializer).serializeToString(n);
              k="data:image/svg+xml;charset=utf8,".concat(encodeURIComponent(a))
            }
            else{
              var s=void 0, h=w.getContext("2d"), c=void 0;
              if(l){
                var g="undefined"!=typeof window?window.devicePixelRatio:1;
                try{
                  s=h.getImageData(0, 0, u*g, d*g), c=h.globalCompositeOperation, h.globalCompositeOperation="destination-over", h.fillStyle=l, h.fillRect(0, 0, u, d)
                }
                catch(t){
                  console.error("Download image failed. Out of memory at ImageData creation")
                }
              }
              k=w.toDataURL(e), l&&(h.clearRect(0, 0, u, d), h.putImageData(s, 0, 0), h.globalCompositeOperation=c)
            }
            t&&t(k)
          }), 16)
        }, e.prototype.downloadFullImage=function(t, e, i){
          var o=this, n=this.get("group").getCanvasBBox(), a=n.height, r=n.width, s=this.get("renderer"), l=(0, f.A)('<div id="virtual-image"></div>'), h=document.querySelector(".g6-graph-watermarker"), d=i?i.backgroundColor:void 0, u=i?i.padding:void 0;
          u?(0, p.isNumber)(u)&&(u=[
            u, u, u, u
          ]):u=[
            0, 0, 0, 0
          ];
          var y=a+u[
            0
          ]
          +u[
            2
          ], m=r+u[
            1
          ]
          +u[
            3
          ];
          if(h){
            var v=this.get("graphWaterMarker").cfg||{
            }, b=v.width, x=v.height;
            y=Math.ceil(y/x)*x, m=Math.ceil(m/b)*b
          }
          var S, w, k={
            container:l, height:y, width:m
          }, M="svg"===s?new g.Canvas(k):new c.Canvas(k), _=this.get("group"), I=(w=(S=_).clone(), C(S, w), w), P=(0, p.clone)(I.getMatrix());
          P||(P=[
            1, 0, 0, 0, 1, 0, 0, 0, 1
          ]);
          var E=(n.maxX+n.minX)/2, B=(n.maxY+n.minY)/2;
          P=ct(P, [
            [
              "t", -E, -B
            ], [
              "t", r/2+u[
                3
              ], a/2+u[
                0
              ]
            ]
          ]), I.resetMatrix(), I.setMatrix(P), M.add(I);
          var N=M.get("el");
          e||(e="image/png"), this.asyncToDataUrl(e, d, (function(i){
            var n=document.createElement("a"), a=(t||"graph")+("svg"===s?".svg":".".concat(e.split("/")[
              1
            ]));
            o.dataURLToImage(i, s, n, a);
            var r=document.createEvent("MouseEvents");
            r.initEvent("click", !1, !1), n.dispatchEvent(r)
          }), m, y, N)
        }, e.prototype.downloadImage=function(t, e, i){
          var o=this, n=this;
          n.stopAnimate();
          var a=n.get("canvas").getRenderer();
          e||(e="image/png");
          var r=(t||"graph")+("svg"===a?".svg":".".concat(e.split("/")[
            1
          ])), s=document.createElement("a");
          n.asyncToDataUrl(e, i, (function(t){
            o.dataURLToImage(t, a, s, r);
            var e=document.createEvent("MouseEvents");
            e.initEvent("click", !1, !1), s.dispatchEvent(e)
          }))
        }, e.prototype.dataURLToImage=function(t, e, i, o){
          if(t&&"data:"!==t){
            if("undefined"!=typeof window)if(window.Blob&&window.URL&&"svg"!==e){
              var n=t.split(","), a="";
              if(n&&n.length>0){
                var r=n[
                  0
                ].match(/:(.*?);
                /);
                r&&r.length>=2&&(a=r[
                  1
                ])
              }
              for(var s=atob(n[
                1
              ]), l=s.length, h=new Uint8Array(l);
              l--;
              )h[
                l
              ]
              =s.charCodeAt(l);
              var d=new Blob([
                h
              ], {
                type:a
              });
              window.navigator.msSaveBlob?window.navigator.msSaveBlob(d, o):i.addEventListener("click", (function(){
                i.download=o, i.href=window.URL.createObjectURL(d)
              }))
            }
            else i.addEventListener("click", (function(){
              i.download=o, i.href=t
            }))
          }
          else console.error("Download image failed. The graph is too large or there is invalid attribute values in graph items")
        }, e.prototype.addPlugin=function(t){
          t.destroyed||(this.get("plugins").push(t), t.initPlugin(this))
        }, e.prototype.removePlugin=function(t){
          var e=this.get("plugins"), i=e.indexOf(t);
          i>=0&&(t.destroyPlugin(), e.splice(i, 1))
        }, e.prototype.setImageWaterMarker=function(t, e){
          void 0===t&&(t=M.waterMarkerImage);
          var i=this.get("container");
          (0, p.isString)(i)&&(i=document.getElementById(i)), i.style.position||(i.style.position="relative");
          var o=this.get("graphWaterMarker"), n=(0, p.deepMix)({
          }, M.imageWaterMarkerConfig, e), a=n.width, r=n.height, s=n.compatible, l=n.image;
          if(!t){
            var h=s?i:document.querySelector(".g6-graph-watermarker");
            return h&&(h.style.cssText=void 0), void(o&&o.clear())
          }
          if(o)o.clear();
          else{
            var d={
              container:i, width:a, height:r, capture:!1
            }, g=this.get("pixelRatio");
            g&&(d.pixelRatio=g, window.devicePixelRatio=g), o=new c.Canvas(d), this.set("graphWaterMarker", o)
          }
          o.get("el").style.display="none";
          var u=o.get("context"), f=l.rotate, y=l.x, m=l.y;
          u.rotate(-f*Math.PI/180);
          var v=new Image;
          v.crossOrigin="anonymous", v.src=t, v.onload=function(){
            if(u.drawImage(v, y, m, l.width, l.height), u.rotate(f*Math.PI/180), s)i.style.cssText="background-image: url(".concat(o.get("el").toDataURL("image/png"), ");background-repeat:repeat;");
            else{
              var t=document.querySelector(".g6-graph-watermarker");
              t||((t=document.createElement("div")).className="g6-graph-watermarker"), t.className="g6-graph-watermarker", o.destroyed||(t.style.cssText="background-image: url(".concat(o.get("el").toDataURL("image/png"), ");background-repeat:repeat;position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;z-index:-1;"), i.appendChild(t))
            }
          }
        }, e.prototype.setTextWaterMarker=function(t, e){
          var i=this.get("container");
          (0, p.isString)(i)&&(i=document.getElementById(i)), i.style.position||(i.style.position="relative");
          var o=this.get("graphWaterMarker"), n=(0, p.deepMix)({
          }, M.textWaterMarkerConfig, e), a=n.width, r=n.height, s=n.compatible, l=n.text;
          if(!(null==t?void 0:t.length)){
            var h=s?i:document.querySelector(".g6-graph-watermarker");
            return h&&(h.style.cssText=void 0), void(o&&o.clear())
          }
          if(o)o.clear();
          else{
            var d={
              container:i, width:a, height:r, capture:!1
            }, g=this.get("pixelRatio");
            g&&(d.pixelRatio=g, window.devicePixelRatio=g), o=new c.Canvas(d), this.set("graphWaterMarker", o)
          }
          o.get("el").style.display="none";
          var u=o.get("context"), f=l.rotate, y=l.fill, m=l.fontFamily, v=l.fontSize, b=l.baseline, x=l.x, S=l.y, w=l.lineHeight;
          u.rotate(-f*Math.PI/180), u.font="".concat(v, "px ").concat(m), u.fillStyle=y, u.textBaseline=b;
          for(var k=(0, p.isString)(t)?[
            t
          ]
          :t, C=k.length-1;
          C>=0;
          C--)u.fillText(k[
            C
          ], x, S+C*w);
          if(u.rotate(f*Math.PI/180), s)i.style.cssText="background-image: url(".concat(o.get("el").toDataURL("image/png"), ");background-repeat:repeat;");
          else{
            var _=document.querySelector(".g6-graph-watermarker");
            _||((_=document.createElement("div")).className="g6-graph-watermarker"), _.style.cssText="background-image: url(".concat(o.get("el").toDataURL("image/png"), ");background-repeat:repeat;position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;z-index:99;"), i.appendChild(_)
          }
        }, e.prototype.destroy=function(){
          var e, i, o, n;
          (0, p.each)(this.get("plugins"), (function(t){
            t.destroyPlugin()
          }));
          var a=this.get("tooltips");
          if(a)for(var r=0;
          r<a.length;
          r++){
            var s=a[
              r
            ];
            if(s){
              var l=s.parentElement;
              l&&l.removeChild(s)
            }
          }
          null===(e=this.get("eventController"))||void 0===e||e.destroy(), null===(i=this.get("layoutController"))||void 0===i||i.destroy(), null===(o=this.get("graphWaterMarker"))||void 0===o||o.destroy(), null===(n=document.querySelector(".g6-graph-watermarker"))||void 0===n||n.remove(), t.prototype.destroy.call(this)
        }, e
      }
      (l.d);
      function ut(t){
        return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      function pt(t, e){
        if(void 0===e&&(e=new WeakMap), null===t)return t;
        if(t instanceof Date)return new Date(t);
        if(t instanceof RegExp)return new RegExp(t);
        if("object"!==ut(t))return t;
        if(e.get(t))return e.get(t);
        var i=Array.isArray(t)?[
        ]
        :{
        };
        for(var o in e.set(t, i), t)t.hasOwnProperty(o)&&void 0!==t[
          o
        ]
        &&(i[
          o
        ]
        =pt(t[
          o
        ], e));
        return i
      }
      function ft(t){
        try{
          return structuredClone(t)
        }
        catch(e){
          return pt(t)
        }
      }
      var yt=U.radialLayout, mt=U.traverseTree;
      const vt=function(t){
        function e(e){
          var i=t.call(this, e)||this;
          return i.layoutAnimating=!1, i.set("removeList", [
          ]), i.set("layoutMethod", i.getLayout()), i
        }
        return(0, s.__extends)(e, t), e.prototype.getLayout=function(){
          var t=this.get("layout");
          return t?"function"==typeof t?t:(t.type||(t.type="dendrogram"), t.direction||(t.direction="indented"===t.type?"LR":"TB"), t.radial?function(e){
            var i=L()[
              t.type
            ]
            (e, t);
            return yt(i), i
          }
          :function(e){
            return L()[
              t.type
            ]
            (e, t)
          }):null
        }, e.indexOfChild=function(t, e){
          var i=-1;
          return(0, p.each)(t, (function(t, o){
            if(e===t.id)return i=o, !1
          })), i
        }, e.prototype.getDefaultCfg=function(){
          var e=t.prototype.getDefaultCfg.call(this);
          return e.animate=!0, e
        }, e.prototype.innerAddChild=function(t, e, i){
          var o=this, n=t.data;
          n&&(n.x=t.x, n.y=t.y, n.depth=t.depth);
          var a=o.addItem("node", n, !1);
          if(e){
            if(a.set("parent", e), i){
              var r=e.get("originAttrs");
              if(r)a.set("originAttrs", r);
              else{
                var s=e.getModel();
                a.set("originAttrs", {
                  x:s.x, y:s.y
                })
              }
            }
            var l=e.get("children");
            l?l.push(a):e.set("children", [
              a
            ]), o.addItem("edge", {
              source:e.get("id"), target:a.get("id"), id:"".concat(e.get("id"), ":").concat(a.get("id"))
            }, !1)
          }
          return(0, p.each)(t.children||[
          ], (function(t){
            o.innerAddChild(t, a, i)
          })), o.emit("afteraddchild", {
            item:a, parent:e
          }), a
        }, e.prototype.innerUpdateChild=function(t, i, o){
          var n=this, a=n.findById(t.id);
          if(a){
            (0, p.each)(t.children||[
            ], (function(t){
              n.innerUpdateChild(t, a, o)
            }));
            var r, s, l=a.get("children");
            if(l)if(l.length>0)for(var h=l.length-1;
            h>=0;
            h--){
              var d=l[
                h
              ].getModel();
              -1===e.indexOfChild(t.children||[
              ], d.id)&&(n.innerRemoveChild(d.id, {
                x:t.x, y:t.y
              }, o), l.splice(h, 1))
            }
            a.get("originAttrs")&&(r=a.get("originAttrs").x, s=a.get("originAttrs").y);
            var c=a.getModel();
            o&&a.set("originAttrs", {
              x:c.x, y:c.y
            }), a.set("model", Object.assign(c, t.data)), r===t.x&&s===t.y||a.updatePosition({
              x:t.x, y:t.y
            })
          }
          else n.innerAddChild(t, i, o)
        }, e.prototype.innerRemoveChild=function(t, e, i){
          var o=this, n=o.findById(t);
          if(n)if((0, p.each)(n.get("children"), (function(t){
            o.innerRemoveChild(t.getModel().id, e, i)
          })), i){
            var a=n.getModel();
            n.set("to", e), n.set("originAttrs", {
              x:a.x, y:a.y
            }), o.get("removeList").push(n)
          }
          else o.removeItem(n, !1)
        }, e.prototype.changeData=function(t, e){
          void 0===e&&(e=!0);
          var i=this;
          this.getNodes().map((function(t){
            return i.clearItemStates(t)
          })), this.getEdges().map((function(t){
            return i.clearItemStates(t)
          })), e&&this.get("enabledStack")&&this.pushStack("changedata", {
            before:i.get("originData"), after:t||i.get("data")
          }), t?(i.data(t), i.render(!1)):i.layout(this.get("fitView"))
        }, e.prototype.changeLayout=function(t){
          console.warn("Please call updateLayout instead of changeLayout. changeLayout will be discarded soon");
          this.updateLayout(t)
        }, e.prototype.updateLayout=function(t, e, i, o){
          void 0===o&&(o=!0);
          var n=this;
          if(t){
            if(o&&this.get("enabledStack")&&this.pushStack("layout", {
              before:n.get("layout"), after:t
            }), n.set("layout", t), n.set("layoutMethod", n.getLayout()), n.layout(), e){
              var a=i;
              a||(a="begin"===e?{
                x:0, y:0
              }
              :{
                x:this.getWidth()/2, y:this.getHeight()/2
              }), a=this.getPointByCanvas(a.x, a.y);
              var r=this.getGroup().getMatrix()||[
                1, 0, 0, 0, 1, 0, 0, 0, 1
              ];
              a.x=a.x*r[
                0
              ]
              +r[
                6
              ], a.y=a.y*r[
                0
              ]
              +r[
                7
              ];
              var s=this.getGroup().getCanvasBBox(), l=s.minX, h=s.maxX, d=s.minY, c={
                x:(l+h)/2, y:(d+s.maxY)/2
              };
              "begin"===e&&(c.x=l, c.y=d), this.translate(a.x-c.x, a.y-c.y)
            }
          }
          else console.warn("layout cannot be null")
        }, e.prototype.refreshLayout=function(t){
          console.warn("Please call layout instead of refreshLayout. refreshLayout will be discarded soon");
          this.layout(t)
        }, e.prototype.layout=function(t){
          var e=this, i=this, o=i.get("data"), n=i.get("layoutMethod"), a=i.get("layout"), r=o;
          if(null==a?void 0:a.excludeInvisibles){
            o=(0, p.clone)(i.get("data"));
            var s={
            };
            mt(o, (function(t){
              var i=t.children;
              if(!(null==i?void 0:i.length))return!0;
              for(var o=i.length-1;
              o>=0;
              o--){
                var n=e.findById(i[
                  o
                ].id);
                (n?!n.isVisible():!1===i[
                  o
                ].visible)&&(s[
                  t.id
                ]
                =s[
                  t.id
                ]
                ||[
                ], s[
                  t.id
                ].push({
                  idx:o, child:i.splice(o, 1)[
                    0
                  ]
                }))
              }
            })), r=n?n(o, i.get("layout")):o, mt(r, (function(t){
              var e=s[
                t.id
              ];
              if(null==e?void 0:e.length)for(var i=e.length-1;
              i>=0;
              i--){
                var o=e[
                  i
                ], n=o.idx, a=o.child;
                t.children.splice(n, 0, a)
              }
            }))
          }
          else r=n?n(o, i.get("layout")):o;
          var l=i.get("animate");
          (i.emit("beforerefreshlayout", {
            data:o, layoutData:r
          }), i.emit("beforelayout"), i.innerUpdateChild(r, void 0, l), t)&&i.get("viewController").fitView();
          l?i.layoutAnimate(r):(i.refresh(), i.paint()), i.emit("afterrefreshlayout", {
            data:o, layoutData:r
          }), i.emit("afterlayout")
        }, e.prototype.addChild=function(t, e, i){
          void 0===i&&(i=!0);
          var o=this;
          o.emit("beforeaddchild", {
            model:t, parent:e
          }), (0, p.isString)(e)||(e=e.get("id"));
          var n=o.findDataById(e);
          n&&(n.children||(n.children=[
          ]), n.children.push(t), o.findById(e).refresh(), o.changeData(void 0, i))
        }, e.prototype.updateChildren=function(t, e, i){
          void 0===i&&(i=!0);
          var o=this, n=o.findById(e);
          e&&n?(o.findDataById(e).children=t, n.refresh(), o.changeData(void 0, i)):console.warn("Update children failed! There is no node with id '".concat(e, "'"))
        }, e.prototype.updateChild=function(t, i, o){
          void 0===o&&(o=!0);
          var n=this;
          if(i&&n.findById(i)){
            var a=n.findDataById(i), r=n.findById(t.id);
            if(a.children||(a.children=[
            ]), r){
              var s=e.indexOfChild(a.children, t.id);
              s>-1&&(a.children[
                s
              ]
              =t)
            }
            else a.children.push(t);
            var l=n.findById(i);
            null==l||l.refresh(), n.changeData(void 0, o)
          }
          else n.changeData(t, o)
        }, e.prototype.removeChild=function(t, i){
          void 0===i&&(i=!0);
          var o, n=this, a=n.findById(t);
          if((o=a?null==a?void 0:a.get("parent"):n.getNodes().find((function(e){
            return!!(e.getModel().children||[
            ]).find((function(e){
              return e.id===t
            }))
          })))&&!o.destroyed){
            var r=o.get("id"), s=n.findDataById(r), l=s&&s.children||[
            ], h=e.indexOfChild(l, t);
            l.splice(h, 1), o.refresh()
          }
          n.changeData(void 0, i)
        }, e.prototype.findDataById=function(t, e){
          var i=this;
          if(e||(e=i.get("data")), t===e.id)return e;
          var o=null;
          return(0, p.each)(e.children||[
          ], (function(e){
            return e.id===t?(o=e, !1):!(o=i.findDataById(t, e))&&void 0
          })), o
        }, e.prototype.layoutAnimate=function(t, e){
          var i=this, o=this.get("animateCfg");
          i.emit("beforeanimate", {
            data:t
          }), i.getEdges().forEach((function(t){
            var e=t.get("model");
            e.sourceAnchor||(e.sourceAnchor=t.get("sourceAnchorIndex"))
          })), this.get("canvas").animate((function(o){
            mt(t, (function(n){
              var a=i.findById(n.id);
              if(a){
                var r=a.get("originAttrs"), s=a.get("model");
                if(r||(r={
                  x:s.x, y:s.y
                }, a.set("originAttrs", r)), e){
                  var l=e(a, o, r, t);
                  a.set("model", Object.assign(s, l))
                }
                else s.x=r.x+(n.x-r.x)*o, s.y=r.y+(n.y-r.y)*o
              }
              return!0
            })), (0, p.each)(i.get("removeList"), (function(t){
              var e=t.getModel(), i=t.get("originAttrs"), n=t.get("to");
              e.x=i.x+(n.x-i.x)*o, e.y=i.y+(n.y-i.y)*o
            })), i.refreshPositions()
          }), {
            duration:o.duration, easing:o.ease, callback:function(){
              (0, p.each)(i.getNodes(), (function(t){
                t.set("originAttrs", null)
              })), (0, p.each)(i.get("removeList"), (function(t){
                i.removeItem(t, !1)
              })), i.set("removeList", [
              ]), o.callback&&o.callback(), i.emit("afteranimate", {
                data:t
              })
            }, delay:o.delay
          })
        }, e.prototype.stopLayoutAnimate=function(){
          this.get("canvas").stopAnimate(), this.emit("layoutanimateend", {
            data:this.get("data")
          }), this.layoutAnimating=!1
        }, e.prototype.isLayoutAnimating=function(){
          return this.layoutAnimating
        }, e.prototype.render=function(t){
          void 0===t&&(t=!0);
          var e=this, i=e.get("data");
          if(!i||!(0, p.isObject)(i)||!Object.keys(i).length)throw new Error("data must be defined first");
          e.clear(), t&&this.get("enabledStack")&&this.clearStack(), e.emit("beforerender"), e.layout(this.get("fitView")), e.emit("afterrender")
        }, e.prototype.save=function(){
          return this.get("data")
        }, e.prototype.data=function(e){
          t.prototype.data.call(this, e), this.set("originData", ft(e))
        }, e
      }
      (gt);
      const bt=i(526849).Ay;
      (0, l.Qp)("circle", {
        options:{
          size:l.JF.defaultNode.size, style:{
            x:0, y:0, stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20
          }, stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"circle", labelPosition:"center", drawShape:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).icon, o=void 0===i?{
          }
          :i, n=this.getShapeStyle(t), a=(0, p.deepMix)({
          }, o, t.icon), r="".concat(this.type, "-keyShape"), l=e.addShape("circle", {
            attrs:n, className:r, name:r, draggable:!0
          });
          e.shapeMap[
            r
          ]
          =l;
          var h=a.width, d=a.height, c=a.show, g=a.text;
          if(c){
            var u="".concat(this.type, "-icon");
            e.shapeMap[
              u
            ]
            =g?e.addShape("text", {
              attrs:(0, s.__assign)({
                x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
              }, a), className:u, name:u, draggable:!0
            }):e.addShape("image", {
              attrs:(0, s.__assign)({
                x:-h/2, y:-d/2
              }, a), className:u, name:u, draggable:!0
            })
          }
          return this.drawLinkPoints(t, e), l
        }, drawLinkPoints:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).linkPoints;
          if(i){
            var o=i||{
            }, n=o.top, a=o.left, r=o.right, l=o.bottom, h=o.size, d=o.r, c=(0, s.__rest)(o, [
              "top", "left", "right", "bottom", "size", "r"
            ]), g=this.getSize(t)[
              0
            ]
            /2;
            if(a){
              var u="link-point-left";
              e.shapeMap[
                u
              ]
              =e.addShape("circle", {
                attrs:(0, s.__assign)((0, s.__assign)({
                }, c), {
                  x:-g, y:0, r:h/2||d||5
                }), className:u, name:u, isAnchorPoint:!0
              })
            }
            if(r){
              var p="link-point-right";
              e.shapeMap[
                p
              ]
              =e.addShape("circle", {
                attrs:(0, s.__assign)((0, s.__assign)({
                }, c), {
                  x:g, y:0, r:h/2||d||5
                }), className:p, name:p, isAnchorPoint:!0
              })
            }
            if(n){
              var f="link-point-top";
              e.shapeMap[
                f
              ]
              =e.addShape("circle", {
                attrs:(0, s.__assign)((0, s.__assign)({
                }, c), {
                  x:0, y:-g, r:h/2||d||5
                }), className:f, name:f, isAnchorPoint:!0
              })
            }
            if(l){
              var y="link-point-bottom";
              e.shapeMap[
                y
              ]
              =e.addShape("circle", {
                attrs:(0, s.__assign)((0, s.__assign)({
                }, c), {
                  x:0, y:g, r:h/2||d||5
                }), className:y, name:y, isAnchorPoint:!0
              })
            }
          }
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.deepMix)({
          }, e, i), n=this.getSize(t)[
            0
          ]
          /2;
          return(0, s.__assign)({
            x:0, y:0, r:n
          }, o)
        }, update:function(t, e, i){
          var o=e.getContainer(), n=this.getSize(t), a=(0, s.__assign)({
          }, t.style);
          void 0===t.style.stroke&&t.color&&(a.stroke=t.color), void 0!==t.style.r||isNaN(n[
            0
          ])||(a.r=n[
            0
          ]
          /2), this.updateShape(t, e, a, !0, i), this.updateLinkPoints(t, o)
        }
      }, "single-node"), (0, l.Qp)("rect", {
        options:{
          size:[
            100, 30
          ], style:{
            radius:0, stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20
          }, anchorPoints:[
            [
              0, .5
            ], [
              1, .5
            ]
          ], stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"rect", labelPosition:"center", drawShape:function(t, e){
          var i=this.getShapeStyle(t), o=e.addShape("rect", {
            attrs:i, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          });
          return e.shapeMap[
            "".concat(this.type, "-keyShape")
          ]
          =o, this.drawLinkPoints(t, e), o
        }, drawLinkPoints:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).linkPoints, o=void 0===i?{
          }
          :i, n=o.top, a=o.left, r=o.right, l=o.bottom, h=o.size, d=o.r, c=(0, s.__rest)(o, [
            "top", "left", "right", "bottom", "size", "r"
          ]), g=this.getSize(t), u=g[
            0
          ], p=g[
            1
          ];
          a&&(e.shapeMap[
            "link-point-left"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:-u/2, y:0, r:h/2||d||5
            }), className:"link-point-left", name:"link-point-left", isAnchorPoint:!0
          })), r&&(e.shapeMap[
            "link-point-right"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:u/2, y:0, r:h/2||d||5
            }), className:"link-point-right", name:"link-point-right", isAnchorPoint:!0
          })), n&&(e.shapeMap[
            "link-point-top"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:-p/2, r:h/2||d||5
            }), className:"link-point-top", name:"link-point-top", isAnchorPoint:!0
          })), l&&(e.shapeMap[
            "link-point-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:p/2, r:h/2||d||5
            }), className:"link-point-bottom", name:"link-point-bottom", isAnchorPoint:!0
          }))
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i), n=this.getSize(t), a=o.width||n[
            0
          ], r=o.height||n[
            1
          ];
          return(0, s.__assign)({
            x:-a/2, y:-r/2, width:a, height:r
          }, o)
        }, update:function(t, e, i){
          var o=e.getContainer(), n=this.getOptions({
          }).style, a=this.getSize(t), r=e.get("keyShape");
          t.size||(a[
            0
          ]
          =r.attr("width")||n.width, a[
            1
          ]
          =r.attr("height")||n.height);
          var s={
            stroke:t.color, x:-a[
              0
            ]
            /2, y:-a[
              1
            ]
            /2, width:a[
              0
            ], height:a[
              1
            ]
          }, l=(0, p.mix)({
          }, n, r.attr(), s);
          l=(0, p.mix)(l, t.style), this.updateShape(t, e, l, !1, i), this.updateLinkPoints(t, o)
        }
      }, "single-node"), (0, l.Qp)("ellipse", {
        options:{
          size:[
            80, 40
          ], style:{
            x:0, y:0, stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20
          }, stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"ellipse", labelPosition:"center", drawShape:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).icon, o=void 0===i?{
          }
          :i, n=this.getShapeStyle(t), a=e.addShape("ellipse", {
            attrs:n, className:"ellipse-keyShape", name:"ellipse-keyShape", draggable:!0
          });
          e.shapeMap[
            "ellipse-keyShape"
          ]
          =a;
          var r=o.width, l=o.height, h=o.show, d=o.text;
          return h&&(e.shapeMap[
            "".concat(this.type, "-icon")
          ]
          =d?e.addShape("text", {
            attrs:(0, s.__assign)({
              x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
            }, o), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          }):e.addShape("image", {
            attrs:(0, s.__assign)({
              x:-r/2, y:-l/2
            }, o), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          })), this.drawLinkPoints(t, e), a
        }, drawLinkPoints:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).linkPoints, o=void 0===i?{
          }
          :i, n=o.top, a=o.left, r=o.right, l=o.bottom, h=o.size, d=o.r, c=(0, s.__rest)(o, [
            "top", "left", "right", "bottom", "size", "r"
          ]), g=this.getSize(t), u=g[
            0
          ]
          /2, p=g[
            1
          ]
          /2;
          a&&(e.shapeMap[
            "link-point-left"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:-u, y:0, r:h/2||d||5
            }), className:"link-point-left", name:"link-point-left", isAnchorPoint:!0
          })), r&&(e.shapeMap[
            "link-point-right"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:u, y:0, r:h/2||d||5
            }), className:"link-point-right", name:"link-point-right", isAnchorPoint:!0
          })), n&&(e.shapeMap[
            "link-point-top"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:-p, r:h/2||d||5
            }), className:"link-point-top", name:"link-point-top", isAnchorPoint:!0
          })), l&&(e.shapeMap[
            "link-point-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:p, r:h/2||d||5
            }), className:"link-point-bottom", name:"link-point-bottom", isAnchorPoint:!0
          }))
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i), n=this.getSize(t), a=n[
            0
          ]
          /2, r=n[
            1
          ]
          /2;
          return(0, s.__assign)({
            x:0, y:0, rx:a, ry:r
          }, o)
        }, update:function(t, e, i){
          var o=e.getContainer(), n=this.getOptions({
          }).style, a=this.getSize(t), r={
            stroke:t.color, rx:a[
              0
            ]
            /2, ry:a[
              1
            ]
            /2
          }, s=e.get("keyShape"), l=(0, p.mix)({
          }, n, s.attr(), r);
          l=(0, p.mix)(l, t.style), this.updateShape(t, e, l, !0, i), this.updateLinkPoints(t, o)
        }
      }, "single-node"), (0, l.Qp)("diamond", {
        options:{
          size:[
            80, 80
          ], style:{
            stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20
          }, stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"diamond", labelPosition:"center", drawShape:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).icon, o=void 0===i?{
          }
          :i, n=this.getShapeStyle(t), a=e.addShape("path", {
            attrs:n, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          });
          e.shapeMap[
            "".concat(this.type, "-keyShape")
          ]
          =a;
          var r=o.width, l=o.height, h=o.show, d=o.text;
          return h&&(e.shapeMap[
            "".concat(this.type, "-icon")
          ]
          =d?e.addShape("text", {
            attrs:(0, s.__assign)({
              x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
            }, o), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          }):e.addShape("image", {
            attrs:(0, s.__assign)({
              x:-r/2, y:-l/2
            }, o), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          })), this.drawLinkPoints(t, e), a
        }, drawLinkPoints:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).linkPoints, o=void 0===i?{
          }
          :i, n=o.top, a=o.left, r=o.right, l=o.bottom, h=o.size, d=o.r, c=(0, s.__rest)(o, [
            "top", "left", "right", "bottom", "size", "r"
          ]), g=this.getSize(t), u=g[
            0
          ], p=g[
            1
          ];
          a&&(e.shapeMap[
            "link-point-left"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:-u/2, y:0, r:h/2||d||5
            }), className:"link-point-left", name:"link-point-left", isAnchorPoint:!0
          })), r&&(e.shapeMap[
            "link-point-right"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:u/2, y:0, r:h/2||d||5
            }), className:"link-point-right", name:"link-point-right", isAnchorPoint:!0
          })), n&&(e.shapeMap[
            "link-point-top"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:-p/2, r:h/2||d||5
            }), className:"link-point-top", name:"link-point-top", isAnchorPoint:!0
          })), l&&(e.shapeMap[
            "link-point-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:p/2, r:h/2||d||5
            }), className:"link-point-bottom", name:"link-point-bottom", isAnchorPoint:!0
          }))
        }, getPath:function(t){
          var e=this.getSize(t), i=e[
            0
          ], o=e[
            1
          ];
          return[
            [
              "M", 0, -o/2
            ], [
              "L", i/2, 0
            ], [
              "L", 0, o/2
            ], [
              "L", -i/2, 0
            ], [
              "Z"
            ]
          ]
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i), n=this.getPath(t);
          return(0, s.__assign)({
            path:n
          }, o)
        }, update:function(t, e, i){
          var o=e.getContainer(), n=this.getOptions({
          }).style, a=this.getPath(t), r={
            stroke:t.color, path:a
          }, s=e.get("keyShape"), l=(0, p.mix)({
          }, n, s.attr(), r);
          l=(0, p.mix)(l, t.style), this.updateShape(t, e, l, !0, i), this.updateLinkPoints(t, o)
        }
      }, "single-node"), (0, l.Qp)("triangle", {
        options:{
          size:40, direction:"up", style:{
            stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize
            }, offset:15
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20, offset:6
          }, stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"triangle", labelPosition:"bottom", drawShape:function(t, e){
          var i=this.mergeStyle||this.getOptions(t), o=i.icon, n=void 0===o?{
          }
          :o, a=i.direction, r=this.getShapeStyle(t), l=t.direction||a, h=e.addShape("path", {
            attrs:r, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          });
          e.shapeMap[
            "".concat(this.type, "-keyShape")
          ]
          =h;
          var d=n.width, c=n.height, g=n.show, u=n.offset, p=n.text;
          if(g)if(p)e.shapeMap[
            "".concat(this.type, "-icon")
          ]
          =e.addShape("text", {
            attrs:(0, s.__assign)({
              x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
            }, n), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          });
          else{
            var f=-d/2, y=-c/2;
            "up"!==l&&"down"!==l||(y+=u), "left"!==l&&"right"!==l||(f+=u), e.shapeMap[
              "".concat(this.type, "-icon")
            ]
            =e.addShape("image", {
              attrs:(0, s.__assign)({
                x:f, y
              }, n), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
            })
          }
          return this.drawLinkPoints(t, e), h
        }, drawLinkPoints:function(t, e){
          var i=this.mergeStyle||this.getOptions(t), o=i.linkPoints, n=void 0===o?{
          }
          :o, a=i.direction, r=t.direction||a, l=n.top, h=n.left, d=n.right, c=n.bottom, g=n.size, u=n.r, p=(0, s.__rest)(n, [
            "top", "left", "right", "bottom", "size", "r"
          ]), f=this.getSize(t)[
            0
          ];
          if(h){
            var y=null, m=f*Math.sin(1/3*Math.PI), v=f*Math.sin(1/3*Math.PI);
            "up"===r?y=[
              -v, m
            ]
            :"down"===r?y=[
              -v, -m
            ]
            :"left"===r&&(y=[
              -v, v-m
            ]), y&&(e.shapeMap[
              "link-point-left"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, p), {
                x:y[
                  0
                ], y:y[
                  1
                ], r:g/2||u||5
              }), className:"link-point-left", name:"link-point-left"
            }))
          }
          if(d){
            var b=null;
            m=f*Math.sin(1/3*Math.PI), v=f*Math.sin(1/3*Math.PI);
            "up"===r?b=[
              v, m
            ]
            :"down"===r?b=[
              v, -m
            ]
            :"right"===r&&(b=[
              v, v-m
            ]), b&&(e.shapeMap[
              "link-point-right"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, p), {
                x:b[
                  0
                ], y:b[
                  1
                ], r:g/2||u||5
              }), className:"link-point-right", name:"link-point-right"
            }))
          }
          if(l){
            var x=null;
            m=f*Math.sin(1/3*Math.PI), v=f*Math.sin(1/3*Math.PI);
            "up"===r?x=[
              v-m, -m
            ]
            :"left"===r?x=[
              v, -m
            ]
            :"right"===r&&(x=[
              -v, -m
            ]), x&&(e.shapeMap[
              "link-point-top"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, p), {
                x:x[
                  0
                ], y:x[
                  1
                ], r:g/2||u||5
              }), className:"link-point-top", name:"link-point-top"
            }))
          }
          if(c){
            var S=null;
            m=f*Math.sin(1/3*Math.PI), v=f*Math.sin(1/3*Math.PI);
            "down"===r?S=[
              -v+m, m
            ]
            :"left"===r?S=[
              v, m
            ]
            :"right"===r&&(S=[
              -v, m
            ]), S&&(e.shapeMap[
              "link-point-bottom"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, p), {
                x:S[
                  0
                ], y:S[
                  1
                ], r:g/2||u||5
              }), className:"link-point-bottom", name:"link-point-bottom"
            }))
          }
        }, getPath:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).direction, i=t.direction||e, o=this.getSize(t)[
            0
          ], n=o*Math.sin(1/3*Math.PI), a=o*Math.sin(1/3*Math.PI), r=[
            [
              "M", -a, n
            ], [
              "L", 0, -n
            ], [
              "L", a, n
            ], [
              "Z"
            ]
          ];
          return"down"===i?r=[
            [
              "M", -a, -n
            ], [
              "L", a, -n
            ], [
              "L", 0, n
            ], [
              "Z"
            ]
          ]
          :"left"===i?r=[
            [
              "M", -a, a-n
            ], [
              "L", a, -a
            ], [
              "L", a, a
            ], [
              "Z"
            ]
          ]
          :"right"===i&&(r=[
            [
              "M", a, a-n
            ], [
              "L", -a, a
            ], [
              "L", -a, -a
            ], [
              "Z"
            ]
          ]), r
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i), n=this.getPath(t);
          return(0, s.__assign)({
            path:n
          }, o)
        }, update:function(t, e, i){
          var o=e.getContainer(), n=this.getOptions({
          }).style, a=this.getPath(t), r={
            stroke:t.color, path:a
          }, s=e.get("keyShape"), l=(0, p.mix)({
          }, n, s.attr(), r);
          l=(0, p.mix)(l, t.style), this.updateShape(t, e, l, !0, i), this.updateLinkPoints(t, o)
        }, updateLinkPoints:function(t, e){
          var i=this.getOptions({
          }), o=i.linkPoints, n=i.direction, a=t.direction||n, r=e.shapeMap[
            "link-point-left"
          ]
          ||e.find((function(t){
            return"link-point-left"===t.get("className")
          })), l=e.shapeMap[
            "link-point-right"
          ]
          ||e.find((function(t){
            return"link-point-right"===t.get("className")
          })), h=e.shapeMap[
            "link-point-top"
          ]
          ||e.find((function(t){
            return"link-point-top"===t.get("className")
          })), d=e.shapeMap[
            "link-point-bottom"
          ]
          ||e.find((function(t){
            return"link-point-bottom"===t.get("className")
          })), c=o, g=r||l||h||d;
          g&&(c=g.attr());
          var u=(0, p.mix)({
          }, c, t.linkPoints), f=u.fill, y=u.stroke, m=u.lineWidth, v=u.size/2;
          v||(v=u.r);
          var b=t.linkPoints?t.linkPoints:{
            left:void 0, right:void 0, top:void 0, bottom:void 0
          }, x=b.left, S=b.right, w=b.top, k=b.bottom, M=this.getSize(t)[
            0
          ], C={
            r:v, fill:f, stroke:y, lineWidth:m
          }, _=null, I=M*Math.sin(1/3*Math.PI), P=M*Math.sin(1/3*Math.PI);
          "up"===a?_=[
            -P, I
          ]
          :"down"===a?_=[
            -P, -I
          ]
          :"left"===a&&(_=[
            -P, P-I
          ]), _&&(r?x||void 0===x?r.attr((0, s.__assign)((0, s.__assign)({
          }, C), {
            x:_[
              0
            ], y:_[
              1
            ]
          })):(r.remove(), delete e.shapeMap[
            "link-point-left"
          ]):x&&(e.shapeMap[
            "link-point-left"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, C), {
              x:_[
                0
              ], y:_[
                1
              ]
            }), className:"link-point-left", name:"link-point-left", isAnchorPoint:!0
          })));
          var E=null;
          "up"===a?E=[
            P, I
          ]
          :"down"===a?E=[
            P, -I
          ]
          :"right"===a&&(E=[
            P, P-I
          ]), E&&(l?S||void 0===S?l.attr((0, s.__assign)((0, s.__assign)({
          }, C), {
            x:E[
              0
            ], y:E[
              1
            ]
          })):(l.remove(), delete e.shapeMap[
            "link-point-right"
          ]):S&&(e.shapeMap[
            "link-point-right"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, C), {
              x:E[
                0
              ], y:E[
                1
              ]
            }), className:"link-point-right", name:"link-point-right", isAnchorPoint:!0
          })));
          var B=null;
          "up"===a?B=[
            P-I, -I
          ]
          :"left"===a?B=[
            P, -I
          ]
          :"right"===a&&(B=[
            -P, -I
          ]), B&&(h?w||void 0===w?h.attr((0, s.__assign)((0, s.__assign)({
          }, C), {
            x:B[
              0
            ], y:B[
              1
            ]
          })):(h.remove(), delete e.shapeMap[
            "link-point-top"
          ]):w&&(e.shapeMap[
            "link-point-top"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, C), {
              x:B[
                0
              ], y:B[
                1
              ]
            }), className:"link-point-top", name:"link-point-top", isAnchorPoint:!0
          })));
          var N=null;
          "down"===a?N=[
            -P+I, I
          ]
          :"left"===a?N=[
            P, I
          ]
          :"right"===a&&(N=[
            -P, I
          ]), N&&(d?k||void 0===k?d.attr((0, s.__assign)((0, s.__assign)({
          }, C), {
            x:N[
              0
            ], y:N[
              1
            ]
          })):(d.remove(), delete e.shapeMap[
            "link-point-bottom"
          ]):k&&(e.shapeMap[
            "link-point-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, C), {
              x:N[
                0
              ], y:N[
                1
              ]
            }), className:"link-point-bottom", name:"link-point-bottom", isAnchorPoint:!0
          })))
        }
      }, "single-node"), (0, l.Qp)("modelRect", {
        options:{
          size:[
            185, 70
          ], style:{
            radius:5, stroke:"#69c0ff", fill:"#ffffff", lineWidth:l.JF.defaultNode.style.lineWidth, fillOpacity:1
          }, labelCfg:{
            style:{
              fill:"#595959", fontSize:14, fontFamily:l.JF.windowFontFamily
            }, offset:30
          }, descriptionCfg:{
            style:{
              fontSize:12, fill:"#bfbfbf", fontFamily:l.JF.windowFontFamily
            }, paddingTop:0
          }, preRect:{
            show:!0, width:4, fill:"#40a9ff", radius:2
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:10, lineWidth:1, fill:"#72CC4A", stroke:"#72CC4A"
          }, logoIcon:{
            show:!0, x:0, y:0, img:"https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg", width:16, height:16, offset:0
          }, stateIcon:{
            show:!0, x:0, y:0, img:"https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg", width:16, height:16, offset:-5
          }, anchorPoints:[
            [
              0, .5
            ], [
              1, .5
            ]
          ]
        }, shapeType:"modelRect", drawShape:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).preRect, o=void 0===i?{
          }
          :i, n=this.getShapeStyle(t), a=this.getSize(t), r=a[
            0
          ], l=a[
            1
          ], h=e.addShape("rect", {
            attrs:n, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          });
          e.shapeMap[
            "".concat(this.type, "-keyShape")
          ]
          =h;
          var d=o.show, c=(0, s.__rest)(o, [
            "show"
          ]);
          return d&&(e.shapeMap[
            "pre-rect"
          ]
          =e.addShape("rect", {
            attrs:(0, s.__assign)({
              x:-r/2, y:-l/2, height:l
            }, c), className:"pre-rect", name:"pre-rect", draggable:!0
          })), this.drawLogoIcon(t, e), this.drawStateIcon(t, e), this.drawLinkPoints(t, e), h
        }, drawLogoIcon:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).logoIcon, o=void 0===i?{
          }
          :i, n=this.getSize(t)[
            0
          ];
          if(o.show){
            var a=o.width, r=o.height, l=o.x, h=o.y, d=o.offset, c=o.text, g=(0, s.__rest)(o, [
              "width", "height", "x", "y", "offset", "text"
            ]);
            e.shapeMap[
              "rect-logo-icon"
            ]
            =c?e.addShape("text", {
              attrs:(0, s.__assign)({
                x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
              }, g), className:"rect-logo-icon", name:"rect-logo-icon", draggable:!0
            }):e.addShape("image", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:l||-n/2+a+d, y:h||-r/2, width:a, height:r
              }), className:"rect-logo-icon", name:"rect-logo-icon", draggable:!0
            })
          }
        }, drawStateIcon:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).stateIcon, o=void 0===i?{
          }
          :i, n=this.getSize(t)[
            0
          ];
          if(o.show){
            var a=o.width, r=o.height, l=o.x, h=o.y, d=o.offset, c=o.text, g=(0, s.__rest)(o, [
              "width", "height", "x", "y", "offset", "text"
            ]);
            e.shapeMap[
              "rect-state-icon"
            ]
            =c?e.addShape("text", {
              attrs:(0, s.__assign)({
                x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
              }, g), className:"rect-state-icon", name:"rect-state-icon", draggable:!0
            }):e.addShape("image", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:l||n/2-a+d, y:h||-r/2, width:a, height:r
              }), className:"rect-state-icon", name:"rect-state-icon", draggable:!0
            })
          }
        }, drawLinkPoints:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).linkPoints, o=void 0===i?{
          }
          :i, n=o.top, a=o.left, r=o.right, l=o.bottom, h=o.size, d=o.r, c=(0, s.__rest)(o, [
            "top", "left", "right", "bottom", "size", "r"
          ]), g=this.getSize(t), u=g[
            0
          ], p=g[
            1
          ];
          a&&(e.shapeMap[
            "link-point-left"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:-u/2, y:0, r:h/2||d||5
            }), className:"link-point-left", name:"link-point-left", isAnchorPoint:!0
          })), r&&(e.shapeMap[
            "link-point-right"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:u/2, y:0, r:h/2||d||5
            }), className:"link-point-right", name:"link-point-right", isAnchorPoint:!0
          })), n&&(e.shapeMap[
            "link-point-top"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:-p/2, r:h/2||d||5
            }), className:"link-point-top", name:"link-point-top", isAnchorPoint:!0
          })), l&&(e.shapeMap[
            "link-point-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, c), {
              x:0, y:p/2, r:h/2||d||5
            }), className:"link-point-bottom", name:"link-point-bottom", isAnchorPoint:!0
          }))
        }, drawLabel:function(t, e){
          var i=this.getOptions(t), o=i.labelCfg, n=void 0===o?{
          }
          :o, a=i.logoIcon, r=void 0===a?{
          }
          :a, l=i.descriptionCfg, h=void 0===l?{
          }
          :l, d=this.getSize(t)[
            0
          ], c=null, g=r.show, u=r.width, f=-d/2+n.offset;
          g&&(f=-d/2+u+n.offset);
          var y=n.style, m=h.style, v=h.paddingTop;
          return(0, p.isString)(t.description)?(c=e.addShape("text", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, y), {
              x:f, y:-5, text:t.label
            }), className:"text-shape", name:"text-shape", draggable:!0, labelRelated:!0
          }), e.shapeMap[
            "text-shape"
          ]
          =c, e.shapeMap[
            "rect-description"
          ]
          =e.addShape("text", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, m), {
              x:f, y:17+(v||0), text:t.description
            }), className:"rect-description", name:"rect-description", draggable:!0, labelRelated:!0
          })):(c=e.addShape("text", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, y), {
              x:f, y:7, text:t.label
            }), className:"text-shape", name:"text-shape", draggable:!0, labelRelated:!0
          }), e.shapeMap[
            "text-shape"
          ]
          =c), c
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i), n=this.getSize(t), a=o.width||n[
            0
          ], r=o.height||n[
            1
          ];
          return(0, s.__assign)({
            x:-a/2, y:-r/2, width:a, height:r
          }, o)
        }, update:function(t, e){
          var i=this.mergeStyle||this.getOptions(t), o=i.style, n=void 0===o?{
          }
          :o, a=i.labelCfg, r=void 0===a?{
          }
          :a, l=i.descriptionCfg, h=void 0===l?{
          }
          :l, d=this.getSize(t), c=d[
            0
          ], g=d[
            1
          ];
          e.get("keyShape").attr((0, s.__assign)((0, s.__assign)({
          }, n), {
            x:-c/2, y:-g/2, width:c, height:g
          }));
          var u=e.getContainer(), f=u.shapeMap[
            "rect-logo-icon"
          ]
          ||u.find((function(t){
            return"rect-logo-icon"===t.get("className")
          })), y=f?f.attr():{
          }, m=(0, p.mix)({
          }, y, t.logoIcon), v=m.width;
          void 0===v&&(v=this.options.logoIcon.width);
          var b=t.logoIcon?t.logoIcon.show:void 0, x=r.offset, S=-c/2+v+x;
          b||void 0===b||(S=-c/2+x);
          var w=u.shapeMap[
            "node-label"
          ]
          ||u.find((function(t){
            return"node-label"===t.get("className")
          })), k=u.shapeMap[
            "rect-description"
          ]
          ||u.find((function(t){
            return"rect-description"===t.get("className")
          }));
          if(t.label)if(w){
            var M=t.labelCfg?t.labelCfg.style:{
            }, C=(0, p.mix)({
            }, w.attr(), M);
            t.label&&(C.text=t.label), C.x=S, (0, p.isString)(t.description)&&(C.y=-5), k&&(k.resetMatrix(), k.attr({
              x:S
            })), w.resetMatrix(), w.attr(C)
          }
          else u.shapeMap[
            "node-label"
          ]
          =u.addShape("text", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, r.style), {
              x:S, y:t.description?-5:7, text:t.label
            }), className:"node-label", name:"node-label", draggable:!0, labelRelated:!0
          });
          if((0, p.isString)(t.description)){
            var _=h.paddingTop;
            if(k){
              M=t.descriptionCfg?t.descriptionCfg.style:{
              };
              var I=(0, p.mix)({
              }, k.attr(), M);
              (0, p.isString)(t.description)&&(I.text=t.description), I.x=S, k.resetMatrix(), k.attr((0, s.__assign)((0, s.__assign)({
              }, I), {
                y:17+(_||0)
              }))
            }
            else u.shapeMap[
              "rect-description"
            ]
            =u.addShape("text", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, h.style), {
                x:S, y:17+(_||0), text:t.description
              }), className:"rect-description", name:"rect-description", draggable:!0, labelRelated:!0
            })
          }
          var P=u.shapeMap[
            "pre-rect"
          ]
          ||u.find((function(t){
            return"pre-rect"===t.get("className")
          }));
          if(P&&!P.destroyed){
            var E=(0, p.mix)({
            }, P.attr(), t.preRect);
            P.attr((0, s.__assign)((0, s.__assign)({
            }, E), {
              x:-c/2, y:-g/2, height:g
            }))
          }
          if(f&&!f.destroyed)if(b||void 0===b){
            var B=m.width, N=m.height, L=m.x, T=m.y, A=m.offset, F=(0, s.__rest)(m, [
              "width", "height", "x", "y", "offset"
            ]);
            f.attr((0, s.__assign)((0, s.__assign)({
            }, F), {
              x:L||-c/2+B+A, y:T||-N/2, width:B, height:N
            }))
          }
          else f.remove(), delete u.shapeMap[
            "pre-rect"
          ];
          else b&&this.drawLogoIcon(t, u);
          var D=u.shapeMap[
            "rect-state-icon"
          ]
          ||u.find((function(t){
            return"rect-state-icon"===t.get("className")
          })), O=D?D.attr():{
          }, z=(0, p.mix)({
          }, O, t.stateIcon);
          if(D){
            z.show||void 0===z.show||(D.remove(), delete u.shapeMap[
              "rect-state-icon"
            ]);
            var Y=z.width, X=(N=z.height, L=z.x, T=z.y, z.offset), W=(0, s.__rest)(z, [
              "width", "height", "x", "y", "offset"
            ]);
            D.attr((0, s.__assign)((0, s.__assign)({
            }, W), {
              x:L||c/2-Y+X, y:T||-N/2, width:Y, height:N
            }))
          }
          else z.show&&this.drawStateIcon(t, u);
          this.updateLinkPoints(t, u)
        }, getOptions:function(t, e){
          return"move"===e?t:(0, p.deepMix)({
          }, this.options, this.getCustomConfig(t)||{
          }, t)
        }
      }, "single-node"), (0, l.Qp)("star", {
        options:{
          size:60, style:{
            stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20
          }, stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"star", labelPosition:"center", drawShape:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).icon, o=void 0===i?{
          }
          :i, n=this.getShapeStyle(t), a=e.addShape("path", {
            attrs:n, className:"".concat(this.type, "-keyShape"), name:"".concat(this.type, "-keyShape"), draggable:!0
          });
          e.shapeMap[
            "".concat(this.type, "-keyShape")
          ]
          =a;
          var r=o.width, l=o.height, h=o.show, d=o.text;
          return h&&(e.shapeMap[
            "".concat(this.type, "-icon")
          ]
          =d?e.addShape("text", {
            attrs:(0, s.__assign)({
              x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
            }, o), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          }):e.addShape("image", {
            attrs:(0, s.__assign)({
              x:-r/2, y:-l/2
            }, o), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          })), this.drawLinkPoints(t, e), a
        }, drawLinkPoints:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).linkPoints, o=void 0===i?{
          }
          :i, n=o.top, a=o.left, r=o.right, l=o.leftBottom, h=o.rightBottom, d=o.size, c=o.r, g=(0, s.__rest)(o, [
            "top", "left", "right", "leftBottom", "rightBottom", "size", "r"
          ]), u=this.getSize(t)[
            0
          ];
          if(r){
            var p=Math.cos(.1*Math.PI)*u, f=Math.sin(.1*Math.PI)*u;
            e.shapeMap[
              "link-point-right"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:p, y:-f, r:d/2||c||5
              }), className:"link-point-right", name:"link-point-right"
            })
          }
          if(n){
            p=Math.cos(.5*Math.PI)*u, f=Math.sin(.5*Math.PI)*u;
            e.shapeMap[
              "link-point-top"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:p, y:-f, r:d/2||c||5
              }), className:"link-point-top", name:"link-point-top"
            })
          }
          if(a){
            p=Math.cos(.9*Math.PI)*u, f=Math.sin(.9*Math.PI)*u;
            e.shapeMap[
              "link-point-left"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:p, y:-f, r:d/2||c||5
              }), className:"link-point-left", name:"link-point-left"
            })
          }
          if(l){
            p=Math.cos(1.3*Math.PI)*u, f=Math.sin(1.3*Math.PI)*u;
            e.shapeMap[
              "link-point-bottom"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:p, y:-f, r:d/2||c||5
              }), className:"link-point-left-bottom", name:"link-point-left-bottom"
            })
          }
          if(h){
            p=Math.cos(1.7*Math.PI)*u, f=Math.sin(1.7*Math.PI)*u;
            e.shapeMap[
              "link-point-right-bottom"
            ]
            =e.addShape("circle", {
              attrs:(0, s.__assign)((0, s.__assign)({
              }, g), {
                x:p, y:-f, r:d/2||c||5
              }), className:"link-point-right-bottom", name:"link-point-right-bottom"
            })
          }
        }, getPath:function(t){
          var e=this.getSize(t)[
            0
          ], i=3*e/8, o=t.innerR||i;
          return l.J0.getStarPath(e, o)
        }, getShapeStyle:function(t){
          var e=(this.mergeStyle||this.getOptions(t)).style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i), n=this.getPath(t);
          return(0, s.__assign)({
            path:n
          }, o)
        }, update:function(t, e, i){
          var o=e.getContainer(), n=this.getOptions({
          }).style, a=this.getPath(t), r={
            stroke:t.color, path:a
          }, s=e.get("keyShape"), l=(0, p.mix)({
          }, n, s.attr(), r);
          l=(0, p.mix)(l, t.style), this.updateShape(t, e, l, !0, i), this.updateLinkPoints(t, o)
        }, updateLinkPoints:function(t, e){
          var i=this.getOptions({
          }).linkPoints, o=e.shapeMap[
            "link-point-left"
          ]
          ||e.find((function(t){
            return"link-point-left"===t.get("className")
          })), n=e.shapeMap[
            "link-point-right"
          ]
          ||e.find((function(t){
            return"link-point-right"===t.get("className")
          })), a=e.shapeMap[
            "link-point-top"
          ]
          ||e.find((function(t){
            return"link-point-top"===t.get("className")
          })), r=e.shapeMap[
            "link-point-left-bottom"
          ]
          ||e.find((function(t){
            return"link-point-left-bottom"===t.get("className")
          })), l=e.shapeMap[
            "link-point-left-bottom"
          ]
          ||e.find((function(t){
            return"link-point-right-bottom"===t.get("className")
          })), h=i, d=o||n||a||r||l;
          d&&(h=d.attr());
          var c=(0, p.mix)({
          }, h, t.linkPoints), g=c.fill, u=c.stroke, f=c.lineWidth, y=c.size/2;
          y||(y=c.r);
          var m=t.linkPoints?t.linkPoints:{
            left:void 0, right:void 0, top:void 0, leftBottom:void 0, rightBottom:void 0
          }, v=m.left, b=m.right, x=m.top, S=m.leftBottom, w=m.rightBottom, k=this.getSize(t)[
            0
          ], M={
            r:y, fill:g, stroke:u, lineWidth:f
          }, C=Math.cos(.1*Math.PI)*k, _=Math.sin(.1*Math.PI)*k;
          n?b||void 0===b?n.attr((0, s.__assign)((0, s.__assign)({
          }, M), {
            x:C, y:-_
          })):(n.remove(), delete e.shapeMap[
            "link-point-right"
          ]):b&&(e.shapeMap[
            "link-point-right"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, M), {
              x:C, y:-_
            }), className:"link-point-right", name:"link-point-right", isAnchorPoint:!0
          })), C=Math.cos(.5*Math.PI)*k, _=Math.sin(.5*Math.PI)*k, a?x||void 0===x?a.attr((0, s.__assign)((0, s.__assign)({
          }, M), {
            x:C, y:-_
          })):(a.remove(), delete e.shapeMap[
            "link-point-top"
          ]):x&&(e.shapeMap[
            "link-point-top"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, M), {
              x:C, y:-_
            }), className:"link-point-top", name:"link-point-top", isAnchorPoint:!0
          })), C=Math.cos(.9*Math.PI)*k, _=Math.sin(.9*Math.PI)*k, o?v||void 0===v?o.attr((0, s.__assign)((0, s.__assign)({
          }, M), {
            x:C, y:-_
          })):(o.remove(), delete e.shapeMap[
            "link-point-left"
          ]):v&&(e.shapeMap[
            "link-point-left"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, M), {
              x:C, y:-_
            }), className:"link-point-left", name:"link-point-left", isAnchorPoint:!0
          })), C=Math.cos(1.3*Math.PI)*k, _=Math.sin(1.3*Math.PI)*k, r?S||void 0===S?r.attr((0, s.__assign)((0, s.__assign)({
          }, M), {
            x:C, y:-_
          })):(r.remove(), delete e.shapeMap[
            "link-point-left-bottom"
          ]):S&&(e.shapeMap[
            "link-point-left-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, M), {
              x:C, y:-_
            }), className:"link-point-left-bottom", name:"link-point-left-bottom", isAnchorPoint:!0
          })), C=Math.cos(1.7*Math.PI)*k, _=Math.sin(1.7*Math.PI)*k, l?w||void 0===w?l.attr((0, s.__assign)((0, s.__assign)({
          }, M), {
            x:C, y:-_
          })):(l.remove(), delete e.shapeMap[
            "link-point-right-bottom"
          ]):w&&(e.shapeMap[
            "link-point-right-bottom"
          ]
          =e.addShape("circle", {
            attrs:(0, s.__assign)((0, s.__assign)({
            }, M), {
              x:C, y:-_
            }), className:"link-point-right-bottom", name:"link-point-right-bottom", isAnchorPoint:!0
          }))
        }
      }, "single-node");
      var xt=l.J0.defaultSubjectColors, St="fan-shape-";
      (0, l.Qp)("donut", {
        options:{
          size:l.JF.defaultNode.size, style:{
            x:0, y:0, stroke:l.JF.defaultNode.style.stroke, fill:l.JF.defaultNode.style.fill, lineWidth:l.JF.defaultNode.style.lineWidth
          }, labelCfg:{
            style:{
              fill:l.JF.nodeLabel.style.fill, fontSize:l.JF.nodeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, linkPoints:{
            top:!1, right:!1, bottom:!1, left:!1, size:l.JF.defaultNode.linkPoints.size, lineWidth:l.JF.defaultNode.linkPoints.lineWidth, fill:l.JF.defaultNode.linkPoints.fill, stroke:l.JF.defaultNode.linkPoints.stroke
          }, icon:{
            show:!1, img:"https://gw.alipayobjects.com/zos/bmw-prod/5d015065-8505-4e7a-baec-976f81e3c41d.svg", width:20, height:20
          }, stateStyles:(0, s.__assign)({
          }, l.JF.nodeStateStyles)
        }, shapeType:"circle", labelPosition:"center", drawShape:function(t, e){
          var i=(this.mergeStyle||this.getOptions(t)).icon, o=void 0===i?{
          }
          :i, n=this.getShapeStyle(t), a=(0, p.deepMix)({
          }, o, t.icon), r=e.addShape("circle", {
            attrs:n, className:"".concat(this.type, "-keyShape"), draggable:!0, name:"".concat(this.type, "-keyShape")
          });
          e.shapeMap[
            "".concat(this.type, "-keyShape")
          ]
          =r;
          var l=a.width, h=a.height, d=a.show, c=a.text;
          return d&&(e.shapeMap[
            "".concat(this.type, "-icon")
          ]
          =c?e.addShape("text", {
            attrs:(0, s.__assign)({
              x:0, y:0, fontSize:12, fill:"#000", stroke:"#000", textBaseline:"middle", textAlign:"center"
            }, a), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          }):e.addShape("image", {
            attrs:(0, s.__assign)({
              x:-l/2, y:-h/2
            }, a), className:"".concat(this.type, "-icon"), name:"".concat(this.type, "-icon"), draggable:!0
          })), wt(t, e, r), this.drawLinkPoints(t, e), r
        }, updateShape:function(t, e, i, o, n){
          var a=e.get("keyShape");
          a.attr((0, s.__assign)({
          }, i)), Mt(t, e, a), this.updateLabel(t, e, n), o&&this.updateIcon(t, e)
        }
      }, "circle");
      var wt=function(t, e, i){
        var o=t.donutAttrs, n=void 0===o?{
        }
        :o, a=t.donutColorMap, r=void 0===a?{
        }
        :a, s=Object.keys(n).length;
        if(n&&s>1){
          var l=Ct(n, r), h=l.configs, d=l.totalValue;
          if(d){
            var c=_t(i), g=c.lineWidth, u=c.arcR, p=[
              u, 0
            ], f=0;
            if(1===s)return void kt(e, {
              arcR:u, arcBegin:p, beginAngle:f, config:h[
                0
              ], fanIndex:0, lineWidth:g, totalValue:d, drawWhole:!0
            });
            for(var y=0;
            y<h.length;
            y++){
              var m=kt(e, {
                arcR:u, arcBegin:p, beginAngle:f, config:h[
                  y
                ], fanIndex:y, lineWidth:g, totalValue:d
              });
              if(m.shouldEnd)return;
              p=m.arcBegin, f=m.beginAngle
            }
          }
        }
      }, kt=function(t, e){
        var i, o, n, a=e.arcR, r=e.arcBegin, s=e.beginAngle, l=e.config, h=e.fanIndex, d=e.lineWidth, c=e.totalValue, g=e.drawWhole, u=void 0!==g&&g, p=e.updateShape, f=void 0===p?void 0:p, y=l.value/c;
        if(y<.001)return{
          beginAngle:s, arcBegin:r, shape:void 0, shouldEnd:!1
        };
        if(u||y>.999)i=[
          a, 1e-4
        ], n=1;
        else{
          var m=y*Math.PI*2;
          o=s+m, i=[
            a*Math.cos(o), -a*Math.sin(o)
          ], n=m>Math.PI?1:0
        }
        var v={
          path:[
            [
              "M", r[
                0
              ], r[
                1
              ]
            ], [
              "A", a, a, 0, n, 0, i[
                0
              ], i[
                1
              ]
            ]
          ], stroke:l.color||(null==f?void 0:f.attr("stroke"))||xt[
            h%xt.length
          ], lineWidth:d
        };
        return f?f.attr(v):t.shapeMap[
          "".concat(St).concat(h)
        ]
        =t.addShape("path", {
          attrs:v, name:"".concat(St).concat(h), draggable:!0
        }), {
          beginAngle:o, arcBegin:i, shape:t.shapeMap[
            "".concat(St).concat(h)
          ], shouldEnd:u||y>.999
        }
      }, Mt=function(t, e, i){
        var o=t.donutAttrs, n=t.donutColorMap, a=void 0===n?{
        }
        :n, r={
        }, s=e.getContainer();
        if(o){
          var l=Ct(o, a), h=l.configs, d=l.totalValue;
          if(d)for(var c=_t(i), g=c.lineWidth, u=c.arcR, p=[
            u, 0
          ], f=0, y=0;
          y<h.length;
          y++){
            var m="".concat(St).concat(y), v=kt(s, {
              arcR:u, arcBegin:p, beginAngle:f, config:h[
                y
              ], fanIndex:y, lineWidth:g, totalValue:d, drawWhole:1===h.length, updateShape:s.shapeMap[
                m
              ]
            });
            if(v.shape&&(r[
              m
            ]
            =!0), v.shouldEnd)break;
            p=v.arcBegin, f=v.beginAngle
          }
        }
        Object.keys(s.shapeMap).filter((function(t){
          return t.includes(St)
        })).forEach((function(t){
          r[
            t
          ]
          ||(s.shapeMap[
            t
          ].remove(!0), delete s.shapeMap[
            t
          ])
        }))
      }, Ct=function(t, e){
        var i=0, o=[
        ];
        return Object.keys(t).forEach((function(n){
          var a=+t[
            n
          ];
          isNaN(a)||(o.push({
            key:n, value:a, color:e[
              n
            ]
          }), i+=a)
        })), {
          totalValue:i, configs:o
        }
      }, _t=function(t){
        var e=t.attr("r"), i=.6*e;
        return{
          lineWidth:e-i, arcR:(e+i)/2
        }
      }, It=function(t){
        var e=t.x, i=t.y;
        return{
          x:e, y:i, centerX:e, centerY:i, minX:e, minY:i, maxX:e, maxY:i, height:0, width:0
        }
      }, Pt=function(t){
        for(var e=[
        ], i={
        }, o=t.length-1;
        o>=0;
        o--){
          var n=t[
            o
          ];
          n.id="".concat(n.x, "|||").concat(n.y), i[
            n.id
          ]
          ||(i[
            n.id
          ]
          =n, e.push(n))
        }
        return e
      }, Et=function(t){
        return Pt(t)
      }, Bt=function(t, e){
        return t.width||t.height?{
          centerX:t.centerX, centerY:t.centerY, minX:t.minX-e, minY:t.minY-e, maxX:t.maxX+e, maxY:t.maxY+e, height:t.height+2*e, width:t.width+2*e
        }
        :t
      }, Nt=function(t, e, i){
        var o=function(t, e){
          var i=Math.abs(t.x-e.centerX), o=Math.abs(t.y-e.centerY);
          return 0===i&&0===o?0:i/e.width>o/e.height
        }
        (e, t);
        if(0===o){
          var n=t.centerX, a=t.centerY;
          return i.y<e.y?a=t.minY:i.x>e.x?n=t.maxX:i.x<e.x?n=t.minX:i.x===e.x&&(a=t.maxY), {
            x:n, y:a
          }
        }
        return o?{
          x:e.x>t.centerX?t.maxX:t.minX, y:e.y
        }
        :{
          x:e.x, y:e.y>t.centerY?t.maxY:t.minY
        }
      }, Lt=function(t, e){
        var i=Math.min(t.minX, e.minX), o=Math.min(t.minY, e.minY), n=Math.max(t.maxX, e.maxX), a=Math.max(t.maxY, e.maxY);
        return{
          centerX:(i+n)/2, centerY:(o+a)/2, minX:i, minY:o, maxX:n, maxY:a, height:a-o, width:n-i
        }
      }, Tt=function(t){
        return[
          {
            x:t.minX, y:t.minY
          }, {
            x:t.maxX, y:t.minY
          }, {
            x:t.maxX, y:t.maxY
          }, {
            x:t.minX, y:t.maxY
          }
        ]
      }, At=function(t, e){
        var i=t.x, o=t.y;
        return i<e.minX||i>e.maxX||o<e.minY||o>e.maxY
      }, Ft=function(t, e){
        return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)
      }, Dt=function(t, e, i, o, n){
        return Ft(t, e)+Ft(t, i)+function(t, e){
          var i=0;
          return e.forEach((function(e){
            e&&(t.x===e.x&&(i+=-2), t.y===e.y&&(i+=-2))
          })), i
        }
        (t, [
          e, i, o, n
        ])
      }, Ot=function t(e, i, o, n, a){
        void 0===a&&(a=0), e.unshift(i[
          n
        ]), o[
          n
        ]
        &&o[
          n
        ]
        !==n&&a<=100&&t(e, i, o, o[
          n
        ], a+1)
      }, zt=function(t, e, i, o){
        var n=i.x-t.x, a=i.y-t.y, r=o.x-t.x, s=o.y-t.y, l=i.x-e.x, h=i.y-e.y, d=o.x-e.x, c=o.y-e.y;
        return(n*s-a*r)*(l*c-h*d)<=0&&(n*h-a*l)*(r*c-s*d)<=0
      }, Yt=function(t, e, i){
        if(i.width||i.height){
          var o=Tt(i), n=o[
            0
          ], a=o[
            1
          ], r=o[
            2
          ], s=o[
            3
          ];
          return zt(t, e, n, a)||zt(t, e, n, s)||zt(t, e, a, r)||zt(t, e, r, s)
        }
        return!1
      }, Xt=function(t, e, i, o){
        var n=[
        ];
        return t.forEach((function(t){
          if(t!==e&&(t.x===e.x||t.y===e.y)){
            if(Yt(t, e, i)||Yt(t, e, o))return;
            n.push(t)
          }
        })), Pt(n)
      }, Wt=function(t, e){
        var i=[
        ], o=t[
          0
        ];
        return i.push("M".concat(o.x, " ").concat(o.y)), t.forEach((function(o, n){
          var a=t[
            n+1
          ], r=t[
            n+2
          ];
          if(a&&r)if(function(t, e, i){
            return!(t.x===e.x&&e.x===i.x||t.y===e.y&&e.y===i.y)
          }
          (o, a, r)){
            var s=function(t, e, i, o){
              var n=Ft(t, e), a=Ft(i, e);
              return n<o&&(o=n), a<o&&(o=a), [
                {
                  x:e.x-o/n*(e.x-t.x), y:e.y-o/n*(e.y-t.y)
                }, {
                  x:e.x-o/a*(e.x-i.x), y:e.y-o/a*(e.y-i.y)
                }
              ]
            }
            (o, a, r, e), l=s[
              0
            ], h=s[
              1
            ];
            i.push("L".concat(l.x, " ").concat(l.y)), i.push("Q".concat(a.x, " ").concat(a.y, " ").concat(h.x, " ").concat(h.y)), i.push("L".concat(h.x, " ").concat(h.y))
          }
          else i.push("L".concat(a.x, " ").concat(a.y));
          else a&&i.push("L".concat(a.x, " ").concat(a.y))
        })), i.join("")
      }, Rt=function(t, e, i, o, n){
        var a, r;
        if(i&&i.getType())if("combo"===i.getType()){
          var s=i.getKeyShape().getBBox();
          if(s){
            var l=i.getModel(), h=l.x, d=l.y;
            (a={
              x:h, y:d, width:s.width, height:s.height, minX:s.minX+h, maxX:s.maxX+h, minY:s.minY+d, maxY:s.maxY+d
            }).centerX=(a.minX+a.maxX)/2, a.centerY=(a.minY+a.maxY)/2
          }
          else a=It(t)
        }
        else a=i&&i.getBBox();
        else a=It(t);
        if(o&&o.getType())if("combo"===o.getType()){
          var c=o.getKeyShape().getBBox();
          if(c){
            var g=o.getModel(), u=g.x, p=g.y;
            (r={
              x:u, y:p, width:c.width, height:c.height, minX:c.minX+u, maxX:c.maxX+u, minY:c.minY+p, maxY:c.maxY+p
            }).centerX=(r.minX+r.maxX)/2, r.centerY=(r.minY+r.maxY)/2
          }
          else r=It(e)
        }
        else r=o&&o.getBBox();
        else r=It(e);
        var f=Bt(a, n), y=Bt(r, n), m=Nt(f, t, e), v=Nt(y, e, t), b=function(t){
          void 0===t&&(t=[
          ]);
          var e=[
          ], i=[
          ];
          t.forEach((function(t){
            e.push(t.x), i.push(t.y)
          }));
          var o=Math.min.apply(Math, e), n=Math.max.apply(Math, e), a=Math.min.apply(Math, i), r=Math.max.apply(Math, i);
          return{
            centerX:(o+n)/2, centerY:(a+r)/2, maxX:n, maxY:r, minX:o, minY:a, height:r-a, width:n-o
          }
        }
        ([
          m, v
        ]), x=Lt(f, b), S=Lt(y, b), w=[
        ];
        w=w.concat(Tt(x)).concat(Tt(S));
        var k={
          x:(t.x+e.x)/2, y:(t.y+e.y)/2
        };
        [
          b, x, S
        ].forEach((function(t){
          w=w.concat(function(t, e){
            return function(t, e){
              return e<t.minX||e>t.maxX?[
              ]
              :[
                {
                  x:e, y:t.minY
                }, {
                  x:e, y:t.maxY
                }
              ]
            }
            (t, e.x).concat(function(t, e){
              return e<t.minY||e>t.maxY?[
              ]
              :[
                {
                  x:t.minX, y:e
                }, {
                  x:t.maxX, y:e
                }
              ]
            }
            (t, e.y))
          }
          (t, k).filter((function(t){
            return At(t, f)&&At(t, y)
          })))
        })), [
          {
            x:m.x, y:v.y
          }, {
            x:v.x, y:m.y
          }
        ].forEach((function(t){
          At(t, f)&&At(t, y)&&w.push(t)
        })), w.unshift(m), w.push(v);
        var M=function(t, e, i, o, n, a, r){
          var s, l=[
          ], h=((s={
          })[
            e.id
          ]
          =e, s), d={
          }, c={
          }, g={
          };
          c[
            e.id
          ]
          =0, g[
            e.id
          ]
          =Dt(e, i, e);
          var u=new Ut;
          u.add({
            id:e.id, value:g[
              e.id
            ]
          });
          var p, f={
          };
          for(t.forEach((function(t){
            f[
              t.id
            ]
            =t
          }));
          Object.keys(h).length;
          ){
            var y=u.minId(!1);
            if(!y)break;
            if((p=h[
              y
            ])===i){
              var m=[
              ];
              return Ot(m, f, d, i.id), m
            }
            delete h[
              p.id
            ], u.remove(p.id), l.push(p), Xt(t, p, o, n).forEach((function(t){
              if(-1===l.indexOf(t)){
                var o=t.id;
                h[
                  o
                ]
                ||(h[
                  o
                ]
                =t);
                var n=g[
                  p.id
                ]
                +Ft(p, t);
                c[
                  o
                ]
                &&n>=c[
                  o
                ]
                ||(d[
                  o
                ]
                =p.id, c[
                  o
                ]
                =n, g[
                  o
                ]
                =c[
                  o
                ]
                +Dt(t, i, e, a, r)), u.add({
                  id:o, value:g[
                    o
                  ]
                })
              }
            }))
          }
          return[
            e, i
          ]
        }
        (w=Pt(w), m, v, a, r, t, e);
        return M.unshift(t), M.push(e), Et(M)
      }, Ut=function(){
        function t(){
          this.arr=[
          ], this.map={
          }, this.arr=[
          ], this.map={
          }
        }
        return t.prototype._innerAdd=function(t, e){
          for(var i=[
            0, e-1
          ];
          i[
            1
          ]
          -i[
            0
          ]
          >1;
          ){
            var o=Math.floor((i[
              0
            ]
            +i[
              1
            ])/2);
            if(this.arr[
              o
            ].value>t.value)i[
              1
            ]
            =o;
            else{
              if(!(this.arr[
                o
              ].value<t.value))return this.arr.splice(o, 0, t), void(this.map[
                t.id
              ]
              =!0);
              i[
                0
              ]
              =o
            }
          }
          this.arr.splice(i[
            1
          ], 0, t), this.map[
            t.id
          ]
          =!0
        }, t.prototype.add=function(t){
          delete this.map[
            t.id
          ];
          var e=this.arr.length;
          return e?this.arr[
            e-1
          ].value<t.value?(this.arr.push(t), void(this.map[
            t.id
          ]
          =!0)):void this._innerAdd(t, e):(this.arr.push(t), void(this.map[
            t.id
          ]
          =!0))
        }, t.prototype.remove=function(t){
          this.map[
            t
          ]
          &&delete this.map[
            t
          ]
        }, t.prototype._clearAndGetMinId=function(){
          for(var t, e=this.arr.length-1;
          e>=0;
          e--)this.map[
            this.arr[
              e
            ].id
          ]
          ?t=this.arr[
            e
          ].id:this.arr.splice(e, 1);
          return t
        }, t.prototype._findFirstId=function(){
          for(;
          this.arr.length;
          ){
            var t=this.arr.shift();
            if(this.map[
              t.id
            ])return t.id
          }
        }, t.prototype.minId=function(t){
          return t?this._clearAndGetMinId():this._findFirstId()
        }, t
      }
      (), jt={
        offset:20, maxAllowedDirectionChange:Math.PI/2, maximumLoops:2e3, gridSize:10, directions:[
          {
            stepX:1, stepY:0
          }, {
            stepX:-1, stepY:0
          }, {
            stepX:0, stepY:1
          }, {
            stepX:0, stepY:-1
          }
        ], get penalties(){
          return{
            0:0, 45:this.gridSize/2, 90:this.gridSize/2
          }
        }, distFunc:function(t, e){
          return Math.abs(t.x-e.x)+Math.abs(t.y-e.y)
        }, fallbackRoute:function(t, e, i, o, n){
          return Et(Rt(t, e, i, o, n.offset))
        }
      }, Gt=(Math.PI, function(t, e){
        var i=Math.round(Math.abs(t/e));
        return i<0?0:(t<0?-1:1)*i
      }), Jt=function(t, e){
        var i=e.x-t.x, o=e.y-t.y;
        return i||o?Math.atan2(o, i):0
      }, Vt=function(t, e){
        var i=Math.abs(t-e);
        return i>Math.PI?2*Math.PI-i:i
      }, Kt=function(t, e, i){
        for(var o=1/0, n=0, a=e.length;
        n<a;
        n++){
          var r=i(t, e[
            n
          ]);
          r<o&&(o=r)
        }
        return o
      }, Zt=function(t, e, i, o, n){
        var a=[
        ];
        if(!i)return[
          t
        ];
        var r=n.directions, s=n.offset, h=i.getBBox(), d=e.x>h.minX&&e.x<h.maxX&&e.y>h.minY&&e.y<h.maxY, c=Bt(h, s);
        for(var g in c)c[
          g
        ]
        =Gt(c[
          g
        ], n.gridSize);
        if(d){
          for(var u=0, p=r;
          u<p.length;
          u++){
            var f=p[
              u
            ], y=[
              [
                {
                  x:c.minX, y:c.minY
                }, {
                  x:c.maxX, y:c.minY
                }
              ], [
                {
                  x:c.minX, y:c.minY
                }, {
                  x:c.minX, y:c.maxY
                }
              ], [
                {
                  x:c.maxX, y:c.minY
                }, {
                  x:c.maxX, y:c.maxY
                }
              ], [
                {
                  x:c.minX, y:c.maxY
                }, {
                  x:c.maxX, y:c.maxY
                }
              ]
            ];
            for(g=0;
            g<4;
            g++){
              var m=y[
                g
              ], v=l.J0.getLineIntersect(t, {
                x:t.x+f.stepX*c.width, y:t.y+f.stepY*c.height
              }, m[
                0
              ], m[
                1
              ]);
              v&&!Yt(t, v, h)&&(v.id="".concat(v.x, "|||").concat(v.y), a.push(v))
            }
          }
          return a
        }
        var b=Nt(c, t, o);
        return b.id="".concat(b.x, "|||").concat(b.y), [
          b
        ]
      }, qt=function(t, e, i, o){
        var n=Jt(t, e), a=i[
          t.id
        ];
        if(!a){
          var r=Jt(o, t);
          return Vt(r, n)
        }
        var s=Jt({
          x:a.x, y:a.y
        }, t);
        return Vt(s, n)
      }, Ht=function(t, e, i, o, n, a, r){
        var s=[
          o
        ], l=o, h=t.id, d=t.x, c=t.y, g={
          x:d, y:c, id:h
        };
        qt(g, a, e, i)&&(l={
          x:a.x===o.x?o.x:g.x*r, y:a.y===o.y?o.y:g.y*r
        }, s.unshift(l));
        for(var u=e[
          h
        ];
        u&&u.id!==h;
        ){
          var p={
            x:d, y:c, id:h
          }, f={
            x:u.x, y:u.y, id:u.id
          };
          qt(f, p, e, i)&&(l={
            x:f.x===p.x?l.x:f.x*r, y:f.y===p.y?l.y:f.y*r
          }, s.unshift(l)), d=f.x, c=f.y, u=e[
            h=f.id
          ]
        }
        return s[
          0
        ].x=d===i.x?n.x:l.x, s[
          0
        ].y=c===i.y?n.y:l.y, s.unshift(n), s
      }, Qt=function(t, e, i, o, n){
        if(isNaN(t.x)||isNaN(e.x))return[
        ];
        var a=(0, p.deepMix)(jt, n);
        a.obstacles=a.obstacles||[
        ];
        var r=a.penalties, s=a.gridSize, l=function(t, e, i){
          var o={
          };
          return t.forEach((function(t){
            if(t)for(var n=Bt(t.getBBox(), i), a=Gt(n.minX, e);
            a<=Gt(n.maxX, e);
            a+=1)for(var r=Gt(n.minY, e);
            r<=Gt(n.maxY, e);
            r+=1)o[
              "".concat(a, "|||").concat(r)
            ]
            =!0
          })), o
        }
        (a.obstacles.concat([
          i, o
        ]), s, a.offset), h={
          x:Gt(t.x, s), y:Gt(t.y, s)
        }, d={
          x:Gt(e.x, s), y:Gt(e.y, s)
        };
        t.id="".concat(h.x, "|||").concat(h.y), e.id="".concat(d.x, "|||").concat(d.y);
        var c=Zt(h, t, i, d, a), g=Zt(d, e, o, h, a);
        c.forEach((function(t){
          delete l[
            t.id
          ]
        })), g.forEach((function(t){
          delete l[
            t.id
          ]
        }));
        for(var u={
        }, f={
        }, y={
        }, m={
        }, v={
        }, b=new Ut, x=0;
        x<c.length;
        x++){
          var S=c[
            x
          ];
          u[
            S.id
          ]
          =S, m[
            S.id
          ]
          =0, v[
            S.id
          ]
          =Kt(S, g, a.distFunc), b.add({
            id:S.id, value:v[
              S.id
            ]
          })
        }
        var w, k, M, C, _, I, P=a.maximumLoops, E=1/0, B={
        };
        for(g.forEach((function(t){
          B[
            "".concat(t.x, "|||").concat(t.y)
          ]
          =!0
        })), Object.keys(u).forEach((function(t){
          var e=u[
            t
          ].id;
          v[
            e
          ]
          <=E&&(E=v[
            e
          ], w=u[
            e
          ])
        }));
        Object.keys(u).length>0&&P>0;
        ){
          var N=b.minId((P+1)%30==0);
          if(!N)break;
          if(w=u[
            N
          ], B[
            "".concat(w.x, "|||").concat(w.y)
          ])return Ht(w, y, h, e, t, d, s);
          delete u[
            w.id
          ], b.remove(w.id), f[
            w.id
          ]
          =!0;
          for(x=0;
          x<a.directions.length;
          x++){
            k=a.directions[
              x
            ];
            var L="".concat(Math.round(w.x)+k.stepX, "|||").concat(Math.round(w.y)+k.stepY);
            if(M={
              x:w.x+k.stepX, y:w.y+k.stepY, id:L
            }, !f[
              L
            ]
            &&!((I=qt(w, M, y, h))>a.maxAllowedDirectionChange||l[
              L
            ])){
              u[
                L
              ]
              ||(u[
                L
              ]
              =M);
              var T=r[
                I
              ];
              C=a.distFunc(w, M)+(isNaN(T)?s:T), _=m[
                w.id
              ]
              +C;
              var A=m[
                L
              ];
              A&&_>=A||(y[
                L
              ]
              =w, m[
                L
              ]
              =_, v[
                L
              ]
              =_+Kt(M, g, a.distFunc), b.add({
                id:L, value:v[
                  L
                ]
              }))
            }
          }
          P-=1
        }
        return a.fallbackRoute(t, e, i, o, a)
      };
      (0, l.Bg)("polyline", {
        options:{
          color:l.JF.defaultEdge.color, size:l.JF.defaultEdge.size, style:{
            radius:0, offset:15, x:0, y:0, stroke:l.JF.defaultEdge.style.stroke, lineAppendWidth:l.JF.defaultEdge.style.lineAppendWidth
          }, labelCfg:{
            style:{
              fill:l.JF.edgeLabel.style.fill, fontSize:l.JF.edgeLabel.style.fontSize, fontFamily:l.JF.windowFontFamily
            }
          }, routeCfg:{
            obstacles:[
            ], maxAllowedDirectionChange:Math.PI, maximumLoops:500, gridSize:10
          }, stateStyles:(0, s.__assign)({
          }, l.JF.edgeStateStyles)
        }, shapeType:"polyline", labelPosition:"center", drawShape:function(t, e){
          var i=this.getShapeStyle(t);
          0===i.radius&&delete i.radius;
          var o=e.addShape("path", {
            className:"edge-shape", name:"edge-shape", attrs:i
          });
          return e.shapeMap[
            "edge-shape"
          ]
          =o, o
        }, getShapeStyle:function(t){
          var e=this.options.style, i={
            stroke:t.color
          }, o=(0, p.mix)({
          }, e, i, t.style);
          t=this.getPathPoints(t), this.radius=o.radius, this.offset=o.offset;
          var n=t.startPoint, a=t.endPoint, r=this.getControlPoints(t), s=[
            n
          ];
          r&&(s=s.concat(r)), s.push(a);
          var h=t.sourceNode, d=t.targetNode, c=o.radius, g=this.options.routeCfg, u=(0, p.mix)({
          }, g, t.routeCfg);
          u.offset=o.offset;
          var f=this.getPath(s, h, d, c, u, !Boolean(r));
          return((0, p.isArray)(f)&&f.length<=1||(0, p.isString)(f)&&-1===f.indexOf("L"))&&(f="M0 0, L0 0"), (isNaN(n.x)||isNaN(n.y)||isNaN(a.x)||isNaN(a.y))&&(f="M0 0, L0 0"), (0, p.mix)({
          }, l.JF.defaultEdge.style, o, {
            lineWidth:t.size, path:f
          })
        }, updateShapeStyle:function(t, e){
          var i=e.getContainer();
          if(e.isVisible()){
            var o={
              stroke:t.color
            }, n=i.shapeMap[
              "edge-shape"
            ]
            ||i.find((function(t){
              return"edge-shape"===t.get("className")
            }))||e.getKeyShape(), a=t.size, r=(t=this.getPathPoints(t)).startPoint, s=t.endPoint, l=this.getControlPoints(t), h=[
              r
            ];
            l&&(h=h.concat(l)), h.push(s);
            var d=n.attr(), c=(0, p.mix)({
            }, o, d, t.style), g=t.sourceNode, u=t.targetNode, f=c.radius, y=this.options.routeCfg, m=(0, p.mix)({
            }, y, t.routeCfg);
            m.offset=c.offset;
            var v=this.getPath(h, g, u, f, m, !Boolean(l));
            ((0, p.isArray)(v)&&v.length<=1||(0, p.isString)(v)&&-1===v.indexOf("L"))&&(v="M0 0, L0 0"), (isNaN(r.x)||isNaN(r.y)||isNaN(s.x)||isNaN(s.y))&&(v="M0 0, L0 0"), d.endArrow&&!1===c.endArrow&&(t.style.endArrow={
              path:""
            }), d.startArrow&&!1===c.startArrow&&(t.style.startArrow={
              path:""
            });
            var b=(0, p.mix)(o, n.attr(), {
              lineWidth:a, path:v
            }, t.style);
            n&&n.attr(b)
          }
        }, getPath:function(t, e, i, o, n, a){
          var r=n.offset, s=n.obstacles, h=n.simple;
          if(!r||t.length>2||!1===a){
            if(o)return Wt(t, o);
            var d=[
            ];
            return(0, p.each)(t, (function(t, e){
              0===e?d.push([
                "M", t.x, t.y
              ]):d.push([
                "L", t.x, t.y
              ])
            })), d
          }
          !1===h||(null==s?void 0:s.length)||(h=!0);
          var c=h?Rt(t[
            t.length-1
          ], t[
            0
          ], i, e, r):Qt(t[
            0
          ], t[
            t.length-1
          ], e, i, n);
          return c&&c.length?o?Wt(c, o):(c=function(t){
            if(!(null==t?void 0:t.length))return t;
            for(var e=t[
              t.length-1
            ], i={
              x:e.x, y:e.y
            }, o=[
              e
            ], n=[
              e
            ], a=t.length-2;
            a>=0;
            a--){
              var r, s=t[
                a
              ];
              s.x===i.x?o.push(s):(o=[
                s
              ], i.x=s.x), s.y===i.y?n.push(s):(n=[
                s
              ], i.y=s.y), o.length>2?(r=t.indexOf(o[
                1
              ]))>-1&&t.splice(r, 1):n.length>2&&(r=t.indexOf(n[
                1
              ]))>-1&&t.splice(r, 1)
            }
            return t
          }
          (c), l.J0.pointsToPolygon(c)):"M0 0, L0 0"
        }
      }, "single-edge");
      var $t=U.cloneEvent, te=U.isNaN, ee=Math.abs, ie=[
        "shift", "ctrl", "alt", "control"
      ];
      const oe={
        getDefaultCfg:function(){
          return{
            direction:"both", enableOptimize:!1, scalableRange:0, allowDragOnItem:!1
          }
        }, getEvents:function(){
          return{
            mousedown:"onMouseDown", drag:"onDragMove", dragend:"onMouseUp", "canvas:click":"onMouseUp", keyup:"onKeyUp", focus:"onKeyUp", keydown:"onKeyDown", touchstart:"onTouchStart", touchmove:"onTouchMove", touchend:"onMouseUp"
          }
        }, updateViewport:function(t){
          var e=this.origin, i=+t.clientX, o=+t.clientY;
          if(!te(i)&&!te(o)){
            var n=i-e.x, a=o-e.y;
            "x"===this.get("direction")?a=0:"y"===this.get("direction")&&(n=0), this.origin={
              x:i, y:o
            };
            var r=this.graph.get("width"), s=this.graph.get("height"), l=this.graph.get("canvas").getCanvasBBox(), h=this.scalableRange, d=this.scalableRange;
            h<1&&h>-1&&(h*=r, d*=s), (l.minX<=r+h&&l.minX+n>r+h||l.maxX+h>=0&&l.maxX+h+n<0)&&(n=0), (l.minY<=s+d&&l.minY+a>s+d||l.maxY+d>=0&&l.maxY+d+a<0)&&(a=0), this.graph.translate(n, a)
          }
        }, onTouchStart:function(t){
          var e=t.originalEvent.touches, i=e[
            0
          ], o=e[
            1
          ];
          i&&o||(t.preventDefault(), this.mousedown=!0, this.onDragStart(t))
        }, onMouseDown:function(t){
          this.mousedown=!0
        }, onDragMove:function(t){
          this.mousedown&&(this.dragstart?this.onDrag(t):(this.dragstart=!0, this.onDragStart(t)))
        }, onDragStart:function(t){
          var e=this, i=t.originalEvent;
          if((!i||"touchstart"===t.name||0===i.button)&&("touchstart"===t.name||"undefined"==typeof window||!window.event||window.event.buttons||window.event.button)&&this.shouldBegin(t, this)&&!e.keydown&&this.allowDrag(t)){
            if(e.origin={
              x:t.clientX, y:t.clientY
            }, e.dragging=!1, this.enableOptimize){
              for(var o=this.graph, n=o.getEdges(), a=0, r=n.length;
              a<r;
              a++){
                var s=n[
                  a
                ].get("group").get("children");
                s&&s.forEach((function(t){
                  t.set("ori-visibility", t.get("ori-visibility")||t.get("visible")), t.hide()
                }))
              }
              for(var l=o.getNodes(), h=0, d=l.length;
              h<d;
              h++)for(var c=0, g=l[
                h
              ].getContainer().get("children");
              c<g.length;
              c++){
                var u=g[
                  c
                ];
                u.get("isKeyShape")||(u.set("ori-visibility", u.get("ori-visibility")||u.get("visible")), u.hide())
              }
            }
            if("undefined"!=typeof window){
              var p=this;
              this.handleDOMContextMenu=function(t){
                return p.onMouseUp(t)
              }, document.body.addEventListener("contextmenu", this.handleDOMContextMenu)
            }
          }
        }, onTouchMove:function(t){
          var e=t.originalEvent.touches, i=e[
            0
          ], o=e[
            1
          ];
          i&&o?this.onMouseUp(t):(t.preventDefault(), this.onDrag(t))
        }, onDrag:function(t){
          if(this.mousedown){
            var e=this.graph;
            if(!this.keydown&&this.allowDrag(t)&&(t=$t(t), this.origin)){
              if(this.dragging)t.type="drag", e.emit("canvas:drag", t);
              else{
                if(ee(this.origin.x-t.clientX)+ee(this.origin.y-t.clientY)<10)return;
                this.shouldBegin(t, this)&&(t.type="dragstart", e.emit("canvas:dragstart", t), this.originPosition={
                  x:t.clientX, y:t.clientY
                }, this.dragging=!0)
              }
              this.shouldUpdate(t, this)&&this.updateViewport(t)
            }
          }
        }, onMouseUp:function(t){
          var e, i;
          this.mousedown=!1, this.dragstart=!1;
          var o=this.graph;
          if(!this.keydown){
            var n=o.getZoom(), a=o.get("modeController"), r=null===(i=null===(e=null==a?void 0:a.modes[
              a.mode
            ])||void 0===e?void 0:e.filter((function(t){
              return"zoom-canvas"===t.type
            })))||void 0===i?void 0:i[
              0
            ], s=r?r.optimizeZoom||.1:0;
            if(this.enableOptimize){
              for(var l=o.getEdges(), h=0, d=l.length;
              h<d;
              h++){
                var c=l[
                  h
                ].get("group").get("children");
                c&&c.forEach((function(t){
                  var e=t.get("ori-visibility");
                  t.set("ori-visibility", void 0), e&&t.show()
                }))
              }
              if(n>s)for(var g=o.getNodes(), u=0, p=g.length;
              u<p;
              u++)for(var f=0, y=g[
                u
              ].getContainer().get("children");
              f<y.length;
              f++){
                var m=y[
                  f
                ];
                if(!m.get("isKeyShape")){
                  var v=m.get("ori-visibility");
                  m.set("ori-visibility", void 0), v&&m.show()
                }
              }
            }
            this.dragging?(t=$t(t), this.shouldEnd(t, this)&&this.updateViewport(t), t.type="dragend", t.dx=t.clientX-this.originPosition.x, t.dy=t.clientY-this.originPosition.y, o.emit("canvas:dragend", t), this.endDrag(), "undefined"!=typeof window&&document.body.removeEventListener("contextmenu", this.handleDOMContextMenu)):this.origin=null
          }
        }, endDrag:function(){
          this.origin=null, this.dragging=!1, this.dragbegin=!1, this.mousedown=!1, this.dragstart=!1
        }, onKeyDown:function(t){
          var e=t.key;
          e&&(ie.indexOf(e.toLowerCase())>-1?this.keydown=!0:this.keydown=!1)
        }, onKeyUp:function(){
          this.keydown=!1, this.origin=null, this.dragging=!1, this.dragbegin=!1
        }, allowDrag:function(t){
          var e, i, o=t.target, n=o&&o.isCanvas&&o.isCanvas();
          if((0, p.isBoolean)(this.allowDragOnItem)&&!this.allowDragOnItem&&!n)return!1;
          if((0, p.isObject)(this.allowDragOnItem)){
            var a=this.allowDragOnItem, r=a.node, s=a.edge, l=a.combo, h=null===(i=null===(e=t.item)||void 0===e?void 0:e.getType)||void 0===i?void 0:i.call(e);
            if(!r&&"node"===h)return!1;
            if(!s&&"edge"===h)return!1;
            if(!l&&"combo"===h)return!1
          }
          return!0
        }
      }, ne={
        getDefaultCfg:function(){
          return{
            updateEdge:!0, delegateStyle:{
            }, enableDelegate:!1, onlyChangeComboSize:!1, comboActiveState:"", selectedState:"selected", enableOptimize:!1, enableDebounce:!1, enableStack:!0
          }
        }, getEvents:function(){
          return{
            "node:mousedown":"onMouseDown", drag:"onDragMove", dragend:"onDragEnd", "combo:dragenter":"onDragEnter", "combo:dragleave":"onDragLeave", "combo:drop":"onDropCombo", "node:drop":"onDropNode", "canvas:drop":"onDropCanvas", touchstart:"onTouchStart", touchmove:"onTouchMove", touchend:"onDragEnd", afterchangedata:"onDragEnd"
          }
        }, validationCombo:function(t){
          return!(!this.origin||!t||t.destroyed)&&"combo"===t.getType()
        }, onTouchStart:function(t){
          if(t.item){
            try{
              var e=t.originalEvent.touches, i=e[
                0
              ], o=e[
                1
              ];
              if(i&&o)return;
              t.preventDefault()
            }
            catch(t){
              console.warn("Touch original event not exist!")
            }
            this.mousedown={
              item:t.item, target:t.target, origin:{
                x:t.x, y:t.y
              }
            }, this.dragstart=!0, this.onDragStart(t)
          }
        }, onTouchMove:function(t){
          try{
            var e=t.originalEvent.touches, i=e[
              0
            ], o=e[
              1
            ];
            if(i&&o)return void this.onDragEnd(t);
            t.preventDefault()
          }
          catch(t){
            console.warn("Touch original event not exist!")
          }
          this.onDrag(t)
        }, onMouseDown:function(t){
          this.mousedown={
            item:t.item, target:t.target, origin:{
              x:t.x, y:t.y
            }
          }, "undefined"==typeof window||this.windowEventBinded||(this.windowEventBinded=!0, document.body.addEventListener("contextmenu", this.onDragEnd.bind(this)), document.body.addEventListener("mouseup", this.onDragEnd.bind(this)))
        }, onDragMove:function(t){
          var e, i;
          "node"===(null===(i=null===(e=t.item)||void 0===e?void 0:e.getType)||void 0===i?void 0:i.call(e))?this.mousedown&&(this.dragstart?this.onDrag((0, s.__assign)((0, s.__assign)({
          }, t), this.mousedown)):(this.dragstart=!0, this.onDragStart(t))):this.onDragEnd()
        }, onDragStart:function(t){
          var e=this;
          if(this.currentShouldEnd=!0, this.shouldBegin((0, s.__assign)((0, s.__assign)({
          }, t), this.mousedown), this)){
            var i=this.mousedown, o=i.item, n=i.target;
            if(o&&!o.destroyed&&!o.hasLocked()){
              if(o.getContainer().set("capture", !1), this.cachedCaptureItems||(this.cachedCaptureItems=[
              ]), this.cachedCaptureItems.push(o), n)if(n.get("isAnchorPoint"))return;
              var a=this.graph;
              this.targets=[
              ], this.targetCombo=null;
              var r=a.findAllByState("node", this.selectedState), l=o.get("id");
              if(0===r.filter((function(t){
                var e=t.get("id");
                return l===e
              })).length?this.targets.push(o):r.length>1?r.forEach((function(t){
                t.hasLocked()||e.targets.push(t)
              })):this.targets.push(o), this.graph.get("enabledStack")&&this.enableStack){
                var h=[
                ];
                this.targets.forEach((function(t){
                  var e=t.getModel(), i=e.x, o=e.y, n=e.id;
                  h.push({
                    x:i, y:o, id:n
                  })
                })), this.set("beforeDragNodes", h)
              }
              this.hidenEdge={
              }, this.get("updateEdge")&&this.enableOptimize&&!this.enableDelegate&&this.targets.forEach((function(t){
                t.getEdges().forEach((function(t){
                  t.isVisible()&&(e.hidenEdge[
                    t.getID()
                  ]
                  =!0, t.hide())
                }))
              })), this.origin=this.mousedown.origin, this.point={
              }, this.originPoint={
              }
            }
          }
        }, onDrag:function(t){
          var e=this;
          if(this.mousedown&&this.origin&&this.shouldUpdate(t, this))if(this.get("enableDelegate"))this.updateDelegate(t);
          else if(this.enableDebounce)this.debounceUpdate({
            targets:this.targets, graph:this.graph, point:this.point, origin:this.origin, evt:t, updateEdge:this.get("updateEdge"), onlyChangeComboSize:this.onlyChangeComboSize, updateParentCombos:this.updateParentCombos
          });
          else{
            var i={
            };
            this.targets.map((function(o){
              e.update(o, t);
              var n=o.getModel().comboId;
              n&&(i[
                n
              ]
              =e.graph.findById(n))
            })), this.onlyChangeComboSize&&this.updateParentCombos()
          }
        }, onDragEnd:function(t){
          var e, i=this;
          if(this.mousedown=!1, this.dragstart=!1, "undefined"!=typeof window&&this.windowEventBinded&&(this.windowEventBinded=!1, document.body.removeEventListener("contextmenu", this.onDragEnd.bind(this)), document.body.removeEventListener("mouseup", this.onDragEnd.bind(this))), this.origin){
            null===(e=this.cachedCaptureItems)||void 0===e||e.forEach((function(t){
              t.getContainer().set("capture", !0)
            })), this.cachedCaptureItems=[
            ], this.delegateRect&&(this.delegateRect.remove(), this.delegateRect=null), this.get("updateEdge")&&this.enableOptimize&&!this.enableDelegate&&this.targets.forEach((function(t){
              t.getEdges().forEach((function(t){
                i.hidenEdge[
                  t.getID()
                ]
                &&t.show(), t.refresh()
              }))
            })), this.hidenEdge={
            };
            var o=this.graph;
            if(o.get("enabledStack")&&this.enableStack){
              var n={
                before:{
                  nodes:[
                  ], edges:[
                  ], combos:[
                  ]
                }, after:{
                  nodes:[
                  ], edges:[
                  ], combos:[
                  ]
                }
              };
              this.get("beforeDragNodes").forEach((function(t){
                n.before.nodes.push(t)
              })), this.targets.forEach((function(t){
                var e=t.getModel(), i=e.x, o=e.y, a=e.id;
                n.after.nodes.push({
                  x:i, y:o, id:a
                })
              })), o.pushStack("update", (0, p.clone)(n))
            }
            o.emit("dragnodeend", {
              items:this.targets, targetItem:null
            }), this.point={
            }, this.origin=null, this.originPoint={
            }, this.targets.length=0, this.targetCombo=null
          }
        }, onDropCombo:function(t){
          var e=t.item;
          if(this.currentShouldEnd=this.shouldEnd(t, e, this), this.updatePositions(t, !this.currentShouldEnd), this.currentShouldEnd&&this.validationCombo(e)){
            var i=this.graph;
            if(this.comboActiveState&&i.setItemState(e, this.comboActiveState, !1), this.targetCombo=e, this.onlyChangeComboSize)i.updateCombos();
            else{
              var o=e.getModel();
              this.targets.map((function(t){
                t.getModel().comboId!==o.id&&i.updateComboTree(t, o.id)
              })), i.updateCombo(e)
            }
            i.emit("dragnodeend", {
              items:this.targets, targetItem:this.targetCombo
            })
          }
        }, onDropCanvas:function(t){
          var e=this.graph;
          this.currentShouldEnd=this.shouldEnd(t, void 0, this), this.updatePositions(t, !this.currentShouldEnd), this.targets&&0!==this.targets.length&&this.currentShouldEnd&&(this.onlyChangeComboSize?this.updateParentCombos():this.targets.map((function(t){
            t.getModel().comboId&&e.updateComboTree(t)
          })))
        }, onDropNode:function(t){
          if(this.targets&&0!==this.targets.length){
            var e=this, i=t.item, o=e.graph, n=i.getModel().comboId, a=n?o.findById(n):void 0;
            if(this.currentShouldEnd=this.shouldEnd(t, a, this), this.updatePositions(t, !this.currentShouldEnd), this.currentShouldEnd){
              if(this.onlyChangeComboSize)this.updateParentCombos();
              else if(n){
                var r=o.findById(n);
                e.comboActiveState&&o.setItemState(r, e.comboActiveState, !1), this.targets.map((function(t){
                  var e=t.getModel();
                  n!==e.comboId&&o.updateComboTree(t, n)
                })), o.updateCombo(r)
              }
              else this.targets.map((function(t){
                t.getModel().comboId&&o.updateComboTree(t)
              }));
              o.emit("dragnodeend", {
                items:this.targets, targetItem:i
              })
            }
          }
        }, onDragEnter:function(t){
          var e=t.item;
          if(this.validationCombo(e)){
            var i=this.graph;
            this.comboActiveState&&i.setItemState(e, this.comboActiveState, !0)
          }
        }, onDragLeave:function(t){
          var e=t.item;
          if(this.validationCombo(e)){
            var i=this.graph;
            this.comboActiveState&&i.setItemState(e, this.comboActiveState, !1)
          }
        }, updatePositions:function(t, e){
          var i=this;
          this.targets&&0!==this.targets.length&&(this.get("enableDelegate")?this.enableDebounce?this.debounceUpdate({
            targets:this.targets, graph:this.graph, point:this.point, origin:this.origin, evt:t, updateEdge:this.get("updateEdge"), onlyChangeComboSize:this.onlyChangeComboSize, updateParentCombos:this.updateParentCombos
          }):e||this.targets.map((function(e){
            return i.update(e, t)
          })):this.targets.map((function(o){
            return i.update(o, t, e)
          })))
        }, update:function(t, e, i){
          var o=this.origin, n=t.get("model"), a=t.get("id");
          this.point[
            a
          ]
          ||(this.point[
            a
          ]
          ={
            x:n.x||0, y:n.y||0
          });
          var r=e.x-o.x+this.point[
            a
          ].x, s=e.y-o.y+this.point[
            a
          ].y;
          i&&(r+=o.x-e.x, s+=o.y-e.y);
          var l={
            x:r, y:s
          };
          this.get("updateEdge")?this.graph.updateItem(t, l, !1):t.updatePosition(l)
        }, debounceUpdate:(0, p.debounce)((function(t){
          var e=t.targets, i=t.graph, o=t.point, n=t.origin, a=t.evt, r=t.updateEdge, s=t.onlyChangeComboSize, l=t.updateParentCombos;
          e.map((function(t){
            var e=t.get("model"), s=t.get("id");
            o[
              s
            ]
            ||(o[
              s
            ]
            ={
              x:e.x||0, y:e.y||0
            });
            var l={
              x:a.x-n.x+o[
                s
              ].x, y:a.y-n.y+o[
                s
              ].y
            };
            r?i.updateItem(t, l, !1):t.updatePosition(l)
          })), s&&l(i, e)
        }), 50, !0), updateDelegate:function(t){
          var e=this.graph;
          if(this.delegateRect){
            var i=t.x-this.origin.x+this.originPoint.minX, o=t.y-this.origin.y+this.originPoint.minY;
            this.delegateRect.attr({
              x:i, y:o
            })
          }
          else{
            var n=e.get("group"), a=(0, p.deepMix)({
            }, M.delegateStyle, this.delegateStyle), r=this.calculationGroupPosition(t), l=r.x, h=r.y, d=r.width, c=r.height, g=r.minX, u=r.minY;
            this.originPoint={
              x:l, y:h, width:d, height:c, minX:g, minY:u
            }, this.delegateRect=n.addShape("rect", {
              attrs:(0, s.__assign)({
                width:d, height:c, x:l, y:h
              }, a), name:"rect-delegate-shape"
            }), this.delegate=this.delegateRect, this.delegateRect.set("capture", !1)
          }
        }, calculationGroupPosition:function(t){
          var e=this.targets;
          0===e.length&&e.push(t.item);
          for(var i=1/0, o=-1/0, n=1/0, a=-1/0, r=0;
          r<e.length;
          r++){
            var s=e[
              r
            ].getBBox(), l=s.minX, h=s.minY, d=s.maxX, c=s.maxY;
            l<i&&(i=l), h<n&&(n=h), d>o&&(o=d), c>a&&(a=c)
          }
          return{
            x:Math.floor(i), y:Math.floor(n), width:Math.ceil(o)-Math.floor(i), height:Math.ceil(a)-Math.floor(n), minX:i, minY:n
          }
        }, updateParentCombos:function(t, e){
          var i=t||this.graph, o=e||this.targets, n={
          };
          null==o||o.forEach((function(t){
            var e=t.getModel().comboId;
            e&&(n[
              e
            ]
            =i.findById(e))
          })), Object.values(n).forEach((function(t){
            t&&i.updateCombo(t)
          }))
        }
      };
      var ae=null;
      const re={
        getDefaultCfg:function(){
          return{
            trigger:"mouseenter", activeState:"active", inactiveState:"inactive", resetSelected:!1, shouldClearStatusOnSecond:!1, shouldUpdate:function(){
              return!0
            }
          }
        }, getEvents:function(){
          return"mouseenter"===this.get("trigger")?{
            "node:mouseenter":"setAllItemStates", "combo:mouseenter":"setAllItemStates", "node:mouseleave":"clearActiveState", "combo:mouseleave":"clearActiveState"
          }
          :{
            "node:click":"setAllItemStates", "combo:click":"setAllItemStates", "canvas:click":"clearActiveState", "node:touchstart":"setOnTouchStart", "combo:touchstart":"setOnTouchStart", "canvas:touchstart":"clearOnTouchStart"
          }
        }, setOnTouchStart:function(t){
          try{
            var e=t.originalEvent.touches, i=e[
              0
            ], o=e[
              1
            ];
            if(i&&o)return;
            t.preventDefault()
          }
          catch(t){
            console.warn("Touch original event not exist!")
          }
          this.setAllItemStates(t)
        }, clearOnTouchStart:function(t){
          try{
            var e=t.originalEvent.touches, i=e[
              0
            ], o=e[
              1
            ];
            if(i&&o)return;
            t.preventDefault()
          }
          catch(t){
            console.warn("Touch original event not exist!")
          }
          this.clearActiveState(t)
        }, setAllItemStates:function(t){
          clearTimeout(this.timer), this.throttleSetAllItemStates(t, this)
        }, clearActiveState:function(t){
          var e=this;
          this.shouldClearStatusOnSecond&&(ae=null), this.timer=setTimeout((function(){
            e.throttleClearActiveState(t, e)
          }), 50)
        }, throttleSetAllItemStates:(0, p.throttle)((function(t, e){
          var i=t.item, o=e.graph;
          if(o&&!o.destroyed&&(e.item=i, e.shouldUpdate(t.item, {
            event:t, action:"activate"
          }, e))){
            var n=e.shouldClearStatusOnSecond, a=i.getModel().id;
            if(ae===a&&n)return e.throttleClearActiveState(t, e), void(ae=null);
            for(var r=e.activeState, s=e.inactiveState, l=o.getNodes(), h=o.getCombos(), d=o.getEdges(), c=o.get("vedges"), g=l.length, u=h.length, p=d.length, f=c.length, y=e.inactiveItems||{
            }, m=e.activeItems||{
            }, v=0;
            v<g;
            v++){
              var b=l[
                v
              ], x=b.getID(), S=b.hasState("selected");
              e.resetSelected&&S&&o.setItemState(b, "selected", !1), m[
                x
              ]
              &&(o.setItemState(b, r, !1), delete m[
                x
              ]), s&&!y[
                x
              ]
              &&(o.setItemState(b, s, !0), y[
                x
              ]
              =b)
            }
            for(v=0;
            v<u;
            v++){
              var w=h[
                v
              ], k=w.getID();
              S=w.hasState("selected");
              e.resetSelected&&S&&o.setItemState(w, "selected", !1), m[
                k
              ]
              &&(o.setItemState(w, r, !1), delete m[
                k
              ]), s&&!y[
                k
              ]
              &&(o.setItemState(w, s, !0), y[
                k
              ]
              =w)
            }
            for(v=0;
            v<p;
            v++){
              m[
                E=(P=d[
                  v
                ]).getID()
              ]
              &&(o.setItemState(P, r, !1), delete m[
                E
              ]), s&&!y[
                E
              ]
              &&(o.setItemState(P, s, !0), y[
                E
              ]
              =P)
            }
            for(v=0;
            v<f;
            v++){
              var M=c[
                v
              ], C=M.getID();
              m[
                C
              ]
              &&(o.setItemState(M, r, !1), delete m[
                C
              ]), s&&!y[
                C
              ]
              &&(o.setItemState(M, s, !0), y[
                C
              ]
              =M)
            }
            if(i&&!i.destroyed){
              s&&(o.setItemState(i, s, !1), delete y[
                i.getID()
              ]), m[
                i.getID()
              ]
              ||(o.setItemState(i, r, !0), m[
                i.getID()
              ]
              =i);
              var _=i.getEdges(), I=_.length;
              for(v=0;
              v<I;
              v++){
                var P, E=(P=_[
                  v
                ]).getID(), B=void 0, N=(B=P.getSource()===i?P.getTarget():P.getSource()).getID();
                s&&y[
                  N
                ]
                &&(o.setItemState(B, s, !1), delete y[
                  N
                ]), m[
                  N
                ]
                ||(o.setItemState(B, r, !0), m[
                  N
                ]
                =B), y[
                  E
                ]
                &&(o.setItemState(P, s, !1), delete y[
                  E
                ]), m[
                  E
                ]
                ||(o.setItemState(P, r, !0), m[
                  E
                ]
                =P), P.toFront()
              }
            }
            e.activeItems=m, e.inactiveItems=y, n&&(ae=i.getModel().id), o.emit("afteractivaterelations", {
              item:t.item, action:"activate"
            })
          }
        }), 50, {
          trailing:!0, leading:!0
        }), throttleClearActiveState:(0, p.throttle)((function(t, e){
          var i=e.get("graph");
          if(i&&!i.destroyed&&e.shouldUpdate(t.item, {
            event:t, action:"deactivate"
          }, e)){
            var o=e.activeState, n=e.inactiveState, a=e.activeItems||{
            }, r=e.inactiveItems||{
            };
            Object.values(a).filter((function(t){
              return!t.destroyed
            })).forEach((function(t){
              i.clearItemStates(t, o)
            })), Object.values(r).filter((function(t){
              return!t.destroyed
            })).forEach((function(t){
              i.clearItemStates(t, n)
            })), e.activeItems={
            }, e.inactiveItems={
            }, i.emit("afteractivaterelations", {
              item:t.item||e.get("item"), action:"deactivate"
            })
          }
        }), 50, {
          trailing:!0, leading:!0
        })
      };
      var se=Math.min, le=Math.max, he=Math.abs, de="shift", ce=[
        "drag", "shift", "ctrl", "alt", "control"
      ];
      const ge={
        getDefaultCfg:function(){
          return{
            brushStyle:{
              fill:"#EEF6FF", fillOpacity:.4, stroke:"#DDEEFE", lineWidth:1
            }, onSelect:function(){
            }, onDeselect:function(){
            }, selectedState:"selected", trigger:de, includeEdges:!0, includeCombos:!1, selectOnCombo:!1, selectedEdges:[
            ], selectedNodes:[
            ], selectedCombos:[
            ]
          }
        }, getEvents:function(){
          return ce.indexOf(this.trigger.toLowerCase())>-1||(this.trigger=de, console.warn("Behavior brush-select 的 trigger 参数不合法，请输入 'drag'、'shift'、'ctrl' 或 'alt'")), "drag"===this.trigger?{
            dragstart:"onMouseDown", drag:"onMouseMove", dragend:"onMouseUp", "canvas:click":"clearStates"
          }
          :{
            dragstart:"onMouseDown", drag:"onMouseMove", dragend:"onMouseUp", "canvas:click":"clearStates", keyup:"onKeyUp", keydown:"onKeyDown"
          }
        }, onMouseDown:function(t){
          var e=t.item, i=this.brush, o=this.selectOnCombo, n="combo"===(null==e?void 0:e.getType());
          n&&!o||!n&&e||("drag"===this.trigger||this.keydown)&&(this.selectedNodes&&0!==this.selectedNodes.length&&this.clearStates(), i||(i=this.createBrush()), this.originPoint={
            x:t.canvasX, y:t.canvasY
          }, i.attr({
            width:0, height:0
          }), i.show(), this.dragging=!0)
        }, onMouseMove:function(t){
          this.dragging&&("drag"===this.trigger||this.keydown)&&this.updateBrush(t)
        }, onMouseUp:function(t){
          this.graph;
          (this.brush||this.dragging)&&("drag"===this.trigger||this.keydown)&&(this.brush.remove(!0), this.brush=null, this.getSelectedNodes(t), this.dragging=!1)
        }, clearStates:function(){
          var t=this.graph, e=this.selectedState, i=t.findAllByState("node", e), o=t.findAllByState("edge", e), n=t.findAllByState("combo", e);
          i.forEach((function(i){
            return t.setItemState(i, e, !1)
          })), o.forEach((function(i){
            return t.setItemState(i, e, !1)
          })), n.forEach((function(i){
            return t.setItemState(i, e, !1)
          })), this.selectedNodes=[
          ], this.selectedEdges=[
          ], this.selectedCombos=[
          ], this.onDeselect&&this.onDeselect(this.selectedNodes, this.selectedEdges, this.selectedCombos), t.emit("nodeselectchange", {
            selectedItems:{
              nodes:[
              ], edges:[
              ], combos:[
              ]
            }, select:!1
          })
        }, isBBoxCenterInRect:function(t, e, i, o, n){
          var a=t.getBBox();
          return a.centerX>=e&&a.centerX<=i&&a.centerY>=o&&a.centerY<=n
        }, getSelectedNodes:function(t){
          var e=this, i=this, o=i.graph, n=i.originPoint, a=i.shouldUpdate, r=i.isBBoxCenterInRect, s=this.selectedState, l={
            x:t.x, y:t.y
          }, h=o.getPointByCanvas(n.x, n.y), d=se(l.x, h.x), c=le(l.x, h.x), g=se(l.y, h.y), u=le(l.y, h.y), p=[
          ], f=[
          ];
          o.getNodes().forEach((function(t){
            if(t.isVisible()&&r(t, d, c, g, u)&&a(t, "select", e)){
              p.push(t);
              var i=t.getModel();
              f.push(i.id), o.setItemState(t, s, !0)
            }
          }));
          var y=[
          ];
          this.includeEdges&&p.forEach((function(t){
            t.getOutEdges().forEach((function(t){
              if(t.isVisible()){
                var i=t.getModel(), n=i.source, r=i.target;
                f.includes(n)&&f.includes(r)&&a(t, "select", e)&&(y.push(t), o.setItemState(t, e.selectedState, !0))
              }
            }))
          }));
          var m=[
          ];
          this.includeCombos&&o.getCombos().forEach((function(t){
            if(t.isVisible()&&r(t, d, c, g, u)&&a(t, "select", e)){
              m.push(t);
              var i=t.getModel();
              f.push(i.id), o.setItemState(t, s, !0)
            }
          })), this.selectedEdges=y, this.selectedNodes=p, this.selectedCombos=m, this.onSelect&&this.onSelect(p, y, m), o.emit("nodeselectchange", {
            selectedItems:{
              nodes:p, edges:y, combos:m
            }, select:!0
          })
        }, createBrush:function(){
          var t=this.graph.get("canvas").addShape("rect", {
            attrs:this.brushStyle, capture:!1, name:"brush-shape"
          });
          return this.brush=t, this.delegate=t, t
        }, updateBrush:function(t){
          var e=this.originPoint;
          this.brush.attr({
            width:he(t.canvasX-e.x), height:he(t.canvasY-e.y), x:se(t.canvasX, e.x), y:se(t.canvasY, e.y)
          })
        }, onKeyDown:function(t){
          var e=t.key;
          if(e){
            var i=this.trigger.toLowerCase(), o=e.toLowerCase();
            this.keydown=o===i||"control"===o&&"ctrl"===i||"ctrl"===o&&"control"===i
          }
        }, onKeyUp:function(){
          this.brush&&(this.brush.remove(!0), this.brush=null, this.dragging=!1), this.keydown=!1
        }
      };
      var ue="shift", pe=[
        "shift", "ctrl", "alt", "control"
      ];
      const fe={
        getDefaultCfg:function(){
          return{
            multiple:!0, trigger:ue, selectedState:"selected", selectNode:!0, selectEdge:!1, selectCombo:!0
          }
        }, getEvents:function(){
          var t=this;
          return pe.indexOf(t.trigger.toLowerCase())>-1||(t.trigger=ue, console.warn("Behavior click-select 的 trigger 参数不合法，请输入 'drag'、'shift'、'ctrl' 或 'alt'")), t.multiple?{
            "node:click":"onClick", "combo:click":"onClick", "edge:click":"onClick", "canvas:click":"onCanvasClick", keyup:"onKeyUp", keydown:"onKeyDown"
          }
          :{
            "node:click":"onClick", "combo:click":"onClick", "edge:click":"onClick", "canvas:click":"onCanvasClick"
          }
        }, onClick:function(t){
          var e=this, i=t.item;
          if(i&&!i.destroyed){
            var o=i.getType(), n=e.graph, a=e.keydown, r=e.multiple, s=e.shouldUpdate;
            if((0, e.shouldBegin)(t, e)){
              if(!a||!r){
                var l=n.findAllByState("node", e.selectedState).concat(n.findAllByState("edge", e.selectedState)).concat(n.findAllByState("combo", e.selectedState));
                (0, p.each)(l, (function(t){
                  t!==i&&n.setItemState(t, e.selectedState, !1)
                }))
              }
              if(function(){
                switch(o){
                  case"node":return e.selectNode;
                  case"edge":return e.selectEdge;
                  case"combo":return e.selectCombo;
                  default:return!1
                }
              }
              ())if(i.hasState(e.selectedState)){
                s(t, e)&&n.setItemState(i, e.selectedState, !1);
                h=n.findAllByState("node", e.selectedState), d=n.findAllByState("edge", e.selectedState), c=n.findAllByState("combo", e.selectedState);
                n.emit("nodeselectchange", {
                  target:i, selectedItems:{
                    nodes:h, edges:d, combos:c
                  }, select:!1
                })
              }
              else{
                s(t, e)&&n.setItemState(i, e.selectedState, !0);
                h=n.findAllByState("node", e.selectedState), d=n.findAllByState("edge", e.selectedState), c=n.findAllByState("combo", e.selectedState);
                n.emit("nodeselectchange", {
                  target:i, selectedItems:{
                    nodes:h, edges:d, combos:c
                  }, select:!0
                })
              }
              else{
                var h=n.findAllByState("node", e.selectedState), d=n.findAllByState("edge", e.selectedState), c=n.findAllByState("combo", e.selectedState);
                n.emit("nodeselectchange", {
                  selectedItems:{
                    nodes:h, edges:d, combos:c
                  }, select:!1
                })
              }
            }
          }
        }, onCanvasClick:function(t){
          var e=this, i=this.graph;
          if((0, this.shouldBegin)(t, this)){
            var o=i.findAllByState("node", this.selectedState);
            (0, p.each)(o, (function(t){
              i.setItemState(t, e.selectedState, !1)
            }));
            var n=i.findAllByState("edge", this.selectedState);
            (0, p.each)(n, (function(t){
              i.setItemState(t, e.selectedState, !1)
            }));
            var a=i.findAllByState("combo", this.selectedState);
            (0, p.each)(a, (function(t){
              i.setItemState(t, e.selectedState, !1)
            })), i.emit("nodeselectchange", {
              selectedItems:{
                nodes:[
                ], edges:[
                ], combos:[
                ]
              }, select:!1
            })
          }
        }, onKeyDown:function(t){
          var e=t.key;
          e&&(e.toLowerCase()===this.trigger.toLowerCase()||"control"===e.toLowerCase()?this.keydown=!0:this.keydown=!1)
        }, onKeyUp:function(){
          this.keydown=!1
        }
      };
      var ye=u.pd, me=.05;
      const ve={
        getDefaultCfg:function(){
          return this.isFireFox="firefox"===R(), {
            sensitivity:2, minZoom:void 0, maxZoom:void 0, enableOptimize:!1, optimizeZoom:.1, fixSelectedItems:{
              fixAll:!1, fixLineWidth:!1, fixLabel:!1, fixState:"selected"
            }, animate:!1, animateCfg:{
              duration:500
            }
          }
        }, getEvents:function(){
          var t=this.fixSelectedItems;
          return t.fixState||(t.fixState="selected"), t.fixAll&&(t.fixLineWidth=!0, t.fixLabel=!0), {
            wheel:"onWheel", touchstart:"onTouchStart", touchmove:"onTouchMove", touchend:"onTouchEnd"
          }
        }, onTouchStart:function(t){
          var e=t.originalEvent.touches, i=e[
            0
          ], o=e[
            1
          ];
          t.preventDefault(), o&&(this.shouldBegin&&!this.shouldBegin(t, this)||(this.startPoint={
            pageX:i.pageX, pageY:i.pageY
          }, this.moveable=!0, o&&(this.endPoint={
            pageX:o.pageX, pageY:o.pageY
          }), this.originScale=this.graph.getZoom()||this.currentScale||1))
        }, onTouchMove:function(t){
          if(this.moveable){
            t.preventDefault();
            var e=t.originalEvent.touches, i=e[
              0
            ], o=e[
              1
            ];
            if(o){
              this.endPoint||(this.endPoint={
                pageX:o.pageX, pageY:o.pageY
              });
              var n=function(t, e){
                return Math.hypot(e.x-t.x, e.y-t.y)
              }, a=n({
                x:i.pageX, y:i.pageY
              }, {
                x:o.pageX, y:o.pageY
              })/n({
                x:this.startPoint.pageX, y:this.startPoint.pageY
              }, {
                x:this.endPoint.pageX, y:this.endPoint.pageY
              }), r=this.originScale*a;
              this.currentScale=r;
              var s=this.get("minZoom")||this.graph.get("minZoom");
              if(!(r>(this.get("maxZoom")||this.graph.get("maxZoom"))||r<s)){
                var l=this.get("animate"), h=this.get("animateCfg"), d=this.graph.get("canvas").getPointByClient(t.clientX, t.clientY);
                this.graph.zoomTo(r, {
                  x:d.x, y:d.y
                }, l, h), this.graph.emit("wheelzoom", t)
              }
            }
          }
        }, onTouchEnd:function(){
          this.moveable=!1, this.endPoint=null
        }, onWheel:function(t){
          var e=this, i=this.graph, o=this.fixSelectedItems;
          if((!this.shouldBegin||this.shouldBegin(t, this))&&this.shouldUpdate(t, this)){
            t.preventDefault();
            var n=i.get("canvas").getPointByClient(t.clientX, t.clientY), a=this.get("sensitivity"), r=i.getZoom(), s=r;
            s=r*(this.isFireFox?t.deltaY>0||t.wheelDelta<0?1-me*a:1/(1-me*a):t.wheelDelta<0?1-me*a:1/(1-me*a));
            var l=this.get("minZoom")||i.get("minZoom"), h=this.get("maxZoom")||i.get("maxZoom");
            if(s>h?s=h:s<l&&(s=l), this.get("enableOptimize")){
              var d=this.get("optimizeZoom"), c=this.get("optimized"), g=i.getNodes(), u=i.getEdges(), f=g.length, y=u.length;
              if(!c){
                for(var m=0;
                m<f;
                m++){
                  if(!(I=g[
                    m
                  ]).destroyed)for(var v=(Z=I.get("group").get("children")).length, b=0;
                  b<v;
                  b++){
                    (O=Z[
                      b
                    ]).destoryed||O.get("isKeyShape")||(O.set("ori-visibility", O.get("ori-visibility")||O.get("visible")), O.hide())
                  }
                }
                for(var x=0;
                x<y;
                x++)for(v=(Z=(K=u[
                  x
                ]).get("group").get("children")).length, b=0;
                b<v;
                b++){
                  (O=Z[
                    b
                  ]).set("ori-visibility", O.get("ori-visibility")||O.get("visible")), O.hide()
                }
                this.set("optimized", !0)
              }
              clearTimeout(this.get("timeout"));
              var S=setTimeout((function(){
                var t=i.getZoom();
                if(e.get("optimized")){
                  e.set("optimized", !1);
                  for(var o=0;
                  o<f;
                  o++){
                    var n=g[
                      o
                    ], a=(h=n.get("group").get("children")).length;
                    if(t<d){
                      var r=(p=n.getKeyShape()).get("ori-visibility");
                      p.set("ori-visibility", void 0), r&&p.show()
                    }
                    else for(var s=0;
                    s<a;
                    s++){
                      r=(m=h[
                        s
                      ]).get("ori-visibility");
                      m.set("ori-visibility", void 0), !m.get("visible")&&r&&r&&m.show()
                    }
                  }
                  for(var l=0;
                  l<y;
                  l++){
                    var h, c=u[
                      l
                    ];
                    a=(h=c.get("group").get("children")).length;
                    if(t<d){
                      var p;
                      r=(p=c.getKeyShape()).get("ori-visibility");
                      p.set("ori-visibility", void 0), r&&p.show()
                    }
                    else for(s=0;
                    s<a;
                    s++){
                      var m;
                      if(!(m=h[
                        s
                      ]).get("visible")){
                        r=m.get("ori-visibility");
                        m.set("ori-visibility", void 0), r&&m.show()
                      }
                    }
                  }
                }
              }), 100);
              this.set("timeout", S)
            }
            if(r<=1){
              var w=void 0, k=void 0;
              if(o.fixAll||o.fixLineWidth||o.fixLabel){
                w=i.findAllByState("node", o.fixState), k=i.findAllByState("edge", o.fixState);
                for(var M=r/s, C=w.length, _=0;
                _<C;
                _++){
                  var I, P=(I=w[
                    _
                  ]).getContainer(), E=I.getModel(), B=I.getOriginStyle(), N=I.getStateStyle(o.fixState), L=I.get("shapeFactory").getShape(E.type).getStateStyle(o.fixState, I)[
                    o.fixState
                  ];
                  if(o.fixAll){
                    if(s<=1){
                      var T=(0, p.clone)(P.getMatrix());
                      T||(T=[
                        1, 0, 0, 0, 1, 0, 0, 0, 1
                      ]);
                      var A=I.getModel(), F=A.x, D=A.y;
                      T=ye(T, [
                        [
                          "t", -F, -D
                        ], [
                          "s", M, M
                        ], [
                          "t", F, D
                        ]
                      ]), P.setMatrix(T)
                    }
                  }
                  else for(v=(Z=P.get("children")).length, b=0;
                  b<v;
                  b++){
                    var O=Z[
                      b
                    ], z=void 0, Y=void 0;
                    if(o.fixLabel)if("text"===O.get("type")){
                      z=O.attr("fontSize")||12;
                      var X=N[
                        O.get("name")
                      ], W=L[
                        O.get("name")
                      ], R=X?X.fontSize:12, U=W?W.fontSize:12, j=R||U||12;
                      if(s<=1&&O.attr("fontSize", j/s), Y)break
                    }
                    if(o.fixLineWidth&&O.get("isKeyShape")){
                      Y=O.attr("lineWidth")||0;
                      var G=N.lineWidth||L.lineWidth||B.lineWidth||0;
                      if(s<=1&&O.attr("lineWidth", G/s), z)break
                    }
                  }
                }
                for(var J=k.length, V=0;
                V<J;
                V++){
                  var K, Z=(P=(K=k[
                    V
                  ]).getContainer()).get("children");
                  for(E=K.getModel(), N=K.getStateStyle(o.fixState), L=K.get("shapeFactory").getShape(E.type).getStateStyle(o.fixState, K)[
                    o.fixState
                  ], v=Z.length, b=0;
                  b<v;
                  b++){
                    O=Z[
                      b
                    ], z=void 0, Y=void 0;
                    if(o.fixLabel||o.fixAll)if("text"===O.get("type")){
                      z=O.attr("fontSize")||12;
                      X=N[
                        O.get("name")
                      ], W=L[
                        O.get("name")
                      ], R=X?X.fontSize:12, U=W?W.fontSize:12, j=R||U||12;
                      if(s<=1&&O.attr("fontSize", j/s), Y)break
                    }
                    if((o.fixLineWidth||o.fixAll)&&O.get("isKeyShape")){
                      Y=O.attr("lineWidth")||0;
                      G=N.lineWidth||L.lineWidth||1;
                      if(s<=1&&O.attr("lineWidth", G/s), z)break
                    }
                  }
                }
              }
            }
            var q=this.get("animate"), H=this.get("animateCfg");
            i.zoomTo(s, {
              x:n.x, y:n.y
            }, q, H), i.emit("wheelzoom", t)
          }
        }
      };
      var be=i(328834);
      const xe={
        onMouseEnter:function(t){
          var e=t.item;
          this.currentTarget=e, this.showTooltip(t), this.graph.emit("tooltipchange", {
            item:t.item, action:"show"
          })
        }, onMouseMove:function(t){
          this.shouldUpdate(t, this)?this.currentTarget&&t.item===this.currentTarget&&this.updatePosition(t):this.hideTooltip()
        }, onMouseLeave:function(t){
          this.shouldEnd(t, this)&&(this.hideTooltip(), this.graph.emit("tooltipchange", {
            item:this.currentTarget, action:"hide"
          }), this.currentTarget=null)
        }, showTooltip:function(t){
          var e=this.container;
          if(t.item&&!t.item.destroyed){
            e||(e=this.createTooltip(this.graph.get("canvas")), this.container=e);
            var i=this.formatText(t.item.get("model"), t);
            e.innerHTML=i, (0, be.A)(this.container, {
              visibility:"visible"
            }), this.updatePosition(t)
          }
        }, hideTooltip:function(){
          (0, be.A)(this.container, {
            visibility:"hidden"
          })
        }, updatePosition:function(t){
          var e=this.get("shouldBegin"), i=this, o=i.width, n=i.height, a=i.container, r=i.graph;
          if(e(t, this)){
            var s=r.getPointByClient(t.clientX, t.clientY), l=r.getCanvasByPoint(s.x, s.y), h=l.x, d=l.y, c=a.getBoundingClientRect();
            h>o/2?h-=c.width:h+=this.offset, d>n/2?d-=c.height:d+=this.offset;
            var g="".concat(h, "px"), u="".concat(d, "px");
            (0, be.A)(this.container, {
              left:g, top:u, visibility:"visible"
            })
          }
          else(0, be.A)(a, {
            visibility:"hidden"
          })
        }, createTooltip:function(t){
          var e=t.get("el");
          e.style.position="relative";
          var i=(0, f.A)('<div class="g6-tooltip g6-'.concat(this.item, '-tooltip"></div>'));
          return e.parentNode.appendChild(i), (0, be.A)(i, {
            position:"absolute", visibility:"visible"
          }), this.width=t.get("width"), this.height=t.get("height"), this.container=i, this.graph.get("tooltips").push(i), i
        }
      }, Se=(0, s.__assign)({
        getDefaultCfg:function(){
          return{
            item:"node", offset:12, formatText:function(t){
              return t.label
            }
          }
        }, getEvents:function(){
          return{
            "node:mouseenter":"onMouseEnter", "node:mouseleave":"onMouseLeave", "node:mousemove":"onMouseMove", afterremoveitem:"onMouseLeave"
          }
        }
      }, xe), we=(0, s.__assign)({
        getDefaultCfg:function(){
          return{
            item:"edge", offset:12, formatText:function(t){
              return"source: ".concat(t.source, " target: ").concat(t.target)
            }
          }
        }, getEvents:function(){
          return{
            "edge:mouseenter":"onMouseEnter", "edge:mouseleave":"onMouseLeave", "edge:mousemove":"onMouseMove", afterremoveitem:"onMouseLeave"
          }
        }
      }, xe);
      var ke="click", Me=[
        "click", "dblclick"
      ];
      const Ce={
        getDefaultCfg:function(){
          return{
            trigger:ke, onChange:function(){
            }
          }
        }, getEvents:function(){
          var t, e;
          return Me.includes(this.trigger)?e=this.trigger:(e=ke, console.warn("Behavior collapse-expand 的 trigger 参数不合法，请输入 'click' 或 'dblclick'")), (t={
          })[
            "node:".concat(e)
          ]
          ="onNodeClick", t.touchstart="onNodeClick", t
        }, onNodeClick:function(t){
          var e=this;
          if("click"===this.trigger){
            if(this.timer)return clearTimeout(this.timer), void(this.timer=0);
            this.timer=setTimeout((function(){
              e.toggle(t), clearTimeout(e.timer), e.timer=0
            }), 200)
          }
          else this.toggle(t)
        }, toggle:function(t){
          var e=t.item;
          if(e){
            var i=this.graph.findDataById(e.get("id"));
            if(i){
              var o=i.children;
              if(o&&0!==o.length){
                var n=!i.collapsed;
                this.shouldBegin(t, n, this)&&(i.collapsed=n, e.getModel().collapsed=n, this.graph.emit("itemcollapsed", {
                  item:t.item, collapsed:n
                }), this.shouldUpdate(t, n, this)&&(this.onChange(e, n, this), this.graph.layout()))
              }
            }
          }
        }
      };
      var _e=U.calculationItemsBBox, Ie=function t(e, i){
        if(!1!==i(e)&&e){
          var o=e.get("combos");
          if(0===o.length)return!1;
          (0, p.each)(o, (function(e){
            t(e, i)
          }))
        }
      };
      const Pe={
        getDefaultCfg:function(){
          return{
            enableDelegate:!1, delegateStyle:{
            }, onlyChangeComboSize:!1, activeState:"", selectedState:"selected", enableStack:!0
          }
        }, getEvents:function(){
          return{
            "combo:mousedown":"onMouseDown", "combo:dragstart":"onDragStart", "combo:drag":"onDrag", "combo:dragend":"onDragEnd", "combo:drop":"onDrop", "node:drop":"onNodeDrop", "combo:dragenter":"onDragEnter", "combo:dragleave":"onDragLeave"
          }
        }, validationCombo:function(t){
          var e=t.item;
          return!(!e||e.destroyed)&&(!!this.shouldUpdate(t, this)&&"combo"===e.getType())
        }, onMouseDown:function(t){
          this.origin={
            x:t.x, y:t.y
          }
        }, onDragStart:function(t){
          var e=this, i=this.graph, o=t.item;
          if(this.currentShouldEnd=!0, this.validationCombo(t)){
            this.targets=[
            ];
            var n=i.findAllByState("combo", this.selectedState), a=o.get("id");
            0===n.filter((function(t){
              var e=t.get("id");
              return a===e
            })).length?this.targets.push(o):this.targets=n;
            var r=[
            ];
            this.targets.forEach((function(t){
              var e=t.getModel(), i=e.x, o=e.y, n=e.id;
              r.push({
                x:i, y:o, id:n
              })
            })), this.set("beforeDragItems", r), this.activeState&&this.targets.map((function(t){
              var o=t.getModel();
              if(o.parentId){
                var n=i.findById(o.parentId);
                n&&i.setItemState(n, e.activeState, !0)
              }
            })), this.point={
            }, this.originPoint={
            }, this.currentItemChildCombos=[
            ], Ie(o, (function(t){
              if(t.destroyed)return!1;
              var i=t.getModel();
              return e.currentItemChildCombos.push(i.id), !0
            }))
          }
        }, onDrag:function(t){
          var e=this;
          if(this.origin&&this.validationCombo(t))if(this.enableDelegate)this.updateDelegate(t);
          else{
            if(this.activeState){
              var i=this.graph, o=t.item, n=o.getModel(), a=i.getCombos(), r=o.getBBox(), s=r.centerX, l=r.centerY, h=r.width;
              a.filter((function(t){
                var i=t.getModel();
                return n.parentId, i.id!==n.id&&!e.currentItemChildCombos.includes(i.id)
              })).map((function(t){
                var o=t.getBBox(), n=o.centerX, a=o.centerY, r=o.width, d=s-n, c=l-a, g=2*Math.sqrt(d*d+c*c);
                h+r-g>.8*h?i.setItemState(t, e.activeState, !0):i.setItemState(t, e.activeState, !1)
              }))
            }
            (0, p.each)(this.targets, (function(i){
              e.updateCombo(i, t)
            })), this.onlyChangeComboSize&&this.updateParentCombos()
          }
        }, updatePositions:function(t, e){
          var i=this;
          (this.enableDelegate||e)&&(0, p.each)(this.targets, (function(o){
            i.updateCombo(o, t, e)
          }))
        }, onDrop:function(t){
          var e=this, i=t.item;
          if(this.currentShouldEnd=this.shouldEnd(t, i, this), this.updatePositions(t, !this.currentShouldEnd), this.currentShouldEnd&&i&&this.targets&&!i.destroyed){
            var o=this.graph, n=i.getModel();
            this.targets.map((function(t){
              t.getModel().parentId!==n.id?(e.activeState&&o.setItemState(i, e.activeState, !1), e.onlyChangeComboSize?o.updateCombo(t):o.updateComboTree(t, n.id, !1)):o.updateCombo(i)
            })), this.end(i, t), this.endComparison=!0
          }
        }, onNodeDrop:function(t){
          var e=this;
          if(this.targets&&0!==this.targets.length){
            var i=this.graph, o=t.item.getModel().comboId, n=o?i.findById(o):void 0;
            if(this.currentShouldEnd=this.shouldEnd(t, n, this), this.updatePositions(t, !this.currentShouldEnd), this.currentShouldEnd){
              var a;
              if(o){
                if(this.activeState){
                  var r=i.findById(o);
                  i.setItemState(r, this.activeState, !1)
                }
                this.targets.map((function(t){
                  e.onlyChangeComboSize?i.updateCombo(t):o!==t.getID()&&(a=i.findById(o), o!==t.getModel().parentId&&i.updateComboTree(t, o, !1))
                }))
              }
              else this.targets.map((function(t){
                e.onlyChangeComboSize?i.updateCombo(t):t.getModel().comboId&&i.updateComboTree(t, void 0, !1)
              }));
              this.endComparison=!0, this.end(a, t)
            }
          }
        }, onDragEnter:function(t){
          if(this.origin&&this.validationCombo(t)){
            var e=t.item, i=this.graph;
            this.activeState&&i.setItemState(e, this.activeState, !0)
          }
        }, onDragLeave:function(t){
          if(this.origin&&this.validationCombo(t)){
            var e=t.item, i=this.graph;
            this.activeState&&i.setItemState(e, this.activeState, !1)
          }
        }, onDragEnd:function(t){
          if(this.targets&&0!==this.targets.length){
            var e=t.item;
            this.currentShouldEnd&&this.updatePositions(t);
            var i=this.getParentCombo(e.getModel().parentId), o=this.graph;
            i&&this.activeState&&o.setItemState(i, this.activeState, !1), this.end(void 0, t)
          }
        }, end:function(t, e){
          var i=this;
          if(this.origin){
            var o=this.graph;
            if(this.delegateShape)o.get("delegateGroup").clear(), this.delegateShape=null;
            if(t&&this.activeState&&o.setItemState(t, this.activeState, !1), !t){
              var n=o.get("enabledStack")&&this.enableStack, a={
                before:{
                  nodes:[
                  ], edges:[
                  ], combos:[
                  ].concat(this.get("beforeDragItems"))
                }, after:{
                  nodes:[
                  ], edges:[
                  ], combos:[
                  ]
                }
              };
              this.targets.map((function(t){
                if(i.onlyChangeComboSize){
                  o.updateCombo(t);
                  var e=t.getModel(), r=e.x, s=e.y, l=e.id;
                  a.after.combos.push({
                    x:r, y:s, id:l
                  }), o.pushStack("update", a)
                }
                else o.updateComboTree(t, void 0, n)
              }))
            }
            this.point=[
            ], this.origin=null, this.originPoint=null, this.targets.length=0
          }
        }, traverse:function(t, e, i){
          var o=this;
          if(void 0===i&&(i={
          }), !1!==e(t, i)&&t){
            var n=t.get("combos");
            (0, p.each)(n, (function(t){
              o.traverse(t, e, i)
            }));
            var a=t.get("nodes");
            (0, p.each)(a, (function(t){
              o.traverse(t, e, i)
            }))
          }
        }, updateCombo:function(t, e, i){
          this.updateSingleItem(t, e, i);
          var o={
          };
          this.traverse(t, (function(t, e){
            return!t.destroyed&&(t.getEdges().forEach((function(t){
              return e[
                t.getID()
              ]
              =t
            })), !0)
          }), o), Object.values(o).forEach((function(t){
            return t.refresh()
          }))
        }, updateSingleItem:function(t, e, i){
          var o=this.origin, n=this.graph, a=t.getModel(), r=t.get("id");
          this.point[
            r
          ]
          ||(this.point[
            r
          ]
          ={
            x:a.x, y:a.y
          });
          var s=e.x-o.x+this.point[
            r
          ].x, l=e.y-o.y+this.point[
            r
          ].y;
          i&&(s+=o.x-e.x, l+=o.y-e.y), n.updateItem(t, {
            x:s, y:l
          }, !1)
        }, getParentCombo:function(t){
          var e=this.graph;
          if(t){
            var i=e.findById(t);
            if(i)return i
          }
        }, updateDelegate:function(t){
          var e=this.graph;
          if(this.delegateShape){
            var i=t.x-this.origin.x+this.originPoint.minX, o=t.y-this.origin.y+this.originPoint.minY;
            this.delegateShape.attr({
              x:i, y:o
            })
          }
          else{
            var n=e.get("delegateGroup"), a=null, r=(a=this.targets.length>1?_e(this.targets):this.targets[
              0
            ].getBBox()).x, l=a.y, h=a.width, d=a.height, c=a.minX, g=a.minY;
            this.originPoint={
              x:r, y:l, width:h, height:d, minX:c, minY:g
            };
            var u=(0, s.__assign)((0, s.__assign)({
            }, M.delegateStyle), this.delegateStyle);
            this.delegateShape=n.addShape("rect", {
              attrs:(0, s.__assign)({
                width:a.width, height:a.height, x:a.x, y:a.y
              }, u), name:"combo-delegate-shape"
            }), this.delegateShape.set("capture", !1), this.delegate=this.delegateShape
          }
        }, updateParentCombos:function(){
          var t=this.graph, e=this.targets, i={
          };
          null==e||e.forEach((function(e){
            var o=e.getModel().parentId;
            o&&(i[
              o
            ]
            =t.findById(o))
          })), Object.values(i).forEach((function(e){
            e&&t.updateCombo(e)
          }))
        }
      };
      var Ee="dblclick", Be=[
        "click", "dblclick"
      ];
      const Ne={
        getDefaultCfg:function(){
          return{
            trigger:Ee, relayout:!0
          }
        }, getEvents:function(){
          var t, e;
          return Be.includes(this.trigger)?e=this.trigger:(e=Ee, console.warn("Behavior collapse-expand-group 的 trigger 参数不合法，请输入 'click' 或 'dblclick'")), (t={
          })[
            "combo:".concat(e)
          ]
          ="onComboClick", t
        }, onComboClick:function(t){
          var e=t.item, i=this.graph, o=this.relayout;
          if(e&&!e.destroyed&&"combo"===e.getType()){
            var n=e.getModel().id;
            n&&(i.collapseExpandCombo(n), o&&i.get("layout")?i.layout():i.refreshPositions())
          }
        }
      };
      var Le=U.isPolygonsIntersect, Te=U.pathToPoints, Ae="shift", Fe=[
        "drag", "shift", "ctrl", "alt", "control"
      ];
      var De="click", Oe=[
        "click", "drag"
      ], ze=void 0, Ye=[
        "shift", "ctrl", "control", "alt", "meta", void 0
      ];
      var Xe="ctrl", We=[
        "shift", "ctrl", "alt", "control"
      ];
      var Re=[
        "shift", "ctrl", "alt", "control", "meta"
      ];
      var Ue={
        "drag-canvas":oe, "zoom-canvas":ve, "drag-node":ne, "activate-relations":re, "brush-select":ge, "click-select":fe, "lasso-select":{
          getDefaultCfg:function(){
            return{
              delegateStyle:{
                fill:"#EEF6FF", fillOpacity:.4, stroke:"#DDEEFE", lineWidth:1
              }, onSelect:function(){
              }, onDeselect:function(){
              }, shouldDeselect:void 0, selectedState:"selected", trigger:Ae, includeEdges:!0, selectedEdges:[
              ], selectedNodes:[
              ]
            }
          }, getEvents:function(){
            return Fe.indexOf(this.trigger.toLowerCase())>-1||(this.trigger=Ae, console.warn("Behavior lasso-select 的 trigger 参数不合法，请输入 'drag'、'shift'、'ctrl' 或 'alt'")), "drag"===this.trigger?{
              dragstart:"onDragStart", drag:"onDragMove", dragend:"onDragEnd", "canvas:click":"clearStates"
            }
            :{
              dragstart:"onDragStart", drag:"onDragMove", dragend:"onDragEnd", keyup:"onKeyUp", keydown:"onKeyDown", "canvas:click":"clearStates"
            }
          }, onDragStart:function(t){
            var e=this.lasso;
            t.item||("drag"===this.trigger||this.keydown)&&(this.selectedNodes&&0!==this.selectedNodes.length&&this.clearStates("dragstart"), e||(e=this.createLasso()), this.dragging=!0, this.originPoint={
              x:t.x, y:t.y
            }, this.points.push(this.originPoint), e.show())
          }, onDragMove:function(t){
            this.dragging&&("drag"===this.trigger||this.keydown)&&(this.points.push({
              x:t.x, y:t.y
            }), this.updateLasso(t))
          }, onDragEnd:function(t){
            (this.lasso||this.dragging)&&("drag"===this.trigger||this.keydown)&&(this.points.push(this.originPoint), this.getSelectedItems(), this.lasso.remove(!0), this.lasso=null, this.points=[
            ], this.dragging=!1)
          }, getLassoPath:function(){
            var t=this.points, e=[
            ];
            return t.length&&(t.forEach((function(t, i){
              0===i?e.push([
                "M", t.x, t.y
              ]):e.push([
                "L", t.x, t.y
              ])
            })), e.push([
              "L", t[
                0
              ].x, t[
                0
              ].y
            ])), e
          }, clearStates:function(t){
            void 0===t&&(t="canvas:click");
            var e=this, i=e.graph, o=e.selectedState, n=e.shouldDeselect, a=i.findAllByState("node", o), r=i.findAllByState("edge", o);
            n&&!n({
              action:t, nodes:a, edges:r
            })||(a.forEach((function(t){
              return i.setItemState(t, o, !1)
            })), r.forEach((function(t){
              return i.setItemState(t, o, !1)
            }))), this.onDeselect&&this.onDeselect(this.selectedNodes, this.selectedEdges), this.selectedNodes=[
            ], this.selectedEdges=[
            ], i.emit("nodeselectchange", {
              selectedItems:{
                nodes:[
                ], edges:[
                ]
              }, select:!1
            })
          }, getSelectedItems:function(){
            var t=this, e=this.graph, i=this.shouldUpdate, o=this.points.map((function(t){
              return[
                e.getCanvasByPoint(t.x, t.y).x, e.getCanvasByPoint(t.x, t.y).y
              ]
            })), n=this.selectedState, a=[
            ], r=[
            ];
            e.getNodes().forEach((function(s){
              if(s.isVisible()&&function(t, e){
                var i, o=t.getKeyShape();
                if("path"===t.get("type"))i=Te(o.attr("path"));
                else{
                  var n=o.getCanvasBBox();
                  i=[
                    [
                      n.minX, n.minY
                    ], [
                      n.maxX, n.minY
                    ], [
                      n.maxX, n.maxY
                    ], [
                      n.minX, n.maxY
                    ]
                  ]
                }
                return Le(e, i)
              }
              (s, o)&&i(s, "select", t)){
                a.push(s);
                var l=s.getModel();
                r.push(l.id), e.setItemState(s, n, !0)
              }
            }));
            var s=[
            ];
            this.includeEdges&&a.forEach((function(o){
              o.getOutEdges().forEach((function(o){
                if(o.isVisible()){
                  var n=o.getModel(), a=n.source, l=n.target;
                  r.includes(a)&&r.includes(l)&&i(o, "select", t)&&(s.push(o), e.setItemState(o, t.selectedState, !0))
                }
              }))
            })), this.selectedEdges=s, this.selectedNodes=a, this.onSelect&&this.onSelect(a, s), e.emit("nodeselectchange", {
              selectedItems:{
                nodes:a, edges:s
              }, select:!0
            })
          }, createLasso:function(){
            var t=this.graph.get("delegateGroup").addShape("path", {
              attrs:(0, s.__assign)({
                path:[
                ]
              }, this.delegateStyle), capture:!1, name:"lasso-shape"
            });
            return this.lasso=t, this.delegate=t, this.points=[
            ], t
          }, updateLasso:function(t){
            this.lasso.attr({
              path:this.getLassoPath()
            })
          }, onKeyDown:function(t){
            var e=t.key;
            e&&(e.toLowerCase()===this.trigger.toLowerCase()?this.keydown=!0:this.keydown=!1)
          }, onKeyUp:function(){
            this.lasso&&(this.lasso.remove(!0), this.lasso=null, this.points=[
            ], this.dragging=!1), this.keydown=!1
          }
        }, tooltip:Se, "edge-tooltip":we, "collapse-expand":Ce, "drag-combo":Pe, "collapse-expand-combo":Ne, "create-edge":{
          getDefaultCfg:function(){
            return{
              trigger:De, key:ze, edgeConfig:{
              }, getEdgeConfig:void 0
            }
          }, getEvents:function(){
            var t, e=this;
            return Oe.indexOf(e.trigger.toLowerCase())>-1||(e.trigger=De, console.warn("Behavior create-edge 的 trigger 参数不合法，请输入 'click'，'drag'")), e.key&&-1===Ye.indexOf(e.key.toLowerCase())&&(e.trigger=ze, console.warn("Behavior create-edge 的 key 参数不合法，请输入 'shift'，'ctrl'，'alt'，'control'，或 undefined")), "drag"===e.trigger?t={
              "node:dragstart":"onClick", "combo:dragstart":"onClick", drag:"updateEndPoint", "node:drop":"onClick", "combo:drop":"onClick", dragend:"onDragEnd"
            }
            :"click"===e.trigger&&(t={
              "node:click":"onClick", mousemove:"updateEndPoint", "edge:click":"cancelCreating", "canvas:click":"cancelCreating", "combo:click":"onClick"
            }), e.key&&(t.keydown="onKeyDown", t.keyup="onKeyUp"), t
          }, onDragEnd:function(t){
            var e=this;
            if(!e.key||e.keydown){
              var i=t.item;
              i&&i.getID()!==e.source&&"node"===i.getType()||e.cancelCreating({
                item:e.edge, x:t.x, y:t.y
              })
            }
          }, onClick:function(t){
            var e=this;
            if(!e.key||e.keydown){
              var i=t.item, o=e.graph, n=i.getModel(), a=e.getEdgeConfig;
              if(e.addingEdge&&e.edge){
                if(!e.shouldEnd(t, e))return;
                var r=void 0;
                r=a&&(0, p.isFunction)(a)?a({
                  source:e.source, target:n.id
                }, e):e.edgeConfig;
                var l=(0, s.__assign)({
                  target:n.id
                }, r);
                if(e.source===n.id&&(l.type="loop"), o.emit("beforecreateedge", {
                }), o.updateItem(e.edge, l, !1), o.get("enabledStack")){
                  var h=(0, s.__assign)((0, s.__assign)({
                  }, e.edge.getModel()), {
                    itemType:"edge"
                  }), d={
                  };
                  d.edges=[
                    h
                  ], o.pushStack("add", {
                    before:{
                    }, after:d
                  })
                }
                o.emit("aftercreateedge", {
                  edge:e.edge
                }), e.edge.getKeyShape().set("capture", !0), e.edge=null, e.addingEdge=!1
              }
              else{
                if(!e.shouldBegin(t, e))return;
                r=void 0;
                r=a&&(0, p.isFunction)(a)?a({
                  source:n.id, target:n.id
                }, e):e.edgeConfig, e.edge=o.addItem("edge", (0, s.__assign)({
                  source:n.id, target:n.id
                }, r), !1), e.source=n.id, e.addingEdge=!0, e.edge.getKeyShape().set("capture", !1)
              }
            }
          }, updateEndPoint:function(t){
            var e=this;
            if(!e.key||e.keydown){
              e.edge&&e.edge.destroyed&&e.cancelCreating({
                item:e.edge
              });
              var i={
                x:t.x, y:t.y
              };
              e.graph.findById(e.source)?e.addingEdge&&e.edge&&e.graph.updateItem(e.edge, {
                target:i
              }, !1):e.addingEdge=!1
            }
          }, cancelCreating:function(t){
            var e, i, o=this;
            if(!o.key||o.keydown){
              var n=o.graph, a=t.item;
              return o.addingEdge&&(o.edge===a||(null===(i=null===(e=t.target)||void 0===e?void 0:e.isCanvas)||void 0===i?void 0:i.call(e)))?(o.edge&&!o.edge.destroyed&&n.removeItem(o.edge, !1), o.edge=null, void(o.addingEdge=!1)):void 0
            }
          }, onKeyDown:function(t){
            var e=this, i=t.key;
            i&&(i.toLowerCase()===e.key.toLowerCase()?e.keydown=!0:e.keydown=!1)
          }, onKeyUp:function(){
            var t=this;
            t.addingEdge&&t.edge&&(t.graph.removeItem(t.edge, !1), t.addingEdge=!1, t.edge=null), this.keydown=!1
          }
        }, "shortcuts-call":{
          getDefaultCfg:function(){
            return{
              trigger:Xe, combinedKey:"1", functionName:"fitView", functionParams:[
              ]
            }
          }, getEvents:function(){
            return We.indexOf(this.trigger.toLowerCase())>-1||(this.trigger=Xe, console.warn("Behavior shortcuts-fit-view 的 trigger 参数 '".concat(this.trigger, "' 不合法，请输入 'drag'、'shift'、'ctrl' 或 'alt'"))), this.combinedKey===this.trigger&&(this.combinedKey=void 0), {
              keyup:"onKeyUp", keydown:"onKeyDown"
            }
          }, onKeyDown:function(t){
            var e=t.key;
            if(e){
              var i=this.trigger.toLowerCase(), o=e.toLowerCase();
              this.triggerKeydown||(this.triggerKeydown=o===i||"control"===o&&"ctrl"===i||"ctrl"===o&&"control"===i);
              var n=this.graph;
              if(!n[
                this.functionName
              ])return console.warn("Behavior shortcuts-fit-view 的 functionName 参数 '".concat(this.functionName, "' 不合法，它不是 Graph 的一个函数名")), {
              };
              if(!this.triggerKeydown||this.combinedKey){
                var a=this.combinedKey.toLowerCase();
                this.triggerKeydown&&(o===a||"control"===o&&"ctrl"===a||"ctrl"===o&&"control"===a)&&(this.functionParams&&this.functionParams.length?n[
                  this.functionName
                ].apply(n, this.functionParams):n[
                  this.functionName
                ]
                ())
              }
              else this.functionParams&&this.functionParams.length?n[
                this.functionName
              ].apply(n, this.functionParams):n[
                this.functionName
              ]
              ()
            }
          }, onKeyUp:function(){
            this.brush&&(this.brush.remove(!0), this.brush=null, this.dragging=!1), this.triggerKeydown=!1
          }
        }, "scroll-canvas":{
          getDefaultCfg:function(){
            return{
              direction:"both", enableOptimize:!1, zoomKey:"ctrl", scalableRange:0, allowDragOnItem:!0
            }
          }, getEvents:function(){
            return this.zoomKey&&-1!==Re.indexOf(this.zoomKey)||(this.zoomKey="ctrl"), {
              wheel:"onWheel"
            }
          }, onWheel:function(t){
            var e=this;
            if(this.allowDrag(t)){
              var i=this.graph, o=Array.isArray(this.zoomKey)?[
              ].concat(this.zoomKey):[
                this.zoomKey
              ];
              if(o.includes("control")&&o.push("ctrl"), o.some((function(e){
                return t[
                  "".concat(e, "Key")
                ]
              }))){
                var n=i.get("canvas").getPointByClient(t.clientX, t.clientY), a=i.getZoom();
                t.wheelDelta>0?a+=.05*a:a-=.05*a, i.zoomTo(a, {
                  x:n.x, y:n.y
                })
              }
              else{
                var r=t.deltaX||t.movementX, s=t.deltaY||t.movementY;
                !s&&navigator.userAgent.indexOf("Firefox")>-1&&(s=125*-t.wheelDelta/3);
                var l=this.graph.get("width"), h=this.graph.get("height"), d=this.graph.get("canvas").getCanvasBBox(), c=this.scalableRange, g=this.scalableRange;
                c<1&&c>-1&&(c*=l, g*=h);
                var u=d.minX, p=d.maxX, f=d.minY, y=d.maxY;
                r>0?p<-c?r=0:p-r<-c&&(r=p+c):r<0&&(u>l+c?r=0:u-r>l+c&&(r=u-(l+c))), s>0?y<-g?s=0:y-s<-g&&(s=y+g):s<0&&(f>h+g?s=0:f-s>h+g&&(s=f-(h+g))), "x"===this.get("direction")?s=0:"y"===this.get("direction")&&(r=0), i.translate(-r, -s)
              }
              if(t.preventDefault(), this.get("enableOptimize")){
                var m=this.get("optimizeZoom"), v=this.get("optimized"), b=i.getNodes(), x=i.getEdges(), S=b.length, w=x.length;
                if(!v){
                  for(var k=0;
                  k<S;
                  k++){
                    var M=b[
                      k
                    ];
                    if(!M.destroyed)for(var C=(P=M.get("group").get("children")).length, _=0;
                    _<C;
                    _++){
                      (E=P[
                        _
                      ]).destoryed||E.get("isKeyShape")||(E.set("ori-visibility", E.get("ori-visibility")||E.get("visible")), E.hide())
                    }
                  }
                  for(var I=0;
                  I<w;
                  I++){
                    var P;
                    for(C=(P=x[
                      I
                    ].get("group").get("children")).length, _=0;
                    _<C;
                    _++){
                      var E;
                      (E=P[
                        _
                      ]).set("ori-visibility", E.get("ori-visibility")||E.get("visible")), E.hide()
                    }
                  }
                  this.set("optimized", !0)
                }
                clearTimeout(this.get("timeout"));
                var B=setTimeout((function(){
                  var t=i.getZoom();
                  if(e.get("optimized")){
                    e.set("optimized", !1);
                    for(var o=0;
                    o<S;
                    o++){
                      var n=b[
                        o
                      ], a=(h=n.get("group").get("children")).length;
                      if(t<m)(s=(d=n.getKeyShape()).get("ori-visibility"))&&d.show();
                      else for(var r=0;
                      r<a;
                      r++){
                        var s=(g=h[
                          r
                        ]).get("ori-visibility");
                        !g.get("visible")&&s&&s&&g.show()
                      }
                    }
                    for(var l=0;
                    l<w;
                    l++){
                      var h, d, c=x[
                        l
                      ];
                      a=(h=c.get("group").get("children")).length;
                      if(t<m)(s=(d=c.getKeyShape()).get("ori-visibility"))&&d.show();
                      else for(r=0;
                      r<a;
                      r++){
                        var g;
                        if(!(g=h[
                          r
                        ]).get("visible"))(s=g.get("ori-visibility"))&&g.show()
                      }
                    }
                  }
                }), 100);
                this.set("timeout", B)
              }
            }
          }, allowDrag:function(t){
            var e, i, o=t.target, n=o&&o.isCanvas&&o.isCanvas();
            if((0, p.isBoolean)(this.allowDragOnItem)&&!this.allowDragOnItem&&!n)return!1;
            if((0, p.isObject)(this.allowDragOnItem)){
              var a=this.allowDragOnItem, r=a.node, s=a.edge, l=a.combo, h=null===(i=null===(e=t.item)||void 0===e?void 0:e.getType)||void 0===i?void 0:i.call(e);
              if(!r&&"node"===h)return!1;
              if(!s&&"edge"===h)return!1;
              if(!l&&"combo"===h)return!1
            }
            return!0
          }
        }
      };
      (0, p.each)(Ue, (function(t, e){
        (0, l.Gv)(e, t)
      }));
      var je=(0, s.__assign)((0, s.__assign)({
      }, h), d), Ge=(bt.Grid, bt.Minimap, bt.Bundling, bt.Menu, bt.Fisheye), Je=(bt.ToolBar, bt.Tooltip, bt.TimeBar), Ve=bt.ImageMinimap, Ke=bt.EdgeFilterLens, Ze=bt.SnapLine, qe=(bt.Legend, bt.Annotation);
      const He={
        version:M.version, Graph:gt, TreeGraph:vt, Util:U, Layout:B.Layouts, TreeLayout:G, registerLayout:function(t, e){
          e.isCustomLayout=!0, B.Layouts[
            t
          ]
          =(0, B.registerLayout)(t, e)
        }, Global:M, registerBehavior:l.Gv, registerCombo:l.KT, registerEdge:l.Bg, registerNode:l.Qp, Minimap:bt.Minimap, Grid:bt.Grid, Bundling:bt.Bundling, Menu:bt.Menu, ToolBar:bt.ToolBar, Tooltip:bt.Tooltip, Legend:bt.Legend, TimeBar:Je, SnapLine:Ze, Fisheye:Ge, ImageMinimap:Ve, EdgeFilterLens:Ke, Annotation:qe, Algorithm:je, Arrow:l.i3, Marker:l.pH, Shape:l.yp
      }
    }
  }
]);
