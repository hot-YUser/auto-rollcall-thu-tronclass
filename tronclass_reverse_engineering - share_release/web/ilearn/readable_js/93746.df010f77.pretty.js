(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    93746
  ], {
    4193:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__assign||function(){
        return(i=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ComboCombinedLayout=void 0;
      var a=n(255573), u=n(346271), c=n(781422), s=n(828352), d=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.center=[
            0, 0
          ], n.nodes=[
          ], n.edges=[
          ], n.combos=[
          ], n.comboEdges=[
          ], n.comboPadding=10, n.comboTrees=[
          ], n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.center;
          if(t&&0!==t.length){
            if(1===t.length)return t[
              0
            ].x=n[
              0
            ], t[
              0
            ].y=n[
              1
            ], void(e.onLayoutEnd&&e.onLayoutEnd());
            e.initVals(), e.run(), e.onLayoutEnd&&e.onLayoutEnd()
          }
          else e.onLayoutEnd&&e.onLayoutEnd()
        }, t.prototype.run=function(){
          var e, t=this, n=t.nodes, r=t.edges, o=t.combos, u=t.comboEdges, d=t.center, l={
          };
          n.forEach((function(e){
            l[
              e.id
            ]
            =e
          }));
          var f={
          };
          o.forEach((function(e){
            f[
              e.id
            ]
            =e
          }));
          var h=t.getInnerGraphs(l), v=[
          ], p=[
          ], g={
          }, y=!0;
          this.comboTrees.forEach((function(e){
            var t=h[
              e.id
            ];
            if(t){
              var n=i(i({
              }, e), {
                x:t.x||f[
                  e.id
                ].x, y:t.y||f[
                  e.id
                ].y, fx:t.fx||f[
                  e.id
                ].fx, fy:t.fy||f[
                  e.id
                ].fy, mass:t.mass||f[
                  e.id
                ].mass, size:t.size
              });
              p.push(n), isNaN(n.x)||0===n.x||isNaN(n.y)||0===n.y?(n.x=100*Math.random(), n.y=100*Math.random()):y=!1, v.push(e.id), (0, c.traverseTreeUp)(e, (function(t){
                return t.id!==e.id&&(g[
                  t.id
                ]
                =e.id), !0
              }))
            }
          })), n.forEach((function(e){
            if(!e.comboId||!f[
              e.comboId
            ]){
              var t=i({
              }, e);
              p.push(t), isNaN(t.x)||0===t.x||isNaN(t.y)||0===t.y?(t.x=100*Math.random(), t.y=100*Math.random()):y=!1, v.push(e.id)
            }
          }));
          var m=[
          ];
          if(r.concat(u).forEach((function(e){
            var t=g[
              e.source
            ]
            ||e.source, n=g[
              e.target
            ]
            ||e.target;
            t!==n&&v.includes(t)&&v.includes(n)&&m.push({
              source:t, target:n
            })
          })), null==p?void 0:p.length){
            if(1===p.length)p[
              0
            ].x=d[
              0
            ], p[
              0
            ].y=d[
              1
            ];
            else{
              var x={
                nodes:p, edges:m
              }, b=this.outerLayout||new s.GForceLayout({
                gravity:1, factor:4, linkDistance:function(e, t, n){
                  var r, o, i=(((null===(r=t.size)||void 0===r?void 0:r[
                    0
                  ])||30)+((null===(o=n.size)||void 0===o?void 0:o[
                    0
                  ])||30))/2;
                  return Math.min(1.5*i, 700)
                }
              }), _=null===(e=b.getType)||void 0===e?void 0:e.call(b);
              if(b.updateCfg({
                center:d, kg:5, preventOverlap:!0, animate:!1
              }), y&&a.FORCE_LAYOUT_TYPE_MAP[
                _
              ])(p.length<100?new s.MDSLayout:new s.GridLayout).layout(x);
              b.layout(x)
            }
            p.forEach((function(e){
              var t=h[
                e.id
              ];
              if(t)t.visited=!0, t.x=e.x, t.y=e.y, t.nodes.forEach((function(t){
                t.x+=e.x, t.y+=e.y
              }));
              else{
                var n=l[
                  e.id
                ];
                n&&(n.x=e.x, n.y=e.y)
              }
            }))
          }
          for(var w=Object.keys(h), E=function(e){
            var t=w[
              e
            ], n=h[
              t
            ];
            if(!n)return"continue";
            n.nodes.forEach((function(e){
              n.visited||(e.x+=n.x||0, e.y+=n.y||0), l[
                e.id
              ]
              &&(l[
                e.id
              ].x=e.x, l[
                e.id
              ].y=e.y)
            })), f[
              t
            ]
            &&(f[
              t
            ].x=n.x, f[
              t
            ].y=n.y)
          }, D=w.length-1;
          D>=0;
          D--)E(D);
          return{
            nodes:n, edges:r, combos:o, comboEdges:u
          }
        }, t.prototype.getInnerGraphs=function(e){
          var t=this, n=t.comboTrees, r=t.nodeSize, o=t.edges, a=t.comboPadding, u=t.spacing, d={
          }, l=this.innerLayout||new s.ConcentricLayout({
            type:"concentric", sortBy:"id"
          });
          return l.center=[
            0, 0
          ], l.preventOverlap=!0, l.nodeSpacing=u, (n||[
          ]).forEach((function(t){
            (0, c.traverseTreeUp)(t, (function(t){
              var n, u=(null==a?void 0:a(t))||10;
              if((0, c.isArray)(u)&&(u=Math.max.apply(Math, u)), null===(n=t.children)||void 0===n?void 0:n.length){
                var s=t.children.map((function(t){
                  if("combo"===t.itemType)return d[
                    t.id
                  ];
                  var n=e[
                    t.id
                  ]
                  ||{
                  };
                  return i(i({
                  }, n), t)
                })), f=s.map((function(e){
                  return e.id
                })), h={
                  nodes:s, edges:o.filter((function(e){
                    return f.includes(e.source)&&f.includes(e.target)
                  }))
                }, v=1/0;
                s.forEach((function(e){
                  var t;
                  e.size||(e.size=(null===(t=d[
                    e.id
                  ])||void 0===t?void 0:t.size)||(null==r?void 0:r(e))||[
                    30, 30
                  ]), (0, c.isNumber)(e.size)&&(e.size=[
                    e.size, e.size
                  ]), v>e.size[
                    0
                  ]
                  &&(v=e.size[
                    0
                  ]), v>e.size[
                    1
                  ]
                  &&(v=e.size[
                    1
                  ])
                })), l.layout(h);
                var p=(0, c.getLayoutBBox)(s), g=p.minX, y=p.minY, m=p.maxX, x=p.maxY, b={
                  x:(m+g)/2, y:(x+y)/2
                };
                h.nodes.forEach((function(e){
                  e.x-=b.x, e.y-=b.y
                }));
                var _=Math.max(m-g, v)+2*u, w=Math.max(x-y, v)+2*u;
                d[
                  t.id
                ]
                ={
                  id:t.id, nodes:s, size:[
                    _, w
                  ]
                }
              }
              else if("combo"===t.itemType){
                var E=u?[
                  2*u, 2*u
                ]
                :[
                  30, 30
                ];
                d[
                  t.id
                ]
                ={
                  id:t.id, nodes:[
                  ], size:E
                }
              }
              return!0
            }))
          })), d
        }, t.prototype.initVals=function(){
          var e, t, n=this, r=n.nodeSize, o=n.spacing;
          if(t=(0, c.isNumber)(o)?function(){
            return o
          }
          :(0, c.isFunction)(o)?o:function(){
            return 0
          }, this.spacing=t, r)if((0, c.isFunction)(r))e=function(e){
            var n=r(e), o=t(e);
            return(0, c.isArray)(e.size)?((e.size[
              0
            ]
            >e.size[
              1
            ]
            ?e.size[
              0
            ]
            :e.size[
              1
            ])+o)/2:((n||10)+o)/2
          };
          else if((0, c.isArray)(r)){
            var i=(r[
              0
            ]
            >r[
              1
            ]
            ?r[
              0
            ]
            :r[
              1
            ])/2;
            e=function(e){
              return i+t(e)/2
            }
          }
          else{
            var a=r/2;
            e=function(e){
              return a+t(e)/2
            }
          }
          else e=function(e){
            var n=t(e);
            return e.size?(0, c.isArray)(e.size)?((e.size[
              0
            ]
            >e.size[
              1
            ]
            ?e.size[
              0
            ]
            :e.size[
              1
            ])+n)/2:(0, c.isObject)(e.size)?((e.size.width>e.size.height?e.size.width:e.size.height)+n)/2:(e.size+n)/2:10+n/2
          };
          this.nodeSize=e;
          var u, s=n.comboPadding;
          u=(0, c.isNumber)(s)?function(){
            return s
          }
          :(0, c.isArray)(s)?function(){
            return Math.max.apply(null, s)
          }
          :(0, c.isFunction)(s)?s:function(){
            return 0
          }, this.comboPadding=u
        }, t.prototype.getType=function(){
          return"comboCombined"
        }, t
      }
      (u.Base);
      t.ComboCombinedLayout=d
    }, 8406:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(e){
        for(var t, n, o=[
        ], i=function(){
          var i=e.pop();
          o.push(i), null===(t=i.in.reverse())||void 0===t||t.forEach((function(e){
            return(t=i, function(e){
              e.merged||(void 0===e.barycenter||void 0===t.barycenter||e.barycenter>=t.barycenter)&&r(t, e)
            })(e);
            var t
          })), null===(n=i.out)||void 0===n||n.forEach((function(t){
            return(n=i, function(t){
              t.in.push(n), 0==--t.indegree&&e.push(t)
            })(t);
            var n
          }))
        };
        null==e?void 0:e.length;
        )i();
        var a=o.filter((function(e){
          return!e.merged
        })), u=[
          "vs", "i", "barycenter", "weight"
        ];
        return a.map((function(e){
          var t={
          };
          return null==u||u.forEach((function(n){
            void 0!==e[
              n
            ]
            &&(t[
              n
            ]
            =e[
              n
            ])
          })), t
        }))
      }, r=function(e, t){
        var n, r=0, o=0;
        e.weight&&(r+=e.barycenter*e.weight, o+=e.weight), t.weight&&(r+=t.barycenter*t.weight, o+=t.weight), e.vs=null===(n=t.vs)||void 0===n?void 0:n.concat(e.vs), e.barycenter=r/o, e.weight=o, e.i=Math.min(t.i, e.i), t.merged=!0
      };
      t.default=function(e, t){
        var r, o, i, a={
        };
        null==e||e.forEach((function(e, t){
          a[
            e.v
          ]
          ={
            i:t, indegree:0, in:[
            ], out:[
            ], vs:[
              e.v
            ]
          };
          var n=a[
            e.v
          ];
          void 0!==e.barycenter&&(n.barycenter=e.barycenter, n.weight=e.weight)
        })), null===(r=t.edges())||void 0===r||r.forEach((function(e){
          var t=a[
            e.v
          ], n=a[
            e.w
          ];
          void 0!==t&&void 0!==n&&(n.indegree++, t.out.push(a[
            e.w
          ]))
        }));
        var u=null===(i=(o=Object.values(a)).filter)||void 0===i?void 0:i.call(o, (function(e){
          return!e.indegree
        }));
        return n(u)
      }
    }, 15470:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(){
        function e(e){
          this.disp=[
          ], this.positions=e.positions, this.adjMatrix=e.adjMatrix, this.focusID=e.focusID, this.radii=e.radii, this.iterations=e.iterations||10, this.height=e.height||10, this.width=e.width||10, this.speed=e.speed||100, this.gravity=e.gravity||10, this.nodeSizeFunc=e.nodeSizeFunc, this.k=e.k||5, this.strictRadial=e.strictRadial, this.nodes=e.nodes
        }
        return e.prototype.layout=function(){
          var e=this, t=e.positions, n=[
          ], r=e.iterations, o=e.width/10;
          e.maxDisplace=o, e.disp=n;
          for(var i=0;
          i<r;
          i++)t.forEach((function(e, t){
            n[
              t
            ]
            ={
              x:0, y:0
            }
          })), e.getRepulsion(), e.updatePositions();
          return t
        }, e.prototype.getRepulsion=function(){
          var e=this, t=e.positions, n=e.nodes, r=e.disp, o=e.k, i=e.radii||[
          ];
          t.forEach((function(a, u){
            r[
              u
            ]
            ={
              x:0, y:0
            }, t.forEach((function(t, c){
              if(u!==c&&i[
                u
              ]
              ===i[
                c
              ]){
                var s=a[
                  0
                ]
                -t[
                  0
                ], d=a[
                  1
                ]
                -t[
                  1
                ], l=Math.sqrt(s*s+d*d);
                if(0===l){
                  l=1;
                  var f=u>c?1:-1;
                  s=.01*f, d=.01*f
                }
                if(l<e.nodeSizeFunc(n[
                  u
                ])/2+e.nodeSizeFunc(n[
                  c
                ])/2){
                  var h=o*o/l;
                  r[
                    u
                  ].x+=s/l*h, r[
                    u
                  ].y+=d/l*h
                }
              }
            }))
          }))
        }, e.prototype.updatePositions=function(){
          var e=this, t=e.positions, n=e.disp, r=e.speed, o=e.strictRadial, i=e.focusID, a=e.maxDisplace||e.width/10;
          o&&n.forEach((function(e, n){
            var r=t[
              n
            ]
            [
              0
            ]
            -t[
              i
            ]
            [
              0
            ], o=t[
              n
            ]
            [
              1
            ]
            -t[
              i
            ]
            [
              1
            ], a=Math.sqrt(r*r+o*o), u=o/a, c=-r/a, s=Math.sqrt(e.x*e.x+e.y*e.y), d=Math.acos((u*e.x+c*e.y)/s);
            d>Math.PI/2&&(d-=Math.PI/2, u*=-1, c*=-1);
            var l=Math.cos(d)*s;
            e.x=u*l, e.y=c*l
          }));
          var u=e.radii;
          t.forEach((function(e, c){
            if(c!==i){
              var s=Math.sqrt(n[
                c
              ].x*n[
                c
              ].x+n[
                c
              ].y*n[
                c
              ].y);
              if(s>0&&c!==i){
                var d=Math.min(a*(r/800), s);
                if(e[
                  0
                ]
                +=n[
                  c
                ].x/s*d, e[
                  1
                ]
                +=n[
                  c
                ].y/s*d, o){
                  var l=e[
                    0
                  ]
                  -t[
                    i
                  ]
                  [
                    0
                  ], f=e[
                    1
                  ]
                  -t[
                    i
                  ]
                  [
                    1
                  ], h=Math.sqrt(l*l+f*f);
                  l=l/h*u[
                    c
                  ], f=f/h*u[
                    c
                  ], e[
                    0
                  ]
                  =t[
                    i
                  ]
                  [
                    0
                  ]
                  +l, e[
                    1
                  ]
                  =t[
                    i
                  ]
                  [
                    1
                  ]
                  +f
                }
              }
            }
          }))
        }, e
      }
      ();
      t.default=n
    }, 36010:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.GridLayout=void 0;
      var i=n(781422), a=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.begin=[
            0, 0
          ], n.preventOverlap=!0, n.preventOverlapPadding=10, n.condense=!1, n.sortBy="degree", n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.row=0, n.col=0, n.cellWidth=0, n.cellHeight=0, n.cellUsed={
          }, n.id2manPos={
          }, n.onLayoutEnd=function(){
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            begin:[
              0, 0
            ], preventOverlap:!0, preventOverlapPadding:10, condense:!1, rows:void 0, cols:void 0, position:void 0, sortBy:"degree", nodeSize:30
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.edges, r=e.begin, o=t.length;
          if(0===o)return e.onLayoutEnd&&e.onLayoutEnd(), {
            nodes:t, edges:n
          };
          if(1===o)return t[
            0
          ].x=r[
            0
          ], t[
            0
          ].y=r[
            1
          ], e.onLayoutEnd&&e.onLayoutEnd(), {
            nodes:t, edges:n
          };
          var a=e.sortBy, u=e.width, c=e.height, s=e.condense, d=e.preventOverlapPadding, l=e.preventOverlap, f=e.nodeSpacing, h=e.nodeSize, v=[
          ];
          t.forEach((function(e){
            v.push(e)
          }));
          var p={
          };
          if(v.forEach((function(e, t){
            p[
              e.id
            ]
            =t
          })), ("degree"===a||!(0, i.isString)(a)||void 0===v[
            0
          ]
          [
            a
          ])&&(a="degree", (0, i.isNaN)(t[
            0
          ].degree))){
            var g=(0, i.getDegree)(v.length, p, n);
            v.forEach((function(e, t){
              e.degree=g[
                t
              ].all
            }))
          }
          v.sort((function(e, t){
            return t[
              a
            ]
            -e[
              a
            ]
          })), u||"undefined"==typeof window||(u=window.innerWidth), c||"undefined"==typeof window||(c=window.innerHeight);
          var y=e.rows, m=null!=e.cols?e.cols:e.columns;
          if(e.cells=o, null!=y&&null!=m?(e.rows=y, e.cols=m):null!=y&&null==m?(e.rows=y, e.cols=Math.ceil(e.cells/e.rows)):null==y&&null!=m?(e.cols=m, e.rows=Math.ceil(e.cells/e.cols)):(e.splits=Math.sqrt(e.cells*e.height/e.width), e.rows=Math.round(e.splits), e.cols=Math.round(e.width/e.height*e.splits)), e.rows=Math.max(e.rows, 1), e.cols=Math.max(e.cols, 1), e.cols*e.rows>e.cells)((b=e.small())-1)*(x=e.large())>=e.cells?e.small(b-1):(x-1)*b>=e.cells&&e.large(x-1);
          else for(;
          e.cols*e.rows<e.cells;
          ){
            var x, b=e.small();
            ((x=e.large())+1)*b>=e.cells?e.large(x+1):e.small(b+1)
          }
          if(e.cellWidth=u/e.cols, e.cellHeight=c/e.rows, s&&(e.cellWidth=0, e.cellHeight=0), l||f){
            var _=(0, i.getFuncByUnknownType)(10, f), w=(0, i.getFuncByUnknownType)(30, h, !1);
            v.forEach((function(t){
              t.x&&t.y||(t.x=0, t.y=0);
              var n, r, o=w(t)||30;
              (0, i.isArray)(o)?(n=o[
                0
              ], r=o[
                1
              ]):(n=o, r=o);
              var a=void 0!==_?_(t):d, u=n+a, c=r+a;
              e.cellWidth=Math.max(e.cellWidth, u), e.cellHeight=Math.max(e.cellHeight, c)
            }))
          }
          e.cellUsed={
          }, e.row=0, e.col=0, e.id2manPos={
          };
          for(var E=0;
          E<v.length;
          E++){
            var D=v[
              E
            ], I=void 0;
            if(e.position&&(I=e.position(D)), I&&(void 0!==I.row||void 0!==I.col)){
              var S={
                row:I.row, col:I.col
              };
              if(void 0===S.col)for(S.col=0;
              e.used(S.row, S.col);
              )S.col++;
              else if(void 0===S.row)for(S.row=0;
              e.used(S.row, S.col);
              )S.row++;
              e.id2manPos[
                D.id
              ]
              =S, e.use(S.row, S.col)
            }
            e.getPos(D)
          }
          return e.onLayoutEnd&&e.onLayoutEnd(), {
            edges:n, nodes:v
          }
        }, t.prototype.small=function(e){
          var t, n=this, r=n.rows||5, o=n.cols||5;
          null==e?t=Math.min(r, o):Math.min(r, o)===n.rows?n.rows=e:n.cols=e;
          return t
        }, t.prototype.large=function(e){
          var t, n=this, r=n.rows||5, o=n.cols||5;
          null==e?t=Math.max(r, o):Math.max(r, o)===n.rows?n.rows=e:n.cols=e;
          return t
        }, t.prototype.used=function(e, t){
          return this.cellUsed[
            "c-".concat(e, "-").concat(t)
          ]
          ||!1
        }, t.prototype.use=function(e, t){
          this.cellUsed[
            "c-".concat(e, "-").concat(t)
          ]
          =!0
        }, t.prototype.moveToNextCell=function(){
          var e=this, t=e.cols||5;
          e.col++, e.col>=t&&(e.col=0, e.row++)
        }, t.prototype.getPos=function(e){
          var t, n, r=this, o=r.begin, i=r.cellWidth, a=r.cellHeight, u=r.id2manPos[
            e.id
          ];
          if(u)t=u.col*i+i/2+o[
            0
          ], n=u.row*a+a/2+o[
            1
          ];
          else{
            for(;
            r.used(r.row, r.col);
            )r.moveToNextCell();
            t=r.col*i+i/2+o[
              0
            ], n=r.row*a+a/2+o[
              1
            ], r.use(r.row, r.col), r.moveToNextCell()
          }
          e.x=t, e.y=n
        }, t.prototype.getType=function(){
          return"grid"
        }, t
      }
      (n(346271).Base);
      t.GridLayout=a
    }, 42787:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=1e7, r=1.5707963267948966, o=new Map, i=.8;
      function a(e, t){
        var i=(o.get(e.id)||[
        ]).find((function(e){
          return e.source===t.id||e.target===t.id
        })), a=e.size[
          0
        ]
        *e.size[
          1
        ], u=t.size[
          0
        ]
        *t.size[
          1
        ], c=a>u?t:e, s=a>u?e:t, d=c.x-c.size[
          0
        ]
        /2, l=c.y-c.size[
          1
        ]
        /2, f=c.x+c.size[
          0
        ]
        /2, h=c.y+c.size[
          1
        ]
        /2, v=s.x-s.size[
          0
        ]
        /2, p=s.y-s.size[
          1
        ]
        /2, g=s.x+s.size[
          0
        ]
        /2, y=s.y+s.size[
          1
        ]
        /2, m=c.x, x=c.y, b=s.x, _=s.y, w=0, E=0;
        if(f>=v&&g>=d&&h>=p&&y>=l){
          0===(E=Math.sqrt(Math.pow(b-m, 2)+Math.pow(_-x, 2)))&&(E=1e-7), w=10/E*100+((f<g?f:g)-(d>v?d:v))*((h<y?h:y)-(l>p?l:p)), w*=n
        }
        else{
          var D=!1, I=function(e, t, n){
            var o=e.x-e.size[
              0
            ]
            /2, i=e.y-e.size[
              1
            ]
            /2, a=e.x+e.size[
              0
            ]
            /2, u=e.y+e.size[
              1
            ]
            /2, c=t.x-t.size[
              0
            ]
            /2, s=t.y-t.size[
              1
            ]
            /2, d=t.x+t.size[
              0
            ]
            /2, l=t.y+t.size[
              1
            ]
            /2, f=e.x, h=e.y, v=t.x, p=t.y, g=v-f, y=Math.atan2(g, p-h), m=0, x=0, b=0, _=0;
            y>r?(x=i-l, m=c-a, b=parseFloat(x?(x/Math.cos(y)).toFixed(2):m.toFixed(2)), _=parseFloat(m?(m/Math.sin(y)).toFixed(2):x.toFixed(2))):b=_=0<y&&y<=r?(x=s-u)>(m=c-a)?parseFloat(x?(x/Math.cos(y)).toFixed(2):m.toFixed(2)):parseFloat(m?(m/Math.sin(y)).toFixed(2):x.toFixed(2)):y<-r?(x=i-l)>(m=-(d-o))?parseFloat(x?(x/Math.cos(y)).toFixed(2):m.toFixed(2)):parseFloat(m?(m/Math.sin(y)).toFixed(2):x.toFixed(2)):(x=s-u)>(m=Math.abs(g)>(a-o)/2?o-d:g)?parseFloat(x?(x/Math.cos(y)).toFixed(2):m.toFixed(2)):parseFloat(m&&0!==y?(m/Math.sin(y)).toFixed(2):x.toFixed(2));
            var w=parseFloat(y.toFixed(2)), E=n;
            return n&&(E=1.1780972450961724<w&&w<1.9634954084936207), {
              distance:Math.abs(b<_?b:_), isHoriz:E
            }
          }
          (c, s, D);
          E=I.distance, D=I.isHoriz, E<=10?w+=0!==E?i?10+1e7/E:10+1e8/E:n:(w+=E, i&&(w+=E*E))
        }
        return w
      }
      function u(e){
        for(var t=0, n=0;
        n<e.length;
        n++){
          var r=e[
            n
          ];
          (r.x<0||r.y<0||r.x>1200||r.y>800)&&(t+=1e12);
          for(var o=n+1;
          o<e.length;
          o++)t+=a(r, e[
            o
          ])
        }
        return t
      }
      function c(e, t, n, r){
        var o=new Map;
        n.forEach((function(e, t){
          o.set(e.id, e)
        }));
        var i=r.filter((function(t){
          return t.source===e.id||t.target===e.id
        }))||[
        ], a=[
        ];
        i.forEach((function(t){
          var n=t.source===e.id?t.target:t.source, r=o.get(n);
          r&&a.push(r)
        }));
        for(var u=!0, c=0;
        c<a.length;
        c++){
          var s=a[
            c
          ], d=180*Math.atan((e.y-s.y)/(s.x-e.y)), l=180*Math.atan((t.y-s.y)/(s.x-t.y)), f=d>70&&d<110, h=l>70&&l<110;
          if((d<30||d>150)&&!(l<30||l>150)||d*l<0){
            u=!1;
            break
          }
          if(f&&!h||d*l<0){
            u=!1;
            break
          }
          if((s.x-e.x)*(s.x-t.x)<0){
            u=!1;
            break
          }
          if((s.y-e.y)*(s.y-t.y)<0){
            u=!1;
            break
          }
        }
        return u
      }
      function s(e, t){
        for(var n=!1, r=[
          10, -10, 0, 0
        ], o=[
          0, 0, 10, -10
        ], a=0;
        a<e.length;
        ++a)for(var s=e[
          a
        ], l=d(s, e), f=0;
        f<r.length;
        f++){
          if(c(s, {
            x:s.x+r[
              f
            ], y:s.y+o[
              f
            ]
          }, e, t)){
            s.x+=r[
              f
            ], s.y+=o[
              f
            ];
            var h=d(s, e), v=Math.random();
            h<l||v<i&&v>.1?(l=h, n=!0):(s.x-=r[
              f
            ], s.y-=o[
              f
            ])
          }
        }
        return i>.1&&(i*=.5), n?u(e):0
      }
      function d(e, t){
        var n=0;
        (e.x<0||e.y<0||e.x+e.size[
          0
        ]
        +20>1200||e.y+e.size[
          1
        ]
        +20>800)&&(n+=1e12);
        for(var r=0;
        r<t.length;
        ++r)e.id!==t[
          r
        ].id&&(n+=a(e, t[
          r
        ]));
        return n
      }
      t.default=function(e, t){
        if(0===e.length)return{
          nodes:e, edges:t
        };
        e.forEach((function(e){
          var n=t.filter((function(t){
            return t.source===e.id||t.target===e.id
          }));
          o.set(e, n)
        })), e.sort((function(e, t){
          var n, r;
          return(null===(n=o.get(e.id))||void 0===n?void 0:n.length)-(null===(r=o.get(t.id))||void 0===r?void 0:r.length)
        }));
        for(var n=u(e), r=20, i=1, a=0, c=0;
        r>0&&!(++c>=50);
        ){
          var d=s(e, t);
          0!==d&&(a=d), i=a-n, n=a, 0===i?--r:r=20
        }
        return e.forEach((function(e){
          e.x=e.x-e.size[
            0
          ]
          /2, e.y=e.y-e.size[
            1
          ]
          /2
        })), {
          nodes:e, edges:t
        }
      }
    }, 53472:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.slack=t.longestPathWithLayer=t.longestPath=void 0;
      var n=function(e){
        var t, n={
        }, r=function(t){
          var o, i, a=e.node(t);
          return a?n[
            t
          ]
          ?a.rank:(n[
            t
          ]
          =!0, null===(o=e.outEdges(t))||void 0===o||o.forEach((function(t){
            var n=r(t.w)-e.edge(t).minlen;
            n&&(void 0===i||n<i)&&(i=n)
          })), i||(i=0), a.rank=i, i):0
        };
        null===(t=e.sources())||void 0===t||t.forEach((function(e){
          return r(e)
        }))
      };
      t.longestPath=n;
      var r=function(e){
        var t, n, r={
        }, o=function(t){
          var i, a, u=e.node(t);
          return u?r[
            t
          ]
          ?u.rank:(r[
            t
          ]
          =!0, null===(i=e.outEdges(t))||void 0===i||i.forEach((function(t){
            var n=o(t.w)-e.edge(t).minlen;
            n&&(void 0===a||n<a)&&(a=n)
          })), a||(a=0), (void 0===n||a<n)&&(n=a), u.rank=a, a):0
        };
        null===(t=e.sources())||void 0===t||t.forEach((function(t){
          e.node(t)&&o(t)
        })), void 0===n&&(n=0);
        var i={
        }, a=function(t, n){
          var r, o=e.node(t), u=isNaN(o.layer)?n:o.layer;
          (void 0===o.rank||o.rank<u)&&(o.rank=u), i[
            t
          ]
          ||(i[
            t
          ]
          =!0, null===(r=e.outEdges(t))||void 0===r||r.map((function(t){
            a(t.w, u+e.edge(t).minlen)
          })))
        };
        e.nodes().forEach((function(t){
          var r=e.node(t);
          r&&(isNaN(r.layer)?r.rank-=n:a(t, r.layer))
        }))
      };
      t.longestPathWithLayer=r;
      var o=function(e, t){
        return e.node(t.w).rank-e.node(t.v).rank-e.edge(t).minlen
      };
      t.slack=o, t.default={
        longestPath:n, longestPathWithLayer:r, slack:o
      }
    }, 83303:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.RadialLayout=void 0;
      var a=n(781422), u=n(346271), c=i(n(278936)), s=i(n(15470));
      function d(e, t){
        return Math.sqrt((e[
          0
        ]
        -t[
          0
        ])*(e[
          0
        ]
        -t[
          0
        ])+(e[
          1
        ]
        -t[
          1
        ])*(e[
          1
        ]
        -t[
          1
        ]))
      }
      var l=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.maxIteration=1e3, n.focusNode=null, n.unitRadius=null, n.linkDistance=50, n.preventOverlap=!1, n.strictRadial=!0, n.maxPreventOverlapIteration=200, n.sortStrength=10, n.nodes=[
          ], n.edges=[
          ], n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:1e3, focusNode:null, unitRadius:null, linkDistance:50, preventOverlap:!1, nodeSize:void 0, nodeSpacing:void 0, strictRadial:!0, maxPreventOverlapIteration:200, sortBy:void 0, sortStrength:10
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.edges||[
          ];
          if(t&&0!==t.length){
            e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight), e.center||(e.center=[
              e.width/2, e.height/2
            ]);
            var r=e.center;
            if(1===t.length)return t[
              0
            ].x=r[
              0
            ], t[
              0
            ].y=r[
              1
            ], void(e.onLayoutEnd&&e.onLayoutEnd());
            var o=e.linkDistance, i=null;
            if((0, a.isString)(e.focusNode)){
              for(var u=!1, d=0;
              d<t.length;
              d++)t[
                d
              ].id===e.focusNode&&(i=t[
                d
              ], e.focusNode=i, u=!0, d=t.length);
              u||(i=null)
            }
            else i=e.focusNode;
            i||(i=t[
              0
            ], e.focusNode=i);
            var l, f, h, v=(l=t, f=i.id, h=-1, l.forEach((function(e, t){
              e.id===f&&(h=t)
            })), h);
            v<0&&(v=0), e.focusIndex=v;
            var p=(0, a.getAdjMatrix)({
              nodes:t, edges:n
            }, !1), g=(0, a.floydWarshall)(p), y=e.maxToFocus(g, v);
            e.handleInfinity(g, v, y+1), e.distances=g;
            var m=g[
              v
            ], x=e.width||500, b=e.height||500, _=x-r[
              0
            ]
            >r[
              0
            ]
            ?r[
              0
            ]
            :x-r[
              0
            ], w=b-r[
              1
            ]
            >r[
              1
            ]
            ?r[
              1
            ]
            :b-r[
              1
            ];
            0===_&&(_=x/2), 0===w&&(w=b/2);
            var E=w>_?_:w, D=Math.max.apply(Math, m), I=[
            ];
            m.forEach((function(t, n){
              e.unitRadius||(e.unitRadius=E/D), I[
                n
              ]
              =t*e.unitRadius
            })), e.radii=I;
            var S=e.eIdealDisMatrix();
            e.eIdealDistances=S;
            var M=function(e){
              for(var t=e.length, n=e[
                0
              ].length, r=[
              ], o=0;
              o<t;
              o++){
                for(var i=[
                ], a=0;
                a<n;
                a++)0!==e[
                  o
                ]
                [
                  a
                ]
                ?i.push(1/(e[
                  o
                ]
                [
                  a
                ]
                *e[
                  o
                ]
                [
                  a
                ])):i.push(0);
                r.push(i)
              }
              return r
            }
            (S);
            e.weights=M;
            var k=new c.default({
              linkDistance:o, distances:S
            }).layout();
            k.forEach((function(e){
              (0, a.isNaN)(e[
                0
              ])&&(e[
                0
              ]
              =Math.random()*o), (0, a.isNaN)(e[
                1
              ])&&(e[
                1
              ]
              =Math.random()*o)
            })), e.positions=k, k.forEach((function(e, n){
              t[
                n
              ].x=e[
                0
              ]
              +r[
                0
              ], t[
                n
              ].y=e[
                1
              ]
              +r[
                1
              ]
            })), k.forEach((function(e){
              e[
                0
              ]
              -=k[
                v
              ]
              [
                0
              ], e[
                1
              ]
              -=k[
                v
              ]
              [
                1
              ]
            })), e.run();
            var O, N=e.preventOverlap, z=e.nodeSize, C=e.strictRadial;
            if(N){
              var G, L=e.nodeSpacing;
              G=(0, a.isNumber)(L)?function(){
                return L
              }
              :(0, a.isFunction)(L)?L:function(){
                return 0
              }, O=z?(0, a.isArray)(z)?function(e){
                return(z[
                  0
                ]
                >z[
                  1
                ]
                ?z[
                  0
                ]
                :z[
                  1
                ])+G(e)
              }
              :function(e){
                return z+G(e)
              }
              :function(e){
                return e.size?(0, a.isArray)(e.size)?(e.size[
                  0
                ]
                >e.size[
                  1
                ]
                ?e.size[
                  0
                ]
                :e.size[
                  1
                ])+G(e):(0, a.isObject)(e.size)?(e.size.width>e.size.height?e.size.width:e.size.height)+G(e):e.size+G(e):10+G(e)
              };
              var T={
                nodes:t, nodeSizeFunc:O, adjMatrix:p, positions:k, radii:I, height:b, width:x, strictRadial:C, focusID:v, iterations:e.maxPreventOverlapIteration||200, k:k.length/4.5
              }, P=new s.default(T);
              k=P.layout()
            }
            return k.forEach((function(e, n){
              t[
                n
              ].x=e[
                0
              ]
              +r[
                0
              ], t[
                n
              ].y=e[
                1
              ]
              +r[
                1
              ]
            })), e.onLayoutEnd&&e.onLayoutEnd(), {
              nodes:t, edges:n
            }
          }
          e.onLayoutEnd&&e.onLayoutEnd()
        }, t.prototype.run=function(){
          for(var e=this, t=e.maxIteration, n=e.positions||[
          ], r=e.weights||[
          ], o=e.eIdealDistances||[
          ], i=e.radii||[
          ], a=0;
          a<=t;
          a++){
            var u=a/t;
            e.oneIteration(u, n, i, o, r)
          }
        }, t.prototype.oneIteration=function(e, t, n, r, o){
          var i=1-e, a=this.focusIndex;
          t.forEach((function(u, c){
            var s=d(u, [
              0, 0
            ]), l=0===s?0:1/s;
            if(c!==a){
              var f=0, h=0, v=0;
              t.forEach((function(e, t){
                if(c!==t){
                  var n=d(u, e), i=0===n?0:1/n, a=r[
                    t
                  ]
                  [
                    c
                  ];
                  v+=o[
                    c
                  ]
                  [
                    t
                  ], f+=o[
                    c
                  ]
                  [
                    t
                  ]
                  *(e[
                    0
                  ]
                  +a*(u[
                    0
                  ]
                  -e[
                    0
                  ])*i), h+=o[
                    c
                  ]
                  [
                    t
                  ]
                  *(e[
                    1
                  ]
                  +a*(u[
                    1
                  ]
                  -e[
                    1
                  ])*i)
                }
              }));
              var p=0===n[
                c
              ]
              ?0:1/n[
                c
              ];
              v*=i, v+=e*p*p, f*=i, f+=e*p*u[
                0
              ]
              *l, u[
                0
              ]
              =f/v, h*=i, h+=e*p*u[
                1
              ]
              *l, u[
                1
              ]
              =h/v
            }
          }))
        }, t.prototype.eIdealDisMatrix=function(){
          var e=this, t=e.nodes;
          if(!t)return[
          ];
          var n=e.distances, r=e.linkDistance, o=e.radii||[
          ], i=e.unitRadius||50, u=[
          ];
          return n&&n.forEach((function(n, c){
            var s=[
            ];
            n.forEach((function(n, u){
              if(c===u)s.push(0);
              else if(o[
                c
              ]
              ===o[
                u
              ])if("data"===e.sortBy)s.push(n*(Math.abs(c-u)*e.sortStrength)/(o[
                c
              ]
              /i));
              else if(e.sortBy){
                var d=t[
                  c
                ]
                [
                  e.sortBy
                ]
                ||0, l=t[
                  u
                ]
                [
                  e.sortBy
                ]
                ||0;
                (0, a.isString)(d)&&(d=d.charCodeAt(0)), (0, a.isString)(l)&&(l=l.charCodeAt(0)), s.push(n*(Math.abs(d-l)*e.sortStrength)/(o[
                  c
                ]
                /i))
              }
              else s.push(n*r/(o[
                c
              ]
              /i));
              else{
                var f=(r+i)/2;
                s.push(n*f)
              }
            })), u.push(s)
          })), u
        }, t.prototype.handleInfinity=function(e, t, n){
          for(var r=e.length, o=0;
          o<r;
          o++)if(e[
            t
          ]
          [
            o
          ]
          ===1/0){
            e[
              t
            ]
            [
              o
            ]
            =n, e[
              o
            ]
            [
              t
            ]
            =n;
            for(var i=0;
            i<r;
            i++)e[
              o
            ]
            [
              i
            ]
            !==1/0&&e[
              t
            ]
            [
              i
            ]
            ===1/0&&(e[
              t
            ]
            [
              i
            ]
            =n+e[
              o
            ]
            [
              i
            ], e[
              i
            ]
            [
              t
            ]
            =n+e[
              o
            ]
            [
              i
            ])
          }
          for(o=0;
          o<r;
          o++)if(o!==t)for(i=0;
          i<r;
          i++)if(e[
            o
          ]
          [
            i
          ]
          ===1/0){
            var a=Math.abs(e[
              t
            ]
            [
              o
            ]
            -e[
              t
            ]
            [
              i
            ]);
            a=0===a?1:a, e[
              o
            ]
            [
              i
            ]
            =a
          }
        }, t.prototype.maxToFocus=function(e, t){
          for(var n=0, r=0;
          r<e[
            t
          ].length;
          r++)e[
            t
          ]
          [
            r
          ]
          !==1/0&&(n=e[
            t
          ]
          [
            r
          ]
          >n?e[
            t
          ]
          [
            r
          ]
          :n);
          return n
        }, t.prototype.getType=function(){
          return"radial"
        }, t
      }
      (u.Base);
      t.RadialLayout=l
    }, 95757:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.camelize=t.isString=void 0;
      t.isString=function(e){
        return"string"==typeof e
      };
      var n, r, o=/-(\w)/g;
      t.camelize=(n=function(e){
        return e.replace(o, (function(e, t){
          return t?t.toUpperCase():""
        }))
      }, r=Object.create(null), function(e){
        return r[
          e
        ]
        ||(r[
          e
        ]
        =n(e))
      })
    }, 122127:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), a=this&&this.__setModuleDefault||(Object.create?function(e, t){
        Object.defineProperty(e, "default", {
          enumerable:!0, value:t
        })
      }
      :function(e, t){
        e.default=t
      }), u=this&&this.__importStar||function(e){
        if(e&&e.__esModule)return e;
        var t={
        };
        if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e, n)&&i(t, e, n);
        return a(t, e), t
      }, c=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ForceLayout=void 0;
      var s=u(n(32019)), d=c(n(537657)), l=n(781422), f=n(346271), h=n(255573), v=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.center=[
            0, 0
          ], n.nodeStrength=null, n.edgeStrength=null, n.preventOverlap=!1, n.clusterNodeStrength=null, n.clusterEdgeStrength=null, n.clusterEdgeDistance=null, n.clusterNodeSize=null, n.clusterFociStrength=null, n.linkDistance=50, n.alphaDecay=.028, n.alphaMin=.001, n.alpha=.3, n.collideStrength=1, n.workerEnabled=!1, n.tick=function(){
          }, n.onLayoutEnd=function(){
          }, n.ticking=void 0, t&&n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            center:[
              0, 0
            ], nodeStrength:null, edgeStrength:null, preventOverlap:!1, nodeSize:void 0, nodeSpacing:void 0, linkDistance:50, forceSimulation:null, alphaDecay:.028, alphaMin:.001, alpha:.3, collideStrength:1, clustering:!1, clusterNodeStrength:-1, clusterEdgeStrength:.1, clusterEdgeDistance:100, clusterFociStrength:.8, clusterNodeSize:10, tick:function(){
            }, onLayoutEnd:function(){
            }, workerEnabled:!1
          }
        }, t.prototype.init=function(e){
          var t=this;
          t.nodes=e.nodes||[
          ];
          var n=e.edges||[
          ];
          t.edges=n.map((function(e){
            var t={
            }, n=[
              "targetNode", "sourceNode", "startPoint", "endPoint"
            ];
            return Object.keys(e).forEach((function(r){
              n.indexOf(r)>-1||(t[
                r
              ]
              =e[
                r
              ])
            })), t
          })), t.ticking=!1
        }, t.prototype.execute=function(e){
          var t=this, n=t.nodes, r=t.edges;
          if(!t.ticking){
            var o=t.forceSimulation, i=t.alphaMin, a=t.alphaDecay, u=t.alpha;
            if(o){
              if(e)if(t.clustering&&t.clusterForce&&(t.clusterForce.nodes(n), t.clusterForce.links(r)), o.nodes(n), r&&t.edgeForce)t.edgeForce.links(r);
              else if(r&&!t.edgeForce){
                f=s.forceLink().id((function(e){
                  return e.id
                })).links(r);
                t.edgeStrength&&f.strength(t.edgeStrength), t.linkDistance&&f.distance(t.linkDistance), t.edgeForce=f, o.force("link", f)
              }
              t.preventOverlap&&t.overlapProcess(o), o.alpha(u).restart(), this.ticking=!0
            }
            else try{
              var c=s.forceManyBody();
              if(t.nodeStrength&&c.strength(t.nodeStrength), o=s.forceSimulation().nodes(n), t.clustering){
                var l=(0, d.default)();
                l.centerX(t.center[
                  0
                ]).centerY(t.center[
                  1
                ]).template("force").strength(t.clusterFociStrength), r&&l.links(r), n&&l.nodes(n), l.forceLinkDistance(t.clusterEdgeDistance).forceLinkStrength(t.clusterEdgeStrength).forceCharge(t.clusterNodeStrength).forceNodeSize(t.clusterNodeSize), t.clusterForce=l, o.force("group", l)
              }
              if(o.force("center", s.forceCenter(t.center[
                0
              ], t.center[
                1
              ])).force("charge", c).alpha(u).alphaDecay(a).alphaMin(i), t.preventOverlap&&t.overlapProcess(o), r){
                var f=s.forceLink().id((function(e){
                  return e.id
                })).links(r);
                t.edgeStrength&&f.strength(t.edgeStrength), t.linkDistance&&f.distance(t.linkDistance), t.edgeForce=f, o.force("link", f)
              }
              if(t.workerEnabled&&!p()&&(t.workerEnabled=!1, console.warn("workerEnabled option is only supported when running in web worker.")), t.workerEnabled){
                o.stop();
                for(var v=function(e){
                  var t=e.alphaMin(), n=e.alphaTarget(), r=e.alpha(), o=Math.log((t-n)/(r-n))/Math.log(1-e.alphaDecay());
                  return Math.ceil(o)
                }
                (o), g=1;
                g<=v;
                g++)o.tick(), postMessage({
                  nodes:n, currentTick:g, totalTicks:v, type:h.LAYOUT_MESSAGE.TICK
                }, void 0);
                t.ticking=!1
              }
              else o.on("tick", (function(){
                t.tick()
              })).on("end", (function(){
                t.ticking=!1, t.onLayoutEnd&&t.onLayoutEnd()
              })), t.ticking=!0;
              t.forceSimulation=o, t.ticking=!0
            }
            catch(e){
              t.ticking=!1, console.warn(e)
            }
          }
        }, t.prototype.overlapProcess=function(e){
          var t, n, r=this, o=r.nodeSize, i=r.nodeSpacing, a=r.collideStrength;
          if(n=(0, l.isNumber)(i)?function(){
            return i
          }
          :(0, l.isFunction)(i)?i:function(){
            return 0
          }, o)if((0, l.isFunction)(o))t=function(e){
            return o(e)+n(e)
          };
          else if((0, l.isArray)(o)){
            var u=(o[
              0
            ]
            >o[
              1
            ]
            ?o[
              0
            ]
            :o[
              1
            ])/2;
            t=function(e){
              return u+n(e)
            }
          }
          else if((0, l.isNumber)(o)){
            var c=o/2;
            t=function(e){
              return c+n(e)
            }
          }
          else t=function(){
            return 10
          };
          else t=function(e){
            return e.size?(0, l.isArray)(e.size)?(e.size[
              0
            ]
            >e.size[
              1
            ]
            ?e.size[
              0
            ]
            :e.size[
              1
            ])/2+n(e):(0, l.isObject)(e.size)?(e.size.width>e.size.height?e.size.width:e.size.height)/2+n(e):e.size/2+n(e):10+n(e)
          };
          e.force("collisionForce", s.forceCollide(t).strength(a))
        }, t.prototype.updateCfg=function(e){
          var t=this;
          t.ticking&&(t.forceSimulation.stop(), t.ticking=!1), t.forceSimulation=null, Object.assign(t, e)
        }, t.prototype.destroy=function(){
          var e=this;
          e.ticking&&(e.forceSimulation.stop(), e.ticking=!1), e.nodes=null, e.edges=null, e.destroyed=!0
        }, t
      }
      (f.Base);
      function p(){
        return"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope
      }
      t.ForceLayout=v
    }, 142335:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ComboForceLayout=void 0;
      var i=n(346271), a=n(781422), u=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.center=[
            0, 0
          ], n.maxIteration=100, n.gravity=10, n.comboGravity=10, n.linkDistance=10, n.alpha=1, n.alphaMin=.001, n.alphaDecay=1-Math.pow(n.alphaMin, 1/300), n.alphaTarget=0, n.velocityDecay=.6, n.edgeStrength=.6, n.nodeStrength=30, n.preventOverlap=!1, n.preventNodeOverlap=!1, n.preventComboOverlap=!1, n.collideStrength=void 0, n.nodeCollideStrength=.5, n.comboCollideStrength=.5, n.comboSpacing=20, n.comboPadding=10, n.optimizeRangeFactor=1, n.onTick=function(){
          }, n.onLayoutEnd=function(){
          }, n.depthAttractiveForceScale=1, n.depthRepulsiveForceScale=2, n.nodes=[
          ], n.edges=[
          ], n.combos=[
          ], n.comboTrees=[
          ], n.width=300, n.height=300, n.bias=[
          ], n.nodeMap={
          }, n.oriComboMap={
          }, n.indexMap={
          }, n.comboMap={
          }, n.previousLayouted=!1, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:100, center:[
              0, 0
            ], gravity:10, speed:1, comboGravity:30, preventOverlap:!1, preventComboOverlap:!0, preventNodeOverlap:!0, nodeSpacing:void 0, collideStrength:void 0, nodeCollideStrength:.5, comboCollideStrength:.5, comboSpacing:20, comboPadding:10, edgeStrength:.6, nodeStrength:30, linkDistance:10
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.center;
          if(e.comboTree={
            id:"comboTreeRoot", depth:-1, children:e.comboTrees
          }, t&&0!==t.length){
            if(1===t.length)return t[
              0
            ].x=n[
              0
            ], t[
              0
            ].y=n[
              1
            ], void(e.onLayoutEnd&&e.onLayoutEnd());
            e.initVals(), e.run(), e.onLayoutEnd&&e.onLayoutEnd()
          }
          else e.onLayoutEnd&&e.onLayoutEnd()
        }, t.prototype.run=function(){
          var e=this, t=e.nodes, n=e.previousLayouted?e.maxIteration/5:e.maxIteration;
          e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight);
          var r=e.center, o=e.velocityDecay, i=e.comboMap;
          e.previousLayouted||e.initPos(i);
          for(var u=function(n){
            var r=[
            ];
            t.forEach((function(e, t){
              r[
                t
              ]
              ={
                x:0, y:0
              }
            })), e.applyCalculate(r), e.applyComboCenterForce(r), t.forEach((function(e, t){
              (0, a.isNumber)(e.x)&&(0, a.isNumber)(e.y)&&(e.x+=r[
                t
              ].x*o, e.y+=r[
                t
              ].y*o)
            })), e.alpha+=(e.alphaTarget-e.alpha)*e.alphaDecay, e.onTick()
          }, c=0;
          c<n;
          c++)u();
          var s=[
            0, 0
          ];
          t.forEach((function(e){
            (0, a.isNumber)(e.x)&&(0, a.isNumber)(e.y)&&(s[
              0
            ]
            +=e.x, s[
              1
            ]
            +=e.y)
          })), s[
            0
          ]
          /=t.length, s[
            1
          ]
          /=t.length;
          var d=[
            r[
              0
            ]
            -s[
              0
            ], r[
              1
            ]
            -s[
              1
            ]
          ];
          t.forEach((function(e, t){
            (0, a.isNumber)(e.x)&&(0, a.isNumber)(e.y)&&(e.x+=d[
              0
            ], e.y+=d[
              1
            ])
          })), e.combos.forEach((function(e){
            var t=i[
              e.id
            ];
            t&&t.empty&&(e.x=t.cx||e.x, e.y=t.cy||e.y)
          })), e.previousLayouted=!0
        }, t.prototype.initVals=function(){
          var e=this, t=e.edges, n=e.nodes, r=e.combos, o={
          }, i={
          }, u={
          };
          n.forEach((function(e, t){
            i[
              e.id
            ]
            =e, u[
              e.id
            ]
            =t
          })), e.nodeMap=i, e.indexMap=u;
          var c={
          };
          r.forEach((function(e){
            c[
              e.id
            ]
            =e
          })), e.oriComboMap=c, e.comboMap=e.getComboMap();
          var s=e.preventOverlap;
          e.preventComboOverlap=e.preventComboOverlap||s, e.preventNodeOverlap=e.preventNodeOverlap||s;
          var d=e.collideStrength;
          d&&(e.comboCollideStrength=d, e.nodeCollideStrength=d), e.comboCollideStrength=e.comboCollideStrength?e.comboCollideStrength:0, e.nodeCollideStrength=e.nodeCollideStrength?e.nodeCollideStrength:0;
          for(var l=0;
          l<t.length;
          ++l){
            var f=(0, a.getEdgeTerminal)(t[
              l
            ], "source"), h=(0, a.getEdgeTerminal)(t[
              l
            ], "target");
            o[
              f
            ]
            ?o[
              f
            ]
            ++:o[
              f
            ]
            =1, o[
              h
            ]
            ?o[
              h
            ]
            ++:o[
              h
            ]
            =1
          }
          var v=[
          ];
          for(l=0;
          l<t.length;
          ++l){
            f=(0, a.getEdgeTerminal)(t[
              l
            ], "source"), h=(0, a.getEdgeTerminal)(t[
              l
            ], "target");
            v[
              l
            ]
            =o[
              f
            ]
            /(o[
              f
            ]
            +o[
              h
            ])
          }
          this.bias=v;
          var p, g, y=e.nodeSize, m=e.nodeSpacing;
          if(g=(0, a.isNumber)(m)?function(){
            return m
          }
          :(0, a.isFunction)(m)?m:function(){
            return 0
          }, this.nodeSpacing=g, y)if((0, a.isFunction)(y))p=function(e){
            return y(e)
          };
          else if((0, a.isArray)(y)){
            var x=(y[
              0
            ]
            >y[
              1
            ]
            ?y[
              0
            ]
            :y[
              1
            ])/2;
            p=function(e){
              return x
            }
          }
          else{
            var b=y/2;
            p=function(e){
              return b
            }
          }
          else p=function(e){
            return e.size?(0, a.isArray)(e.size)?(e.size[
              0
            ]
            >e.size[
              1
            ]
            ?e.size[
              0
            ]
            :e.size[
              1
            ])/2:(0, a.isObject)(e.size)?(e.size.width>e.size.height?e.size.width:e.size.height)/2:e.size/2:10
          };
          this.nodeSize=p;
          var _, w=e.comboSpacing;
          _=(0, a.isNumber)(w)?function(){
            return w
          }
          :(0, a.isFunction)(w)?w:function(){
            return 0
          }, this.comboSpacing=_;
          var E, D=e.comboPadding;
          E=(0, a.isNumber)(D)?function(){
            return D
          }
          :(0, a.isArray)(D)?function(){
            return Math.max.apply(null, D)
          }
          :(0, a.isFunction)(D)?D:function(){
            return 0
          }, this.comboPadding=E;
          var I, S=this.linkDistance;
          S||(S=10), I=(0, a.isNumber)(S)?function(e){
            return S
          }
          :S, this.linkDistance=I;
          var M, k=this.edgeStrength;
          k||(k=1), M=(0, a.isNumber)(k)?function(e){
            return k
          }
          :k, this.edgeStrength=M;
          var O, N=this.nodeStrength;
          N||(N=30), O=(0, a.isNumber)(N)?function(e){
            return N
          }
          :N, this.nodeStrength=O
        }, t.prototype.initPos=function(e){
          this.nodes.forEach((function(t, n){
            var r=t.comboId, o=e[
              r
            ];
            r&&o?(t.x=o.cx+100/(n+1), t.y=o.cy+100/(n+1)):(t.x=100/(n+1), t.y=100/(n+1))
          }))
        }, t.prototype.getComboMap=function(){
          var e=this, t=e.nodeMap, n=e.comboTrees, r=e.oriComboMap, o={
          };
          return(n||[
          ]).forEach((function(n){
            var i=[
            ];
            (0, a.traverseTreeUp)(n, (function(n){
              if("node"===n.itemType)return!0;
              if(!r[
                n.id
              ])return!0;
              if(void 0===o[
                n.id
              ]){
                var u={
                  id:n.id, name:n.id, cx:0, cy:0, count:0, depth:e.oriComboMap[
                    n.id
                  ].depth||0, children:[
                  ]
                };
                o[
                  n.id
                ]
                =u
              }
              var c=n.children;
              c&&c.forEach((function(e){
                if(!o[
                  e.id
                ]
                &&!t[
                  e.id
                ])return!0;
                i.push(e)
              }));
              var s=o[
                n.id
              ];
              if(s.cx=0, s.cy=0, 0===i.length){
                s.empty=!0;
                var d=r[
                  n.id
                ];
                s.cx=d.x, s.cy=d.y
              }
              return i.forEach((function(e){
                if(s.count++, "node"!==e.itemType){
                  var n=o[
                    e.id
                  ];
                  return(0, a.isNumber)(n.cx)&&(s.cx+=n.cx), void((0, a.isNumber)(n.cy)&&(s.cy+=n.cy))
                }
                var r=t[
                  e.id
                ];
                r&&((0, a.isNumber)(r.x)&&(s.cx+=r.x), (0, a.isNumber)(r.y)&&(s.cy+=r.y))
              })), s.cx/=s.count||1, s.cy/=s.count||1, s.children=i, !0
            }))
          })), o
        }, t.prototype.applyComboCenterForce=function(e){
          var t=this, n=t.gravity, r=t.comboGravity||n, o=this.alpha, i=t.comboTrees, u=t.indexMap, c=t.nodeMap, s=t.comboMap;
          (i||[
          ]).forEach((function(t){
            (0, a.traverseTreeUp)(t, (function(t){
              if("node"===t.itemType)return!0;
              if(!s[
                t.id
              ])return!0;
              var n=s[
                t.id
              ], i=(n.depth+1)/10*.5, d=n.cx, l=n.cy;
              return n.cx=0, n.cy=0, n.children.forEach((function(t){
                if("node"!==t.itemType){
                  var f=s[
                    t.id
                  ];
                  return f&&(0, a.isNumber)(f.cx)&&(n.cx+=f.cx), void(f&&(0, a.isNumber)(f.cy)&&(n.cy+=f.cy))
                }
                var h=c[
                  t.id
                ], v=h.x-d||.005, p=h.y-l||.005, g=Math.sqrt(v*v+p*p), y=u[
                  h.id
                ], m=r*o/g*i;
                e[
                  y
                ].x-=v*m, e[
                  y
                ].y-=p*m, (0, a.isNumber)(h.x)&&(n.cx+=h.x), (0, a.isNumber)(h.y)&&(n.cy+=h.y)
              })), n.cx/=n.count||1, n.cy/=n.count||1, !0
            }))
          }))
        }, t.prototype.applyCalculate=function(e){
          var t=this, n=t.comboMap, r=t.nodes, o={
          };
          r.forEach((function(e, t){
            r.forEach((function(n, r){
              if(!(t<r)){
                var i=e.x-n.x||.005, a=e.y-n.y||.005, u=i*i+a*a, c=Math.sqrt(u);
                u<1&&(u=c), o[
                  "".concat(e.id, "-").concat(n.id)
                ]
                ={
                  vx:i, vy:a, vl2:u, vl:c
                }, o[
                  "".concat(n.id, "-").concat(e.id)
                ]
                ={
                  vl2:u, vl:c, vx:-i, vy:-a
                }
              }
            }))
          })), t.updateComboSizes(n), t.calRepulsive(e, o), t.calAttractive(e, o), t.preventComboOverlap&&t.comboNonOverlapping(e, n)
        }, t.prototype.updateComboSizes=function(e){
          var t=this, n=t.comboTrees, r=t.nodeMap, o=t.nodeSize, i=t.comboSpacing, u=t.comboPadding;
          (n||[
          ]).forEach((function(n){
            var c=[
            ];
            (0, a.traverseTreeUp)(n, (function(n){
              if("node"===n.itemType)return!0;
              var s=e[
                n.id
              ];
              if(!s)return!1;
              var d=n.children;
              d&&d.forEach((function(t){
                (e[
                  t.id
                ]
                ||r[
                  t.id
                ])&&c.push(t)
              })), s.minX=1/0, s.minY=1/0, s.maxX=-1/0, s.maxY=-1/0, c.forEach((function(e){
                if("node"!==e.itemType)return!0;
                var t=r[
                  e.id
                ];
                if(!t)return!0;
                var n=o(t), i=t.x-n, a=t.y-n, u=t.x+n, c=t.y+n;
                s.minX>i&&(s.minX=i), s.minY>a&&(s.minY=a), s.maxX<u&&(s.maxX=u), s.maxY<c&&(s.maxY=c)
              }));
              var l=t.oriComboMap[
                n.id
              ].size||10;
              (0, a.isArray)(l)&&(l=l[
                0
              ]);
              var f=Math.max(s.maxX-s.minX, s.maxY-s.minY, l);
              return s.r=f/2+i(s)/2+u(s), !0
            }))
          }))
        }, t.prototype.comboNonOverlapping=function(e, t){
          var n=this, r=n.comboTree, o=n.comboCollideStrength, i=n.indexMap, u=n.nodeMap;
          (0, a.traverseTreeUp)(r, (function(n){
            if(!t[
              n.id
            ]
            &&!u[
              n.id
            ]
            &&"comboTreeRoot"!==n.id)return!1;
            var r=n.children;
            return r&&r.length>1&&r.forEach((function(n, a){
              if("node"===n.itemType)return!1;
              var c=t[
                n.id
              ];
              c&&r.forEach((function(r, s){
                if(a<=s)return!1;
                if("node"===r.itemType)return!1;
                var d=t[
                  r.id
                ];
                if(!d)return!1;
                var l=c.cx-d.cx||.005, f=c.cy-d.cy||.005, h=l*l+f*f, v=c.r||1, p=d.r||1, g=v+p, y=p*p, m=v*v;
                if(h<g*g){
                  var x=n.children;
                  if(!x||0===x.length)return!1;
                  var b=r.children;
                  if(!b||0===b.length)return!1;
                  var _=Math.sqrt(h), w=(g-_)/_*o, E=l*w, D=f*w, I=y/(m+y), S=1-I;
                  x.forEach((function(t){
                    if("node"!==t.itemType)return!1;
                    if(u[
                      t.id
                    ]){
                      var n=i[
                        t.id
                      ];
                      b.forEach((function(t){
                        if("node"!==t.itemType)return!1;
                        if(!u[
                          t.id
                        ])return!1;
                        var r=i[
                          t.id
                        ];
                        e[
                          n
                        ].x+=E*I, e[
                          n
                        ].y+=D*I, e[
                          r
                        ].x-=E*S, e[
                          r
                        ].y-=D*S
                      }))
                    }
                  }))
                }
              }))
            })), !0
          }))
        }, t.prototype.calRepulsive=function(e, t){
          var n=this, r=n.nodes, o=n.width*n.optimizeRangeFactor, i=n.nodeStrength, a=n.alpha, u=n.nodeCollideStrength, c=n.preventNodeOverlap, s=n.nodeSize, d=n.nodeSpacing, l=n.depthRepulsiveForceScale, f=n.center;
          r.forEach((function(h, v){
            if(h.x&&h.y){
              if(f){
                var p=n.gravity, g=h.x-f[
                  0
                ]
                ||.005, y=h.y-f[
                  1
                ]
                ||.005, m=Math.sqrt(g*g+y*y);
                e[
                  v
                ].x-=g*p*a/m, e[
                  v
                ].y-=y*p*a/m
              }
              r.forEach((function(n, r){
                if(v!==r&&n.x&&n.y){
                  var f=t[
                    "".concat(h.id, "-").concat(n.id)
                  ], p=f.vl2, g=f.vl;
                  if(!(g>o)){
                    var y=t[
                      "".concat(h.id, "-").concat(n.id)
                    ], m=y.vx, x=y.vy, b=Math.log(Math.abs(n.depth-h.depth)/10)+1||1;
                    b=b<1?1:b, n.comboId!==h.comboId&&(b+=1);
                    var _=b?Math.pow(l, b):1, w=i(n)*a/p*_;
                    if(e[
                      v
                    ].x+=m*w, e[
                      v
                    ].y+=x*w, v<r&&c){
                      var E=s(h)+d(h)||1, D=s(n)+d(n)||1, I=E+D;
                      if(p<I*I){
                        var S=(I-g)/g*u, M=D*D, k=M/(E*E+M), O=m*S, N=x*S;
                        e[
                          v
                        ].x+=O*k, e[
                          v
                        ].y+=N*k, k=1-k, e[
                          r
                        ].x-=O*k, e[
                          r
                        ].y-=N*k
                      }
                    }
                  }
                }
              }))
            }
          }))
        }, t.prototype.calAttractive=function(e, t){
          var n=this, r=n.edges, o=n.linkDistance, i=n.alpha, u=n.edgeStrength, c=n.bias, s=n.depthAttractiveForceScale;
          r.forEach((function(r, d){
            var l=(0, a.getEdgeTerminal)(r, "source"), f=(0, a.getEdgeTerminal)(r, "target");
            if(l&&f&&l!==f){
              var h=n.indexMap[
                l
              ], v=n.indexMap[
                f
              ], p=n.nodeMap[
                l
              ], g=n.nodeMap[
                f
              ];
              if(p&&g){
                var y=p.depth===g.depth?0:Math.log(Math.abs(p.depth-g.depth)/10);
                p.comboId===g.comboId&&(y/=2);
                var m=y?Math.pow(s, y):1;
                if(p.comboId!==g.comboId&&1===m?m=s/2:p.comboId===g.comboId&&(m=2), (0, a.isNumber)(g.x)&&(0, a.isNumber)(p.x)&&(0, a.isNumber)(g.y)&&(0, a.isNumber)(p.y)){
                  var x=t[
                    "".concat(f, "-").concat(l)
                  ], b=x.vl, _=x.vx, w=x.vy, E=(b-o(r))/b*i*u(r)*m, D=_*E, I=w*E, S=c[
                    d
                  ];
                  e[
                    v
                  ].x-=D*S, e[
                    v
                  ].y-=I*S, e[
                    h
                  ].x+=D*(1-S), e[
                    h
                  ].y+=I*(1-S)
                }
              }
            }
          }))
        }, t.prototype.getType=function(){
          return"comboForce"
        }, t
      }
      (i.Base);
      t.ComboForceLayout=u
    }, 148196:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.arrayToTextureData=t.attributesToTextureData=t.buildTextureDataWithTwoEdgeAttr=t.buildTextureData=t.proccessToFunc=void 0;
      var r=n(781422), o=n(491922);
      t.proccessToFunc=function(e, t){
        return e?(0, r.isNumber)(e)?function(){
          return e
        }
        :e:function(){
          return t||1
        }
      };
      t.buildTextureData=function(e, t){
        var n=[
        ], r=[
        ], i={
        }, a=0;
        for(a=0;
        a<e.length;
        a++){
          var u=e[
            a
          ];
          i[
            u.id
          ]
          =a, n.push(u.x), n.push(u.y), n.push(0), n.push(0), r.push([
          ])
        }
        for(a=0;
        a<t.length;
        a++){
          var c=t[
            a
          ], s=(0, o.getEdgeTerminal)(c, "source"), d=(0, o.getEdgeTerminal)(c, "target");
          isNaN(i[
            s
          ])||isNaN(i[
            d
          ])||(r[
            i[
              s
            ]
          ].push(i[
            d
          ]), r[
            i[
              d
            ]
          ].push(i[
            s
          ]))
        }
        var l=0;
        for(a=0;
        a<e.length;
        a++){
          var f=n.length, h=r[
            a
          ], v=h.length;
          n[
            4*a+2
          ]
          =f, n[
            4*a+3
          ]
          =v, l=Math.max(l, v);
          for(var p=0;
          p<v;
          ++p){
            var g=h[
              p
            ];
            n.push(+g)
          }
        }
        for(;
        n.length%4!=0;
        )n.push(0);
        return{
          maxEdgePerVetex:l, array:new Float32Array(n)
        }
      };
      t.buildTextureDataWithTwoEdgeAttr=function(e, t, n, r){
        var i=[
        ], a=[
        ], u={
        }, c=0;
        for(c=0;
        c<e.length;
        c++){
          var s=e[
            c
          ];
          u[
            s.id
          ]
          =c, i.push(s.x), i.push(s.y), i.push(0), i.push(0), a.push([
          ])
        }
        for(c=0;
        c<t.length;
        c++){
          var d=t[
            c
          ], l=(0, o.getEdgeTerminal)(d, "source"), f=(0, o.getEdgeTerminal)(d, "target");
          a[
            u[
              l
            ]
          ].push(u[
            f
          ]), a[
            u[
              l
            ]
          ].push(n(d)), a[
            u[
              l
            ]
          ].push(r(d)), a[
            u[
              l
            ]
          ].push(0), a[
            u[
              f
            ]
          ].push(u[
            l
          ]), a[
            u[
              f
            ]
          ].push(n(d)), a[
            u[
              f
            ]
          ].push(r(d)), a[
            u[
              f
            ]
          ].push(0)
        }
        var h=0;
        for(c=0;
        c<e.length;
        c++){
          var v=i.length, p=a[
            c
          ], g=p.length;
          i[
            4*c+2
          ]
          =v+1048576*g/4, i[
            4*c+3
          ]
          =0, h=Math.max(h, g/4);
          for(var y=0;
          y<g;
          ++y){
            var m=p[
              y
            ];
            i.push(+m)
          }
        }
        for(;
        i.length%4!=0;
        )i.push(0);
        return{
          maxEdgePerVetex:h, array:new Float32Array(i)
        }
      };
      t.attributesToTextureData=function(e, t){
        var n=[
        ], r=e.length, o={
        };
        return t.forEach((function(t){
          e.forEach((function(e, i){
            if(void 0===o[
              t[
                e
              ]
            ]
            &&(o[
              t[
                e
              ]
            ]
            =Object.keys(o).length), n.push(o[
              t[
                e
              ]
            ]), i===r-1)for(;
            n.length%4!=0;
            )n.push(0)
          }))
        })), {
          array:new Float32Array(n), count:Object.keys(o).length
        }
      };
      t.arrayToTextureData=function(e){
        for(var t=[
        ], n=e.length, r=e[
          0
        ].length, o=function(r){
          e.forEach((function(e, o){
            if(t.push(e[
              r
            ]), o===n-1)for(;
            t.length%4!=0;
            )t.push(0)
          }))
        }, i=0;
        i<r;
        i++)o(i);
        return new Float32Array(t)
      }
    }, 173462:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(611519), o=function(e, t, n){
        for(var r, o=n;
        t.length&&(r=t[
          t.length-1
        ]).i<=o;
        )t.pop(), null==e||e.push(r.vs), o++;
        return o
      }, i=function(e, t){
        return function(n, r){
          if(void 0!==n.fixorder&&void 0!==r.fixorder)return n.fixorder-r.fixorder;
          if(n.barycenter<r.barycenter)return-1;
          if(n.barycenter>r.barycenter)return 1;
          if(t&&void 0!==n.order&&void 0!==r.order){
            if(n.order<r.order)return-1;
            if(n.order>r.order)return 1
          }
          return e?r.i-n.i:n.i-r.i
        }
      };
      t.default=function(e, t, n, a){
        var u=(0, r.partition)(e, (function(e){
          var t=e.hasOwnProperty("fixorder")&&!isNaN(e.fixorder);
          return a?!t&&e.hasOwnProperty("barycenter"):t||e.hasOwnProperty("barycenter")
        })), c=u.lhs, s=u.rhs.sort((function(e, t){
          return-e.i- -t.i
        })), d=[
        ], l=0, f=0, h=0;
        null==c||c.sort(i(!!t, !!n)), h=o(d, s, h), null==c||c.forEach((function(e){
          var t;
          h+=null===(t=e.vs)||void 0===t?void 0:t.length, d.push(e.vs), l+=e.barycenter*e.weight, f+=e.weight, h=o(d, s, h)
        }));
        var v={
          vs:d.flat()
        };
        return f&&(v.barycenter=l/f, v.weight=f), v
      }
    }, 242784:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(){
        function e(e){
          this.xmid=e.xmid, this.ymid=e.ymid, this.length=e.length, this.massCenter=e.massCenter||[
            0, 0
          ], this.mass=e.mass||1
        }
        return e.prototype.getLength=function(){
          return this.length
        }, e.prototype.contains=function(e, t){
          var n=this.length/2;
          return e<=this.xmid+n&&e>=this.xmid-n&&t<=this.ymid+n&&t>=this.ymid-n
        }, e.prototype.NW=function(){
          return new e({
            xmid:this.xmid-this.length/4, ymid:this.ymid+this.length/4, length:this.length/2
          })
        }, e.prototype.NE=function(){
          return new e({
            xmid:this.xmid+this.length/4, ymid:this.ymid+this.length/4, length:this.length/2
          })
        }, e.prototype.SW=function(){
          return new e({
            xmid:this.xmid-this.length/4, ymid:this.ymid-this.length/4, length:this.length/2
          })
        }, e.prototype.SE=function(){
          return new e({
            xmid:this.xmid+this.length/4, ymid:this.ymid-this.length/4, length:this.length/2
          })
        }, e
      }
      ();
      t.default=n
    }, 255573:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.FORCE_LAYOUT_TYPE_MAP=t.LAYOUT_MESSAGE=void 0, t.LAYOUT_MESSAGE={
        RUN:"LAYOUT_RUN", END:"LAYOUT_END", ERROR:"LAYOUT_ERROR", TICK:"LAYOUT_TICK", GPURUN:"GPU_LAYOUT_RUN", GPUEND:"GPU_LAYOUT_END"
      }, t.FORCE_LAYOUT_TYPE_MAP={
        gForce:!0, force2:!0, fruchterman:!0, forceAtlas2:!0, force:!0, "graphin-force":!0
      }
    }, 257110:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(e, t){
        if("next"!==e&&"prev"!==e)return t
      }, r=function(e){
        e.prev.next=e.next, e.next.prev=e.prev, delete e.next, delete e.prev
      }, o=function(){
        function e(){
          var e={
          };
          e.prev=e, e.next=e.prev, this.shortcut=e
        }
        return e.prototype.dequeue=function(){
          var e=this.shortcut, t=e.prev;
          if(t&&t!==e)return r(t), t
        }, e.prototype.enqueue=function(e){
          var t=this.shortcut;
          e.prev&&e.next&&r(e), e.next=t.next, t.next.prev=e, t.next=e, e.prev=t
        }, e.prototype.toString=function(){
          for(var e=[
          ], t=this.shortcut, r=t.prev;
          r!==t;
          )e.push(JSON.stringify(r, n)), r=null==r?void 0:r.prev;
          return"[".concat(e.join(", "), "]")
        }, e
      }
      ();
      t.default=o
    }, 262121:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__awaiter||function(e, t, n, r){
        return new(n||(n=Promise))((function(o, i){
          function a(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function u(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, u)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, a=this&&this.__generator||function(e, t){
        var n, r, o, i, a={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:u(0), throw:u(1), return:u(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function u(u){
          return function(c){
            return function(u){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, u[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, r&&(o=2&u[
                  0
                ]
                ?r.return:u[
                  0
                ]
                ?r.throw||((o=r.return)&&o.call(r), 0):r.next)&&!(o=o.call(r, u[
                  1
                ])).done)return o;
                switch(r=0, o&&(u=[
                  2&u[
                    0
                  ], o.value
                ]), u[
                  0
                ]){
                  case 0:case 1:o=u;
                  break;
                  case 4:return a.label++, {
                    value:u[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, r=u[
                    1
                  ], u=[
                    0
                  ];
                  continue;
                  case 7:u=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(o=a.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==u[
                    0
                  ]
                  &&2!==u[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===u[
                    0
                  ]
                  &&(!o||u[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&u[
                    1
                  ]
                  <o[
                    3
                  ])){
                    a.label=u[
                      1
                    ];
                    break
                  }
                  if(6===u[
                    0
                  ]
                  &&a.label<o[
                    1
                  ]){
                    a.label=o[
                      1
                    ], o=u;
                    break
                  }
                  if(o&&a.label<o[
                    2
                  ]){
                    a.label=o[
                      2
                    ], a.ops.push(u);
                    break
                  }
                  o[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                u=t.call(e, a)
              }
              catch(e){
                u=[
                  6, e
                ], r=0
              }
              finally{
                n=o=0
              }
              if(5&u[
                0
              ])throw u[
                1
              ];
              return{
                value:u[
                  0
                ]
                ?u[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              u, c
            ])
          }
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.GForceGPULayout=void 0;
      var u=n(346271), c=n(781422), s=n(104706), d=n(148196), l=n(491922), f=n(812564), h=n(255573), v=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.maxIteration=1e3, n.edgeStrength=200, n.nodeStrength=1e3, n.coulombDisScale=.005, n.damping=.9, n.maxSpeed=1e3, n.minMovement=.5, n.interval=.02, n.factor=1, n.linkDistance=1, n.gravity=10, n.workerEnabled=!1, n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.nodeMap={
          }, n.nodeIdxMap={
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:2e3, gravity:10, clustering:!1, clusterGravity:10
          }
        }, t.prototype.execute=function(){
          return i(this, void 0, void 0, (function(){
            var e, t, n, r, o;
            return a(this, (function(i){
              switch(i.label){
                case 0:return(t=(e=this).nodes)&&0!==t.length?(e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight), e.center||(e.center=[
                  e.width/2, e.height/2
                ]), n=e.center, 1===t.length?(t[
                  0
                ].x=n[
                  0
                ], t[
                  0
                ].y=n[
                  1
                ], e.onLayoutEnd&&e.onLayoutEnd(), [
                  2
                ]):(r={
                }, o={
                }, t.forEach((function(t, n){
                  (0, c.isNumber)(t.x)||(t.x=Math.random()*e.width), (0, c.isNumber)(t.y)||(t.y=Math.random()*e.height), r[
                    t.id
                  ]
                  =t, o[
                    t.id
                  ]
                  =n
                })), e.nodeMap=r, e.nodeIdxMap=o, e.nodeStrength=(0, d.proccessToFunc)(e.nodeStrength, 1), e.edgeStrength=(0, d.proccessToFunc)(e.edgeStrength, 1), [
                  4, e.run()
                ])):(e.onLayoutEnd&&e.onLayoutEnd(), [
                  2
                ]);
                case 1:return i.sent(), [
                  2
                ]
              }
            }))
          }))
        }, t.prototype.executeWithWorker=function(e, t){
          var n=this, r=n.nodes, o=n.center;
          if(r&&0!==r.length){
            if(1===r.length)return r[
              0
            ].x=o[
              0
            ], void(r[
              0
            ].y=o[
              1
            ]);
            var i={
            }, a={
            };
            r.forEach((function(e, t){
              (0, c.isNumber)(e.x)||(e.x=Math.random()*n.width), (0, c.isNumber)(e.y)||(e.y=Math.random()*n.height), i[
                e.id
              ]
              =e, a[
                e.id
              ]
              =t
            })), n.nodeMap=i, n.nodeIdxMap=a, n.nodeStrength=(0, d.proccessToFunc)(n.nodeStrength, 1), n.edgeStrength=(0, d.proccessToFunc)(n.edgeStrength, 1), n.run(e, t)
          }
        }, t.prototype.run=function(e, t){
          return i(this, void 0, void 0, (function(){
            var n, r, o, u, v, p, g, y, m, x, b, _, w, E, D, I, S, M, k, O, N, z, C, G, L, T, P=this;
            return a(this, (function(j){
              switch(j.label){
                case 0:for(r=(n=this).nodes, o=n.edges, u=n.maxIteration, n.width||"undefined"==typeof window||(n.width=window.innerWidth), n.height||"undefined"==typeof window||(n.height=window.innerHeight), v=r.length, n.linkDistance=(0, d.proccessToFunc)(n.linkDistance), n.edgeStrength=(0, d.proccessToFunc)(n.edgeStrength), p=(0, d.buildTextureDataWithTwoEdgeAttr)(r, o, n.linkDistance, n.edgeStrength), g=p.maxEdgePerVetex, y=p.array, n.degrees=(0, l.getDegree)(r.length, n.nodeIdxMap, o).map((function(e){
                  return e.all
                })), m=[
                ], x=[
                ], b=[
                ], _=[
                ], w=[
                ], E=[
                ], D=[
                ], n.getMass||(n.getMass=function(e){
                  return n.degrees[
                    n.nodeIdxMap[
                      e.id
                    ]
                  ]
                  ||1
                }), I=n.gravity, S=n.center, r.forEach((function(e, t){
                  m.push(n.getMass(e)), x.push(n.nodeStrength(e)), n.degrees[
                    t
                  ]
                  ||(n.degrees[
                    t
                  ]
                  =0);
                  var r=[
                    S[
                      0
                    ], S[
                      1
                    ], I
                  ];
                  if(n.getCenter){
                    var o=n.getCenter(e, n.degrees[
                      t
                    ]);
                    o&&(0, c.isNumber)(o[
                      0
                    ])&&(0, c.isNumber)(o[
                      1
                    ])&&(0, c.isNumber)(o[
                      2
                    ])&&(r=o)
                  }
                  b.push(r[
                    0
                  ]), _.push(r[
                    1
                  ]), w.push(r[
                    2
                  ]), (0, c.isNumber)(e.fx)&&(0, c.isNumber)(e.fy)?(E.push(e.fx||.001), D.push(e.fy||.001)):(E.push(0), D.push(0))
                })), M=(0, d.arrayToTextureData)([
                  m, n.degrees, x, E
                ]), k=(0, d.arrayToTextureData)([
                  b, _, w, D
                ]), O=n.workerEnabled, N=O?s.World.create({
                  canvas:e, engineOptions:{
                    supportCompute:!0
                  }
                }):s.World.create({
                  engineOptions:{
                    supportCompute:!0
                  }
                }), z=n.onLayoutEnd, C=[
                ], y.forEach((function(e){
                  C.push(e)
                })), G=0;
                G<4;
                G++)C.push(0);
                return L=N.createKernel(f.gForceBundle).setDispatch([
                  v, 1, 1
                ]).setBinding({
                  u_Data:y, u_damping:n.damping, u_maxSpeed:n.maxSpeed, u_minMovement:n.minMovement, u_coulombDisScale:n.coulombDisScale, u_factor:n.factor, u_NodeAttributeArray1:M, u_NodeAttributeArray2:k, MAX_EDGE_PER_VERTEX:g, VERTEX_COUNT:v, u_AveMovement:C, u_interval:n.interval
                }), T=N.createKernel(f.aveMovementBundle).setDispatch([
                  1, 1, 1
                ]).setBinding({
                  u_Data:y, VERTEX_COUNT:v, u_AveMovement:[
                    0, 0, 0, 0
                  ]
                }), [
                  4, function(){
                    return i(P, void 0, void 0, (function(){
                      var o, i, c;
                      return a(this, (function(a){
                        switch(a.label){
                          case 0:o=0, a.label=1;
                          case 1:return o<u?[
                            4, L.execute()
                          ]
                          :[
                            3, 5
                          ];
                          case 2:return a.sent(), T.setBinding({
                            u_Data:L
                          }), [
                            4, T.execute()
                          ];
                          case 3:a.sent(), i=Math.max(.02, n.interval-.002*o), L.setBinding({
                            u_interval:i, u_AveMovement:T
                          }), a.label=4;
                          case 4:return o++, [
                            3, 1
                          ];
                          case 5:return[
                            4, L.getOutput()
                          ];
                          case 6:return c=a.sent(), e?t.postMessage({
                            type:h.LAYOUT_MESSAGE.GPUEND, vertexEdgeData:c
                          }):r.forEach((function(e, t){
                            var n=c[
                              4*t
                            ], r=c[
                              4*t+1
                            ];
                            e.x=n, e.y=r
                          })), z&&z(), [
                            2
                          ]
                        }
                      }))
                    }))
                  }
                  ()
                ];
                case 1:return j.sent(), [
                  2
                ]
              }
            }))
          }))
        }, t.prototype.getType=function(){
          return"gForce-gpu"
        }, t
      }
      (u.Base);
      t.GForceGPULayout=v
    }, 278936:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(33592), o=function(){
        function e(e){
          this.distances=e.distances, this.dimension=e.dimension||2, this.linkDistance=e.linkDistance
        }
        return e.prototype.layout=function(){
          var e=this, t=e.dimension, n=e.distances, o=e.linkDistance;
          try{
            var i=r.Matrix.mul(r.Matrix.pow(n, 2), -.5), a=i.mean("row"), u=i.mean("column"), c=i.mean();
            i.add(c).subRowVector(a).subColumnVector(u);
            var s=new r.SingularValueDecomposition(i), d=r.Matrix.sqrt(s.diagonalMatrix).diagonal();
            return s.leftSingularVectors.toJSON().map((function(e){
              return r.Matrix.mul([
                e
              ], [
                d
              ]).toJSON()[
                0
              ].splice(0, t)
            }))
          }
          catch(e){
            for(var l=[
            ], f=0;
            f<n.length;
            f++){
              var h=Math.random()*o, v=Math.random()*o;
              l.push([
                h, v
              ])
            }
            return l
          }
        }, e
      }
      ();
      t.default=o
    }, 282342:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(611519), o=function(e, t, n, o, i, a){
        var u={
          rank:a, borderType:t, width:0, height:0
        }, c=i[
          t
        ]
        [
          a-1
        ], s=(0, r.addDummyNode)(e, "border", u, n);
        i[
          t
        ]
        [
          a
        ]
        =s, e.setParent(s, o), c&&e.setEdge(c, s, {
          weight:1
        })
      };
      t.default=function(e){
        var t, n=function(t){
          var r=e.children(t), i=e.node(t);
          if((null==r?void 0:r.length)&&r.forEach((function(e){
            return n(e)
          })), i.hasOwnProperty("minRank")){
            i.borderLeft=[
            ], i.borderRight=[
            ];
            for(var a=i.minRank, u=i.maxRank+1;
            a<u;
            a+=1)o(e, "borderLeft", "_bl", t, i, a), o(e, "borderRight", "_br", t, i, a)
          }
        };
        null===(t=e.children())||void 0===t||t.forEach((function(e){
          return n(e)
        }))
      }
    }, 290244:function(e, t){
      var n=this&&this.__assign||function(){
        return(n=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=function(){
        function e(){
          this.cells=[
          ], this.columnNum=0, this.rowNum=0, this.additionColumn=[
          ], this.additionRow=[
          ]
        }
        return e.prototype.init=function(t, n, r){
          this.cells=[
          ], this.CELL_W=r.CELL_W||e.DEFAULT_CELL_W, this.CELL_H=r.CELL_H||e.DEFAULT_CELL_H, this.columnNum=Math.ceil(t/this.CELL_W), this.rowNum=Math.ceil(n/this.CELL_H), e.MIN_DIST=Math.pow(t, 2)+Math.pow(n, 2);
          for(var o=0;
          o<this.columnNum;
          o++){
            for(var i=[
            ], a=0;
            a<this.rowNum;
            a++){
              var u={
                dx:o, dy:a, x:o*this.CELL_W, y:a*this.CELL_H, occupied:!1
              };
              i.push(u)
            }
            this.cells.push(i)
          }
        }, e.prototype.findGridByNodeId=function(e){
          for(var t, n, r=0;
          r<this.columnNum;
          r++)for(var o=0;
          o<this.rowNum;
          o++)if(this.cells[
            r
          ]
          [
            o
          ].node&&(null===(n=null===(t=this.cells[
            r
          ]
          [
            o
          ])||void 0===t?void 0:t.node)||void 0===n?void 0:n.id)===e)return{
            column:r, row:o
          };
          return null
        }, e.prototype.sqdist=function(e, t){
          return Math.pow(e.x-t.x, 2)+Math.pow(e.y-t.y, 2)
        }, e.prototype.occupyNearest=function(t){
          for(var n, r=e.MIN_DIST, o=null, i=0;
          i<this.columnNum;
          i++)for(var a=0;
          a<this.rowNum;
          a++)!this.cells[
            i
          ]
          [
            a
          ].occupied&&(n=this.sqdist(t, this.cells[
            i
          ]
          [
            a
          ]))<r&&(r=n, o=this.cells[
            i
          ]
          [
            a
          ]);
          return o&&(o.occupied=!0), o
        }, e.prototype.insertColumn=function(e, t){
          if(!(t<=0)){
            for(var r=0;
            r<t;
            r++){
              this.cells[
                r+this.columnNum
              ]
              =[
              ];
              for(var o=0;
              o<this.rowNum;
              o++)this.cells[
                r+this.columnNum
              ]
              [
                o
              ]
              ={
                dx:r, dy:o, x:r*this.CELL_W, y:o*this.CELL_H, occupied:!1, node:null
              }
            }
            for(r=this.columnNum-1;
            r>e;
            r--)for(o=0;
            o<this.rowNum;
            o++)this.cells[
              r+t
            ]
            [
              o
            ]
            =n(n({
            }, this.cells[
              r
            ]
            [
              o
            ]), {
              x:(r+t)*this.CELL_W, y:o*this.CELL_H
            }), this.cells[
              r
            ]
            [
              o
            ]
            ={
              x:r*this.CELL_W, y:o*this.CELL_H, occupied:!0, node:null
            };
            for(o=0;
            o<this.additionColumn.length;
            o++)this.additionColumn[
              o
            ]
            >=e&&(this.additionColumn[
              o
            ]
            +=t);
            for(r=0;
            r<t;
            r++)this.additionColumn.push(e+r+1);
            this.columnNum+=t
          }
        }, e.prototype.insertRow=function(e, t){
          if(!(t<=0)){
            for(var r=0;
            r<t;
            r++)for(var o=0;
            o<this.columnNum;
            o++)this.cells[
              o
            ]
            [
              r+this.rowNum
            ]
            ={
              dx:o, dy:r, x:o*this.CELL_W, y:r*this.CELL_H, occupied:!1, node:null
            };
            for(o=0;
            o<this.columnNum;
            o++)for(r=this.rowNum-1;
            r>e;
            r--)this.cells[
              o
            ]
            [
              r+t
            ]
            =n(n({
            }, this.cells[
              o
            ]
            [
              r
            ]), {
              dx:o, dy:r+t, x:o*this.CELL_W, y:(r+t)*this.CELL_H
            }), this.cells[
              o
            ]
            [
              r
            ]
            ={
              dx:o, dy:r, x:o*this.CELL_W, y:r*this.CELL_H, occupied:!1, node:null
            };
            for(r=0;
            r<this.additionRow.length;
            r++)this.additionRow[
              r
            ]
            >=e&&(this.additionRow[
              r
            ]
            +=t);
            for(o=0;
            o<t;
            o++)this.additionRow.push(e+o+1);
            this.rowNum+=t
          }
        }, e.prototype.getNodes=function(){
          for(var e=[
          ], t=0;
          t<this.columnNum;
          t++)for(var n=0;
          n<this.rowNum;
          n++)this.cells[
            t
          ]
          [
            n
          ].node&&e.push(this.cells[
            t
          ]
          [
            n
          ]);
          return e
        }, e.MIN_DIST=50, e.DEFAULT_CELL_W=80, e.DEFAULT_CELL_H=80, e
      }
      ();
      t.default=r
    }, 296524:function(e, t, n){
      var r=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=r(n(850497)), i=r(n(301294)), a=r(n(543517)), u=r(n(318319)), c=r(n(377749)), s=n(781422), d=n(578326), l=n(611519), f=function(e, t, n){
        return t.map((function(t){
          return(0, a.default)(e, t, n)
        }))
      }, h=function(e, t, n, r){
        var o=new d.Graph;
        null==e||e.forEach((function(e){
          for(var i, a=e.graph().root, s=(0, c.default)(e, a, o, t, n, r), d=0;
          d<(null===(i=s.vs)||void 0===i?void 0:i.length);
          d++){
            var l=e.node(s.vs[
              d
            ]);
            l&&(l.order=d)
          }
          (0, u.default)(e, o, s.vs)
        }))
      }, v=function(e, t){
        null==t||t.forEach((function(t){
          null==t||t.forEach((function(t, n){
            e.node(t).order=n
          }))
        }))
      };
      t.default=function(e, t){
        for(var n=(0, l.maxRank)(e), r=[
        ], a=[
        ], u=1;
        u<n+1;
        u++)r.push(u);
        for(u=n-1;
        u>-1;
        u--)a.push(u);
        var c=f(e, r, "inEdges"), d=f(e, a, "outEdges"), p=(0, o.default)(e);
        v(e, p);
        for(var g, y=Number.POSITIVE_INFINITY, m=(u=0, 0);
        m<4;
        ++u, ++m){
          h(u%2?c:d, u%4>=2, !1, t), p=(0, l.buildLayerMatrix)(e), (x=(0, i.default)(e, p))<y&&(m=0, g=(0, s.clone)(p), y=x)
        }
        p=(0, o.default)(e), v(e, p);
        for(u=0, m=0;
        m<4;
        ++u, ++m){
          var x;
          h(u%2?c:d, u%4>=2, !0, t), p=(0, l.buildLayerMatrix)(e), (x=(0, i.default)(e, p))<y&&(m=0, g=(0, s.clone)(p), y=x)
        }
        v(e, g)
      }
    }, 299367:function(e, t, n){
      var r=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=r(n(299952)), i=function(e){
        var t=[
        ], n={
        }, r={
        }, o=function(i){
          var a;
          r[
            i
          ]
          ||(r[
            i
          ]
          =!0, n[
            i
          ]
          =!0, null===(a=e.outEdges(i))||void 0===a||a.forEach((function(e){
            n[
              e.w
            ]
            ?t.push(e):o(e.w)
          })), delete n[
            i
          ])
        };
        return e.nodes().forEach(o), t
      };
      t.default={
        run:function(e){
          var t="greedy"===e.graph().acyclicer?(0, o.default)(e, function(e){
            return function(t){
              var n;
              return(null===(n=e.edge(t))||void 0===n?void 0:n.weight)||1
            }
          }
          (e)):i(e);
          null==t||t.forEach((function(t){
            var n=e.edge(t);
            e.removeEdgeObj(t), n.forwardName=t.name, n.reversed=!0, e.setEdge(t.w, t.v, n, "rev-".concat(Math.random()))
          }))
        }, undo:function(e){
          e.edges().forEach((function(t){
            var n=e.edge(t);
            if(n.reversed){
              e.removeEdgeObj(t);
              var r=n.forwardName;
              delete n.reversed, delete n.forwardName, e.setEdge(t.w, t.v, n, r)
            }
          }))
        }
      }
    }, 299952:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var a=i(n(257110)), u=n(746888), c=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return o(t, e), t
      }
      (a.default), s=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return o(t, e), t
      }
      (u.Graph), d=function(){
        return 1
      }, l=function(e, t, n){
        for(var r, o=[
        ], i=t[
          t.length-1
        ], a=t[
          0
        ];
        e.nodeCount();
        ){
          for(;
          r=a.dequeue();
          )f(e, t, n, r);
          for(;
          r=i.dequeue();
          )f(e, t, n, r);
          if(e.nodeCount())for(var u=t.length-2;
          u>0;
          --u)if(r=t[
            u
          ].dequeue()){
            o=o.concat(f(e, t, n, r, !0));
            break
          }
        }
        return o
      }, f=function(e, t, n, r, o){
        var i, a, u=[
        ];
        return null===(i=e.inEdges(r.v))||void 0===i||i.forEach((function(r){
          var i=e.edge(r), a=e.node(r.v);
          o&&u.push({
            v:r.v, w:r.w, in:0, out:0
          }), void 0===a.out&&(a.out=0), a.out-=i, v(t, n, a)
        })), null===(a=e.outEdges(r.v))||void 0===a||a.forEach((function(r){
          var o=e.edge(r), i=r.w, a=e.node(i);
          void 0===a.in&&(a.in=0), a.in-=o, v(t, n, a)
        })), e.removeNode(r.v), o?u:void 0
      }, h=function(e, t){
        var n=new s, r=0, o=0;
        e.nodes().forEach((function(e){
          n.setNode(e, {
            v:e, in:0, out:0
          })
        })), e.edges().forEach((function(e){
          var i=n.edge(e)||0, a=(null==t?void 0:t(e))||1, u=i+a;
          n.setEdge(e.v, e.w, u), o=Math.max(o, n.node(e.v).out+=a), r=Math.max(r, n.node(e.w).in+=a)
        }));
        for(var i=[
        ], a=o+r+3, u=0;
        u<a;
        u++)i.push(new c);
        var d=r+1;
        return n.nodes().forEach((function(e){
          v(i, d, n.node(e))
        })), {
          buckets:i, zeroIdx:d, graph:n
        }
      }, v=function(e, t, n){
        n.out?n.in?e[
          n.out-n.in+t
        ].enqueue(n):e[
          e.length-1
        ].enqueue(n):e[
          0
        ].enqueue(n)
      };
      t.default=function(e, t){
        var n;
        if(e.nodeCount()<=1)return[
        ];
        var r=h(e, t||d);
        return null===(n=l(r.graph, r.buckets, r.zeroIdx).map((function(t){
          return e.outEdges(t.v, t.w)
        })))||void 0===n?void 0:n.flat()
      }
    }, 301294:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(611519), o=function(e, t, n){
        for(var o=(0, r.zipObject)(n, n.map((function(e, t){
          return t
        }))), i=t.map((function(t){
          var n, r=null===(n=e.outEdges(t))||void 0===n?void 0:n.map((function(t){
            return{
              pos:o[
                t.w
              ]
              ||0, weight:e.edge(t).weight
            }
          }));
          return null==r?void 0:r.sort((function(e, t){
            return e.pos-t.pos
          }))
        })).flat().filter((function(e){
          return void 0!==e
        })), a=1;
        a<n.length;
        )a<<=1;
        var u=2*a-1;
        a-=1;
        var c=Array(u).fill(0, 0, u), s=0;
        return null==i||i.forEach((function(e){
          if(e){
            var t=e.pos+a;
            c[
              t
            ]
            +=e.weight;
            for(var n=0;
            t>0;
            )t%2&&(n+=c[
              t+1
            ]), c[
              t=t-1>>1
            ]
            +=e.weight;
            s+=e.weight*n
          }
        })), s
      };
      t.default=function(e, t){
        for(var n=0, r=1;
        r<(null==t?void 0:t.length);
        r+=1)n+=o(e, t[
          r-1
        ], t[
          r
        ]);
        return n
      }
    }, 303396:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(611519), o=function(e, t, n, i, a, u, c){
        var s=e.children(c);
        if(null==s?void 0:s.length){
          var d=(0, r.addBorderNode)(e, "_bt"), l=(0, r.addBorderNode)(e, "_bb"), f=e.node(c);
          e.setParent(d, c), f.borderTop=d, e.setParent(l, c), f.borderBottom=l, null==s||s.forEach((function(r){
            o(e, t, n, i, a, u, r);
            var s=e.node(r), f=s.borderTop?s.borderTop:r, h=s.borderBottom?s.borderBottom:r, v=s.borderTop?i:2*i, p=f!==h?1:a-u[
              c
            ]
            +1;
            e.setEdge(d, f, {
              minlen:p, weight:v, nestingEdge:!0
            }), e.setEdge(h, l, {
              minlen:p, weight:v, nestingEdge:!0
            })
          })), e.parent(c)||e.setEdge(t, d, {
            weight:0, minlen:a+u[
              c
            ]
          })
        }
        else c!==t&&e.setEdge(t, c, {
          weight:0, minlen:n
        })
      }, i=function(e){
        var t, n={
        }, r=function(t, o){
          var i=e.children(t);
          null==i||i.forEach((function(e){
            return r(e, o+1)
          })), n[
            t
          ]
          =o
        };
        return null===(t=e.children())||void 0===t||t.forEach((function(e){
          return r(e, 1)
        })), n
      }, a=function(e){
        var t=0;
        return e.edges().forEach((function(n){
          t+=e.edge(n).weight
        })), t
      };
      t.default={
        run:function(e){
          var t, n=(0, r.addDummyNode)(e, "root", {
          }, "_root"), u=i(e), c=Math.max.apply(Math, Object.values(u));
          Math.abs(c)===1/0&&(c=1);
          var s=c-1, d=2*s+1;
          e.graph().nestingRoot=n, e.edges().forEach((function(t){
            e.edge(t).minlen*=d
          }));
          var l=a(e)+1;
          null===(t=e.children())||void 0===t||t.forEach((function(t){
            o(e, n, d, l, s, u, t)
          })), e.graph().nodeRankFactor=d
        }, cleanup:function(e){
          var t=e.graph();
          t.nestingRoot&&e.removeNode(t.nestingRoot), delete t.nestingRoot, e.edges().forEach((function(t){
            e.edge(t).nestingEdge&&e.removeEdgeObj(t)
          }))
        }
      }
    }, 305802:function(e){
      var t;
      "undefined"!=typeof self&&self, t=function(){
        return function(e){
          var t={
          };
          function n(r){
            if(t[
              r
            ])return t[
              r
            ].exports;
            var o=t[
              r
            ]
            ={
              i:r, l:!1, exports:{
              }
            };
            return e[
              r
            ].call(o.exports, o, o.exports, n), o.l=!0, o.exports
          }
          return n.m=e, n.c=t, n.d=function(e, t, r){
            n.o(e, t)||Object.defineProperty(e, t, {
              configurable:!1, enumerable:!0, get:r
            })
          }, n.n=function(e){
            var t=e&&e.__esModule?function(){
              return e.default
            }
            :function(){
              return e
            };
            return n.d(t, "a", t), t
          }, n.o=function(e, t){
            return Object.prototype.hasOwnProperty.call(e, t)
          }, n.p="", n(n.s=5)
        }
        ([
          function(e, t){
            e.exports={
              assign:Object.assign, getHeight:function(e, t, n, r){
                return void 0===r&&(r="height"), "center"===n?(e[
                  r
                ]
                +t[
                  r
                ])/2:e.height
              }
            }
          }, function(e, t, n){
            var r=n(3), o=function(){
              function e(e, t){
                void 0===t&&(t={
                }), this.options=t, this.rootNode=r(e, t)
              }
              return e.prototype.execute=function(){
                throw new Error("please override this method")
              }, e
            }
            ();
            e.exports=o
          }, function(e, t, n){
            var r=n(4), o=[
              "LR", "RL", "TB", "BT", "H", "V"
            ], i=[
              "LR", "RL", "H"
            ], a=o[
              0
            ];
            e.exports=function(e, t, n){
              var u=t.direction||a;
              if(t.isHorizontal=function(e){
                return i.indexOf(e)>-1
              }
              (u), u&&-1===o.indexOf(u))throw new TypeError("Invalid direction: "+u);
              if(u===o[
                0
              ])n(e, t);
              else if(u===o[
                1
              ])n(e, t), e.right2left();
              else if(u===o[
                2
              ])n(e, t);
              else if(u===o[
                3
              ])n(e, t), e.bottom2top();
              else if(u===o[
                4
              ]
              ||u===o[
                5
              ]){
                var c=r(e, t), s=c.left, d=c.right;
                n(s, t), n(d, t), t.isHorizontal?s.right2left():s.bottom2top(), d.translate(s.x-d.x, s.y-d.y), e.x=s.x, e.y=d.y;
                var l=e.getBoundingBox();
                t.isHorizontal?l.top<0&&e.translate(0, -l.top):l.left<0&&e.translate(-l.left, 0)
              }
              var f=t.fixedRoot;
              return void 0===f&&(f=!0), f&&e.translate(-(e.x+e.width/2+e.hgap), -(e.y+e.height/2+e.vgap)), function(e, t){
                if(t.radial){
                  var n=t.isHorizontal?[
                    "x", "y"
                  ]
                  :[
                    "y", "x"
                  ], r=n[
                    0
                  ], o=n[
                    1
                  ], i={
                    x:1/0, y:1/0
                  }, a={
                    x:-1/0, y:-1/0
                  }, u=0;
                  e.DFTraverse((function(e){
                    u++;
                    var t=e.x, n=e.y;
                    i.x=Math.min(i.x, t), i.y=Math.min(i.y, n), a.x=Math.max(a.x, t), a.y=Math.max(a.y, n)
                  }));
                  var c=a[
                    o
                  ]
                  -i[
                    o
                  ];
                  if(0===c)return;
                  var s=2*Math.PI/u;
                  e.DFTraverse((function(t){
                    var n=(t[
                      o
                    ]
                    -i[
                      o
                    ])/c*(2*Math.PI-s)+s, a=t[
                      r
                    ]
                    -e[
                      r
                    ];
                    t.x=Math.cos(n)*a, t.y=Math.sin(n)*a
                  }))
                }
              }
              (e, t), e
            }
          }, function(e, t, n){
            var r=n(0), o={
              getId:function(e){
                return e.id||e.name
              }, getPreH:function(e){
                return e.preH||0
              }, getPreV:function(e){
                return e.preV||0
              }, getHGap:function(e){
                return e.hgap||18
              }, getVGap:function(e){
                return e.vgap||18
              }, getChildren:function(e){
                return e.children
              }, getHeight:function(e){
                return e.height||36
              }, getWidth:function(e){
                var t=e.label||" ";
                return e.width||18*t.split("").length
              }
            };
            function i(e, t){
              var n=this;
              if(n.vgap=n.hgap=0, e instanceof i)return e;
              n.data=e;
              var r=t.getHGap(e), o=t.getVGap(e);
              return n.preH=t.getPreH(e), n.preV=t.getPreV(e), n.width=t.getWidth(e), n.height=t.getHeight(e), n.width+=n.preH, n.height+=n.preV, n.id=t.getId(e), n.x=n.y=0, n.depth=0, n.children||(n.children=[
              ]), n.addGap(r, o), n
            }
            r.assign(i.prototype, {
              isRoot:function(){
                return 0===this.depth
              }, isLeaf:function(){
                return 0===this.children.length
              }, addGap:function(e, t){
                var n=this;
                n.hgap+=e, n.vgap+=t, n.width+=2*e, n.height+=2*t
              }, eachNode:function(e){
                for(var t, n=[
                  this
                ];
                t=n.shift();
                )e(t), n=t.children.concat(n)
              }, DFTraverse:function(e){
                this.eachNode(e)
              }, BFTraverse:function(e){
                for(var t, n=[
                  this
                ];
                t=n.shift();
                )e(t), n=n.concat(t.children)
              }, getBoundingBox:function(){
                var e={
                  left:Number.MAX_VALUE, top:Number.MAX_VALUE, width:0, height:0
                };
                return this.eachNode((function(t){
                  e.left=Math.min(e.left, t.x), e.top=Math.min(e.top, t.y), e.width=Math.max(e.width, t.x+t.width), e.height=Math.max(e.height, t.y+t.height)
                })), e
              }, translate:function(e, t){
                void 0===e&&(e=0), void 0===t&&(t=0), this.eachNode((function(n){
                  n.x+=e, n.y+=t, n.x+=n.preH, n.y+=n.preV
                }))
              }, right2left:function(){
                var e=this, t=e.getBoundingBox();
                e.eachNode((function(e){
                  e.x=e.x-2*(e.x-t.left)-e.width
                })), e.translate(t.width, 0)
              }, bottom2top:function(){
                var e=this, t=e.getBoundingBox();
                e.eachNode((function(e){
                  e.y=e.y-2*(e.y-t.top)-e.height
                })), e.translate(0, t.height)
              }
            }), e.exports=function(e, t, n){
              void 0===t&&(t={
              });
              var a, u=new i(e, t=r.assign({
              }, o, t)), c=[
                u
              ];
              if(!n&&!e.collapsed)for(;
              a=c.shift();
              )if(!a.data.collapsed){
                var s=t.getChildren(a.data), d=s?s.length:0;
                if(a.children=new Array(d), s&&d)for(var l=0;
                l<d;
                l++){
                  var f=new i(s[
                    l
                  ], t);
                  a.children[
                    l
                  ]
                  =f, c.push(f), f.parent=a, f.depth=a.depth+1
                }
              }
              return u
            }
          }, function(e, t, n){
            var r=n(3);
            e.exports=function(e, t){
              for(var n=r(e.data, t, !0), o=r(e.data, t, !0), i=e.children.length, a=Math.round(i/2), u=t.getSide||function(e, t){
                return t<a?"right":"left"
              }, c=0;
              c<i;
              c++){
                var s=e.children[
                  c
                ];
                "right"===u(s, c)?o.children.push(s):n.children.push(s)
              }
              return n.eachNode((function(e){
                e.isRoot()||(e.side="left")
              })), o.eachNode((function(e){
                e.isRoot()||(e.side="right")
              })), {
                left:n, right:o
              }
            }
          }, function(e, t, n){
            var r={
              compactBox:n(6), dendrogram:n(8), indented:n(10), mindmap:n(12)
            };
            e.exports=r
          }, function(e, t, n){
            function r(e, t){
              return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e, t){
                return e.__proto__=t, e
              })(e, t)
            }
            var o=n(1), i=n(7), a=n(2), u=n(0), c=function(e){
              function t(){
                return e.apply(this, arguments)||this
              }
              var n, o;
              return o=e, (n=t).prototype=Object.create(o.prototype), n.prototype.constructor=n, r(n, o), t.prototype.execute=function(){
                return a(this.rootNode, this.options, i)
              }, t
            }
            (o), s={
            };
            e.exports=function(e, t){
              return t=u.assign({
              }, s, t), new c(e, t).execute()
            }
          }, function(e, t){
            function n(e, t, n, r){
              void 0===r&&(r=[
              ]);
              var o=this;
              o.w=e||0, o.h=t||0, o.y=n||0, o.x=0, o.c=r||[
              ], o.cs=r.length, o.prelim=0, o.mod=0, o.shift=0, o.change=0, o.tl=null, o.tr=null, o.el=null, o.er=null, o.msel=0, o.mser=0
            }
            function r(e, t, n){
              n?e.y+=t:e.x+=t, e.children.forEach((function(e){
                r(e, t, n)
              }))
            }
            function o(e, t){
              var n=t?e.y:e.x;
              return e.children.forEach((function(e){
                n=Math.min(o(e, t), n)
              })), n
            }
            function i(e, t){
              r(e, -o(e, t), t)
            }
            function a(e, t, n){
              n?t.y=e.x:t.x=e.x, e.c.forEach((function(e, r){
                a(e, t.children[
                  r
                ], n)
              }))
            }
            function u(e, t, n){
              void 0===n&&(n=0), t?(e.x=n, n+=e.width):(e.y=n, n+=e.height), e.children.forEach((function(e){
                u(e, t, n)
              }))
            }
            n.fromNode=function(e, t){
              if(!e)return null;
              var r=[
              ];
              return e.children.forEach((function(e){
                r.push(n.fromNode(e, t))
              })), t?new n(e.height, e.width, e.x, r):new n(e.width, e.height, e.y, r)
            }, e.exports=function(e, t){
              void 0===t&&(t={
              });
              var r=t.isHorizontal;
              function o(e){
                0===e.cs?(e.el=e, e.er=e, e.msel=e.mser=0):(e.el=e.c[
                  0
                ].el, e.msel=e.c[
                  0
                ].msel, e.er=e.c[
                  e.cs-1
                ].er, e.mser=e.c[
                  e.cs-1
                ].mser)
              }
              function c(e, t, n){
                for(var r=e.c[
                  t-1
                ], o=r.mod, i=e.c[
                  t
                ], a=i.mod;
                null!==r&&null!==i;
                ){
                  f(r)>n.low&&(n=n.nxt);
                  var u=o+r.prelim+r.w-(a+i.prelim);
                  u>0&&(a+=u, s(e, t, n.index, u));
                  var c=f(r), h=f(i);
                  c<=h&&null!==(r=l(r))&&(o+=r.mod), c>=h&&null!==(i=d(i))&&(a+=i.mod)
                }
                !r&&i?function(e, t, n, r){
                  var o=e.c[
                    0
                  ].el;
                  o.tl=n;
                  var i=r-n.mod-e.c[
                    0
                  ].msel;
                  o.mod+=i, o.prelim-=i, e.c[
                    0
                  ].el=e.c[
                    t
                  ].el, e.c[
                    0
                  ].msel=e.c[
                    t
                  ].msel
                }
                (e, t, i, a):r&&!i&&function(e, t, n, r){
                  var o=e.c[
                    t
                  ].er;
                  o.tr=n;
                  var i=r-n.mod-e.c[
                    t
                  ].mser;
                  o.mod+=i, o.prelim-=i, e.c[
                    t
                  ].er=e.c[
                    t-1
                  ].er, e.c[
                    t
                  ].mser=e.c[
                    t-1
                  ].mser
                }
                (e, t, r, o)
              }
              function s(e, t, n, r){
                e.c[
                  t
                ].mod+=r, e.c[
                  t
                ].msel+=r, e.c[
                  t
                ].mser+=r, function(e, t, n, r){
                  if(n!==t-1){
                    var o=t-n;
                    e.c[
                      n+1
                    ].shift+=r/o, e.c[
                      t
                    ].shift-=r/o, e.c[
                      t
                    ].change-=r-r/o
                  }
                }
                (e, t, n, r)
              }
              function d(e){
                return 0===e.cs?e.tl:e.c[
                  0
                ]
              }
              function l(e){
                return 0===e.cs?e.tr:e.c[
                  e.cs-1
                ]
              }
              function f(e){
                return e.y+e.h
              }
              function h(e, t, n){
                for(;
                null!==n&&e>=n.low;
                )n=n.nxt;
                return{
                  low:e, index:t, nxt:n
                }
              }
              u(e, r);
              var v=n.fromNode(e, r);
              return function e(t){
                if(0!==t.cs){
                  e(t.c[
                    0
                  ]);
                  for(var n=h(f(t.c[
                    0
                  ].el), 0, null), r=1;
                  r<t.cs;
                  ++r){
                    e(t.c[
                      r
                    ]);
                    var i=f(t.c[
                      r
                    ].er);
                    c(t, r, n), n=h(i, r, n)
                  }
                  !function(e){
                    e.prelim=(e.c[
                      0
                    ].prelim+e.c[
                      0
                    ].mod+e.c[
                      e.cs-1
                    ].mod+e.c[
                      e.cs-1
                    ].prelim+e.c[
                      e.cs-1
                    ].w)/2-e.w/2
                  }
                  (t), o(t)
                }
                else o(t)
              }
              (v), function e(t, n){
                n+=t.mod, t.x=t.prelim+n, function(e){
                  for(var t=0, n=0, r=0;
                  r<e.cs;
                  r++)n+=(t+=e.c[
                    r
                  ].shift)+e.c[
                    r
                  ].change, e.c[
                    r
                  ].mod+=n
                }
                (t);
                for(var r=0;
                r<t.cs;
                r++)e(t.c[
                  r
                ], n)
              }
              (v, 0), a(v, e, r), i(e, r), e
            }
          }, function(e, t, n){
            function r(e, t){
              return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e, t){
                return e.__proto__=t, e
              })(e, t)
            }
            var o=n(1), i=n(9), a=n(2), u=n(0), c=function(e){
              function t(){
                return e.apply(this, arguments)||this
              }
              var n, o;
              return o=e, (n=t).prototype=Object.create(o.prototype), n.prototype.constructor=n, r(n, o), t.prototype.execute=function(){
                var e=this;
                return e.rootNode.width=0, a(e.rootNode, e.options, i)
              }, t
            }
            (o), s={
            };
            e.exports=function(e, t){
              return t=u.assign({
              }, s, t), new c(e, t).execute()
            }
          }, function(e, t, n){
            var r=n(0);
            function o(e, t){
              void 0===e&&(e=0), void 0===t&&(t=[
              ]);
              var n=this;
              n.x=n.y=0, n.leftChild=n.rightChild=null, n.height=0, n.children=t
            }
            var i={
              isHorizontal:!0, nodeSep:20, nodeSize:20, rankSep:200, subTreeSep:10
            };
            function a(e, t, n){
              n?(t.x=e.x, t.y=e.y):(t.x=e.y, t.y=e.x), e.children.forEach((function(e, r){
                a(e, t.children[
                  r
                ], n)
              }))
            }
            e.exports=function(e, t){
              void 0===t&&(t={
              }), t=r.assign({
              }, i, t);
              var n, u=0, c=function e(t){
                if(!t)return null;
                t.width=0, t.depth&&t.depth>u&&(u=t.depth);
                var n=t.children, r=n.length, i=new o(t.height, [
                ]);
                return n.forEach((function(t, n){
                  var o=e(t);
                  i.children.push(o), 0===n&&(i.leftChild=o), n===r-1&&(i.rightChild=o)
                })), i.originNode=t, i.isLeaf=t.isLeaf(), i
              }
              (e);
              return function e(t){
                if(t.isLeaf||0===t.children.length)t.drawingDepth=u;
                else{
                  var n=t.children.map((function(t){
                    return e(t)
                  })), r=Math.min.apply(null, n);
                  t.drawingDepth=r-1
                }
                return t.drawingDepth
              }
              (c), function e(r){
                r.x=r.drawingDepth*t.rankSep, r.isLeaf?(r.y=0, n&&(r.y=n.y+n.height+t.nodeSep, r.originNode.parent!==n.originNode.parent&&(r.y+=t.subTreeSep)), n=r):(r.children.forEach((function(t){
                  e(t)
                })), r.y=(r.leftChild.y+r.rightChild.y)/2)
              }
              (c), a(c, e, t.isHorizontal), e
            }
          }, function(e, t, n){
            function r(e, t){
              return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e, t){
                return e.__proto__=t, e
              })(e, t)
            }
            var o=n(1), i=n(11), a=n(4), u=n(0), c=[
              "LR", "RL", "H"
            ], s=c[
              0
            ], d=function(e){
              function t(){
                return e.apply(this, arguments)||this
              }
              var n, o;
              return o=e, (n=t).prototype=Object.create(o.prototype), n.prototype.constructor=n, r(n, o), t.prototype.execute=function(){
                var e=this.options, t=this.rootNode;
                e.isHorizontal=!0;
                var n=e.indent, r=void 0===n?20:n, o=e.dropCap, u=void 0===o||o, d=e.direction, l=void 0===d?s:d, f=e.align;
                if(l&&-1===c.indexOf(l))throw new TypeError("Invalid direction: "+l);
                if(l===c[
                  0
                ])i(t, r, u, f);
                else if(l===c[
                  1
                ])i(t, r, u, f), t.right2left();
                else if(l===c[
                  2
                ]){
                  var h=a(t, e), v=h.left, p=h.right;
                  i(v, r, u, f), v.right2left(), i(p, r, u, f);
                  var g=v.getBoundingBox();
                  p.translate(g.width, 0), t.x=p.x-t.width/2
                }
                return t
              }, t
            }
            (o), l={
            };
            e.exports=function(e, t){
              return t=u.assign({
              }, l, t), new d(e, t).execute()
            }
          }, function(e, t, n){
            var r=n(0);
            e.exports=function(e, t, n, o){
              var i=null;
              e.eachNode((function(e){
                !function(e, t, n, o, i){
                  var a=("function"==typeof n?n(e):n)*e.depth;
                  if(!o)try{
                    if(e.id===e.parent.children[
                      0
                    ].id)return e.x+=a, void(e.y=t?t.y:0)
                  }
                  catch(e){
                  }
                  if(e.x+=a, t){
                    if(e.y=t.y+r.getHeight(t, e, i), t.parent&&e.parent.id!==t.parent.id){
                      var u=t.parent, c=u.y+r.getHeight(u, e, i);
                      e.y=c>e.y?c:e.y
                    }
                  }
                  else e.y=0
                }
                (e, i, t, n, o), i=e
              }))
            }
          }, function(e, t, n){
            function r(e, t){
              return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e, t){
                return e.__proto__=t, e
              })(e, t)
            }
            var o=n(1), i=n(13), a=n(2), u=n(0), c=function(e){
              function t(){
                return e.apply(this, arguments)||this
              }
              var n, o;
              return o=e, (n=t).prototype=Object.create(o.prototype), n.prototype.constructor=n, r(n, o), t.prototype.execute=function(){
                return a(this.rootNode, this.options, i)
              }, t
            }
            (o), s={
            };
            e.exports=function(e, t){
              return t=u.assign({
              }, s, t), new c(e, t).execute()
            }
          }, function(e, t, n){
            var r=n(0);
            function o(e, t){
              var n=0;
              return e.children.length?e.children.forEach((function(e){
                n+=o(e, t)
              })):n=e.height, e._subTreeSep=t.getSubTreeSep(e.data), e.totalHeight=Math.max(e.height, n)+2*e._subTreeSep, e.totalHeight
            }
            function i(e){
              var t=e.children, n=t.length;
              if(n){
                t.forEach((function(e){
                  i(e)
                }));
                var r=t[
                  0
                ], o=t[
                  n-1
                ], a=o.y-r.y+o.height, u=0;
                if(t.forEach((function(e){
                  u+=e.totalHeight
                })), a>e.height)e.y=r.y+a/2-e.height/2;
                else if(1!==t.length||e.height>u){
                  var c=e.y+(e.height-a)/2-r.y;
                  t.forEach((function(e){
                    e.translate(0, c)
                  }))
                }
                else e.y=(r.y+r.height/2+o.y+o.height/2)/2-e.height/2
              }
            }
            var a={
              getSubTreeSep:function(){
                return 0
              }
            };
            e.exports=function(e, t){
              void 0===t&&(t={
              }), t=r.assign({
              }, a, t), e.parent={
                x:0, width:0, height:0, y:0
              }, e.BFTraverse((function(e){
                e.x=e.parent.x+e.parent.width
              })), e.parent=null, o(e, t), e.startY=0, e.y=e.totalHeight/2-e.height/2, e.eachNode((function(e){
                var t=e.children, n=t.length;
                if(n){
                  var r=t[
                    0
                  ];
                  if(r.startY=e.startY+e._subTreeSep, 1===n)r.y=e.y+e.height/2-r.height/2;
                  else{
                    r.y=r.startY+r.totalHeight/2-r.height/2;
                    for(var o=1;
                    o<n;
                    o++){
                      var i=t[
                        o
                      ];
                      i.startY=t[
                        o-1
                      ].startY+t[
                        o-1
                      ].totalHeight, i.y=i.startY+i.totalHeight/2-i.height/2
                    }
                  }
                }
              })), i(e)
            }
          }
        ])
      }, e.exports=t()
    }, 313570:function(e, t, n){
      var r=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), o=this&&this.__exportStar||function(e, t){
        for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t, n)||r(t, e, n)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), o(n(83303), t)
    }, 318319:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      t.default=function(e, t, n){
        var r, o={
        };
        null==n||n.forEach((function(n){
          for(var i, a, u=e.parent(n);
          u;
          ){
            if((i=e.parent(u))?(a=o[
              i
            ], o[
              i
            ]
            =u):(a=r, r=u), a&&a!==u)return void t.setEdge(a, u);
            u=i
          }
        }))
      }
    }, 323151:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(){
        function e(e){
          this.id=e.id||0, this.rx=e.rx, this.ry=e.ry, this.fx=0, this.fy=0, this.mass=e.mass, this.degree=e.degree, this.g=e.g||0
        }
        return e.prototype.distanceTo=function(e){
          var t=this.rx-e.rx, n=this.ry-e.ry;
          return Math.hypot(t, n)
        }, e.prototype.setPos=function(e, t){
          this.rx=e, this.ry=t
        }, e.prototype.resetForce=function(){
          this.fx=0, this.fy=0
        }, e.prototype.addForce=function(e){
          var t=e.rx-this.rx, n=e.ry-this.ry, r=Math.hypot(t, n);
          r=r<1e-4?1e-4:r;
          var o=this.g*(this.degree+1)*(e.degree+1)/r;
          this.fx+=o*t/r, this.fy+=o*n/r
        }, e.prototype.in=function(e){
          return e.contains(this.rx, this.ry)
        }, e.prototype.add=function(t){
          var n=this.mass+t.mass;
          return new e({
            rx:(this.rx*this.mass+t.rx*t.mass)/n, ry:(this.ry*this.mass+t.ry*t.mass)/n, mass:n, degree:this.degree+t.degree
          })
        }, e
      }
      ();
      t.default=n
    }, 324964:function(e, t, n){
      var r=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), o=this&&this.__exportStar||function(e, t){
        for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t, n)||r(t, e, n)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), o(n(122127), t)
    }, 346271:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.Base=void 0;
      var n=function(){
        function e(){
          this.nodes=[
          ], this.edges=[
          ], this.combos=[
          ], this.comboEdges=[
          ], this.hiddenNodes=[
          ], this.hiddenEdges=[
          ], this.hiddenCombos=[
          ], this.vedges=[
          ], this.positions=[
          ], this.destroyed=!1, this.onLayoutEnd=function(){
          }
        }
        return e.prototype.layout=function(e){
          return this.init(e), this.execute(!0)
        }, e.prototype.init=function(e){
          this.nodes=e.nodes||[
          ], this.edges=e.edges||[
          ], this.combos=e.combos||[
          ], this.comboEdges=e.comboEdges||[
          ], this.hiddenNodes=e.hiddenNodes||[
          ], this.hiddenEdges=e.hiddenEdges||[
          ], this.hiddenCombos=e.hiddenCombos||[
          ], this.vedges=e.vedges||[
          ]
        }, e.prototype.execute=function(e){
        }, e.prototype.executeWithWorker=function(){
        }, e.prototype.getDefaultCfg=function(){
          return{
          }
        }, e.prototype.updateCfg=function(e){
          e&&Object.assign(this, e)
        }, e.prototype.getType=function(){
          return"base"
        }, e.prototype.destroy=function(){
          this.nodes=null, this.edges=null, this.combos=null, this.positions=null, this.destroyed=!0
        }, e
      }
      ();
      t.Base=n
    }, 368501:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.RandomLayout=void 0;
      var i=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.center=[
            0, 0
          ], n.width=300, n.height=300, n.nodes=[
          ], n.edges=[
          ], n.onLayoutEnd=function(){
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            center:[
              0, 0
            ], width:300, height:300
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.center;
          return e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight), t&&t.forEach((function(t){
            t.x=.9*(Math.random()-.5)*e.width+n[
              0
            ], t.y=.9*(Math.random()-.5)*e.height+n[
              1
            ]
          })), e.onLayoutEnd&&e.onLayoutEnd(), {
            nodes:t, edges:this.edges
          }
        }, t.prototype.getType=function(){
          return"random"
        }, t
      }
      (n(346271).Base);
      t.RandomLayout=i
    }, 370238:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.GForceLayout=void 0;
      var i=n(346271), a=n(781422), u=function(e, t){
        return e?(0, a.isNumber)(e)?function(t){
          return e
        }
        :e:function(e){
          return t||1
        }
      }, c=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.maxIteration=500, n.workerEnabled=!1, n.edgeStrength=200, n.nodeStrength=1e3, n.coulombDisScale=.005, n.damping=.9, n.maxSpeed=1e3, n.minMovement=.5, n.interval=.02, n.factor=1, n.linkDistance=1, n.gravity=10, n.preventOverlap=!0, n.collideStrength=1, n.tick=function(){
          }, n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.nodeMap={
          }, n.nodeIdxMap={
          }, n.animate=!0, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:500, gravity:10, enableTick:!0, animate:!0
          }
        }, t.prototype.execute=function(){
          var e, t, n=this, r=n.nodes;
          if(void 0!==n.timeInterval&&"undefined"!=typeof window&&window.clearInterval(n.timeInterval), r&&0!==r.length){
            n.width||"undefined"==typeof window||(n.width=window.innerWidth), n.height||"undefined"==typeof window||(n.height=window.innerHeight), n.center||(n.center=[
              n.width/2, n.height/2
            ]);
            var o=n.center;
            if(1===r.length)return r[
              0
            ].x=o[
              0
            ], r[
              0
            ].y=o[
              1
            ], void(null===(t=n.onLayoutEnd)||void 0===t||t.call(n));
            var i={
            }, c={
            };
            r.forEach((function(e, t){
              (0, a.isNumber)(e.x)||(e.x=Math.random()*n.width), (0, a.isNumber)(e.y)||(e.y=Math.random()*n.height), i[
                e.id
              ]
              =e, c[
                e.id
              ]
              =t
            })), n.nodeMap=i, n.nodeIdxMap=c, n.linkDistance=u(n.linkDistance, 1), n.nodeStrength=u(n.nodeStrength, 1), n.edgeStrength=u(n.edgeStrength, 1);
            var s, d=n.nodeSize;
            if(n.preventOverlap){
              var l, f=n.nodeSpacing;
              l=(0, a.isNumber)(f)?function(){
                return f
              }
              :(0, a.isFunction)(f)?f:function(){
                return 0
              }, s=d?(0, a.isArray)(d)?function(e){
                return Math.max(d[
                  0
                ], d[
                  1
                ])+l(e)
              }
              :function(e){
                return d+l(e)
              }
              :function(e){
                return e.size?(0, a.isArray)(e.size)?Math.max(e.size[
                  0
                ], e.size[
                  1
                ])+l(e):(0, a.isObject)(e.size)?Math.max(e.size.width, e.size.height)+l(e):e.size+l(e):10+l(e)
              }
            }
            n.nodeSize=s;
            var h=n.edges;
            n.degrees=(0, a.getDegree)(r.length, n.nodeIdxMap, h), n.getMass||(n.getMass=function(e){
              return e.mass||n.degrees[
                n.nodeIdxMap[
                  e.id
                ]
              ].all||1
            }), n.run()
          }
          else null===(e=n.onLayoutEnd)||void 0===e||e.call(n)
        }, t.prototype.run=function(){
          var e, t=this, n=t.maxIteration, r=t.nodes, o=t.workerEnabled, i=t.minMovement, a=t.animate;
          if(r)if(o||!a){
            for(var u=0;
            u<n;
            u++){
              var c=t.runOneStep(u);
              if(t.reachMoveThreshold(r, c, i))break
            }
            null===(e=t.onLayoutEnd)||void 0===e||e.call(t)
          }
          else{
            if("undefined"==typeof window)return;
            var s=0;
            this.timeInterval=window.setInterval((function(){
              var e, o;
              if(r){
                var a=t.runOneStep(s)||[
                ];
                t.reachMoveThreshold(r, a, i)&&(null===(e=t.onLayoutEnd)||void 0===e||e.call(t), window.clearInterval(t.timeInterval)), ++s>=n&&(null===(o=t.onLayoutEnd)||void 0===o||o.call(t), window.clearInterval(t.timeInterval))
              }
            }), 0)
          }
        }, t.prototype.reachMoveThreshold=function(e, t, n){
          var r=0;
          return e.forEach((function(e, n){
            var o=e.x-t[
              n
            ].x, i=e.y-t[
              n
            ].y;
            r+=Math.sqrt(o*o+i*i)
          })), (r/=e.length)<n
        }, t.prototype.runOneStep=function(e){
          var t, n=this, r=n.nodes, o=n.edges, i=[
          ], a=[
          ];
          if(r){
            r.forEach((function(e, t){
              i[
                2*t
              ]
              =0, i[
                2*t+1
              ]
              =0, a[
                2*t
              ]
              =0, a[
                2*t+1
              ]
              =0
            })), n.calRepulsive(i, r), o&&n.calAttractive(i, o), n.calGravity(i, r);
            var u=Math.max(.02, n.interval-.002*e);
            n.updateVelocity(i, a, u, r);
            var c=[
            ];
            return r.forEach((function(e){
              c.push({
                x:e.x, y:e.y
              })
            })), n.updatePosition(a, u, r), null===(t=n.tick)||void 0===t||t.call(n), c
          }
        }, t.prototype.calRepulsive=function(e, t){
          var n=this, r=n.getMass, o=n.factor, i=n.coulombDisScale, a=n.preventOverlap, u=n.collideStrength, c=void 0===u?1:u, s=n.nodeStrength, d=n.nodeSize;
          t.forEach((function(n, u){
            var l=r?r(n):1;
            t.forEach((function(t, f){
              if(!(u>=f)){
                var h=n.x-t.x, v=n.y-t.y;
                0===h&&0===v&&(h=.01*Math.random(), v=.01*Math.random());
                var p=h*h+v*v, g=Math.sqrt(p), y=(g+.1)*i, m=h/g, x=v/g, b=.5*(s(n)+s(t))*o/(y*y), _=r?r(t):1;
                if(e[
                  2*u
                ]
                +=m*b, e[
                  2*u+1
                ]
                +=x*b, e[
                  2*f
                ]
                -=m*b, e[
                  2*f+1
                ]
                -=x*b, a&&(d(n)+d(t))/2>g){
                  var w=c*(s(n)+s(t))*.5/p;
                  e[
                    2*u
                  ]
                  +=m*w/l, e[
                    2*u+1
                  ]
                  +=x*w/l, e[
                    2*f
                  ]
                  -=m*w/_, e[
                    2*f+1
                  ]
                  -=x*w/_
                }
              }
            }))
          }))
        }, t.prototype.calAttractive=function(e, t){
          var n=this, r=n.nodeMap, o=n.nodeIdxMap, i=n.linkDistance, u=n.edgeStrength, c=n.nodeSize, s=n.getMass;
          t.forEach((function(t, n){
            var d=(0, a.getEdgeTerminal)(t, "source"), l=(0, a.getEdgeTerminal)(t, "target"), f=r[
              d
            ], h=r[
              l
            ], v=h.x-f.x, p=h.y-f.y;
            0===v&&0===p&&(v=.01*Math.random(), p=.01*Math.random());
            var g=Math.sqrt(v*v+p*p), y=v/g, m=p/g, x=((i(t, f, h)||1+(c(f)+c(h)||0)/2)-g)*u(t), b=o[
              d
            ], _=o[
              l
            ], w=s?s(f):1, E=s?s(h):1;
            e[
              2*b
            ]
            -=y*x/w, e[
              2*b+1
            ]
            -=m*x/w, e[
              2*_
            ]
            +=y*x/E, e[
              2*_+1
            ]
            +=m*x/E
          }))
        }, t.prototype.calGravity=function(e, t){
          for(var n=this, r=n.center, o=n.gravity, i=n.degrees, u=t.length, c=0;
          c<u;
          c++){
            var s=t[
              c
            ], d=s.x-r[
              0
            ], l=s.y-r[
              1
            ], f=o;
            if(n.getCenter){
              var h=n.getCenter(s, i[
                c
              ].all);
              h&&(0, a.isNumber)(h[
                0
              ])&&(0, a.isNumber)(h[
                1
              ])&&(0, a.isNumber)(h[
                2
              ])&&(d=s.x-h[
                0
              ], l=s.y-h[
                1
              ], f=h[
                2
              ])
            }
            f&&(e[
              2*c
            ]
            -=f*d, e[
              2*c+1
            ]
            -=f*l)
          }
        }, t.prototype.updateVelocity=function(e, t, n, r){
          var o=this, i=n*o.damping;
          r.forEach((function(n, r){
            var a=e[
              2*r
            ]
            *i||.01, u=e[
              2*r+1
            ]
            *i||.01, c=Math.sqrt(a*a+u*u);
            if(c>o.maxSpeed){
              var s=o.maxSpeed/c;
              a*=s, u*=s
            }
            t[
              2*r
            ]
            =a, t[
              2*r+1
            ]
            =u
          }))
        }, t.prototype.updatePosition=function(e, t, n){
          n.forEach((function(n, r){
            if((0, a.isNumber)(n.fx)&&(0, a.isNumber)(n.fy))return n.x=n.fx, void(n.y=n.fy);
            var o=e[
              2*r
            ]
            *t, i=e[
              2*r+1
            ]
            *t;
            n.x+=o, n.y+=i
          }))
        }, t.prototype.stop=function(){
          this.timeInterval&&"undefined"!=typeof window&&window.clearInterval(this.timeInterval)
        }, t.prototype.destroy=function(){
          var e=this;
          e.stop(), e.tick=null, e.nodes=null, e.edges=null, e.destroyed=!0
        }, t.prototype.getType=function(){
          return"gForce"
        }, t
      }
      (i.Base);
      t.GForceLayout=c
    }, 377749:function(e, t, n){
      var r=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=r(n(669843)), i=r(n(8406)), a=r(n(173462)), u=function(e, t, n, r, d, l){
        var f, h, v, p, g=e.children(t), y=e.node(t), m=y?y.borderLeft:void 0, x=y?y.borderRight:void 0, b={
        };
        m&&(g=null==g?void 0:g.filter((function(e){
          return e!==m&&e!==x
        })));
        var _=(0, o.default)(e, g||[
        ]);
        null==_||_.forEach((function(t){
          var o;
          if(null===(o=e.children(t.v))||void 0===o?void 0:o.length){
            var i=u(e, t.v, n, r, l);
            b[
              t.v
            ]
            =i, i.hasOwnProperty("barycenter")&&s(t, i)
          }
        }));
        var w=(0, i.default)(_, n);
        c(w, b), null===(f=w.filter((function(e){
          return e.vs.length>0
        })))||void 0===f||f.forEach((function(t){
          var n=e.node(t.vs[
            0
          ]);
          n&&(t.fixorder=n.fixorder, t.order=n.order)
        }));
        var E=(0, a.default)(w, r, d, l);
        if(m&&(E.vs=[
          m, E.vs, x
        ].flat(), null===(h=e.predecessors(m))||void 0===h?void 0:h.length)){
          var D=e.node((null===(v=e.predecessors(m))||void 0===v?void 0:v[
            0
          ])||""), I=e.node((null===(p=e.predecessors(x))||void 0===p?void 0:p[
            0
          ])||"");
          E.hasOwnProperty("barycenter")||(E.barycenter=0, E.weight=0), E.barycenter=(E.barycenter*E.weight+D.order+I.order)/(E.weight+2), E.weight+=2
        }
        return E
      }, c=function(e, t){
        null==e||e.forEach((function(e){
          var n, r=null===(n=e.vs)||void 0===n?void 0:n.map((function(e){
            return t[
              e
            ]
            ?t[
              e
            ].vs:e
          }));
          e.vs=r.flat()
        }))
      }, s=function(e, t){
        void 0!==e.barycenter?(e.barycenter=(e.barycenter*e.weight+t.barycenter*t.weight)/(e.weight+t.weight), e.weight+=t.weight):(e.barycenter=t.barycenter, e.weight=t.weight)
      };
      t.default=u
    }, 396686:function(e, t, n){
      var r=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=n(53472), i=n(475022), a=r(n(744883)), u=o.longestPath, c=function(e){
        (0, o.longestPathWithLayer)(e), (0, i.feasibleTreeWithLayer)(e)
      }, s=function(e){
        (0, a.default)(e)
      };
      t.default=function(e){
        switch(e.graph().ranker){
          case"network-simplex":s(e);
          break;
          case"tight-tree":c(e);
          break;
          case"longest-path":u(e);
          break;
          default:c(e)
        }
      }
    }, 419937:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.toNumber=t.isNaN=t.isNumber=void 0;
      t.isNumber=function(e){
        return"number"==typeof e
      };
      t.isNaN=function(e){
        return Number.isNaN(Number(e))
      };
      t.toNumber=function(e){
        var n=parseFloat(e);
        return(0, t.isNaN)(n)?e:n
      }
    }, 425444:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__awaiter||function(e, t, n, r){
        return new(n||(n=Promise))((function(o, i){
          function a(e){
            try{
              c(r.next(e))
            }
            catch(e){
              i(e)
            }
          }
          function u(e){
            try{
              c(r.throw(e))
            }
            catch(e){
              i(e)
            }
          }
          function c(e){
            var t;
            e.done?o(e.value):(t=e.value, t instanceof n?t:new n((function(e){
              e(t)
            }))).then(a, u)
          }
          c((r=r.apply(e, t||[
          ])).next())
        }))
      }, a=this&&this.__generator||function(e, t){
        var n, r, o, i, a={
          label:0, sent:function(){
            if(1&o[
              0
            ])throw o[
              1
            ];
            return o[
              1
            ]
          }, trys:[
          ], ops:[
          ]
        };
        return i={
          next:u(0), throw:u(1), return:u(2)
        }, "function"==typeof Symbol&&(i[
          Symbol.iterator
        ]
        =function(){
          return this
        }), i;
        function u(u){
          return function(c){
            return function(u){
              if(n)throw new TypeError("Generator is already executing.");
              for(;
              i&&(i=0, u[
                0
              ]
              &&(a=0)), a;
              )try{
                if(n=1, r&&(o=2&u[
                  0
                ]
                ?r.return:u[
                  0
                ]
                ?r.throw||((o=r.return)&&o.call(r), 0):r.next)&&!(o=o.call(r, u[
                  1
                ])).done)return o;
                switch(r=0, o&&(u=[
                  2&u[
                    0
                  ], o.value
                ]), u[
                  0
                ]){
                  case 0:case 1:o=u;
                  break;
                  case 4:return a.label++, {
                    value:u[
                      1
                    ], done:!1
                  };
                  case 5:a.label++, r=u[
                    1
                  ], u=[
                    0
                  ];
                  continue;
                  case 7:u=a.ops.pop(), a.trys.pop();
                  continue;
                  default:if(!(o=a.trys, (o=o.length>0&&o[
                    o.length-1
                  ])||6!==u[
                    0
                  ]
                  &&2!==u[
                    0
                  ])){
                    a=0;
                    continue
                  }
                  if(3===u[
                    0
                  ]
                  &&(!o||u[
                    1
                  ]
                  >o[
                    0
                  ]
                  &&u[
                    1
                  ]
                  <o[
                    3
                  ])){
                    a.label=u[
                      1
                    ];
                    break
                  }
                  if(6===u[
                    0
                  ]
                  &&a.label<o[
                    1
                  ]){
                    a.label=o[
                      1
                    ], o=u;
                    break
                  }
                  if(o&&a.label<o[
                    2
                  ]){
                    a.label=o[
                      2
                    ], a.ops.push(u);
                    break
                  }
                  o[
                    2
                  ]
                  &&a.ops.pop(), a.trys.pop();
                  continue
                }
                u=t.call(e, a)
              }
              catch(e){
                u=[
                  6, e
                ], r=0
              }
              finally{
                n=o=0
              }
              if(5&u[
                0
              ])throw u[
                1
              ];
              return{
                value:u[
                  0
                ]
                ?u[
                  1
                ]
                :void 0, done:!0
              }
            }
            ([
              u, c
            ])
          }
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.FruchtermanGPULayout=void 0;
      var u=n(346271), c=n(781422), s=n(104706), d=n(148196), l=n(794341), f=n(255573), h=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.maxIteration=1e3, n.gravity=10, n.speed=1, n.clustering=!1, n.clusterField="cluster", n.clusterGravity=10, n.workerEnabled=!1, n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.nodeMap={
          }, n.nodeIdxMap={
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:1e3, gravity:10, speed:1, clustering:!1, clusterGravity:10
          }
        }, t.prototype.execute=function(){
          return i(this, void 0, void 0, (function(){
            var e, t, n, r, o, i=this;
            return a(this, (function(a){
              switch(a.label){
                case 0:return(t=(e=this).nodes)&&0!==t.length?(e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight), e.center||(e.center=[
                  e.width/2, e.height/2
                ]), n=e.center, 1===t.length?(t[
                  0
                ].x=n[
                  0
                ], t[
                  0
                ].y=n[
                  1
                ], e.onLayoutEnd&&e.onLayoutEnd(), [
                  2
                ]):(r={
                }, o={
                }, t.forEach((function(e, t){
                  (0, c.isNumber)(e.x)||(e.x=Math.random()*i.width), (0, c.isNumber)(e.y)||(e.y=Math.random()*i.height), r[
                    e.id
                  ]
                  =e, o[
                    e.id
                  ]
                  =t
                })), e.nodeMap=r, e.nodeIdxMap=o, [
                  4, e.run()
                ])):(e.onLayoutEnd&&e.onLayoutEnd(), [
                  2
                ]);
                case 1:return a.sent(), [
                  2
                ]
              }
            }))
          }))
        }, t.prototype.executeWithWorker=function(e, t){
          return i(this, void 0, void 0, (function(){
            var n, r, o, i, u, s=this;
            return a(this, (function(a){
              switch(a.label){
                case 0:return r=(n=this).nodes, o=n.center, r&&0!==r.length?1===r.length?(r[
                  0
                ].x=o[
                  0
                ], r[
                  0
                ].y=o[
                  1
                ], [
                  2
                ]):(i={
                }, u={
                }, r.forEach((function(e, t){
                  (0, c.isNumber)(e.x)||(e.x=Math.random()*s.width), (0, c.isNumber)(e.y)||(e.y=Math.random()*s.height), i[
                    e.id
                  ]
                  =e, u[
                    e.id
                  ]
                  =t
                })), n.nodeMap=i, n.nodeIdxMap=u, [
                  4, n.run(e, t)
                ]):[
                  2
                ];
                case 1:return a.sent(), [
                  2
                ]
              }
            }))
          }))
        }, t.prototype.run=function(e, t){
          return i(this, void 0, void 0, (function(){
            var n, r, o, u, h, v, p, g, y, m, x, b, _, w, E, D, I, S, M, k, O, N, z, C, G, L=this;
            return a(this, (function(T){
              switch(T.label){
                case 0:for(r=(n=this).nodes, o=n.edges, u=n.maxIteration, h=n.center, v=n.height*n.width, p=Math.sqrt(v)/10, g=v/(r.length+1), y=Math.sqrt(g), m=n.speed, x=n.clustering, b=(0, d.attributesToTextureData)([
                  n.clusterField
                ], r), _=b.array, w=b.count, r.forEach((function(e, t){
                  var n=0, r=0;
                  (0, c.isNumber)(e.fx)&&(0, c.isNumber)(e.fy)&&(n=e.fx||.001, r=e.fy||.001), _[
                    4*t+1
                  ]
                  =n, _[
                    4*t+2
                  ]
                  =r
                })), E=r.length, D=(0, d.buildTextureData)(r, o), I=D.maxEdgePerVetex, S=D.array, M=n.workerEnabled, k=M?s.World.create({
                  canvas:e, engineOptions:{
                    supportCompute:!0
                  }
                }):s.World.create({
                  engineOptions:{
                    supportCompute:!0
                  }
                }), O=n.onLayoutEnd, N=[
                ], z=0;
                z<w;
                z++)N.push(0, 0, 0, 0);
                return C=k.createKernel(l.fruchtermanBundle).setDispatch([
                  E, 1, 1
                ]).setBinding({
                  u_Data:S, u_K:y, u_K2:g, u_Gravity:n.gravity, u_ClusterGravity:n.clusterGravity||n.gravity||1, u_Speed:m, u_MaxDisplace:p, u_Clustering:x?1:0, u_Center:h, u_AttributeArray:_, u_ClusterCenters:N, MAX_EDGE_PER_VERTEX:I, VERTEX_COUNT:E
                }), x&&(G=k.createKernel(l.clusterBundle).setDispatch([
                  w, 1, 1
                ]).setBinding({
                  u_Data:S, u_NodeAttributes:_, u_ClusterCenters:N, VERTEX_COUNT:E, CLUSTER_COUNT:w
                })), [
                  4, function(){
                    return i(L, void 0, void 0, (function(){
                      var n, o;
                      return a(this, (function(i){
                        switch(i.label){
                          case 0:n=0, i.label=1;
                          case 1:return n<u?[
                            4, C.execute()
                          ]
                          :[
                            3, 6
                          ];
                          case 2:return i.sent(), x?(G.setBinding({
                            u_Data:C
                          }), [
                            4, G.execute()
                          ]):[
                            3, 4
                          ];
                          case 3:i.sent(), C.setBinding({
                            u_ClusterCenters:G
                          }), i.label=4;
                          case 4:C.setBinding({
                            u_MaxDisplace:p*=.99
                          }), i.label=5;
                          case 5:return n++, [
                            3, 1
                          ];
                          case 6:return[
                            4, C.getOutput()
                          ];
                          case 7:return o=i.sent(), e?t.postMessage({
                            type:f.LAYOUT_MESSAGE.GPUEND, vertexEdgeData:o
                          }):r.forEach((function(e, t){
                            var n=o[
                              4*t
                            ], r=o[
                              4*t+1
                            ];
                            e.x=n, e.y=r
                          })), O&&O(), [
                            2
                          ]
                        }
                      }))
                    }))
                  }
                  ()
                ];
                case 1:return T.sent(), [
                  2
                ]
              }
            }))
          }))
        }, t.prototype.getType=function(){
          return"fruchterman-gpu"
        }, t
      }
      (u.Base);
      t.FruchtermanGPULayout=h
    }, 452316:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.Layouts=t.Layout=void 0;
      var r=n(538119), o=n(36010), i=n(368501), a=n(501782), u=n(370238), c=n(324964), s=n(933455), d=n(679829), l=n(313570), f=n(558006), h=n(507982), v=n(800361), p=n(425444), g=n(262121), y=n(142335), m=n(4193), x=n(648991), b=n(769474), _=n(469524), w=n(781422), E=function(){
        function e(e){
          var t=(0, r.getLayoutByName)(e.type);
          this.layoutInstance=new t(e)
        }
        return e.prototype.layout=function(e){
          return this.layoutInstance.layout(e)
        }, e.prototype.updateCfg=function(e){
          this.layoutInstance.updateCfg(e)
        }, e.prototype.init=function(e){
          this.correctLayers(e.nodes), this.layoutInstance.init(e)
        }, e.prototype.correctLayers=function(e){
          if(null==e?void 0:e.length){
            var t=1/0, n=[
            ];
            if(e.forEach((function(e){
              (0, w.isString)(e.layer)&&(e.layer=parseInt(e.layer, 10)), void 0===e.layer||isNaN(e.layer)||(n.push(e), e.layer<t&&(t=e.layer))
            })), t<=0){
              var r=Math.abs(t)+1;
              n.forEach((function(e){
                return e.layer+=r
              }))
            }
          }
        }, e.prototype.execute=function(){
          this.layoutInstance.execute()
        }, e.prototype.getDefaultCfg=function(){
          return this.layoutInstance.getDefaultCfg()
        }, e.prototype.destroy=function(){
          return this.layoutInstance.destroy()
        }, e
      }
      ();
      t.Layout=E, t.Layouts={
        force:c.ForceLayout, fruchterman:v.FruchtermanLayout, forceAtlas2:x.ForceAtlas2Layout, gForce:u.GForceLayout, force2:a.Force2Layout, dagre:d.DagreLayout, dagreCompound:_.DagreCompoundLayout, circular:s.CircularLayout, radial:l.RadialLayout, concentric:f.ConcentricLayout, grid:o.GridLayout, mds:h.MDSLayout, comboForce:y.ComboForceLayout, comboCombined:m.ComboCombinedLayout, random:i.RandomLayout, "gForce-gpu":g.GForceGPULayout, "fruchterman-gpu":p.FruchtermanGPULayout, er:b.ERLayout
      }
    }, 469524:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__assign||function(){
        return(i=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, a=this&&this.__spreadArray||function(e, t, n){
        if(n||2===arguments.length)for(var r, o=0, i=t.length;
        o<i;
        o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t, 0, o)), r[
          o
        ]
        =t[
          o
        ]);
        return e.concat(r||Array.prototype.slice.call(t))
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.DagreCompoundLayout=void 0;
      var u=n(346271), c=n(389861), s=n(781422), d=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.rankdir="TB", n.nodesep=50, n.edgesep=5, n.ranksep=50, n.controlPoints=!0, n.anchorPoint=!0, n.nodes=[
          ], n.edges=[
          ], n.combos=[
          ], n.onLayoutEnd=function(){
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            rankdir:"TB", align:void 0, begin:void 0, nodeSize:void 0, nodesep:50, ranksep:50, controlPoints:!0, anchorPoint:!0
          }
        }, t.prototype.init=function(e){
          var t=e.hiddenNodes||[
          ], n=e.hiddenEdges||[
          ], r=e.hiddenCombos||[
          ];
          this.nodes=this.getDataByOrder((e.nodes||[
          ]).concat(t)), this.edges=this.getDataByOrder((e.edges||[
          ]).concat(n)), this.combos=(e.combos||[
          ]).concat(r.map((function(e){
            return i(i({
            }, e), {
              collapsed:!0
            })
          })))
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.edges;
          if(t){
            var r=e.getLayoutConfig(), o=r.graphDef, i=r.graphOption, a=r.graphSettings, u=(0, c.buildGraph)(o, i, a), s=(0, c.flatGraph)(u, !0);
            return this.updatePosition(s), e.onLayoutEnd&&e.onLayoutEnd(), {
              nodes:t, edges:n
            }
          }
        }, t.prototype.getNodePath=function(e){
          var t=this.nodes, n=this.combos, r=t.find((function(t){
            return t.id===e
          })), o=function(e, t){
            void 0===t&&(t=[
            ]);
            var r=n.find((function(t){
              return t.id===e
            }));
            return r?(t.unshift(e), r.parentId?o(r.parentId, t):t):t
          };
          return r&&r.comboId?o(r.comboId, [
            e
          ]):[
            e
          ]
        }, t.prototype.getLayoutConfig=function(){
          var e, t, n, r, o=this, u=o.nodes, d=o.edges, l=o.combos, f=o.nodeSize, h=o.rankdir, v=o.align, p=o.edgesep, g=o.nodesep, y=o.ranksep, m=o.settings, x=(l||[
          ]).reduce((function(e, t){
            var n=u.filter((function(e){
              return e.comboId===t.id
            })).map((function(e){
              return e.id
            })), r=(l||[
            ]).filter((function(e){
              return e.parentId===t.id
            })).map((function(e){
              return e.id
            }));
            return(n.length||r.length)&&(e[
              t.id
            ]
            =a(a([
            ], n, !0), r, !0)), e
          }), {
          });
          r=f?(0, s.isArray)(f)?function(){
            return f
          }
          :function(){
            return[
              f, f
            ]
          }
          :function(e){
            return e&&e.size?(0, s.isArray)(e.size)?e.size:(0, s.isObject)(e.size)?[
              e.size.width||40, e.size.height||40
            ]
            :[
              e.size, e.size
            ]
            :[
              40, 40
            ]
          };
          var b, _=(b=null==l?void 0:l[
            0
          ])&&b.size?(0, s.isArray)(b.size)?b.size:[
            b.size, b.size
          ]
          :[
            80, 40
          ], w=_[
            0
          ], E=_[
            1
          ], D=null===(t=null===(e=o.graphSettings)||void 0===e?void 0:e.subScene)||void 0===t?void 0:t.meta, I=(null===(n=l.find((function(e){
            return!e.collapsed
          })))||void 0===n?void 0:n.padding)||[
            20, 20, 20, 20
          ], S=I[
            0
          ], M=I[
            1
          ], k=I[
            2
          ], O=I[
            3
          ], N={
            compound:x, nodes:a([
            ], (u||[
            ]).map((function(e){
              var t=r(e), n=t[
                0
              ], o=t[
                1
              ];
              return i(i({
              }, e), {
                width:n, height:o
              })
            })), !0), edges:a([
            ], (d||[
            ]).map((function(e){
              return i(i({
              }, e), {
                v:e.source, w:e.target
              })
            })), !0)
          }, z={
            expanded:(l||[
            ]).filter((function(e){
              return!e.collapsed
            })).map((function(e){
              return e.id
            }))
          }, C={
            graph:{
              meta:{
                align:v, rankDir:h, nodeSep:g, edgeSep:p, rankSep:y
              }
            }, subScene:{
              meta:{
                paddingTop:S||(null==D?void 0:D.paddingTop)||20, paddingRight:M||(null==D?void 0:D.paddingRight)||20, paddingBottom:k||(null==D?void 0:D.paddingBottom)||20, paddingLeft:O||(null==D?void 0:D.paddingLeft)||20, labelHeight:0
              }
            }, nodeSize:{
              meta:{
                width:w, height:E
              }
            }
          }, G=(0, c.mergeConfig)(m, i({
          }, (0, c.mergeConfig)(C, c.LAYOUT_CONFIG)));
          return o.graphSettings=G, {
            graphDef:N, graphOption:z, graphSettings:G
          }
        }, t.prototype.updatePosition=function(e){
          var t=e.nodes, n=e.edges;
          this.updateNodePosition(t, n), this.updateEdgePosition(t, n)
        }, t.prototype.getBegin=function(e, t){
          var n=this.begin, r=[
            0, 0
          ];
          if(n){
            var o=1/0, i=1/0;
            e.forEach((function(e){
              o>e.x&&(o=e.x), i>e.y&&(i=e.y)
            })), t.forEach((function(e){
              e.points.forEach((function(e){
                o>e.x&&(o=e.x), i>e.y&&(i=e.y)
              }))
            })), r[
              0
            ]
            =n[
              0
            ]
            -o, r[
              1
            ]
            =n[
              1
            ]
            -i
          }
          return r
        }, t.prototype.updateNodePosition=function(e, t){
          var n=this, r=n.combos, o=n.nodes, i=n.edges, a=n.anchorPoint, u=n.graphSettings, s=this.getBegin(e, t);
          e.forEach((function(e){
            var n, d=e.x, l=e.y, f=e.id, h=e.type, v=e.coreBox;
            if(h===c.HierarchyNodeType.META&&f!==c.ROOT_NAME){
              var p=r.findIndex((function(e){
                return e.id===f
              })), g=null===(n=null==u?void 0:u.subScene)||void 0===n?void 0:n.meta;
              r[
                p
              ].offsetX=d+s[
                0
              ], r[
                p
              ].offsetY=l+s[
                1
              ], r[
                p
              ].fixSize=[
                v.width, v.height
              ], r[
                p
              ].fixCollapseSize=[
                v.width, v.height
              ], e.expanded?r[
                p
              ].padding=[
                null==g?void 0:g.paddingTop, null==g?void 0:g.paddingRight, null==g?void 0:g.paddingBottom, null==g?void 0:g.paddingLeft
              ]
              :r[
                p
              ].padding=[
                0, 0, 0, 0
              ]
            }
            else if(h===c.HierarchyNodeType.OP){
              p=o.findIndex((function(e){
                return e.id===f
              }));
              if(o[
                p
              ].x=d+s[
                0
              ], o[
                p
              ].y=l+s[
                1
              ], a){
                var y=[
                ], m=t.filter((function(e){
                  return e.v===f
                })), x=t.filter((function(e){
                  return e.w===f
                }));
                m.length>0&&m.forEach((function(t){
                  var n=t.points[
                    0
                  ], r=(n.x-d)/e.width+.5, o=(n.y-l)/e.height+.5;
                  y.push([
                    r, o
                  ]), t.baseEdgeList.forEach((function(e){
                    var t=i.find((function(t){
                      return t.source===e.v&&t.target===e.w
                    }));
                    t&&(t.sourceAnchor=y.length-1)
                  }))
                })), x.length>0&&x.forEach((function(t){
                  var n=t.points[
                    t.points.length-1
                  ], r=(n.x-d)/e.width+.5, o=(n.y-l)/e.height+.5;
                  y.push([
                    r, o
                  ]), t.baseEdgeList.forEach((function(e){
                    var t=i.find((function(t){
                      return t.source===e.v&&t.target===e.w
                    }));
                    t&&(t.targetAnchor=y.length-1)
                  }))
                })), o[
                  p
                ].anchorPoints=y.length>0?y:o[
                  p
                ].anchorPoints||[
                ]
              }
            }
          }))
        }, t.prototype.updateEdgePosition=function(e, t){
          var n=this, r=n.combos, o=n.edges, u=n.controlPoints, s=this.getBegin(e, t);
          u&&(r.forEach((function(e){
            e.inEdges=[
            ], e.outEdges=[
            ]
          })), o.forEach((function(t){
            var o, u, d, l, f=e.find((function(e){
              return e.id===t.source
            })), h=e.find((function(e){
              return e.id===t.target
            })), v=[
            ], p=[
            ];
            if(f&&h)p=(0, c.getEdges)(null==f?void 0:f.id, null==h?void 0:h.id, e);
            else if(!f||!h){
              var g=n.getNodePath(t.source), y=n.getNodePath(t.target), m=g.reverse().slice(f?0:1).find((function(t){
                return e.find((function(e){
                  return e.id===t
                }))
              })), x=y.reverse().slice(h?0:1).find((function(t){
                return e.find((function(e){
                  return e.id===t
                }))
              }));
              f=e.find((function(e){
                return e.id===m
              })), h=e.find((function(e){
                return e.id===x
              })), p=(0, c.getEdges)(null==f?void 0:f.id, null==h?void 0:h.id, e, {
                v:t.source, w:t.target
              })
            }
            if(v=(v=p.reduce((function(e, t){
              return a(a([
              ], e, !0), t.points.map((function(e){
                return i(i({
                }, e), {
                  x:e.x+s[
                    0
                  ], y:e.y+s[
                    1
                  ]
                })
              })), !0)
            }), [
            ])).slice(1, -1), t.controlPoints=v, (null==h?void 0:h.type)===c.NodeType.META){
              var b=r.findIndex((function(e){
                return e.id===(null==h?void 0:h.id)
              }));
              if(!r[
                b
              ]
              ||(null===(o=r[
                b
              ].inEdges)||void 0===o?void 0:o.some((function(e){
                return e.source===f.id&&e.target===h.id
              }))))return;
              null===(u=r[
                b
              ].inEdges)||void 0===u||u.push({
                source:f.id, target:h.id, controlPoints:v
              })
            }
            if((null==f?void 0:f.type)===c.NodeType.META){
              b=r.findIndex((function(e){
                return e.id===(null==f?void 0:f.id)
              }));
              if(!r[
                b
              ]
              ||(null===(d=r[
                b
              ].outEdges)||void 0===d?void 0:d.some((function(e){
                return e.source===f.id&&e.target===h.id
              }))))return;
              null===(l=r[
                b
              ].outEdges)||void 0===l||l.push({
                source:f.id, target:h.id, controlPoints:v
              })
            }
          })))
        }, t.prototype.getType=function(){
          return"dagreCompound"
        }, t.prototype.getDataByOrder=function(e){
          return e.every((function(e){
            return void 0!==e.layoutOrder
          }))||e.forEach((function(e, t){
            e.layoutOrder=t
          })), e.sort((function(e, t){
            return e.layoutOrder-t.layoutOrder
          }))
        }, t
      }
      (u.Base);
      t.DagreCompoundLayout=d
    }, 475022:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.feasibleTreeWithLayer=t.feasibleTree=void 0;
      var r=n(53472), o=n(611519), i=n(578326), a=function(e){
        var t, n, o=new i.Graph({
          directed:!1
        }), a=e.nodes()[
          0
        ], c=e.nodeCount();
        for(o.setNode(a, {
        });
        u(o, e)<c;
        )t=d(o, e), n=o.hasNode(t.v)?(0, r.slack)(e, t):-(0, r.slack)(e, t), l(o, e, n);
        return o
      };
      t.feasibleTree=a;
      var u=function(e, t){
        var n=function(o){
          t.nodeEdges(o).forEach((function(i){
            var a=i.v, u=o===a?i.w:a;
            e.hasNode(u)||(0, r.slack)(t, i)||(e.setNode(u, {
            }), e.setEdge(o, u, {
            }), n(u))
          }))
        };
        return e.nodes().forEach(n), e.nodeCount()
      }, c=function(e){
        var t, n, o=new i.Graph({
          directed:!1
        }), a=e.nodes()[
          0
        ], u=e.nodes().filter((function(t){
          return!!e.node(t)
        })).length;
        for(o.setNode(a, {
        });
        s(o, e)<u;
        )t=d(o, e), n=o.hasNode(t.v)?(0, r.slack)(e, t):-(0, r.slack)(e, t), l(o, e, n);
        return o
      };
      t.feasibleTreeWithLayer=c;
      var s=function(e, t){
        var n=function(o){
          var i;
          null===(i=t.nodeEdges(o))||void 0===i||i.forEach((function(i){
            var a=i.v, u=o===a?i.w:a;
            e.hasNode(u)||void 0===t.node(u).layer&&(0, r.slack)(t, i)||(e.setNode(u, {
            }), e.setEdge(o, u, {
            }), n(u))
          }))
        };
        return e.nodes().forEach(n), e.nodeCount()
      }, d=function(e, t){
        return(0, o.minBy)(t.edges(), (function(n){
          return e.hasNode(n.v)!==e.hasNode(n.w)?(0, r.slack)(t, n):1/0
        }))
      }, l=function(e, t, n){
        e.nodes().forEach((function(e){
          t.node(e).rank||(t.node(e).rank=0), t.node(e).rank+=n
        }))
      };
      t.default={
        feasibleTree:a, feasibleTreeWithLayer:c
      }
    }, 491922:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.getCoreNodeAndRelativeLeafNodes=t.getAvgNodePosition=t.getLayoutBBox=t.traverseTreeUp=t.scaleMatrix=t.getAdjMatrix=t.floydWarshall=t.getDegreeMap=t.getDegree=t.getEdgeTerminal=void 0;
      var r=n(686755), o=n(419937), i=n(515747);
      t.getEdgeTerminal=function(e, t){
        var n=e[
          t
        ];
        return(0, i.isObject)(n)?n.cell:n
      };
      t.getDegree=function(e, n, r){
        for(var o=[
        ], i=0;
        i<e;
        i++)o[
          i
        ]
        ={
          in:0, out:0, all:0
        };
        return r?(r.forEach((function(e){
          var r=(0, t.getEdgeTerminal)(e, "source"), i=(0, t.getEdgeTerminal)(e, "target");
          r&&o[
            n[
              r
            ]
          ]
          &&(o[
            n[
              r
            ]
          ].out+=1, o[
            n[
              r
            ]
          ].all+=1), i&&o[
            n[
              i
            ]
          ]
          &&(o[
            n[
              i
            ]
          ].in+=1, o[
            n[
              i
            ]
          ].all+=1)
        })), o):o
      };
      t.getDegreeMap=function(e, n){
        var r={
        };
        return e.forEach((function(e){
          r[
            e.id
          ]
          ={
            in:0, out:0, all:0
          }
        })), n?(n.forEach((function(e){
          var n=(0, t.getEdgeTerminal)(e, "source"), o=(0, t.getEdgeTerminal)(e, "target");
          n&&(r[
            n
          ].out+=1, r[
            n
          ].all+=1), o&&(r[
            o
          ].in+=1, r[
            o
          ].all+=1)
        })), r):r
      };
      t.floydWarshall=function(e){
        for(var t=[
        ], n=e.length, r=0;
        r<n;
        r+=1){
          t[
            r
          ]
          =[
          ];
          for(var o=0;
          o<n;
          o+=1)r===o?t[
            r
          ]
          [
            o
          ]
          =0:0!==e[
            r
          ]
          [
            o
          ]
          &&e[
            r
          ]
          [
            o
          ]
          ?t[
            r
          ]
          [
            o
          ]
          =e[
            r
          ]
          [
            o
          ]
          :t[
            r
          ]
          [
            o
          ]
          =1/0
        }
        for(var i=0;
        i<n;
        i+=1)for(r=0;
        r<n;
        r+=1)for(o=0;
        o<n;
        o+=1)t[
          r
        ]
        [
          o
        ]
        >t[
          r
        ]
        [
          i
        ]
        +t[
          i
        ]
        [
          o
        ]
        &&(t[
          r
        ]
        [
          o
        ]
        =t[
          r
        ]
        [
          i
        ]
        +t[
          i
        ]
        [
          o
        ]);
        return t
      };
      t.getAdjMatrix=function(e, n){
        var r=e.nodes, o=e.edges, i=[
        ], a={
        };
        if(!r)throw new Error("invalid nodes data!");
        return r&&r.forEach((function(e, t){
          a[
            e.id
          ]
          =t;
          i.push([
          ])
        })), null==o||o.forEach((function(e){
          var r=(0, t.getEdgeTerminal)(e, "source"), o=(0, t.getEdgeTerminal)(e, "target"), u=a[
            r
          ], c=a[
            o
          ];
          void 0!==u&&void 0!==c&&(i[
            u
          ]
          [
            c
          ]
          =1, n||(i[
            c
          ]
          [
            u
          ]
          =1))
        })), i
      };
      t.scaleMatrix=function(e, t){
        var n=[
        ];
        return e.forEach((function(e){
          var r=[
          ];
          e.forEach((function(e){
            r.push(e*t)
          })), n.push(r)
        })), n
      };
      var a=function(e, t){
        if(e&&e.children)for(var n=e.children.length-1;
        n>=0;
        n--)if(!a(e.children[
          n
        ], t))return;
        return!!t(e)
      };
      t.traverseTreeUp=function(e, t){
        "function"==typeof t&&a(e, t)
      };
      t.getLayoutBBox=function(e){
        var t=1/0, n=1/0, i=-1/0, a=-1/0;
        return e.forEach((function(e){
          var u=e.size;
          (0, r.isArray)(u)?1===u.length&&(u=[
            u[
              0
            ], u[
              0
            ]
          ]):(0, o.isNumber)(u)?u=[
            u, u
          ]
          :(void 0===u||isNaN(u))&&(u=[
            30, 30
          ]);
          var c=[
            u[
              0
            ]
            /2, u[
              1
            ]
            /2
          ], s=e.x-c[
            0
          ], d=e.x+c[
            0
          ], l=e.y-c[
            1
          ], f=e.y+c[
            1
          ];
          t>s&&(t=s), n>l&&(n=l), i<d&&(i=d), a<f&&(a=f)
        })), {
          minX:t, minY:n, maxX:i, maxY:a
        }
      };
      t.getAvgNodePosition=function(e){
        var t={
          x:0, y:0
        };
        e.forEach((function(e){
          t.x+=e.x||0, t.y+=e.y||0
        }));
        var n=e.length||1;
        return{
          x:t.x/n, y:t.y/n
        }
      };
      var u=function(e, t, n){
        var r, o;
        return"source"===e?(null===(r=null==n?void 0:n.find((function(e){
          return e.target===t.id
        })))||void 0===r?void 0:r.source)||{
        }
        :(null===(o=null==n?void 0:n.find((function(e){
          return e.source===t.id
        })))||void 0===o?void 0:o.target)||{
        }
      }, c=function(e, t, n){
        var r=[
        ];
        switch(e){
          case"source":r=null==n?void 0:n.filter((function(e){
            return e.source===t.id
          })).map((function(e){
            return e.target
          }));
          break;
          case"target":r=null==n?void 0:n.filter((function(e){
            return e.target===t.id
          })).map((function(e){
            return e.source
          }));
          break;
          case"both":r=null==n?void 0:n.filter((function(e){
            return e.source===t.id
          })).map((function(e){
            return e.target
          })).concat(null==n?void 0:n.filter((function(e){
            return e.target===t.id
          })).map((function(e){
            return e.source
          })))
        }
        var o=new Set(r);
        return Array.from(o)
      };
      t.getCoreNodeAndRelativeLeafNodes=function(e, t, n, r, o, i){
        var a=o[
          t.id
        ], s=a.in, d=a.out, l=t, f=[
        ];
        return 0===s?(l=u("source", t, n), f=c("both", l, n).map((function(e){
          return i[
            e
          ]
        }))):0===d&&(l=u("target", t, n), f=c("both", l, n).map((function(e){
          return i[
            e
          ]
        }))), {
          coreNode:l, relativeLeafNodes:f=f.filter((function(e){
            return o[
              e.id
            ]
            &&(0===o[
              e.id
            ].in||0===o[
              e.id
            ].out)
          })), sameTypeLeafNodes:function(e, t, n, r, o){
            var i=n[
              t
            ]
            ||"", a=(null==r?void 0:r.filter((function(e){
              return e[
                t
              ]
              ===i
            })))||[
            ];
            return"leaf"===e&&(a=a.filter((function(e){
              var t, n;
              return 0===(null===(t=o[
                e.id
              ])||void 0===t?void 0:t.in)||0===(null===(n=o[
                e.id
              ])||void 0===n?void 0:n.out)
            }))), a
          }
          (e, r, t, f, o)
        }
      }
    }, 501782:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__assign||function(){
        return(i=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.Force2Layout=void 0;
      var a=n(346271), u=n(781422), c=n(992727), s=function(e, t){
        return e?(0, u.isNumber)(e)?function(t){
          return e
        }
        :e:function(e){
          return t||1
        }
      }, d=function(e){
        function t(t){
          var n=e.call(this)||this;
          n.maxIteration=1e3, n.workerEnabled=!1, n.edgeStrength=200, n.nodeStrength=1e3, n.coulombDisScale=.005, n.damping=.9, n.maxSpeed=500, n.minMovement=.4, n.interval=.02, n.factor=1, n.linkDistance=200, n.gravity=0, n.clusterNodeStrength=20, n.preventOverlap=!0, n.distanceThresholdMode="mean", n.tick=function(){
          }, n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.nodeMap={
          }, n.nodeIdxMap={
          }, n.judgingDistance=0, n.centripetalOptions={
            leaf:2, single:2, others:1, center:function(e){
              return{
                x:n.width/2, y:n.height/2
              }
            }
          };
          var r=t.getMass;
          return n.propsGetMass=r, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getCentripetalOptions=function(){
          var e, t=this, n=t.leafCluster, r=t.clustering, o=t.nodeClusterBy, a=t.nodes, c=t.nodeMap, s=t.clusterNodeStrength, d=function(e){
            return"function"==typeof s?s(e):s
          }, l={
          };
          if(n){
            e=this.getSameTypeLeafMap()||{
            };
            var f=Array.from(new Set(null==a?void 0:a.map((function(e){
              return e[
                o
              ]
            }))))||[
            ];
            l={
              single:100, leaf:function(t, n, r){
                var o=e[
                  t.id
                ]
                ||{
                }, i=o.relativeLeafNodes, a=o.sameTypeLeafNodes;
                return(null==a?void 0:a.length)===(null==i?void 0:i.length)||1===(null==f?void 0:f.length)?1:d(t)
              }, others:1, center:function(t, n, r){
                var o, i, a=((null===(o=t.data)||void 0===o?void 0:o.layout)||{
                }).degree;
                if(!a)return{
                  x:100, y:100
                };
                if(1===a){
                  var c=(e[
                    t.id
                  ]
                  ||{
                  }).sameTypeLeafNodes, s=void 0===c?[
                  ]
                  :c;
                  1===s.length?i=void 0:s.length>1&&(i=(0, u.getAvgNodePosition)(s))
                }
                else i=void 0;
                return{
                  x:null==i?void 0:i.x, y:null==i?void 0:i.y
                }
              }
            }
          }
          if(r){
            e||(e=this.getSameTypeLeafMap());
            var h=Array.from(new Set(a.map((function(e, t){
              return e[
                o
              ]
            })))).filter((function(e){
              return void 0!==e
            })), v={
            };
            h.forEach((function(e){
              var t=a.filter((function(t){
                return t[
                  o
                ]
                ===e
              })).map((function(e){
                return c[
                  e.id
                ]
              }));
              v[
                e
              ]
              =(0, u.getAvgNodePosition)(t)
            })), l={
              single:function(e){
                return d(e)
              }, leaf:function(e){
                return d(e)
              }, others:function(e){
                return d(e)
              }, center:function(e, t, n){
                var r=v[
                  e[
                    o
                  ]
                ];
                return{
                  x:null==r?void 0:r.x, y:null==r?void 0:r.y
                }
              }
            }
          }
          this.centripetalOptions=i(i({
          }, this.centripetalOptions), l);
          var p=this.centripetalOptions, g=p.leaf, y=p.single, m=p.others;
          g&&"function"!=typeof g&&(this.centripetalOptions.leaf=function(){
            return g
          }), y&&"function"!=typeof y&&(this.centripetalOptions.single=function(){
            return y
          }), m&&"function"!=typeof m&&(this.centripetalOptions.others=function(){
            return m
          })
        }, t.prototype.updateCfg=function(e){
          e&&Object.assign(this, e)
        }, t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:500, gravity:10, enableTick:!0, animate:!0
          }
        }, t.prototype.execute=function(){
          var e=this;
          e.stop();
          var t=e.nodes, n=e.edges, r=e.defSpringLen;
          if(e.judgingDistance=0, t&&0!==t.length){
            e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight), e.center||(e.center=[
              e.width/2, e.height/2
            ]);
            var o=e.center;
            if(1===t.length)return t[
              0
            ].x=o[
              0
            ], t[
              0
            ].y=o[
              1
            ], void e.onLayoutEnd([
              i({
              }, t[
                0
              ])
            ]);
            e.degreesMap=(0, u.getDegreeMap)(t, n), e.propsGetMass?e.getMass=e.propsGetMass:e.getMass=function(t){
              var n=1;
              (0, u.isNumber)(t.mass)&&(n=t.mass);
              var r=e.degreesMap[
                t.id
              ].all;
              return!r||r<5?n:5*r*n
            };
            var a, c=e.nodeSize;
            if(e.preventOverlap){
              var d, l=e.nodeSpacing;
              d=(0, u.isNumber)(l)?function(){
                return l
              }
              :(0, u.isFunction)(l)?l:function(){
                return 0
              }, a=c?(0, u.isArray)(c)?function(e){
                return Math.max(c[
                  0
                ], c[
                  1
                ])+d(e)
              }
              :function(e){
                return c+d(e)
              }
              :function(e){
                return e.size?(0, u.isArray)(e.size)?Math.max(e.size[
                  0
                ], e.size[
                  1
                ])+d(e):(0, u.isObject)(e.size)?Math.max(e.size.width, e.size.height)+d(e):e.size+d(e):10+d(e)
              }
            }
            e.nodeSize=a, e.linkDistance=s(e.linkDistance, 1), e.nodeStrength=s(e.nodeStrength, 1), e.edgeStrength=s(e.edgeStrength, 1);
            var f={
            }, h={
            };
            t.forEach((function(t, r){
              (0, u.isNumber)(t.x)||(t.x=Math.random()*e.width), (0, u.isNumber)(t.y)||(t.y=Math.random()*e.height);
              var o=e.degreesMap[
                t.id
              ];
              f[
                t.id
              ]
              =i(i({
              }, t), {
                data:i(i({
                }, t.data), {
                  size:e.nodeSize(t)||30, layout:{
                    inDegree:o.in, outDegree:o.out, degree:o.all, tDegree:o.in, sDegree:o.out, force:{
                      mass:e.getMass(t), nodeStrength:e.nodeStrength(t, n)
                    }
                  }
                })
              }), h[
                t.id
              ]
              =r
            })), e.nodeMap=f, e.nodeIdxMap=h, e.edgeInfos=[
            ], null==n||n.forEach((function(t){
              var n=f[
                t.source
              ], o=f[
                t.target
              ];
              n&&o?e.edgeInfos.push({
                edgeStrength:e.edgeStrength(t), linkDistance:r?r(i(i({
                }, t), {
                  source:n, target:o
                }), n, o):e.linkDistance(t, n, o)||1+(c(n)+c(n)||0)/2
              }):elf.edgeInfos.push({
              })
            })), this.getCentripetalOptions(), e.onLayoutEnd=e.onLayoutEnd||function(){
            }, e.run()
          }
          else e.onLayoutEnd([
          ])
        }, t.prototype.run=function(){
          var e=this, t=e.maxIteration, n=e.nodes, r=e.edges, o=e.workerEnabled, i=e.minMovement, a=e.animate, u=e.nodeMap, c=e.height;
          if(e.currentMinY=0, e.currentMaxY=c, n){
            var s=[
            ];
            if(n.forEach((function(e, t){
              s[
                2*t
              ]
              =0, s[
                2*t+1
              ]
              =0
            })), this.defSideCoe&&"function"==typeof this.defSideCoe){
              var d={
              };
              r.forEach((function(e){
                var t=e.source, n=e.target;
                d[
                  t
                ]
                =d[
                  t
                ]
                ||[
                ], d[
                  t
                ].push(e), d[
                  n
                ]
                =d[
                  n
                ]
                ||[
                ], d[
                  n
                ].push(e)
              })), this.relatedEdges=d
            }
            var l=t;
            if(o||!a){
              for(var f=0;
              (e.judgingDistance>i||f<1)&&f<l;
              f++)f, e.runOneStep(f, s);
              e.onLayoutEnd(Object.values(u))
            }
            else{
              if("undefined"==typeof window)return;
              var h=0;
              this.timeInterval=window.setInterval((function(){
                n&&(e.runOneStep(h, s), (++h>=l||e.judgingDistance<i)&&(e.onLayoutEnd(Object.values(u)), window.clearInterval(e.timeInterval)))
              }), 0)
            }
          }
        }, t.prototype.runOneStep=function(e, t){
          var n, r=this, o=r.nodes, i=r.edges, a=(r.nodeMap, r.monitor), u=[
          ];
          if(null==o?void 0:o.length){
            r.calRepulsive(u), i&&r.calAttractive(u), r.calGravity(u), r.attractToSide(u);
            var c=r.interval;
            if(r.updateVelocity(u, t, c), r.updatePosition(t, c), null===(n=r.tick)||void 0===n||n.call(r), a)a({
              energy:this.calTotalEnergy(u), nodes:o, edges:i, iterations:e
            })
          }
        }, t.prototype.calTotalEnergy=function(e){
          var t=this.nodes, n=this.nodeMap;
          if(!(null==t?void 0:t.length))return 0;
          var r=0;
          return t.forEach((function(t, o){
            var i=e[
              2*o
            ], a=e[
              2*o+1
            ], u=i*i+a*a, c=n[
              t.id
            ].data.layout.force.mass;
            r+=(void 0===c?1:c)*u*.5
          })), r
        }, t.prototype.calRepulsive=function(e){
          var t=this, n=t.nodes, r=t.nodeMap, o=t.factor, i=t.coulombDisScale;
          t.nodeSize;
          (0, c.forceNBody)(n, r, o, i*i, e)
        }, t.prototype.calAttractive=function(e){
          var t=this, n=t.edges, r=t.nodeMap, o=t.nodeIdxMap, i=t.edgeInfos;
          t.nodeSize;
          n.forEach((function(t, n){
            var a=(0, u.getEdgeTerminal)(t, "source"), c=(0, u.getEdgeTerminal)(t, "target"), s=r[
              a
            ], d=r[
              c
            ];
            if(s&&d){
              var l=d.x-s.x, f=d.y-s.y;
              l||f||(l=.01*Math.random(), f=.01*Math.random());
              var h=Math.sqrt(l*l+f*f), v=l/h, p=f/h, g=i[
                n
              ]
              ||{
              }, y=g.linkDistance, m=void 0===y?200:y, x=g.edgeStrength, b=(m-h)*(void 0===x?200:x), _=1/(s.data.layout.force.mass||1), w=1/(d.data.layout.force.mass||1), E=v*b, D=p*b, I=2*o[
                a
              ], S=2*o[
                c
              ];
              e[
                I
              ]
              -=E*_, e[
                I+1
              ]
              -=D*_, e[
                S
              ]
              +=E*w, e[
                S+1
              ]
              +=D*w
            }
          }))
        }, t.prototype.calGravity=function(e){
          var t, n=this, r=n.nodes, o=n.edges, i=void 0===o?[
          ]
          :o, a=n.nodeMap, c=n.width, s=n.height, d=n.center, l=n.gravity, f=n.degreesMap, h=n.centripetalOptions;
          if(r)for(var v=r.length, p=0;
          p<v;
          p++){
            var g=2*p, y=a[
              r[
                p
              ].id
            ], m=y.data.layout.force.mass, x=void 0===m?1:m, b=0, _=0, w=l, E=f[
              y.id
            ], D=E.in, I=E.out, S=E.all, M=null===(t=n.getCenter)||void 0===t?void 0:t.call(n, y, S);
            if(M){
              var k=M[
                0
              ], O=M[
                1
              ], N=M[
                2
              ];
              b=y.x-k, _=y.y-O, w=N
            }
            else b=y.x-d[
              0
            ], _=y.y-d[
              1
            ];
            if(w&&(e[
              g
            ]
            -=w*b/x, e[
              g+1
            ]
            -=w*_/x), h){
              var z=h.leaf, C=h.single, G=h.others, L=h.center, T=(null==L?void 0:L(y, r, i, c, s))||{
                x:0, y:0, centerStrength:0
              }, P=T.x, j=T.y, A=T.centerStrength;
              if(!(0, u.isNumber)(P)||!(0, u.isNumber)(j))continue;
              var F=(y.x-P)/x, R=(y.y-j)/x;
              if(A&&(e[
                g
              ]
              -=A*F, e[
                g+1
              ]
              -=A*R), 0===S){
                var W=C(y);
                if(!W)continue;
                e[
                  g
                ]
                -=W*F, e[
                  g+1
                ]
                -=W*R;
                continue
              }
              if(0===D||0===I){
                var B=z(y, r, i);
                if(!B)continue;
                e[
                  g
                ]
                -=B*F, e[
                  g+1
                ]
                -=B*R;
                continue
              }
              var U=G(y);
              if(!U)continue;
              e[
                g
              ]
              -=U*F, e[
                g+1
              ]
              -=U*R
            }
          }
        }, t.prototype.attractToSide=function(e){
          var t=this, n=t.defSideCoe, r=(t.height, t.nodes), o=t.relatedEdges, i=t.currentMinY, a=void 0===i?0:i, u=t.currentMaxY, c=void 0===u?this.height:u;
          n&&"function"==typeof n&&(null==r?void 0:r.length)&&r.forEach((function(t, r){
            var i=n(t, o[
              t.id
            ]
            ||[
            ]);
            if(0!==i){
              var u=i<0?a:c, s=Math.abs(i);
              e[
                2*r+1
              ]
              -=s*(t.y-u)
            }
          }))
        }, t.prototype.updateVelocity=function(e, t, n){
          var r=this, o=r.nodes, i=r.damping, a=r.maxSpeed;
          (null==o?void 0:o.length)&&o.forEach((function(r, o){
            var u=(t[
              2*o
            ]
            +e[
              2*o
            ]
            *n)*i||.01, c=(t[
              2*o+1
            ]
            +e[
              2*o+1
            ]
            *n)*i||.01, s=Math.sqrt(u*u+c*c);
            if(s>a){
              var d=a/s;
              u*=d, c*=d
            }
            t[
              2*o
            ]
            =u, t[
              2*o+1
            ]
            =c
          }))
        }, t.prototype.updatePosition=function(e, t){
          var n=this, r=n.nodes, o=n.distanceThresholdMode, i=n.nodeMap;
          if(null==r?void 0:r.length){
            var a=0;
            "max"===o?n.judgingDistance=-1/0:"min"===o&&(n.judgingDistance=1/0);
            var c=1/0, s=-1/0;
            r.forEach((function(r, d){
              var l=i[
                r.id
              ];
              if((0, u.isNumber)(r.fx)&&(0, u.isNumber)(r.fy))return r.x=r.fx, r.y=r.fy, l.x=r.x, void(l.y=r.y);
              var f=e[
                2*d
              ]
              *t, h=e[
                2*d+1
              ]
              *t;
              r.x+=f, r.y+=h, l.x=r.x, l.y=r.y, r.y<c&&(c=r.y), r.y>s&&(s=r.y);
              var v=Math.sqrt(f*f+h*h);
              switch(o){
                case"max":n.judgingDistance<v&&(n.judgingDistance=v);
                break;
                case"min":n.judgingDistance>v&&(n.judgingDistance=v);
                break;
                default:a+=v
              }
            })), this.currentMinY=c, this.currentMaxY=s, o&&"mean"!==o||(n.judgingDistance=a/r.length)
          }
          else this.judgingDistance=0
        }, t.prototype.stop=function(){
          this.timeInterval&&"undefined"!=typeof window&&window.clearInterval(this.timeInterval)
        }, t.prototype.destroy=function(){
          var e=this;
          e.stop(), e.tick=null, e.nodes=null, e.edges=null, e.destroyed=!0
        }, t.prototype.getType=function(){
          return"force2"
        }, t.prototype.getSameTypeLeafMap=function(){
          var e=this, t=e.nodeClusterBy, n=e.nodes, r=e.edges, o=e.nodeMap, i=e.degreesMap;
          if(null==n?void 0:n.length){
            var a={
            };
            return n.forEach((function(e, n){
              1===i[
                e.id
              ].all&&(a[
                e.id
              ]
              =(0, u.getCoreNodeAndRelativeLeafNodes)("leaf", e, r, t, i, o))
            })), a
          }
        }, t
      }
      (a.Base);
      t.Force2Layout=d
    }, 507982:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.MDSLayout=void 0;
      var i=n(33592), a=n(781422), u=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.center=[
            0, 0
          ], n.linkDistance=50, n.nodes=[
          ], n.edges=[
          ], n.onLayoutEnd=function(){
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            center:[
              0, 0
            ], linkDistance:50
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.edges, r=void 0===n?[
          ]
          :n, o=e.center;
          if(t&&0!==t.length){
            if(1===t.length)return t[
              0
            ].x=o[
              0
            ], t[
              0
            ].y=o[
              1
            ], void(e.onLayoutEnd&&e.onLayoutEnd());
            var i=e.linkDistance, u=(0, a.getAdjMatrix)({
              nodes:t, edges:r
            }, !1), c=(0, a.floydWarshall)(u);
            e.handleInfinity(c);
            var s=(0, a.scaleMatrix)(c, i);
            e.scaledDistances=s;
            var d=e.runMDS();
            return e.positions=d, d.forEach((function(e, n){
              t[
                n
              ].x=e[
                0
              ]
              +o[
                0
              ], t[
                n
              ].y=e[
                1
              ]
              +o[
                1
              ]
            })), e.onLayoutEnd&&e.onLayoutEnd(), {
              nodes:t, edges:r
            }
          }
          e.onLayoutEnd&&e.onLayoutEnd()
        }, t.prototype.runMDS=function(){
          var e=this.scaledDistances, t=i.Matrix.mul(i.Matrix.pow(e, 2), -.5), n=t.mean("row"), r=t.mean("column"), o=t.mean();
          t.add(o).subRowVector(n).subColumnVector(r);
          var a=new i.SingularValueDecomposition(t), u=i.Matrix.sqrt(a.diagonalMatrix).diagonal();
          return a.leftSingularVectors.toJSON().map((function(e){
            return i.Matrix.mul([
              e
            ], [
              u
            ]).toJSON()[
              0
            ].splice(0, 2)
          }))
        }, t.prototype.handleInfinity=function(e){
          var t=-999999;
          e.forEach((function(e){
            e.forEach((function(e){
              e!==1/0&&t<e&&(t=e)
            }))
          })), e.forEach((function(n, r){
            n.forEach((function(n, o){
              n===1/0&&(e[
                r
              ]
              [
                o
              ]
              =t)
            }))
          }))
        }, t.prototype.getType=function(){
          return"mds"
        }, t
      }
      (n(346271).Base);
      t.MDSLayout=u
    }, 515747:function(e, t){
      var n=this&&this.__assign||function(){
        return(n=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.clone=t.isObject=void 0;
      t.isObject=function(e){
        return null!==e&&"object"==typeof e
      };
      t.clone=function(e){
        if(null===e)return e;
        if(e instanceof Date)return new Date(e.getTime());
        if(e instanceof Array){
          var r=[
          ];
          return e.forEach((function(e){
            r.push(e)
          })), r.map((function(e){
            return(0, t.clone)(e)
          }))
        }
        if("object"==typeof e&&Object.keys(e).length){
          var o=n({
          }, e);
          return Object.keys(o).forEach((function(e){
            o[
              e
            ]
            =(0, t.clone)(o[
              e
            ])
          })), o
        }
        return e
      }
    }, 537657:function(e, t, n){
      var r=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), o=this&&this.__setModuleDefault||(Object.create?function(e, t){
        Object.defineProperty(e, "default", {
          enumerable:!0, value:t
        })
      }
      :function(e, t){
        e.default=t
      }), i=this&&this.__importStar||function(e){
        if(e&&e.__esModule)return e;
        var t={
        };
        if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e, n)&&r(t, e, n);
        return o(t, e), t
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var a=i(n(32019)), u=n(781422);
      t.default=function(){
        function e(e){
          return function(){
            return e
          }
        }
        var t, n=function(e){
          return e.cluster
        }, r=e(1), o=e(-1), i=e(100), c=e(.1), s=[
          0, 0
        ], d=[
        ], l={
        }, f=[
        ], h=100, v=100, p={
          none:{
            x:0, y:0
          }
        }, g=[
        ], y="force", m=!0, x=.1;
        function b(e){
          if(!m)return b;
          t.tick(), w();
          for(var r=0, o=d.length, i=void 0, a=e*x;
          r<o;
          ++r)(i=d[
            r
          ]).vx+=(p[
            n(i)
          ].x-i.x)*a, i.vy+=(p[
            n(i)
          ].y-i.y)*a
        }
        function _(){
          d&&function(){
            if(!d||!d.length)return;
            if(void 0===n(d[
              0
            ]))throw Error("Couldnt find the grouping attribute for the nodes. Make sure to set it up with forceInABox.groupBy('clusterAttr') before calling .links()");
            var e=(s=[
            ], p=[
            ], y={
            }, m={
            }, x=[
            ], m=function(e){
              var t={
              };
              return e.forEach((function(e){
                var r=n(e);
                t[
                  r
                ]
                ||(t[
                  r
                ]
                ={
                  count:0, sumforceNodeSize:0
                })
              })), e.forEach((function(e){
                var o=n(e), i=r(e), a=t[
                  o
                ];
                a.count=a.count+1, a.sumforceNodeSize=a.sumforceNodeSize+Math.PI*(i*i)*1.3, t[
                  o
                ]
                =a
              })), t
            }
            (d), x=function(e){
              var t={
              }, r=[
              ];
              return e.forEach((function(e){
                var r=function(e){
                  var t=(0, u.getEdgeTerminal)(e, "source"), r=(0, u.getEdgeTerminal)(e, "target"), o=n(l[
                    t
                  ]), i=n(l[
                    r
                  ]);
                  return o<=i?"".concat(o, "~").concat(i):"".concat(i, "~").concat(o)
                }
                (e), o=0;
                void 0!==t[
                  r
                ]
                &&(o=t[
                  r
                ]), o+=1, t[
                  r
                ]
                =o
              })), Object.entries(t).forEach((function(e){
                var t=e[
                  0
                ], n=e[
                  1
                ], o=t.split("~")[
                  0
                ], i=t.split("~")[
                  1
                ];
                void 0!==o&&void 0!==i&&r.push({
                  source:o, target:i, count:n
                })
              })), r
            }
            (f), Object.keys(m).forEach((function(e, t){
              var n=m[
                e
              ];
              s.push({
                id:e, size:n.count, r:Math.sqrt(n.sumforceNodeSize/Math.PI)
              }), y[
                e
              ]
              =t
            })), x.forEach((function(e){
              var t=(0, u.getEdgeTerminal)(e, "source"), n=(0, u.getEdgeTerminal)(e, "target"), r=y[
                t
              ], o=y[
                n
              ];
              void 0!==r&&void 0!==o&&p.push({
                source:r, target:o, count:e.count
              })
            })), {
              nodes:s, links:p
            });
            var s, p, y, m, x;
            t=a.forceSimulation(e.nodes).force("x", a.forceX(h).strength(.1)).force("y", a.forceY(v).strength(.1)).force("collide", a.forceCollide((function(e){
              return e.r
            })).iterations(4)).force("charge", a.forceManyBody().strength(o)).force("links", a.forceLink(e.nodes.length?e.links:[
            ]).distance(i).strength(c)), g=t.nodes(), w()
          }
          ()
        }
        function w(){
          return p={
            none:{
              x:0, y:0
            }
          }, g.forEach((function(e){
            p[
              e.id
            ]
            ={
              x:e.x-s[
                0
              ], y:e.y-s[
                1
              ]
            }
          })), p
        }
        function E(e){
          l={
          }, e.forEach((function(e){
            l[
              e.id
            ]
            =e
          }))
        }
        return b.initialize=function(e){
          d=e, _()
        }, b.template=function(e){
          return arguments.length?(y=e, _(), b):y
        }, b.groupBy=function(e){
          return arguments.length?"string"==typeof e?(n=function(t){
            return t[
              e
            ]
          }, b):(n=e, b):n
        }, b.enableGrouping=function(e){
          return arguments.length?(m=e, b):m
        }, b.strength=function(e){
          return arguments.length?(x=e, b):x
        }, b.centerX=function(e){
          return arguments.length?(h=e, b):h
        }, b.centerY=function(e){
          return arguments.length?(v=e, b):v
        }, b.nodes=function(e){
          return arguments.length?(E(e||[
          ]), d=e||[
          ], b):d
        }, b.links=function(e){
          return arguments.length?(f=e||[
          ], _(), b):f
        }, b.forceNodeSize=function(t){
          return arguments.length?(r="function"==typeof t?t:e(+t), _(), b):r
        }, b.nodeSize=b.forceNodeSize, b.forceCharge=function(t){
          return arguments.length?(o="function"==typeof t?t:e(+t), _(), b):o
        }, b.forceLinkDistance=function(t){
          return arguments.length?(i="function"==typeof t?t:e(+t), _(), b):i
        }, b.forceLinkStrength=function(t){
          return arguments.length?(c="function"==typeof t?t:e(+t), _(), b):c
        }, b.offset=function(e){
          return arguments.length?(s=e, b):s
        }, b.getFocis=w, b
      }
    }, 538119:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.getLayoutByName=t.unRegisterLayout=t.registerLayout=void 0;
      var i=n(346271), a=n(781422), u=new Map;
      t.registerLayout=function(e, t){
        if(u.get(e)&&console.warn("The layout with the name ".concat(e, " exists already, it will be overridden")), (0, a.isObject)(t)){
          var n=function(e){
            function n(n){
              var r, o, i=r=e.call(this)||this, a={
              }, u=Object.assign({
              }, i.getDefaultCfg(), (null===(o=t.getDefaultCfg)||void 0===o?void 0:o.call(t))||{
              });
              return Object.assign(a, u, t, n), Object.keys(a).forEach((function(e){
                var t=a[
                  e
                ];
                i[
                  e
                ]
                =t
              })), r
            }
            return o(n, e), n
          }
          (i.Base);
          u.set(e, n)
        }
        else u.set(e, t);
        return u.get(e)
      };
      t.unRegisterLayout=function(e){
        u.has(e)&&u.delete(e)
      };
      t.getLayoutByName=function(e){
        return u.has(e)?u.get(e):null
      }
    }, 543517:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(578326), o=function(e){
        for(var t;
        e.hasNode(t="_root".concat(Math.random()));
        );
        return t
      };
      t.default=function(e, t, n){
        var i=o(e), a=new r.Graph({
          compound:!0
        }).setGraph({
          root:i
        }).setDefaultNodeLabel((function(t){
          return e.node(t)
        }));
        return e.nodes().forEach((function(r){
          var o, u=e.node(r), c=e.parent(r);
          (u.rank===t||u.minRank<=t&&t<=u.maxRank)&&(a.setNode(r), a.setParent(r, c||i), null===(o=e[
            n
          ]
          (r))||void 0===o||o.forEach((function(t){
            var n=t.v===r?t.w:t.v, o=a.edgeFromArgs(n, r), i=void 0!==o?o.weight:0;
            a.setEdge(n, r, {
              weight:e.edge(t).weight+i
            })
          })), u.hasOwnProperty("minRank")&&a.setNode(r, {
            borderLeft:u.borderLeft[
              t
            ], borderRight:u.borderRight[
              t
            ]
          }))
        })), a
      }
    }, 558006:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ConcentricLayout=void 0;
      var i=n(781422), a=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.nodeSize=30, n.minNodeSpacing=10, n.nodeSpacing=10, n.preventOverlap=!1, n.equidistant=!1, n.startAngle=1.5*Math.PI, n.clockwise=!0, n.sortBy="degree", n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.onLayoutEnd=function(){
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            nodeSize:30, minNodeSpacing:10, nodeSpacing:10, preventOverlap:!1, sweep:void 0, equidistant:!1, startAngle:1.5*Math.PI, clockwise:!0, maxLevelDiff:void 0, sortBy:"degree"
          }
        }, t.prototype.execute=function(){
          var e, t, n=this, r=n.nodes, o=n.edges, a=r.length;
          if(0!==a){
            n.width||"undefined"==typeof window||(n.width=window.innerWidth), n.height||"undefined"==typeof window||(n.height=window.innerHeight), n.center||(n.center=[
              n.width/2, n.height/2
            ]);
            var u=n.center;
            if(1===a)return r[
              0
            ].x=u[
              0
            ], r[
              0
            ].y=u[
              1
            ], void(null===(t=n.onLayoutEnd)||void 0===t||t.call(n));
            var c, s=n.nodeSize, d=n.nodeSpacing, l=[
            ], f=0;
            c=(0, i.isArray)(s)?Math.max(s[
              0
            ], s[
              1
            ]):s, (0, i.isArray)(d)?f=Math.max(d[
              0
            ], d[
              1
            ]):(0, i.isNumber)(d)&&(f=d), r.forEach((function(e){
              l.push(e);
              var t=c;
              (0, i.isArray)(e.size)?t=Math.max(e.size[
                0
              ], e.size[
                1
              ]):(0, i.isNumber)(e.size)?t=e.size:(0, i.isObject)(e.size)&&(t=Math.max(e.size.width, e.size.height)), c=Math.max(c, t), (0, i.isFunction)(d)&&(f=Math.max(d(e), f))
            })), n.clockwise=void 0!==n.counterclockwise?!n.counterclockwise:n.clockwise;
            var h={
            }, v={
            };
            if(l.forEach((function(e, t){
              h[
                e.id
              ]
              =e, v[
                e.id
              ]
              =t
            })), !("degree"!==n.sortBy&&(0, i.isString)(n.sortBy)&&void 0!==l[
              0
            ]
            [
              n.sortBy
            ]
            ||(n.sortBy="degree", (0, i.isNumber)(r[
              0
            ].degree)))){
              var p=(0, i.getDegree)(r.length, v, o);
              l.forEach((function(e, t){
                e.degree=p[
                  t
                ].all
              }))
            }
            l.sort((function(e, t){
              return t[
                n.sortBy
              ]
              -e[
                n.sortBy
              ]
            })), n.maxValueNode=l[
              0
            ], n.maxLevelDiff=n.maxLevelDiff||n.maxValueNode[
              n.sortBy
            ]
            /4;
            var g=[
              [
              ]
            ], y=g[
              0
            ];
            l.forEach((function(e){
              if(y.length>0){
                var t=Math.abs(y[
                  0
                ]
                [
                  n.sortBy
                ]
                -e[
                  n.sortBy
                ]);
                n.maxLevelDiff&&t>=n.maxLevelDiff&&(y=[
                ], g.push(y))
              }
              y.push(e)
            }));
            var m=c+(f||n.minNodeSpacing);
            if(!n.preventOverlap){
              var x=g.length>0&&g[
                0
              ].length>1, b=(Math.min(n.width, n.height)/2-m)/(g.length+(x?1:0));
              m=Math.min(m, b)
            }
            var _=0;
            if(g.forEach((function(e){
              var t=n.sweep;
              void 0===t&&(t=2*Math.PI-2*Math.PI/e.length);
              var r=e.dTheta=t/Math.max(1, e.length-1);
              if(e.length>1&&n.preventOverlap){
                var o=Math.cos(r)-Math.cos(0), i=Math.sin(r)-Math.sin(0), a=Math.sqrt(m*m/(o*o+i*i));
                _=Math.max(a, _)
              }
              e.r=_, _+=m
            })), n.equidistant){
              for(var w=0, E=0, D=0;
              D<g.length;
              D++){
                var I=g[
                  D
                ].r-E;
                w=Math.max(w, I)
              }
              E=0, g.forEach((function(e, t){
                0===t&&(E=e.r), e.r=E, E+=w
              }))
            }
            return g.forEach((function(e){
              var t=e.dTheta, r=e.r;
              e.forEach((function(e, o){
                var i=n.startAngle+(n.clockwise?1:-1)*t*o;
                e.x=u[
                  0
                ]
                +r*Math.cos(i), e.y=u[
                  1
                ]
                +r*Math.sin(i)
              }))
            })), n.onLayoutEnd&&n.onLayoutEnd(), {
              nodes:r, edges:o
            }
          }
          null===(e=n.onLayoutEnd)||void 0===e||e.call(n)
        }, t.prototype.getType=function(){
          return"concentric"
        }, t
      }
      (n(346271).Base);
      t.ConcentricLayout=a
    }, 566873:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      t.default=function(e){
        var t, n=function(e){
          var t, n={
          }, r=0, o=function(t){
            var i, a=r;
            null===(i=e.children(t))||void 0===i||i.forEach(o), n[
              t
            ]
            ={
              low:a, lim:r++
            }
          };
          return null===(t=e.children())||void 0===t||t.forEach(o), n
        }
        (e);
        null===(t=e.graph().dummyChains)||void 0===t||t.forEach((function(t){
          var r, o, i=t, a=e.node(i), u=a.edgeObj;
          if(u)for(var c=function(e, t, n, r){
            var o, i, a=[
            ], u=[
            ], c=Math.min(t[
              n
            ].low, t[
              r
            ].low), s=Math.max(t[
              n
            ].lim, t[
              r
            ].lim);
            o=n;
            do{
              o=e.parent(o), a.push(o)
            }
            while(o&&(t[
              o
            ].low>c||s>t[
              o
            ].lim));
            for(i=o, o=r;
            o&&o!==i;
            )u.push(o), o=e.parent(o);
            return{
              lca:i, path:a.concat(u.reverse())
            }
          }
          (e, n, u.v, u.w), s=c.path, d=c.lca, l=0, f=s[
            l
          ], h=!0;
          i!==u.w;
          ){
            if(a=e.node(i), h){
              for(;
              f!==d&&(null===(r=e.node(f))||void 0===r?void 0:r.maxRank)<a.rank;
              )f=s[
                ++l
              ];
              f===d&&(h=!1)
            }
            if(!h){
              for(;
              l<s.length-1&&(null===(o=e.node(s[
                l+1
              ]))||void 0===o?void 0:o.minRank)<=a.rank;
              )l++;
              f=s[
                l
              ]
            }
            e.setParent(i, f), i=e.successors(i)[
              0
            ]
          }
        }))
      }
    }, 578326:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.Graph=void 0;
      var i=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return o(t, e), t
      }
      (n(746888).Graph);
      t.Graph=i
    }, 582149:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      })
    }, 611519:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.minBy=t.notime=t.time=t.partition=t.maxRank=t.addBorderNode=t.removeEmptyRanks=t.normalizeRanks=t.buildLayerMatrix=t.intersectRect=t.predecessorWeights=t.successorWeights=t.zipObject=t.asNonCompoundGraph=t.simplify=t.addDummyNode=void 0;
      var r=n(781422), o=n(578326);
      t.addDummyNode=function(e, t, n, r){
        var o;
        do{
          o="".concat(r).concat(Math.random())
        }
        while(e.hasNode(o));
        return n.dummy=t, e.setNode(o, n), o
      };
      t.simplify=function(e){
        var t=(new o.Graph).setGraph(e.graph());
        return e.nodes().forEach((function(n){
          t.setNode(n, e.node(n))
        })), e.edges().forEach((function(n){
          var r=t.edgeFromArgs(n.v, n.w)||{
            weight:0, minlen:1
          }, o=e.edge(n);
          t.setEdge(n.v, n.w, {
            weight:r.weight+o.weight, minlen:Math.max(r.minlen, o.minlen)
          })
        })), t
      };
      t.asNonCompoundGraph=function(e){
        var t=new o.Graph({
          multigraph:e.isMultigraph()
        }).setGraph(e.graph());
        return e.nodes().forEach((function(n){
          var r;
          (null===(r=e.children(n))||void 0===r?void 0:r.length)||t.setNode(n, e.node(n))
        })), e.edges().forEach((function(n){
          t.setEdgeObj(n, e.edge(n))
        })), t
      };
      t.zipObject=function(e, t){
        return null==e?void 0:e.reduce((function(e, n, r){
          return e[
            n
          ]
          =t[
            r
          ], e
        }), {
        })
      };
      t.successorWeights=function(e){
        var t={
        };
        return e.nodes().forEach((function(n){
          var r, o={
          };
          null===(r=e.outEdges(n))||void 0===r||r.forEach((function(t){
            var n;
            o[
              t.w
            ]
            =(o[
              t.w
            ]
            ||0)+((null===(n=e.edge(t))||void 0===n?void 0:n.weight)||0)
          })), t[
            n
          ]
          =o
        })), t
      };
      t.predecessorWeights=function(e){
        var n=e.nodes(), r=n.map((function(t){
          var n, r={
          };
          return null===(n=e.inEdges(t))||void 0===n||n.forEach((function(t){
            r[
              t.v
            ]
            =(r[
              t.v
            ]
            ||0)+e.edge(t).weight
          })), r
        }));
        return(0, t.zipObject)(n, r)
      };
      t.intersectRect=function(e, t){
        var n, r, o=Number(e.x), i=Number(e.y), a=Number(t.x)-o, u=Number(t.y)-i, c=Number(e.width)/2, s=Number(e.height)/2;
        return a||u?(Math.abs(u)*c>Math.abs(a)*s?(u<0&&(s=-s), n=s*a/u, r=s):(a<0&&(c=-c), n=c, r=c*u/a), {
          x:o+n, y:i+r
        }):{
          x:0, y:0
        }
      };
      t.buildLayerMatrix=function(e){
        for(var n=[
        ], r=(0, t.maxRank)(e)+1, o=0;
        o<r;
        o++)n.push([
        ]);
        e.nodes().forEach((function(t){
          var r=e.node(t);
          if(r){
            var o=r.rank;
            void 0!==o&&n[
              o
            ]
            &&n[
              o
            ].push(t)
          }
        }));
        for(o=0;
        o<r;
        o++)n[
          o
        ]
        =n[
          o
        ].sort((function(t, n){
          var r, o, i, a;
          return i=null===(r=e.node(t))||void 0===r?void 0:r.order, a=null===(o=e.node(n))||void 0===o?void 0:o.order, Number(i)-Number(a)
        }));
        return n
      };
      t.normalizeRanks=function(e){
        var t=e.nodes().filter((function(t){
          var n;
          return void 0!==(null===(n=e.node(t))||void 0===n?void 0:n.rank)
        })).map((function(t){
          return e.node(t).rank
        })), n=Math.min.apply(Math, t);
        e.nodes().forEach((function(t){
          var r=e.node(t);
          r.hasOwnProperty("rank")&&n!==1/0&&(r.rank-=n)
        }))
      };
      t.removeEmptyRanks=function(e){
        var t=e.nodes(), n=t.filter((function(t){
          var n;
          return void 0!==(null===(n=e.node(t))||void 0===n?void 0:n.rank)
        })).map((function(t){
          return e.node(t).rank
        })), r=Math.min.apply(Math, n), o=[
        ];
        t.forEach((function(t){
          var n, i=((null===(n=e.node(t))||void 0===n?void 0:n.rank)||0)-r;
          o[
            i
          ]
          ||(o[
            i
          ]
          =[
          ]), o[
            i
          ].push(t)
        }));
        for(var i=0, a=e.graph().nodeRankFactor||0, u=0;
        u<o.length;
        u++){
          var c=o[
            u
          ];
          void 0===c?u%a!=0&&(i-=1):i&&(null==c||c.forEach((function(t){
            var n=e.node(t);
            n&&(n.rank=n.rank||0, n.rank+=i)
          })))
        }
      };
      t.addBorderNode=function(e, n, o, i){
        var a={
          width:0, height:0
        };
        return(0, r.isNumber)(o)&&(0, r.isNumber)(i)&&(a.rank=o, a.order=i), (0, t.addDummyNode)(e, "border", a, n)
      };
      t.maxRank=function(e){
        var t;
        return e.nodes().forEach((function(n){
          var r, o=null===(r=e.node(n))||void 0===r?void 0:r.rank;
          void 0!==o&&(void 0===t||o>t)&&(t=o)
        })), t||(t=0), t
      };
      t.partition=function(e, t){
        var n={
          lhs:[
          ], rhs:[
          ]
        };
        return null==e||e.forEach((function(e){
          t(e)?n.lhs.push(e):n.rhs.push(e)
        })), n
      };
      t.time=function(e, t){
        var n=Date.now();
        try{
          return t()
        }
        finally{
          console.log("".concat(e, " time: ").concat(Date.now()-n, "ms"))
        }
      };
      t.notime=function(e, t){
        return t()
      };
      t.minBy=function(e, t){
        return e.reduce((function(e, n){
          return t(e)>t(n)?n:e
        }))
      }
    }, 620491:(e, t, n)=>{
      n.d(t, {
        Ay:()=>o, Bg:()=>r.Bg, Gv:()=>r.Gv, Qp:()=>r.Qp, TS:()=>r.TS
      });
      var r=n(542753);
      r.Ay.version="4.8.23";
      const o=r.Ay
    }, 633099:function(e, t, n){
      var r=this&&this.__spreadArray||function(e, t, n){
        if(n||2===arguments.length)for(var r, o=0, i=t.length;
        o<i;
        o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t, 0, o)), r[
          o
        ]
        =t[
          o
        ]);
        return e.concat(r||Array.prototype.slice.call(t))
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=n(611519), i=n(879436);
      t.default=function(e){
        var t, n=(0, o.asNonCompoundGraph)(e);
        !function(e){
          var t=(0, o.buildLayerMatrix)(e), n=e.graph().ranksep, i=0;
          null==t||t.forEach((function(t){
            var o=t.map((function(t){
              return e.node(t).height
            })), a=Math.max.apply(Math, r(r([
            ], o, !1), [
              0
            ], !1));
            null==t||t.forEach((function(t){
              e.node(t).y=i+a/2
            })), i+=a+n
          }))
        }
        (n);
        var a=function(e){
          var t=(0, o.buildLayerMatrix)(e), n=Object.assign((0, i.findType1Conflicts)(e, t), (0, i.findType2Conflicts)(e, t)), r={
          }, a=[
          ];
          [
            "u", "d"
          ].forEach((function(o){
            a="u"===o?t:Object.values(t).reverse(), [
              "l", "r"
            ].forEach((function(t){
              "r"===t&&(a=a.map((function(e){
                return Object.values(e).reverse()
              })));
              var u=("u"===o?e.predecessors:e.successors).bind(e), c=(0, i.verticalAlignment)(e, a, n, u), s=(0, i.horizontalCompaction)(e, a, c.root, c.align, "r"===t);
              "r"===t&&Object.keys(s).forEach((function(e){
                return s[
                  e
                ]
                =-s[
                  e
                ]
              })), r[
                o+t
              ]
              =s
            }))
          }));
          var u=(0, i.findSmallestWidthAlignment)(e, r);
          return u&&(0, i.alignCoordinates)(r, u), (0, i.balance)(r, e.graph().align)
        }
        (n);
        null===(t=Object.keys(a))||void 0===t||t.forEach((function(e){
          n.node(e).x=a[
            e
          ]
        }))
      }
    }, 638733:function(e, t, n){
      var r=this&&this.__assign||function(){
        return(r=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, o=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var i=o(n(299367)), a=o(n(867484)), u=o(n(396686)), c=n(611519), s=o(n(566873)), d=o(n(303396)), l=o(n(282342)), f=o(n(730347)), h=o(n(296524)), v=o(n(633099)), p=o(n(841696)), g=n(578326), y=function(e, t, n){
        t("    removeSelfEdges", (function(){
          A(e)
        })), t("    acyclic", (function(){
          i.default.run(e)
        })), t("    nestingGraph.run", (function(){
          d.default.run(e)
        })), t("    rank", (function(){
          (0, u.default)((0, c.asNonCompoundGraph)(e))
        })), t("    injectEdgeLabelProxies", (function(){
          N(e)
        })), t("    removeEmptyRanks", (function(){
          (0, c.removeEmptyRanks)(e)
        })), t("    nestingGraph.cleanup", (function(){
          d.default.cleanup(e)
        })), t("    normalizeRanks", (function(){
          (0, c.normalizeRanks)(e)
        })), t("    assignRankMinMax", (function(){
          z(e)
        })), t("    removeEdgeLabelProxies", (function(){
          C(e)
        })), t("    normalize.run", (function(){
          a.default.run(e)
        })), t("    parentDummyChains", (function(){
          (0, s.default)(e)
        })), t("    addBorderSegments", (function(){
          (0, l.default)(e)
        })), n&&n.keepNodeOrder&&t("    initDataOrder", (function(){
          (0, p.default)(e, n.nodeOrder)
        })), t("    order", (function(){
          (0, h.default)(e, null==n?void 0:n.keepNodeOrder)
        })), t("    insertSelfEdges", (function(){
          F(e)
        })), t("    adjustCoordinateSystem", (function(){
          f.default.adjust(e)
        })), t("    position", (function(){
          (0, v.default)(e)
        })), t("    positionSelfEdges", (function(){
          R(e)
        })), t("    removeBorderNodes", (function(){
          j(e)
        })), t("    normalize.undo", (function(){
          a.default.undo(e)
        })), t("    fixupEdgeLabelCoords", (function(){
          T(e)
        })), t("    undoCoordinateSystem", (function(){
          f.default.undo(e)
        })), t("    translateGraph", (function(){
          G(e)
        })), t("    assignNodeIntersects", (function(){
          L(e)
        })), t("    reversePoints", (function(){
          P(e)
        })), t("    acyclic.undo", (function(){
          i.default.undo(e)
        }))
      }, m=function(e, t){
        e.nodes().forEach((function(n){
          var r=e.node(n), o=t.node(n);
          void 0!==o?(r.fixorder=o._order, delete o._order):delete r.fixorder
        }))
      }, x=function(e, t){
        e.nodes().forEach((function(n){
          var r, o=e.node(n);
          if(o){
            var i=t.node(n);
            o.x=i.x, o.y=i.y, o._order=i.order, o._rank=i.rank, (null===(r=t.children(n))||void 0===r?void 0:r.length)&&(o.width=i.width, o.height=i.height)
          }
        })), e.edges().forEach((function(n){
          var r=e.edge(n), o=t.edge(n);
          r.points=o?o.points:[
          ], o&&o.hasOwnProperty("x")&&(r.x=o.x, r.y=o.y)
        })), e.graph().width=t.graph().width, e.graph().height=t.graph().height
      }, b=[
        "nodesep", "edgesep", "ranksep", "marginx", "marginy"
      ], _={
        ranksep:50, edgesep:20, nodesep:50, rankdir:"tb"
      }, w=[
        "acyclicer", "ranker", "rankdir", "align"
      ], E=[
        "width", "height", "layer", "fixorder"
      ], D={
        width:0, height:0
      }, I=[
        "minlen", "weight", "width", "height", "labeloffset"
      ], S={
        minlen:1, weight:1, width:0, height:0, labeloffset:10, labelpos:"r"
      }, M=[
        "labelpos"
      ], k=function(e){
        var t=new g.Graph({
          multigraph:!0, compound:!0
        }), n=B(e.graph()), o={
        };
        return null==w||w.forEach((function(e){
          void 0!==n[
            e
          ]
          &&(o[
            e
          ]
          =n[
            e
          ])
        })), t.setGraph(Object.assign({
        }, _, W(n, b), o)), e.nodes().forEach((function(n){
          var o=B(e.node(n)), i=r(r({
          }, D), o), a=W(i, E);
          t.setNode(n, a), t.setParent(n, e.parent(n))
        })), e.edges().forEach((function(n){
          var r=B(e.edge(n)), o={
          };
          null==M||M.forEach((function(e){
            void 0!==r[
              e
            ]
            &&(o[
              e
            ]
            =r[
              e
            ])
          })), t.setEdgeObj(n, Object.assign({
          }, S, W(r, I), o))
        })), t
      }, O=function(e){
        var t=e.graph();
        t.ranksep||(t.ranksep=0), t.ranksep/=2, e.nodes().forEach((function(t){
          var n=e.node(t);
          isNaN(n.layer)||n.layer||(n.layer=0)
        })), e.edges().forEach((function(n){
          var r, o=e.edge(n);
          o.minlen*=2, "c"!==(null===(r=o.labelpos)||void 0===r?void 0:r.toLowerCase())&&("TB"===t.rankdir||"BT"===t.rankdir?o.width+=o.labeloffset:o.height+=o.labeloffset)
        }))
      }, N=function(e){
        e.edges().forEach((function(t){
          var n=e.edge(t);
          if(n.width&&n.height){
            var r=e.node(t.v), o={
              e:t, rank:(e.node(t.w).rank-r.rank)/2+r.rank
            };
            (0, c.addDummyNode)(e, "edge-proxy", o, "_ep")
          }
        }))
      }, z=function(e){
        var t=0;
        e.nodes().forEach((function(n){
          var r, o, i=e.node(n);
          i.borderTop&&(i.minRank=null===(r=e.node(i.borderTop))||void 0===r?void 0:r.rank, i.maxRank=null===(o=e.node(i.borderBottom))||void 0===o?void 0:o.rank, t=Math.max(t, i.maxRank||-1/0))
        })), e.graph().maxRank=t
      }, C=function(e){
        e.nodes().forEach((function(t){
          var n=e.node(t);
          "edge-proxy"===n.dummy&&(e.edge(n.e).labelRank=n.rank, e.removeNode(t))
        }))
      }, G=function(e){
        var t, n, r=0, o=0, i=e.graph(), a=i.marginx||0, u=i.marginy||0, c=function(e){
          if(e){
            var i=e.x, a=e.y, u=e.width, c=e.height;
            isNaN(i)||isNaN(u)||(void 0===t&&(t=i-u/2), t=Math.min(t, i-u/2), r=Math.max(r, i+u/2)), isNaN(a)||isNaN(c)||(void 0===n&&(n=a-c/2), n=Math.min(n, a-c/2), o=Math.max(o, a+c/2))
          }
        };
        e.nodes().forEach((function(t){
          c(e.node(t))
        })), e.edges().forEach((function(t){
          var n=e.edge(t);
          (null==n?void 0:n.hasOwnProperty("x"))&&c(n)
        })), t-=a, n-=u, e.nodes().forEach((function(r){
          var o=e.node(r);
          o&&(o.x-=t, o.y-=n)
        })), e.edges().forEach((function(r){
          var o, i=e.edge(r);
          null===(o=i.points)||void 0===o||o.forEach((function(e){
            e.x-=t, e.y-=n
          })), i.hasOwnProperty("x")&&(i.x-=t), i.hasOwnProperty("y")&&(i.y-=n)
        })), i.width=r-t+a, i.height=o-n+u
      }, L=function(e){
        e.edges().forEach((function(t){
          var n, r, o=e.edge(t), i=e.node(t.v), a=e.node(t.w);
          o.points?(n=o.points[
            0
          ], r=o.points[
            o.points.length-1
          ]):(o.points=[
          ], n=a, r=i), o.points.unshift((0, c.intersectRect)(i, n)), o.points.push((0, c.intersectRect)(a, r))
        }))
      }, T=function(e){
        e.edges().forEach((function(t){
          var n=e.edge(t);
          if(null==n?void 0:n.hasOwnProperty("x"))switch("l"!==n.labelpos&&"r"!==n.labelpos||(n.width-=n.labeloffset), n.labelpos){
            case"l":n.x-=n.width/2+n.labeloffset;
            break;
            case"r":n.x+=n.width/2+n.labeloffset
          }
        }))
      }, P=function(e){
        e.edges().forEach((function(t){
          var n, r=e.edge(t);
          r.reversed&&(null===(n=r.points)||void 0===n||n.reverse())
        }))
      }, j=function(e){
        e.nodes().forEach((function(t){
          var n, r, o;
          if(null===(n=e.children(t))||void 0===n?void 0:n.length){
            var i=e.node(t), a=e.node(i.borderTop), u=e.node(i.borderBottom), c=e.node(i.borderLeft[
              (null===(r=i.borderLeft)||void 0===r?void 0:r.length)-1
            ]), s=e.node(i.borderRight[
              (null===(o=i.borderRight)||void 0===o?void 0:o.length)-1
            ]);
            i.width=Math.abs((null==s?void 0:s.x)-(null==c?void 0:c.x))||10, i.height=Math.abs((null==u?void 0:u.y)-(null==a?void 0:a.y))||10, i.x=((null==c?void 0:c.x)||0)+i.width/2, i.y=((null==a?void 0:a.y)||0)+i.height/2
          }
        })), e.nodes().forEach((function(t){
          var n;
          "border"===(null===(n=e.node(t))||void 0===n?void 0:n.dummy)&&e.removeNode(t)
        }))
      }, A=function(e){
        e.edges().forEach((function(t){
          if(t.v===t.w){
            var n=e.node(t.v);
            n.selfEdges||(n.selfEdges=[
            ]), n.selfEdges.push({
              e:t, label:e.edge(t)
            }), e.removeEdgeObj(t)
          }
        }))
      }, F=function(e){
        var t=(0, c.buildLayerMatrix)(e);
        null==t||t.forEach((function(t){
          var n=0;
          null==t||t.forEach((function(t, r){
            var o, i=e.node(t);
            i.order=r+n, null===(o=i.selfEdges)||void 0===o||o.forEach((function(t){
              (0, c.addDummyNode)(e, "selfedge", {
                width:t.label.width, height:t.label.height, rank:i.rank, order:r+ ++n, e:t.e, label:t.label
              }, "_se")
            })), delete i.selfEdges
          }))
        }))
      }, R=function(e){
        e.nodes().forEach((function(t){
          var n=e.node(t);
          if("selfedge"===n.dummy){
            var r=e.node(n.e.v), o=r.x+r.width/2, i=r.y, a=n.x-o, u=r.height/2;
            e.setEdgeObj(n.e, n.label), e.removeNode(t), n.label.points=[
              {
                x:o+2*a/3, y:i-u
              }, {
                x:o+5*a/6, y:i-u
              }, {
                y:i, x:o+a
              }, {
                x:o+5*a/6, y:i+u
              }, {
                x:o+2*a/3, y:i+u
              }
            ], n.label.x=n.x, n.label.y=n.y
          }
        }))
      }, W=function(e, t){
        var n={
        };
        return null==t||t.forEach((function(t){
          void 0!==e[
            t
          ]
          &&(n[
            t
          ]
          =+e[
            t
          ])
        })), n
      }, B=function(e){
        void 0===e&&(e={
        });
        var t={
        };
        return Object.keys(e).forEach((function(n){
          t[
            n.toLowerCase()
          ]
          =e[
            n
          ]
        })), t
      };
      t.default=function(e, t){
        var n=t&&t.debugTiming?c.time:c.notime;
        n("layout", (function(){
          t&&!t.keepNodeOrder&&t.prevGraph&&n("  inheritOrder", (function(){
            m(e, t.prevGraph)
          }));
          var r=n("  buildLayoutGraph", (function(){
            return k(e)
          }));
          t&&!1===t.edgeLabelSpace||n("  makeSpaceForEdgeLabels", (function(){
            O(r)
          }));
          try{
            n("  runLayout", (function(){
              y(r, n, t)
            }))
          }
          catch(e){
            if("Not possible to find intersection inside of the rectangle"===e.message)return void console.error("The following error may be caused by improper layer setting, please make sure your manual layer setting does not violate the graph's structure:\n", e);
            throw e
          }
          n("  updateInputGraph", (function(){
            x(e, r)
          }))
        }))
      }
    }, 648991:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ForceAtlas2Layout=void 0;
      var a=n(346271), u=n(781422), c=i(n(323151)), s=i(n(242784)), d=i(n(825980)), l=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.center=[
            0, 0
          ], n.width=300, n.height=300, n.nodes=[
          ], n.edges=[
          ], n.kr=5, n.kg=1, n.mode="normal", n.preventOverlap=!1, n.dissuadeHubs=!1, n.barnesHut=void 0, n.maxIteration=0, n.ks=.1, n.ksmax=10, n.tao=.1, n.onLayoutEnd=function(){
          }, n.prune=void 0, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.onLayoutEnd, r=e.prune, o=e.maxIteration;
          e.width||"undefined"==typeof window||(e.width=window.innerWidth), e.height||"undefined"==typeof window||(e.height=window.innerHeight);
          for(var i=[
          ], a=t.length, c=0;
          c<a;
          c+=1){
            var s=t[
              c
            ], d=10, l=10;
            (0, u.isNumber)(s.size)&&(d=s.size, l=s.size), (0, u.isArray)(s.size)?(isNaN(s.size[
              0
            ])||(d=s.size[
              0
            ]), isNaN(s.size[
              1
            ])||(l=s.size[
              1
            ])):(0, u.isObject)(s.size)&&(d=s.size.width, l=s.size.height), e.getWidth&&!isNaN(e.getWidth(s))&&(l=e.getWidth(s)), e.getHeight&&!isNaN(e.getHeight(s))&&(d=e.getHeight(s));
            var f=Math.max(d, l);
            i.push(f)
          }
          void 0===e.barnesHut&&a>250&&(e.barnesHut=!0), void 0===e.prune&&a>100&&(e.prune=!0), 0!==this.maxIteration||e.prune?0===this.maxIteration&&r&&(o=100, a<=200&&a>100?o=500:a>200&&(o=950), this.maxIteration=o):(o=250, a<=200&&a>100?o=1e3:a>200&&(o=1200), this.maxIteration=o), e.kr||(e.kr=50, a>100&&a<=500?e.kr=20:a>500&&(e.kr=1)), e.kg||(e.kg=20, a>100&&a<=500?e.kg=10:a>500&&(e.kg=1)), this.nodes=e.updateNodesByForces(i), n()
        }, t.prototype.updateNodesByForces=function(e){
          for(var t=this, n=t.edges, r=t.maxIteration, o=t.nodes, i=n.filter((function(e){
            return(0, u.getEdgeTerminal)(e, "source")!==(0, u.getEdgeTerminal)(e, "target")
          })), a=o.length, c=i.length, s=[
          ], d={
          }, l={
          }, f=[
          ], h=0;
          h<a;
          h+=1)d[
            o[
              h
            ].id
          ]
          =h, s[
            h
          ]
          =0, (void 0===o[
            h
          ].x||isNaN(o[
            h
          ].x))&&(o[
            h
          ].x=1e3*Math.random()), (void 0===o[
            h
          ].y||isNaN(o[
            h
          ].y))&&(o[
            h
          ].y=1e3*Math.random()), f.push({
            x:o[
              h
            ].x, y:o[
              h
            ].y
          });
          for(h=0;
          h<c;
          h+=1){
            for(var v=void 0, p=void 0, g=0, y=0, m=0;
            m<a;
            m+=1){
              var x=(0, u.getEdgeTerminal)(i[
                h
              ], "source"), b=(0, u.getEdgeTerminal)(i[
                h
              ], "target");
              o[
                m
              ].id===x?(v=o[
                m
              ], g=m):o[
                m
              ].id===b&&(p=o[
                m
              ], y=m), l[
                h
              ]
              ={
                sourceIdx:g, targetIdx:y
              }
            }
            v&&(s[
              d[
                v.id
              ]
            ]
            +=1), p&&(s[
              d[
                p.id
              ]
            ]
            +=1)
          }
          var _=r;
          if(o=this.iterate(_, d, l, c, s, e), t.prune){
            for(m=0;
            m<c;
            m+=1)s[
              l[
                m
              ].sourceIdx
            ]
            <=1?(o[
              l[
                m
              ].sourceIdx
            ].x=o[
              l[
                m
              ].targetIdx
            ].x, o[
              l[
                m
              ].sourceIdx
            ].y=o[
              l[
                m
              ].targetIdx
            ].y):s[
              l[
                m
              ].targetIdx
            ]
            <=1&&(o[
              l[
                m
              ].targetIdx
            ].x=o[
              l[
                m
              ].sourceIdx
            ].x, o[
              l[
                m
              ].targetIdx
            ].y=o[
              l[
                m
              ].sourceIdx
            ].y);
            t.prune=!1, t.barnesHut=!1, _=100, o=this.iterate(_, d, l, c, s, e)
          }
          return o
        }, t.prototype.iterate=function(e, t, n, r, o, i){
          for(var a=this, u=a.nodes, s=a.kr, d=a.preventOverlap, l=a.barnesHut, f=u.length, h=0, v=e, p=[
          ], g=[
          ], y=[
          ], m=0;
          m<f;
          m+=1)if(p[
            2*m
          ]
          =0, p[
            2*m+1
          ]
          =0, l){
            var x={
              id:m, rx:u[
                m
              ].x, ry:u[
                m
              ].y, mass:1, g:s, degree:o[
                m
              ]
            };
            y[
              m
            ]
            =new c.default(x)
          }
          for(;
          v>0;
          ){
            for(m=0;
            m<f;
            m+=1)g[
              2*m
            ]
            =p[
              2*m
            ], g[
              2*m+1
            ]
            =p[
              2*m+1
            ], p[
              2*m
            ]
            =0, p[
              2*m+1
            ]
            =0;
            p=this.getAttrForces(v, 50, r, t, n, o, i, p), p=l&&(d&&v>50||!d)?this.getOptRepGraForces(p, y, o):this.getRepGraForces(v, 50, p, 100, i, o);
            var b=this.updatePos(p, g, h, o);
            u=b.nodes, h=b.sg, v--, a.tick&&a.tick()
          }
          return u
        }, t.prototype.getAttrForces=function(e, t, n, r, o, i, a, u){
          for(var c=this, s=c.nodes, d=c.preventOverlap, l=c.dissuadeHubs, f=c.mode, h=c.prune, v=0;
          v<n;
          v+=1){
            var p=s[
              o[
                v
              ].sourceIdx
            ], g=o[
              v
            ].sourceIdx, y=s[
              o[
                v
              ].targetIdx
            ], m=o[
              v
            ].targetIdx;
            if(!h||!(i[
              g
            ]
            <=1||i[
              m
            ]
            <=1)){
              var x=[
                y.x-p.x, y.y-p.y
              ], b=Math.hypot(x[
                0
              ], x[
                1
              ]);
              b=b<1e-4?1e-4:b, x[
                0
              ]
              =x[
                0
              ]
              /b, x[
                1
              ]
              =x[
                1
              ]
              /b, d&&e<t&&(b=b-a[
                g
              ]
              -a[
                m
              ]);
              var _=b, w=_;
              "linlog"===f&&(w=_=Math.log(1+b)), l&&(_=b/i[
                g
              ], w=b/i[
                m
              ]), d&&e<t&&b<=0?(_=0, w=0):d&&e<t&&b>0&&(_=b, w=b), u[
                2*r[
                  p.id
                ]
              ]
              +=_*x[
                0
              ], u[
                2*r[
                  y.id
                ]
              ]
              -=w*x[
                0
              ], u[
                2*r[
                  p.id
                ]
                +1
              ]
              +=_*x[
                1
              ], u[
                2*r[
                  y.id
                ]
                +1
              ]
              -=w*x[
                1
              ]
            }
          }
          return u
        }, t.prototype.getRepGraForces=function(e, t, n, r, o, i){
          for(var a=this, u=a.nodes, c=a.preventOverlap, s=a.kr, d=a.kg, l=a.center, f=a.prune, h=u.length, v=0;
          v<h;
          v+=1){
            for(var p=v+1;
            p<h;
            p+=1)if(!f||!(i[
              v
            ]
            <=1||i[
              p
            ]
            <=1)){
              var g=[
                u[
                  p
                ].x-u[
                  v
                ].x, u[
                  p
                ].y-u[
                  v
                ].y
              ], y=Math.hypot(g[
                0
              ], g[
                1
              ]);
              y=y<1e-4?1e-4:y, g[
                0
              ]
              =g[
                0
              ]
              /y, g[
                1
              ]
              =g[
                1
              ]
              /y, c&&e<t&&(y=y-o[
                v
              ]
              -o[
                p
              ]);
              var m=s*(i[
                v
              ]
              +1)*(i[
                p
              ]
              +1)/y;
              c&&e<t&&y<0?m=r*(i[
                v
              ]
              +1)*(i[
                p
              ]
              +1):c&&e<t&&0===y?m=0:c&&e<t&&y>0&&(m=s*(i[
                v
              ]
              +1)*(i[
                p
              ]
              +1)/y), n[
                2*v
              ]
              -=m*g[
                0
              ], n[
                2*p
              ]
              +=m*g[
                0
              ], n[
                2*v+1
              ]
              -=m*g[
                1
              ], n[
                2*p+1
              ]
              +=m*g[
                1
              ]
            }
            var x=[
              u[
                v
              ].x-l[
                0
              ], u[
                v
              ].y-l[
                1
              ]
            ], b=Math.hypot(x[
              0
            ], x[
              1
            ]);
            x[
              0
            ]
            =x[
              0
            ]
            /b, x[
              1
            ]
            =x[
              1
            ]
            /b;
            var _=d*(i[
              v
            ]
            +1);
            n[
              2*v
            ]
            -=_*x[
              0
            ], n[
              2*v+1
            ]
            -=_*x[
              1
            ]
          }
          return n
        }, t.prototype.getOptRepGraForces=function(e, t, n){
          for(var r=this, o=r.nodes, i=r.kg, a=r.center, u=r.prune, c=o.length, l=9e10, f=-9e10, h=9e10, v=-9e10, p=0;
          p<c;
          p+=1)u&&n[
            p
          ]
          <=1||(t[
            p
          ].setPos(o[
            p
          ].x, o[
            p
          ].y), o[
            p
          ].x>=f&&(f=o[
            p
          ].x), o[
            p
          ].x<=l&&(l=o[
            p
          ].x), o[
            p
          ].y>=v&&(v=o[
            p
          ].y), o[
            p
          ].y<=h&&(h=o[
            p
          ].y));
          var g={
            xmid:(f+l)/2, ymid:(v+h)/2, length:Math.max(f-l, v-h), massCenter:a, mass:c
          }, y=new s.default(g), m=new d.default(y);
          for(p=0;
          p<c;
          p+=1)u&&n[
            p
          ]
          <=1||t[
            p
          ].in(y)&&m.insert(t[
            p
          ]);
          for(p=0;
          p<c;
          p+=1)if(!(u&&n[
            p
          ]
          <=1)){
            t[
              p
            ].resetForce(), m.updateForce(t[
              p
            ]), e[
              2*p
            ]
            -=t[
              p
            ].fx, e[
              2*p+1
            ]
            -=t[
              p
            ].fy;
            var x=[
              o[
                p
              ].x-a[
                0
              ], o[
                p
              ].y-a[
                1
              ]
            ], b=Math.hypot(x[
              0
            ], x[
              1
            ]);
            b=b<1e-4?1e-4:b, x[
              0
            ]
            =x[
              0
            ]
            /b, x[
              1
            ]
            =x[
              1
            ]
            /b;
            var _=i*(n[
              p
            ]
            +1);
            e[
              2*p
            ]
            -=_*x[
              0
            ], e[
              2*p+1
            ]
            -=_*x[
              1
            ]
          }
          return e
        }, t.prototype.updatePos=function(e, t, n, r){
          for(var o=this, i=o.nodes, a=o.ks, c=o.tao, s=o.prune, d=o.ksmax, l=i.length, f=[
          ], h=[
          ], v=0, p=0, g=0;
          g<l;
          g+=1)if(!(s&&r[
            g
          ]
          <=1)){
            var y=[
              e[
                2*g
              ]
              -t[
                2*g
              ], e[
                2*g+1
              ]
              -t[
                2*g+1
              ]
            ], m=Math.hypot(y[
              0
            ], y[
              1
            ]), x=[
              e[
                2*g
              ]
              +t[
                2*g
              ], e[
                2*g+1
              ]
              +t[
                2*g+1
              ]
            ], b=Math.hypot(x[
              0
            ], x[
              1
            ]);
            f[
              g
            ]
            =m, h[
              g
            ]
            =b/2, v+=(r[
              g
            ]
            +1)*f[
              g
            ], p+=(r[
              g
            ]
            +1)*h[
              g
            ]
          }
          var _=n;
          n=c*p/v, 0!==_&&(n=n>1.5*_?1.5*_:n);
          for(g=0;
          g<l;
          g+=1)if(!(s&&r[
            g
          ]
          <=1||(0, u.isNumber)(i[
            g
          ].fx)&&(0, u.isNumber)(i[
            g
          ].fy))){
            var w=a*n/(1+n*Math.sqrt(f[
              g
            ])), E=Math.hypot(e[
              2*g
            ], e[
              2*g+1
            ]), D=d/(E=E<1e-4?1e-4:E), I=(w=w>D?D:w)*e[
              2*g
            ], S=w*e[
              2*g+1
            ];
            i[
              g
            ].x+=I, i[
              g
            ].y+=S
          }
          return{
            nodes:i, sg:n
          }
        }, t
      }
      (a.Base);
      t.ForceAtlas2Layout=l
    }, 669843:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      t.default=function(e, t){
        return t.map((function(t){
          var n=e.inEdges(t);
          if(!(null==n?void 0:n.length))return{
            v:t
          };
          var r={
            sum:0, weight:0
          };
          return null==n||n.forEach((function(t){
            var n=e.edge(t), o=e.node(t.v);
            r.sum+=n.weight*o.order, r.weight+=n.weight
          })), {
            v:t, barycenter:r.sum/r.weight, weight:r.weight
          }
        }))
      }
    }, 679829:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.DagreLayout=void 0;
      var a=i(n(920657)), u=n(781422), c=n(346271), s=n(578326), d=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.rankdir="TB", n.nodesep=50, n.ranksep=50, n.controlPoints=!1, n.sortByCombo=!1, n.edgeLabelSpace=!0, n.radial=!1, n.nodes=[
          ], n.edges=[
          ], n.onLayoutEnd=function(){
          }, n.layoutNode=function(e){
            var t=n.nodes.find((function(t){
              return t.id===e
            }));
            return!t||!1!==t.layout
          }, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            rankdir:"TB", align:void 0, nodeSize:void 0, nodesepFunc:void 0, ranksepFunc:void 0, nodesep:50, ranksep:50, controlPoints:!1, radial:!1, focusNode:null
          }
        }, t.prototype.execute=function(){
          var e, t, n, r, o=this, i=this, c=i.nodes, d=i.nodeSize, f=i.rankdir, h=i.combos, v=i.begin, p=i.radial, g=i.comboEdges, y=void 0===g?[
          ]
          :g, m=i.vedges, x=void 0===m?[
          ]
          :m;
          if(c){
            var b=i.edges||[
            ], _=new s.Graph({
              multigraph:!0, compound:!0
            });
            i.nodeMap={
            };
            var w={
            };
            c.forEach((function(e){
              i.nodeMap[
                e.id
              ]
              =e, e.comboId&&(w[
                e.comboId
              ]
              =w[
                e.comboId
              ]
              ||[
              ], w[
                e.comboId
              ].push(e.id))
            }));
            var E, D=[
            ], I={
            };
            (null===(e=i.nodeOrder)||void 0===e?void 0:e.length)?(i.nodeOrder.forEach((function(e){
              I[
                e
              ]
              =!0, D.push(i.nodeMap[
                e
              ])
            })), c.forEach((function(e){
              I[
                e.id
              ]
              ||D.push(e)
            }))):D=c, E=d?(0, u.isArray)(d)?function(){
              return d
            }
            :function(){
              return[
                d, d
              ]
            }
            :function(e){
              return e.size?(0, u.isArray)(e.size)?e.size:(0, u.isObject)(e.size)?[
                e.size.width||40, e.size.height||40
              ]
              :[
                e.size, e.size
              ]
              :[
                40, 40
              ]
            };
            var S=(0, u.getFunc)(i.ranksep, 50, i.ranksepFunc), M=(0, u.getFunc)(i.nodesep, 50, i.nodesepFunc), k=M, O=S;
            "LR"!==f&&"RL"!==f||(k=S, O=M), _.setDefaultEdgeLabel((function(){
              return{
              }
            })), _.setGraph(i);
            var N={
            };
            this.sortByCombo&&h&&h.forEach((function(e){
              if(N[
                e.id
              ]
              =e, e.collapsed){
                var t=E(e), n=O(e), r=k(e), o=t[
                  0
                ]
                +2*r, i=t[
                  1
                ]
                +2*n;
                _.setNode(e.id, {
                  width:o, height:i
                })
              }
              e.parentId&&(N[
                e.parentId
              ]
              ||_.setNode(e.parentId, {
              }), _.setParent(e.id, e.parentId))
            })), D.filter((function(e){
              return!1!==e.layout
            })).forEach((function(e){
              var t=E(e), n=O(e), r=k(e), i=t[
                0
              ]
              +2*r, a=t[
                1
              ]
              +2*n, c=e.layer;
              (0, u.isNumber)(c)?_.setNode(e.id, {
                width:i, height:a, layer:c
              }):_.setNode(e.id, {
                width:i, height:a
              }), o.sortByCombo&&e.comboId&&(N[
                e.comboId
              ]
              ||(N[
                e.comboId
              ]
              ={
                id:e.comboId
              }, _.setNode(e.comboId, {
              })), _.setParent(e.id, e.comboId))
            })), b.forEach((function(e){
              var t=(0, u.getEdgeTerminal)(e, "source"), n=(0, u.getEdgeTerminal)(e, "target");
              o.layoutNode(t)&&o.layoutNode(n)&&_.setEdge(t, n, {
                weight:e.weight||1
              })
            })), null===(t=null==y?void 0:y.concat(x||[
            ]))||void 0===t||t.forEach((function(e){
              var t, n, r=e.source, o=e.target, i=(null===(t=N[
                r
              ])||void 0===t?void 0:t.collapsed)?[
                r
              ]
              :w[
                r
              ]
              ||[
                r
              ], a=(null===(n=N[
                o
              ])||void 0===n?void 0:n.collapsed)?[
                o
              ]
              :w[
                o
              ]
              ||[
                o
              ];
              i.forEach((function(t){
                a.forEach((function(n){
                  _.setEdge(t, n, {
                    weight:e.weight||1
                  })
                }))
              }))
            }));
            var z=void 0;
            (null===(n=i.preset)||void 0===n?void 0:n.nodes)&&(z=new s.Graph({
              multigraph:!0, compound:!0
            }), i.preset.nodes.forEach((function(e){
              null==z||z.setNode(e.id, e)
            }))), a.default.layout(_, {
              prevGraph:z, edgeLabelSpace:i.edgeLabelSpace, keepNodeOrder:Boolean(!!i.nodeOrder), nodeOrder:i.nodeOrder
            });
            var C=[
              0, 0
            ];
            if(v){
              var G=1/0, L=1/0;
              _.nodes().forEach((function(e){
                var t=_.node(e);
                G>t.x&&(G=t.x), L>t.y&&(L=t.y)
              })), _.edges().forEach((function(e){
                var t;
                null===(t=_.edge(e).points)||void 0===t||t.forEach((function(e){
                  G>e.x&&(G=e.x), L>e.y&&(L=e.y)
                }))
              })), C[
                0
              ]
              =v[
                0
              ]
              -G, C[
                1
              ]
              =v[
                1
              ]
              -L
            }
            var T="LR"===f||"RL"===f;
            if(p){
              var P=this, j=P.focusNode, A=P.ranksep, F=P.getRadialPos, R=(0, u.isString)(j)?j:null==j?void 0:j.id, W=R?null===(r=_.node(R))||void 0===r?void 0:r._rank:0, B=[
              ], U=T?"y":"x", V=T?"height":"width", X=1/0, H=-1/0;
              _.nodes().forEach((function(e){
                var t=_.node(e);
                if(i.nodeMap[
                  e
                ]){
                  var n=M(i.nodeMap[
                    e
                  ]);
                  if(0===W)B[
                    t._rank
                  ]
                  ||(B[
                    t._rank
                  ]
                  ={
                    nodes:[
                    ], totalWidth:0, maxSize:-1/0
                  }), B[
                    t._rank
                  ].nodes.push(e), B[
                    t._rank
                  ].totalWidth+=2*n+t[
                    V
                  ], B[
                    t._rank
                  ].maxSize<Math.max(t.width, t.height)&&(B[
                    t._rank
                  ].maxSize=Math.max(t.width, t.height));
                  else{
                    var r=t._rank-W;
                    if(0===r)B[
                      r
                    ]
                    ||(B[
                      r
                    ]
                    ={
                      nodes:[
                      ], totalWidth:0, maxSize:-1/0
                    }), B[
                      r
                    ].nodes.push(e), B[
                      r
                    ].totalWidth+=2*n+t[
                      V
                    ], B[
                      r
                    ].maxSize<Math.max(t.width, t.height)&&(B[
                      r
                    ].maxSize=Math.max(t.width, t.height));
                    else{
                      var o=Math.abs(r);
                      B[
                        o
                      ]
                      ||(B[
                        o
                      ]
                      ={
                        left:[
                        ], right:[
                        ], totalWidth:0, maxSize:-1/0
                      }), B[
                        o
                      ].totalWidth+=2*n+t[
                        V
                      ], B[
                        o
                      ].maxSize<Math.max(t.width, t.height)&&(B[
                        o
                      ].maxSize=Math.max(t.width, t.height)), r<0?B[
                        o
                      ].left.push(e):B[
                        o
                      ].right.push(e)
                    }
                  }
                  var a=t[
                    U
                  ]
                  -t[
                    V
                  ]
                  /2-n, u=t[
                    U
                  ]
                  +t[
                    V
                  ]
                  /2+n;
                  a<X&&(X=a), u>H&&(H=u)
                }
              }));
              var Y=A||50, q={
              }, Z=(H-X)/.9, K=[
                .5*(X+H-Z), .5*(X+H+Z)
              ], J=function(e, t, n, r){
                void 0===n&&(n=-1/0), void 0===r&&(r=[
                  0, 1
                ]);
                var o=n;
                return e.forEach((function(e){
                  var n=_.node(e);
                  q[
                    e
                  ]
                  =t;
                  var a=F(n[
                    U
                  ], K, Z, t, r), u=a.x, c=a.y;
                  if(i.nodeMap[
                    e
                  ]){
                    i.nodeMap[
                      e
                    ].x=u+C[
                      0
                    ], i.nodeMap[
                      e
                    ].y=c+C[
                      1
                    ], i.nodeMap[
                      e
                    ]._order=n._order;
                    var s=S(i.nodeMap[
                      e
                    ]);
                    o<s&&(o=s)
                  }
                })), o
              }, Q=!0;
              B.forEach((function(e){
                var t, n, r, o, a, u, c;
                if((null===(t=null==e?void 0:e.nodes)||void 0===t?void 0:t.length)||(null===(n=null==e?void 0:e.left)||void 0===n?void 0:n.length)||(null===(r=null==e?void 0:e.right)||void 0===r?void 0:r.length)){
                  if(Q&&1===e.nodes.length){
                    var s=e.nodes[
                      0
                    ];
                    if(!i.nodeMap[
                      s
                    ])return;
                    return i.nodeMap[
                      s
                    ].x=C[
                      0
                    ], i.nodeMap[
                      s
                    ].y=C[
                      1
                    ], q[
                      e.nodes[
                        0
                      ]
                    ]
                    =0, Y=S(i.nodeMap[
                      s
                    ]), void(Q=!1)
                  }
                  Y=Math.max(Y, e.totalWidth/(2*Math.PI));
                  var d=-1/0;
                  if(0===W||(null===(o=e.nodes)||void 0===o?void 0:o.length))d=J(e.nodes, Y, d, [
                    0, 1
                  ]);
                  else{
                    var l=(null===(a=e.left)||void 0===a?void 0:a.length)/((null===(u=e.left)||void 0===u?void 0:u.length)+(null===(c=e.right)||void 0===c?void 0:c.length));
                    d=J(e.left, Y, d, [
                      0, l
                    ]), d=J(e.right, Y, d, [
                      l+.05, 1
                    ])
                  }
                  Y+=d, Q=!1, e.maxSize
                }
              })), _.edges().forEach((function(e){
                var t, n, r, o=_.edge(e), a=b.findIndex((function(t){
                  var n=(0, u.getEdgeTerminal)(t, "source"), r=(0, u.getEdgeTerminal)(t, "target");
                  return n===e.v&&r===e.w
                }));
                if(!(a<=-1)&&i.edgeLabelSpace&&i.controlPoints&&"loop"!==b[
                  a
                ].type){
                  var c="x"===U?"y":"x", s=null===(t=null==o?void 0:o.points)||void 0===t?void 0:t.slice(1, o.points.length-1), d=[
                  ], l=null===(n=_.node(e.v))||void 0===n?void 0:n[
                    c
                  ], f=l-(null===(r=_.node(e.w))||void 0===r?void 0:r[
                    c
                  ]), h=q[
                    e.v
                  ], v=h-q[
                    e.w
                  ];
                  null==s||s.forEach((function(e){
                    var t=(e[
                      c
                    ]
                    -l)/f*v+h, n=F(e[
                      U
                    ], K, Z, t);
                    d.push({
                      x:n.x+C[
                        0
                      ], y:n.y+C[
                        1
                      ]
                    })
                  })), b[
                    a
                  ].controlPoints=d
                }
              }))
            }
            else{
              var $=new Set, ee="BT"===f||"RL"===f?function(e, t){
                return t-e
              }
              :function(e, t){
                return e-t
              };
              _.nodes().forEach((function(e){
                var t=_.node(e);
                if(t){
                  var n=o.nodeMap[
                    e
                  ];
                  n||(n=null==h?void 0:h.find((function(t){
                    return t.id===e
                  }))), n&&(n.x=t.x+C[
                    0
                  ], n.y=t.y+C[
                    1
                  ], n._order=t._order, $.add(T?n.x:n.y))
                }
              }));
              var te=Array.from($).sort(ee), ne=T?function(e, t){
                return e.x!==t.x
              }
              :function(e, t){
                return e.y!==t.y
              }, re=T?function(e, t, n){
                var r=Math.max(t.y, n.y), o=Math.min(t.y, n.y);
                return e.filter((function(e){
                  return e.y<=r&&e.y>=o
                }))
              }
              :function(e, t, n){
                var r=Math.max(t.x, n.x), o=Math.min(t.x, n.x);
                return e.filter((function(e){
                  return e.x<=r&&e.x>=o
                }))
              };
              _.edges().forEach((function(e){
                var t, n=_.edge(e), r=b.findIndex((function(t){
                  var n=(0, u.getEdgeTerminal)(t, "source"), r=(0, u.getEdgeTerminal)(t, "target");
                  return n===e.v&&r===e.w
                }));
                if(!(r<=-1)&&i.edgeLabelSpace&&i.controlPoints&&"loop"!==b[
                  r
                ].type){
                  null===(t=null==n?void 0:n.points)||void 0===t||t.forEach((function(e){
                    e.x+=C[
                      0
                    ], e.y+=C[
                      1
                    ]
                  }));
                  var o=i.nodeMap[
                    e.v
                  ], a=i.nodeMap[
                    e.w
                  ];
                  b[
                    r
                  ].controlPoints=l(null==n?void 0:n.points, o, a, te, T, ne, re)
                }
              }))
            }
            return i.onLayoutEnd&&i.onLayoutEnd(), {
              nodes:c, edges:b
            }
          }
        }, t.prototype.getRadialPos=function(e, t, n, r, o){
          void 0===o&&(o=[
            0, 1
          ]);
          var i=(e-t[
            0
          ])/n, a=2*(i=i*(o[
            1
          ]
          -o[
            0
          ])+o[
            0
          ])*Math.PI;
          return{
            x:Math.cos(a)*r, y:Math.sin(a)*r
          }
        }, t.prototype.getType=function(){
          return"dagre"
        }, t
      }
      (c.Base);
      t.DagreLayout=d;
      var l=function(e, t, n, r, o, i, a){
        var u=(null==e?void 0:e.slice(1, e.length-1))||[
        ];
        if(t&&n){
          var c=t.x, s=t.y, d=n.x, l=n.y;
          if(o&&(c=t.y, s=t.x, d=n.y, l=n.x), l!==s&&c!==d){
            var f=r.indexOf(s), h=r[
              f+1
            ];
            if(h){
              var v=u[
                0
              ], p=o?{
                x:(s+h)/2, y:(null==v?void 0:v.y)||d
              }
              :{
                x:(null==v?void 0:v.x)||d, y:(s+h)/2
              };
              v&&!i(v, p)||u.unshift(p)
            }
            var g=r.indexOf(l), y=Math.abs(g-f);
            if(1===y)(u=a(u, t, n)).length||u.push(o?{
              x:(s+l)/2, y:c
            }
            :{
              x:c, y:(s+l)/2
            });
            else if(y>1){
              var m=r[
                g-1
              ];
              if(m){
                var x=u[
                  u.length-1
                ], b=o?{
                  x:(l+m)/2, y:(null==x?void 0:x.y)||d
                }
                :{
                  x:(null==x?void 0:x.x)||c, y:(l+m)/2
                };
                x&&!i(x, b)||u.push(b)
              }
            }
          }
        }
        return u
      }
    }, 684551:function(e, t, n){
      var r=this&&this.__assign||function(){
        return(r=Object.assign||function(e){
          for(var t, n=1, r=arguments.length;
          n<r;
          n++)for(var o in t=arguments[
            n
          ])Object.prototype.hasOwnProperty.call(t, o)&&(e[
            o
          ]
          =t[
            o
          ]);
          return e
        }).apply(this, arguments)
      }, o=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), i=this&&this.__setModuleDefault||(Object.create?function(e, t){
        Object.defineProperty(e, "default", {
          enumerable:!0, value:t
        })
      }
      :function(e, t){
        e.default=t
      }), a=this&&this.__importStar||function(e){
        if(e&&e.__esModule)return e;
        var t={
        };
        if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e, n)&&o(t, e, n);
        return i(t, e), t
      }, u=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var c=a(n(32019)), s=u(n(956401)), d=u(n(42787)), l=n(679829);
      t.default=function(e, t){
        var n=e.nodes, o=e.edges, i=t.width, a=t.height;
        if(!(null==n?void 0:n.length))return Promise.resolve();
        var u=[
        ];
        n.forEach((function(e){
          if(o.filter((function(t){
            return t.source===e.id||t.target===e.id
          })).length>1){
            var t=r({
            }, e);
            delete t.size, u.push(t)
          }
        }));
        var f=[
        ];
        o.forEach((function(e){
          var t=u.find((function(t){
            return t.id===e.source
          })), n=u.find((function(t){
            return t.id===e.target
          }));
          t&&n&&f.push(e)
        }));
        var h=new l.DagreLayout({
          type:"dagre", ranksep:t.nodeMinGap, nodesep:t.nodeMinGap
        }).layout({
          nodes:u, edges:f
        }).nodes;
        n.forEach((function(e){
          var t=(h||[
          ]).find((function(t){
            return t.id===e.id
          }));
          e.x=(null==t?void 0:t.x)||i/2, e.y=(null==t?void 0:t.y)||a/2
        }));
        var v=JSON.parse(JSON.stringify(n)), p=JSON.parse(JSON.stringify(o)), g=c.forceSimulation().nodes(v).force("link", c.forceLink(p).id((function(e){
          return e.id
        })).distance((function(e){
          return f.find((function(t){
            return t.source===e.source&&t.target===e.target
          }))?30:20
        }))).force("charge", c.forceManyBody()).force("center", c.forceCenter(i/2, a/2)).force("x", c.forceX(i/2)).force("y", c.forceY(a/2)).alpha(.3).alphaDecay(.08).alphaMin(.001);
        return new Promise((function(e){
          g.on("end", (function(){
            n.forEach((function(e){
              var t=v.find((function(t){
                return t.id===e.id
              }));
              t&&(e.x=t.x, e.y=t.y)
            }));
            var r=Math.min.apply(Math, n.map((function(e){
              return e.x
            }))), u=Math.max.apply(Math, n.map((function(e){
              return e.x
            }))), c=Math.min.apply(Math, n.map((function(e){
              return e.y
            }))), l=Math.max.apply(Math, n.map((function(e){
              return e.y
            }))), f=i/(u-r), h=a/(l-c);
            n.forEach((function(e){
              void 0!==e.x&&f<1&&(e.x=(e.x-r)*f), void 0!==e.y&&h<1&&(e.y=(e.y-c)*h)
            })), n.forEach((function(e){
              e.sizeTemp=e.size, e.size=[
                10, 10
              ]
            })), (0, d.default)(n, o), n.forEach((function(e){
              e.size=e.sizeTemp||[
              ], delete e.sizeTemp
            })), (0, s.default)({
              nodes:n, edges:o
            }, t), e()
          }))
        }))
      }
    }, 686755:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.isArray=void 0, t.isArray=Array.isArray
    }, 730347:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(e){
        e.nodes().forEach((function(t){
          r(e.node(t))
        })), e.edges().forEach((function(t){
          r(e.edge(t))
        }))
      }, r=function(e){
        var t=e.width;
        e.width=e.height, e.height=t
      }, o=function(e){
        e.nodes().forEach((function(t){
          i(e.node(t))
        })), e.edges().forEach((function(t){
          var n, r=e.edge(t);
          null===(n=r.points)||void 0===n||n.forEach((function(e){
            return i(e)
          })), r.hasOwnProperty("y")&&i(r)
        }))
      }, i=function(e){
        (null==e?void 0:e.y)&&(e.y=-e.y)
      }, a=function(e){
        e.nodes().forEach((function(t){
          u(e.node(t))
        })), e.edges().forEach((function(t){
          var n, r=e.edge(t);
          null===(n=r.points)||void 0===n||n.forEach((function(e){
            return u(e)
          })), r.hasOwnProperty("x")&&u(r)
        }))
      }, u=function(e){
        var t=e.x;
        e.x=e.y, e.y=t
      };
      t.default={
        adjust:function(e){
          var t, r=null===(t=e.graph().rankdir)||void 0===t?void 0:t.toLowerCase();
          "lr"!==r&&"rl"!==r||n(e)
        }, undo:function(e){
          var t, r=null===(t=e.graph().rankdir)||void 0===t?void 0:t.toLowerCase();
          "bt"!==r&&"rl"!==r||o(e), "lr"!==r&&"rl"!==r||(a(e), n(e))
        }
      }
    }, 743380:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.getFuncByUnknownType=t.getFunc=t.isFunction=void 0;
      var r=n(781422), o=n(419937);
      t.isFunction=function(e){
        return"function"==typeof e
      };
      t.getFunc=function(e, t, n){
        return n||((0, o.isNumber)(e)?function(){
          return e
        }
        :function(){
          return t
        })
      };
      t.getFuncByUnknownType=function(e, n, i){
        return void 0===i&&(i=!0), n||0===n?(0, t.isFunction)(n)?n:(0, o.isNumber)(n)?function(){
          return n
        }
        :(0, r.isArray)(n)?function(){
          if(i){
            var t=Math.max.apply(Math, n);
            return isNaN(t)?e:t
          }
          return n
        }
        :(0, r.isObject)(n)?function(){
          if(i){
            var t=Math.max(n.width, n.height);
            return isNaN(t)?e:t
          }
          return[
            n.width, n.height
          ]
        }
        :function(){
          return e
        }
        :function(t){
          return t.size?(0, r.isArray)(t.size)?t.size[
            0
          ]
          >t.size[
            1
          ]
          ?t.size[
            0
          ]
          :t.size[
            1
          ]
          :(0, r.isObject)(t.size)?t.size.width>t.size.height?t.size.width:t.size.height:t.size:e
        }
      }
    }, 744883:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.exchangeEdges=t.enterEdge=t.leaveEdge=t.initLowLimValues=t.calcCutValue=t.initCutValues=void 0;
      var r=n(475022), o=n(53472), i=n(611519), a=n(746888), u=a.algorithm.preorder, c=a.algorithm.postorder;
      t.initCutValues=function(e, t){
        var n=c(e, e.nodes());
        null==(n=null==n?void 0:n.slice(0, (null==n?void 0:n.length)-1))||n.forEach((function(n){
          s(e, t, n)
        }))
      };
      var s=function(e, n, r){
        var o=e.node(r).parent;
        e.edgeFromArgs(r, o).cutvalue=(0, t.calcCutValue)(e, n, r)
      };
      t.calcCutValue=function(e, t, n){
        var r, o=e.node(n).parent, i=!0, a=t.edgeFromArgs(n, o), u=0;
        return a||(i=!1, a=t.edgeFromArgs(o, n)), u=a.weight, null===(r=t.nodeEdges(n))||void 0===r||r.forEach((function(r){
          var a=r.v===n, c=a?r.w:r.v;
          if(c!==o){
            var s=a===i, d=t.edge(r).weight;
            if(u+=s?d:-d, f(e, n, c)){
              var l=e.edgeFromArgs(n, c).cutvalue;
              u+=s?-l:l
            }
          }
        })), u
      };
      t.initLowLimValues=function(e, t){
        void 0===t&&(t=e.nodes()[
          0
        ]), d(e, {
        }, 1, t)
      };
      var d=function(e, t, n, r, o){
        var i, a=n, u=n, c=e.node(r);
        return t[
          r
        ]
        =!0, null===(i=e.neighbors(r))||void 0===i||i.forEach((function(n){
          t[
            n
          ]
          ||(u=d(e, t, u, n, r))
        })), c.low=a, c.lim=u++, o?c.parent=o:delete c.parent, u
      };
      t.leaveEdge=function(e){
        return e.edges().find((function(t){
          return e.edge(t).cutvalue<0
        }))
      };
      t.enterEdge=function(e, t, n){
        var r=n.v, a=n.w;
        t.hasEdge(r, a)||(r=n.w, a=n.v);
        var u=e.node(r), c=e.node(a), s=u, d=!1;
        u.lim>c.lim&&(s=c, d=!0);
        var l=t.edges().filter((function(t){
          return d===h(e, e.node(t.v), s)&&d!==h(e, e.node(t.w), s)
        }));
        return(0, i.minBy)(l, (function(e){
          return(0, o.slack)(t, e)
        }))
      };
      t.exchangeEdges=function(e, n, r, o){
        var i=r.v, a=r.w;
        e.removeEdge(i, a), e.setEdge(o.v, o.w, {
        }), (0, t.initLowLimValues)(e), (0, t.initCutValues)(e, n), l(e, n)
      };
      var l=function(e, t){
        var n=e.nodes().find((function(e){
          var n;
          return!(null===(n=t.node(e))||void 0===n?void 0:n.parent)
        })), r=u(e, n);
        null==(r=null==r?void 0:r.slice(1))||r.forEach((function(n){
          var r=e.node(n).parent, o=t.edgeFromArgs(n, r), i=!1;
          o||(o=t.edgeFromArgs(r, n), i=!0), t.node(n).rank=t.node(r).rank+(i?o.minlen:-o.minlen)
        }))
      }, f=function(e, t, n){
        return e.hasEdge(t, n)
      }, h=function(e, t, n){
        return n.low<=t.lim&&t.lim<=n.lim
      };
      t.default=function(e){
        var n=(0, i.simplify)(e);
        (0, o.longestPath)(n);
        var a, u, c=(0, r.feasibleTree)(n);
        for((0, t.initLowLimValues)(c), (0, t.initCutValues)(c, n);
        a=(0, t.leaveEdge)(c);
        )u=(0, t.enterEdge)(c, n, a), (0, t.exchangeEdges)(c, n, a, u)
      }
    }, 746888:(e, t, n)=>{
      n.r(t), n.d(t, {
        Graph:()=>E, GraphWithEvent:()=>G, algorithm:()=>r, comparision:()=>i, essence:()=>o, generate:()=>u
      });
      var r={
      };
      n.r(r), n.d(r, {
        components:()=>A, dfs:()=>R, dijkstra:()=>X, dijkstraAll:()=>H, findCycles:()=>q, floydWarshall:()=>de, isAcyclic:()=>ae, postorder:()=>ue, preorder:()=>ce, prim:()=>j, tarjan:()=>Y, topsort:()=>ie
      });
      var o={
      };
      n.r(o), n.d(o, {
        hasSelfLoop:()=>Ie, isGraph:()=>we, isNullGraph:()=>De, isSimpleGraph:()=>Ee
      });
      var i={
      };
      n.r(i), n.d(i, {
        containAllSameEdges:()=>ye, containAllSameNodes:()=>ge, containSameEdges:()=>fe, containSameNodes:()=>le, getSameEdges:()=>ve, getSameNodes:()=>he, isGraphComplement:()=>Se, isGraphContainsAnother:()=>xe, isGraphOptionSame:()=>pe, isGraphSame:()=>me
      });
      var a, u={
      };
      function c(e, t){
        var n=e.get(t)||0;
        e.set(t, n+1)
      }
      function s(e, t){
        var n=e.get(t);
        void 0!==n&&((n-=1)>0?e.set(t, n):e.delete(t))
      }
      function d(e, t, n, r){
        var o=String(t), i=String(n);
        if(!e&&o>i){
          var u=o;
          o=i, i=u
        }
        return o+a.EDGE_KEY_DELIM+i+a.EDGE_KEY_DELIM+(void 0===r?a.DEFAULT_EDGE_NAME:r)
      }
      function l(e, t, n, r){
        var o=String(t), i=String(n), a={
          v:t, w:n
        };
        if(!e&&o>i){
          var u=a.v;
          a.v=a.w, a.w=u
        }
        return void 0!==r&&(a.name=r), a
      }
      function f(e, t){
        return d(e, t.v, t.w, t.name)
      }
      function h(e){
        return"function"==typeof e
      }
      n.r(u), n.d(u, {
        getGraphComplement:()=>Me
      }), function(e){
        e.DEFAULT_EDGE_NAME="\0", e.GRAPH_NODE="\0", e.EDGE_KEY_DELIM=""
      }
      (a||(a={
      }));
      var v=function(e){
        return e.nodes().map((function(t){
          var n={
            id:t, value:e.node(t), parent:e.parent(t)
          };
          return void 0===n.value&&delete n.value, void 0===n.parent&&delete n.parent, n
        }))
      }, p=function(e){
        return e.edges().map((function(t){
          var n=e.edge(t), r={
            v:t.v, w:t.w, value:n, name:t.name
          };
          return void 0===r.name&&delete r.name, void 0===r.value&&delete r.value, r
        }))
      }, g=function(e){
        var t={
          options:{
            directed:e.isDirected(), multigraph:e.isMultigraph(), compound:e.isCompound()
          }, nodes:v(e), edges:p(e), value:e.graph()
        };
        return void 0===t.value&&delete t.value, t
      };
      function y(e, t){
        var n=Object.keys(e);
        if(Object.getOwnPropertySymbols){
          var r=Object.getOwnPropertySymbols(e);
          t&&(r=r.filter((function(t){
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }
      function m(e){
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
          t%2?y(Object(n), !0).forEach((function(t){
            x(e, t, n[
              t
            ])
          })):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      function x(e, t, n){
        return t in e?Object.defineProperty(e, t, {
          value:n, enumerable:!0, configurable:!0, writable:!0
        }):e[
          t
        ]
        =n, e
      }
      function b(e, t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
      }
      function _(e, t){
        for(var n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          r.enumerable=r.enumerable||!1, r.configurable=!0, "value"in r&&(r.writable=!0), Object.defineProperty(e, r.key, r)
        }
      }
      var w={
        compound:!1, multigraph:!1, directed:!0
      }, E=function(){
        function e(){
          var t=this, n=arguments.length>0&&void 0!==arguments[
            0
          ]
          ?arguments[
            0
          ]
          :{
          };
          b(this, e), this.directed=!0, this.multigraph=!1, this.compound=!1, this.GRAPH_NODE=a.GRAPH_NODE, this.label=void 0, this.nodeCountNum=0, this.edgeCountNum=0, this.defaultNodeLabelFn=function(){
          }, this.defaultEdgeLabelFn=function(){
          }, this.parentMap=void 0, this.childrenMap=void 0, this.nodesLabelMap=new Map, this.inEdgesMap=new Map, this.outEdgesMap=new Map, this.predecessorsMap=new Map, this.successorsMap=new Map, this.edgesMap=new Map, this.edgesLabelsMap=new Map, this.isDirected=function(){
            return t.directed
          }, this.isMultigraph=function(){
            return t.multigraph
          }, this.isCompound=function(){
            return t.compound
          }, this.setGraph=function(e){
            return t.label=e, t
          }, this.graph=function(){
            return t.label
          }, this.setDefaultNodeLabel=function(e){
            return h(e)?t.defaultNodeLabelFn=e:t.defaultNodeLabelFn=function(){
              return e
            }, t
          }, this.nodeCount=function(){
            return t.nodeCountNum
          }, this.node=function(e){
            return t.nodesLabelMap.get(e)
          }, this.nodes=function(){
            return Array.from(t.nodesLabelMap.keys())
          }, this.sources=function(){
            return t.nodes().filter((function(e){
              var n;
              return!(null===(n=t.inEdgesMap.get(e))||void 0===n?void 0:n.size)
            }))
          }, this.sinks=function(){
            return t.nodes().filter((function(e){
              var n;
              return!(null===(n=t.outEdgesMap.get(e))||void 0===n?void 0:n.size)
            }))
          }, this.setNodes=function(e, n){
            return e.map((function(e){
              return t.setNode(e, n)
            })), t
          }, this.hasNode=function(e){
            return t.nodesLabelMap.has(e)
          }, this.checkCompound=function(){
            if(!t.isCompound())throw new Error("Cannot construct parent-children relations in a non-compound graph")
          }, this.parent=function(e){
            if(t.isCompound()){
              var n, r=null===(n=t.parentMap)||void 0===n?void 0:n.get(e);
              if(r!==t.GRAPH_NODE)return r
            }
          }, this.removeFromParentsChildList=function(e){
            var n=t.parentMap.get(e);
            t.childrenMap.get(n).delete(e)
          }, this.setParent=function(e, n){
            var r, o;
            t.checkCompound();
            for(var i=void 0===n?t.GRAPH_NODE:n, a=t.parent(i);
            a;
            ){
              if(e===a)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");
              a=t.parent(a)
            }
            n&&t.setNode(n), t.setNode(e), t.removeFromParentsChildList(e), null===(r=t.parentMap)||void 0===r||r.set(e, i);
            var u=t.childrenMap.get(i);
            return u.set(e, !0), null===(o=t.childrenMap)||void 0===o||o.set(i, u), t
          }, this.children=function(e){
            var n=void 0===e?t.GRAPH_NODE:e;
            if(t.isCompound()){
              var r, o=null===(r=t.childrenMap)||void 0===r?void 0:r.get(n);
              return o?Array.from(o.keys()):void 0
            }
            return n===t.GRAPH_NODE?t.nodes():e&&t.hasNode(e)?[
            ]
            :void 0
          }, this.predecessors=function(e){
            var n=t.predecessorsMap.get(e);
            return n?Array.from(n.keys()):void 0
          }, this.successors=function(e){
            var n=t.successorsMap.get(e);
            return n?Array.from(n.keys()):void 0
          }, this.neighbors=function(e){
            var n;
            if(t.hasNode(e))return Array.from(new Set(null===(n=t.predecessors(e))||void 0===n?void 0:n.concat(t.successors(e))))
          }, this.isLeaf=function(e){
            var n, r;
            return t.isDirected()?!(null===(r=t.successors(e))||void 0===r?void 0:r.length):!(null===(n=t.neighbors(e))||void 0===n?void 0:n.length)
          }, this.filterNodes=function(n){
            var r=t.directed, o=t.multigraph, i=t.compound, a=new e({
              directed:r, multigraph:o, compound:i
            });
            if(a.setGraph(t.graph()), t.nodes().forEach((function(e){
              n(e)&&a.setNode(e, t.node(e))
            })), t.edges().forEach((function(e){
              a.hasNode(e.v)&&a.hasNode(e.w)&&a.setEdgeObj(e, t.edge(e))
            })), i){
              a.nodes().forEach((function(e){
                a.setParent(e, function(e){
                  for(var n=t.parent(e);
                  void 0!==n&&!a.hasNode(n);
                  )n=t.parent(n);
                  return n
                }
                (e))
              }))
            }
            return a
          }, this.setDefaultEdgeLabel=function(e){
            return h(e)?t.defaultEdgeLabelFn=e:t.defaultEdgeLabelFn=function(){
              return e
            }, t
          }, this.edgeCount=function(){
            return t.edgeCountNum
          }, this.setEdgeObj=function(e, n){
            return t.setEdge(e.v, e.w, n, e.name)
          }, this.setPath=function(e, n){
            return e.reduce((function(e, r){
              return t.setEdge(e, r, n), r
            })), t
          }, this.edgeFromArgs=function(e, n, r){
            return t.edge({
              v:e, w:n, name:r
            })
          }, this.edge=function(e){
            return t.edgesLabelsMap.get(f(t.isDirected(), e))
          }, this.hasEdge=function(e, n, r){
            return t.edgesLabelsMap.has(f(t.isDirected(), {
              v:e, w:n, name:r
            }))
          }, this.removeEdgeObj=function(e){
            var n=e.v, r=e.w, o=e.name;
            return t.removeEdge(n, r, o)
          }, this.edges=function(){
            return Array.from(t.edgesMap.values())
          }, this.inEdges=function(e, n){
            var r=t.inEdgesMap.get(e);
            if(r)return Array.from(r.values()).filter((function(e){
              return!n||e.v===n
            }))
          }, this.outEdges=function(e, n){
            var r=t.outEdgesMap.get(e);
            if(r)return Array.from(r.values()).filter((function(e){
              return!n||e.w===n
            }))
          }, this.nodeEdges=function(e, n){
            var r;
            if(t.hasNode(e))return null===(r=t.inEdges(e, n))||void 0===r?void 0:r.concat(t.outEdges(e, n))
          }, this.toJSON=function(){
            return g(t)
          }, this.nodeInDegree=function(e){
            var n=t.inEdgesMap.get(e);
            return n?n.size:0
          }, this.nodeOutDegree=function(e){
            var n=t.outEdgesMap.get(e);
            return n?n.size:0
          }, this.nodeDegree=function(e){
            return t.nodeInDegree(e)+t.nodeOutDegree(e)
          }, this.source=function(e){
            return e.v
          }, this.target=function(e){
            return e.w
          };
          var r=m(m({
          }, w), n);
          this.compound=r.compound, this.directed=r.directed, this.multigraph=r.multigraph, this.compound&&(this.parentMap=new Map, this.childrenMap=new Map)
        }
        var t, n, r;
        return t=e, (n=[
          {
            key:"setNode", value:function(e, t){
              var n, r=this.nodesLabelMap, o=this.defaultNodeLabelFn, i=this.isCompound, a=this.parentMap, u=this.childrenMap, c=this.inEdgesMap, s=this.outEdgesMap, d=this.predecessorsMap, l=this.successorsMap;
              return r.has(e)?(void 0!==t&&r.set(e, t), this):(r.set(e, t||o(e)), i()&&(null==a||a.set(e, this.GRAPH_NODE), null==u||u.set(e, new Map), (null==u?void 0:u.has(this.GRAPH_NODE))||null==u||u.set(this.GRAPH_NODE, new Map), null==u||null===(n=u.get(this.GRAPH_NODE))||void 0===n||n.set(e, !0)), [
                c, s, d, l
              ].forEach((function(t){
                return t.set(e, new Map)
              })), this.nodeCountNum+=1, this)
            }
          }, {
            key:"removeNode", value:function(e){
              var t=this;
              if(this.hasNode(e)){
                var n, r, o, i=function(e){
                  t.removeEdge(e.v, e.w, e.name)
                }, a=this.inEdgesMap, u=this.outEdgesMap, c=this.predecessorsMap, s=this.successorsMap, d=this.nodesLabelMap;
                this.isCompound()&&(this.removeFromParentsChildList(e), null===(n=this.parentMap)||void 0===n||n.delete(e), null===(r=this.children(e))||void 0===r||r.forEach((function(e){
                  return t.setParent(e)
                })), null===(o=this.childrenMap)||void 0===o||o.delete(e));
                var l=a.get(e), f=u.get(e);
                Array.from(l.values()).forEach((function(e){
                  return i(e)
                })), Array.from(f.values()).forEach((function(e){
                  return i(e)
                })), d.delete(e), a.delete(e), u.delete(e), c.delete(e), s.delete(e), this.nodeCountNum-=1
              }
              return this
            }
          }, {
            key:"setEdge", value:function(e, t, n, r){
              var o, i, a=l(this.isDirected(), e, t, r), u=f(this.isDirected(), a), s=a.v, d=a.w;
              if(this.edgesLabelsMap.has(u))return this.edgesLabelsMap.set(u, n), this;
              if(void 0!==r&&!this.isMultigraph())throw new Error("Cannot set a named edge when isMultigraph = false");
              this.setNode(s), this.setNode(d), this.edgesLabelsMap.set(u, n||this.defaultEdgeLabelFn(s, d, r)), Object.freeze(a), this.edgesMap.set(u, a);
              var h=this.predecessorsMap.get(d), v=this.successorsMap.get(s);
              return c(h, s), c(v, d), null===(o=this.inEdgesMap.get(d))||void 0===o||o.set(u, a), null===(i=this.outEdgesMap.get(s))||void 0===i||i.set(u, a), this.edgeCountNum+=1, this
            }
          }, {
            key:"removeEdge", value:function(e, t, n){
              var r=d(this.isDirected(), e, t, n);
              if(this.edgesMap.get(r)){
                var o=l(this.isDirected(), e, t, n), i=o.v, a=o.w;
                this.edgesLabelsMap.delete(r), this.edgesMap.delete(r);
                var u=this.predecessorsMap.get(a), c=this.successorsMap.get(i);
                s(u, i), s(c, a), this.inEdgesMap.get(a).delete(r), this.outEdgesMap.get(i).delete(r), this.edgeCountNum-=1
              }
              return this
            }
          }
        ])&&_(t.prototype, n), r&&_(t, r), Object.defineProperty(t, "prototype", {
          writable:!1
        }), e
      }
      ();
      function D(e){
        return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
          return typeof e
        }
        :function(e){
          return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
        })(e)
      }
      function I(e, t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
      }
      function S(e, t){
        for(var n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          r.enumerable=r.enumerable||!1, r.configurable=!0, "value"in r&&(r.writable=!0), Object.defineProperty(e, r.key, r)
        }
      }
      function M(){
        return(M="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e, t, n){
          var r=k(e, t);
          if(r){
            var o=Object.getOwnPropertyDescriptor(r, t);
            return o.get?o.get.call(arguments.length<3?e:n):o.value
          }
        }).apply(this, arguments)
      }
      function k(e, t){
        for(;
        !Object.prototype.hasOwnProperty.call(e, t)&&null!==(e=C(e));
        );
        return e
      }
      function O(e, t){
        return(O=Object.setPrototypeOf||function(e, t){
          return e.__proto__=t, e
        })(e, t)
      }
      function N(e){
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
          var n, r=C(e);
          if(t){
            var o=C(this).constructor;
            n=Reflect.construct(r, arguments, o)
          }
          else n=r.apply(this, arguments);
          return z(this, n)
        }
      }
      function z(e, t){
        if(t&&("object"===D(t)||"function"==typeof t))return t;
        if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");
        return function(e){
          if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }
        (e)
      }
      function C(e){
        return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){
          return e.__proto__||Object.getPrototypeOf(e)
        })(e)
      }
      E.fromJSON=function(e){
        var t=new E(e.options);
        return void 0!==e.value&&t.setGraph(e.value), e.nodes.forEach((function(e){
          t.setNode(e.id, e.value), e.parent&&t.setParent(e.id, e.parent)
        })), e.edges.forEach((function(e){
          t.setEdge(e.v, e.w, e.value, e.name)
        })), t
      };
      var G=function(e){
        !function(e, t){
          if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");
          e.prototype=Object.create(t&&t.prototype, {
            constructor:{
              value:e, writable:!0, configurable:!0
            }
          }), Object.defineProperty(e, "prototype", {
            writable:!1
          }), t&&O(e, t)
        }
        (i, e);
        var t, n, r, o=N(i);
        function i(){
          var e;
          I(this, i);
          for(var t=arguments.length, n=new Array(t), r=0;
          r<t;
          r++)n[
            r
          ]
          =arguments[
            r
          ];
          return(e=o.call.apply(o, [
            this
          ].concat(n))).eventPool={
          }, e
        }
        return t=i, (n=[
          {
            key:"appendEvent", value:function(e, t){
              this.eventPool[
                e
              ]
              ||(this.eventPool[
                e
              ]
              =[
              ]), this.eventPool[
                e
              ].push(t)
            }
          }, {
            key:"removeEvent", value:function(e, t){
              if(this.eventPool[
                e
              ]){
                var n=this.eventPool[
                  e
                ].indexOf(t);
                n>-1&&this.eventPool[
                  e
                ].splice(n, 1)
              }
            }
          }, {
            key:"emitEvent", value:function(e){
              for(var t=arguments.length, n=new Array(t>1?t-1:0), r=1;
              r<t;
              r++)n[
                r-1
              ]
              =arguments[
                r
              ];
              this.eventPool[
                e
              ]
              &&this.eventPool[
                e
              ].forEach((function(e){
                e.apply(void 0, n)
              }))
            }
          }, {
            key:"setNode", value:function(e, t){
              return M(C(i.prototype), "setNode", this).call(this, e, t), this.emitEvent("nodeAdd", e, t), this
            }
          }, {
            key:"removeNode", value:function(e){
              return M(C(i.prototype), "removeNode", this).call(this, e), this.emitEvent("nodeRemove", e), this
            }
          }, {
            key:"setEdge", value:function(e, t, n, r){
              return M(C(i.prototype), "setEdge", this).call(this, e, t, n, r), this.emitEvent("edgeAdd", e, t, n, r), this
            }
          }, {
            key:"removeEdge", value:function(e, t, n){
              return M(C(i.prototype), "removeEdge", this).call(this, e, t, n), this.emitEvent("edgeRemove", e, t, n), this
            }
          }
        ])&&S(t.prototype, n), r&&S(t, r), Object.defineProperty(t, "prototype", {
          writable:!1
        }), i
      }
      (E);
      function L(e, t){
        for(var n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          r.enumerable=r.enumerable||!1, r.configurable=!0, "value"in r&&(r.writable=!0), Object.defineProperty(e, r.key, r)
        }
      }
      function T(e, t, n){
        return t&&L(e.prototype, t), n&&L(e, n), Object.defineProperty(e, "prototype", {
          writable:!1
        }), e
      }
      var P=T((function e(){
        var t=this;
        !function(e, t){
          if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
        }
        (this, e), this.arr=[
        ], this.keyIndice=new Map, this.size=function(){
          return t.arr.length
        }, this.keys=function(){
          return t.arr.map((function(e){
            return e.key
          }))
        }, this.has=function(e){
          return t.keyIndice.has(e)
        }, this.priority=function(e){
          var n=t.keyIndice.get(e);
          if(void 0!==n)return t.arr[
            n
          ].priority
        }, this.swap=function(e, n){
          var r=t.arr, o=t.keyIndice, i=[
            r[
              e
            ], r[
              n
            ]
          ], a=i[
            0
          ], u=i[
            1
          ];
          r[
            e
          ]
          =u, r[
            n
          ]
          =a, o.set(a.key, n), o.set(u.key, e)
        }, this.innerDecrease=function(e){
          for(var n, r=t.arr, o=r[
            e
          ].priority, i=e;
          0!==i;
          ){
            var a;
            if((null===(a=r[
              n=i>>1
            ])||void 0===a?void 0:a.priority)<o)break;
            t.swap(i, n), i=n
          }
        }, this.heapify=function(e){
          var n=t.arr, r=e<<1, o=r+1, i=e;
          r<n.length&&(i=n[
            r
          ].priority<n[
            i
          ].priority?r:i, o<n.length&&(i=n[
            o
          ].priority<n[
            i
          ].priority?o:i), i!==e&&(t.swap(e, i), t.heapify(i)))
        }, this.min=function(){
          if(0===t.size())throw new Error("Queue underflow");
          return t.arr[
            0
          ].key
        }, this.add=function(e, n){
          var r=t.keyIndice, o=t.arr;
          if(!r.has(e)){
            var i=o.length;
            return r.set(e, i), o.push({
              key:e, priority:n
            }), t.innerDecrease(i), !0
          }
          return!1
        }, this.removeMin=function(){
          t.swap(0, t.arr.length-1);
          var e=t.arr.pop();
          return t.keyIndice.delete(e.key), t.heapify(0), e.key
        }, this.decrease=function(e, n){
          if(!t.has(e))throw new Error("There's no key named ".concat(e));
          var r=t.keyIndice.get(e);
          if(n>t.arr[
            r
          ].priority)throw new Error("New priority is greater than current priority.Key: ".concat(e, " Old: + ").concat(t.arr[
            r
          ].priority, " New: ").concat(n));
          t.arr[
            r
          ].priority=n, t.innerDecrease(r)
        }
      }));
      const j=function(e, t){
        var n, r=new E, o=new Map, i=new P;
        function a(e){
          var r=e.v===n?e.w:e.v, a=i.priority(r);
          if(void 0!==a){
            var u=t(e);
            u<a&&(o.set(r, n), i.decrease(r, u))
          }
        }
        if(0===e.nodeCount())return r;
        e.nodes().forEach((function(e){
          i.add(e, Number.POSITIVE_INFINITY), r.setNode(e)
        })), i.decrease(e.nodes()[
          0
        ], 0);
        for(var u=!1;
        i.size()>0;
        ){
          var c;
          if(n=i.removeMin(), o.has(n))r.setEdge(n, o.get(n));
          else{
            if(u)throw new Error("Input graph is not connected: "+e.graph());
            u=!0
          }
          null===(c=e.nodeEdges(n))||void 0===c||c.forEach(a)
        }
        return r
      };
      const A=function(e){
        var t=new Set, n=[
        ];
        return e.nodes().forEach((function(r){
          for(var o=[
          ], i=[
            r
          ];
          i.length>0;
          ){
            var a, u, c=i.pop();
            if(!t.has(c))t.add(c), o.push(c), null===(a=e.successors(c))||void 0===a||a.forEach((function(e){
              return i.push(e)
            })), null===(u=e.predecessors(c))||void 0===u||u.forEach((function(e){
              return i.push(e)
            }))
          }
          o.length&&n.push(o)
        })), n
      };
      var F=function e(t, n, r, o, i, a){
        o.includes(n)||(o.push(n), r||a.push(n), i(n).forEach((function(n){
          return e(t, n, r, o, i, a)
        })), r&&a.push(n))
      };
      const R=function(e, t, n){
        var r=Array.isArray(t)?t:[
          t
        ], o=function(t){
          return e.isDirected()?e.successors(t):e.neighbors(t)
        }, i=[
        ], a=[
        ];
        return r.forEach((function(t){
          if(!e.hasNode(t))throw new Error("Graph does not have node: "+t);
          F(e, t, "post"===n, a, o, i)
        })), i
      };
      function W(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          var n=null==e?null:"undefined"!=typeof Symbol&&e[
            Symbol.iterator
          ]
          ||e[
            "@@iterator"
          ];
          if(null==n)return;
          var r, o, i=[
          ], a=!0, u=!1;
          try{
            for(n=n.call(e);
            !(a=(r=n.next()).done)&&(i.push(r.value), !t||i.length!==t);
            a=!0);
          }
          catch(e){
            u=!0, o=e
          }
          finally{
            try{
              a||null==n.return||n.return()
            }
            finally{
              if(u)throw o
            }
          }
          return i
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return B(e, t);
          var n=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===n&&e.constructor&&(n=e.constructor.name);
          if("Map"===n||"Set"===n)return Array.from(e);
          if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function B(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var n=0, r=new Array(t);
        n<t;
        n++)r[
          n
        ]
        =e[
          n
        ];
        return r
      }
      var U=function(){
        return 1
      }, V=function(e, t, n, r){
        var o, i, a=new Map, u=new P, c=function(e){
          var t=e.v!==o?e.v:e.w, r=a.get(t), c=n(e), s=i.distance+c;
          if(c<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+c);
          s<r.distance&&(r.distance=s, r.predecessor=o, u.decrease(t, s))
        };
        for(e.nodes().forEach((function(e){
          var n=e===t?0:Number.POSITIVE_INFINITY;
          a.set(e, {
            distance:n
          }), u.add(e, n)
        }));
        u.size()>0&&(o=u.removeMin(), !(i=a.get(o))||i.distance!==Number.POSITIVE_INFINITY);
        )r(o).forEach(c);
        var s={
        };
        return Array.from(a.entries()).forEach((function(e){
          var t=W(e, 2), n=t[
            0
          ], r=t[
            1
          ];
          return s[
            String(n)
          ]
          =r, s
        })), s
      };
      const X=function(e, t, n, r){
        return V(e, t, n||U, r||function(t){
          return e.outEdges(t)
        })
      };
      const H=function(e, t, n){
        var r={
        };
        return e.nodes().forEach((function(o){
          return r[
            String(o)
          ]
          =X(e, o, t, n), r
        })), r
      };
      const Y=function(e){
        var t=0, n=[
        ], r=new Map, o=[
        ];
        function i(a){
          var u, c={
            onStack:!0, lowlink:t, index:t
          };
          if(r.set(a, c), t+=1, n.push(a), null===(u=e.successors(a))||void 0===u||u.forEach((function(e){
            var t;
            if(r.has(e)){
              if(null===(t=r.get(e))||void 0===t?void 0:t.onStack){
                var n=r.get(e);
                c.lowlink=Math.min(c.lowlink, n.index)
              }
            }
            else{
              i(e);
              var o=r.get(e);
              c.lowlink=Math.min(c.lowlink, o.lowlink)
            }
          })), c.lowlink===c.index){
            var s, d=[
            ];
            do{
              s=n.pop(), r.get(s).onStack=!1, d.push(s)
            }
            while(a!==s);
            o.push(d)
          }
        }
        return e.nodes().forEach((function(e){
          r.has(e)||i(e)
        })), o
      };
      const q=function(e){
        return Y(e).filter((function(t){
          return t.length>1||1===t.length&&e.hasEdge(t[
            0
          ], t[
            0
          ])
        }))
      };
      function Z(e){
        return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
          return typeof e
        }
        :function(e){
          return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
        })(e)
      }
      function K(e, t){
        for(var n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          r.enumerable=r.enumerable||!1, r.configurable=!0, "value"in r&&(r.writable=!0), Object.defineProperty(e, r.key, r)
        }
      }
      function J(e, t){
        if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
      }
      function Q(e, t){
        if(t&&("object"===Z(t)||"function"==typeof t))return t;
        if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");
        return function(e){
          if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }
        (e)
      }
      function $(e){
        var t="function"==typeof Map?new Map:void 0;
        return($=function(e){
          if(null===e||(n=e, -1===Function.toString.call(n).indexOf("[native code]")))return e;
          var n;
          if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");
          if(void 0!==t){
            if(t.has(e))return t.get(e);
            t.set(e, r)
          }
          function r(){
            return ee(e, arguments, re(this).constructor)
          }
          return r.prototype=Object.create(e.prototype, {
            constructor:{
              value:r, enumerable:!1, writable:!0, configurable:!0
            }
          }), ne(r, e)
        })(e)
      }
      function ee(e, t, n){
        return(ee=te()?Reflect.construct:function(e, t, n){
          var r=[
            null
          ];
          r.push.apply(r, t);
          var o=new(Function.bind.apply(e, r));
          return n&&ne(o, n.prototype), o
        }).apply(null, arguments)
      }
      function te(){
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
      function ne(e, t){
        return(ne=Object.setPrototypeOf||function(e, t){
          return e.__proto__=t, e
        })(e, t)
      }
      function re(e){
        return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){
          return e.__proto__||Object.getPrototypeOf(e)
        })(e)
      }
      var oe=function(e){
        !function(e, t){
          if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");
          e.prototype=Object.create(t&&t.prototype, {
            constructor:{
              value:e, writable:!0, configurable:!0
            }
          }), Object.defineProperty(e, "prototype", {
            writable:!1
          }), t&&ne(e, t)
        }
        (u, e);
        var t, n, r, o, i, a=(t=u, n=te(), function(){
          var e, r=re(t);
          if(n){
            var o=re(this).constructor;
            e=Reflect.construct(r, arguments, o)
          }
          else e=r.apply(this, arguments);
          return Q(this, e)
        });
        function u(){
          return J(this, u), a.apply(this, arguments)
        }
        return r=u, o&&K(r.prototype, o), i&&K(r, i), Object.defineProperty(r, "prototype", {
          writable:!1
        }), r
      }
      ($(Error));
      const ie=function(e){
        var t=new Set, n=new Set, r=[
        ];
        if(e.sinks().forEach((function o(i){
          if(n.has(i))throw new oe;
          var a;
          t.has(i)||(n.add(i), t.add(i), null===(a=e.predecessors(i))||void 0===a||a.forEach(o), n.delete(i), r.push(i))
        })), t.size!==e.nodeCount())throw new oe;
        return r
      };
      const ae=function(e){
        try{
          ie(e)
        }
        catch(e){
          if(e instanceof oe)return!1;
          throw e
        }
        return!0
      };
      const ue=function(e, t){
        return R(e, t, "post")
      };
      const ce=function(e, t){
        return R(e, t, "pre")
      };
      var se=function(){
        return 1
      };
      const de=function(e, t, n){
        return function(e, t, n){
          var r={
          }, o=e.nodes();
          return o.forEach((function(e){
            var i=String(e);
            r[
              i
            ]
            ={
            }, r[
              i
            ]
            [
              i
            ]
            ={
              distance:0
            }, o.forEach((function(t){
              e!==t&&(r[
                i
              ]
              [
                String(t)
              ]
              ={
                distance:Number.POSITIVE_INFINITY
              })
            })), n(e).forEach((function(n){
              var o=n.v===e?n.w:n.v, a=t(n);
              r[
                i
              ]
              [
                String(o)
              ]
              ={
                distance:a, predecessor:e
              }
            }))
          })), o.forEach((function(e){
            var t=String(e), n=r[
              t
            ];
            o.forEach((function(e){
              var i=String(e), a=r[
                i
              ];
              o.forEach((function(e){
                var r=String(e), o=a[
                  t
                ], i=n[
                  r
                ], u=a[
                  r
                ], c=o.distance+i.distance;
                c<u.distance&&(u.distance=c, u.predecessor=i.predecessor)
              }))
            }))
          })), r
        }
        (e, t||se, n||function(t){
          return e.outEdges(t)
        })
      };
      var le=function(e, t){
        for(var n=e.nodes(), r=0;
        r<n.length;
        r++){
          var o=n[
            r
          ];
          if(t.hasNode(o))return!0
        }
        return!1
      }, fe=function(e, t){
        for(var n=e.edges(), r=0;
        r<n.length;
        r++){
          var o=n[
            r
          ];
          if(t.hasEdge(o.v, o.w, o.name))return!0
        }
        return!1
      }, he=function(e, t){
        return e.nodes().filter((function(e){
          return t.hasNode(e)
        }))
      }, ve=function(e, t){
        return e.edges().filter((function(e){
          return t.hasEdge(e.v, e.w, e.name)
        }))
      }, pe=function(e, t){
        return e.isCompound()===t.isCompound()&&e.isDirected()===t.isDirected()&&e.isMultigraph()===t.isMultigraph()
      }, ge=function(e, t){
        return he(e, t).length===e.nodes().length
      }, ye=function(e, t){
        return ve(e, t).length===e.edges().length
      }, me=function(e, t){
        return pe(e, t)&&e.nodeCount()===t.nodeCount()&&ge(e, t)&&e.edgeCount()===t.edgeCount()&&ye(e, t)
      }, xe=function(e, t){
        return ge(e, t)&&ye(e, t)
      };
      function be(e, t){
        return function(e){
          if(Array.isArray(e))return e
        }
        (e)||function(e, t){
          var n=null==e?null:"undefined"!=typeof Symbol&&e[
            Symbol.iterator
          ]
          ||e[
            "@@iterator"
          ];
          if(null==n)return;
          var r, o, i=[
          ], a=!0, u=!1;
          try{
            for(n=n.call(e);
            !(a=(r=n.next()).done)&&(i.push(r.value), !t||i.length!==t);
            a=!0);
          }
          catch(e){
            u=!0, o=e
          }
          finally{
            try{
              a||null==n.return||n.return()
            }
            finally{
              if(u)throw o
            }
          }
          return i
        }
        (e, t)||function(e, t){
          if(!e)return;
          if("string"==typeof e)return _e(e, t);
          var n=Object.prototype.toString.call(e).slice(8, -1);
          "Object"===n&&e.constructor&&(n=e.constructor.name);
          if("Map"===n||"Set"===n)return Array.from(e);
          if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _e(e, t)
        }
        (e, t)||function(){
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ()
      }
      function _e(e, t){
        (null==t||t>e.length)&&(t=e.length);
        for(var n=0, r=new Array(t);
        n<t;
        n++)r[
          n
        ]
        =e[
          n
        ];
        return r
      }
      function we(e){
        return e instanceof E
      }
      function Ee(e){
        if(e.isMultigraph())return!1;
        for(var t=e.edges(), n=new Map, r=0;
        r<t.length;
        r++){
          var o=t[
            r
          ];
          if(o.v===o.w)return!1;
          var i=be([
            o.v, o.w
          ].sort(), 2), a=i[
            0
          ], u=i[
            1
          ], c="".concat(a, "-").concat(u);
          if(n.has(c))return!1;
          n.set(c, !0)
        }
        return!0
      }
      function De(e){
        return 0===e.nodes().length
      }
      function Ie(e){
        for(var t=e.edges(), n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          if(r.v===r.w)return!0
        }
        return!1
      }
      var Se=function(e, t){
        if(!Ee(e)||!Ee(t))return!1;
        if(!ge(e, t))return!1;
        if(fe(e, t))return!1;
        var n=e.nodeCount();
        return e.edgeCount()+t.edgeCount()===n*(n-1)/2
      }, Me=function(e){
        if(!Ee(e))return null;
        for(var t=e.nodeCount(), n=new E({
          compound:e.isCompound(), directed:e.isDirected(), multigraph:e.isMultigraph()
        }), r=e.nodes(), o=0;
        o<t;
        o++){
          var i=r[
            o
          ];
          n.setNode(i, e.node(i));
          for(var a=o+1;
          a<t;
          a++){
            var u=r[
              a
            ];
            e.hasEdge(i, u)||n.setEdge(i, u)
          }
        }
        return n
      }
    }, 769474:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      }), i=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ERLayout=void 0;
      var a=n(346271), u=i(n(684551)), c=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.width=300, n.height=300, n.nodeMinGap=50, n.onLayoutEnd=function(){
          }, t&&n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            width:300, height:300, nodeMinGap:50
          }
        }, t.prototype.execute=function(){
          var e=this, t=e.nodes, n=e.edges;
          return null==t||t.forEach((function(e){
            e.size||(e.size=[
              50, 50
            ])
          })), (0, u.default)({
            nodes:t, edges:n
          }, {
            width:this.width, height:this.height, nodeMinGap:this.nodeMinGap
          }).then((function(){
            e.onLayoutEnd&&e.onLayoutEnd()
          }))
        }, t.prototype.getType=function(){
          return"er"
        }, t
      }
      (a.Base);
      t.ERLayout=c
    }, 781422:function(e, t, n){
      var r=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), o=this&&this.__exportStar||function(e, t){
        for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t, n)||r(t, e, n)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), o(n(95757), t), o(n(686755), t), o(n(419937), t), o(n(491922), t), o(n(515747), t), o(n(743380), t)
    }, 794341:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.clusterBundle=t.clusterCode=t.fruchtermanBundle=t.fruchtermanCode=void 0, t.fruchtermanCode="\nimport { globalInvocationID } from 'g-webgpu';\nconst MAX_EDGE_PER_VERTEX;\nconst VERTEX_COUNT;\n@numthreads(1, 1, 1)\nclass Fruchterman {\n  @in @out\n  u_Data: vec4[];\n  @in\n  u_K: float;\n  @in\n  u_K2: float;\n  \n  @in\n  u_Center: vec2;\n  @in\n  u_Gravity: float;\n  @in\n  u_ClusterGravity: float;\n  @in\n  u_Speed: float;\n  @in\n  u_MaxDisplace: float;\n  @in\n  u_Clustering: float;\n  @in\n  u_AttributeArray: vec4[];\n  @in\n  u_ClusterCenters: vec4[];\n  calcRepulsive(i: int, currentNode: vec4): vec2 {\n    let dx = 0, dy = 0;\n    for (let j = 0; j < VERTEX_COUNT; j++) {\n      if (i != j) {\n        const nextNode = this.u_Data[j];\n        const xDist = currentNode[0] - nextNode[0];\n        const yDist = currentNode[1] - nextNode[1];\n        const dist = (xDist * xDist + yDist * yDist) + 0.01;\n        let param = this.u_K2 / dist;\n        \n        if (dist > 0.0) {\n          dx += param * xDist;\n          dy += param * yDist;\n          if (xDist == 0 && yDist == 0) {\n            const sign = i < j ? 1 : -1;\n            dx += param * sign;\n            dy += param * sign;\n          }\n        }\n      }\n    }\n    return [dx, dy];\n  }\n  calcGravity(currentNode: vec4, nodeAttributes: vec4): vec2 { // \n    let dx = 0, dy = 0;\n    const vx = currentNode[0] - this.u_Center[0];\n    const vy = currentNode[1] - this.u_Center[1];\n    const gf = 0.01 * this.u_K * this.u_Gravity;\n    dx = gf * vx;\n    dy = gf * vy;\n    if (this.u_Clustering == 1) {\n      const clusterIdx = int(nodeAttributes[0]);\n      const center = this.u_ClusterCenters[clusterIdx];\n      const cvx = currentNode[0] - center[0];\n      const cvy = currentNode[1] - center[1];\n      const dist = sqrt(cvx * cvx + cvy * cvy) + 0.01;\n      const parma = this.u_K * this.u_ClusterGravity / dist;\n      dx += parma * cvx;\n      dy += parma * cvy;\n    }\n    return [dx, dy];\n  }\n  calcAttractive(i: int, currentNode: vec4): vec2 {\n    let dx = 0, dy = 0;\n    const arr_offset = int(floor(currentNode[2] + 0.5));\n    const length = int(floor(currentNode[3] + 0.5));\n    const node_buffer: vec4;\n    for (let p = 0; p < MAX_EDGE_PER_VERTEX; p++) {\n      if (p >= length) break;\n      const arr_idx = arr_offset + p;\n      // when arr_idx % 4 == 0 update currentNodedx_buffer\n      const buf_offset = arr_idx - arr_idx / 4 * 4;\n      if (p == 0 || buf_offset == 0) {\n        node_buffer = this.u_Data[int(arr_idx / 4)];\n      }\n      const float_j = buf_offset == 0 ? node_buffer[0] :\n                      buf_offset == 1 ? node_buffer[1] :\n                      buf_offset == 2 ? node_buffer[2] :\n                                        node_buffer[3];\n      const nextNode = this.u_Data[int(float_j)];\n      const xDist = currentNode[0] - nextNode[0];\n      const yDist = currentNode[1] - nextNode[1];\n      const dist = sqrt(xDist * xDist + yDist * yDist) + 0.01;\n      let attractiveF = dist / this.u_K;\n    \n      if (dist > 0.0) {\n        dx -= xDist * attractiveF;\n        dy -= yDist * attractiveF;\n        if (xDist == 0 && yDist == 0) {\n          const sign = i < int(float_j) ? 1 : -1;\n          dx -= sign * attractiveF;\n          dy -= sign * attractiveF;\n        }\n      }\n    }\n    return [dx, dy];\n  }\n  @main\n  compute() {\n    const i = globalInvocationID.x;\n    const currentNode = this.u_Data[i];\n    let dx = 0, dy = 0;\n    if (i >= VERTEX_COUNT) {\n      this.u_Data[i] = currentNode;\n      return;\n    }\n\n    // [gravity, fx, fy, 0]\n    const nodeAttributes = this.u_AttributeArray[i];\n\n    if (nodeAttributes[1] != 0 && nodeAttributes[2] != 0) {\n      // the node is fixed\n      this.u_Data[i] = [\n        nodeAttributes[1],\n        nodeAttributes[2],\n        currentNode[2],\n        currentNode[3]\n      ];\n      return;\n    }\n\n    // repulsive\n    const repulsive = this.calcRepulsive(i, currentNode);\n    dx += repulsive[0];\n    dy += repulsive[1];\n    // attractive\n    const attractive = this.calcAttractive(i, currentNode);\n    dx += attractive[0];\n    dy += attractive[1];\n    // gravity\n    const gravity = this.calcGravity(currentNode, nodeAttributes);\n    dx -= gravity[0];\n    dy -= gravity[1];\n    // speed\n    dx *= this.u_Speed;\n    dy *= this.u_Speed;\n\n    // move\n    const distLength = sqrt(dx * dx + dy * dy);\n    if (distLength > 0.0) {\n      const limitedDist = min(this.u_MaxDisplace * this.u_Speed, distLength);\n      this.u_Data[i] = [\n        currentNode[0] + dx / distLength * limitedDist,\n        currentNode[1] + dy / distLength * limitedDist,\n        currentNode[2],\n        currentNode[3]\n      ];\n    }\n  }\n}\n", t.fruchtermanBundle='{"shaders":{"WGSL":"","GLSL450":"","GLSL100":"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define MAX_EDGE_PER_VERTEX __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform float u_K;\\nuniform float u_K2;\\nuniform vec2 u_Center;\\nuniform float u_Gravity;\\nuniform float u_ClusterGravity;\\nuniform float u_Speed;\\nuniform float u_MaxDisplace;\\nuniform float u_Clustering;\\nuniform sampler2D u_AttributeArray;\\nuniform vec2 u_AttributeArraySize;\\nvec4 getDatau_AttributeArray(vec2 address2D) {\\n  return vec4(texture2D(u_AttributeArray, address2D).rgba);\\n}\\nvec4 getDatau_AttributeArray(float address1D) {\\n  return getDatau_AttributeArray(addrTranslation_1Dto2D(address1D, u_AttributeArraySize));\\n}\\nvec4 getDatau_AttributeArray(int address1D) {\\n  return getDatau_AttributeArray(float(address1D));\\n}\\nuniform sampler2D u_ClusterCenters;\\nuniform vec2 u_ClusterCentersSize;\\nvec4 getDatau_ClusterCenters(vec2 address2D) {\\n  return vec4(texture2D(u_ClusterCenters, address2D).rgba);\\n}\\nvec4 getDatau_ClusterCenters(float address1D) {\\n  return getDatau_ClusterCenters(addrTranslation_1Dto2D(address1D, u_ClusterCentersSize));\\n}\\nvec4 getDatau_ClusterCenters(int address1D) {\\n  return getDatau_ClusterCenters(float(address1D));\\n}\\nvec2 calcRepulsive(int i, vec4 currentNode) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {if (i != j) {vec4 nextNode = getDatau_Data(j);\\nfloat xDist = currentNode.x - nextNode.x;\\nfloat yDist = currentNode.y - nextNode.y;\\nfloat dist = ((xDist * xDist) + (yDist * yDist)) + 0.01;\\nfloat param = u_K2 / dist;\\nif (dist > 0.0) {dx += param * xDist;\\ndy += param * yDist;\\nif ((xDist == 0.0) && (yDist == 0.0)) {float sign = (i < j) ? (1.0) : (-1.0);\\ndx += param * sign;\\ndy += param * sign;}}}}\\nreturn vec2(dx, dy);}\\nvec2 calcGravity(vec4 currentNode, vec4 nodeAttributes) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nfloat vx = currentNode.x - u_Center.x;\\nfloat vy = currentNode.y - u_Center.y;\\nfloat gf = (0.01 * u_K) * u_Gravity;\\ndx = gf * vx;\\ndy = gf * vy;\\nif (u_Clustering == 1.0) {int clusterIdx = int(nodeAttributes.x);\\nvec4 center = getDatau_ClusterCenters(clusterIdx);\\nfloat cvx = currentNode.x - center.x;\\nfloat cvy = currentNode.y - center.y;\\nfloat dist = sqrt((cvx * cvx) + (cvy * cvy)) + 0.01;\\nfloat parma = (u_K * u_ClusterGravity) / dist;\\ndx += parma * cvx;\\ndy += parma * cvy;}\\nreturn vec2(dx, dy);}\\nvec2 calcAttractive(int i, vec4 currentNode) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nint arr_offset = int(floor(currentNode.z + 0.5));\\nint length = int(floor(currentNode.w + 0.5));\\nvec4 node_buffer;\\nfor (int p = 0; p < MAX_EDGE_PER_VERTEX; p++) {if (p >= length) {break;}\\nint arr_idx = arr_offset + int(p);\\nint buf_offset = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = getDatau_Data(int(arr_idx / 4));}\\nfloat float_j = (buf_offset == 0) ? (node_buffer.x) : ((buf_offset == 1) ? (node_buffer.y) : ((buf_offset == 2) ? (node_buffer.z) : (node_buffer.w)));\\nvec4 nextNode = getDatau_Data(int(float_j));\\nfloat xDist = currentNode.x - nextNode.x;\\nfloat yDist = currentNode.y - nextNode.y;\\nfloat dist = sqrt((xDist * xDist) + (yDist * yDist)) + 0.01;\\nfloat attractiveF = dist / u_K;\\nif (dist > 0.0) {dx -= xDist * attractiveF;\\ndy -= yDist * attractiveF;\\nif ((xDist == 0.0) && (yDist == 0.0)) {float sign = (i < int(float_j)) ? (1.0) : (-1.0);\\ndx -= sign * attractiveF;\\ndy -= sign * attractiveF;}}}\\nreturn vec2(dx, dy);}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint i = globalInvocationID.x;\\nvec4 currentNode = getDatau_Data(i);\\nfloat dx = 0.0;\\nfloat dy = 0.0;\\nif (i >= VERTEX_COUNT) {gl_FragColor = vec4(currentNode);\\nreturn ;}\\nvec4 nodeAttributes = getDatau_AttributeArray(i);\\nif ((nodeAttributes.y != 0.0) && (nodeAttributes.z != 0.0)) {gl_FragColor = vec4(vec4(nodeAttributes.y, nodeAttributes.z, currentNode.z, currentNode.w));\\nreturn ;}\\nvec2 repulsive = calcRepulsive(i, currentNode);\\ndx += repulsive.x;\\ndy += repulsive.y;\\nvec2 attractive = calcAttractive(i, currentNode);\\ndx += attractive.x;\\ndy += attractive.y;\\nvec2 gravity = calcGravity(currentNode, nodeAttributes);\\ndx -= gravity.x;\\ndy -= gravity.y;\\ndx *= u_Speed;\\ndy *= u_Speed;\\nfloat distLength = sqrt((dx * dx) + (dy * dy));\\nif (distLength > 0.0) {float limitedDist = min(u_MaxDisplace * u_Speed, distLength);\\ngl_FragColor = vec4(vec4(currentNode.x + ((dx / distLength) * limitedDist), currentNode.y + ((dy / distLength) * limitedDist), currentNode.z, currentNode.w));}if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n"},"context":{"name":"","dispatch":[1,1,1],"threadGroupSize":[1,1,1],"maxIteration":1,"defines":[{"name":"MAX_EDGE_PER_VERTEX","type":"Float","runtime":true},{"name":"VERTEX_COUNT","type":"Float","runtime":true}],"uniforms":[{"name":"u_Data","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":false,"writeonly":false,"size":[1,1]},{"name":"u_K","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_K2","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_Center","type":"vec2<f32>","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_Gravity","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_ClusterGravity","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_Speed","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_MaxDisplace","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_Clustering","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_AttributeArray","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_ClusterCenters","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]}],"globalDeclarations":[],"output":{"name":"u_Data","size":[1,1],"length":1},"needPingpong":true}}', t.clusterCode="\nimport { globalInvocationID } from 'g-webgpu';\nconst VERTEX_COUNT;\nconst CLUSTER_COUNT;\n@numthreads(1, 1, 1)\nclass CalcCenter {\n  @in\n  u_Data: vec4[];\n  @in\n  u_NodeAttributes: vec4[]; // [[clusterIdx, 0, 0, 0], ...]\n  @in @out\n  u_ClusterCenters: vec4[]; // [[cx, cy, nodeCount, clusterIdx], ...]\n  @main\n  compute() {\n    const i = globalInvocationID.x;\n    const center = this.u_ClusterCenters[i];\n    let sumx = 0;\n    let sumy = 0;\n    let count = 0;\n    for (let j = 0; j < VERTEX_COUNT; j++) {\n      const attributes = this.u_NodeAttributes[j];\n      const clusterIdx = int(attributes[0]);\n      const vertex = this.u_Data[j];\n      if (clusterIdx == i) {\n        sumx += vertex.x;\n        sumy += vertex.y;\n        count += 1;\n      }\n    }\n    this.u_ClusterCenters[i] = [\n      sumx / count,\n      sumy / count,\n      count,\n      i\n    ];\n  }\n}\n", t.clusterBundle='{"shaders":{"WGSL":"","GLSL450":"","GLSL100":"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n#define CLUSTER_COUNT __DefineValuePlaceholder__CLUSTER_COUNT\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform sampler2D u_NodeAttributes;\\nuniform vec2 u_NodeAttributesSize;\\nvec4 getDatau_NodeAttributes(vec2 address2D) {\\n  return vec4(texture2D(u_NodeAttributes, address2D).rgba);\\n}\\nvec4 getDatau_NodeAttributes(float address1D) {\\n  return getDatau_NodeAttributes(addrTranslation_1Dto2D(address1D, u_NodeAttributesSize));\\n}\\nvec4 getDatau_NodeAttributes(int address1D) {\\n  return getDatau_NodeAttributes(float(address1D));\\n}\\nuniform sampler2D u_ClusterCenters;\\nuniform vec2 u_ClusterCentersSize;\\nvec4 getDatau_ClusterCenters(vec2 address2D) {\\n  return vec4(texture2D(u_ClusterCenters, address2D).rgba);\\n}\\nvec4 getDatau_ClusterCenters(float address1D) {\\n  return getDatau_ClusterCenters(addrTranslation_1Dto2D(address1D, u_ClusterCentersSize));\\n}\\nvec4 getDatau_ClusterCenters(int address1D) {\\n  return getDatau_ClusterCenters(float(address1D));\\n}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint i = globalInvocationID.x;\\nvec4 center = getDatau_ClusterCenters(i);\\nfloat sumx = 0.0;\\nfloat sumy = 0.0;\\nfloat count = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {vec4 attributes = getDatau_NodeAttributes(j);\\nint clusterIdx = int(attributes.x);\\nvec4 vertex = getDatau_Data(j);\\nif (clusterIdx == i) {sumx += vertex.x;\\nsumy += vertex.y;\\ncount += 1.0;}}\\ngl_FragColor = vec4(vec4(sumx / count, sumy / count, count, i));if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n"},"context":{"name":"","dispatch":[1,1,1],"threadGroupSize":[1,1,1],"maxIteration":1,"defines":[{"name":"VERTEX_COUNT","type":"Float","runtime":true},{"name":"CLUSTER_COUNT","type":"Float","runtime":true}],"uniforms":[{"name":"u_Data","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_NodeAttributes","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_ClusterCenters","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":false,"writeonly":false,"size":[1,1]}],"globalDeclarations":[],"output":{"name":"u_ClusterCenters","size":[1,1],"length":1},"needPingpong":true}}'
    }, 800361:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.FruchtermanLayout=void 0;
      var i=n(346271), a=n(781422), u=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.maxIteration=1e3, n.workerEnabled=!1, n.gravity=10, n.speed=5, n.clustering=!1, n.clusterGravity=10, n.nodes=[
          ], n.edges=[
          ], n.width=300, n.height=300, n.nodeMap={
          }, n.nodeIdxMap={
          }, n.onLayoutEnd=function(){
          }, n.tick=function(){
          }, n.animate=!0, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            maxIteration:1e3, gravity:10, speed:1, clustering:!1, clusterGravity:10, animate:!0
          }
        }, t.prototype.execute=function(){
          var e, t, n=this, r=this, o=r.nodes;
          if(void 0!==r.timeInterval&&"undefined"!=typeof window&&window.clearInterval(r.timeInterval), o&&0!==o.length){
            r.width||"undefined"==typeof window||(r.width=window.innerWidth), r.height||"undefined"==typeof window||(r.height=window.innerHeight), r.center||(r.center=[
              r.width/2, r.height/2
            ]);
            var i=r.center;
            if(1===o.length)return o[
              0
            ].x=i[
              0
            ], o[
              0
            ].y=i[
              1
            ], void(null===(t=r.onLayoutEnd)||void 0===t||t.call(r));
            var u={
            }, c={
            };
            return o.forEach((function(e, t){
              (0, a.isNumber)(e.x)||(e.x=Math.random()*n.width), (0, a.isNumber)(e.y)||(e.y=Math.random()*n.height), u[
                e.id
              ]
              =e, c[
                e.id
              ]
              =t
            })), r.nodeMap=u, r.nodeIdxMap=c, r.run()
          }
          null===(e=r.onLayoutEnd)||void 0===e||e.call(r)
        }, t.prototype.run=function(){
          var e, t=this, n=t.nodes;
          if(n){
            var r=t.edges, o=t.maxIteration, i=t.workerEnabled, a=t.clustering, u=t.animate, c={
            };
            if(a&&n.forEach((function(e){
              void 0===c[
                e.cluster
              ]
              &&(c[
                e.cluster
              ]
              ={
                name:e.cluster, cx:0, cy:0, count:0
              })
            })), i||!u){
              for(var s=0;
              s<o;
              s++)t.runOneStep(c);
              null===(e=t.onLayoutEnd)||void 0===e||e.call(t)
            }
            else{
              if("undefined"==typeof window)return;
              var d=0;
              this.timeInterval=window.setInterval((function(){
                var e;
                t.runOneStep(c), ++d>=o&&(null===(e=t.onLayoutEnd)||void 0===e||e.call(t), window.clearInterval(t.timeInterval))
              }), 0)
            }
            return{
              nodes:n, edges:r
            }
          }
        }, t.prototype.runOneStep=function(e){
          var t, n=this, r=n.nodes;
          if(r){
            var o=n.edges, i=n.center, u=n.gravity, c=n.speed, s=n.clustering, d=n.height*n.width, l=Math.sqrt(d)/10, f=d/(r.length+1), h=Math.sqrt(f), v=[
            ];
            if(r.forEach((function(e, t){
              v[
                t
              ]
              ={
                x:0, y:0
              }
            })), n.applyCalculate(r, o, v, h, f), s){
              for(var p in e)e[
                p
              ].cx=0, e[
                p
              ].cy=0, e[
                p
              ].count=0;
              for(var p in r.forEach((function(t){
                var n=e[
                  t.cluster
                ];
                (0, a.isNumber)(t.x)&&(n.cx+=t.x), (0, a.isNumber)(t.y)&&(n.cy+=t.y), n.count++
              })), e)e[
                p
              ].cx/=e[
                p
              ].count, e[
                p
              ].cy/=e[
                p
              ].count;
              var g=n.clusterGravity||u;
              r.forEach((function(t, n){
                if((0, a.isNumber)(t.x)&&(0, a.isNumber)(t.y)){
                  var r=e[
                    t.cluster
                  ], o=Math.sqrt((t.x-r.cx)*(t.x-r.cx)+(t.y-r.cy)*(t.y-r.cy)), i=h*g;
                  v[
                    n
                  ].x-=i*(t.x-r.cx)/o, v[
                    n
                  ].y-=i*(t.y-r.cy)/o
                }
              }))
            }
            r.forEach((function(e, t){
              if((0, a.isNumber)(e.x)&&(0, a.isNumber)(e.y)){
                var n=.01*h*u;
                v[
                  t
                ].x-=n*(e.x-i[
                  0
                ]), v[
                  t
                ].y-=n*(e.y-i[
                  1
                ])
              }
            })), r.forEach((function(e, t){
              if((0, a.isNumber)(e.fx)&&(0, a.isNumber)(e.fy))return e.x=e.fx, void(e.y=e.fy);
              if((0, a.isNumber)(e.x)&&(0, a.isNumber)(e.y)){
                var n=Math.sqrt(v[
                  t
                ].x*v[
                  t
                ].x+v[
                  t
                ].y*v[
                  t
                ].y);
                if(n>0){
                  var r=Math.min(l*(c/800), n);
                  e.x+=v[
                    t
                  ].x/n*r, e.y+=v[
                    t
                  ].y/n*r
                }
              }
            })), null===(t=n.tick)||void 0===t||t.call(n)
          }
        }, t.prototype.applyCalculate=function(e, t, n, r, o){
          this.calRepulsive(e, n, o), t&&this.calAttractive(t, n, r)
        }, t.prototype.calRepulsive=function(e, t, n){
          e.forEach((function(r, o){
            t[
              o
            ]
            ={
              x:0, y:0
            }, e.forEach((function(e, i){
              if(o!==i&&(0, a.isNumber)(r.x)&&(0, a.isNumber)(e.x)&&(0, a.isNumber)(r.y)&&(0, a.isNumber)(e.y)){
                var u=r.x-e.x, c=r.y-e.y, s=u*u+c*c;
                if(0===s){
                  s=1;
                  var d=o>i?1:-1;
                  u=.01*d, c=.01*d
                }
                var l=n/s;
                t[
                  o
                ].x+=u*l, t[
                  o
                ].y+=c*l
              }
            }))
          }))
        }, t.prototype.calAttractive=function(e, t, n){
          var r=this;
          e.forEach((function(e){
            var o=(0, a.getEdgeTerminal)(e, "source"), i=(0, a.getEdgeTerminal)(e, "target");
            if(o&&i){
              var u=r.nodeIdxMap[
                o
              ], c=r.nodeIdxMap[
                i
              ];
              if(u!==c){
                var s=r.nodeMap[
                  o
                ], d=r.nodeMap[
                  i
                ];
                if((0, a.isNumber)(d.x)&&(0, a.isNumber)(s.x)&&(0, a.isNumber)(d.y)&&(0, a.isNumber)(s.y)){
                  var l=d.x-s.x, f=d.y-s.y, h=Math.sqrt(l*l+f*f), v=h*h/n;
                  t[
                    c
                  ].x-=l/h*v, t[
                    c
                  ].y-=f/h*v, t[
                    u
                  ].x+=l/h*v, t[
                    u
                  ].y+=f/h*v
                }
              }
            }
          }))
        }, t.prototype.stop=function(){
          this.timeInterval&&"undefined"!=typeof window&&window.clearInterval(this.timeInterval)
        }, t.prototype.destroy=function(){
          var e=this;
          e.stop(), e.tick=null, e.nodes=null, e.edges=null, e.destroyed=!0
        }, t.prototype.getType=function(){
          return"fruchterman"
        }, t
      }
      (i.Base);
      t.FruchtermanLayout=u
    }, 812564:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.aveMovementBundle=t.aveMovementCode=t.gForceBundle=t.gForceCode=void 0, t.gForceCode="\nimport { globalInvocationID } from 'g-webgpu';\n\nconst MAX_EDGE_PER_VERTEX;\nconst VERTEX_COUNT;\nconst SHIFT_20 = 1048576;\n\n@numthreads(1, 1, 1)\nclass GGForce {\n  @in @out\n  u_Data: vec4[];\n\n  @in\n  u_damping: float;\n  \n  @in\n  u_maxSpeed: float;\n\n  @in\n  u_minMovement: float;\n\n  @in\n  u_AveMovement: vec4[];\n\n  @in\n  u_coulombDisScale: float;\n\n  @in\n  u_factor: float;\n\n  @in\n  u_NodeAttributeArray1: vec4[];\n\n  @in\n  u_NodeAttributeArray2: vec4[];\n\n  @in\n  u_interval: float;\n\n  unpack_float(packedValue: float): ivec2 {\n    const packedIntValue = int(packedValue);\n    const v0 = packedIntValue / SHIFT_20;\n    return [v0, packedIntValue - v0 * SHIFT_20];\n  }\n\n  calcRepulsive(i: int, currentNode: vec4): vec2 {\n    let ax = 0, ay = 0;\n    for (let j: int = 0; j < VERTEX_COUNT; j++) {\n      if (i != j) {\n        const nextNode = this.u_Data[j];\n        const vx = currentNode[0] - nextNode[0];\n        const vy = currentNode[1] - nextNode[1];\n        const dist = sqrt(vx * vx + vy * vy) + 0.01;\n        const n_dist = (dist + 0.1) * this.u_coulombDisScale;\n        const direx = vx / dist;\n        const direy = vy / dist;\n        const attributesi = this.u_NodeAttributeArray1[i];\n        const attributesj = this.u_NodeAttributeArray1[j];\n        const massi = attributesi[0];\n        const nodeStrengthi = attributesi[2];\n        const nodeStrengthj = attributesj[2];\n        const nodeStrength = (nodeStrengthi + nodeStrengthj) / 2;\n        // const param = nodeStrength * this.u_factor / (n_dist * n_dist * massi);\n        const param = nodeStrength * this.u_factor / (n_dist * n_dist);\n        ax += direx * param;\n        ay += direy * param;\n      }\n    }\n    return [ax, ay];\n  }\n\n  calcGravity(i: int, currentNode: vec4, attributes2: vec4): vec2 {\n    // note: attributes2 = [centerX, centerY, gravity, 0]\n\n    const vx = currentNode[0] - attributes2[0];\n    const vy = currentNode[1] - attributes2[1];\n    \n    const ax = vx * attributes2[2];\n    const ay = vy * attributes2[2];\n    \n    return [ax, ay];\n  }\n\n  calcAttractive(i: int, currentNode: vec4, attributes1: vec4): vec2 {\n    // note: attributes1 = [mass, degree, nodeSterngth, 0]\n\n    const mass = attributes1[0];\n    let ax = 0, ay = 0;\n    // const arr_offset = int(floor(currentNode[2] + 0.5));\n    // const length = int(floor(currentNode[3] + 0.5));\n\n    const compressed = this.unpack_float(currentNode[2]);\n    const length = compressed[0];\n    const arr_offset = compressed[1];\n\n    const node_buffer: vec4;\n    for (let p: int = 0; p < MAX_EDGE_PER_VERTEX; p++) {\n      if (p >= length) break;\n      const arr_idx = arr_offset + 4 * p; // i 节点的第 p 条边开始的小格子位置\n      const buf_offset = arr_idx - arr_idx / 4 * 4;\n      if (p == 0 || buf_offset == 0) {\n        node_buffer = this.u_Data[int(arr_idx / 4)]; // 大格子，大格子位置=小个子位置 / 4，\n      }\n\n      let float_j: float = node_buffer[0];\n\n      const nextNode = this.u_Data[int(float_j)];\n      const vx = nextNode[0] - currentNode[0];\n      const vy = nextNode[1] - currentNode[1];\n      const dist = sqrt(vx * vx + vy * vy) + 0.01;\n      const direx = vx / dist;\n      const direy = vy / dist;\n      const edgeLength = node_buffer[1];\n      const edgeStrength = node_buffer[2];\n      const diff: float = edgeLength - dist;//edgeLength\n      // const param = diff * this.u_stiffness / mass; //\n      const param = diff * edgeStrength / mass; // \n      ax -= direx * param;\n      ay -= direy * param;\n    }\n    return [ax, ay];\n  }\n\n  @main\n  compute() {\n    const i = globalInvocationID.x;\n    const currentNode = this.u_Data[i];\n    const movement = u_AveMovement[0];\n    let ax = 0, ay = 0;\n\n    if (i >= VERTEX_COUNT || movement.x < u_minMovement) {\n      this.u_Data[i] = currentNode;\n      return;\n    }\n\n    // 每个节点属性占两个数组中各一格\n    // [mass, degree, nodeStrength, fx]\n    const nodeAttributes1 = this.u_NodeAttributeArray1[i];\n    // [centerX, centerY, centerGravity, fy]\n    const nodeAttributes2 = this.u_NodeAttributeArray2[i];\n\n    // repulsive\n    const repulsive = this.calcRepulsive(i, currentNode);\n    ax += repulsive[0];\n    ay += repulsive[1];\n\n    // attractive\n    const attractive = this.calcAttractive(i, currentNode, nodeAttributes1);\n    ax += attractive[0];\n    ay += attractive[1];\n\n    // gravity\n    const gravity = this.calcGravity(i, currentNode, nodeAttributes2);\n    ax -= gravity[0];\n    ay -= gravity[1];\n\n    // speed\n    const param = this.u_interval * this.u_damping;\n    let vx = ax * param;\n    let vy = ay * param;\n    const vlength = sqrt(vx * vx + vy * vy) + 0.0001;\n    if (vlength > this.u_maxSpeed) {\n      const param2 = this.u_maxSpeed / vlength;\n      vx = param2 * vx;\n      vy = param2 * vy;\n    }\n\n    // move\n    if (nodeAttributes1[3] != 0 && nodeAttributes2[3] != 0) {\n      this.u_Data[i] = [\n        nodeAttributes1[3],\n        nodeAttributes2[3],\n        currentNode[2],\n        0\n      ];\n    } else {\n      const distx = vx * this.u_interval;\n      const disty = vy * this.u_interval;\n      const distLength = sqrt(distx * distx + disty * disty);\n      this.u_Data[i] = [\n        currentNode[0] + distx,\n        currentNode[1] + disty,\n        currentNode[2],\n        distLength\n      ];\n    }\n    \n    // the avarage move distance\n    // need to share memory\n    \n  }\n}\n", t.gForceBundle='{"shaders":{"WGSL":"","GLSL450":"","GLSL100":"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define MAX_EDGE_PER_VERTEX __DefineValuePlaceholder__MAX_EDGE_PER_VERTEX\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n#define SHIFT_20 1048576.0\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform float u_damping;\\nuniform float u_maxSpeed;\\nuniform float u_minMovement;\\nuniform sampler2D u_AveMovement;\\nuniform vec2 u_AveMovementSize;\\nvec4 getDatau_AveMovement(vec2 address2D) {\\n  return vec4(texture2D(u_AveMovement, address2D).rgba);\\n}\\nvec4 getDatau_AveMovement(float address1D) {\\n  return getDatau_AveMovement(addrTranslation_1Dto2D(address1D, u_AveMovementSize));\\n}\\nvec4 getDatau_AveMovement(int address1D) {\\n  return getDatau_AveMovement(float(address1D));\\n}\\nuniform float u_coulombDisScale;\\nuniform float u_factor;\\nuniform sampler2D u_NodeAttributeArray1;\\nuniform vec2 u_NodeAttributeArray1Size;\\nvec4 getDatau_NodeAttributeArray1(vec2 address2D) {\\n  return vec4(texture2D(u_NodeAttributeArray1, address2D).rgba);\\n}\\nvec4 getDatau_NodeAttributeArray1(float address1D) {\\n  return getDatau_NodeAttributeArray1(addrTranslation_1Dto2D(address1D, u_NodeAttributeArray1Size));\\n}\\nvec4 getDatau_NodeAttributeArray1(int address1D) {\\n  return getDatau_NodeAttributeArray1(float(address1D));\\n}\\nuniform sampler2D u_NodeAttributeArray2;\\nuniform vec2 u_NodeAttributeArray2Size;\\nvec4 getDatau_NodeAttributeArray2(vec2 address2D) {\\n  return vec4(texture2D(u_NodeAttributeArray2, address2D).rgba);\\n}\\nvec4 getDatau_NodeAttributeArray2(float address1D) {\\n  return getDatau_NodeAttributeArray2(addrTranslation_1Dto2D(address1D, u_NodeAttributeArray2Size));\\n}\\nvec4 getDatau_NodeAttributeArray2(int address1D) {\\n  return getDatau_NodeAttributeArray2(float(address1D));\\n}\\nuniform float u_interval;\\nivec2 unpack_float(float packedValue) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint packedIntValue = int(packedValue);\\nint v0 = packedIntValue / int(SHIFT_20);\\nreturn ivec2(v0, packedIntValue - (v0 * int(SHIFT_20)));}\\nvec2 calcRepulsive(int i, vec4 currentNode) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {if (i != j) {vec4 nextNode = getDatau_Data(j);\\nfloat vx = currentNode.x - nextNode.x;\\nfloat vy = currentNode.y - nextNode.y;\\nfloat dist = sqrt((vx * vx) + (vy * vy)) + 0.01;\\nfloat n_dist = (dist + 0.1) * u_coulombDisScale;\\nfloat direx = vx / dist;\\nfloat direy = vy / dist;\\nvec4 attributesi = getDatau_NodeAttributeArray1(i);\\nvec4 attributesj = getDatau_NodeAttributeArray1(j);\\nfloat massi = attributesi.x;\\nfloat nodeStrengthi = attributesi.z;\\nfloat nodeStrengthj = attributesj.z;\\nfloat nodeStrength = (nodeStrengthi + nodeStrengthj) / 2.0;\\nfloat param = (nodeStrength * u_factor) / (n_dist * n_dist);\\nax += direx * param;\\nay += direy * param;}}\\nreturn vec2(ax, ay);}\\nvec2 calcGravity(int i, vec4 currentNode, vec4 attributes2) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat vx = currentNode.x - attributes2.x;\\nfloat vy = currentNode.y - attributes2.y;\\nfloat ax = vx * attributes2.z;\\nfloat ay = vy * attributes2.z;\\nreturn vec2(ax, ay);}\\nvec2 calcAttractive(int i, vec4 currentNode, vec4 attributes1) {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat mass = attributes1.x;\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nivec2 compressed = unpack_float(currentNode.z);\\nint length = compressed.x;\\nint arr_offset = compressed.y;\\nvec4 node_buffer;\\nfor (int p = 0; p < MAX_EDGE_PER_VERTEX; p++) {if (p >= length) {break;}\\nint arr_idx = arr_offset + (4 * p);\\nint buf_offset = arr_idx - ((arr_idx / 4) * 4);\\nif ((p == 0) || (buf_offset == 0)) {node_buffer = getDatau_Data(int(arr_idx / 4));}\\nfloat float_j = node_buffer.x;\\nvec4 nextNode = getDatau_Data(int(float_j));\\nfloat vx = nextNode.x - currentNode.x;\\nfloat vy = nextNode.y - currentNode.y;\\nfloat dist = sqrt((vx * vx) + (vy * vy)) + 0.01;\\nfloat direx = vx / dist;\\nfloat direy = vy / dist;\\nfloat edgeLength = node_buffer.y;\\nfloat edgeStrength = node_buffer.z;\\nfloat diff = edgeLength - dist;\\nfloat param = (diff * edgeStrength) / mass;\\nax -= direx * param;\\nay -= direy * param;}\\nreturn vec2(ax, ay);}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nint i = globalInvocationID.x;\\nvec4 currentNode = getDatau_Data(i);\\nvec4 movement = getDatau_AveMovement(0.0);\\nfloat ax = 0.0;\\nfloat ay = 0.0;\\nif ((i >= VERTEX_COUNT) || (movement.x < u_minMovement)) {gl_FragColor = vec4(currentNode);\\nreturn ;}\\nvec4 nodeAttributes1 = getDatau_NodeAttributeArray1(i);\\nvec4 nodeAttributes2 = getDatau_NodeAttributeArray2(i);\\nvec2 repulsive = calcRepulsive(i, currentNode);\\nax += repulsive.x;\\nay += repulsive.y;\\nvec2 attractive = calcAttractive(i, currentNode, nodeAttributes1);\\nax += attractive.x;\\nay += attractive.y;\\nvec2 gravity = calcGravity(i, currentNode, nodeAttributes2);\\nax -= gravity.x;\\nay -= gravity.y;\\nfloat param = u_interval * u_damping;\\nfloat vx = ax * param;\\nfloat vy = ay * param;\\nfloat vlength = sqrt((vx * vx) + (vy * vy)) + 0.0001;\\nif (vlength > u_maxSpeed) {float param2 = u_maxSpeed / vlength;\\nvx = param2 * vx;\\nvy = param2 * vy;}\\nif ((nodeAttributes1.w != 0.0) && (nodeAttributes2.w != 0.0)) {gl_FragColor = vec4(vec4(nodeAttributes1.w, nodeAttributes2.w, currentNode.z, 0.0));}else {float distx = vx * u_interval;\\nfloat disty = vy * u_interval;\\nfloat distLength = sqrt((distx * distx) + (disty * disty));\\ngl_FragColor = vec4(vec4(currentNode.x + distx, currentNode.y + disty, currentNode.z, distLength));}if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n"},"context":{"name":"","dispatch":[1,1,1],"threadGroupSize":[1,1,1],"maxIteration":1,"defines":[{"name":"MAX_EDGE_PER_VERTEX","type":"Float","runtime":true},{"name":"VERTEX_COUNT","type":"Float","runtime":true},{"name":"SHIFT_20","type":"Float","value":1048576,"runtime":false}],"uniforms":[{"name":"u_Data","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":false,"writeonly":false,"size":[1,1]},{"name":"u_damping","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_maxSpeed","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_minMovement","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_AveMovement","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_coulombDisScale","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_factor","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_NodeAttributeArray1","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_NodeAttributeArray2","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_interval","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]}],"globalDeclarations":[],"output":{"name":"u_Data","size":[1,1],"length":1},"needPingpong":true}}', t.aveMovementCode="\nconst VERTEX_COUNT;\n@numthreads(1, 1, 1)\nclass CalcAveMovement {\n  @in\n  u_Data: vec4[];\n  @in\n  u_iter: float;\n  @in @out\n  u_AveMovement: vec4[];\n  @main\n  compute() {\n    let movement = 0;\n    for (let j: int = 0; j < VERTEX_COUNT; j++) {\n      const vertex = this.u_Data[j];\n      movement += vertex[3];\n    }\n    movement = movement / float(VERTEX_COUNT);\n    this.u_AveMovement[0] = [movement, 0, 0, 0];\n  }\n}\n", t.aveMovementBundle='{"shaders":{"WGSL":"","GLSL450":"","GLSL100":"\\n\\nfloat epsilon = 0.00001;\\nvec2 addrTranslation_1Dto2D(float address1D, vec2 texSize) {\\n  vec2 conv_const = vec2(1.0 / texSize.x, 1.0 / (texSize.x * texSize.y));\\n  vec2 normAddr2D = float(address1D) * conv_const;\\n  return vec2(fract(normAddr2D.x + epsilon), normAddr2D.y);\\n}\\n\\nvoid barrier() {}\\n  \\n\\nuniform vec2 u_OutputTextureSize;\\nuniform int u_OutputTexelCount;\\nvarying vec2 v_TexCoord;\\n\\nbool gWebGPUDebug = false;\\nvec4 gWebGPUDebugOutput = vec4(0.0);\\n\\n#define VERTEX_COUNT __DefineValuePlaceholder__VERTEX_COUNT\\n\\nuniform sampler2D u_Data;\\nuniform vec2 u_DataSize;\\nvec4 getDatau_Data(vec2 address2D) {\\n  return vec4(texture2D(u_Data, address2D).rgba);\\n}\\nvec4 getDatau_Data(float address1D) {\\n  return getDatau_Data(addrTranslation_1Dto2D(address1D, u_DataSize));\\n}\\nvec4 getDatau_Data(int address1D) {\\n  return getDatau_Data(float(address1D));\\n}\\nuniform float u_iter;\\nuniform sampler2D u_AveMovement;\\nuniform vec2 u_AveMovementSize;\\nvec4 getDatau_AveMovement(vec2 address2D) {\\n  return vec4(texture2D(u_AveMovement, address2D).rgba);\\n}\\nvec4 getDatau_AveMovement(float address1D) {\\n  return getDatau_AveMovement(addrTranslation_1Dto2D(address1D, u_AveMovementSize));\\n}\\nvec4 getDatau_AveMovement(int address1D) {\\n  return getDatau_AveMovement(float(address1D));\\n}\\nvoid main() {\\nivec3 workGroupSize = ivec3(1, 1, 1);\\nivec3 numWorkGroups = ivec3(1, 1, 1);     \\nint globalInvocationIndex = int(floor(v_TexCoord.x * u_OutputTextureSize.x))\\n  + int(floor(v_TexCoord.y * u_OutputTextureSize.y)) * int(u_OutputTextureSize.x);\\nint workGroupIDLength = globalInvocationIndex / (workGroupSize.x * workGroupSize.y * workGroupSize.z);\\nivec3 workGroupID = ivec3(workGroupIDLength / numWorkGroups.y / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.z, workGroupIDLength / numWorkGroups.x / numWorkGroups.y);\\nint localInvocationIDZ = globalInvocationIndex / (workGroupSize.x * workGroupSize.y);\\nint localInvocationIDY = (globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y) / workGroupSize.x;\\nint localInvocationIDX = globalInvocationIndex - localInvocationIDZ * workGroupSize.x * workGroupSize.y - localInvocationIDY * workGroupSize.x;\\nivec3 localInvocationID = ivec3(localInvocationIDX, localInvocationIDY, localInvocationIDZ);\\nivec3 globalInvocationID = workGroupID * workGroupSize + localInvocationID;\\nint localInvocationIndex = localInvocationID.z * workGroupSize.x * workGroupSize.y\\n                + localInvocationID.y * workGroupSize.x + localInvocationID.x;\\nfloat movement = 0.0;\\nfor (int j = 0; j < VERTEX_COUNT; j++) {vec4 vertex = getDatau_Data(j);\\nmovement += vertex.w;}\\nmovement = movement / float(VERTEX_COUNT);\\ngl_FragColor = vec4(vec4(movement, 0.0, 0.0, 0.0));if (gWebGPUDebug) {\\n  gl_FragColor = gWebGPUDebugOutput;\\n}}\\n"},"context":{"name":"","dispatch":[1,1,1],"threadGroupSize":[1,1,1],"maxIteration":1,"defines":[{"name":"VERTEX_COUNT","type":"Float","runtime":true}],"uniforms":[{"name":"u_Data","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_iter","type":"Float","storageClass":"Uniform","readonly":true,"writeonly":false,"size":[1,1]},{"name":"u_AveMovement","type":"vec4<f32>[]","storageClass":"StorageBuffer","readonly":false,"writeonly":false,"size":[1,1]}],"globalDeclarations":[],"output":{"name":"u_AveMovement","size":[1,1],"length":1},"needPingpong":true}}'
    }, 825980:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var n=function(){
        function e(e){
          this.body=null, this.quad=null, this.NW=null, this.NE=null, this.SW=null, this.SE=null, this.theta=.5, null!=e&&(this.quad=e)
        }
        return e.prototype.insert=function(t){
          null!=this.body?this._isExternal()?(this.quad&&(this.NW=new e(this.quad.NW()), this.NE=new e(this.quad.NE()), this.SW=new e(this.quad.SW()), this.SE=new e(this.quad.SE())), this._putBody(this.body), this._putBody(t), this.body=this.body.add(t)):(this.body=this.body.add(t), this._putBody(t)):this.body=t
        }, e.prototype._putBody=function(e){
          this.quad&&(e.in(this.quad.NW())&&this.NW?this.NW.insert(e):e.in(this.quad.NE())&&this.NE?this.NE.insert(e):e.in(this.quad.SW())&&this.SW?this.SW.insert(e):e.in(this.quad.SE())&&this.SE&&this.SE.insert(e))
        }, e.prototype._isExternal=function(){
          return null==this.NW&&null==this.NE&&null==this.SW&&null==this.SE
        }, e.prototype.updateForce=function(e){
          null!=this.body&&e!==this.body&&(this._isExternal()||(this.quad?this.quad.getLength():0)/this.body.distanceTo(e)<this.theta?e.addForce(this.body):(this.NW&&this.NW.updateForce(e), this.NE&&this.NE.updateForce(e), this.SW&&this.SW.updateForce(e), this.SE&&this.SE.updateForce(e)))
        }, e
      }
      ();
      t.default=n
    }, 828352:function(e, t, n){
      var r=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), o=this&&this.__exportStar||function(e, t){
        for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t, n)||r(t, e, n)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.ERLayout=t.ForceAtlas2Layout=t.ComboCombinedLayout=t.ComboForceLayout=t.GForceGPULayout=t.FruchtermanGPULayout=t.FruchtermanLayout=t.MDSLayout=t.ConcentricLayout=t.RadialLayout=t.DagreCompoundLayout=t.DagreLayout=t.CircularLayout=t.ForceLayout=t.Force2Layout=t.GForceLayout=t.RandomLayout=t.GridLayout=t.Layouts=t.Layout=void 0;
      var i=n(36010);
      Object.defineProperty(t, "GridLayout", {
        enumerable:!0, get:function(){
          return i.GridLayout
        }
      });
      var a=n(368501);
      Object.defineProperty(t, "RandomLayout", {
        enumerable:!0, get:function(){
          return a.RandomLayout
        }
      });
      var u=n(370238);
      Object.defineProperty(t, "GForceLayout", {
        enumerable:!0, get:function(){
          return u.GForceLayout
        }
      });
      var c=n(501782);
      Object.defineProperty(t, "Force2Layout", {
        enumerable:!0, get:function(){
          return c.Force2Layout
        }
      });
      var s=n(324964);
      Object.defineProperty(t, "ForceLayout", {
        enumerable:!0, get:function(){
          return s.ForceLayout
        }
      });
      var d=n(933455);
      Object.defineProperty(t, "CircularLayout", {
        enumerable:!0, get:function(){
          return d.CircularLayout
        }
      });
      var l=n(679829);
      Object.defineProperty(t, "DagreLayout", {
        enumerable:!0, get:function(){
          return l.DagreLayout
        }
      });
      var f=n(469524);
      Object.defineProperty(t, "DagreCompoundLayout", {
        enumerable:!0, get:function(){
          return f.DagreCompoundLayout
        }
      });
      var h=n(313570);
      Object.defineProperty(t, "RadialLayout", {
        enumerable:!0, get:function(){
          return h.RadialLayout
        }
      });
      var v=n(558006);
      Object.defineProperty(t, "ConcentricLayout", {
        enumerable:!0, get:function(){
          return v.ConcentricLayout
        }
      });
      var p=n(507982);
      Object.defineProperty(t, "MDSLayout", {
        enumerable:!0, get:function(){
          return p.MDSLayout
        }
      });
      var g=n(800361);
      Object.defineProperty(t, "FruchtermanLayout", {
        enumerable:!0, get:function(){
          return g.FruchtermanLayout
        }
      });
      var y=n(425444);
      Object.defineProperty(t, "FruchtermanGPULayout", {
        enumerable:!0, get:function(){
          return y.FruchtermanGPULayout
        }
      });
      var m=n(262121);
      Object.defineProperty(t, "GForceGPULayout", {
        enumerable:!0, get:function(){
          return m.GForceGPULayout
        }
      });
      var x=n(142335);
      Object.defineProperty(t, "ComboForceLayout", {
        enumerable:!0, get:function(){
          return x.ComboForceLayout
        }
      });
      var b=n(4193);
      Object.defineProperty(t, "ComboCombinedLayout", {
        enumerable:!0, get:function(){
          return b.ComboCombinedLayout
        }
      });
      var _=n(648991);
      Object.defineProperty(t, "ForceAtlas2Layout", {
        enumerable:!0, get:function(){
          return _.ForceAtlas2Layout
        }
      });
      var w=n(769474);
      Object.defineProperty(t, "ERLayout", {
        enumerable:!0, get:function(){
          return w.ERLayout
        }
      });
      var E=n(452316);
      Object.defineProperty(t, "Layout", {
        enumerable:!0, get:function(){
          return E.Layout
        }
      }), Object.defineProperty(t, "Layouts", {
        enumerable:!0, get:function(){
          return E.Layouts
        }
      }), o(n(582149), t)
    }, 841696:(e, t)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      t.default=function(e, t){
        for(var n=e.nodes().filter((function(t){
          var n;
          return!(null===(n=e.children(t))||void 0===n?void 0:n.length)
        })).map((function(t){
          return e.node(t).rank
        })), r=Math.max.apply(Math, n), o=[
        ], i=0;
        i<r+1;
        i++)o[
          i
        ]
        =[
        ];
        null==t||t.forEach((function(t){
          var n=e.node(t);
          n&&!(null==n?void 0:n.dummy)&&(isNaN(n.rank)||(n.fixorder=o[
            n.rank
          ].length, o[
            n.rank
          ].push(t)))
        }))
      }
    }, 850497:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(874522);
      t.default=function(e){
        for(var t={
        }, n=e.nodes().filter((function(t){
          var n;
          return!(null===(n=e.children(t))||void 0===n?void 0:n.length)
        })), o=n.map((function(t){
          return e.node(t).rank
        })), i=(0, r.max)(o), a=[
        ], u=0;
        u<i+1;
        u++)a.push([
        ]);
        var c=function(n){
          var r;
          if(!t.hasOwnProperty(n)){
            t[
              n
            ]
            =!0;
            var o=e.node(n);
            isNaN(o.rank)||a[
              o.rank
            ].push(n), null===(r=e.successors(n))||void 0===r||r.forEach((function(e){
              return c(e)
            }))
          }
        }, s=n.sort((function(t, n){
          return e.node(t).rank-e.node(n).rank
        })), d=s.filter((function(t){
          return void 0!==e.node(t).fixorder
        })).sort((function(t, n){
          return e.node(t).fixorder-e.node(n).fixorder
        }));
        return null==d||d.forEach((function(n){
          isNaN(e.node(n).rank)||a[
            e.node(n).rank
          ].push(n), t[
            n
          ]
          =!0
        })), null==s||s.forEach(c), a
      }
    }, 867484:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var r=n(611519), o=function(e, t){
        var n=t.v, o=e.node(n).rank, i=t.w, a=e.node(i).rank, u=t.name, c=e.edge(t), s=c.labelRank;
        if(a!==o+1){
          e.removeEdgeObj(t);
          var d, l, f, h=e.graph();
          for(f=0, ++o;
          o<a;
          ++f, ++o)c.points=[
          ], l={
            edgeLabel:c, width:0, height:0, edgeObj:t, rank:o
          }, d=(0, r.addDummyNode)(e, "edge", l, "_d"), o===s&&(l.width=c.width, l.height=c.height, l.dummy="edge-label", l.labelpos=c.labelpos), e.setEdge(n, d, {
            weight:c.weight
          }, u), 0===f&&(h.dummyChains||(h.dummyChains=[
          ]), h.dummyChains.push(d)), n=d;
          e.setEdge(n, i, {
            weight:c.weight
          }, u)
        }
      };
      t.default={
        run:function(e){
          e.graph().dummyChains=[
          ], e.edges().forEach((function(t){
            return o(e, t)
          }))
        }, undo:function(e){
          var t;
          null===(t=e.graph().dummyChains)||void 0===t||t.forEach((function(t){
            var n, r=e.node(t), o=r.edgeLabel;
            r.edgeObj&&e.setEdgeObj(r.edgeObj, o);
            for(var i=t;
            r.dummy;
            )n=e.successors(i)[
              0
            ], e.removeNode(i), o.points.push({
              x:r.x, y:r.y
            }), "edge-label"===r.dummy&&(o.x=r.x, o.y=r.y, o.width=r.width, o.height=r.height), i=n, r=e.node(i)
          }))
        }
      }
    }, 879436:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.width=t.sep=t.positionX=t.balance=t.alignCoordinates=t.findSmallestWidthAlignment=t.buildBlockGraph=t.horizontalCompaction=t.verticalAlignment=t.hasConflict=t.addConflict=t.findOtherInnerSegmentNode=t.findType2Conflicts=t.findType1Conflicts=void 0;
      var i=n(746888), a=n(874522), u=n(611519), c=function(e){
        function t(){
          return null!==e&&e.apply(this, arguments)||this
        }
        return o(t, e), t
      }
      (i.Graph);
      t.findType1Conflicts=function(e, n){
        var r={
        };
        return(null==n?void 0:n.length)&&n.reduce((function(n, o){
          var i=0, a=0, u=n.length, c=null==o?void 0:o[
            (null==o?void 0:o.length)-1
          ];
          return null==o||o.forEach((function(n, s){
            var d, l=(0, t.findOtherInnerSegmentNode)(e, n), f=l?e.node(l).order:u;
            (l||n===c)&&(null===(d=o.slice(a, s+1))||void 0===d||d.forEach((function(n){
              var o;
              null===(o=e.predecessors(n))||void 0===o||o.forEach((function(o){
                var a, u=e.node(o), c=u.order;
                !(c<i||f<c)||u.dummy&&(null===(a=e.node(n))||void 0===a?void 0:a.dummy)||(0, t.addConflict)(r, o, n)
              }))
            })), a=s+1, i=f)
          })), o
        })), r
      };
      t.findType2Conflicts=function(e, n){
        var r={
        };
        function o(n, o, i, a, u){
          for(var c, s, d, l=o;
          l<i;
          l++)d=n[
            l
          ], (null===(c=e.node(d))||void 0===c?void 0:c.dummy)&&(null===(s=e.predecessors(d))||void 0===s||s.forEach((function(n){
            var o=e.node(n);
            o.dummy&&(o.order<a||o.order>u)&&(0, t.addConflict)(r, n, d)
          })))
        }
        function i(e, t){
          var n=function(e){
            return JSON.stringify(e.slice(1))
          }
          (e);
          t.get(n)||(o.apply(void 0, e), t.set(n, !0))
        }
        return(null==n?void 0:n.length)&&n.reduce((function(t, n){
          var r, o=-1, a=0, u=new Map;
          return null==n||n.forEach((function(c, s){
            var d;
            if("border"===(null===(d=e.node(c))||void 0===d?void 0:d.dummy)){
              var l=e.predecessors(c)||[
              ];
              l.length&&(r=e.node(l[
                0
              ]).order, i([
                n, a, s, o, r
              ], u), a=s, o=r)
            }
            i([
              n, a, n.length, r, t.length
            ], u)
          })), n
        })), r
      };
      t.findOtherInnerSegmentNode=function(e, t){
        var n, r;
        if(null===(n=e.node(t))||void 0===n?void 0:n.dummy)return null===(r=e.predecessors(t))||void 0===r?void 0:r.find((function(t){
          return e.node(t).dummy
        }))
      };
      t.addConflict=function(e, t, n){
        var r=t, o=n;
        if(r>o){
          var i=r;
          r=o, o=i
        }
        var a=e[
          r
        ];
        a||(e[
          r
        ]
        =a={
        }), a[
          o
        ]
        =!0
      };
      t.hasConflict=function(e, t, n){
        var r=t;
        r>n&&(r=n);
        return!!e[
          r
        ]
      };
      t.verticalAlignment=function(e, n, r, o){
        var i={
        }, a={
        }, u={
        };
        return null==n||n.forEach((function(e){
          null==e||e.forEach((function(e, t){
            i[
              e
            ]
            =e, a[
              e
            ]
            =e, u[
              e
            ]
            =t
          }))
        })), null==n||n.forEach((function(e){
          var n=-1;
          null==e||e.forEach((function(e){
            var c=o(e);
            if(c.length)for(var s=((c=c.sort((function(e, t){
              return u[
                e
              ]
              -u[
                t
              ]
            }))).length-1)/2, d=Math.floor(s), l=Math.ceil(s);
            d<=l;
            ++d){
              var f=c[
                d
              ];
              a[
                e
              ]
              ===e&&n<u[
                f
              ]
              &&!(0, t.hasConflict)(r, e, f)&&(a[
                f
              ]
              =e, a[
                e
              ]
              =i[
                e
              ]
              =i[
                f
              ], n=u[
                f
              ])
            }
          }))
        })), {
          root:i, align:a
        }
      };
      t.horizontalCompaction=function(e, n, r, o, i){
        var a, u={
        }, c=(0, t.buildBlockGraph)(e, n, r, i), s=i?"borderLeft":"borderRight", d=function(e, t){
          for(var n=c.nodes(), r=n.pop(), o={
          };
          r;
          )o[
            r
          ]
          ?e(r):(o[
            r
          ]
          =!0, n.push(r), n=n.concat(t(r))), r=n.pop()
        };
        return d((function(e){
          u[
            e
          ]
          =(c.inEdges(e)||[
          ]).reduce((function(e, t){
            return Math.max(e, (u[
              t.v
            ]
            ||0)+c.edge(t))
          }), 0)
        }), c.predecessors.bind(c)), d((function(t){
          var n=(c.outEdges(t)||[
          ]).reduce((function(e, t){
            return Math.min(e, (u[
              t.w
            ]
            ||0)-c.edge(t))
          }), Number.POSITIVE_INFINITY), r=e.node(t);
          n!==Number.POSITIVE_INFINITY&&r.borderType!==s&&(u[
            t
          ]
          =Math.max(u[
            t
          ], n))
        }), c.successors.bind(c)), null===(a=Object.values(o))||void 0===a||a.forEach((function(e){
          u[
            e
          ]
          =u[
            r[
              e
            ]
          ]
        })), u
      };
      t.buildBlockGraph=function(e, n, r, o){
        var i=new c, a=e.graph(), u=(0, t.sep)(a.nodesep, a.edgesep, o);
        return null==n||n.forEach((function(t){
          var n;
          null==t||t.forEach((function(t){
            var o=r[
              t
            ];
            if(i.setNode(o), n){
              var a=r[
                n
              ], c=i.edgeFromArgs(a, o);
              i.setEdge(a, o, Math.max(u(e, t, n), c||0))
            }
            n=t
          }))
        })), i
      };
      function s(e, t){
        var n=Object.values(t), r=(0, a.min)(n), o=(0, a.max)(n);
        [
          "u", "d"
        ].forEach((function(n){
          [
            "l", "r"
          ].forEach((function(i){
            var u, c=n+i, s=e[
              c
            ];
            if(s!==t){
              var d=Object.values(s);
              (u="l"===i?r-(0, a.min)(d):o-(0, a.max)(d))&&(e[
                c
              ]
              ={
              }, Object.keys(s).forEach((function(t){
                e[
                  c
                ]
                [
                  t
                ]
                =s[
                  t
                ]
                +u
              })))
            }
          }))
        }))
      }
      t.findSmallestWidthAlignment=function(e, n){
        return(0, u.minBy)(Object.values(n), (function(n){
          var r, o=Number.NEGATIVE_INFINITY, i=Number.POSITIVE_INFINITY;
          return null===(r=Object.keys(n))||void 0===r||r.forEach((function(r){
            var a=n[
              r
            ], u=(0, t.width)(e, r)/2;
            o=Math.max(a+u, o), i=Math.min(a-u, i)
          })), o-i
        }))
      }, t.alignCoordinates=s;
      t.balance=function(e, t){
        var n={
        };
        return Object.keys(e.ul).forEach((function(r){
          if(t)n[
            r
          ]
          =e[
            t.toLowerCase()
          ]
          [
            r
          ];
          else{
            var o=Object.values(e).map((function(e){
              return e[
                r
              ]
            }));
            n[
              r
            ]
            =(o[
              0
            ]
            +o[
              1
            ])/2
          }
        })), n
      };
      t.positionX=function(e){
        var n, r=(0, u.buildLayerMatrix)(e), o=Object.assign((0, t.findType1Conflicts)(e, r), (0, t.findType2Conflicts)(e, r)), i={
        };
        [
          "u", "d"
        ].forEach((function(a){
          n="u"===a?r:Object.values(r).reverse(), [
            "l", "r"
          ].forEach((function(r){
            "r"===r&&(n=n.map((function(e){
              return Object.values(e).reverse()
            })));
            var u=("u"===a?e.predecessors:e.successors).bind(e), c=(0, t.verticalAlignment)(e, n, o, u), s=(0, t.horizontalCompaction)(e, n, c.root, c.align, "r"===r);
            "r"===r&&Object.keys(s).forEach((function(e){
              s[
                e
              ]
              =-s[
                e
              ]
            })), i[
              a+r
            ]
            =s
          }))
        }));
        var a=(0, t.findSmallestWidthAlignment)(e, i);
        return s(i, a), (0, t.balance)(i, e.graph().align)
      };
      t.sep=function(e, t, n){
        return function(r, o, i){
          var a, u=r.node(o), c=r.node(i), s=0;
          if(s+=u.width/2, u.hasOwnProperty("labelpos"))switch((u.labelpos||"").toLowerCase()){
            case"l":a=-u.width/2;
            break;
            case"r":a=u.width/2
          }
          if(a&&(s+=n?a:-a), a=0, s+=(u.dummy?t:e)/2, s+=(c.dummy?t:e)/2, s+=c.width/2, c.labelpos)switch((c.labelpos||"").toLowerCase()){
            case"l":a=c.width/2;
            break;
            case"r":a=-c.width/2
          }
          return a&&(s+=n?a:-a), a=0, s
        }
      };
      t.width=function(e, t){
        return e.node(t).width||0
      }
    }, 920657:function(e, t, n){
      var r=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=r(n(638733)), i=n(611519);
      t.default={
        layout:o.default, util:{
          time:i.time, notime:i.notime
        }
      }
    }, 933455:function(e, t, n){
      var r, o=this&&this.__extends||(r=function(e, t){
        return(r=Object.setPrototypeOf||{
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
        r(e, t), e.prototype=null===t?Object.create(t):(n.prototype=t.prototype, new n)
      });
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.CircularLayout=void 0;
      var i=n(346271), a=n(781422);
      function u(e, t){
        var n=e.degree, r=t.degree;
        return n<r?-1:n>r?1:0
      }
      var c=function(e){
        function t(t){
          var n=e.call(this)||this;
          return n.radius=null, n.nodeSize=void 0, n.startRadius=null, n.endRadius=null, n.startAngle=0, n.endAngle=2*Math.PI, n.clockwise=!0, n.divisions=1, n.ordering=null, n.angleRatio=1, n.nodes=[
          ], n.edges=[
          ], n.nodeMap={
          }, n.degrees=[
          ], n.width=300, n.height=300, n.updateCfg(t), n
        }
        return o(t, e), t.prototype.getDefaultCfg=function(){
          return{
            radius:null, startRadius:null, endRadius:null, startAngle:0, endAngle:2*Math.PI, clockwise:!0, divisions:1, ordering:null, angleRatio:1
          }
        }, t.prototype.execute=function(){
          var e, t=this, n=t.nodes, r=t.edges, o=n.length;
          if(0!==o){
            t.width||"undefined"==typeof window||(t.width=window.innerWidth), t.height||"undefined"==typeof window||(t.height=window.innerHeight), t.center||(t.center=[
              t.width/2, t.height/2
            ]);
            var i=t.center;
            if(1===o)return n[
              0
            ].x=i[
              0
            ], n[
              0
            ].y=i[
              1
            ], void(t.onLayoutEnd&&t.onLayoutEnd());
            var u=t.radius, c=t.startRadius, s=t.endRadius, d=t.divisions, l=t.startAngle, f=t.endAngle, h=t.angleRatio, v=t.ordering, p=t.clockwise, g=t.nodeSpacing, y=t.nodeSize, m=(f-l)/o, x={
            };
            n.forEach((function(e, t){
              x[
                e.id
              ]
              =t
            })), t.nodeMap=x;
            var b=(0, a.getDegree)(n.length, x, r);
            if(t.degrees=b, g){
              var _=(0, a.getFuncByUnknownType)(10, g), w=(0, a.getFuncByUnknownType)(10, y), E=-1/0;
              n.forEach((function(e){
                var t=w(e);
                E<t&&(E=t)
              }));
              var D=0;
              n.forEach((function(e, t){
                D+=0===t?E||10:(_(e)||0)+(E||10)
              })), u=D/(2*Math.PI)
            }
            else u||c||s?!c&&s?c=s:c&&!s&&(s=c):u=t.height>t.width?t.width/2:t.height/2;
            var I=m*h, S=[
            ];
            S="topology"===v?t.topologyOrdering():"topology-directed"===v?t.topologyOrdering(!0):"degree"===v?t.degreeOrdering():n;
            for(var M=Math.ceil(o/d), k=0;
            k<o;
            ++k){
              var O=u;
              O||null===c||null===s||(O=c+k*(s-c)/(o-1)), O||(O=10+100*k/(o-1));
              var N=l+k%M*I+2*Math.PI/d*Math.floor(k/M);
              p||(N=f-k%M*I-2*Math.PI/d*Math.floor(k/M)), S[
                k
              ].x=i[
                0
              ]
              +Math.cos(N)*O, S[
                k
              ].y=i[
                1
              ]
              +Math.sin(N)*O, S[
                k
              ].weight=b[
                k
              ].all
            }
            return null===(e=t.onLayoutEnd)||void 0===e||e.call(t), {
              nodes:S, edges:this.edges
            }
          }
          t.onLayoutEnd&&t.onLayoutEnd()
        }, t.prototype.topologyOrdering=function(e){
          void 0===e&&(e=!1);
          var t=this, n=t.degrees, r=t.edges, o=t.nodes, i=(0, a.clone)(o), u=t.nodeMap, c=[
            i[
              0
            ]
          ], s=[
            o[
              0
            ]
          ], d=[
          ], l=o.length;
          d[
            0
          ]
          =!0, function(e, t, n, r){
            e.forEach((function(t, n){
              e[
                n
              ].children=[
              ], e[
                n
              ].parent=[
              ]
            })), r?t.forEach((function(t){
              var r=(0, a.getEdgeTerminal)(t, "source"), o=(0, a.getEdgeTerminal)(t, "target"), i=0;
              r&&(i=n[
                r
              ]);
              var u=0;
              o&&(u=n[
                o
              ]);
              var c=e[
                i
              ].children, s=e[
                u
              ].parent;
              c.push(e[
                u
              ].id), s.push(e[
                i
              ].id)
            })):t.forEach((function(t){
              var r=(0, a.getEdgeTerminal)(t, "source"), o=(0, a.getEdgeTerminal)(t, "target"), i=0;
              r&&(i=n[
                r
              ]);
              var u=0;
              o&&(u=n[
                o
              ]);
              var c=e[
                i
              ].children, s=e[
                u
              ].children;
              c.push(e[
                u
              ].id), s.push(e[
                i
              ].id)
            }))
          }
          (i, r, u, e);
          var f=0;
          return i.forEach((function(e, t){
            if(0!==t)if(t!==l-1&&n[
              t
            ].all===n[
              t+1
            ].all&&!function(e, t, n){
              for(var r=n.length, o=0;
              o<r;
              o++){
                var i=(0, a.getEdgeTerminal)(n[
                  o
                ], "source"), u=(0, a.getEdgeTerminal)(n[
                  o
                ], "target");
                if(e.id===i&&t.id===u||t.id===i&&e.id===u)return!0
              }
              return!1
            }
            (c[
              f
            ], e, r)||d[
              t
            ]){
              for(var h=c[
                f
              ].children, v=!1, p=0;
              p<h.length;
              p++){
                var g=u[
                  h[
                    p
                  ]
                ];
                if(n[
                  g
                ].all===n[
                  t
                ].all&&!d[
                  g
                ]){
                  c.push(i[
                    g
                  ]), s.push(o[
                    u[
                      i[
                        g
                      ].id
                    ]
                  ]), d[
                    g
                  ]
                  =!0, v=!0;
                  break
                }
              }
              for(var y=0;
              !v&&(d[
                y
              ]
              ||(c.push(i[
                y
              ]), s.push(o[
                u[
                  i[
                    y
                  ].id
                ]
              ]), d[
                y
              ]
              =!0, v=!0), ++y!==l);
              );
            }
            else c.push(e), s.push(o[
              u[
                e.id
              ]
            ]), d[
              t
            ]
            =!0, f++
          })), s
        }, t.prototype.degreeOrdering=function(){
          var e=this.nodes, t=[
          ], n=this.degrees;
          return e.forEach((function(e, r){
            e.degree=n[
              r
            ].all, t.push(e)
          })), t.sort(u), t
        }, t.prototype.getType=function(){
          return"circular"
        }, t
      }
      (i.Base);
      t.CircularLayout=c
    }, 956401:function(e, t, n){
      var r=this&&this.__importDefault||function(e){
        return e&&e.__esModule?e:{
          default:e
        }
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      });
      var o=r(n(290244));
      t.default=function(e, t){
        if(!e.nodes||0===e.nodes.length)return e;
        var n=t.width, r=t.height, i=t.nodeMinGap, a=1e4, u=1e4;
        e.nodes.forEach((function(e){
          var t=e.size[
            0
          ]
          ||50, n=e.size[
            1
          ]
          ||50;
          a=Math.min(t, a), u=Math.min(n, u)
        }));
        var c=new o.default;
        c.init(n, r, {
          CELL_H:u, CELL_W:a
        }), e.nodes.forEach((function(e){
          var t=c.occupyNearest(e);
          t&&(t.node={
            id:e.id, size:e.size
          }, e.x=t.x, e.y=t.y, e.dx=t.dx, e.dy=t.dy)
        }));
        for(var s=0;
        s<e.nodes.length;
        s++){
          var d=e.nodes[
            s
          ], l=c.findGridByNodeId(d.id);
          if(!l)throw new Error("can not find node cell");
          var f=l.column, h=l.row;
          if(d.size[
            0
          ]
          +i>a){
            for(var v=g=Math.ceil((d.size[
              0
            ]
            +i)/a)-1, p=0;
            p<g;
            p++){
              if(!(c.additionColumn.indexOf(f+p+1)>-1)||c.cells[
                f+p+1
              ]
              [
                h
              ].node)break;
              v--
            }
            c.insertColumn(f, v)
          }
          if(d.size[
            1
          ]
          +i>u){
            var g;
            for(v=g=Math.ceil((d.size[
              1
            ]
            +i)/u)-1, p=0;
            p<g;
            p++){
              if(!(c.additionRow.indexOf(h+p+1)>-1)||c.cells[
                f
              ]
              [
                h+p+1
              ].node)break;
              v--
            }
            c.insertRow(h, v)
          }
        }
        for(s=0;
        s<c.columnNum;
        s++){
          var y=function(t){
            var n=c.cells[
              s
            ]
            [
              t
            ];
            if(n.node){
              var r=e.nodes.find((function(e){
                var t;
                return e.id===(null===(t=null==n?void 0:n.node)||void 0===t?void 0:t.id)
              }));
              r&&(r.x=n.x+r.size[
                0
              ]
              /2, r.y=n.y+r.size[
                1
              ]
              /2)
            }
          };
          for(p=0;
          p<c.rowNum;
          p++)y(p)
        }
      }
    }, 984821:function(e, t, n){
      var r=this&&this.__createBinding||(Object.create?function(e, t, n, r){
        void 0===r&&(r=n);
        var o=Object.getOwnPropertyDescriptor(t, n);
        o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={
          enumerable:!0, get:function(){
            return t[
              n
            ]
          }
        }), Object.defineProperty(e, r, o)
      }
      :function(e, t, n, r){
        void 0===r&&(r=n), e[
          r
        ]
        =t[
          n
        ]
      }), o=this&&this.__exportStar||function(e, t){
        for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t, n)||r(t, e, n)
      };
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.getLayoutByName=t.unRegisterLayout=t.registerLayout=void 0;
      var i=n(538119);
      Object.defineProperty(t, "registerLayout", {
        enumerable:!0, get:function(){
          return i.registerLayout
        }
      }), Object.defineProperty(t, "unRegisterLayout", {
        enumerable:!0, get:function(){
          return i.unRegisterLayout
        }
      }), Object.defineProperty(t, "getLayoutByName", {
        enumerable:!0, get:function(){
          return i.getLayoutByName
        }
      }), o(n(828352), t)
    }, 992727:(e, t, n)=>{
      Object.defineProperty(t, "__esModule", {
        value:!0
      }), t.forceNBody=void 0;
      var r=n(973804), o=.1;
      function i(e){
        var t=0, n=0, r=0;
        if(e.length){
          for(var o=0;
          o<4;
          o++){
            (i=e[
              o
            ])&&i.weight&&(t+=i.weight, n+=i.x*i.weight, r+=i.y*i.weight)
          }
          e.x=n/t, e.y=r/t, e.weight=t
        }
        else{
          var i=e;
          e.x=i.data.x, e.y=i.data.y, e.weight=i.data.weight
        }
      }
      t.forceNBody=function(e, t, n, a, u){
        var c=n/a, s=e.map((function(e, n){
          var r=t[
            e.id
          ], o=r.data, i=r.x, a=r.y, u=r.size, s=o.layout.force.nodeStrength;
          return{
            x:i, y:a, size:u, index:n, vx:0, vy:0, weight:c*s
          }
        })), d=(0, r.quadtree)(s, (function(e){
          return e.x
        }), (function(e){
          return e.y
        })).visitAfter(i);
        return s.forEach((function(e){
          !function(e, t){
            t.visit((function(t, n, r, i, a){
              return function(e, t, n, r, i, a){
                var u=a.x-e.x||o, c=a.y-e.y||o, s=r-t, d=u*u+c*c, l=Math.sqrt(d)*d;
                if(s*s*.81<d){
                  var f=e.weight/l;
                  return a.vx+=u*f, a.vy+=c*f, !0
                }
                if(e.length)return!1;
                if(e.data!==a){
                  f=e.data.weight/l;
                  a.vx+=u*f, a.vy+=c*f
                }
              }
              (t, n, 0, i, 0, e)
            }))
          }
          (e, d)
        })), s.map((function(n, r){
          var o=t[
            e[
              r
            ].id
          ].data.layout.force.mass, i=void 0===o?1:o;
          u[
            2*r
          ]
          =n.vx/i, u[
            2*r+1
          ]
          =n.vy/i
        })), u
      }
    }
  }
]);
