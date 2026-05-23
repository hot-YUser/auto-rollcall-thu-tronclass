(self.webpackChunklms=self.webpackChunklms||[
]).push([
  [
    72581
  ], {
    6277:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=function(t, e){
        return e?o(t):i(t)
      }, e.detectStrongConnectComponents=e.detectConnectedComponents=void 0;
      var r=n(434170), i=function(t){
        for(var e=t.nodes, n=void 0===e?[
        ]
        :e, i=t.edges, o=void 0===i?[
        ]
        :i, a=[
        ], s={
        }, u=[
        ], c=function t(e){
          u.push(e), s[
            e.id
          ]
          =!0;
          for(var i=(0, r.getNeighbors)(e.id, o), a=function(e){
            var r=i[
              e
            ];
            if(!s[
              r
            ]){
              var o=n.filter((function(t){
                return t.id===r
              }));
              o.length>0&&t(o[
                0
              ])
            }
          }, c=0;
          c<i.length;
          ++c)a(c)
        }, d=0;
        d<n.length;
        d++){
          var h=n[
            d
          ];
          if(!s[
            h.id
          ]){
            c(h);
            for(var l=[
            ];
            u.length>0;
            )l.push(u.pop());
            a.push(l)
          }
        }
        return a
      };
      e.detectConnectedComponents=i;
      var o=function(t){
        for(var e=t.nodes, n=void 0===e?[
        ]
        :e, i=t.edges, o=void 0===i?[
        ]
        :i, a=[
        ], s={
        }, u={
        }, c={
        }, d=[
        ], h=0, l=function t(e){
          u[
            e.id
          ]
          =h, c[
            e.id
          ]
          =h, h+=1, a.push(e), s[
            e.id
          ]
          =!0;
          for(var i=(0, r.getNeighbors)(e.id, o, "target").filter((function(t){
            return n.map((function(t){
              return t.id
            })).indexOf(t)>-1
          })), l=function(r){
            var o=i[
              r
            ];
            if(u[
              o
            ]
            ||0===u[
              o
            ])s[
              o
            ]
            &&(c[
              e.id
            ]
            =Math.min(c[
              e.id
            ], u[
              o
            ]));
            else{
              var a=n.filter((function(t){
                return t.id===o
              }));
              a.length>0&&t(a[
                0
              ]), c[
                e.id
              ]
              =Math.min(c[
                e.id
              ], c[
                o
              ])
            }
          }, f=0;
          f<i.length;
          f++)l(f);
          if(c[
            e.id
          ]
          ===u[
            e.id
          ]){
            for(var p=[
            ];
            a.length>0;
            ){
              var g=a.pop();
              if(s[
                g.id
              ]
              =!1, p.push(g), g===e)break
            }
            p.length>0&&d.push(p)
          }
        }, f=0, p=n;
        f<p.length;
        f++){
          var g=p[
            f
          ];
          u[
            g.id
          ]
          ||0===u[
            g.id
          ]
          ||l(g)
        }
        return d
      };
      e.detectStrongConnectComponents=o
    }, 7668:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.getPropertyWeight=e.getAllSortProperties=e.getAllProperties=e.default=void 0;
      var r=n(397465), i=function(t, e){
        void 0===t&&(t=[
        ]), void 0===e&&(e=100);
        var n={
        };
        t.forEach((function(t){
          t.properties&&Object.keys(t.properties).forEach((function(e){
            "id"===e||!"".concat(t.properties[
              e
            ]).match(r.secondReg)&&!"".concat(t.properties[
              e
            ]).match(r.dateReg)&&isNaN(Number(t.properties[
              e
            ]))?n.hasOwnProperty(e)&&delete n[
              e
            ]
            :n.hasOwnProperty(e)?n[
              e
            ]
            +=1:n[
              e
            ]
            =1
          }))
        }));
        var i=Object.keys(n).sort((function(t, e){
          return n[
            e
          ]
          -n[
            t
          ]
        }));
        return i.length<e?i:i.slice(0, e)
      };
      e.getAllSortProperties=i;
      var o=function(t, e){
        return e.map((function(e){
          return t.hasOwnProperty(e)?t[
            e
          ]
          :0
        }))
      }, a=function(t){
        for(var e=i(t), n=[
        ], r=0;
        r<t.length;
        r++)n[
          r
        ]
        =o(t[
          r
        ].properties, e);
        return n
      };
      e.getPropertyWeight=a;
      var s=function(t, e){
        void 0===e&&(e=void 0);
        var n=[
        ];
        return t.forEach((function(t){
          void 0===e&&n.push(t), void 0!==t[
            e
          ]
          &&n.push(t[
            e
          ])
        })), n
      };
      e.getAllProperties=s;
      var u={
        getAllSortProperties:i, getPropertyWeight:a, getAllProperties:s
      };
      e.default=u
    }, 91042:(t, e, n)=>{
      function r(t){
        return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.detectAllUndirectedCycle=e.detectAllDirectedCycle=e.detectAllCycles=e.default=void 0;
      var i, o=(i=n(850115))&&i.__esModule?i:{
        default:i
      }, a=function(t, e){
        if(!e&&t&&t.__esModule)return t;
        if(null===t||"object"!==r(t)&&"function"!=typeof t)return{
          default:t
        };
        var n=u(e);
        if(n&&n.has(t))return n.get(t);
        var i={
        }, o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
        for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t, a)){
          var s=o?Object.getOwnPropertyDescriptor(t, a):null;
          s&&(s.get||s.set)?Object.defineProperty(i, a, s):i[
            a
          ]
          =t[
            a
          ]
        }
        i.default=t, n&&n.set(t, i);
        return i
      }
      (n(6277)), s=n(434170);
      function u(t){
        if("function"!=typeof WeakMap)return null;
        var e=new WeakMap, n=new WeakMap;
        return(u=function(t){
          return t?n:e
        })(t)
      }
      var c=function(t, e, n){
        var r, i;
        void 0===n&&(n=!0);
        for(var o=[
        ], u=0, c=(0, a.default)(t, !1);
        u<c.length;
        u++){
          var d=c[
            u
          ];
          if(d.length)for(var h=d[
            0
          ], l=h.id, f=[
            h
          ], p=((r={
          })[
            l
          ]
          =h, r), g=((i={
          })[
            l
          ]
          =new Set, i);
          f.length>0;
          )for(var v=f.pop(), y=v.id, m=(0, s.getNeighbors)(y, t.edges), b=function(r){
            var i, a=m[
              r
            ], s=t.nodes.find((function(t){
              return t.id===a
            }));
            if(a===y)o.push(((i={
            })[
              a
            ]
            =v, i));
            else if(a in g){
              if(!g[
                y
              ].has(s)){
                for(var u=!0, c=[
                  s, v
                ], d=p[
                  y
                ];
                g[
                  a
                ].size&&!g[
                  a
                ].has(d)&&(c.push(d), d!==p[
                  d.id
                ]);
                )d=p[
                  d.id
                ];
                if(c.push(d), e&&n?(u=!1, c.findIndex((function(t){
                  return e.indexOf(t.id)>-1
                }))>-1&&(u=!0)):e&&!n&&c.findIndex((function(t){
                  return e.indexOf(t.id)>-1
                }))>-1&&(u=!1), u){
                  for(var h={
                  }, l=1;
                  l<c.length;
                  l+=1)h[
                    c[
                      l-1
                    ].id
                  ]
                  =c[
                    l
                  ];
                  c.length&&(h[
                    c[
                      c.length-1
                    ].id
                  ]
                  =c[
                    0
                  ]), o.push(h)
                }
                g[
                  a
                ].add(v)
              }
            }
            else p[
              a
            ]
            =v, f.push(s), g[
              a
            ]
            =new Set([
              v
            ])
          }, x=0;
          x<m.length;
          x+=1)b(x)
        }
        return o
      };
      e.detectAllUndirectedCycle=c;
      var d=function(t, e, n){
        void 0===n&&(n=!0);
        for(var r=[
        ], i=new Set, o=[
        ], u=[
        ], c={
        }, d={
        }, h=function t(a, s, d){
          var h=!1;
          if(e&&!1===n&&e.indexOf(a.id)>-1)return h;
          r.push(a), i.add(a);
          for(var l=d[
            a.id
          ], f=0;
          f<l.length;
          f+=1){
            if((v=c[
              l[
                f
              ]
            ])===s){
              for(var p={
              }, g=1;
              g<r.length;
              g+=1)p[
                r[
                  g-1
                ].id
              ]
              =r[
                g
              ];
              r.length&&(p[
                r[
                  r.length-1
                ].id
              ]
              =r[
                0
              ]), u.push(p), h=!0
            }
            else i.has(v)||t(v, s, d)&&(h=!0)
          }
          if(h)!function(t){
            for(var e=[
              t
            ];
            e.length>0;
            ){
              var n=e.pop();
              i.has(n)&&(i.delete(n), o[
                n.id
              ].forEach((function(t){
                e.push(t)
              })), o[
                n.id
              ].clear())
            }
          }
          (a);
          else for(f=0;
          f<l.length;
          f+=1){
            var v=c[
              l[
                f
              ]
            ];
            o[
              v.id
            ].has(a)||o[
              v.id
            ].add(a)
          }
          return r.pop(), h
        }, l=t.nodes, f=void 0===l?[
        ]
        :l, p=0;
        p<f.length;
        p+=1){
          var g=f[
            p
          ], v=g.id;
          d[
            v
          ]
          =p, c[
            p
          ]
          =g
        }
        if(e&&n){
          var y=function(t){
            var n=e[
              t
            ];
            d[
              f[
                t
              ].id
            ]
            =d[
              n
            ], d[
              n
            ]
            =0, c[
              0
            ]
            =f.find((function(t){
              return t.id===n
            })), c[
              d[
                f[
                  t
                ].id
              ]
            ]
            =f[
              t
            ]
          };
          for(p=0;
          p<e.length;
          p++)y(p)
        }
        for(var m=function(r){
          for(var i, o, a=1/0, c=0;
          c<r.length;
          c+=1)for(var h=r[
            c
          ], l=0;
          l<h.length;
          l++){
            var f=d[
              h[
                l
              ].id
            ];
            f<a&&(a=f, o=c)
          }
          var p=r[
            o
          ], g=[
          ];
          for(c=0;
          c<p.length;
          c+=1){
            var v=p[
              c
            ];
            g[
              v.id
            ]
            =[
            ];
            for(var y=0, m=(0, s.getNeighbors)(v.id, t.edges, "target").filter((function(t){
              return p.map((function(t){
                return t.id
              })).indexOf(t)>-1
            }));
            y<m.length;
            y++){
              var b=m[
                y
              ];
              b!==v.id||!1===n&&e.indexOf(v.id)>-1?g[
                v.id
              ].push(d[
                b
              ]):u.push(((i={
              })[
                v.id
              ]
              =v, i))
            }
          }
          return{
            component:p, adjList:g, minIdx:a
          }
        }, b=0;
        b<f.length;
        ){
          var x=f.filter((function(t){
            return d[
              t.id
            ]
            >=b
          })), E=(0, a.detectStrongConnectComponents)({
            nodes:x, edges:t.edges
          }).filter((function(t){
            return t.length>1
          }));
          if(0===E.length)break;
          var M=m(E), A=M.minIdx, w=M.adjList, C=M.component;
          if(!(C.length>1))break;
          C.forEach((function(t){
            o[
              t.id
            ]
            =new Set
          }));
          var L=c[
            A
          ];
          if(e&&n&&-1===e.indexOf(L.id))return u;
          h(L, L, w), b=A+1
        }
        return u
      };
      e.detectAllDirectedCycle=d;
      e.detectAllCycles=function(t, e, n, r){
        return void 0===r&&(r=!0), e?d(t, n, r):c(t, n, r)
      };
      var h=function(t){
        var e=null, n=t.nodes, r={
        }, i={
        }, a={
        }, s={
        };
        (void 0===n?[
        ]
        :n).forEach((function(t){
          i[
            t.id
          ]
          =t
        }));
        for(var u={
          enter:function(t){
            var n=t.current, o=t.previous;
            if(a[
              n
            ]){
              e={
              };
              for(var s=n, u=o;
              u!==n;
              )e[
                s
              ]
              =u, s=u, u=r[
                u
              ];
              e[
                s
              ]
              =u
            }
            else a[
              n
            ]
            =n, delete i[
              n
            ], r[
              n
            ]
            =o
          }, leave:function(t){
            var e=t.current;
            s[
              e
            ]
            =e, delete a[
              e
            ]
          }, allowTraversal:function(t){
            var n=t.next;
            return!e&&!s[
              n
            ]
          }
        };
        Object.keys(i).length;
        ){
          var c=Object.keys(i)[
            0
          ];
          (0, o.default)(t, c, u)
        }
        return e
      };
      e.default=h
    }, 107304:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r=n(331635), i=n(224425), o=n(434170), a=function(t, e, n, r){
        var i=t.nodes, a=void 0===i?[
        ]
        :i, u=t.edges, c=void 0===u?[
        ]
        :u, d=[
        ], h={
        }, l={
        }, f={
        };
        a.forEach((function(t, n){
          var r=t.id;
          d.push(r), l[
            r
          ]
          =1/0, r===e&&(l[
            r
          ]
          =0)
        }));
        for(var p=a.length, g=function(t){
          var e=function(t, e, n){
            for(var r, i=1/0, o=0;
            o<e.length;
            o++){
              var a=e[
                o
              ].id;
              !n[
                a
              ]
              &&t[
                a
              ]
              <=i&&(i=t[
                a
              ], r=e[
                o
              ])
            }
            return r
          }
          (l, a, h), i=e.id;
          if(h[
            i
          ]
          =!0, l[
            i
          ]
          ===1/0)return"continue";
          (n?(0, o.getOutEdgesNodeId)(i, c):(0, o.getEdgesByNodeId)(i, c)).forEach((function(t){
            var n=t.target, o=t.source, a=n===i?o:n, s=r&&t[
              r
            ]
            ?t[
              r
            ]
            :1;
            l[
              a
            ]
            >l[
              e.id
            ]
            +s?(l[
              a
            ]
            =l[
              e.id
            ]
            +s, f[
              a
            ]
            =[
              e.id
            ]):l[
              a
            ]
            ===l[
              e.id
            ]
            +s&&f[
              a
            ].push(e.id)
          }))
        }, v=0;
        v<p;
        v++)g();
        f[
          e
        ]
        =[
          e
        ];
        var y={
        };
        for(var m in l)l[
          m
        ]
        !==1/0&&s(e, m, f, y);
        var b={
        };
        for(var m in y)b[
          m
        ]
        =y[
          m
        ]
        [
          0
        ];
        return{
          length:l, path:b, allPath:y
        }
      };
      function s(t, e, n, o){
        if(t===e)return[
          t
        ];
        if(o[
          e
        ])return o[
          e
        ];
        for(var a=[
        ], u=0, c=n[
          e
        ];
        u<c.length;
        u++){
          var d=s(t, c[
            u
          ], n, o);
          if(!d)return;
          for(var h=0, l=d;
          h<l.length;
          h++){
            var f=l[
              h
            ];
            (0, i.isArray)(f)?a.push((0, r.__spreadArray)((0, r.__spreadArray)([
            ], f, !0), [
              e
            ], !1)):a.push([
              f, e
            ])
          }
        }
        return o[
          e
        ]
        =a, o[
          e
        ]
      }
      e.default=a
    }, 137436:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.pageRankAsync=e.minimumSpanningTreeAsync=e.louvainAsync=e.labelPropagationAsync=e.getOutDegreeAsync=e.getNeighborsAsync=e.getInDegreeAsync=e.getDegreeAsync=e.getAdjMatrixAsync=e.floydWarshallAsync=e.findShortestPathAsync=e.findAllPathAsync=e.dijkstraAsync=e.detectCycleAsync=e.detectAllUndirectedCycleAsync=e.detectAllDirectedCycleAsync=e.detectAllCyclesAsync=e.connectedComponentAsync=e.GADDIAsync=void 0;
      var r, i=(r=n(330248))&&r.__esModule?r:{
        default:r
      }, o=n(922274);
      e.getAdjMatrixAsync=function(t, e){
        return(0, i.default)(o.ALGORITHM.getAdjMatrix).apply(void 0, [
          t, e
        ])
      };
      e.connectedComponentAsync=function(t, e){
        return(0, i.default)(o.ALGORITHM.connectedComponent).apply(void 0, [
          t, e
        ])
      };
      e.getDegreeAsync=function(t){
        return(0, i.default)(o.ALGORITHM.getDegree)(t)
      };
      e.getInDegreeAsync=function(t, e){
        return(0, i.default)(o.ALGORITHM.getInDegree)(t, e)
      };
      e.getOutDegreeAsync=function(t, e){
        return(0, i.default)(o.ALGORITHM.getOutDegree)(t, e)
      };
      e.detectCycleAsync=function(t){
        return(0, i.default)(o.ALGORITHM.detectCycle)(t)
      };
      e.detectAllCyclesAsync=function(t){
        return(0, i.default)(o.ALGORITHM.detectAllCycles)(t)
      };
      e.detectAllDirectedCycleAsync=function(t){
        return(0, i.default)(o.ALGORITHM.detectAllDirectedCycle)(t)
      };
      e.detectAllUndirectedCycleAsync=function(t){
        return(0, i.default)(o.ALGORITHM.detectAllUndirectedCycle)(t)
      };
      e.dijkstraAsync=function(t, e, n, r){
        return(0, i.default)(o.ALGORITHM.dijkstra).apply(void 0, [
          t, e, n, r
        ])
      };
      e.findAllPathAsync=function(t, e, n, r){
        return(0, i.default)(o.ALGORITHM.findAllPath).apply(void 0, [
          t, e, n, r
        ])
      };
      e.findShortestPathAsync=function(t, e, n, r, a){
        return(0, i.default)(o.ALGORITHM.findShortestPath).apply(void 0, [
          t, e, n, r, a
        ])
      };
      e.floydWarshallAsync=function(t, e){
        return(0, i.default)(o.ALGORITHM.floydWarshall).apply(void 0, [
          t, e
        ])
      };
      e.labelPropagationAsync=function(t, e, n, r){
        return void 0===r&&(r=1e3), (0, i.default)(o.ALGORITHM.labelPropagation)(t, e, n, r)
      };
      e.louvainAsync=function(t, e, n, r){
        return(0, i.default)(o.ALGORITHM.louvain)(t, e, n, r)
      };
      e.minimumSpanningTreeAsync=function(t, e, n){
        return(0, i.default)(o.ALGORITHM.minimumSpanningTree).apply(void 0, [
          t, e, n
        ])
      };
      e.pageRankAsync=function(t, e, n){
        return(0, i.default)(o.ALGORITHM.pageRank).apply(void 0, [
          t, e, n
        ])
      };
      e.getNeighborsAsync=function(t, e, n){
        return(0, i.default)(o.ALGORITHM.getNeighbors).apply(void 0, [
          t, e, n
        ])
      };
      e.GADDIAsync=function(t, e, n, r, a, s, u){
        return void 0===n&&(n=!1), void 0===s&&(s="cluster"), void 0===u&&(u="cluster"), (0, i.default)(o.ALGORITHM.GADDI).apply(void 0, [
          t, e, n, r, a, s, u
        ])
      }
    }, 146212:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var n=function(){
        function t(t){
          this.count=t.length, this.parent={
          };
          for(var e=0, n=t;
          e<n.length;
          e++){
            var r=n[
              e
            ];
            this.parent[
              r
            ]
            =r
          }
        }
        return t.prototype.find=function(t){
          for(;
          this.parent[
            t
          ]
          !==t;
          )t=this.parent[
            t
          ];
          return t
        }, t.prototype.union=function(t, e){
          var n=this.find(t), r=this.find(e);
          n!==r&&(n<r?(this.parent[
            e
          ]
          !==e&&this.union(this.parent[
            e
          ], t), this.parent[
            e
          ]
          =this.parent[
            t
          ]):(this.parent[
            t
          ]
          !==t&&this.union(this.parent[
            t
          ], e), this.parent[
            t
          ]
          =this.parent[
            e
          ]))
        }, t.prototype.connected=function(t, e){
          return this.find(t)===this.find(e)
        }, t
      }
      ();
      e.default=n
    }, 242378:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.getOutDegree=e.getInDegree=e.default=void 0;
      var n=function(t){
        var e={
        }, n=t.nodes, r=void 0===n?[
        ]
        :n, i=t.edges, o=void 0===i?[
        ]
        :i;
        return r.forEach((function(t){
          e[
            t.id
          ]
          ={
            degree:0, inDegree:0, outDegree:0
          }
        })), o.forEach((function(t){
          e[
            t.source
          ].degree++, e[
            t.source
          ].outDegree++, e[
            t.target
          ].degree++, e[
            t.target
          ].inDegree++
        })), e
      }, r=n;
      e.default=r;
      e.getInDegree=function(t, e){
        return n(t)[
          e
        ]
        ?n(t)[
          e
        ].inDegree:0
      };
      e.getOutDegree=function(t, e){
        return n(t)[
          e
        ]
        ?n(t)[
          e
        ].outDegree:0
      }
    }, 248441:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r, i=(r=n(252014))&&r.__esModule?r:{
        default:r
      }, o=n(434170);
      var a=function(t, e, n, r){
        void 0===r&&(r=!0);
        var a=function(t){
          void 0===t&&(t={
          });
          var e, n=t, r=function(){
          }, i=(e={
          }, function(t){
            var n=t.next;
            return!e[
              n
            ]
            &&(e[
              n
            ]
            =!0, !0)
          });
          return n.allowTraversal=t.allowTraversal||i, n.enter=t.enter||r, n.leave=t.leave||r, n
        }
        (n), s=new i.default, u=t.edges, c=void 0===u?[
        ]
        :u;
        s.enqueue(e);
        for(var d="", h=function(){
          var t=s.dequeue();
          a.enter({
            current:t, previous:d
          }), (0, o.getNeighbors)(t, c, r?"target":void 0).forEach((function(e){
            a.allowTraversal({
              previous:d, current:t, next:e
            })&&s.enqueue(e)
          })), a.leave({
            current:t, previous:d
          }), d=t
        };
        !s.isEmpty();
        )h()
      };
      e.default=a
    }, 252014:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r, i=(r=n(792041))&&r.__esModule?r:{
        default:r
      };
      var o=function(){
        function t(){
          this.linkedList=new i.default
        }
        return t.prototype.isEmpty=function(){
          return!this.linkedList.head
        }, t.prototype.peek=function(){
          return this.linkedList.head?this.linkedList.head.value:null
        }, t.prototype.enqueue=function(t){
          this.linkedList.append(t)
        }, t.prototype.dequeue=function(){
          var t=this.linkedList.deleteHead();
          return t?t.value:null
        }, t.prototype.toString=function(t){
          return this.linkedList.toString(t)
        }, t
      }
      ();
      e.default=o
    }, 313302:(t, e, n)=>{
      n.d(e, {
        A:()=>r
      });
      const r=function(){
        function t(){
          this._events={
          }
        }
        return t.prototype.on=function(t, e, n){
          return this._events[
            t
          ]
          ||(this._events[
            t
          ]
          =[
          ]), this._events[
            t
          ].push({
            callback:e, once:!!n
          }), this
        }, t.prototype.once=function(t, e){
          return this.on(t, e, !0)
        }, t.prototype.emit=function(t){
          for(var e=this, n=[
          ], r=1;
          r<arguments.length;
          r++)n[
            r-1
          ]
          =arguments[
            r
          ];
          var i=this._events[
            t
          ]
          ||[
          ], o=this._events[
            "*"
          ]
          ||[
          ], a=function(r){
            for(var i=r.length, o=0;
            o<i;
            o++)if(r[
              o
            ]){
              var a=r[
                o
              ], s=a.callback;
              a.once&&(r.splice(o, 1), 0===r.length&&delete e._events[
                t
              ], i--, o--), s.apply(e, n)
            }
          };
          a(i), a(o)
        }, t.prototype.off=function(t, e){
          if(t)if(e){
            for(var n=this._events[
              t
            ]
            ||[
            ], r=n.length, i=0;
            i<r;
            i++)n[
              i
            ].callback===e&&(n.splice(i, 1), r--, i--);
            0===n.length&&delete this._events[
              t
            ]
          }
          else delete this._events[
            t
          ];
          else this._events={
          };
          return this
        }, t.prototype.getEvents=function(){
          return this._events
        }, t
      }
      ()
    }, 318050:(t, e, n)=>{
      n.r(e), n.d(e, {
        GADDI:()=>bt, Stack:()=>Et, breadthFirstSearch:()=>h, connectedComponent:()=>f, cosineSimilarity:()=>U, default:()=>At, depthFirstSearch:()=>b, detectAllCycles:()=>M, detectAllDirectedCycle:()=>E, detectAllUndirectedCycle:()=>x, detectCycle:()=>A, detectDirectedCycle:()=>Mt, dijkstra:()=>L, findAllPath:()=>P, findShortestPath:()=>k, floydWarshall:()=>N, getAdjMatrix:()=>r, getDegree:()=>g, getInDegree:()=>v, getNeighbors:()=>u, getOutDegree:()=>y, iLouvain:()=>X, kCore:()=>Y, kMeans:()=>H, labelPropagation:()=>I, louvain:()=>q, minimumSpanningTree:()=>K, nodesCosineSimilarity:()=>V, pageRank:()=>J
      });
      const r=function(t, e){
        var n=t.nodes, r=t.edges, i=[
        ], o={
        };
        if(!n)throw new Error("invalid nodes data!");
        return n&&n.forEach((function(t, e){
          o[
            t.id
          ]
          =e;
          i.push([
          ])
        })), r&&r.forEach((function(t){
          var n=t.source, r=t.target, a=o[
            n
          ], s=o[
            r
          ];
          !a&&0!==a||!s&&0!==s||(i[
            a
          ]
          [
            s
          ]
          =1, e||(i[
            s
          ]
          [
            a
          ]
          =1))
        })), i
      };
      var i=function(t, e){
        return t===e
      }, o=function(){
        function t(t, e){
          void 0===e&&(e=null), this.value=t, this.next=e
        }
        return t.prototype.toString=function(t){
          return t?t(this.value):"".concat(this.value)
        }, t
      }
      ();
      const a=function(){
        function t(t){
          void 0===t&&(t=i), this.head=null, this.tail=null, this.compare=t
        }
        return t.prototype.prepend=function(t){
          var e=new o(t, this.head);
          return this.head=e, this.tail||(this.tail=e), this
        }, t.prototype.append=function(t){
          var e=new o(t);
          return this.head?(this.tail.next=e, this.tail=e, this):(this.head=e, this.tail=e, this)
        }, t.prototype.delete=function(t){
          if(!this.head)return null;
          for(var e=null;
          this.head&&this.compare(this.head.value, t);
          )e=this.head, this.head=this.head.next;
          var n=this.head;
          if(null!==n)for(;
          n.next;
          )this.compare(n.next.value, t)?(e=n.next, n.next=n.next.next):n=n.next;
          return this.compare(this.tail.value, t)&&(this.tail=n), e
        }, t.prototype.find=function(t){
          var e=t.value, n=void 0===e?void 0:e, r=t.callback, i=void 0===r?void 0:r;
          if(!this.head)return null;
          for(var o=this.head;
          o;
          ){
            if(i&&i(o.value))return o;
            if(void 0!==n&&this.compare(o.value, n))return o;
            o=o.next
          }
          return null
        }, t.prototype.deleteTail=function(){
          var t=this.tail;
          if(this.head===this.tail)return this.head=null, this.tail=null, t;
          for(var e=this.head;
          e.next;
          )e.next.next?e=e.next:e.next=null;
          return this.tail=e, t
        }, t.prototype.deleteHead=function(){
          if(!this.head)return null;
          var t=this.head;
          return this.head.next?this.head=this.head.next:(this.head=null, this.tail=null), t
        }, t.prototype.fromArray=function(t){
          var e=this;
          return t.forEach((function(t){
            return e.append(t)
          })), this
        }, t.prototype.toArray=function(){
          for(var t=[
          ], e=this.head;
          e;
          )t.push(e), e=e.next;
          return t
        }, t.prototype.reverse=function(){
          for(var t=this.head, e=null, n=null;
          t;
          )n=t.next, t.next=e, e=t, t=n;
          this.tail=this.head, this.head=e
        }, t.prototype.toString=function(t){
          return void 0===t&&(t=void 0), this.toArray().map((function(e){
            return e.toString(t)
          })).toString()
        }, t
      }
      ();
      const s=function(){
        function t(){
          this.linkedList=new a
        }
        return t.prototype.isEmpty=function(){
          return!this.linkedList.head
        }, t.prototype.peek=function(){
          return this.linkedList.head?this.linkedList.head.value:null
        }, t.prototype.enqueue=function(t){
          this.linkedList.append(t)
        }, t.prototype.dequeue=function(){
          var t=this.linkedList.deleteHead();
          return t?t.value:null
        }, t.prototype.toString=function(t){
          return this.linkedList.toString(t)
        }, t
      }
      ();
      var u=function(t, e, n){
        void 0===e&&(e=[
        ]);
        var r=e.filter((function(e){
          return e.source===t||e.target===t
        }));
        if("target"===n){
          return r.filter((function(e){
            return e.source===t
          })).map((function(t){
            return t.target
          }))
        }
        if("source"===n){
          return r.filter((function(e){
            return e.target===t
          })).map((function(t){
            return t.source
          }))
        }
        return r.map((function(e){
          return e.source===t?e.target:e.source
        }))
      }, c=function(t, e){
        return e.filter((function(e){
          return e.source===t||e.target===t
        }))
      }, d=function(t){
        void 0===t&&(t=0);
        var e="".concat(Math.random()).split(".")[
          1
        ].substr(0, 5), n="".concat(Math.random()).split(".")[
          1
        ].substr(0, 5);
        return"".concat(t, "-").concat(e).concat(n)
      };
      const h=function(t, e, n, r){
        void 0===r&&(r=!0);
        var i=function(t){
          void 0===t&&(t={
          });
          var e, n=t, r=function(){
          }, i=(e={
          }, function(t){
            var n=t.next;
            return!e[
              n
            ]
            &&(e[
              n
            ]
            =!0, !0)
          });
          return n.allowTraversal=t.allowTraversal||i, n.enter=t.enter||r, n.leave=t.leave||r, n
        }
        (n), o=new s, a=t.edges, c=void 0===a?[
        ]
        :a;
        o.enqueue(e);
        for(var d="", h=function(){
          var t=o.dequeue();
          i.enter({
            current:t, previous:d
          }), u(t, c, r?"target":void 0).forEach((function(e){
            i.allowTraversal({
              previous:d, current:t, next:e
            })&&o.enqueue(e)
          })), i.leave({
            current:t, previous:d
          }), d=t
        };
        !o.isEmpty();
        )h()
      };
      var l=function(t){
        for(var e=t.nodes, n=void 0===e?[
        ]
        :e, r=t.edges, i=void 0===r?[
        ]
        :r, o=[
        ], a={
        }, s={
        }, c={
        }, d=[
        ], h=0, l=function t(e){
          s[
            e.id
          ]
          =h, c[
            e.id
          ]
          =h, h+=1, o.push(e), a[
            e.id
          ]
          =!0;
          for(var r=u(e.id, i, "target").filter((function(t){
            return n.map((function(t){
              return t.id
            })).indexOf(t)>-1
          })), l=function(i){
            var o=r[
              i
            ];
            if(s[
              o
            ]
            ||0===s[
              o
            ])a[
              o
            ]
            &&(c[
              e.id
            ]
            =Math.min(c[
              e.id
            ], s[
              o
            ]));
            else{
              var u=n.filter((function(t){
                return t.id===o
              }));
              u.length>0&&t(u[
                0
              ]), c[
                e.id
              ]
              =Math.min(c[
                e.id
              ], c[
                o
              ])
            }
          }, f=0;
          f<r.length;
          f++)l(f);
          if(c[
            e.id
          ]
          ===s[
            e.id
          ]){
            for(var p=[
            ];
            o.length>0;
            ){
              var g=o.pop();
              if(a[
                g.id
              ]
              =!1, p.push(g), g===e)break
            }
            p.length>0&&d.push(p)
          }
        }, f=0, p=n;
        f<p.length;
        f++){
          var g=p[
            f
          ];
          s[
            g.id
          ]
          ||0===s[
            g.id
          ]
          ||l(g)
        }
        return d
      };
      function f(t, e){
        return e?l(t):function(t){
          for(var e=t.nodes, n=void 0===e?[
          ]
          :e, r=t.edges, i=void 0===r?[
          ]
          :r, o=[
          ], a={
          }, s=[
          ], c=function t(e){
            s.push(e), a[
              e.id
            ]
            =!0;
            for(var r=u(e.id, i), o=function(e){
              var i=r[
                e
              ];
              if(!a[
                i
              ]){
                var o=n.filter((function(t){
                  return t.id===i
                }));
                o.length>0&&t(o[
                  0
                ])
              }
            }, c=0;
            c<r.length;
            ++c)o(c)
          }, d=0;
          d<n.length;
          d++){
            var h=n[
              d
            ];
            if(!a[
              h.id
            ]){
              c(h);
              for(var l=[
              ];
              s.length>0;
              )l.push(s.pop());
              o.push(l)
            }
          }
          return o
        }
        (t)
      }
      var p=function(t){
        var e={
        }, n=t.nodes, r=void 0===n?[
        ]
        :n, i=t.edges, o=void 0===i?[
        ]
        :i;
        return r.forEach((function(t){
          e[
            t.id
          ]
          ={
            degree:0, inDegree:0, outDegree:0
          }
        })), o.forEach((function(t){
          e[
            t.source
          ].degree++, e[
            t.source
          ].outDegree++, e[
            t.target
          ].degree++, e[
            t.target
          ].inDegree++
        })), e
      };
      const g=p;
      var v=function(t, e){
        return p(t)[
          e
        ]
        ?p(t)[
          e
        ].inDegree:0
      }, y=function(t, e){
        return p(t)[
          e
        ]
        ?p(t)[
          e
        ].outDegree:0
      };
      function m(t, e, n, r, i){
        void 0===i&&(i=!0), r.enter({
          current:e, previous:n
        });
        var o=t.edges;
        u(e, void 0===o?[
        ]
        :o, i?"target":void 0).forEach((function(o){
          r.allowTraversal({
            previous:n, current:e, next:o
          })&&m(t, o, e, r, i)
        })), r.leave({
          current:e, previous:n
        })
      }
      function b(t, e, n, r){
        void 0===r&&(r=!0), m(t, e, "", function(t){
          void 0===t&&(t={
          });
          var e, n=t, r=function(){
          }, i=(e={
          }, function(t){
            var n=t.next;
            return!e[
              n
            ]
            &&(e[
              n
            ]
            =!0, !0)
          });
          return n.allowTraversal=t.allowTraversal||i, n.enter=t.enter||r, n.leave=t.leave||r, n
        }
        (n), r)
      }
      var x=function(t, e, n){
        var r, i;
        void 0===n&&(n=!0);
        for(var o=[
        ], a=0, s=f(t, !1);
        a<s.length;
        a++){
          var c=s[
            a
          ];
          if(c.length)for(var d=c[
            0
          ], h=d.id, l=[
            d
          ], p=((r={
          })[
            h
          ]
          =d, r), g=((i={
          })[
            h
          ]
          =new Set, i);
          l.length>0;
          )for(var v=l.pop(), y=v.id, m=u(y, t.edges), b=function(r){
            var i, a=m[
              r
            ], s=t.nodes.find((function(t){
              return t.id===a
            }));
            if(a===y)o.push(((i={
            })[
              a
            ]
            =v, i));
            else if(a in g){
              if(!g[
                y
              ].has(s)){
                for(var u=!0, c=[
                  s, v
                ], d=p[
                  y
                ];
                g[
                  a
                ].size&&!g[
                  a
                ].has(d)&&(c.push(d), d!==p[
                  d.id
                ]);
                )d=p[
                  d.id
                ];
                if(c.push(d), e&&n?(u=!1, c.findIndex((function(t){
                  return e.indexOf(t.id)>-1
                }))>-1&&(u=!0)):e&&!n&&c.findIndex((function(t){
                  return e.indexOf(t.id)>-1
                }))>-1&&(u=!1), u){
                  for(var h={
                  }, f=1;
                  f<c.length;
                  f+=1)h[
                    c[
                      f-1
                    ].id
                  ]
                  =c[
                    f
                  ];
                  c.length&&(h[
                    c[
                      c.length-1
                    ].id
                  ]
                  =c[
                    0
                  ]), o.push(h)
                }
                g[
                  a
                ].add(v)
              }
            }
            else p[
              a
            ]
            =v, l.push(s), g[
              a
            ]
            =new Set([
              v
            ])
          }, x=0;
          x<m.length;
          x+=1)b(x)
        }
        return o
      }, E=function(t, e, n){
        void 0===n&&(n=!0);
        for(var r=[
        ], i=new Set, o=[
        ], a=[
        ], s={
        }, c={
        }, d=function t(u, c, d){
          var h=!1;
          if(e&&!1===n&&e.indexOf(u.id)>-1)return h;
          r.push(u), i.add(u);
          for(var l=d[
            u.id
          ], f=0;
          f<l.length;
          f+=1){
            if((v=s[
              l[
                f
              ]
            ])===c){
              for(var p={
              }, g=1;
              g<r.length;
              g+=1)p[
                r[
                  g-1
                ].id
              ]
              =r[
                g
              ];
              r.length&&(p[
                r[
                  r.length-1
                ].id
              ]
              =r[
                0
              ]), a.push(p), h=!0
            }
            else i.has(v)||t(v, c, d)&&(h=!0)
          }
          if(h)!function(t){
            for(var e=[
              t
            ];
            e.length>0;
            ){
              var n=e.pop();
              i.has(n)&&(i.delete(n), o[
                n.id
              ].forEach((function(t){
                e.push(t)
              })), o[
                n.id
              ].clear())
            }
          }
          (u);
          else for(f=0;
          f<l.length;
          f+=1){
            var v=s[
              l[
                f
              ]
            ];
            o[
              v.id
            ].has(u)||o[
              v.id
            ].add(u)
          }
          return r.pop(), h
        }, h=t.nodes, f=void 0===h?[
        ]
        :h, p=0;
        p<f.length;
        p+=1){
          var g=f[
            p
          ], v=g.id;
          c[
            v
          ]
          =p, s[
            p
          ]
          =g
        }
        if(e&&n){
          var y=function(t){
            var n=e[
              t
            ];
            c[
              f[
                t
              ].id
            ]
            =c[
              n
            ], c[
              n
            ]
            =0, s[
              0
            ]
            =f.find((function(t){
              return t.id===n
            })), s[
              c[
                f[
                  t
                ].id
              ]
            ]
            =f[
              t
            ]
          };
          for(p=0;
          p<e.length;
          p++)y(p)
        }
        for(var m=function(r){
          for(var i, o, s=1/0, d=0;
          d<r.length;
          d+=1)for(var h=r[
            d
          ], l=0;
          l<h.length;
          l++){
            var f=c[
              h[
                l
              ].id
            ];
            f<s&&(s=f, o=d)
          }
          var p=r[
            o
          ], g=[
          ];
          for(d=0;
          d<p.length;
          d+=1){
            var v=p[
              d
            ];
            g[
              v.id
            ]
            =[
            ];
            for(var y=0, m=u(v.id, t.edges, "target").filter((function(t){
              return p.map((function(t){
                return t.id
              })).indexOf(t)>-1
            }));
            y<m.length;
            y++){
              var b=m[
                y
              ];
              b!==v.id||!1===n&&e.indexOf(v.id)>-1?g[
                v.id
              ].push(c[
                b
              ]):a.push(((i={
              })[
                v.id
              ]
              =v, i))
            }
          }
          return{
            component:p, adjList:g, minIdx:s
          }
        }, b=0;
        b<f.length;
        ){
          var x=f.filter((function(t){
            return c[
              t.id
            ]
            >=b
          })), E=l({
            nodes:x, edges:t.edges
          }).filter((function(t){
            return t.length>1
          }));
          if(0===E.length)break;
          var M=m(E), A=M.minIdx, w=M.adjList, C=M.component;
          if(!(C.length>1))break;
          C.forEach((function(t){
            o[
              t.id
            ]
            =new Set
          }));
          var L=s[
            A
          ];
          if(e&&n&&-1===e.indexOf(L.id))return a;
          d(L, L, w), b=A+1
        }
        return a
      }, M=function(t, e, n, r){
        return void 0===r&&(r=!0), e?E(t, n, r):x(t, n, r)
      };
      const A=function(t){
        var e=null, n=t.nodes, r={
        }, i={
        }, o={
        }, a={
        };
        (void 0===n?[
        ]
        :n).forEach((function(t){
          i[
            t.id
          ]
          =t
        }));
        for(var s={
          enter:function(t){
            var n=t.current, a=t.previous;
            if(o[
              n
            ]){
              e={
              };
              for(var s=n, u=a;
              u!==n;
              )e[
                s
              ]
              =u, s=u, u=r[
                u
              ];
              e[
                s
              ]
              =u
            }
            else o[
              n
            ]
            =n, delete i[
              n
            ], r[
              n
            ]
            =a
          }, leave:function(t){
            var e=t.current;
            a[
              e
            ]
            =e, delete o[
              e
            ]
          }, allowTraversal:function(t){
            var n=t.next;
            return!e&&!a[
              n
            ]
          }
        };
        Object.keys(i).length;
        ){
          b(t, Object.keys(i)[
            0
          ], s)
        }
        return e
      };
      var w=n(331635), C=n(224425);
      const L=function(t, e, n, r){
        var i=t.nodes, o=void 0===i?[
        ]
        :i, a=t.edges, s=void 0===a?[
        ]
        :a, u=[
        ], d={
        }, h={
        }, l={
        };
        o.forEach((function(t, n){
          var r=t.id;
          u.push(r), h[
            r
          ]
          =1/0, r===e&&(h[
            r
          ]
          =0)
        }));
        for(var f=o.length, p=function(t){
          var e=function(t, e, n){
            for(var r, i=1/0, o=0;
            o<e.length;
            o++){
              var a=e[
                o
              ].id;
              !n[
                a
              ]
              &&t[
                a
              ]
              <=i&&(i=t[
                a
              ], r=e[
                o
              ])
            }
            return r
          }
          (h, o, d), i=e.id;
          if(d[
            i
          ]
          =!0, h[
            i
          ]
          ===1/0)return"continue";
          (n?function(t, e){
            return e.filter((function(e){
              return e.source===t
            }))
          }
          (i, s):c(i, s)).forEach((function(t){
            var n=t.target, o=t.source, a=n===i?o:n, s=r&&t[
              r
            ]
            ?t[
              r
            ]
            :1;
            h[
              a
            ]
            >h[
              e.id
            ]
            +s?(h[
              a
            ]
            =h[
              e.id
            ]
            +s, l[
              a
            ]
            =[
              e.id
            ]):h[
              a
            ]
            ===h[
              e.id
            ]
            +s&&l[
              a
            ].push(e.id)
          }))
        }, g=0;
        g<f;
        g++)p();
        l[
          e
        ]
        =[
          e
        ];
        var v={
        };
        for(var y in h)h[
          y
        ]
        !==1/0&&_(e, y, l, v);
        var m={
        };
        for(var y in v)m[
          y
        ]
        =v[
          y
        ]
        [
          0
        ];
        return{
          length:h, path:m, allPath:v
        }
      };
      function _(t, e, n, r){
        if(t===e)return[
          t
        ];
        if(r[
          e
        ])return r[
          e
        ];
        for(var i=[
        ], o=0, a=n[
          e
        ];
        o<a.length;
        o++){
          var s=_(t, a[
            o
          ], n, r);
          if(!s)return;
          for(var u=0, c=s;
          u<c.length;
          u++){
            var d=c[
              u
            ];
            (0, C.isArray)(d)?i.push((0, w.__spreadArray)((0, w.__spreadArray)([
            ], d, !0), [
              e
            ], !1)):i.push([
              d, e
            ])
          }
        }
        return r[
          e
        ]
        =i, r[
          e
        ]
      }
      var k=function(t, e, n, r, i){
        var o=L(t, e, r, i), a=o.length, s=o.path, u=o.allPath;
        return{
          length:a[
            n
          ], path:s[
            n
          ], allPath:u[
            n
          ]
        }
      }, P=function(t, e, n, r){
        var i;
        if(e===n)return[
          [
            e
          ]
        ];
        var o=t.edges, a=void 0===o?[
        ]
        :o, s=[
          e
        ], c=((i={
        })[
          e
        ]
        =!0, i), d=[
        ], h=[
        ], l=r?u(e, a, "target"):u(e, a);
        for(d.push(l);
        s.length>0&&d.length>0;
        ){
          var f=d[
            d.length-1
          ];
          if(f.length){
            var p=f.shift();
            if(p&&(s.push(p), c[
              p
            ]
            =!0, l=r?u(p, a, "target"):u(p, a), d.push(l.filter((function(t){
              return!c[
                t
              ]
            })))), s[
              s.length-1
            ]
            ===n){
              var g=s.map((function(t){
                return t
              }));
              h.push(g);
              v=s.pop();
              c[
                v
              ]
              =!1, d.pop()
            }
          }
          else{
            var v=s.pop();
            c[
              v
            ]
            =!1, d.pop()
          }
        }
        return h
      };
      const N=function(t, e){
        for(var n=r(t, e), i=[
        ], o=n.length, a=0;
        a<o;
        a+=1){
          i[
            a
          ]
          =[
          ];
          for(var s=0;
          s<o;
          s+=1)a===s?i[
            a
          ]
          [
            s
          ]
          =0:0!==n[
            a
          ]
          [
            s
          ]
          &&n[
            a
          ]
          [
            s
          ]
          ?i[
            a
          ]
          [
            s
          ]
          =n[
            a
          ]
          [
            s
          ]
          :i[
            a
          ]
          [
            s
          ]
          =1/0
        }
        for(var u=0;
        u<o;
        u+=1)for(a=0;
        a<o;
        a+=1)for(s=0;
        s<o;
        s+=1)i[
          a
        ]
        [
          s
        ]
        >i[
          a
        ]
        [
          u
        ]
        +i[
          u
        ]
        [
          s
        ]
        &&(i[
          a
        ]
        [
          s
        ]
        =i[
          a
        ]
        [
          u
        ]
        +i[
          u
        ]
        [
          s
        ]);
        return i
      };
      const I=function(t, e, n, i){
        void 0===e&&(e=!1), void 0===n&&(n="weight"), void 0===i&&(i=1e3);
        var o=t.nodes, a=void 0===o?[
        ]
        :o, s=t.edges, u=void 0===s?[
        ]
        :s, c={
        }, h={
        };
        a.forEach((function(t, e){
          var n=d();
          t.clusterId=n, c[
            n
          ]
          ={
            id:n, nodes:[
              t
            ]
          }, h[
            t.id
          ]
          ={
            node:t, idx:e
          }
        }));
        var l=r(t, e), f=[
        ], p={
        };
        l.forEach((function(t, e){
          var n=0, r=a[
            e
          ].id;
          p[
            r
          ]
          ={
          }, t.forEach((function(t, e){
            if(t){
              n+=t;
              var i=a[
                e
              ].id;
              p[
                r
              ]
              [
                i
              ]
              =t
            }
          })), f.push(n)
        }));
        for(var g=0, v=function(){
          var t=!1;
          if(a.forEach((function(e){
            var n={
            };
            Object.keys(p[
              e.id
            ]).forEach((function(t){
              var r=p[
                e.id
              ]
              [
                t
              ], i=h[
                t
              ].node.clusterId;
              n[
                i
              ]
              ||(n[
                i
              ]
              =0), n[
                i
              ]
              +=r
            }));
            var r=-1/0, i=[
            ];
            if(Object.keys(n).forEach((function(t){
              r<n[
                t
              ]
              ?(r=n[
                t
              ], i=[
                t
              ]):r===n[
                t
              ]
              &&i.push(t)
            })), 1!==i.length||i[
              0
            ]
            !==e.clusterId){
              var o=i.indexOf(e.clusterId);
              if(o>=0&&i.splice(o, 1), i&&i.length){
                t=!0;
                var a=c[
                  e.clusterId
                ], s=a.nodes.indexOf(e);
                a.nodes.splice(s, 1);
                var u=Math.floor(Math.random()*i.length), d=c[
                  i[
                    u
                  ]
                ];
                d.nodes.push(e), e.clusterId=d.id
              }
            }
          })), !t)return"break";
          g++
        };
        g<i;
        ){
          if("break"===v())break
        }
        Object.keys(c).forEach((function(t){
          var e=c[
            t
          ];
          e.nodes&&e.nodes.length||delete c[
            t
          ]
        }));
        var y=[
        ], m={
        };
        u.forEach((function(t){
          var e=t.source, r=t.target, i=t[
            n
          ]
          ||1, o=h[
            e
          ].node.clusterId, a=h[
            r
          ].node.clusterId, s="".concat(o, "---").concat(a);
          if(m[
            s
          ])m[
            s
          ].weight+=i, m[
            s
          ].count++;
          else{
            var u={
              source:o, target:a, weight:i, count:1
            };
            m[
              s
            ]
            =u, y.push(u)
          }
        }));
        var b=[
        ];
        return Object.keys(c).forEach((function(t){
          b.push(c[
            t
          ])
        })), {
          clusters:b, clusterEdges:y
        }
      };
      const S=function(){
        function t(t){
          this.arr=t
        }
        return t.prototype.getArr=function(){
          return this.arr||[
          ]
        }, t.prototype.add=function(e){
          var n, r=e.arr;
          if(!(null===(n=this.arr)||void 0===n?void 0:n.length))return new t(r);
          if(!(null==r?void 0:r.length))return new t(this.arr);
          if(this.arr.length===r.length){
            var i=[
            ];
            for(var o in this.arr)i[
              o
            ]
            =this.arr[
              o
            ]
            +r[
              o
            ];
            return new t(i)
          }
        }, t.prototype.subtract=function(e){
          var n, r=e.arr;
          if(!(null===(n=this.arr)||void 0===n?void 0:n.length))return new t(r);
          if(!(null==r?void 0:r.length))return new t(this.arr);
          if(this.arr.length===r.length){
            var i=[
            ];
            for(var o in this.arr)i[
              o
            ]
            =this.arr[
              o
            ]
            -r[
              o
            ];
            return new t(i)
          }
        }, t.prototype.avg=function(e){
          var n=[
          ];
          if(0!==e)for(var r in this.arr)n[
            r
          ]
          =this.arr[
            r
          ]
          /e;
          return new t(n)
        }, t.prototype.negate=function(){
          var e=[
          ];
          for(var n in this.arr)e[
            n
          ]
          =-this.arr[
            n
          ];
          return new t(e)
        }, t.prototype.squareEuclideanDistance=function(t){
          var e, n=t.arr;
          if(!(null===(e=this.arr)||void 0===e?void 0:e.length)||!(null==n?void 0:n.length))return 0;
          if(this.arr.length===n.length){
            var r=0;
            for(var i in this.arr)r+=Math.pow(this.arr[
              i
            ]
            -t.arr[
              i
            ], 2);
            return r
          }
        }, t.prototype.euclideanDistance=function(t){
          var e, n=t.arr;
          if(!(null===(e=this.arr)||void 0===e?void 0:e.length)||!(null==n?void 0:n.length))return 0;
          if(this.arr.length===n.length){
            var r=0;
            for(var i in this.arr)r+=Math.pow(this.arr[
              i
            ]
            -t.arr[
              i
            ], 2);
            return Math.sqrt(r)
          }
          console.error("The two vectors are unequal in length.")
        }, t.prototype.normalize=function(){
          var e=[
          ], n=(0, C.clone)(this.arr);
          n.sort((function(t, e){
            return t-e
          }));
          var r=n[
            n.length-1
          ], i=n[
            0
          ];
          for(var o in this.arr)e[
            o
          ]
          =(this.arr[
            o
          ]
          -i)/(r-i);
          return new t(e)
        }, t.prototype.norm2=function(){
          var t;
          if(!(null===(t=this.arr)||void 0===t?void 0:t.length))return 0;
          var e=0;
          for(var n in this.arr)e+=Math.pow(this.arr[
            n
          ], 2);
          return Math.sqrt(e)
        }, t.prototype.dot=function(t){
          var e, n=t.arr;
          if(!(null===(e=this.arr)||void 0===e?void 0:e.length)||!(null==n?void 0:n.length))return 0;
          if(this.arr.length===n.length){
            var r=0;
            for(var i in this.arr)r+=this.arr[
              i
            ]
            *t.arr[
              i
            ];
            return r
          }
          console.error("The two vectors are unequal in length.")
        }, t.prototype.equal=function(t){
          var e, n=t.arr;
          if((null===(e=this.arr)||void 0===e?void 0:e.length)!==(null==n?void 0:n.length))return!1;
          for(var r in this.arr)if(this.arr[
            r
          ]
          !==n[
            r
          ])return!1;
          return!0
        }, t
      }
      ();
      var D=function(t, e){
        void 0===e&&(e=void 0);
        var n=[
        ];
        return t.forEach((function(t){
          void 0===e&&n.push(t), void 0!==t[
            e
          ]
          &&n.push(t[
            e
          ])
        })), n
      };
      var O;
      !function(t){
        t.EuclideanDistance="euclideanDistance"
      }
      (O||(O={
      }));
      var j=function(t, e, n){
        var r=[
        ];
        (null==e?void 0:e.length)?r=e:(t.forEach((function(t){
          r=r.concat(Object.keys(t))
        })), r=(0, C.uniq)(r));
        var i={
        };
        return r.forEach((function(e){
          var r=[
          ];
          t.forEach((function(t){
            void 0!==t[
              e
            ]
            &&""!==t[
              e
            ]
            &&r.push(t[
              e
            ])
          })), r.length&&!(null==n?void 0:n.includes(e))&&(i[
            e
          ]
          =(0, C.uniq)(r))
        })), i
      }, T=function(t, e, n){
        var r=j(t, e, n), i=[
        ];
        if(!Object.keys(r).length)return i;
        var o=Object.values(r).every((function(t){
          return t.every((function(t){
            return"number"==typeof t
          }))
        }));
        return t.forEach((function(t, e){
          var n=[
          ];
          Object.keys(r).forEach((function(e){
            var i=t[
              e
            ], a=r[
              e
            ], s=a.findIndex((function(t){
              return i===t
            })), u=[
            ];
            if(o)u.push(i);
            else for(var c=0;
            c<a.length;
            c++)c===s?u.push(1):u.push(0);
            n=n.concat(u)
          })), i[
            e
          ]
          =n
        })), i
      }, B=function(t, e, n, r){
        void 0===n&&(n=O.EuclideanDistance);
        var i=0;
        switch(n){
          case O.EuclideanDistance:i=new S(t).euclideanDistance(new S(e))
        }
        return i
      };
      var F=function(t, e, n, r){
        for(var i=e.length, o=2*r, a=0, s=0;
        s<i;
        s++)for(var u=t[
          s
        ].clusterId, c=0;
        c<i;
        c++){
          if(u===t[
            c
          ].clusterId)a+=(e[
            s
          ]
          [
            c
          ]
          ||0)-(n[
            s
          ]
          ||0)*(n[
            c
          ]
          ||0)/o
        }
        return a*=1/o
      }, R=function(t, e){
        void 0===t&&(t=[
        ]);
        for(var n=t.length, r=new S([
        ]), i=0;
        i<n;
        i++)r=r.add(new S(e[
          i
        ]));
        var o=r.avg(n);
        o.normalize();
        var a=0;
        for(i=0;
        i<n;
        i++){
          a+=(u=new S(e[
            i
          ])).squareEuclideanDistance(o)
        }
        var s=[
        ];
        t.forEach((function(){
          s.push([
          ])
        }));
        for(i=0;
        i<n;
        i++){
          var u=new S(e[
            i
          ]);
          t[
            i
          ].clusterInertial=0;
          for(var c=0;
          c<n;
          c++)if(i!==c){
            var d=new S(e[
              c
            ]);
            s[
              i
            ]
            [
              c
            ]
            =u.squareEuclideanDistance(d), t[
              i
            ].clusterInertial+=s[
              i
            ]
            [
              c
            ]
          }
          else s[
            i
          ]
          [
            c
          ]
          =0
        }
        var h=0, l=2*n*a;
        for(i=0;
        i<n;
        i++){
          var f=t[
            i
          ].clusterId;
          for(c=0;
          c<n;
          c++){
            var p=t[
              c
            ].clusterId;
            if(i!==c&&f===p)h+=t[
              i
            ].clusterInertial*t[
              c
            ].clusterInertial/Math.pow(l, 2)-s[
              i
            ]
            [
              c
            ]
            /l
          }
        }
        return Number(h.toFixed(4))
      };
      const q=function(t, e, n, i, o, a, s, u, c){
        void 0===e&&(e=!1), void 0===n&&(n="weight"), void 0===i&&(i=1e-4), void 0===o&&(o=!1), void 0===a&&(a=void 0), void 0===s&&(s=[
        ]), void 0===u&&(u=[
          "id"
        ]), void 0===c&&(c=1);
        var d=t.nodes, h=void 0===d?[
        ]
        :d, l=t.edges, f=void 0===l?[
        ]
        :l, p=[
        ];
        if(o){
          h.forEach((function(t, e){
            t.properties=t.properties||{
            }, t.originIndex=e
          }));
          var g=[
          ];
          h.every((function(t){
            return t.hasOwnProperty("nodeType")
          }))&&(g=Array.from(new Set(h.map((function(t){
            return t.nodeType
          })))), h.forEach((function(t){
            t.properties.nodeType=g.findIndex((function(e){
              return e===t.nodeType
            }))
          })));
          var v=D(h, a);
          p=T(v, s, u)
        }
        var y=1, m={
        }, b={
        };
        h.forEach((function(t, e){
          var n=String(y++);
          t.clusterId=n, m[
            n
          ]
          ={
            id:n, nodes:[
              t
            ]
          }, b[
            t.id
          ]
          ={
            node:t, idx:e
          }
        }));
        var x=r(t, e), E=[
        ], M={
        }, A=0;
        x.forEach((function(t, e){
          var n=0, r=h[
            e
          ].id;
          M[
            r
          ]
          ={
          }, t.forEach((function(t, e){
            if(t){
              n+=t;
              var i=h[
                e
              ].id;
              M[
                r
              ]
              [
                i
              ]
              =t, A+=t
            }
          })), E.push(n)
        })), A/=2;
        for(var w=1/0, L=1/0, _=0, k=[
        ], P={
        };
        ;
        ){
          w=o&&h.every((function(t){
            return t.hasOwnProperty("properties")
          }))?F(h, x, E, A)+R(h, p)*c:F(h, x, E, A), 0===_&&(L=w, k=h, P=m);
          var N=w>0&&w>L&&w-L<i;
          if(w>L&&(k=h.map((function(t){
            return{
              node:t, clusterId:t.clusterId
            }
          })), P=(0, C.clone)(m), L=w), N||_>100)break;
          _++, Object.keys(m).forEach((function(t){
            var e=0;
            f.forEach((function(r){
              var i=r.source, o=r.target, a=b[
                i
              ].node.clusterId, s=b[
                o
              ].node.clusterId;
              (a===t&&s!==t||s===t&&a!==t)&&(e+=r[
                n
              ]
              ||1)
            })), m[
              t
            ].sumTot=e
          })), h.forEach((function(t, e){
            var r, i=m[
              t.clusterId
            ], a=0, s=E[
              e
            ]
            /(2*A), u=0, d=i.nodes;
            d.forEach((function(t){
              var n=b[
                t.id
              ].idx;
              u+=x[
                e
              ]
              [
                n
              ]
              ||0
            }));
            var h=u-i.sumTot*s, l=d.filter((function(e){
              return e.id!==t.id
            })), g=[
            ];
            l.forEach((function(t, e){
              g[
                e
              ]
              =p[
                t.originIndex
              ]
            }));
            var v=R(l, p)*c, y=M[
              t.id
            ];
            if(Object.keys(y).forEach((function(n){
              var i=b[
                n
              ].node.clusterId;
              if(i!==t.clusterId){
                var u=m[
                  i
                ], d=u.nodes;
                if(d&&d.length){
                  var l=0;
                  d.forEach((function(t){
                    var n=b[
                      t.id
                    ].idx;
                    l+=x[
                      e
                    ]
                    [
                      n
                    ]
                    ||0
                  }));
                  var f=l-u.sumTot*s, g=d.concat([
                    t
                  ]), y=[
                  ];
                  g.forEach((function(t, e){
                    y[
                      e
                    ]
                    =p[
                      t.originIndex
                    ]
                  }));
                  var E=R(g, p)*c, M=f-h;
                  o&&(M=f+E-(h+v)), M>a&&(a=M, r=u)
                }
              }
            })), a>0){
              r.nodes.push(t);
              var w=t.clusterId;
              t.clusterId=r.id;
              var C=i.nodes.indexOf(t);
              i.nodes.splice(C, 1);
              var L=0, _=0;
              f.forEach((function(t){
                var e=t.source, i=t.target, o=b[
                  e
                ].node.clusterId, a=b[
                  i
                ].node.clusterId;
                (o===r.id&&a!==r.id||a===r.id&&o!==r.id)&&(L+=t[
                  n
                ]
                ||1), (o===w&&a!==w||a===w&&o!==w)&&(_+=t[
                  n
                ]
                ||1)
              })), r.sumTot=L, i.sumTot=_
            }
          }))
        }
        var I={
        }, S=0;
        Object.keys(P).forEach((function(t){
          var e=P[
            t
          ];
          if(e.nodes&&e.nodes.length){
            var n=String(S+1);
            n!==t&&(e.id=n, e.nodes=e.nodes.map((function(t){
              return{
                id:t.id, clusterId:n
              }
            })), P[
              n
            ]
            =e, I[
              t
            ]
            =n, delete P[
              t
            ], S++)
          }
          else delete P[
            t
          ]
        })), k.forEach((function(t){
          var e=t.node, n=t.clusterId;
          e&&(e.clusterId=n, e.clusterId&&I[
            e.clusterId
          ]
          &&(e.clusterId=I[
            e.clusterId
          ]))
        }));
        var O=[
        ], j={
        };
        f.forEach((function(t){
          var e=t.source, r=t.target, i=t[
            n
          ]
          ||1, o=b[
            e
          ].node.clusterId, a=b[
            r
          ].node.clusterId;
          if(o&&a){
            var s="".concat(o, "---").concat(a);
            if(j[
              s
            ])j[
              s
            ].weight+=i, j[
              s
            ].count++;
            else{
              var u={
                source:o, target:a, weight:i, count:1
              };
              j[
                s
              ]
              =u, O.push(u)
            }
          }
        }));
        var B=[
        ];
        return Object.keys(P).forEach((function(t){
          B.push(P[
            t
          ])
        })), {
          clusters:B, clusterEdges:O
        }
      };
      const X=function(t, e, n, r, i, o, a, s){
        return void 0===e&&(e=!1), void 0===n&&(n="weight"), void 0===r&&(r=1e-4), void 0===i&&(i=void 0), void 0===o&&(o=[
        ]), void 0===a&&(a=[
          "id"
        ]), void 0===s&&(s=1), q(t, e, n, r, !0, i, o, a, s)
      };
      const Y=function(t, e){
        var n;
        void 0===e&&(e=1);
        for(var r=(0, C.clone)(t), i=r.nodes, o=void 0===i?[
        ]
        :i, a=r.edges, s=void 0===a?[
        ]
        :a, u=function(){
          var t=g({
            nodes:o, edges:s
          }), r=Object.keys(t);
          r.sort((function(e, n){
            var r, i;
            return(null===(r=t[
              e
            ])||void 0===r?void 0:r.degree)-(null===(i=t[
              n
            ])||void 0===i?void 0:i.degree)
          }));
          var i=r[
            0
          ];
          if(!o.length||(null===(n=t[
            i
          ])||void 0===n?void 0:n.degree)>=e)return"break";
          var a=o.findIndex((function(t){
            return t.id===i
          }));
          o.splice(a, 1), s=s.filter((function(t){
            return!(t.source===i||t.target===i)
          }))
        };
        ;
        ){
          if("break"===u())break
        }
        return{
          nodes:o, edges:s
        }
      };
      var G=function(t, e, n){
        var r=[
        ];
        switch(t){
          case O.EuclideanDistance:r=e[
            n
          ];
          break;
          default:r=[
          ]
        }
        return r
      };
      const H=function(t, e, n, r, i, o){
        void 0===e&&(e=3), void 0===n&&(n=void 0), void 0===r&&(r=[
        ]), void 0===i&&(i=[
          "id"
        ]), void 0===o&&(o=O.EuclideanDistance);
        var a=t.nodes, s=void 0===a?[
        ]
        :a, u=t.edges, c=void 0===u?[
        ]
        :u, d={
          clusters:[
            {
              id:"0", nodes:s
            }
          ], clusterEdges:[
          ]
        };
        if(o===O.EuclideanDistance&&!s.every((function(t){
          return t.hasOwnProperty(n)
        })))return d;
        var h=[
        ], l=[
        ];
        if(o===O.EuclideanDistance&&(h=D(s, n), l=T(h, r, i)), !l.length)return d;
        for(var f=(0, C.uniq)(l.map((function(t){
          return t.join("")
        }))), p=Math.min(e, s.length, f.length), g=0;
        g<s.length;
        g++)s[
          g
        ].originIndex=g;
        var v=[
        ], y=[
        ], m=[
        ];
        for(g=0;
        g<p;
        g++)if(0===g){
          var b=Math.floor(Math.random()*s.length);
          switch(o){
            case O.EuclideanDistance:v[
              g
            ]
            =l[
              b
            ];
            break;
            default:v[
              g
            ]
            =[
            ]
          }
          y.push(b), m[
            g
          ]
          =[
            s[
              b
            ]
          ], s[
            b
          ].clusterId=String(g)
        }
        else{
          for(var x=-1/0, E=0, M=function(t){
            if(!y.includes(t)){
              for(var e=0, n=0;
              n<v.length;
              n++){
                var r=0;
                switch(o){
                  case O.EuclideanDistance:r=B(l[
                    s[
                      t
                    ].originIndex
                  ], v[
                    n
                  ], o)
                }
                e+=r
              }
              var i=e/v.length;
              i>x&&!v.find((function(e){
                return(0, C.isEqual)(e, G(o, l, s[
                  t
                ].originIndex))
              }))&&(x=i, E=t)
            }
          }, A=0;
          A<s.length;
          A++)M(A);
          v[
            g
          ]
          =G(o, l, E), y.push(E), m[
            g
          ]
          =[
            s[
              E
            ]
          ], s[
            E
          ].clusterId=String(g)
        }
        for(var w=0;
        ;
        ){
          for(g=0;
          g<s.length;
          g++){
            var L=0, _=1/0;
            if(0!==w||!y.includes(g)){
              for(var k=0;
              k<v.length;
              k++){
                var P=0;
                switch(o){
                  case O.EuclideanDistance:P=B(l[
                    g
                  ], v[
                    k
                  ], o)
                }
                P<_&&(_=P, L=k)
              }
              if(void 0!==s[
                g
              ].clusterId)for(var N=m[
                Number(s[
                  g
                ].clusterId)
              ].length-1;
              N>=0;
              N--)m[
                Number(s[
                  g
                ].clusterId)
              ]
              [
                N
              ].id===s[
                g
              ].id&&m[
                Number(s[
                  g
                ].clusterId)
              ].splice(N, 1);
              s[
                g
              ].clusterId=String(L), m[
                L
              ].push(s[
                g
              ])
            }
          }
          var I=!1;
          for(g=0;
          g<m.length;
          g++){
            var j=m[
              g
            ], F=new S([
            ]);
            for(k=0;
            k<j.length;
            k++)F=F.add(new S(l[
              j[
                k
              ].originIndex
            ]));
            var R=F.avg(j.length);
            R.equal(new S(v[
              g
            ]))||(I=!0, v[
              g
            ]
            =R.getArr())
          }
          if(w++, s.every((function(t){
            return void 0!==t.clusterId
          }))&&I||w>=1e3)break
        }
        var q=[
        ], X={
        };
        return c.forEach((function(t){
          var e, n, r=t.source, i=t.target, o=null===(e=s.find((function(t){
            return t.id===r
          })))||void 0===e?void 0:e.clusterId, a=null===(n=s.find((function(t){
            return t.id===i
          })))||void 0===n?void 0:n.clusterId, u="".concat(o, "---").concat(a);
          if(X[
            u
          ])X[
            u
          ].count++;
          else{
            var c={
              source:o, target:a, count:1
            };
            X[
              u
            ]
            =c, q.push(c)
          }
        })), {
          clusters:m, clusterEdges:q
        }
      };
      const U=function(t, e){
        var n=new S(e), r=n.norm2(), i=new S(t), o=i.norm2(), a=n.dot(i), s=r*o, u=s?a/s:0;
        return u
      };
      const V=function(t, e, n, r, i){
        void 0===t&&(t=[
        ]), void 0===n&&(n=void 0), void 0===r&&(r=[
        ]), void 0===i&&(i=[
        ]);
        var o=(0, C.clone)(t.filter((function(t){
          return t.id!==e.id
        }))), a=t.findIndex((function(t){
          return t.id===e.id
        })), s=D(t, n), u=T(s, r, i), c=u[
          a
        ], d=[
        ];
        return o.forEach((function(t, n){
          if(t.id!==e.id){
            var r=u[
              n
            ], i=U(r, c);
            d.push(i), t.cosineSimilarity=i
          }
        })), o.sort((function(t, e){
          return e.cosineSimilarity-t.cosineSimilarity
        })), {
          allCosineSimilarity:d, similarNodes:o
        }
      };
      const z=function(){
        function t(t){
          this.count=t.length, this.parent={
          };
          for(var e=0, n=t;
          e<n.length;
          e++){
            var r=n[
              e
            ];
            this.parent[
              r
            ]
            =r
          }
        }
        return t.prototype.find=function(t){
          for(;
          this.parent[
            t
          ]
          !==t;
          )t=this.parent[
            t
          ];
          return t
        }, t.prototype.union=function(t, e){
          var n=this.find(t), r=this.find(e);
          n!==r&&(n<r?(this.parent[
            e
          ]
          !==e&&this.union(this.parent[
            e
          ], t), this.parent[
            e
          ]
          =this.parent[
            t
          ]):(this.parent[
            t
          ]
          !==t&&this.union(this.parent[
            t
          ], e), this.parent[
            t
          ]
          =this.parent[
            e
          ]))
        }, t.prototype.connected=function(t, e){
          return this.find(t)===this.find(e)
        }, t
      }
      ();
      var W=function(t, e){
        return t-e
      };
      const Z=function(){
        function t(t){
          void 0===t&&(t=W), this.compareFn=t, this.list=[
          ]
        }
        return t.prototype.getLeft=function(t){
          return 2*t+1
        }, t.prototype.getRight=function(t){
          return 2*t+2
        }, t.prototype.getParent=function(t){
          return 0===t?null:Math.floor((t-1)/2)
        }, t.prototype.isEmpty=function(){
          return this.list.length<=0
        }, t.prototype.top=function(){
          return this.isEmpty()?void 0:this.list[
            0
          ]
        }, t.prototype.delMin=function(){
          var t=this.top(), e=this.list.pop();
          return this.list.length>0&&(this.list[
            0
          ]
          =e, this.moveDown(0)), t
        }, t.prototype.insert=function(t){
          if(null!==t){
            this.list.push(t);
            var e=this.list.length-1;
            return this.moveUp(e), !0
          }
          return!1
        }, t.prototype.moveUp=function(t){
          for(var e=this.getParent(t);
          t&&t>0&&this.compareFn(this.list[
            e
          ], this.list[
            t
          ])>0;
          ){
            var n=this.list[
              e
            ];
            this.list[
              e
            ]
            =this.list[
              t
            ], this.list[
              t
            ]
            =n, t=e, e=this.getParent(t)
          }
        }, t.prototype.moveDown=function(t){
          var e, n=t, r=this.getLeft(t), i=this.getRight(t), o=this.list.length;
          null!==r&&r<o&&this.compareFn(this.list[
            n
          ], this.list[
            r
          ])>0?n=r:null!==i&&i<o&&this.compareFn(this.list[
            n
          ], this.list[
            i
          ])>0&&(n=i), t!==n&&(e=[
            this.list[
              n
            ], this.list[
              t
            ]
          ], this.list[
            t
          ]
          =e[
            0
          ], this.list[
            n
          ]
          =e[
            1
          ], this.moveDown(n))
        }, t
      }
      ();
      var Q=function(t, e){
        var n=[
        ], r=t.nodes, i=void 0===r?[
        ]
        :r, o=t.edges, a=void 0===o?[
        ]
        :o;
        if(0===i.length)return n;
        var s=i[
          0
        ], u=new Set;
        u.add(s);
        var d=new Z((function(t, n){
          return e?t.weight-n.weight:0
        }));
        for(c(s.id, a).forEach((function(t){
          d.insert(t)
        }));
        !d.isEmpty();
        ){
          var h=d.delMin(), l=h.source, f=h.target;
          u.has(l)&&u.has(f)||(n.push(h), u.has(l)||(u.add(l), c(l, a).forEach((function(t){
            d.insert(t)
          }))), u.has(f)||(u.add(f), c(f, a).forEach((function(t){
            d.insert(t)
          }))))
        }
        return n
      }, $=function(t, e){
        var n=[
        ], r=t.nodes, i=void 0===r?[
        ]
        :r, o=t.edges, a=void 0===o?[
        ]
        :o;
        if(0===i.length)return n;
        var s=a.map((function(t){
          return t
        }));
        e&&s.sort((function(t, e){
          return t.weight-e.weight
        }));
        for(var u=new z(i.map((function(t){
          return t.id
        })));
        s.length>0;
        ){
          var c=s.shift(), d=c.source, h=c.target;
          u.connected(d, h)||(n.push(c), u.union(d, h))
        }
        return n
      };
      const K=function(t, e, n){
        return n?{
          prim:Q, kruskal:$
        }
        [
          n
        ]
        (t, e):$(t, e)
      };
      const J=function(t, e, n){
        "number"!=typeof e&&(e=1e-6), "number"!=typeof n&&(n=.85);
        for(var r, i=1, o=0, a=1e3, s=t.nodes, c=void 0===s?[
        ]
        :s, d=t.edges, h=void 0===d?[
        ]
        :d, l=c.length, f={
        }, p={
        }, v=0;
        v<l;
        ++v){
          f[
            m=(A=c[
              v
            ]).id
          ]
          =1/l, p[
            m
          ]
          =1/l
        }
        for(var y=g(t);
        a>0&&i>e;
        ){
          o=0;
          for(v=0;
          v<l;
          ++v){
            var m=(A=c[
              v
            ]).id;
            if(r=0, 0===y[
              A.id
            ].inDegree)f[
              m
            ]
            =0;
            else{
              for(var b=u(m, h, "source"), x=0;
              x<b.length;
              ++x){
                var E=b[
                  x
                ], M=y[
                  E
                ].outDegree;
                M>0&&(r+=p[
                  E
                ]
                /M)
              }
              f[
                m
              ]
              =n*r, o+=f[
                m
              ]
            }
          }
          o=(1-o)/l, i=0;
          for(v=0;
          v<l;
          ++v){
            var A;
            r=f[
              m=(A=c[
                v
              ]).id
            ]
            +o, i+=Math.abs(r-p[
              m
            ]), p[
              m
            ]
            =r
          }
          a-=1
        }
        return p
      };
      var tt="-1", et=function(t, e, n, r){
        void 0===t&&(t=-1), void 0===e&&(e=-1), void 0===n&&(n=-1), void 0===r&&(r="-1"), this.id=t, this.from=e, this.to=n, this.label=r
      }, nt=function(){
        function t(t, e){
          void 0===t&&(t=-1), void 0===e&&(e=tt), this.id=t, this.label=e, this.edges=[
          ], this.edgeMap={
          }
        }
        return t.prototype.addEdge=function(t){
          this.edges.push(t), this.edgeMap[
            t.id
          ]
          =t
        }, t
      }
      (), rt=function(){
        function t(t, e, n){
          void 0===t&&(t=-1), void 0===e&&(e=!0), void 0===n&&(n=!1), this.id=t, this.edgeIdAutoIncrease=e, this.edges=[
          ], this.nodes=[
          ], this.nodeMap={
          }, this.edgeMap={
          }, this.nodeLabelMap={
          }, this.edgeLabelMap={
          }, this.counter=0, this.directed=n
        }
        return t.prototype.getNodeNum=function(){
          return this.nodes.length
        }, t.prototype.addNode=function(t, e){
          if(!this.nodeMap[
            t
          ]){
            var n=new nt(t, e);
            this.nodes.push(n), this.nodeMap[
              t
            ]
            =n, this.nodeLabelMap[
              e
            ]
            ||(this.nodeLabelMap[
              e
            ]
            =[
            ]), this.nodeLabelMap[
              e
            ].push(t)
          }
        }, t.prototype.addEdge=function(t, e, n, r){
          if((this.edgeIdAutoIncrease||void 0===t)&&(t=this.counter++), !(this.nodeMap[
            e
          ]
          &&this.nodeMap[
            n
          ]
          &&this.nodeMap[
            n
          ].edgeMap[
            t
          ])){
            var i=new et(t, e, n, r);
            if(this.edges.push(i), this.edgeMap[
              t
            ]
            =i, this.nodeMap[
              e
            ].addEdge(i), this.edgeLabelMap[
              r
            ]
            ||(this.edgeLabelMap[
              r
            ]
            =[
            ]), this.edgeLabelMap[
              r
            ].push(i), !this.directed){
              var o=new et(t, n, e, r);
              this.nodeMap[
                n
              ].addEdge(o), this.edgeLabelMap[
                r
              ].push(o)
            }
          }
        }, t
      }
      (), it=function(){
        function t(t, e, n, r, i){
          this.fromNode=t, this.toNode=e, this.nodeEdgeNodeLabel={
            nodeLabel1:n||tt, edgeLabel:r||"-1", nodeLabel2:i||tt
          }
        }
        return t.prototype.equalTo=function(t){
          return this.fromNode===t.formNode&&this.toNode===t.toNode&&this.nodeEdgeNodeLabel===t.nodeEdgeNodeLabel
        }, t.prototype.notEqualTo=function(t){
          return!this.equalTo(t)
        }, t
      }
      (), ot=function(){
        function t(){
          this.rmpath=[
          ], this.dfsEdgeList=[
          ]
        }
        return t.prototype.equalTo=function(t){
          var e=this.dfsEdgeList.length;
          if(e!==t.length)return!1;
          for(var n=0;
          n<e;
          n++)if(this.dfsEdgeList[
            n
          ]
          !==t[
            n
          ])return!1;
          return!0
        }, t.prototype.notEqualTo=function(t){
          return!this.equalTo(t)
        }, t.prototype.pushBack=function(t, e, n, r, i){
          return this.dfsEdgeList.push(new it(t, e, n, r, i)), this.dfsEdgeList
        }, t.prototype.toGraph=function(t, e){
          void 0===t&&(t=-1), void 0===e&&(e=!1);
          var n=new rt(t, !0, e);
          return this.dfsEdgeList.forEach((function(t){
            var e=t.fromNode, r=t.toNode, i=t.nodeEdgeNodeLabel, o=i.nodeLabel1, a=i.edgeLabel, s=i.nodeLabel2;
            o!==tt&&n.addNode(e, o), s!==tt&&n.addNode(r, s), o!==tt&&s!==o&&n.addEdge(void 0, e, r, a)
          })), n
        }, t.prototype.buildRmpath=function(){
          this.rmpath=[
          ];
          for(var t=void 0, e=this.dfsEdgeList.length-1;
          e>=0;
          e--){
            var n=this.dfsEdgeList[
              e
            ], r=n.fromNode, i=n.toNode;
            r<i&&(void 0===t||i===t)&&(this.rmpath.push(e), t=r)
          }
          return this.rmpath
        }, t.prototype.getNodeNum=function(){
          var t={
          };
          return this.dfsEdgeList.forEach((function(e){
            t[
              e.fromNode
            ]
            ||(t[
              e.fromNode
            ]
            =!0), t[
              e.toNode
            ]
            ||(t[
              e.toNode
            ]
            =!0)
          })), Object.keys(t).length
        }, t
      }
      (), at=function(){
        function t(t){
          if(this.his={
          }, this.nodesUsed={
          }, this.edgesUsed={
          }, this.edges=[
          ], t){
            for(;
            t;
            ){
              var e=t.edge;
              this.edges.push(e), this.nodesUsed[
                e.from
              ]
              =1, this.nodesUsed[
                e.to
              ]
              =1, this.edgesUsed[
                e.id
              ]
              =1, t=t.preNode
            }
            this.edges=this.edges.reverse()
          }
        }
        return t.prototype.hasNode=function(t){
          return 1===this.nodesUsed[
            t.id
          ]
        }, t.prototype.hasEdge=function(t){
          return 1===this.edgesUsed[
            t.id
          ]
        }, t
      }
      (), st=function(){
        function t(t){
          var e=t.graphs, n=t.minSupport, r=void 0===n?2:n, i=t.minNodeNum, o=void 0===i?1:i, a=t.maxNodeNum, s=void 0===a?4:a, u=t.top, c=void 0===u?10:u, d=t.directed, h=void 0!==d&&d, l=t.verbose, f=void 0!==l&&l;
          this.graphs=e, this.dfsCode=new ot, this.support=0, this.frequentSize1Subgraphs=[
          ], this.frequentSubgraphs=[
          ], this.minSupport=r, this.top=c, this.directed=h, this.counter=0, this.maxNodeNum=s, this.minNodeNum=o, this.verbose=f, this.maxNodeNum<this.minNodeNum&&(this.maxNodeNum=this.minNodeNum), this.reportDF=[
          ]
        }
        return t.prototype.findForwardRootEdges=function(t, e){
          var n=this, r=[
          ], i=t.nodeMap;
          return e.edges.forEach((function(t){
            (n.directed||e.label<=i[
              t.to
            ].label)&&r.push(t)
          })), r
        }, t.prototype.findBackwardEdge=function(t, e, n, r){
          if(!this.directed&&e===n)return null;
          for(var i=t.nodeMap, o=i[
            n.to
          ].edges, a=o.length, s=0;
          s<a;
          s++){
            var u=o[
              s
            ];
            if(!r.hasEdge(u)&&u.to===e.from)if(this.directed){
              if(i[
                e.from
              ].label<i[
                n.to
              ].label||i[
                e.from
              ].label===i[
                n.to
              ].label&&e.label<=u.label)return u
            }
            else if(e.label<u.label||e.label===u.label&&i[
              e.to
            ].label<=i[
              n.to
            ].label)return u
          }
          return null
        }, t.prototype.findForwardPureEdges=function(t, e, n, r){
          for(var i=[
          ], o=e.to, a=t.nodeMap[
            o
          ].edges, s=a.length, u=0;
          u<s;
          u++){
            var c=a[
              u
            ], d=t.nodeMap[
              c.to
            ];
            n<=d.label&&!r.hasNode(d)&&i.push(c)
          }
          return i
        }, t.prototype.findForwardRmpathEdges=function(t, e, n, r){
          for(var i=[
          ], o=t.nodeMap, a=o[
            e.to
          ].label, s=o[
            e.from
          ].edges, u=s.length, c=0;
          c<u;
          c++){
            var d=s[
              c
            ], h=o[
              d.to
            ].label;
            e.to===d.to||n>h||r.hasNode(o[
              d.to
            ])||(e.label<d.label||e.label===d.label&&a<=h)&&i.push(d)
          }
          return i
        }, t.prototype.getSupport=function(t){
          var e={
          };
          return t.forEach((function(t){
            e[
              t.graphId
            ]
            ||(e[
              t.graphId
            ]
            =!0)
          })), Object.keys(e).length
        }, t.prototype.findMinLabel=function(t){
          var e=void 0;
          return Object.keys(t).forEach((function(n){
            var r=t[
              n
            ], i=r.nodeLabel1, o=r.edgeLabel, a=r.nodeLabel2;
            e?(i<e.nodeLabel1||i===e.nodeLabel1&&o<e.edgeLabel||i===e.nodeLabel1&&o===e.edgeLabel&&a<e.nodeLabel2)&&(e={
              nodeLabel1:i, edgeLabel:o, nodeLabel2:a
            }):e={
              nodeLabel1:i, edgeLabel:o, nodeLabel2:a
            }
          })), e
        }, t.prototype.isMin=function(){
          var t=this, e=this.dfsCode;
          if(this.verbose&&console.log("isMin checking", e), 1===e.dfsEdgeList.length)return!0;
          var n=this.directed, r=e.toGraph(-1, n), i=r.nodeMap, o=new ot, a={
          };
          r.nodes.forEach((function(e){
            t.findForwardRootEdges(r, e).forEach((function(t){
              var n=i[
                t.to
              ], o="".concat(e.label, "-").concat(t.label, "-").concat(n.label);
              a[
                o
              ]
              ||(a[
                o
              ]
              ={
                projected:[
                ], nodeLabel1:e.label, edgeLabel:t.label, nodeLabel2:n.label
              });
              var s={
                graphId:r.id, edge:t, preNode:null
              };
              a[
                o
              ].projected.push(s)
            }))
          }));
          var s=this.findMinLabel(a);
          if(s){
            o.dfsEdgeList.push(new it(0, 1, s.nodeLabel1, s.edgeLabel, s.nodeLabel2));
            var u="".concat(s.nodeLabel1, "-").concat(s.edgeLabel, "-").concat(s.nodeLabel2);
            return function a(s){
              for(var u=o.buildRmpath(), c=o.dfsEdgeList[
                0
              ].nodeEdgeNodeLabel.nodeLabel1, d=o.dfsEdgeList[
                u[
                  0
                ]
              ].toNode, h={
              }, l=!1, f=0, p=n?-1:0, g=function(e){
                if(l)return"break";
                s.forEach((function(n){
                  var i=new at(n), a=t.findBackwardEdge(r, i.edges[
                    u[
                      e
                    ]
                  ], i.edges[
                    u[
                      0
                    ]
                  ], i);
                  a&&(h[
                    a.label
                  ]
                  ||(h[
                    a.label
                  ]
                  ={
                    projected:[
                    ], edgeLabel:a.label
                  }), h[
                    a.label
                  ].projected.push({
                    graphId:r.id, edge:h, preNode:n
                  }), f=o.dfsEdgeList[
                    u[
                      e
                    ]
                  ].fromNode, l=!0)
                }))
              }, v=u.length-1;
              v>p;
              v--){
                if("break"===g(v))break
              }
              if(l){
                var y=t.findMinLabel(h);
                o.dfsEdgeList.push(new it(d, f, tt, y.edgeLabel, tt));
                var m=o.dfsEdgeList.length-1;
                return t.dfsCode.dfsEdgeList[
                  m
                ]
                ===o.dfsEdgeList[
                  m
                ]
                &&a(h[
                  y.edgeLabel
                ].projected)
              }
              var b={
              };
              l=!1;
              var x=0;
              s.forEach((function(e){
                var n=new at(e), o=t.findForwardPureEdges(r, n.edges[
                  u[
                    0
                  ]
                ], c, n);
                o.length>0&&(l=!0, x=d, o.forEach((function(t){
                  var n="".concat(t.label, "-").concat(i[
                    t.to
                  ].label);
                  b[
                    n
                  ]
                  ||(b[
                    n
                  ]
                  ={
                    projected:[
                    ], edgeLabel:t.label, nodeLabel2:i[
                      t.to
                    ].label
                  }), b[
                    n
                  ].projected.push({
                    graphId:r.id, edge:t, preNode:e
                  })
                })))
              }));
              var E=u.length, M=function(e){
                if(l)return"break";
                var n=u[
                  e
                ];
                s.forEach((function(e){
                  var a=new at(e), s=t.findForwardRmpathEdges(r, a.edges[
                    n
                  ], c, a);
                  s.length>0&&(l=!0, x=o.dfsEdgeList[
                    n
                  ].fromNode, s.forEach((function(t){
                    var n="".concat(t.label, "-").concat(i[
                      t.to
                    ].label);
                    b[
                      n
                    ]
                    ||(b[
                      n
                    ]
                    ={
                      projected:[
                      ], edgeLabel:t.label, nodeLabel2:i[
                        t.to
                      ].label
                    }), b[
                      n
                    ].projected.push({
                      graphId:r.id, edge:t, preNode:e
                    })
                  })))
                }))
              };
              for(v=0;
              v<E;
              v++){
                if("break"===M(v))break
              }
              if(!l)return!0;
              var A=t.findMinLabel(b);
              o.dfsEdgeList.push(new it(x, d+1, tt, A.edgeLabel, A.nodeLabel2));
              var w=o.dfsEdgeList.length-1;
              return e.dfsEdgeList[
                w
              ]
              ===o.dfsEdgeList[
                w
              ]
              &&a(b[
                "".concat(A.edgeLabel, "-").concat(A.nodeLabel2)
              ].projected)
            }
            (a[
              u
            ].projected)
          }
        }, t.prototype.report=function(){
          if(!(this.dfsCode.getNodeNum()<this.minNodeNum)){
            this.counter++;
            var t=this.dfsCode.toGraph(this.counter, this.directed);
            this.frequentSubgraphs.push((0, C.clone)(t))
          }
        }, t.prototype.subGraphMining=function(t){
          var e=this;
          if(!(this.getSupport(t)<this.minSupport)&&this.isMin()){
            this.report();
            var n=this.dfsCode.getNodeNum(), r=this.dfsCode.buildRmpath(), i=this.dfsCode.dfsEdgeList[
              r[
                0
              ]
            ].toNode, o=this.dfsCode.dfsEdgeList[
              0
            ].nodeEdgeNodeLabel.nodeLabel1, a={
            }, s={
            };
            t.forEach((function(t){
              for(var u=e.graphs[
                t.graphId
              ], c=u.nodeMap, d=new at(t), h=r.length-1;
              h>=0;
              h--){
                var l=e.findBackwardEdge(u, d.edges[
                  r[
                    h
                  ]
                ], d.edges[
                  r[
                    0
                  ]
                ], d);
                if(l){
                  var f="".concat(e.dfsCode.dfsEdgeList[
                    r[
                      h
                    ]
                  ].fromNode, "-").concat(l.label);
                  s[
                    f
                  ]
                  ||(s[
                    f
                  ]
                  ={
                    projected:[
                    ], toNodeId:e.dfsCode.dfsEdgeList[
                      r[
                        h
                      ]
                    ].fromNode, edgeLabel:l.label
                  }), s[
                    f
                  ].projected.push({
                    graphId:t.graphId, edge:l, preNode:t
                  })
                }
              }
              if(!(n>=e.maxNodeNum)){
                e.findForwardPureEdges(u, d.edges[
                  r[
                    0
                  ]
                ], o, d).forEach((function(e){
                  var n="".concat(i, "-").concat(e.label, "-").concat(c[
                    e.to
                  ].label);
                  a[
                    n
                  ]
                  ||(a[
                    n
                  ]
                  ={
                    projected:[
                    ], fromNodeId:i, edgeLabel:e.label, nodeLabel2:c[
                      e.to
                    ].label
                  }), a[
                    n
                  ].projected.push({
                    graphId:t.graphId, edge:e, preNode:t
                  })
                }));
                var p=function(n){
                  e.findForwardRmpathEdges(u, d.edges[
                    r[
                      n
                    ]
                  ], o, d).forEach((function(i){
                    var o="".concat(e.dfsCode.dfsEdgeList[
                      r[
                        n
                      ]
                    ].fromNode, "-").concat(i.label, "-").concat(c[
                      i.to
                    ].label);
                    a[
                      o
                    ]
                    ||(a[
                      o
                    ]
                    ={
                      projected:[
                      ], fromNodeId:e.dfsCode.dfsEdgeList[
                        r[
                          n
                        ]
                      ].fromNode, edgeLabel:i.label, nodeLabel2:c[
                        i.to
                      ].label
                    }), a[
                      o
                    ].projected.push({
                      graphId:t.graphId, edge:i, preNode:t
                    })
                  }))
                };
                for(h=0;
                h<r.length;
                h++)p(h)
              }
            })), Object.keys(s).forEach((function(t){
              var n=s[
                t
              ], r=n.toNodeId, o=n.edgeLabel;
              e.dfsCode.dfsEdgeList.push(new it(i, r, "-1", o, "-1")), e.subGraphMining(s[
                t
              ].projected), e.dfsCode.dfsEdgeList.pop()
            })), Object.keys(a).forEach((function(t){
              var n=a[
                t
              ], r=n.fromNodeId, o=n.edgeLabel, s=n.nodeLabel2;
              e.dfsCode.dfsEdgeList.push(new it(r, i+1, tt, o, s)), e.subGraphMining(a[
                t
              ].projected), e.dfsCode.dfsEdgeList.pop()
            }))
          }
        }, t.prototype.generate1EdgeFrequentSubGraphs=function(){
          var t=this.graphs, e=this.directed, n=this.minSupport, r=this.frequentSize1Subgraphs, i={
          }, o={
          }, a={
          }, s={
          };
          return Object.keys(t).forEach((function(n){
            var r=t[
              n
            ], u=r.nodeMap;
            r.nodes.forEach((function(t, r){
              var c=t.label, d="".concat(n, "-").concat(c);
              if(!a[
                d
              ]){
                var h=i[
                  c
                ]
                ||0;
                h++, i[
                  c
                ]
                =h
              }
              a[
                d
              ]
              ={
                graphKey:n, label:c
              }, t.edges.forEach((function(t){
                var r=c, i=u[
                  t.to
                ].label;
                if(!e&&r>i){
                  var a=i;
                  i=r, r=a
                }
                var d=t.label, h="".concat(n, "-").concat(r, "-").concat(d, "-").concat(i), l="".concat(r, "-").concat(d, "-").concat(i);
                if(!o[
                  l
                ]){
                  var f=o[
                    l
                  ]
                  ||0;
                  f++, o[
                    l
                  ]
                  =f
                }
                s[
                  h
                ]
                ={
                  graphId:n, nodeLabel1:r, edgeLabel:d, nodeLabel2:i
                }
              }))
            }))
          })), Object.keys(i).forEach((function(t){
            if(!(i[
              t
            ]
            <n)){
              var e={
                nodes:[
                ], edges:[
                ]
              };
              e.nodes.push({
                id:"0", label:t
              }), r.push(e)
            }
          })), r
        }, t.prototype.run=function(){
          var t=this;
          if(this.frequentSize1Subgraphs=this.generate1EdgeFrequentSubGraphs(), !(this.maxNodeNum<2)){
            var e=this.graphs, n=(this.directed, {
            });
            Object.keys(e).forEach((function(r){
              var i=e[
                r
              ], o=i.nodeMap;
              i.nodes.forEach((function(e){
                t.findForwardRootEdges(i, e).forEach((function(t){
                  var i=o[
                    t.to
                  ], a="".concat(e.label, "-").concat(t.label, "-").concat(i.label);
                  n[
                    a
                  ]
                  ||(n[
                    a
                  ]
                  ={
                    projected:[
                    ], nodeLabel1:e.label, edgeLabel:t.label, nodeLabel2:i.label
                  });
                  var s={
                    graphId:r, edge:t, preNode:null
                  };
                  n[
                    a
                  ].projected.push(s)
                }))
              }))
            })), Object.keys(n).forEach((function(e){
              var r=n[
                e
              ], i=r.projected, o=r.nodeLabel1, a=r.edgeLabel, s=r.nodeLabel2;
              t.dfsCode.dfsEdgeList.push(new it(0, 1, o, a, s)), t.subGraphMining(i), t.dfsCode.dfsEdgeList.pop()
            }))
          }
        }, t
      }
      (), ut="cluster";
      const ct=function(t){
        var e=t.graphs, n=t.directed, r=void 0!==n&&n, i=t.nodeLabelProp, o=void 0===i?ut:i, a=t.edgeLabelProp, s=void 0===a?ut:a, u=function(t, e, n, r){
          var i={
          };
          return Object.keys(t).forEach((function(o, a){
            var s=t[
              o
            ], u=new rt(a, !0, e), c={
            };
            s.nodes.forEach((function(t, e){
              u.addNode(e, t[
                n
              ]), c[
                t.id
              ]
              =e
            })), s.edges.forEach((function(t, e){
              var n=c[
                t.source
              ], i=c[
                t.target
              ];
              u.addEdge(-1, n, i, t[
                r
              ])
            })), u&&u.getNodeNum()&&(i[
              u.id
            ]
            =u)
          })), i
        }
        (e, r, o, s), c=t.minSupport, d=t.maxNodeNum, h=t.minNodeNum, l=t.verbose, f=t.top, p=new st({
          graphs:u, minSupport:c, maxNodeNum:d, minNodeNum:h, top:f, verbose:l, directed:r
        });
        return p.run(), function(t, e, n){
          var r=[
          ];
          return t.forEach((function(t){
            var i={
              nodes:[
              ], edges:[
              ]
            };
            t.nodes.forEach((function(t){
              var n;
              i.nodes.push(((n={
                id:"".concat(t.id)
              })[
                e
              ]
              =t.label, n))
            })), t.edges.forEach((function(t){
              var e;
              i.edges.push(((e={
                source:"".concat(t.from), target:"".concat(t.to)
              })[
                n
              ]
              =t.label, e))
            })), r.push(i)
          })), r
        }
        (p.frequentSubgraphs, o, s)
      };
      var dt=function(t, e, n, r){
        void 0===n&&(n="cluster"), void 0===r&&(r=2);
        var i=[
        ], o=t.nodes;
        return e.forEach((function(t, e){
          i.push(ht(o, t, e, n, r))
        })), i
      }, ht=function(t, e, n, r, i){
        var o=[
          n
        ], a=[
        ], s={
        };
        return e.forEach((function(e, u){
          if(e<=i&&n!==u){
            o.push(u), a.push(t[
              u
            ]);
            var c=t[
              u
            ]
            [
              r
            ];
            s[
              c
            ]
            ?(s[
              c
            ].count++, s[
              c
            ].dists.push(e)):s[
              c
            ]
            ={
              count:1, dists:[
                e
              ]
            }
          }
        })), Object.keys(s).forEach((function(t){
          s[
            t
          ].dists=s[
            t
          ].dists.sort((function(t, e){
            return t-e
          }))
        })), {
          nodeIdx:n, nodeId:t[
            n
          ].id, nodeIdxs:o, neighbors:a, neighborNum:o.length-1, nodeLabelCountMap:s
        }
      }, lt=function(t, e, n, r){
        var i=n.nodes;
        return r||(r={
        }), Object.keys(t).forEach((function(o){
          var a, s;
          if(!r||!r[
            o
          ]){
            r[
              o
            ]
            ={
              nodes:[
              ], edges:[
              ]
            };
            var u=t[
              o
            ], c=null===(a=e[
              u.start
            ])||void 0===a?void 0:a.nodeIdxs, d=null===(s=e[
              u.end
            ])||void 0===s?void 0:s.nodeIdxs;
            if(c&&d){
              var h=new Set(d), l=c.filter((function(t){
                return h.has(t)
              }));
              if(l&&l.length){
                for(var f={
                }, p=l.length, g=0;
                g<p;
                g++){
                  var v=i[
                    l[
                      g
                    ]
                  ];
                  r[
                    o
                  ].nodes.push(v), f[
                    v.id
                  ]
                  =!0
                }
                n.edges.forEach((function(t){
                  f[
                    t.source
                  ]
                  &&f[
                    t.target
                  ]
                  &&r[
                    o
                  ].edges.push(t)
                }))
              }
            }
          }
        })), r
      }, ft=function(t, e, n, r){
        var i, o, a={
        };
        t.nodes.forEach((function(t){
          a[
            t.id
          ]
          =t
        }));
        var s=0;
        return!(null===(i=null==e?void 0:e.edges)||void 0===i?void 0:i.length)||(null===(o=null==e?void 0:e.nodes)||void 0===o?void 0:o.length)<2?0:(t.edges.forEach((function(t){
          var i=a[
            t.source
          ]
          [
            n
          ], o=a[
            t.target
          ]
          [
            n
          ], u=null==e?void 0:e.nodes[
            0
          ]
          [
            n
          ], c=null==e?void 0:e.nodes[
            1
          ]
          [
            n
          ], d=null==e?void 0:e.edges[
            0
          ]
          [
            r
          ];
          t[
            r
          ]
          ===d&&(i===u&&o===c||i===c&&o===u)&&s++
        })), s)
      }, pt=function(t, e){
        var n={
        }, r={
        };
        return t.forEach((function(t, i){
          n[
            t.id
          ]
          ={
            idx:i, node:t, degree:0, inDegree:0, outDegree:0
          };
          var o=t[
            e
          ];
          r[
            o
          ]
          ||(r[
            o
          ]
          =[
          ]), r[
            o
          ].push(t)
        })), {
          nodeMap:n, nodeLabelMap:r
        }
      }, gt=function(t, e, n){
        var r={
        }, i={
        };
        return t.forEach((function(t, o){
          r[
            "".concat(d)
          ]
          ={
            idx:o, edge:t
          };
          var a=t[
            e
          ];
          i[
            a
          ]
          ||(i[
            a
          ]
          =[
          ]), i[
            a
          ].push(t);
          var s=n[
            t.source
          ];
          s&&(s.degree++, s.outDegree++);
          var u=n[
            t.target
          ];
          u&&(u.degree++, u.inDegree++)
        })), {
          edgeMap:r, edgeLabelMap:i
        }
      }, vt=function(t, e, n){
        var r=e.length, i={
        };
        return e.forEach((function(e, o){
          for(var a=n?0:o+1, s=t[
            o
          ].id, u=a;
          u<r;
          u++)if(o!==u){
            var c=t[
              u
            ].id, d=e[
              u
            ];
            i[
              "".concat(s, "-").concat(c)
            ]
            =d, n||(i[
              "".concat(c, "-").concat(s)
            ]
            =d)
          }
        })), i
      }, yt=function(t, e, n, r, i, o, a, s, u, c, d){
        var h, l="".concat(e.id, "-").concat(n.id);
        if(c&&c[
          l
        ])return c[
          l
        ];
        var f=d?d[
          l
        ]
        :void 0;
        if(!f){
          var p=((h={
          })[
            l
          ]
          ={
            start:r[
              e.id
            ].idx, end:r[
              n.id
            ].idx, distance:i
          }, h);
          f=(d=lt(p, o, t, d))[
            l
          ]
        }
        return ft(f, a, s, u)
      }, mt=function(t, e, n, r){
        var i, o, a, s=null===(i=t[
          e
        ])||void 0===i?void 0:i.degree, u=null===(o=t[
          e
        ])||void 0===o?void 0:o.inDegree, c=null===(a=t[
          e
        ])||void 0===a?void 0:a.outDegree;
        return void 0===t[
          e
        ]
        &&(s=1/0, u=1/0, c=1/0, r[
          e
        ].forEach((function(t){
          var e=n[
            t.id
          ].degree;
          s>e&&(s=e);
          var r=n[
            t.id
          ].inDegree;
          u>r&&(u=r);
          var i=n[
            t.id
          ].outDegree;
          c>i&&(c=i)
        })), t[
          e
        ]
        ={
          degree:s, inDegree:u, outDegree:c
        }), {
          minPatternNodeLabelDegree:s, minPatternNodeLabelInDegree:u, minPatternNodeLabelOutDegree:c
        }
      };
      const bt=function(t, e, n, r, i, o, a){
        var s;
        if(void 0===n&&(n=!1), void 0===o&&(o="cluster"), void 0===a&&(a="cluster"), t&&t.nodes){
          var u=t.nodes.length;
          if(u){
            var c=N(t, n), d=N(e, n), h=vt(t.nodes, c, n), l=vt(e.nodes, d, n), f=pt(t.nodes, o), p=f.nodeMap, g=f.nodeLabelMap, v=pt(e.nodes, o), y=v.nodeMap, m=v.nodeLabelMap;
            gt(t.edges, a, p);
            var b=gt(e.edges, a, y).edgeLabelMap, x=[
            ];
            null==d||d.forEach((function(t){
              x=x.concat(t)
            })), i||(i=Math.max.apply(Math, (0, w.__spreadArray)((0, w.__spreadArray)([
            ], x, !1), [
              2
            ], !1))), r||(r=i);
            var E=dt(t, c, o, r), M=dt(e, d, o, r), A=function(t, e, n, r, i){
              var o=Math.ceil(n/e), a={
              }, s=0;
              return r.forEach((function(t, r){
                for(var u=0, c=0, d=t.nodeIdxs, h=t.neighborNum-1;
                u<o;
                ){
                  for(var l=d[
                    1+Math.floor(Math.random()*h)
                  ], f=0;
                  (a[
                    "".concat(r, "-").concat(l)
                  ]
                  ||a[
                    "".concat(l, "-").concat(r)
                  ])&&(l=Math.floor(Math.random()*e), !(++f>2*e));
                  );
                  if(f<2*e&&(a[
                    "".concat(r, "-").concat(l)
                  ]
                  ={
                    start:r, end:l, distance:i[
                      r
                    ]
                    [
                      l
                    ]
                  }, u++, ++s>=n))return a;
                  if(++c>2*e)break
                }
                u<o&&(o=(o+(o-u))/(e-r-1))
              })), a
            }
            (0, u, Math.min(100, u*(u-1)/2), E, c), C=lt(A, E, t), _=ct({
              graphs:C, nodeLabelProp:o, edgeLabelProp:a, minSupport:1, minNodeNum:1, maxNodeNum:4, directed:n
            }).slice(0, 10), k=_.length, P=[
            ];
            _.forEach((function(t, e){
              P[
                e
              ]
              ={
              }, Object.keys(C).forEach((function(n){
                var r=C[
                  n
                ], i=ft(r, t, o, a);
                P[
                  e
                ]
                [
                  n
                ]
                =i
              }))
            }));
            var I=function(t, e, n){
              for(var r=1/0, i=0, o=function(e){
                var n=t[
                  e
                ], o=Object.keys(n).sort((function(t, e){
                  return n[
                    t
                  ]
                  -n[
                    e
                  ]
                })), a=[
                ];
                o.forEach((function(t, e){
                  a[
                    e%10
                  ]
                  ||(a[
                    e%10
                  ]
                  ={
                    graphs:[
                    ], totalCount:0, aveCount:0
                  }), a[
                    e%10
                  ].graphs.push(t), a[
                    e%10
                  ].totalCount+=n[
                    t
                  ]
                }));
                var s=0, u=[
                ];
                a.forEach((function(t){
                  var e=t.totalCount/t.graphs.length;
                  t.aveCount=e, u.push(e);
                  var r=0, i=t.length;
                  t.graphs.forEach((function(e, i){
                    var o=n[
                      e
                    ];
                    t.graphs.forEach((function(t, e){
                      i!==e&&(r+=Math.abs(o-n[
                        t
                      ]))
                    }))
                  })), s+=r/=i*(i-1)/2
                })), s/=a.length;
                var c=0;
                u.forEach((function(t, e){
                  u.forEach((function(n, r){
                    e!==r&&(c+=Math.abs(t-n))
                  })), c/=u.length*(u.length-1)/2
                }));
                var d=c-s;
                r<d&&(r=d, i=e)
              }, a=0;
              a<e;
              a++)o(a);
              return{
                structure:n[
                  i
                ], structureCountMap:t[
                  i
                ]
              }
            }
            (P, k, _), S=I.structure, D=I.structureCountMap, O=e.nodes[
              0
            ], j=[
            ], T=null===(s=e.nodes[
              0
            ])||void 0===s?void 0:s[
              o
            ], B=-1/0;
            e.nodes.forEach((function(t){
              var e=t[
                o
              ], n=g[
                e
              ];
              (null==n?void 0:n.length)>B&&(B=n.length, j=n, T=e, O=t)
            }));
            var F={
            }, R={
            }, q={
            }, X={
            }, Y={
            }, G={
            };
            Object.keys(m).forEach((function(r, i){
              Y[
                r
              ]
              =[
              ], n&&(G[
                r
              ]
              =[
              ]);
              var s=-1/0, u=m[
                r
              ], c={
              };
              u.forEach((function(t){
                var e=l[
                  "".concat(O.id, "-").concat(t.id)
                ];
                if(e&&Y[
                  r
                ].push(e), s<e&&(s=e), c[
                  "".concat(O.id, "-").concat(t.id)
                ]
                ={
                  start:0, end:y[
                    t.id
                  ].idx, distance:e
                }, n){
                  var i=l[
                    "".concat(t.id, "-").concat(O.id)
                  ];
                  i&&G[
                    r
                  ].push(i)
                }
              })), Y[
                r
              ]
              =Y[
                r
              ].sort((function(t, e){
                return t-e
              })), n&&(G[
                r
              ]
              =G[
                r
              ].sort((function(t, e){
                return t-e
              }))), R=lt(c, M, e, R);
              var d=[
              ];
              if(Object.keys(c).forEach((function(t){
                if(q[
                  t
                ])d.push(q[
                  t
                ]);
                else{
                  var e=R[
                    t
                  ];
                  q[
                    t
                  ]
                  =ft(e, S, o, a), d.push(q[
                    t
                  ])
                }
              })), d=d.sort((function(t, e){
                return e-t
              })), X[
                "".concat(O.id, "-").concat(r)
              ]
              =d, r!==T)for(var f=function(e){
                var n=j[
                  e
                ], i=E[
                  p[
                    n.id
                  ].idx
                ], s=i.nodeLabelCountMap[
                  r
                ], u=m[
                  r
                ].length;
                if(!s||s.count<u)return j.splice(e, 1), "continue";
                for(var c=!1, l=0;
                l<u;
                l++)if(s.dists[
                  l
                ]
                >Y[
                  r
                ]
                [
                  l
                ]){
                  c=!0;
                  break
                }
                if(c)return j.splice(e, 1), "continue";
                var f={
                };
                i.neighbors.forEach((function(t){
                  var e=h[
                    "".concat(n.id, "-").concat(t.id)
                  ];
                  f[
                    "".concat(n.id, "-").concat(t.id)
                  ]
                  ={
                    start:p[
                      n.id
                    ].idx, end:p[
                      t.id
                    ].idx, distance:e
                  }
                })), C=lt(f, E, t, C);
                var g=[
                ];
                Object.keys(f).forEach((function(t){
                  if(D[
                    t
                  ])g.push(D[
                    t
                  ]);
                  else{
                    var e=C[
                      t
                    ];
                    D[
                      t
                    ]
                    =ft(e, S, o, a), g.push(D[
                      t
                    ])
                  }
                })), g=g.sort((function(t, e){
                  return e-t
                }));
                var v=!1;
                for(l=0;
                l<u;
                l++)if(g[
                  l
                ]
                <d[
                  l
                ]){
                  v=!0;
                  break
                }
                return v?(j.splice(e, 1), "continue"):void 0
              }, g=((null==j?void 0:j.length)||0)-1;
              g>=0;
              g--)f(g)
            }));
            var H=[
            ];
            null==j||j.forEach((function(r){
              for(var s=p[
                r.id
              ].idx, u=ht(t.nodes, c[
                s
              ], s, o, i).neighbors, d=!1, l=u.length-1;
              l>=0;
              l--){
                if(u.length+1<e.nodes.length)return void(d=!0);
                var f=u[
                  l
                ], g=f[
                  o
                ];
                if(m[
                  g
                ]
                &&m[
                  g
                ].length)if(Y[
                  g
                ]
                &&Y[
                  g
                ].length){
                  var v="".concat(r.id, "-").concat(f.id), b=h[
                    v
                  ], x=Y[
                    g
                  ].length-1;
                  if(b>Y[
                    g
                  ]
                  [
                    x
                  ])u.splice(l, 1);
                  else{
                    if(n){
                      var M="".concat(f.id, "-").concat(r.id), A=h[
                        M
                      ];
                      if(x=G[
                        g
                      ].length-1, A>G[
                        g
                      ]
                      [
                        x
                      ]){
                        u.splice(l, 1);
                        continue
                      }
                    }
                    var w=D[
                      v
                    ]
                    ?D[
                      v
                    ]
                    :yt(t, r, f, p, b, E, S, o, a, D, C), L="".concat(O.id, "-").concat(g);
                    if(w<X[
                      L
                    ]
                    [
                      X[
                        L
                      ].length-1
                    ])u.splice(l, 1);
                    else{
                      var _=mt(F, g, y, m), k=_.minPatternNodeLabelDegree;
                      _.minPatternNodeLabelInDegree, _.minPatternNodeLabelOutDegree;
                      p[
                        f.id
                      ].degree<k&&u.splice(l, 1)
                    }
                  }
                }
                else u.splice(l, 1);
                else u.splice(l, 1)
              }
              d||H.push({
                nodes:[
                  r
                ].concat(u)
              })
            }));
            var U=L(e, O.id, !1).length, V={
            };
            n?(Object.keys(U).forEach((function(t){
              var e=y[
                t
              ].node[
                o
              ];
              V[
                e
              ]
              ?V[
                e
              ].push(U[
                t
              ]):V[
                e
              ]
              =[
                U[
                  t
                ]
              ]
            })), Object.keys(V).forEach((function(t){
              V[
                t
              ].sort((function(t, e){
                return t-e
              }))
            }))):V=Y;
            for(var z=function(r){
              var i=H[
                r
              ], s=i.nodes[
                0
              ], u={
              }, c={
              };
              i.nodes.forEach((function(t, e){
                c[
                  t.id
                ]
                ={
                  idx:e, node:t, degree:0, inDegree:0, outDegree:0
                };
                var n=t[
                  o
                ];
                u[
                  n
                ]
                ?u[
                  n
                ]
                ++:u[
                  n
                ]
                =1
              }));
              var d=[
              ], h={
              };
              t.edges.forEach((function(t){
                c[
                  t.source
                ]
                &&c[
                  t.target
                ]
                &&(d.push(t), h[
                  t[
                    a
                  ]
                ]
                ?h[
                  t[
                    a
                  ]
                ]
                ++:h[
                  t[
                    a
                  ]
                ]
                =1, c[
                  t.source
                ].degree++, c[
                  t.target
                ].degree++, c[
                  t.source
                ].outDegree++, c[
                  t.target
                ].inDegree++)
              }));
              for(var l=Object.keys(b).length, f=!1, g=0;
              g<l;
              g++){
                var v=Object.keys(b)[
                  g
                ];
                if(!h[
                  v
                ]
                ||h[
                  v
                ]
                <b[
                  v
                ].length){
                  f=!0;
                  break
                }
              }
              if(f)return H.splice(r, 1), "continue";
              var x=d.length;
              if(x<e.edges.length)return H.splice(r, 1), "break";
              var E=!1, M=function(t){
                var e=d[
                  t
                ], r=e[
                  a
                ], i=b[
                  r
                ];
                if(!i||!i.length)return h[
                  r
                ]
                --, i&&h[
                  r
                ]
                <i.length?(E=!0, "break"):(d.splice(t, 1), c[
                  e.source
                ].degree--, c[
                  e.target
                ].degree--, c[
                  e.source
                ].outDegree--, c[
                  e.target
                ].inDegree--, "continue");
                var s=c[
                  e.source
                ].node[
                  o
                ], u=c[
                  e.target
                ].node[
                  o
                ], l=!1;
                return i.forEach((function(t){
                  var e=y[
                    t.source
                  ].node, r=y[
                    t.target
                  ].node;
                  e[
                    o
                  ]
                  ===s&&r[
                    o
                  ]
                  ===u&&(l=!0), n||e[
                    o
                  ]
                  !==u||r[
                    o
                  ]
                  !==s||(l=!0)
                })), l?void 0:(h[
                  r
                ]
                --, i&&h[
                  r
                ]
                <i.length?(E=!0, "break"):(d.splice(t, 1), c[
                  e.source
                ].degree--, c[
                  e.target
                ].degree--, c[
                  e.source
                ].outDegree--, c[
                  e.target
                ].inDegree--, "continue"))
              };
              for(g=x-1;
              g>=0;
              g--){
                if("break"===M(g))break
              }
              if(E)return H.splice(r, 1), "continue";
              i.edges=d;
              var A=L(i, i.nodes[
                0
              ].id, !1).length;
              if(Object.keys(A).reverse().forEach((function(t){
                if(t!==i.nodes[
                  0
                ].id&&!E){
                  if(A[
                    t
                  ]
                  ===1/0){
                    var e=c[
                      t
                    ].node[
                      o
                    ];
                    if(u[
                      e
                    ]
                    --, u[
                      e
                    ]
                    <m[
                      e
                    ].length)return void(E=!0);
                    var n=i.nodes.indexOf(c[
                      t
                    ].node);
                    return i.nodes.splice(n, 1), void(c[
                      t
                    ]
                    =void 0)
                  }
                  var r=p[
                    t
                  ].node[
                    o
                  ];
                  if(!V[
                    r
                  ]
                  ||!V[
                    r
                  ].length||A[
                    t
                  ]
                  >V[
                    r
                  ]
                  [
                    V[
                      r
                    ].length-1
                  ]){
                    e=c[
                      t
                    ].node[
                      o
                    ];
                    if(u[
                      e
                    ]
                    --, u[
                      e
                    ]
                    <m[
                      e
                    ].length)return void(E=!0);
                    n=i.nodes.indexOf(c[
                      t
                    ].node);
                    i.nodes.splice(n, 1), c[
                      t
                    ]
                    =void 0
                  }
                }
              })), E)return H.splice(r, 1), "continue";
              for(var w=!0, C=0;
              w&&!E;
              ){
                if(w=!1, n?c[
                  s.id
                ].degree<y[
                  O.id
                ].degree||c[
                  s.id
                ].inDegree<y[
                  O.id
                ].inDegree||c[
                  s.id
                ].outDegree<y[
                  O.id
                ].outDegree:c[
                  s.id
                ].degree<y[
                  O.id
                ].degree){
                  E=!0;
                  break
                }
                if(u[
                  s[
                    o
                  ]
                ]
                <m[
                  s[
                    o
                  ]
                ].length){
                  E=!0;
                  break
                }
                for(var _=i.nodes.length-1;
                _>=0;
                _--){
                  var k=i.nodes[
                    _
                  ], P=c[
                    k.id
                  ].degree, N=c[
                    k.id
                  ].inDegree, I=c[
                    k.id
                  ].outDegree, S=k[
                    o
                  ], D=mt(F, S, y, m), j=D.minPatternNodeLabelDegree, T=D.minPatternNodeLabelInDegree, B=D.minPatternNodeLabelOutDegree;
                  if(n?P<j||N<T||I<B:P<j){
                    if(u[
                      k[
                        o
                      ]
                    ]
                    --, u[
                      k[
                        o
                      ]
                    ]
                    <m[
                      k[
                        o
                      ]
                    ].length){
                      E=!0;
                      break
                    }
                    i.nodes.splice(_, 1), c[
                      k.id
                    ]
                    =void 0, w=!0
                  }
                }
                if(E||!w&&0!==C)break;
                for(var R=(x=d.length)-1;
                R>=0;
                R--){
                  var q=d[
                    R
                  ];
                  if(!c[
                    q.source
                  ]
                  ||!c[
                    q.target
                  ]){
                    d.splice(R, 1);
                    var X=q[
                      a
                    ];
                    if(h[
                      X
                    ]
                    --, c[
                      q.source
                    ]
                    &&(c[
                      q.source
                    ].degree--, c[
                      q.source
                    ].outDegree--), c[
                      q.target
                    ]
                    &&(c[
                      q.target
                    ].degree--, c[
                      q.target
                    ].inDegree--), b[
                      X
                    ]
                    &&h[
                      X
                    ]
                    <b[
                      X
                    ].length){
                      E=!0;
                      break
                    }
                    w=!0
                  }
                }
                C++
              }
              return E||E||i.nodes.length<e.nodes.length||d.length<e.edges.length?(H.splice(r, 1), "continue"):void 0
            }, W=H.length-1;
            W>=0;
            W--){
              if("break"===z(W))break
            }
            var Z=H.length, Q=function(t){
              var e=H[
                t
              ], n={
              };
              e.edges.forEach((function(t){
                var e="".concat(t.source, "-").concat(t.target, "-").concat(t.label);
                n[
                  e
                ]
                ?n[
                  e
                ]
                ++:n[
                  e
                ]
                =1
              }));
              for(var r=function(t){
                var e=H[
                  t
                ], r={
                };
                e.edges.forEach((function(t){
                  var e="".concat(t.source, "-").concat(t.target, "-").concat(t.label);
                  r[
                    e
                  ]
                  ?r[
                    e
                  ]
                  ++:r[
                    e
                  ]
                  =1
                }));
                var i=!0;
                Object.keys(r).length!==Object.keys(n).length?i=!1:Object.keys(n).forEach((function(t){
                  r[
                    t
                  ]
                  !==n[
                    t
                  ]
                  &&(i=!1)
                })), i&&H.splice(t, 1)
              }, i=Z-1;
              i>t;
              i--)r(i);
              Z=H.length
            };
            for(W=0;
            W<=Z-1;
            W++)Q(W);
            return H
          }
        }
      };
      var xt=function(){
        function t(t){
          void 0===t&&(t=10), this.linkedList=new a, this.maxStep=t
        }
        return Object.defineProperty(t.prototype, "length", {
          get:function(){
            return this.linkedList.toArray().length
          }, enumerable:!1, configurable:!0
        }), t.prototype.isEmpty=function(){
          return!this.linkedList.head
        }, t.prototype.isMaxStack=function(){
          return this.toArray().length>=this.maxStep
        }, t.prototype.peek=function(){
          return this.isEmpty()?null:this.linkedList.head.value
        }, t.prototype.push=function(t){
          this.linkedList.prepend(t), this.length>this.maxStep&&this.linkedList.deleteTail()
        }, t.prototype.pop=function(){
          var t=this.linkedList.deleteHead();
          return t?t.value:null
        }, t.prototype.toArray=function(){
          return this.linkedList.toArray().map((function(t){
            return t.value
          }))
        }, t.prototype.clear=function(){
          for(;
          !this.isEmpty();
          )this.pop()
        }, t
      }
      ();
      const Et=xt;
      var Mt=A;
      const At={
        getAdjMatrix:r, breadthFirstSearch:h, connectedComponent:f, getDegree:g, getInDegree:v, getOutDegree:y, detectCycle:A, detectDirectedCycle:A, detectAllCycles:M, detectAllDirectedCycle:E, detectAllUndirectedCycle:x, depthFirstSearch:b, dijkstra:L, findAllPath:P, findShortestPath:k, floydWarshall:N, labelPropagation:I, louvain:q, iLouvain:X, kCore:Y, kMeans:H, cosineSimilarity:U, nodesCosineSimilarity:V, minimumSpanningTree:K, pageRank:J, getNeighbors:u, Stack:xt, GADDI:bt
      }
    }, 328834:(t, e, n)=>{
      function r(t, e){
        if(t)for(var n in e)e.hasOwnProperty(n)&&(t.style[
          n
        ]
        =e[
          n
        ]);
        return t
      }
      n.d(e, {
        A:()=>r
      })
    }, 330248:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r, i=n(922274), o=(r=n(988346))&&r.__esModule?r:{
        default:r
      };
      var a=function(t){
        return function(){
          for(var e=[
          ], n=0;
          n<arguments.length;
          n++)e[
            n
          ]
          =arguments[
            n
          ];
          return new Promise((function(n, r){
            var a=new o.default;
            a.postMessage({
              _algorithmType:t, data:e
            }), a.onmessage=function(t){
              var e=t.data, o=e.data, s=e._algorithmType;
              i.MESSAGE.SUCCESS===s?n(o):r(), a.terminate()
            }
          }))
        }
      };
      e.default=a
    }, 338785:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.findShortestPath=e.findAllPath=void 0;
      var r, i=(r=n(107304))&&r.__esModule?r:{
        default:r
      }, o=n(434170);
      e.findShortestPath=function(t, e, n, r, o){
        var a=(0, i.default)(t, e, r, o), s=a.length, u=a.path, c=a.allPath;
        return{
          length:s[
            n
          ], path:u[
            n
          ], allPath:c[
            n
          ]
        }
      };
      e.findAllPath=function(t, e, n, r){
        var i;
        if(e===n)return[
          [
            e
          ]
        ];
        var a=t.edges, s=void 0===a?[
        ]
        :a, u=[
          e
        ], c=((i={
        })[
          e
        ]
        =!0, i), d=[
        ], h=[
        ], l=r?(0, o.getNeighbors)(e, s, "target"):(0, o.getNeighbors)(e, s);
        for(d.push(l);
        u.length>0&&d.length>0;
        ){
          var f=d[
            d.length-1
          ];
          if(f.length){
            var p=f.shift();
            if(p&&(u.push(p), c[
              p
            ]
            =!0, l=r?(0, o.getNeighbors)(p, s, "target"):(0, o.getNeighbors)(p, s), d.push(l.filter((function(t){
              return!c[
                t
              ]
            })))), u[
              u.length-1
            ]
            ===n){
              var g=u.map((function(t){
                return t
              }));
              h.push(g);
              v=u.pop();
              c[
                v
              ]
              =!1, d.pop()
            }
          }
          else{
            var v=u.pop();
            c[
              v
            ]
            =!1, d.pop()
          }
        }
        return h
      }
    }, 365518:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r=a(n(146212)), i=a(n(842215)), o=n(434170);
      function a(t){
        return t&&t.__esModule?t:{
          default:t
        }
      }
      var s=function(t, e){
        var n=[
        ], r=t.nodes, a=void 0===r?[
        ]
        :r, s=t.edges, u=void 0===s?[
        ]
        :s;
        if(0===a.length)return n;
        var c=a[
          0
        ], d=new Set;
        d.add(c);
        var h=new i.default((function(t, n){
          return e?t.weight-n.weight:0
        }));
        for((0, o.getEdgesByNodeId)(c.id, u).forEach((function(t){
          h.insert(t)
        }));
        !h.isEmpty();
        ){
          var l=h.delMin(), f=l.source, p=l.target;
          d.has(f)&&d.has(p)||(n.push(l), d.has(f)||(d.add(f), (0, o.getEdgesByNodeId)(f, u).forEach((function(t){
            h.insert(t)
          }))), d.has(p)||(d.add(p), (0, o.getEdgesByNodeId)(p, u).forEach((function(t){
            h.insert(t)
          }))))
        }
        return n
      }, u=function(t, e){
        var n=[
        ], i=t.nodes, o=void 0===i?[
        ]
        :i, a=t.edges, s=void 0===a?[
        ]
        :a;
        if(0===o.length)return n;
        var u=s.map((function(t){
          return t
        }));
        e&&u.sort((function(t, e){
          return t.weight-e.weight
        }));
        for(var c=new r.default(o.map((function(t){
          return t.id
        })));
        u.length>0;
        ){
          var d=u.shift(), h=d.source, l=d.target;
          c.connected(h, l)||(n.push(d), c.union(h, l))
        }
        return n
      }, c=function(t, e, n){
        return n?{
          prim:s, kruskal:u
        }
        [
          n
        ]
        (t, e):u(t, e)
      };
      e.default=c
    }, 371678:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r=n(224425), i=u(n(710168)), o=u(n(516831)), a=n(7668), s=n(683767);
      function u(t){
        return t&&t.__esModule?t:{
          default:t
        }
      }
      var c=function(t, e, n, r){
        for(var i=e.length, o=2*r, a=0, s=0;
        s<i;
        s++)for(var u=t[
          s
        ].clusterId, c=0;
        c<i;
        c++){
          if(u===t[
            c
          ].clusterId)a+=(e[
            s
          ]
          [
            c
          ]
          ||0)-(n[
            s
          ]
          ||0)*(n[
            c
          ]
          ||0)/o
        }
        return a*=1/o
      }, d=function(t, e){
        void 0===t&&(t=[
        ]);
        for(var n=t.length, r=new o.default([
        ]), i=0;
        i<n;
        i++)r=r.add(new o.default(e[
          i
        ]));
        var a=r.avg(n);
        a.normalize();
        var s=0;
        for(i=0;
        i<n;
        i++){
          s+=(c=new o.default(e[
            i
          ])).squareEuclideanDistance(a)
        }
        var u=[
        ];
        t.forEach((function(){
          u.push([
          ])
        }));
        for(i=0;
        i<n;
        i++){
          var c=new o.default(e[
            i
          ]);
          t[
            i
          ].clusterInertial=0;
          for(var d=0;
          d<n;
          d++)if(i!==d){
            var h=new o.default(e[
              d
            ]);
            u[
              i
            ]
            [
              d
            ]
            =c.squareEuclideanDistance(h), t[
              i
            ].clusterInertial+=u[
              i
            ]
            [
              d
            ]
          }
          else u[
            i
          ]
          [
            d
          ]
          =0
        }
        var l=0, f=2*n*s;
        for(i=0;
        i<n;
        i++){
          var p=t[
            i
          ].clusterId;
          for(d=0;
          d<n;
          d++){
            var g=t[
              d
            ].clusterId;
            if(i!==d&&p===g)l+=t[
              i
            ].clusterInertial*t[
              d
            ].clusterInertial/Math.pow(f, 2)-u[
              i
            ]
            [
              d
            ]
            /f
          }
        }
        return Number(l.toFixed(4))
      }, h=function(t, e, n, o, u, h, l, f, p){
        void 0===e&&(e=!1), void 0===n&&(n="weight"), void 0===o&&(o=1e-4), void 0===u&&(u=!1), void 0===h&&(h=void 0), void 0===l&&(l=[
        ]), void 0===f&&(f=[
          "id"
        ]), void 0===p&&(p=1);
        var g=t.nodes, v=void 0===g?[
        ]
        :g, y=t.edges, m=void 0===y?[
        ]
        :y, b=[
        ];
        if(u){
          v.forEach((function(t, e){
            t.properties=t.properties||{
            }, t.originIndex=e
          }));
          var x=[
          ];
          v.every((function(t){
            return t.hasOwnProperty("nodeType")
          }))&&(x=Array.from(new Set(v.map((function(t){
            return t.nodeType
          })))), v.forEach((function(t){
            t.properties.nodeType=x.findIndex((function(e){
              return e===t.nodeType
            }))
          })));
          var E=(0, a.getAllProperties)(v, h);
          b=(0, s.oneHot)(E, l, f)
        }
        var M=1, A={
        }, w={
        };
        v.forEach((function(t, e){
          var n=String(M++);
          t.clusterId=n, A[
            n
          ]
          ={
            id:n, nodes:[
              t
            ]
          }, w[
            t.id
          ]
          ={
            node:t, idx:e
          }
        }));
        var C=(0, i.default)(t, e), L=[
        ], _={
        }, k=0;
        C.forEach((function(t, e){
          var n=0, r=v[
            e
          ].id;
          _[
            r
          ]
          ={
          }, t.forEach((function(t, e){
            if(t){
              n+=t;
              var i=v[
                e
              ].id;
              _[
                r
              ]
              [
                i
              ]
              =t, k+=t
            }
          })), L.push(n)
        })), k/=2;
        for(var P=1/0, N=1/0, I=0, S=[
        ], D={
        };
        ;
        ){
          P=u&&v.every((function(t){
            return t.hasOwnProperty("properties")
          }))?c(v, C, L, k)+d(v, b)*p:c(v, C, L, k), 0===I&&(N=P, S=v, D=A);
          var O=P>0&&P>N&&P-N<o;
          if(P>N&&(S=v.map((function(t){
            return{
              node:t, clusterId:t.clusterId
            }
          })), D=(0, r.clone)(A), N=P), O||I>100)break;
          I++, Object.keys(A).forEach((function(t){
            var e=0;
            m.forEach((function(r){
              var i=r.source, o=r.target, a=w[
                i
              ].node.clusterId, s=w[
                o
              ].node.clusterId;
              (a===t&&s!==t||s===t&&a!==t)&&(e+=r[
                n
              ]
              ||1)
            })), A[
              t
            ].sumTot=e
          })), v.forEach((function(t, e){
            var r, i=A[
              t.clusterId
            ], o=0, a=L[
              e
            ]
            /(2*k), s=0, c=i.nodes;
            c.forEach((function(t){
              var n=w[
                t.id
              ].idx;
              s+=C[
                e
              ]
              [
                n
              ]
              ||0
            }));
            var h=s-i.sumTot*a, l=c.filter((function(e){
              return e.id!==t.id
            })), f=[
            ];
            l.forEach((function(t, e){
              f[
                e
              ]
              =b[
                t.originIndex
              ]
            }));
            var g=d(l, b)*p, v=_[
              t.id
            ];
            if(Object.keys(v).forEach((function(n){
              var i=w[
                n
              ].node.clusterId;
              if(i!==t.clusterId){
                var s=A[
                  i
                ], c=s.nodes;
                if(c&&c.length){
                  var l=0;
                  c.forEach((function(t){
                    var n=w[
                      t.id
                    ].idx;
                    l+=C[
                      e
                    ]
                    [
                      n
                    ]
                    ||0
                  }));
                  var f=l-s.sumTot*a, v=c.concat([
                    t
                  ]), y=[
                  ];
                  v.forEach((function(t, e){
                    y[
                      e
                    ]
                    =b[
                      t.originIndex
                    ]
                  }));
                  var m=d(v, b)*p, x=f-h;
                  u&&(x=f+m-(h+g)), x>o&&(o=x, r=s)
                }
              }
            })), o>0){
              r.nodes.push(t);
              var y=t.clusterId;
              t.clusterId=r.id;
              var x=i.nodes.indexOf(t);
              i.nodes.splice(x, 1);
              var E=0, M=0;
              m.forEach((function(t){
                var e=t.source, i=t.target, o=w[
                  e
                ].node.clusterId, a=w[
                  i
                ].node.clusterId;
                (o===r.id&&a!==r.id||a===r.id&&o!==r.id)&&(E+=t[
                  n
                ]
                ||1), (o===y&&a!==y||a===y&&o!==y)&&(M+=t[
                  n
                ]
                ||1)
              })), r.sumTot=E, i.sumTot=M
            }
          }))
        }
        var j={
        }, T=0;
        Object.keys(D).forEach((function(t){
          var e=D[
            t
          ];
          if(e.nodes&&e.nodes.length){
            var n=String(T+1);
            n!==t&&(e.id=n, e.nodes=e.nodes.map((function(t){
              return{
                id:t.id, clusterId:n
              }
            })), D[
              n
            ]
            =e, j[
              t
            ]
            =n, delete D[
              t
            ], T++)
          }
          else delete D[
            t
          ]
        })), S.forEach((function(t){
          var e=t.node, n=t.clusterId;
          e&&(e.clusterId=n, e.clusterId&&j[
            e.clusterId
          ]
          &&(e.clusterId=j[
            e.clusterId
          ]))
        }));
        var B=[
        ], F={
        };
        m.forEach((function(t){
          var e=t.source, r=t.target, i=t[
            n
          ]
          ||1, o=w[
            e
          ].node.clusterId, a=w[
            r
          ].node.clusterId;
          if(o&&a){
            var s="".concat(o, "---").concat(a);
            if(F[
              s
            ])F[
              s
            ].weight+=i, F[
              s
            ].count++;
            else{
              var u={
                source:o, target:a, weight:i, count:1
              };
              F[
                s
              ]
              =u, B.push(u)
            }
          }
        }));
        var R=[
        ];
        return Object.keys(D).forEach((function(t){
          R.push(D[
            t
          ])
        })), {
          clusters:R, clusterEdges:B
        }
      };
      e.default=h
    }, 397465:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.secondReg=e.dateReg=void 0;
      e.secondReg=/^(\d{
        1, 4
      })(-|\/)(\d{
        1, 2
      })\2(\d{
        1, 2
      })$/;
      e.dateReg=/^(\d{
        1, 4
      })(-|\/)(\d{
        1, 2
      })\2(\d{
        1, 2
      }) (\d{
        1, 2
      }):(\d{
        1, 2
      }):(\d{
        1, 2
      })$/
    }, 405321:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r, i=(r=n(710168))&&r.__esModule?r:{
        default:r
      }, o=n(434170);
      var a=function(t, e, n, r){
        void 0===e&&(e=!1), void 0===n&&(n="weight"), void 0===r&&(r=1e3);
        var a=t.nodes, s=void 0===a?[
        ]
        :a, u=t.edges, c=void 0===u?[
        ]
        :u, d={
        }, h={
        };
        s.forEach((function(t, e){
          var n=(0, o.uniqueId)();
          t.clusterId=n, d[
            n
          ]
          ={
            id:n, nodes:[
              t
            ]
          }, h[
            t.id
          ]
          ={
            node:t, idx:e
          }
        }));
        var l=(0, i.default)(t, e), f=[
        ], p={
        };
        l.forEach((function(t, e){
          var n=0, r=s[
            e
          ].id;
          p[
            r
          ]
          ={
          }, t.forEach((function(t, e){
            if(t){
              n+=t;
              var i=s[
                e
              ].id;
              p[
                r
              ]
              [
                i
              ]
              =t
            }
          })), f.push(n)
        }));
        for(var g=0, v=function(){
          var t=!1;
          if(s.forEach((function(e){
            var n={
            };
            Object.keys(p[
              e.id
            ]).forEach((function(t){
              var r=p[
                e.id
              ]
              [
                t
              ], i=h[
                t
              ].node.clusterId;
              n[
                i
              ]
              ||(n[
                i
              ]
              =0), n[
                i
              ]
              +=r
            }));
            var r=-1/0, i=[
            ];
            if(Object.keys(n).forEach((function(t){
              r<n[
                t
              ]
              ?(r=n[
                t
              ], i=[
                t
              ]):r===n[
                t
              ]
              &&i.push(t)
            })), 1!==i.length||i[
              0
            ]
            !==e.clusterId){
              var o=i.indexOf(e.clusterId);
              if(o>=0&&i.splice(o, 1), i&&i.length){
                t=!0;
                var a=d[
                  e.clusterId
                ], s=a.nodes.indexOf(e);
                a.nodes.splice(s, 1);
                var u=Math.floor(Math.random()*i.length), c=d[
                  i[
                    u
                  ]
                ];
                c.nodes.push(e), e.clusterId=c.id
              }
            }
          })), !t)return"break";
          g++
        };
        g<r;
        ){
          if("break"===v())break
        }
        Object.keys(d).forEach((function(t){
          var e=d[
            t
          ];
          e.nodes&&e.nodes.length||delete d[
            t
          ]
        }));
        var y=[
        ], m={
        };
        c.forEach((function(t){
          var e=t.source, r=t.target, i=t[
            n
          ]
          ||1, o=h[
            e
          ].node.clusterId, a=h[
            r
          ].node.clusterId, s="".concat(o, "---").concat(a);
          if(m[
            s
          ])m[
            s
          ].weight+=i, m[
            s
          ].count++;
          else{
            var u={
              source:o, target:a, weight:i, count:1
            };
            m[
              s
            ]
            =u, y.push(u)
          }
        }));
        var b=[
        ];
        return Object.keys(d).forEach((function(t){
          b.push(d[
            t
          ])
        })), {
          clusters:b, clusterEdges:y
        }
      };
      e.default=a
    }, 406165:(t, e)=>{
      var n;
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.DistanceType=void 0, e.DistanceType=n, function(t){
        t.EuclideanDistance="euclideanDistance"
      }
      (n||(e.DistanceType=n={
      }))
    }, 420247:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r, i=(r=n(242378))&&r.__esModule?r:{
        default:r
      }, o=n(434170);
      var a=function(t, e, n){
        "number"!=typeof e&&(e=1e-6), "number"!=typeof n&&(n=.85);
        for(var r, a=1, s=0, u=1e3, c=t.nodes, d=void 0===c?[
        ]
        :c, h=t.edges, l=void 0===h?[
        ]
        :h, f=d.length, p={
        }, g={
        }, v=0;
        v<f;
        ++v){
          p[
            m=(A=d[
              v
            ]).id
          ]
          =1/f, g[
            m
          ]
          =1/f
        }
        for(var y=(0, i.default)(t);
        u>0&&a>e;
        ){
          s=0;
          for(v=0;
          v<f;
          ++v){
            var m=(A=d[
              v
            ]).id;
            if(r=0, 0===y[
              A.id
            ].inDegree)p[
              m
            ]
            =0;
            else{
              for(var b=(0, o.getNeighbors)(m, l, "source"), x=0;
              x<b.length;
              ++x){
                var E=b[
                  x
                ], M=y[
                  E
                ].outDegree;
                M>0&&(r+=g[
                  E
                ]
                /M)
              }
              p[
                m
              ]
              =n*r, s+=p[
                m
              ]
            }
          }
          s=(1-s)/f, a=0;
          for(v=0;
          v<f;
          ++v){
            var A;
            r=p[
              m=(A=d[
                v
              ]).id
            ]
            +s, a+=Math.abs(r-g[
              m
            ]), g[
              m
            ]
            =r
          }
          u-=1
        }
        return g
      };
      e.default=a
    }, 434170:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.uniqueId=e.getOutEdgesNodeId=e.getNeighbors=e.getEdgesByNodeId=void 0;
      e.getNeighbors=function(t, e, n){
        void 0===e&&(e=[
        ]);
        var r=e.filter((function(e){
          return e.source===t||e.target===t
        }));
        if("target"===n){
          return r.filter((function(e){
            return e.source===t
          })).map((function(t){
            return t.target
          }))
        }
        if("source"===n){
          return r.filter((function(e){
            return e.target===t
          })).map((function(t){
            return t.source
          }))
        }
        return r.map((function(e){
          return e.source===t?e.target:e.source
        }))
      };
      e.getOutEdgesNodeId=function(t, e){
        return e.filter((function(e){
          return e.source===t
        }))
      };
      e.getEdgesByNodeId=function(t, e){
        return e.filter((function(e){
          return e.source===t||e.target===t
        }))
      };
      e.uniqueId=function(t){
        void 0===t&&(t=0);
        var e="".concat(Math.random()).split(".")[
          1
        ].substr(0, 5), n="".concat(Math.random()).split(".")[
          1
        ].substr(0, 5);
        return"".concat(t, "-").concat(e).concat(n)
      }
    }, 466051:(t, e, n)=>{
      function r(t, e, n){
        if(t){
          if("function"==typeof t.addEventListener)return t.addEventListener(e, n, !1), {
            remove:function(){
              t.removeEventListener(e, n, !1)
            }
          };
          if("function"==typeof t.attachEvent)return t.attachEvent("on"+e, n), {
            remove:function(){
              t.detachEvent("on"+e, n)
            }
          }
        }
      }
      n.d(e, {
        A:()=>r
      })
    }, 516831:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r=n(224425), i=function(){
        function t(t){
          this.arr=t
        }
        return t.prototype.getArr=function(){
          return this.arr||[
          ]
        }, t.prototype.add=function(e){
          var n, r=e.arr;
          if(!(null===(n=this.arr)||void 0===n?void 0:n.length))return new t(r);
          if(!(null==r?void 0:r.length))return new t(this.arr);
          if(this.arr.length===r.length){
            var i=[
            ];
            for(var o in this.arr)i[
              o
            ]
            =this.arr[
              o
            ]
            +r[
              o
            ];
            return new t(i)
          }
        }, t.prototype.subtract=function(e){
          var n, r=e.arr;
          if(!(null===(n=this.arr)||void 0===n?void 0:n.length))return new t(r);
          if(!(null==r?void 0:r.length))return new t(this.arr);
          if(this.arr.length===r.length){
            var i=[
            ];
            for(var o in this.arr)i[
              o
            ]
            =this.arr[
              o
            ]
            -r[
              o
            ];
            return new t(i)
          }
        }, t.prototype.avg=function(e){
          var n=[
          ];
          if(0!==e)for(var r in this.arr)n[
            r
          ]
          =this.arr[
            r
          ]
          /e;
          return new t(n)
        }, t.prototype.negate=function(){
          var e=[
          ];
          for(var n in this.arr)e[
            n
          ]
          =-this.arr[
            n
          ];
          return new t(e)
        }, t.prototype.squareEuclideanDistance=function(t){
          var e, n=t.arr;
          if(!(null===(e=this.arr)||void 0===e?void 0:e.length)||!(null==n?void 0:n.length))return 0;
          if(this.arr.length===n.length){
            var r=0;
            for(var i in this.arr)r+=Math.pow(this.arr[
              i
            ]
            -t.arr[
              i
            ], 2);
            return r
          }
        }, t.prototype.euclideanDistance=function(t){
          var e, n=t.arr;
          if(!(null===(e=this.arr)||void 0===e?void 0:e.length)||!(null==n?void 0:n.length))return 0;
          if(this.arr.length===n.length){
            var r=0;
            for(var i in this.arr)r+=Math.pow(this.arr[
              i
            ]
            -t.arr[
              i
            ], 2);
            return Math.sqrt(r)
          }
          console.error("The two vectors are unequal in length.")
        }, t.prototype.normalize=function(){
          var e=[
          ], n=(0, r.clone)(this.arr);
          n.sort((function(t, e){
            return t-e
          }));
          var i=n[
            n.length-1
          ], o=n[
            0
          ];
          for(var a in this.arr)e[
            a
          ]
          =(this.arr[
            a
          ]
          -o)/(i-o);
          return new t(e)
        }, t.prototype.norm2=function(){
          var t;
          if(!(null===(t=this.arr)||void 0===t?void 0:t.length))return 0;
          var e=0;
          for(var n in this.arr)e+=Math.pow(this.arr[
            n
          ], 2);
          return Math.sqrt(e)
        }, t.prototype.dot=function(t){
          var e, n=t.arr;
          if(!(null===(e=this.arr)||void 0===e?void 0:e.length)||!(null==n?void 0:n.length))return 0;
          if(this.arr.length===n.length){
            var r=0;
            for(var i in this.arr)r+=this.arr[
              i
            ]
            *t.arr[
              i
            ];
            return r
          }
          console.error("The two vectors are unequal in length.")
        }, t.prototype.equal=function(t){
          var e, n=t.arr;
          if((null===(e=this.arr)||void 0===e?void 0:e.length)!==(null==n?void 0:n.length))return!1;
          for(var r in this.arr)if(this.arr[
            r
          ]
          !==n[
            r
          ])return!1;
          return!0
        }, t
      }
      ();
      e.default=i
    }, 591510:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r, i=(r=n(710168))&&r.__esModule?r:{
        default:r
      };
      var o=function(t, e){
        for(var n=(0, i.default)(t, e), r=[
        ], o=n.length, a=0;
        a<o;
        a+=1){
          r[
            a
          ]
          =[
          ];
          for(var s=0;
          s<o;
          s+=1)a===s?r[
            a
          ]
          [
            s
          ]
          =0:0!==n[
            a
          ]
          [
            s
          ]
          &&n[
            a
          ]
          [
            s
          ]
          ?r[
            a
          ]
          [
            s
          ]
          =n[
            a
          ]
          [
            s
          ]
          :r[
            a
          ]
          [
            s
          ]
          =1/0
        }
        for(var u=0;
        u<o;
        u+=1)for(a=0;
        a<o;
        a+=1)for(s=0;
        s<o;
        s+=1)r[
          a
        ]
        [
          s
        ]
        >r[
          a
        ]
        [
          u
        ]
        +r[
          u
        ]
        [
          s
        ]
        &&(r[
          a
        ]
        [
          s
        ]
        =r[
          a
        ]
        [
          u
        ]
        +r[
          u
        ]
        [
          s
        ]);
        return r
      };
      e.default=o
    }, 642541:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.VACANT_NODE_LABEL=e.VACANT_NODE_ID=e.VACANT_GRAPH_ID=e.VACANT_EDGE_LABEL=e.VACANT_EDGE_ID=e.Node=e.Graph=e.Edge=e.AUTO_EDGE_ID=void 0;
      e.VACANT_EDGE_ID=-1;
      e.VACANT_NODE_ID=-1;
      e.VACANT_EDGE_LABEL="-1";
      e.VACANT_NODE_LABEL="-1";
      e.VACANT_GRAPH_ID=-1;
      e.AUTO_EDGE_ID="-1";
      var n=function(t, e, n, r){
        void 0===t&&(t=-1), void 0===e&&(e=-1), void 0===n&&(n=-1), void 0===r&&(r="-1"), this.id=t, this.from=e, this.to=n, this.label=r
      };
      e.Edge=n;
      var r=function(){
        function t(t, e){
          void 0===t&&(t=-1), void 0===e&&(e="-1"), this.id=t, this.label=e, this.edges=[
          ], this.edgeMap={
          }
        }
        return t.prototype.addEdge=function(t){
          this.edges.push(t), this.edgeMap[
            t.id
          ]
          =t
        }, t
      }
      ();
      e.Node=r;
      var i=function(){
        function t(t, e, n){
          void 0===t&&(t=-1), void 0===e&&(e=!0), void 0===n&&(n=!1), this.id=t, this.edgeIdAutoIncrease=e, this.edges=[
          ], this.nodes=[
          ], this.nodeMap={
          }, this.edgeMap={
          }, this.nodeLabelMap={
          }, this.edgeLabelMap={
          }, this.counter=0, this.directed=n
        }
        return t.prototype.getNodeNum=function(){
          return this.nodes.length
        }, t.prototype.addNode=function(t, e){
          if(!this.nodeMap[
            t
          ]){
            var n=new r(t, e);
            this.nodes.push(n), this.nodeMap[
              t
            ]
            =n, this.nodeLabelMap[
              e
            ]
            ||(this.nodeLabelMap[
              e
            ]
            =[
            ]), this.nodeLabelMap[
              e
            ].push(t)
          }
        }, t.prototype.addEdge=function(t, e, r, i){
          if((this.edgeIdAutoIncrease||void 0===t)&&(t=this.counter++), !(this.nodeMap[
            e
          ]
          &&this.nodeMap[
            r
          ]
          &&this.nodeMap[
            r
          ].edgeMap[
            t
          ])){
            var o=new n(t, e, r, i);
            if(this.edges.push(o), this.edgeMap[
              t
            ]
            =o, this.nodeMap[
              e
            ].addEdge(o), this.edgeLabelMap[
              i
            ]
            ||(this.edgeLabelMap[
              i
            ]
            =[
            ]), this.edgeLabelMap[
              i
            ].push(o), !this.directed){
              var a=new n(t, r, e, i);
              this.nodeMap[
                r
              ].addEdge(a), this.edgeLabelMap[
                i
              ].push(a)
            }
          }
        }, t
      }
      ();
      e.Graph=i
    }, 683767:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.oneHot=e.getDistance=e.getAllKeyValueMap=e.default=void 0;
      var r, i=n(224425), o=n(406165), a=(r=n(516831))&&r.__esModule?r:{
        default:r
      };
      var s=function(t, e, n){
        var r=[
        ];
        (null==e?void 0:e.length)?r=e:(t.forEach((function(t){
          r=r.concat(Object.keys(t))
        })), r=(0, i.uniq)(r));
        var o={
        };
        return r.forEach((function(e){
          var r=[
          ];
          t.forEach((function(t){
            void 0!==t[
              e
            ]
            &&""!==t[
              e
            ]
            &&r.push(t[
              e
            ])
          })), r.length&&!(null==n?void 0:n.includes(e))&&(o[
            e
          ]
          =(0, i.uniq)(r))
        })), o
      };
      e.getAllKeyValueMap=s;
      var u=function(t, e, n){
        var r=s(t, e, n), i=[
        ];
        if(!Object.keys(r).length)return i;
        var o=Object.values(r).every((function(t){
          return t.every((function(t){
            return"number"==typeof t
          }))
        }));
        return t.forEach((function(t, e){
          var n=[
          ];
          Object.keys(r).forEach((function(e){
            var i=t[
              e
            ], a=r[
              e
            ], s=a.findIndex((function(t){
              return i===t
            })), u=[
            ];
            if(o)u.push(i);
            else for(var c=0;
            c<a.length;
            c++)c===s?u.push(1):u.push(0);
            n=n.concat(u)
          })), i[
            e
          ]
          =n
        })), i
      };
      e.oneHot=u;
      var c=function(t, e, n, r){
        void 0===n&&(n=o.DistanceType.EuclideanDistance);
        var i=0;
        switch(n){
          case o.DistanceType.EuclideanDistance:i=new a.default(t).euclideanDistance(new a.default(e))
        }
        return i
      };
      e.getDistance=c;
      var d={
        getAllKeyValueMap:s, oneHot:u, getDistance:c
      };
      e.default=d
    }, 710168:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var n=function(t, e){
        var n=t.nodes, r=t.edges, i=[
        ], o={
        };
        if(!n)throw new Error("invalid nodes data!");
        return n&&n.forEach((function(t, e){
          o[
            t.id
          ]
          =e;
          i.push([
          ])
        })), r&&r.forEach((function(t){
          var n=t.source, r=t.target, a=o[
            n
          ], s=o[
            r
          ];
          !a&&0!==a||!s&&0!==s||(i[
            a
          ]
          [
            s
          ]
          =1, e||(i[
            s
          ]
          [
            a
          ]
          =1))
        })), i
      };
      e.default=n
    }, 738155:(t, e, n)=>{
      var r, i, o, a;
      function s(t){
        r||(r=document.createElement("table"), i=document.createElement("tr"), o=/^\s*<(\w+|!)[
          ^>
        ]
        *>/, a={
          tr:document.createElement("tbody"), tbody:r, thead:r, tfoot:r, td:i, th:i, "*":document.createElement("div")
        });
        var e=o.test(t)&&RegExp.$1;
        e&&e in a||(e="*");
        var n=a[
          e
        ];
        t="string"==typeof t?t.replace(/(^\s*)|(\s*$)/g, ""):t, n.innerHTML=""+t;
        var s=n.childNodes[
          0
        ];
        return s&&n.contains(s)&&n.removeChild(s), s
      }
      n.d(e, {
        A:()=>s
      })
    }, 787302:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), Object.defineProperty(e, "GADDIAsync", {
        enumerable:!0, get:function(){
          return r.GADDIAsync
        }
      }), Object.defineProperty(e, "connectedComponentAsync", {
        enumerable:!0, get:function(){
          return r.connectedComponentAsync
        }
      }), e.default=void 0, Object.defineProperty(e, "detectAllCyclesAsync", {
        enumerable:!0, get:function(){
          return r.detectAllCyclesAsync
        }
      }), Object.defineProperty(e, "detectAllDirectedCycleAsync", {
        enumerable:!0, get:function(){
          return r.detectAllDirectedCycleAsync
        }
      }), Object.defineProperty(e, "detectAllUndirectedCycleAsync", {
        enumerable:!0, get:function(){
          return r.detectAllUndirectedCycleAsync
        }
      }), Object.defineProperty(e, "detectCycleAsync", {
        enumerable:!0, get:function(){
          return r.detectCycleAsync
        }
      }), e.detectDirectedCycleAsync=void 0, Object.defineProperty(e, "dijkstraAsync", {
        enumerable:!0, get:function(){
          return r.dijkstraAsync
        }
      }), Object.defineProperty(e, "findAllPathAsync", {
        enumerable:!0, get:function(){
          return r.findAllPathAsync
        }
      }), Object.defineProperty(e, "findShortestPathAsync", {
        enumerable:!0, get:function(){
          return r.findShortestPathAsync
        }
      }), Object.defineProperty(e, "floydWarshallAsync", {
        enumerable:!0, get:function(){
          return r.floydWarshallAsync
        }
      }), Object.defineProperty(e, "getAdjMatrixAsync", {
        enumerable:!0, get:function(){
          return r.getAdjMatrixAsync
        }
      }), Object.defineProperty(e, "getDegreeAsync", {
        enumerable:!0, get:function(){
          return r.getDegreeAsync
        }
      }), Object.defineProperty(e, "getInDegreeAsync", {
        enumerable:!0, get:function(){
          return r.getInDegreeAsync
        }
      }), Object.defineProperty(e, "getNeighborsAsync", {
        enumerable:!0, get:function(){
          return r.getNeighborsAsync
        }
      }), Object.defineProperty(e, "getOutDegreeAsync", {
        enumerable:!0, get:function(){
          return r.getOutDegreeAsync
        }
      }), Object.defineProperty(e, "labelPropagationAsync", {
        enumerable:!0, get:function(){
          return r.labelPropagationAsync
        }
      }), Object.defineProperty(e, "louvainAsync", {
        enumerable:!0, get:function(){
          return r.louvainAsync
        }
      }), Object.defineProperty(e, "minimumSpanningTreeAsync", {
        enumerable:!0, get:function(){
          return r.minimumSpanningTreeAsync
        }
      }), Object.defineProperty(e, "pageRankAsync", {
        enumerable:!0, get:function(){
          return r.pageRankAsync
        }
      });
      var r=n(137436), i=r.detectCycleAsync;
      e.detectDirectedCycleAsync=i;
      var o={
        getAdjMatrixAsync:r.getAdjMatrixAsync, connectedComponentAsync:r.connectedComponentAsync, getDegreeAsync:r.getDegreeAsync, getInDegreeAsync:r.getInDegreeAsync, getOutDegreeAsync:r.getOutDegreeAsync, detectCycleAsync:r.detectCycleAsync, detectDirectedCycleAsync:i, detectAllCyclesAsync:r.detectAllCyclesAsync, detectAllDirectedCycleAsync:r.detectAllDirectedCycleAsync, detectAllUndirectedCycleAsync:r.detectAllUndirectedCycleAsync, dijkstraAsync:r.dijkstraAsync, findAllPathAsync:r.findAllPathAsync, findShortestPathAsync:r.findShortestPathAsync, floydWarshallAsync:r.floydWarshallAsync, labelPropagationAsync:r.labelPropagationAsync, louvainAsync:r.louvainAsync, minimumSpanningTreeAsync:r.minimumSpanningTreeAsync, pageRankAsync:r.pageRankAsync, getNeighborsAsync:r.getNeighborsAsync, GADDIAsync:r.GADDIAsync
      };
      e.default=o
    }, 792041:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=e.LinkedListNode=void 0;
      var n=function(t, e){
        return t===e
      }, r=function(){
        function t(t, e){
          void 0===e&&(e=null), this.value=t, this.next=e
        }
        return t.prototype.toString=function(t){
          return t?t(this.value):"".concat(this.value)
        }, t
      }
      ();
      e.LinkedListNode=r;
      var i=function(){
        function t(t){
          void 0===t&&(t=n), this.head=null, this.tail=null, this.compare=t
        }
        return t.prototype.prepend=function(t){
          var e=new r(t, this.head);
          return this.head=e, this.tail||(this.tail=e), this
        }, t.prototype.append=function(t){
          var e=new r(t);
          return this.head?(this.tail.next=e, this.tail=e, this):(this.head=e, this.tail=e, this)
        }, t.prototype.delete=function(t){
          if(!this.head)return null;
          for(var e=null;
          this.head&&this.compare(this.head.value, t);
          )e=this.head, this.head=this.head.next;
          var n=this.head;
          if(null!==n)for(;
          n.next;
          )this.compare(n.next.value, t)?(e=n.next, n.next=n.next.next):n=n.next;
          return this.compare(this.tail.value, t)&&(this.tail=n), e
        }, t.prototype.find=function(t){
          var e=t.value, n=void 0===e?void 0:e, r=t.callback, i=void 0===r?void 0:r;
          if(!this.head)return null;
          for(var o=this.head;
          o;
          ){
            if(i&&i(o.value))return o;
            if(void 0!==n&&this.compare(o.value, n))return o;
            o=o.next
          }
          return null
        }, t.prototype.deleteTail=function(){
          var t=this.tail;
          if(this.head===this.tail)return this.head=null, this.tail=null, t;
          for(var e=this.head;
          e.next;
          )e.next.next?e=e.next:e.next=null;
          return this.tail=e, t
        }, t.prototype.deleteHead=function(){
          if(!this.head)return null;
          var t=this.head;
          return this.head.next?this.head=this.head.next:(this.head=null, this.tail=null), t
        }, t.prototype.fromArray=function(t){
          var e=this;
          return t.forEach((function(t){
            return e.append(t)
          })), this
        }, t.prototype.toArray=function(){
          for(var t=[
          ], e=this.head;
          e;
          )t.push(e), e=e.next;
          return t
        }, t.prototype.reverse=function(){
          for(var t=this.head, e=null, n=null;
          t;
          )n=t.next, t.next=e, e=t, t=n;
          this.tail=this.head, this.head=e
        }, t.prototype.toString=function(t){
          return void 0===t&&(t=void 0), this.toArray().map((function(e){
            return e.toString(t)
          })).toString()
        }, t
      }
      ();
      e.default=i
    }, 842215:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var n=function(t, e){
        return t-e
      }, r=function(){
        function t(t){
          void 0===t&&(t=n), this.compareFn=t, this.list=[
          ]
        }
        return t.prototype.getLeft=function(t){
          return 2*t+1
        }, t.prototype.getRight=function(t){
          return 2*t+2
        }, t.prototype.getParent=function(t){
          return 0===t?null:Math.floor((t-1)/2)
        }, t.prototype.isEmpty=function(){
          return this.list.length<=0
        }, t.prototype.top=function(){
          return this.isEmpty()?void 0:this.list[
            0
          ]
        }, t.prototype.delMin=function(){
          var t=this.top(), e=this.list.pop();
          return this.list.length>0&&(this.list[
            0
          ]
          =e, this.moveDown(0)), t
        }, t.prototype.insert=function(t){
          if(null!==t){
            this.list.push(t);
            var e=this.list.length-1;
            return this.moveUp(e), !0
          }
          return!1
        }, t.prototype.moveUp=function(t){
          for(var e=this.getParent(t);
          t&&t>0&&this.compareFn(this.list[
            e
          ], this.list[
            t
          ])>0;
          ){
            var n=this.list[
              e
            ];
            this.list[
              e
            ]
            =this.list[
              t
            ], this.list[
              t
            ]
            =n, t=e, e=this.getParent(t)
          }
        }, t.prototype.moveDown=function(t){
          var e, n=t, r=this.getLeft(t), i=this.getRight(t), o=this.list.length;
          null!==r&&r<o&&this.compareFn(this.list[
            n
          ], this.list[
            r
          ])>0?n=r:null!==i&&i<o&&this.compareFn(this.list[
            n
          ], this.list[
            i
          ])>0&&(n=i), t!==n&&(e=[
            this.list[
              n
            ], this.list[
              t
            ]
          ], this.list[
            t
          ]
          =e[
            0
          ], this.list[
            n
          ]
          =e[
            1
          ], this.moveDown(n))
        }, t
      }
      ();
      e.default=r
    }, 850115:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=function(t, e, n, r){
        void 0===r&&(r=!0);
        i(t, e, "", function(t){
          void 0===t&&(t={
          });
          var e=t, n=function(){
          }, r=(i={
          }, function(t){
            var e=t.next;
            return!i[
              e
            ]
            &&(i[
              e
            ]
            =!0, !0)
          });
          var i;
          return e.allowTraversal=t.allowTraversal||r, e.enter=t.enter||n, e.leave=t.leave||n, e
        }
        (n), r)
      };
      var r=n(434170);
      function i(t, e, n, o, a){
        void 0===a&&(a=!0), o.enter({
          current:e, previous:n
        });
        var s=t.edges, u=void 0===s?[
        ]
        :s;
        (0, r.getNeighbors)(e, u, a?"target":void 0).forEach((function(r){
          o.allowTraversal({
            previous:n, current:e, next:r
          })&&i(t, r, e, o, a)
        })), o.leave({
          current:e, previous:n
        })
      }
    }, 869611:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r=n(224425), i=n(642541), o=function(){
        function t(t, e, n, r, o){
          this.fromNode=t, this.toNode=e, this.nodeEdgeNodeLabel={
            nodeLabel1:n||i.VACANT_NODE_LABEL, edgeLabel:r||i.VACANT_EDGE_LABEL, nodeLabel2:o||i.VACANT_NODE_LABEL
          }
        }
        return t.prototype.equalTo=function(t){
          return this.fromNode===t.formNode&&this.toNode===t.toNode&&this.nodeEdgeNodeLabel===t.nodeEdgeNodeLabel
        }, t.prototype.notEqualTo=function(t){
          return!this.equalTo(t)
        }, t
      }
      (), a=function(){
        function t(){
          this.rmpath=[
          ], this.dfsEdgeList=[
          ]
        }
        return t.prototype.equalTo=function(t){
          var e=this.dfsEdgeList.length;
          if(e!==t.length)return!1;
          for(var n=0;
          n<e;
          n++)if(this.dfsEdgeList[
            n
          ]
          !==t[
            n
          ])return!1;
          return!0
        }, t.prototype.notEqualTo=function(t){
          return!this.equalTo(t)
        }, t.prototype.pushBack=function(t, e, n, r, i){
          return this.dfsEdgeList.push(new o(t, e, n, r, i)), this.dfsEdgeList
        }, t.prototype.toGraph=function(t, e){
          void 0===t&&(t=i.VACANT_GRAPH_ID), void 0===e&&(e=!1);
          var n=new i.Graph(t, !0, e);
          return this.dfsEdgeList.forEach((function(t){
            var e=t.fromNode, r=t.toNode, o=t.nodeEdgeNodeLabel, a=o.nodeLabel1, s=o.edgeLabel, u=o.nodeLabel2;
            a!==i.VACANT_NODE_LABEL&&n.addNode(e, a), u!==i.VACANT_NODE_LABEL&&n.addNode(r, u), a!==i.VACANT_NODE_LABEL&&u!==a&&n.addEdge(void 0, e, r, s)
          })), n
        }, t.prototype.buildRmpath=function(){
          this.rmpath=[
          ];
          for(var t=void 0, e=this.dfsEdgeList.length-1;
          e>=0;
          e--){
            var n=this.dfsEdgeList[
              e
            ], r=n.fromNode, i=n.toNode;
            r<i&&(void 0===t||i===t)&&(this.rmpath.push(e), t=r)
          }
          return this.rmpath
        }, t.prototype.getNodeNum=function(){
          var t={
          };
          return this.dfsEdgeList.forEach((function(e){
            t[
              e.fromNode
            ]
            ||(t[
              e.fromNode
            ]
            =!0), t[
              e.toNode
            ]
            ||(t[
              e.toNode
            ]
            =!0)
          })), Object.keys(t).length
        }, t
      }
      (), s=function(){
        function t(t){
          if(this.his={
          }, this.nodesUsed={
          }, this.edgesUsed={
          }, this.edges=[
          ], t){
            for(;
            t;
            ){
              var e=t.edge;
              this.edges.push(e), this.nodesUsed[
                e.from
              ]
              =1, this.nodesUsed[
                e.to
              ]
              =1, this.edgesUsed[
                e.id
              ]
              =1, t=t.preNode
            }
            this.edges=this.edges.reverse()
          }
        }
        return t.prototype.hasNode=function(t){
          return 1===this.nodesUsed[
            t.id
          ]
        }, t.prototype.hasEdge=function(t){
          return 1===this.edgesUsed[
            t.id
          ]
        }, t
      }
      (), u=function(){
        function t(t){
          var e=t.graphs, n=t.minSupport, r=void 0===n?2:n, i=t.minNodeNum, o=void 0===i?1:i, s=t.maxNodeNum, u=void 0===s?4:s, c=t.top, d=void 0===c?10:c, h=t.directed, l=void 0!==h&&h, f=t.verbose, p=void 0!==f&&f;
          this.graphs=e, this.dfsCode=new a, this.support=0, this.frequentSize1Subgraphs=[
          ], this.frequentSubgraphs=[
          ], this.minSupport=r, this.top=d, this.directed=l, this.counter=0, this.maxNodeNum=u, this.minNodeNum=o, this.verbose=p, this.maxNodeNum<this.minNodeNum&&(this.maxNodeNum=this.minNodeNum), this.reportDF=[
          ]
        }
        return t.prototype.findForwardRootEdges=function(t, e){
          var n=this, r=[
          ], i=t.nodeMap;
          return e.edges.forEach((function(t){
            (n.directed||e.label<=i[
              t.to
            ].label)&&r.push(t)
          })), r
        }, t.prototype.findBackwardEdge=function(t, e, n, r){
          if(!this.directed&&e===n)return null;
          for(var i=t.nodeMap, o=i[
            n.to
          ].edges, a=o.length, s=0;
          s<a;
          s++){
            var u=o[
              s
            ];
            if(!r.hasEdge(u)&&u.to===e.from)if(this.directed){
              if(i[
                e.from
              ].label<i[
                n.to
              ].label||i[
                e.from
              ].label===i[
                n.to
              ].label&&e.label<=u.label)return u
            }
            else if(e.label<u.label||e.label===u.label&&i[
              e.to
            ].label<=i[
              n.to
            ].label)return u
          }
          return null
        }, t.prototype.findForwardPureEdges=function(t, e, n, r){
          for(var i=[
          ], o=e.to, a=t.nodeMap[
            o
          ].edges, s=a.length, u=0;
          u<s;
          u++){
            var c=a[
              u
            ], d=t.nodeMap[
              c.to
            ];
            n<=d.label&&!r.hasNode(d)&&i.push(c)
          }
          return i
        }, t.prototype.findForwardRmpathEdges=function(t, e, n, r){
          for(var i=[
          ], o=t.nodeMap, a=o[
            e.to
          ].label, s=o[
            e.from
          ].edges, u=s.length, c=0;
          c<u;
          c++){
            var d=s[
              c
            ], h=o[
              d.to
            ].label;
            e.to===d.to||n>h||r.hasNode(o[
              d.to
            ])||(e.label<d.label||e.label===d.label&&a<=h)&&i.push(d)
          }
          return i
        }, t.prototype.getSupport=function(t){
          var e={
          };
          return t.forEach((function(t){
            e[
              t.graphId
            ]
            ||(e[
              t.graphId
            ]
            =!0)
          })), Object.keys(e).length
        }, t.prototype.findMinLabel=function(t){
          var e=void 0;
          return Object.keys(t).forEach((function(n){
            var r=t[
              n
            ], i=r.nodeLabel1, o=r.edgeLabel, a=r.nodeLabel2;
            e?(i<e.nodeLabel1||i===e.nodeLabel1&&o<e.edgeLabel||i===e.nodeLabel1&&o===e.edgeLabel&&a<e.nodeLabel2)&&(e={
              nodeLabel1:i, edgeLabel:o, nodeLabel2:a
            }):e={
              nodeLabel1:i, edgeLabel:o, nodeLabel2:a
            }
          })), e
        }, t.prototype.isMin=function(){
          var t=this, e=this.dfsCode;
          if(this.verbose&&console.log("isMin checking", e), 1===e.dfsEdgeList.length)return!0;
          var n=this.directed, r=e.toGraph(i.VACANT_GRAPH_ID, n), u=r.nodeMap, c=new a, d={
          };
          r.nodes.forEach((function(e){
            t.findForwardRootEdges(r, e).forEach((function(t){
              var n=u[
                t.to
              ], i="".concat(e.label, "-").concat(t.label, "-").concat(n.label);
              d[
                i
              ]
              ||(d[
                i
              ]
              ={
                projected:[
                ], nodeLabel1:e.label, edgeLabel:t.label, nodeLabel2:n.label
              });
              var o={
                graphId:r.id, edge:t, preNode:null
              };
              d[
                i
              ].projected.push(o)
            }))
          }));
          var h=this.findMinLabel(d);
          if(h){
            c.dfsEdgeList.push(new o(0, 1, h.nodeLabel1, h.edgeLabel, h.nodeLabel2));
            var l="".concat(h.nodeLabel1, "-").concat(h.edgeLabel, "-").concat(h.nodeLabel2);
            return function a(d){
              for(var h=c.buildRmpath(), l=c.dfsEdgeList[
                0
              ].nodeEdgeNodeLabel.nodeLabel1, f=c.dfsEdgeList[
                h[
                  0
                ]
              ].toNode, p={
              }, g=!1, v=0, y=n?-1:0, m=function(e){
                if(g)return"break";
                d.forEach((function(n){
                  var i=new s(n), o=t.findBackwardEdge(r, i.edges[
                    h[
                      e
                    ]
                  ], i.edges[
                    h[
                      0
                    ]
                  ], i);
                  o&&(p[
                    o.label
                  ]
                  ||(p[
                    o.label
                  ]
                  ={
                    projected:[
                    ], edgeLabel:o.label
                  }), p[
                    o.label
                  ].projected.push({
                    graphId:r.id, edge:p, preNode:n
                  }), v=c.dfsEdgeList[
                    h[
                      e
                    ]
                  ].fromNode, g=!0)
                }))
              }, b=h.length-1;
              b>y;
              b--){
                if("break"===m(b))break
              }
              if(g){
                var x=t.findMinLabel(p);
                c.dfsEdgeList.push(new o(f, v, i.VACANT_NODE_LABEL, x.edgeLabel, i.VACANT_NODE_LABEL));
                var E=c.dfsEdgeList.length-1;
                return t.dfsCode.dfsEdgeList[
                  E
                ]
                ===c.dfsEdgeList[
                  E
                ]
                &&a(p[
                  x.edgeLabel
                ].projected)
              }
              var M={
              };
              g=!1;
              var A=0;
              d.forEach((function(e){
                var n=new s(e), i=t.findForwardPureEdges(r, n.edges[
                  h[
                    0
                  ]
                ], l, n);
                i.length>0&&(g=!0, A=f, i.forEach((function(t){
                  var n="".concat(t.label, "-").concat(u[
                    t.to
                  ].label);
                  M[
                    n
                  ]
                  ||(M[
                    n
                  ]
                  ={
                    projected:[
                    ], edgeLabel:t.label, nodeLabel2:u[
                      t.to
                    ].label
                  }), M[
                    n
                  ].projected.push({
                    graphId:r.id, edge:t, preNode:e
                  })
                })))
              }));
              var w=h.length, C=function(e){
                if(g)return"break";
                var n=h[
                  e
                ];
                d.forEach((function(e){
                  var i=new s(e), o=t.findForwardRmpathEdges(r, i.edges[
                    n
                  ], l, i);
                  o.length>0&&(g=!0, A=c.dfsEdgeList[
                    n
                  ].fromNode, o.forEach((function(t){
                    var n="".concat(t.label, "-").concat(u[
                      t.to
                    ].label);
                    M[
                      n
                    ]
                    ||(M[
                      n
                    ]
                    ={
                      projected:[
                      ], edgeLabel:t.label, nodeLabel2:u[
                        t.to
                      ].label
                    }), M[
                      n
                    ].projected.push({
                      graphId:r.id, edge:t, preNode:e
                    })
                  })))
                }))
              };
              for(b=0;
              b<w;
              b++){
                if("break"===C(b))break
              }
              if(!g)return!0;
              var L=t.findMinLabel(M);
              c.dfsEdgeList.push(new o(A, f+1, i.VACANT_NODE_LABEL, L.edgeLabel, L.nodeLabel2));
              var _=c.dfsEdgeList.length-1;
              return e.dfsEdgeList[
                _
              ]
              ===c.dfsEdgeList[
                _
              ]
              &&a(M[
                "".concat(L.edgeLabel, "-").concat(L.nodeLabel2)
              ].projected)
            }
            (d[
              l
            ].projected)
          }
        }, t.prototype.report=function(){
          if(!(this.dfsCode.getNodeNum()<this.minNodeNum)){
            this.counter++;
            var t=this.dfsCode.toGraph(this.counter, this.directed);
            this.frequentSubgraphs.push((0, r.clone)(t))
          }
        }, t.prototype.subGraphMining=function(t){
          var e=this;
          if(!(this.getSupport(t)<this.minSupport)&&this.isMin()){
            this.report();
            var n=this.dfsCode.getNodeNum(), r=this.dfsCode.buildRmpath(), a=this.dfsCode.dfsEdgeList[
              r[
                0
              ]
            ].toNode, u=this.dfsCode.dfsEdgeList[
              0
            ].nodeEdgeNodeLabel.nodeLabel1, c={
            }, d={
            };
            t.forEach((function(t){
              for(var i=e.graphs[
                t.graphId
              ], o=i.nodeMap, h=new s(t), l=r.length-1;
              l>=0;
              l--){
                var f=e.findBackwardEdge(i, h.edges[
                  r[
                    l
                  ]
                ], h.edges[
                  r[
                    0
                  ]
                ], h);
                if(f){
                  var p="".concat(e.dfsCode.dfsEdgeList[
                    r[
                      l
                    ]
                  ].fromNode, "-").concat(f.label);
                  d[
                    p
                  ]
                  ||(d[
                    p
                  ]
                  ={
                    projected:[
                    ], toNodeId:e.dfsCode.dfsEdgeList[
                      r[
                        l
                      ]
                    ].fromNode, edgeLabel:f.label
                  }), d[
                    p
                  ].projected.push({
                    graphId:t.graphId, edge:f, preNode:t
                  })
                }
              }
              if(!(n>=e.maxNodeNum)){
                e.findForwardPureEdges(i, h.edges[
                  r[
                    0
                  ]
                ], u, h).forEach((function(e){
                  var n="".concat(a, "-").concat(e.label, "-").concat(o[
                    e.to
                  ].label);
                  c[
                    n
                  ]
                  ||(c[
                    n
                  ]
                  ={
                    projected:[
                    ], fromNodeId:a, edgeLabel:e.label, nodeLabel2:o[
                      e.to
                    ].label
                  }), c[
                    n
                  ].projected.push({
                    graphId:t.graphId, edge:e, preNode:t
                  })
                }));
                var g=function(n){
                  e.findForwardRmpathEdges(i, h.edges[
                    r[
                      n
                    ]
                  ], u, h).forEach((function(i){
                    var a="".concat(e.dfsCode.dfsEdgeList[
                      r[
                        n
                      ]
                    ].fromNode, "-").concat(i.label, "-").concat(o[
                      i.to
                    ].label);
                    c[
                      a
                    ]
                    ||(c[
                      a
                    ]
                    ={
                      projected:[
                      ], fromNodeId:e.dfsCode.dfsEdgeList[
                        r[
                          n
                        ]
                      ].fromNode, edgeLabel:i.label, nodeLabel2:o[
                        i.to
                      ].label
                    }), c[
                      a
                    ].projected.push({
                      graphId:t.graphId, edge:i, preNode:t
                    })
                  }))
                };
                for(l=0;
                l<r.length;
                l++)g(l)
              }
            })), Object.keys(d).forEach((function(t){
              var n=d[
                t
              ], r=n.toNodeId, i=n.edgeLabel;
              e.dfsCode.dfsEdgeList.push(new o(a, r, "-1", i, "-1")), e.subGraphMining(d[
                t
              ].projected), e.dfsCode.dfsEdgeList.pop()
            })), Object.keys(c).forEach((function(t){
              var n=c[
                t
              ], r=n.fromNodeId, s=n.edgeLabel, u=n.nodeLabel2;
              e.dfsCode.dfsEdgeList.push(new o(r, a+1, i.VACANT_NODE_LABEL, s, u)), e.subGraphMining(c[
                t
              ].projected), e.dfsCode.dfsEdgeList.pop()
            }))
          }
        }, t.prototype.generate1EdgeFrequentSubGraphs=function(){
          var t=this.graphs, e=this.directed, n=this.minSupport, r=this.frequentSize1Subgraphs, i={
          }, o={
          }, a={
          }, s={
          };
          return Object.keys(t).forEach((function(n){
            var r=t[
              n
            ], u=r.nodeMap;
            r.nodes.forEach((function(t, r){
              var c=t.label, d="".concat(n, "-").concat(c);
              if(!a[
                d
              ]){
                var h=i[
                  c
                ]
                ||0;
                h++, i[
                  c
                ]
                =h
              }
              a[
                d
              ]
              ={
                graphKey:n, label:c
              }, t.edges.forEach((function(t){
                var r=c, i=u[
                  t.to
                ].label;
                if(!e&&r>i){
                  var a=i;
                  i=r, r=a
                }
                var d=t.label, h="".concat(n, "-").concat(r, "-").concat(d, "-").concat(i), l="".concat(r, "-").concat(d, "-").concat(i);
                if(!o[
                  l
                ]){
                  var f=o[
                    l
                  ]
                  ||0;
                  f++, o[
                    l
                  ]
                  =f
                }
                s[
                  h
                ]
                ={
                  graphId:n, nodeLabel1:r, edgeLabel:d, nodeLabel2:i
                }
              }))
            }))
          })), Object.keys(i).forEach((function(t){
            if(!(i[
              t
            ]
            <n)){
              var e={
                nodes:[
                ], edges:[
                ]
              };
              e.nodes.push({
                id:"0", label:t
              }), r.push(e)
            }
          })), r
        }, t.prototype.run=function(){
          var t=this;
          if(this.frequentSize1Subgraphs=this.generate1EdgeFrequentSubGraphs(), !(this.maxNodeNum<2)){
            var e=this.graphs, n=(this.directed, {
            });
            Object.keys(e).forEach((function(r){
              var i=e[
                r
              ], o=i.nodeMap;
              i.nodes.forEach((function(e){
                t.findForwardRootEdges(i, e).forEach((function(t){
                  var i=o[
                    t.to
                  ], a="".concat(e.label, "-").concat(t.label, "-").concat(i.label);
                  n[
                    a
                  ]
                  ||(n[
                    a
                  ]
                  ={
                    projected:[
                    ], nodeLabel1:e.label, edgeLabel:t.label, nodeLabel2:i.label
                  });
                  var s={
                    graphId:r, edge:t, preNode:null
                  };
                  n[
                    a
                  ].projected.push(s)
                }))
              }))
            })), Object.keys(n).forEach((function(e){
              var r=n[
                e
              ], i=r.projected, a=r.nodeLabel1, s=r.edgeLabel, u=r.nodeLabel2;
              t.dfsCode.dfsEdgeList.push(new o(0, 1, a, s, u)), t.subGraphMining(i), t.dfsCode.dfsEdgeList.pop()
            }))
          }
        }, t
      }
      (), c="cluster", d=function(t){
        var e=t.graphs, n=t.directed, r=void 0!==n&&n, o=t.nodeLabelProp, a=void 0===o?c:o, s=t.edgeLabelProp, d=void 0===s?c:s, h=function(t, e, n, r){
          var o={
          };
          return Object.keys(t).forEach((function(a, s){
            var u=t[
              a
            ], c=new i.Graph(s, !0, e), d={
            };
            u.nodes.forEach((function(t, e){
              c.addNode(e, t[
                n
              ]), d[
                t.id
              ]
              =e
            })), u.edges.forEach((function(t, e){
              var n=d[
                t.source
              ], i=d[
                t.target
              ];
              c.addEdge(-1, n, i, t[
                r
              ])
            })), c&&c.getNodeNum()&&(o[
              c.id
            ]
            =c)
          })), o
        }
        (e, r, a, d), l=t.minSupport, f=t.maxNodeNum, p=t.minNodeNum, g=t.verbose, v=t.top, y=new u({
          graphs:h, minSupport:l, maxNodeNum:f, minNodeNum:p, top:v, verbose:g, directed:r
        });
        return y.run(), function(t, e, n){
          var r=[
          ];
          return t.forEach((function(t){
            var i={
              nodes:[
              ], edges:[
              ]
            };
            t.nodes.forEach((function(t){
              var n;
              i.nodes.push(((n={
                id:"".concat(t.id)
              })[
                e
              ]
              =t.label, n))
            })), t.edges.forEach((function(t){
              var e;
              i.edges.push(((e={
                source:"".concat(t.from), target:"".concat(t.to)
              })[
                n
              ]
              =t.label, e))
            })), r.push(i)
          })), r
        }
        (y.frequentSubgraphs, a, d)
      };
      e.default=d
    }, 906924:(t, e, n)=>{
      n.d(e, {
        Canvas:()=>bt
      });
      var r={
      };
      n.r(r), n.d(r, {
        Base:()=>Y, Circle:()=>G, Ellipse:()=>U, Image:()=>z, Line:()=>Q, Marker:()=>J, Path:()=>dt, Polygon:()=>lt, Polyline:()=>ft, Rect:()=>pt, Text:()=>gt
      });
      var i=n(331635), o=n(930577), a=n(224425);
      function s(t, e, n, r){
        var i=t-n, o=e-r;
        return Math.sqrt(i*i+o*o)
      }
      function u(t, e, n, r, i, o){
        return i>=t&&i<=t+n&&o>=e&&o<=e+r
      }
      function c(t, e){
        return!(e.minX>t.maxX||e.maxX<t.minX||e.minY>t.maxY||e.maxY<t.minY)
      }
      function d(t, e){
        return t[
          0
        ]
        ===e[
          0
        ]
        &&t[
          1
        ]
        ===e[
          1
        ]
      }
      var h=/^l\s*\(\s*([
        \d.
      ]
      +)\s*\)\s*(.*)/i, l=/^r\s*\(\s*([
        \d.
      ]
      +)\s*, \s*([
        \d.
      ]
      +)\s*, \s*([
        \d.
      ]
      +)\s*\)\s*(.*)/i, f=/^p\s*\(\s*([
        axyn
      ])\s*\)\s*(.*)/i, p=/[
        \d.
      ]
      +:(#[
        ^\s
      ]
      +|[
        ^\)
      ]
      +\))/gi;
      function g(t, e){
        var n=t.match(p);
        (0, a.each)(n, (function(t){
          var n=t.split(":");
          e.addColorStop(n[
            0
          ], n[
            1
          ])
        }))
      }
      function v(t, e, n){
        var r=e.getBBox();
        if(isNaN(r.x)||isNaN(r.y)||isNaN(r.width)||isNaN(r.height))return n;
        if((0, a.isString)(n)){
          if("("===n[
            1
          ]
          ||"("===n[
            2
          ]){
            if("l"===n[
              0
            ])return function(t, e, n){
              var r, i, o=h.exec(n), a=parseFloat(o[
                1
              ])%360*(Math.PI/180), s=o[
                2
              ], u=e.getBBox();
              a>=0&&a<.5*Math.PI?(r={
                x:u.minX, y:u.minY
              }, i={
                x:u.maxX, y:u.maxY
              }):.5*Math.PI<=a&&a<Math.PI?(r={
                x:u.maxX, y:u.minY
              }, i={
                x:u.minX, y:u.maxY
              }):Math.PI<=a&&a<1.5*Math.PI?(r={
                x:u.maxX, y:u.maxY
              }, i={
                x:u.minX, y:u.minY
              }):(r={
                x:u.minX, y:u.maxY
              }, i={
                x:u.maxX, y:u.minY
              });
              var c=Math.tan(a), d=c*c, l=(i.x-r.x+c*(i.y-r.y))/(d+1)+r.x, f=c*(i.x-r.x+c*(i.y-r.y))/(d+1)+r.y, p=t.createLinearGradient(r.x, r.y, l, f);
              return g(s, p), p
            }
            (t, e, n);
            if("r"===n[
              0
            ])return function(t, e, n){
              var r=l.exec(n), i=parseFloat(r[
                1
              ]), o=parseFloat(r[
                2
              ]), a=parseFloat(r[
                3
              ]), s=r[
                4
              ];
              if(0===a){
                var u=s.match(p);
                return u[
                  u.length-1
                ].split(":")[
                  1
                ]
              }
              var c=e.getBBox(), d=c.maxX-c.minX, h=c.maxY-c.minY, f=Math.sqrt(d*d+h*h)/2, v=t.createRadialGradient(c.minX+d*i, c.minY+h*o, 0, c.minX+d/2, c.minY+h/2, a*f);
              return g(s, v), v
            }
            (t, e, n);
            if("p"===n[
              0
            ])return function(t, e, n){
              if(e.get("patternSource")&&e.get("patternSource")===n)return e.get("pattern");
              var r, i, o=f.exec(n), a=o[
                1
              ], s=o[
                2
              ];
              function u(){
                r=t.createPattern(i, a), e.set("pattern", r), e.set("patternSource", n)
              }
              switch(a){
                case"a":a="repeat";
                break;
                case"x":a="repeat-x";
                break;
                case"y":a="repeat-y";
                break;
                case"n":a="no-repeat";
                break;
                default:a="no-repeat"
              }
              return i=new Image, s.match(/^data:/i)||(i.crossOrigin="Anonymous"), i.src=s, i.complete?u():(i.onload=u, i.src=i.src), r
            }
            (t, e, n)
          }
          return n
        }
        return n instanceof CanvasPattern?n:void 0
      }
      function y(t){
        return Math.sqrt(t[
          0
        ]
        *t[
          0
        ]
        +t[
          1
        ]
        *t[
          1
        ])
      }
      function m(t, e){
        return y(t)*y(e)?(t[
          0
        ]
        *e[
          0
        ]
        +t[
          1
        ]
        *e[
          1
        ])/(y(t)*y(e)):1
      }
      function b(t, e){
        return(t[
          0
        ]
        *e[
          1
        ]
        <t[
          1
        ]
        *e[
          0
        ]
        ?-1:1)*Math.acos(m(t, e))
      }
      function x(t, e){
        var n=e[
          1
        ], r=e[
          2
        ], i=(0, a.mod)((0, a.toRadian)(e[
          3
        ]), 2*Math.PI), o=e[
          4
        ], s=e[
          5
        ], u=t[
          0
        ], c=t[
          1
        ], h=e[
          6
        ], l=e[
          7
        ], f=Math.cos(i)*(u-h)/2+Math.sin(i)*(c-l)/2, p=-1*Math.sin(i)*(u-h)/2+Math.cos(i)*(c-l)/2, g=f*f/(n*n)+p*p/(r*r);
        g>1&&(n*=Math.sqrt(g), r*=Math.sqrt(g));
        var v=n*n*(p*p)+r*r*(f*f), y=v?Math.sqrt((n*n*(r*r)-v)/v):1;
        o===s&&(y*=-1), isNaN(y)&&(y=0);
        var x=r?y*n*p/r:0, E=n?y*-r*f/n:0, M=(u+h)/2+Math.cos(i)*x-Math.sin(i)*E, A=(c+l)/2+Math.sin(i)*x+Math.cos(i)*E, w=[
          (f-x)/n, (p-E)/r
        ], C=[
          (-1*f-x)/n, (-1*p-E)/r
        ], L=b([
          1, 0
        ], w), _=b(w, C);
        return m(w, C)<=-1&&(_=Math.PI), m(w, C)>=1&&(_=0), 0===s&&_>0&&(_-=2*Math.PI), 1===s&&_<0&&(_+=2*Math.PI), {
          cx:M, cy:A, rx:d(t, [
            h, l
          ])?0:n, ry:d(t, [
            h, l
          ])?0:r, startAngle:L, endAngle:L+_, xRotation:i, arcFlag:o, sweepFlag:s
        }
      }
      var E=Math.sin, M=Math.cos, A=Math.atan2, w=Math.PI;
      function C(t, e, n, r, i, o, a){
        var s=e.stroke, u=e.lineWidth, c=A(r-o, n-i), d=new dt({
          type:"path", canvas:t.get("canvas"), isArrowShape:!0, attrs:{
            path:"M"+10*M(w/6)+","+10*E(w/6)+" L0,0 L"+10*M(w/6)+",-"+10*E(w/6), stroke:s, lineWidth:u
          }
        });
        d.translate(i, o), d.rotateAtPoint(i, o, c), t.set(a?"startArrowShape":"endArrowShape", d)
      }
      function L(t, e, n, r, o, a, s){
        var u=e.startArrow, c=e.endArrow, d=e.stroke, h=e.lineWidth, l=s?u:c, f=l.d, p=l.fill, g=l.stroke, v=l.lineWidth, y=(0, i.__rest)(l, [
          "d", "fill", "stroke", "lineWidth"
        ]), m=A(r-a, n-o);
        f&&(o-=M(m)*f, a-=E(m)*f);
        var b=new dt({
          type:"path", canvas:t.get("canvas"), isArrowShape:!0, attrs:(0, i.__assign)((0, i.__assign)({
          }, y), {
            stroke:g||d, lineWidth:v||h, fill:p
          })
        });
        b.translate(o, a), b.rotateAtPoint(o, a, m), t.set(s?"startArrowShape":"endArrowShape", b)
      }
      function _(t, e, n, r, i){
        var o=A(r-e, n-t);
        return{
          dx:M(o)*i, dy:E(o)*i
        }
      }
      function k(t, e, n, r, i, o){
        "object"==typeof e.startArrow?L(t, e, n, r, i, o, !0):e.startArrow?C(t, e, n, r, i, o, !0):t.set("startArrowShape", null)
      }
      function P(t, e, n, r, i, o){
        "object"==typeof e.endArrow?L(t, e, n, r, i, o, !1):e.endArrow?C(t, e, n, r, i, o, !1):t.set("startArrowShape", null)
      }
      var N={
        fill:"fillStyle", stroke:"strokeStyle", opacity:"globalAlpha"
      };
      function I(t, e){
        var n=e.attr();
        for(var r in n){
          var i=n[
            r
          ], o=N[
            r
          ]
          ?N[
            r
          ]
          :r;
          "matrix"===o&&i?t.transform(i[
            0
          ], i[
            1
          ], i[
            3
          ], i[
            4
          ], i[
            6
          ], i[
            7
          ]):"lineDash"===o&&t.setLineDash?(0, a.isArray)(i)&&t.setLineDash(i):("strokeStyle"===o||"fillStyle"===o?i=v(t, e, i):"globalAlpha"===o&&(i*=t.globalAlpha), t[
            o
          ]
          =i)
        }
      }
      function S(t, e, n){
        for(var r=0;
        r<e.length;
        r++){
          var i=e[
            r
          ];
          i.cfg.visible?i.draw(t, n):i.skipDraw()
        }
      }
      function D(t, e, n){
        var r=t.get("refreshElements");
        (0, a.each)(r, (function(e){
          if(e!==t)for(var n=e.cfg.parent;
          n&&n!==t&&!n.cfg.refresh;
          )n.cfg.refresh=!0, n=n.cfg.parent
        })), r[
          0
        ]
        ===t?T(e, n):O(e, n)
      }
      function O(t, e){
        for(var n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          if(r.cfg.visible)if(r.cfg.hasChanged)r.cfg.refresh=!0, r.isGroup()&&T(r.cfg.children, e);
          else if(r.cfg.refresh)r.isGroup()&&O(r.cfg.children, e);
          else{
            var i=B(r, e);
            r.cfg.refresh=i, i&&r.isGroup()&&O(r.cfg.children, e)
          }
        }
      }
      function j(t){
        for(var e=0;
        e<t.length;
        e++){
          var n=t[
            e
          ];
          n.cfg.hasChanged=!1, n.isGroup()&&!n.destroyed&&j(n.cfg.children)
        }
      }
      function T(t, e){
        for(var n=0;
        n<t.length;
        n++){
          var r=t[
            n
          ];
          r.cfg.visible&&(r.cfg.refresh=!0, r.isGroup()&&T(r.get("children"), e))
        }
      }
      function B(t, e){
        var n=t.cfg.cacheCanvasBBox;
        return t.cfg.isInView&&n&&c(n, e)
      }
      function F(t, e, n, r){
        var i=n.path, o=n.startArrow, a=n.endArrow;
        if(i){
          var s=[
            0, 0
          ], u=[
            0, 0
          ], c={
            dx:0, dy:0
          };
          e.beginPath();
          for(var d=0;
          d<i.length;
          d++){
            var h=i[
              d
            ], l=h[
              0
            ];
            if(0===d&&o&&o.d)c=_((f=t.getStartTangent())[
              0
            ]
            [
              0
            ], f[
              0
            ]
            [
              1
            ], f[
              1
            ]
            [
              0
            ], f[
              1
            ]
            [
              1
            ], o.d);
            else if(d===i.length-2&&"Z"===i[
              d+1
            ]
            [
              0
            ]
            &&a&&a.d){
              if("Z"===i[
                d+1
              ]
              [
                0
              ])c=_((f=t.getEndTangent())[
                0
              ]
              [
                0
              ], f[
                0
              ]
              [
                1
              ], f[
                1
              ]
              [
                0
              ], f[
                1
              ]
              [
                1
              ], a.d)
            }
            else if(d===i.length-1&&a&&a.d){
              var f;
              if("Z"!==i[
                0
              ])c=_((f=t.getEndTangent())[
                0
              ]
              [
                0
              ], f[
                0
              ]
              [
                1
              ], f[
                1
              ]
              [
                0
              ], f[
                1
              ]
              [
                1
              ], a.d)
            }
            var p=c.dx, g=c.dy;
            switch(l){
              case"M":e.moveTo(h[
                1
              ]
              -p, h[
                2
              ]
              -g), u=[
                h[
                  1
                ], h[
                  2
                ]
              ];
              break;
              case"L":e.lineTo(h[
                1
              ]
              -p, h[
                2
              ]
              -g);
              break;
              case"Q":e.quadraticCurveTo(h[
                1
              ], h[
                2
              ], h[
                3
              ]
              -p, h[
                4
              ]
              -g);
              break;
              case"C":e.bezierCurveTo(h[
                1
              ], h[
                2
              ], h[
                3
              ], h[
                4
              ], h[
                5
              ]
              -p, h[
                6
              ]
              -g);
              break;
              case"A":var v=void 0;
              r?(v=r[
                d
              ])||(v=x(s, h), r[
                d
              ]
              =v):v=x(s, h);
              var y=v.cx, m=v.cy, b=v.rx, E=v.ry, M=v.startAngle, A=v.endAngle, w=v.xRotation, C=v.sweepFlag;
              if(e.ellipse)e.ellipse(y, m, b, E, w, M, A, 1-C);
              else{
                var L=b>E?b:E, k=b>E?1:b/E, P=b>E?E/b:1;
                e.translate(y, m), e.rotate(w), e.scale(k, P), e.arc(0, 0, L, M, A, 1-C), e.scale(1/k, 1/P), e.rotate(-w), e.translate(-y, -m)
              }
              break;
              case"Z":e.closePath()
            }
            if("Z"===l)s=u;
            else{
              var N=h.length;
              s=[
                h[
                  N-2
                ], h[
                  N-1
                ]
              ]
            }
          }
        }
      }
      function R(t, e){
        var n=t.get("canvas");
        n&&("remove"===e&&(t._cacheCanvasBBox=t.get("cacheCanvasBBox")), t.get("hasChanged")||(t.set("hasChanged", !0), t.cfg.parent&&t.cfg.parent.get("hasChanged")||(n.refreshElement(t, e, n), n.get("autoDraw")&&n.draw())))
      }
      function q(t){
        var e, n, r;
        if(t.destroyed)e=t._cacheCanvasBBox;
        else{
          var i=t.get("cacheCanvasBBox"), o=i&&!(!i.width||!i.height), a=t.getCanvasBBox(), s=a&&!(!a.width||!a.height);
          o&&s?(r=a, e=(n=i)&&r?{
            minX:Math.min(n.minX, r.minX), minY:Math.min(n.minY, r.minY), maxX:Math.max(n.maxX, r.maxX), maxY:Math.max(n.maxY, r.maxY)
          }
          :n||r):o?e=i:s&&(e=a)
        }
        return e
      }
      const X=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.onCanvasChange=function(t){
          R(this, t)
        }, e.prototype.getShapeBase=function(){
          return r
        }, e.prototype.getGroupBase=function(){
          return e
        }, e.prototype._applyClip=function(t, e){
          e&&(t.save(), I(t, e), e.createPath(t), t.restore(), t.clip(), e._afterDraw())
        }, e.prototype.cacheCanvasBBox=function(){
          var t=this.cfg.children, e=[
          ], n=[
          ];
          (0, a.each)(t, (function(t){
            var r=t.cfg.cacheCanvasBBox;
            r&&t.cfg.isInView&&(e.push(r.minX, r.maxX), n.push(r.minY, r.maxY))
          }));
          var r=null;
          if(e.length){
            var i=(0, a.min)(e), o=(0, a.max)(e), s=(0, a.min)(n), u=(0, a.max)(n);
            r={
              minX:i, minY:s, x:i, y:s, maxX:o, maxY:u, width:o-i, height:u-s
            };
            var d=this.cfg.canvas;
            if(d){
              var h=d.getViewRange();
              this.set("isInView", c(r, h))
            }
          }
          else this.set("isInView", !1);
          this.set("cacheCanvasBBox", r)
        }, e.prototype.draw=function(t, e){
          var n=this.cfg.children, r=!e||this.cfg.refresh;
          n.length&&r&&(t.save(), I(t, this), this._applyClip(t, this.getClip()), S(t, n, e), t.restore(), this.cacheCanvasBBox()), this.cfg.refresh=null, this.set("hasChanged", !1)
        }, e.prototype.skipDraw=function(){
          this.set("cacheCanvasBBox", null), this.set("hasChanged", !1)
        }, e
      }
      (o.AbstractGroup);
      const Y=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            lineWidth:1, lineAppendWidth:0, strokeOpacity:1, fillOpacity:1
          })
        }, e.prototype.getShapeBase=function(){
          return r
        }, e.prototype.getGroupBase=function(){
          return X
        }, e.prototype.onCanvasChange=function(t){
          R(this, t)
        }, e.prototype.calculateBBox=function(){
          var t=this.get("type"), e=this.getHitLineWidth(), n=(0, o.getBBoxMethod)(t)(this), r=e/2, i=n.x-r, a=n.y-r, s=n.x+n.width+r, u=n.y+n.height+r;
          return{
            x:i, minX:i, y:a, minY:a, width:n.width+e, height:n.height+e, maxX:s, maxY:u
          }
        }, e.prototype.isFill=function(){
          return!!this.attrs.fill||this.isClipShape()
        }, e.prototype.isStroke=function(){
          return!!this.attrs.stroke
        }, e.prototype._applyClip=function(t, e){
          e&&(t.save(), I(t, e), e.createPath(t), t.restore(), t.clip(), e._afterDraw())
        }, e.prototype.draw=function(t, e){
          var n=this.cfg.clipShape;
          if(e){
            if(!1===this.cfg.refresh)return void this.set("hasChanged", !1);
            if(!c(e, this.getCanvasBBox()))return this.set("hasChanged", !1), void(this.cfg.isInView&&this._afterDraw())
          }
          t.save(), I(t, this), this._applyClip(t, n), this.drawPath(t), t.restore(), this._afterDraw()
        }, e.prototype.getCanvasViewBox=function(){
          var t=this.cfg.canvas;
          return t?t.getViewRange():null
        }, e.prototype.cacheCanvasBBox=function(){
          var t=this.getCanvasViewBox();
          if(t){
            var e=this.getCanvasBBox(), n=c(e, t);
            this.set("isInView", n), n?this.set("cacheCanvasBBox", e):this.set("cacheCanvasBBox", null)
          }
        }, e.prototype._afterDraw=function(){
          this.cacheCanvasBBox(), this.set("hasChanged", !1), this.set("refresh", null)
        }, e.prototype.skipDraw=function(){
          this.set("cacheCanvasBBox", null), this.set("isInView", null), this.set("hasChanged", !1)
        }, e.prototype.drawPath=function(t){
          this.createPath(t), this.strokeAndFill(t), this.afterDrawPath(t)
        }, e.prototype.fill=function(t){
          t.fill()
        }, e.prototype.stroke=function(t){
          t.stroke()
        }, e.prototype.strokeAndFill=function(t){
          var e=this.attrs, n=e.lineWidth, r=e.opacity, i=e.strokeOpacity, o=e.fillOpacity;
          this.isFill()&&((0, a.isNil)(o)||1===o?this.fill(t):(t.globalAlpha=o, this.fill(t), t.globalAlpha=r)), this.isStroke()&&n>0&&((0, a.isNil)(i)||1===i||(t.globalAlpha=i), this.stroke(t)), this.afterDrawPath(t)
        }, e.prototype.createPath=function(t){
        }, e.prototype.afterDrawPath=function(t){
        }, e.prototype.isInShape=function(t, e){
          var n=this.isStroke(), r=this.isFill(), i=this.getHitLineWidth();
          return this.isInStrokeOrPath(t, e, n, r, i)
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          return!1
        }, e.prototype.getHitLineWidth=function(){
          if(!this.isStroke())return 0;
          var t=this.attrs;
          return t.lineWidth+t.lineAppendWidth
        }, e
      }
      (o.AbstractShape);
      const G=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            x:0, y:0, r:0
          })
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          var o=this.attr(), a=o.x, u=o.y, c=o.r, d=i/2, h=s(a, u, t, e);
          return r&&n?h<=c+d:r?h<=c:!!n&&(h>=c-d&&h<=c+d)
        }, e.prototype.createPath=function(t){
          var e=this.attr(), n=e.x, r=e.y, i=e.r;
          t.beginPath(), t.arc(n, r, i, 0, 2*Math.PI, !1), t.closePath()
        }, e
      }
      (Y);
      function H(t, e, n, r){
        return t/(n*n)+e/(r*r)
      }
      const U=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            x:0, y:0, rx:0, ry:0
          })
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          var o=this.attr(), a=i/2, s=o.x, u=o.y, c=o.rx, d=o.ry, h=(t-s)*(t-s), l=(e-u)*(e-u);
          return r&&n?H(h, l, c+a, d+a)<=1:r?H(h, l, c, d)<=1:!!n&&(H(h, l, c-a, d-a)>=1&&H(h, l, c+a, d+a)<=1)
        }, e.prototype.createPath=function(t){
          var e=this.attr(), n=e.x, r=e.y, i=e.rx, o=e.ry;
          if(t.beginPath(), t.ellipse)t.ellipse(n, r, i, o, 0, 0, 2*Math.PI, !1);
          else{
            var a=i>o?i:o, s=i>o?1:i/o, u=i>o?o/i:1;
            t.save(), t.translate(n, r), t.scale(s, u), t.arc(0, 0, a, 0, 2*Math.PI), t.restore(), t.closePath()
          }
        }, e
      }
      (Y);
      function V(t){
        return t instanceof HTMLElement&&(0, a.isString)(t.nodeName)&&"CANVAS"===t.nodeName.toUpperCase()
      }
      const z=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            x:0, y:0, width:0, height:0
          })
        }, e.prototype.initAttrs=function(t){
          this._setImage(t.img)
        }, e.prototype.isStroke=function(){
          return!1
        }, e.prototype.isOnlyHitBox=function(){
          return!0
        }, e.prototype._afterLoading=function(){
          if(!0===this.get("toDraw")){
            var t=this.get("canvas");
            t?t.draw():this.createPath(this.get("context"))
          }
        }, e.prototype._setImage=function(t){
          var e=this, n=this.attrs;
          if((0, a.isString)(t)){
            var r=new Image;
            r.onload=function(){
              if(e.destroyed)return!1;
              e.attr("img", r), e.set("loading", !1), e._afterLoading();
              var t=e.get("callback");
              t&&t.call(e)
            }, r.crossOrigin="Anonymous", r.src=t, this.set("loading", !0)
          }
          else t instanceof Image?(n.width||(n.width=t.width), n.height||(n.height=t.height)):V(t)&&(n.width||(n.width=Number(t.getAttribute("width"))), n.height||(n.height, Number(t.getAttribute("height"))))
        }, e.prototype.onAttrChange=function(e, n, r){
          t.prototype.onAttrChange.call(this, e, n, r), "img"===e&&this._setImage(n)
        }, e.prototype.createPath=function(t){
          if(this.get("loading"))return this.set("toDraw", !0), void this.set("context", t);
          var e=this.attr(), n=e.x, r=e.y, i=e.width, o=e.height, s=e.sx, u=e.sy, c=e.swidth, d=e.sheight, h=e.img;
          (h instanceof Image||V(h))&&((0, a.isNil)(s)||(0, a.isNil)(u)||(0, a.isNil)(c)||(0, a.isNil)(d)?t.drawImage(h, n, r, i, o):t.drawImage(h, s, u, c, d, n, r, i, o))
        }, e
      }
      (Y);
      var W=n(966340);
      function Z(t, e, n, r, i, o, a){
        var s=Math.min(t, n), u=Math.max(t, n), c=Math.min(e, r), d=Math.max(e, r), h=i/2;
        return o>=s-h&&o<=u+h&&a>=c-h&&a<=d+h&&W.N1.pointToLine(t, e, n, r, o, a)<=i/2
      }
      const Q=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            x1:0, y1:0, x2:0, y2:0, startArrow:!1, endArrow:!1
          })
        }, e.prototype.initAttrs=function(t){
          this.setArrow()
        }, e.prototype.onAttrChange=function(e, n, r){
          t.prototype.onAttrChange.call(this, e, n, r), this.setArrow()
        }, e.prototype.setArrow=function(){
          var t=this.attr(), e=t.x1, n=t.y1, r=t.x2, i=t.y2, o=t.startArrow, a=t.endArrow;
          o&&k(this, t, r, i, e, n), a&&P(this, t, e, n, r, i)
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          if(!n||!i)return!1;
          var o=this.attr();
          return Z(o.x1, o.y1, o.x2, o.y2, i, t, e)
        }, e.prototype.createPath=function(t){
          var e=this.attr(), n=e.x1, r=e.y1, i=e.x2, o=e.y2, a=e.startArrow, s=e.endArrow, u={
            dx:0, dy:0
          }, c={
            dx:0, dy:0
          };
          a&&a.d&&(u=_(n, r, i, o, e.startArrow.d)), s&&s.d&&(c=_(n, r, i, o, e.endArrow.d)), t.beginPath(), t.moveTo(n+u.dx, r+u.dy), t.lineTo(i-c.dx, o-c.dy)
        }, e.prototype.afterDrawPath=function(t){
          var e=this.get("startArrowShape"), n=this.get("endArrowShape");
          e&&e.draw(t), n&&n.draw(t)
        }, e.prototype.getTotalLength=function(){
          var t=this.attr(), e=t.x1, n=t.y1, r=t.x2, i=t.y2;
          return W.N1.length(e, n, r, i)
        }, e.prototype.getPoint=function(t){
          var e=this.attr(), n=e.x1, r=e.y1, i=e.x2, o=e.y2;
          return W.N1.pointAt(n, r, i, o, t)
        }, e
      }
      (Y);
      var $=n(316293), K={
        circle:function(t, e, n){
          return[
            [
              "M", t-n, e
            ], [
              "A", n, n, 0, 1, 0, t+n, e
            ], [
              "A", n, n, 0, 1, 0, t-n, e
            ]
          ]
        }, square:function(t, e, n){
          return[
            [
              "M", t-n, e-n
            ], [
              "L", t+n, e-n
            ], [
              "L", t+n, e+n
            ], [
              "L", t-n, e+n
            ], [
              "Z"
            ]
          ]
        }, diamond:function(t, e, n){
          return[
            [
              "M", t-n, e
            ], [
              "L", t, e-n
            ], [
              "L", t+n, e
            ], [
              "L", t, e+n
            ], [
              "Z"
            ]
          ]
        }, triangle:function(t, e, n){
          var r=n*Math.sin(1/3*Math.PI);
          return[
            [
              "M", t-n, e+r
            ], [
              "L", t, e-r
            ], [
              "L", t+n, e+r
            ], [
              "Z"
            ]
          ]
        }, "triangle-down":function(t, e, n){
          var r=n*Math.sin(1/3*Math.PI);
          return[
            [
              "M", t-n, e-r
            ], [
              "L", t+n, e-r
            ], [
              "L", t, e+r
            ], [
              "Z"
            ]
          ]
        }
      };
      const J=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.initAttrs=function(t){
          this._resetParamsCache()
        }, e.prototype._resetParamsCache=function(){
          this.set("paramsCache", {
          })
        }, e.prototype.onAttrChange=function(e, n, r){
          t.prototype.onAttrChange.call(this, e, n, r), -1!==[
            "symbol", "x", "y", "r", "radius"
          ].indexOf(e)&&this._resetParamsCache()
        }, e.prototype.isOnlyHitBox=function(){
          return!0
        }, e.prototype._getR=function(t){
          return(0, a.isNil)(t.r)?t.radius:t.r
        }, e.prototype._getPath=function(){
          var t, n, r=this.attr(), i=r.x, o=r.y, s=r.symbol||"circle", u=this._getR(r);
          if((0, a.isFunction)(s))n=(t=s)(i, o, u), n=(0, $.$j)(n);
          else{
            if(!(t=e.Symbols[
              s
            ]))return console.warn(s+" marker is not supported."), null;
            n=t(i, o, u)
          }
          return n
        }, e.prototype.createPath=function(t){
          F(this, t, {
            path:this._getPath()
          }, this.get("paramsCache"))
        }, e.Symbols=K, e
      }
      (Y);
      function tt(t, e, n){
        var r=(0, o.getOffScreenContext)();
        return t.createPath(r), r.isPointInPath(e, n)
      }
      function et(t){
        return Math.abs(t)<1e-6?0:t<0?-1:1
      }
      function nt(t, e, n){
        return(n[
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
        ])*(n[
          1
        ]
        -t[
          1
        ])&&Math.min(t[
          0
        ], e[
          0
        ])<=n[
          0
        ]
        &&n[
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
        ])<=n[
          1
        ]
        &&n[
          1
        ]
        <=Math.max(t[
          1
        ], e[
          1
        ])
      }
      function rt(t, e, n){
        var r=!1, i=t.length;
        if(i<=2)return!1;
        for(var o=0;
        o<i;
        o++){
          var a=t[
            o
          ], s=t[
            (o+1)%i
          ];
          if(nt(a, s, [
            e, n
          ]))return!0;
          et(a[
            1
          ]
          -n)>0!=et(s[
            1
          ]
          -n)>0&&et(e-(n-a[
            1
          ])*(a[
            0
          ]
          -s[
            0
          ])/(a[
            1
          ]
          -s[
            1
          ])-a[
            0
          ])<0&&(r=!r)
        }
        return r
      }
      var it=n(883278), ot=n(630329);
      function at(t, e, n, r, i, o, a, u){
        var c=(Math.atan2(u-e, a-t)+2*Math.PI)%(2*Math.PI);
        if(c<r||c>i)return!1;
        var d={
          x:t+n*Math.cos(c), y:e+n*Math.sin(c)
        };
        return s(d.x, d.y, a, u)<=o/2
      }
      var st=it.pd;
      const ut=(0, i.__assign)({
        hasArc:function(t){
          for(var e=!1, n=t.length, r=0;
          r<n;
          r++){
            var i=t[
              r
            ]
            [
              0
            ];
            if("C"===i||"A"===i||"Q"===i){
              e=!0;
              break
            }
          }
          return e
        }, extractPolygons:function(t){
          for(var e=t.length, n=[
          ], r=[
          ], i=[
          ], o=0;
          o<e;
          o++){
            var a=t[
              o
            ], s=a[
              0
            ];
            "M"===s?(i.length&&(r.push(i), i=[
            ]), i.push([
              a[
                1
              ], a[
                2
              ]
            ])):"Z"===s?i.length&&(n.push(i), i=[
            ]):i.push([
              a[
                1
              ], a[
                2
              ]
            ])
          }
          return i.length>0&&r.push(i), {
            polygons:n, polylines:r
          }
        }, isPointInStroke:function(t, e, n, r, i){
          for(var o=!1, a=e/2, s=0;
          s<t.length;
          s++){
            var c=t[
              s
            ], d=c.currentPoint, h=c.params, l=c.prePoint, f=c.box;
            if(!f||u(f.x-a, f.y-a, f.width+e, f.height+e, n, r)){
              switch(c.command){
                case"L":case"Z":o=Z(l[
                  0
                ], l[
                  1
                ], d[
                  0
                ], d[
                  1
                ], e, n, r);
                break;
                case"Q":o=W.kO.pointDistance(l[
                  0
                ], l[
                  1
                ], h[
                  1
                ], h[
                  2
                ], h[
                  3
                ], h[
                  4
                ], n, r)<=e/2;
                break;
                case"C":o=W.lw.pointDistance(l[
                  0
                ], l[
                  1
                ], h[
                  1
                ], h[
                  2
                ], h[
                  3
                ], h[
                  4
                ], h[
                  5
                ], h[
                  6
                ], n, r, i)<=e/2;
                break;
                case"A":var p=c.arcParams, g=p.cx, v=p.cy, y=p.rx, m=p.ry, b=p.startAngle, x=p.endAngle, E=p.xRotation, M=[
                  n, r, 1
                ], A=y>m?y:m, w=st(null, [
                  [
                    "t", -g, -v
                  ], [
                    "r", -E
                  ], [
                    "s", 1/(y>m?1:y/m), 1/(y>m?m/y:1)
                  ]
                ]);
                ot.transformMat3(M, M, w), o=at(0, 0, A, b, x, e, M[
                  0
                ], M[
                  1
                ])
              }
              if(o)break
            }
          }
          return o
        }
      }, o.PathUtil);
      function ct(t, e, n){
        for(var r=!1, i=0;
        i<t.length;
        i++){
          if(r=rt(t[
            i
          ], e, n))break
        }
        return r
      }
      const dt=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            startArrow:!1, endArrow:!1
          })
        }, e.prototype.initAttrs=function(t){
          this._setPathArr(t.path), this.setArrow()
        }, e.prototype.onAttrChange=function(e, n, r){
          t.prototype.onAttrChange.call(this, e, n, r), "path"===e&&this._setPathArr(n), this.setArrow()
        }, e.prototype._setPathArr=function(t){
          this.attrs.path=(0, $.$j)(t);
          var e=ut.hasArc(t);
          this.set("hasArc", e), this.set("paramsCache", {
          }), this.set("segments", null), this.set("curve", null), this.set("tCache", null), this.set("totalLength", null)
        }, e.prototype.getSegments=function(){
          var t=this.get("segements");
          return t||(t=(0, $.On)(this.attr("path")), this.set("segments", t)), t
        }, e.prototype.setArrow=function(){
          var t, e=this.attr(), n=e.startArrow, r=e.endArrow;
          n&&k(this, e, (t=this.getStartTangent())[
            0
          ]
          [
            0
          ], t[
            0
          ]
          [
            1
          ], t[
            1
          ]
          [
            0
          ], t[
            1
          ]
          [
            1
          ]);
          r&&P(this, e, (t=this.getEndTangent())[
            0
          ]
          [
            0
          ], t[
            0
          ]
          [
            1
          ], t[
            1
          ]
          [
            0
          ], t[
            1
          ]
          [
            1
          ])
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          var o=this.getSegments(), a=this.get("hasArc"), s=!1;
          if(n){
            var u=this.getTotalLength();
            s=ut.isPointInStroke(o, i, t, e, u)
          }
          if(!s&&r)if(a)s=tt(this, t, e);
          else{
            var c=this.attr("path"), d=ut.extractPolygons(c);
            s=ct(d.polygons, t, e)||ct(d.polylines, t, e)
          }
          return s
        }, e.prototype.createPath=function(t){
          F(this, t, this.attr(), this.get("paramsCache"))
        }, e.prototype.afterDrawPath=function(t){
          var e=this.get("startArrowShape"), n=this.get("endArrowShape");
          e&&e.draw(t), n&&n.draw(t)
        }, e.prototype.getTotalLength=function(){
          var t=this.get("totalLength");
          return(0, a.isNil)(t)?(this._calculateCurve(), this._setTcache(), this.get("totalLength")):t
        }, e.prototype.getPoint=function(t){
          var e, n, r=this.get("tCache");
          r||(this._calculateCurve(), this._setTcache(), r=this.get("tCache"));
          var i=this.get("curve");
          if(!r||0===r.length)return i?{
            x:i[
              0
            ]
            [
              1
            ], y:i[
              0
            ]
            [
              2
            ]
          }
          :null;
          (0, a.each)(r, (function(r, i){
            t>=r[
              0
            ]
            &&t<=r[
              1
            ]
            &&(e=(t-r[
              0
            ])/(r[
              1
            ]
            -r[
              0
            ]), n=i)
          }));
          var o=i[
            n
          ];
          if((0, a.isNil)(o)||(0, a.isNil)(n))return null;
          var s=o.length, u=i[
            n+1
          ];
          return W.lw.pointAt(o[
            s-2
          ], o[
            s-1
          ], u[
            1
          ], u[
            2
          ], u[
            3
          ], u[
            4
          ], u[
            5
          ], u[
            6
          ], e)
        }, e.prototype._calculateCurve=function(){
          var t=this.attr().path;
          this.set("curve", ut.pathToCurve(t))
        }, e.prototype._setTcache=function(){
          var t, e, n, r, i=0, o=0, s=[
          ], u=this.get("curve");
          u&&((0, a.each)(u, (function(t, e){
            n=u[
              e+1
            ], r=t.length, n&&(i+=W.lw.length(t[
              r-2
            ], t[
              r-1
            ], n[
              1
            ], n[
              2
            ], n[
              3
            ], n[
              4
            ], n[
              5
            ], n[
              6
            ])||0)
          })), this.set("totalLength", i), 0!==i?((0, a.each)(u, (function(a, c){
            n=u[
              c+1
            ], r=a.length, n&&((t=[
            ])[
              0
            ]
            =o/i, e=W.lw.length(a[
              r-2
            ], a[
              r-1
            ], n[
              1
            ], n[
              2
            ], n[
              3
            ], n[
              4
            ], n[
              5
            ], n[
              6
            ]), o+=e||0, t[
              1
            ]
            =o/i, s.push(t))
          })), this.set("tCache", s)):this.set("tCache", [
          ]))
        }, e.prototype.getStartTangent=function(){
          var t, e=this.getSegments();
          if(e.length>1){
            var n=e[
              0
            ].currentPoint, r=e[
              1
            ].currentPoint, i=e[
              1
            ].startTangent;
            t=[
            ], i?(t.push([
              n[
                0
              ]
              -i[
                0
              ], n[
                1
              ]
              -i[
                1
              ]
            ]), t.push([
              n[
                0
              ], n[
                1
              ]
            ])):(t.push([
              r[
                0
              ], r[
                1
              ]
            ]), t.push([
              n[
                0
              ], n[
                1
              ]
            ]))
          }
          return t
        }, e.prototype.getEndTangent=function(){
          var t, e=this.getSegments(), n=e.length;
          if(n>1){
            var r=e[
              n-2
            ].currentPoint, i=e[
              n-1
            ].currentPoint, o=e[
              n-1
            ].endTangent;
            t=[
            ], o?(t.push([
              i[
                0
              ]
              -o[
                0
              ], i[
                1
              ]
              -o[
                1
              ]
            ]), t.push([
              i[
                0
              ], i[
                1
              ]
            ])):(t.push([
              r[
                0
              ], r[
                1
              ]
            ]), t.push([
              i[
                0
              ], i[
                1
              ]
            ]))
          }
          return t
        }, e
      }
      (Y);
      function ht(t, e, n, r, i){
        var o=t.length;
        if(o<2)return!1;
        for(var a=0;
        a<o-1;
        a++){
          if(Z(t[
            a
          ]
          [
            0
          ], t[
            a
          ]
          [
            1
          ], t[
            a+1
          ]
          [
            0
          ], t[
            a+1
          ]
          [
            1
          ], e, n, r))return!0
        }
        if(i){
          var s=t[
            0
          ], u=t[
            o-1
          ];
          if(Z(s[
            0
          ], s[
            1
          ], u[
            0
          ], u[
            1
          ], e, n, r))return!0
        }
        return!1
      }
      const lt=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          var o=this.attr().points, a=!1;
          return n&&(a=ht(o, i, t, e, !0)), !a&&r&&(a=rt(o, t, e)), a
        }, e.prototype.createPath=function(t){
          var e=this.attr().points;
          if(!(e.length<2)){
            t.beginPath();
            for(var n=0;
            n<e.length;
            n++){
              var r=e[
                n
              ];
              0===n?t.moveTo(r[
                0
              ], r[
                1
              ]):t.lineTo(r[
                0
              ], r[
                1
              ])
            }
            t.closePath()
          }
        }, e
      }
      (Y);
      const ft=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            startArrow:!1, endArrow:!1
          })
        }, e.prototype.initAttrs=function(t){
          this.setArrow()
        }, e.prototype.onAttrChange=function(e, n, r){
          t.prototype.onAttrChange.call(this, e, n, r), this.setArrow(), -1!==[
            "points"
          ].indexOf(e)&&this._resetCache()
        }, e.prototype._resetCache=function(){
          this.set("totalLength", null), this.set("tCache", null)
        }, e.prototype.setArrow=function(){
          var t=this.attr(), e=this.attrs, n=e.points, r=e.startArrow, i=e.endArrow, o=n.length, a=n[
            0
          ]
          [
            0
          ], s=n[
            0
          ]
          [
            1
          ], u=n[
            o-1
          ]
          [
            0
          ], c=n[
            o-1
          ]
          [
            1
          ];
          r&&k(this, t, n[
            1
          ]
          [
            0
          ], n[
            1
          ]
          [
            1
          ], a, s), i&&P(this, t, n[
            o-2
          ]
          [
            0
          ], n[
            o-2
          ]
          [
            1
          ], u, c)
        }, e.prototype.isFill=function(){
          return!1
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          return!(!n||!i)&&ht(this.attr().points, i, t, e, !1)
        }, e.prototype.isStroke=function(){
          return!0
        }, e.prototype.createPath=function(t){
          var e=this.attr(), n=e.points, r=e.startArrow, i=e.endArrow, o=n.length;
          if(!(n.length<2)){
            var a, s=n[
              0
            ]
            [
              0
            ], u=n[
              0
            ]
            [
              1
            ], c=n[
              o-1
            ]
            [
              0
            ], d=n[
              o-1
            ]
            [
              1
            ];
            if(r&&r.d)s+=(a=_(s, u, n[
              1
            ]
            [
              0
            ], n[
              1
            ]
            [
              1
            ], r.d)).dx, u+=a.dy;
            if(i&&i.d)c-=(a=_(n[
              o-2
            ]
            [
              0
            ], n[
              o-2
            ]
            [
              1
            ], c, d, i.d)).dx, d-=a.dy;
            t.beginPath(), t.moveTo(s, u);
            for(var h=0;
            h<o-1;
            h++){
              var l=n[
                h
              ];
              t.lineTo(l[
                0
              ], l[
                1
              ])
            }
            t.lineTo(c, d)
          }
        }, e.prototype.afterDrawPath=function(t){
          var e=this.get("startArrowShape"), n=this.get("endArrowShape");
          e&&e.draw(t), n&&n.draw(t)
        }, e.prototype.getTotalLength=function(){
          var t=this.attr().points, e=this.get("totalLength");
          return(0, a.isNil)(e)?(this.set("totalLength", W.Ro.length(t)), this.get("totalLength")):e
        }, e.prototype.getPoint=function(t){
          var e, n, r=this.attr().points, i=this.get("tCache");
          return i||(this._setTcache(), i=this.get("tCache")), (0, a.each)(i, (function(r, i){
            t>=r[
              0
            ]
            &&t<=r[
              1
            ]
            &&(e=(t-r[
              0
            ])/(r[
              1
            ]
            -r[
              0
            ]), n=i)
          })), W.N1.pointAt(r[
            n
          ]
          [
            0
          ], r[
            n
          ]
          [
            1
          ], r[
            n+1
          ]
          [
            0
          ], r[
            n+1
          ]
          [
            1
          ], e)
        }, e.prototype._setTcache=function(){
          var t=this.attr().points;
          if(t&&0!==t.length){
            var e=this.getTotalLength();
            if(!(e<=0)){
              var n, r, i=0, o=[
              ];
              (0, a.each)(t, (function(a, s){
                t[
                  s+1
                ]
                &&((n=[
                ])[
                  0
                ]
                =i/e, r=W.N1.length(a[
                  0
                ], a[
                  1
                ], t[
                  s+1
                ]
                [
                  0
                ], t[
                  s+1
                ]
                [
                  1
                ]), i+=r, n[
                  1
                ]
                =i/e, o.push(n))
              })), this.set("tCache", o)
            }
          }
        }, e.prototype.getStartTangent=function(){
          var t=this.attr().points, e=[
          ];
          return e.push([
            t[
              1
            ]
            [
              0
            ], t[
              1
            ]
            [
              1
            ]
          ]), e.push([
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
          ]), e
        }, e.prototype.getEndTangent=function(){
          var t=this.attr().points, e=t.length-1, n=[
          ];
          return n.push([
            t[
              e-1
            ]
            [
              0
            ], t[
              e-1
            ]
            [
              1
            ]
          ]), n.push([
            t[
              e
            ]
            [
              0
            ], t[
              e
            ]
            [
              1
            ]
          ]), n
        }, e
      }
      (Y);
      const pt=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            x:0, y:0, width:0, height:0, radius:0
          })
        }, e.prototype.isInStrokeOrPath=function(t, e, n, r, i){
          var o=this.attr(), a=o.x, s=o.y, c=o.width, d=o.height, h=o.radius;
          if(h){
            var l=!1;
            return n&&(l=function(t, e, n, r, i, o, a, s){
              return Z(t+i, e, t+n-i, e, o, a, s)||Z(t+n, e+i, t+n, e+r-i, o, a, s)||Z(t+n-i, e+r, t+i, e+r, o, a, s)||Z(t, e+r-i, t, e+i, o, a, s)||at(t+n-i, e+i, i, 1.5*Math.PI, 2*Math.PI, o, a, s)||at(t+n-i, e+r-i, i, 0, .5*Math.PI, o, a, s)||at(t+i, e+r-i, i, .5*Math.PI, Math.PI, o, a, s)||at(t+i, e+i, i, Math.PI, 1.5*Math.PI, o, a, s)
            }
            (a, s, c, d, h, i, t, e)), !l&&r&&(l=tt(this, t, e)), l
          }
          var f=i/2;
          return r&&n?u(a-f, s-f, c+f, d+f, t, e):r?u(a, s, c, d, t, e):n?function(t, e, n, r, i, o, a){
            var s=i/2;
            return u(t-s, e-s, n, i, o, a)||u(t+n-s, e-s, i, r, o, a)||u(t+s, e+r-s, n, i, o, a)||u(t-s, e+s, i, r, o, a)
          }
          (a, s, c, d, i, t, e):void 0
        }, e.prototype.createPath=function(t){
          var e=this.attr(), n=e.x, r=e.y, i=e.width, o=e.height, s=e.radius;
          if(t.beginPath(), 0===s)t.rect(n, r, i, o);
          else{
            var u=function(t){
              var e=0, n=0, r=0, i=0;
              return(0, a.isArray)(t)?1===t.length?e=n=r=i=t[
                0
              ]
              :2===t.length?(e=r=t[
                0
              ], n=i=t[
                1
              ]):3===t.length?(e=t[
                0
              ], n=i=t[
                1
              ], r=t[
                2
              ]):(e=t[
                0
              ], n=t[
                1
              ], r=t[
                2
              ], i=t[
                3
              ]):e=n=r=i=t, [
                e, n, r, i
              ]
            }
            (s), c=u[
              0
            ], d=u[
              1
            ], h=u[
              2
            ], l=u[
              3
            ];
            t.moveTo(n+c, r), t.lineTo(n+i-d, r), 0!==d&&t.arc(n+i-d, r+d, d, -Math.PI/2, 0), t.lineTo(n+i, r+o-h), 0!==h&&t.arc(n+i-h, r+o-h, h, 0, Math.PI/2), t.lineTo(n+l, r+o), 0!==l&&t.arc(n+l, r+o-l, l, Math.PI/2, Math.PI), t.lineTo(n, r+c), 0!==c&&t.arc(n+c, r+c, c, Math.PI, 1.5*Math.PI), t.closePath()
          }
        }, e
      }
      (Y);
      const gt=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultAttrs=function(){
          var e=t.prototype.getDefaultAttrs.call(this);
          return(0, i.__assign)((0, i.__assign)({
          }, e), {
            x:0, y:0, text:null, fontSize:12, fontFamily:"sans-serif", fontStyle:"normal", fontWeight:"normal", fontVariant:"normal", textAlign:"start", textBaseline:"bottom"
          })
        }, e.prototype.isOnlyHitBox=function(){
          return!0
        }, e.prototype.initAttrs=function(t){
          this._assembleFont(), t.text&&this._setText(t.text)
        }, e.prototype._assembleFont=function(){
          var t=this.attrs;
          t.font=(0, o.assembleFont)(t)
        }, e.prototype._setText=function(t){
          var e=null;
          (0, a.isString)(t)&&-1!==t.indexOf("\n")&&(e=t.split("\n")), this.set("textArr", e)
        }, e.prototype.onAttrChange=function(e, n, r){
          t.prototype.onAttrChange.call(this, e, n, r), e.startsWith("font")&&this._assembleFont(), "text"===e&&this._setText(n)
        }, e.prototype._getSpaceingY=function(){
          var t=this.attrs, e=t.lineHeight, n=1*t.fontSize;
          return e?e-n:.14*n
        }, e.prototype._drawTextArr=function(t, e, n){
          var r, i=this.attrs, s=i.textBaseline, u=i.x, c=i.y, d=1*i.fontSize, h=this._getSpaceingY(), l=(0, o.getTextHeight)(i.text, i.fontSize, i.lineHeight);
          (0, a.each)(e, (function(e, i){
            r=c+i*(h+d)-l+d, "middle"===s&&(r+=l-d-(l-d)/2), "top"===s&&(r+=l-d), (0, a.isNil)(e)||(n?t.fillText(e, u, r):t.strokeText(e, u, r))
          }))
        }, e.prototype._drawText=function(t, e){
          var n=this.attr(), r=n.x, i=n.y, o=this.get("textArr");
          if(o)this._drawTextArr(t, o, e);
          else{
            var s=n.text;
            (0, a.isNil)(s)||(e?t.fillText(s, r, i):t.strokeText(s, r, i))
          }
        }, e.prototype.strokeAndFill=function(t){
          var e=this.attrs, n=e.lineWidth, r=e.opacity, i=e.strokeOpacity, o=e.fillOpacity;
          this.isStroke()&&n>0&&((0, a.isNil)(i)||1===i||(t.globalAlpha=r), this.stroke(t)), this.isFill()&&((0, a.isNil)(o)||1===o?this.fill(t):(t.globalAlpha=o, this.fill(t), t.globalAlpha=r)), this.afterDrawPath(t)
        }, e.prototype.fill=function(t){
          this._drawText(t, !0)
        }, e.prototype.stroke=function(t){
          this._drawText(t, !1)
        }, e
      }
      (Y);
      function vt(t, e, n){
        var r=t.getTotalMatrix();
        if(r){
          var i=function(t, e){
            if(e){
              var n=(0, o.invert)(e);
              return(0, o.multiplyVec2)(n, t)
            }
            return t
          }
          ([
            e, n, 1
          ], r);
          return[
            i[
              0
            ], i[
              1
            ]
          ]
        }
        return[
          e, n
        ]
      }
      function yt(t, e, n){
        if(t.isCanvas&&t.isCanvas())return!0;
        if(!(0, o.isAllowCapture)(t)||!1===t.cfg.isInView)return!1;
        if(t.cfg.clipShape){
          var r=vt(t, e, n), i=r[
            0
          ], a=r[
            1
          ];
          if(t.isClipped(i, a))return!1
        }
        var s=t.cfg.cacheCanvasBBox||t.getCanvasBBox();
        return e>=s.minX&&e<=s.maxX&&n>=s.minY&&n<=s.maxY
      }
      function mt(t, e, n){
        if(!yt(t, e, n))return null;
        for(var r=null, i=t.getChildren(), o=i.length-1;
        o>=0;
        o--){
          var a=i[
            o
          ];
          if(a.isGroup())r=mt(a, e, n);
          else if(yt(a, e, n)){
            var s=a, u=vt(a, e, n), c=u[
              0
            ], d=u[
              1
            ];
            s.isInShape(c, d)&&(r=a)
          }
          if(r)break
        }
        return r
      }
      const bt=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, i.__extends)(e, t), e.prototype.getDefaultCfg=function(){
          var e=t.prototype.getDefaultCfg.call(this);
          return e.renderer="canvas", e.autoDraw=!0, e.localRefresh=!0, e.refreshElements=[
          ], e.clipView=!0, e.quickHit=!1, e
        }, e.prototype.onCanvasChange=function(t){
          "attr"!==t&&"sort"!==t&&"changeSize"!==t||(this.set("refreshElements", [
            this
          ]), this.draw())
        }, e.prototype.getShapeBase=function(){
          return r
        }, e.prototype.getGroupBase=function(){
          return X
        }, e.prototype.getPixelRatio=function(){
          var t=this.get("pixelRatio")||(window?window.devicePixelRatio:1);
          return t>=1?Math.ceil(t):1
        }, e.prototype.getViewRange=function(){
          return{
            minX:0, minY:0, maxX:this.cfg.width, maxY:this.cfg.height
          }
        }, e.prototype.createDom=function(){
          var t=document.createElement("canvas"), e=t.getContext("2d");
          return this.set("context", e), t
        }, e.prototype.setDOMSize=function(e, n){
          t.prototype.setDOMSize.call(this, e, n);
          var r=this.get("context"), i=this.get("el"), o=this.getPixelRatio();
          i.width=o*e, i.height=o*n, o>1&&r.scale(o, o)
        }, e.prototype.clear=function(){
          t.prototype.clear.call(this), this._clearFrame();
          var e=this.get("context"), n=this.get("el");
          e.clearRect(0, 0, n.width, n.height)
        }, e.prototype.getShape=function(e, n){
          return this.get("quickHit")?mt(this, e, n):t.prototype.getShape.call(this, e, n, null)
        }, e.prototype._getRefreshRegion=function(){
          var t, e=this.get("refreshElements"), n=this.getViewRange();
          e.length&&e[
            0
          ]
          ===this?t=n:(t=function(t){
            if(!t.length)return null;
            var e=[
            ], n=[
            ], r=[
            ], i=[
            ];
            return(0, a.each)(t, (function(t){
              var o=q(t);
              o&&(e.push(o.minX), n.push(o.minY), r.push(o.maxX), i.push(o.maxY))
            })), {
              minX:(0, a.min)(e), minY:(0, a.min)(n), maxX:(0, a.max)(r), maxY:(0, a.max)(i)
            }
          }
          (e))&&(t.minX=Math.floor(t.minX), t.minY=Math.floor(t.minY), t.maxX=Math.ceil(t.maxX), t.maxY=Math.ceil(t.maxY), t.maxY+=1, this.get("clipView")&&(t=function(t, e){
            return t&&e&&c(t, e)?{
              minX:Math.max(t.minX, e.minX), minY:Math.max(t.minY, e.minY), maxX:Math.min(t.maxX, e.maxX), maxY:Math.min(t.maxY, e.maxY)
            }
            :null
          }
          (t, n)));
          return t
        }, e.prototype.refreshElement=function(t){
          this.get("refreshElements").push(t)
        }, e.prototype._clearFrame=function(){
          var t=this.get("drawFrame");
          t&&((0, a.clearAnimationFrame)(t), this.set("drawFrame", null), this.set("refreshElements", [
          ]))
        }, e.prototype.draw=function(){
          var t=this.get("drawFrame");
          this.get("autoDraw")&&t||this._startDraw()
        }, e.prototype._drawAll=function(){
          var t=this.get("context"), e=this.get("el"), n=this.getChildren();
          t.clearRect(0, 0, e.width, e.height), I(t, this), S(t, n), this.set("refreshElements", [
          ])
        }, e.prototype._drawRegion=function(){
          var t=this.get("context"), e=this.get("refreshElements"), n=this.getChildren(), r=this._getRefreshRegion();
          r?(t.clearRect(r.minX, r.minY, r.maxX-r.minX, r.maxY-r.minY), t.save(), t.beginPath(), t.rect(r.minX, r.minY, r.maxX-r.minX, r.maxY-r.minY), t.clip(), I(t, this), D(this, n, r), S(t, n, r), t.restore()):e.length&&j(e), (0, a.each)(e, (function(t){
            t.get("hasChanged")&&t.set("hasChanged", !1)
          })), this.set("refreshElements", [
          ])
        }, e.prototype._startDraw=function(){
          var t=this, e=this.get("drawFrame"), n=this.get("drawFrameCallback");
          e||(e=(0, a.requestAnimationFrame)((function(){
            t.get("localRefresh")?t._drawRegion():t._drawAll(), t.set("drawFrame", null), n&&n()
          })), this.set("drawFrame", e))
        }, e.prototype.skipDraw=function(){
        }, e.prototype.removeDom=function(){
          var t=this.get("el");
          t.width=0, t.height=0, t.parentNode.removeChild(t)
        }, e
      }
      (o.AbstractCanvas)
    }, 922274:(t, e)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.MESSAGE=e.ALGORITHM=void 0;
      e.ALGORITHM={
        pageRank:"pageRank", breadthFirstSearch:"breadthFirstSearch", connectedComponent:"connectedComponent", depthFirstSearch:"depthFirstSearch", detectCycle:"detectCycle", detectDirectedCycle:"detectDirectedCycle", detectAllCycles:"detectAllCycles", detectAllDirectedCycle:"detectAllDirectedCycle", detectAllUndirectedCycle:"detectAllUndirectedCycle", dijkstra:"dijkstra", findAllPath:"findAllPath", findShortestPath:"findShortestPath", floydWarshall:"floydWarshall", getAdjMatrix:"getAdjMatrix", getDegree:"getDegree", getInDegree:"getInDegree", getNeighbors:"getNeighbors", getOutDegree:"getOutDegree", labelPropagation:"labelPropagation", louvain:"louvain", GADDI:"GADDI", minimumSpanningTree:"minimumSpanningTree", SUCCESS:"SUCCESS", FAILURE:"FAILURE"
      };
      e.MESSAGE={
        SUCCESS:"SUCCESS", FAILURE:"FAILURE"
      }
    }, 930577:(t, e, n)=>{
      n.d(e, {
        AbstractCanvas:()=>Ze, AbstractGroup:()=>Qe, AbstractShape:()=>$e, Event:()=>R, PathUtil:()=>r, assembleFont:()=>dn, getBBoxMethod:()=>tn, getOffScreenContext:()=>un, getTextHeight:()=>cn, invert:()=>Q, isAllowCapture:()=>U, multiplyVec2:()=>Z
      });
      var r={
      };
      n.r(r), n.d(r, {
        catmullRomToBezier:()=>d, fillPath:()=>S, fillPathByDiff:()=>j, formatPath:()=>F, intersection:()=>P, parsePathArray:()=>m, parsePathString:()=>c, pathToAbsolute:()=>l, pathToCurve:()=>v, rectPath:()=>w
      });
      var i={
      };
      n.r(i), n.d(i, {
        easeBack:()=>Oe, easeBackIn:()=>Se, easeBackInOut:()=>Oe, easeBackOut:()=>De, easeBounce:()=>Pe, easeBounceIn:()=>ke, easeBounceInOut:()=>Ne, easeBounceOut:()=>Pe, easeCircle:()=>Ce, easeCircleIn:()=>Ae, easeCircleInOut:()=>Ce, easeCircleOut:()=>we, easeCubic:()=>de, easeCubicIn:()=>ue, easeCubicInOut:()=>de, easeCubicOut:()=>ce, easeElastic:()=>Be, easeElasticIn:()=>Te, easeElasticInOut:()=>Fe, easeElasticOut:()=>Be, easeExp:()=>Me, easeExpIn:()=>xe, easeExpInOut:()=>Me, easeExpOut:()=>Ee, easeLinear:()=>ie, easePoly:()=>fe, easePolyIn:()=>he, easePolyInOut:()=>fe, easePolyOut:()=>le, easeQuad:()=>se, easeQuadIn:()=>oe, easeQuadInOut:()=>se, easeQuadOut:()=>ae, easeSin:()=>me, easeSinIn:()=>ve, easeSinInOut:()=>me, easeSinOut:()=>ye
      });
      var o=n(224425), a="\t\n\v\f\r   ᠎             　\u2028\u2029", s=new RegExp("([a-z])["+a+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+a+"]*,?["+a+"]*)+)", "ig"), u=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+a+"]*,?["+a+"]*", "ig"), c=function(t){
        if(!t)return null;
        if((0, o.isArray)(t))return t;
        var e={
          a:7, c:6, o:2, h:1, l:2, m:2, r:4, q:4, s:4, t:2, v:1, u:3, z:0
        }, n=[
        ];
        return String(t).replace(s, (function(r, i, o){
          var a=[
          ], s=i.toLowerCase();
          if(o.replace(u, (function(t, e){
            e&&a.push(+e)
          })), "m"===s&&a.length>2&&(n.push([
            i
          ].concat(a.splice(0, 2))), s="l", i="m"===i?"l":"L"), "o"===s&&1===a.length&&n.push([
            i, a[
              0
            ]
          ]), "r"===s)n.push([
            i
          ].concat(a));
          else for(;
          a.length>=e[
            s
          ]
          &&(n.push([
            i
          ].concat(a.splice(0, e[
            s
          ]))), e[
            s
          ]);
          );
          return t
        })), n
      }, d=function(t, e){
        for(var n=[
        ], r=0, i=t.length;
        i-2*!e>r;
        r+=2){
          var o=[
            {
              x:+t[
                r-2
              ], y:+t[
                r-1
              ]
            }, {
              x:+t[
                r
              ], y:+t[
                r+1
              ]
            }, {
              x:+t[
                r+2
              ], y:+t[
                r+3
              ]
            }, {
              x:+t[
                r+4
              ], y:+t[
                r+5
              ]
            }
          ];
          e?r?i-4===r?o[
            3
          ]
          ={
            x:+t[
              0
            ], y:+t[
              1
            ]
          }
          :i-2===r&&(o[
            2
          ]
          ={
            x:+t[
              0
            ], y:+t[
              1
            ]
          }, o[
            3
          ]
          ={
            x:+t[
              2
            ], y:+t[
              3
            ]
          }):o[
            0
          ]
          ={
            x:+t[
              i-2
            ], y:+t[
              i-1
            ]
          }
          :i-4===r?o[
            3
          ]
          =o[
            2
          ]
          :r||(o[
            0
          ]
          ={
            x:+t[
              r
            ], y:+t[
              r+1
            ]
          }), n.push([
            "C", (-o[
              0
            ].x+6*o[
              1
            ].x+o[
              2
            ].x)/6, (-o[
              0
            ].y+6*o[
              1
            ].y+o[
              2
            ].y)/6, (o[
              1
            ].x+6*o[
              2
            ].x-o[
              3
            ].x)/6, (o[
              1
            ].y+6*o[
              2
            ].y-o[
              3
            ].y)/6, o[
              2
            ].x, o[
              2
            ].y
          ])
        }
        return n
      }, h=function(t, e, n, r, i){
        var o=[
        ];
        if(null===i&&null===r&&(r=n), t=+t, e=+e, n=+n, r=+r, null!==i){
          var a=Math.PI/180, s=t+n*Math.cos(-r*a), u=t+n*Math.cos(-i*a);
          o=[
            [
              "M", s, e+n*Math.sin(-r*a)
            ], [
              "A", n, n, 0, +(i-r>180), 0, u, e+n*Math.sin(-i*a)
            ]
          ]
        }
        else o=[
          [
            "M", t, e
          ], [
            "m", 0, -r
          ], [
            "a", n, r, 0, 1, 1, 0, 2*r
          ], [
            "a", n, r, 0, 1, 1, 0, -2*r
          ], [
            "z"
          ]
        ];
        return o
      }, l=function(t){
        if(!(t=c(t))||!t.length)return[
          [
            "M", 0, 0
          ]
        ];
        var e, n, r=[
        ], i=0, o=0, a=0, s=0, u=0;
        "M"===t[
          0
        ]
        [
          0
        ]
        &&(a=i=+t[
          0
        ]
        [
          1
        ], s=o=+t[
          0
        ]
        [
          2
        ], u++, r[
          0
        ]
        =[
          "M", i, o
        ]);
        for(var l=3===t.length&&"M"===t[
          0
        ]
        [
          0
        ]
        &&"R"===t[
          1
        ]
        [
          0
        ].toUpperCase()&&"Z"===t[
          2
        ]
        [
          0
        ].toUpperCase(), f=void 0, p=void 0, g=u, v=t.length;
        g<v;
        g++){
          if(r.push(f=[
          ]), (e=(p=t[
            g
          ])[
            0
          ])!==e.toUpperCase())switch(f[
            0
          ]
          =e.toUpperCase(), f[
            0
          ]){
            case"A":f[
              1
            ]
            =p[
              1
            ], f[
              2
            ]
            =p[
              2
            ], f[
              3
            ]
            =p[
              3
            ], f[
              4
            ]
            =p[
              4
            ], f[
              5
            ]
            =p[
              5
            ], f[
              6
            ]
            =+p[
              6
            ]
            +i, f[
              7
            ]
            =+p[
              7
            ]
            +o;
            break;
            case"V":f[
              1
            ]
            =+p[
              1
            ]
            +o;
            break;
            case"H":f[
              1
            ]
            =+p[
              1
            ]
            +i;
            break;
            case"R":for(var y=2, m=(n=[
              i, o
            ].concat(p.slice(1))).length;
            y<m;
            y++)n[
              y
            ]
            =+n[
              y
            ]
            +i, n[
              ++y
            ]
            =+n[
              y
            ]
            +o;
            r.pop(), r=r.concat(d(n, l));
            break;
            case"O":r.pop(), (n=h(i, o, p[
              1
            ], p[
              2
            ])).push(n[
              0
            ]), r=r.concat(n);
            break;
            case"U":r.pop(), r=r.concat(h(i, o, p[
              1
            ], p[
              2
            ], p[
              3
            ])), f=[
              "U"
            ].concat(r[
              r.length-1
            ].slice(-2));
            break;
            case"M":a=+p[
              1
            ]
            +i, s=+p[
              2
            ]
            +o;
            break;
            default:for(y=1, m=p.length;
            y<m;
            y++)f[
              y
            ]
            =+p[
              y
            ]
            +(y%2?i:o)
          }
          else if("R"===e)n=[
            i, o
          ].concat(p.slice(1)), r.pop(), r=r.concat(d(n, l)), f=[
            "R"
          ].concat(p.slice(-2));
          else if("O"===e)r.pop(), (n=h(i, o, p[
            1
          ], p[
            2
          ])).push(n[
            0
          ]), r=r.concat(n);
          else if("U"===e)r.pop(), r=r.concat(h(i, o, p[
            1
          ], p[
            2
          ], p[
            3
          ])), f=[
            "U"
          ].concat(r[
            r.length-1
          ].slice(-2));
          else for(var b=0, x=p.length;
          b<x;
          b++)f[
            b
          ]
          =p[
            b
          ];
          if("O"!==(e=e.toUpperCase()))switch(f[
            0
          ]){
            case"Z":i=+a, o=+s;
            break;
            case"H":i=f[
              1
            ];
            break;
            case"V":o=f[
              1
            ];
            break;
            case"M":a=f[
              f.length-2
            ], s=f[
              f.length-1
            ];
            break;
            default:i=f[
              f.length-2
            ], o=f[
              f.length-1
            ]
          }
        }
        return r
      }, f=function(t, e, n, r){
        return[
          t, e, n, r, n, r
        ]
      }, p=function(t, e, n, r, i, o){
        var a=1/3, s=2/3;
        return[
          a*t+s*n, a*e+s*r, a*i+s*n, a*o+s*r, i, o
        ]
      }, g=function(t, e, n, r, i, o, a, s, u, c){
        n===r&&(n+=1);
        var d, h, l, f, p, v=120*Math.PI/180, y=Math.PI/180*(+i||0), m=[
        ], b=function(t, e, n){
          return{
            x:t*Math.cos(n)-e*Math.sin(n), y:t*Math.sin(n)+e*Math.cos(n)
          }
        };
        if(c)h=c[
          0
        ], l=c[
          1
        ], f=c[
          2
        ], p=c[
          3
        ];
        else{
          t=(d=b(t, e, -y)).x, e=d.y, s=(d=b(s, u, -y)).x, u=d.y, t===s&&e===u&&(s+=1, u+=1);
          var x=(t-s)/2, E=(e-u)/2, M=x*x/(n*n)+E*E/(r*r);
          M>1&&(n*=M=Math.sqrt(M), r*=M);
          var A=n*n, w=r*r, C=(o===a?-1:1)*Math.sqrt(Math.abs((A*w-A*E*E-w*x*x)/(A*E*E+w*x*x)));
          f=C*n*E/r+(t+s)/2, p=C*-r*x/n+(e+u)/2, h=Math.asin(((e-p)/r).toFixed(9)), l=Math.asin(((u-p)/r).toFixed(9)), h=t<f?Math.PI-h:h, l=s<f?Math.PI-l:l, h<0&&(h=2*Math.PI+h), l<0&&(l=2*Math.PI+l), a&&h>l&&(h-=2*Math.PI), !a&&l>h&&(l-=2*Math.PI)
        }
        var L=l-h;
        if(Math.abs(L)>v){
          var _=l, k=s, P=u;
          l=h+v*(a&&l>h?1:-1), s=f+n*Math.cos(l), u=p+r*Math.sin(l), m=g(s, u, n, r, i, 0, a, k, P, [
            l, _, f, p
          ])
        }
        L=l-h;
        var N=Math.cos(h), I=Math.sin(h), S=Math.cos(l), D=Math.sin(l), O=Math.tan(L/4), j=4/3*n*O, T=4/3*r*O, B=[
          t, e
        ], F=[
          t+j*I, e-T*N
        ], R=[
          s+j*D, u-T*S
        ], q=[
          s, u
        ];
        if(F[
          0
        ]
        =2*B[
          0
        ]
        -F[
          0
        ], F[
          1
        ]
        =2*B[
          1
        ]
        -F[
          1
        ], c)return[
          F, R, q
        ].concat(m);
        for(var X=[
        ], Y=0, G=(m=[
          F, R, q
        ].concat(m).join().split(",")).length;
        Y<G;
        Y++)X[
          Y
        ]
        =Y%2?b(m[
          Y-1
        ], m[
          Y
        ], y).y:b(m[
          Y
        ], m[
          Y+1
        ], y).x;
        return X
      }, v=function(t, e){
        var n, r=l(t), i=e&&l(e), o={
          x:0, y:0, bx:0, by:0, X:0, Y:0, qx:null, qy:null
        }, a={
          x:0, y:0, bx:0, by:0, X:0, Y:0, qx:null, qy:null
        }, s=[
        ], u=[
        ], c="", d="", h=function(t, e, n){
          var r, i;
          if(!t)return[
            "C", e.x, e.y, e.x, e.y, e.x, e.y
          ];
          switch(!(t[
            0
          ]
          in{
            T:1, Q:1
          })&&(e.qx=e.qy=null), t[
            0
          ]){
            case"M":e.X=t[
              1
            ], e.Y=t[
              2
            ];
            break;
            case"A":t=[
              "C"
            ].concat(g.apply(0, [
              e.x, e.y
            ].concat(t.slice(1))));
            break;
            case"S":"C"===n||"S"===n?(r=2*e.x-e.bx, i=2*e.y-e.by):(r=e.x, i=e.y), t=[
              "C", r, i
            ].concat(t.slice(1));
            break;
            case"T":"Q"===n||"T"===n?(e.qx=2*e.x-e.qx, e.qy=2*e.y-e.qy):(e.qx=e.x, e.qy=e.y), t=[
              "C"
            ].concat(p(e.x, e.y, e.qx, e.qy, t[
              1
            ], t[
              2
            ]));
            break;
            case"Q":e.qx=t[
              1
            ], e.qy=t[
              2
            ], t=[
              "C"
            ].concat(p(e.x, e.y, t[
              1
            ], t[
              2
            ], t[
              3
            ], t[
              4
            ]));
            break;
            case"L":t=[
              "C"
            ].concat(f(e.x, e.y, t[
              1
            ], t[
              2
            ]));
            break;
            case"H":t=[
              "C"
            ].concat(f(e.x, e.y, t[
              1
            ], e.y));
            break;
            case"V":t=[
              "C"
            ].concat(f(e.x, e.y, e.x, t[
              1
            ]));
            break;
            case"Z":t=[
              "C"
            ].concat(f(e.x, e.y, e.X, e.Y))
          }
          return t
        }, v=function(t, e){
          if(t[
            e
          ].length>7){
            t[
              e
            ].shift();
            for(var o=t[
              e
            ];
            o.length;
            )s[
              e
            ]
            ="A", i&&(u[
              e
            ]
            ="A"), t.splice(e++, 0, [
              "C"
            ].concat(o.splice(0, 6)));
            t.splice(e, 1), n=Math.max(r.length, i&&i.length||0)
          }
        }, y=function(t, e, o, a, s){
          t&&e&&"M"===t[
            s
          ]
          [
            0
          ]
          &&"M"!==e[
            s
          ]
          [
            0
          ]
          &&(e.splice(s, 0, [
            "M", a.x, a.y
          ]), o.bx=0, o.by=0, o.x=t[
            s
          ]
          [
            1
          ], o.y=t[
            s
          ]
          [
            2
          ], n=Math.max(r.length, i&&i.length||0))
        };
        n=Math.max(r.length, i&&i.length||0);
        for(var m=0;
        m<n;
        m++){
          r[
            m
          ]
          &&(c=r[
            m
          ]
          [
            0
          ]), "C"!==c&&(s[
            m
          ]
          =c, m&&(d=s[
            m-1
          ])), r[
            m
          ]
          =h(r[
            m
          ], o, d), "A"!==s[
            m
          ]
          &&"C"===c&&(s[
            m
          ]
          ="C"), v(r, m), i&&(i[
            m
          ]
          &&(c=i[
            m
          ]
          [
            0
          ]), "C"!==c&&(u[
            m
          ]
          =c, m&&(d=u[
            m-1
          ])), i[
            m
          ]
          =h(i[
            m
          ], a, d), "A"!==u[
            m
          ]
          &&"C"===c&&(u[
            m
          ]
          ="C"), v(i, m)), y(r, i, o, a, m), y(i, r, a, o, m);
          var b=r[
            m
          ], x=i&&i[
            m
          ], E=b.length, M=i&&x.length;
          o.x=b[
            E-2
          ], o.y=b[
            E-1
          ], o.bx=parseFloat(b[
            E-4
          ])||o.x, o.by=parseFloat(b[
            E-3
          ])||o.y, a.bx=i&&(parseFloat(x[
            M-4
          ])||a.x), a.by=i&&(parseFloat(x[
            M-3
          ])||a.y), a.x=i&&x[
            M-2
          ], a.y=i&&x[
            M-1
          ]
        }
        return i?[
          r, i
        ]
        :r
      }, y=/, ?([
        a-z
      ]), ?/gi, m=function(t){
        return t.join(",").replace(y, "$1")
      }, b=function(t, e, n, r, i){
        return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n
      }, x=function(t, e, n, r, i, o, a, s, u){
        null===u&&(u=1);
        for(var c=(u=u>1?1:u<0?0:u)/2, d=[
          -.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816
        ], h=[
          .2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472
        ], l=0, f=0;
        f<12;
        f++){
          var p=c*d[
            f
          ]
          +c, g=b(p, t, n, i, a), v=b(p, e, r, o, s), y=g*g+v*v;
          l+=h[
            f
          ]
          *Math.sqrt(y)
        }
        return c*l
      }, E=function(t, e, n, r, i, o, a, s){
        for(var u, c, d, h, l=[
        ], f=[
          [
          ], [
          ]
        ], p=0;
        p<2;
        ++p)if(0===p?(c=6*t-12*n+6*i, u=-3*t+9*n-9*i+3*a, d=3*n-3*t):(c=6*e-12*r+6*o, u=-3*e+9*r-9*o+3*s, d=3*r-3*e), Math.abs(u)<1e-12){
          if(Math.abs(c)<1e-12)continue;
          (h=-d/c)>0&&h<1&&l.push(h)
        }
        else{
          var g=c*c-4*d*u, v=Math.sqrt(g);
          if(!(g<0)){
            var y=(-c+v)/(2*u);
            y>0&&y<1&&l.push(y);
            var m=(-c-v)/(2*u);
            m>0&&m<1&&l.push(m)
          }
        }
        for(var b, x=l.length, E=x;
        x--;
        )b=1-(h=l[
          x
        ]), f[
          0
        ]
        [
          x
        ]
        =b*b*b*t+3*b*b*h*n+3*b*h*h*i+h*h*h*a, f[
          1
        ]
        [
          x
        ]
        =b*b*b*e+3*b*b*h*r+3*b*h*h*o+h*h*h*s;
        return f[
          0
        ]
        [
          E
        ]
        =t, f[
          1
        ]
        [
          E
        ]
        =e, f[
          0
        ]
        [
          E+1
        ]
        =a, f[
          1
        ]
        [
          E+1
        ]
        =s, f[
          0
        ].length=f[
          1
        ].length=E+2, {
          min:{
            x:Math.min.apply(0, f[
              0
            ]), y:Math.min.apply(0, f[
              1
            ])
          }, max:{
            x:Math.max.apply(0, f[
              0
            ]), y:Math.max.apply(0, f[
              1
            ])
          }
        }
      }, M=function(t, e, n, r, i, o, a, s){
        if(!(Math.max(t, n)<Math.min(i, a)||Math.min(t, n)>Math.max(i, a)||Math.max(e, r)<Math.min(o, s)||Math.min(e, r)>Math.max(o, s))){
          var u=(t-n)*(o-s)-(e-r)*(i-a);
          if(u){
            var c=((t*r-e*n)*(i-a)-(t-n)*(i*s-o*a))/u, d=((t*r-e*n)*(o-s)-(e-r)*(i*s-o*a))/u, h=+c.toFixed(2), l=+d.toFixed(2);
            if(!(h<+Math.min(t, n).toFixed(2)||h>+Math.max(t, n).toFixed(2)||h<+Math.min(i, a).toFixed(2)||h>+Math.max(i, a).toFixed(2)||l<+Math.min(e, r).toFixed(2)||l>+Math.max(e, r).toFixed(2)||l<+Math.min(o, s).toFixed(2)||l>+Math.max(o, s).toFixed(2)))return{
              x:c, y:d
            }
          }
        }
      }, A=function(t, e, n){
        return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height
      }, w=function(t, e, n, r, i){
        if(i)return[
          [
            "M", +t+ +i, e
          ], [
            "l", n-2*i, 0
          ], [
            "a", i, i, 0, 0, 1, i, i
          ], [
            "l", 0, r-2*i
          ], [
            "a", i, i, 0, 0, 1, -i, i
          ], [
            "l", 2*i-n, 0
          ], [
            "a", i, i, 0, 0, 1, -i, -i
          ], [
            "l", 0, 2*i-r
          ], [
            "a", i, i, 0, 0, 1, i, -i
          ], [
            "z"
          ]
        ];
        var o=[
          [
            "M", t, e
          ], [
            "l", n, 0
          ], [
            "l", 0, r
          ], [
            "l", -n, 0
          ], [
            "z"
          ]
        ];
        return o.parsePathArray=m, o
      }, C=function(t, e, n, r){
        return null===t&&(t=e=n=r=0), null===e&&(e=t.y, n=t.width, r=t.height, t=t.x), {
          x:t, y:e, width:n, w:n, height:r, h:r, x2:t+n, y2:e+r, cx:t+n/2, cy:e+r/2, r1:Math.min(n, r)/2, r2:Math.max(n, r)/2, r0:Math.sqrt(n*n+r*r)/2, path:w(t, e, n, r), vb:[
            t, e, n, r
          ].join(" ")
        }
      }, L=function(t, e, n, r, i, a, s, u){
        (0, o.isArray)(t)||(t=[
          t, e, n, r, i, a, s, u
        ]);
        var c=E.apply(null, t);
        return C(c.min.x, c.min.y, c.max.x-c.min.x, c.max.y-c.min.y)
      }, _=function(t, e, n, r, i, o, a, s, u){
        var c=1-u, d=Math.pow(c, 3), h=Math.pow(c, 2), l=u*u, f=l*u, p=t+2*u*(n-t)+l*(i-2*n+t), g=e+2*u*(r-e)+l*(o-2*r+e), v=n+2*u*(i-n)+l*(a-2*i+n), y=r+2*u*(o-r)+l*(s-2*o+r);
        return{
          x:d*t+3*h*u*n+3*c*u*u*i+f*a, y:d*e+3*h*u*r+3*c*u*u*o+f*s, m:{
            x:p, y:g
          }, n:{
            x:v, y
          }, start:{
            x:c*t+u*n, y:c*e+u*r
          }, end:{
            x:c*i+u*a, y:c*o+u*s
          }, alpha:90-180*Math.atan2(p-v, g-y)/Math.PI
        }
      }, k=function(t, e, n){
        if(!function(t, e){
          return t=C(t), e=C(e), A(e, t.x, t.y)||A(e, t.x2, t.y)||A(e, t.x, t.y2)||A(e, t.x2, t.y2)||A(t, e.x, e.y)||A(t, e.x2, e.y)||A(t, e.x, e.y2)||A(t, e.x2, e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)
        }
        (L(t), L(e)))return n?0:[
        ];
        for(var r=~~(x.apply(0, t)/8), i=~~(x.apply(0, e)/8), o=[
        ], a=[
        ], s={
        }, u=n?0:[
        ], c=0;
        c<r+1;
        c++){
          var d=_.apply(0, t.concat(c/r));
          o.push({
            x:d.x, y:d.y, t:c/r
          })
        }
        for(c=0;
        c<i+1;
        c++){
          d=_.apply(0, e.concat(c/i));
          a.push({
            x:d.x, y:d.y, t:c/i
          })
        }
        for(c=0;
        c<r;
        c++)for(var h=0;
        h<i;
        h++){
          var l=o[
            c
          ], f=o[
            c+1
          ], p=a[
            h
          ], g=a[
            h+1
          ], v=Math.abs(f.x-l.x)<.001?"y":"x", y=Math.abs(g.x-p.x)<.001?"y":"x", m=M(l.x, l.y, f.x, f.y, p.x, p.y, g.x, g.y);
          if(m){
            if(s[
              m.x.toFixed(4)
            ]
            ===m.y.toFixed(4))continue;
            s[
              m.x.toFixed(4)
            ]
            =m.y.toFixed(4);
            var b=l.t+Math.abs((m[
              v
            ]
            -l[
              v
            ])/(f[
              v
            ]
            -l[
              v
            ]))*(f.t-l.t), E=p.t+Math.abs((m[
              y
            ]
            -p[
              y
            ])/(g[
              y
            ]
            -p[
              y
            ]))*(g.t-p.t);
            b>=0&&b<=1&&E>=0&&E<=1&&(n?u+=1:u.push({
              x:m.x, y:m.y, t1:b, t2:E
            }))
          }
        }
        return u
      }, P=function(t, e){
        return function(t, e, n){
          var r, i, o, a, s, u, c, d, h, l;
          t=v(t), e=v(e);
          for(var f=n?0:[
          ], p=0, g=t.length;
          p<g;
          p++){
            var y=t[
              p
            ];
            if("M"===y[
              0
            ])r=s=y[
              1
            ], i=u=y[
              2
            ];
            else{
              "C"===y[
                0
              ]
              ?(h=[
                r, i
              ].concat(y.slice(1)), r=h[
                6
              ], i=h[
                7
              ]):(h=[
                r, i, r, i, s, u, s, u
              ], r=s, i=u);
              for(var m=0, b=e.length;
              m<b;
              m++){
                var x=e[
                  m
                ];
                if("M"===x[
                  0
                ])o=c=x[
                  1
                ], a=d=x[
                  2
                ];
                else{
                  "C"===x[
                    0
                  ]
                  ?(l=[
                    o, a
                  ].concat(x.slice(1)), o=l[
                    6
                  ], a=l[
                    7
                  ]):(l=[
                    o, a, o, a, c, d, c, d
                  ], o=c, a=d);
                  var E=k(h, l, n);
                  if(n)f+=E;
                  else{
                    for(var M=0, A=E.length;
                    M<A;
                    M++)E[
                      M
                    ].segment1=p, E[
                      M
                    ].segment2=m, E[
                      M
                    ].bez1=h, E[
                      M
                    ].bez2=l;
                    f=f.concat(E)
                  }
                }
              }
            }
          }
          return f
        }
        (t, e)
      };
      function N(t, e){
        var n=[
        ], r=[
        ];
        return t.length&&function t(e, i){
          if(1===e.length)n.push(e[
            0
          ]), r.push(e[
            0
          ]);
          else{
            for(var o=[
            ], a=0;
            a<e.length-1;
            a++)0===a&&n.push(e[
              0
            ]), a===e.length-2&&r.push(e[
              a+1
            ]), o[
              a
            ]
            =[
              (1-i)*e[
                a
              ]
              [
                0
              ]
              +i*e[
                a+1
              ]
              [
                0
              ], (1-i)*e[
                a
              ]
              [
                1
              ]
              +i*e[
                a+1
              ]
              [
                1
              ]
            ];
            t(o, i)
          }
        }
        (t, e), {
          left:n, right:r.reverse()
        }
      }
      var I=function(t, e, n){
        if(1===n)return[
          [
          ].concat(t)
        ];
        var r=[
        ];
        if("L"===e[
          0
        ]
        ||"C"===e[
          0
        ]
        ||"Q"===e[
          0
        ])r=r.concat(function(t, e, n){
          var r=[
            [
              t[
                1
              ], t[
                2
              ]
            ]
          ];
          n=n||2;
          var i=[
          ];
          "A"===e[
            0
          ]
          ?(r.push(e[
            6
          ]), r.push(e[
            7
          ])):"C"===e[
            0
          ]
          ?(r.push([
            e[
              1
            ], e[
              2
            ]
          ]), r.push([
            e[
              3
            ], e[
              4
            ]
          ]), r.push([
            e[
              5
            ], e[
              6
            ]
          ])):"S"===e[
            0
          ]
          ||"Q"===e[
            0
          ]
          ?(r.push([
            e[
              1
            ], e[
              2
            ]
          ]), r.push([
            e[
              3
            ], e[
              4
            ]
          ])):r.push([
            e[
              1
            ], e[
              2
            ]
          ]);
          for(var o=r, a=1/n, s=0;
          s<n-1;
          s++){
            var u=N(o, a/(1-a*s));
            i.push(u.left), o=u.right
          }
          return i.push(o), i.map((function(t){
            var e=[
            ];
            return 4===t.length&&(e.push("C"), e=e.concat(t[
              2
            ])), t.length>=3&&(3===t.length&&e.push("Q"), e=e.concat(t[
              1
            ])), 2===t.length&&e.push("L"), e.concat(t[
              t.length-1
            ])
          }))
        }
        (t, e, n));
        else{
          var i=[
          ].concat(t);
          "M"===i[
            0
          ]
          &&(i[
            0
          ]
          ="L");
          for(var o=0;
          o<=n-1;
          o++)r.push(i)
        }
        return r
      }, S=function(t, e){
        if(1===t.length)return t;
        var n=t.length-1, r=e.length-1, i=n/r, o=[
        ];
        if(1===t.length&&"M"===t[
          0
        ]
        [
          0
        ]){
          for(var a=0;
          a<r-n;
          a++)t.push(t[
            0
          ]);
          return t
        }
        for(a=0;
        a<r;
        a++){
          var s=Math.floor(i*a);
          o[
            s
          ]
          =(o[
            s
          ]
          ||0)+1
        }
        var u=o.reduce((function(e, r, i){
          return i===n?e.concat(t[
            n
          ]):e.concat(I(t[
            i
          ], t[
            i+1
          ], r))
        }), [
        ]);
        return u.unshift(t[
          0
        ]), "Z"!==e[
          r
        ]
        &&"z"!==e[
          r
        ]
        ||u.push("Z"), u
      }, D=function(t, e){
        if(t.length!==e.length)return!1;
        var n=!0;
        return(0, o.each)(t, (function(t, r){
          if(t!==e[
            r
          ])return n=!1, !1
        })), n
      };
      function O(t, e, n){
        var r=null, i=n;
        return e<i&&(i=e, r="add"), t<i&&(i=t, r="del"), {
          type:r, min:i
        }
      }
      var j=function(t, e){
        var n=function(t, e){
          var n, r, i=t.length, o=e.length, a=0;
          if(0===i||0===o)return null;
          for(var s=[
          ], u=0;
          u<=i;
          u++)s[
            u
          ]
          =[
          ], s[
            u
          ]
          [
            0
          ]
          ={
            min:u
          };
          for(var c=0;
          c<=o;
          c++)s[
            0
          ]
          [
            c
          ]
          ={
            min:c
          };
          for(u=1;
          u<=i;
          u++)for(n=t[
            u-1
          ], c=1;
          c<=o;
          c++){
            r=e[
              c-1
            ], a=D(n, r)?0:1;
            var d=s[
              u-1
            ]
            [
              c
            ].min+1, h=s[
              u
            ]
            [
              c-1
            ].min+1, l=s[
              u-1
            ]
            [
              c-1
            ].min+a;
            s[
              u
            ]
            [
              c
            ]
            =O(d, h, l)
          }
          return s
        }
        (t, e), r=t.length, i=e.length, o=[
        ], a=1, s=1;
        if(n[
          r
        ]
        [
          i
        ].min!==r){
          for(var u=1;
          u<=r;
          u++){
            var c=n[
              u
            ]
            [
              u
            ].min;
            s=u;
            for(var d=a;
            d<=i;
            d++)n[
              u
            ]
            [
              d
            ].min<c&&(c=n[
              u
            ]
            [
              d
            ].min, s=d);
            a=s, n[
              u
            ]
            [
              a
            ].type&&o.push({
              index:u-1, type:n[
                u
              ]
              [
                a
              ].type
            })
          }
          for(u=o.length-1;
          u>=0;
          u--)a=o[
            u
          ].index, "add"===o[
            u
          ].type?t.splice(a, 0, [
          ].concat(t[
            a
          ])):t.splice(a, 1)
        }
        var h=i-(r=t.length);
        if(r<i)for(u=0;
        u<h;
        u++)"z"===t[
          r-1
        ]
        [
          0
        ]
        ||"Z"===t[
          r-1
        ]
        [
          0
        ]
        ?t.splice(r-2, 0, t[
          r-2
        ]):t.push(t[
          r-1
        ]), r+=1;
        return t
      };
      function T(t, e, n){
        for(var r, i=[
        ].concat(t), o=1/(n+1), a=B(e)[
          0
        ], s=1;
        s<=n;
        s++)o*=s, 0===(r=Math.floor(t.length*o))?i.unshift([
          a[
            0
          ]
          *o+t[
            r
          ]
          [
            0
          ]
          *(1-o), a[
            1
          ]
          *o+t[
            r
          ]
          [
            1
          ]
          *(1-o)
        ]):i.splice(r, 0, [
          a[
            0
          ]
          *o+t[
            r
          ]
          [
            0
          ]
          *(1-o), a[
            1
          ]
          *o+t[
            r
          ]
          [
            1
          ]
          *(1-o)
        ]);
        return i
      }
      function B(t){
        var e=[
        ];
        switch(t[
          0
        ]){
          case"M":case"L":e.push([
            t[
              1
            ], t[
              2
            ]
          ]);
          break;
          case"A":e.push([
            t[
              6
            ], t[
              7
            ]
          ]);
          break;
          case"Q":e.push([
            t[
              3
            ], t[
              4
            ]
          ]), e.push([
            t[
              1
            ], t[
              2
            ]
          ]);
          break;
          case"T":e.push([
            t[
              1
            ], t[
              2
            ]
          ]);
          break;
          case"C":e.push([
            t[
              5
            ], t[
              6
            ]
          ]), e.push([
            t[
              1
            ], t[
              2
            ]
          ]), e.push([
            t[
              3
            ], t[
              4
            ]
          ]);
          break;
          case"S":e.push([
            t[
              3
            ], t[
              4
            ]
          ]), e.push([
            t[
              1
            ], t[
              2
            ]
          ]);
          break;
          case"H":case"V":e.push([
            t[
              1
            ], t[
              1
            ]
          ])
        }
        return e
      }
      var F=function(t, e){
        if(t.length<=1)return t;
        for(var n, r=0;
        r<e.length;
        r++)if(t[
          r
        ]
        [
          0
        ]
        !==e[
          r
        ]
        [
          0
        ])switch(n=B(t[
          r
        ]), e[
          r
        ]
        [
          0
        ]){
          case"M":t[
            r
          ]
          =[
            "M"
          ].concat(n[
            0
          ]);
          break;
          case"L":t[
            r
          ]
          =[
            "L"
          ].concat(n[
            0
          ]);
          break;
          case"A":t[
            r
          ]
          =[
          ].concat(e[
            r
          ]), t[
            r
          ]
          [
            6
          ]
          =n[
            0
          ]
          [
            0
          ], t[
            r
          ]
          [
            7
          ]
          =n[
            0
          ]
          [
            1
          ];
          break;
          case"Q":if(n.length<2){
            if(!(r>0)){
              t[
                r
              ]
              =e[
                r
              ];
              break
            }
            n=T(n, t[
              r-1
            ], 1)
          }
          t[
            r
          ]
          =[
            "Q"
          ].concat(n.reduce((function(t, e){
            return t.concat(e)
          }), [
          ]));
          break;
          case"T":t[
            r
          ]
          =[
            "T"
          ].concat(n[
            0
          ]);
          break;
          case"C":if(n.length<3){
            if(!(r>0)){
              t[
                r
              ]
              =e[
                r
              ];
              break
            }
            n=T(n, t[
              r-1
            ], 2)
          }
          t[
            r
          ]
          =[
            "C"
          ].concat(n.reduce((function(t, e){
            return t.concat(e)
          }), [
          ]));
          break;
          case"S":if(n.length<2){
            if(!(r>0)){
              t[
                r
              ]
              =e[
                r
              ];
              break
            }
            n=T(n, t[
              r-1
            ], 1)
          }
          t[
            r
          ]
          =[
            "S"
          ].concat(n.reduce((function(t, e){
            return t.concat(e)
          }), [
          ]));
          break;
          default:t[
            r
          ]
          =e[
            r
          ]
        }
        return t
      };
      const R=function(){
        function t(t, e){
          this.bubbles=!0, this.target=null, this.currentTarget=null, this.delegateTarget=null, this.delegateObject=null, this.defaultPrevented=!1, this.propagationStopped=!1, this.shape=null, this.fromShape=null, this.toShape=null, this.propagationPath=[
          ], this.type=t, this.name=t, this.originalEvent=e, this.timeStamp=e.timeStamp
        }
        return t.prototype.preventDefault=function(){
          this.defaultPrevented=!0, this.originalEvent.preventDefault&&this.originalEvent.preventDefault()
        }, t.prototype.stopPropagation=function(){
          this.propagationStopped=!0
        }, t.prototype.toString=function(){
          return"[Event (type="+this.type+")]"
        }, t.prototype.save=function(){
        }, t.prototype.restore=function(){
        }, t
      }
      ();
      var q=n(331635), X=n(313302);
      function Y(t, e){
        var n=t.indexOf(e);
        -1!==n&&t.splice(n, 1)
      }
      var G="undefined"!=typeof window&&void 0!==window.document;
      function H(t, e){
        if(t.isCanvas())return!0;
        for(var n=e.getParent(), r=!1;
        n;
        ){
          if(n===t){
            r=!0;
            break
          }
          n=n.getParent()
        }
        return r
      }
      function U(t){
        return t.cfg.visible&&t.cfg.capture
      }
      const V=function(t){
        function e(e){
          var n=t.call(this)||this;
          n.destroyed=!1;
          var r=n.getDefaultCfg();
          return n.cfg=(0, o.mix)(r, e), n
        }
        return(0, q.__extends)(e, t), e.prototype.getDefaultCfg=function(){
          return{
          }
        }, e.prototype.get=function(t){
          return this.cfg[
            t
          ]
        }, e.prototype.set=function(t, e){
          this.cfg[
            t
          ]
          =e
        }, e.prototype.destroy=function(){
          this.cfg={
            destroyed:!0
          }, this.off(), this.destroyed=!0
        }, e
      }
      (X.A);
      var z=n(248468);
      function W(t, e){
        var n=[
        ], r=t[
          0
        ], i=t[
          1
        ], o=t[
          2
        ], a=t[
          3
        ], s=t[
          4
        ], u=t[
          5
        ], c=t[
          6
        ], d=t[
          7
        ], h=t[
          8
        ], l=e[
          0
        ], f=e[
          1
        ], p=e[
          2
        ], g=e[
          3
        ], v=e[
          4
        ], y=e[
          5
        ], m=e[
          6
        ], b=e[
          7
        ], x=e[
          8
        ];
        return n[
          0
        ]
        =l*r+f*a+p*c, n[
          1
        ]
        =l*i+f*s+p*d, n[
          2
        ]
        =l*o+f*u+p*h, n[
          3
        ]
        =g*r+v*a+y*c, n[
          4
        ]
        =g*i+v*s+y*d, n[
          5
        ]
        =g*o+v*u+y*h, n[
          6
        ]
        =m*r+b*a+x*c, n[
          7
        ]
        =m*i+b*s+x*d, n[
          8
        ]
        =m*o+b*u+x*h, n
      }
      function Z(t, e){
        var n=[
        ], r=e[
          0
        ], i=e[
          1
        ];
        return n[
          0
        ]
        =t[
          0
        ]
        *r+t[
          3
        ]
        *i+t[
          6
        ], n[
          1
        ]
        =t[
          1
        ]
        *r+t[
          4
        ]
        *i+t[
          7
        ], n
      }
      function Q(t){
        var e=[
        ], n=t[
          0
        ], r=t[
          1
        ], i=t[
          2
        ], o=t[
          3
        ], a=t[
          4
        ], s=t[
          5
        ], u=t[
          6
        ], c=t[
          7
        ], d=t[
          8
        ], h=d*a-s*c, l=-d*o+s*u, f=c*o-a*u, p=n*h+r*l+i*f;
        return p?(p=1/p, e[
          0
        ]
        =h*p, e[
          1
        ]
        =(-d*r+i*c)*p, e[
          2
        ]
        =(s*r-i*a)*p, e[
          3
        ]
        =l*p, e[
          4
        ]
        =(d*n-i*u)*p, e[
          5
        ]
        =(-s*n+i*o)*p, e[
          6
        ]
        =f*p, e[
          7
        ]
        =(-c*n+r*u)*p, e[
          8
        ]
        =(a*n-r*o)*p, e):null
      }
      var $=n(883278).pd, K="matrix", J=[
        "zIndex", "capture", "visible", "type"
      ], tt=[
        "repeat"
      ];
      function et(t, e){
        var n={
        }, r=e.attrs;
        for(var i in t)n[
          i
        ]
        =r[
          i
        ];
        return n
      }
      function nt(t, e){
        var n={
        }, r=e.attr();
        return(0, o.each)(t, (function(t, e){
          -1!==tt.indexOf(e)||(0, o.isEqual)(r[
            e
          ], t)||(n[
            e
          ]
          =t)
        })), n
      }
      function rt(t, e){
        if(e.onFrame)return t;
        var n=e.startTime, r=e.delay, i=e.duration, a=Object.prototype.hasOwnProperty;
        return(0, o.each)(t, (function(t){
          n+r<t.startTime+t.delay+t.duration&&i>t.delay&&(0, o.each)(e.toAttrs, (function(e, n){
            a.call(t.toAttrs, n)&&(delete t.toAttrs[
              n
            ], delete t.fromAttrs[
              n
            ])
          }))
        })), t
      }
      const it=function(t){
        function e(e){
          var n=t.call(this, e)||this;
          n.attrs={
          };
          var r=n.getDefaultAttrs();
          return(0, o.mix)(r, e.attrs), n.attrs=r, n.initAttrs(r), n.initAnimate(), n
        }
        return(0, q.__extends)(e, t), e.prototype.getDefaultCfg=function(){
          return{
            visible:!0, capture:!0, zIndex:0
          }
        }, e.prototype.getDefaultAttrs=function(){
          return{
            matrix:this.getDefaultMatrix(), opacity:1
          }
        }, e.prototype.onCanvasChange=function(t){
        }, e.prototype.initAttrs=function(t){
        }, e.prototype.initAnimate=function(){
          this.set("animable", !0), this.set("animating", !1)
        }, e.prototype.isGroup=function(){
          return!1
        }, e.prototype.getParent=function(){
          return this.get("parent")
        }, e.prototype.getCanvas=function(){
          return this.get("canvas")
        }, e.prototype.attr=function(){
          for(var t, e=[
          ], n=0;
          n<arguments.length;
          n++)e[
            n
          ]
          =arguments[
            n
          ];
          var r=e[
            0
          ], i=e[
            1
          ];
          if(!r)return this.attrs;
          if((0, o.isObject)(r)){
            for(var a in r)this.setAttr(a, r[
              a
            ]);
            return this.afterAttrsChange(r), this
          }
          return 2===e.length?(this.setAttr(r, i), this.afterAttrsChange(((t={
          })[
            r
          ]
          =i, t)), this):this.attrs[
            r
          ]
        }, e.prototype.isClipped=function(t, e){
          var n=this.getClip();
          return n&&!n.isHit(t, e)
        }, e.prototype.setAttr=function(t, e){
          var n=this.attrs[
            t
          ];
          n!==e&&(this.attrs[
            t
          ]
          =e, this.onAttrChange(t, e, n))
        }, e.prototype.onAttrChange=function(t, e, n){
          "matrix"===t&&this.set("totalMatrix", null)
        }, e.prototype.afterAttrsChange=function(t){
          if(this.cfg.isClipShape){
            var e=this.cfg.applyTo;
            e&&e.onCanvasChange("clip")
          }
          else this.onCanvasChange("attr")
        }, e.prototype.show=function(){
          return this.set("visible", !0), this.onCanvasChange("show"), this
        }, e.prototype.hide=function(){
          return this.set("visible", !1), this.onCanvasChange("hide"), this
        }, e.prototype.setZIndex=function(t){
          this.set("zIndex", t);
          var e=this.getParent();
          return e&&e.sort(), this
        }, e.prototype.toFront=function(){
          var t=this.getParent();
          if(t){
            var e=t.getChildren(), n=(this.get("el"), e.indexOf(this));
            e.splice(n, 1), e.push(this), this.onCanvasChange("zIndex")
          }
        }, e.prototype.toBack=function(){
          var t=this.getParent();
          if(t){
            var e=t.getChildren(), n=(this.get("el"), e.indexOf(this));
            e.splice(n, 1), e.unshift(this), this.onCanvasChange("zIndex")
          }
        }, e.prototype.remove=function(t){
          void 0===t&&(t=!0);
          var e=this.getParent();
          e?(Y(e.getChildren(), this), e.get("clearing")||this.onCanvasChange("remove")):this.onCanvasChange("remove"), t&&this.destroy()
        }, e.prototype.resetMatrix=function(){
          this.attr(K, this.getDefaultMatrix()), this.onCanvasChange("matrix")
        }, e.prototype.getMatrix=function(){
          return this.attr(K)
        }, e.prototype.setMatrix=function(t){
          this.attr(K, t), this.onCanvasChange("matrix")
        }, e.prototype.getTotalMatrix=function(){
          var t=this.cfg.totalMatrix;
          if(!t){
            var e=this.attr("matrix"), n=this.cfg.parentMatrix;
            t=n&&e?W(n, e):e||n, this.set("totalMatrix", t)
          }
          return t
        }, e.prototype.applyMatrix=function(t){
          var e=this.attr("matrix"), n=null;
          n=t&&e?W(t, e):e||t, this.set("totalMatrix", n), this.set("parentMatrix", t)
        }, e.prototype.getDefaultMatrix=function(){
          return null
        }, e.prototype.applyToMatrix=function(t){
          var e=this.attr("matrix");
          return e?Z(e, t):t
        }, e.prototype.invertFromMatrix=function(t){
          var e=this.attr("matrix");
          if(e){
            var n=Q(e);
            if(n)return Z(n, t)
          }
          return t
        }, e.prototype.setClip=function(t){
          var e=this.getCanvas(), n=null;
          if(t){
            var r=this.getShapeBase()[
              (0, o.upperFirst)(t.type)
            ];
            r&&(n=new r({
              type:t.type, isClipShape:!0, applyTo:this, attrs:t.attrs, canvas:e
            }))
          }
          return this.set("clipShape", n), this.onCanvasChange("clip"), n
        }, e.prototype.getClip=function(){
          var t=this.cfg.clipShape;
          return t||null
        }, e.prototype.clone=function(){
          var t=this, e=this.attrs, n={
          };
          (0, o.each)(e, (function(t, r){
            (0, o.isArray)(e[
              r
            ])?n[
              r
            ]
            =function(t){
              for(var e=[
              ], n=0;
              n<t.length;
              n++)(0, o.isArray)(t[
                n
              ])?e.push([
              ].concat(t[
                n
              ])):e.push(t[
                n
              ]);
              return e
            }
            (e[
              r
            ]):n[
              r
            ]
            =e[
              r
            ]
          }));
          var r=new(0, this.constructor)({
            attrs:n
          });
          return(0, o.each)(J, (function(e){
            r.set(e, t.get(e))
          })), r
        }, e.prototype.destroy=function(){
          this.destroyed||(this.attrs={
          }, t.prototype.destroy.call(this))
        }, e.prototype.isAnimatePaused=function(){
          return this.get("_pause").isPaused
        }, e.prototype.animate=function(){
          for(var t=[
          ], e=0;
          e<arguments.length;
          e++)t[
            e
          ]
          =arguments[
            e
          ];
          if(this.get("timeline")||this.get("canvas")){
            this.set("animating", !0);
            var n=this.get("timeline");
            n||(n=this.get("canvas").get("timeline"), this.set("timeline", n));
            var r=this.get("animations")||[
            ];
            n.timer||n.initTimer();
            var i, a, s, u, c, d=t[
              0
            ], h=t[
              1
            ], l=t[
              2
            ], f=void 0===l?"easeLinear":l, p=t[
              3
            ], g=void 0===p?o.noop:p, v=t[
              4
            ], y=void 0===v?0:v;
            (0, o.isFunction)(d)?(i=d, d={
            }):(0, o.isObject)(d)&&d.onFrame&&(i=d.onFrame, a=d.repeat), (0, o.isObject)(h)?(h=(c=h).duration, f=c.easing||"easeLinear", y=c.delay||0, a=c.repeat||a||!1, g=c.callback||o.noop, s=c.pauseCallback||o.noop, u=c.resumeCallback||o.noop):((0, o.isNumber)(g)&&(y=g, g=null), (0, o.isFunction)(f)?(g=f, f="easeLinear"):f=f||"easeLinear");
            var m=nt(d, this), b={
              fromAttrs:et(m, this), toAttrs:m, duration:h, easing:f, repeat:a, callback:g, pauseCallback:s, resumeCallback:u, delay:y, startTime:n.getTime(), id:(0, o.uniqueId)(), onFrame:i, pathFormatted:!1
            };
            r.length>0?r=rt(r, b):n.addAnimator(this), r.push(b), this.set("animations", r), this.set("_pause", {
              isPaused:!1
            })
          }
        }, e.prototype.stopAnimate=function(t){
          var e=this;
          void 0===t&&(t=!0);
          var n=this.get("animations");
          (0, o.each)(n, (function(n){
            t&&(n.onFrame?e.attr(n.onFrame(1)):e.attr(n.toAttrs)), n.callback&&n.callback()
          })), this.set("animating", !1), this.set("animations", [
          ])
        }, e.prototype.pauseAnimate=function(){
          var t=this.get("timeline"), e=this.get("animations"), n=t.getTime();
          return(0, o.each)(e, (function(t){
            t._paused=!0, t._pauseTime=n, t.pauseCallback&&t.pauseCallback()
          })), this.set("_pause", {
            isPaused:!0, pauseTime:n
          }), this
        }, e.prototype.resumeAnimate=function(){
          var t=this.get("timeline").getTime(), e=this.get("animations"), n=this.get("_pause").pauseTime;
          return(0, o.each)(e, (function(e){
            e.startTime=e.startTime+(t-n), e._paused=!1, e._pauseTime=null, e.resumeCallback&&e.resumeCallback()
          })), this.set("_pause", {
            isPaused:!1
          }), this.set("animations", e), this
        }, e.prototype.emitDelegation=function(t, e){
          var n, r=this, i=e.propagationPath;
          this.getEvents();
          "mouseenter"===t?n=e.fromShape:"mouseleave"===t&&(n=e.toShape);
          for(var a=function(t){
            var a=i[
              t
            ], u=a.get("name");
            if(u){
              if((a.isGroup()||a.isCanvas&&a.isCanvas())&&n&&H(a, n))return"break";
              (0, o.isArray)(u)?(0, o.each)(u, (function(t){
                r.emitDelegateEvent(a, t, e)
              })):s.emitDelegateEvent(a, u, e)
            }
          }, s=this, u=0;
          u<i.length;
          u++){
            if("break"===a(u))break
          }
        }, e.prototype.emitDelegateEvent=function(t, e, n){
          var r=this.getEvents(), i=e+":"+n.type;
          (r[
            i
          ]
          ||r[
            "*"
          ])&&(n.name=i, n.currentTarget=t, n.delegateTarget=this, n.delegateObject=t.get("delegateObject"), this.emit(i, n))
        }, e.prototype.translate=function(t, e){
          void 0===t&&(t=0), void 0===e&&(e=0);
          var n=this.getMatrix(), r=$(n, [
            [
              "t", t, e
            ]
          ]);
          return this.setMatrix(r), this
        }, e.prototype.move=function(t, e){
          var n=this.attr("x")||0, r=this.attr("y")||0;
          return this.translate(t-n, e-r), this
        }, e.prototype.moveTo=function(t, e){
          return this.move(t, e)
        }, e.prototype.scale=function(t, e){
          var n=this.getMatrix(), r=$(n, [
            [
              "s", t, e||t
            ]
          ]);
          return this.setMatrix(r), this
        }, e.prototype.rotate=function(t){
          var e=this.getMatrix(), n=$(e, [
            [
              "r", t
            ]
          ]);
          return this.setMatrix(n), this
        }, e.prototype.rotateAtStart=function(t){
          var e=this.attr(), n=e.x, r=e.y, i=this.getMatrix(), o=$(i, [
            [
              "t", -n, -r
            ], [
              "r", t
            ], [
              "t", n, r
            ]
          ]);
          return this.setMatrix(o), this
        }, e.prototype.rotateAtPoint=function(t, e, n){
          var r=this.getMatrix(), i=$(r, [
            [
              "t", -t, -e
            ], [
              "r", n
            ], [
              "t", t, e
            ]
          ]);
          return this.setMatrix(i), this
        }, e
      }
      (V);
      var ot={
      };
      function at(t, e){
        if(t.set("canvas", e), t.isGroup()){
          var n=t.get("children");
          n.length&&n.forEach((function(t){
            at(t, e)
          }))
        }
      }
      function st(t, e){
        if(t.set("timeline", e), t.isGroup()){
          var n=t.get("children");
          n.length&&n.forEach((function(t){
            st(t, e)
          }))
        }
      }
      const ut=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, q.__extends)(e, t), e.prototype.isCanvas=function(){
          return!1
        }, e.prototype.getBBox=function(){
          var t=1/0, e=-1/0, n=1/0, r=-1/0, i=this.getChildren().filter((function(t){
            return t.get("visible")&&(!t.isGroup()||t.isGroup()&&t.getChildren().length>0)
          }));
          return i.length>0?(0, o.each)(i, (function(i){
            var o=i.getBBox(), a=o.minX, s=o.maxX, u=o.minY, c=o.maxY;
            a<t&&(t=a), s>e&&(e=s), u<n&&(n=u), c>r&&(r=c)
          })):(t=0, e=0, n=0, r=0), {
            x:t, y:n, minX:t, minY:n, maxX:e, maxY:r, width:e-t, height:r-n
          }
        }, e.prototype.getCanvasBBox=function(){
          var t=1/0, e=-1/0, n=1/0, r=-1/0, i=this.getChildren().filter((function(t){
            return t.get("visible")&&(!t.isGroup()||t.isGroup()&&t.getChildren().length>0)
          }));
          return i.length>0?(0, o.each)(i, (function(i){
            var o=i.getCanvasBBox(), a=o.minX, s=o.maxX, u=o.minY, c=o.maxY;
            a<t&&(t=a), s>e&&(e=s), u<n&&(n=u), c>r&&(r=c)
          })):(t=0, e=0, n=0, r=0), {
            x:t, y:n, minX:t, minY:n, maxX:e, maxY:r, width:e-t, height:r-n
          }
        }, e.prototype.getDefaultCfg=function(){
          var e=t.prototype.getDefaultCfg.call(this);
          return e.children=[
          ], e
        }, e.prototype.onAttrChange=function(e, n, r){
          if(t.prototype.onAttrChange.call(this, e, n, r), "matrix"===e){
            var i=this.getTotalMatrix();
            this._applyChildrenMarix(i)
          }
        }, e.prototype.applyMatrix=function(e){
          var n=this.getTotalMatrix();
          t.prototype.applyMatrix.call(this, e);
          var r=this.getTotalMatrix();
          r!==n&&this._applyChildrenMarix(r)
        }, e.prototype._applyChildrenMarix=function(t){
          var e=this.getChildren();
          (0, o.each)(e, (function(e){
            e.applyMatrix(t)
          }))
        }, e.prototype.addShape=function(){
          for(var t=[
          ], e=0;
          e<arguments.length;
          e++)t[
            e
          ]
          =arguments[
            e
          ];
          var n=t[
            0
          ], r=t[
            1
          ];
          (0, o.isObject)(n)?r=n:r.type=n;
          var i=ot[
            r.type
          ];
          i||(i=(0, o.upperFirst)(r.type), ot[
            r.type
          ]
          =i);
          var a=this.getShapeBase(), s=new a[
            i
          ]
          (r);
          return this.add(s), s
        }, e.prototype.addGroup=function(){
          for(var t=[
          ], e=0;
          e<arguments.length;
          e++)t[
            e
          ]
          =arguments[
            e
          ];
          var n, r=t[
            0
          ], i=t[
            1
          ];
          if((0, o.isFunction)(r))n=new r(i||{
            parent:this
          });
          else{
            var a=r||{
            }, s=this.getGroupBase();
            n=new s(a)
          }
          return this.add(n), n
        }, e.prototype.getCanvas=function(){
          return this.isCanvas()?this:this.get("canvas")
        }, e.prototype.getShape=function(t, e, n){
          if(!U(this))return null;
          var r, i=this.getChildren();
          if(this.isCanvas())r=this._findShape(i, t, e, n);
          else{
            var o=[
              t, e, 1
            ];
            o=this.invertFromMatrix(o), this.isClipped(o[
              0
            ], o[
              1
            ])||(r=this._findShape(i, o[
              0
            ], o[
              1
            ], n))
          }
          return r
        }, e.prototype._findShape=function(t, e, n, r){
          for(var i=null, o=t.length-1;
          o>=0;
          o--){
            var a=t[
              o
            ];
            if(U(a)&&(a.isGroup()?i=a.getShape(e, n, r):a.isHit(e, n)&&(i=a)), i)break
          }
          return i
        }, e.prototype.add=function(t){
          var e=this.getCanvas(), n=this.getChildren(), r=this.get("timeline"), i=t.getParent();
          i&&function(t, e, n){
            void 0===n&&(n=!0), n?e.destroy():(e.set("parent", null), e.set("canvas", null)), Y(t.getChildren(), e)
          }
          (i, t, !1), t.set("parent", this), e&&at(t, e), r&&st(t, r), n.push(t), t.onCanvasChange("add"), this._applyElementMatrix(t)
        }, e.prototype._applyElementMatrix=function(t){
          var e=this.getTotalMatrix();
          e&&t.applyMatrix(e)
        }, e.prototype.getChildren=function(){
          return this.get("children")||[
          ]
        }, e.prototype.sort=function(){
          var t, e=this.getChildren();
          (0, o.each)(e, (function(t, e){
            return t._INDEX=e, t
          })), e.sort((t=function(t, e){
            return t.get("zIndex")-e.get("zIndex")
          }, function(e, n){
            var r=t(e, n);
            return 0===r?e._INDEX-n._INDEX:r
          })), this.onCanvasChange("sort")
        }, e.prototype.clear=function(){
          if(this.set("clearing", !0), !this.destroyed){
            for(var t=this.getChildren(), e=t.length-1;
            e>=0;
            e--)t[
              e
            ].destroy();
            this.set("children", [
            ]), this.onCanvasChange("clear"), this.set("clearing", !1)
          }
        }, e.prototype.destroy=function(){
          this.get("destroyed")||(this.clear(), t.prototype.destroy.call(this))
        }, e.prototype.getFirst=function(){
          return this.getChildByIndex(0)
        }, e.prototype.getLast=function(){
          var t=this.getChildren();
          return this.getChildByIndex(t.length-1)
        }, e.prototype.getChildByIndex=function(t){
          return this.getChildren()[
            t
          ]
        }, e.prototype.getCount=function(){
          return this.getChildren().length
        }, e.prototype.contain=function(t){
          return this.getChildren().indexOf(t)>-1
        }, e.prototype.removeChild=function(t, e){
          void 0===e&&(e=!0), this.contain(t)&&t.remove(e)
        }, e.prototype.findAll=function(t){
          var e=[
          ], n=this.getChildren();
          return(0, o.each)(n, (function(n){
            t(n)&&e.push(n), n.isGroup()&&(e=e.concat(n.findAll(t)))
          })), e
        }, e.prototype.find=function(t){
          var e=null, n=this.getChildren();
          return(0, o.each)(n, (function(n){
            if(t(n)?e=n:n.isGroup()&&(e=n.find(t)), e)return!1
          })), e
        }, e.prototype.findById=function(t){
          return this.find((function(e){
            return e.get("id")===t
          }))
        }, e.prototype.findByClassName=function(t){
          return this.find((function(e){
            return e.get("className")===t
          }))
        }, e.prototype.findAllByName=function(t){
          return this.findAll((function(e){
            return e.get("name")===t
          }))
        }, e
      }
      (it);
      var ct=n(314036);
      function dt(t, e, n){
        t.prototype=e.prototype=n, n.constructor=t
      }
      function ht(t, e){
        var n=Object.create(t.prototype);
        for(var r in e)n[
          r
        ]
        =e[
          r
        ];
        return n
      }
      function lt(){
      }
      var ft=.7, pt=1/ft, gt="\\s*([+-]?\\d+)\\s*", vt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", yt="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", mt=/^#([
        0-9a-f
      ]
      {
        3, 8
      })$/, bt=new RegExp("^rgb\\("+[
        gt, gt, gt
      ]
      +"\\)$"), xt=new RegExp("^rgb\\("+[
        yt, yt, yt
      ]
      +"\\)$"), Et=new RegExp("^rgba\\("+[
        gt, gt, gt, vt
      ]
      +"\\)$"), Mt=new RegExp("^rgba\\("+[
        yt, yt, yt, vt
      ]
      +"\\)$"), At=new RegExp("^hsl\\("+[
        vt, yt, yt
      ]
      +"\\)$"), wt=new RegExp("^hsla\\("+[
        vt, yt, yt, vt
      ]
      +"\\)$"), Ct={
        aliceblue:15792383, antiquewhite:16444375, aqua:65535, aquamarine:8388564, azure:15794175, beige:16119260, bisque:16770244, black:0, blanchedalmond:16772045, blue:255, blueviolet:9055202, brown:10824234, burlywood:14596231, cadetblue:6266528, chartreuse:8388352, chocolate:13789470, coral:16744272, cornflowerblue:6591981, cornsilk:16775388, crimson:14423100, cyan:65535, darkblue:139, darkcyan:35723, darkgoldenrod:12092939, darkgray:11119017, darkgreen:25600, darkgrey:11119017, darkkhaki:12433259, darkmagenta:9109643, darkolivegreen:5597999, darkorange:16747520, darkorchid:10040012, darkred:9109504, darksalmon:15308410, darkseagreen:9419919, darkslateblue:4734347, darkslategray:3100495, darkslategrey:3100495, darkturquoise:52945, darkviolet:9699539, deeppink:16716947, deepskyblue:49151, dimgray:6908265, dimgrey:6908265, dodgerblue:2003199, firebrick:11674146, floralwhite:16775920, forestgreen:2263842, fuchsia:16711935, gainsboro:14474460, ghostwhite:16316671, gold:16766720, goldenrod:14329120, gray:8421504, green:32768, greenyellow:11403055, grey:8421504, honeydew:15794160, hotpink:16738740, indianred:13458524, indigo:4915330, ivory:16777200, khaki:15787660, lavender:15132410, lavenderblush:16773365, lawngreen:8190976, lemonchiffon:16775885, lightblue:11393254, lightcoral:15761536, lightcyan:14745599, lightgoldenrodyellow:16448210, lightgray:13882323, lightgreen:9498256, lightgrey:13882323, lightpink:16758465, lightsalmon:16752762, lightseagreen:2142890, lightskyblue:8900346, lightslategray:7833753, lightslategrey:7833753, lightsteelblue:11584734, lightyellow:16777184, lime:65280, limegreen:3329330, linen:16445670, magenta:16711935, maroon:8388608, mediumaquamarine:6737322, mediumblue:205, mediumorchid:12211667, mediumpurple:9662683, mediumseagreen:3978097, mediumslateblue:8087790, mediumspringgreen:64154, mediumturquoise:4772300, mediumvioletred:13047173, midnightblue:1644912, mintcream:16121850, mistyrose:16770273, moccasin:16770229, navajowhite:16768685, navy:128, oldlace:16643558, olive:8421376, olivedrab:7048739, orange:16753920, orangered:16729344, orchid:14315734, palegoldenrod:15657130, palegreen:10025880, paleturquoise:11529966, palevioletred:14381203, papayawhip:16773077, peachpuff:16767673, peru:13468991, pink:16761035, plum:14524637, powderblue:11591910, purple:8388736, rebeccapurple:6697881, red:16711680, rosybrown:12357519, royalblue:4286945, saddlebrown:9127187, salmon:16416882, sandybrown:16032864, seagreen:3050327, seashell:16774638, sienna:10506797, silver:12632256, skyblue:8900331, slateblue:6970061, slategray:7372944, slategrey:7372944, snow:16775930, springgreen:65407, steelblue:4620980, tan:13808780, teal:32896, thistle:14204888, tomato:16737095, turquoise:4251856, violet:15631086, wheat:16113331, white:16777215, whitesmoke:16119285, yellow:16776960, yellowgreen:10145074
      };
      function Lt(){
        return this.rgb().formatHex()
      }
      function _t(){
        return this.rgb().formatRgb()
      }
      function kt(t){
        var e, n;
        return t=(t+"").trim().toLowerCase(), (e=mt.exec(t))?(n=e[
          1
        ].length, e=parseInt(e[
          1
        ], 16), 6===n?Pt(e):3===n?new Dt(e>>8&15|e>>4&240, e>>4&15|240&e, (15&e)<<4|15&e, 1):8===n?Nt(e>>24&255, e>>16&255, e>>8&255, (255&e)/255):4===n?Nt(e>>12&15|e>>8&240, e>>8&15|e>>4&240, e>>4&15|240&e, ((15&e)<<4|15&e)/255):null):(e=bt.exec(t))?new Dt(e[
          1
        ], e[
          2
        ], e[
          3
        ], 1):(e=xt.exec(t))?new Dt(255*e[
          1
        ]
        /100, 255*e[
          2
        ]
        /100, 255*e[
          3
        ]
        /100, 1):(e=Et.exec(t))?Nt(e[
          1
        ], e[
          2
        ], e[
          3
        ], e[
          4
        ]):(e=Mt.exec(t))?Nt(255*e[
          1
        ]
        /100, 255*e[
          2
        ]
        /100, 255*e[
          3
        ]
        /100, e[
          4
        ]):(e=At.exec(t))?Bt(e[
          1
        ], e[
          2
        ]
        /100, e[
          3
        ]
        /100, 1):(e=wt.exec(t))?Bt(e[
          1
        ], e[
          2
        ]
        /100, e[
          3
        ]
        /100, e[
          4
        ]):Ct.hasOwnProperty(t)?Pt(Ct[
          t
        ]):"transparent"===t?new Dt(NaN, NaN, NaN, 0):null
      }
      function Pt(t){
        return new Dt(t>>16&255, t>>8&255, 255&t, 1)
      }
      function Nt(t, e, n, r){
        return r<=0&&(t=e=n=NaN), new Dt(t, e, n, r)
      }
      function It(t){
        return t instanceof lt||(t=kt(t)), t?new Dt((t=t.rgb()).r, t.g, t.b, t.opacity):new Dt
      }
      function St(t, e, n, r){
        return 1===arguments.length?It(t):new Dt(t, e, n, null==r?1:r)
      }
      function Dt(t, e, n, r){
        this.r=+t, this.g=+e, this.b=+n, this.opacity=+r
      }
      function Ot(){
        return"#"+Tt(this.r)+Tt(this.g)+Tt(this.b)
      }
      function jt(){
        var t=this.opacity;
        return(1===(t=isNaN(t)?1:Math.max(0, Math.min(1, t)))?"rgb(":"rgba(")+Math.max(0, Math.min(255, Math.round(this.r)||0))+", "+Math.max(0, Math.min(255, Math.round(this.g)||0))+", "+Math.max(0, Math.min(255, Math.round(this.b)||0))+(1===t?")":", "+t+")")
      }
      function Tt(t){
        return((t=Math.max(0, Math.min(255, Math.round(t)||0)))<16?"0":"")+t.toString(16)
      }
      function Bt(t, e, n, r){
        return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN), new Rt(t, e, n, r)
      }
      function Ft(t){
        if(t instanceof Rt)return new Rt(t.h, t.s, t.l, t.opacity);
        if(t instanceof lt||(t=kt(t)), !t)return new Rt;
        if(t instanceof Rt)return t;
        var e=(t=t.rgb()).r/255, n=t.g/255, r=t.b/255, i=Math.min(e, n, r), o=Math.max(e, n, r), a=NaN, s=o-i, u=(o+i)/2;
        return s?(a=e===o?(n-r)/s+6*(n<r):n===o?(r-e)/s+2:(e-n)/s+4, s/=u<.5?o+i:2-o-i, a*=60):s=u>0&&u<1?0:a, new Rt(a, s, u, t.opacity)
      }
      function Rt(t, e, n, r){
        this.h=+t, this.s=+e, this.l=+n, this.opacity=+r
      }
      function qt(t, e, n){
        return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)
      }
      function Xt(t, e, n, r, i){
        var o=t*t, a=o*t;
        return((1-3*t+3*o-a)*e+(4-6*o+3*a)*n+(1+3*t+3*o-3*a)*r+a*i)/6
      }
      dt(lt, kt, {
        copy:function(t){
          return Object.assign(new this.constructor, this, t)
        }, displayable:function(){
          return this.rgb().displayable()
        }, hex:Lt, formatHex:Lt, formatHsl:function(){
          return Ft(this).formatHsl()
        }, formatRgb:_t, toString:_t
      }), dt(Dt, St, ht(lt, {
        brighter:function(t){
          return t=null==t?pt:Math.pow(pt, t), new Dt(this.r*t, this.g*t, this.b*t, this.opacity)
        }, darker:function(t){
          return t=null==t?ft:Math.pow(ft, t), new Dt(this.r*t, this.g*t, this.b*t, this.opacity)
        }, rgb:function(){
          return this
        }, displayable:function(){
          return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1
        }, hex:Ot, formatHex:Ot, formatRgb:jt, toString:jt
      })), dt(Rt, (function(t, e, n, r){
        return 1===arguments.length?Ft(t):new Rt(t, e, n, null==r?1:r)
      }), ht(lt, {
        brighter:function(t){
          return t=null==t?pt:Math.pow(pt, t), new Rt(this.h, this.s, this.l*t, this.opacity)
        }, darker:function(t){
          return t=null==t?ft:Math.pow(ft, t), new Rt(this.h, this.s, this.l*t, this.opacity)
        }, rgb:function(){
          var t=this.h%360+360*(this.h<0), e=isNaN(t)||isNaN(this.s)?0:this.s, n=this.l, r=n+(n<.5?n:1-n)*e, i=2*n-r;
          return new Dt(qt(t>=240?t-240:t+120, i, r), qt(t, i, r), qt(t<120?t+240:t-120, i, r), this.opacity)
        }, displayable:function(){
          return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1
        }, formatHsl:function(){
          var t=this.opacity;
          return(1===(t=isNaN(t)?1:Math.max(0, Math.min(1, t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")
        }
      }));
      const Yt=t=>()=>t;
      function Gt(t, e){
        return function(n){
          return t+n*e
        }
      }
      function Ht(t){
        return 1==(t=+t)?Ut:function(e, n){
          return n-e?function(t, e, n){
            return t=Math.pow(t, n), e=Math.pow(e, n)-t, n=1/n, function(r){
              return Math.pow(t+r*e, n)
            }
          }
          (e, n, t):Yt(isNaN(e)?n:e)
        }
      }
      function Ut(t, e){
        var n=e-t;
        return n?Gt(t, n):Yt(isNaN(t)?e:t)
      }
      const Vt=function t(e){
        var n=Ht(e);
        function r(t, e){
          var r=n((t=St(t)).r, (e=St(e)).r), i=n(t.g, e.g), o=n(t.b, e.b), a=Ut(t.opacity, e.opacity);
          return function(e){
            return t.r=r(e), t.g=i(e), t.b=o(e), t.opacity=a(e), t+""
          }
        }
        return r.gamma=t, r
      }
      (1);
      function zt(t){
        return function(e){
          var n, r, i=e.length, o=new Array(i), a=new Array(i), s=new Array(i);
          for(n=0;
          n<i;
          ++n)r=St(e[
            n
          ]), o[
            n
          ]
          =r.r||0, a[
            n
          ]
          =r.g||0, s[
            n
          ]
          =r.b||0;
          return o=t(o), a=t(a), s=t(s), r.opacity=1, function(t){
            return r.r=o(t), r.g=a(t), r.b=s(t), r+""
          }
        }
      }
      zt((function(t){
        var e=t.length-1;
        return function(n){
          var r=n<=0?n=0:n>=1?(n=1, e-1):Math.floor(n*e), i=t[
            r
          ], o=t[
            r+1
          ], a=r>0?t[
            r-1
          ]
          :2*i-o, s=r<e-1?t[
            r+2
          ]
          :2*o-i;
          return Xt((n-r/e)*e, a, i, o, s)
        }
      })), zt((function(t){
        var e=t.length;
        return function(n){
          var r=Math.floor(((n%=1)<0?++n:n)*e), i=t[
            (r+e-1)%e
          ], o=t[
            r%e
          ], a=t[
            (r+1)%e
          ], s=t[
            (r+2)%e
          ];
          return Xt((n-r/e)*e, i, o, a, s)
        }
      }));
      function Wt(t, e){
        e||(e=[
        ]);
        var n, r=t?Math.min(e.length, t.length):0, i=e.slice();
        return function(o){
          for(n=0;
          n<r;
          ++n)i[
            n
          ]
          =t[
            n
          ]
          *(1-o)+e[
            n
          ]
          *o;
          return i
        }
      }
      function Zt(t){
        return ArrayBuffer.isView(t)&&!(t instanceof DataView)
      }
      function Qt(t, e){
        var n, r=e?e.length:0, i=t?Math.min(r, t.length):0, o=new Array(i), a=new Array(r);
        for(n=0;
        n<i;
        ++n)o[
          n
        ]
        =re(t[
          n
        ], e[
          n
        ]);
        for(;
        n<r;
        ++n)a[
          n
        ]
        =e[
          n
        ];
        return function(t){
          for(n=0;
          n<i;
          ++n)a[
            n
          ]
          =o[
            n
          ]
          (t);
          return a
        }
      }
      function $t(t, e){
        var n=new Date;
        return t=+t, e=+e, function(r){
          return n.setTime(t*(1-r)+e*r), n
        }
      }
      function Kt(t, e){
        return t=+t, e=+e, function(n){
          return t*(1-n)+e*n
        }
      }
      function Jt(t, e){
        var n, r={
        }, i={
        };
        for(n in null!==t&&"object"==typeof t||(t={
        }), null!==e&&"object"==typeof e||(e={
        }), e)n in t?r[
          n
        ]
        =re(t[
          n
        ], e[
          n
        ]):i[
          n
        ]
        =e[
          n
        ];
        return function(t){
          for(n in r)i[
            n
          ]
          =r[
            n
          ]
          (t);
          return i
        }
      }
      var te=/[
        -+
      ]
      ?(?:\d+\.?\d*|\.?\d+)(?:[
        eE
      ]
      [
        -+
      ]
      ?\d+)?/g, ee=new RegExp(te.source, "g");
      function ne(t, e){
        var n, r, i, o=te.lastIndex=ee.lastIndex=0, a=-1, s=[
        ], u=[
        ];
        for(t+="", e+="";
        (n=te.exec(t))&&(r=ee.exec(e));
        )(i=r.index)>o&&(i=e.slice(o, i), s[
          a
        ]
        ?s[
          a
        ]
        +=i:s[
          ++a
        ]
        =i), (n=n[
          0
        ])===(r=r[
          0
        ])?s[
          a
        ]
        ?s[
          a
        ]
        +=r:s[
          ++a
        ]
        =r:(s[
          ++a
        ]
        =null, u.push({
          i:a, x:Kt(n, r)
        })), o=ee.lastIndex;
        return o<e.length&&(i=e.slice(o), s[
          a
        ]
        ?s[
          a
        ]
        +=i:s[
          ++a
        ]
        =i), s.length<2?u[
          0
        ]
        ?function(t){
          return function(e){
            return t(e)+""
          }
        }
        (u[
          0
        ].x):function(t){
          return function(){
            return t
          }
        }
        (e):(e=u.length, function(t){
          for(var n, r=0;
          r<e;
          ++r)s[
            (n=u[
              r
            ]).i
          ]
          =n.x(t);
          return s.join("")
        })
      }
      function re(t, e){
        var n, r=typeof e;
        return null==e||"boolean"===r?Yt(e):("number"===r?Kt:"string"===r?(n=kt(e))?(e=n, Vt):ne:e instanceof kt?Vt:e instanceof Date?$t:Zt(e)?Wt:Array.isArray(e)?Qt:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?Jt:Kt)(t, e)
      }
      function ie(t){
        return+t
      }
      function oe(t){
        return t*t
      }
      function ae(t){
        return t*(2-t)
      }
      function se(t){
        return((t*=2)<=1?t*t:--t*(2-t)+1)/2
      }
      function ue(t){
        return t*t*t
      }
      function ce(t){
        return--t*t*t+1
      }
      function de(t){
        return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2
      }
      var he=function t(e){
        function n(t){
          return Math.pow(t, e)
        }
        return e=+e, n.exponent=t, n
      }
      (3), le=function t(e){
        function n(t){
          return 1-Math.pow(1-t, e)
        }
        return e=+e, n.exponent=t, n
      }
      (3), fe=function t(e){
        function n(t){
          return((t*=2)<=1?Math.pow(t, e):2-Math.pow(2-t, e))/2
        }
        return e=+e, n.exponent=t, n
      }
      (3), pe=Math.PI, ge=pe/2;
      function ve(t){
        return 1==+t?1:1-Math.cos(t*ge)
      }
      function ye(t){
        return Math.sin(t*ge)
      }
      function me(t){
        return(1-Math.cos(pe*t))/2
      }
      function be(t){
        return 1.0009775171065494*(Math.pow(2, -10*t)-.0009765625)
      }
      function xe(t){
        return be(1-+t)
      }
      function Ee(t){
        return 1-be(t)
      }
      function Me(t){
        return((t*=2)<=1?be(1-t):2-be(t-1))/2
      }
      function Ae(t){
        return 1-Math.sqrt(1-t*t)
      }
      function we(t){
        return Math.sqrt(1- --t*t)
      }
      function Ce(t){
        return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2
      }
      var Le=4/11, _e=7.5625;
      function ke(t){
        return 1-Pe(1-t)
      }
      function Pe(t){
        return(t=+t)<Le?_e*t*t:t<.7272727272727273?_e*(t-=.5454545454545454)*t+.75:t<.9090909090909091?_e*(t-=.8181818181818182)*t+.9375:_e*(t-=.9545454545454546)*t+.984375
      }
      function Ne(t){
        return((t*=2)<=1?1-Pe(1-t):Pe(t-1)+1)/2
      }
      var Ie=1.70158, Se=function t(e){
        function n(t){
          return(t=+t)*t*(e*(t-1)+t)
        }
        return e=+e, n.overshoot=t, n
      }
      (Ie), De=function t(e){
        function n(t){
          return--t*t*((t+1)*e+t)+1
        }
        return e=+e, n.overshoot=t, n
      }
      (Ie), Oe=function t(e){
        function n(t){
          return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2
        }
        return e=+e, n.overshoot=t, n
      }
      (Ie), je=2*Math.PI, Te=function t(e, n){
        var r=Math.asin(1/(e=Math.max(1, e)))*(n/=je);
        function i(t){
          return e*be(- --t)*Math.sin((r-t)/n)
        }
        return i.amplitude=function(e){
          return t(e, n*je)
        }, i.period=function(n){
          return t(e, n)
        }, i
      }
      (1, .3), Be=function t(e, n){
        var r=Math.asin(1/(e=Math.max(1, e)))*(n/=je);
        function i(t){
          return 1-e*be(t=+t)*Math.sin((t+r)/n)
        }
        return i.amplitude=function(e){
          return t(e, n*je)
        }, i.period=function(n){
          return t(e, n)
        }, i
      }
      (1, .3), Fe=function t(e, n){
        var r=Math.asin(1/(e=Math.max(1, e)))*(n/=je);
        function i(t){
          return((t=2*t-1)<0?e*be(-t)*Math.sin((r-t)/n):2-e*be(t)*Math.sin((r+t)/n))/2
        }
        return i.amplitude=function(e){
          return t(e, n*je)
        }, i.period=function(n){
          return t(e, n)
        }, i
      }
      (1, .3), Re={
      };
      var qe=[
        1, 0, 0, 0, 1, 0, 0, 0, 1
      ];
      function Xe(t, e, n){
        var r, a=e.startTime;
        if(n<a+e.delay||e._paused)return!1;
        var s, u=e.duration, d=e.easing, h=Re[
          (s=d).toLowerCase()
        ]
        ||i[
          s
        ];
        if(n=n-a-e.delay, e.repeat)r=h(r=n%u/u);
        else{
          if(!((r=n/u)<1))return e.onFrame?t.attr(e.onFrame(1)):t.attr(e.toAttrs), !0;
          r=h(r)
        }
        if(e.onFrame){
          var l=e.onFrame(r);
          t.attr(l)
        }
        else!function(t, e, n){
          var r={
          }, i=e.fromAttrs, a=e.toAttrs;
          if(!t.destroyed){
            var s, u, d, h;
            for(var l in a)if(!(0, o.isEqual)(i[
              l
            ], a[
              l
            ]))if("path"===l){
              var f=a[
                l
              ], p=i[
                l
              ];
              f.length>p.length?(f=c(a[
                l
              ]), p=c(i[
                l
              ]), p=j(p, f), p=F(p, f), e.fromAttrs.path=p, e.toAttrs.path=f):e.pathFormatted||(f=c(a[
                l
              ]), p=c(i[
                l
              ]), p=F(p, f), e.fromAttrs.path=p, e.toAttrs.path=f, e.pathFormatted=!0), r[
                l
              ]
              =[
              ];
              for(var g=0;
              g<f.length;
              g++){
                for(var v=f[
                  g
                ], y=p[
                  g
                ], m=[
                ], b=0;
                b<v.length;
                b++)(0, o.isNumber)(v[
                  b
                ])&&y&&(0, o.isNumber)(y[
                  b
                ])?(s=re(y[
                  b
                ], v[
                  b
                ]), m.push(s(n))):m.push(v[
                  b
                ]);
                r[
                  l
                ].push(m)
              }
            }
            else if("matrix"===l){
              var x=(d=i[
                l
              ]
              ||qe, (Zt(h=a[
                l
              ]
              ||qe)?Wt:Qt)(d, h))(n);
              r[
                l
              ]
              =x
            }
            else[
              "fill", "stroke", "fillStyle", "strokeStyle"
            ].includes(l)&&(u=a[
              l
            ], /^[
              r, R, L, l
            ]
            {
              1
            }
            [
              \s
            ]
            *\(/.test(u))?r[
              l
            ]
            =a[
              l
            ]
            :(0, o.isFunction)(a[
              l
            ])||(s=re(i[
              l
            ], a[
              l
            ]), r[
              l
            ]
            =s(n));
            t.attr(r)
          }
        }
        (t, e, r);
        return!1
      }
      const Ye=function(){
        function t(t){
          this.animators=[
          ], this.current=0, this.timer=null, this.canvas=t
        }
        return t.prototype.initTimer=function(){
          var t, e, n, r=this;
          this.timer=ct.O1((function(i){
            if(r.current=i, r.animators.length>0){
              for(var o=r.animators.length-1;
              o>=0;
              o--)if((t=r.animators[
                o
              ]).destroyed)r.removeAnimator(o);
              else{
                if(!t.isAnimatePaused())for(var a=(e=t.get("animations")).length-1;
                a>=0;
                a--)n=e[
                  a
                ], Xe(t, n, i)&&(e.splice(a, 1), !1, n.callback&&n.callback());
                0===e.length&&r.removeAnimator(o)
              }
              r.canvas.get("autoDraw")||r.canvas.draw()
            }
          }))
        }, t.prototype.addAnimator=function(t){
          this.animators.push(t)
        }, t.prototype.removeAnimator=function(t){
          this.animators.splice(t, 1)
        }, t.prototype.isAnimating=function(){
          return!!this.animators.length
        }, t.prototype.stop=function(){
          this.timer&&this.timer.stop()
        }, t.prototype.stopAllAnimations=function(t){
          void 0===t&&(t=!0), this.animators.forEach((function(e){
            e.stopAnimate(t)
          })), this.animators=[
          ], this.canvas.draw()
        }, t.prototype.getTime=function(){
          return this.current
        }, t
      }
      ();
      var Ge=[
        "mousedown", "mouseup", "dblclick", "mouseout", "mouseover", "mousemove", "mouseleave", "mouseenter", "touchstart", "touchmove", "touchend", "dragenter", "dragover", "dragleave", "drop", "contextmenu", "mousewheel"
      ];
      function He(t, e, n){
        n.name=e, n.target=t, n.currentTarget=t, n.delegateTarget=t, t.emit(e, n)
      }
      function Ue(t, e, n){
        if(n.bubbles){
          var r=void 0, i=!1;
          if("mouseenter"===e?(r=n.fromShape, i=!0):"mouseleave"===e&&(i=!0, r=n.toShape), t.isCanvas()&&i)return;
          if(r&&H(t, r))return void(n.bubbles=!1);
          n.name=e, n.currentTarget=t, n.delegateTarget=t, t.emit(e, n)
        }
      }
      const Ve=function(){
        function t(t){
          var e=this;
          this.draggingShape=null, this.dragging=!1, this.currentShape=null, this.mousedownShape=null, this.mousedownPoint=null, this._eventCallback=function(t){
            var n=t.type;
            e._triggerEvent(n, t)
          }, this._onDocumentMove=function(t){
            if(e.canvas.get("el")!==t.target&&(e.dragging||e.currentShape)){
              var n=e._getPointInfo(t);
              e.dragging&&e._emitEvent("drag", t, n, e.draggingShape)
            }
          }, this._onDocumentMouseUp=function(t){
            if(e.canvas.get("el")!==t.target&&e.dragging){
              var n=e._getPointInfo(t);
              e.draggingShape&&e._emitEvent("drop", t, n, null), e._emitEvent("dragend", t, n, e.draggingShape), e._afterDrag(e.draggingShape, n, t)
            }
          }, this.canvas=t.canvas
        }
        return t.prototype.init=function(){
          this._bindEvents()
        }, t.prototype._bindEvents=function(){
          var t=this, e=this.canvas.get("el");
          (0, o.each)(Ge, (function(n){
            e.addEventListener(n, t._eventCallback)
          })), document&&(document.addEventListener("mousemove", this._onDocumentMove), document.addEventListener("mouseup", this._onDocumentMouseUp))
        }, t.prototype._clearEvents=function(){
          var t=this, e=this.canvas.get("el");
          (0, o.each)(Ge, (function(n){
            e.removeEventListener(n, t._eventCallback)
          })), document&&(document.removeEventListener("mousemove", this._onDocumentMove), document.removeEventListener("mouseup", this._onDocumentMouseUp))
        }, t.prototype._getEventObj=function(t, e, n, r, i, o){
          var a=new R(t, e);
          return a.fromShape=i, a.toShape=o, a.x=n.x, a.y=n.y, a.clientX=n.clientX, a.clientY=n.clientY, a.propagationPath.push(r), a
        }, t.prototype._getShape=function(t, e){
          return this.canvas.getShape(t.x, t.y, e)
        }, t.prototype._getPointInfo=function(t){
          var e=this.canvas, n=e.getClientByEvent(t), r=e.getPointByEvent(t);
          return{
            x:r.x, y:r.y, clientX:n.x, clientY:n.y
          }
        }, t.prototype._triggerEvent=function(t, e){
          var n=this._getPointInfo(e), r=this._getShape(n, e), i=this[
            "_on"+t
          ], o=!1;
          if(i)i.call(this, n, r, e);
          else{
            var a=this.currentShape;
            "mouseenter"===t||"dragenter"===t||"mouseover"===t?(this._emitEvent(t, e, n, null, null, r), r&&this._emitEvent(t, e, n, r, null, r), "mouseenter"===t&&this.draggingShape&&this._emitEvent("dragenter", e, n, null)):"mouseleave"===t||"dragleave"===t||"mouseout"===t?(o=!0, a&&this._emitEvent(t, e, n, a, a, null), this._emitEvent(t, e, n, null, a, null), "mouseleave"===t&&this.draggingShape&&this._emitEvent("dragleave", e, n, null)):this._emitEvent(t, e, n, r, null, null)
          }
          if(o||(this.currentShape=r), r&&!r.get("destroyed")){
            var s=this.canvas;
            s.get("el").style.cursor=r.attr("cursor")||s.get("cursor")
          }
        }, t.prototype._onmousedown=function(t, e, n){
          0===n.button&&(this.mousedownShape=e, this.mousedownPoint=t, this.mousedownTimeStamp=n.timeStamp), this._emitEvent("mousedown", n, t, e, null, null)
        }, t.prototype._emitMouseoverEvents=function(t, e, n, r){
          var i=this.canvas.get("el");
          n!==r&&(n&&(this._emitEvent("mouseout", t, e, n, n, r), this._emitEvent("mouseleave", t, e, n, n, r), r&&!r.get("destroyed")||(i.style.cursor=this.canvas.get("cursor"))), r&&(this._emitEvent("mouseover", t, e, r, n, r), this._emitEvent("mouseenter", t, e, r, n, r)))
        }, t.prototype._emitDragoverEvents=function(t, e, n, r, i){
          r?(r!==n&&(n&&this._emitEvent("dragleave", t, e, n, n, r), this._emitEvent("dragenter", t, e, r, n, r)), i||this._emitEvent("dragover", t, e, r)):n&&this._emitEvent("dragleave", t, e, n, n, r), i&&this._emitEvent("dragover", t, e, r)
        }, t.prototype._afterDrag=function(t, e, n){
          t&&(t.set("capture", !0), this.draggingShape=null), this.dragging=!1;
          var r=this._getShape(e, n);
          r!==t&&this._emitMouseoverEvents(n, e, t, r), this.currentShape=r
        }, t.prototype._onmouseup=function(t, e, n){
          if(0===n.button){
            var r=this.draggingShape;
            this.dragging?(r&&this._emitEvent("drop", n, t, e), this._emitEvent("dragend", n, t, r), this._afterDrag(r, t, n)):(this._emitEvent("mouseup", n, t, e), e===this.mousedownShape&&this._emitEvent("click", n, t, e), this.mousedownShape=null, this.mousedownPoint=null)
          }
        }, t.prototype._ondragover=function(t, e, n){
          n.preventDefault();
          var r=this.currentShape;
          this._emitDragoverEvents(n, t, r, e, !0)
        }, t.prototype._onmousemove=function(t, e, n){
          var r=this.canvas, i=this.currentShape, o=this.draggingShape;
          if(this.dragging)o&&this._emitDragoverEvents(n, t, i, e, !1), this._emitEvent("drag", n, t, o);
          else{
            var a=this.mousedownPoint;
            if(a){
              var s=this.mousedownShape, u=n.timeStamp-this.mousedownTimeStamp, c=a.clientX-t.clientX, d=a.clientY-t.clientY;
              u>120||c*c+d*d>40?s&&s.get("draggable")?((o=this.mousedownShape).set("capture", !1), this.draggingShape=o, this.dragging=!0, this._emitEvent("dragstart", n, t, o), this.mousedownShape=null, this.mousedownPoint=null):!s&&r.get("draggable")?(this.dragging=!0, this._emitEvent("dragstart", n, t, null), this.mousedownShape=null, this.mousedownPoint=null):(this._emitMouseoverEvents(n, t, i, e), this._emitEvent("mousemove", n, t, e)):(this._emitMouseoverEvents(n, t, i, e), this._emitEvent("mousemove", n, t, e))
            }
            else this._emitMouseoverEvents(n, t, i, e), this._emitEvent("mousemove", n, t, e)
          }
        }, t.prototype._emitEvent=function(t, e, n, r, i, o){
          var a=this._getEventObj(t, e, n, r, i, o);
          if(r){
            a.shape=r, He(r, t, a);
            for(var s=r.getParent();
            s;
            )s.emitDelegation(t, a), a.propagationStopped||Ue(s, t, a), a.propagationPath.push(s), s=s.getParent()
          }
          else{
            He(this.canvas, t, a)
          }
        }, t.prototype.destroy=function(){
          this._clearEvents(), this.canvas=null, this.currentShape=null, this.draggingShape=null, this.mousedownPoint=null, this.mousedownShape=null, this.mousedownTimeStamp=null
        }, t
      }
      ();
      var ze=(0, z.o0)(), We=ze&&"firefox"===ze.name;
      const Ze=function(t){
        function e(e){
          var n=t.call(this, e)||this;
          return n.initContainer(), n.initDom(), n.initEvents(), n.initTimeline(), n
        }
        return(0, q.__extends)(e, t), e.prototype.getDefaultCfg=function(){
          var e=t.prototype.getDefaultCfg.call(this);
          return e.cursor="default", e.supportCSSTransform=!1, e
        }, e.prototype.initContainer=function(){
          var t=this.get("container");
          (0, o.isString)(t)&&(t=document.getElementById(t), this.set("container", t))
        }, e.prototype.initDom=function(){
          var t=this.createDom();
          this.set("el", t), this.get("container").appendChild(t), this.setDOMSize(this.get("width"), this.get("height"))
        }, e.prototype.initEvents=function(){
          var t=new Ve({
            canvas:this
          });
          t.init(), this.set("eventController", t)
        }, e.prototype.initTimeline=function(){
          var t=new Ye(this);
          this.set("timeline", t)
        }, e.prototype.setDOMSize=function(t, e){
          var n=this.get("el");
          G&&(n.style.width=t+"px", n.style.height=e+"px")
        }, e.prototype.changeSize=function(t, e){
          this.setDOMSize(t, e), this.set("width", t), this.set("height", e), this.onCanvasChange("changeSize")
        }, e.prototype.getRenderer=function(){
          return this.get("renderer")
        }, e.prototype.getCursor=function(){
          return this.get("cursor")
        }, e.prototype.setCursor=function(t){
          this.set("cursor", t);
          var e=this.get("el");
          G&&e&&(e.style.cursor=t)
        }, e.prototype.getPointByEvent=function(t){
          if(this.get("supportCSSTransform")){
            if(We&&!(0, o.isNil)(t.layerX)&&t.layerX!==t.offsetX)return{
              x:t.layerX, y:t.layerY
            };
            if(!(0, o.isNil)(t.offsetX))return{
              x:t.offsetX, y:t.offsetY
            }
          }
          var e=this.getClientByEvent(t), n=e.x, r=e.y;
          return this.getPointByClient(n, r)
        }, e.prototype.getClientByEvent=function(t){
          var e=t;
          return t.touches&&(e="touchend"===t.type?t.changedTouches[
            0
          ]
          :t.touches[
            0
          ]), {
            x:e.clientX, y:e.clientY
          }
        }, e.prototype.getPointByClient=function(t, e){
          var n=this.get("el").getBoundingClientRect();
          return{
            x:t-n.left, y:e-n.top
          }
        }, e.prototype.getClientByPoint=function(t, e){
          var n=this.get("el").getBoundingClientRect();
          return{
            x:t+n.left, y:e+n.top
          }
        }, e.prototype.draw=function(){
        }, e.prototype.removeDom=function(){
          var t=this.get("el");
          t.parentNode.removeChild(t)
        }, e.prototype.clearEvents=function(){
          this.get("eventController").destroy()
        }, e.prototype.isCanvas=function(){
          return!0
        }, e.prototype.getParent=function(){
          return null
        }, e.prototype.destroy=function(){
          var e=this.get("timeline");
          this.get("destroyed")||(this.clear(), e&&e.stop(), this.clearEvents(), this.removeDom(), t.prototype.destroy.call(this))
        }, e
      }
      (ut);
      const Qe=function(t){
        function e(){
          return null!==t&&t.apply(this, arguments)||this
        }
        return(0, q.__extends)(e, t), e.prototype.isGroup=function(){
          return!0
        }, e.prototype.isEntityGroup=function(){
          return!1
        }, e.prototype.clone=function(){
          for(var e=t.prototype.clone.call(this), n=this.getChildren(), r=0;
          r<n.length;
          r++){
            var i=n[
              r
            ];
            e.add(i.clone())
          }
          return e
        }, e
      }
      (ut);
      const $e=function(t){
        function e(e){
          return t.call(this, e)||this
        }
        return(0, q.__extends)(e, t), e.prototype._isInBBox=function(t, e){
          var n=this.getBBox();
          return n.minX<=t&&n.maxX>=t&&n.minY<=e&&n.maxY>=e
        }, e.prototype.afterAttrsChange=function(e){
          t.prototype.afterAttrsChange.call(this, e), this.clearCacheBBox()
        }, e.prototype.getBBox=function(){
          var t=this.cfg.bbox;
          return t||(t=this.calculateBBox(), this.set("bbox", t)), t
        }, e.prototype.getCanvasBBox=function(){
          var t=this.cfg.canvasBBox;
          return t||(t=this.calculateCanvasBBox(), this.set("canvasBBox", t)), t
        }, e.prototype.applyMatrix=function(e){
          t.prototype.applyMatrix.call(this, e), this.set("canvasBBox", null)
        }, e.prototype.calculateCanvasBBox=function(){
          var t=this.getBBox(), e=this.getTotalMatrix(), n=t.minX, r=t.minY, i=t.maxX, o=t.maxY;
          if(e){
            var a=Z(e, [
              t.minX, t.minY
            ]), s=Z(e, [
              t.maxX, t.minY
            ]), u=Z(e, [
              t.minX, t.maxY
            ]), c=Z(e, [
              t.maxX, t.maxY
            ]);
            n=Math.min(a[
              0
            ], s[
              0
            ], u[
              0
            ], c[
              0
            ]), i=Math.max(a[
              0
            ], s[
              0
            ], u[
              0
            ], c[
              0
            ]), r=Math.min(a[
              1
            ], s[
              1
            ], u[
              1
            ], c[
              1
            ]), o=Math.max(a[
              1
            ], s[
              1
            ], u[
              1
            ], c[
              1
            ])
          }
          var d=this.attrs;
          if(d.shadowColor){
            var h=d.shadowBlur, l=void 0===h?0:h, f=d.shadowOffsetX, p=void 0===f?0:f, g=d.shadowOffsetY, v=void 0===g?0:g, y=n-l+p, m=i+l+p, b=r-l+v, x=o+l+v;
            n=Math.min(n, y), i=Math.max(i, m), r=Math.min(r, b), o=Math.max(o, x)
          }
          return{
            x:n, y:r, minX:n, minY:r, maxX:i, maxY:o, width:i-n, height:o-r
          }
        }, e.prototype.clearCacheBBox=function(){
          this.set("bbox", null), this.set("canvasBBox", null)
        }, e.prototype.isClipShape=function(){
          return this.get("isClipShape")
        }, e.prototype.isInShape=function(t, e){
          return!1
        }, e.prototype.isOnlyHitBox=function(){
          return!1
        }, e.prototype.isHit=function(t, e){
          var n=this.get("startArrowShape"), r=this.get("endArrowShape"), i=[
            t, e, 1
          ], o=(i=this.invertFromMatrix(i))[
            0
          ], a=i[
            1
          ], s=this._isInBBox(o, a);
          if(this.isOnlyHitBox())return s;
          if(s&&!this.isClipped(o, a)){
            if(this.isInShape(o, a))return!0;
            if(n&&n.isHit(o, a))return!0;
            if(r&&r.isHit(o, a))return!0
          }
          return!1
        }, e
      }
      (it);
      var Ke=new Map;
      function Je(t, e){
        Ke.set(t, e)
      }
      function tn(t){
        return Ke.get(t)
      }
      function en(t){
        var e=t.attr();
        return{
          x:e.x, y:e.y, width:e.width, height:e.height
        }
      }
      function nn(t){
        var e=t.attr(), n=e.x, r=e.y, i=e.r;
        return{
          x:n-i, y:r-i, width:2*i, height:2*i
        }
      }
      var rn=n(966340);
      function on(t, e){
        return t&&e?{
          minX:Math.min(t.minX, e.minX), minY:Math.min(t.minY, e.minY), maxX:Math.max(t.maxX, e.maxX), maxY:Math.max(t.maxY, e.maxY)
        }
        :t||e
      }
      function an(t, e){
        var n=t.get("startArrowShape"), r=t.get("endArrowShape");
        return n&&(e=on(e, n.getCanvasBBox())), r&&(e=on(e, r.getCanvasBBox())), e
      }
      var sn=null;
      function un(){
        if(!sn){
          var t=document.createElement("canvas");
          t.width=1, t.height=1, sn=t.getContext("2d")
        }
        return sn
      }
      function cn(t, e, n){
        var r=1;
        return(0, o.isString)(t)&&(r=t.split("\n").length), r>1?e*r+function(t, e){
          return e?e-t:.14*t
        }
        (e, n)*(r-1):e
      }
      function dn(t){
        var e=t.fontSize, n=t.fontFamily, r=t.fontWeight;
        return[
          t.fontStyle, t.fontVariant, r, e+"px", n
        ].join(" ").trim()
      }
      var hn=n(316293);
      function ln(t, e){
        var n=t.prePoint, r=t.currentPoint, i=t.nextPoint, a=Math.pow(r[
          0
        ]
        -n[
          0
        ], 2)+Math.pow(r[
          1
        ]
        -n[
          1
        ], 2), s=Math.pow(r[
          0
        ]
        -i[
          0
        ], 2)+Math.pow(r[
          1
        ]
        -i[
          1
        ], 2), u=Math.pow(n[
          0
        ]
        -i[
          0
        ], 2)+Math.pow(n[
          1
        ]
        -i[
          1
        ], 2), c=Math.acos((a+s-u)/(2*Math.sqrt(a)*Math.sqrt(s)));
        if(!c||0===Math.sin(c)||(0, o.isNumberEqual)(c, 0))return{
          xExtra:0, yExtra:0
        };
        var d=Math.abs(Math.atan2(i[
          1
        ]
        -r[
          1
        ], i[
          0
        ]
        -r[
          0
        ])), h=Math.abs(Math.atan2(i[
          0
        ]
        -r[
          0
        ], i[
          1
        ]
        -r[
          1
        ]));
        return d=d>Math.PI/2?Math.PI-d:d, h=h>Math.PI/2?Math.PI-h:h, {
          xExtra:Math.cos(c/2-d)*(e/2*(1/Math.sin(c/2)))-e/2||0, yExtra:Math.cos(h-c/2)*(e/2*(1/Math.sin(c/2)))-e/2||0
        }
      }
      Je("rect", en), Je("image", en), Je("circle", nn), Je("marker", nn), Je("polyline", (function(t){
        for(var e=t.attr().points, n=[
        ], r=[
        ], i=0;
        i<e.length;
        i++){
          var o=e[
            i
          ];
          n.push(o[
            0
          ]), r.push(o[
            1
          ])
        }
        var a=rn.J0.getBBoxByArray(n, r), s=a.x, u=a.y, c={
          minX:s, minY:u, maxX:s+a.width, maxY:u+a.height
        };
        return{
          x:(c=an(t, c)).minX, y:c.minY, width:c.maxX-c.minX, height:c.maxY-c.minY
        }
      })), Je("polygon", (function(t){
        for(var e=t.attr().points, n=[
        ], r=[
        ], i=0;
        i<e.length;
        i++){
          var o=e[
            i
          ];
          n.push(o[
            0
          ]), r.push(o[
            1
          ])
        }
        return rn.J0.getBBoxByArray(n, r)
      })), Je("text", (function(t){
        var e=t.attr(), n=e.x, r=e.y, i=e.text, a=e.fontSize, s=e.lineHeight, u=e.font;
        u||(u=dn(e));
        var c, d=function(t, e){
          var n=un(), r=0;
          if((0, o.isNil)(t)||""===t)return r;
          if(n.save(), n.font=e, (0, o.isString)(t)&&t.includes("\n")){
            var i=t.split("\n");
            (0, o.each)(i, (function(t){
              var e=n.measureText(t).width;
              r<e&&(r=e)
            }))
          }
          else r=n.measureText(t).width;
          return n.restore(), r
        }
        (i, u);
        if(d){
          var h=e.textAlign, l=e.textBaseline, f=cn(i, a, s), p={
            x:n, y:r-f
          };
          h&&("end"===h||"right"===h?p.x-=d:"center"===h&&(p.x-=d/2)), l&&("top"===l?p.y+=f:"middle"===l&&(p.y+=f/2)), c={
            x:p.x, y:p.y, width:d, height:f
          }
        }
        else c={
          x:n, y:r, width:0, height:0
        };
        return c
      })), Je("path", (function(t){
        var e=t.attr(), n=e.path, r=e.stroke?e.lineWidth:0, i=function(t, e){
          for(var n=[
          ], r=[
          ], i=[
          ], a=0;
          a<t.length;
          a++){
            var s=(v=t[
              a
            ]).currentPoint, u=v.params, c=v.prePoint, d=void 0;
            switch(v.command){
              case"Q":d=rn.kO.box(c[
                0
              ], c[
                1
              ], u[
                1
              ], u[
                2
              ], u[
                3
              ], u[
                4
              ]);
              break;
              case"C":d=rn.lw.box(c[
                0
              ], c[
                1
              ], u[
                1
              ], u[
                2
              ], u[
                3
              ], u[
                4
              ], u[
                5
              ], u[
                6
              ]);
              break;
              case"A":var h=v.arcParams;
              d=rn.l5.box(h.cx, h.cy, h.rx, h.ry, h.xRotation, h.startAngle, h.endAngle);
              break;
              default:n.push(s[
                0
              ]), r.push(s[
                1
              ])
            }
            d&&(v.box=d, n.push(d.x, d.x+d.width), r.push(d.y, d.y+d.height)), e&&("L"===v.command||"M"===v.command)&&v.prePoint&&v.nextPoint&&i.push(v)
          }
          n=n.filter((function(t){
            return!Number.isNaN(t)&&t!==1/0&&t!==-1/0
          })), r=r.filter((function(t){
            return!Number.isNaN(t)&&t!==1/0&&t!==-1/0
          }));
          var l=(0, o.min)(n), f=(0, o.min)(r), p=(0, o.max)(n), g=(0, o.max)(r);
          if(0===i.length)return{
            x:l, y:f, width:p-l, height:g-f
          };
          for(a=0;
          a<i.length;
          a++){
            var v;
            (s=(v=i[
              a
            ]).currentPoint)[
              0
            ]
            ===l?l-=ln(v, e).xExtra:s[
              0
            ]
            ===p&&(p+=ln(v, e).xExtra), s[
              1
            ]
            ===f?f-=ln(v, e).yExtra:s[
              1
            ]
            ===g&&(g+=ln(v, e).yExtra)
          }
          return{
            x:l, y:f, width:p-l, height:g-f
          }
        }
        (t.get("segments")||(0, hn.On)(n), r), a=i.x, s=i.y, u={
          minX:a, minY:s, maxX:a+i.width, maxY:s+i.height
        };
        return{
          x:(u=an(t, u)).minX, y:u.minY, width:u.maxX-u.minX, height:u.maxY-u.minY
        }
      })), Je("line", (function(t){
        var e=t.attr(), n=e.x1, r=e.y1, i=e.x2, o=e.y2, a={
          minX:Math.min(n, i), maxX:Math.max(n, i), minY:Math.min(r, o), maxY:Math.max(r, o)
        };
        return{
          x:(a=an(t, a)).minX, y:a.minY, width:a.maxX-a.minX, height:a.maxY-a.minY
        }
      })), Je("ellipse", (function(t){
        var e=t.attr(), n=e.x, r=e.y, i=e.rx, o=e.ry;
        return{
          x:n-i, y:r-o, width:2*i, height:2*o
        }
      }))
    }, 951147:(t, e, n)=>{
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var r=n(331635), i=u(n(591510)), o=u(n(869611)), a=u(n(107304)), s=n(434170);
      function u(t){
        return t&&t.__esModule?t:{
          default:t
        }
      }
      var c=function(t, e, n, r){
        void 0===n&&(n="cluster"), void 0===r&&(r=2);
        var i=[
        ], o=t.nodes;
        return e.forEach((function(t, e){
          i.push(d(o, t, e, n, r))
        })), i
      }, d=function(t, e, n, r, i){
        var o=[
          n
        ], a=[
        ], s={
        };
        return e.forEach((function(e, u){
          if(e<=i&&n!==u){
            o.push(u), a.push(t[
              u
            ]);
            var c=t[
              u
            ]
            [
              r
            ];
            s[
              c
            ]
            ?(s[
              c
            ].count++, s[
              c
            ].dists.push(e)):s[
              c
            ]
            ={
              count:1, dists:[
                e
              ]
            }
          }
        })), Object.keys(s).forEach((function(t){
          s[
            t
          ].dists=s[
            t
          ].dists.sort((function(t, e){
            return t-e
          }))
        })), {
          nodeIdx:n, nodeId:t[
            n
          ].id, nodeIdxs:o, neighbors:a, neighborNum:o.length-1, nodeLabelCountMap:s
        }
      }, h=function(t, e, n, r){
        var i=n.nodes;
        return r||(r={
        }), Object.keys(t).forEach((function(o){
          var a, s;
          if(!r||!r[
            o
          ]){
            r[
              o
            ]
            ={
              nodes:[
              ], edges:[
              ]
            };
            var u=t[
              o
            ], c=null===(a=e[
              u.start
            ])||void 0===a?void 0:a.nodeIdxs, d=null===(s=e[
              u.end
            ])||void 0===s?void 0:s.nodeIdxs;
            if(c&&d){
              var h=new Set(d), l=c.filter((function(t){
                return h.has(t)
              }));
              if(l&&l.length){
                for(var f={
                }, p=l.length, g=0;
                g<p;
                g++){
                  var v=i[
                    l[
                      g
                    ]
                  ];
                  r[
                    o
                  ].nodes.push(v), f[
                    v.id
                  ]
                  =!0
                }
                n.edges.forEach((function(t){
                  f[
                    t.source
                  ]
                  &&f[
                    t.target
                  ]
                  &&r[
                    o
                  ].edges.push(t)
                }))
              }
            }
          }
        })), r
      }, l=function(t, e, n, r){
        var i, o, a={
        };
        t.nodes.forEach((function(t){
          a[
            t.id
          ]
          =t
        }));
        var s=0;
        return!(null===(i=null==e?void 0:e.edges)||void 0===i?void 0:i.length)||(null===(o=null==e?void 0:e.nodes)||void 0===o?void 0:o.length)<2?0:(t.edges.forEach((function(t){
          var i=a[
            t.source
          ]
          [
            n
          ], o=a[
            t.target
          ]
          [
            n
          ], u=null==e?void 0:e.nodes[
            0
          ]
          [
            n
          ], c=null==e?void 0:e.nodes[
            1
          ]
          [
            n
          ], d=null==e?void 0:e.edges[
            0
          ]
          [
            r
          ];
          t[
            r
          ]
          ===d&&(i===u&&o===c||i===c&&o===u)&&s++
        })), s)
      }, f=function(t, e){
        var n={
        }, r={
        };
        return t.forEach((function(t, i){
          n[
            t.id
          ]
          ={
            idx:i, node:t, degree:0, inDegree:0, outDegree:0
          };
          var o=t[
            e
          ];
          r[
            o
          ]
          ||(r[
            o
          ]
          =[
          ]), r[
            o
          ].push(t)
        })), {
          nodeMap:n, nodeLabelMap:r
        }
      }, p=function(t, e, n){
        var r={
        }, i={
        };
        return t.forEach((function(t, o){
          r[
            "".concat(s.uniqueId)
          ]
          ={
            idx:o, edge:t
          };
          var a=t[
            e
          ];
          i[
            a
          ]
          ||(i[
            a
          ]
          =[
          ]), i[
            a
          ].push(t);
          var u=n[
            t.source
          ];
          u&&(u.degree++, u.outDegree++);
          var c=n[
            t.target
          ];
          c&&(c.degree++, c.inDegree++)
        })), {
          edgeMap:r, edgeLabelMap:i
        }
      }, g=function(t, e, n){
        var r=e.length, i={
        };
        return e.forEach((function(e, o){
          for(var a=n?0:o+1, s=t[
            o
          ].id, u=a;
          u<r;
          u++)if(o!==u){
            var c=t[
              u
            ].id, d=e[
              u
            ];
            i[
              "".concat(s, "-").concat(c)
            ]
            =d, n||(i[
              "".concat(c, "-").concat(s)
            ]
            =d)
          }
        })), i
      }, v=function(t, e, n, r, i, o, a, s, u, c, d){
        var f, p="".concat(e.id, "-").concat(n.id);
        if(c&&c[
          p
        ])return c[
          p
        ];
        var g=d?d[
          p
        ]
        :void 0;
        if(!g){
          var v=((f={
          })[
            p
          ]
          ={
            start:r[
              e.id
            ].idx, end:r[
              n.id
            ].idx, distance:i
          }, f);
          g=(d=h(v, o, t, d))[
            p
          ]
        }
        return l(g, a, s, u)
      }, y=function(t, e, n, r){
        var i, o, a, s=null===(i=t[
          e
        ])||void 0===i?void 0:i.degree, u=null===(o=t[
          e
        ])||void 0===o?void 0:o.inDegree, c=null===(a=t[
          e
        ])||void 0===a?void 0:a.outDegree;
        return void 0===t[
          e
        ]
        &&(s=1/0, u=1/0, c=1/0, r[
          e
        ].forEach((function(t){
          var e=n[
            t.id
          ].degree;
          s>e&&(s=e);
          var r=n[
            t.id
          ].inDegree;
          u>r&&(u=r);
          var i=n[
            t.id
          ].outDegree;
          c>i&&(c=i)
        })), t[
          e
        ]
        ={
          degree:s, inDegree:u, outDegree:c
        }), {
          minPatternNodeLabelDegree:s, minPatternNodeLabelInDegree:u, minPatternNodeLabelOutDegree:c
        }
      }, m=function(t, e, n, s, u, m, b){
        var x;
        if(void 0===n&&(n=!1), void 0===m&&(m="cluster"), void 0===b&&(b="cluster"), t&&t.nodes){
          var E=t.nodes.length;
          if(E){
            var M=(0, i.default)(t, n), A=(0, i.default)(e, n), w=g(t.nodes, M, n), C=g(e.nodes, A, n), L=f(t.nodes, m), _=L.nodeMap, k=L.nodeLabelMap, P=f(e.nodes, m), N=P.nodeMap, I=P.nodeLabelMap;
            p(t.edges, b, _);
            var S=p(e.edges, b, N).edgeLabelMap, D=[
            ];
            null==A||A.forEach((function(t){
              D=D.concat(t)
            })), u||(u=Math.max.apply(Math, (0, r.__spreadArray)((0, r.__spreadArray)([
            ], D, !1), [
              2
            ], !1))), s||(s=u);
            var O=c(t, M, m, s), j=c(e, A, m, s), T=function(t, e, n, r, i){
              var o=Math.ceil(n/e), a={
              }, s=0;
              return r.forEach((function(t, r){
                for(var u=0, c=0, d=t.nodeIdxs, h=t.neighborNum-1;
                u<o;
                ){
                  for(var l=d[
                    1+Math.floor(Math.random()*h)
                  ], f=0;
                  (a[
                    "".concat(r, "-").concat(l)
                  ]
                  ||a[
                    "".concat(l, "-").concat(r)
                  ])&&(l=Math.floor(Math.random()*e), !(++f>2*e));
                  );
                  if(f<2*e&&(a[
                    "".concat(r, "-").concat(l)
                  ]
                  ={
                    start:r, end:l, distance:i[
                      r
                    ]
                    [
                      l
                    ]
                  }, u++, ++s>=n))return a;
                  if(++c>2*e)break
                }
                u<o&&(o=(o+(o-u))/(e-r-1))
              })), a
            }
            (0, E, Math.min(100, E*(E-1)/2), O, M), B=h(T, O, t), F={
              graphs:B, nodeLabelProp:m, edgeLabelProp:b, minSupport:1, minNodeNum:1, maxNodeNum:4, directed:n
            }, R=(0, o.default)(F).slice(0, 10), q=R.length, X=[
            ];
            R.forEach((function(t, e){
              X[
                e
              ]
              ={
              }, Object.keys(B).forEach((function(n){
                var r=B[
                  n
                ], i=l(r, t, m, b);
                X[
                  e
                ]
                [
                  n
                ]
                =i
              }))
            }));
            var Y=function(t, e, n){
              for(var r=1/0, i=0, o=function(e){
                var n=t[
                  e
                ], o=Object.keys(n).sort((function(t, e){
                  return n[
                    t
                  ]
                  -n[
                    e
                  ]
                })), a=[
                ];
                o.forEach((function(t, e){
                  a[
                    e%10
                  ]
                  ||(a[
                    e%10
                  ]
                  ={
                    graphs:[
                    ], totalCount:0, aveCount:0
                  }), a[
                    e%10
                  ].graphs.push(t), a[
                    e%10
                  ].totalCount+=n[
                    t
                  ]
                }));
                var s=0, u=[
                ];
                a.forEach((function(t){
                  var e=t.totalCount/t.graphs.length;
                  t.aveCount=e, u.push(e);
                  var r=0, i=t.length;
                  t.graphs.forEach((function(e, i){
                    var o=n[
                      e
                    ];
                    t.graphs.forEach((function(t, e){
                      i!==e&&(r+=Math.abs(o-n[
                        t
                      ]))
                    }))
                  })), s+=r/=i*(i-1)/2
                })), s/=a.length;
                var c=0;
                u.forEach((function(t, e){
                  u.forEach((function(n, r){
                    e!==r&&(c+=Math.abs(t-n))
                  })), c/=u.length*(u.length-1)/2
                }));
                var d=c-s;
                r<d&&(r=d, i=e)
              }, a=0;
              a<e;
              a++)o(a);
              return{
                structure:n[
                  i
                ], structureCountMap:t[
                  i
                ]
              }
            }
            (X, q, R), G=Y.structure, H=Y.structureCountMap, U=e.nodes[
              0
            ], V=[
            ], z=null===(x=e.nodes[
              0
            ])||void 0===x?void 0:x[
              m
            ], W=-1/0;
            e.nodes.forEach((function(t){
              var e=t[
                m
              ], n=k[
                e
              ];
              (null==n?void 0:n.length)>W&&(W=n.length, V=n, z=e, U=t)
            }));
            var Z={
            }, Q={
            }, $={
            }, K={
            }, J={
            }, tt={
            };
            Object.keys(I).forEach((function(r, i){
              J[
                r
              ]
              =[
              ], n&&(tt[
                r
              ]
              =[
              ]);
              var o=-1/0, a=I[
                r
              ], s={
              };
              a.forEach((function(t){
                var e=C[
                  "".concat(U.id, "-").concat(t.id)
                ];
                if(e&&J[
                  r
                ].push(e), o<e&&(o=e), s[
                  "".concat(U.id, "-").concat(t.id)
                ]
                ={
                  start:0, end:N[
                    t.id
                  ].idx, distance:e
                }, n){
                  var i=C[
                    "".concat(t.id, "-").concat(U.id)
                  ];
                  i&&tt[
                    r
                  ].push(i)
                }
              })), J[
                r
              ]
              =J[
                r
              ].sort((function(t, e){
                return t-e
              })), n&&(tt[
                r
              ]
              =tt[
                r
              ].sort((function(t, e){
                return t-e
              }))), Q=h(s, j, e, Q);
              var u=[
              ];
              if(Object.keys(s).forEach((function(t){
                if($[
                  t
                ])u.push($[
                  t
                ]);
                else{
                  var e=Q[
                    t
                  ];
                  $[
                    t
                  ]
                  =l(e, G, m, b), u.push($[
                    t
                  ])
                }
              })), u=u.sort((function(t, e){
                return e-t
              })), K[
                "".concat(U.id, "-").concat(r)
              ]
              =u, r!==z)for(var c=function(e){
                var n=V[
                  e
                ], i=O[
                  _[
                    n.id
                  ].idx
                ], o=i.nodeLabelCountMap[
                  r
                ], a=I[
                  r
                ].length;
                if(!o||o.count<a)return V.splice(e, 1), "continue";
                for(var s=!1, c=0;
                c<a;
                c++)if(o.dists[
                  c
                ]
                >J[
                  r
                ]
                [
                  c
                ]){
                  s=!0;
                  break
                }
                if(s)return V.splice(e, 1), "continue";
                var d={
                };
                i.neighbors.forEach((function(t){
                  var e=w[
                    "".concat(n.id, "-").concat(t.id)
                  ];
                  d[
                    "".concat(n.id, "-").concat(t.id)
                  ]
                  ={
                    start:_[
                      n.id
                    ].idx, end:_[
                      t.id
                    ].idx, distance:e
                  }
                })), B=h(d, O, t, B);
                var f=[
                ];
                Object.keys(d).forEach((function(t){
                  if(H[
                    t
                  ])f.push(H[
                    t
                  ]);
                  else{
                    var e=B[
                      t
                    ];
                    H[
                      t
                    ]
                    =l(e, G, m, b), f.push(H[
                      t
                    ])
                  }
                })), f=f.sort((function(t, e){
                  return e-t
                }));
                var p=!1;
                for(c=0;
                c<a;
                c++)if(f[
                  c
                ]
                <u[
                  c
                ]){
                  p=!0;
                  break
                }
                return p?(V.splice(e, 1), "continue"):void 0
              }, d=((null==V?void 0:V.length)||0)-1;
              d>=0;
              d--)c(d)
            }));
            var et=[
            ];
            null==V||V.forEach((function(r){
              for(var i=_[
                r.id
              ].idx, o=d(t.nodes, M[
                i
              ], i, m, u).neighbors, a=!1, s=o.length-1;
              s>=0;
              s--){
                if(o.length+1<e.nodes.length)return void(a=!0);
                var c=o[
                  s
                ], h=c[
                  m
                ];
                if(I[
                  h
                ]
                &&I[
                  h
                ].length)if(J[
                  h
                ]
                &&J[
                  h
                ].length){
                  var l="".concat(r.id, "-").concat(c.id), f=w[
                    l
                  ], p=J[
                    h
                  ].length-1;
                  if(f>J[
                    h
                  ]
                  [
                    p
                  ])o.splice(s, 1);
                  else{
                    if(n){
                      var g="".concat(c.id, "-").concat(r.id), x=w[
                        g
                      ];
                      if(p=tt[
                        h
                      ].length-1, x>tt[
                        h
                      ]
                      [
                        p
                      ]){
                        o.splice(s, 1);
                        continue
                      }
                    }
                    var E=H[
                      l
                    ]
                    ?H[
                      l
                    ]
                    :v(t, r, c, _, f, O, G, m, b, H, B), A="".concat(U.id, "-").concat(h);
                    if(E<K[
                      A
                    ]
                    [
                      K[
                        A
                      ].length-1
                    ])o.splice(s, 1);
                    else{
                      var C=y(Z, h, N, I), L=C.minPatternNodeLabelDegree;
                      C.minPatternNodeLabelInDegree, C.minPatternNodeLabelOutDegree;
                      _[
                        c.id
                      ].degree<L&&o.splice(s, 1)
                    }
                  }
                }
                else o.splice(s, 1);
                else o.splice(s, 1)
              }
              a||et.push({
                nodes:[
                  r
                ].concat(o)
              })
            }));
            var nt=(0, a.default)(e, U.id, !1).length, rt={
            };
            n?(Object.keys(nt).forEach((function(t){
              var e=N[
                t
              ].node[
                m
              ];
              rt[
                e
              ]
              ?rt[
                e
              ].push(nt[
                t
              ]):rt[
                e
              ]
              =[
                nt[
                  t
                ]
              ]
            })), Object.keys(rt).forEach((function(t){
              rt[
                t
              ].sort((function(t, e){
                return t-e
              }))
            }))):rt=J;
            for(var it=function(r){
              var i=et[
                r
              ], o=i.nodes[
                0
              ], s={
              }, u={
              };
              i.nodes.forEach((function(t, e){
                u[
                  t.id
                ]
                ={
                  idx:e, node:t, degree:0, inDegree:0, outDegree:0
                };
                var n=t[
                  m
                ];
                s[
                  n
                ]
                ?s[
                  n
                ]
                ++:s[
                  n
                ]
                =1
              }));
              var c=[
              ], d={
              };
              t.edges.forEach((function(t){
                u[
                  t.source
                ]
                &&u[
                  t.target
                ]
                &&(c.push(t), d[
                  t[
                    b
                  ]
                ]
                ?d[
                  t[
                    b
                  ]
                ]
                ++:d[
                  t[
                    b
                  ]
                ]
                =1, u[
                  t.source
                ].degree++, u[
                  t.target
                ].degree++, u[
                  t.source
                ].outDegree++, u[
                  t.target
                ].inDegree++)
              }));
              for(var h=Object.keys(S).length, l=!1, f=0;
              f<h;
              f++){
                var p=Object.keys(S)[
                  f
                ];
                if(!d[
                  p
                ]
                ||d[
                  p
                ]
                <S[
                  p
                ].length){
                  l=!0;
                  break
                }
              }
              if(l)return et.splice(r, 1), "continue";
              var g=c.length;
              if(g<e.edges.length)return et.splice(r, 1), "break";
              var v=!1, x=function(t){
                var e=c[
                  t
                ], r=e[
                  b
                ], i=S[
                  r
                ];
                if(!i||!i.length)return d[
                  r
                ]
                --, i&&d[
                  r
                ]
                <i.length?(v=!0, "break"):(c.splice(t, 1), u[
                  e.source
                ].degree--, u[
                  e.target
                ].degree--, u[
                  e.source
                ].outDegree--, u[
                  e.target
                ].inDegree--, "continue");
                var o=u[
                  e.source
                ].node[
                  m
                ], a=u[
                  e.target
                ].node[
                  m
                ], s=!1;
                return i.forEach((function(t){
                  var e=N[
                    t.source
                  ].node, r=N[
                    t.target
                  ].node;
                  e[
                    m
                  ]
                  ===o&&r[
                    m
                  ]
                  ===a&&(s=!0), n||e[
                    m
                  ]
                  !==a||r[
                    m
                  ]
                  !==o||(s=!0)
                })), s?void 0:(d[
                  r
                ]
                --, i&&d[
                  r
                ]
                <i.length?(v=!0, "break"):(c.splice(t, 1), u[
                  e.source
                ].degree--, u[
                  e.target
                ].degree--, u[
                  e.source
                ].outDegree--, u[
                  e.target
                ].inDegree--, "continue"))
              };
              for(f=g-1;
              f>=0;
              f--){
                if("break"===x(f))break
              }
              if(v)return et.splice(r, 1), "continue";
              i.edges=c;
              var E=(0, a.default)(i, i.nodes[
                0
              ].id, !1).length;
              if(Object.keys(E).reverse().forEach((function(t){
                if(t!==i.nodes[
                  0
                ].id&&!v){
                  if(E[
                    t
                  ]
                  ===1/0){
                    var e=u[
                      t
                    ].node[
                      m
                    ];
                    if(s[
                      e
                    ]
                    --, s[
                      e
                    ]
                    <I[
                      e
                    ].length)return void(v=!0);
                    var n=i.nodes.indexOf(u[
                      t
                    ].node);
                    return i.nodes.splice(n, 1), void(u[
                      t
                    ]
                    =void 0)
                  }
                  var r=_[
                    t
                  ].node[
                    m
                  ];
                  if(!rt[
                    r
                  ]
                  ||!rt[
                    r
                  ].length||E[
                    t
                  ]
                  >rt[
                    r
                  ]
                  [
                    rt[
                      r
                    ].length-1
                  ]){
                    e=u[
                      t
                    ].node[
                      m
                    ];
                    if(s[
                      e
                    ]
                    --, s[
                      e
                    ]
                    <I[
                      e
                    ].length)return void(v=!0);
                    n=i.nodes.indexOf(u[
                      t
                    ].node);
                    i.nodes.splice(n, 1), u[
                      t
                    ]
                    =void 0
                  }
                }
              })), v)return et.splice(r, 1), "continue";
              for(var M=!0, A=0;
              M&&!v;
              ){
                if(M=!1, n?u[
                  o.id
                ].degree<N[
                  U.id
                ].degree||u[
                  o.id
                ].inDegree<N[
                  U.id
                ].inDegree||u[
                  o.id
                ].outDegree<N[
                  U.id
                ].outDegree:u[
                  o.id
                ].degree<N[
                  U.id
                ].degree){
                  v=!0;
                  break
                }
                if(s[
                  o[
                    m
                  ]
                ]
                <I[
                  o[
                    m
                  ]
                ].length){
                  v=!0;
                  break
                }
                for(var w=i.nodes.length-1;
                w>=0;
                w--){
                  var C=i.nodes[
                    w
                  ], L=u[
                    C.id
                  ].degree, k=u[
                    C.id
                  ].inDegree, P=u[
                    C.id
                  ].outDegree, D=C[
                    m
                  ], O=y(Z, D, N, I), j=O.minPatternNodeLabelDegree, T=O.minPatternNodeLabelInDegree, B=O.minPatternNodeLabelOutDegree;
                  if(n?L<j||k<T||P<B:L<j){
                    if(s[
                      C[
                        m
                      ]
                    ]
                    --, s[
                      C[
                        m
                      ]
                    ]
                    <I[
                      C[
                        m
                      ]
                    ].length){
                      v=!0;
                      break
                    }
                    i.nodes.splice(w, 1), u[
                      C.id
                    ]
                    =void 0, M=!0
                  }
                }
                if(v||!M&&0!==A)break;
                for(var F=(g=c.length)-1;
                F>=0;
                F--){
                  var R=c[
                    F
                  ];
                  if(!u[
                    R.source
                  ]
                  ||!u[
                    R.target
                  ]){
                    c.splice(F, 1);
                    var q=R[
                      b
                    ];
                    if(d[
                      q
                    ]
                    --, u[
                      R.source
                    ]
                    &&(u[
                      R.source
                    ].degree--, u[
                      R.source
                    ].outDegree--), u[
                      R.target
                    ]
                    &&(u[
                      R.target
                    ].degree--, u[
                      R.target
                    ].inDegree--), S[
                      q
                    ]
                    &&d[
                      q
                    ]
                    <S[
                      q
                    ].length){
                      v=!0;
                      break
                    }
                    M=!0
                  }
                }
                A++
              }
              return v||v||i.nodes.length<e.nodes.length||c.length<e.edges.length?(et.splice(r, 1), "continue"):void 0
            }, ot=et.length-1;
            ot>=0;
            ot--){
              if("break"===it(ot))break
            }
            var at=et.length, st=function(t){
              var e=et[
                t
              ], n={
              };
              e.edges.forEach((function(t){
                var e="".concat(t.source, "-").concat(t.target, "-").concat(t.label);
                n[
                  e
                ]
                ?n[
                  e
                ]
                ++:n[
                  e
                ]
                =1
              }));
              for(var r=function(t){
                var e=et[
                  t
                ], r={
                };
                e.edges.forEach((function(t){
                  var e="".concat(t.source, "-").concat(t.target, "-").concat(t.label);
                  r[
                    e
                  ]
                  ?r[
                    e
                  ]
                  ++:r[
                    e
                  ]
                  =1
                }));
                var i=!0;
                Object.keys(r).length!==Object.keys(n).length?i=!1:Object.keys(n).forEach((function(t){
                  r[
                    t
                  ]
                  !==n[
                    t
                  ]
                  &&(i=!1)
                })), i&&et.splice(t, 1)
              }, i=at-1;
              i>t;
              i--)r(i);
              at=et.length
            };
            for(ot=0;
            ot<=at-1;
            ot++)st(ot);
            return et
          }
        }
      };
      e.default=m
    }, 980873:(t, e, n)=>{
      function r(t){
        return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), Object.defineProperty(e, "GADDI", {
        enumerable:!0, get:function(){
          return y.default
        }
      }), Object.defineProperty(e, "breadthFirstSearch", {
        enumerable:!0, get:function(){
          return o.default
        }
      }), Object.defineProperty(e, "connectedComponent", {
        enumerable:!0, get:function(){
          return a.default
        }
      }), Object.defineProperty(e, "depthFirstSearch", {
        enumerable:!0, get:function(){
          return c.default
        }
      }), Object.defineProperty(e, "detectCycle", {
        enumerable:!0, get:function(){
          return u.default
        }
      }), Object.defineProperty(e, "dijkstra", {
        enumerable:!0, get:function(){
          return d.default
        }
      }), Object.defineProperty(e, "findAllPath", {
        enumerable:!0, get:function(){
          return h.findAllPath
        }
      }), Object.defineProperty(e, "findShortestPath", {
        enumerable:!0, get:function(){
          return h.findShortestPath
        }
      }), Object.defineProperty(e, "floydWarshall", {
        enumerable:!0, get:function(){
          return l.default
        }
      }), Object.defineProperty(e, "getAdjMatrix", {
        enumerable:!0, get:function(){
          return i.default
        }
      }), Object.defineProperty(e, "getDegree", {
        enumerable:!0, get:function(){
          return s.default
        }
      }), Object.defineProperty(e, "getInDegree", {
        enumerable:!0, get:function(){
          return s.getInDegree
        }
      }), Object.defineProperty(e, "getNeighbors", {
        enumerable:!0, get:function(){
          return m.getNeighbors
        }
      }), Object.defineProperty(e, "getOutDegree", {
        enumerable:!0, get:function(){
          return s.getOutDegree
        }
      }), Object.defineProperty(e, "labelPropagation", {
        enumerable:!0, get:function(){
          return f.default
        }
      }), Object.defineProperty(e, "louvain", {
        enumerable:!0, get:function(){
          return p.default
        }
      }), Object.defineProperty(e, "minimumSpanningTree", {
        enumerable:!0, get:function(){
          return g.default
        }
      }), Object.defineProperty(e, "pageRank", {
        enumerable:!0, get:function(){
          return v.default
        }
      });
      var i=x(n(710168)), o=x(n(248441)), a=x(n(6277)), s=function(t, e){
        if(!e&&t&&t.__esModule)return t;
        if(null===t||"object"!==r(t)&&"function"!=typeof t)return{
          default:t
        };
        var n=b(e);
        if(n&&n.has(t))return n.get(t);
        var i={
        }, o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
        for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t, a)){
          var s=o?Object.getOwnPropertyDescriptor(t, a):null;
          s&&(s.get||s.set)?Object.defineProperty(i, a, s):i[
            a
          ]
          =t[
            a
          ]
        }
        i.default=t, n&&n.set(t, i);
        return i
      }
      (n(242378)), u=x(n(91042)), c=x(n(850115)), d=x(n(107304)), h=n(338785), l=x(n(591510)), f=x(n(405321)), p=x(n(371678)), g=x(n(365518)), v=x(n(420247)), y=x(n(951147)), m=n(434170);
      function b(t){
        if("function"!=typeof WeakMap)return null;
        var e=new WeakMap, n=new WeakMap;
        return(b=function(t){
          return t?n:e
        })(t)
      }
      function x(t){
        return t&&t.__esModule?t:{
          default:t
        }
      }
    }, 988346:(t, e, n)=>{
      function r(t){
        return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){
          return typeof t
        }
        :function(t){
          return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t
        })(t)
      }
      Object.defineProperty(e, "__esModule", {
        value:!0
      }), e.default=void 0;
      var i=function(t, e){
        if(!e&&t&&t.__esModule)return t;
        if(null===t||"object"!==r(t)&&"function"!=typeof t)return{
          default:t
        };
        var n=a(e);
        if(n&&n.has(t))return n.get(t);
        var i={
        }, o=Object.defineProperty&&Object.getOwnPropertyDescriptor;
        for(var s in t)if("default"!==s&&Object.prototype.hasOwnProperty.call(t, s)){
          var u=o?Object.getOwnPropertyDescriptor(t, s):null;
          u&&(u.get||u.set)?Object.defineProperty(i, s, u):i[
            s
          ]
          =t[
            s
          ]
        }
        i.default=t, n&&n.set(t, i);
        return i
      }
      (n(980873)), o=n(922274);
      function a(t){
        if("function"!=typeof WeakMap)return null;
        var e=new WeakMap, n=new WeakMap;
        return(a=function(t){
          return t?n:e
        })(t)
      }
      var s="undefined"!=typeof self?self:{
      };
      s.onmessage=function(t){
        var e=t.data, n=e._algorithmType, r=e.data;
        if(n)if("function"!=typeof i[
          n
        ])s.postMessage({
          _algorithmType:o.MESSAGE.FAILURE
        });
        else{
          var a=i[
            n
          ].apply(i, r);
          s.postMessage({
            _algorithmType:o.MESSAGE.SUCCESS, data:a
          })
        }
      };
      e.default=null
    }
  }
]);
