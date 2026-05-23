// Source: decompiled/web-modules-acorn/chunk-vendors-3081da64.3c3c347e/60341.js
// Webpack module id: 60341
const __webpack_module_60341 = function (t, e, r) {
  "use strict";
  r.d(e, {
    kH: function () {
      return Ct;
    },
  });
  (r(74916),
    r(77601),
    r(15306),
    r(91058),
    r(96647),
    r(41539),
    r(39714),
    r(21249),
    r(54747),
    r(21703),
    r(47042),
    r(47941),
    r(57658),
    r(82772),
    r(18264),
    r(39575),
    r(82472),
    r(48675),
    r(92990),
    r(18927),
    r(33105),
    r(35035),
    r(74345),
    r(7174),
    r(63408),
    r(14590),
    r(32846),
    r(44731),
    r(77209),
    r(96319),
    r(58867),
    r(37789),
    r(33739),
    r(29368),
    r(14483),
    r(12056),
    r(3462),
    r(30678),
    r(27462),
    r(33824),
    r(12974),
    r(15016),
    r(23767),
    r(8585),
    r(68696),
    r(69070),
    r(54678),
    r(30541),
    r(73210),
    r(44363),
    r(9653),
    r(40561),
    r(38862),
    r(92222),
    r(4723),
    r(23123),
    r(85827),
    r(92087),
    r(65069),
    r(69826),
    r(57327),
    r(36210),
    r(38880),
    r(2707),
    r(33161),
    r(49743),
    r(29135),
    r(87145),
    r(35109),
    r(8255),
    r(65125),
    r(44197),
    r(76495),
    r(55674),
    r(43290),
    r(24603),
    r(28450),
    r(88386),
    r(78783),
    r(33948),
    r(82526),
    r(41817));
  var n = r(3336),
    i = Uint8Array,
    s = Uint16Array,
    a = Uint32Array,
    o = new i([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    h = new i([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    u = new i([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    c = function (t, e) {
      for (var r = new s(31), n = 0; n < 31; ++n) r[n] = e += 1 << t[n - 1];
      var i = new a(r[30]);
      for (n = 1; n < 30; ++n)
        for (var o = r[n]; o < r[n + 1]; ++o) i[o] = ((o - r[n]) << 5) | n;
      return [r, i];
    },
    l = c(o, 2),
    f = l[0],
    d = l[1];
  ((f[28] = 258), (d[258] = 28));
  for (
    var p = c(h, 0), g = p[0], v = p[1], m = new s(32768), y = 0;
    y < 32768;
    ++y
  ) {
    var b = ((43690 & y) >>> 1) | ((21845 & y) << 1);
    ((b = ((52428 & b) >>> 2) | ((13107 & b) << 2)),
      (b = ((61680 & b) >>> 4) | ((3855 & b) << 4)),
      (m[y] = (((65280 & b) >>> 8) | ((255 & b) << 8)) >>> 1));
  }
  var w = function (t, e, r) {
      for (var n = t.length, i = 0, a = new s(e); i < n; ++i) ++a[t[i] - 1];
      var o,
        h = new s(e);
      for (i = 0; i < e; ++i) h[i] = (h[i - 1] + a[i - 1]) << 1;
      if (r) {
        o = new s(1 << e);
        var u = 15 - e;
        for (i = 0; i < n; ++i)
          if (t[i])
            for (
              var c = (i << 4) | t[i],
                l = e - t[i],
                f = h[t[i] - 1]++ << l,
                d = f | ((1 << l) - 1);
              f <= d;
              ++f
            )
              o[m[f] >>> u] = c;
      } else
        for (o = new s(n), i = 0; i < n; ++i)
          o[i] = m[h[t[i] - 1]++] >>> (15 - t[i]);
      return o;
    },
    x = new i(288);
  for (y = 0; y < 144; ++y) x[y] = 8;
  for (y = 144; y < 256; ++y) x[y] = 9;
  for (y = 256; y < 280; ++y) x[y] = 7;
  for (y = 280; y < 288; ++y) x[y] = 8;
  var S = new i(32);
  for (y = 0; y < 32; ++y) S[y] = 5;
  var A = w(x, 9, 0),
    E = w(x, 9, 1),
    F = w(S, 5, 0),
    N = w(S, 5, 1),
    P = function (t) {
      for (var e = t[0], r = 1; r < t.length; ++r) t[r] > e && (e = t[r]);
      return e;
    },
    I = function (t, e, r) {
      var n = (e / 8) >> 0;
      return ((t[n] | (t[n + 1] << 8)) >>> (7 & e)) & r;
    },
    L = function (t, e) {
      var r = (e / 8) >> 0;
      return (t[r] | (t[r + 1] << 8) | (t[r + 2] << 16)) >>> (7 & e);
    },
    C = function (t) {
      return ((t / 8) >> 0) + (7 & t && 1);
    },
    D = function (t, e, r) {
      ((null == e || e < 0) && (e = 0),
        (null == r || r > t.length) && (r = t.length));
      var n = new (t instanceof s ? s : t instanceof a ? a : i)(r - e);
      return (n.set(t.subarray(e, r)), n);
    },
    _ = function (t, e, r) {
      var n = t.length,
        s = !e || r,
        a = !r || r.i;
      (r || (r = {}), e || (e = new i(3 * n)));
      var c = function (t) {
          var r = e.length;
          if (t > r) {
            var n = new i(Math.max(2 * r, t));
            (n.set(e), (e = n));
          }
        },
        l = r.f || 0,
        d = r.p || 0,
        p = r.b || 0,
        v = r.l,
        m = r.d,
        y = r.m,
        b = r.n,
        x = 8 * n;
      do {
        if (!v) {
          r.f = l = I(t, d, 1);
          var S = I(t, d + 1, 3);
          if (((d += 3), !S)) {
            var A = C(d) + 4,
              F = t[A - 4] | (t[A - 3] << 8),
              _ = A + F;
            if (_ > n) {
              if (a) throw "unexpected EOF";
              break;
            }
            (s && c(p + F),
              e.set(t.subarray(A, _), p),
              (r.b = p += F),
              (r.p = d = 8 * _));
            continue;
          }
          if (1 == S) ((v = E), (m = N), (y = 9), (b = 5));
          else {
            if (2 != S) throw "invalid block type";
            var R = I(t, d, 31) + 257,
              B = I(t, d + 10, 15) + 4,
              T = R + I(t, d + 5, 31) + 1;
            d += 14;
            for (var j = new i(T), k = new i(19), O = 0; O < B; ++O)
              k[u[O]] = I(t, d + 3 * O, 7);
            d += 3 * B;
            var M = P(k),
              q = (1 << M) - 1;
            if (!a && d + T * (M + 7) > x) break;
            var H = w(k, M, 1);
            for (O = 0; O < T; ) {
              var V = H[I(t, d, q)];
              d += 15 & V;
              A = V >>> 4;
              if (A < 16) j[O++] = A;
              else {
                var U = 0,
                  K = 0;
                16 == A
                  ? ((K = 3 + I(t, d, 3)), (d += 2), (U = j[O - 1]))
                  : 17 == A
                    ? ((K = 3 + I(t, d, 7)), (d += 3))
                    : 18 == A && ((K = 11 + I(t, d, 127)), (d += 7));
                while (K--) j[O++] = U;
              }
            }
            var z = j.subarray(0, R),
              W = j.subarray(R);
            ((y = P(z)), (b = P(W)), (v = w(z, y, 1)), (m = w(W, b, 1)));
          }
          if (d > x) throw "unexpected EOF";
        }
        s && c(p + 131072);
        var G = (1 << y) - 1,
          J = (1 << b) - 1,
          X = y + b + 18;
        while (a || d + X < x) {
          U = v[L(t, d) & G];
          var Y = U >>> 4;
          if (((d += 15 & U), d > x)) throw "unexpected EOF";
          if (!U) throw "invalid length/literal";
          if (Y < 256) e[p++] = Y;
          else {
            if (256 == Y) {
              v = null;
              break;
            }
            var $ = Y - 254;
            if (Y > 264) {
              O = Y - 257;
              var Z = o[O];
              (($ = I(t, d, (1 << Z) - 1) + f[O]), (d += Z));
            }
            var Q = m[L(t, d) & J],
              tt = Q >>> 4;
            if (!Q) throw "invalid distance";
            d += 15 & Q;
            W = g[tt];
            if (tt > 3) {
              Z = h[tt];
              ((W += L(t, d) & ((1 << Z) - 1)), (d += Z));
            }
            if (d > x) throw "unexpected EOF";
            s && c(p + 131072);
            for (var et = p + $; p < et; p += 4)
              ((e[p] = e[p - W]),
                (e[p + 1] = e[p + 1 - W]),
                (e[p + 2] = e[p + 2 - W]),
                (e[p + 3] = e[p + 3 - W]));
            p = et;
          }
        }
        ((r.l = v),
          (r.p = d),
          (r.b = p),
          v && ((l = 1), (r.m = y), (r.d = m), (r.n = b)));
      } while (!l);
      return p == e.length ? e : D(e, 0, p);
    },
    R = function (t, e, r) {
      r <<= 7 & e;
      var n = (e / 8) >> 0;
      ((t[n] |= r), (t[n + 1] |= r >>> 8));
    },
    B = function (t, e, r) {
      r <<= 7 & e;
      var n = (e / 8) >> 0;
      ((t[n] |= r), (t[n + 1] |= r >>> 8), (t[n + 2] |= r >>> 16));
    },
    T = function (t, e) {
      for (var r = [], n = 0; n < t.length; ++n)
        t[n] && r.push({ s: n, f: t[n] });
      var a = r.length,
        o = r.slice();
      if (!a) return [new i(0), 0];
      if (1 == a) {
        var h = new i(r[0].s + 1);
        return ((h[r[0].s] = 1), [h, 1]);
      }
      (r.sort(function (t, e) {
        return t.f - e.f;
      }),
        r.push({ s: -1, f: 25001 }));
      var u = r[0],
        c = r[1],
        l = 0,
        f = 1,
        d = 2;
      r[0] = { s: -1, f: u.f + c.f, l: u, r: c };
      while (f != a - 1)
        ((u = r[r[l].f < r[d].f ? l++ : d++]),
          (c = r[l != f && r[l].f < r[d].f ? l++ : d++]),
          (r[f++] = { s: -1, f: u.f + c.f, l: u, r: c }));
      var p = o[0].s;
      for (n = 1; n < a; ++n) o[n].s > p && (p = o[n].s);
      var g = new s(p + 1),
        v = j(r[f - 1], g, 0);
      if (v > e) {
        n = 0;
        var m = 0,
          y = v - e,
          b = 1 << y;
        for (
          o.sort(function (t, e) {
            return g[e.s] - g[t.s] || t.f - e.f;
          });
          n < a;
          ++n
        ) {
          var w = o[n].s;
          if (!(g[w] > e)) break;
          ((m += b - (1 << (v - g[w]))), (g[w] = e));
        }
        m >>>= y;
        while (m > 0) {
          var x = o[n].s;
          g[x] < e ? (m -= 1 << (e - g[x]++ - 1)) : ++n;
        }
        for (; n >= 0 && m; --n) {
          var S = o[n].s;
          g[S] == e && (--g[S], ++m);
        }
        v = e;
      }
      return [new i(g), v];
    },
    j = function (t, e, r) {
      return -1 == t.s
        ? Math.max(j(t.l, e, r + 1), j(t.r, e, r + 1))
        : (e[t.s] = r);
    },
    k = function (t) {
      var e = t.length;
      while (e && !t[--e]);
      for (
        var r = new s(++e),
          n = 0,
          i = t[0],
          a = 1,
          o = function (t) {
            r[n++] = t;
          },
          h = 1;
        h <= e;
        ++h
      )
        if (t[h] == i && h != e) ++a;
        else {
          if (!i && a > 2) {
            for (; a > 138; a -= 138) o(32754);
            a > 2 &&
              (o(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305),
              (a = 0));
          } else if (a > 3) {
            for (o(i), --a; a > 6; a -= 6) o(8304);
            a > 2 && (o(((a - 3) << 5) | 8208), (a = 0));
          }
          while (a--) o(i);
          ((a = 1), (i = t[h]));
        }
      return [r.subarray(0, n), e];
    },
    O = function (t, e) {
      for (var r = 0, n = 0; n < e.length; ++n) r += t[n] * e[n];
      return r;
    },
    M = function (t, e, r) {
      var n = r.length,
        i = C(e + 2);
      ((t[i] = 255 & n),
        (t[i + 1] = n >>> 8),
        (t[i + 2] = 255 ^ t[i]),
        (t[i + 3] = 255 ^ t[i + 1]));
      for (var s = 0; s < n; ++s) t[i + s + 4] = r[s];
      return 8 * (i + 4 + n);
    },
    q = function (t, e, r, n, i, a, c, l, f, d, p) {
      (R(e, p++, r), ++i[256]);
      for (
        var g = T(i, 15),
          v = g[0],
          m = g[1],
          y = T(a, 15),
          b = y[0],
          E = y[1],
          N = k(v),
          P = N[0],
          I = N[1],
          L = k(b),
          C = L[0],
          D = L[1],
          _ = new s(19),
          j = 0;
        j < P.length;
        ++j
      )
        _[31 & P[j]]++;
      for (j = 0; j < C.length; ++j) _[31 & C[j]]++;
      for (
        var q = T(_, 7), H = q[0], V = q[1], U = 19;
        U > 4 && !H[u[U - 1]];
        --U
      );
      var K,
        z,
        W,
        G,
        J = (d + 5) << 3,
        X = O(i, x) + O(a, S) + c,
        Y =
          O(i, v) +
          O(a, b) +
          c +
          14 +
          3 * U +
          O(_, H) +
          (2 * _[16] + 3 * _[17] + 7 * _[18]);
      if (J <= X && J <= Y) return M(e, p, t.subarray(f, f + d));
      if ((R(e, p, 1 + (Y < X)), (p += 2), Y < X)) {
        ((K = w(v, m, 0)), (z = v), (W = w(b, E, 0)), (G = b));
        var $ = w(H, V, 0);
        (R(e, p, I - 257), R(e, p + 5, D - 1), R(e, p + 10, U - 4), (p += 14));
        for (j = 0; j < U; ++j) R(e, p + 3 * j, H[u[j]]);
        p += 3 * U;
        for (var Z = [P, C], Q = 0; Q < 2; ++Q) {
          var tt = Z[Q];
          for (j = 0; j < tt.length; ++j) {
            var et = 31 & tt[j];
            (R(e, p, $[et]),
              (p += H[et]),
              et > 15 && (R(e, p, (tt[j] >>> 5) & 127), (p += tt[j] >>> 12)));
          }
        }
      } else ((K = A), (z = x), (W = F), (G = S));
      for (j = 0; j < l; ++j)
        if (n[j] > 255) {
          et = (n[j] >>> 18) & 31;
          (B(e, p, K[et + 257]),
            (p += z[et + 257]),
            et > 7 && (R(e, p, (n[j] >>> 23) & 31), (p += o[et])));
          var rt = 31 & n[j];
          (B(e, p, W[rt]),
            (p += G[rt]),
            rt > 3 && (B(e, p, (n[j] >>> 5) & 8191), (p += h[rt])));
        } else (B(e, p, K[n[j]]), (p += z[n[j]]));
      return (B(e, p, K[256]), p + z[256]);
    },
    H = new a([
      65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
    ]),
    V = new i(0),
    U = function (t, e, r, n, u, c) {
      var l = t.length,
        f = new i(n + l + 5 * (1 + Math.floor(l / 7e3)) + u),
        p = f.subarray(n, f.length - u),
        g = 0;
      if (!e || l < 8)
        for (var m = 0; m <= l; m += 65535) {
          var y = m + 65535;
          y < l
            ? (g = M(p, g, t.subarray(m, y)))
            : ((p[m] = c), (g = M(p, g, t.subarray(m, l))));
        }
      else {
        for (
          var b = H[e - 1],
            w = b >>> 13,
            x = 8191 & b,
            S = (1 << r) - 1,
            A = new s(32768),
            E = new s(S + 1),
            F = Math.ceil(r / 3),
            N = 2 * F,
            P = function (e) {
              return (t[e] ^ (t[e + 1] << F) ^ (t[e + 2] << N)) & S;
            },
            I = new a(25e3),
            L = new s(288),
            _ = new s(32),
            R = 0,
            B = 0,
            T = ((m = 0), 0),
            j = 0,
            k = 0;
          m < l;
          ++m
        ) {
          var O = P(m),
            U = 32767 & m,
            K = E[O];
          if (((A[U] = K), (E[O] = U), j <= m)) {
            var z = l - m;
            if ((R > 7e3 || T > 24576) && z > 423) {
              ((g = q(t, p, 0, I, L, _, B, T, k, m - k, g)),
                (T = R = B = 0),
                (k = m));
              for (var W = 0; W < 286; ++W) L[W] = 0;
              for (W = 0; W < 30; ++W) _[W] = 0;
            }
            var G = 2,
              J = 0,
              X = x,
              Y = (U - K) & 32767;
            if (z > 2 && O == P(m - Y)) {
              var $ = Math.min(w, z) - 1,
                Z = Math.min(32767, m),
                Q = Math.min(258, z);
              while (Y <= Z && --X && U != K) {
                if (t[m + G] == t[m + G - Y]) {
                  for (var tt = 0; tt < Q && t[m + tt] == t[m + tt - Y]; ++tt);
                  if (tt > G) {
                    if (((G = tt), (J = Y), tt > $)) break;
                    var et = Math.min(Y, tt - 2),
                      rt = 0;
                    for (W = 0; W < et; ++W) {
                      var nt = (m - Y + W + 32768) & 32767,
                        it = A[nt],
                        st = (nt - it + 32768) & 32767;
                      st > rt && ((rt = st), (K = nt));
                    }
                  }
                }
                ((U = K), (K = A[U]), (Y += (U - K + 32768) & 32767));
              }
            }
            if (J) {
              I[T++] = 268435456 | (d[G] << 18) | v[J];
              var at = 31 & d[G],
                ot = 31 & v[J];
              ((B += o[at] + h[ot]), ++L[257 + at], ++_[ot], (j = m + G), ++R);
            } else ((I[T++] = t[m]), ++L[t[m]]);
          }
        }
        ((g = q(t, p, c, I, L, _, B, T, k, m - k, g)), c || (g = M(p, g, V)));
      }
      return D(f, 0, n + C(g) + u);
    },
    K = function () {
      var t = 1,
        e = 0;
      return {
        p: function (r) {
          for (var n = t, i = e, s = r.length, a = 0; a != s; ) {
            for (var o = Math.min(a + 5552, s); a < o; ++a)
              ((n += r[a]), (i += n));
            ((n %= 65521), (i %= 65521));
          }
          ((t = n), (e = i));
        },
        d: function () {
          return (
            (((t >>> 8) << 16) | ((255 & e) << 8) | (e >>> 8)) +
            2 * ((255 & t) << 23)
          );
        },
      };
    },
    z = function (t, e, r, n, i) {
      return U(
        t,
        null == e.level ? 6 : e.level,
        null == e.mem
          ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length))))
          : 12 + e.mem,
        r,
        n,
        !i,
      );
    },
    W = function (t, e, r) {
      for (; r; ++e) ((t[e] = r), (r >>>= 8));
    },
    G = function (t, e) {
      var r = e.level,
        n = 0 == r ? 0 : r < 6 ? 1 : 9 == r ? 3 : 2;
      ((t[0] = 120), (t[1] = (n << 6) | (n ? 32 - 2 * n : 1)));
    },
    J = function (t) {
      if (8 != (15 & t[0]) || t[0] >>> 4 > 7 || ((t[0] << 8) | t[1]) % 31)
        throw "invalid zlib data";
      if (32 & t[1])
        throw "invalid zlib data: preset dictionaries not supported";
    };
  function X(t, e) {
    void 0 === e && (e = {});
    var r = K();
    r.p(t);
    var n = z(t, e, 2, 4);
    return (G(n, e), W(n, n.length - 4, r.d()), n);
  }
  function Y(t, e) {
    return _((J(t), t.subarray(2, -4)), e);
  }
  /** @license
   *
   * jsPDF - PDF Document creation from JavaScript
   * Version 2.5.1 Built on 2022-01-28T15:37:57.791Z
   *                      CommitID 00000000
   *
   * Copyright (c) 2010-2021 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
   *               2015-2021 yWorks GmbH, http://www.yworks.com
   *               2015-2021 Lukas Holländer <lukas.hollaender@yworks.com>, https://github.com/HackbrettXXX
   *               2016-2018 Aras Abbasi <aras.abbasi@gmail.com>
   *               2010 Aaron Spike, https://github.com/acspike
   *               2012 Willow Systems Corporation, https://github.com/willowsystems
   *               2012 Pablo Hess, https://github.com/pablohess
   *               2012 Florian Jenett, https://github.com/fjenett
   *               2013 Warren Weckesser, https://github.com/warrenweckesser
   *               2013 Youssef Beddad, https://github.com/lifof
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2013 Stefan Slonevskiy, https://github.com/stefslon
   *               2013 Jeremy Morel, https://github.com/jmorel
   *               2013 Christoph Hartmann, https://github.com/chris-rock
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Makes, https://github.com/dollaruw
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Steven Spungin, https://github.com/Flamenco
   *               2014 Kenneth Glassey, https://github.com/Gavvers
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   * Contributor(s):
   *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
   *    kim3er, mfo, alnorth, Flamenco
   */
  var $ = (function () {
    return "undefined" != typeof window
      ? window
      : "undefined" != typeof r.g
        ? r.g
        : "undefined" != typeof self
          ? self
          : this;
  })();
  function Z() {
    $.console &&
      "function" == typeof $.console.log &&
      $.console.log.apply($.console, arguments);
  }
  var Q = {
    log: Z,
    warn: function (t) {
      $.console &&
        ("function" == typeof $.console.warn
          ? $.console.warn.apply($.console, arguments)
          : Z.call(null, arguments));
    },
    error: function (t) {
      $.console &&
        ("function" == typeof $.console.error
          ? $.console.error.apply($.console, arguments)
          : Z(t));
    },
  };
  function tt(t, e, r) {
    var n = new XMLHttpRequest();
    (n.open("GET", t),
      (n.responseType = "blob"),
      (n.onload = function () {
        st(n.response, e, r);
      }),
      (n.onerror = function () {
        Q.error("could not download file");
      }),
      n.send());
  }
  function et(t) {
    var e = new XMLHttpRequest();
    e.open("HEAD", t, !1);
    try {
      e.send();
    } catch (t) {}
    return e.status >= 200 && e.status <= 299;
  }
  function rt(t) {
    try {
      t.dispatchEvent(new MouseEvent("click"));
    } catch (r) {
      var e = document.createEvent("MouseEvents");
      (e.initMouseEvent(
        "click",
        !0,
        !0,
        window,
        0,
        0,
        0,
        80,
        20,
        !1,
        !1,
        !1,
        !1,
        0,
        null,
      ),
        t.dispatchEvent(e));
    }
  }
  var nt,
    it,
    st =
      $.saveAs ||
      ("object" !==
        ("undefined" == typeof window ? "undefined" : (0, n.Z)(window)) ||
      window !== $
        ? function () {}
        : "undefined" != typeof HTMLAnchorElement &&
            "download" in HTMLAnchorElement.prototype
          ? function (t, e, r) {
              var n = $.URL || $.webkitURL,
                i = document.createElement("a");
              ((e = e || t.name || "download"),
                (i.download = e),
                (i.rel = "noopener"),
                "string" == typeof t
                  ? ((i.href = t),
                    i.origin !== location.origin
                      ? et(i.href)
                        ? tt(t, e, r)
                        : rt(i, (i.target = "_blank"))
                      : rt(i))
                  : ((i.href = n.createObjectURL(t)),
                    setTimeout(function () {
                      n.revokeObjectURL(i.href);
                    }, 4e4),
                    setTimeout(function () {
                      rt(i);
                    }, 0)));
            }
          : "msSaveOrOpenBlob" in navigator
            ? function (t, e, r) {
                if (((e = e || t.name || "download"), "string" == typeof t))
                  if (et(t)) tt(t, e, r);
                  else {
                    var i = document.createElement("a");
                    ((i.href = t),
                      (i.target = "_blank"),
                      setTimeout(function () {
                        rt(i);
                      }));
                  }
                else
                  navigator.msSaveOrOpenBlob(
                    (function (t, e) {
                      return (
                        void 0 === e
                          ? (e = { autoBom: !1 })
                          : "object" !== (0, n.Z)(e) &&
                            (Q.warn(
                              "Deprecated: Expected third argument to be a object",
                            ),
                            (e = { autoBom: !e })),
                        e.autoBom &&
                        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                          t.type,
                        )
                          ? new Blob([String.fromCharCode(65279), t], {
                              type: t.type,
                            })
                          : t
                      );
                    })(t, r),
                    e,
                  );
              }
            : function (t, e, r, i) {
                if (
                  ((i = i || open("", "_blank")) &&
                    (i.document.title = i.document.body.innerText =
                      "downloading..."),
                  "string" == typeof t)
                )
                  return tt(t, e, r);
                var s = "application/octet-stream" === t.type,
                  a = /constructor/i.test($.HTMLElement) || $.safari,
                  o = /CriOS\/[\d]+/.test(navigator.userAgent);
                if (
                  (o || (s && a)) &&
                  "object" ===
                    ("undefined" == typeof FileReader
                      ? "undefined"
                      : (0, n.Z)(FileReader))
                ) {
                  var h = new FileReader();
                  ((h.onloadend = function () {
                    var t = h.result;
                    ((t = o
                      ? t
                      : t.replace(/^data:[^;]*;/, "data:attachment/file;")),
                      i ? (i.location.href = t) : (location = t),
                      (i = null));
                  }),
                    h.readAsDataURL(t));
                } else {
                  var u = $.URL || $.webkitURL,
                    c = u.createObjectURL(t);
                  (i ? (i.location = c) : (location.href = c),
                    (i = null),
                    setTimeout(function () {
                      u.revokeObjectURL(c);
                    }, 4e4));
                }
              });
  /**
   * A class to parse color values
   * @author Stoyan Stefanov <sstoo@gmail.com>
   * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
   * @license Use it if you like it
   */ function at(t) {
    var e;
    ((t = t || ""),
      (this.ok = !1),
      "#" == t.charAt(0) && (t = t.substr(1, 6)),
      (t =
        {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32",
        }[(t = (t = t.replace(/ /g, "")).toLowerCase())] || t));
    for (
      var r = [
          {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function (t) {
              return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
            },
          },
          {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ["#00ff00", "336699"],
            process: function (t) {
              return [
                parseInt(t[1], 16),
                parseInt(t[2], 16),
                parseInt(t[3], 16),
              ];
            },
          },
          {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ["#fb0", "f0f"],
            process: function (t) {
              return [
                parseInt(t[1] + t[1], 16),
                parseInt(t[2] + t[2], 16),
                parseInt(t[3] + t[3], 16),
              ];
            },
          },
        ],
        n = 0;
      n < r.length;
      n++
    ) {
      var i = r[n].re,
        s = r[n].process,
        a = i.exec(t);
      a &&
        ((e = s(a)),
        (this.r = e[0]),
        (this.g = e[1]),
        (this.b = e[2]),
        (this.ok = !0));
    }
    ((this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
      (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
      (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
      (this.toRGB = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
      }),
      (this.toHex = function () {
        var t = this.r.toString(16),
          e = this.g.toString(16),
          r = this.b.toString(16);
        return (
          1 == t.length && (t = "0" + t),
          1 == e.length && (e = "0" + e),
          1 == r.length && (r = "0" + r),
          "#" + t + e + r
        );
      }));
  }
  /**
   * @license
   * Joseph Myers does not specify a particular license for his work.
   *
   * Author: Joseph Myers
   * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
   *
   * Modified by: Owen Leong
   */ function ot(t, e) {
    var r = t[0],
      n = t[1],
      i = t[2],
      s = t[3];
    ((r = ut(r, n, i, s, e[0], 7, -680876936)),
      (s = ut(s, r, n, i, e[1], 12, -389564586)),
      (i = ut(i, s, r, n, e[2], 17, 606105819)),
      (n = ut(n, i, s, r, e[3], 22, -1044525330)),
      (r = ut(r, n, i, s, e[4], 7, -176418897)),
      (s = ut(s, r, n, i, e[5], 12, 1200080426)),
      (i = ut(i, s, r, n, e[6], 17, -1473231341)),
      (n = ut(n, i, s, r, e[7], 22, -45705983)),
      (r = ut(r, n, i, s, e[8], 7, 1770035416)),
      (s = ut(s, r, n, i, e[9], 12, -1958414417)),
      (i = ut(i, s, r, n, e[10], 17, -42063)),
      (n = ut(n, i, s, r, e[11], 22, -1990404162)),
      (r = ut(r, n, i, s, e[12], 7, 1804603682)),
      (s = ut(s, r, n, i, e[13], 12, -40341101)),
      (i = ut(i, s, r, n, e[14], 17, -1502002290)),
      (r = ct(
        r,
        (n = ut(n, i, s, r, e[15], 22, 1236535329)),
        i,
        s,
        e[1],
        5,
        -165796510,
      )),
      (s = ct(s, r, n, i, e[6], 9, -1069501632)),
      (i = ct(i, s, r, n, e[11], 14, 643717713)),
      (n = ct(n, i, s, r, e[0], 20, -373897302)),
      (r = ct(r, n, i, s, e[5], 5, -701558691)),
      (s = ct(s, r, n, i, e[10], 9, 38016083)),
      (i = ct(i, s, r, n, e[15], 14, -660478335)),
      (n = ct(n, i, s, r, e[4], 20, -405537848)),
      (r = ct(r, n, i, s, e[9], 5, 568446438)),
      (s = ct(s, r, n, i, e[14], 9, -1019803690)),
      (i = ct(i, s, r, n, e[3], 14, -187363961)),
      (n = ct(n, i, s, r, e[8], 20, 1163531501)),
      (r = ct(r, n, i, s, e[13], 5, -1444681467)),
      (s = ct(s, r, n, i, e[2], 9, -51403784)),
      (i = ct(i, s, r, n, e[7], 14, 1735328473)),
      (r = lt(
        r,
        (n = ct(n, i, s, r, e[12], 20, -1926607734)),
        i,
        s,
        e[5],
        4,
        -378558,
      )),
      (s = lt(s, r, n, i, e[8], 11, -2022574463)),
      (i = lt(i, s, r, n, e[11], 16, 1839030562)),
      (n = lt(n, i, s, r, e[14], 23, -35309556)),
      (r = lt(r, n, i, s, e[1], 4, -1530992060)),
      (s = lt(s, r, n, i, e[4], 11, 1272893353)),
      (i = lt(i, s, r, n, e[7], 16, -155497632)),
      (n = lt(n, i, s, r, e[10], 23, -1094730640)),
      (r = lt(r, n, i, s, e[13], 4, 681279174)),
      (s = lt(s, r, n, i, e[0], 11, -358537222)),
      (i = lt(i, s, r, n, e[3], 16, -722521979)),
      (n = lt(n, i, s, r, e[6], 23, 76029189)),
      (r = lt(r, n, i, s, e[9], 4, -640364487)),
      (s = lt(s, r, n, i, e[12], 11, -421815835)),
      (i = lt(i, s, r, n, e[15], 16, 530742520)),
      (r = ft(
        r,
        (n = lt(n, i, s, r, e[2], 23, -995338651)),
        i,
        s,
        e[0],
        6,
        -198630844,
      )),
      (s = ft(s, r, n, i, e[7], 10, 1126891415)),
      (i = ft(i, s, r, n, e[14], 15, -1416354905)),
      (n = ft(n, i, s, r, e[5], 21, -57434055)),
      (r = ft(r, n, i, s, e[12], 6, 1700485571)),
      (s = ft(s, r, n, i, e[3], 10, -1894986606)),
      (i = ft(i, s, r, n, e[10], 15, -1051523)),
      (n = ft(n, i, s, r, e[1], 21, -2054922799)),
      (r = ft(r, n, i, s, e[8], 6, 1873313359)),
      (s = ft(s, r, n, i, e[15], 10, -30611744)),
      (i = ft(i, s, r, n, e[6], 15, -1560198380)),
      (n = ft(n, i, s, r, e[13], 21, 1309151649)),
      (r = ft(r, n, i, s, e[4], 6, -145523070)),
      (s = ft(s, r, n, i, e[11], 10, -1120210379)),
      (i = ft(i, s, r, n, e[2], 15, 718787259)),
      (n = ft(n, i, s, r, e[9], 21, -343485551)),
      (t[0] = wt(r, t[0])),
      (t[1] = wt(n, t[1])),
      (t[2] = wt(i, t[2])),
      (t[3] = wt(s, t[3])));
  }
  function ht(t, e, r, n, i, s) {
    return ((e = wt(wt(e, t), wt(n, s))), wt((e << i) | (e >>> (32 - i)), r));
  }
  function ut(t, e, r, n, i, s, a) {
    return ht((e & r) | (~e & n), t, e, i, s, a);
  }
  function ct(t, e, r, n, i, s, a) {
    return ht((e & n) | (r & ~n), t, e, i, s, a);
  }
  function lt(t, e, r, n, i, s, a) {
    return ht(e ^ r ^ n, t, e, i, s, a);
  }
  function ft(t, e, r, n, i, s, a) {
    return ht(r ^ (e | ~n), t, e, i, s, a);
  }
  function dt(t) {
    var e,
      r = t.length,
      n = [1732584193, -271733879, -1732584194, 271733878];
    for (e = 64; e <= t.length; e += 64) ot(n, pt(t.substring(e - 64, e)));
    t = t.substring(e - 64);
    var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (e = 0; e < t.length; e++)
      i[e >> 2] |= t.charCodeAt(e) << ((e % 4) << 3);
    if (((i[e >> 2] |= 128 << ((e % 4) << 3)), e > 55))
      for (ot(n, i), e = 0; e < 16; e++) i[e] = 0;
    return ((i[14] = 8 * r), ot(n, i), n);
  }
  function pt(t) {
    var e,
      r = [];
    for (e = 0; e < 64; e += 4)
      r[e >> 2] =
        t.charCodeAt(e) +
        (t.charCodeAt(e + 1) << 8) +
        (t.charCodeAt(e + 2) << 16) +
        (t.charCodeAt(e + 3) << 24);
    return r;
  }
  ((nt = $.atob.bind($)), (it = $.btoa.bind($)));
  var gt = "0123456789abcdef".split("");
  function vt(t) {
    for (var e = "", r = 0; r < 4; r++)
      e += gt[(t >> (8 * r + 4)) & 15] + gt[(t >> (8 * r)) & 15];
    return e;
  }
  function mt(t) {
    return String.fromCharCode(
      (255 & t) >> 0,
      (65280 & t) >> 8,
      (16711680 & t) >> 16,
      (4278190080 & t) >> 24,
    );
  }
  function yt(t) {
    return dt(t).map(mt).join("");
  }
  var bt =
    "5d41402abc4b2a76b9719d911017c592" !=
    (function (t) {
      for (var e = 0; e < t.length; e++) t[e] = vt(t[e]);
      return t.join("");
    })(dt("hello"));
  function wt(t, e) {
    if (bt) {
      var r = (65535 & t) + (65535 & e);
      return (((t >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
    }
    return (t + e) & 4294967295;
  }
  /**
   * @license
   * FPDF is released under a permissive license: there is no usage restriction.
   * You may embed it freely in your application (commercial or not), with or
   * without modifications.
   *
   * Reference: http://www.fpdf.org/en/script/script37.php
   */ function xt(t, e) {
    var r, n, i, s;
    if (t !== r) {
      for (
        var a =
            ((i = t),
            (s = 1 + ((256 / t.length) >> 0)),
            new Array(s + 1).join(i)),
          o = [],
          h = 0;
        h < 256;
        h++
      )
        o[h] = h;
      var u = 0;
      for (h = 0; h < 256; h++) {
        var c = o[h];
        ((u = (u + c + a.charCodeAt(h)) % 256), (o[h] = o[u]), (o[u] = c));
      }
      ((r = t), (n = o));
    } else o = n;
    var l = e.length,
      f = 0,
      d = 0,
      p = "";
    for (h = 0; h < l; h++)
      ((d = (d + (c = o[(f = (f + 1) % 256)])) % 256),
        (o[f] = o[d]),
        (o[d] = c),
        (a = o[(o[f] + o[d]) % 256]),
        (p += String.fromCharCode(e.charCodeAt(h) ^ a)));
    return p;
  }
  /**
   * @license
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   * Author: Owen Leong (@owenl131)
   * Date: 15 Oct 2020
   * References:
   * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
   * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
   * http://www.fpdf.org/en/script/script37.php
   */ var St = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
  function At(t, e, r, n) {
    ((this.v = 1), (this.r = 2));
    var i = 192;
    (t.forEach(function (t) {
      if (void 0 !== St.perm) throw new Error("Invalid permission: " + t);
      i += St[t];
    }),
      (this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz"));
    var s = (e + this.padding).substr(0, 32),
      a = (r + this.padding).substr(0, 32);
    ((this.O = this.processOwnerPassword(s, a)),
      (this.P = -(1 + (255 ^ i))),
      (this.encryptionKey = yt(
        s + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n),
      ).substr(0, 5)),
      (this.U = xt(this.encryptionKey, this.padding)));
  }
  function Et(t) {
    if (/[^\u0000-\u00ff]/.test(t))
      throw new Error(
        "Invalid PDF Name Object: " + t + ", Only accept ASCII characters.",
      );
    for (var e = "", r = t.length, n = 0; n < r; n++) {
      var i = t.charCodeAt(n);
      e +=
        i < 33 ||
        35 === i ||
        37 === i ||
        40 === i ||
        41 === i ||
        47 === i ||
        60 === i ||
        62 === i ||
        91 === i ||
        93 === i ||
        123 === i ||
        125 === i ||
        i > 126
          ? "#" + ("0" + i.toString(16)).slice(-2)
          : t[n];
    }
    return e;
  }
  function Ft(t) {
    if ("object" !== (0, n.Z)(t))
      throw new Error(
        "Invalid Context passed to initialize PubSub (jsPDF-module)",
      );
    var e = {};
    ((this.subscribe = function (t, r, n) {
      if (
        ((n = n || !1),
        "string" != typeof t || "function" != typeof r || "boolean" != typeof n)
      )
        throw new Error(
          "Invalid arguments passed to PubSub.subscribe (jsPDF-module)",
        );
      e.hasOwnProperty(t) || (e[t] = {});
      var i = Math.random().toString(35);
      return ((e[t][i] = [r, !!n]), i);
    }),
      (this.unsubscribe = function (t) {
        for (var r in e)
          if (e[r][t])
            return (
              delete e[r][t],
              0 === Object.keys(e[r]).length && delete e[r],
              !0
            );
        return !1;
      }),
      (this.publish = function (r) {
        if (e.hasOwnProperty(r)) {
          var n = Array.prototype.slice.call(arguments, 1),
            i = [];
          for (var s in e[r]) {
            var a = e[r][s];
            try {
              a[0].apply(t, n);
            } catch (r) {
              $.console && Q.error("jsPDF PubSub Error", r.message, r);
            }
            a[1] && i.push(s);
          }
          i.length && i.forEach(this.unsubscribe);
        }
      }),
      (this.getTopics = function () {
        return e;
      }));
  }
  function Nt(t) {
    if (!(this instanceof Nt)) return new Nt(t);
    var e = "opacity,stroke-opacity".split(",");
    for (var r in t)
      t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
    ((this.id = ""), (this.objectNumber = -1));
  }
  function Pt(t, e) {
    ((this.gState = t),
      (this.matrix = e),
      (this.id = ""),
      (this.objectNumber = -1));
  }
  function It(t, e, r, n, i) {
    if (!(this instanceof It)) return new It(t, e, r, n, i);
    ((this.type = "axial" === t ? 2 : 3),
      (this.coords = e),
      (this.colors = r),
      Pt.call(this, n, i));
  }
  function Lt(t, e, r, n, i) {
    if (!(this instanceof Lt)) return new Lt(t, e, r, n, i);
    ((this.boundingBox = t),
      (this.xStep = e),
      (this.yStep = r),
      (this.stream = ""),
      (this.cloneIndex = 0),
      Pt.call(this, n, i));
  }
  function Ct(t) {
    var e,
      r = "string" == typeof arguments[0] ? arguments[0] : "p",
      i = arguments[1],
      s = arguments[2],
      a = arguments[3],
      o = [],
      h = 1,
      u = 16,
      c = "S",
      l = null;
    ("object" === (0, n.Z)((t = t || {})) &&
      ((r = t.orientation),
      (i = t.unit || i),
      (s = t.format || s),
      (a = t.compress || t.compressPdf || a),
      null !== (l = t.encryption || null) &&
        ((l.userPassword = l.userPassword || ""),
        (l.ownerPassword = l.ownerPassword || ""),
        (l.userPermissions = l.userPermissions || [])),
      (h = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1),
      void 0 !== t.precision && (e = t.precision),
      void 0 !== t.floatPrecision && (u = t.floatPrecision),
      (c = t.defaultPathOperation || "S")),
      (o = t.filters || (!0 === a ? ["FlateEncode"] : o)),
      (i = i || "mm"),
      (r = ("" + (r || "P")).toLowerCase()));
    var f = t.putOnlyUsedFonts || !1,
      d = {},
      p = { internal: {}, __private__: {} };
    p.__private__.PubSub = Ft;
    var g = "1.3",
      v = (p.__private__.getPdfVersion = function () {
        return g;
      });
    p.__private__.setPdfVersion = function (t) {
      g = t;
    };
    var m = {
      a0: [2383.94, 3370.39],
      a1: [1683.78, 2383.94],
      a2: [1190.55, 1683.78],
      a3: [841.89, 1190.55],
      a4: [595.28, 841.89],
      a5: [419.53, 595.28],
      a6: [297.64, 419.53],
      a7: [209.76, 297.64],
      a8: [147.4, 209.76],
      a9: [104.88, 147.4],
      a10: [73.7, 104.88],
      b0: [2834.65, 4008.19],
      b1: [2004.09, 2834.65],
      b2: [1417.32, 2004.09],
      b3: [1000.63, 1417.32],
      b4: [708.66, 1000.63],
      b5: [498.9, 708.66],
      b6: [354.33, 498.9],
      b7: [249.45, 354.33],
      b8: [175.75, 249.45],
      b9: [124.72, 175.75],
      b10: [87.87, 124.72],
      c0: [2599.37, 3676.54],
      c1: [1836.85, 2599.37],
      c2: [1298.27, 1836.85],
      c3: [918.43, 1298.27],
      c4: [649.13, 918.43],
      c5: [459.21, 649.13],
      c6: [323.15, 459.21],
      c7: [229.61, 323.15],
      c8: [161.57, 229.61],
      c9: [113.39, 161.57],
      c10: [79.37, 113.39],
      dl: [311.81, 623.62],
      letter: [612, 792],
      "government-letter": [576, 756],
      legal: [612, 1008],
      "junior-legal": [576, 360],
      ledger: [1224, 792],
      tabloid: [792, 1224],
      "credit-card": [153, 243],
    };
    p.__private__.getPageFormats = function () {
      return m;
    };
    var y = (p.__private__.getPageFormat = function (t) {
      return m[t];
    });
    s = s || "a4";
    var b = { COMPAT: "compat", ADVANCED: "advanced" },
      w = b.COMPAT;
    function x() {
      (this.saveGraphicsState(),
        et(new zt(bt, 0, 0, -bt, 0, Mr() * bt).toString() + " cm"),
        this.setFontSize(this.getFontSize() / bt),
        (c = "n"),
        (w = b.ADVANCED));
    }
    function S() {
      (this.restoreGraphicsState(), (c = "S"), (w = b.COMPAT));
    }
    var A = (p.__private__.combineFontStyleAndFontWeight = function (t, e) {
      if (
        ("bold" == t && "normal" == e) ||
        ("bold" == t && 400 == e) ||
        ("normal" == t && "italic" == e) ||
        ("bold" == t && "italic" == e)
      )
        throw new Error("Invalid Combination of fontweight and fontstyle");
      return (
        e &&
          (t =
            400 == e || "normal" === e
              ? "italic" === t
                ? "italic"
                : "normal"
              : (700 != e && "bold" !== e) || "normal" !== t
                ? (700 == e ? "bold" : e) + "" + t
                : "bold"),
        t
      );
    });
    ((p.advancedAPI = function (t) {
      var e = w === b.COMPAT;
      return (
        e && x.call(this),
        "function" != typeof t || (t(this), e && S.call(this)),
        this
      );
    }),
      (p.compatAPI = function (t) {
        var e = w === b.ADVANCED;
        return (
          e && S.call(this),
          "function" != typeof t || (t(this), e && x.call(this)),
          this
        );
      }),
      (p.isAdvancedAPI = function () {
        return w === b.ADVANCED;
      }));
    var E,
      F = function (t) {
        if (w !== b.ADVANCED)
          throw new Error(
            t +
              " is only available in 'advanced' API mode. You need to call advancedAPI() first.",
          );
      },
      N =
        (p.roundToPrecision =
        p.__private__.roundToPrecision =
          function (t, r) {
            var n = e || r;
            if (isNaN(t) || isNaN(n))
              throw new Error(
                "Invalid argument passed to jsPDF.roundToPrecision",
              );
            return t.toFixed(n).replace(/0+$/, "");
          });
    E =
      p.hpf =
      p.__private__.hpf =
        "number" == typeof u
          ? function (t) {
              if (isNaN(t))
                throw new Error("Invalid argument passed to jsPDF.hpf");
              return N(t, u);
            }
          : "smart" === u
            ? function (t) {
                if (isNaN(t))
                  throw new Error("Invalid argument passed to jsPDF.hpf");
                return N(t, t > -1 && t < 1 ? 16 : 5);
              }
            : function (t) {
                if (isNaN(t))
                  throw new Error("Invalid argument passed to jsPDF.hpf");
                return N(t, 16);
              };
    var P =
        (p.f2 =
        p.__private__.f2 =
          function (t) {
            if (isNaN(t))
              throw new Error("Invalid argument passed to jsPDF.f2");
            return N(t, 2);
          }),
      I = (p.__private__.f3 = function (t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
        return N(t, 3);
      }),
      L =
        (p.scale =
        p.__private__.scale =
          function (t) {
            if (isNaN(t))
              throw new Error("Invalid argument passed to jsPDF.scale");
            return w === b.COMPAT ? t * bt : w === b.ADVANCED ? t : void 0;
          }),
      C = function (t) {
        return w === b.COMPAT ? Mr() - t : w === b.ADVANCED ? t : void 0;
      },
      D = function (t) {
        return L(C(t));
      };
    p.__private__.setPrecision = p.setPrecision = function (t) {
      "number" == typeof parseInt(t, 10) && (e = parseInt(t, 10));
    };
    var _,
      R = "00000000000000000000000000000000",
      B = (p.__private__.getFileId = function () {
        return R;
      }),
      T = (p.__private__.setFileId = function (t) {
        return (
          (R =
            void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t)
              ? t.toUpperCase()
              : R.split("")
                  .map(function () {
                    return "ABCDEF0123456789".charAt(
                      Math.floor(16 * Math.random()),
                    );
                  })
                  .join("")),
          null !== l &&
            (Ge = new At(
              l.userPermissions,
              l.userPassword,
              l.ownerPassword,
              R,
            )),
          R
        );
      });
    ((p.setFileId = function (t) {
      return (T(t), this);
    }),
      (p.getFileId = function () {
        return B();
      }));
    var j = (p.__private__.convertDateToPDFDate = function (t) {
        var e = t.getTimezoneOffset(),
          r = e < 0 ? "+" : "-",
          n = Math.floor(Math.abs(e / 60)),
          i = Math.abs(e % 60),
          s = [r, H(n), "'", H(i), "'"].join("");
        return [
          "D:",
          t.getFullYear(),
          H(t.getMonth() + 1),
          H(t.getDate()),
          H(t.getHours()),
          H(t.getMinutes()),
          H(t.getSeconds()),
          s,
        ].join("");
      }),
      k = (p.__private__.convertPDFDateToDate = function (t) {
        var e = parseInt(t.substr(2, 4), 10),
          r = parseInt(t.substr(6, 2), 10) - 1,
          n = parseInt(t.substr(8, 2), 10),
          i = parseInt(t.substr(10, 2), 10),
          s = parseInt(t.substr(12, 2), 10),
          a = parseInt(t.substr(14, 2), 10);
        return new Date(e, r, n, i, s, a, 0);
      }),
      O = (p.__private__.setCreationDate = function (t) {
        var e;
        if ((void 0 === t && (t = new Date()), t instanceof Date)) e = j(t);
        else {
          if (
            !/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
              t,
            )
          )
            throw new Error("Invalid argument passed to jsPDF.setCreationDate");
          e = t;
        }
        return (_ = e);
      }),
      M = (p.__private__.getCreationDate = function (t) {
        var e = _;
        return ("jsDate" === t && (e = k(_)), e);
      });
    ((p.setCreationDate = function (t) {
      return (O(t), this);
    }),
      (p.getCreationDate = function (t) {
        return M(t);
      }));
    var q,
      H = (p.__private__.padd2 = function (t) {
        return ("0" + parseInt(t)).slice(-2);
      }),
      V = (p.__private__.padd2Hex = function (t) {
        return ("00" + (t = t.toString())).substr(t.length);
      }),
      U = 0,
      K = [],
      z = [],
      W = 0,
      G = [],
      J = [],
      X = !1,
      Y = z,
      Z = function () {
        ((U = 0),
          (W = 0),
          (z = []),
          (K = []),
          (G = []),
          (Qt = Yt()),
          (te = Yt()));
      };
    p.__private__.setCustomOutputDestination = function (t) {
      ((X = !0), (Y = t));
    };
    var tt = function (t) {
      X || (Y = t);
    };
    p.__private__.resetCustomOutputDestination = function () {
      ((X = !1), (Y = z));
    };
    var et = (p.__private__.out = function (t) {
        return ((t = t.toString()), (W += t.length + 1), Y.push(t), Y);
      }),
      rt = (p.__private__.write = function (t) {
        return et(
          1 === arguments.length
            ? t.toString()
            : Array.prototype.join.call(arguments, " "),
        );
      }),
      nt = (p.__private__.getArrayBuffer = function (t) {
        for (
          var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r);
          e--;
        )
          n[e] = t.charCodeAt(e);
        return r;
      }),
      ot = [
        ["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
        ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
        ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
        ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
        ["Courier", "courier", "normal", "WinAnsiEncoding"],
        ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
        ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
        ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
        ["Times-Roman", "times", "normal", "WinAnsiEncoding"],
        ["Times-Bold", "times", "bold", "WinAnsiEncoding"],
        ["Times-Italic", "times", "italic", "WinAnsiEncoding"],
        ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
        ["ZapfDingbats", "zapfdingbats", "normal", null],
        ["Symbol", "symbol", "normal", null],
      ];
    p.__private__.getStandardFonts = function () {
      return ot;
    };
    var ht = t.fontSize || 16;
    p.__private__.setFontSize = p.setFontSize = function (t) {
      return ((ht = w === b.ADVANCED ? t / bt : t), this);
    };
    var ut,
      ct =
        (p.__private__.getFontSize =
        p.getFontSize =
          function () {
            return w === b.COMPAT ? ht : ht * bt;
          }),
      lt = t.R2L || !1;
    ((p.__private__.setR2L = p.setR2L =
      function (t) {
        return ((lt = t), this);
      }),
      (p.__private__.getR2L = p.getR2L =
        function () {
          return lt;
        }));
    var ft,
      dt = (p.__private__.setZoomMode = function (t) {
        var e = [
          void 0,
          null,
          "fullwidth",
          "fullheight",
          "fullpage",
          "original",
        ];
        if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t)) ut = t;
        else if (isNaN(t)) {
          if (-1 === e.indexOf(t))
            throw new Error(
              'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
                t +
                '" is not recognized.',
            );
          ut = t;
        } else ut = parseInt(t, 10);
      });
    p.__private__.getZoomMode = function () {
      return ut;
    };
    var pt,
      gt = (p.__private__.setPageMode = function (t) {
        if (
          -1 ==
          [
            void 0,
            null,
            "UseNone",
            "UseOutlines",
            "UseThumbs",
            "FullScreen",
          ].indexOf(t)
        )
          throw new Error(
            'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
              t +
              '" is not recognized.',
          );
        ft = t;
      });
    p.__private__.getPageMode = function () {
      return ft;
    };
    var vt = (p.__private__.setLayoutMode = function (t) {
      if (
        -1 ==
        [
          void 0,
          null,
          "continuous",
          "single",
          "twoleft",
          "tworight",
          "two",
        ].indexOf(t)
      )
        throw new Error(
          'Layout mode must be one of continuous, single, twoleft, tworight. "' +
            t +
            '" is not recognized.',
        );
      pt = t;
    });
    ((p.__private__.getLayoutMode = function () {
      return pt;
    }),
      (p.__private__.setDisplayMode = p.setDisplayMode =
        function (t, e, r) {
          return (dt(t), vt(e), gt(r), this);
        }));
    var mt = { title: "", subject: "", author: "", keywords: "", creator: "" };
    ((p.__private__.getDocumentProperty = function (t) {
      if (-1 === Object.keys(mt).indexOf(t))
        throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
      return mt[t];
    }),
      (p.__private__.getDocumentProperties = function () {
        return mt;
      }),
      (p.__private__.setDocumentProperties =
        p.setProperties =
        p.setDocumentProperties =
          function (t) {
            for (var e in mt) mt.hasOwnProperty(e) && t[e] && (mt[e] = t[e]);
            return this;
          }),
      (p.__private__.setDocumentProperty = function (t, e) {
        if (-1 === Object.keys(mt).indexOf(t))
          throw new Error(
            "Invalid arguments passed to jsPDF.setDocumentProperty",
          );
        return (mt[t] = e);
      }));
    var yt,
      bt,
      wt,
      xt,
      St,
      Pt = {},
      Dt = {},
      _t = [],
      Rt = {},
      Bt = {},
      Tt = {},
      jt = {},
      kt = null,
      Ot = 0,
      Mt = [],
      qt = new Ft(p),
      Ht = t.hotfixes || [],
      Vt = {},
      Ut = {},
      Kt = [],
      zt = function t(e, r, n, i, s, a) {
        if (!(this instanceof t)) return new t(e, r, n, i, s, a);
        (isNaN(e) && (e = 1),
          isNaN(r) && (r = 0),
          isNaN(n) && (n = 0),
          isNaN(i) && (i = 1),
          isNaN(s) && (s = 0),
          isNaN(a) && (a = 0),
          (this._matrix = [e, r, n, i, s, a]));
      };
    (Object.defineProperty(zt.prototype, "sx", {
      get: function () {
        return this._matrix[0];
      },
      set: function (t) {
        this._matrix[0] = t;
      },
    }),
      Object.defineProperty(zt.prototype, "shy", {
        get: function () {
          return this._matrix[1];
        },
        set: function (t) {
          this._matrix[1] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "shx", {
        get: function () {
          return this._matrix[2];
        },
        set: function (t) {
          this._matrix[2] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "sy", {
        get: function () {
          return this._matrix[3];
        },
        set: function (t) {
          this._matrix[3] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "tx", {
        get: function () {
          return this._matrix[4];
        },
        set: function (t) {
          this._matrix[4] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "ty", {
        get: function () {
          return this._matrix[5];
        },
        set: function (t) {
          this._matrix[5] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "a", {
        get: function () {
          return this._matrix[0];
        },
        set: function (t) {
          this._matrix[0] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "b", {
        get: function () {
          return this._matrix[1];
        },
        set: function (t) {
          this._matrix[1] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "c", {
        get: function () {
          return this._matrix[2];
        },
        set: function (t) {
          this._matrix[2] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "d", {
        get: function () {
          return this._matrix[3];
        },
        set: function (t) {
          this._matrix[3] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "e", {
        get: function () {
          return this._matrix[4];
        },
        set: function (t) {
          this._matrix[4] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "f", {
        get: function () {
          return this._matrix[5];
        },
        set: function (t) {
          this._matrix[5] = t;
        },
      }),
      Object.defineProperty(zt.prototype, "rotation", {
        get: function () {
          return Math.atan2(this.shx, this.sx);
        },
      }),
      Object.defineProperty(zt.prototype, "scaleX", {
        get: function () {
          return this.decompose().scale.sx;
        },
      }),
      Object.defineProperty(zt.prototype, "scaleY", {
        get: function () {
          return this.decompose().scale.sy;
        },
      }),
      Object.defineProperty(zt.prototype, "isIdentity", {
        get: function () {
          return (
            1 === this.sx &&
            0 === this.shy &&
            0 === this.shx &&
            1 === this.sy &&
            0 === this.tx &&
            0 === this.ty
          );
        },
      }),
      (zt.prototype.join = function (t) {
        return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty]
          .map(E)
          .join(t);
      }),
      (zt.prototype.multiply = function (t) {
        var e = t.sx * this.sx + t.shy * this.shx,
          r = t.sx * this.shy + t.shy * this.sy,
          n = t.shx * this.sx + t.sy * this.shx,
          i = t.shx * this.shy + t.sy * this.sy,
          s = t.tx * this.sx + t.ty * this.shx + this.tx,
          a = t.tx * this.shy + t.ty * this.sy + this.ty;
        return new zt(e, r, n, i, s, a);
      }),
      (zt.prototype.decompose = function () {
        var t = this.sx,
          e = this.shy,
          r = this.shx,
          n = this.sy,
          i = this.tx,
          s = this.ty,
          a = Math.sqrt(t * t + e * e),
          o = (t /= a) * r + (e /= a) * n;
        ((r -= t * o), (n -= e * o));
        var h = Math.sqrt(r * r + n * n);
        return (
          (o /= h),
          t * (n /= h) < e * (r /= h) &&
            ((t = -t), (e = -e), (o = -o), (a = -a)),
          {
            scale: new zt(a, 0, 0, h, 0, 0),
            translate: new zt(1, 0, 0, 1, i, s),
            rotate: new zt(t, e, -e, t, 0, 0),
            skew: new zt(1, 0, o, 1, 0, 0),
          }
        );
      }),
      (zt.prototype.toString = function (t) {
        return this.join(" ");
      }),
      (zt.prototype.inversed = function () {
        var t = this.sx,
          e = this.shy,
          r = this.shx,
          n = this.sy,
          i = this.tx,
          s = this.ty,
          a = 1 / (t * n - e * r),
          o = n * a,
          h = -e * a,
          u = -r * a,
          c = t * a;
        return new zt(o, h, u, c, -o * i - u * s, -h * i - c * s);
      }),
      (zt.prototype.applyToPoint = function (t) {
        var e = t.x * this.sx + t.y * this.shx + this.tx,
          r = t.x * this.shy + t.y * this.sy + this.ty;
        return new Dr(e, r);
      }),
      (zt.prototype.applyToRectangle = function (t) {
        var e = this.applyToPoint(t),
          r = this.applyToPoint(new Dr(t.x + t.w, t.y + t.h));
        return new _r(e.x, e.y, r.x - e.x, r.y - e.y);
      }),
      (zt.prototype.clone = function () {
        var t = this.sx,
          e = this.shy,
          r = this.shx,
          n = this.sy,
          i = this.tx,
          s = this.ty;
        return new zt(t, e, r, n, i, s);
      }),
      (p.Matrix = zt));
    var Wt = (p.matrixMult = function (t, e) {
        return e.multiply(t);
      }),
      Gt = new zt(1, 0, 0, 1, 0, 0);
    p.unitMatrix = p.identityMatrix = Gt;
    var Jt = function (t, e) {
      if (!Bt[t]) {
        var r =
          (e instanceof It ? "Sh" : "P") +
          (Object.keys(Rt).length + 1).toString(10);
        ((e.id = r), (Bt[t] = r), (Rt[r] = e), qt.publish("addPattern", e));
      }
    };
    ((p.ShadingPattern = It),
      (p.TilingPattern = Lt),
      (p.addShadingPattern = function (t, e) {
        return (F("addShadingPattern()"), Jt(t, e), this);
      }),
      (p.beginTilingPattern = function (t) {
        (F("beginTilingPattern()"),
          Br(
            t.boundingBox[0],
            t.boundingBox[1],
            t.boundingBox[2] - t.boundingBox[0],
            t.boundingBox[3] - t.boundingBox[1],
            t.matrix,
          ));
      }),
      (p.endTilingPattern = function (t, e) {
        (F("endTilingPattern()"),
          (e.stream = J[q].join("\n")),
          Jt(t, e),
          qt.publish("endTilingPattern", e),
          Kt.pop().restore());
      }));
    var Xt = (p.__private__.newObject = function () {
        var t = Yt();
        return ($t(t, !0), t);
      }),
      Yt = (p.__private__.newObjectDeferred = function () {
        return (
          U++,
          (K[U] = function () {
            return W;
          }),
          U
        );
      }),
      $t = function (t, e) {
        return (
          (e = "boolean" == typeof e && e),
          (K[t] = W),
          e && et(t + " 0 obj"),
          t
        );
      },
      Zt = (p.__private__.newAdditionalObject = function () {
        var t = { objId: Yt(), content: "" };
        return (G.push(t), t);
      }),
      Qt = Yt(),
      te = Yt(),
      ee = (p.__private__.decodeColorString = function (t) {
        var e = t.split(" ");
        if (2 !== e.length || ("g" !== e[1] && "G" !== e[1]))
          5 !== e.length ||
            ("k" !== e[4] && "K" !== e[4]) ||
            (e = [
              (1 - e[0]) * (1 - e[3]),
              (1 - e[1]) * (1 - e[3]),
              (1 - e[2]) * (1 - e[3]),
              "r",
            ]);
        else {
          var r = parseFloat(e[0]);
          e = [r, r, r, "r"];
        }
        for (var n = "#", i = 0; i < 3; i++)
          n += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(
            -2,
          );
        return n;
      }),
      re = (p.__private__.encodeColorString = function (t) {
        var e;
        "string" == typeof t && (t = { ch1: t });
        var r = t.ch1,
          i = t.ch2,
          s = t.ch3,
          a = t.ch4,
          o = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
        if ("string" == typeof r && "#" !== r.charAt(0)) {
          var h = new at(r);
          if (h.ok) r = h.toHex();
          else if (!/^\d*\.?\d*$/.test(r))
            throw new Error(
              'Invalid color "' + r + '" passed to jsPDF.encodeColorString.',
            );
        }
        if (
          ("string" == typeof r &&
            /^#[0-9A-Fa-f]{3}$/.test(r) &&
            (r = "#" + r[1] + r[1] + r[2] + r[2] + r[3] + r[3]),
          "string" == typeof r && /^#[0-9A-Fa-f]{6}$/.test(r))
        ) {
          var u = parseInt(r.substr(1), 16);
          ((r = (u >> 16) & 255), (i = (u >> 8) & 255), (s = 255 & u));
        }
        if (void 0 === i || (void 0 === a && r === i && i === s))
          if ("string" == typeof r) e = r + " " + o[0];
          else
            switch (t.precision) {
              case 2:
                e = P(r / 255) + " " + o[0];
                break;
              case 3:
              default:
                e = I(r / 255) + " " + o[0];
            }
        else if (void 0 === a || "object" === (0, n.Z)(a)) {
          if (a && !isNaN(a.a) && 0 === a.a)
            return ["1.", "1.", "1.", o[1]].join(" ");
          if ("string" == typeof r) e = [r, i, s, o[1]].join(" ");
          else
            switch (t.precision) {
              case 2:
                e = [P(r / 255), P(i / 255), P(s / 255), o[1]].join(" ");
                break;
              default:
              case 3:
                e = [I(r / 255), I(i / 255), I(s / 255), o[1]].join(" ");
            }
        } else if ("string" == typeof r) e = [r, i, s, a, o[2]].join(" ");
        else
          switch (t.precision) {
            case 2:
              e = [P(r), P(i), P(s), P(a), o[2]].join(" ");
              break;
            case 3:
            default:
              e = [I(r), I(i), I(s), I(a), o[2]].join(" ");
          }
        return e;
      }),
      ne = (p.__private__.getFilters = function () {
        return o;
      }),
      ie = (p.__private__.putStream = function (t) {
        var e = (t = t || {}).data || "",
          r = t.filters || ne(),
          n = t.alreadyAppliedFilters || [],
          i = t.addLength1 || !1,
          s = e.length,
          a = t.objectId,
          o = function (t) {
            return t;
          };
        if (null !== l && void 0 === a)
          throw new Error(
            "ObjectId must be passed to putStream for file encryption",
          );
        null !== l && (o = Ge.encryptor(a, 0));
        var h = {};
        !0 === r && (r = ["FlateEncode"]);
        var u = t.additionalKeyValues || [],
          c =
            (h =
              void 0 !== Ct.API.processDataByFilters
                ? Ct.API.processDataByFilters(e, r)
                : { data: e, reverseChain: [] }).reverseChain +
            (Array.isArray(n) ? n.join(" ") : n.toString());
        if (
          (0 !== h.data.length &&
            (u.push({ key: "Length", value: h.data.length }),
            !0 === i && u.push({ key: "Length1", value: s })),
          0 != c.length)
        )
          if (c.split("/").length - 1 == 1) u.push({ key: "Filter", value: c });
          else {
            u.push({ key: "Filter", value: "[" + c + "]" });
            for (var f = 0; f < u.length; f += 1)
              if ("DecodeParms" === u[f].key) {
                for (
                  var d = [], p = 0;
                  p < h.reverseChain.split("/").length - 1;
                  p += 1
                )
                  d.push("null");
                (d.push(u[f].value), (u[f].value = "[" + d.join(" ") + "]"));
              }
          }
        et("<<");
        for (var g = 0; g < u.length; g++)
          et("/" + u[g].key + " " + u[g].value);
        (et(">>"),
          0 !== h.data.length &&
            (et("stream"), et(o(h.data)), et("endstream")));
      }),
      se = (p.__private__.putPage = function (t) {
        var e = t.number,
          r = t.data,
          n = t.objId,
          i = t.contentsObjId;
        ($t(n, !0),
          et("<</Type /Page"),
          et("/Parent " + t.rootDictionaryObjId + " 0 R"),
          et("/Resources " + t.resourceDictionaryObjId + " 0 R"),
          et(
            "/MediaBox [" +
              parseFloat(E(t.mediaBox.bottomLeftX)) +
              " " +
              parseFloat(E(t.mediaBox.bottomLeftY)) +
              " " +
              E(t.mediaBox.topRightX) +
              " " +
              E(t.mediaBox.topRightY) +
              "]",
          ),
          null !== t.cropBox &&
            et(
              "/CropBox [" +
                E(t.cropBox.bottomLeftX) +
                " " +
                E(t.cropBox.bottomLeftY) +
                " " +
                E(t.cropBox.topRightX) +
                " " +
                E(t.cropBox.topRightY) +
                "]",
            ),
          null !== t.bleedBox &&
            et(
              "/BleedBox [" +
                E(t.bleedBox.bottomLeftX) +
                " " +
                E(t.bleedBox.bottomLeftY) +
                " " +
                E(t.bleedBox.topRightX) +
                " " +
                E(t.bleedBox.topRightY) +
                "]",
            ),
          null !== t.trimBox &&
            et(
              "/TrimBox [" +
                E(t.trimBox.bottomLeftX) +
                " " +
                E(t.trimBox.bottomLeftY) +
                " " +
                E(t.trimBox.topRightX) +
                " " +
                E(t.trimBox.topRightY) +
                "]",
            ),
          null !== t.artBox &&
            et(
              "/ArtBox [" +
                E(t.artBox.bottomLeftX) +
                " " +
                E(t.artBox.bottomLeftY) +
                " " +
                E(t.artBox.topRightX) +
                " " +
                E(t.artBox.topRightY) +
                "]",
            ),
          "number" == typeof t.userUnit &&
            1 !== t.userUnit &&
            et("/UserUnit " + t.userUnit),
          qt.publish("putPage", {
            objId: n,
            pageContext: Mt[e],
            pageNumber: e,
            page: r,
          }),
          et("/Contents " + i + " 0 R"),
          et(">>"),
          et("endobj"));
        var s = r.join("\n");
        return (
          w === b.ADVANCED && (s += "\nQ"),
          $t(i, !0),
          ie({ data: s, filters: ne(), objectId: i }),
          et("endobj"),
          n
        );
      }),
      ae = (p.__private__.putPages = function () {
        var t,
          e,
          r = [];
        for (t = 1; t <= Ot; t++)
          ((Mt[t].objId = Yt()), (Mt[t].contentsObjId = Yt()));
        for (t = 1; t <= Ot; t++)
          r.push(
            se({
              number: t,
              data: J[t],
              objId: Mt[t].objId,
              contentsObjId: Mt[t].contentsObjId,
              mediaBox: Mt[t].mediaBox,
              cropBox: Mt[t].cropBox,
              bleedBox: Mt[t].bleedBox,
              trimBox: Mt[t].trimBox,
              artBox: Mt[t].artBox,
              userUnit: Mt[t].userUnit,
              rootDictionaryObjId: Qt,
              resourceDictionaryObjId: te,
            }),
          );
        ($t(Qt, !0), et("<</Type /Pages"));
        var n = "/Kids [";
        for (e = 0; e < Ot; e++) n += r[e] + " 0 R ";
        (et(n + "]"),
          et("/Count " + Ot),
          et(">>"),
          et("endobj"),
          qt.publish("postPutPages"));
      }),
      oe = function (t) {
        (qt.publish("putFont", {
          font: t,
          out: et,
          newObject: Xt,
          putStream: ie,
        }),
          !0 !== t.isAlreadyPutted &&
            ((t.objectNumber = Xt()),
            et("<<"),
            et("/Type /Font"),
            et("/BaseFont /" + Et(t.postScriptName)),
            et("/Subtype /Type1"),
            "string" == typeof t.encoding && et("/Encoding /" + t.encoding),
            et("/FirstChar 32"),
            et("/LastChar 255"),
            et(">>"),
            et("endobj")));
      },
      he = function () {
        for (var t in Pt)
          Pt.hasOwnProperty(t) &&
            (!1 === f || (!0 === f && d.hasOwnProperty(t))) &&
            oe(Pt[t]);
      },
      ue = function (t) {
        t.objectNumber = Xt();
        var e = [];
        (e.push({ key: "Type", value: "/XObject" }),
          e.push({ key: "Subtype", value: "/Form" }),
          e.push({
            key: "BBox",
            value:
              "[" +
              [E(t.x), E(t.y), E(t.x + t.width), E(t.y + t.height)].join(" ") +
              "]",
          }),
          e.push({ key: "Matrix", value: "[" + t.matrix.toString() + "]" }));
        var r = t.pages[1].join("\n");
        (ie({ data: r, additionalKeyValues: e, objectId: t.objectNumber }),
          et("endobj"));
      },
      ce = function () {
        for (var t in Vt) Vt.hasOwnProperty(t) && ue(Vt[t]);
      },
      le = function (t, e) {
        var r,
          n = [],
          i = 1 / (e - 1);
        for (r = 0; r < 1; r += i) n.push(r);
        if ((n.push(1), 0 != t[0].offset)) {
          var s = { offset: 0, color: t[0].color };
          t.unshift(s);
        }
        if (1 != t[t.length - 1].offset) {
          var a = { offset: 1, color: t[t.length - 1].color };
          t.push(a);
        }
        for (var o = "", h = 0, u = 0; u < n.length; u++) {
          for (r = n[u]; r > t[h + 1].offset; ) h++;
          var c = t[h].offset,
            l = (r - c) / (t[h + 1].offset - c),
            f = t[h].color,
            d = t[h + 1].color;
          o +=
            V(Math.round((1 - l) * f[0] + l * d[0]).toString(16)) +
            V(Math.round((1 - l) * f[1] + l * d[1]).toString(16)) +
            V(Math.round((1 - l) * f[2] + l * d[2]).toString(16));
        }
        return o.trim();
      },
      fe = function (t, e) {
        e || (e = 21);
        var r = Xt(),
          n = le(t.colors, e),
          i = [];
        (i.push({ key: "FunctionType", value: "0" }),
          i.push({ key: "Domain", value: "[0.0 1.0]" }),
          i.push({ key: "Size", value: "[" + e + "]" }),
          i.push({ key: "BitsPerSample", value: "8" }),
          i.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
          i.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }),
          ie({
            data: n,
            additionalKeyValues: i,
            alreadyAppliedFilters: ["/ASCIIHexDecode"],
            objectId: r,
          }),
          et("endobj"),
          (t.objectNumber = Xt()),
          et("<< /ShadingType " + t.type),
          et("/ColorSpace /DeviceRGB"));
        var s =
          "/Coords [" +
          E(parseFloat(t.coords[0])) +
          " " +
          E(parseFloat(t.coords[1])) +
          " ";
        (2 === t.type
          ? (s += E(parseFloat(t.coords[2])) + " " + E(parseFloat(t.coords[3])))
          : (s +=
              E(parseFloat(t.coords[2])) +
              " " +
              E(parseFloat(t.coords[3])) +
              " " +
              E(parseFloat(t.coords[4])) +
              " " +
              E(parseFloat(t.coords[5]))),
          et((s += "]")),
          t.matrix && et("/Matrix [" + t.matrix.toString() + "]"),
          et("/Function " + r + " 0 R"),
          et("/Extend [true true]"),
          et(">>"),
          et("endobj"));
      },
      de = function (t, e) {
        var r = Yt(),
          n = Xt();
        (e.push({ resourcesOid: r, objectOid: n }), (t.objectNumber = n));
        var i = [];
        (i.push({ key: "Type", value: "/Pattern" }),
          i.push({ key: "PatternType", value: "1" }),
          i.push({ key: "PaintType", value: "1" }),
          i.push({ key: "TilingType", value: "1" }),
          i.push({
            key: "BBox",
            value: "[" + t.boundingBox.map(E).join(" ") + "]",
          }),
          i.push({ key: "XStep", value: E(t.xStep) }),
          i.push({ key: "YStep", value: E(t.yStep) }),
          i.push({ key: "Resources", value: r + " 0 R" }),
          t.matrix &&
            i.push({ key: "Matrix", value: "[" + t.matrix.toString() + "]" }),
          ie({
            data: t.stream,
            additionalKeyValues: i,
            objectId: t.objectNumber,
          }),
          et("endobj"));
      },
      pe = function (t) {
        var e;
        for (e in Rt)
          Rt.hasOwnProperty(e) &&
            (Rt[e] instanceof It
              ? fe(Rt[e])
              : Rt[e] instanceof Lt && de(Rt[e], t));
      },
      ge = function (t) {
        for (var e in ((t.objectNumber = Xt()), et("<<"), t))
          switch (e) {
            case "opacity":
              et("/ca " + P(t[e]));
              break;
            case "stroke-opacity":
              et("/CA " + P(t[e]));
          }
        (et(">>"), et("endobj"));
      },
      ve = function () {
        var t;
        for (t in Tt) Tt.hasOwnProperty(t) && ge(Tt[t]);
      },
      me = function () {
        for (var t in (et("/XObject <<"), Vt))
          Vt.hasOwnProperty(t) &&
            Vt[t].objectNumber >= 0 &&
            et("/" + t + " " + Vt[t].objectNumber + " 0 R");
        (qt.publish("putXobjectDict"), et(">>"));
      },
      ye = function () {
        ((Ge.oid = Xt()),
          et("<<"),
          et("/Filter /Standard"),
          et("/V " + Ge.v),
          et("/R " + Ge.r),
          et("/U <" + Ge.toHexString(Ge.U) + ">"),
          et("/O <" + Ge.toHexString(Ge.O) + ">"),
          et("/P " + Ge.P),
          et(">>"),
          et("endobj"));
      },
      be = function () {
        for (var t in (et("/Font <<"), Pt))
          Pt.hasOwnProperty(t) &&
            (!1 === f || (!0 === f && d.hasOwnProperty(t))) &&
            et("/" + t + " " + Pt[t].objectNumber + " 0 R");
        et(">>");
      },
      we = function () {
        if (Object.keys(Rt).length > 0) {
          for (var t in (et("/Shading <<"), Rt))
            Rt.hasOwnProperty(t) &&
              Rt[t] instanceof It &&
              Rt[t].objectNumber >= 0 &&
              et("/" + t + " " + Rt[t].objectNumber + " 0 R");
          (qt.publish("putShadingPatternDict"), et(">>"));
        }
      },
      xe = function (t) {
        if (Object.keys(Rt).length > 0) {
          for (var e in (et("/Pattern <<"), Rt))
            Rt.hasOwnProperty(e) &&
              Rt[e] instanceof p.TilingPattern &&
              Rt[e].objectNumber >= 0 &&
              Rt[e].objectNumber < t &&
              et("/" + e + " " + Rt[e].objectNumber + " 0 R");
          (qt.publish("putTilingPatternDict"), et(">>"));
        }
      },
      Se = function () {
        if (Object.keys(Tt).length > 0) {
          var t;
          for (t in (et("/ExtGState <<"), Tt))
            Tt.hasOwnProperty(t) &&
              Tt[t].objectNumber >= 0 &&
              et("/" + t + " " + Tt[t].objectNumber + " 0 R");
          (qt.publish("putGStateDict"), et(">>"));
        }
      },
      Ae = function (t) {
        ($t(t.resourcesOid, !0),
          et("<<"),
          et("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),
          be(),
          we(),
          xe(t.objectOid),
          Se(),
          me(),
          et(">>"),
          et("endobj"));
      },
      Ee = function () {
        var t = [];
        (he(),
          ve(),
          ce(),
          pe(t),
          qt.publish("putResources"),
          t.forEach(Ae),
          Ae({ resourcesOid: te, objectOid: Number.MAX_SAFE_INTEGER }),
          qt.publish("postPutResources"));
      },
      Fe = function () {
        qt.publish("putAdditionalObjects");
        for (var t = 0; t < G.length; t++) {
          var e = G[t];
          ($t(e.objId, !0), et(e.content), et("endobj"));
        }
        qt.publish("postPutAdditionalObjects");
      },
      Ne = function (t) {
        ((Dt[t.fontName] = Dt[t.fontName] || {}),
          (Dt[t.fontName][t.fontStyle] = t.id));
      },
      Pe = function (t, e, r, n, i) {
        var s = {
          id: "F" + (Object.keys(Pt).length + 1).toString(10),
          postScriptName: t,
          fontName: e,
          fontStyle: r,
          encoding: n,
          isStandardFont: i || !1,
          metadata: {},
        };
        return (
          qt.publish("addFont", { font: s, instance: this }),
          (Pt[s.id] = s),
          Ne(s),
          s.id
        );
      },
      Ie = function (t) {
        for (var e = 0, r = ot.length; e < r; e++) {
          var n = Pe.call(this, t[e][0], t[e][1], t[e][2], ot[e][3], !0);
          !1 === f && (d[n] = !0);
          var i = t[e][0].split("-");
          Ne({ id: n, fontName: i[0], fontStyle: i[1] || "" });
        }
        qt.publish("addFonts", { fonts: Pt, dictionary: Dt });
      },
      Le = function (t) {
        return (
          (t.foo = function () {
            try {
              return t.apply(this, arguments);
            } catch (t) {
              var e = t.stack || "";
              ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
              var r =
                "Error in function " +
                e.split("\n")[0].split("<")[0] +
                ": " +
                t.message;
              if (!$.console) throw new Error(r);
              ($.console.error(r, t), $.alert && alert(r));
            }
          }),
          (t.foo.bar = t),
          t.foo
        );
      },
      Ce = function (t, e) {
        var r, n, i, s, a, o, h, u, c;
        if (
          ((i = (e = e || {}).sourceEncoding || "Unicode"),
          (a = e.outputEncoding),
          (e.autoencode || a) &&
            Pt[yt].metadata &&
            Pt[yt].metadata[i] &&
            Pt[yt].metadata[i].encoding &&
            ((s = Pt[yt].metadata[i].encoding),
            !a && Pt[yt].encoding && (a = Pt[yt].encoding),
            !a && s.codePages && (a = s.codePages[0]),
            "string" == typeof a && (a = s[a]),
            a))
        ) {
          for (h = !1, o = [], r = 0, n = t.length; r < n; r++)
            ((u = a[t.charCodeAt(r)])
              ? o.push(String.fromCharCode(u))
              : o.push(t[r]),
              o[r].charCodeAt(0) >> 8 && (h = !0));
          t = o.join("");
        }
        for (r = t.length; void 0 === h && 0 !== r; )
          (t.charCodeAt(r - 1) >> 8 && (h = !0), r--);
        if (!h) return t;
        for (o = e.noBOM ? [] : [254, 255], r = 0, n = t.length; r < n; r++) {
          if ((c = (u = t.charCodeAt(r)) >> 8) >> 8)
            throw new Error(
              "Character at position " +
                r +
                " of string '" +
                t +
                "' exceeds 16bits. Cannot be encoded into UCS-2 BE",
            );
          (o.push(c), o.push(u - (c << 8)));
        }
        return String.fromCharCode.apply(void 0, o);
      },
      De =
        (p.__private__.pdfEscape =
        p.pdfEscape =
          function (t, e) {
            return Ce(t, e)
              .replace(/\\/g, "\\\\")
              .replace(/\(/g, "\\(")
              .replace(/\)/g, "\\)");
          }),
      _e = (p.__private__.beginPage = function (t) {
        ((J[++Ot] = []),
          (Mt[Ot] = {
            objId: 0,
            contentsObjId: 0,
            userUnit: Number(h),
            artBox: null,
            bleedBox: null,
            cropBox: null,
            trimBox: null,
            mediaBox: {
              bottomLeftX: 0,
              bottomLeftY: 0,
              topRightX: Number(t[0]),
              topRightY: Number(t[1]),
            },
          }),
          Te(Ot),
          tt(J[q]));
      }),
      Re = function (t, e) {
        var n, i, a;
        switch (
          ((r = e || r),
          "string" == typeof t &&
            ((n = y(t.toLowerCase())),
            Array.isArray(n) && ((i = n[0]), (a = n[1]))),
          Array.isArray(t) && ((i = t[0] * bt), (a = t[1] * bt)),
          isNaN(i) && ((i = s[0]), (a = s[1])),
          (i > 14400 || a > 14400) &&
            (Q.warn(
              "A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400",
            ),
            (i = Math.min(14400, i)),
            (a = Math.min(14400, a))),
          (s = [i, a]),
          r.substr(0, 1))
        ) {
          case "l":
            a > i && (s = [a, i]);
            break;
          case "p":
            i > a && (s = [a, i]);
        }
        (_e(s),
          pr(fr),
          et(Sr),
          0 !== Ir && et(Ir + " J"),
          0 !== Lr && et(Lr + " j"),
          qt.publish("addPage", { pageNumber: Ot }));
      },
      Be = function (t) {
        t > 0 &&
          t <= Ot &&
          (J.splice(t, 1),
          Mt.splice(t, 1),
          Ot--,
          q > Ot && (q = Ot),
          this.setPage(q));
      },
      Te = function (t) {
        t > 0 && t <= Ot && (q = t);
      },
      je =
        (p.__private__.getNumberOfPages =
        p.getNumberOfPages =
          function () {
            return J.length - 1;
          }),
      ke = function (t, e, r) {
        var n,
          i = void 0;
        return (
          (r = r || {}),
          (t = void 0 !== t ? t : Pt[yt].fontName),
          (e = void 0 !== e ? e : Pt[yt].fontStyle),
          (n = t.toLowerCase()),
          void 0 !== Dt[n] && void 0 !== Dt[n][e]
            ? (i = Dt[n][e])
            : void 0 !== Dt[t] && void 0 !== Dt[t][e]
              ? (i = Dt[t][e])
              : !1 === r.disableWarning &&
                Q.warn(
                  "Unable to look up font label for font '" +
                    t +
                    "', '" +
                    e +
                    "'. Refer to getFontList() for available fonts.",
                ),
          i ||
            r.noFallback ||
            (null == (i = Dt.times[e]) && (i = Dt.times.normal)),
          i
        );
      },
      Oe = (p.__private__.putInfo = function () {
        var t = Xt(),
          e = function (t) {
            return t;
          };
        for (var r in (null !== l && (e = Ge.encryptor(t, 0)),
        et("<<"),
        et("/Producer (" + De(e("jsPDF " + Ct.version)) + ")"),
        mt))
          mt.hasOwnProperty(r) &&
            mt[r] &&
            et(
              "/" +
                r.substr(0, 1).toUpperCase() +
                r.substr(1) +
                " (" +
                De(e(mt[r])) +
                ")",
            );
        (et("/CreationDate (" + De(e(_)) + ")"), et(">>"), et("endobj"));
      }),
      Me = (p.__private__.putCatalog = function (t) {
        var e = (t = t || {}).rootDictionaryObjId || Qt;
        switch (
          (Xt(),
          et("<<"),
          et("/Type /Catalog"),
          et("/Pages " + e + " 0 R"),
          ut || (ut = "fullwidth"),
          ut)
        ) {
          case "fullwidth":
            et("/OpenAction [3 0 R /FitH null]");
            break;
          case "fullheight":
            et("/OpenAction [3 0 R /FitV null]");
            break;
          case "fullpage":
            et("/OpenAction [3 0 R /Fit]");
            break;
          case "original":
            et("/OpenAction [3 0 R /XYZ null null 1]");
            break;
          default:
            var r = "" + ut;
            ("%" === r.substr(r.length - 1) && (ut = parseInt(ut) / 100),
              "number" == typeof ut &&
                et("/OpenAction [3 0 R /XYZ null null " + P(ut) + "]"));
        }
        switch ((pt || (pt = "continuous"), pt)) {
          case "continuous":
            et("/PageLayout /OneColumn");
            break;
          case "single":
            et("/PageLayout /SinglePage");
            break;
          case "two":
          case "twoleft":
            et("/PageLayout /TwoColumnLeft");
            break;
          case "tworight":
            et("/PageLayout /TwoColumnRight");
        }
        (ft && et("/PageMode /" + ft),
          qt.publish("putCatalog"),
          et(">>"),
          et("endobj"));
      }),
      qe = (p.__private__.putTrailer = function () {
        (et("trailer"),
          et("<<"),
          et("/Size " + (U + 1)),
          et("/Root " + U + " 0 R"),
          et("/Info " + (U - 1) + " 0 R"),
          null !== l && et("/Encrypt " + Ge.oid + " 0 R"),
          et("/ID [ <" + R + "> <" + R + "> ]"),
          et(">>"));
      }),
      He = (p.__private__.putHeader = function () {
        (et("%PDF-" + g), et("%ºß¬à"));
      }),
      Ve = (p.__private__.putXRef = function () {
        var t = "0000000000";
        (et("xref"), et("0 " + (U + 1)), et("0000000000 65535 f "));
        for (var e = 1; e <= U; e++)
          "function" == typeof K[e]
            ? et((t + K[e]()).slice(-10) + " 00000 n ")
            : void 0 !== K[e]
              ? et((t + K[e]).slice(-10) + " 00000 n ")
              : et("0000000000 00000 n ");
      }),
      Ue = (p.__private__.buildDocument = function () {
        (Z(),
          tt(z),
          qt.publish("buildDocument"),
          He(),
          ae(),
          Fe(),
          Ee(),
          null !== l && ye(),
          Oe(),
          Me());
        var t = W;
        return (
          Ve(),
          qe(),
          et("startxref"),
          et("" + t),
          et("%%EOF"),
          tt(J[q]),
          z.join("\n")
        );
      }),
      Ke = (p.__private__.getBlob = function (t) {
        return new Blob([nt(t)], { type: "application/pdf" });
      }),
      ze =
        (p.output =
        p.__private__.output =
          Le(function (t, e) {
            switch (
              ("string" == typeof (e = e || {})
                ? (e = { filename: e })
                : (e.filename = e.filename || "generated.pdf"),
              t)
            ) {
              case void 0:
                return Ue();
              case "save":
                p.save(e.filename);
                break;
              case "arraybuffer":
                return nt(Ue());
              case "blob":
                return Ke(Ue());
              case "bloburi":
              case "bloburl":
                if (
                  void 0 !== $.URL &&
                  "function" == typeof $.URL.createObjectURL
                )
                  return ($.URL && $.URL.createObjectURL(Ke(Ue()))) || void 0;
                Q.warn(
                  "bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.",
                );
                break;
              case "datauristring":
              case "dataurlstring":
                var r = "",
                  n = Ue();
                try {
                  r = it(n);
                } catch (t) {
                  r = it(unescape(encodeURIComponent(n)));
                }
                return (
                  "data:application/pdf;filename=" + e.filename + ";base64," + r
                );
              case "pdfobjectnewwindow":
                if ("[object Window]" === Object.prototype.toString.call($)) {
                  var i =
                      "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",
                    s =
                      ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                  e.pdfObjectUrl && ((i = e.pdfObjectUrl), (s = ""));
                  var a =
                      '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
                      i +
                      '"' +
                      s +
                      '><\/script><script >PDFObject.embed("' +
                      this.output("dataurlstring") +
                      '", ' +
                      JSON.stringify(e) +
                      ");<\/script></body></html>",
                    o = $.open();
                  return (null !== o && o.document.write(a), o);
                }
                throw new Error(
                  "The option pdfobjectnewwindow just works in a browser-environment.",
                );
              case "pdfjsnewwindow":
                if ("[object Window]" === Object.prototype.toString.call($)) {
                  var h =
                      '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
                      (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") +
                      "?file=&downloadName=" +
                      e.filename +
                      '" width="500px" height="400px" /></body></html>',
                    u = $.open();
                  if (null !== u) {
                    u.document.write(h);
                    var c = this;
                    u.document.documentElement.querySelector(
                      "#pdfViewer",
                    ).onload = function () {
                      ((u.document.title = e.filename),
                        u.document.documentElement
                          .querySelector("#pdfViewer")
                          .contentWindow.PDFViewerApplication.open(
                            c.output("bloburl"),
                          ));
                    };
                  }
                  return u;
                }
                throw new Error(
                  "The option pdfjsnewwindow just works in a browser-environment.",
                );
              case "dataurlnewwindow":
                if ("[object Window]" !== Object.prototype.toString.call($))
                  throw new Error(
                    "The option dataurlnewwindow just works in a browser-environment.",
                  );
                var l =
                    '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
                    this.output("datauristring", e) +
                    '"></iframe></body></html>',
                  f = $.open();
                if (
                  (null !== f &&
                    (f.document.write(l), (f.document.title = e.filename)),
                  f || "undefined" == typeof safari)
                )
                  return f;
                break;
              case "datauri":
              case "dataurl":
                return ($.document.location.href = this.output(
                  "datauristring",
                  e,
                ));
              default:
                return null;
            }
          })),
      We = function (t) {
        return !0 === Array.isArray(Ht) && Ht.indexOf(t) > -1;
      };
    switch (i) {
      case "pt":
        bt = 1;
        break;
      case "mm":
        bt = 72 / 25.4;
        break;
      case "cm":
        bt = 72 / 2.54;
        break;
      case "in":
        bt = 72;
        break;
      case "px":
        bt = 1 == We("px_scaling") ? 0.75 : 96 / 72;
        break;
      case "pc":
      case "em":
        bt = 12;
        break;
      case "ex":
        bt = 6;
        break;
      default:
        if ("number" != typeof i) throw new Error("Invalid unit: " + i);
        bt = i;
    }
    var Ge = null;
    (O(), T());
    var Je = function (t) {
        return null !== l
          ? Ge.encryptor(t, 0)
          : function (t) {
              return t;
            };
      },
      Xe =
        (p.__private__.getPageInfo =
        p.getPageInfo =
          function (t) {
            if (isNaN(t) || t % 1 != 0)
              throw new Error("Invalid argument passed to jsPDF.getPageInfo");
            return { objId: Mt[t].objId, pageNumber: t, pageContext: Mt[t] };
          }),
      Ye = (p.__private__.getPageInfoByObjId = function (t) {
        if (isNaN(t) || t % 1 != 0)
          throw new Error(
            "Invalid argument passed to jsPDF.getPageInfoByObjId",
          );
        for (var e in Mt) if (Mt[e].objId === t) break;
        return Xe(e);
      }),
      $e =
        (p.__private__.getCurrentPageInfo =
        p.getCurrentPageInfo =
          function () {
            return { objId: Mt[q].objId, pageNumber: q, pageContext: Mt[q] };
          });
    ((p.addPage = function () {
      return (Re.apply(this, arguments), this);
    }),
      (p.setPage = function () {
        return (Te.apply(this, arguments), tt.call(this, J[q]), this);
      }),
      (p.insertPage = function (t) {
        return (this.addPage(), this.movePage(q, t), this);
      }),
      (p.movePage = function (t, e) {
        var r, n;
        if (t > e) {
          ((r = J[t]), (n = Mt[t]));
          for (var i = t; i > e; i--) ((J[i] = J[i - 1]), (Mt[i] = Mt[i - 1]));
          ((J[e] = r), (Mt[e] = n), this.setPage(e));
        } else if (t < e) {
          ((r = J[t]), (n = Mt[t]));
          for (var s = t; s < e; s++) ((J[s] = J[s + 1]), (Mt[s] = Mt[s + 1]));
          ((J[e] = r), (Mt[e] = n), this.setPage(e));
        }
        return this;
      }),
      (p.deletePage = function () {
        return (Be.apply(this, arguments), this);
      }),
      (p.__private__.text = p.text =
        function (t, e, r, i, s) {
          var a,
            o,
            h,
            u,
            c,
            l,
            f,
            p,
            g,
            v = (i = i || {}).scope || this;
          if (
            "number" == typeof t &&
            "number" == typeof e &&
            ("string" == typeof r || Array.isArray(r))
          ) {
            var m = r;
            ((r = e), (e = t), (t = m));
          }
          if (
            (arguments[3] instanceof zt == 0
              ? ((h = arguments[4]),
                (u = arguments[5]),
                ("object" === (0, n.Z)((f = arguments[3])) && null !== f) ||
                  ("string" == typeof h && ((u = h), (h = null)),
                  "string" == typeof f && ((u = f), (f = null)),
                  "number" == typeof f && ((h = f), (f = null)),
                  (i = { flags: f, angle: h, align: u })))
              : (F("The transform parameter of text() with a Matrix value"),
                (g = s)),
            isNaN(e) || isNaN(r) || null == t)
          )
            throw new Error("Invalid arguments passed to jsPDF.text");
          if (0 === t.length) return v;
          var y = "",
            x = !1,
            S = "number" == typeof i.lineHeightFactor ? i.lineHeightFactor : lr,
            A = v.internal.scaleFactor;
          function N(t) {
            return (
              (t = t.split("\t").join(Array(i.TabLen || 9).join(" "))),
              De(t, f)
            );
          }
          function P(t) {
            for (var e, r = t.concat(), n = [], i = r.length; i--; )
              "string" == typeof (e = r.shift())
                ? n.push(e)
                : Array.isArray(t) &&
                    (1 === e.length || (void 0 === e[1] && void 0 === e[2]))
                  ? n.push(e[0])
                  : n.push([e[0], e[1], e[2]]);
            return n;
          }
          function I(t, e) {
            var r;
            if ("string" == typeof t) r = e(t)[0];
            else if (Array.isArray(t)) {
              for (var n, i, s = t.concat(), a = [], o = s.length; o--; )
                "string" == typeof (n = s.shift())
                  ? a.push(e(n)[0])
                  : Array.isArray(n) &&
                    "string" == typeof n[0] &&
                    ((i = e(n[0], n[1], n[2])), a.push([i[0], i[1], i[2]]));
              r = a;
            }
            return r;
          }
          var C = !1,
            D = !0;
          if ("string" == typeof t) C = !0;
          else if (Array.isArray(t)) {
            var _ = t.concat();
            o = [];
            for (var R, B = _.length; B--; )
              ("string" != typeof (R = _.shift()) ||
                (Array.isArray(R) && "string" != typeof R[0])) &&
                (D = !1);
            C = D;
          }
          if (!1 === C)
            throw new Error(
              'Type of text must be string or Array. "' +
                t +
                '" is not recognized.',
            );
          "string" == typeof t &&
            (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
          var T = ht / v.internal.scaleFactor,
            j = T * (S - 1);
          switch (i.baseline) {
            case "bottom":
              r -= j;
              break;
            case "top":
              r += T - j;
              break;
            case "hanging":
              r += T - 2 * j;
              break;
            case "middle":
              r += T / 2 - j;
          }
          if (
            ((l = i.maxWidth || 0) > 0 &&
              ("string" == typeof t
                ? (t = v.splitTextToSize(t, l))
                : "[object Array]" === Object.prototype.toString.call(t) &&
                  (t = t.reduce(function (t, e) {
                    return t.concat(v.splitTextToSize(e, l));
                  }, []))),
            (a = {
              text: t,
              x: e,
              y: r,
              options: i,
              mutex: {
                pdfEscape: De,
                activeFontKey: yt,
                fonts: Pt,
                activeFontSize: ht,
              },
            }),
            qt.publish("preProcessText", a),
            (t = a.text),
            (h = (i = a.options).angle),
            g instanceof zt == 0 && h && "number" == typeof h)
          ) {
            ((h *= Math.PI / 180),
              0 === i.rotationDirection && (h = -h),
              w === b.ADVANCED && (h = -h));
            var k = Math.cos(h),
              O = Math.sin(h);
            g = new zt(k, O, -O, k, 0, 0);
          } else h && h instanceof zt && (g = h);
          (w !== b.ADVANCED || g || (g = Gt),
            void 0 !== (c = i.charSpace || Nr) &&
              ((y += E(L(c)) + " Tc\n"),
              this.setCharSpace(this.getCharSpace() || 0)),
            void 0 !== (p = i.horizontalScale) && (y += E(100 * p) + " Tz\n"),
            i.lang);
          var M = -1,
            q = void 0 !== i.renderingMode ? i.renderingMode : i.stroke,
            H = v.internal.getCurrentPageInfo().pageContext;
          switch (q) {
            case 0:
            case !1:
            case "fill":
              M = 0;
              break;
            case 1:
            case !0:
            case "stroke":
              M = 1;
              break;
            case 2:
            case "fillThenStroke":
              M = 2;
              break;
            case 3:
            case "invisible":
              M = 3;
              break;
            case 4:
            case "fillAndAddForClipping":
              M = 4;
              break;
            case 5:
            case "strokeAndAddPathForClipping":
              M = 5;
              break;
            case 6:
            case "fillThenStrokeAndAddToPathForClipping":
              M = 6;
              break;
            case 7:
            case "addToPathForClipping":
              M = 7;
          }
          var V = void 0 !== H.usedRenderingMode ? H.usedRenderingMode : -1;
          (-1 !== M ? (y += M + " Tr\n") : -1 !== V && (y += "0 Tr\n"),
            -1 !== M && (H.usedRenderingMode = M),
            (u = i.align || "left"));
          var U,
            K = ht * S,
            z = v.internal.pageSize.getWidth(),
            W = Pt[yt];
          ((c = i.charSpace || Nr),
            (l = i.maxWidth || 0),
            (f = Object.assign({ autoencode: !0, noBOM: !0 }, i.flags)));
          var G = [];
          if ("[object Array]" === Object.prototype.toString.call(t)) {
            var J;
            ((o = P(t)),
              "left" !== u &&
                (U = o.map(function (t) {
                  return (
                    (v.getStringUnitWidth(t, {
                      font: W,
                      charSpace: c,
                      fontSize: ht,
                      doKerning: !1,
                    }) *
                      ht) /
                    A
                  );
                })));
            var X,
              Y = 0;
            if ("right" === u) {
              ((e -= U[0]), (t = []), (B = o.length));
              for (var $ = 0; $ < B; $++)
                (0 === $
                  ? ((X = yr(e)), (J = br(r)))
                  : ((X = L(Y - U[$])), (J = -K)),
                  t.push([o[$], X, J]),
                  (Y = U[$]));
            } else if ("center" === u) {
              ((e -= U[0] / 2), (t = []), (B = o.length));
              for (var Z = 0; Z < B; Z++)
                (0 === Z
                  ? ((X = yr(e)), (J = br(r)))
                  : ((X = L((Y - U[Z]) / 2)), (J = -K)),
                  t.push([o[Z], X, J]),
                  (Y = U[Z]));
            } else if ("left" === u) {
              ((t = []), (B = o.length));
              for (var Q = 0; Q < B; Q++) t.push(o[Q]);
            } else {
              if ("justify" !== u)
                throw new Error(
                  'Unrecognized alignment option, use "left", "center", "right" or "justify".',
                );
              ((t = []), (B = o.length), (l = 0 !== l ? l : z));
              for (var tt = 0; tt < B; tt++)
                ((J = 0 === tt ? br(r) : -K),
                  (X = 0 === tt ? yr(e) : 0),
                  tt < B - 1
                    ? G.push(E(L((l - U[tt]) / (o[tt].split(" ").length - 1))))
                    : G.push(0),
                  t.push([o[tt], X, J]));
            }
          }
          var rt = "boolean" == typeof i.R2L ? i.R2L : lt;
          (!0 === rt &&
            (t = I(t, function (t, e, r) {
              return [t.split("").reverse().join(""), e, r];
            })),
            (a = {
              text: t,
              x: e,
              y: r,
              options: i,
              mutex: {
                pdfEscape: De,
                activeFontKey: yt,
                fonts: Pt,
                activeFontSize: ht,
              },
            }),
            qt.publish("postProcessText", a),
            (t = a.text),
            (x = a.mutex.isHex || !1));
          var nt = Pt[yt].encoding;
          (("WinAnsiEncoding" !== nt && "StandardEncoding" !== nt) ||
            (t = I(t, function (t, e, r) {
              return [N(t), e, r];
            })),
            (o = P(t)),
            (t = []));
          for (
            var it,
              st,
              at,
              ot = 0,
              ut = 1,
              ct = Array.isArray(o[0]) ? ut : ot,
              ft = "",
              dt = function (t, e, r) {
                var n = "";
                return (
                  r instanceof zt
                    ? ((r =
                        "number" == typeof i.angle
                          ? Wt(r, new zt(1, 0, 0, 1, t, e))
                          : Wt(new zt(1, 0, 0, 1, t, e), r)),
                      w === b.ADVANCED &&
                        (r = Wt(new zt(1, 0, 0, -1, 0, 0), r)),
                      (n = r.join(" ") + " Tm\n"))
                    : (n = E(t) + " " + E(e) + " Td\n"),
                  n
                );
              },
              pt = 0;
            pt < o.length;
            pt++
          ) {
            switch (((ft = ""), ct)) {
              case ut:
                ((at = (x ? "<" : "(") + o[pt][0] + (x ? ">" : ")")),
                  (it = parseFloat(o[pt][1])),
                  (st = parseFloat(o[pt][2])));
                break;
              case ot:
                ((at = (x ? "<" : "(") + o[pt] + (x ? ">" : ")")),
                  (it = yr(e)),
                  (st = br(r)));
            }
            (void 0 !== G && void 0 !== G[pt] && (ft = G[pt] + " Tw\n"),
              0 === pt
                ? t.push(ft + dt(it, st, g) + at)
                : ct === ot
                  ? t.push(ft + at)
                  : ct === ut && t.push(ft + dt(it, st, g) + at));
          }
          ((t = ct === ot ? t.join(" Tj\nT* ") : t.join(" Tj\n")),
            (t += " Tj\n"));
          var gt = "BT\n/";
          return (
            (gt += yt + " " + ht + " Tf\n"),
            (gt += E(ht * S) + " TL\n"),
            (gt += Er + "\n"),
            (gt += y),
            (gt += t),
            et((gt += "ET")),
            (d[yt] = !0),
            v
          );
        }));
    var Ze =
      (p.__private__.clip =
      p.clip =
        function (t) {
          return (et("evenodd" === t ? "W*" : "W"), this);
        });
    ((p.clipEvenOdd = function () {
      return Ze("evenodd");
    }),
      (p.__private__.discardPath = p.discardPath =
        function () {
          return (et("n"), this);
        }));
    var Qe = (p.__private__.isValidStyle = function (t) {
      var e = !1;
      return (
        -1 !==
          [
            void 0,
            null,
            "S",
            "D",
            "F",
            "DF",
            "FD",
            "f",
            "f*",
            "B",
            "B*",
            "n",
          ].indexOf(t) && (e = !0),
        e
      );
    });
    p.__private__.setDefaultPathOperation = p.setDefaultPathOperation =
      function (t) {
        return (Qe(t) && (c = t), this);
      };
    var tr =
        (p.__private__.getStyle =
        p.getStyle =
          function (t) {
            var e = c;
            switch (t) {
              case "D":
              case "S":
                e = "S";
                break;
              case "F":
                e = "f";
                break;
              case "FD":
              case "DF":
                e = "B";
                break;
              case "f":
              case "f*":
              case "B":
              case "B*":
                e = t;
            }
            return e;
          }),
      er = (p.close = function () {
        return (et("h"), this);
      });
    ((p.stroke = function () {
      return (et("S"), this);
    }),
      (p.fill = function (t) {
        return (rr("f", t), this);
      }),
      (p.fillEvenOdd = function (t) {
        return (rr("f*", t), this);
      }),
      (p.fillStroke = function (t) {
        return (rr("B", t), this);
      }),
      (p.fillStrokeEvenOdd = function (t) {
        return (rr("B*", t), this);
      }));
    var rr = function (t, e) {
        "object" === (0, n.Z)(e) ? sr(e, t) : et(t);
      },
      nr = function (t) {
        null === t ||
          (w === b.ADVANCED && void 0 === t) ||
          ((t = tr(t)), et(t));
      };
    function ir(t, e, r, n, i) {
      var s = new Lt(
        e || this.boundingBox,
        r || this.xStep,
        n || this.yStep,
        this.gState,
        i || this.matrix,
      );
      s.stream = this.stream;
      var a = t + "$$" + this.cloneIndex++ + "$$";
      return (Jt(a, s), s);
    }
    var sr = function (t, e) {
        var r = Bt[t.key],
          n = Rt[r];
        if (n instanceof It)
          (et("q"),
            et(ar(e)),
            n.gState && p.setGState(n.gState),
            et(t.matrix.toString() + " cm"),
            et("/" + r + " sh"),
            et("Q"));
        else if (n instanceof Lt) {
          var i = new zt(1, 0, 0, -1, 0, Mr());
          (t.matrix &&
            ((i = i.multiply(t.matrix || Gt)),
            (r = ir.call(n, t.key, t.boundingBox, t.xStep, t.yStep, i).id)),
            et("q"),
            et("/Pattern cs"),
            et("/" + r + " scn"),
            n.gState && p.setGState(n.gState),
            et(e),
            et("Q"));
        }
      },
      ar = function (t) {
        switch (t) {
          case "f":
          case "F":
            return "W n";
          case "f*":
            return "W* n";
          case "B":
            return "W S";
          case "B*":
            return "W* S";
          case "S":
            return "W S";
          case "n":
            return "W n";
        }
      },
      or = (p.moveTo = function (t, e) {
        return (et(E(L(t)) + " " + E(D(e)) + " m"), this);
      }),
      hr = (p.lineTo = function (t, e) {
        return (et(E(L(t)) + " " + E(D(e)) + " l"), this);
      }),
      ur = (p.curveTo = function (t, e, r, n, i, s) {
        return (
          et(
            [E(L(t)), E(D(e)), E(L(r)), E(D(n)), E(L(i)), E(D(s)), "c"].join(
              " ",
            ),
          ),
          this
        );
      });
    ((p.__private__.line = p.line =
      function (t, e, r, n, i) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i))
          throw new Error("Invalid arguments passed to jsPDF.line");
        return w === b.COMPAT
          ? this.lines([[r - t, n - e]], t, e, [1, 1], i || "S")
          : this.lines([[r - t, n - e]], t, e, [1, 1]).stroke();
      }),
      (p.__private__.lines = p.lines =
        function (t, e, r, n, i, s) {
          var a, o, h, u, c, l, f, d, p, g, v, m;
          if (
            ("number" == typeof t && ((m = r), (r = e), (e = t), (t = m)),
            (n = n || [1, 1]),
            (s = s || !1),
            isNaN(e) ||
              isNaN(r) ||
              !Array.isArray(t) ||
              !Array.isArray(n) ||
              !Qe(i) ||
              "boolean" != typeof s)
          )
            throw new Error("Invalid arguments passed to jsPDF.lines");
          for (
            or(e, r), a = n[0], o = n[1], u = t.length, g = e, v = r, h = 0;
            h < u;
            h++
          )
            2 === (c = t[h]).length
              ? ((g = c[0] * a + g), (v = c[1] * o + v), hr(g, v))
              : ((l = c[0] * a + g),
                (f = c[1] * o + v),
                (d = c[2] * a + g),
                (p = c[3] * o + v),
                (g = c[4] * a + g),
                (v = c[5] * o + v),
                ur(l, f, d, p, g, v));
          return (s && er(), nr(i), this);
        }),
      (p.path = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e],
            n = r.c;
          switch (r.op) {
            case "m":
              or(n[0], n[1]);
              break;
            case "l":
              hr(n[0], n[1]);
              break;
            case "c":
              ur.apply(this, n);
              break;
            case "h":
              er();
          }
        }
        return this;
      }),
      (p.__private__.rect = p.rect =
        function (t, e, r, n, i) {
          if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i))
            throw new Error("Invalid arguments passed to jsPDF.rect");
          return (
            w === b.COMPAT && (n = -n),
            et([E(L(t)), E(D(e)), E(L(r)), E(L(n)), "re"].join(" ")),
            nr(i),
            this
          );
        }),
      (p.__private__.triangle = p.triangle =
        function (t, e, r, n, i, s, a) {
          if (
            isNaN(t) ||
            isNaN(e) ||
            isNaN(r) ||
            isNaN(n) ||
            isNaN(i) ||
            isNaN(s) ||
            !Qe(a)
          )
            throw new Error("Invalid arguments passed to jsPDF.triangle");
          return (
            this.lines(
              [
                [r - t, n - e],
                [i - r, s - n],
                [t - i, e - s],
              ],
              t,
              e,
              [1, 1],
              a,
              !0,
            ),
            this
          );
        }),
      (p.__private__.roundedRect = p.roundedRect =
        function (t, e, r, n, i, s, a) {
          if (
            isNaN(t) ||
            isNaN(e) ||
            isNaN(r) ||
            isNaN(n) ||
            isNaN(i) ||
            isNaN(s) ||
            !Qe(a)
          )
            throw new Error("Invalid arguments passed to jsPDF.roundedRect");
          var o = (4 / 3) * (Math.SQRT2 - 1);
          return (
            (i = Math.min(i, 0.5 * r)),
            (s = Math.min(s, 0.5 * n)),
            this.lines(
              [
                [r - 2 * i, 0],
                [i * o, 0, i, s - s * o, i, s],
                [0, n - 2 * s],
                [0, s * o, -i * o, s, -i, s],
                [2 * i - r, 0],
                [-i * o, 0, -i, -s * o, -i, -s],
                [0, 2 * s - n],
                [0, -s * o, i * o, -s, i, -s],
              ],
              t + i,
              e,
              [1, 1],
              a,
              !0,
            ),
            this
          );
        }),
      (p.__private__.ellipse = p.ellipse =
        function (t, e, r, n, i) {
          if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i))
            throw new Error("Invalid arguments passed to jsPDF.ellipse");
          var s = (4 / 3) * (Math.SQRT2 - 1) * r,
            a = (4 / 3) * (Math.SQRT2 - 1) * n;
          return (
            or(t + r, e),
            ur(t + r, e - a, t + s, e - n, t, e - n),
            ur(t - s, e - n, t - r, e - a, t - r, e),
            ur(t - r, e + a, t - s, e + n, t, e + n),
            ur(t + s, e + n, t + r, e + a, t + r, e),
            nr(i),
            this
          );
        }),
      (p.__private__.circle = p.circle =
        function (t, e, r, n) {
          if (isNaN(t) || isNaN(e) || isNaN(r) || !Qe(n))
            throw new Error("Invalid arguments passed to jsPDF.circle");
          return this.ellipse(t, e, r, r, n);
        }),
      (p.setFont = function (t, e, r) {
        return (
          r && (e = A(e, r)),
          (yt = ke(t, e, { disableWarning: !1 })),
          this
        );
      }));
    var cr =
      (p.__private__.getFont =
      p.getFont =
        function () {
          return Pt[ke.apply(p, arguments)];
        });
    ((p.__private__.getFontList = p.getFontList =
      function () {
        var t,
          e,
          r = {};
        for (t in Dt)
          if (Dt.hasOwnProperty(t))
            for (e in ((r[t] = []), Dt[t]))
              Dt[t].hasOwnProperty(e) && r[t].push(e);
        return r;
      }),
      (p.addFont = function (t, e, r, n, i) {
        var s = [
          "StandardEncoding",
          "MacRomanEncoding",
          "Identity-H",
          "WinAnsiEncoding",
        ];
        return (
          arguments[3] && -1 !== s.indexOf(arguments[3])
            ? (i = arguments[3])
            : arguments[3] && -1 == s.indexOf(arguments[3]) && (r = A(r, n)),
          (i = i || "Identity-H"),
          Pe.call(this, t, e, r, i)
        );
      }));
    var lr,
      fr = t.lineWidth || 0.200025,
      dr =
        (p.__private__.getLineWidth =
        p.getLineWidth =
          function () {
            return fr;
          }),
      pr =
        (p.__private__.setLineWidth =
        p.setLineWidth =
          function (t) {
            return ((fr = t), et(E(L(t)) + " w"), this);
          });
    p.__private__.setLineDash =
      Ct.API.setLineDash =
      Ct.API.setLineDashPattern =
        function (t, e) {
          if (((t = t || []), (e = e || 0), isNaN(e) || !Array.isArray(t)))
            throw new Error("Invalid arguments passed to jsPDF.setLineDash");
          return (
            (t = t
              .map(function (t) {
                return E(L(t));
              })
              .join(" ")),
            (e = E(L(e))),
            et("[" + t + "] " + e + " d"),
            this
          );
        };
    var gr =
      (p.__private__.getLineHeight =
      p.getLineHeight =
        function () {
          return ht * lr;
        });
    p.__private__.getLineHeight = p.getLineHeight = function () {
      return ht * lr;
    };
    var vr =
        (p.__private__.setLineHeightFactor =
        p.setLineHeightFactor =
          function (t) {
            return ("number" == typeof (t = t || 1.15) && (lr = t), this);
          }),
      mr =
        (p.__private__.getLineHeightFactor =
        p.getLineHeightFactor =
          function () {
            return lr;
          });
    vr(t.lineHeight);
    var yr = (p.__private__.getHorizontalCoordinate = function (t) {
        return L(t);
      }),
      br = (p.__private__.getVerticalCoordinate = function (t) {
        return w === b.ADVANCED
          ? t
          : Mt[q].mediaBox.topRightY - Mt[q].mediaBox.bottomLeftY - L(t);
      }),
      wr =
        (p.__private__.getHorizontalCoordinateString =
        p.getHorizontalCoordinateString =
          function (t) {
            return E(yr(t));
          }),
      xr =
        (p.__private__.getVerticalCoordinateString =
        p.getVerticalCoordinateString =
          function (t) {
            return E(br(t));
          }),
      Sr = t.strokeColor || "0 G";
    ((p.__private__.getStrokeColor = p.getDrawColor =
      function () {
        return ee(Sr);
      }),
      (p.__private__.setStrokeColor = p.setDrawColor =
        function (t, e, r, n) {
          return (
            (Sr = re({
              ch1: t,
              ch2: e,
              ch3: r,
              ch4: n,
              pdfColorType: "draw",
              precision: 2,
            })),
            et(Sr),
            this
          );
        }));
    var Ar = t.fillColor || "0 g";
    ((p.__private__.getFillColor = p.getFillColor =
      function () {
        return ee(Ar);
      }),
      (p.__private__.setFillColor = p.setFillColor =
        function (t, e, r, n) {
          return (
            (Ar = re({
              ch1: t,
              ch2: e,
              ch3: r,
              ch4: n,
              pdfColorType: "fill",
              precision: 2,
            })),
            et(Ar),
            this
          );
        }));
    var Er = t.textColor || "0 g",
      Fr =
        (p.__private__.getTextColor =
        p.getTextColor =
          function () {
            return ee(Er);
          });
    p.__private__.setTextColor = p.setTextColor = function (t, e, r, n) {
      return (
        (Er = re({
          ch1: t,
          ch2: e,
          ch3: r,
          ch4: n,
          pdfColorType: "text",
          precision: 3,
        })),
        this
      );
    };
    var Nr = t.charSpace,
      Pr =
        (p.__private__.getCharSpace =
        p.getCharSpace =
          function () {
            return parseFloat(Nr || 0);
          });
    p.__private__.setCharSpace = p.setCharSpace = function (t) {
      if (isNaN(t))
        throw new Error("Invalid argument passed to jsPDF.setCharSpace");
      return ((Nr = t), this);
    };
    var Ir = 0;
    ((p.CapJoinStyles = {
      0: 0,
      butt: 0,
      but: 0,
      miter: 0,
      1: 1,
      round: 1,
      rounded: 1,
      circle: 1,
      2: 2,
      projecting: 2,
      project: 2,
      square: 2,
      bevel: 2,
    }),
      (p.__private__.setLineCap = p.setLineCap =
        function (t) {
          var e = p.CapJoinStyles[t];
          if (void 0 === e)
            throw new Error(
              "Line cap style of '" +
                t +
                "' is not recognized. See or extend .CapJoinStyles property for valid styles",
            );
          return ((Ir = e), et(e + " J"), this);
        }));
    var Lr = 0;
    ((p.__private__.setLineJoin = p.setLineJoin =
      function (t) {
        var e = p.CapJoinStyles[t];
        if (void 0 === e)
          throw new Error(
            "Line join style of '" +
              t +
              "' is not recognized. See or extend .CapJoinStyles property for valid styles",
          );
        return ((Lr = e), et(e + " j"), this);
      }),
      (p.__private__.setLineMiterLimit =
        p.__private__.setMiterLimit =
        p.setLineMiterLimit =
        p.setMiterLimit =
          function (t) {
            if (((t = t || 0), isNaN(t)))
              throw new Error(
                "Invalid argument passed to jsPDF.setLineMiterLimit",
              );
            return (et(E(L(t)) + " M"), this);
          }),
      (p.GState = Nt),
      (p.setGState = function (t) {
        (t = "string" == typeof t ? Tt[jt[t]] : Cr(null, t)).equals(kt) ||
          (et("/" + t.id + " gs"), (kt = t));
      }));
    var Cr = function (t, e) {
      if (!t || !jt[t]) {
        var r = !1;
        for (var n in Tt)
          if (Tt.hasOwnProperty(n) && Tt[n].equals(e)) {
            r = !0;
            break;
          }
        if (r) e = Tt[n];
        else {
          var i = "GS" + (Object.keys(Tt).length + 1).toString(10);
          ((Tt[i] = e), (e.id = i));
        }
        return (t && (jt[t] = e.id), qt.publish("addGState", e), e);
      }
    };
    ((p.addGState = function (t, e) {
      return (Cr(t, e), this);
    }),
      (p.saveGraphicsState = function () {
        return (et("q"), _t.push({ key: yt, size: ht, color: Er }), this);
      }),
      (p.restoreGraphicsState = function () {
        et("Q");
        var t = _t.pop();
        return ((yt = t.key), (ht = t.size), (Er = t.color), (kt = null), this);
      }),
      (p.setCurrentTransformationMatrix = function (t) {
        return (et(t.toString() + " cm"), this);
      }),
      (p.comment = function (t) {
        return (et("#" + t), this);
      }));
    var Dr = function (t, e) {
        var r = t || 0;
        Object.defineProperty(this, "x", {
          enumerable: !0,
          get: function () {
            return r;
          },
          set: function (t) {
            isNaN(t) || (r = parseFloat(t));
          },
        });
        var n = e || 0;
        Object.defineProperty(this, "y", {
          enumerable: !0,
          get: function () {
            return n;
          },
          set: function (t) {
            isNaN(t) || (n = parseFloat(t));
          },
        });
        var i = "pt";
        return (
          Object.defineProperty(this, "type", {
            enumerable: !0,
            get: function () {
              return i;
            },
            set: function (t) {
              i = t.toString();
            },
          }),
          this
        );
      },
      _r = function (t, e, r, n) {
        (Dr.call(this, t, e), (this.type = "rect"));
        var i = r || 0;
        Object.defineProperty(this, "w", {
          enumerable: !0,
          get: function () {
            return i;
          },
          set: function (t) {
            isNaN(t) || (i = parseFloat(t));
          },
        });
        var s = n || 0;
        return (
          Object.defineProperty(this, "h", {
            enumerable: !0,
            get: function () {
              return s;
            },
            set: function (t) {
              isNaN(t) || (s = parseFloat(t));
            },
          }),
          this
        );
      },
      Rr = function () {
        ((this.page = Ot),
          (this.currentPage = q),
          (this.pages = J.slice(0)),
          (this.pagesContext = Mt.slice(0)),
          (this.x = wt),
          (this.y = xt),
          (this.matrix = St),
          (this.width = kr(q)),
          (this.height = Mr(q)),
          (this.outputDestination = Y),
          (this.id = ""),
          (this.objectNumber = -1));
      };
    Rr.prototype.restore = function () {
      ((Ot = this.page),
        (q = this.currentPage),
        (Mt = this.pagesContext),
        (J = this.pages),
        (wt = this.x),
        (xt = this.y),
        (St = this.matrix),
        Or(q, this.width),
        qr(q, this.height),
        (Y = this.outputDestination));
    };
    var Br = function (t, e, r, n, i) {
        (Kt.push(new Rr()),
          (Ot = q = 0),
          (J = []),
          (wt = t),
          (xt = e),
          (St = i),
          _e([r, n]));
      },
      Tr = function (t) {
        if (Ut[t]) Kt.pop().restore();
        else {
          var e = new Rr(),
            r = "Xo" + (Object.keys(Vt).length + 1).toString(10);
          ((e.id = r),
            (Ut[t] = r),
            (Vt[r] = e),
            qt.publish("addFormObject", e),
            Kt.pop().restore());
        }
      };
    for (var jr in ((p.beginFormObject = function (t, e, r, n, i) {
      return (Br(t, e, r, n, i), this);
    }),
    (p.endFormObject = function (t) {
      return (Tr(t), this);
    }),
    (p.doFormObject = function (t, e) {
      var r = Vt[Ut[t]];
      return (
        et("q"),
        et(e.toString() + " cm"),
        et("/" + r.id + " Do"),
        et("Q"),
        this
      );
    }),
    (p.getFormObject = function (t) {
      var e = Vt[Ut[t]];
      return {
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
        matrix: e.matrix,
      };
    }),
    (p.save = function (t, e) {
      return (
        (t = t || "generated.pdf"),
        ((e = e || {}).returnPromise = e.returnPromise || !1),
        !1 === e.returnPromise
          ? (st(Ke(Ue()), t),
            "function" == typeof st.unload &&
              $.setTimeout &&
              setTimeout(st.unload, 911),
            this)
          : new Promise(function (e, r) {
              try {
                var n = st(Ke(Ue()), t);
                ("function" == typeof st.unload &&
                  $.setTimeout &&
                  setTimeout(st.unload, 911),
                  e(n));
              } catch (t) {
                r(t.message);
              }
            })
      );
    }),
    Ct.API))
      Ct.API.hasOwnProperty(jr) &&
        ("events" === jr && Ct.API.events.length
          ? (function (t, e) {
              var r, n, i;
              for (i = e.length - 1; -1 !== i; i--)
                ((r = e[i][0]),
                  (n = e[i][1]),
                  t.subscribe.apply(
                    t,
                    [r].concat("function" == typeof n ? [n] : n),
                  ));
            })(qt, Ct.API.events)
          : (p[jr] = Ct.API[jr]));
    var kr = (p.getPageWidth = function (t) {
        return (
          (Mt[(t = t || q)].mediaBox.topRightX - Mt[t].mediaBox.bottomLeftX) /
          bt
        );
      }),
      Or = (p.setPageWidth = function (t, e) {
        Mt[t].mediaBox.topRightX = e * bt + Mt[t].mediaBox.bottomLeftX;
      }),
      Mr = (p.getPageHeight = function (t) {
        return (
          (Mt[(t = t || q)].mediaBox.topRightY - Mt[t].mediaBox.bottomLeftY) /
          bt
        );
      }),
      qr = (p.setPageHeight = function (t, e) {
        Mt[t].mediaBox.topRightY = e * bt + Mt[t].mediaBox.bottomLeftY;
      });
    return (
      (p.internal = {
        pdfEscape: De,
        getStyle: tr,
        getFont: cr,
        getFontSize: ct,
        getCharSpace: Pr,
        getTextColor: Fr,
        getLineHeight: gr,
        getLineHeightFactor: mr,
        getLineWidth: dr,
        write: rt,
        getHorizontalCoordinate: yr,
        getVerticalCoordinate: br,
        getCoordinateString: wr,
        getVerticalCoordinateString: xr,
        collections: {},
        newObject: Xt,
        newAdditionalObject: Zt,
        newObjectDeferred: Yt,
        newObjectDeferredBegin: $t,
        getFilters: ne,
        putStream: ie,
        events: qt,
        scaleFactor: bt,
        pageSize: {
          getWidth: function () {
            return kr(q);
          },
          setWidth: function (t) {
            Or(q, t);
          },
          getHeight: function () {
            return Mr(q);
          },
          setHeight: function (t) {
            qr(q, t);
          },
        },
        encryptionOptions: l,
        encryption: Ge,
        getEncryptor: Je,
        output: ze,
        getNumberOfPages: je,
        pages: J,
        out: et,
        f2: P,
        f3: I,
        getPageInfo: Xe,
        getPageInfoByObjId: Ye,
        getCurrentPageInfo: $e,
        getPDFVersion: v,
        Point: Dr,
        Rectangle: _r,
        Matrix: zt,
        hasHotfix: We,
      }),
      Object.defineProperty(p.internal.pageSize, "width", {
        get: function () {
          return kr(q);
        },
        set: function (t) {
          Or(q, t);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(p.internal.pageSize, "height", {
        get: function () {
          return Mr(q);
        },
        set: function (t) {
          qr(q, t);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Ie.call(p, ot),
      (yt = "F1"),
      Re(s, r),
      qt.publish("initialized"),
      p
    );
  }
  ((At.prototype.lsbFirstWord = function (t) {
    return String.fromCharCode(
      (t >> 0) & 255,
      (t >> 8) & 255,
      (t >> 16) & 255,
      (t >> 24) & 255,
    );
  }),
    (At.prototype.toHexString = function (t) {
      return t
        .split("")
        .map(function (t) {
          return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
        })
        .join("");
    }),
    (At.prototype.hexToBytes = function (t) {
      for (var e = [], r = 0; r < t.length; r += 2)
        e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16)));
      return e.join("");
    }),
    (At.prototype.processOwnerPassword = function (t, e) {
      return xt(yt(e).substr(0, 5), t);
    }),
    (At.prototype.encryptor = function (t, e) {
      var r = yt(
        this.encryptionKey +
          String.fromCharCode(
            255 & t,
            (t >> 8) & 255,
            (t >> 16) & 255,
            255 & e,
            (e >> 8) & 255,
          ),
      ).substr(0, 10);
      return function (t) {
        return xt(r, t);
      };
    }),
    (Nt.prototype.equals = function (t) {
      var e,
        r = "id,objectNumber,equals";
      if (!t || (0, n.Z)(t) !== (0, n.Z)(this)) return !1;
      var i = 0;
      for (e in this)
        if (!(r.indexOf(e) >= 0)) {
          if (this.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
          if (this[e] !== t[e]) return !1;
          i++;
        }
      for (e in t) t.hasOwnProperty(e) && r.indexOf(e) < 0 && i--;
      return 0 === i;
    }),
    (Ct.API = { events: [] }),
    (Ct.version = "2.5.1"));
  var Dt = Ct.API,
    _t = 1,
    Rt = function (t) {
      return t
        .replace(/\\/g, "\\\\")
        .replace(/\(/g, "\\(")
        .replace(/\)/g, "\\)");
    },
    Bt = function (t) {
      return t
        .replace(/\\\\/g, "\\")
        .replace(/\\\(/g, "(")
        .replace(/\\\)/g, ")");
    },
    Tt = function (t) {
      return t.toFixed(2);
    },
    jt = function (t) {
      return t.toFixed(5);
    };
  Dt.__acroform__ = {};
  var kt = function (t, e) {
      ((t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t));
    },
    Ot = function (t) {
      return t * _t;
    },
    Mt = function (t) {
      var e = new ne(),
        r = me.internal.getHeight(t) || 0,
        n = me.internal.getWidth(t) || 0;
      return ((e.BBox = [0, 0, Number(Tt(n)), Number(Tt(r))]), e);
    },
    qt = (Dt.__acroform__.setBit = function (t, e) {
      if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
        throw new Error(
          "Invalid arguments passed to jsPDF.API.__acroform__.setBit",
        );
      return t | (1 << e);
    }),
    Ht = (Dt.__acroform__.clearBit = function (t, e) {
      if (((t = t || 0), (e = e || 0), isNaN(t) || isNaN(e)))
        throw new Error(
          "Invalid arguments passed to jsPDF.API.__acroform__.clearBit",
        );
      return t & ~(1 << e);
    }),
    Vt = (Dt.__acroform__.getBit = function (t, e) {
      if (isNaN(t) || isNaN(e))
        throw new Error(
          "Invalid arguments passed to jsPDF.API.__acroform__.getBit",
        );
      return 0 == (t & (1 << e)) ? 0 : 1;
    }),
    Ut = (Dt.__acroform__.getBitForPdf = function (t, e) {
      if (isNaN(t) || isNaN(e))
        throw new Error(
          "Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf",
        );
      return Vt(t, e - 1);
    }),
    Kt = (Dt.__acroform__.setBitForPdf = function (t, e) {
      if (isNaN(t) || isNaN(e))
        throw new Error(
          "Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf",
        );
      return qt(t, e - 1);
    }),
    zt = (Dt.__acroform__.clearBitForPdf = function (t, e) {
      if (isNaN(t) || isNaN(e))
        throw new Error(
          "Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf",
        );
      return Ht(t, e - 1);
    }),
    Wt = (Dt.__acroform__.calculateCoordinates = function (t, e) {
      var r = e.internal.getHorizontalCoordinate,
        n = e.internal.getVerticalCoordinate,
        i = t[0],
        s = t[1],
        a = t[2],
        o = t[3],
        h = {};
      return (
        (h.lowerLeft_X = r(i) || 0),
        (h.lowerLeft_Y = n(s + o) || 0),
        (h.upperRight_X = r(i + a) || 0),
        (h.upperRight_Y = n(s) || 0),
        [
          Number(Tt(h.lowerLeft_X)),
          Number(Tt(h.lowerLeft_Y)),
          Number(Tt(h.upperRight_X)),
          Number(Tt(h.upperRight_Y)),
        ]
      );
    }),
    Gt = function (t) {
      if (t.appearanceStreamContent) return t.appearanceStreamContent;
      if (t.V || t.DV) {
        var e = [],
          r = t._V || t.DV,
          n = Jt(t, r),
          i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
        (e.push("/Tx BMC"),
          e.push("q"),
          e.push("BT"),
          e.push(t.scope.__private__.encodeColorString(t.color)),
          e.push("/" + i + " " + Tt(n.fontSize) + " Tf"),
          e.push("1 0 0 1 0 0 Tm"),
          e.push(n.text),
          e.push("ET"),
          e.push("Q"),
          e.push("EMC"));
        var s = Mt(t);
        return ((s.scope = t.scope), (s.stream = e.join("\n")), s);
      }
    },
    Jt = function (t, e) {
      var r = 0 === t.fontSize ? t.maxFontSize : t.fontSize,
        n = { text: "", fontSize: "" },
        i = (e =
          ")" ==
          (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1)
            ? e.substr(0, e.length - 1)
            : e).split(" ");
      i = t.multiline
        ? i.map(function (t) {
            return t.split("\n");
          })
        : i.map(function (t) {
            return [t];
          });
      var s = r,
        a = me.internal.getHeight(t) || 0;
      a = a < 0 ? -a : a;
      var o = me.internal.getWidth(t) || 0;
      o = o < 0 ? -o : o;
      var h = function (e, r, n) {
        if (e + 1 < i.length) {
          var s = r + " " + i[e + 1][0];
          return Xt(s, t, n).width <= o - 4;
        }
        return !1;
      };
      s++;
      t: for (; s > 0; ) {
        ((e = ""), s--);
        var u,
          c,
          l = Xt("3", t, s).height,
          f = t.multiline ? a - s : (a - l) / 2,
          d = (f += 2),
          p = 0,
          g = 0,
          v = 0;
        if (s <= 0) {
          ((e = "(...) Tj\n"),
            (e +=
              "% Width of Text: " +
              Xt(e, t, (s = 12)).width +
              ", FieldWidth:" +
              o +
              "\n"));
          break;
        }
        for (var m = "", y = 0, b = 0; b < i.length; b++)
          if (i.hasOwnProperty(b)) {
            var w = !1;
            if (1 !== i[b].length && v !== i[b].length - 1) {
              if ((l + 2) * (y + 2) + 2 > a) continue t;
              ((m += i[b][v]), (w = !0), (g = b), b--);
            } else {
              m =
                " " == (m += i[b][v] + " ").substr(m.length - 1)
                  ? m.substr(0, m.length - 1)
                  : m;
              var x = parseInt(b),
                S = h(x, m, s),
                A = b >= i.length - 1;
              if (S && !A) {
                ((m += " "), (v = 0));
                continue;
              }
              if (S || A) {
                if (A) g = x;
                else if (t.multiline && (l + 2) * (y + 2) + 2 > a) continue t;
              } else {
                if (!t.multiline) continue t;
                if ((l + 2) * (y + 2) + 2 > a) continue t;
                g = x;
              }
            }
            for (var E = "", F = p; F <= g; F++) {
              var N = i[F];
              if (t.multiline) {
                if (F === g) {
                  ((E += N[v] + " "), (v = (v + 1) % N.length));
                  continue;
                }
                if (F === p) {
                  E += N[N.length - 1] + " ";
                  continue;
                }
              }
              E += N[0] + " ";
            }
            switch (
              ((E =
                " " == E.substr(E.length - 1) ? E.substr(0, E.length - 1) : E),
              (c = Xt(E, t, s).width),
              t.textAlign)
            ) {
              case "right":
                u = o - c - 2;
                break;
              case "center":
                u = (o - c) / 2;
                break;
              case "left":
              default:
                u = 2;
            }
            ((e += Tt(u) + " " + Tt(d) + " Td\n"),
              (e += "(" + Rt(E) + ") Tj\n"),
              (e += -Tt(u) + " 0 Td\n"),
              (d = -(s + 2)),
              (c = 0),
              (p = w ? g : g + 1),
              y++,
              (m = ""));
          }
        break;
      }
      return ((n.text = e), (n.fontSize = s), n);
    },
    Xt = function (t, e, r) {
      var n = e.scope.internal.getFont(e.fontName, e.fontStyle),
        i =
          e.scope.getStringUnitWidth(t, {
            font: n,
            fontSize: parseFloat(r),
            charSpace: 0,
          }) * parseFloat(r);
      return {
        height:
          e.scope.getStringUnitWidth("3", {
            font: n,
            fontSize: parseFloat(r),
            charSpace: 0,
          }) *
          parseFloat(r) *
          1.5,
        width: i,
      };
    },
    Yt = {
      fields: [],
      xForms: [],
      acroFormDictionaryRoot: null,
      printedOut: !1,
      internal: null,
      isInitialized: !1,
    },
    $t = function (t, e) {
      var r = { type: "reference", object: t };
      void 0 ===
        e.internal
          .getPageInfo(t.page)
          .pageContext.annotations.find(function (t) {
            return t.type === r.type && t.object === r.object;
          }) && e.internal.getPageInfo(t.page).pageContext.annotations.push(r);
    },
    Zt = function (t, e) {
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var i = r,
            s = t[r];
          (e.internal.newObjectDeferredBegin(s.objId, !0),
            "object" === (0, n.Z)(s) &&
              "function" == typeof s.putStream &&
              s.putStream(),
            delete t[i]);
        }
    },
    Qt = function (t, e) {
      if (
        ((e.scope = t),
        void 0 !== t.internal &&
          (void 0 === t.internal.acroformPlugin ||
            !1 === t.internal.acroformPlugin.isInitialized))
      ) {
        if (
          ((se.FieldNum = 0),
          (t.internal.acroformPlugin = JSON.parse(JSON.stringify(Yt))),
          t.internal.acroformPlugin.acroFormDictionaryRoot)
        )
          throw new Error("Exception while creating AcroformDictionary");
        ((_t = t.internal.scaleFactor),
          (t.internal.acroformPlugin.acroFormDictionaryRoot = new ie()),
          (t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t),
          (t.internal.acroformPlugin.acroFormDictionaryRoot._eventID =
            t.internal.events.subscribe("postPutResources", function () {
              !(function (t) {
                (t.internal.events.unsubscribe(
                  t.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
                ),
                  delete t.internal.acroformPlugin.acroFormDictionaryRoot
                    ._eventID,
                  (t.internal.acroformPlugin.printedOut = !0));
              })(t);
            })),
          t.internal.events.subscribe("buildDocument", function () {
            !(function (t) {
              t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
              var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
              for (var r in e)
                if (e.hasOwnProperty(r)) {
                  var n = e[r];
                  ((n.objId = void 0), n.hasAnnotation && $t(n, t));
                }
            })(t);
          }),
          t.internal.events.subscribe("putCatalog", function () {
            !(function (t) {
              if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot)
                throw new Error("putCatalogCallback: Root missing.");
              t.internal.write(
                "/AcroForm " +
                  t.internal.acroformPlugin.acroFormDictionaryRoot.objId +
                  " 0 R",
              );
            })(t);
          }),
          t.internal.events.subscribe("postPutPages", function (e) {
            !(function (t, e) {
              var r = !t;
              for (var i in (t ||
                (e.internal.newObjectDeferredBegin(
                  e.internal.acroformPlugin.acroFormDictionaryRoot.objId,
                  !0,
                ),
                e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
              (t = t || e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
                if (t.hasOwnProperty(i)) {
                  var s = t[i],
                    a = [],
                    o = s.Rect;
                  if (
                    (s.Rect && (s.Rect = Wt(s.Rect, e)),
                    e.internal.newObjectDeferredBegin(s.objId, !0),
                    (s.DA = me.createDefaultAppearanceStream(s)),
                    "object" === (0, n.Z)(s) &&
                      "function" == typeof s.getKeyValueListForStream &&
                      (a = s.getKeyValueListForStream()),
                    (s.Rect = o),
                    s.hasAppearanceStream && !s.appearanceStreamContent)
                  ) {
                    var h = Gt(s);
                    (a.push({ key: "AP", value: "<</N " + h + ">>" }),
                      e.internal.acroformPlugin.xForms.push(h));
                  }
                  if (s.appearanceStreamContent) {
                    var u = "";
                    for (var c in s.appearanceStreamContent)
                      if (s.appearanceStreamContent.hasOwnProperty(c)) {
                        var l = s.appearanceStreamContent[c];
                        if (
                          ((u += "/" + c + " "),
                          (u += "<<"),
                          Object.keys(l).length >= 1 || Array.isArray(l))
                        ) {
                          for (var i in l)
                            if (l.hasOwnProperty(i)) {
                              var f = l[i];
                              ("function" == typeof f && (f = f.call(e, s)),
                                (u += "/" + i + " " + f + " "),
                                e.internal.acroformPlugin.xForms.indexOf(f) >=
                                  0 ||
                                  e.internal.acroformPlugin.xForms.push(f));
                            }
                        } else
                          ("function" == typeof (f = l) && (f = f.call(e, s)),
                            (u += "/" + i + " " + f),
                            e.internal.acroformPlugin.xForms.indexOf(f) >= 0 ||
                              e.internal.acroformPlugin.xForms.push(f));
                        u += ">>";
                      }
                    a.push({ key: "AP", value: "<<\n" + u + ">>" });
                  }
                  (e.internal.putStream({
                    additionalKeyValues: a,
                    objectId: s.objId,
                  }),
                    e.internal.out("endobj"));
                }
              r && Zt(e.internal.acroformPlugin.xForms, e);
            })(e, t);
          }),
          (t.internal.acroformPlugin.isInitialized = !0));
      }
    },
    te = (Dt.__acroform__.arrayToPdfArray = function (t, e, r) {
      var i = function (t) {
        return t;
      };
      if (Array.isArray(t)) {
        for (var s = "[", a = 0; a < t.length; a++)
          switch ((0 !== a && (s += " "), (0, n.Z)(t[a]))) {
            case "boolean":
            case "number":
            case "object":
              s += t[a].toString();
              break;
            case "string":
              "/" !== t[a].substr(0, 1)
                ? (void 0 !== e && r && (i = r.internal.getEncryptor(e)),
                  (s += "(" + Rt(i(t[a].toString())) + ")"))
                : (s += t[a].toString());
          }
        return s + "]";
      }
      throw new Error(
        "Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray",
      );
    }),
    ee = function (t, e, r) {
      var n = function (t) {
        return t;
      };
      return (
        void 0 !== e && r && (n = r.internal.getEncryptor(e)),
        (t = t || "").toString(),
        "(" + Rt(n(t)) + ")"
      );
    },
    re = function () {
      ((this._objId = void 0),
        (this._scope = void 0),
        Object.defineProperty(this, "objId", {
          get: function () {
            if (void 0 === this._objId) {
              if (void 0 === this.scope) return;
              this._objId = this.scope.internal.newObjectDeferred();
            }
            return this._objId;
          },
          set: function (t) {
            this._objId = t;
          },
        }),
        Object.defineProperty(this, "scope", {
          value: this._scope,
          writable: !0,
        }));
    };
  ((re.prototype.toString = function () {
    return this.objId + " 0 R";
  }),
    (re.prototype.putStream = function () {
      var t = this.getKeyValueListForStream();
      (this.scope.internal.putStream({
        data: this.stream,
        additionalKeyValues: t,
        objectId: this.objId,
      }),
        this.scope.internal.out("endobj"));
    }),
    (re.prototype.getKeyValueListForStream = function () {
      var t = [],
        e = Object.getOwnPropertyNames(this).filter(function (t) {
          return (
            "content" != t &&
            "appearanceStreamContent" != t &&
            "scope" != t &&
            "objId" != t &&
            "_" != t.substring(0, 1)
          );
        });
      for (var r in e)
        if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
          var n = e[r],
            i = this[n];
          i &&
            (Array.isArray(i)
              ? t.push({ key: n, value: te(i, this.objId, this.scope) })
              : i instanceof re
                ? ((i.scope = this.scope),
                  t.push({ key: n, value: i.objId + " 0 R" }))
                : "function" != typeof i && t.push({ key: n, value: i }));
        }
      return t;
    }));
  var ne = function () {
    (re.call(this),
      Object.defineProperty(this, "Type", {
        value: "/XObject",
        configurable: !1,
        writable: !0,
      }),
      Object.defineProperty(this, "Subtype", {
        value: "/Form",
        configurable: !1,
        writable: !0,
      }),
      Object.defineProperty(this, "FormType", {
        value: 1,
        configurable: !1,
        writable: !0,
      }));
    var t,
      e = [];
    (Object.defineProperty(this, "BBox", {
      configurable: !1,
      get: function () {
        return e;
      },
      set: function (t) {
        e = t;
      },
    }),
      Object.defineProperty(this, "Resources", {
        value: "2 0 R",
        configurable: !1,
        writable: !0,
      }),
      Object.defineProperty(this, "stream", {
        enumerable: !1,
        configurable: !0,
        set: function (e) {
          t = e.trim();
        },
        get: function () {
          return t || null;
        },
      }));
  };
  kt(ne, re);
  var ie = function () {
    re.call(this);
    var t,
      e = [];
    (Object.defineProperty(this, "Kids", {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return e.length > 0 ? e : void 0;
      },
    }),
      Object.defineProperty(this, "Fields", {
        enumerable: !1,
        configurable: !1,
        get: function () {
          return e;
        },
      }),
      Object.defineProperty(this, "DA", {
        enumerable: !1,
        configurable: !1,
        get: function () {
          if (t) {
            var e = function (t) {
              return t;
            };
            return (
              this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
              "(" + Rt(e(t)) + ")"
            );
          }
        },
        set: function (e) {
          t = e;
        },
      }));
  };
  kt(ie, re);
  var se = function t() {
    re.call(this);
    var e = 4;
    (Object.defineProperty(this, "F", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return e;
      },
      set: function (t) {
        if (isNaN(t))
          throw new Error(
            'Invalid value "' + t + '" for attribute F supplied.',
          );
        e = t;
      },
    }),
      Object.defineProperty(this, "showWhenPrinted", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(e, 3));
        },
        set: function (t) {
          !0 === Boolean(t) ? (this.F = Kt(e, 3)) : (this.F = zt(e, 3));
        },
      }));
    var r = 0;
    Object.defineProperty(this, "Ff", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        return r;
      },
      set: function (t) {
        if (isNaN(t))
          throw new Error(
            'Invalid value "' + t + '" for attribute Ff supplied.',
          );
        r = t;
      },
    });
    var n = [];
    (Object.defineProperty(this, "Rect", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (0 !== n.length) return n;
      },
      set: function (t) {
        n = void 0 !== t ? t : [];
      },
    }),
      Object.defineProperty(this, "x", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return !n || isNaN(n[0]) ? 0 : n[0];
        },
        set: function (t) {
          n[0] = t;
        },
      }),
      Object.defineProperty(this, "y", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return !n || isNaN(n[1]) ? 0 : n[1];
        },
        set: function (t) {
          n[1] = t;
        },
      }),
      Object.defineProperty(this, "width", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return !n || isNaN(n[2]) ? 0 : n[2];
        },
        set: function (t) {
          n[2] = t;
        },
      }),
      Object.defineProperty(this, "height", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return !n || isNaN(n[3]) ? 0 : n[3];
        },
        set: function (t) {
          n[3] = t;
        },
      }));
    var i = "";
    Object.defineProperty(this, "FT", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return i;
      },
      set: function (t) {
        switch (t) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            i = t;
            break;
          default:
            throw new Error(
              'Invalid value "' + t + '" for attribute FT supplied.',
            );
        }
      },
    });
    var s = null;
    (Object.defineProperty(this, "T", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        if (!s || s.length < 1) {
          if (this instanceof de) return;
          s = "FieldObject" + t.FieldNum++;
        }
        var e = function (t) {
          return t;
        };
        return (
          this.scope && (e = this.scope.internal.getEncryptor(this.objId)),
          "(" + Rt(e(s)) + ")"
        );
      },
      set: function (t) {
        s = t.toString();
      },
    }),
      Object.defineProperty(this, "fieldName", {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (t) {
          s = t;
        },
      }));
    var a = "helvetica";
    Object.defineProperty(this, "fontName", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return a;
      },
      set: function (t) {
        a = t;
      },
    });
    var o = "normal";
    Object.defineProperty(this, "fontStyle", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return o;
      },
      set: function (t) {
        o = t;
      },
    });
    var h = 0;
    Object.defineProperty(this, "fontSize", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return h;
      },
      set: function (t) {
        h = t;
      },
    });
    var u = void 0;
    Object.defineProperty(this, "maxFontSize", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return void 0 === u ? 50 / _t : u;
      },
      set: function (t) {
        u = t;
      },
    });
    var c = "black";
    Object.defineProperty(this, "color", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return c;
      },
      set: function (t) {
        c = t;
      },
    });
    var l = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        if (!(!l || this instanceof de || this instanceof ge))
          return ee(l, this.objId, this.scope);
      },
      set: function (t) {
        ((t = t.toString()), (l = t));
      },
    });
    var f = null;
    (Object.defineProperty(this, "DV", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (f)
          return this instanceof ce == 0 ? ee(f, this.objId, this.scope) : f;
      },
      set: function (t) {
        ((t = t.toString()),
          (f =
            this instanceof ce == 0
              ? "(" === t.substr(0, 1)
                ? Bt(t.substr(1, t.length - 2))
                : Bt(t)
              : t));
      },
    }),
      Object.defineProperty(this, "defaultValue", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return this instanceof ce == 1 ? Bt(f.substr(1, f.length - 1)) : f;
        },
        set: function (t) {
          ((t = t.toString()), (f = this instanceof ce == 1 ? "/" + t : t));
        },
      }));
    var d = null;
    (Object.defineProperty(this, "_V", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        if (d) return d;
      },
      set: function (t) {
        this.V = t;
      },
    }),
      Object.defineProperty(this, "V", {
        enumerable: !1,
        configurable: !1,
        get: function () {
          if (d)
            return this instanceof ce == 0 ? ee(d, this.objId, this.scope) : d;
        },
        set: function (t) {
          ((t = t.toString()),
            (d =
              this instanceof ce == 0
                ? "(" === t.substr(0, 1)
                  ? Bt(t.substr(1, t.length - 2))
                  : Bt(t)
                : t));
        },
      }),
      Object.defineProperty(this, "value", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return this instanceof ce == 1 ? Bt(d.substr(1, d.length - 1)) : d;
        },
        set: function (t) {
          ((t = t.toString()), (d = this instanceof ce == 1 ? "/" + t : t));
        },
      }),
      Object.defineProperty(this, "hasAnnotation", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return this.Rect;
        },
      }),
      Object.defineProperty(this, "Type", {
        enumerable: !0,
        configurable: !1,
        get: function () {
          return this.hasAnnotation ? "/Annot" : null;
        },
      }),
      Object.defineProperty(this, "Subtype", {
        enumerable: !0,
        configurable: !1,
        get: function () {
          return this.hasAnnotation ? "/Widget" : null;
        },
      }));
    var p,
      g = !1;
    (Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: !0,
      configurable: !0,
      get: function () {
        return g;
      },
      set: function (t) {
        ((t = Boolean(t)), (g = t));
      },
    }),
      Object.defineProperty(this, "page", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          if (p) return p;
        },
        set: function (t) {
          p = t;
        },
      }),
      Object.defineProperty(this, "readOnly", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 1));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 1))
            : (this.Ff = zt(this.Ff, 1));
        },
      }),
      Object.defineProperty(this, "required", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 2));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 2))
            : (this.Ff = zt(this.Ff, 2));
        },
      }),
      Object.defineProperty(this, "noExport", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 3));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 3))
            : (this.Ff = zt(this.Ff, 3));
        },
      }));
    var v = null;
    (Object.defineProperty(this, "Q", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        if (null !== v) return v;
      },
      set: function (t) {
        if (-1 === [0, 1, 2].indexOf(t))
          throw new Error(
            'Invalid value "' + t + '" for attribute Q supplied.',
          );
        v = t;
      },
    }),
      Object.defineProperty(this, "textAlign", {
        get: function () {
          var t;
          switch (v) {
            case 0:
            default:
              t = "left";
              break;
            case 1:
              t = "center";
              break;
            case 2:
              t = "right";
          }
          return t;
        },
        configurable: !0,
        enumerable: !0,
        set: function (t) {
          switch (t) {
            case "right":
            case 2:
              v = 2;
              break;
            case "center":
            case 1:
              v = 1;
              break;
            case "left":
            case 0:
            default:
              v = 0;
          }
        },
      }));
  };
  kt(se, re);
  var ae = function () {
    (se.call(this),
      (this.FT = "/Ch"),
      (this.V = "()"),
      (this.fontName = "zapfdingbats"));
    var t = 0;
    (Object.defineProperty(this, "TI", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t;
      },
      set: function (e) {
        t = e;
      },
    }),
      Object.defineProperty(this, "topIndex", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return t;
        },
        set: function (e) {
          t = e;
        },
      }));
    var e = [];
    (Object.defineProperty(this, "Opt", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return te(e, this.objId, this.scope);
      },
      set: function (t) {
        var r, n;
        ((n = []),
          "string" == typeof (r = t) &&
            (n = (function (t, e, r) {
              r || (r = 1);
              for (var n, i = []; (n = e.exec(t)); ) i.push(n[r]);
              return i;
            })(r, /\((.*?)\)/g)),
          (e = n));
      },
    }),
      (this.getOptions = function () {
        return e;
      }),
      (this.setOptions = function (t) {
        ((e = t), this.sort && e.sort());
      }),
      (this.addOption = function (t) {
        ((t = (t = t || "").toString()), e.push(t), this.sort && e.sort());
      }),
      (this.removeOption = function (t, r) {
        for (
          r = r || !1, t = (t = t || "").toString();
          -1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== r);
        );
      }),
      Object.defineProperty(this, "combo", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 18));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 18))
            : (this.Ff = zt(this.Ff, 18));
        },
      }),
      Object.defineProperty(this, "edit", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 19));
        },
        set: function (t) {
          !0 === this.combo &&
            (!0 === Boolean(t)
              ? (this.Ff = Kt(this.Ff, 19))
              : (this.Ff = zt(this.Ff, 19)));
        },
      }),
      Object.defineProperty(this, "sort", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 20));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? ((this.Ff = Kt(this.Ff, 20)), e.sort())
            : (this.Ff = zt(this.Ff, 20));
        },
      }),
      Object.defineProperty(this, "multiSelect", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 22));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 22))
            : (this.Ff = zt(this.Ff, 22));
        },
      }),
      Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 23));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 23))
            : (this.Ff = zt(this.Ff, 23));
        },
      }),
      Object.defineProperty(this, "commitOnSelChange", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 27));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 27))
            : (this.Ff = zt(this.Ff, 27));
        },
      }),
      (this.hasAppearanceStream = !1));
  };
  kt(ae, se);
  var oe = function () {
    (ae.call(this), (this.fontName = "helvetica"), (this.combo = !1));
  };
  kt(oe, ae);
  var he = function () {
    (oe.call(this), (this.combo = !0));
  };
  kt(he, oe);
  var ue = function () {
    (he.call(this), (this.edit = !0));
  };
  kt(ue, he);
  var ce = function () {
    (se.call(this),
      (this.FT = "/Btn"),
      Object.defineProperty(this, "noToggleToOff", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 15));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 15))
            : (this.Ff = zt(this.Ff, 15));
        },
      }),
      Object.defineProperty(this, "radio", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 16));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 16))
            : (this.Ff = zt(this.Ff, 16));
        },
      }),
      Object.defineProperty(this, "pushButton", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 17));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 17))
            : (this.Ff = zt(this.Ff, 17));
        },
      }),
      Object.defineProperty(this, "radioIsUnison", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 26));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 26))
            : (this.Ff = zt(this.Ff, 26));
        },
      }));
    var t,
      e = {};
    (Object.defineProperty(this, "MK", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        var t = function (t) {
          return t;
        };
        if (
          (this.scope && (t = this.scope.internal.getEncryptor(this.objId)),
          0 !== Object.keys(e).length)
        ) {
          var r,
            n = [];
          for (r in (n.push("<<"), e))
            n.push("/" + r + " (" + Rt(t(e[r])) + ")");
          return (n.push(">>"), n.join("\n"));
        }
      },
      set: function (t) {
        "object" === (0, n.Z)(t) && (e = t);
      },
    }),
      Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return e.CA || "";
        },
        set: function (t) {
          "string" == typeof t && (e.CA = t);
        },
      }),
      Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function () {
          return t;
        },
        set: function (e) {
          t = e;
        },
      }),
      Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return t.substr(1, t.length - 1);
        },
        set: function (e) {
          t = "/" + e;
        },
      }));
  };
  kt(ce, se);
  var le = function () {
    (ce.call(this), (this.pushButton = !0));
  };
  kt(le, ce);
  var fe = function () {
    (ce.call(this), (this.radio = !0), (this.pushButton = !1));
    var t = [];
    Object.defineProperty(this, "Kids", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t;
      },
      set: function (e) {
        t = void 0 !== e ? e : [];
      },
    });
  };
  kt(fe, ce);
  var de = function () {
    var t, e;
    (se.call(this),
      Object.defineProperty(this, "Parent", {
        enumerable: !1,
        configurable: !1,
        get: function () {
          return t;
        },
        set: function (e) {
          t = e;
        },
      }),
      Object.defineProperty(this, "optionName", {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return e;
        },
        set: function (t) {
          e = t;
        },
      }));
    var r,
      i = {};
    (Object.defineProperty(this, "MK", {
      enumerable: !1,
      configurable: !1,
      get: function () {
        var t = function (t) {
          return t;
        };
        this.scope && (t = this.scope.internal.getEncryptor(this.objId));
        var e,
          r = [];
        for (e in (r.push("<<"), i)) r.push("/" + e + " (" + Rt(t(i[e])) + ")");
        return (r.push(">>"), r.join("\n"));
      },
      set: function (t) {
        "object" === (0, n.Z)(t) && (i = t);
      },
    }),
      Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return i.CA || "";
        },
        set: function (t) {
          "string" == typeof t && (i.CA = t);
        },
      }),
      Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function () {
          return r;
        },
        set: function (t) {
          r = t;
        },
      }),
      Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return r.substr(1, r.length - 1);
        },
        set: function (t) {
          r = "/" + t;
        },
      }),
      (this.caption = "l"),
      (this.appearanceState = "Off"),
      (this._AppearanceType = me.RadioButton.Circle),
      (this.appearanceStreamContent =
        this._AppearanceType.createAppearanceStream(this.optionName)));
  };
  (kt(de, se),
    (fe.prototype.setAppearance = function (t) {
      if (!("createAppearanceStream" in t) || !("getCA" in t))
        throw new Error(
          "Couldn't assign Appearance to RadioButton. Appearance was Invalid!",
        );
      for (var e in this.Kids)
        if (this.Kids.hasOwnProperty(e)) {
          var r = this.Kids[e];
          ((r.appearanceStreamContent = t.createAppearanceStream(r.optionName)),
            (r.caption = t.getCA()));
        }
    }),
    (fe.prototype.createOption = function (t) {
      var e = new de();
      return (
        (e.Parent = this),
        (e.optionName = t),
        this.Kids.push(e),
        ye.call(this.scope, e),
        e
      );
    }));
  var pe = function () {
    (ce.call(this),
      (this.fontName = "zapfdingbats"),
      (this.caption = "3"),
      (this.appearanceState = "On"),
      (this.value = "On"),
      (this.textAlign = "center"),
      (this.appearanceStreamContent = me.CheckBox.createAppearanceStream()));
  };
  kt(pe, ce);
  var ge = function () {
    (se.call(this),
      (this.FT = "/Tx"),
      Object.defineProperty(this, "multiline", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 13));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 13))
            : (this.Ff = zt(this.Ff, 13));
        },
      }),
      Object.defineProperty(this, "fileSelect", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 21));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 21))
            : (this.Ff = zt(this.Ff, 21));
        },
      }),
      Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 23));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 23))
            : (this.Ff = zt(this.Ff, 23));
        },
      }),
      Object.defineProperty(this, "doNotScroll", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 24));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 24))
            : (this.Ff = zt(this.Ff, 24));
        },
      }),
      Object.defineProperty(this, "comb", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 25));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 25))
            : (this.Ff = zt(this.Ff, 25));
        },
      }),
      Object.defineProperty(this, "richText", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 26));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 26))
            : (this.Ff = zt(this.Ff, 26));
        },
      }));
    var t = null;
    (Object.defineProperty(this, "MaxLen", {
      enumerable: !0,
      configurable: !1,
      get: function () {
        return t;
      },
      set: function (e) {
        t = e;
      },
    }),
      Object.defineProperty(this, "maxLength", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return t;
        },
        set: function (e) {
          Number.isInteger(e) && (t = e);
        },
      }),
      Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return this.V || this.DV;
        },
      }));
  };
  kt(ge, se);
  var ve = function () {
    (ge.call(this),
      Object.defineProperty(this, "password", {
        enumerable: !0,
        configurable: !0,
        get: function () {
          return Boolean(Ut(this.Ff, 14));
        },
        set: function (t) {
          !0 === Boolean(t)
            ? (this.Ff = Kt(this.Ff, 14))
            : (this.Ff = zt(this.Ff, 14));
        },
      }),
      (this.password = !0));
  };
  kt(ve, ge);
  var me = {
    CheckBox: {
      createAppearanceStream: function () {
        return {
          N: { On: me.CheckBox.YesNormal },
          D: { On: me.CheckBox.YesPushDown, Off: me.CheckBox.OffPushDown },
        };
      },
      YesPushDown: function (t) {
        var e = Mt(t);
        e.scope = t.scope;
        var r = [],
          n = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
          i = t.scope.__private__.encodeColorString(t.color),
          s = Jt(t, t.caption);
        return (
          r.push("0.749023 g"),
          r.push(
            "0 0 " +
              Tt(me.internal.getWidth(t)) +
              " " +
              Tt(me.internal.getHeight(t)) +
              " re",
          ),
          r.push("f"),
          r.push("BMC"),
          r.push("q"),
          r.push("0 0 1 rg"),
          r.push("/" + n + " " + Tt(s.fontSize) + " Tf " + i),
          r.push("BT"),
          r.push(s.text),
          r.push("ET"),
          r.push("Q"),
          r.push("EMC"),
          (e.stream = r.join("\n")),
          e
        );
      },
      YesNormal: function (t) {
        var e = Mt(t);
        e.scope = t.scope;
        var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
          n = t.scope.__private__.encodeColorString(t.color),
          i = [],
          s = me.internal.getHeight(t),
          a = me.internal.getWidth(t),
          o = Jt(t, t.caption);
        return (
          i.push("1 g"),
          i.push("0 0 " + Tt(a) + " " + Tt(s) + " re"),
          i.push("f"),
          i.push("q"),
          i.push("0 0 1 rg"),
          i.push("0 0 " + Tt(a - 1) + " " + Tt(s - 1) + " re"),
          i.push("W"),
          i.push("n"),
          i.push("0 g"),
          i.push("BT"),
          i.push("/" + r + " " + Tt(o.fontSize) + " Tf " + n),
          i.push(o.text),
          i.push("ET"),
          i.push("Q"),
          (e.stream = i.join("\n")),
          e
        );
      },
      OffPushDown: function (t) {
        var e = Mt(t);
        e.scope = t.scope;
        var r = [];
        return (
          r.push("0.749023 g"),
          r.push(
            "0 0 " +
              Tt(me.internal.getWidth(t)) +
              " " +
              Tt(me.internal.getHeight(t)) +
              " re",
          ),
          r.push("f"),
          (e.stream = r.join("\n")),
          e
        );
      },
    },
    RadioButton: {
      Circle: {
        createAppearanceStream: function (t) {
          var e = { D: { Off: me.RadioButton.Circle.OffPushDown }, N: {} };
          return (
            (e.N[t] = me.RadioButton.Circle.YesNormal),
            (e.D[t] = me.RadioButton.Circle.YesPushDown),
            e
          );
        },
        getCA: function () {
          return "l";
        },
        YesNormal: function (t) {
          var e = Mt(t);
          e.scope = t.scope;
          var r = [],
            n =
              me.internal.getWidth(t) <= me.internal.getHeight(t)
                ? me.internal.getWidth(t) / 4
                : me.internal.getHeight(t) / 4;
          n = Number((0.9 * n).toFixed(5));
          var i = me.internal.Bezier_C,
            s = Number((n * i).toFixed(5));
          return (
            r.push("q"),
            r.push(
              "1 0 0 1 " +
                jt(me.internal.getWidth(t) / 2) +
                " " +
                jt(me.internal.getHeight(t) / 2) +
                " cm",
            ),
            r.push(n + " 0 m"),
            r.push(n + " " + s + " " + s + " " + n + " 0 " + n + " c"),
            r.push("-" + s + " " + n + " -" + n + " " + s + " -" + n + " 0 c"),
            r.push(
              "-" + n + " -" + s + " -" + s + " -" + n + " 0 -" + n + " c",
            ),
            r.push(s + " -" + n + " " + n + " -" + s + " " + n + " 0 c"),
            r.push("f"),
            r.push("Q"),
            (e.stream = r.join("\n")),
            e
          );
        },
        YesPushDown: function (t) {
          var e = Mt(t);
          e.scope = t.scope;
          var r = [],
            n =
              me.internal.getWidth(t) <= me.internal.getHeight(t)
                ? me.internal.getWidth(t) / 4
                : me.internal.getHeight(t) / 4;
          n = Number((0.9 * n).toFixed(5));
          var i = Number((2 * n).toFixed(5)),
            s = Number((i * me.internal.Bezier_C).toFixed(5)),
            a = Number((n * me.internal.Bezier_C).toFixed(5));
          return (
            r.push("0.749023 g"),
            r.push("q"),
            r.push(
              "1 0 0 1 " +
                jt(me.internal.getWidth(t) / 2) +
                " " +
                jt(me.internal.getHeight(t) / 2) +
                " cm",
            ),
            r.push(i + " 0 m"),
            r.push(i + " " + s + " " + s + " " + i + " 0 " + i + " c"),
            r.push("-" + s + " " + i + " -" + i + " " + s + " -" + i + " 0 c"),
            r.push(
              "-" + i + " -" + s + " -" + s + " -" + i + " 0 -" + i + " c",
            ),
            r.push(s + " -" + i + " " + i + " -" + s + " " + i + " 0 c"),
            r.push("f"),
            r.push("Q"),
            r.push("0 g"),
            r.push("q"),
            r.push(
              "1 0 0 1 " +
                jt(me.internal.getWidth(t) / 2) +
                " " +
                jt(me.internal.getHeight(t) / 2) +
                " cm",
            ),
            r.push(n + " 0 m"),
            r.push(n + " " + a + " " + a + " " + n + " 0 " + n + " c"),
            r.push("-" + a + " " + n + " -" + n + " " + a + " -" + n + " 0 c"),
            r.push(
              "-" + n + " -" + a + " -" + a + " -" + n + " 0 -" + n + " c",
            ),
            r.push(a + " -" + n + " " + n + " -" + a + " " + n + " 0 c"),
            r.push("f"),
            r.push("Q"),
            (e.stream = r.join("\n")),
            e
          );
        },
        OffPushDown: function (t) {
          var e = Mt(t);
          e.scope = t.scope;
          var r = [],
            n =
              me.internal.getWidth(t) <= me.internal.getHeight(t)
                ? me.internal.getWidth(t) / 4
                : me.internal.getHeight(t) / 4;
          n = Number((0.9 * n).toFixed(5));
          var i = Number((2 * n).toFixed(5)),
            s = Number((i * me.internal.Bezier_C).toFixed(5));
          return (
            r.push("0.749023 g"),
            r.push("q"),
            r.push(
              "1 0 0 1 " +
                jt(me.internal.getWidth(t) / 2) +
                " " +
                jt(me.internal.getHeight(t) / 2) +
                " cm",
            ),
            r.push(i + " 0 m"),
            r.push(i + " " + s + " " + s + " " + i + " 0 " + i + " c"),
            r.push("-" + s + " " + i + " -" + i + " " + s + " -" + i + " 0 c"),
            r.push(
              "-" + i + " -" + s + " -" + s + " -" + i + " 0 -" + i + " c",
            ),
            r.push(s + " -" + i + " " + i + " -" + s + " " + i + " 0 c"),
            r.push("f"),
            r.push("Q"),
            (e.stream = r.join("\n")),
            e
          );
        },
      },
      Cross: {
        createAppearanceStream: function (t) {
          var e = { D: { Off: me.RadioButton.Cross.OffPushDown }, N: {} };
          return (
            (e.N[t] = me.RadioButton.Cross.YesNormal),
            (e.D[t] = me.RadioButton.Cross.YesPushDown),
            e
          );
        },
        getCA: function () {
          return "8";
        },
        YesNormal: function (t) {
          var e = Mt(t);
          e.scope = t.scope;
          var r = [],
            n = me.internal.calculateCross(t);
          return (
            r.push("q"),
            r.push(
              "1 1 " +
                Tt(me.internal.getWidth(t) - 2) +
                " " +
                Tt(me.internal.getHeight(t) - 2) +
                " re",
            ),
            r.push("W"),
            r.push("n"),
            r.push(Tt(n.x1.x) + " " + Tt(n.x1.y) + " m"),
            r.push(Tt(n.x2.x) + " " + Tt(n.x2.y) + " l"),
            r.push(Tt(n.x4.x) + " " + Tt(n.x4.y) + " m"),
            r.push(Tt(n.x3.x) + " " + Tt(n.x3.y) + " l"),
            r.push("s"),
            r.push("Q"),
            (e.stream = r.join("\n")),
            e
          );
        },
        YesPushDown: function (t) {
          var e = Mt(t);
          e.scope = t.scope;
          var r = me.internal.calculateCross(t),
            n = [];
          return (
            n.push("0.749023 g"),
            n.push(
              "0 0 " +
                Tt(me.internal.getWidth(t)) +
                " " +
                Tt(me.internal.getHeight(t)) +
                " re",
            ),
            n.push("f"),
            n.push("q"),
            n.push(
              "1 1 " +
                Tt(me.internal.getWidth(t) - 2) +
                " " +
                Tt(me.internal.getHeight(t) - 2) +
                " re",
            ),
            n.push("W"),
            n.push("n"),
            n.push(Tt(r.x1.x) + " " + Tt(r.x1.y) + " m"),
            n.push(Tt(r.x2.x) + " " + Tt(r.x2.y) + " l"),
            n.push(Tt(r.x4.x) + " " + Tt(r.x4.y) + " m"),
            n.push(Tt(r.x3.x) + " " + Tt(r.x3.y) + " l"),
            n.push("s"),
            n.push("Q"),
            (e.stream = n.join("\n")),
            e
          );
        },
        OffPushDown: function (t) {
          var e = Mt(t);
          e.scope = t.scope;
          var r = [];
          return (
            r.push("0.749023 g"),
            r.push(
              "0 0 " +
                Tt(me.internal.getWidth(t)) +
                " " +
                Tt(me.internal.getHeight(t)) +
                " re",
            ),
            r.push("f"),
            (e.stream = r.join("\n")),
            e
          );
        },
      },
    },
    createDefaultAppearanceStream: function (t) {
      var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
        r = t.scope.__private__.encodeColorString(t.color);
      return "/" + e + " " + t.fontSize + " Tf " + r;
    },
  };
  ((me.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function (t) {
      var e = me.internal.getWidth(t),
        r = me.internal.getHeight(t),
        n = Math.min(e, r);
      return {
        x1: { x: (e - n) / 2, y: (r - n) / 2 + n },
        x2: { x: (e - n) / 2 + n, y: (r - n) / 2 },
        x3: { x: (e - n) / 2, y: (r - n) / 2 },
        x4: { x: (e - n) / 2 + n, y: (r - n) / 2 + n },
      };
    },
  }),
    (me.internal.getWidth = function (t) {
      var e = 0;
      return ("object" === (0, n.Z)(t) && (e = Ot(t.Rect[2])), e);
    }),
    (me.internal.getHeight = function (t) {
      var e = 0;
      return ("object" === (0, n.Z)(t) && (e = Ot(t.Rect[3])), e);
    }));
  var ye = (Dt.addField = function (t) {
    if ((Qt(this, t), !(t instanceof se)))
      throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (
      (e = t).scope.internal.acroformPlugin.printedOut &&
        ((e.scope.internal.acroformPlugin.printedOut = !1),
        (e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
      e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),
      (t.page = t.scope.internal.getCurrentPageInfo().pageNumber),
      this
    );
  });
  ((Dt.AcroFormChoiceField = ae),
    (Dt.AcroFormListBox = oe),
    (Dt.AcroFormComboBox = he),
    (Dt.AcroFormEditBox = ue),
    (Dt.AcroFormButton = ce),
    (Dt.AcroFormPushButton = le),
    (Dt.AcroFormRadioButton = fe),
    (Dt.AcroFormCheckBox = pe),
    (Dt.AcroFormTextField = ge),
    (Dt.AcroFormPasswordField = ve),
    (Dt.AcroFormAppearance = me),
    (Dt.AcroForm = {
      ChoiceField: ae,
      ListBox: oe,
      ComboBox: he,
      EditBox: ue,
      Button: ce,
      PushButton: le,
      RadioButton: fe,
      CheckBox: pe,
      TextField: ge,
      PasswordField: ve,
      Appearance: me,
    }),
    (Ct.AcroForm = {
      ChoiceField: ae,
      ListBox: oe,
      ComboBox: he,
      EditBox: ue,
      Button: ce,
      PushButton: le,
      RadioButton: fe,
      CheckBox: pe,
      TextField: ge,
      PasswordField: ve,
      Appearance: me,
    }));
  Ct.AcroForm;
  function be(t) {
    return t.reduce(function (t, e, r) {
      return ((t[e] = r), t);
    }, {});
  }
  (!(function (t) {
    t.__addimage__ = {};
    var e = "UNKNOWN",
      r = {
        PNG: [[137, 80, 78, 71]],
        TIFF: [
          [77, 77, 0, 42],
          [73, 73, 42, 0],
        ],
        JPEG: [
          [255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
          [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
          [255, 216, 255, 219],
          [255, 216, 255, 238],
        ],
        JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
        GIF87a: [[71, 73, 70, 56, 55, 97]],
        GIF89a: [[71, 73, 70, 56, 57, 97]],
        WEBP: [
          [82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80],
        ],
        BMP: [
          [66, 77],
          [66, 65],
          [67, 73],
          [67, 80],
          [73, 67],
          [80, 84],
        ],
      },
      i = (t.__addimage__.getImageFileTypeByImageData = function (t, n) {
        var i,
          s,
          a,
          o,
          h,
          u = e;
        if (
          "RGBA" === (n = n || e) ||
          (void 0 !== t.data &&
            t.data instanceof Uint8ClampedArray &&
            "height" in t &&
            "width" in t)
        )
          return "RGBA";
        if (A(t))
          for (h in r)
            for (a = r[h], i = 0; i < a.length; i += 1) {
              for (o = !0, s = 0; s < a[i].length; s += 1)
                if (void 0 !== a[i][s] && a[i][s] !== t[s]) {
                  o = !1;
                  break;
                }
              if (!0 === o) {
                u = h;
                break;
              }
            }
        else
          for (h in r)
            for (a = r[h], i = 0; i < a.length; i += 1) {
              for (o = !0, s = 0; s < a[i].length; s += 1)
                if (void 0 !== a[i][s] && a[i][s] !== t.charCodeAt(s)) {
                  o = !1;
                  break;
                }
              if (!0 === o) {
                u = h;
                break;
              }
            }
        return (u === e && n !== e && (u = n), u);
      }),
      s = function t(e) {
        for (
          var r = this.internal.write,
            n = this.internal.putStream,
            i = (0, this.internal.getFilters)();
          -1 !== i.indexOf("FlateEncode");
        )
          i.splice(i.indexOf("FlateEncode"), 1);
        e.objectId = this.internal.newObject();
        var s = [];
        if (
          (s.push({ key: "Type", value: "/XObject" }),
          s.push({ key: "Subtype", value: "/Image" }),
          s.push({ key: "Width", value: e.width }),
          s.push({ key: "Height", value: e.height }),
          e.colorSpace === m.INDEXED
            ? s.push({
                key: "ColorSpace",
                value:
                  "[/Indexed /DeviceRGB " +
                  (e.palette.length / 3 - 1) +
                  " " +
                  ("sMask" in e && void 0 !== e.sMask
                    ? e.objectId + 2
                    : e.objectId + 1) +
                  " 0 R]",
              })
            : (s.push({ key: "ColorSpace", value: "/" + e.colorSpace }),
              e.colorSpace === m.DEVICE_CMYK &&
                s.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })),
          s.push({ key: "BitsPerComponent", value: e.bitsPerComponent }),
          "decodeParameters" in e &&
            void 0 !== e.decodeParameters &&
            s.push({
              key: "DecodeParms",
              value: "<<" + e.decodeParameters + ">>",
            }),
          "transparency" in e && Array.isArray(e.transparency))
        ) {
          for (var a = "", o = 0, h = e.transparency.length; o < h; o++)
            a += e.transparency[o] + " " + e.transparency[o] + " ";
          s.push({ key: "Mask", value: "[" + a + "]" });
        }
        void 0 !== e.sMask &&
          s.push({ key: "SMask", value: e.objectId + 1 + " 0 R" });
        var u = void 0 !== e.filter ? ["/" + e.filter] : void 0;
        if (
          (n({
            data: e.data,
            additionalKeyValues: s,
            alreadyAppliedFilters: u,
            objectId: e.objectId,
          }),
          r("endobj"),
          "sMask" in e && void 0 !== e.sMask)
        ) {
          var c =
              "/Predictor " +
              e.predictor +
              " /Colors 1 /BitsPerComponent " +
              e.bitsPerComponent +
              " /Columns " +
              e.width,
            l = {
              width: e.width,
              height: e.height,
              colorSpace: "DeviceGray",
              bitsPerComponent: e.bitsPerComponent,
              decodeParameters: c,
              data: e.sMask,
            };
          ("filter" in e && (l.filter = e.filter), t.call(this, l));
        }
        if (e.colorSpace === m.INDEXED) {
          var f = this.internal.newObject();
          (n({ data: F(new Uint8Array(e.palette)), objectId: f }), r("endobj"));
        }
      },
      a = function () {
        var t = this.internal.collections.addImage_images;
        for (var e in t) s.call(this, t[e]);
      },
      o = function () {
        var t,
          e = this.internal.collections.addImage_images,
          r = this.internal.write;
        for (var n in e) r("/I" + (t = e[n]).index, t.objectId, "0", "R");
      },
      h = function () {
        this.internal.collections.addImage_images ||
          ((this.internal.collections.addImage_images = {}),
          this.internal.events.subscribe("putResources", a),
          this.internal.events.subscribe("putXobjectDict", o));
      },
      u = function () {
        var t = this.internal.collections.addImage_images;
        return (h.call(this), t);
      },
      c = function () {
        return Object.keys(this.internal.collections.addImage_images).length;
      },
      l = function (e) {
        return "function" == typeof t["process" + e.toUpperCase()];
      },
      f = function (t) {
        return "object" === (0, n.Z)(t) && 1 === t.nodeType;
      },
      d = function (e, r) {
        if ("IMG" === e.nodeName && e.hasAttribute("src")) {
          var n = "" + e.getAttribute("src");
          if (0 === n.indexOf("data:image/"))
            return nt(unescape(n).split("base64,").pop());
          var i = t.loadFile(n, !0);
          if (void 0 !== i) return i;
        }
        if ("CANVAS" === e.nodeName) {
          if (0 === e.width || 0 === e.height)
            throw new Error(
              "Given canvas must have data. Canvas width: " +
                e.width +
                ", height: " +
                e.height,
            );
          var s;
          switch (r) {
            case "PNG":
              s = "image/png";
              break;
            case "WEBP":
              s = "image/webp";
              break;
            case "JPEG":
            case "JPG":
            default:
              s = "image/jpeg";
          }
          return nt(e.toDataURL(s, 1).split("base64,").pop());
        }
      },
      p = function (t) {
        var e = this.internal.collections.addImage_images;
        if (e) for (var r in e) if (t === e[r].alias) return e[r];
      },
      g = function (t, e, r) {
        return (
          t || e || ((t = -96), (e = -96)),
          t < 0 && (t = (-1 * r.width * 72) / t / this.internal.scaleFactor),
          e < 0 && (e = (-1 * r.height * 72) / e / this.internal.scaleFactor),
          0 === t && (t = (e * r.width) / r.height),
          0 === e && (e = (t * r.height) / r.width),
          [t, e]
        );
      },
      v = function (t, e, r, n, i, s) {
        var a = g.call(this, r, n, i),
          o = this.internal.getCoordinateString,
          h = this.internal.getVerticalCoordinateString,
          c = u.call(this);
        if (((r = a[0]), (n = a[1]), (c[i.index] = i), s)) {
          s *= Math.PI / 180;
          var l = Math.cos(s),
            f = Math.sin(s),
            d = function (t) {
              return t.toFixed(4);
            },
            p = [d(l), d(f), d(-1 * f), d(l), 0, 0, "cm"];
        }
        (this.internal.write("q"),
          s
            ? (this.internal.write(
                [1, "0", "0", 1, o(t), h(e + n), "cm"].join(" "),
              ),
              this.internal.write(p.join(" ")),
              this.internal.write(
                [o(r), "0", "0", o(n), "0", "0", "cm"].join(" "),
              ))
            : this.internal.write(
                [o(r), "0", "0", o(n), o(t), h(e + n), "cm"].join(" "),
              ),
          this.isAdvancedAPI() &&
            this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")),
          this.internal.write("/I" + i.index + " Do"),
          this.internal.write("Q"));
      },
      m = (t.color_spaces = {
        DEVICE_RGB: "DeviceRGB",
        DEVICE_GRAY: "DeviceGray",
        DEVICE_CMYK: "DeviceCMYK",
        CAL_GREY: "CalGray",
        CAL_RGB: "CalRGB",
        LAB: "Lab",
        ICC_BASED: "ICCBased",
        INDEXED: "Indexed",
        PATTERN: "Pattern",
        SEPARATION: "Separation",
        DEVICE_N: "DeviceN",
      });
    t.decode = {
      DCT_DECODE: "DCTDecode",
      FLATE_DECODE: "FlateDecode",
      LZW_DECODE: "LZWDecode",
      JPX_DECODE: "JPXDecode",
      JBIG2_DECODE: "JBIG2Decode",
      ASCII85_DECODE: "ASCII85Decode",
      ASCII_HEX_DECODE: "ASCIIHexDecode",
      RUN_LENGTH_DECODE: "RunLengthDecode",
      CCITT_FAX_DECODE: "CCITTFaxDecode",
    };
    var y = (t.image_compression = {
        NONE: "NONE",
        FAST: "FAST",
        MEDIUM: "MEDIUM",
        SLOW: "SLOW",
      }),
      b = (t.__addimage__.sHashCode = function (t) {
        var e,
          r,
          n = 0;
        if ("string" == typeof t)
          for (r = t.length, e = 0; e < r; e++)
            ((n = (n << 5) - n + t.charCodeAt(e)), (n |= 0));
        else if (A(t))
          for (r = t.byteLength / 2, e = 0; e < r; e++)
            ((n = (n << 5) - n + t[e]), (n |= 0));
        return n;
      }),
      w = (t.__addimage__.validateStringAsBase64 = function (t) {
        (t = t || "").toString().trim();
        var e = !0;
        return (
          0 === t.length && (e = !1),
          t.length % 4 != 0 && (e = !1),
          !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1),
          !1 ===
            /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(
              t.substr(-2),
            ) && (e = !1),
          e
        );
      }),
      x = (t.__addimage__.extractImageFromDataUrl = function (t) {
        var e = (t = t || "").split("base64,"),
          r = null;
        if (2 === e.length) {
          var n = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(
            e[0],
          );
          Array.isArray(n) &&
            (r = { mimeType: n[1], charset: n[2], data: e[1] });
        }
        return r;
      }),
      S = (t.__addimage__.supportsArrayBuffer = function () {
        return (
          "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
        );
      });
    t.__addimage__.isArrayBuffer = function (t) {
      return S() && t instanceof ArrayBuffer;
    };
    var A = (t.__addimage__.isArrayBufferView = function (t) {
        return (
          S() &&
          "undefined" != typeof Uint32Array &&
          (t instanceof Int8Array ||
            t instanceof Uint8Array ||
            ("undefined" != typeof Uint8ClampedArray &&
              t instanceof Uint8ClampedArray) ||
            t instanceof Int16Array ||
            t instanceof Uint16Array ||
            t instanceof Int32Array ||
            t instanceof Uint32Array ||
            t instanceof Float32Array ||
            t instanceof Float64Array)
        );
      }),
      E = (t.__addimage__.binaryStringToUint8Array = function (t) {
        for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
          r[n] = t.charCodeAt(n);
        return r;
      }),
      F = (t.__addimage__.arrayBufferToBinaryString = function (t) {
        for (
          var e = "", r = A(t) ? t : new Uint8Array(t), n = 0;
          n < r.length;
          n += 8192
        )
          e += String.fromCharCode.apply(null, r.subarray(n, n + 8192));
        return e;
      });
    t.addImage = function () {
      var t, r, i, s, a, o, u, c, l;
      if (
        ("number" == typeof arguments[1]
          ? ((r = e),
            (i = arguments[1]),
            (s = arguments[2]),
            (a = arguments[3]),
            (o = arguments[4]),
            (u = arguments[5]),
            (c = arguments[6]),
            (l = arguments[7]))
          : ((r = arguments[1]),
            (i = arguments[2]),
            (s = arguments[3]),
            (a = arguments[4]),
            (o = arguments[5]),
            (u = arguments[6]),
            (c = arguments[7]),
            (l = arguments[8])),
        "object" === (0, n.Z)((t = arguments[0])) && !f(t) && "imageData" in t)
      ) {
        var d = t;
        ((t = d.imageData),
          (r = d.format || r || e),
          (i = d.x || i || 0),
          (s = d.y || s || 0),
          (a = d.w || d.width || a),
          (o = d.h || d.height || o),
          (u = d.alias || u),
          (c = d.compression || c),
          (l = d.rotation || d.angle || l));
      }
      var p = this.internal.getFilters();
      if (
        (void 0 === c && -1 !== p.indexOf("FlateEncode") && (c = "SLOW"),
        isNaN(i) || isNaN(s))
      )
        throw new Error("Invalid coordinates passed to jsPDF.addImage");
      h.call(this);
      var g = N.call(this, t, r, u, c);
      return (v.call(this, i, s, a, o, g, l), this);
    };
    var N = function (r, n, s, a) {
        var o, h, u;
        if ("string" == typeof r && i(r) === e) {
          r = unescape(r);
          var g = P(r, !1);
          ("" !== g || void 0 !== (g = t.loadFile(r, !0))) && (r = g);
        }
        if ((f(r) && (r = d(r, n)), (n = i(r, n)), !l(n)))
          throw new Error(
            "addImage does not support files of type '" +
              n +
              "', please ensure that a plugin for '" +
              n +
              "' support is added.",
          );
        if (
          ((null == (u = s) || 0 === u.length) &&
            (s = (function (t) {
              return "string" == typeof t || A(t)
                ? b(t)
                : A(t.data)
                  ? b(t.data)
                  : null;
            })(r)),
          (o = p.call(this, s)) ||
            (S() &&
              (r instanceof Uint8Array ||
                "RGBA" === n ||
                ((h = r), (r = E(r)))),
            (o = this["process" + n.toUpperCase()](
              r,
              c.call(this),
              s,
              (function (e) {
                return (
                  e && "string" == typeof e && (e = e.toUpperCase()),
                  e in t.image_compression ? e : y.NONE
                );
              })(a),
              h,
            ))),
          !o)
        )
          throw new Error(
            "An unknown error occurred whilst processing the image.",
          );
        return o;
      },
      P = (t.__addimage__.convertBase64ToBinaryString = function (t, e) {
        var r;
        e = "boolean" != typeof e || e;
        var n,
          i = "";
        if ("string" == typeof t) {
          n = null !== (r = x(t)) ? r.data : t;
          try {
            i = nt(n);
          } catch (t) {
            if (e)
              throw w(n)
                ? new Error(
                    "atob-Error in jsPDF.convertBase64ToBinaryString " +
                      t.message,
                  )
                : new Error(
                    "Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ",
                  );
          }
        }
        return i;
      });
    t.getImageProperties = function (r) {
      var n,
        s,
        a = "";
      if (
        (f(r) && (r = d(r)),
        "string" == typeof r &&
          i(r) === e &&
          ("" === (a = P(r, !1)) && (a = t.loadFile(r) || ""), (r = a)),
        (s = i(r)),
        !l(s))
      )
        throw new Error(
          "addImage does not support files of type '" +
            s +
            "', please ensure that a plugin for '" +
            s +
            "' support is added.",
        );
      if (
        (!S() || r instanceof Uint8Array || (r = E(r)),
        !(n = this["process" + s.toUpperCase()](r)))
      )
        throw new Error(
          "An unknown error occurred whilst processing the image",
        );
      return ((n.fileType = s), n);
    };
  })(Ct.API),
    /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = function (t) {
        if (void 0 !== t && "" != t) return !0;
      };
      (Ct.API.events.push([
        "addPage",
        function (t) {
          this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
        },
      ]),
        t.events.push([
          "putPage",
          function (t) {
            for (
              var r,
                n,
                i,
                s = this.internal.getCoordinateString,
                a = this.internal.getVerticalCoordinateString,
                o = this.internal.getPageInfoByObjId(t.objId),
                h = t.pageContext.annotations,
                u = !1,
                c = 0;
              c < h.length && !u;
              c++
            )
              switch ((r = h[c]).type) {
                case "link":
                  (e(r.options.url) || e(r.options.pageNumber)) && (u = !0);
                  break;
                case "reference":
                case "text":
                case "freetext":
                  u = !0;
              }
            if (0 != u) {
              this.internal.write("/Annots [");
              for (var l = 0; l < h.length; l++) {
                r = h[l];
                var f = this.internal.pdfEscape,
                  d = this.internal.getEncryptor(t.objId);
                switch (r.type) {
                  case "reference":
                    this.internal.write(" " + r.object.objId + " 0 R ");
                    break;
                  case "text":
                    var p = this.internal.newAdditionalObject(),
                      g = this.internal.newAdditionalObject(),
                      v = this.internal.getEncryptor(p.objId),
                      m = r.title || "Note";
                    ((i =
                      "<</Type /Annot /Subtype /Text " +
                      (n =
                        "/Rect [" +
                        s(r.bounds.x) +
                        " " +
                        a(r.bounds.y + r.bounds.h) +
                        " " +
                        s(r.bounds.x + r.bounds.w) +
                        " " +
                        a(r.bounds.y) +
                        "] ") +
                      "/Contents (" +
                      f(v(r.contents)) +
                      ")"),
                      (i += " /Popup " + g.objId + " 0 R"),
                      (i += " /P " + o.objId + " 0 R"),
                      (i += " /T (" + f(v(m)) + ") >>"),
                      (p.content = i));
                    var y = p.objId + " 0 R";
                    ((i =
                      "<</Type /Annot /Subtype /Popup " +
                      (n =
                        "/Rect [" +
                        s(r.bounds.x + 30) +
                        " " +
                        a(r.bounds.y + r.bounds.h) +
                        " " +
                        s(r.bounds.x + r.bounds.w + 30) +
                        " " +
                        a(r.bounds.y) +
                        "] ") +
                      " /Parent " +
                      y),
                      r.open && (i += " /Open true"),
                      (i += " >>"),
                      (g.content = i),
                      this.internal.write(p.objId, "0 R", g.objId, "0 R"));
                    break;
                  case "freetext":
                    n =
                      "/Rect [" +
                      s(r.bounds.x) +
                      " " +
                      a(r.bounds.y) +
                      " " +
                      s(r.bounds.x + r.bounds.w) +
                      " " +
                      a(r.bounds.y + r.bounds.h) +
                      "] ";
                    var b = r.color || "#000000";
                    ((i =
                      "<</Type /Annot /Subtype /FreeText " +
                      n +
                      "/Contents (" +
                      f(d(r.contents)) +
                      ")"),
                      (i +=
                        " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" +
                        b +
                        ")"),
                      (i += " /Border [0 0 0]"),
                      (i += " >>"),
                      this.internal.write(i));
                    break;
                  case "link":
                    if (r.options.name) {
                      var w = this.annotations._nameMap[r.options.name];
                      ((r.options.pageNumber = w.page), (r.options.top = w.y));
                    } else r.options.top || (r.options.top = 0);
                    if (
                      ((n =
                        "/Rect [" +
                        r.finalBounds.x +
                        " " +
                        r.finalBounds.y +
                        " " +
                        r.finalBounds.w +
                        " " +
                        r.finalBounds.h +
                        "] "),
                      (i = ""),
                      r.options.url)
                    )
                      i =
                        "<</Type /Annot /Subtype /Link " +
                        n +
                        "/Border [0 0 0] /A <</S /URI /URI (" +
                        f(d(r.options.url)) +
                        ") >>";
                    else if (r.options.pageNumber)
                      switch (
                        ((i =
                          "<</Type /Annot /Subtype /Link " +
                          n +
                          "/Border [0 0 0] /Dest [" +
                          this.internal.getPageInfo(r.options.pageNumber)
                            .objId +
                          " 0 R"),
                        (r.options.magFactor = r.options.magFactor || "XYZ"),
                        r.options.magFactor)
                      ) {
                        case "Fit":
                          i += " /Fit]";
                          break;
                        case "FitH":
                          i += " /FitH " + r.options.top + "]";
                          break;
                        case "FitV":
                          ((r.options.left = r.options.left || 0),
                            (i += " /FitV " + r.options.left + "]"));
                          break;
                        case "XYZ":
                        default:
                          var x = a(r.options.top);
                          ((r.options.left = r.options.left || 0),
                            void 0 === r.options.zoom && (r.options.zoom = 0),
                            (i +=
                              " /XYZ " +
                              r.options.left +
                              " " +
                              x +
                              " " +
                              r.options.zoom +
                              "]"));
                      }
                    "" != i && ((i += " >>"), this.internal.write(i));
                }
              }
              this.internal.write("]");
            }
          },
        ]),
        (t.createAnnotation = function (t) {
          var e = this.internal.getCurrentPageInfo();
          switch (t.type) {
            case "link":
              this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
              break;
            case "text":
            case "freetext":
              e.pageContext.annotations.push(t);
          }
        }),
        (t.link = function (t, e, r, n, i) {
          var s = this.internal.getCurrentPageInfo(),
            a = this.internal.getCoordinateString,
            o = this.internal.getVerticalCoordinateString;
          s.pageContext.annotations.push({
            finalBounds: { x: a(t), y: o(e), w: a(t + r), h: o(e + n) },
            options: i,
            type: "link",
          });
        }),
        (t.textWithLink = function (t, e, r, n) {
          var i,
            s,
            a = this.getTextWidth(t),
            o = this.internal.getLineHeight() / this.internal.scaleFactor;
          if (void 0 !== n.maxWidth) {
            s = n.maxWidth;
            var h = this.splitTextToSize(t, s).length;
            i = Math.ceil(o * h);
          } else ((s = a), (i = o));
          return (
            this.text(t, e, r, n),
            (r += 0.2 * o),
            "center" === n.align && (e -= a / 2),
            "right" === n.align && (e -= a),
            this.link(e, r - o, s, i, n),
            a
          );
        }),
        (t.getTextWidth = function (t) {
          var e = this.internal.getFontSize();
          return (this.getStringUnitWidth(t) * e) / this.internal.scaleFactor;
        }));
    })(Ct.API),
    /**
     * @license
     * Copyright (c) 2017 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = {
          1569: [65152],
          1570: [65153, 65154],
          1571: [65155, 65156],
          1572: [65157, 65158],
          1573: [65159, 65160],
          1574: [65161, 65162, 65163, 65164],
          1575: [65165, 65166],
          1576: [65167, 65168, 65169, 65170],
          1577: [65171, 65172],
          1578: [65173, 65174, 65175, 65176],
          1579: [65177, 65178, 65179, 65180],
          1580: [65181, 65182, 65183, 65184],
          1581: [65185, 65186, 65187, 65188],
          1582: [65189, 65190, 65191, 65192],
          1583: [65193, 65194],
          1584: [65195, 65196],
          1585: [65197, 65198],
          1586: [65199, 65200],
          1587: [65201, 65202, 65203, 65204],
          1588: [65205, 65206, 65207, 65208],
          1589: [65209, 65210, 65211, 65212],
          1590: [65213, 65214, 65215, 65216],
          1591: [65217, 65218, 65219, 65220],
          1592: [65221, 65222, 65223, 65224],
          1593: [65225, 65226, 65227, 65228],
          1594: [65229, 65230, 65231, 65232],
          1601: [65233, 65234, 65235, 65236],
          1602: [65237, 65238, 65239, 65240],
          1603: [65241, 65242, 65243, 65244],
          1604: [65245, 65246, 65247, 65248],
          1605: [65249, 65250, 65251, 65252],
          1606: [65253, 65254, 65255, 65256],
          1607: [65257, 65258, 65259, 65260],
          1608: [65261, 65262],
          1609: [65263, 65264, 64488, 64489],
          1610: [65265, 65266, 65267, 65268],
          1649: [64336, 64337],
          1655: [64477],
          1657: [64358, 64359, 64360, 64361],
          1658: [64350, 64351, 64352, 64353],
          1659: [64338, 64339, 64340, 64341],
          1662: [64342, 64343, 64344, 64345],
          1663: [64354, 64355, 64356, 64357],
          1664: [64346, 64347, 64348, 64349],
          1667: [64374, 64375, 64376, 64377],
          1668: [64370, 64371, 64372, 64373],
          1670: [64378, 64379, 64380, 64381],
          1671: [64382, 64383, 64384, 64385],
          1672: [64392, 64393],
          1676: [64388, 64389],
          1677: [64386, 64387],
          1678: [64390, 64391],
          1681: [64396, 64397],
          1688: [64394, 64395],
          1700: [64362, 64363, 64364, 64365],
          1702: [64366, 64367, 64368, 64369],
          1705: [64398, 64399, 64400, 64401],
          1709: [64467, 64468, 64469, 64470],
          1711: [64402, 64403, 64404, 64405],
          1713: [64410, 64411, 64412, 64413],
          1715: [64406, 64407, 64408, 64409],
          1722: [64414, 64415],
          1723: [64416, 64417, 64418, 64419],
          1726: [64426, 64427, 64428, 64429],
          1728: [64420, 64421],
          1729: [64422, 64423, 64424, 64425],
          1733: [64480, 64481],
          1734: [64473, 64474],
          1735: [64471, 64472],
          1736: [64475, 64476],
          1737: [64482, 64483],
          1739: [64478, 64479],
          1740: [64508, 64509, 64510, 64511],
          1744: [64484, 64485, 64486, 64487],
          1746: [64430, 64431],
          1747: [64432, 64433],
        },
        r = {
          65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 },
          65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 },
          65165: { 65247: { 65248: { 65258: 65010 } } },
          1617: {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610,
          },
        },
        n = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
        i = [1570, 1571, 1573, 1575];
      t.__arabicParser__ = {};
      var s = (t.__arabicParser__.isInArabicSubstitutionA = function (t) {
          return void 0 !== e[t.charCodeAt(0)];
        }),
        a = (t.__arabicParser__.isArabicLetter = function (t) {
          return (
            "string" == typeof t &&
            /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(
              t,
            )
          );
        }),
        o = (t.__arabicParser__.isArabicEndLetter = function (t) {
          return a(t) && s(t) && e[t.charCodeAt(0)].length <= 2;
        }),
        h = (t.__arabicParser__.isArabicAlfLetter = function (t) {
          return a(t) && i.indexOf(t.charCodeAt(0)) >= 0;
        });
      t.__arabicParser__.arabicLetterHasIsolatedForm = function (t) {
        return a(t) && s(t) && e[t.charCodeAt(0)].length >= 1;
      };
      var u = (t.__arabicParser__.arabicLetterHasFinalForm = function (t) {
        return a(t) && s(t) && e[t.charCodeAt(0)].length >= 2;
      });
      t.__arabicParser__.arabicLetterHasInitialForm = function (t) {
        return a(t) && s(t) && e[t.charCodeAt(0)].length >= 3;
      };
      var c = (t.__arabicParser__.arabicLetterHasMedialForm = function (t) {
          return a(t) && s(t) && 4 == e[t.charCodeAt(0)].length;
        }),
        l = (t.__arabicParser__.resolveLigatures = function (t) {
          var e = 0,
            n = r,
            i = "",
            s = 0;
          for (e = 0; e < t.length; e += 1)
            void 0 !== n[t.charCodeAt(e)]
              ? (s++,
                "number" == typeof (n = n[t.charCodeAt(e)]) &&
                  ((i += String.fromCharCode(n)), (n = r), (s = 0)),
                e === t.length - 1 &&
                  ((n = r),
                  (i += t.charAt(e - (s - 1))),
                  (e -= s - 1),
                  (s = 0)))
              : ((n = r), (i += t.charAt(e - s)), (e -= s), (s = 0));
          return i;
        });
      t.__arabicParser__.isArabicDiacritic = function (t) {
        return void 0 !== t && void 0 !== n[t.charCodeAt(0)];
      };
      var f = (t.__arabicParser__.getCorrectForm = function (t, e, r) {
          return a(t)
            ? !1 === s(t)
              ? -1
              : !u(t) ||
                  (!a(e) && !a(r)) ||
                  (!a(r) && o(e)) ||
                  (o(t) && !a(e)) ||
                  (o(t) && h(e)) ||
                  (o(t) && o(e))
                ? 0
                : c(t) && a(e) && !o(e) && a(r) && u(r)
                  ? 3
                  : o(t) || !a(r)
                    ? 1
                    : 2
            : -1;
        }),
        d = function (t) {
          var r = 0,
            n = 0,
            i = 0,
            s = "",
            o = "",
            h = "",
            u = (t = t || "").split("\\s+"),
            c = [];
          for (r = 0; r < u.length; r += 1) {
            for (c.push(""), n = 0; n < u[r].length; n += 1)
              ((s = u[r][n]),
                (o = u[r][n - 1]),
                (h = u[r][n + 1]),
                a(s)
                  ? ((i = f(s, o, h)),
                    (c[r] +=
                      -1 !== i
                        ? String.fromCharCode(e[s.charCodeAt(0)][i])
                        : s))
                  : (c[r] += s));
            c[r] = l(c[r]);
          }
          return c.join(" ");
        },
        p =
          (t.__arabicParser__.processArabic =
          t.processArabic =
            function () {
              var t,
                e =
                  "string" == typeof arguments[0]
                    ? arguments[0]
                    : arguments[0].text,
                r = [];
              if (Array.isArray(e)) {
                var n = 0;
                for (r = [], n = 0; n < e.length; n += 1)
                  Array.isArray(e[n])
                    ? r.push([d(e[n][0]), e[n][1], e[n][2]])
                    : r.push([d(e[n])]);
                t = r;
              } else t = d(e);
              return "string" == typeof arguments[0]
                ? t
                : ((arguments[0].text = t), arguments[0]);
            });
      t.events.push(["preProcessText", p]);
    })(Ct.API),
    (Ct.API.autoPrint = function (t) {
      var e;
      switch (
        (((t = t || {}).variant = t.variant || "non-conform"), t.variant)
      ) {
        case "javascript":
          this.addJS("print({});");
          break;
        case "non-conform":
        default:
          (this.internal.events.subscribe("postPutResources", function () {
            ((e = this.internal.newObject()),
              this.internal.out("<<"),
              this.internal.out("/S /Named"),
              this.internal.out("/Type /Action"),
              this.internal.out("/N /Print"),
              this.internal.out(">>"),
              this.internal.out("endobj"));
          }),
            this.internal.events.subscribe("putCatalog", function () {
              this.internal.out("/OpenAction " + e + " 0 R");
            }));
      }
      return this;
    }),
    /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = function () {
        var t = void 0;
        Object.defineProperty(this, "pdf", {
          get: function () {
            return t;
          },
          set: function (e) {
            t = e;
          },
        });
        var e = 150;
        Object.defineProperty(this, "width", {
          get: function () {
            return e;
          },
          set: function (t) {
            ((e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t),
              this.getContext("2d").pageWrapXEnabled &&
                (this.getContext("2d").pageWrapX = e + 1));
          },
        });
        var r = 300;
        Object.defineProperty(this, "height", {
          get: function () {
            return r;
          },
          set: function (t) {
            ((r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t),
              this.getContext("2d").pageWrapYEnabled &&
                (this.getContext("2d").pageWrapY = r + 1));
          },
        });
        var n = [];
        Object.defineProperty(this, "childNodes", {
          get: function () {
            return n;
          },
          set: function (t) {
            n = t;
          },
        });
        var i = {};
        (Object.defineProperty(this, "style", {
          get: function () {
            return i;
          },
          set: function (t) {
            i = t;
          },
        }),
          Object.defineProperty(this, "parentNode", {}));
      };
      ((e.prototype.getContext = function (t, e) {
        var r;
        if ("2d" !== (t = t || "2d")) return null;
        for (r in e)
          this.pdf.context2d.hasOwnProperty(r) &&
            (this.pdf.context2d[r] = e[r]);
        return ((this.pdf.context2d._canvas = this), this.pdf.context2d);
      }),
        (e.prototype.toDataURL = function () {
          throw new Error("toDataURL is not implemented.");
        }),
        t.events.push([
          "initialized",
          function () {
            ((this.canvas = new e()), (this.canvas.pdf = this));
          },
        ]));
    })(Ct.API),
    (function (t) {
      var e = { left: 0, top: 0, bottom: 0, right: 0 },
        r = !1,
        i = function () {
          void 0 === this.internal.__cell__ &&
            ((this.internal.__cell__ = {}),
            (this.internal.__cell__.padding = 3),
            (this.internal.__cell__.headerFunction = void 0),
            (this.internal.__cell__.margins = Object.assign({}, e)),
            (this.internal.__cell__.margins.width = this.getPageWidth()),
            s.call(this));
        },
        s = function () {
          ((this.internal.__cell__.lastCell = new a()),
            (this.internal.__cell__.pages = 1));
        },
        a = function () {
          var t = arguments[0];
          Object.defineProperty(this, "x", {
            enumerable: !0,
            get: function () {
              return t;
            },
            set: function (e) {
              t = e;
            },
          });
          var e = arguments[1];
          Object.defineProperty(this, "y", {
            enumerable: !0,
            get: function () {
              return e;
            },
            set: function (t) {
              e = t;
            },
          });
          var r = arguments[2];
          Object.defineProperty(this, "width", {
            enumerable: !0,
            get: function () {
              return r;
            },
            set: function (t) {
              r = t;
            },
          });
          var n = arguments[3];
          Object.defineProperty(this, "height", {
            enumerable: !0,
            get: function () {
              return n;
            },
            set: function (t) {
              n = t;
            },
          });
          var i = arguments[4];
          Object.defineProperty(this, "text", {
            enumerable: !0,
            get: function () {
              return i;
            },
            set: function (t) {
              i = t;
            },
          });
          var s = arguments[5];
          Object.defineProperty(this, "lineNumber", {
            enumerable: !0,
            get: function () {
              return s;
            },
            set: function (t) {
              s = t;
            },
          });
          var a = arguments[6];
          return (
            Object.defineProperty(this, "align", {
              enumerable: !0,
              get: function () {
                return a;
              },
              set: function (t) {
                a = t;
              },
            }),
            this
          );
        };
      ((a.prototype.clone = function () {
        return new a(
          this.x,
          this.y,
          this.width,
          this.height,
          this.text,
          this.lineNumber,
          this.align,
        );
      }),
        (a.prototype.toArray = function () {
          return [
            this.x,
            this.y,
            this.width,
            this.height,
            this.text,
            this.lineNumber,
            this.align,
          ];
        }),
        (t.setHeaderFunction = function (t) {
          return (
            i.call(this),
            (this.internal.__cell__.headerFunction =
              "function" == typeof t ? t : void 0),
            this
          );
        }),
        (t.getTextDimensions = function (t, e) {
          i.call(this);
          var r = (e = e || {}).fontSize || this.getFontSize(),
            n = e.font || this.getFont(),
            s = e.scaleFactor || this.internal.scaleFactor,
            a = 0,
            o = 0,
            h = 0,
            u = this;
          if (!Array.isArray(t) && "string" != typeof t) {
            if ("number" != typeof t)
              throw new Error(
                "getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.",
              );
            t = String(t);
          }
          var c = e.maxWidth;
          c > 0
            ? "string" == typeof t
              ? (t = this.splitTextToSize(t, c))
              : "[object Array]" === Object.prototype.toString.call(t) &&
                (t = t.reduce(function (t, e) {
                  return t.concat(u.splitTextToSize(e, c));
                }, []))
            : (t = Array.isArray(t) ? t : [t]);
          for (var l = 0; l < t.length; l++)
            a < (h = this.getStringUnitWidth(t[l], { font: n }) * r) && (a = h);
          return (
            0 !== a && (o = t.length),
            {
              w: (a /= s),
              h: Math.max(
                (o * r * this.getLineHeightFactor() -
                  r * (this.getLineHeightFactor() - 1)) /
                  s,
                0,
              ),
            }
          );
        }),
        (t.cellAddPage = function () {
          (i.call(this), this.addPage());
          var t = this.internal.__cell__.margins || e;
          return (
            (this.internal.__cell__.lastCell = new a(
              t.left,
              t.top,
              void 0,
              void 0,
            )),
            (this.internal.__cell__.pages += 1),
            this
          );
        }));
      var o = (t.cell = function () {
        var t;
        ((t =
          arguments[0] instanceof a
            ? arguments[0]
            : new a(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5],
              )),
          i.call(this));
        var n = this.internal.__cell__.lastCell,
          s = this.internal.__cell__.padding,
          o = this.internal.__cell__.margins || e,
          h = this.internal.__cell__.tableHeaderRow,
          u = this.internal.__cell__.printHeaders;
        return (
          void 0 !== n.lineNumber &&
            (n.lineNumber === t.lineNumber
              ? ((t.x = (n.x || 0) + (n.width || 0)), (t.y = n.y || 0))
              : n.y + n.height + t.height + o.bottom > this.getPageHeight()
                ? (this.cellAddPage(),
                  (t.y = o.top),
                  u &&
                    h &&
                    (this.printHeaderRow(t.lineNumber, !0),
                    (t.y += h[0].height)))
                : (t.y = n.y + n.height || t.y)),
          void 0 !== t.text[0] &&
            (this.rect(t.x, t.y, t.width, t.height, !0 === r ? "FD" : void 0),
            "right" === t.align
              ? this.text(t.text, t.x + t.width - s, t.y + s, {
                  align: "right",
                  baseline: "top",
                })
              : "center" === t.align
                ? this.text(t.text, t.x + t.width / 2, t.y + s, {
                    align: "center",
                    baseline: "top",
                    maxWidth: t.width - s - s,
                  })
                : this.text(t.text, t.x + s, t.y + s, {
                    align: "left",
                    baseline: "top",
                    maxWidth: t.width - s - s,
                  })),
          (this.internal.__cell__.lastCell = t),
          this
        );
      });
      t.table = function (t, r, u, c, l) {
        if ((i.call(this), !u)) throw new Error("No data for PDF table.");
        var f,
          d,
          p,
          g,
          v = [],
          m = [],
          y = [],
          b = {},
          w = {},
          x = [],
          S = [],
          A = (l = l || {}).autoSize || !1,
          E = !1 !== l.printHeaders,
          F =
            l.css && void 0 !== l.css["font-size"]
              ? 16 * l.css["font-size"]
              : l.fontSize || 12,
          N = l.margins || Object.assign({ width: this.getPageWidth() }, e),
          P = "number" == typeof l.padding ? l.padding : 3,
          I = l.headerBackgroundColor || "#c8c8c8",
          L = l.headerTextColor || "#000";
        if (
          (s.call(this),
          (this.internal.__cell__.printHeaders = E),
          (this.internal.__cell__.margins = N),
          (this.internal.__cell__.table_font_size = F),
          (this.internal.__cell__.padding = P),
          (this.internal.__cell__.headerBackgroundColor = I),
          (this.internal.__cell__.headerTextColor = L),
          this.setFontSize(F),
          null == c)
        )
          ((m = v = Object.keys(u[0])),
            (y = v.map(function () {
              return "left";
            })));
        else if (Array.isArray(c) && "object" === (0, n.Z)(c[0]))
          for (
            v = c.map(function (t) {
              return t.name;
            }),
              m = c.map(function (t) {
                return t.prompt || t.name || "";
              }),
              y = c.map(function (t) {
                return t.align || "left";
              }),
              f = 0;
            f < c.length;
            f += 1
          )
            w[c[f].name] = c[f].width * (19.049976 / 25.4);
        else
          Array.isArray(c) &&
            "string" == typeof c[0] &&
            ((m = v = c),
            (y = v.map(function () {
              return "left";
            })));
        if (A || (Array.isArray(c) && "string" == typeof c[0]))
          for (f = 0; f < v.length; f += 1) {
            for (
              b[(g = v[f])] = u.map(function (t) {
                return t[g];
              }),
                this.setFont(void 0, "bold"),
                x.push(
                  this.getTextDimensions(m[f], {
                    fontSize: this.internal.__cell__.table_font_size,
                    scaleFactor: this.internal.scaleFactor,
                  }).w,
                ),
                d = b[g],
                this.setFont(void 0, "normal"),
                p = 0;
              p < d.length;
              p += 1
            )
              x.push(
                this.getTextDimensions(d[p], {
                  fontSize: this.internal.__cell__.table_font_size,
                  scaleFactor: this.internal.scaleFactor,
                }).w,
              );
            ((w[g] = Math.max.apply(null, x) + P + P), (x = []));
          }
        if (E) {
          var C = {};
          for (f = 0; f < v.length; f += 1)
            ((C[v[f]] = {}), (C[v[f]].text = m[f]), (C[v[f]].align = y[f]));
          var D = h.call(this, C, w);
          ((S = v.map(function (e) {
            return new a(t, r, w[e], D, C[e].text, void 0, C[e].align);
          })),
            this.setTableHeaderRow(S),
            this.printHeaderRow(1, !1));
        }
        var _ = c.reduce(function (t, e) {
          return ((t[e.name] = e.align), t);
        }, {});
        for (f = 0; f < u.length; f += 1) {
          "rowStart" in l &&
            l.rowStart instanceof Function &&
            l.rowStart({ row: f, data: u[f] }, this);
          var R = h.call(this, u[f], w);
          for (p = 0; p < v.length; p += 1) {
            var B = u[f][v[p]];
            ("cellStart" in l &&
              l.cellStart instanceof Function &&
              l.cellStart({ row: f, col: p, data: B }, this),
              o.call(this, new a(t, r, w[v[p]], R, B, f + 2, _[v[p]])));
          }
        }
        return (
          (this.internal.__cell__.table_x = t),
          (this.internal.__cell__.table_y = r),
          this
        );
      };
      var h = function (t, e) {
        var r = this.internal.__cell__.padding,
          n = this.internal.__cell__.table_font_size,
          i = this.internal.scaleFactor;
        return Object.keys(t)
          .map(function (n) {
            var i = t[n];
            return this.splitTextToSize(
              i.hasOwnProperty("text") ? i.text : i,
              e[n] - r - r,
            );
          }, this)
          .map(function (t) {
            return (this.getLineHeightFactor() * t.length * n) / i + r + r;
          }, this)
          .reduce(function (t, e) {
            return Math.max(t, e);
          }, 0);
      };
      ((t.setTableHeaderRow = function (t) {
        (i.call(this), (this.internal.__cell__.tableHeaderRow = t));
      }),
        (t.printHeaderRow = function (t, e) {
          if ((i.call(this), !this.internal.__cell__.tableHeaderRow))
            throw new Error("Property tableHeaderRow does not exist.");
          var n;
          if (
            ((r = !0),
            "function" == typeof this.internal.__cell__.headerFunction)
          ) {
            var s = this.internal.__cell__.headerFunction(
              this,
              this.internal.__cell__.pages,
            );
            this.internal.__cell__.lastCell = new a(
              s[0],
              s[1],
              s[2],
              s[3],
              void 0,
              -1,
            );
          }
          this.setFont(void 0, "bold");
          for (
            var h = [], u = 0;
            u < this.internal.__cell__.tableHeaderRow.length;
            u += 1
          ) {
            ((n = this.internal.__cell__.tableHeaderRow[u].clone()),
              e && ((n.y = this.internal.__cell__.margins.top || 0), h.push(n)),
              (n.lineNumber = t));
            var c = this.getTextColor();
            (this.setTextColor(this.internal.__cell__.headerTextColor),
              this.setFillColor(this.internal.__cell__.headerBackgroundColor),
              o.call(this, n),
              this.setTextColor(c));
          }
          (h.length > 0 && this.setTableHeaderRow(h),
            this.setFont(void 0, "normal"),
            (r = !1));
        }));
    })(Ct.API));
  var we = {
      italic: ["italic", "oblique", "normal"],
      oblique: ["oblique", "italic", "normal"],
      normal: ["normal", "oblique", "italic"],
    },
    xe = [
      "ultra-condensed",
      "extra-condensed",
      "condensed",
      "semi-condensed",
      "normal",
      "semi-expanded",
      "expanded",
      "extra-expanded",
      "ultra-expanded",
    ],
    Se = be(xe),
    Ae = [100, 200, 300, 400, 500, 600, 700, 800, 900],
    Ee = be(Ae);
  function Fe(t) {
    var e = t.family.replace(/"|'/g, "").toLowerCase(),
      r = (function (t) {
        return we[(t = t || "normal")] ? t : "normal";
      })(t.style),
      n = (function (t) {
        if (!t) return 400;
        if ("number" == typeof t)
          return t >= 100 && t <= 900 && t % 100 == 0 ? t : 400;
        if (/^\d00$/.test(t)) return parseInt(t);
        switch (t) {
          case "bold":
            return 700;
          case "normal":
          default:
            return 400;
        }
      })(t.weight),
      i = (function (t) {
        return "number" == typeof Se[(t = t || "normal")] ? t : "normal";
      })(t.stretch);
    return {
      family: e,
      style: r,
      weight: n,
      stretch: i,
      src: t.src || [],
      ref: t.ref || { name: e, style: [i, r, n].join(" ") },
    };
  }
  function Ne(t, e, r, n) {
    var i;
    for (i = r; i >= 0 && i < e.length; i += n) if (t[e[i]]) return t[e[i]];
    for (i = r; i >= 0 && i < e.length; i -= n) if (t[e[i]]) return t[e[i]];
  }
  var Pe = {
      "sans-serif": "helvetica",
      fixed: "courier",
      monospace: "courier",
      terminal: "courier",
      cursive: "times",
      fantasy: "times",
      serif: "times",
    },
    Ie = {
      caption: "times",
      icon: "times",
      menu: "times",
      "message-box": "times",
      "small-caption": "times",
      "status-bar": "times",
    };
  function Le(t) {
    return [t.stretch, t.style, t.weight, t.family].join(" ");
  }
  function Ce(t, e, r) {
    for (
      var n = (r = r || {}).defaultFontFamily || "times",
        i = Object.assign({}, Pe, r.genericFontFamilies || {}),
        s = null,
        a = null,
        o = 0;
      o < e.length;
      ++o
    )
      if (
        (i[(s = Fe(e[o])).family] && (s.family = i[s.family]),
        t.hasOwnProperty(s.family))
      ) {
        a = t[s.family];
        break;
      }
    if (!(a = a || t[n]))
      throw new Error(
        "Could not find a font-family for the rule '" +
          Le(s) +
          "' and default family '" +
          n +
          "'.",
      );
    if (
      ((a = (function (t, e) {
        if (e[t]) return e[t];
        var r = Se[t],
          n = r <= Se.normal ? -1 : 1,
          i = Ne(e, xe, r, n);
        if (!i)
          throw new Error(
            "Could not find a matching font-stretch value for " + t,
          );
        return i;
      })(s.stretch, a)),
      (a = (function (t, e) {
        if (e[t]) return e[t];
        for (var r = we[t], n = 0; n < r.length; ++n)
          if (e[r[n]]) return e[r[n]];
        throw new Error("Could not find a matching font-style for " + t);
      })(s.style, a)),
      !(a = (function (t, e) {
        if (e[t]) return e[t];
        if (400 === t && e[500]) return e[500];
        if (500 === t && e[400]) return e[400];
        var r = Ee[t],
          n = Ne(e, Ae, r, t < 400 ? -1 : 1);
        if (!n)
          throw new Error(
            "Could not find a matching font-weight for value " + t,
          );
        return n;
      })(s.weight, a)))
    )
      throw new Error("Failed to resolve a font for the rule '" + Le(s) + "'.");
    return a;
  }
  function De(t) {
    return t.trimLeft();
  }
  function _e(t, e) {
    for (var r = 0; r < t.length; ) {
      if (t.charAt(r) === e) return [t.substring(0, r), t.substring(r + 1)];
      r += 1;
    }
    return null;
  }
  function Re(t) {
    var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return null === e ? null : [e[0], t.substring(e[0].length)];
  }
  var Be,
    Te,
    je,
    ke = ["times"];
  (!(function (t) {
    var e,
      r,
      i,
      s,
      a,
      o,
      h,
      u,
      c,
      l = function (t) {
        return (
          (t = t || {}),
          (this.isStrokeTransparent = t.isStrokeTransparent || !1),
          (this.strokeOpacity = t.strokeOpacity || 1),
          (this.strokeStyle = t.strokeStyle || "#000000"),
          (this.fillStyle = t.fillStyle || "#000000"),
          (this.isFillTransparent = t.isFillTransparent || !1),
          (this.fillOpacity = t.fillOpacity || 1),
          (this.font = t.font || "10px sans-serif"),
          (this.textBaseline = t.textBaseline || "alphabetic"),
          (this.textAlign = t.textAlign || "left"),
          (this.lineWidth = t.lineWidth || 1),
          (this.lineJoin = t.lineJoin || "miter"),
          (this.lineCap = t.lineCap || "butt"),
          (this.path = t.path || []),
          (this.transform =
            void 0 !== t.transform ? t.transform.clone() : new u()),
          (this.globalCompositeOperation =
            t.globalCompositeOperation || "normal"),
          (this.globalAlpha = t.globalAlpha || 1),
          (this.clip_path = t.clip_path || []),
          (this.currentPoint = t.currentPoint || new o()),
          (this.miterLimit = t.miterLimit || 10),
          (this.lastPoint = t.lastPoint || new o()),
          (this.lineDashOffset = t.lineDashOffset || 0),
          (this.lineDash = t.lineDash || []),
          (this.margin = t.margin || [0, 0, 0, 0]),
          (this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0),
          (this.ignoreClearRect =
            "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect),
          this
        );
      };
    t.events.push([
      "initialized",
      function () {
        ((this.context2d = new f(this)),
          (e = this.internal.f2),
          (r = this.internal.getCoordinateString),
          (i = this.internal.getVerticalCoordinateString),
          (s = this.internal.getHorizontalCoordinate),
          (a = this.internal.getVerticalCoordinate),
          (o = this.internal.Point),
          (h = this.internal.Rectangle),
          (u = this.internal.Matrix),
          (c = new l()));
      },
    ]);
    var f = function (t) {
      Object.defineProperty(this, "canvas", {
        get: function () {
          return { parentNode: !1, style: !1 };
        },
      });
      var e = t;
      Object.defineProperty(this, "pdf", {
        get: function () {
          return e;
        },
      });
      var r = !1;
      Object.defineProperty(this, "pageWrapXEnabled", {
        get: function () {
          return r;
        },
        set: function (t) {
          r = Boolean(t);
        },
      });
      var n = !1;
      Object.defineProperty(this, "pageWrapYEnabled", {
        get: function () {
          return n;
        },
        set: function (t) {
          n = Boolean(t);
        },
      });
      var i = 0;
      Object.defineProperty(this, "posX", {
        get: function () {
          return i;
        },
        set: function (t) {
          isNaN(t) || (i = t);
        },
      });
      var s = 0;
      (Object.defineProperty(this, "posY", {
        get: function () {
          return s;
        },
        set: function (t) {
          isNaN(t) || (s = t);
        },
      }),
        Object.defineProperty(this, "margin", {
          get: function () {
            return c.margin;
          },
          set: function (t) {
            var e;
            ("number" == typeof t
              ? (e = [t, t, t, t])
              : (((e = new Array(4))[0] = t[0]),
                (e[1] = t.length >= 2 ? t[1] : e[0]),
                (e[2] = t.length >= 3 ? t[2] : e[0]),
                (e[3] = t.length >= 4 ? t[3] : e[1])),
              (c.margin = e));
          },
        }));
      var a = !1;
      Object.defineProperty(this, "autoPaging", {
        get: function () {
          return a;
        },
        set: function (t) {
          a = t;
        },
      });
      var o = 0;
      Object.defineProperty(this, "lastBreak", {
        get: function () {
          return o;
        },
        set: function (t) {
          o = t;
        },
      });
      var h = [];
      (Object.defineProperty(this, "pageBreaks", {
        get: function () {
          return h;
        },
        set: function (t) {
          h = t;
        },
      }),
        Object.defineProperty(this, "ctx", {
          get: function () {
            return c;
          },
          set: function (t) {
            t instanceof l && (c = t);
          },
        }),
        Object.defineProperty(this, "path", {
          get: function () {
            return c.path;
          },
          set: function (t) {
            c.path = t;
          },
        }));
      var u = [];
      (Object.defineProperty(this, "ctxStack", {
        get: function () {
          return u;
        },
        set: function (t) {
          u = t;
        },
      }),
        Object.defineProperty(this, "fillStyle", {
          get: function () {
            return this.ctx.fillStyle;
          },
          set: function (t) {
            var e;
            ((e = d(t)),
              (this.ctx.fillStyle = e.style),
              (this.ctx.isFillTransparent = 0 === e.a),
              (this.ctx.fillOpacity = e.a),
              this.pdf.setFillColor(e.r, e.g, e.b, { a: e.a }),
              this.pdf.setTextColor(e.r, e.g, e.b, { a: e.a }));
          },
        }),
        Object.defineProperty(this, "strokeStyle", {
          get: function () {
            return this.ctx.strokeStyle;
          },
          set: function (t) {
            var e = d(t);
            ((this.ctx.strokeStyle = e.style),
              (this.ctx.isStrokeTransparent = 0 === e.a),
              (this.ctx.strokeOpacity = e.a),
              0 === e.a
                ? this.pdf.setDrawColor(255, 255, 255)
                : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b)));
          },
        }),
        Object.defineProperty(this, "lineCap", {
          get: function () {
            return this.ctx.lineCap;
          },
          set: function (t) {
            -1 !== ["butt", "round", "square"].indexOf(t) &&
              ((this.ctx.lineCap = t), this.pdf.setLineCap(t));
          },
        }),
        Object.defineProperty(this, "lineWidth", {
          get: function () {
            return this.ctx.lineWidth;
          },
          set: function (t) {
            isNaN(t) || ((this.ctx.lineWidth = t), this.pdf.setLineWidth(t));
          },
        }),
        Object.defineProperty(this, "lineJoin", {
          get: function () {
            return this.ctx.lineJoin;
          },
          set: function (t) {
            -1 !== ["bevel", "round", "miter"].indexOf(t) &&
              ((this.ctx.lineJoin = t), this.pdf.setLineJoin(t));
          },
        }),
        Object.defineProperty(this, "miterLimit", {
          get: function () {
            return this.ctx.miterLimit;
          },
          set: function (t) {
            isNaN(t) || ((this.ctx.miterLimit = t), this.pdf.setMiterLimit(t));
          },
        }),
        Object.defineProperty(this, "textBaseline", {
          get: function () {
            return this.ctx.textBaseline;
          },
          set: function (t) {
            this.ctx.textBaseline = t;
          },
        }),
        Object.defineProperty(this, "textAlign", {
          get: function () {
            return this.ctx.textAlign;
          },
          set: function (t) {
            -1 !== ["right", "end", "center", "left", "start"].indexOf(t) &&
              (this.ctx.textAlign = t);
          },
        }));
      var f = null;
      function p(t, e) {
        if (null === f) {
          var r = (function (t) {
            var e = [];
            return (
              Object.keys(t).forEach(function (r) {
                t[r].forEach(function (t) {
                  var n = null;
                  switch (t) {
                    case "bold":
                      n = { family: r, weight: "bold" };
                      break;
                    case "italic":
                      n = { family: r, style: "italic" };
                      break;
                    case "bolditalic":
                      n = { family: r, weight: "bold", style: "italic" };
                      break;
                    case "":
                    case "normal":
                      n = { family: r };
                  }
                  null !== n && ((n.ref = { name: r, style: t }), e.push(n));
                });
              }),
              e
            );
          })(t.getFontList());
          f = (function (t) {
            for (var e = {}, r = 0; r < t.length; ++r) {
              var n = Fe(t[r]),
                i = n.family,
                s = n.stretch,
                a = n.style,
                o = n.weight;
              ((e[i] = e[i] || {}),
                (e[i][s] = e[i][s] || {}),
                (e[i][s][a] = e[i][s][a] || {}),
                (e[i][s][a][o] = n));
            }
            return e;
          })(r.concat(e));
        }
        return f;
      }
      var g = null;
      (Object.defineProperty(this, "fontFaces", {
        get: function () {
          return g;
        },
        set: function (t) {
          ((f = null), (g = t));
        },
      }),
        Object.defineProperty(this, "font", {
          get: function () {
            return this.ctx.font;
          },
          set: function (t) {
            var e;
            if (
              ((this.ctx.font = t),
              null !==
                (e =
                  /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
                    t,
                  )))
            ) {
              var r = e[1],
                n = (e[2], e[3]),
                i = e[4],
                s = (e[5], e[6]),
                a = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
              ((i =
                "px" === a
                  ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor)
                  : "em" === a
                    ? Math.floor(parseFloat(i) * this.pdf.getFontSize())
                    : Math.floor(
                        parseFloat(i) * this.pdf.internal.scaleFactor,
                      )),
                this.pdf.setFontSize(i));
              var o = (function (t) {
                var e,
                  r,
                  n = [],
                  i = t.trim();
                if ("" === i) return ke;
                if (i in Ie) return [Ie[i]];
                for (; "" !== i; ) {
                  switch (((r = null), (e = (i = De(i)).charAt(0)))) {
                    case '"':
                    case "'":
                      r = _e(i.substring(1), e);
                      break;
                    default:
                      r = Re(i);
                  }
                  if (null === r) return ke;
                  if (
                    (n.push(r[0]), "" !== (i = De(r[1])) && "," !== i.charAt(0))
                  )
                    return ke;
                  i = i.replace(/^,/, "");
                }
                return n;
              })(s);
              if (this.fontFaces) {
                var h = Ce(
                  p(this.pdf, this.fontFaces),
                  o.map(function (t) {
                    return {
                      family: t,
                      stretch: "normal",
                      weight: n,
                      style: r,
                    };
                  }),
                );
                this.pdf.setFont(h.ref.name, h.ref.style);
              } else {
                var u = "";
                (("bold" === n || parseInt(n, 10) >= 700 || "bold" === r) &&
                  (u = "bold"),
                  "italic" === r && (u += "italic"),
                  0 === u.length && (u = "normal"));
                for (
                  var c = "",
                    l = {
                      arial: "Helvetica",
                      Arial: "Helvetica",
                      verdana: "Helvetica",
                      Verdana: "Helvetica",
                      helvetica: "Helvetica",
                      Helvetica: "Helvetica",
                      "sans-serif": "Helvetica",
                      fixed: "Courier",
                      monospace: "Courier",
                      terminal: "Courier",
                      cursive: "Times",
                      fantasy: "Times",
                      serif: "Times",
                    },
                    f = 0;
                  f < o.length;
                  f++
                ) {
                  if (
                    void 0 !==
                    this.pdf.internal.getFont(o[f], u, {
                      noFallback: !0,
                      disableWarning: !0,
                    })
                  ) {
                    c = o[f];
                    break;
                  }
                  if (
                    "bolditalic" === u &&
                    void 0 !==
                      this.pdf.internal.getFont(o[f], "bold", {
                        noFallback: !0,
                        disableWarning: !0,
                      })
                  )
                    ((c = o[f]), (u = "bold"));
                  else if (
                    void 0 !==
                    this.pdf.internal.getFont(o[f], "normal", {
                      noFallback: !0,
                      disableWarning: !0,
                    })
                  ) {
                    ((c = o[f]), (u = "normal"));
                    break;
                  }
                }
                if ("" === c)
                  for (var d = 0; d < o.length; d++)
                    if (l[o[d]]) {
                      c = l[o[d]];
                      break;
                    }
                ((c = "" === c ? "Times" : c), this.pdf.setFont(c, u));
              }
            }
          },
        }),
        Object.defineProperty(this, "globalCompositeOperation", {
          get: function () {
            return this.ctx.globalCompositeOperation;
          },
          set: function (t) {
            this.ctx.globalCompositeOperation = t;
          },
        }),
        Object.defineProperty(this, "globalAlpha", {
          get: function () {
            return this.ctx.globalAlpha;
          },
          set: function (t) {
            this.ctx.globalAlpha = t;
          },
        }),
        Object.defineProperty(this, "lineDashOffset", {
          get: function () {
            return this.ctx.lineDashOffset;
          },
          set: function (t) {
            ((this.ctx.lineDashOffset = t), O.call(this));
          },
        }),
        Object.defineProperty(this, "lineDash", {
          get: function () {
            return this.ctx.lineDash;
          },
          set: function (t) {
            ((this.ctx.lineDash = t), O.call(this));
          },
        }),
        Object.defineProperty(this, "ignoreClearRect", {
          get: function () {
            return this.ctx.ignoreClearRect;
          },
          set: function (t) {
            this.ctx.ignoreClearRect = Boolean(t);
          },
        }));
    };
    ((f.prototype.setLineDash = function (t) {
      this.lineDash = t;
    }),
      (f.prototype.getLineDash = function () {
        return this.lineDash.length % 2
          ? this.lineDash.concat(this.lineDash)
          : this.lineDash.slice();
      }),
      (f.prototype.fill = function () {
        x.call(this, "fill", !1);
      }),
      (f.prototype.stroke = function () {
        x.call(this, "stroke", !1);
      }),
      (f.prototype.beginPath = function () {
        this.path = [{ type: "begin" }];
      }),
      (f.prototype.moveTo = function (t, e) {
        if (isNaN(t) || isNaN(e))
          throw (
            Q.error("jsPDF.context2d.moveTo: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.moveTo")
          );
        var r = this.ctx.transform.applyToPoint(new o(t, e));
        (this.path.push({ type: "mt", x: r.x, y: r.y }),
          (this.ctx.lastPoint = new o(t, e)));
      }),
      (f.prototype.closePath = function () {
        var t = new o(0, 0),
          e = 0;
        for (e = this.path.length - 1; -1 !== e; e--)
          if (
            "begin" === this.path[e].type &&
            "object" === (0, n.Z)(this.path[e + 1]) &&
            "number" == typeof this.path[e + 1].x
          ) {
            t = new o(this.path[e + 1].x, this.path[e + 1].y);
            break;
          }
        (this.path.push({ type: "close" }),
          (this.ctx.lastPoint = new o(t.x, t.y)));
      }),
      (f.prototype.lineTo = function (t, e) {
        if (isNaN(t) || isNaN(e))
          throw (
            Q.error("jsPDF.context2d.lineTo: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.lineTo")
          );
        var r = this.ctx.transform.applyToPoint(new o(t, e));
        (this.path.push({ type: "lt", x: r.x, y: r.y }),
          (this.ctx.lastPoint = new o(r.x, r.y)));
      }),
      (f.prototype.clip = function () {
        ((this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))),
          x.call(this, null, !0));
      }),
      (f.prototype.quadraticCurveTo = function (t, e, r, n) {
        if (isNaN(r) || isNaN(n) || isNaN(t) || isNaN(e))
          throw (
            Q.error(
              "jsPDF.context2d.quadraticCurveTo: Invalid arguments",
              arguments,
            ),
            new Error(
              "Invalid arguments passed to jsPDF.context2d.quadraticCurveTo",
            )
          );
        var i = this.ctx.transform.applyToPoint(new o(r, n)),
          s = this.ctx.transform.applyToPoint(new o(t, e));
        (this.path.push({ type: "qct", x1: s.x, y1: s.y, x: i.x, y: i.y }),
          (this.ctx.lastPoint = new o(i.x, i.y)));
      }),
      (f.prototype.bezierCurveTo = function (t, e, r, n, i, s) {
        if (
          isNaN(i) ||
          isNaN(s) ||
          isNaN(t) ||
          isNaN(e) ||
          isNaN(r) ||
          isNaN(n)
        )
          throw (
            Q.error(
              "jsPDF.context2d.bezierCurveTo: Invalid arguments",
              arguments,
            ),
            new Error(
              "Invalid arguments passed to jsPDF.context2d.bezierCurveTo",
            )
          );
        var a = this.ctx.transform.applyToPoint(new o(i, s)),
          h = this.ctx.transform.applyToPoint(new o(t, e)),
          u = this.ctx.transform.applyToPoint(new o(r, n));
        (this.path.push({
          type: "bct",
          x1: h.x,
          y1: h.y,
          x2: u.x,
          y2: u.y,
          x: a.x,
          y: a.y,
        }),
          (this.ctx.lastPoint = new o(a.x, a.y)));
      }),
      (f.prototype.arc = function (t, e, r, n, i, s) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i))
          throw (
            Q.error("jsPDF.context2d.arc: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.arc")
          );
        if (((s = Boolean(s)), !this.ctx.transform.isIdentity)) {
          var a = this.ctx.transform.applyToPoint(new o(t, e));
          ((t = a.x), (e = a.y));
          var h = this.ctx.transform.applyToPoint(new o(0, r)),
            u = this.ctx.transform.applyToPoint(new o(0, 0));
          r = Math.sqrt(Math.pow(h.x - u.x, 2) + Math.pow(h.y - u.y, 2));
        }
        (Math.abs(i - n) >= 2 * Math.PI && ((n = 0), (i = 2 * Math.PI)),
          this.path.push({
            type: "arc",
            x: t,
            y: e,
            radius: r,
            startAngle: n,
            endAngle: i,
            counterclockwise: s,
          }));
      }),
      (f.prototype.arcTo = function (t, e, r, n, i) {
        throw new Error("arcTo not implemented.");
      }),
      (f.prototype.rect = function (t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
          throw (
            Q.error("jsPDF.context2d.rect: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.rect")
          );
        (this.moveTo(t, e),
          this.lineTo(t + r, e),
          this.lineTo(t + r, e + n),
          this.lineTo(t, e + n),
          this.lineTo(t, e),
          this.lineTo(t + r, e),
          this.lineTo(t, e));
      }),
      (f.prototype.fillRect = function (t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
          throw (
            Q.error("jsPDF.context2d.fillRect: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.fillRect")
          );
        if (!p.call(this)) {
          var i = {};
          ("butt" !== this.lineCap &&
            ((i.lineCap = this.lineCap), (this.lineCap = "butt")),
            "miter" !== this.lineJoin &&
              ((i.lineJoin = this.lineJoin), (this.lineJoin = "miter")),
            this.beginPath(),
            this.rect(t, e, r, n),
            this.fill(),
            i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap),
            i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin));
        }
      }),
      (f.prototype.strokeRect = function (t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
          throw (
            Q.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.strokeRect")
          );
        g.call(this) ||
          (this.beginPath(), this.rect(t, e, r, n), this.stroke());
      }),
      (f.prototype.clearRect = function (t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n))
          throw (
            Q.error("jsPDF.context2d.clearRect: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.clearRect")
          );
        this.ignoreClearRect ||
          ((this.fillStyle = "#ffffff"), this.fillRect(t, e, r, n));
      }),
      (f.prototype.save = function (t) {
        t = "boolean" != typeof t || t;
        for (
          var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0;
          r < this.pdf.internal.getNumberOfPages();
          r++
        )
          (this.pdf.setPage(r + 1), this.pdf.internal.out("q"));
        if ((this.pdf.setPage(e), t)) {
          this.ctx.fontSize = this.pdf.internal.getFontSize();
          var n = new l(this.ctx);
          (this.ctxStack.push(this.ctx), (this.ctx = n));
        }
      }),
      (f.prototype.restore = function (t) {
        t = "boolean" != typeof t || t;
        for (
          var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0;
          r < this.pdf.internal.getNumberOfPages();
          r++
        )
          (this.pdf.setPage(r + 1), this.pdf.internal.out("Q"));
        (this.pdf.setPage(e),
          t &&
            0 !== this.ctxStack.length &&
            ((this.ctx = this.ctxStack.pop()),
            (this.fillStyle = this.ctx.fillStyle),
            (this.strokeStyle = this.ctx.strokeStyle),
            (this.font = this.ctx.font),
            (this.lineCap = this.ctx.lineCap),
            (this.lineWidth = this.ctx.lineWidth),
            (this.lineJoin = this.ctx.lineJoin),
            (this.lineDash = this.ctx.lineDash),
            (this.lineDashOffset = this.ctx.lineDashOffset)));
      }),
      (f.prototype.toDataURL = function () {
        throw new Error("toDataUrl not implemented.");
      }));
    var d = function (t) {
        var e, r, n, i;
        if ((!0 === t.isCanvasGradient && (t = t.getColor()), !t))
          return { r: 0, g: 0, b: 0, a: 0, style: t };
        if (
          /transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(
            t,
          )
        )
          ((e = 0), (r = 0), (n = 0), (i = 0));
        else {
          var s = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
          if (null !== s)
            ((e = parseInt(s[1])),
              (r = parseInt(s[2])),
              (n = parseInt(s[3])),
              (i = 1));
          else if (
            null !==
            (s =
              /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(
                t,
              ))
          )
            ((e = parseInt(s[1])),
              (r = parseInt(s[2])),
              (n = parseInt(s[3])),
              (i = parseFloat(s[4])));
          else {
            if (((i = 1), "string" == typeof t && "#" !== t.charAt(0))) {
              var a = new at(t);
              t = a.ok ? a.toHex() : "#000000";
            }
            (4 === t.length
              ? ((e = t.substring(1, 2)),
                (e += e),
                (r = t.substring(2, 3)),
                (r += r),
                (n = t.substring(3, 4)),
                (n += n))
              : ((e = t.substring(1, 3)),
                (r = t.substring(3, 5)),
                (n = t.substring(5, 7))),
              (e = parseInt(e, 16)),
              (r = parseInt(r, 16)),
              (n = parseInt(n, 16)));
          }
        }
        return { r: e, g: r, b: n, a: i, style: t };
      },
      p = function () {
        return this.ctx.isFillTransparent || 0 == this.globalAlpha;
      },
      g = function () {
        return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
      };
    ((f.prototype.fillText = function (t, e, r, n) {
      if (isNaN(e) || isNaN(r) || "string" != typeof t)
        throw (
          Q.error("jsPDF.context2d.fillText: Invalid arguments", arguments),
          new Error("Invalid arguments passed to jsPDF.context2d.fillText")
        );
      if (((n = isNaN(n) ? void 0 : n), !p.call(this))) {
        var i = T(this.ctx.transform.rotation),
          s = this.ctx.transform.scaleX;
        L.call(this, {
          text: t,
          x: e,
          y: r,
          scale: s,
          angle: i,
          align: this.textAlign,
          maxWidth: n,
        });
      }
    }),
      (f.prototype.strokeText = function (t, e, r, n) {
        if (isNaN(e) || isNaN(r) || "string" != typeof t)
          throw (
            Q.error("jsPDF.context2d.strokeText: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.strokeText")
          );
        if (!g.call(this)) {
          n = isNaN(n) ? void 0 : n;
          var i = T(this.ctx.transform.rotation),
            s = this.ctx.transform.scaleX;
          L.call(this, {
            text: t,
            x: e,
            y: r,
            scale: s,
            renderingMode: "stroke",
            angle: i,
            align: this.textAlign,
            maxWidth: n,
          });
        }
      }),
      (f.prototype.measureText = function (t) {
        if ("string" != typeof t)
          throw (
            Q.error(
              "jsPDF.context2d.measureText: Invalid arguments",
              arguments,
            ),
            new Error("Invalid arguments passed to jsPDF.context2d.measureText")
          );
        var e = this.pdf,
          r = this.pdf.internal.scaleFactor,
          n = e.internal.getFontSize(),
          i = (e.getStringUnitWidth(t) * n) / e.internal.scaleFactor,
          s = function (t) {
            var e = (t = t || {}).width || 0;
            return (
              Object.defineProperty(this, "width", {
                get: function () {
                  return e;
                },
              }),
              this
            );
          };
        return new s({ width: (i *= Math.round(((96 * r) / 72) * 1e4) / 1e4) });
      }),
      (f.prototype.scale = function (t, e) {
        if (isNaN(t) || isNaN(e))
          throw (
            Q.error("jsPDF.context2d.scale: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.scale")
          );
        var r = new u(t, 0, 0, e, 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(r);
      }),
      (f.prototype.rotate = function (t) {
        if (isNaN(t))
          throw (
            Q.error("jsPDF.context2d.rotate: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.rotate")
          );
        var e = new u(
          Math.cos(t),
          Math.sin(t),
          -Math.sin(t),
          Math.cos(t),
          0,
          0,
        );
        this.ctx.transform = this.ctx.transform.multiply(e);
      }),
      (f.prototype.translate = function (t, e) {
        if (isNaN(t) || isNaN(e))
          throw (
            Q.error("jsPDF.context2d.translate: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.translate")
          );
        var r = new u(1, 0, 0, 1, t, e);
        this.ctx.transform = this.ctx.transform.multiply(r);
      }),
      (f.prototype.transform = function (t, e, r, n, i, s) {
        if (
          isNaN(t) ||
          isNaN(e) ||
          isNaN(r) ||
          isNaN(n) ||
          isNaN(i) ||
          isNaN(s)
        )
          throw (
            Q.error("jsPDF.context2d.transform: Invalid arguments", arguments),
            new Error("Invalid arguments passed to jsPDF.context2d.transform")
          );
        var a = new u(t, e, r, n, i, s);
        this.ctx.transform = this.ctx.transform.multiply(a);
      }),
      (f.prototype.setTransform = function (t, e, r, n, i, s) {
        ((t = isNaN(t) ? 1 : t),
          (e = isNaN(e) ? 0 : e),
          (r = isNaN(r) ? 0 : r),
          (n = isNaN(n) ? 1 : n),
          (i = isNaN(i) ? 0 : i),
          (s = isNaN(s) ? 0 : s),
          (this.ctx.transform = new u(t, e, r, n, i, s)));
      }));
    var v = function () {
      return (
        this.margin[0] > 0 ||
        this.margin[1] > 0 ||
        this.margin[2] > 0 ||
        this.margin[3] > 0
      );
    };
    f.prototype.drawImage = function (t, e, r, n, i, s, a, o, c) {
      var l = this.pdf.getImageProperties(t),
        f = 1,
        d = 1,
        p = 1,
        g = 1;
      (void 0 !== n &&
        void 0 !== o &&
        ((p = o / n),
        (g = c / i),
        (f = ((l.width / n) * o) / n),
        (d = ((l.height / i) * c) / i)),
        void 0 === s && ((s = e), (a = r), (e = 0), (r = 0)),
        void 0 !== n && void 0 === o && ((o = n), (c = i)),
        void 0 === n && void 0 === o && ((o = l.width), (c = l.height)));
      for (
        var y,
          x = this.ctx.transform.decompose(),
          A = T(x.rotate.shx),
          E = new u(),
          F = (E = (E = (E = E.multiply(x.translate)).multiply(
            x.skew,
          )).multiply(x.scale)).applyToRectangle(
            new h(s - e * p, a - r * g, n * f, i * d),
          ),
          N = m.call(this, F),
          P = [],
          I = 0;
        I < N.length;
        I += 1
      )
        -1 === P.indexOf(N[I]) && P.push(N[I]);
      if ((w(P), this.autoPaging))
        for (var L = P[0], C = P[P.length - 1], D = L; D < C + 1; D++) {
          this.pdf.setPage(D);
          var _ =
              this.pdf.internal.pageSize.width -
              this.margin[3] -
              this.margin[1],
            R = 1 === D ? this.posY + this.margin[0] : this.margin[0],
            B =
              this.pdf.internal.pageSize.height -
              this.posY -
              this.margin[0] -
              this.margin[2],
            j =
              this.pdf.internal.pageSize.height -
              this.margin[0] -
              this.margin[2],
            k = 1 === D ? 0 : B + (D - 2) * j;
          if (0 !== this.ctx.clip_path.length) {
            var O = this.path;
            ((y = JSON.parse(JSON.stringify(this.ctx.clip_path))),
              (this.path = b(
                y,
                this.posX + this.margin[3],
                -k + R + this.ctx.prevPageLastElemOffset,
              )),
              S.call(this, "fill", !0),
              (this.path = O));
          }
          var M = JSON.parse(JSON.stringify(F));
          M = b(
            [M],
            this.posX + this.margin[3],
            -k + R + this.ctx.prevPageLastElemOffset,
          )[0];
          var q = (D > L || D < C) && v.call(this);
          (q &&
            (this.pdf.saveGraphicsState(),
            this.pdf
              .rect(this.margin[3], this.margin[0], _, j, null)
              .clip()
              .discardPath()),
            this.pdf.addImage(t, "JPEG", M.x, M.y, M.w, M.h, null, null, A),
            q && this.pdf.restoreGraphicsState());
        }
      else this.pdf.addImage(t, "JPEG", F.x, F.y, F.w, F.h, null, null, A);
    };
    var m = function (t, e, r) {
        var n = [];
        ((e = e || this.pdf.internal.pageSize.width),
          (r =
            r ||
            this.pdf.internal.pageSize.height -
              this.margin[0] -
              this.margin[2]));
        var i = this.posY + this.ctx.prevPageLastElemOffset;
        switch (t.type) {
          default:
          case "mt":
          case "lt":
            n.push(Math.floor((t.y + i) / r) + 1);
            break;
          case "arc":
            (n.push(Math.floor((t.y + i - t.radius) / r) + 1),
              n.push(Math.floor((t.y + i + t.radius) / r) + 1));
            break;
          case "qct":
            var s = j(
              this.ctx.lastPoint.x,
              this.ctx.lastPoint.y,
              t.x1,
              t.y1,
              t.x,
              t.y,
            );
            (n.push(Math.floor((s.y + i) / r) + 1),
              n.push(Math.floor((s.y + s.h + i) / r) + 1));
            break;
          case "bct":
            var a = k(
              this.ctx.lastPoint.x,
              this.ctx.lastPoint.y,
              t.x1,
              t.y1,
              t.x2,
              t.y2,
              t.x,
              t.y,
            );
            (n.push(Math.floor((a.y + i) / r) + 1),
              n.push(Math.floor((a.y + a.h + i) / r) + 1));
            break;
          case "rect":
            (n.push(Math.floor((t.y + i) / r) + 1),
              n.push(Math.floor((t.y + t.h + i) / r) + 1));
        }
        for (var o = 0; o < n.length; o += 1)
          for (; this.pdf.internal.getNumberOfPages() < n[o]; ) y.call(this);
        return n;
      },
      y = function () {
        var t = this.fillStyle,
          e = this.strokeStyle,
          r = this.font,
          n = this.lineCap,
          i = this.lineWidth,
          s = this.lineJoin;
        (this.pdf.addPage(),
          (this.fillStyle = t),
          (this.strokeStyle = e),
          (this.font = r),
          (this.lineCap = n),
          (this.lineWidth = i),
          (this.lineJoin = s));
      },
      b = function (t, e, r) {
        for (var n = 0; n < t.length; n++)
          switch (t[n].type) {
            case "bct":
              ((t[n].x2 += e), (t[n].y2 += r));
            case "qct":
              ((t[n].x1 += e), (t[n].y1 += r));
            case "mt":
            case "lt":
            case "arc":
            default:
              ((t[n].x += e), (t[n].y += r));
          }
        return t;
      },
      w = function (t) {
        return t.sort(function (t, e) {
          return t - e;
        });
      },
      x = function (t, e) {
        for (
          var r,
            n,
            i = this.fillStyle,
            s = this.strokeStyle,
            a = this.lineCap,
            o = this.lineWidth,
            h = Math.abs(o * this.ctx.transform.scaleX),
            u = this.lineJoin,
            c = JSON.parse(JSON.stringify(this.path)),
            l = JSON.parse(JSON.stringify(this.path)),
            f = [],
            d = 0;
          d < l.length;
          d++
        )
          if (void 0 !== l[d].x)
            for (var p = m.call(this, l[d]), g = 0; g < p.length; g += 1)
              -1 === f.indexOf(p[g]) && f.push(p[g]);
        for (var x = 0; x < f.length; x++)
          for (; this.pdf.internal.getNumberOfPages() < f[x]; ) y.call(this);
        if ((w(f), this.autoPaging))
          for (var A = f[0], E = f[f.length - 1], F = A; F < E + 1; F++) {
            (this.pdf.setPage(F),
              (this.fillStyle = i),
              (this.strokeStyle = s),
              (this.lineCap = a),
              (this.lineWidth = h),
              (this.lineJoin = u));
            var N =
                this.pdf.internal.pageSize.width -
                this.margin[3] -
                this.margin[1],
              P = 1 === F ? this.posY + this.margin[0] : this.margin[0],
              I =
                this.pdf.internal.pageSize.height -
                this.posY -
                this.margin[0] -
                this.margin[2],
              L =
                this.pdf.internal.pageSize.height -
                this.margin[0] -
                this.margin[2],
              C = 1 === F ? 0 : I + (F - 2) * L;
            if (0 !== this.ctx.clip_path.length) {
              var D = this.path;
              ((r = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                (this.path = b(
                  r,
                  this.posX + this.margin[3],
                  -C + P + this.ctx.prevPageLastElemOffset,
                )),
                S.call(this, t, !0),
                (this.path = D));
            }
            if (
              ((n = JSON.parse(JSON.stringify(c))),
              (this.path = b(
                n,
                this.posX + this.margin[3],
                -C + P + this.ctx.prevPageLastElemOffset,
              )),
              !1 === e || 0 === F)
            ) {
              var _ = (F > A || F < E) && v.call(this);
              (_ &&
                (this.pdf.saveGraphicsState(),
                this.pdf
                  .rect(this.margin[3], this.margin[0], N, L, null)
                  .clip()
                  .discardPath()),
                S.call(this, t, e),
                _ && this.pdf.restoreGraphicsState());
            }
            this.lineWidth = o;
          }
        else ((this.lineWidth = h), S.call(this, t, e), (this.lineWidth = o));
        this.path = c;
      },
      S = function (t, e) {
        if (
          ("stroke" !== t || e || !g.call(this)) &&
          ("stroke" === t || e || !p.call(this))
        ) {
          for (var r, n, i = [], s = this.path, a = 0; a < s.length; a++) {
            var o = s[a];
            switch (o.type) {
              case "begin":
                i.push({ begin: !0 });
                break;
              case "close":
                i.push({ close: !0 });
                break;
              case "mt":
                i.push({ start: o, deltas: [], abs: [] });
                break;
              case "lt":
                var h = i.length;
                if (
                  s[a - 1] &&
                  !isNaN(s[a - 1].x) &&
                  ((r = [o.x - s[a - 1].x, o.y - s[a - 1].y]), h > 0)
                )
                  for (; h >= 0; h--)
                    if (!0 !== i[h - 1].close && !0 !== i[h - 1].begin) {
                      (i[h - 1].deltas.push(r), i[h - 1].abs.push(o));
                      break;
                    }
                break;
              case "bct":
                ((r = [
                  o.x1 - s[a - 1].x,
                  o.y1 - s[a - 1].y,
                  o.x2 - s[a - 1].x,
                  o.y2 - s[a - 1].y,
                  o.x - s[a - 1].x,
                  o.y - s[a - 1].y,
                ]),
                  i[i.length - 1].deltas.push(r));
                break;
              case "qct":
                var u = s[a - 1].x + (2 / 3) * (o.x1 - s[a - 1].x),
                  c = s[a - 1].y + (2 / 3) * (o.y1 - s[a - 1].y),
                  l = o.x + (2 / 3) * (o.x1 - o.x),
                  f = o.y + (2 / 3) * (o.y1 - o.y),
                  d = o.x,
                  v = o.y;
                ((r = [
                  u - s[a - 1].x,
                  c - s[a - 1].y,
                  l - s[a - 1].x,
                  f - s[a - 1].y,
                  d - s[a - 1].x,
                  v - s[a - 1].y,
                ]),
                  i[i.length - 1].deltas.push(r));
                break;
              case "arc":
                (i.push({ deltas: [], abs: [], arc: !0 }),
                  Array.isArray(i[i.length - 1].abs) &&
                    i[i.length - 1].abs.push(o));
            }
          }
          n = e ? null : "stroke" === t ? "stroke" : "fill";
          for (var m = !1, y = 0; y < i.length; y++)
            if (i[y].arc)
              for (var b = i[y].abs, w = 0; w < b.length; w++) {
                var x = b[w];
                ("arc" === x.type
                  ? F.call(
                      this,
                      x.x,
                      x.y,
                      x.radius,
                      x.startAngle,
                      x.endAngle,
                      x.counterclockwise,
                      void 0,
                      e,
                      !m,
                    )
                  : C.call(this, x.x, x.y),
                  (m = !0));
              }
            else if (!0 === i[y].close) (this.pdf.internal.out("h"), (m = !1));
            else if (!0 !== i[y].begin) {
              var S = i[y].start.x,
                A = i[y].start.y;
              (D.call(this, i[y].deltas, S, A), (m = !0));
            }
          (n && N.call(this, n), e && P.call(this));
        }
      },
      A = function (t) {
        var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
          r = e * (this.pdf.internal.getLineHeightFactor() - 1);
        switch (this.ctx.textBaseline) {
          case "bottom":
            return t - r;
          case "top":
            return t + e - r;
          case "hanging":
            return t + e - 2 * r;
          case "middle":
            return t + e / 2 - r;
          case "ideographic":
            return t;
          case "alphabetic":
          default:
            return t;
        }
      },
      E = function (t) {
        return (
          t +
          (this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor) *
            (this.pdf.internal.getLineHeightFactor() - 1)
        );
      };
    ((f.prototype.createLinearGradient = function () {
      var t = function () {};
      return (
        (t.colorStops = []),
        (t.addColorStop = function (t, e) {
          this.colorStops.push([t, e]);
        }),
        (t.getColor = function () {
          return 0 === this.colorStops.length
            ? "#000000"
            : this.colorStops[0][1];
        }),
        (t.isCanvasGradient = !0),
        t
      );
    }),
      (f.prototype.createPattern = function () {
        return this.createLinearGradient();
      }),
      (f.prototype.createRadialGradient = function () {
        return this.createLinearGradient();
      }));
    var F = function (t, e, r, n, i, s, a, o, h) {
        for (var u = R.call(this, r, n, i, s), c = 0; c < u.length; c++) {
          var l = u[c];
          (0 === c &&
            (h
              ? I.call(this, l.x1 + t, l.y1 + e)
              : C.call(this, l.x1 + t, l.y1 + e)),
            _.call(this, t, e, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4));
        }
        o ? P.call(this) : N.call(this, a);
      },
      N = function (t) {
        switch (t) {
          case "stroke":
            this.pdf.internal.out("S");
            break;
          case "fill":
            this.pdf.internal.out("f");
        }
      },
      P = function () {
        (this.pdf.clip(), this.pdf.discardPath());
      },
      I = function (t, e) {
        this.pdf.internal.out(r(t) + " " + i(e) + " m");
      },
      L = function (t) {
        var e;
        switch (t.align) {
          case "right":
          case "end":
            e = "right";
            break;
          case "center":
            e = "center";
            break;
          case "left":
          case "start":
          default:
            e = "left";
        }
        var r = this.pdf.getTextDimensions(t.text),
          n = A.call(this, t.y),
          i = E.call(this, n) - r.h,
          s = this.ctx.transform.applyToPoint(new o(t.x, n)),
          a = this.ctx.transform.decompose(),
          c = new u();
        c = (c = (c = c.multiply(a.translate)).multiply(a.skew)).multiply(
          a.scale,
        );
        for (
          var l,
            f,
            d,
            p = this.ctx.transform.applyToRectangle(new h(t.x, n, r.w, r.h)),
            g = c.applyToRectangle(new h(t.x, i, r.w, r.h)),
            y = m.call(this, g),
            x = [],
            F = 0;
          F < y.length;
          F += 1
        )
          -1 === x.indexOf(y[F]) && x.push(y[F]);
        if ((w(x), this.autoPaging))
          for (var N = x[0], P = x[x.length - 1], I = N; I < P + 1; I++) {
            this.pdf.setPage(I);
            var L = 1 === I ? this.posY + this.margin[0] : this.margin[0],
              C =
                this.pdf.internal.pageSize.height -
                this.posY -
                this.margin[0] -
                this.margin[2],
              D = this.pdf.internal.pageSize.height - this.margin[2],
              _ = D - this.margin[0],
              R = this.pdf.internal.pageSize.width - this.margin[1],
              B = R - this.margin[3],
              T = 1 === I ? 0 : C + (I - 2) * _;
            if (0 !== this.ctx.clip_path.length) {
              var j = this.path;
              ((l = JSON.parse(JSON.stringify(this.ctx.clip_path))),
                (this.path = b(l, this.posX + this.margin[3], -1 * T + L)),
                S.call(this, "fill", !0),
                (this.path = j));
            }
            var k = b(
              [JSON.parse(JSON.stringify(g))],
              this.posX + this.margin[3],
              -T + L + this.ctx.prevPageLastElemOffset,
            )[0];
            t.scale >= 0.01 &&
              ((f = this.pdf.internal.getFontSize()),
              this.pdf.setFontSize(f * t.scale),
              (d = this.lineWidth),
              (this.lineWidth = d * t.scale));
            var O = "text" !== this.autoPaging;
            if (O || k.y + k.h <= D) {
              if (O || (k.y >= L && k.x <= R)) {
                var M = O
                    ? t.text
                    : this.pdf.splitTextToSize(
                        t.text,
                        t.maxWidth || R - k.x,
                      )[0],
                  q = b(
                    [JSON.parse(JSON.stringify(p))],
                    this.posX + this.margin[3],
                    -T + L + this.ctx.prevPageLastElemOffset,
                  )[0],
                  H = O && (I > N || I < P) && v.call(this);
                (H &&
                  (this.pdf.saveGraphicsState(),
                  this.pdf
                    .rect(this.margin[3], this.margin[0], B, _, null)
                    .clip()
                    .discardPath()),
                  this.pdf.text(M, q.x, q.y, {
                    angle: t.angle,
                    align: e,
                    renderingMode: t.renderingMode,
                  }),
                  H && this.pdf.restoreGraphicsState());
              }
            } else k.y < D && (this.ctx.prevPageLastElemOffset += D - k.y);
            t.scale >= 0.01 && (this.pdf.setFontSize(f), (this.lineWidth = d));
          }
        else
          (t.scale >= 0.01 &&
            ((f = this.pdf.internal.getFontSize()),
            this.pdf.setFontSize(f * t.scale),
            (d = this.lineWidth),
            (this.lineWidth = d * t.scale)),
            this.pdf.text(t.text, s.x + this.posX, s.y + this.posY, {
              angle: t.angle,
              align: e,
              renderingMode: t.renderingMode,
              maxWidth: t.maxWidth,
            }),
            t.scale >= 0.01 && (this.pdf.setFontSize(f), (this.lineWidth = d)));
      },
      C = function (t, e, n, s) {
        ((n = n || 0),
          (s = s || 0),
          this.pdf.internal.out(r(t + n) + " " + i(e + s) + " l"));
      },
      D = function (t, e, r) {
        return this.pdf.lines(t, e, r, null, null);
      },
      _ = function (t, r, n, i, o, h, u, c) {
        this.pdf.internal.out(
          [
            e(s(n + t)),
            e(a(i + r)),
            e(s(o + t)),
            e(a(h + r)),
            e(s(u + t)),
            e(a(c + r)),
            "c",
          ].join(" "),
        );
      },
      R = function (t, e, r, n) {
        for (var i = 2 * Math.PI, s = Math.PI / 2; e > r; ) e -= i;
        var a = Math.abs(r - e);
        a < i && n && (a = i - a);
        for (var o = [], h = n ? -1 : 1, u = e; a > 1e-5; ) {
          var c = u + h * Math.min(a, s);
          (o.push(B.call(this, t, u, c)), (a -= Math.abs(c - u)), (u = c));
        }
        return o;
      },
      B = function (t, e, r) {
        var n = (r - e) / 2,
          i = t * Math.cos(n),
          s = t * Math.sin(n),
          a = i,
          o = -s,
          h = a * a + o * o,
          u = h + a * i + o * s,
          c = ((4 / 3) * (Math.sqrt(2 * h * u) - u)) / (a * s - o * i),
          l = a - c * o,
          f = o + c * a,
          d = l,
          p = -f,
          g = n + e,
          v = Math.cos(g),
          m = Math.sin(g);
        return {
          x1: t * Math.cos(e),
          y1: t * Math.sin(e),
          x2: l * v - f * m,
          y2: l * m + f * v,
          x3: d * v - p * m,
          y3: d * m + p * v,
          x4: t * Math.cos(r),
          y4: t * Math.sin(r),
        };
      },
      T = function (t) {
        return (180 * t) / Math.PI;
      },
      j = function (t, e, r, n, i, s) {
        var a = t + 0.5 * (r - t),
          o = e + 0.5 * (n - e),
          u = i + 0.5 * (r - i),
          c = s + 0.5 * (n - s),
          l = Math.min(t, i, a, u),
          f = Math.max(t, i, a, u),
          d = Math.min(e, s, o, c),
          p = Math.max(e, s, o, c);
        return new h(l, d, f - l, p - d);
      },
      k = function (t, e, r, n, i, s, a, o) {
        var u,
          c,
          l,
          f,
          d,
          p,
          g,
          v,
          m,
          y,
          b,
          w,
          x,
          S,
          A = r - t,
          E = n - e,
          F = i - r,
          N = s - n,
          P = a - i,
          I = o - s;
        for (c = 0; c < 41; c++)
          ((m =
            (g = (l = t + (u = c / 40) * A) + u * ((d = r + u * F) - l)) +
            u * (d + u * (i + u * P - d) - g)),
            (y =
              (v = (f = e + u * E) + u * ((p = n + u * N) - f)) +
              u * (p + u * (s + u * I - p) - v)),
            0 == c
              ? ((b = m), (w = y), (x = m), (S = y))
              : ((b = Math.min(b, m)),
                (w = Math.min(w, y)),
                (x = Math.max(x, m)),
                (S = Math.max(S, y))));
        return new h(
          Math.round(b),
          Math.round(w),
          Math.round(x - b),
          Math.round(S - w),
        );
      },
      O = function () {
        if (
          this.prevLineDash ||
          this.ctx.lineDash.length ||
          this.ctx.lineDashOffset
        ) {
          var t,
            e,
            r =
              ((t = this.ctx.lineDash),
              (e = this.ctx.lineDashOffset),
              JSON.stringify({ lineDash: t, lineDashOffset: e }));
          this.prevLineDash !== r &&
            (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset),
            (this.prevLineDash = r));
        }
      };
  })(Ct.API),
    /**
     * @license
     * jsPDF filters PlugIn
     * Copyright (c) 2014 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = function (t) {
          var e, r, n, i, s, a, o, h, u, c;
          for (
            /[^\x00-\xFF]/.test(t),
              r = [],
              n = 0,
              i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length;
            i > n;
            n += 4
          )
            0 !==
            (s =
              (t.charCodeAt(n) << 24) +
              (t.charCodeAt(n + 1) << 16) +
              (t.charCodeAt(n + 2) << 8) +
              t.charCodeAt(n + 3))
              ? ((a =
                  (s =
                    ((s =
                      ((s =
                        ((s = (s - (c = s % 85)) / 85) - (u = s % 85)) / 85) -
                        (h = s % 85)) /
                      85) -
                      (o = s % 85)) /
                    85) % 85),
                r.push(a + 33, o + 33, h + 33, u + 33, c + 33))
              : r.push(122);
          return (
            (function (t, e) {
              for (var r = e; r > 0; r--) t.pop();
            })(r, e.length),
            String.fromCharCode.apply(String, r) + "~>"
          );
        },
        r = function (t) {
          var e,
            r,
            n,
            i,
            s,
            a = String,
            o = "length",
            h = 255,
            u = "charCodeAt",
            c = "slice",
            l = "replace";
          for (
            t[c](-2),
              t = t[c](0, -2)[l](/\s/g, "")[l]("z", "!!!!!"),
              n = [],
              i = 0,
              s = (t += e = "uuuuu"[c](t[o] % 5 || 5))[o];
            s > i;
            i += 5
          )
            ((r =
              52200625 * (t[u](i) - 33) +
              614125 * (t[u](i + 1) - 33) +
              7225 * (t[u](i + 2) - 33) +
              85 * (t[u](i + 3) - 33) +
              (t[u](i + 4) - 33)),
              n.push(h & (r >> 24), h & (r >> 16), h & (r >> 8), h & r));
          return (
            (function (t, e) {
              for (var r = e; r > 0; r--) t.pop();
            })(n, e[o]),
            a.fromCharCode.apply(a, n)
          );
        },
        n = function (t) {
          var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
          if (
            (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") &&
              (t = t.substr(0, t.indexOf(">"))),
            t.length % 2 && (t += "0"),
            !1 === e.test(t))
          )
            return "";
          for (var r = "", n = 0; n < t.length; n += 2)
            r += String.fromCharCode("0x" + (t[n] + t[n + 1]));
          return r;
        },
        i = function (t) {
          for (var e = new Uint8Array(t.length), r = t.length; r--; )
            e[r] = t.charCodeAt(r);
          return (e = X(e)).reduce(function (t, e) {
            return t + String.fromCharCode(e);
          }, "");
        };
      t.processDataByFilters = function (t, s) {
        var a = 0,
          o = t || "",
          h = [];
        for (
          "string" == typeof (s = s || []) && (s = [s]), a = 0;
          a < s.length;
          a += 1
        )
          switch (s[a]) {
            case "ASCII85Decode":
            case "/ASCII85Decode":
              ((o = r(o)), h.push("/ASCII85Encode"));
              break;
            case "ASCII85Encode":
            case "/ASCII85Encode":
              ((o = e(o)), h.push("/ASCII85Decode"));
              break;
            case "ASCIIHexDecode":
            case "/ASCIIHexDecode":
              ((o = n(o)), h.push("/ASCIIHexEncode"));
              break;
            case "ASCIIHexEncode":
            case "/ASCIIHexEncode":
              ((o =
                o
                  .split("")
                  .map(function (t) {
                    return ("0" + t.charCodeAt().toString(16)).slice(-2);
                  })
                  .join("") + ">"),
                h.push("/ASCIIHexDecode"));
              break;
            case "FlateEncode":
            case "/FlateEncode":
              ((o = i(o)), h.push("/FlateDecode"));
              break;
            default:
              throw new Error('The filter: "' + s[a] + '" is not implemented');
          }
        return { data: o, reverseChain: h.reverse().join(" ") };
      };
    })(Ct.API),
    /**
     * @license
     * jsPDF fileloading PlugIn
     * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      ((t.loadFile = function (t, e, r) {
        return (function (t, e, r) {
          ((e = !1 !== e), (r = "function" == typeof r ? r : function () {}));
          var n = void 0;
          try {
            n = (function (t, e, r) {
              var n = new XMLHttpRequest(),
                i = 0,
                s = function (t) {
                  var e = t.length,
                    r = [],
                    n = String.fromCharCode;
                  for (i = 0; i < e; i += 1) r.push(n(255 & t.charCodeAt(i)));
                  return r.join("");
                };
              if (
                (n.open("GET", t, !e),
                n.overrideMimeType("text/plain; charset=x-user-defined"),
                !1 === e &&
                  (n.onload = function () {
                    200 === n.status ? r(s(this.responseText)) : r(void 0);
                  }),
                n.send(null),
                e && 200 === n.status)
              )
                return s(n.responseText);
            })(t, e, r);
          } catch (t) {}
          return n;
        })(t, e, r);
      }),
        (t.loadImageFile = t.loadFile));
    })(Ct.API),
    (function (t) {
      function e() {
        return (
          $.html2canvas
            ? Promise.resolve($.html2canvas)
            : Promise.all([
                r.e(9823),
                r.e(5099),
                r.e(2704),
                r.e(3166),
                r.e(910),
                r.e(5200),
                r.e(8953),
                r.e(9613),
                r.e(6306),
                r.e(2171),
                r.e(4236),
                r.e(3697),
                r.e(4383),
                r.e(3115),
                r.e(3986),
                r.e(3543),
                r.e(6390),
                r.e(63),
                r.e(4577),
                r.e(6400),
                r.e(7476),
                r.e(9161),
                r.e(3426),
                r.e(3073),
                r.e(602),
                r.e(1922),
                r.e(8353),
                r.e(1893),
                r.e(1587),
                r.e(1611),
                r.e(5604),
                r.e(5738),
                r.e(2826),
              ]).then(r.t.bind(r, 55101, 23))
        )
          .catch(function (t) {
            return Promise.reject(
              new Error("Could not load html2canvas: " + t),
            );
          })
          .then(function (t) {
            return t.default ? t.default : t;
          });
      }
      function i() {
        return (
          $.DOMPurify
            ? Promise.resolve($.DOMPurify)
            : Promise.all([
                r.e(9823),
                r.e(5099),
                r.e(2704),
                r.e(3166),
                r.e(910),
                r.e(5200),
                r.e(8953),
                r.e(9613),
                r.e(6306),
                r.e(2171),
                r.e(4236),
                r.e(3697),
                r.e(4383),
                r.e(3115),
                r.e(3986),
                r.e(3543),
                r.e(6390),
                r.e(63),
                r.e(4577),
                r.e(6400),
                r.e(7476),
                r.e(9161),
                r.e(3426),
                r.e(3073),
                r.e(602),
                r.e(1922),
                r.e(8353),
                r.e(1893),
                r.e(1587),
                r.e(1611),
                r.e(5604),
                r.e(5738),
                r.e(2826),
              ]).then(r.t.bind(r, 31199, 23))
        )
          .catch(function (t) {
            return Promise.reject(new Error("Could not load dompurify: " + t));
          })
          .then(function (t) {
            return t.default ? t.default : t;
          });
      }
      var s = function (t) {
          var e = (0, n.Z)(t);
          return "undefined" === e
            ? "undefined"
            : "string" === e || t instanceof String
              ? "string"
              : "number" === e || t instanceof Number
                ? "number"
                : "function" === e || t instanceof Function
                  ? "function"
                  : t && t.constructor === Array
                    ? "array"
                    : t && 1 === t.nodeType
                      ? "element"
                      : "object" === e
                        ? "object"
                        : "unknown";
        },
        a = function (t, e) {
          var r = document.createElement(t);
          for (var n in (e.className && (r.className = e.className),
          e.innerHTML &&
            e.dompurify &&
            (r.innerHTML = e.dompurify.sanitize(e.innerHTML)),
          e.style))
            r.style[n] = e.style[n];
          return r;
        },
        o = function t(e) {
          var r = Object.assign(
              t.convert(Promise.resolve()),
              JSON.parse(JSON.stringify(t.template)),
            ),
            n = t.convert(Promise.resolve(), r);
          return (n = n.setProgress(1, t, 1, [t])).set(e);
        };
      (((o.prototype = Object.create(Promise.prototype)).constructor = o),
        (o.convert = function (t, e) {
          return ((t.__proto__ = e || o.prototype), t);
        }),
        (o.template = {
          prop: {
            src: null,
            container: null,
            overlay: null,
            canvas: null,
            img: null,
            pdf: null,
            pageSize: null,
            callback: function () {},
          },
          progress: { val: 0, state: null, n: 0, stack: [] },
          opt: {
            filename: "file.pdf",
            margin: [0, 0, 0, 0],
            enableLinks: !0,
            x: 0,
            y: 0,
            html2canvas: {},
            jsPDF: {},
            backgroundColor: "transparent",
          },
        }),
        (o.prototype.from = function (t, e) {
          return this.then(function () {
            switch (
              (e =
                e ||
                (function (t) {
                  switch (s(t)) {
                    case "string":
                      return "string";
                    case "element":
                      return "canvas" === t.nodeName.toLowerCase()
                        ? "canvas"
                        : "element";
                    default:
                      return "unknown";
                  }
                })(t))
            ) {
              case "string":
                return this.then(i).then(function (e) {
                  return this.set({
                    src: a("div", { innerHTML: t, dompurify: e }),
                  });
                });
              case "element":
                return this.set({ src: t });
              case "canvas":
                return this.set({ canvas: t });
              case "img":
                return this.set({ img: t });
              default:
                return this.error("Unknown source type.");
            }
          });
        }),
        (o.prototype.to = function (t) {
          switch (t) {
            case "container":
              return this.toContainer();
            case "canvas":
              return this.toCanvas();
            case "img":
              return this.toImg();
            case "pdf":
              return this.toPdf();
            default:
              return this.error("Invalid target.");
          }
        }),
        (o.prototype.toContainer = function () {
          return this.thenList([
            function () {
              return (
                this.prop.src ||
                this.error("Cannot duplicate - no source HTML.")
              );
            },
            function () {
              return this.prop.pageSize || this.setPageSize();
            },
          ]).then(function () {
            var t = {
                position: "relative",
                display: "inline-block",
                width:
                  ("number" != typeof this.opt.width ||
                  isNaN(this.opt.width) ||
                  "number" != typeof this.opt.windowWidth ||
                  isNaN(this.opt.windowWidth)
                    ? Math.max(
                        this.prop.src.clientWidth,
                        this.prop.src.scrollWidth,
                        this.prop.src.offsetWidth,
                      )
                    : this.opt.windowWidth) + "px",
                left: 0,
                right: 0,
                top: 0,
                margin: "auto",
                backgroundColor: this.opt.backgroundColor,
              },
              e = (function t(e, r) {
                for (
                  var n =
                      3 === e.nodeType
                        ? document.createTextNode(e.nodeValue)
                        : e.cloneNode(!1),
                    i = e.firstChild;
                  i;
                  i = i.nextSibling
                )
                  (!0 !== r && 1 === i.nodeType && "SCRIPT" === i.nodeName) ||
                    n.appendChild(t(i, r));
                return (
                  1 === e.nodeType &&
                    ("CANVAS" === e.nodeName
                      ? ((n.width = e.width),
                        (n.height = e.height),
                        n.getContext("2d").drawImage(e, 0, 0))
                      : ("TEXTAREA" !== e.nodeName &&
                          "SELECT" !== e.nodeName) ||
                        (n.value = e.value),
                    n.addEventListener(
                      "load",
                      function () {
                        ((n.scrollTop = e.scrollTop),
                          (n.scrollLeft = e.scrollLeft));
                      },
                      !0,
                    )),
                  n
                );
              })(this.prop.src, this.opt.html2canvas.javascriptEnabled);
            ("BODY" === e.tagName &&
              (t.height =
                Math.max(
                  document.body.scrollHeight,
                  document.body.offsetHeight,
                  document.documentElement.clientHeight,
                  document.documentElement.scrollHeight,
                  document.documentElement.offsetHeight,
                ) + "px"),
              (this.prop.overlay = a("div", {
                className: "html2pdf__overlay",
                style: {
                  position: "fixed",
                  overflow: "hidden",
                  zIndex: 1e3,
                  left: "-100000px",
                  right: 0,
                  bottom: 0,
                  top: 0,
                },
              })),
              (this.prop.container = a("div", {
                className: "html2pdf__container",
                style: t,
              })),
              this.prop.container.appendChild(e),
              this.prop.container.firstChild.appendChild(
                a("div", {
                  style: {
                    clear: "both",
                    border: "0 none transparent",
                    margin: 0,
                    padding: 0,
                    height: 0,
                  },
                }),
              ),
              (this.prop.container.style.float = "none"),
              this.prop.overlay.appendChild(this.prop.container),
              document.body.appendChild(this.prop.overlay),
              (this.prop.container.firstChild.style.position = "relative"),
              (this.prop.container.height =
                Math.max(
                  this.prop.container.firstChild.clientHeight,
                  this.prop.container.firstChild.scrollHeight,
                  this.prop.container.firstChild.offsetHeight,
                ) + "px"));
          });
        }),
        (o.prototype.toCanvas = function () {
          var t = [
            function () {
              return (
                document.body.contains(this.prop.container) ||
                this.toContainer()
              );
            },
          ];
          return this.thenList(t)
            .then(e)
            .then(function (t) {
              var e = Object.assign({}, this.opt.html2canvas);
              return (delete e.onrendered, t(this.prop.container, e));
            })
            .then(function (t) {
              ((this.opt.html2canvas.onrendered || function () {})(t),
                (this.prop.canvas = t),
                document.body.removeChild(this.prop.overlay));
            });
        }),
        (o.prototype.toContext2d = function () {
          var t = [
            function () {
              return (
                document.body.contains(this.prop.container) ||
                this.toContainer()
              );
            },
          ];
          return this.thenList(t)
            .then(e)
            .then(function (t) {
              var e = this.opt.jsPDF,
                r = this.opt.fontFaces,
                n =
                  "number" != typeof this.opt.width ||
                  isNaN(this.opt.width) ||
                  "number" != typeof this.opt.windowWidth ||
                  isNaN(this.opt.windowWidth)
                    ? 1
                    : this.opt.width / this.opt.windowWidth,
                i = Object.assign(
                  {
                    async: !0,
                    allowTaint: !0,
                    scale: n,
                    scrollX: this.opt.scrollX || 0,
                    scrollY: this.opt.scrollY || 0,
                    backgroundColor: "#ffffff",
                    imageTimeout: 15e3,
                    logging: !0,
                    proxy: null,
                    removeContainer: !0,
                    foreignObjectRendering: !1,
                    useCORS: !1,
                  },
                  this.opt.html2canvas,
                );
              if (
                (delete i.onrendered,
                (e.context2d.autoPaging =
                  void 0 === this.opt.autoPaging || this.opt.autoPaging),
                (e.context2d.posX = this.opt.x),
                (e.context2d.posY = this.opt.y),
                (e.context2d.margin = this.opt.margin),
                (e.context2d.fontFaces = r),
                r)
              )
                for (var s = 0; s < r.length; ++s) {
                  var a = r[s],
                    o = a.src.find(function (t) {
                      return "truetype" === t.format;
                    });
                  o && e.addFont(o.url, a.ref.name, a.ref.style);
                }
              return (
                (i.windowHeight = i.windowHeight || 0),
                (i.windowHeight =
                  0 == i.windowHeight
                    ? Math.max(
                        this.prop.container.clientHeight,
                        this.prop.container.scrollHeight,
                        this.prop.container.offsetHeight,
                      )
                    : i.windowHeight),
                e.context2d.save(!0),
                t(this.prop.container, i)
              );
            })
            .then(function (t) {
              (this.opt.jsPDF.context2d.restore(!0),
                (this.opt.html2canvas.onrendered || function () {})(t),
                (this.prop.canvas = t),
                document.body.removeChild(this.prop.overlay));
            });
        }),
        (o.prototype.toImg = function () {
          return this.thenList([
            function () {
              return this.prop.canvas || this.toCanvas();
            },
          ]).then(function () {
            var t = this.prop.canvas.toDataURL(
              "image/" + this.opt.image.type,
              this.opt.image.quality,
            );
            ((this.prop.img = document.createElement("img")),
              (this.prop.img.src = t));
          });
        }),
        (o.prototype.toPdf = function () {
          return this.thenList([
            function () {
              return this.toContext2d();
            },
          ]).then(function () {
            this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
          });
        }),
        (o.prototype.output = function (t, e, r) {
          return "img" === (r = r || "pdf").toLowerCase() ||
            "image" === r.toLowerCase()
            ? this.outputImg(t, e)
            : this.outputPdf(t, e);
        }),
        (o.prototype.outputPdf = function (t, e) {
          return this.thenList([
            function () {
              return this.prop.pdf || this.toPdf();
            },
          ]).then(function () {
            return this.prop.pdf.output(t, e);
          });
        }),
        (o.prototype.outputImg = function (t) {
          return this.thenList([
            function () {
              return this.prop.img || this.toImg();
            },
          ]).then(function () {
            switch (t) {
              case void 0:
              case "img":
                return this.prop.img;
              case "datauristring":
              case "dataurlstring":
                return this.prop.img.src;
              case "datauri":
              case "dataurl":
                return (document.location.href = this.prop.img.src);
              default:
                throw 'Image output type "' + t + '" is not supported.';
            }
          });
        }),
        (o.prototype.save = function (t) {
          return this.thenList([
            function () {
              return this.prop.pdf || this.toPdf();
            },
          ])
            .set(t ? { filename: t } : null)
            .then(function () {
              this.prop.pdf.save(this.opt.filename);
            });
        }),
        (o.prototype.doCallback = function () {
          return this.thenList([
            function () {
              return this.prop.pdf || this.toPdf();
            },
          ]).then(function () {
            this.prop.callback(this.prop.pdf);
          });
        }),
        (o.prototype.set = function (t) {
          if ("object" !== s(t)) return this;
          var e = Object.keys(t || {}).map(function (e) {
            if (e in o.template.prop)
              return function () {
                this.prop[e] = t[e];
              };
            switch (e) {
              case "margin":
                return this.setMargin.bind(this, t.margin);
              case "jsPDF":
                return function () {
                  return ((this.opt.jsPDF = t.jsPDF), this.setPageSize());
                };
              case "pageSize":
                return this.setPageSize.bind(this, t.pageSize);
              default:
                return function () {
                  this.opt[e] = t[e];
                };
            }
          }, this);
          return this.then(function () {
            return this.thenList(e);
          });
        }),
        (o.prototype.get = function (t, e) {
          return this.then(function () {
            var r = t in o.template.prop ? this.prop[t] : this.opt[t];
            return e ? e(r) : r;
          });
        }),
        (o.prototype.setMargin = function (t) {
          return this.then(function () {
            switch (s(t)) {
              case "number":
                t = [t, t, t, t];
              case "array":
                if (
                  (2 === t.length && (t = [t[0], t[1], t[0], t[1]]),
                  4 === t.length)
                )
                  break;
              default:
                return this.error("Invalid margin array.");
            }
            this.opt.margin = t;
          }).then(this.setPageSize);
        }),
        (o.prototype.setPageSize = function (t) {
          function e(t, e) {
            return Math.floor(((t * e) / 72) * 96);
          }
          return this.then(function () {
            ((t = t || Ct.getPageSize(this.opt.jsPDF)).hasOwnProperty(
              "inner",
            ) ||
              ((t.inner = {
                width: t.width - this.opt.margin[1] - this.opt.margin[3],
                height: t.height - this.opt.margin[0] - this.opt.margin[2],
              }),
              (t.inner.px = {
                width: e(t.inner.width, t.k),
                height: e(t.inner.height, t.k),
              }),
              (t.inner.ratio = t.inner.height / t.inner.width)),
              (this.prop.pageSize = t));
          });
        }),
        (o.prototype.setProgress = function (t, e, r, n) {
          return (
            null != t && (this.progress.val = t),
            null != e && (this.progress.state = e),
            null != r && (this.progress.n = r),
            null != n && (this.progress.stack = n),
            (this.progress.ratio = this.progress.val / this.progress.state),
            this
          );
        }),
        (o.prototype.updateProgress = function (t, e, r, n) {
          return this.setProgress(
            t ? this.progress.val + t : null,
            e || null,
            r ? this.progress.n + r : null,
            n ? this.progress.stack.concat(n) : null,
          );
        }),
        (o.prototype.then = function (t, e) {
          var r = this;
          return this.thenCore(t, e, function (t, e) {
            return (
              r.updateProgress(null, null, 1, [t]),
              Promise.prototype.then
                .call(this, function (e) {
                  return (r.updateProgress(null, t), e);
                })
                .then(t, e)
                .then(function (t) {
                  return (r.updateProgress(1), t);
                })
            );
          });
        }),
        (o.prototype.thenCore = function (t, e, r) {
          ((r = r || Promise.prototype.then),
            t && (t = t.bind(this)),
            e && (e = e.bind(this)));
          var n =
              -1 !== Promise.toString().indexOf("[native code]") &&
              "Promise" === Promise.name
                ? this
                : o.convert(Object.assign({}, this), Promise.prototype),
            i = r.call(n, t, e);
          return o.convert(i, this.__proto__);
        }),
        (o.prototype.thenExternal = function (t, e) {
          return Promise.prototype.then.call(this, t, e);
        }),
        (o.prototype.thenList = function (t) {
          var e = this;
          return (
            t.forEach(function (t) {
              e = e.thenCore(t);
            }),
            e
          );
        }),
        (o.prototype.catch = function (t) {
          t && (t = t.bind(this));
          var e = Promise.prototype.catch.call(this, t);
          return o.convert(e, this);
        }),
        (o.prototype.catchExternal = function (t) {
          return Promise.prototype.catch.call(this, t);
        }),
        (o.prototype.error = function (t) {
          return this.then(function () {
            throw new Error(t);
          });
        }),
        (o.prototype.using = o.prototype.set),
        (o.prototype.saveAs = o.prototype.save),
        (o.prototype.export = o.prototype.output),
        (o.prototype.run = o.prototype.then),
        (Ct.getPageSize = function (t, e, r) {
          if ("object" === (0, n.Z)(t)) {
            var i = t;
            ((t = i.orientation), (e = i.unit || e), (r = i.format || r));
          }
          ((e = e || "mm"),
            (r = r || "a4"),
            (t = ("" + (t || "P")).toLowerCase()));
          var s,
            a = ("" + r).toLowerCase(),
            o = {
              a0: [2383.94, 3370.39],
              a1: [1683.78, 2383.94],
              a2: [1190.55, 1683.78],
              a3: [841.89, 1190.55],
              a4: [595.28, 841.89],
              a5: [419.53, 595.28],
              a6: [297.64, 419.53],
              a7: [209.76, 297.64],
              a8: [147.4, 209.76],
              a9: [104.88, 147.4],
              a10: [73.7, 104.88],
              b0: [2834.65, 4008.19],
              b1: [2004.09, 2834.65],
              b2: [1417.32, 2004.09],
              b3: [1000.63, 1417.32],
              b4: [708.66, 1000.63],
              b5: [498.9, 708.66],
              b6: [354.33, 498.9],
              b7: [249.45, 354.33],
              b8: [175.75, 249.45],
              b9: [124.72, 175.75],
              b10: [87.87, 124.72],
              c0: [2599.37, 3676.54],
              c1: [1836.85, 2599.37],
              c2: [1298.27, 1836.85],
              c3: [918.43, 1298.27],
              c4: [649.13, 918.43],
              c5: [459.21, 649.13],
              c6: [323.15, 459.21],
              c7: [229.61, 323.15],
              c8: [161.57, 229.61],
              c9: [113.39, 161.57],
              c10: [79.37, 113.39],
              dl: [311.81, 623.62],
              letter: [612, 792],
              "government-letter": [576, 756],
              legal: [612, 1008],
              "junior-legal": [576, 360],
              ledger: [1224, 792],
              tabloid: [792, 1224],
              "credit-card": [153, 243],
            };
          switch (e) {
            case "pt":
              s = 1;
              break;
            case "mm":
              s = 72 / 25.4;
              break;
            case "cm":
              s = 72 / 2.54;
              break;
            case "in":
              s = 72;
              break;
            case "px":
              s = 0.75;
              break;
            case "pc":
            case "em":
              s = 12;
              break;
            case "ex":
              s = 6;
              break;
            default:
              throw "Invalid unit: " + e;
          }
          var h,
            u = 0,
            c = 0;
          if (o.hasOwnProperty(a)) ((u = o[a][1] / s), (c = o[a][0] / s));
          else
            try {
              ((u = r[1]), (c = r[0]));
            } catch (l) {
              throw new Error("Invalid format: " + r);
            }
          if ("p" === t || "portrait" === t)
            ((t = "p"), c > u && ((h = c), (c = u), (u = h)));
          else {
            if ("l" !== t && "landscape" !== t)
              throw "Invalid orientation: " + t;
            ((t = "l"), u > c && ((h = c), (c = u), (u = h)));
          }
          return { width: c, height: u, unit: e, k: s, orientation: t };
        }),
        (t.html = function (t, e) {
          (((e = e || {}).callback = e.callback || function () {}),
            (e.html2canvas = e.html2canvas || {}),
            (e.html2canvas.canvas = e.html2canvas.canvas || this.canvas),
            (e.jsPDF = e.jsPDF || this),
            (e.fontFaces = e.fontFaces ? e.fontFaces.map(Fe) : null));
          var r = new o(e);
          return e.worker ? r : r.from(t).doCallback();
        }));
    })(Ct.API),
    (Ct.API.addJS = function (t) {
      return (
        (je = t),
        this.internal.events.subscribe("postPutResources", function () {
          ((Be = this.internal.newObject()),
            this.internal.out("<<"),
            this.internal.out("/Names [(EmbeddedJS) " + (Be + 1) + " 0 R]"),
            this.internal.out(">>"),
            this.internal.out("endobj"),
            (Te = this.internal.newObject()),
            this.internal.out("<<"),
            this.internal.out("/S /JavaScript"),
            this.internal.out("/JS (" + je + ")"),
            this.internal.out(">>"),
            this.internal.out("endobj"));
        }),
        this.internal.events.subscribe("putCatalog", function () {
          void 0 !== Be &&
            void 0 !== Te &&
            this.internal.out("/Names <</JavaScript " + Be + " 0 R>>");
        }),
        this
      );
    }),
    /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e;
      (t.events.push([
        "postPutResources",
        function () {
          var t = this,
            r = /^(\d+) 0 obj$/;
          if (this.outline.root.children.length > 0)
            for (
              var n = t.outline.render().split(/\r\n/), i = 0;
              i < n.length;
              i++
            ) {
              var s = n[i],
                a = r.exec(s);
              if (null != a) {
                var o = a[1];
                t.internal.newObjectDeferredBegin(o, !1);
              }
              t.internal.write(s);
            }
          if (this.outline.createNamedDestinations) {
            var h = this.internal.pages.length,
              u = [];
            for (i = 0; i < h; i++) {
              var c = t.internal.newObject();
              u.push(c);
              var l = t.internal.getPageInfo(i + 1);
              t.internal.write(
                "<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj",
              );
            }
            var f = t.internal.newObject();
            for (t.internal.write("<< /Names [ "), i = 0; i < u.length; i++)
              t.internal.write("(page_" + (i + 1) + ")" + u[i] + " 0 R");
            (t.internal.write(" ] >>", "endobj"),
              (e = t.internal.newObject()),
              t.internal.write("<< /Dests " + f + " 0 R"),
              t.internal.write(">>", "endobj"));
          }
        },
      ]),
        t.events.push([
          "putCatalog",
          function () {
            this.outline.root.children.length > 0 &&
              (this.internal.write(
                "/Outlines",
                this.outline.makeRef(this.outline.root),
              ),
              this.outline.createNamedDestinations &&
                this.internal.write("/Names " + e + " 0 R"));
          },
        ]),
        t.events.push([
          "initialized",
          function () {
            var t = this;
            ((t.outline = {
              createNamedDestinations: !1,
              root: { children: [] },
            }),
              (t.outline.add = function (t, e, r) {
                var n = { title: e, options: r, children: [] };
                return (null == t && (t = this.root), t.children.push(n), n);
              }),
              (t.outline.render = function () {
                return (
                  (this.ctx = {}),
                  (this.ctx.val = ""),
                  (this.ctx.pdf = t),
                  this.genIds_r(this.root),
                  this.renderRoot(this.root),
                  this.renderItems(this.root),
                  this.ctx.val
                );
              }),
              (t.outline.genIds_r = function (e) {
                e.id = t.internal.newObjectDeferred();
                for (var r = 0; r < e.children.length; r++)
                  this.genIds_r(e.children[r]);
              }),
              (t.outline.renderRoot = function (t) {
                (this.objStart(t),
                  this.line("/Type /Outlines"),
                  t.children.length > 0 &&
                    (this.line("/First " + this.makeRef(t.children[0])),
                    this.line(
                      "/Last " +
                        this.makeRef(t.children[t.children.length - 1]),
                    )),
                  this.line("/Count " + this.count_r({ count: 0 }, t)),
                  this.objEnd());
              }),
              (t.outline.renderItems = function (e) {
                for (
                  var r = this.ctx.pdf.internal.getVerticalCoordinateString,
                    n = 0;
                  n < e.children.length;
                  n++
                ) {
                  var i = e.children[n];
                  (this.objStart(i),
                    this.line("/Title " + this.makeString(i.title)),
                    this.line("/Parent " + this.makeRef(e)),
                    n > 0 &&
                      this.line("/Prev " + this.makeRef(e.children[n - 1])),
                    n < e.children.length - 1 &&
                      this.line("/Next " + this.makeRef(e.children[n + 1])),
                    i.children.length > 0 &&
                      (this.line("/First " + this.makeRef(i.children[0])),
                      this.line(
                        "/Last " +
                          this.makeRef(i.children[i.children.length - 1]),
                      )));
                  var s = (this.count = this.count_r({ count: 0 }, i));
                  if (
                    (s > 0 && this.line("/Count " + s),
                    i.options && i.options.pageNumber)
                  ) {
                    var a = t.internal.getPageInfo(i.options.pageNumber);
                    this.line(
                      "/Dest [" + a.objId + " 0 R /XYZ 0 " + r(0) + " 0]",
                    );
                  }
                  this.objEnd();
                }
                for (var o = 0; o < e.children.length; o++)
                  this.renderItems(e.children[o]);
              }),
              (t.outline.line = function (t) {
                this.ctx.val += t + "\r\n";
              }),
              (t.outline.makeRef = function (t) {
                return t.id + " 0 R";
              }),
              (t.outline.makeString = function (e) {
                return "(" + t.internal.pdfEscape(e) + ")";
              }),
              (t.outline.objStart = function (t) {
                this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
              }),
              (t.outline.objEnd = function () {
                this.ctx.val += ">> \r\nendobj\r\n";
              }),
              (t.outline.count_r = function (t, e) {
                for (var r = 0; r < e.children.length; r++)
                  (t.count++, this.count_r(t, e.children[r]));
                return t.count;
              }));
          },
        ]));
    })(Ct.API),
    /**
     * @license
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = [192, 193, 194, 195, 196, 197, 198, 199];
      t.processJPEG = function (t, r, n, i, s, a) {
        var o,
          h = this.decode.DCT_DECODE,
          u = null;
        if (
          "string" == typeof t ||
          this.__addimage__.isArrayBuffer(t) ||
          this.__addimage__.isArrayBufferView(t)
        ) {
          switch (
            ((t = s || t),
            (t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t),
            (o = (function (t) {
              for (
                var r,
                  n = 256 * t.charCodeAt(4) + t.charCodeAt(5),
                  i = t.length,
                  s = { width: 0, height: 0, numcomponents: 1 },
                  a = 4;
                a < i;
                a += 2
              ) {
                if (((a += n), -1 !== e.indexOf(t.charCodeAt(a + 1)))) {
                  ((r = 256 * t.charCodeAt(a + 5) + t.charCodeAt(a + 6)),
                    (s = {
                      width: 256 * t.charCodeAt(a + 7) + t.charCodeAt(a + 8),
                      height: r,
                      numcomponents: t.charCodeAt(a + 9),
                    }));
                  break;
                }
                n = 256 * t.charCodeAt(a + 2) + t.charCodeAt(a + 3);
              }
              return s;
            })(
              (t = this.__addimage__.isArrayBufferView(t)
                ? this.__addimage__.arrayBufferToBinaryString(t)
                : t),
            )).numcomponents)
          ) {
            case 1:
              a = this.color_spaces.DEVICE_GRAY;
              break;
            case 4:
              a = this.color_spaces.DEVICE_CMYK;
              break;
            case 3:
              a = this.color_spaces.DEVICE_RGB;
          }
          u = {
            data: t,
            width: o.width,
            height: o.height,
            colorSpace: a,
            bitsPerComponent: 8,
            filter: h,
            index: r,
            alias: n,
          };
        }
        return u;
      };
    })(Ct.API));
  var Oe,
    Me,
    qe,
    He,
    Ve,
    Ue = (function () {
      var t, e, r;
      function n(t) {
        var e, r, n, i, s, a, o, h, u, c, l, f, d, p;
        for (
          this.data = t,
            this.pos = 8,
            this.palette = [],
            this.imgData = [],
            this.transparency = {},
            this.animation = null,
            this.text = {},
            a = null;
          ;
        ) {
          switch (
            ((e = this.readUInt32()),
            (u = function () {
              var t, e;
              for (e = [], t = 0; t < 4; ++t)
                e.push(String.fromCharCode(this.data[this.pos++]));
              return e;
            }
              .call(this)
              .join("")))
          ) {
            case "IHDR":
              ((this.width = this.readUInt32()),
                (this.height = this.readUInt32()),
                (this.bits = this.data[this.pos++]),
                (this.colorType = this.data[this.pos++]),
                (this.compressionMethod = this.data[this.pos++]),
                (this.filterMethod = this.data[this.pos++]),
                (this.interlaceMethod = this.data[this.pos++]));
              break;
            case "acTL":
              this.animation = {
                numFrames: this.readUInt32(),
                numPlays: this.readUInt32() || 1 / 0,
                frames: [],
              };
              break;
            case "PLTE":
              this.palette = this.read(e);
              break;
            case "fcTL":
              (a && this.animation.frames.push(a),
                (this.pos += 4),
                (a = {
                  width: this.readUInt32(),
                  height: this.readUInt32(),
                  xOffset: this.readUInt32(),
                  yOffset: this.readUInt32(),
                }),
                (s = this.readUInt16()),
                (i = this.readUInt16() || 100),
                (a.delay = (1e3 * s) / i),
                (a.disposeOp = this.data[this.pos++]),
                (a.blendOp = this.data[this.pos++]),
                (a.data = []));
              break;
            case "IDAT":
            case "fdAT":
              for (
                "fdAT" === u && ((this.pos += 4), (e -= 4)),
                  t = (null != a ? a.data : void 0) || this.imgData,
                  f = 0;
                0 <= e ? f < e : f > e;
                0 <= e ? ++f : --f
              )
                t.push(this.data[this.pos++]);
              break;
            case "tRNS":
              switch (((this.transparency = {}), this.colorType)) {
                case 3:
                  if (
                    ((n = this.palette.length / 3),
                    (this.transparency.indexed = this.read(e)),
                    this.transparency.indexed.length > n)
                  )
                    throw new Error(
                      "More transparent colors than palette size",
                    );
                  if ((c = n - this.transparency.indexed.length) > 0)
                    for (d = 0; 0 <= c ? d < c : d > c; 0 <= c ? ++d : --d)
                      this.transparency.indexed.push(255);
                  break;
                case 0:
                  this.transparency.grayscale = this.read(e)[0];
                  break;
                case 2:
                  this.transparency.rgb = this.read(e);
              }
              break;
            case "tEXt":
              ((o = (l = this.read(e)).indexOf(0)),
                (h = String.fromCharCode.apply(String, l.slice(0, o))),
                (this.text[h] = String.fromCharCode.apply(
                  String,
                  l.slice(o + 1),
                )));
              break;
            case "IEND":
              return (
                a && this.animation.frames.push(a),
                (this.colors = function () {
                  switch (this.colorType) {
                    case 0:
                    case 3:
                    case 4:
                      return 1;
                    case 2:
                    case 6:
                      return 3;
                  }
                }.call(this)),
                (this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p),
                (r = this.colors + (this.hasAlphaChannel ? 1 : 0)),
                (this.pixelBitlength = this.bits * r),
                (this.colorSpace = function () {
                  switch (this.colors) {
                    case 1:
                      return "DeviceGray";
                    case 3:
                      return "DeviceRGB";
                  }
                }.call(this)),
                void (this.imgData = new Uint8Array(this.imgData))
              );
            default:
              this.pos += e;
          }
          if (((this.pos += 4), this.pos > this.data.length))
            throw new Error("Incomplete or corrupt PNG file");
        }
      }
      ((n.prototype.read = function (t) {
        var e, r;
        for (r = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)
          r.push(this.data[this.pos++]);
        return r;
      }),
        (n.prototype.readUInt32 = function () {
          return (
            (this.data[this.pos++] << 24) |
            (this.data[this.pos++] << 16) |
            (this.data[this.pos++] << 8) |
            this.data[this.pos++]
          );
        }),
        (n.prototype.readUInt16 = function () {
          return (this.data[this.pos++] << 8) | this.data[this.pos++];
        }),
        (n.prototype.decodePixels = function (t) {
          var e = this.pixelBitlength / 8,
            r = new Uint8Array(this.width * this.height * e),
            n = 0,
            i = this;
          if ((null == t && (t = this.imgData), 0 === t.length))
            return new Uint8Array(0);
          function s(s, a, o, h) {
            var u,
              c,
              l,
              f,
              d,
              p,
              g,
              v,
              m,
              y,
              b,
              w,
              x,
              S,
              A,
              E,
              F,
              N,
              P,
              I,
              L,
              C = Math.ceil((i.width - s) / o),
              D = Math.ceil((i.height - a) / h),
              _ = i.width == C && i.height == D;
            for (
              S = e * C,
                w = _ ? r : new Uint8Array(S * D),
                p = t.length,
                x = 0,
                c = 0;
              x < D && n < p;
            ) {
              switch (t[n++]) {
                case 0:
                  for (f = F = 0; F < S; f = F += 1) w[c++] = t[n++];
                  break;
                case 1:
                  for (f = N = 0; N < S; f = N += 1)
                    ((u = t[n++]),
                      (d = f < e ? 0 : w[c - e]),
                      (w[c++] = (u + d) % 256));
                  break;
                case 2:
                  for (f = P = 0; P < S; f = P += 1)
                    ((u = t[n++]),
                      (l = (f - (f % e)) / e),
                      (A = x && w[(x - 1) * S + l * e + (f % e)]),
                      (w[c++] = (A + u) % 256));
                  break;
                case 3:
                  for (f = I = 0; I < S; f = I += 1)
                    ((u = t[n++]),
                      (l = (f - (f % e)) / e),
                      (d = f < e ? 0 : w[c - e]),
                      (A = x && w[(x - 1) * S + l * e + (f % e)]),
                      (w[c++] = (u + Math.floor((d + A) / 2)) % 256));
                  break;
                case 4:
                  for (f = L = 0; L < S; f = L += 1)
                    ((u = t[n++]),
                      (l = (f - (f % e)) / e),
                      (d = f < e ? 0 : w[c - e]),
                      0 === x
                        ? (A = E = 0)
                        : ((A = w[(x - 1) * S + l * e + (f % e)]),
                          (E = l && w[(x - 1) * S + (l - 1) * e + (f % e)])),
                      (g = d + A - E),
                      (v = Math.abs(g - d)),
                      (y = Math.abs(g - A)),
                      (b = Math.abs(g - E)),
                      (m = v <= y && v <= b ? d : y <= b ? A : E),
                      (w[c++] = (u + m) % 256));
                  break;
                default:
                  throw new Error("Invalid filter algorithm: " + t[n - 1]);
              }
              if (!_) {
                var R = ((a + x * h) * i.width + s) * e,
                  B = x * S;
                for (f = 0; f < C; f += 1) {
                  for (var T = 0; T < e; T += 1) r[R++] = w[B++];
                  R += (o - 1) * e;
                }
              }
              x++;
            }
          }
          return (
            (t = Y(t)),
            1 == i.interlaceMethod
              ? (s(0, 0, 8, 8),
                s(4, 0, 8, 8),
                s(0, 4, 4, 8),
                s(2, 0, 4, 4),
                s(0, 2, 2, 4),
                s(1, 0, 2, 2),
                s(0, 1, 1, 2))
              : s(0, 0, 1, 1),
            r
          );
        }),
        (n.prototype.decodePalette = function () {
          var t, e, r, n, i, s, a, o, h;
          for (
            r = this.palette,
              s = this.transparency.indexed || [],
              i = new Uint8Array((s.length || 0) + r.length),
              n = 0,
              t = 0,
              e = a = 0,
              o = r.length;
            a < o;
            e = a += 3
          )
            ((i[n++] = r[e]),
              (i[n++] = r[e + 1]),
              (i[n++] = r[e + 2]),
              (i[n++] = null != (h = s[t++]) ? h : 255));
          return i;
        }),
        (n.prototype.copyToImageData = function (t, e) {
          var r, n, i, s, a, o, h, u, c, l, f;
          if (
            ((n = this.colors),
            (c = null),
            (r = this.hasAlphaChannel),
            this.palette.length &&
              ((c =
                null != (f = this._decodedPalette)
                  ? f
                  : (this._decodedPalette = this.decodePalette())),
              (n = 4),
              (r = !0)),
            (u = (i = t.data || t).length),
            (a = c || e),
            (s = o = 0),
            1 === n)
          )
            for (; s < u; )
              ((h = c ? 4 * e[s / 4] : o),
                (l = a[h++]),
                (i[s++] = l),
                (i[s++] = l),
                (i[s++] = l),
                (i[s++] = r ? a[h++] : 255),
                (o = h));
          else
            for (; s < u; )
              ((h = c ? 4 * e[s / 4] : o),
                (i[s++] = a[h++]),
                (i[s++] = a[h++]),
                (i[s++] = a[h++]),
                (i[s++] = r ? a[h++] : 255),
                (o = h));
        }),
        (n.prototype.decode = function () {
          var t;
          return (
            (t = new Uint8Array(this.width * this.height * 4)),
            this.copyToImageData(t, this.decodePixels()),
            t
          );
        }));
      var i = function () {
        if ("[object Window]" === Object.prototype.toString.call($)) {
          try {
            ((e = $.document.createElement("canvas")),
              (r = e.getContext("2d")));
          } catch (t) {
            return !1;
          }
          return !0;
        }
        return !1;
      };
      return (
        i(),
        (t = function (t) {
          var n;
          if (!0 === i())
            return (
              (r.width = t.width),
              (r.height = t.height),
              r.clearRect(0, 0, t.width, t.height),
              r.putImageData(t, 0, 0),
              ((n = new Image()).src = e.toDataURL()),
              n
            );
          throw new Error(
            "This method requires a Browser with Canvas-capability.",
          );
        }),
        (n.prototype.decodeFrames = function (e) {
          var r, n, i, s, a, o, h, u;
          if (this.animation) {
            for (
              u = [], n = a = 0, o = (h = this.animation.frames).length;
              a < o;
              n = ++a
            )
              ((r = h[n]),
                (i = e.createImageData(r.width, r.height)),
                (s = this.decodePixels(new Uint8Array(r.data))),
                this.copyToImageData(i, s),
                (r.imageData = i),
                u.push((r.image = t(i))));
            return u;
          }
        }),
        (n.prototype.renderFrame = function (t, e) {
          var r, n, i;
          return (
            (r = (n = this.animation.frames)[e]),
            (i = n[e - 1]),
            0 === e && t.clearRect(0, 0, this.width, this.height),
            1 === (null != i ? i.disposeOp : void 0)
              ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height)
              : 2 === (null != i ? i.disposeOp : void 0) &&
                t.putImageData(i.imageData, i.xOffset, i.yOffset),
            0 === r.blendOp &&
              t.clearRect(r.xOffset, r.yOffset, r.width, r.height),
            t.drawImage(r.image, r.xOffset, r.yOffset)
          );
        }),
        (n.prototype.animate = function (t) {
          var e,
            r,
            n,
            i,
            s,
            a,
            o = this;
          return (
            (r = 0),
            (a = this.animation),
            (i = a.numFrames),
            (n = a.frames),
            (s = a.numPlays),
            (e = function () {
              var a, h;
              if (
                ((a = r++ % i),
                (h = n[a]),
                o.renderFrame(t, a),
                i > 1 && r / i < s)
              )
                return (o.animation._timeout = setTimeout(e, h.delay));
            })()
          );
        }),
        (n.prototype.stopAnimation = function () {
          var t;
          return clearTimeout(
            null != (t = this.animation) ? t._timeout : void 0,
          );
        }),
        (n.prototype.render = function (t) {
          var e, r;
          return (
            t._png && t._png.stopAnimation(),
            (t._png = this),
            (t.width = this.width),
            (t.height = this.height),
            (e = t.getContext("2d")),
            this.animation
              ? (this.decodeFrames(e), this.animate(e))
              : ((r = e.createImageData(this.width, this.height)),
                this.copyToImageData(r, this.decodePixels()),
                e.putImageData(r, 0, 0))
          );
        }),
        n
      );
    })();
  /**
   * @license
   *
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   * ====================================================================
   */
  /**
   * @license
   * (c) Dean McNamee <dean@gmail.com>, 2013.
   *
   * https://github.com/deanm/omggif
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to
   * deal in the Software without restriction, including without limitation the
   * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
   * sell copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
   * IN THE SOFTWARE.
   *
   * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
   * including animation and compression.  It does not rely on any specific
   * underlying system, so should run in the browser, Node, or Plask.
   */ function Ke(t) {
    var e = 0;
    if (
      71 !== t[e++] ||
      73 !== t[e++] ||
      70 !== t[e++] ||
      56 !== t[e++] ||
      56 != ((t[e++] + 1) & 253) ||
      97 !== t[e++]
    )
      throw new Error("Invalid GIF 87a/89a header.");
    var r = t[e++] | (t[e++] << 8),
      n = t[e++] | (t[e++] << 8),
      i = t[e++],
      s = i >> 7,
      a = 1 << (1 + (7 & i));
    (t[e++], t[e++]);
    var o = null,
      h = null;
    s && ((o = e), (h = a), (e += 3 * a));
    var u = !0,
      c = [],
      l = 0,
      f = null,
      d = 0,
      p = null;
    for (this.width = r, this.height = n; u && e < t.length; )
      switch (t[e++]) {
        case 33:
          switch (t[e++]) {
            case 255:
              if (
                11 !== t[e] ||
                (78 == t[e + 1] &&
                  69 == t[e + 2] &&
                  84 == t[e + 3] &&
                  83 == t[e + 4] &&
                  67 == t[e + 5] &&
                  65 == t[e + 6] &&
                  80 == t[e + 7] &&
                  69 == t[e + 8] &&
                  50 == t[e + 9] &&
                  46 == t[e + 10] &&
                  48 == t[e + 11] &&
                  3 == t[e + 12] &&
                  1 == t[e + 13] &&
                  0 == t[e + 16])
              )
                ((e += 14), (p = t[e++] | (t[e++] << 8)), e++);
              else
                for (e += 12; ; ) {
                  if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
                  if (0 === P) break;
                  e += P;
                }
              break;
            case 249:
              if (4 !== t[e++] || 0 !== t[e + 4])
                throw new Error("Invalid graphics extension block.");
              var g = t[e++];
              ((l = t[e++] | (t[e++] << 8)),
                (f = t[e++]),
                0 == (1 & g) && (f = null),
                (d = (g >> 2) & 7),
                e++);
              break;
            case 254:
              for (;;) {
                if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
                if (0 === P) break;
                e += P;
              }
              break;
            default:
              throw new Error(
                "Unknown graphic control label: 0x" + t[e - 1].toString(16),
              );
          }
          break;
        case 44:
          var v = t[e++] | (t[e++] << 8),
            m = t[e++] | (t[e++] << 8),
            y = t[e++] | (t[e++] << 8),
            b = t[e++] | (t[e++] << 8),
            w = t[e++],
            x = (w >> 6) & 1,
            S = 1 << (1 + (7 & w)),
            A = o,
            E = h,
            F = !1;
          w >> 7 && ((F = !0), (A = e), (E = S), (e += 3 * S));
          var N = e;
          for (e++; ; ) {
            var P;
            if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
            if (0 === P) break;
            e += P;
          }
          c.push({
            x: v,
            y: m,
            width: y,
            height: b,
            has_local_palette: F,
            palette_offset: A,
            palette_size: E,
            data_offset: N,
            data_length: e - N,
            transparent_index: f,
            interlaced: !!x,
            delay: l,
            disposal: d,
          });
          break;
        case 59:
          u = !1;
          break;
        default:
          throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16));
      }
    ((this.numFrames = function () {
      return c.length;
    }),
      (this.loopCount = function () {
        return p;
      }),
      (this.frameInfo = function (t) {
        if (t < 0 || t >= c.length)
          throw new Error("Frame index out of range.");
        return c[t];
      }),
      (this.decodeAndBlitFrameBGRA = function (e, n) {
        var i = this.frameInfo(e),
          s = i.width * i.height,
          a = new Uint8Array(s);
        ze(t, i.data_offset, a, s);
        var o = i.palette_offset,
          h = i.transparent_index;
        null === h && (h = 256);
        var u = i.width,
          c = r - u,
          l = u,
          f = 4 * (i.y * r + i.x),
          d = 4 * ((i.y + i.height) * r + i.x),
          p = f,
          g = 4 * c;
        !0 === i.interlaced && (g += 4 * r * 7);
        for (var v = 8, m = 0, y = a.length; m < y; ++m) {
          var b = a[m];
          if (
            (0 === l &&
              ((l = u),
              (p += g) >= d &&
                ((g = 4 * c + 4 * r * (v - 1)),
                (p = f + (u + c) * (v << 1)),
                (v >>= 1))),
            b === h)
          )
            p += 4;
          else {
            var w = t[o + 3 * b],
              x = t[o + 3 * b + 1],
              S = t[o + 3 * b + 2];
            ((n[p++] = S), (n[p++] = x), (n[p++] = w), (n[p++] = 255));
          }
          --l;
        }
      }),
      (this.decodeAndBlitFrameRGBA = function (e, n) {
        var i = this.frameInfo(e),
          s = i.width * i.height,
          a = new Uint8Array(s);
        ze(t, i.data_offset, a, s);
        var o = i.palette_offset,
          h = i.transparent_index;
        null === h && (h = 256);
        var u = i.width,
          c = r - u,
          l = u,
          f = 4 * (i.y * r + i.x),
          d = 4 * ((i.y + i.height) * r + i.x),
          p = f,
          g = 4 * c;
        !0 === i.interlaced && (g += 4 * r * 7);
        for (var v = 8, m = 0, y = a.length; m < y; ++m) {
          var b = a[m];
          if (
            (0 === l &&
              ((l = u),
              (p += g) >= d &&
                ((g = 4 * c + 4 * r * (v - 1)),
                (p = f + (u + c) * (v << 1)),
                (v >>= 1))),
            b === h)
          )
            p += 4;
          else {
            var w = t[o + 3 * b],
              x = t[o + 3 * b + 1],
              S = t[o + 3 * b + 2];
            ((n[p++] = w), (n[p++] = x), (n[p++] = S), (n[p++] = 255));
          }
          --l;
        }
      }));
  }
  function ze(t, e, r, n) {
    for (
      var i = t[e++],
        s = 1 << i,
        a = s + 1,
        o = a + 1,
        h = i + 1,
        u = (1 << h) - 1,
        c = 0,
        l = 0,
        f = 0,
        d = t[e++],
        p = new Int32Array(4096),
        g = null;
      ;
    ) {
      for (; c < 16 && 0 !== d; )
        ((l |= t[e++] << c), (c += 8), 1 === d ? (d = t[e++]) : --d);
      if (c < h) break;
      var v = l & u;
      if (((l >>= h), (c -= h), v !== s)) {
        if (v === a) break;
        for (var m = v < o ? v : g, y = 0, b = m; b > s; )
          ((b = p[b] >> 8), ++y);
        var w = b;
        if (f + y + (m !== v ? 1 : 0) > n)
          return void Q.log("Warning, gif stream longer than expected.");
        r[f++] = w;
        var x = (f += y);
        for (m !== v && (r[f++] = w), b = m; y--; )
          ((b = p[b]), (r[--x] = 255 & b), (b >>= 8));
        (null !== g &&
          o < 4096 &&
          ((p[o++] = (g << 8) | w),
          o >= u + 1 && h < 12 && (++h, (u = (u << 1) | 1))),
          (g = v));
      } else ((o = a + 1), (u = (1 << (h = i + 1)) - 1), (g = null));
    }
    return (f !== n && Q.log("Warning, gif stream shorter than expected."), r);
    /**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
  }
  function We(t) {
    var e,
      r,
      n,
      i,
      s,
      a = Math.floor,
      o = new Array(64),
      h = new Array(64),
      u = new Array(64),
      c = new Array(64),
      l = new Array(65535),
      f = new Array(65535),
      d = new Array(64),
      p = new Array(64),
      g = [],
      v = 0,
      m = 7,
      y = new Array(64),
      b = new Array(64),
      w = new Array(64),
      x = new Array(256),
      S = new Array(2048),
      A = [
        0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17,
        25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45,
        52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61,
        35, 36, 48, 49, 57, 58, 62, 63,
      ],
      E = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      F = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      N = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
      P = [
        1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50,
        129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114,
        130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55,
        56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89,
        90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120,
        121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149,
        150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170,
        178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198,
        199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225,
        226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245,
        246, 247, 248, 249, 250,
      ],
      I = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      L = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      C = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
      D = [
        0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50,
        129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114,
        209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42,
        53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86,
        87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117,
        118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138,
        146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166,
        167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194,
        195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215,
        216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243,
        244, 245, 246, 247, 248, 249, 250,
      ];
    function _(t, e) {
      for (var r = 0, n = 0, i = new Array(), s = 1; s <= 16; s++) {
        for (var a = 1; a <= t[s]; a++)
          ((i[e[n]] = []), (i[e[n]][0] = r), (i[e[n]][1] = s), n++, r++);
        r *= 2;
      }
      return i;
    }
    function R(t) {
      for (var e = t[0], r = t[1] - 1; r >= 0; )
        (e & (1 << r) && (v |= 1 << m),
          r--,
          --m < 0 && (255 == v ? (B(255), B(0)) : B(v), (m = 7), (v = 0)));
    }
    function B(t) {
      g.push(t);
    }
    function T(t) {
      (B((t >> 8) & 255), B(255 & t));
    }
    function j(t, e, r, n, i) {
      for (
        var s,
          a = i[0],
          o = i[240],
          h = (function (t, e) {
            var r,
              n,
              i,
              s,
              a,
              o,
              h,
              u,
              c,
              l,
              f = 0;
            for (c = 0; c < 8; ++c) {
              ((r = t[f]),
                (n = t[f + 1]),
                (i = t[f + 2]),
                (s = t[f + 3]),
                (a = t[f + 4]),
                (o = t[f + 5]),
                (h = t[f + 6]));
              var p = r + (u = t[f + 7]),
                g = r - u,
                v = n + h,
                m = n - h,
                y = i + o,
                b = i - o,
                w = s + a,
                x = s - a,
                S = p + w,
                A = p - w,
                E = v + y,
                F = v - y;
              ((t[f] = S + E), (t[f + 4] = S - E));
              var N = 0.707106781 * (F + A);
              ((t[f + 2] = A + N), (t[f + 6] = A - N));
              var P = 0.382683433 * ((S = x + b) - (F = m + g)),
                I = 0.5411961 * S + P,
                L = 1.306562965 * F + P,
                C = 0.707106781 * (E = b + m),
                D = g + C,
                _ = g - C;
              ((t[f + 5] = _ + I),
                (t[f + 3] = _ - I),
                (t[f + 1] = D + L),
                (t[f + 7] = D - L),
                (f += 8));
            }
            for (f = 0, c = 0; c < 8; ++c) {
              ((r = t[f]),
                (n = t[f + 8]),
                (i = t[f + 16]),
                (s = t[f + 24]),
                (a = t[f + 32]),
                (o = t[f + 40]),
                (h = t[f + 48]));
              var R = r + (u = t[f + 56]),
                B = r - u,
                T = n + h,
                j = n - h,
                k = i + o,
                O = i - o,
                M = s + a,
                q = s - a,
                H = R + M,
                V = R - M,
                U = T + k,
                K = T - k;
              ((t[f] = H + U), (t[f + 32] = H - U));
              var z = 0.707106781 * (K + V);
              ((t[f + 16] = V + z), (t[f + 48] = V - z));
              var W = 0.382683433 * ((H = q + O) - (K = j + B)),
                G = 0.5411961 * H + W,
                J = 1.306562965 * K + W,
                X = 0.707106781 * (U = O + j),
                Y = B + X,
                $ = B - X;
              ((t[f + 40] = $ + G),
                (t[f + 24] = $ - G),
                (t[f + 8] = Y + J),
                (t[f + 56] = Y - J),
                f++);
            }
            for (c = 0; c < 64; ++c)
              ((l = t[c] * e[c]),
                (d[c] = l > 0 ? (l + 0.5) | 0 : (l - 0.5) | 0));
            return d;
          })(t, e),
          u = 0;
        u < 64;
        ++u
      )
        p[A[u]] = h[u];
      var c = p[0] - r;
      ((r = p[0]), 0 == c ? R(n[0]) : (R(n[f[(s = 32767 + c)]]), R(l[s])));
      for (var g = 63; g > 0 && 0 == p[g]; ) g--;
      if (0 == g) return (R(a), r);
      for (var v, m = 1; m <= g; ) {
        for (var y = m; 0 == p[m] && m <= g; ) ++m;
        var b = m - y;
        if (b >= 16) {
          v = b >> 4;
          for (var w = 1; w <= v; ++w) R(o);
          b &= 15;
        }
        ((s = 32767 + p[m]), R(i[(b << 4) + f[s]]), R(l[s]), m++);
      }
      return (63 != g && R(a), r);
    }
    function k(t) {
      ((t = Math.min(Math.max(t, 1), 100)),
        s != t &&
          ((function (t) {
            for (
              var e = [
                  16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60,
                  55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87,
                  80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81,
                  104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95,
                  98, 112, 100, 103, 99,
                ],
                r = 0;
              r < 64;
              r++
            ) {
              var n = a((e[r] * t + 50) / 100);
              ((n = Math.min(Math.max(n, 1), 255)), (o[A[r]] = n));
            }
            for (
              var i = [
                  17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99,
                  99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99,
                  99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                  99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
                  99, 99, 99, 99,
                ],
                s = 0;
              s < 64;
              s++
            ) {
              var l = a((i[s] * t + 50) / 100);
              ((l = Math.min(Math.max(l, 1), 255)), (h[A[s]] = l));
            }
            for (
              var f = [
                  1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958,
                  0.5411961, 0.275899379,
                ],
                d = 0,
                p = 0;
              p < 8;
              p++
            )
              for (var g = 0; g < 8; g++)
                ((u[d] = 1 / (o[A[d]] * f[p] * f[g] * 8)),
                  (c[d] = 1 / (h[A[d]] * f[p] * f[g] * 8)),
                  d++);
          })(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)),
          (s = t)));
    }
    ((this.encode = function (t, s) {
      (s && k(s),
        (g = new Array()),
        (v = 0),
        (m = 7),
        T(65496),
        T(65504),
        T(16),
        B(74),
        B(70),
        B(73),
        B(70),
        B(0),
        B(1),
        B(1),
        B(0),
        T(1),
        T(1),
        B(0),
        B(0),
        (function () {
          (T(65499), T(132), B(0));
          for (var t = 0; t < 64; t++) B(o[t]);
          B(1);
          for (var e = 0; e < 64; e++) B(h[e]);
        })(),
        (function (t, e) {
          (T(65472),
            T(17),
            B(8),
            T(e),
            T(t),
            B(3),
            B(1),
            B(17),
            B(0),
            B(2),
            B(17),
            B(1),
            B(3),
            B(17),
            B(1));
        })(t.width, t.height),
        (function () {
          (T(65476), T(418), B(0));
          for (var t = 0; t < 16; t++) B(E[t + 1]);
          for (var e = 0; e <= 11; e++) B(F[e]);
          B(16);
          for (var r = 0; r < 16; r++) B(N[r + 1]);
          for (var n = 0; n <= 161; n++) B(P[n]);
          B(1);
          for (var i = 0; i < 16; i++) B(I[i + 1]);
          for (var s = 0; s <= 11; s++) B(L[s]);
          B(17);
          for (var a = 0; a < 16; a++) B(C[a + 1]);
          for (var o = 0; o <= 161; o++) B(D[o]);
        })(),
        T(65498),
        T(12),
        B(3),
        B(1),
        B(0),
        B(2),
        B(17),
        B(3),
        B(17),
        B(0),
        B(63),
        B(0));
      var a = 0,
        l = 0,
        f = 0;
      ((v = 0), (m = 7), (this.encode.displayName = "_encode_"));
      for (
        var d,
          p,
          x,
          A,
          _,
          O,
          M,
          q,
          H,
          V = t.data,
          U = t.width,
          K = t.height,
          z = 4 * U,
          W = 0;
        W < K;
      ) {
        for (d = 0; d < z; ) {
          for (_ = z * W + d, M = -1, q = 0, H = 0; H < 64; H++)
            ((O = _ + (q = H >> 3) * z + (M = 4 * (7 & H))),
              W + q >= K && (O -= z * (W + 1 + q - K)),
              d + M >= z && (O -= d + M - z + 4),
              (p = V[O++]),
              (x = V[O++]),
              (A = V[O++]),
              (y[H] =
                ((S[p] + S[(x + 256) >> 0] + S[(A + 512) >> 0]) >> 16) - 128),
              (b[H] =
                ((S[(p + 768) >> 0] +
                  S[(x + 1024) >> 0] +
                  S[(A + 1280) >> 0]) >>
                  16) -
                128),
              (w[H] =
                ((S[(p + 1280) >> 0] +
                  S[(x + 1536) >> 0] +
                  S[(A + 1792) >> 0]) >>
                  16) -
                128));
          ((a = j(y, u, a, e, n)),
            (l = j(b, c, l, r, i)),
            (f = j(w, c, f, r, i)),
            (d += 32));
        }
        W += 8;
      }
      if (m >= 0) {
        var G = [];
        ((G[1] = m + 1), (G[0] = (1 << (m + 1)) - 1), R(G));
      }
      return (T(65497), new Uint8Array(g));
    }),
      (t = t || 50),
      (function () {
        for (var t = String.fromCharCode, e = 0; e < 256; e++) x[e] = t(e);
      })(),
      (e = _(E, F)),
      (r = _(I, L)),
      (n = _(N, P)),
      (i = _(C, D)),
      (function () {
        for (var t = 1, e = 2, r = 1; r <= 15; r++) {
          for (var n = t; n < e; n++)
            ((f[32767 + n] = r),
              (l[32767 + n] = []),
              (l[32767 + n][1] = r),
              (l[32767 + n][0] = n));
          for (var i = -(e - 1); i <= -t; i++)
            ((f[32767 + i] = r),
              (l[32767 + i] = []),
              (l[32767 + i][1] = r),
              (l[32767 + i][0] = e - 1 + i));
          ((t <<= 1), (e <<= 1));
        }
      })(),
      (function () {
        for (var t = 0; t < 256; t++)
          ((S[t] = 19595 * t),
            (S[(t + 256) >> 0] = 38470 * t),
            (S[(t + 512) >> 0] = 7471 * t + 32768),
            (S[(t + 768) >> 0] = -11059 * t),
            (S[(t + 1024) >> 0] = -21709 * t),
            (S[(t + 1280) >> 0] = 32768 * t + 8421375),
            (S[(t + 1536) >> 0] = -27439 * t),
            (S[(t + 1792) >> 0] = -5329 * t));
      })(),
      k(t));
  }
  /**
   * @license
   * Copyright (c) 2017 Aras Abbasi
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */ function Ge(t, e) {
    if (
      ((this.pos = 0),
      (this.buffer = t),
      (this.datav = new DataView(t.buffer)),
      (this.is_with_alpha = !!e),
      (this.bottom_up = !0),
      (this.flag =
        String.fromCharCode(this.buffer[0]) +
        String.fromCharCode(this.buffer[1])),
      (this.pos += 2),
      -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag))
    )
      throw new Error("Invalid BMP File");
    (this.parseHeader(), this.parseBGR());
  }
  function Je(t) {
    function e(t) {
      if (!t) throw Error("assert :P");
    }
    function r(t, e, r) {
      for (var n = 0; 4 > n; n++) if (t[e + n] != r.charCodeAt(n)) return !0;
      return !1;
    }
    function n(t, e, r, n, i) {
      for (var s = 0; s < i; s++) t[e + s] = r[n + s];
    }
    function i(t, e, r, n) {
      for (var i = 0; i < n; i++) t[e + i] = r;
    }
    function s(t) {
      return new Int32Array(t);
    }
    function a(t, e) {
      for (var r = [], n = 0; n < t; n++) r.push(new e());
      return r;
    }
    function o(t, e) {
      var r = [];
      return (
        (function t(r, n, i) {
          for (
            var s = i[n], a = 0;
            a < s &&
            (r.push(i.length > n + 1 ? [] : new e()), !(i.length < n + 1));
            a++
          )
            t(r[a], n + 1, i);
        })(r, 0, t),
        r
      );
    }
    var h = function () {
      var t = this;
      function h(t, e) {
        for (var r = (1 << (e - 1)) >>> 0; t & r; ) r >>>= 1;
        return r ? (t & (r - 1)) + r : t;
      }
      function u(t, r, n, i, s) {
        e(!(i % n));
        do {
          t[r + (i -= n)] = s;
        } while (0 < i);
      }
      function c(t, r, n, i, a) {
        if ((e(2328 >= a), 512 >= a)) var o = s(512);
        else if (null == (o = s(a))) return 0;
        return (function (t, r, n, i, a, o) {
          var c,
            f,
            d = r,
            p = 1 << n,
            g = s(16),
            v = s(16);
          for (
            e(0 != a), e(null != i), e(null != t), e(0 < n), f = 0;
            f < a;
            ++f
          ) {
            if (15 < i[f]) return 0;
            ++g[i[f]];
          }
          if (g[0] == a) return 0;
          for (v[1] = 0, c = 1; 15 > c; ++c) {
            if (g[c] > 1 << c) return 0;
            v[c + 1] = v[c] + g[c];
          }
          for (f = 0; f < a; ++f) ((c = i[f]), 0 < i[f] && (o[v[c]++] = f));
          if (1 == v[15])
            return (
              ((i = new l()).g = 0),
              (i.value = o[0]),
              u(t, d, 1, p, i),
              p
            );
          var m,
            y = -1,
            b = p - 1,
            w = 0,
            x = 1,
            S = 1,
            A = 1 << n;
          for (f = 0, c = 1, a = 2; c <= n; ++c, a <<= 1) {
            if (((x += S <<= 1), 0 > (S -= g[c]))) return 0;
            for (; 0 < g[c]; --g[c])
              (((i = new l()).g = c),
                (i.value = o[f++]),
                u(t, d + w, a, A, i),
                (w = h(w, c)));
          }
          for (c = n + 1, a = 2; 15 >= c; ++c, a <<= 1) {
            if (((x += S <<= 1), 0 > (S -= g[c]))) return 0;
            for (; 0 < g[c]; --g[c]) {
              if (((i = new l()), (w & b) != y)) {
                for (
                  d += A, m = 1 << ((y = c) - n);
                  15 > y && !(0 >= (m -= g[y]));
                )
                  (++y, (m <<= 1));
                ((p += A = 1 << (m = y - n)),
                  (t[r + (y = w & b)].g = m + n),
                  (t[r + y].value = d - r - y));
              }
              ((i.g = c - n),
                (i.value = o[f++]),
                u(t, d + (w >> n), a, A, i),
                (w = h(w, c)));
            }
          }
          return x != 2 * v[15] - 1 ? 0 : p;
        })(t, r, n, i, a, o);
      }
      function l() {
        this.value = this.g = 0;
      }
      function f() {
        this.value = this.g = 0;
      }
      function d() {
        ((this.G = a(5, l)),
          (this.H = s(5)),
          (this.jc = this.Qb = this.qb = this.nd = 0),
          (this.pd = a(Or, f)));
      }
      function p(t, r, n, i) {
        (e(null != t),
          e(null != r),
          e(2147483648 > i),
          (t.Ca = 254),
          (t.I = 0),
          (t.b = -8),
          (t.Ka = 0),
          (t.oa = r),
          (t.pa = n),
          (t.Jd = r),
          (t.Yc = n + i),
          (t.Zc = 4 <= i ? n + i - 4 + 1 : n),
          N(t));
      }
      function g(t, e) {
        for (var r = 0; 0 < e--; ) r |= I(t, 128) << e;
        return r;
      }
      function v(t, e) {
        var r = g(t, e);
        return P(t) ? -r : r;
      }
      function m(t, r, n, i) {
        var s,
          a = 0;
        for (
          e(null != t),
            e(null != r),
            e(4294967288 > i),
            t.Sb = i,
            t.Ra = 0,
            t.u = 0,
            t.h = 0,
            4 < i && (i = 4),
            s = 0;
          s < i;
          ++s
        )
          a += r[n + s] << (8 * s);
        ((t.Ra = a), (t.bb = i), (t.oa = r), (t.pa = n));
      }
      function y(t) {
        for (; 8 <= t.u && t.bb < t.Sb; )
          ((t.Ra >>>= 8),
            (t.Ra += (t.oa[t.pa + t.bb] << (Hr - 8)) >>> 0),
            ++t.bb,
            (t.u -= 8));
        A(t) && ((t.h = 1), (t.u = 0));
      }
      function b(t, r) {
        if ((e(0 <= r), !t.h && r <= qr)) {
          var n = S(t) & Mr[r];
          return ((t.u += r), y(t), n);
        }
        return ((t.h = 1), (t.u = 0));
      }
      function w() {
        ((this.b = this.Ca = this.I = 0),
          (this.oa = []),
          (this.pa = 0),
          (this.Jd = []),
          (this.Yc = 0),
          (this.Zc = []),
          (this.Ka = 0));
      }
      function x() {
        ((this.Ra = 0),
          (this.oa = []),
          (this.h = this.u = this.bb = this.Sb = this.pa = 0));
      }
      function S(t) {
        return (t.Ra >>> (t.u & (Hr - 1))) >>> 0;
      }
      function A(t) {
        return (e(t.bb <= t.Sb), t.h || (t.bb == t.Sb && t.u > Hr));
      }
      function E(t, e) {
        ((t.u = e), (t.h = A(t)));
      }
      function F(t) {
        t.u >= Vr && (e(t.u >= Vr), y(t));
      }
      function N(t) {
        (e(null != t && null != t.oa),
          t.pa < t.Zc
            ? ((t.I = (t.oa[t.pa++] | (t.I << 8)) >>> 0), (t.b += 8))
            : (e(null != t && null != t.oa),
              t.pa < t.Yc
                ? ((t.b += 8), (t.I = t.oa[t.pa++] | (t.I << 8)))
                : t.Ka
                  ? (t.b = 0)
                  : ((t.I <<= 8), (t.b += 8), (t.Ka = 1))));
      }
      function P(t) {
        return g(t, 1);
      }
      function I(t, e) {
        var r = t.Ca;
        0 > t.b && N(t);
        var n = t.b,
          i = (r * e) >>> 8,
          s = (t.I >>> n > i) + 0;
        for (
          s ? ((r -= i), (t.I -= ((i + 1) << n) >>> 0)) : (r = i + 1),
            n = r,
            i = 0;
          256 <= n;
        )
          ((i += 8), (n >>= 8));
        return ((n = 7 ^ (i + Ur[n])), (t.b -= n), (t.Ca = (r << n) - 1), s);
      }
      function L(t, e, r) {
        ((t[e + 0] = (r >> 24) & 255),
          (t[e + 1] = (r >> 16) & 255),
          (t[e + 2] = (r >> 8) & 255),
          (t[e + 3] = (r >> 0) & 255));
      }
      function C(t, e) {
        return (t[e + 0] << 0) | (t[e + 1] << 8);
      }
      function D(t, e) {
        return C(t, e) | (t[e + 2] << 16);
      }
      function _(t, e) {
        return C(t, e) | (C(t, e + 2) << 16);
      }
      function R(t, r) {
        var n = 1 << r;
        return (
          e(null != t),
          e(0 < r),
          (t.X = s(n)),
          null == t.X ? 0 : ((t.Mb = 32 - r), (t.Xa = r), 1)
        );
      }
      function B(t, r) {
        (e(null != t),
          e(null != r),
          e(t.Xa == r.Xa),
          n(r.X, 0, t.X, 0, 1 << r.Xa));
      }
      function T() {
        ((this.X = []), (this.Xa = this.Mb = 0));
      }
      function j(t, r, n, i) {
        (e(null != n), e(null != i));
        var s = n[0],
          a = i[0];
        return (
          0 == s && (s = (t * a + r / 2) / r),
          0 == a && (a = (r * s + t / 2) / t),
          0 >= s || 0 >= a ? 0 : ((n[0] = s), (i[0] = a), 1)
        );
      }
      function k(t, e) {
        return (t + (1 << e) - 1) >>> e;
      }
      function O(t, e) {
        return (
          (((((4278255360 & t) + (4278255360 & e)) >>> 0) & 4278255360) +
            ((((16711935 & t) + (16711935 & e)) >>> 0) & 16711935)) >>>
          0
        );
      }
      function M(e, r) {
        t[r] = function (r, n, i, s, a, o, h) {
          var u;
          for (u = 0; u < a; ++u) {
            var c = t[e](o[h + u - 1], i, s + u);
            o[h + u] = O(r[n + u], c);
          }
        };
      }
      function q() {
        this.ud = this.hd = this.jd = 0;
      }
      function H(t, e) {
        return (((4278124286 & (t ^ e)) >>> 1) + (t & e)) >>> 0;
      }
      function V(t) {
        return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
      }
      function U(t, e) {
        return V(t + ((t - e + 0.5) >> 1));
      }
      function K(t, e, r) {
        return Math.abs(e - r) - Math.abs(t - r);
      }
      function z(t, e, r, n, i, s, a) {
        for (n = s[a - 1], r = 0; r < i; ++r) s[a + r] = n = O(t[e + r], n);
      }
      function W(t, e, r, n, i) {
        var s;
        for (s = 0; s < r; ++s) {
          var a = t[e + s],
            o = (a >> 8) & 255,
            h = 16711935 & (h = (h = 16711935 & a) + ((o << 16) + o));
          n[i + s] = ((4278255360 & a) + h) >>> 0;
        }
      }
      function G(t, e) {
        ((e.jd = (t >> 0) & 255),
          (e.hd = (t >> 8) & 255),
          (e.ud = (t >> 16) & 255));
      }
      function J(t, e, r, n, i, s) {
        var a;
        for (a = 0; a < n; ++a) {
          var o = e[r + a],
            h = o >>> 8,
            u = o,
            c =
              255 &
              (c =
                (c = o >>> 16) +
                ((((t.jd << 24) >> 24) * ((h << 24) >> 24)) >>> 5));
          ((u =
            255 &
            (u =
              (u += (((t.hd << 24) >> 24) * ((h << 24) >> 24)) >>> 5) +
              ((((t.ud << 24) >> 24) * ((c << 24) >> 24)) >>> 5))),
            (i[s + a] = (4278255360 & o) + (c << 16) + u));
        }
      }
      function X(e, r, n, i, s) {
        ((t[r] = function (t, e, r, n, a, o, h, u, c) {
          for (n = h; n < u; ++n)
            for (h = 0; h < c; ++h) a[o++] = s(r[i(t[e++])]);
        }),
          (t[e] = function (e, r, a, o, h, u, c) {
            var l = 8 >> e.b,
              f = e.Ea,
              d = e.K[0],
              p = e.w;
            if (8 > l)
              for (e = (1 << e.b) - 1, p = (1 << l) - 1; r < a; ++r) {
                var g,
                  v = 0;
                for (g = 0; g < f; ++g)
                  (g & e || (v = i(o[h++])), (u[c++] = s(d[v & p])), (v >>= l));
              }
            else t["VP8LMapColor" + n](o, h, d, p, u, c, r, a, f);
          }));
      }
      function Y(t, e, r, n, i) {
        for (r = e + r; e < r; ) {
          var s = t[e++];
          ((n[i++] = (s >> 16) & 255),
            (n[i++] = (s >> 8) & 255),
            (n[i++] = (s >> 0) & 255));
        }
      }
      function $(t, e, r, n, i) {
        for (r = e + r; e < r; ) {
          var s = t[e++];
          ((n[i++] = (s >> 16) & 255),
            (n[i++] = (s >> 8) & 255),
            (n[i++] = (s >> 0) & 255),
            (n[i++] = (s >> 24) & 255));
        }
      }
      function Z(t, e, r, n, i) {
        for (r = e + r; e < r; ) {
          var s = (((a = t[e++]) >> 16) & 240) | ((a >> 12) & 15),
            a = ((a >> 0) & 240) | ((a >> 28) & 15);
          ((n[i++] = s), (n[i++] = a));
        }
      }
      function Q(t, e, r, n, i) {
        for (r = e + r; e < r; ) {
          var s = (((a = t[e++]) >> 16) & 248) | ((a >> 13) & 7),
            a = ((a >> 5) & 224) | ((a >> 3) & 31);
          ((n[i++] = s), (n[i++] = a));
        }
      }
      function tt(t, e, r, n, i) {
        for (r = e + r; e < r; ) {
          var s = t[e++];
          ((n[i++] = (s >> 0) & 255),
            (n[i++] = (s >> 8) & 255),
            (n[i++] = (s >> 16) & 255));
        }
      }
      function et(t, e, r, i, s, a) {
        if (0 == a)
          for (r = e + r; e < r; )
            (L(
              i,
              (((a = t[e++])[0] >> 24) |
                ((a[1] >> 8) & 65280) |
                ((a[2] << 8) & 16711680) |
                (a[3] << 24)) >>>
                0,
            ),
              (s += 32));
        else n(i, s, t, e, r);
      }
      function rt(e, r) {
        ((t[r][0] = t[e + "0"]),
          (t[r][1] = t[e + "1"]),
          (t[r][2] = t[e + "2"]),
          (t[r][3] = t[e + "3"]),
          (t[r][4] = t[e + "4"]),
          (t[r][5] = t[e + "5"]),
          (t[r][6] = t[e + "6"]),
          (t[r][7] = t[e + "7"]),
          (t[r][8] = t[e + "8"]),
          (t[r][9] = t[e + "9"]),
          (t[r][10] = t[e + "10"]),
          (t[r][11] = t[e + "11"]),
          (t[r][12] = t[e + "12"]),
          (t[r][13] = t[e + "13"]),
          (t[r][14] = t[e + "0"]),
          (t[r][15] = t[e + "0"]));
      }
      function nt(t) {
        return t == Un || t == Kn || t == zn || t == Wn;
      }
      function it() {
        ((this.eb = []), (this.size = this.A = this.fb = 0));
      }
      function st() {
        ((this.y = []),
          (this.f = []),
          (this.ea = []),
          (this.F = []),
          (this.Tc =
            this.Ed =
            this.Cd =
            this.Fd =
            this.lb =
            this.Db =
            this.Ab =
            this.fa =
            this.J =
            this.W =
            this.N =
            this.O =
              0));
      }
      function at() {
        ((this.Rd = this.height = this.width = this.S = 0),
          (this.f = {}),
          (this.f.RGBA = new it()),
          (this.f.kb = new st()),
          (this.sd = null));
      }
      function ot() {
        ((this.width = [0]),
          (this.height = [0]),
          (this.Pd = [0]),
          (this.Qd = [0]),
          (this.format = [0]));
      }
      function ht() {
        this.Id =
          this.fd =
          this.Md =
          this.hb =
          this.ib =
          this.da =
          this.bd =
          this.cd =
          this.j =
          this.v =
          this.Da =
          this.Sd =
          this.ob =
            0;
      }
      function ut(t) {
        return (alert("todo:WebPSamplerProcessPlane"), t.T);
      }
      function ct(t, e) {
        var r = t.T,
          i = e.ba.f.RGBA,
          s = i.eb,
          a = i.fb + t.ka * i.A,
          o = mi[e.ba.S],
          h = t.y,
          u = t.O,
          c = t.f,
          l = t.N,
          f = t.ea,
          d = t.W,
          p = e.cc,
          g = e.dc,
          v = e.Mc,
          m = e.Nc,
          y = t.ka,
          b = t.ka + t.T,
          w = t.U,
          x = (w + 1) >> 1;
        for (
          0 == y
            ? o(h, u, null, null, c, l, f, d, c, l, f, d, s, a, null, null, w)
            : (o(e.ec, e.fc, h, u, p, g, v, m, c, l, f, d, s, a - i.A, s, a, w),
              ++r);
          y + 2 < b;
          y += 2
        )
          ((p = c),
            (g = l),
            (v = f),
            (m = d),
            (l += t.Rc),
            (d += t.Rc),
            (a += 2 * i.A),
            o(
              h,
              (u += 2 * t.fa) - t.fa,
              h,
              u,
              p,
              g,
              v,
              m,
              c,
              l,
              f,
              d,
              s,
              a - i.A,
              s,
              a,
              w,
            ));
        return (
          (u += t.fa),
          t.j + b < t.o
            ? (n(e.ec, e.fc, h, u, w),
              n(e.cc, e.dc, c, l, x),
              n(e.Mc, e.Nc, f, d, x),
              r--)
            : 1 & b ||
              o(
                h,
                u,
                null,
                null,
                c,
                l,
                f,
                d,
                c,
                l,
                f,
                d,
                s,
                a + i.A,
                null,
                null,
                w,
              ),
          r
        );
      }
      function lt(t, r, n) {
        var i = t.F,
          s = [t.J];
        if (null != i) {
          var a = t.U,
            o = r.ba.S,
            h = o == qn || o == zn;
          r = r.ba.f.RGBA;
          var u = [0],
            c = t.ka;
          ((u[0] = t.T),
            t.Kb &&
              (0 == c ? --u[0] : (--c, (s[0] -= t.width)),
              t.j + t.ka + t.T == t.o && (u[0] = t.o - t.j - c)));
          var l = r.eb;
          ((c = r.fb + c * r.A),
            (t = Fn(i, s[0], t.width, a, u, l, c + (h ? 0 : 3), r.A)),
            e(n == u),
            t && nt(o) && An(l, c, h, a, u, r.A));
        }
        return 0;
      }
      function ft(t) {
        var e = t.ma,
          r = e.ba.S,
          n = 11 > r,
          i = r == kn || r == Mn || r == qn || r == Hn || 12 == r || nt(r);
        if (
          ((e.memory = null),
          (e.Ib = null),
          (e.Jb = null),
          (e.Nd = null),
          !Tr(e.Oa, t, i ? 11 : 12))
        )
          return 0;
        if ((i && nt(r) && yr(), t.da)) alert("todo:use_scaling");
        else {
          if (n) {
            if (((e.Ib = ut), t.Kb)) {
              if (
                ((r = (t.U + 1) >> 1),
                (e.memory = s(t.U + 2 * r)),
                null == e.memory)
              )
                return 0;
              ((e.ec = e.memory),
                (e.fc = 0),
                (e.cc = e.ec),
                (e.dc = e.fc + t.U),
                (e.Mc = e.cc),
                (e.Nc = e.dc + r),
                (e.Ib = ct),
                yr());
            }
          } else alert("todo:EmitYUV");
          i && ((e.Jb = lt), n && vr());
        }
        if (n && !Di) {
          for (t = 0; 256 > t; ++t)
            ((_i[t] = (89858 * (t - 128) + Ni) >> Fi),
              (Ti[t] = -22014 * (t - 128) + Ni),
              (Bi[t] = -45773 * (t - 128)),
              (Ri[t] = (113618 * (t - 128) + Ni) >> Fi));
          for (t = Pi; t < Ii; ++t)
            ((e = (76283 * (t - 16) + Ni) >> Fi),
              (ji[t - Pi] = zt(e, 255)),
              (ki[t - Pi] = zt((e + 8) >> 4, 15)));
          Di = 1;
        }
        return 1;
      }
      function dt(t) {
        var r = t.ma,
          n = t.U,
          i = t.T;
        return (
          e(!(1 & t.ka)),
          0 >= n || 0 >= i
            ? 0
            : ((n = r.Ib(t, r)), null != r.Jb && r.Jb(t, r, n), (r.Dc += n), 1)
        );
      }
      function pt(t) {
        t.ma.memory = null;
      }
      function gt(t, e, r, n) {
        return 47 != b(t, 8)
          ? 0
          : ((e[0] = b(t, 14) + 1),
            (r[0] = b(t, 14) + 1),
            (n[0] = b(t, 1)),
            0 != b(t, 3) ? 0 : !t.h);
      }
      function vt(t, e) {
        if (4 > t) return t + 1;
        var r = (t - 2) >> 1;
        return ((2 + (1 & t)) << r) + b(e, r) + 1;
      }
      function mt(t, e) {
        return 120 < e
          ? e - 120
          : 1 <= (r = ((r = Zn[e - 1]) >> 4) * t + (8 - (15 & r)))
            ? r
            : 1;
        var r;
      }
      function yt(t, e, r) {
        var n = S(r),
          i = t[(e += 255 & n)].g - 8;
        return (
          0 < i &&
            (E(r, r.u + 8),
            (n = S(r)),
            (e += t[e].value),
            (e += n & ((1 << i) - 1))),
          E(r, r.u + t[e].g),
          t[e].value
        );
      }
      function bt(t, r, n) {
        return (
          (n.g += t.g),
          (n.value += (t.value << r) >>> 0),
          e(8 >= n.g),
          t.g
        );
      }
      function wt(t, r, n) {
        var i = t.xc;
        return (
          e((r = 0 == i ? 0 : t.vc[t.md * (n >> i) + (r >> i)]) < t.Wb),
          t.Ya[r]
        );
      }
      function xt(t, r, i, s) {
        var a = t.ab,
          o = t.c * r,
          h = t.C;
        r = h + r;
        var u = i,
          c = s;
        for (s = t.Ta, i = t.Ua; 0 < a--; ) {
          var l = t.gc[a],
            f = h,
            d = r,
            p = u,
            g = c,
            v = ((c = s), (u = i), l.Ea);
          switch ((e(f < d), e(d <= l.nc), l.hc)) {
            case 2:
              Wr(p, g, (d - f) * v, c, u);
              break;
            case 0:
              var m = f,
                y = d,
                b = c,
                w = u,
                x = (N = l).Ea;
              0 == m &&
                (Kr(p, g, null, null, 1, b, w),
                z(p, g + 1, 0, 0, x - 1, b, w + 1),
                (g += x),
                (w += x),
                ++m);
              for (
                var S = 1 << N.b,
                  A = S - 1,
                  E = k(x, N.b),
                  F = N.K,
                  N = N.w + (m >> N.b) * E;
                m < y;
              ) {
                var P = F,
                  I = N,
                  L = 1;
                for (zr(p, g, b, w - x, 1, b, w); L < x; ) {
                  var C = (L & ~A) + S;
                  (C > x && (C = x),
                    (0, $r[(P[I++] >> 8) & 15])(
                      p,
                      g + +L,
                      b,
                      w + L - x,
                      C - L,
                      b,
                      w + L,
                    ),
                    (L = C));
                }
                ((g += x), (w += x), ++m & A || (N += E));
              }
              d != l.nc && n(c, u - v, c, u + (d - f - 1) * v, v);
              break;
            case 1:
              for (
                v = p,
                  y = g,
                  x = (p = l.Ea) - (w = p & ~(b = (g = 1 << l.b) - 1)),
                  m = k(p, l.b),
                  S = l.K,
                  l = l.w + (f >> l.b) * m;
                f < d;
              ) {
                for (A = S, E = l, F = new q(), N = y + w, P = y + p; y < N; )
                  (G(A[E++], F), Zr(F, v, y, g, c, u), (y += g), (u += g));
                (y < P &&
                  (G(A[E++], F), Zr(F, v, y, x, c, u), (y += x), (u += x)),
                  ++f & b || (l += m));
              }
              break;
            case 3:
              if (p == c && g == u && 0 < l.b) {
                for (
                  y = c,
                    p = v = u + (d - f) * v - (w = (d - f) * k(l.Ea, l.b)),
                    g = c,
                    b = u,
                    m = [],
                    w = (x = w) - 1;
                  0 <= w;
                  --w
                )
                  m[w] = g[b + w];
                for (w = x - 1; 0 <= w; --w) y[p + w] = m[w];
                Gr(l, f, d, c, v, c, u);
              } else Gr(l, f, d, p, g, c, u);
          }
          ((u = s), (c = i));
        }
        c != i && n(s, i, u, c, o);
      }
      function St(t, r) {
        var n = t.V,
          i = t.Ba + t.c * t.C,
          s = r - t.C;
        if ((e(r <= t.l.o), e(16 >= s), 0 < s)) {
          var a = t.l,
            o = t.Ta,
            h = t.Ua,
            u = a.width;
          if (
            (xt(t, s, n, i),
            (s = h = [h]),
            e((n = t.C) < (i = r)),
            e(a.v < a.va),
            i > a.o && (i = a.o),
            n < a.j)
          ) {
            var c = a.j - n;
            ((n = a.j), (s[0] += c * u));
          }
          if (
            (n >= i
              ? (n = 0)
              : ((s[0] += 4 * a.v),
                (a.ka = n - a.j),
                (a.U = a.va - a.v),
                (a.T = i - n),
                (n = 1)),
            n)
          ) {
            if (((h = h[0]), 11 > (n = t.ca).S)) {
              var l = n.f.RGBA,
                f = ((i = n.S), (s = a.U), (a = a.T), (c = l.eb), l.A),
                d = a;
              for (l = l.fb + t.Ma * l.A; 0 < d--; ) {
                var p = o,
                  g = h,
                  v = s,
                  m = c,
                  y = l;
                switch (i) {
                  case jn:
                    Qr(p, g, v, m, y);
                    break;
                  case kn:
                    tn(p, g, v, m, y);
                    break;
                  case Un:
                    (tn(p, g, v, m, y), An(m, y, 0, v, 1, 0));
                    break;
                  case On:
                    nn(p, g, v, m, y);
                    break;
                  case Mn:
                    et(p, g, v, m, y, 1);
                    break;
                  case Kn:
                    (et(p, g, v, m, y, 1), An(m, y, 0, v, 1, 0));
                    break;
                  case qn:
                    et(p, g, v, m, y, 0);
                    break;
                  case zn:
                    (et(p, g, v, m, y, 0), An(m, y, 1, v, 1, 0));
                    break;
                  case Hn:
                    en(p, g, v, m, y);
                    break;
                  case Wn:
                    (en(p, g, v, m, y), En(m, y, v, 1, 0));
                    break;
                  case Vn:
                    rn(p, g, v, m, y);
                    break;
                  default:
                    e(0);
                }
                ((h += u), (l += f));
              }
              t.Ma += a;
            } else alert("todo:EmitRescaledRowsYUVA");
            e(t.Ma <= n.height);
          }
        }
        ((t.C = r), e(t.C <= t.i));
      }
      function At(t) {
        var e;
        if (0 < t.ua) return 0;
        for (e = 0; e < t.Wb; ++e) {
          var r = t.Ya[e].G,
            n = t.Ya[e].H;
          if (
            0 < r[1][n[1] + 0].g ||
            0 < r[2][n[2] + 0].g ||
            0 < r[3][n[3] + 0].g
          )
            return 0;
        }
        return 1;
      }
      function Et(t, r, n, i, s, a) {
        if (0 != t.Z) {
          var o = t.qd,
            h = t.rd;
          for (e(null != vi[t.Z]); r < n; ++r)
            (vi[t.Z](o, h, i, s, i, s, a), (o = i), (h = s), (s += a));
          ((t.qd = o), (t.rd = h));
        }
      }
      function Ft(t, r) {
        var n = t.l.ma,
          i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
        if (((i = t.C < i ? i : t.C), e(r <= t.l.o), r > i)) {
          var s = t.l.width,
            a = n.ca,
            o = n.tb + s * i,
            h = t.V,
            u = t.Ba + t.c * i,
            c = t.gc;
          (e(1 == t.ab),
            e(3 == c[0].hc),
            Xr(c[0], i, r, h, u, a, o),
            Et(n, i, r, a, o, s));
        }
        t.C = t.Ma = r;
      }
      function Nt(t, r, n, i, s, a, o) {
        var h = t.$ / i,
          u = t.$ % i,
          c = t.m,
          l = t.s,
          f = n + t.$,
          d = f;
        s = n + i * s;
        var p = n + i * a,
          g = 280 + l.ua,
          v = t.Pb ? h : 16777216,
          m = 0 < l.ua ? l.Wa : null,
          y = l.wc,
          b = f < p ? wt(l, u, h) : null;
        (e(t.C < a), e(p <= s));
        var w = !1;
        t: for (;;) {
          for (; w || f < p; ) {
            var x = 0;
            if (h >= v) {
              var N = f - n;
              (e((v = t).Pb),
                (v.wd = v.m),
                (v.xd = N),
                0 < v.s.ua && B(v.s.Wa, v.s.vb),
                (v = h + ti));
            }
            if (
              (u & y || (b = wt(l, u, h)),
              e(null != b),
              b.Qb && ((r[f] = b.qb), (w = !0)),
              !w)
            )
              if ((F(c), b.jc)) {
                ((x = c), (N = r));
                var P = f,
                  I = b.pd[S(x) & (Or - 1)];
                (e(b.jc),
                  256 > I.g
                    ? (E(x, x.u + I.g), (N[P] = I.value), (x = 0))
                    : (E(x, x.u + I.g - 256), e(256 <= I.value), (x = I.value)),
                  0 == x && (w = !0));
              } else x = yt(b.G[0], b.H[0], c);
            if (c.h) break;
            if (w || 256 > x) {
              if (!w)
                if (b.nd) r[f] = (b.qb | (x << 8)) >>> 0;
                else {
                  if (
                    (F(c),
                    (w = yt(b.G[1], b.H[1], c)),
                    F(c),
                    (N = yt(b.G[2], b.H[2], c)),
                    (P = yt(b.G[3], b.H[3], c)),
                    c.h)
                  )
                    break;
                  r[f] = ((P << 24) | (w << 16) | (x << 8) | N) >>> 0;
                }
              if (
                ((w = !1),
                ++f,
                ++u >= i &&
                  ((u = 0),
                  ++h,
                  null != o && h <= a && !(h % 16) && o(t, h),
                  null != m))
              )
                for (; d < f; )
                  ((x = r[d++]),
                    (m.X[((506832829 * x) & 4294967295) >>> m.Mb] = x));
            } else if (280 > x) {
              if (
                ((x = vt(x - 256, c)),
                (N = yt(b.G[4], b.H[4], c)),
                F(c),
                (N = mt(i, (N = vt(N, c)))),
                c.h)
              )
                break;
              if (f - n < N || s - f < x) break t;
              for (P = 0; P < x; ++P) r[f + P] = r[f + P - N];
              for (f += x, u += x; u >= i; )
                ((u -= i), ++h, null != o && h <= a && !(h % 16) && o(t, h));
              if ((e(f <= s), u & y && (b = wt(l, u, h)), null != m))
                for (; d < f; )
                  ((x = r[d++]),
                    (m.X[((506832829 * x) & 4294967295) >>> m.Mb] = x));
            } else {
              if (!(x < g)) break t;
              for (w = x - 280, e(null != m); d < f; )
                ((x = r[d++]),
                  (m.X[((506832829 * x) & 4294967295) >>> m.Mb] = x));
              ((x = f), e(!(w >>> (N = m).Xa)), (r[x] = N.X[w]), (w = !0));
            }
            w || e(c.h == A(c));
          }
          if (t.Pb && c.h && f < s)
            (e(t.m.h),
              (t.a = 5),
              (t.m = t.wd),
              (t.$ = t.xd),
              0 < t.s.ua && B(t.s.vb, t.s.Wa));
          else {
            if (c.h) break t;
            (null != o && o(t, h > a ? a : h), (t.a = 0), (t.$ = f - n));
          }
          return 1;
        }
        return ((t.a = 3), 0);
      }
      function Pt(t) {
        (e(null != t), (t.vc = null), (t.yc = null), (t.Ya = null));
        var r = t.Wa;
        (null != r && (r.X = null), (t.vb = null), e(null != t));
      }
      function It() {
        var e = new ar();
        return null == e
          ? null
          : ((e.a = 0),
            (e.xb = gi),
            rt("Predictor", "VP8LPredictors"),
            rt("Predictor", "VP8LPredictors_C"),
            rt("PredictorAdd", "VP8LPredictorsAdd"),
            rt("PredictorAdd", "VP8LPredictorsAdd_C"),
            (Wr = W),
            (Zr = J),
            (Qr = Y),
            (tn = $),
            (en = Z),
            (rn = Q),
            (nn = tt),
            (t.VP8LMapColor32b = Jr),
            (t.VP8LMapColor8b = Yr),
            e);
      }
      function Lt(t, r, n, o, h) {
        var u = 1,
          f = [t],
          p = [r],
          g = o.m,
          v = o.s,
          m = null,
          y = 0;
        t: for (;;) {
          if (n)
            for (; u && b(g, 1); ) {
              var w = f,
                x = p,
                A = o,
                N = 1,
                P = A.m,
                I = A.gc[A.ab],
                L = b(P, 2);
              if (A.Oc & (1 << L)) u = 0;
              else {
                switch (
                  ((A.Oc |= 1 << L),
                  (I.hc = L),
                  (I.Ea = w[0]),
                  (I.nc = x[0]),
                  (I.K = [null]),
                  ++A.ab,
                  e(4 >= A.ab),
                  L)
                ) {
                  case 0:
                  case 1:
                    ((I.b = b(P, 3) + 2),
                      (N = Lt(k(I.Ea, I.b), k(I.nc, I.b), 0, A, I.K)),
                      (I.K = I.K[0]));
                    break;
                  case 3:
                    var C,
                      D = b(P, 8) + 1,
                      _ = 16 < D ? 0 : 4 < D ? 1 : 2 < D ? 2 : 3;
                    if (
                      ((w[0] = k(I.Ea, _)),
                      (I.b = _),
                      (C = N = Lt(D, 1, 0, A, I.K)))
                    ) {
                      var B,
                        T = D,
                        j = I,
                        M = 1 << (8 >> j.b),
                        q = s(M);
                      if (null == q) C = 0;
                      else {
                        var H = j.K[0],
                          V = j.w;
                        for (q[0] = j.K[0][0], B = 1; B < 1 * T; ++B)
                          q[B] = O(H[V + B], q[B - 1]);
                        for (; B < 4 * M; ++B) q[B] = 0;
                        ((j.K[0] = null), (j.K[0] = q), (C = 1));
                      }
                    }
                    N = C;
                    break;
                  case 2:
                    break;
                  default:
                    e(0);
                }
                u = N;
              }
            }
          if (
            ((f = f[0]),
            (p = p[0]),
            u && b(g, 1) && !(u = 1 <= (y = b(g, 4)) && 11 >= y))
          ) {
            o.a = 3;
            break t;
          }
          var U;
          if ((U = u))
            e: {
              var K,
                z,
                W,
                G = o,
                J = f,
                X = p,
                Y = y,
                $ = n,
                Z = G.m,
                Q = G.s,
                tt = [null],
                et = 1,
                rt = 0,
                nt = Qn[Y];
              r: for (;;) {
                if ($ && b(Z, 1)) {
                  var it = b(Z, 3) + 2,
                    st = k(J, it),
                    at = k(X, it),
                    ot = st * at;
                  if (!Lt(st, at, 0, G, tt)) break r;
                  for (tt = tt[0], Q.xc = it, K = 0; K < ot; ++K) {
                    var ht = (tt[K] >> 8) & 65535;
                    ((tt[K] = ht), ht >= et && (et = ht + 1));
                  }
                }
                if (Z.h) break r;
                for (z = 0; 5 > z; ++z) {
                  var ut = Xn[z];
                  (!z && 0 < Y && (ut += 1 << Y), rt < ut && (rt = ut));
                }
                var ct = a(et * nt, l),
                  lt = et,
                  ft = a(lt, d);
                if (null == ft) var dt = null;
                else (e(65536 >= lt), (dt = ft));
                var pt = s(rt);
                if (null == dt || null == pt || null == ct) {
                  G.a = 1;
                  break r;
                }
                var gt = ct;
                for (K = W = 0; K < et; ++K) {
                  var vt = dt[K],
                    mt = vt.G,
                    yt = vt.H,
                    wt = 0,
                    xt = 1,
                    St = 0;
                  for (z = 0; 5 > z; ++z) {
                    ((ut = Xn[z]),
                      (mt[z] = gt),
                      (yt[z] = W),
                      !z && 0 < Y && (ut += 1 << Y));
                    n: {
                      var At,
                        Et = ut,
                        Ft = G,
                        It = pt,
                        Ct = gt,
                        Dt = W,
                        _t = 0,
                        Rt = Ft.m,
                        Bt = b(Rt, 1);
                      if ((i(It, 0, 0, Et), Bt)) {
                        var Tt = b(Rt, 1) + 1,
                          jt = b(Rt, 1),
                          kt = b(Rt, 0 == jt ? 1 : 8);
                        ((It[kt] = 1), 2 == Tt && (It[(kt = b(Rt, 8))] = 1));
                        var Ot = 1;
                      } else {
                        var Mt = s(19),
                          qt = b(Rt, 4) + 4;
                        if (19 < qt) {
                          Ft.a = 3;
                          var Ht = 0;
                          break n;
                        }
                        for (At = 0; At < qt; ++At) Mt[$n[At]] = b(Rt, 3);
                        var Vt = void 0,
                          Ut = void 0,
                          Kt = Ft,
                          zt = Mt,
                          Wt = Et,
                          Gt = It,
                          Jt = 0,
                          Xt = Kt.m,
                          Yt = 8,
                          $t = a(128, l);
                        i: for (; c($t, 0, 7, zt, 19); ) {
                          if (b(Xt, 1)) {
                            var Zt = 2 + 2 * b(Xt, 3);
                            if ((Vt = 2 + b(Xt, Zt)) > Wt) break i;
                          } else Vt = Wt;
                          for (Ut = 0; Ut < Wt && Vt--; ) {
                            F(Xt);
                            var Qt = $t[0 + (127 & S(Xt))];
                            E(Xt, Xt.u + Qt.g);
                            var te = Qt.value;
                            if (16 > te)
                              ((Gt[Ut++] = te), 0 != te && (Yt = te));
                            else {
                              var ee = 16 == te,
                                re = te - 16,
                                ne = Jn[re],
                                ie = b(Xt, Gn[re]) + ne;
                              if (Ut + ie > Wt) break i;
                              for (var se = ee ? Yt : 0; 0 < ie--; )
                                Gt[Ut++] = se;
                            }
                          }
                          Jt = 1;
                          break i;
                        }
                        (Jt || (Kt.a = 3), (Ot = Jt));
                      }
                      ((Ot = Ot && !Rt.h) && (_t = c(Ct, Dt, 8, It, Et)),
                        Ot && 0 != _t ? (Ht = _t) : ((Ft.a = 3), (Ht = 0)));
                    }
                    if (0 == Ht) break r;
                    if (
                      (xt && 1 == Yn[z] && (xt = 0 == gt[W].g),
                      (wt += gt[W].g),
                      (W += Ht),
                      3 >= z)
                    ) {
                      var ae,
                        oe = pt[0];
                      for (ae = 1; ae < ut; ++ae) pt[ae] > oe && (oe = pt[ae]);
                      St += oe;
                    }
                  }
                  if (
                    ((vt.nd = xt),
                    (vt.Qb = 0),
                    xt &&
                      ((vt.qb =
                        ((mt[3][yt[3] + 0].value << 24) |
                          (mt[1][yt[1] + 0].value << 16) |
                          mt[2][yt[2] + 0].value) >>>
                        0),
                      0 == wt &&
                        256 > mt[0][yt[0] + 0].value &&
                        ((vt.Qb = 1), (vt.qb += mt[0][yt[0] + 0].value << 8))),
                    (vt.jc = !vt.Qb && 6 > St),
                    vt.jc)
                  ) {
                    var he,
                      ue = vt;
                    for (he = 0; he < Or; ++he) {
                      var ce = he,
                        le = ue.pd[ce],
                        fe = ue.G[0][ue.H[0] + ce];
                      256 <= fe.value
                        ? ((le.g = fe.g + 256), (le.value = fe.value))
                        : ((le.g = 0),
                          (le.value = 0),
                          (ce >>= bt(fe, 8, le)),
                          (ce >>= bt(ue.G[1][ue.H[1] + ce], 16, le)),
                          (ce >>= bt(ue.G[2][ue.H[2] + ce], 0, le)),
                          bt(ue.G[3][ue.H[3] + ce], 24, le));
                    }
                  }
                }
                ((Q.vc = tt), (Q.Wb = et), (Q.Ya = dt), (Q.yc = ct), (U = 1));
                break e;
              }
              U = 0;
            }
          if (!(u = U)) {
            o.a = 3;
            break t;
          }
          if (0 < y) {
            if (((v.ua = 1 << y), !R(v.Wa, y))) {
              ((o.a = 1), (u = 0));
              break t;
            }
          } else v.ua = 0;
          var de = o,
            pe = f,
            ge = p,
            ve = de.s,
            me = ve.xc;
          if (
            ((de.c = pe),
            (de.i = ge),
            (ve.md = k(pe, me)),
            (ve.wc = 0 == me ? -1 : (1 << me) - 1),
            n)
          ) {
            o.xb = pi;
            break t;
          }
          if (null == (m = s(f * p))) {
            ((o.a = 1), (u = 0));
            break t;
          }
          u = (u = Nt(o, m, 0, f, p, p, null)) && !g.h;
          break t;
        }
        return (
          u
            ? (null != h ? (h[0] = m) : (e(null == m), e(n)),
              (o.$ = 0),
              n || Pt(v))
            : Pt(v),
          u
        );
      }
      function Ct(t, r) {
        var n = t.c * t.i,
          i = n + r + 16 * r;
        return (
          e(t.c <= r),
          (t.V = s(i)),
          null == t.V
            ? ((t.Ta = null), (t.Ua = 0), (t.a = 1), 0)
            : ((t.Ta = t.V), (t.Ua = t.Ba + n + r), 1)
        );
      }
      function Dt(t, r) {
        var n = t.C,
          i = r - n,
          s = t.V,
          a = t.Ba + t.c * n;
        for (e(r <= t.l.o); 0 < i; ) {
          var o = 16 < i ? 16 : i,
            h = t.l.ma,
            u = t.l.width,
            c = u * o,
            l = h.ca,
            f = h.tb + u * n,
            d = t.Ta,
            p = t.Ua;
          (xt(t, o, s, a),
            Nn(d, p, l, f, c),
            Et(h, n, n + o, l, f, u),
            (i -= o),
            (s += o * t.c),
            (n += o));
        }
        (e(n == r), (t.C = t.Ma = r));
      }
      function _t() {
        this.ub = this.yd = this.td = this.Rb = 0;
      }
      function Rt() {
        this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
      }
      function Bt() {
        ((this.Fb = this.Bb = this.Cb = 0), (this.Zb = s(4)), (this.Lb = s(4)));
      }
      function Tt() {
        this.Yb = (function () {
          var t = [];
          return (
            (function t(e, r, n) {
              for (
                var i = n[r], s = 0;
                s < i &&
                (e.push(n.length > r + 1 ? [] : 0), !(n.length < r + 1));
                s++
              )
                t(e[s], r + 1, n);
            })(t, 0, [3, 11]),
            t
          );
        })();
      }
      function jt() {
        ((this.jb = s(3)),
          (this.Wc = o([4, 8], Tt)),
          (this.Xc = o([4, 17], Tt)));
      }
      function kt() {
        ((this.Pc = this.wb = this.Tb = this.zd = 0),
          (this.vd = new s(4)),
          (this.od = new s(4)));
      }
      function Ot() {
        this.ld = this.La = this.dd = this.tc = 0;
      }
      function Mt() {
        this.Na = this.la = 0;
      }
      function qt() {
        ((this.Sc = [0, 0]),
          (this.Eb = [0, 0]),
          (this.Qc = [0, 0]),
          (this.ia = this.lc = 0));
      }
      function Ht() {
        ((this.ad = s(384)),
          (this.Za = 0),
          (this.Ob = s(16)),
          (this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0));
      }
      function Vt() {
        ((this.uc = this.M = this.Nb = 0),
          (this.wa = Array(new Ot())),
          (this.Y = 0),
          (this.ya = Array(new Ht())),
          (this.aa = 0),
          (this.l = new Wt()));
      }
      function Ut() {
        ((this.y = s(16)), (this.f = s(8)), (this.ea = s(8)));
      }
      function Kt() {
        ((this.cb = this.a = 0),
          (this.sc = ""),
          (this.m = new w()),
          (this.Od = new _t()),
          (this.Kc = new Rt()),
          (this.ed = new kt()),
          (this.Qa = new Bt()),
          (this.Ic = this.$c = this.Aa = 0),
          (this.D = new Vt()),
          (this.Xb =
            this.Va =
            this.Hb =
            this.zb =
            this.yb =
            this.Ub =
            this.za =
              0),
          (this.Jc = a(8, w)),
          (this.ia = 0),
          (this.pb = a(4, qt)),
          (this.Pa = new jt()),
          (this.Bd = this.kc = 0),
          (this.Ac = []),
          (this.Bc = 0),
          (this.zc = [0, 0, 0, 0]),
          (this.Gd = Array(new Ut())),
          (this.Hd = 0),
          (this.rb = Array(new Mt())),
          (this.sb = 0),
          (this.wa = Array(new Ot())),
          (this.Y = 0),
          (this.oc = []),
          (this.pc = 0),
          (this.sa = []),
          (this.ta = 0),
          (this.qa = []),
          (this.ra = 0),
          (this.Ha = []),
          (this.B = this.R = this.Ia = 0),
          (this.Ec = []),
          (this.M = this.ja = this.Vb = this.Fc = 0),
          (this.ya = Array(new Ht())),
          (this.L = this.aa = 0),
          (this.gd = o([4, 2], Ot)),
          (this.ga = null),
          (this.Fa = []),
          (this.Cc = this.qc = this.P = 0),
          (this.Gb = []),
          (this.Uc = 0),
          (this.mb = []),
          (this.nb = 0),
          (this.rc = []),
          (this.Ga = this.Vc = 0));
      }
      function zt(t, e) {
        return 0 > t ? 0 : t > e ? e : t;
      }
      function Wt() {
        ((this.T = this.U = this.ka = this.height = this.width = 0),
          (this.y = []),
          (this.f = []),
          (this.ea = []),
          (this.Rc = this.fa = this.W = this.N = this.O = 0),
          (this.ma = "void"),
          (this.put = "VP8IoPutHook"),
          (this.ac = "VP8IoSetupHook"),
          (this.bc = "VP8IoTeardownHook"),
          (this.ha = this.Kb = 0),
          (this.data = []),
          (this.hb =
            this.ib =
            this.da =
            this.o =
            this.j =
            this.va =
            this.v =
            this.Da =
            this.ob =
            this.w =
              0),
          (this.F = []),
          (this.J = 0));
      }
      function Gt() {
        var t = new Kt();
        return (
          null != t &&
            ((t.a = 0), (t.sc = "OK"), (t.cb = 0), (t.Xb = 0), ni || (ni = $t)),
          t
        );
      }
      function Jt(t, e, r) {
        return (0 == t.a && ((t.a = e), (t.sc = r), (t.cb = 0)), 0);
      }
      function Xt(t, e, r) {
        return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2];
      }
      function Yt(t, r) {
        if (null == t) return 0;
        if (((t.a = 0), (t.sc = "OK"), null == r))
          return Jt(t, 2, "null VP8Io passed to VP8GetHeaders()");
        var n = r.data,
          s = r.w,
          a = r.ha;
        if (4 > a) return Jt(t, 7, "Truncated header.");
        var o = n[s + 0] | (n[s + 1] << 8) | (n[s + 2] << 16),
          h = t.Od;
        if (
          ((h.Rb = !(1 & o)),
          (h.td = (o >> 1) & 7),
          (h.yd = (o >> 4) & 1),
          (h.ub = o >> 5),
          3 < h.td)
        )
          return Jt(t, 3, "Incorrect keyframe parameters.");
        if (!h.yd) return Jt(t, 4, "Frame not displayable.");
        ((s += 3), (a -= 3));
        var u = t.Kc;
        if (h.Rb) {
          if (7 > a) return Jt(t, 7, "cannot parse picture header");
          if (!Xt(n, s, a)) return Jt(t, 3, "Bad code word");
          ((u.c = 16383 & ((n[s + 4] << 8) | n[s + 3])),
            (u.Td = n[s + 4] >> 6),
            (u.i = 16383 & ((n[s + 6] << 8) | n[s + 5])),
            (u.Ud = n[s + 6] >> 6),
            (s += 7),
            (a -= 7),
            (t.za = (u.c + 15) >> 4),
            (t.Ub = (u.i + 15) >> 4),
            (r.width = u.c),
            (r.height = u.i),
            (r.Da = 0),
            (r.j = 0),
            (r.v = 0),
            (r.va = r.width),
            (r.o = r.height),
            (r.da = 0),
            (r.ib = r.width),
            (r.hb = r.height),
            (r.U = r.width),
            (r.T = r.height),
            i((o = t.Pa).jb, 0, 255, o.jb.length),
            e(null != (o = t.Qa)),
            (o.Cb = 0),
            (o.Bb = 0),
            (o.Fb = 1),
            i(o.Zb, 0, 0, o.Zb.length),
            i(o.Lb, 0, 0, o.Lb));
        }
        if (h.ub > a) return Jt(t, 7, "bad partition length");
        (p((o = t.m), n, s, h.ub),
          (s += h.ub),
          (a -= h.ub),
          h.Rb && ((u.Ld = P(o)), (u.Kd = P(o))),
          (u = t.Qa));
        var c,
          l = t.Pa;
        if ((e(null != o), e(null != u), (u.Cb = P(o)), u.Cb)) {
          if (((u.Bb = P(o)), P(o))) {
            for (u.Fb = P(o), c = 0; 4 > c; ++c) u.Zb[c] = P(o) ? v(o, 7) : 0;
            for (c = 0; 4 > c; ++c) u.Lb[c] = P(o) ? v(o, 6) : 0;
          }
          if (u.Bb) for (c = 0; 3 > c; ++c) l.jb[c] = P(o) ? g(o, 8) : 255;
        } else u.Bb = 0;
        if (o.Ka) return Jt(t, 3, "cannot parse segment header");
        if (
          (((u = t.ed).zd = P(o)),
          (u.Tb = g(o, 6)),
          (u.wb = g(o, 3)),
          (u.Pc = P(o)),
          u.Pc && P(o))
        ) {
          for (l = 0; 4 > l; ++l) P(o) && (u.vd[l] = v(o, 6));
          for (l = 0; 4 > l; ++l) P(o) && (u.od[l] = v(o, 6));
        }
        if (((t.L = 0 == u.Tb ? 0 : u.zd ? 1 : 2), o.Ka))
          return Jt(t, 3, "cannot parse filter header");
        var f = a;
        if (
          ((a = c = s),
          (s = c + f),
          (u = f),
          (t.Xb = (1 << g(t.m, 2)) - 1),
          f < 3 * (l = t.Xb))
        )
          n = 7;
        else {
          for (c += 3 * l, u -= 3 * l, f = 0; f < l; ++f) {
            var d = n[a + 0] | (n[a + 1] << 8) | (n[a + 2] << 16);
            (d > u && (d = u),
              p(t.Jc[+f], n, c, d),
              (c += d),
              (u -= d),
              (a += 3));
          }
          (p(t.Jc[+l], n, c, u), (n = c < s ? 0 : 5));
        }
        if (0 != n) return Jt(t, n, "cannot parse partitions");
        for (
          n = g((c = t.m), 7),
            a = P(c) ? v(c, 4) : 0,
            s = P(c) ? v(c, 4) : 0,
            u = P(c) ? v(c, 4) : 0,
            l = P(c) ? v(c, 4) : 0,
            c = P(c) ? v(c, 4) : 0,
            f = t.Qa,
            d = 0;
          4 > d;
          ++d
        ) {
          if (f.Cb) {
            var m = f.Zb[d];
            f.Fb || (m += n);
          } else {
            if (0 < d) {
              t.pb[d] = t.pb[0];
              continue;
            }
            m = n;
          }
          var y = t.pb[d];
          ((y.Sc[0] = ei[zt(m + a, 127)]),
            (y.Sc[1] = ri[zt(m + 0, 127)]),
            (y.Eb[0] = 2 * ei[zt(m + s, 127)]),
            (y.Eb[1] = (101581 * ri[zt(m + u, 127)]) >> 16),
            8 > y.Eb[1] && (y.Eb[1] = 8),
            (y.Qc[0] = ei[zt(m + l, 117)]),
            (y.Qc[1] = ri[zt(m + c, 127)]),
            (y.lc = m + c));
        }
        if (!h.Rb) return Jt(t, 4, "Not a key frame.");
        for (P(o), h = t.Pa, n = 0; 4 > n; ++n) {
          for (a = 0; 8 > a; ++a)
            for (s = 0; 3 > s; ++s)
              for (u = 0; 11 > u; ++u)
                ((l = I(o, ui[n][a][s][u]) ? g(o, 8) : oi[n][a][s][u]),
                  (h.Wc[n][a].Yb[s][u] = l));
          for (a = 0; 17 > a; ++a) h.Xc[n][a] = h.Wc[n][ci[a]];
        }
        return ((t.kc = P(o)), t.kc && (t.Bd = g(o, 8)), (t.cb = 1));
      }
      function $t(t, e, r, n, i, s, a) {
        var o = e[i].Yb[r];
        for (r = 0; 16 > i; ++i) {
          if (!I(t, o[r + 0])) return i;
          for (; !I(t, o[r + 1]); )
            if (((o = e[++i].Yb[0]), (r = 0), 16 == i)) return 16;
          var h = e[i + 1].Yb;
          if (I(t, o[r + 2])) {
            var u = t,
              c = 0;
            if (I(u, (f = o)[(l = r) + 3]))
              if (I(u, f[l + 6])) {
                for (
                  o = 0,
                    l = 2 * (c = I(u, f[l + 8])) + (f = I(u, f[l + 9 + c])),
                    c = 0,
                    f = ii[l];
                  f[o];
                  ++o
                )
                  c += c + I(u, f[o]);
                c += 3 + (8 << l);
              } else
                I(u, f[l + 7])
                  ? ((c = 7 + 2 * I(u, 165)), (c += I(u, 145)))
                  : (c = 5 + I(u, 159));
            else c = I(u, f[l + 4]) ? 3 + I(u, f[l + 5]) : 2;
            o = h[2];
          } else ((c = 1), (o = h[1]));
          ((h = a + si[i]), 0 > (u = t).b && N(u));
          var l,
            f = u.b,
            d = ((l = u.Ca >> 1) - (u.I >> f)) >> 31;
          (--u.b,
            (u.Ca += d),
            (u.Ca |= 1),
            (u.I -= ((l + 1) & d) << f),
            (s[h] = ((c ^ d) - d) * n[(0 < i) + 0]));
        }
        return 16;
      }
      function Zt(t) {
        var e = t.rb[t.sb - 1];
        ((e.la = 0), (e.Na = 0), i(t.zc, 0, 0, t.zc.length), (t.ja = 0));
      }
      function Qt(t, r) {
        if (null == t) return 0;
        if (null == r) return Jt(t, 2, "NULL VP8Io parameter in VP8Decode().");
        if (!t.cb && !Yt(t, r)) return 0;
        if ((e(t.cb), null == r.ac || r.ac(r))) {
          r.ob && (t.L = 0);
          var o = Mi[t.L];
          if (
            (2 == t.L
              ? ((t.yb = 0), (t.zb = 0))
              : ((t.yb = (r.v - o) >> 4),
                (t.zb = (r.j - o) >> 4),
                0 > t.yb && (t.yb = 0),
                0 > t.zb && (t.zb = 0)),
            (t.Va = (r.o + 15 + o) >> 4),
            (t.Hb = (r.va + 15 + o) >> 4),
            t.Hb > t.za && (t.Hb = t.za),
            t.Va > t.Ub && (t.Va = t.Ub),
            0 < t.L)
          ) {
            var h = t.ed;
            for (o = 0; 4 > o; ++o) {
              var u;
              if (t.Qa.Cb) {
                var c = t.Qa.Lb[o];
                t.Qa.Fb || (c += h.Tb);
              } else c = h.Tb;
              for (u = 0; 1 >= u; ++u) {
                var l = t.gd[o][u],
                  f = c;
                if (
                  (h.Pc && ((f += h.vd[0]), u && (f += h.od[0])),
                  0 < (f = 0 > f ? 0 : 63 < f ? 63 : f))
                ) {
                  var d = f;
                  (0 < h.wb &&
                    (d = 4 < h.wb ? d >> 2 : d >> 1) > 9 - h.wb &&
                    (d = 9 - h.wb),
                    1 > d && (d = 1),
                    (l.dd = d),
                    (l.tc = 2 * f + d),
                    (l.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0));
                } else l.tc = 0;
                l.La = u;
              }
            }
          }
          o = 0;
        } else (Jt(t, 6, "Frame setup failed"), (o = t.a));
        if ((o = 0 == o)) {
          if (o) {
            ((t.$c = 0), 0 < t.Aa || (t.Ic = Hi));
            t: {
              ((o = t.Ic), (h = 4 * (d = t.za)));
              var p = 32 * d,
                g = d + 1,
                v = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0,
                m = (2 == t.Aa ? 2 : 1) * d;
              if (
                (l =
                  h +
                  832 +
                  (u = ((3 * (16 * o + Mi[t.L])) / 2) * p) +
                  (c =
                    null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != l
              )
                o = 0;
              else {
                if (l > t.Vb) {
                  if (((t.Vb = 0), (t.Ec = s(l)), (t.Fc = 0), null == t.Ec)) {
                    o = Jt(t, 1, "no memory during frame initialization.");
                    break t;
                  }
                  t.Vb = l;
                }
                ((l = t.Ec),
                  (f = t.Fc),
                  (t.Ac = l),
                  (t.Bc = f),
                  (f += h),
                  (t.Gd = a(p, Ut)),
                  (t.Hd = 0),
                  (t.rb = a(g + 1, Mt)),
                  (t.sb = 1),
                  (t.wa = v ? a(v, Ot) : null),
                  (t.Y = 0),
                  (t.D.Nb = 0),
                  (t.D.wa = t.wa),
                  (t.D.Y = t.Y),
                  0 < t.Aa && (t.D.Y += d),
                  e(!0),
                  (t.oc = l),
                  (t.pc = f),
                  (f += 832),
                  (t.ya = a(m, Ht)),
                  (t.aa = 0),
                  (t.D.ya = t.ya),
                  (t.D.aa = t.aa),
                  2 == t.Aa && (t.D.aa += d),
                  (t.R = 16 * d),
                  (t.B = 8 * d),
                  (d = (p = Mi[t.L]) * t.R),
                  (p = (p / 2) * t.B),
                  (t.sa = l),
                  (t.ta = f + d),
                  (t.qa = t.sa),
                  (t.ra = t.ta + 16 * o * t.R + p),
                  (t.Ha = t.qa),
                  (t.Ia = t.ra + 8 * o * t.B + p),
                  (t.$c = 0),
                  (f += u),
                  (t.mb = c ? l : null),
                  (t.nb = c ? f : null),
                  e(f + c <= t.Fc + t.Vb),
                  Zt(t),
                  i(t.Ac, t.Bc, 0, h),
                  (o = 1));
              }
            }
            if (o) {
              if (
                ((r.ka = 0),
                (r.y = t.sa),
                (r.O = t.ta),
                (r.f = t.qa),
                (r.N = t.ra),
                (r.ea = t.Ha),
                (r.Vd = t.Ia),
                (r.fa = t.R),
                (r.Rc = t.B),
                (r.F = null),
                (r.J = 0),
                !Dn)
              ) {
                for (o = -255; 255 >= o; ++o) Pn[255 + o] = 0 > o ? -o : o;
                for (o = -1020; 1020 >= o; ++o)
                  In[1020 + o] = -128 > o ? -128 : 127 < o ? 127 : o;
                for (o = -112; 112 >= o; ++o)
                  Ln[112 + o] = -16 > o ? -16 : 15 < o ? 15 : o;
                for (o = -255; 510 >= o; ++o)
                  Cn[255 + o] = 0 > o ? 0 : 255 < o ? 255 : o;
                Dn = 1;
              }
              ((sn = ue),
                (an = se),
                (hn = ae),
                (un = oe),
                (cn = he),
                (on = ie),
                (ln = Je),
                (fn = Xe),
                (dn = Ze),
                (pn = Qe),
                (gn = Ye),
                (vn = $e),
                (mn = tr),
                (yn = er),
                (bn = Ve),
                (wn = Ue),
                (xn = Ke),
                (Sn = ze),
                (fi[0] = Ee),
                (fi[1] = le),
                (fi[2] = Se),
                (fi[3] = Ae),
                (fi[4] = Fe),
                (fi[5] = Pe),
                (fi[6] = Ne),
                (fi[7] = Ie),
                (fi[8] = Ce),
                (fi[9] = Le),
                (li[0] = me),
                (li[1] = de),
                (li[2] = pe),
                (li[3] = ge),
                (li[4] = ye),
                (li[5] = be),
                (li[6] = we),
                (di[0] = Be),
                (di[1] = fe),
                (di[2] = De),
                (di[3] = _e),
                (di[4] = je),
                (di[5] = Te),
                (di[6] = ke),
                (o = 1));
            } else o = 0;
          }
          (o &&
            (o = (function (t, r) {
              for (t.M = 0; t.M < t.Va; ++t.M) {
                var a,
                  o = t.Jc[t.M & t.Xb],
                  h = t.m,
                  u = t;
                for (a = 0; a < u.za; ++a) {
                  var c = h,
                    l = u,
                    f = l.Ac,
                    d = l.Bc + 4 * a,
                    p = l.zc,
                    g = l.ya[l.aa + a];
                  if (
                    (l.Qa.Bb
                      ? (g.$b = I(c, l.Pa.jb[0])
                          ? 2 + I(c, l.Pa.jb[2])
                          : I(c, l.Pa.jb[1]))
                      : (g.$b = 0),
                    l.kc && (g.Ad = I(c, l.Bd)),
                    (g.Za = !I(c, 145) + 0),
                    g.Za)
                  ) {
                    var v = g.Ob,
                      m = 0;
                    for (l = 0; 4 > l; ++l) {
                      var y,
                        b = p[0 + l];
                      for (y = 0; 4 > y; ++y) {
                        b = hi[f[d + y]][b];
                        for (var w = ai[I(c, b[0])]; 0 < w; )
                          w = ai[2 * w + I(c, b[w])];
                        ((b = -w), (f[d + y] = b));
                      }
                      (n(v, m, f, d, 4), (m += 4), (p[0 + l] = b));
                    }
                  } else
                    ((b = I(c, 156) ? (I(c, 128) ? 1 : 3) : I(c, 163) ? 2 : 0),
                      (g.Ob[0] = b),
                      i(f, d, b, 4),
                      i(p, 0, b, 4));
                  g.Dd = I(c, 142) ? (I(c, 114) ? (I(c, 183) ? 1 : 3) : 2) : 0;
                }
                if (u.m.Ka)
                  return Jt(t, 7, "Premature end-of-partition0 encountered.");
                for (; t.ja < t.za; ++t.ja) {
                  if (
                    ((u = o),
                    (c = (h = t).rb[h.sb - 1]),
                    (f = h.rb[h.sb + h.ja]),
                    (a = h.ya[h.aa + h.ja]),
                    (d = h.kc ? a.Ad : 0))
                  )
                    ((c.la = f.la = 0),
                      a.Za || (c.Na = f.Na = 0),
                      (a.Hc = 0),
                      (a.Gc = 0),
                      (a.ia = 0));
                  else {
                    var x, S;
                    if (
                      ((c = f),
                      (f = u),
                      (d = h.Pa.Xc),
                      (p = h.ya[h.aa + h.ja]),
                      (g = h.pb[p.$b]),
                      (l = p.ad),
                      (v = 0),
                      (m = h.rb[h.sb - 1]),
                      (b = y = 0),
                      i(l, v, 0, 384),
                      p.Za)
                    )
                      var A = 0,
                        E = d[3];
                    else {
                      w = s(16);
                      var F = c.Na + m.Na;
                      if (
                        ((F = ni(f, d[1], F, g.Eb, 0, w, 0)),
                        (c.Na = m.Na = (0 < F) + 0),
                        1 < F)
                      )
                        sn(w, 0, l, v);
                      else {
                        var N = (w[0] + 3) >> 3;
                        for (w = 0; 256 > w; w += 16) l[v + w] = N;
                      }
                      ((A = 1), (E = d[0]));
                    }
                    var P = 15 & c.la,
                      L = 15 & m.la;
                    for (w = 0; 4 > w; ++w) {
                      var C = 1 & L;
                      for (N = S = 0; 4 > N; ++N)
                        ((P =
                          (P >> 1) |
                          ((C =
                            (F = ni(f, E, (F = C + (1 & P)), g.Sc, A, l, v)) >
                            A) <<
                            7)),
                          (S =
                            (S << 2) | (3 < F ? 3 : 1 < F ? 2 : 0 != l[v + 0])),
                          (v += 16));
                      ((P >>= 4),
                        (L = (L >> 1) | (C << 7)),
                        (y = ((y << 8) | S) >>> 0));
                    }
                    for (E = P, A = L >> 4, x = 0; 4 > x; x += 2) {
                      for (
                        S = 0, P = c.la >> (4 + x), L = m.la >> (4 + x), w = 0;
                        2 > w;
                        ++w
                      ) {
                        for (C = 1 & L, N = 0; 2 > N; ++N)
                          ((F = C + (1 & P)),
                            (P =
                              (P >> 1) |
                              ((C = 0 < (F = ni(f, d[2], F, g.Qc, 0, l, v))) <<
                                3)),
                            (S =
                              (S << 2) |
                              (3 < F ? 3 : 1 < F ? 2 : 0 != l[v + 0])),
                            (v += 16));
                        ((P >>= 2), (L = (L >> 1) | (C << 5)));
                      }
                      ((b |= S << (4 * x)),
                        (E |= (P << 4) << x),
                        (A |= (240 & L) << x));
                    }
                    ((c.la = E),
                      (m.la = A),
                      (p.Hc = y),
                      (p.Gc = b),
                      (p.ia = 43690 & b ? 0 : g.ia),
                      (d = !(y | b)));
                  }
                  if (
                    (0 < h.L &&
                      ((h.wa[h.Y + h.ja] = h.gd[a.$b][a.Za]),
                      (h.wa[h.Y + h.ja].La |= !d)),
                    u.Ka)
                  )
                    return Jt(t, 7, "Premature end-of-file encountered.");
                }
                if (
                  (Zt(t),
                  (h = r),
                  (u = 1),
                  (a = (o = t).D),
                  (c = 0 < o.L && o.M >= o.zb && o.M <= o.Va),
                  0 == o.Aa)
                )
                  t: {
                    if (
                      ((a.M = o.M),
                      (a.uc = c),
                      Rr(o, a),
                      (u = 1),
                      (a = (S = o.D).Nb),
                      (c = (b = Mi[o.L]) * o.R),
                      (f = (b / 2) * o.B),
                      (w = 16 * a * o.R),
                      (N = 8 * a * o.B),
                      (d = o.sa),
                      (p = o.ta - c + w),
                      (g = o.qa),
                      (l = o.ra - f + N),
                      (v = o.Ha),
                      (m = o.Ia - f + N),
                      (L = 0 == (P = S.M)),
                      (y = P >= o.Va - 1),
                      2 == o.Aa && Rr(o, S),
                      S.uc)
                    )
                      for (
                        C = (F = o).D.M, e(F.D.uc), S = F.yb;
                        S < F.Hb;
                        ++S
                      ) {
                        ((A = S), (E = C));
                        var D = (_ = (H = F).D).Nb;
                        x = H.R;
                        var _ = _.wa[_.Y + A],
                          R = H.sa,
                          B = H.ta + 16 * D * x + 16 * A,
                          T = _.dd,
                          j = _.tc;
                        if (0 != j)
                          if ((e(3 <= j), 1 == H.L))
                            (0 < A && wn(R, B, x, j + 4),
                              _.La && Sn(R, B, x, j),
                              0 < E && bn(R, B, x, j + 4),
                              _.La && xn(R, B, x, j));
                          else {
                            var k = H.B,
                              O = H.qa,
                              M = H.ra + 8 * D * k + 8 * A,
                              q = H.Ha,
                              H = H.Ia + 8 * D * k + 8 * A;
                            ((D = _.ld),
                              0 < A &&
                                (fn(R, B, x, j + 4, T, D),
                                pn(O, M, q, H, k, j + 4, T, D)),
                              _.La &&
                                (vn(R, B, x, j, T, D),
                                yn(O, M, q, H, k, j, T, D)),
                              0 < E &&
                                (ln(R, B, x, j + 4, T, D),
                                dn(O, M, q, H, k, j + 4, T, D)),
                              _.La &&
                                (gn(R, B, x, j, T, D),
                                mn(O, M, q, H, k, j, T, D)));
                          }
                      }
                    if ((o.ia && alert("todo:DitherRow"), null != h.put)) {
                      if (
                        ((S = 16 * P),
                        (P = 16 * (P + 1)),
                        L
                          ? ((h.y = o.sa),
                            (h.O = o.ta + w),
                            (h.f = o.qa),
                            (h.N = o.ra + N),
                            (h.ea = o.Ha),
                            (h.W = o.Ia + N))
                          : ((S -= b),
                            (h.y = d),
                            (h.O = p),
                            (h.f = g),
                            (h.N = l),
                            (h.ea = v),
                            (h.W = m)),
                        y || (P -= b),
                        P > h.o && (P = h.o),
                        (h.F = null),
                        (h.J = null),
                        null != o.Fa &&
                          0 < o.Fa.length &&
                          S < P &&
                          ((h.J = lr(o, h, S, P - S)),
                          (h.F = o.mb),
                          null == h.F && 0 == h.F.length))
                      ) {
                        u = Jt(o, 3, "Could not decode alpha data.");
                        break t;
                      }
                      (S < h.j &&
                        ((b = h.j - S),
                        (S = h.j),
                        e(!(1 & b)),
                        (h.O += o.R * b),
                        (h.N += o.B * (b >> 1)),
                        (h.W += o.B * (b >> 1)),
                        null != h.F && (h.J += h.width * b)),
                        S < P &&
                          ((h.O += h.v),
                          (h.N += h.v >> 1),
                          (h.W += h.v >> 1),
                          null != h.F && (h.J += h.v),
                          (h.ka = S - h.j),
                          (h.U = h.va - h.v),
                          (h.T = P - S),
                          (u = h.put(h))));
                    }
                    a + 1 != o.Ic ||
                      y ||
                      (n(o.sa, o.ta - c, d, p + 16 * o.R, c),
                      n(o.qa, o.ra - f, g, l + 8 * o.B, f),
                      n(o.Ha, o.Ia - f, v, m + 8 * o.B, f));
                  }
                if (!u) return Jt(t, 6, "Output aborted.");
              }
              return 1;
            })(t, r)),
            null != r.bc && r.bc(r),
            (o &= 1));
        }
        return o ? ((t.cb = 0), o) : 0;
      }
      function te(t, e, r, n, i) {
        ((i = t[e + r + 32 * n] + (i >> 3)),
          (t[e + r + 32 * n] = -256 & i ? (0 > i ? 0 : 255) : i));
      }
      function ee(t, e, r, n, i, s) {
        (te(t, e, 0, r, n + i),
          te(t, e, 1, r, n + s),
          te(t, e, 2, r, n - s),
          te(t, e, 3, r, n - i));
      }
      function re(t) {
        return ((20091 * t) >> 16) + t;
      }
      function ne(t, e, r, n) {
        var i,
          a = 0,
          o = s(16);
        for (i = 0; 4 > i; ++i) {
          var h = t[e + 0] + t[e + 8],
            u = t[e + 0] - t[e + 8],
            c = ((35468 * t[e + 4]) >> 16) - re(t[e + 12]),
            l = re(t[e + 4]) + ((35468 * t[e + 12]) >> 16);
          ((o[a + 0] = h + l),
            (o[a + 1] = u + c),
            (o[a + 2] = u - c),
            (o[a + 3] = h - l),
            (a += 4),
            e++);
        }
        for (i = a = 0; 4 > i; ++i)
          ((h = (t = o[a + 0] + 4) + o[a + 8]),
            (u = t - o[a + 8]),
            (c = ((35468 * o[a + 4]) >> 16) - re(o[a + 12])),
            te(
              r,
              n,
              0,
              0,
              h + (l = re(o[a + 4]) + ((35468 * o[a + 12]) >> 16)),
            ),
            te(r, n, 1, 0, u + c),
            te(r, n, 2, 0, u - c),
            te(r, n, 3, 0, h - l),
            a++,
            (n += 32));
      }
      function ie(t, e, r, n) {
        var i = t[e + 0] + 4,
          s = (35468 * t[e + 4]) >> 16,
          a = re(t[e + 4]),
          o = (35468 * t[e + 1]) >> 16;
        (ee(r, n, 0, i + a, (t = re(t[e + 1])), o),
          ee(r, n, 1, i + s, t, o),
          ee(r, n, 2, i - s, t, o),
          ee(r, n, 3, i - a, t, o));
      }
      function se(t, e, r, n, i) {
        (ne(t, e, r, n), i && ne(t, e + 16, r, n + 4));
      }
      function ae(t, e, r, n) {
        (an(t, e + 0, r, n, 1), an(t, e + 32, r, n + 128, 1));
      }
      function oe(t, e, r, n) {
        var i;
        for (t = t[e + 0] + 4, i = 0; 4 > i; ++i)
          for (e = 0; 4 > e; ++e) te(r, n, e, i, t);
      }
      function he(t, e, r, n) {
        (t[e + 0] && un(t, e + 0, r, n),
          t[e + 16] && un(t, e + 16, r, n + 4),
          t[e + 32] && un(t, e + 32, r, n + 128),
          t[e + 48] && un(t, e + 48, r, n + 128 + 4));
      }
      function ue(t, e, r, n) {
        var i,
          a = s(16);
        for (i = 0; 4 > i; ++i) {
          var o = t[e + 0 + i] + t[e + 12 + i],
            h = t[e + 4 + i] + t[e + 8 + i],
            u = t[e + 4 + i] - t[e + 8 + i],
            c = t[e + 0 + i] - t[e + 12 + i];
          ((a[0 + i] = o + h),
            (a[8 + i] = o - h),
            (a[4 + i] = c + u),
            (a[12 + i] = c - u));
        }
        for (i = 0; 4 > i; ++i)
          ((o = (t = a[0 + 4 * i] + 3) + a[3 + 4 * i]),
            (h = a[1 + 4 * i] + a[2 + 4 * i]),
            (u = a[1 + 4 * i] - a[2 + 4 * i]),
            (c = t - a[3 + 4 * i]),
            (r[n + 0] = (o + h) >> 3),
            (r[n + 16] = (c + u) >> 3),
            (r[n + 32] = (o - h) >> 3),
            (r[n + 48] = (c - u) >> 3),
            (n += 64));
      }
      function ce(t, e, r) {
        var n,
          i = e - 32,
          s = Bn,
          a = 255 - t[i - 1];
        for (n = 0; n < r; ++n) {
          var o,
            h = s,
            u = a + t[e - 1];
          for (o = 0; o < r; ++o) t[e + o] = h[u + t[i + o]];
          e += 32;
        }
      }
      function le(t, e) {
        ce(t, e, 4);
      }
      function fe(t, e) {
        ce(t, e, 8);
      }
      function de(t, e) {
        ce(t, e, 16);
      }
      function pe(t, e) {
        var r;
        for (r = 0; 16 > r; ++r) n(t, e + 32 * r, t, e - 32, 16);
      }
      function ge(t, e) {
        var r;
        for (r = 16; 0 < r; --r) (i(t, e, t[e - 1], 16), (e += 32));
      }
      function ve(t, e, r) {
        var n;
        for (n = 0; 16 > n; ++n) i(e, r + 32 * n, t, 16);
      }
      function me(t, e) {
        var r,
          n = 16;
        for (r = 0; 16 > r; ++r) n += t[e - 1 + 32 * r] + t[e + r - 32];
        ve(n >> 5, t, e);
      }
      function ye(t, e) {
        var r,
          n = 8;
        for (r = 0; 16 > r; ++r) n += t[e - 1 + 32 * r];
        ve(n >> 4, t, e);
      }
      function be(t, e) {
        var r,
          n = 8;
        for (r = 0; 16 > r; ++r) n += t[e + r - 32];
        ve(n >> 4, t, e);
      }
      function we(t, e) {
        ve(128, t, e);
      }
      function xe(t, e, r) {
        return (t + 2 * e + r + 2) >> 2;
      }
      function Se(t, e) {
        var r,
          i = e - 32;
        for (
          i = new Uint8Array([
            xe(t[i - 1], t[i + 0], t[i + 1]),
            xe(t[i + 0], t[i + 1], t[i + 2]),
            xe(t[i + 1], t[i + 2], t[i + 3]),
            xe(t[i + 2], t[i + 3], t[i + 4]),
          ]),
            r = 0;
          4 > r;
          ++r
        )
          n(t, e + 32 * r, i, 0, i.length);
      }
      function Ae(t, e) {
        var r = t[e - 1],
          n = t[e - 1 + 32],
          i = t[e - 1 + 64],
          s = t[e - 1 + 96];
        (L(t, e + 0, 16843009 * xe(t[e - 1 - 32], r, n)),
          L(t, e + 32, 16843009 * xe(r, n, i)),
          L(t, e + 64, 16843009 * xe(n, i, s)),
          L(t, e + 96, 16843009 * xe(i, s, s)));
      }
      function Ee(t, e) {
        var r,
          n = 4;
        for (r = 0; 4 > r; ++r) n += t[e + r - 32] + t[e - 1 + 32 * r];
        for (n >>= 3, r = 0; 4 > r; ++r) i(t, e + 32 * r, n, 4);
      }
      function Fe(t, e) {
        var r = t[e - 1 + 0],
          n = t[e - 1 + 32],
          i = t[e - 1 + 64],
          s = t[e - 1 - 32],
          a = t[e + 0 - 32],
          o = t[e + 1 - 32],
          h = t[e + 2 - 32],
          u = t[e + 3 - 32];
        ((t[e + 0 + 96] = xe(n, i, t[e - 1 + 96])),
          (t[e + 1 + 96] = t[e + 0 + 64] = xe(r, n, i)),
          (t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = xe(s, r, n)),
          (t[e + 3 + 96] =
            t[e + 2 + 64] =
            t[e + 1 + 32] =
            t[e + 0 + 0] =
              xe(a, s, r)),
          (t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = xe(o, a, s)),
          (t[e + 3 + 32] = t[e + 2 + 0] = xe(h, o, a)),
          (t[e + 3 + 0] = xe(u, h, o)));
      }
      function Ne(t, e) {
        var r = t[e + 1 - 32],
          n = t[e + 2 - 32],
          i = t[e + 3 - 32],
          s = t[e + 4 - 32],
          a = t[e + 5 - 32],
          o = t[e + 6 - 32],
          h = t[e + 7 - 32];
        ((t[e + 0 + 0] = xe(t[e + 0 - 32], r, n)),
          (t[e + 1 + 0] = t[e + 0 + 32] = xe(r, n, i)),
          (t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = xe(n, i, s)),
          (t[e + 3 + 0] =
            t[e + 2 + 32] =
            t[e + 1 + 64] =
            t[e + 0 + 96] =
              xe(i, s, a)),
          (t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = xe(s, a, o)),
          (t[e + 3 + 64] = t[e + 2 + 96] = xe(a, o, h)),
          (t[e + 3 + 96] = xe(o, h, h)));
      }
      function Pe(t, e) {
        var r = t[e - 1 + 0],
          n = t[e - 1 + 32],
          i = t[e - 1 + 64],
          s = t[e - 1 - 32],
          a = t[e + 0 - 32],
          o = t[e + 1 - 32],
          h = t[e + 2 - 32],
          u = t[e + 3 - 32];
        ((t[e + 0 + 0] = t[e + 1 + 64] = (s + a + 1) >> 1),
          (t[e + 1 + 0] = t[e + 2 + 64] = (a + o + 1) >> 1),
          (t[e + 2 + 0] = t[e + 3 + 64] = (o + h + 1) >> 1),
          (t[e + 3 + 0] = (h + u + 1) >> 1),
          (t[e + 0 + 96] = xe(i, n, r)),
          (t[e + 0 + 64] = xe(n, r, s)),
          (t[e + 0 + 32] = t[e + 1 + 96] = xe(r, s, a)),
          (t[e + 1 + 32] = t[e + 2 + 96] = xe(s, a, o)),
          (t[e + 2 + 32] = t[e + 3 + 96] = xe(a, o, h)),
          (t[e + 3 + 32] = xe(o, h, u)));
      }
      function Ie(t, e) {
        var r = t[e + 0 - 32],
          n = t[e + 1 - 32],
          i = t[e + 2 - 32],
          s = t[e + 3 - 32],
          a = t[e + 4 - 32],
          o = t[e + 5 - 32],
          h = t[e + 6 - 32],
          u = t[e + 7 - 32];
        ((t[e + 0 + 0] = (r + n + 1) >> 1),
          (t[e + 1 + 0] = t[e + 0 + 64] = (n + i + 1) >> 1),
          (t[e + 2 + 0] = t[e + 1 + 64] = (i + s + 1) >> 1),
          (t[e + 3 + 0] = t[e + 2 + 64] = (s + a + 1) >> 1),
          (t[e + 0 + 32] = xe(r, n, i)),
          (t[e + 1 + 32] = t[e + 0 + 96] = xe(n, i, s)),
          (t[e + 2 + 32] = t[e + 1 + 96] = xe(i, s, a)),
          (t[e + 3 + 32] = t[e + 2 + 96] = xe(s, a, o)),
          (t[e + 3 + 64] = xe(a, o, h)),
          (t[e + 3 + 96] = xe(o, h, u)));
      }
      function Le(t, e) {
        var r = t[e - 1 + 0],
          n = t[e - 1 + 32],
          i = t[e - 1 + 64],
          s = t[e - 1 + 96];
        ((t[e + 0 + 0] = (r + n + 1) >> 1),
          (t[e + 2 + 0] = t[e + 0 + 32] = (n + i + 1) >> 1),
          (t[e + 2 + 32] = t[e + 0 + 64] = (i + s + 1) >> 1),
          (t[e + 1 + 0] = xe(r, n, i)),
          (t[e + 3 + 0] = t[e + 1 + 32] = xe(n, i, s)),
          (t[e + 3 + 32] = t[e + 1 + 64] = xe(i, s, s)),
          (t[e + 3 + 64] =
            t[e + 2 + 64] =
            t[e + 0 + 96] =
            t[e + 1 + 96] =
            t[e + 2 + 96] =
            t[e + 3 + 96] =
              s));
      }
      function Ce(t, e) {
        var r = t[e - 1 + 0],
          n = t[e - 1 + 32],
          i = t[e - 1 + 64],
          s = t[e - 1 + 96],
          a = t[e - 1 - 32],
          o = t[e + 0 - 32],
          h = t[e + 1 - 32],
          u = t[e + 2 - 32];
        ((t[e + 0 + 0] = t[e + 2 + 32] = (r + a + 1) >> 1),
          (t[e + 0 + 32] = t[e + 2 + 64] = (n + r + 1) >> 1),
          (t[e + 0 + 64] = t[e + 2 + 96] = (i + n + 1) >> 1),
          (t[e + 0 + 96] = (s + i + 1) >> 1),
          (t[e + 3 + 0] = xe(o, h, u)),
          (t[e + 2 + 0] = xe(a, o, h)),
          (t[e + 1 + 0] = t[e + 3 + 32] = xe(r, a, o)),
          (t[e + 1 + 32] = t[e + 3 + 64] = xe(n, r, a)),
          (t[e + 1 + 64] = t[e + 3 + 96] = xe(i, n, r)),
          (t[e + 1 + 96] = xe(s, i, n)));
      }
      function De(t, e) {
        var r;
        for (r = 0; 8 > r; ++r) n(t, e + 32 * r, t, e - 32, 8);
      }
      function _e(t, e) {
        var r;
        for (r = 0; 8 > r; ++r) (i(t, e, t[e - 1], 8), (e += 32));
      }
      function Re(t, e, r) {
        var n;
        for (n = 0; 8 > n; ++n) i(e, r + 32 * n, t, 8);
      }
      function Be(t, e) {
        var r,
          n = 8;
        for (r = 0; 8 > r; ++r) n += t[e + r - 32] + t[e - 1 + 32 * r];
        Re(n >> 4, t, e);
      }
      function Te(t, e) {
        var r,
          n = 4;
        for (r = 0; 8 > r; ++r) n += t[e + r - 32];
        Re(n >> 3, t, e);
      }
      function je(t, e) {
        var r,
          n = 4;
        for (r = 0; 8 > r; ++r) n += t[e - 1 + 32 * r];
        Re(n >> 3, t, e);
      }
      function ke(t, e) {
        Re(128, t, e);
      }
      function Oe(t, e, r) {
        var n = t[e - r],
          i = t[e + 0],
          s = 3 * (i - n) + _n[1020 + t[e - 2 * r] - t[e + r]],
          a = Rn[112 + ((s + 4) >> 3)];
        ((t[e - r] = Bn[255 + n + Rn[112 + ((s + 3) >> 3)]]),
          (t[e + 0] = Bn[255 + i - a]));
      }
      function Me(t, e, r, n) {
        var i = t[e + 0],
          s = t[e + r];
        return Tn[255 + t[e - 2 * r] - t[e - r]] > n || Tn[255 + s - i] > n;
      }
      function qe(t, e, r, n) {
        return (
          4 * Tn[255 + t[e - r] - t[e + 0]] +
            Tn[255 + t[e - 2 * r] - t[e + r]] <=
          n
        );
      }
      function He(t, e, r, n, i) {
        var s = t[e - 3 * r],
          a = t[e - 2 * r],
          o = t[e - r],
          h = t[e + 0],
          u = t[e + r],
          c = t[e + 2 * r],
          l = t[e + 3 * r];
        return 4 * Tn[255 + o - h] + Tn[255 + a - u] > n
          ? 0
          : Tn[255 + t[e - 4 * r] - s] <= i &&
              Tn[255 + s - a] <= i &&
              Tn[255 + a - o] <= i &&
              Tn[255 + l - c] <= i &&
              Tn[255 + c - u] <= i &&
              Tn[255 + u - h] <= i;
      }
      function Ve(t, e, r, n) {
        var i = 2 * n + 1;
        for (n = 0; 16 > n; ++n) qe(t, e + n, r, i) && Oe(t, e + n, r);
      }
      function Ue(t, e, r, n) {
        var i = 2 * n + 1;
        for (n = 0; 16 > n; ++n) qe(t, e + n * r, 1, i) && Oe(t, e + n * r, 1);
      }
      function Ke(t, e, r, n) {
        var i;
        for (i = 3; 0 < i; --i) Ve(t, (e += 4 * r), r, n);
      }
      function ze(t, e, r, n) {
        var i;
        for (i = 3; 0 < i; --i) Ue(t, (e += 4), r, n);
      }
      function We(t, e, r, n, i, s, a, o) {
        for (s = 2 * s + 1; 0 < i--; ) {
          if (He(t, e, r, s, a))
            if (Me(t, e, r, o)) Oe(t, e, r);
            else {
              var h = t,
                u = e,
                c = r,
                l = h[u - 2 * c],
                f = h[u - c],
                d = h[u + 0],
                p = h[u + c],
                g = h[u + 2 * c],
                v =
                  (27 * (y = _n[1020 + 3 * (d - f) + _n[1020 + l - p]]) + 63) >>
                  7,
                m = (18 * y + 63) >> 7,
                y = (9 * y + 63) >> 7;
              ((h[u - 3 * c] = Bn[255 + h[u - 3 * c] + y]),
                (h[u - 2 * c] = Bn[255 + l + m]),
                (h[u - c] = Bn[255 + f + v]),
                (h[u + 0] = Bn[255 + d - v]),
                (h[u + c] = Bn[255 + p - m]),
                (h[u + 2 * c] = Bn[255 + g - y]));
            }
          e += n;
        }
      }
      function Ge(t, e, r, n, i, s, a, o) {
        for (s = 2 * s + 1; 0 < i--; ) {
          if (He(t, e, r, s, a))
            if (Me(t, e, r, o)) Oe(t, e, r);
            else {
              var h = t,
                u = e,
                c = r,
                l = h[u - c],
                f = h[u + 0],
                d = h[u + c],
                p = Rn[112 + ((4 + (g = 3 * (f - l))) >> 3)],
                g = Rn[112 + ((g + 3) >> 3)],
                v = (p + 1) >> 1;
              ((h[u - 2 * c] = Bn[255 + h[u - 2 * c] + v]),
                (h[u - c] = Bn[255 + l + g]),
                (h[u + 0] = Bn[255 + f - p]),
                (h[u + c] = Bn[255 + d - v]));
            }
          e += n;
        }
      }
      function Je(t, e, r, n, i, s) {
        We(t, e, r, 1, 16, n, i, s);
      }
      function Xe(t, e, r, n, i, s) {
        We(t, e, 1, r, 16, n, i, s);
      }
      function Ye(t, e, r, n, i, s) {
        var a;
        for (a = 3; 0 < a; --a) Ge(t, (e += 4 * r), r, 1, 16, n, i, s);
      }
      function $e(t, e, r, n, i, s) {
        var a;
        for (a = 3; 0 < a; --a) Ge(t, (e += 4), 1, r, 16, n, i, s);
      }
      function Ze(t, e, r, n, i, s, a, o) {
        (We(t, e, i, 1, 8, s, a, o), We(r, n, i, 1, 8, s, a, o));
      }
      function Qe(t, e, r, n, i, s, a, o) {
        (We(t, e, 1, i, 8, s, a, o), We(r, n, 1, i, 8, s, a, o));
      }
      function tr(t, e, r, n, i, s, a, o) {
        (Ge(t, e + 4 * i, i, 1, 8, s, a, o),
          Ge(r, n + 4 * i, i, 1, 8, s, a, o));
      }
      function er(t, e, r, n, i, s, a, o) {
        (Ge(t, e + 4, 1, i, 8, s, a, o), Ge(r, n + 4, 1, i, 8, s, a, o));
      }
      function rr() {
        ((this.ba = new at()),
          (this.ec = []),
          (this.cc = []),
          (this.Mc = []),
          (this.Dc = this.Nc = this.dc = this.fc = 0),
          (this.Oa = new ht()),
          (this.memory = 0),
          (this.Ib = "OutputFunc"),
          (this.Jb = "OutputAlphaFunc"),
          (this.Nd = "OutputRowFunc"));
      }
      function nr() {
        ((this.data = []),
          (this.offset = this.kd = this.ha = this.w = 0),
          (this.na = []),
          (this.xa = this.gb = this.Ja = this.Sa = this.P = 0));
      }
      function ir() {
        ((this.nc = this.Ea = this.b = this.hc = 0),
          (this.K = []),
          (this.w = 0));
      }
      function sr() {
        ((this.ua = 0),
          (this.Wa = new T()),
          (this.vb = new T()),
          (this.md = this.xc = this.wc = 0),
          (this.vc = []),
          (this.Wb = 0),
          (this.Ya = new d()),
          (this.yc = new l()));
      }
      function ar() {
        ((this.xb = this.a = 0),
          (this.l = new Wt()),
          (this.ca = new at()),
          (this.V = []),
          (this.Ba = 0),
          (this.Ta = []),
          (this.Ua = 0),
          (this.m = new x()),
          (this.Pb = 0),
          (this.wd = new x()),
          (this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
          (this.s = new sr()),
          (this.ab = 0),
          (this.gc = a(4, ir)),
          (this.Oc = 0));
      }
      function or() {
        ((this.Lc = this.Z = this.$a = this.i = this.c = 0),
          (this.l = new Wt()),
          (this.ic = 0),
          (this.ca = []),
          (this.tb = 0),
          (this.qd = null),
          (this.rd = 0));
      }
      function hr(t, e, r, n, i, s, a) {
        for (t = null == t ? 0 : t[e + 0], e = 0; e < a; ++e)
          ((i[s + e] = (t + r[n + e]) & 255), (t = i[s + e]));
      }
      function ur(t, e, r, n, i, s, a) {
        var o;
        if (null == t) hr(null, null, r, n, i, s, a);
        else for (o = 0; o < a; ++o) i[s + o] = (t[e + o] + r[n + o]) & 255;
      }
      function cr(t, e, r, n, i, s, a) {
        if (null == t) hr(null, null, r, n, i, s, a);
        else {
          var o,
            h = t[e + 0],
            u = h,
            c = h;
          for (o = 0; o < a; ++o)
            ((u = c + (h = t[e + o]) - u),
              (c = (r[n + o] + (-256 & u ? (0 > u ? 0 : 255) : u)) & 255),
              (u = h),
              (i[s + o] = c));
        }
      }
      function lr(t, r, i, a) {
        var o = r.width,
          h = r.o;
        if ((e(null != t && null != r), 0 > i || 0 >= a || i + a > h))
          return null;
        if (!t.Cc) {
          if (null == t.ga) {
            var u;
            if (
              ((t.ga = new or()),
              (u = null == t.ga) ||
                ((u = r.width * r.o),
                e(0 == t.Gb.length),
                (t.Gb = s(u)),
                (t.Uc = 0),
                null == t.Gb
                  ? (u = 0)
                  : ((t.mb = t.Gb), (t.nb = t.Uc), (t.rc = null), (u = 1)),
                (u = !u)),
              !u)
            ) {
              u = t.ga;
              var c = t.Fa,
                l = t.P,
                f = t.qc,
                d = t.mb,
                p = t.nb,
                g = l + 1,
                v = f - 1,
                y = u.l;
              if (
                (e(null != c && null != d && null != r),
                (vi[0] = null),
                (vi[1] = hr),
                (vi[2] = ur),
                (vi[3] = cr),
                (u.ca = d),
                (u.tb = p),
                (u.c = r.width),
                (u.i = r.height),
                e(0 < u.c && 0 < u.i),
                1 >= f)
              )
                r = 0;
              else if (
                ((u.$a = (c[l + 0] >> 0) & 3),
                (u.Z = (c[l + 0] >> 2) & 3),
                (u.Lc = (c[l + 0] >> 4) & 3),
                (l = (c[l + 0] >> 6) & 3),
                0 > u.$a || 1 < u.$a || 4 <= u.Z || 1 < u.Lc || l)
              )
                r = 0;
              else if (
                ((y.put = dt),
                (y.ac = ft),
                (y.bc = pt),
                (y.ma = u),
                (y.width = r.width),
                (y.height = r.height),
                (y.Da = r.Da),
                (y.v = r.v),
                (y.va = r.va),
                (y.j = r.j),
                (y.o = r.o),
                u.$a)
              )
                t: {
                  (e(1 == u.$a), (r = It()));
                  e: for (;;) {
                    if (null == r) {
                      r = 0;
                      break t;
                    }
                    if (
                      (e(null != u),
                      (u.mc = r),
                      (r.c = u.c),
                      (r.i = u.i),
                      (r.l = u.l),
                      (r.l.ma = u),
                      (r.l.width = u.c),
                      (r.l.height = u.i),
                      (r.a = 0),
                      m(r.m, c, g, v),
                      !Lt(u.c, u.i, 1, r, null))
                    )
                      break e;
                    if (
                      (1 == r.ab && 3 == r.gc[0].hc && At(r.s)
                        ? ((u.ic = 1),
                          (c = r.c * r.i),
                          (r.Ta = null),
                          (r.Ua = 0),
                          (r.V = s(c)),
                          (r.Ba = 0),
                          null == r.V ? ((r.a = 1), (r = 0)) : (r = 1))
                        : ((u.ic = 0), (r = Ct(r, u.c))),
                      !r)
                    )
                      break e;
                    r = 1;
                    break t;
                  }
                  ((u.mc = null), (r = 0));
                }
              else r = v >= u.c * u.i;
              u = !r;
            }
            if (u) return null;
            1 != t.ga.Lc ? (t.Ga = 0) : (a = h - i);
          }
          (e(null != t.ga), e(i + a <= h));
          t: {
            if (((r = (c = t.ga).c), (h = c.l.o), 0 == c.$a)) {
              if (
                ((g = t.rc),
                (v = t.Vc),
                (y = t.Fa),
                (l = t.P + 1 + i * r),
                (f = t.mb),
                (d = t.nb + i * r),
                e(l <= t.P + t.qc),
                0 != c.Z)
              )
                for (e(null != vi[c.Z]), u = 0; u < a; ++u)
                  (vi[c.Z](g, v, y, l, f, d, r),
                    (g = f),
                    (v = d),
                    (d += r),
                    (l += r));
              else
                for (u = 0; u < a; ++u)
                  (n(f, d, y, l, r), (g = f), (v = d), (d += r), (l += r));
              ((t.rc = g), (t.Vc = v));
            } else {
              if (
                (e(null != c.mc),
                (r = i + a),
                e(null != (u = c.mc)),
                e(r <= u.i),
                u.C >= r)
              )
                r = 1;
              else if ((c.ic || vr(), c.ic)) {
                ((c = u.V), (g = u.Ba), (v = u.c));
                var b = u.i,
                  w =
                    ((y = 1),
                    (l = u.$ / v),
                    (f = u.$ % v),
                    (d = u.m),
                    (p = u.s),
                    u.$),
                  x = v * b,
                  S = v * r,
                  E = p.wc,
                  N = w < S ? wt(p, f, l) : null;
                (e(w <= x), e(r <= b), e(At(p)));
                e: for (;;) {
                  for (; !d.h && w < S; ) {
                    if (
                      (f & E || (N = wt(p, f, l)),
                      e(null != N),
                      F(d),
                      256 > (b = yt(N.G[0], N.H[0], d)))
                    )
                      ((c[g + w] = b),
                        ++w,
                        ++f >= v &&
                          ((f = 0), ++l <= r && !(l % 16) && Ft(u, l)));
                    else {
                      if (!(280 > b)) {
                        y = 0;
                        break e;
                      }
                      b = vt(b - 256, d);
                      var P,
                        I = yt(N.G[4], N.H[4], d);
                      if (
                        (F(d),
                        !(w >= (I = mt(v, (I = vt(I, d)))) && x - w >= b))
                      ) {
                        y = 0;
                        break e;
                      }
                      for (P = 0; P < b; ++P) c[g + w + P] = c[g + w + P - I];
                      for (w += b, f += b; f >= v; )
                        ((f -= v), ++l <= r && !(l % 16) && Ft(u, l));
                      w < S && f & E && (N = wt(p, f, l));
                    }
                    e(d.h == A(d));
                  }
                  Ft(u, l > r ? r : l);
                  break e;
                }
                (!y || (d.h && w < x)
                  ? ((y = 0), (u.a = d.h ? 5 : 3))
                  : (u.$ = w),
                  (r = y));
              } else r = Nt(u, u.V, u.Ba, u.c, u.i, r, Dt);
              if (!r) {
                a = 0;
                break t;
              }
            }
            (i + a >= h && (t.Cc = 1), (a = 1));
          }
          if (!a) return null;
          if (
            t.Cc &&
            (null != (a = t.ga) && (a.mc = null), (t.ga = null), 0 < t.Ga)
          )
            return (alert("todo:WebPDequantizeLevels"), null);
        }
        return t.nb + i * o;
      }
      function fr(t, e, r, n, i, s) {
        for (; 0 < i--; ) {
          var a,
            o = t,
            h = e + (r ? 1 : 0),
            u = t,
            c = e + (r ? 0 : 3);
          for (a = 0; a < n; ++a) {
            var l = u[c + 4 * a];
            255 != l &&
              ((l *= 32897),
              (o[h + 4 * a + 0] = (o[h + 4 * a + 0] * l) >> 23),
              (o[h + 4 * a + 1] = (o[h + 4 * a + 1] * l) >> 23),
              (o[h + 4 * a + 2] = (o[h + 4 * a + 2] * l) >> 23));
          }
          e += s;
        }
      }
      function dr(t, e, r, n, i) {
        for (; 0 < n--; ) {
          var s;
          for (s = 0; s < r; ++s) {
            var a = t[e + 2 * s + 0],
              o = 15 & (u = t[e + 2 * s + 1]),
              h = 4369 * o,
              u = (((240 & u) | (u >> 4)) * h) >> 16;
            ((t[e + 2 * s + 0] =
              (((((240 & a) | (a >> 4)) * h) >> 16) & 240) |
              ((((((15 & a) | (a << 4)) * h) >> 16) >> 4) & 15)),
              (t[e + 2 * s + 1] = (240 & u) | o));
          }
          e += i;
        }
      }
      function pr(t, e, r, n, i, s, a, o) {
        var h,
          u,
          c = 255;
        for (u = 0; u < i; ++u) {
          for (h = 0; h < n; ++h) {
            var l = t[e + h];
            ((s[a + 4 * h] = l), (c &= l));
          }
          ((e += r), (a += o));
        }
        return 255 != c;
      }
      function gr(t, e, r, n, i) {
        var s;
        for (s = 0; s < i; ++s) r[n + s] = t[e + s] >> 8;
      }
      function vr() {
        ((An = fr), (En = dr), (Fn = pr), (Nn = gr));
      }
      function mr(r, n, i) {
        t[r] = function (t, r, s, a, o, h, u, c, l, f, d, p, g, v, m, y, b) {
          var w,
            x = (b - 1) >> 1,
            S = o[h + 0] | (u[c + 0] << 16),
            A = l[f + 0] | (d[p + 0] << 16);
          e(null != t);
          var E = (3 * S + A + 131074) >> 2;
          for (
            n(t[r + 0], 255 & E, E >> 16, g, v),
              null != s &&
                ((E = (3 * A + S + 131074) >> 2),
                n(s[a + 0], 255 & E, E >> 16, m, y)),
              w = 1;
            w <= x;
            ++w
          ) {
            var F = o[h + w] | (u[c + w] << 16),
              N = l[f + w] | (d[p + w] << 16),
              P = S + F + A + N + 524296,
              I = (P + 2 * (F + A)) >> 3;
            ((E = (I + S) >> 1),
              (S = ((P = (P + 2 * (S + N)) >> 3) + F) >> 1),
              n(t[r + 2 * w - 1], 255 & E, E >> 16, g, v + (2 * w - 1) * i),
              n(t[r + 2 * w - 0], 255 & S, S >> 16, g, v + (2 * w - 0) * i),
              null != s &&
                ((E = (P + A) >> 1),
                (S = (I + N) >> 1),
                n(s[a + 2 * w - 1], 255 & E, E >> 16, m, y + (2 * w - 1) * i),
                n(s[a + 2 * w + 0], 255 & S, S >> 16, m, y + (2 * w + 0) * i)),
              (S = F),
              (A = N));
          }
          1 & b ||
            ((E = (3 * S + A + 131074) >> 2),
            n(t[r + b - 1], 255 & E, E >> 16, g, v + (b - 1) * i),
            null != s &&
              ((E = (3 * A + S + 131074) >> 2),
              n(s[a + b - 1], 255 & E, E >> 16, m, y + (b - 1) * i)));
        };
      }
      function yr() {
        ((mi[jn] = yi),
          (mi[kn] = wi),
          (mi[On] = bi),
          (mi[Mn] = xi),
          (mi[qn] = Si),
          (mi[Hn] = Ai),
          (mi[Vn] = Ei),
          (mi[Un] = wi),
          (mi[Kn] = xi),
          (mi[zn] = Si),
          (mi[Wn] = Ai));
      }
      function br(t) {
        return t & ~Ci ? (0 > t ? 0 : 255) : t >> Li;
      }
      function wr(t, e) {
        return br(((19077 * t) >> 8) + ((26149 * e) >> 8) - 14234);
      }
      function xr(t, e, r) {
        return br(
          ((19077 * t) >> 8) - ((6419 * e) >> 8) - ((13320 * r) >> 8) + 8708,
        );
      }
      function Sr(t, e) {
        return br(((19077 * t) >> 8) + ((33050 * e) >> 8) - 17685);
      }
      function Ar(t, e, r, n, i) {
        ((n[i + 0] = wr(t, r)),
          (n[i + 1] = xr(t, e, r)),
          (n[i + 2] = Sr(t, e)));
      }
      function Er(t, e, r, n, i) {
        ((n[i + 0] = Sr(t, e)),
          (n[i + 1] = xr(t, e, r)),
          (n[i + 2] = wr(t, r)));
      }
      function Fr(t, e, r, n, i) {
        var s = xr(t, e, r);
        ((e = ((s << 3) & 224) | (Sr(t, e) >> 3)),
          (n[i + 0] = (248 & wr(t, r)) | (s >> 5)),
          (n[i + 1] = e));
      }
      function Nr(t, e, r, n, i) {
        var s = (240 & Sr(t, e)) | 15;
        ((n[i + 0] = (240 & wr(t, r)) | (xr(t, e, r) >> 4)), (n[i + 1] = s));
      }
      function Pr(t, e, r, n, i) {
        ((n[i + 0] = 255), Ar(t, e, r, n, i + 1));
      }
      function Ir(t, e, r, n, i) {
        (Er(t, e, r, n, i), (n[i + 3] = 255));
      }
      function Lr(t, e, r, n, i) {
        (Ar(t, e, r, n, i), (n[i + 3] = 255));
      }
      function zt(t, e) {
        return 0 > t ? 0 : t > e ? e : t;
      }
      function Cr(e, r, n) {
        t[e] = function (t, e, i, s, a, o, h, u, c) {
          for (var l = u + (-2 & c) * n; u != l; )
            (r(t[e + 0], i[s + 0], a[o + 0], h, u),
              r(t[e + 1], i[s + 0], a[o + 0], h, u + n),
              (e += 2),
              ++s,
              ++o,
              (u += 2 * n));
          1 & c && r(t[e + 0], i[s + 0], a[o + 0], h, u);
        };
      }
      function Dr(t, e, r) {
        return 0 == r ? (0 == t ? (0 == e ? 6 : 5) : 0 == e ? 4 : 0) : r;
      }
      function _r(t, e, r, n, i) {
        switch (t >>> 30) {
          case 3:
            an(e, r, n, i, 0);
            break;
          case 2:
            on(e, r, n, i);
            break;
          case 1:
            un(e, r, n, i);
        }
      }
      function Rr(t, e) {
        var r,
          s,
          a = e.M,
          o = e.Nb,
          h = t.oc,
          u = t.pc + 40,
          c = t.oc,
          l = t.pc + 584,
          f = t.oc,
          d = t.pc + 600;
        for (r = 0; 16 > r; ++r) h[u + 32 * r - 1] = 129;
        for (r = 0; 8 > r; ++r)
          ((c[l + 32 * r - 1] = 129), (f[d + 32 * r - 1] = 129));
        for (
          0 < a
            ? (h[u - 1 - 32] = c[l - 1 - 32] = f[d - 1 - 32] = 129)
            : (i(h, u - 32 - 1, 127, 21),
              i(c, l - 32 - 1, 127, 9),
              i(f, d - 32 - 1, 127, 9)),
            s = 0;
          s < t.za;
          ++s
        ) {
          var p = e.ya[e.aa + s];
          if (0 < s) {
            for (r = -1; 16 > r; ++r)
              n(h, u + 32 * r - 4, h, u + 32 * r + 12, 4);
            for (r = -1; 8 > r; ++r)
              (n(c, l + 32 * r - 4, c, l + 32 * r + 4, 4),
                n(f, d + 32 * r - 4, f, d + 32 * r + 4, 4));
          }
          var g = t.Gd,
            v = t.Hd + s,
            m = p.ad,
            y = p.Hc;
          if (
            (0 < a &&
              (n(h, u - 32, g[v].y, 0, 16),
              n(c, l - 32, g[v].f, 0, 8),
              n(f, d - 32, g[v].ea, 0, 8)),
            p.Za)
          ) {
            var b = h,
              w = u - 32 + 16;
            for (
              0 < a &&
                (s >= t.za - 1
                  ? i(b, w, g[v].y[15], 4)
                  : n(b, w, g[v + 1].y, 0, 4)),
                r = 0;
              4 > r;
              r++
            )
              b[w + 128 + r] = b[w + 256 + r] = b[w + 384 + r] = b[w + 0 + r];
            for (r = 0; 16 > r; ++r, y <<= 2)
              ((b = h),
                (w = u + Oi[r]),
                fi[p.Ob[r]](b, w),
                _r(y, m, 16 * +r, b, w));
          } else if (((b = Dr(s, a, p.Ob[0])), li[b](h, u), 0 != y))
            for (r = 0; 16 > r; ++r, y <<= 2) _r(y, m, 16 * +r, h, u + Oi[r]);
          for (
            r = p.Gc,
              b = Dr(s, a, p.Dd),
              di[b](c, l),
              di[b](f, d),
              y = m,
              b = c,
              w = l,
              255 & (p = r >> 0) &&
                (170 & p ? hn(y, 256, b, w) : cn(y, 256, b, w)),
              p = f,
              y = d,
              255 & (r >>= 8) &&
                (170 & r ? hn(m, 320, p, y) : cn(m, 320, p, y)),
              a < t.Ub - 1 &&
                (n(g[v].y, 0, h, u + 480, 16),
                n(g[v].f, 0, c, l + 224, 8),
                n(g[v].ea, 0, f, d + 224, 8)),
              r = 8 * o * t.B,
              g = t.sa,
              v = t.ta + 16 * s + 16 * o * t.R,
              m = t.qa,
              p = t.ra + 8 * s + r,
              y = t.Ha,
              b = t.Ia + 8 * s + r,
              r = 0;
            16 > r;
            ++r
          )
            n(g, v + r * t.R, h, u + 32 * r, 16);
          for (r = 0; 8 > r; ++r)
            (n(m, p + r * t.B, c, l + 32 * r, 8),
              n(y, b + r * t.B, f, d + 32 * r, 8));
        }
      }
      function Br(t, n, i, s, a, o, h, u, c) {
        var l = [0],
          f = [0],
          d = 0,
          p = null != c ? c.kd : 0,
          g = null != c ? c : new nr();
        if (null == t || 12 > i) return 7;
        ((g.data = t),
          (g.w = n),
          (g.ha = i),
          (n = [n]),
          (i = [i]),
          (g.gb = [g.gb]));
        t: {
          var v = n,
            y = i,
            b = g.gb;
          if (
            (e(null != t),
            e(null != y),
            e(null != b),
            (b[0] = 0),
            12 <= y[0] && !r(t, v[0], "RIFF"))
          ) {
            if (r(t, v[0] + 8, "WEBP")) {
              b = 3;
              break t;
            }
            var w = _(t, v[0] + 4);
            if (12 > w || 4294967286 < w) {
              b = 3;
              break t;
            }
            if (p && w > y[0] - 8) {
              b = 7;
              break t;
            }
            ((b[0] = w), (v[0] += 12), (y[0] -= 12));
          }
          b = 0;
        }
        if (0 != b) return b;
        for (w = 0 < g.gb[0], i = i[0]; ; ) {
          t: {
            var S = t;
            ((y = n), (b = i));
            var A = l,
              E = f,
              F = (v = [0]);
            if ((((I = d = [d])[0] = 0), 8 > b[0])) b = 7;
            else {
              if (!r(S, y[0], "VP8X")) {
                if (10 != _(S, y[0] + 4)) {
                  b = 3;
                  break t;
                }
                if (18 > b[0]) {
                  b = 7;
                  break t;
                }
                var N = _(S, y[0] + 8),
                  P = 1 + D(S, y[0] + 12);
                if (2147483648 <= P * (S = 1 + D(S, y[0] + 15))) {
                  b = 3;
                  break t;
                }
                (null != F && (F[0] = N),
                  null != A && (A[0] = P),
                  null != E && (E[0] = S),
                  (y[0] += 18),
                  (b[0] -= 18),
                  (I[0] = 1));
              }
              b = 0;
            }
          }
          if (((d = d[0]), (v = v[0]), 0 != b)) return b;
          if (((y = !!(2 & v)), !w && d)) return 3;
          if (
            (null != o && (o[0] = !!(16 & v)),
            null != h && (h[0] = y),
            null != u && (u[0] = 0),
            (h = l[0]),
            (v = f[0]),
            d && y && null == c)
          ) {
            b = 0;
            break;
          }
          if (4 > i) {
            b = 7;
            break;
          }
          if ((w && d) || (!w && !d && !r(t, n[0], "ALPH"))) {
            ((i = [i]), (g.na = [g.na]), (g.P = [g.P]), (g.Sa = [g.Sa]));
            t: {
              ((N = t), (b = n), (w = i));
              var I = g.gb;
              ((A = g.na),
                (E = g.P),
                (F = g.Sa),
                (P = 22),
                e(null != N),
                e(null != w),
                (S = b[0]));
              var L = w[0];
              for (
                e(null != A), e(null != F), A[0] = null, E[0] = null, F[0] = 0;
                ;
              ) {
                if (((b[0] = S), (w[0] = L), 8 > L)) {
                  b = 7;
                  break t;
                }
                var C = _(N, S + 4);
                if (4294967286 < C) {
                  b = 3;
                  break t;
                }
                var R = (8 + C + 1) & -2;
                if (((P += R), 0 < I && P > I)) {
                  b = 3;
                  break t;
                }
                if (!r(N, S, "VP8 ") || !r(N, S, "VP8L")) {
                  b = 0;
                  break t;
                }
                if (L[0] < R) {
                  b = 7;
                  break t;
                }
                (r(N, S, "ALPH") || ((A[0] = N), (E[0] = S + 8), (F[0] = C)),
                  (S += R),
                  (L -= R));
              }
            }
            if (
              ((i = i[0]),
              (g.na = g.na[0]),
              (g.P = g.P[0]),
              (g.Sa = g.Sa[0]),
              0 != b)
            )
              break;
          }
          ((i = [i]), (g.Ja = [g.Ja]), (g.xa = [g.xa]));
          t: if (
            ((I = t),
            (b = n),
            (w = i),
            (A = g.gb[0]),
            (E = g.Ja),
            (F = g.xa),
            (N = b[0]),
            (S = !r(I, N, "VP8 ")),
            (P = !r(I, N, "VP8L")),
            e(null != I),
            e(null != w),
            e(null != E),
            e(null != F),
            8 > w[0])
          )
            b = 7;
          else {
            if (S || P) {
              if (((I = _(I, N + 4)), 12 <= A && I > A - 12)) {
                b = 3;
                break t;
              }
              if (p && I > w[0] - 8) {
                b = 7;
                break t;
              }
              ((E[0] = I), (b[0] += 8), (w[0] -= 8), (F[0] = P));
            } else
              ((F[0] = 5 <= w[0] && 47 == I[N + 0] && !(I[N + 4] >> 5)),
                (E[0] = w[0]));
            b = 0;
          }
          if (
            ((i = i[0]), (g.Ja = g.Ja[0]), (g.xa = g.xa[0]), (n = n[0]), 0 != b)
          )
            break;
          if (4294967286 < g.Ja) return 3;
          if (
            (null == u || y || (u[0] = g.xa ? 2 : 1),
            (h = [h]),
            (v = [v]),
            g.xa)
          ) {
            if (5 > i) {
              b = 7;
              break;
            }
            ((u = h),
              (p = v),
              (y = o),
              null == t || 5 > i
                ? (t = 0)
                : 5 <= i && 47 == t[n + 0] && !(t[n + 4] >> 5)
                  ? ((w = [0]),
                    (I = [0]),
                    (A = [0]),
                    m((E = new x()), t, n, i),
                    gt(E, w, I, A)
                      ? (null != u && (u[0] = w[0]),
                        null != p && (p[0] = I[0]),
                        null != y && (y[0] = A[0]),
                        (t = 1))
                      : (t = 0))
                  : (t = 0));
          } else {
            if (10 > i) {
              b = 7;
              break;
            }
            ((u = v),
              null == t || 10 > i || !Xt(t, n + 3, i - 3)
                ? (t = 0)
                : ((p = t[n + 0] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (y = 16383 & ((t[n + 7] << 8) | t[n + 6])),
                  (t = 16383 & ((t[n + 9] << 8) | t[n + 8])),
                  1 & p ||
                  3 < ((p >> 1) & 7) ||
                  !((p >> 4) & 1) ||
                  p >> 5 >= g.Ja ||
                  !y ||
                  !t
                    ? (t = 0)
                    : (h && (h[0] = y), u && (u[0] = t), (t = 1))));
          }
          if (!t) return 3;
          if (((h = h[0]), (v = v[0]), d && (l[0] != h || f[0] != v))) return 3;
          null != c &&
            ((c[0] = g),
            (c.offset = n - c.w),
            e(4294967286 > n - c.w),
            e(c.offset == c.ha - i));
          break;
        }
        return 0 == b || (7 == b && d && null == c)
          ? (null != o && (o[0] |= null != g.na && 0 < g.na.length),
            null != s && (s[0] = h),
            null != a && (a[0] = v),
            0)
          : b;
      }
      function Tr(t, e, r) {
        var n = e.width,
          i = e.height,
          s = 0,
          a = 0,
          o = n,
          h = i;
        if (
          ((e.Da = null != t && 0 < t.Da),
          e.Da &&
            ((o = t.cd),
            (h = t.bd),
            (s = t.v),
            (a = t.j),
            11 > r || ((s &= -2), (a &= -2)),
            0 > s || 0 > a || 0 >= o || 0 >= h || s + o > n || a + h > i))
        )
          return 0;
        if (
          ((e.v = s),
          (e.j = a),
          (e.va = s + o),
          (e.o = a + h),
          (e.U = o),
          (e.T = h),
          (e.da = null != t && 0 < t.da),
          e.da)
        ) {
          if (!j(o, h, (r = [t.ib]), (s = [t.hb]))) return 0;
          ((e.ib = r[0]), (e.hb = s[0]));
        }
        return (
          (e.ob = null != t && t.ob),
          (e.Kb = null == t || !t.Sd),
          e.da &&
            ((e.ob = e.ib < (3 * n) / 4 && e.hb < (3 * i) / 4), (e.Kb = 0)),
          1
        );
      }
      function jr(t) {
        if (null == t) return 2;
        if (11 > t.S) {
          var e = t.f.RGBA;
          ((e.fb += (t.height - 1) * e.A), (e.A = -e.A));
        } else
          ((e = t.f.kb),
            (t = t.height),
            (e.O += (t - 1) * e.fa),
            (e.fa = -e.fa),
            (e.N += ((t - 1) >> 1) * e.Ab),
            (e.Ab = -e.Ab),
            (e.W += ((t - 1) >> 1) * e.Db),
            (e.Db = -e.Db),
            null != e.F && ((e.J += (t - 1) * e.lb), (e.lb = -e.lb)));
        return 0;
      }
      function kr(t, e, r, n) {
        if (null == n || 0 >= t || 0 >= e) return 2;
        if (null != r) {
          if (r.Da) {
            var i = r.cd,
              a = r.bd,
              o = -2 & r.v,
              h = -2 & r.j;
            if (0 > o || 0 > h || 0 >= i || 0 >= a || o + i > t || h + a > e)
              return 2;
            ((t = i), (e = a));
          }
          if (r.da) {
            if (!j(t, e, (i = [r.ib]), (a = [r.hb]))) return 2;
            ((t = i[0]), (e = a[0]));
          }
        }
        ((n.width = t), (n.height = e));
        t: {
          var u = n.width,
            c = n.height;
          if (((t = n.S), 0 >= u || 0 >= c || !(t >= jn && 13 > t))) t = 2;
          else {
            if (0 >= n.Rd && null == n.sd) {
              o = a = i = e = 0;
              var l = (h = u * Vi[t]) * c;
              if (
                (11 > t ||
                  ((a = ((c + 1) / 2) * (e = (u + 1) / 2)),
                  12 == t && (o = (i = u) * c)),
                null == (c = s(l + 2 * a + o)))
              ) {
                t = 1;
                break t;
              }
              ((n.sd = c),
                11 > t
                  ? (((u = n.f.RGBA).eb = c),
                    (u.fb = 0),
                    (u.A = h),
                    (u.size = l))
                  : (((u = n.f.kb).y = c),
                    (u.O = 0),
                    (u.fa = h),
                    (u.Fd = l),
                    (u.f = c),
                    (u.N = 0 + l),
                    (u.Ab = e),
                    (u.Cd = a),
                    (u.ea = c),
                    (u.W = 0 + l + a),
                    (u.Db = e),
                    (u.Ed = a),
                    12 == t && ((u.F = c), (u.J = 0 + l + 2 * a)),
                    (u.Tc = o),
                    (u.lb = i)));
            }
            if (
              ((e = 1),
              (i = n.S),
              (a = n.width),
              (o = n.height),
              i >= jn && 13 > i)
            )
              if (11 > i)
                ((t = n.f.RGBA),
                  (e &= (h = Math.abs(t.A)) * (o - 1) + a <= t.size),
                  (e &= h >= a * Vi[i]),
                  (e &= null != t.eb));
              else {
                ((t = n.f.kb),
                  (h = (a + 1) / 2),
                  (l = (o + 1) / 2),
                  (u = Math.abs(t.fa)),
                  (c = Math.abs(t.Ab)));
                var f = Math.abs(t.Db),
                  d = Math.abs(t.lb),
                  p = d * (o - 1) + a;
                ((e &= u * (o - 1) + a <= t.Fd),
                  (e &= c * (l - 1) + h <= t.Cd),
                  (e =
                    (e &= f * (l - 1) + h <= t.Ed) &
                    (u >= a) &
                    (c >= h) &
                    (f >= h)),
                  (e &= null != t.y),
                  (e &= null != t.f),
                  (e &= null != t.ea),
                  12 == i &&
                    ((e &= d >= a), (e &= p <= t.Tc), (e &= null != t.F)));
              }
            else e = 0;
            t = e ? 0 : 2;
          }
        }
        return (0 != t || (null != r && r.fd && (t = jr(n))), t);
      }
      var Or = 64,
        Mr = [
          0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
          32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303,
          8388607, 16777215,
        ],
        qr = 24,
        Hr = 32,
        Vr = 8,
        Ur = [
          0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
          6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
          7, 7, 7,
        ];
      (M("Predictor0", "PredictorAdd0"),
        (t.Predictor0 = function () {
          return 4278190080;
        }),
        (t.Predictor1 = function (t) {
          return t;
        }),
        (t.Predictor2 = function (t, e, r) {
          return e[r + 0];
        }),
        (t.Predictor3 = function (t, e, r) {
          return e[r + 1];
        }),
        (t.Predictor4 = function (t, e, r) {
          return e[r - 1];
        }),
        (t.Predictor5 = function (t, e, r) {
          return H(H(t, e[r + 1]), e[r + 0]);
        }),
        (t.Predictor6 = function (t, e, r) {
          return H(t, e[r - 1]);
        }),
        (t.Predictor7 = function (t, e, r) {
          return H(t, e[r + 0]);
        }),
        (t.Predictor8 = function (t, e, r) {
          return H(e[r - 1], e[r + 0]);
        }),
        (t.Predictor9 = function (t, e, r) {
          return H(e[r + 0], e[r + 1]);
        }),
        (t.Predictor10 = function (t, e, r) {
          return H(H(t, e[r - 1]), H(e[r + 0], e[r + 1]));
        }),
        (t.Predictor11 = function (t, e, r) {
          var n = e[r + 0];
          return 0 >=
            K((n >> 24) & 255, (t >> 24) & 255, ((e = e[r - 1]) >> 24) & 255) +
              K((n >> 16) & 255, (t >> 16) & 255, (e >> 16) & 255) +
              K((n >> 8) & 255, (t >> 8) & 255, (e >> 8) & 255) +
              K(255 & n, 255 & t, 255 & e)
            ? n
            : t;
        }),
        (t.Predictor12 = function (t, e, r) {
          var n = e[r + 0];
          return (
            ((V(
              ((t >> 24) & 255) +
                ((n >> 24) & 255) -
                (((e = e[r - 1]) >> 24) & 255),
            ) <<
              24) |
              (V(((t >> 16) & 255) + ((n >> 16) & 255) - ((e >> 16) & 255)) <<
                16) |
              (V(((t >> 8) & 255) + ((n >> 8) & 255) - ((e >> 8) & 255)) << 8) |
              V((255 & t) + (255 & n) - (255 & e))) >>>
            0
          );
        }),
        (t.Predictor13 = function (t, e, r) {
          var n = e[r - 1];
          return (
            ((U(((t = H(t, e[r + 0])) >> 24) & 255, (n >> 24) & 255) << 24) |
              (U((t >> 16) & 255, (n >> 16) & 255) << 16) |
              (U((t >> 8) & 255, (n >> 8) & 255) << 8) |
              U((t >> 0) & 255, (n >> 0) & 255)) >>>
            0
          );
        }));
      var Kr = t.PredictorAdd0;
      ((t.PredictorAdd1 = z),
        M("Predictor2", "PredictorAdd2"),
        M("Predictor3", "PredictorAdd3"),
        M("Predictor4", "PredictorAdd4"),
        M("Predictor5", "PredictorAdd5"),
        M("Predictor6", "PredictorAdd6"),
        M("Predictor7", "PredictorAdd7"),
        M("Predictor8", "PredictorAdd8"),
        M("Predictor9", "PredictorAdd9"),
        M("Predictor10", "PredictorAdd10"),
        M("Predictor11", "PredictorAdd11"),
        M("Predictor12", "PredictorAdd12"),
        M("Predictor13", "PredictorAdd13"));
      var zr = t.PredictorAdd2;
      (X(
        "ColorIndexInverseTransform",
        "MapARGB",
        "32b",
        function (t) {
          return (t >> 8) & 255;
        },
        function (t) {
          return t;
        },
      ),
        X(
          "VP8LColorIndexInverseTransformAlpha",
          "MapAlpha",
          "8b",
          function (t) {
            return t;
          },
          function (t) {
            return (t >> 8) & 255;
          },
        ));
      var Wr,
        Gr = t.ColorIndexInverseTransform,
        Jr = t.MapARGB,
        Xr = t.VP8LColorIndexInverseTransformAlpha,
        Yr = t.MapAlpha,
        $r = (t.VP8LPredictorsAdd = []);
      (($r.length = 16),
        ((t.VP8LPredictors = []).length = 16),
        ((t.VP8LPredictorsAdd_C = []).length = 16),
        ((t.VP8LPredictors_C = []).length = 16));
      var Zr,
        Qr,
        tn,
        en,
        rn,
        nn,
        sn,
        an,
        on,
        hn,
        un,
        cn,
        ln,
        fn,
        dn,
        pn,
        gn,
        vn,
        mn,
        yn,
        bn,
        wn,
        xn,
        Sn,
        An,
        En,
        Fn,
        Nn,
        Pn = s(511),
        In = s(2041),
        Ln = s(225),
        Cn = s(767),
        Dn = 0,
        _n = In,
        Rn = Ln,
        Bn = Cn,
        Tn = Pn,
        jn = 0,
        kn = 1,
        On = 2,
        Mn = 3,
        qn = 4,
        Hn = 5,
        Vn = 6,
        Un = 7,
        Kn = 8,
        zn = 9,
        Wn = 10,
        Gn = [2, 3, 7],
        Jn = [3, 3, 11],
        Xn = [280, 256, 256, 256, 40],
        Yn = [0, 1, 1, 1, 0],
        $n = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        Zn = [
          24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27,
          54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69,
          75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61,
          104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107,
          50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122,
          33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16,
          32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113,
          127, 96, 112,
        ],
        Qn = [
          2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980,
          5004,
        ],
        ti = 8,
        ei = [
          4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20,
          20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32,
          33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47,
          48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
          65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80,
          81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102,
          104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132,
          134, 136, 138, 140, 143, 145, 148, 151, 154, 157,
        ],
        ri = [
          4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
          40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
          57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
          90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119,
          122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161,
          164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213,
          217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279,
          284,
        ],
        ni = null,
        ii = [
          [173, 148, 140, 0],
          [176, 155, 140, 135, 0],
          [180, 157, 141, 134, 130, 0],
          [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0],
        ],
        si = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
        ai = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
        oi = [
          [
            [
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
              [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
              [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128],
            ],
            [
              [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
              [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
              [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128],
            ],
            [
              [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
              [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
              [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128],
            ],
            [
              [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
              [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
              [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128],
            ],
            [
              [1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
              [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
              [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128],
            ],
            [
              [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
              [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
              [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128],
            ],
            [
              [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
          ],
          [
            [
              [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
              [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
              [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128],
            ],
            [
              [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
              [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
              [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128],
            ],
            [
              [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
              [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
              [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128],
            ],
            [
              [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
              [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
              [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128],
            ],
            [
              [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
              [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
              [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128],
            ],
            [
              [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
              [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
              [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128],
            ],
            [
              [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
              [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
              [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128],
            ],
            [
              [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
              [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
              [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128],
            ],
          ],
          [
            [
              [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
              [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
              [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128],
            ],
            [
              [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
              [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
              [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128],
            ],
            [
              [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
              [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
              [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128],
            ],
            [
              [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
              [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
              [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            ],
            [
              [1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
              [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
              [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
              [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
              [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
            [
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
              [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
          ],
          [
            [
              [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
              [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
              [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128],
            ],
            [
              [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
              [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
              [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128],
            ],
            [
              [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
              [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
              [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128],
            ],
            [
              [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
              [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
              [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128],
            ],
            [
              [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
              [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
              [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128],
            ],
            [
              [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
              [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
              [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128],
            ],
            [
              [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
              [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
              [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128],
            ],
            [
              [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
              [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            ],
          ],
        ],
        hi = [
          [
            [231, 120, 48, 89, 115, 113, 120, 152, 112],
            [152, 179, 64, 126, 170, 118, 46, 70, 95],
            [175, 69, 143, 80, 85, 82, 72, 155, 103],
            [56, 58, 10, 171, 218, 189, 17, 13, 152],
            [114, 26, 17, 163, 44, 195, 21, 10, 173],
            [121, 24, 80, 195, 26, 62, 44, 64, 85],
            [144, 71, 10, 38, 171, 213, 144, 34, 26],
            [170, 46, 55, 19, 136, 160, 33, 206, 71],
            [63, 20, 8, 114, 114, 208, 12, 9, 226],
            [81, 40, 11, 96, 182, 84, 29, 16, 36],
          ],
          [
            [134, 183, 89, 137, 98, 101, 106, 165, 148],
            [72, 187, 100, 130, 157, 111, 32, 75, 80],
            [66, 102, 167, 99, 74, 62, 40, 234, 128],
            [41, 53, 9, 178, 241, 141, 26, 8, 107],
            [74, 43, 26, 146, 73, 166, 49, 23, 157],
            [65, 38, 105, 160, 51, 52, 31, 115, 128],
            [104, 79, 12, 27, 217, 255, 87, 17, 7],
            [87, 68, 71, 44, 114, 51, 15, 186, 23],
            [47, 41, 14, 110, 182, 183, 21, 17, 194],
            [66, 45, 25, 102, 197, 189, 23, 18, 22],
          ],
          [
            [88, 88, 147, 150, 42, 46, 45, 196, 205],
            [43, 97, 183, 117, 85, 38, 35, 179, 61],
            [39, 53, 200, 87, 26, 21, 43, 232, 171],
            [56, 34, 51, 104, 114, 102, 29, 93, 77],
            [39, 28, 85, 171, 58, 165, 90, 98, 64],
            [34, 22, 116, 206, 23, 34, 43, 166, 73],
            [107, 54, 32, 26, 51, 1, 81, 43, 31],
            [68, 25, 106, 22, 64, 171, 36, 225, 114],
            [34, 19, 21, 102, 132, 188, 16, 76, 124],
            [62, 18, 78, 95, 85, 57, 50, 48, 51],
          ],
          [
            [193, 101, 35, 159, 215, 111, 89, 46, 111],
            [60, 148, 31, 172, 219, 228, 21, 18, 111],
            [112, 113, 77, 85, 179, 255, 38, 120, 114],
            [40, 42, 1, 196, 245, 209, 10, 25, 109],
            [88, 43, 29, 140, 166, 213, 37, 43, 154],
            [61, 63, 30, 155, 67, 45, 68, 1, 209],
            [100, 80, 8, 43, 154, 1, 51, 26, 71],
            [142, 78, 78, 16, 255, 128, 34, 197, 171],
            [41, 40, 5, 102, 211, 183, 4, 1, 221],
            [51, 50, 17, 168, 209, 192, 23, 25, 82],
          ],
          [
            [138, 31, 36, 171, 27, 166, 38, 44, 229],
            [67, 87, 58, 169, 82, 115, 26, 59, 179],
            [63, 59, 90, 180, 59, 166, 93, 73, 154],
            [40, 40, 21, 116, 143, 209, 34, 39, 175],
            [47, 15, 16, 183, 34, 223, 49, 45, 183],
            [46, 17, 33, 183, 6, 98, 15, 32, 183],
            [57, 46, 22, 24, 128, 1, 54, 17, 37],
            [65, 32, 73, 115, 28, 128, 23, 128, 205],
            [40, 3, 9, 115, 51, 192, 18, 6, 223],
            [87, 37, 9, 115, 59, 77, 64, 21, 47],
          ],
          [
            [104, 55, 44, 218, 9, 54, 53, 130, 226],
            [64, 90, 70, 205, 40, 41, 23, 26, 57],
            [54, 57, 112, 184, 5, 41, 38, 166, 213],
            [30, 34, 26, 133, 152, 116, 10, 32, 134],
            [39, 19, 53, 221, 26, 114, 32, 73, 255],
            [31, 9, 65, 234, 2, 15, 1, 118, 73],
            [75, 32, 12, 51, 192, 255, 160, 43, 51],
            [88, 31, 35, 67, 102, 85, 55, 186, 85],
            [56, 21, 23, 111, 59, 205, 45, 37, 192],
            [55, 38, 70, 124, 73, 102, 1, 34, 98],
          ],
          [
            [125, 98, 42, 88, 104, 85, 117, 175, 82],
            [95, 84, 53, 89, 128, 100, 113, 101, 45],
            [75, 79, 123, 47, 51, 128, 81, 171, 1],
            [57, 17, 5, 71, 102, 57, 53, 41, 49],
            [38, 33, 13, 121, 57, 73, 26, 1, 85],
            [41, 10, 67, 138, 77, 110, 90, 47, 114],
            [115, 21, 2, 10, 102, 255, 166, 23, 6],
            [101, 29, 16, 10, 85, 128, 101, 196, 26],
            [57, 18, 10, 102, 102, 213, 34, 20, 43],
            [117, 20, 15, 36, 163, 128, 68, 1, 26],
          ],
          [
            [102, 61, 71, 37, 34, 53, 31, 243, 192],
            [69, 60, 71, 38, 73, 119, 28, 222, 37],
            [68, 45, 128, 34, 1, 47, 11, 245, 171],
            [62, 17, 19, 70, 146, 85, 55, 62, 70],
            [37, 43, 37, 154, 100, 163, 85, 160, 1],
            [63, 9, 92, 136, 28, 64, 32, 201, 85],
            [75, 15, 9, 9, 64, 255, 184, 119, 16],
            [86, 6, 28, 5, 64, 255, 25, 248, 1],
            [56, 8, 17, 132, 137, 255, 55, 116, 128],
            [58, 15, 20, 82, 135, 57, 26, 121, 40],
          ],
          [
            [164, 50, 31, 137, 154, 133, 25, 35, 218],
            [51, 103, 44, 131, 131, 123, 31, 6, 158],
            [86, 40, 64, 135, 148, 224, 45, 183, 128],
            [22, 26, 17, 131, 240, 154, 14, 1, 209],
            [45, 16, 21, 91, 64, 222, 7, 1, 197],
            [56, 21, 39, 155, 60, 138, 23, 102, 213],
            [83, 12, 13, 54, 192, 255, 68, 47, 28],
            [85, 26, 85, 85, 128, 128, 32, 146, 171],
            [18, 11, 7, 63, 144, 171, 4, 4, 246],
            [35, 27, 10, 146, 174, 171, 12, 26, 128],
          ],
          [
            [190, 80, 35, 99, 180, 80, 126, 54, 45],
            [85, 126, 47, 87, 176, 51, 41, 20, 32],
            [101, 75, 128, 139, 118, 146, 116, 128, 85],
            [56, 41, 15, 176, 236, 85, 37, 9, 62],
            [71, 30, 17, 119, 118, 255, 17, 18, 138],
            [101, 38, 60, 138, 55, 70, 43, 26, 142],
            [146, 36, 19, 30, 171, 255, 97, 27, 20],
            [138, 45, 61, 62, 219, 1, 81, 188, 64],
            [32, 41, 20, 117, 151, 142, 20, 21, 163],
            [112, 19, 12, 61, 195, 128, 48, 4, 24],
          ],
        ],
        ui = [
          [
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
              [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
              [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
              [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
          [
            [
              [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
              [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255],
            ],
            [
              [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
          [
            [
              [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
              [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
              [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255],
            ],
            [
              [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
          [
            [
              [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
              [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
              [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
              [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
            [
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
              [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            ],
          ],
        ],
        ci = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
        li = [],
        fi = [],
        di = [],
        pi = 1,
        gi = 2,
        vi = [],
        mi = [];
      (mr("UpsampleRgbLinePair", Ar, 3),
        mr("UpsampleBgrLinePair", Er, 3),
        mr("UpsampleRgbaLinePair", Lr, 4),
        mr("UpsampleBgraLinePair", Ir, 4),
        mr("UpsampleArgbLinePair", Pr, 4),
        mr("UpsampleRgba4444LinePair", Nr, 2),
        mr("UpsampleRgb565LinePair", Fr, 2));
      var yi = t.UpsampleRgbLinePair,
        bi = t.UpsampleBgrLinePair,
        wi = t.UpsampleRgbaLinePair,
        xi = t.UpsampleBgraLinePair,
        Si = t.UpsampleArgbLinePair,
        Ai = t.UpsampleRgba4444LinePair,
        Ei = t.UpsampleRgb565LinePair,
        Fi = 16,
        Ni = 1 << (Fi - 1),
        Pi = -227,
        Ii = 482,
        Li = 6,
        Ci = (256 << Li) - 1,
        Di = 0,
        _i = s(256),
        Ri = s(256),
        Bi = s(256),
        Ti = s(256),
        ji = s(Ii - Pi),
        ki = s(Ii - Pi);
      (Cr("YuvToRgbRow", Ar, 3),
        Cr("YuvToBgrRow", Er, 3),
        Cr("YuvToRgbaRow", Lr, 4),
        Cr("YuvToBgraRow", Ir, 4),
        Cr("YuvToArgbRow", Pr, 4),
        Cr("YuvToRgba4444Row", Nr, 2),
        Cr("YuvToRgb565Row", Fr, 2));
      var Oi = [
          0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392,
          396,
        ],
        Mi = [0, 2, 8],
        qi = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
        Hi = 1;
      this.WebPDecodeRGBA = function (t, r, n, i, s) {
        var a = kn,
          o = new rr(),
          h = new at();
        ((o.ba = h), (h.S = a), (h.width = [h.width]), (h.height = [h.height]));
        var u = h.width,
          c = h.height,
          l = new ot();
        if (null == l || null == t) var f = 2;
        else
          (e(null != l),
            (f = Br(t, r, n, l.width, l.height, l.Pd, l.Qd, l.format, null)));
        if (
          (0 != f
            ? (u = 0)
            : (null != u && (u[0] = l.width[0]),
              null != c && (c[0] = l.height[0]),
              (u = 1)),
          u)
        ) {
          ((h.width = h.width[0]),
            (h.height = h.height[0]),
            null != i && (i[0] = h.width),
            null != s && (s[0] = h.height));
          t: {
            if (
              ((i = new Wt()),
              ((s = new nr()).data = t),
              (s.w = r),
              (s.ha = n),
              (s.kd = 1),
              (r = [0]),
              e(null != s),
              (0 == (t = Br(s.data, s.w, s.ha, null, null, null, r, null, s)) ||
                7 == t) &&
                r[0] &&
                (t = 4),
              0 == (r = t))
            ) {
              if (
                (e(null != o),
                (i.data = s.data),
                (i.w = s.w + s.offset),
                (i.ha = s.ha - s.offset),
                (i.put = dt),
                (i.ac = ft),
                (i.bc = pt),
                (i.ma = o),
                s.xa)
              ) {
                if (null == (t = It())) {
                  o = 1;
                  break t;
                }
                if (
                  (function (t, r) {
                    var n = [0],
                      i = [0],
                      s = [0];
                    e: for (;;) {
                      if (null == t) return 0;
                      if (null == r) return ((t.a = 2), 0);
                      if (
                        ((t.l = r),
                        (t.a = 0),
                        m(t.m, r.data, r.w, r.ha),
                        !gt(t.m, n, i, s))
                      ) {
                        t.a = 3;
                        break e;
                      }
                      if (
                        ((t.xb = gi),
                        (r.width = n[0]),
                        (r.height = i[0]),
                        !Lt(n[0], i[0], 1, t, null))
                      )
                        break e;
                      return 1;
                    }
                    return (e(0 != t.a), 0);
                  })(t, i)
                ) {
                  if ((i = 0 == (r = kr(i.width, i.height, o.Oa, o.ba)))) {
                    e: {
                      i = t;
                      r: for (;;) {
                        if (null == i) {
                          i = 0;
                          break e;
                        }
                        if (
                          (e(null != i.s.yc),
                          e(null != i.s.Ya),
                          e(0 < i.s.Wb),
                          e(null != (n = i.l)),
                          e(null != (s = n.ma)),
                          0 != i.xb)
                        ) {
                          if (
                            ((i.ca = s.ba),
                            (i.tb = s.tb),
                            e(null != i.ca),
                            !Tr(s.Oa, n, Mn))
                          ) {
                            i.a = 2;
                            break r;
                          }
                          if (!Ct(i, n.width)) break r;
                          if (n.da) break r;
                          if (
                            ((n.da || nt(i.ca.S)) && vr(),
                            11 > i.ca.S ||
                              (alert("todo:WebPInitConvertARGBToYUV"),
                              null != i.ca.f.kb.F && vr()),
                            i.Pb &&
                              0 < i.s.ua &&
                              null == i.s.vb.X &&
                              !R(i.s.vb, i.s.Wa.Xa))
                          ) {
                            i.a = 1;
                            break r;
                          }
                          i.xb = 0;
                        }
                        if (!Nt(i, i.V, i.Ba, i.c, i.i, n.o, St)) break r;
                        ((s.Dc = i.Ma), (i = 1));
                        break e;
                      }
                      (e(0 != i.a), (i = 0));
                    }
                    i = !i;
                  }
                  i && (r = t.a);
                } else r = t.a;
              } else {
                if (null == (t = new Gt())) {
                  o = 1;
                  break t;
                }
                if (((t.Fa = s.na), (t.P = s.P), (t.qc = s.Sa), Yt(t, i))) {
                  if (0 == (r = kr(i.width, i.height, o.Oa, o.ba))) {
                    if (
                      ((t.Aa = 0), (n = o.Oa), e(null != (s = t)), null != n)
                    ) {
                      if (
                        0 <
                        (u =
                          0 > (u = n.Md) ? 0 : 100 < u ? 255 : (255 * u) / 100)
                      ) {
                        for (c = l = 0; 4 > c; ++c)
                          (12 > (f = s.pb[c]).lc &&
                            (f.ia = (u * qi[0 > f.lc ? 0 : f.lc]) >> 3),
                            (l |= f.ia));
                        l && (alert("todo:VP8InitRandom"), (s.ia = 1));
                      }
                      ((s.Ga = n.Id),
                        100 < s.Ga ? (s.Ga = 100) : 0 > s.Ga && (s.Ga = 0));
                    }
                    Qt(t, i) || (r = t.a);
                  }
                } else r = t.a;
              }
              0 == r && null != o.Oa && o.Oa.fd && (r = jr(o.ba));
            }
            o = r;
          }
          a = 0 != o ? null : 11 > a ? h.f.RGBA.eb : h.f.kb.y;
        } else a = null;
        return a;
      };
      var Vi = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
    };
    function u(t, e) {
      for (var r = "", n = 0; n < 4; n++) r += String.fromCharCode(t[e++]);
      return r;
    }
    function c(t, e) {
      return ((t[e + 0] << 0) | (t[e + 1] << 8) | (t[e + 2] << 16)) >>> 0;
    }
    function l(t, e) {
      return (
        ((t[e + 0] << 0) |
          (t[e + 1] << 8) |
          (t[e + 2] << 16) |
          (t[e + 3] << 24)) >>>
        0
      );
    }
    new h();
    var f = [0],
      d = [0],
      p = [],
      g = new h(),
      v = t,
      m = (function (t, e) {
        var r = {},
          n = 0,
          i = !1,
          s = 0,
          a = 0;
        if (
          ((r.frames = []),
          !(
            /** @license
         * Copyright (c) 2017 Dominik Homberger
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        https://webpjs.appspot.com
        WebPRiffParser dominikhlbg@gmail.com
        */
            (function (t, e, r, n) {
              for (var i = 0; i < n; i++)
                if (t[e + i] != r.charCodeAt(i)) return !0;
              return !1;
            })(t, e, "RIFF", 4)
          ))
        ) {
          var o, h;
          for (l(t, (e += 4)), e += 8; e < t.length; ) {
            var f = u(t, e),
              d = l(t, (e += 4));
            e += 4;
            var p = d + (1 & d);
            switch (f) {
              case "VP8 ":
              case "VP8L":
                (void 0 === r.frames[n] && (r.frames[n] = {}),
                  ((m = r.frames[n]).src_off = i ? a : e - 8),
                  (m.src_size = s + d + 8),
                  n++,
                  i && ((i = !1), (s = 0), (a = 0)));
                break;
              case "VP8X":
                (m = r.header = {}).feature_flags = t[e];
                var g = e + 4;
                ((m.canvas_width = 1 + c(t, g)),
                  (g += 3),
                  (m.canvas_height = 1 + c(t, g)),
                  (g += 3));
                break;
              case "ALPH":
                ((i = !0), (s = p + 8), (a = e - 8));
                break;
              case "ANIM":
                (((m = r.header).bgcolor = l(t, e)),
                  (g = e + 4),
                  (m.loop_count =
                    ((o = t)[(h = g) + 0] << 0) | (o[h + 1] << 8)),
                  (g += 2));
                break;
              case "ANMF":
                var v, m;
                (((m = r.frames[n] = {}).offset_x = 2 * c(t, e)),
                  (e += 3),
                  (m.offset_y = 2 * c(t, e)),
                  (e += 3),
                  (m.width = 1 + c(t, e)),
                  (e += 3),
                  (m.height = 1 + c(t, e)),
                  (e += 3),
                  (m.duration = c(t, e)),
                  (e += 3),
                  (v = t[e++]),
                  (m.dispose = 1 & v),
                  (m.blend = (v >> 1) & 1));
            }
            "ANMF" != f && (e += p);
          }
          return r;
        }
      })(v, 0);
    ((m.response = v), (m.rgbaoutput = !0), (m.dataurl = !1));
    var y = m.header ? m.header : null,
      b = m.frames ? m.frames : null;
    if (y) {
      ((y.loop_counter = y.loop_count),
        (f = [y.canvas_height]),
        (d = [y.canvas_width]));
      for (var w = 0; w < b.length && 0 != b[w].blend; w++);
    }
    var x = b[0],
      S = g.WebPDecodeRGBA(v, x.src_off, x.src_size, d, f);
    ((x.rgba = S), (x.imgwidth = d[0]), (x.imgheight = f[0]));
    for (var A = 0; A < d[0] * f[0] * 4; A++) p[A] = S[A];
    return ((this.width = d), (this.height = f), (this.data = p), this);
  }
  (!(function (t) {
    var e = function () {
        return "function" == typeof X;
      },
      r = function (e, r, i, u) {
        var c = 4,
          l = a;
        switch (u) {
          case t.image_compression.FAST:
            ((c = 1), (l = s));
            break;
          case t.image_compression.MEDIUM:
            ((c = 6), (l = o));
            break;
          case t.image_compression.SLOW:
            ((c = 9), (l = h));
        }
        e = n(e, r, i, l);
        var f = X(e, { level: c });
        return t.__addimage__.arrayBufferToBinaryString(f);
      },
      n = function (t, e, r, n) {
        for (
          var i,
            s,
            a,
            o = t.length / e,
            h = new Uint8Array(t.length + o),
            u = c(),
            f = 0;
          f < o;
          f += 1
        ) {
          if (((a = f * e), (i = t.subarray(a, a + e)), n))
            h.set(n(i, r, s), a + f);
          else {
            for (var d, p = u.length, g = []; d < p; d += 1)
              g[d] = u[d](i, r, s);
            var v = l(g.concat());
            h.set(g[v], a + f);
          }
          s = i;
        }
        return h;
      },
      i = function (t) {
        var e = Array.apply([], t);
        return (e.unshift(0), e);
      },
      s = function (t, e) {
        var r,
          n = [],
          i = t.length;
        n[0] = 1;
        for (var s = 0; s < i; s += 1)
          ((r = t[s - e] || 0), (n[s + 1] = (t[s] - r + 256) & 255));
        return n;
      },
      a = function (t, e, r) {
        var n,
          i = [],
          s = t.length;
        i[0] = 2;
        for (var a = 0; a < s; a += 1)
          ((n = (r && r[a]) || 0), (i[a + 1] = (t[a] - n + 256) & 255));
        return i;
      },
      o = function (t, e, r) {
        var n,
          i,
          s = [],
          a = t.length;
        s[0] = 3;
        for (var o = 0; o < a; o += 1)
          ((n = t[o - e] || 0),
            (i = (r && r[o]) || 0),
            (s[o + 1] = (t[o] + 256 - ((n + i) >>> 1)) & 255));
        return s;
      },
      h = function (t, e, r) {
        var n,
          i,
          s,
          a,
          o = [],
          h = t.length;
        o[0] = 4;
        for (var c = 0; c < h; c += 1)
          ((n = t[c - e] || 0),
            (i = (r && r[c]) || 0),
            (s = (r && r[c - e]) || 0),
            (a = u(n, i, s)),
            (o[c + 1] = (t[c] - a + 256) & 255));
        return o;
      },
      u = function (t, e, r) {
        if (t === e && e === r) return t;
        var n = Math.abs(e - r),
          i = Math.abs(t - r),
          s = Math.abs(t + e - r - r);
        return n <= i && n <= s ? t : i <= s ? e : r;
      },
      c = function () {
        return [i, s, a, o, h];
      },
      l = function (t) {
        var e = t.map(function (t) {
          return t.reduce(function (t, e) {
            return t + Math.abs(e);
          }, 0);
        });
        return e.indexOf(Math.min.apply(null, e));
      };
    t.processPNG = function (n, i, s, a) {
      var o,
        h,
        u,
        c,
        l,
        f,
        d,
        p,
        g,
        v,
        m,
        y,
        b,
        w,
        x,
        S = this.decode.FLATE_DECODE,
        A = "";
      if (
        (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)),
        this.__addimage__.isArrayBufferView(n))
      ) {
        if (
          ((n = (u = new Ue(n)).imgData),
          (h = u.bits),
          (o = u.colorSpace),
          (l = u.colors),
          -1 !== [4, 6].indexOf(u.colorType))
        ) {
          if (8 === u.bits) {
            ((g = (p =
              32 == u.pixelBitlength
                ? new Uint32Array(u.decodePixels().buffer)
                : 16 == u.pixelBitlength
                  ? new Uint16Array(u.decodePixels().buffer)
                  : new Uint8Array(u.decodePixels().buffer)).length),
              (m = new Uint8Array(g * u.colors)),
              (v = new Uint8Array(g)));
            var E,
              F = u.pixelBitlength - u.bits;
            for (w = 0, x = 0; w < g; w++) {
              for (b = p[w], E = 0; E < F; )
                ((m[x++] = (b >>> E) & 255), (E += u.bits));
              v[w] = (b >>> E) & 255;
            }
          }
          if (16 === u.bits) {
            ((g = (p = new Uint32Array(u.decodePixels().buffer)).length),
              (m = new Uint8Array(g * (32 / u.pixelBitlength) * u.colors)),
              (v = new Uint8Array(g * (32 / u.pixelBitlength))),
              (y = u.colors > 1),
              (w = 0),
              (x = 0));
            for (var N = 0; w < g; )
              ((b = p[w++]),
                (m[x++] = (b >>> 0) & 255),
                y &&
                  ((m[x++] = (b >>> 16) & 255),
                  (b = p[w++]),
                  (m[x++] = (b >>> 0) & 255)),
                (v[N++] = (b >>> 16) & 255));
            h = 8;
          }
          a !== t.image_compression.NONE && e()
            ? ((n = r(m, u.width * u.colors, u.colors, a)),
              (d = r(v, u.width, 1, a)))
            : ((n = m), (d = v), (S = void 0));
        }
        if (
          3 === u.colorType &&
          ((o = this.color_spaces.INDEXED),
          (f = u.palette),
          u.transparency.indexed)
        ) {
          var P = u.transparency.indexed,
            I = 0;
          for (w = 0, g = P.length; w < g; ++w) I += P[w];
          if ((I /= 255) === g - 1 && -1 !== P.indexOf(0)) c = [P.indexOf(0)];
          else if (I !== g) {
            for (
              p = u.decodePixels(),
                v = new Uint8Array(p.length),
                w = 0,
                g = p.length;
              w < g;
              w++
            )
              v[w] = P[p[w]];
            d = r(v, u.width, 1);
          }
        }
        var L = (function (e) {
          var r;
          switch (e) {
            case t.image_compression.FAST:
              r = 11;
              break;
            case t.image_compression.MEDIUM:
              r = 13;
              break;
            case t.image_compression.SLOW:
              r = 14;
              break;
            default:
              r = 12;
          }
          return r;
        })(a);
        return (
          S === this.decode.FLATE_DECODE && (A = "/Predictor " + L + " "),
          (A +=
            "/Colors " +
            l +
            " /BitsPerComponent " +
            h +
            " /Columns " +
            u.width),
          (this.__addimage__.isArrayBuffer(n) ||
            this.__addimage__.isArrayBufferView(n)) &&
            (n = this.__addimage__.arrayBufferToBinaryString(n)),
          ((d && this.__addimage__.isArrayBuffer(d)) ||
            this.__addimage__.isArrayBufferView(d)) &&
            (d = this.__addimage__.arrayBufferToBinaryString(d)),
          {
            alias: s,
            data: n,
            index: i,
            filter: S,
            decodeParameters: A,
            transparency: c,
            palette: f,
            sMask: d,
            predictor: L,
            width: u.width,
            height: u.height,
            bitsPerComponent: h,
            colorSpace: o,
          }
        );
      }
    };
  })(Ct.API),
    (function (t) {
      ((t.processGIF89A = function (e, r, n, i) {
        var s = new Ke(e),
          a = s.width,
          o = s.height,
          h = [];
        s.decodeAndBlitFrameRGBA(0, h);
        var u = { data: h, width: a, height: o },
          c = new We(100).encode(u, 100);
        return t.processJPEG.call(this, c, r, n, i);
      }),
        (t.processGIF87A = t.processGIF89A));
    })(Ct.API),
    (Ge.prototype.parseHeader = function () {
      if (
        ((this.fileSize = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.reserved = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.offset = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.headerSize = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.width = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.height = this.datav.getInt32(this.pos, !0)),
        (this.pos += 4),
        (this.planes = this.datav.getUint16(this.pos, !0)),
        (this.pos += 2),
        (this.bitPP = this.datav.getUint16(this.pos, !0)),
        (this.pos += 2),
        (this.compress = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.rawSize = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.hr = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.vr = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.colors = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        (this.importantColors = this.datav.getUint32(this.pos, !0)),
        (this.pos += 4),
        16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15),
        this.bitPP < 15)
      ) {
        var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
        this.palette = new Array(t);
        for (var e = 0; e < t; e++) {
          var r = this.datav.getUint8(this.pos++, !0),
            n = this.datav.getUint8(this.pos++, !0),
            i = this.datav.getUint8(this.pos++, !0),
            s = this.datav.getUint8(this.pos++, !0);
          this.palette[e] = { red: i, green: n, blue: r, quad: s };
        }
      }
      this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
    }),
    (Ge.prototype.parseBGR = function () {
      this.pos = this.offset;
      try {
        var t = "bit" + this.bitPP,
          e = this.width * this.height * 4;
        ((this.data = new Uint8Array(e)), this[t]());
      } catch (t) {
        Q.log("bit decode error:" + t);
      }
    }),
    (Ge.prototype.bit1 = function () {
      var t,
        e = Math.ceil(this.width / 8),
        r = e % 4;
      for (t = this.height - 1; t >= 0; t--) {
        for (
          var n = this.bottom_up ? t : this.height - 1 - t, i = 0;
          i < e;
          i++
        )
          for (
            var s = this.datav.getUint8(this.pos++, !0),
              a = n * this.width * 4 + 8 * i * 4,
              o = 0;
            o < 8 && 8 * i + o < this.width;
            o++
          ) {
            var h = this.palette[(s >> (7 - o)) & 1];
            ((this.data[a + 4 * o] = h.blue),
              (this.data[a + 4 * o + 1] = h.green),
              (this.data[a + 4 * o + 2] = h.red),
              (this.data[a + 4 * o + 3] = 255));
          }
        0 !== r && (this.pos += 4 - r);
      }
    }),
    (Ge.prototype.bit4 = function () {
      for (
        var t = Math.ceil(this.width / 2), e = t % 4, r = this.height - 1;
        r >= 0;
        r--
      ) {
        for (
          var n = this.bottom_up ? r : this.height - 1 - r, i = 0;
          i < t;
          i++
        ) {
          var s = this.datav.getUint8(this.pos++, !0),
            a = n * this.width * 4 + 2 * i * 4,
            o = s >> 4,
            h = 15 & s,
            u = this.palette[o];
          if (
            ((this.data[a] = u.blue),
            (this.data[a + 1] = u.green),
            (this.data[a + 2] = u.red),
            (this.data[a + 3] = 255),
            2 * i + 1 >= this.width)
          )
            break;
          ((u = this.palette[h]),
            (this.data[a + 4] = u.blue),
            (this.data[a + 4 + 1] = u.green),
            (this.data[a + 4 + 2] = u.red),
            (this.data[a + 4 + 3] = 255));
        }
        0 !== e && (this.pos += 4 - e);
      }
    }),
    (Ge.prototype.bit8 = function () {
      for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
        for (
          var r = this.bottom_up ? e : this.height - 1 - e, n = 0;
          n < this.width;
          n++
        ) {
          var i = this.datav.getUint8(this.pos++, !0),
            s = r * this.width * 4 + 4 * n;
          if (i < this.palette.length) {
            var a = this.palette[i];
            ((this.data[s] = a.red),
              (this.data[s + 1] = a.green),
              (this.data[s + 2] = a.blue),
              (this.data[s + 3] = 255));
          } else
            ((this.data[s] = 255),
              (this.data[s + 1] = 255),
              (this.data[s + 2] = 255),
              (this.data[s + 3] = 255));
        }
        0 !== t && (this.pos += 4 - t);
      }
    }),
    (Ge.prototype.bit15 = function () {
      for (
        var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1;
        r >= 0;
        r--
      ) {
        for (
          var n = this.bottom_up ? r : this.height - 1 - r, i = 0;
          i < this.width;
          i++
        ) {
          var s = this.datav.getUint16(this.pos, !0);
          this.pos += 2;
          var a = (((s & e) / e) * 255) | 0,
            o = ((((s >> 5) & e) / e) * 255) | 0,
            h = ((((s >> 10) & e) / e) * 255) | 0,
            u = s >> 15 ? 255 : 0,
            c = n * this.width * 4 + 4 * i;
          ((this.data[c] = h),
            (this.data[c + 1] = o),
            (this.data[c + 2] = a),
            (this.data[c + 3] = u));
        }
        this.pos += t;
      }
    }),
    (Ge.prototype.bit16 = function () {
      for (
        var t = this.width % 3,
          e = parseInt("11111", 2),
          r = parseInt("111111", 2),
          n = this.height - 1;
        n >= 0;
        n--
      ) {
        for (
          var i = this.bottom_up ? n : this.height - 1 - n, s = 0;
          s < this.width;
          s++
        ) {
          var a = this.datav.getUint16(this.pos, !0);
          this.pos += 2;
          var o = (((a & e) / e) * 255) | 0,
            h = ((((a >> 5) & r) / r) * 255) | 0,
            u = (((a >> 11) / e) * 255) | 0,
            c = i * this.width * 4 + 4 * s;
          ((this.data[c] = u),
            (this.data[c + 1] = h),
            (this.data[c + 2] = o),
            (this.data[c + 3] = 255));
        }
        this.pos += t;
      }
    }),
    (Ge.prototype.bit24 = function () {
      for (var t = this.height - 1; t >= 0; t--) {
        for (
          var e = this.bottom_up ? t : this.height - 1 - t, r = 0;
          r < this.width;
          r++
        ) {
          var n = this.datav.getUint8(this.pos++, !0),
            i = this.datav.getUint8(this.pos++, !0),
            s = this.datav.getUint8(this.pos++, !0),
            a = e * this.width * 4 + 4 * r;
          ((this.data[a] = s),
            (this.data[a + 1] = i),
            (this.data[a + 2] = n),
            (this.data[a + 3] = 255));
        }
        this.pos += this.width % 4;
      }
    }),
    (Ge.prototype.bit32 = function () {
      for (var t = this.height - 1; t >= 0; t--)
        for (
          var e = this.bottom_up ? t : this.height - 1 - t, r = 0;
          r < this.width;
          r++
        ) {
          var n = this.datav.getUint8(this.pos++, !0),
            i = this.datav.getUint8(this.pos++, !0),
            s = this.datav.getUint8(this.pos++, !0),
            a = this.datav.getUint8(this.pos++, !0),
            o = e * this.width * 4 + 4 * r;
          ((this.data[o] = s),
            (this.data[o + 1] = i),
            (this.data[o + 2] = n),
            (this.data[o + 3] = a));
        }
    }),
    (Ge.prototype.getData = function () {
      return this.data;
    }),
    /**
     * @license
     * Copyright (c) 2018 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      t.processBMP = function (e, r, n, i) {
        var s = new Ge(e, !1),
          a = s.width,
          o = s.height,
          h = { data: s.getData(), width: a, height: o },
          u = new We(100).encode(h, 100);
        return t.processJPEG.call(this, u, r, n, i);
      };
    })(Ct.API),
    (Je.prototype.getData = function () {
      return this.data;
    }),
    /**
     * @license
     * Copyright (c) 2019 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      t.processWEBP = function (e, r, n, i) {
        var s = new Je(e, !1),
          a = s.width,
          o = s.height,
          h = { data: s.getData(), width: a, height: o },
          u = new We(100).encode(h, 100);
        return t.processJPEG.call(this, u, r, n, i);
      };
    })(Ct.API),
    (Ct.API.processRGBA = function (t, e, r) {
      for (
        var n = t.data,
          i = n.length,
          s = new Uint8Array((i / 4) * 3),
          a = new Uint8Array(i / 4),
          o = 0,
          h = 0,
          u = 0;
        u < i;
        u += 4
      ) {
        var c = n[u],
          l = n[u + 1],
          f = n[u + 2],
          d = n[u + 3];
        ((s[o++] = c), (s[o++] = l), (s[o++] = f), (a[h++] = d));
      }
      var p = this.__addimage__.arrayBufferToBinaryString(s);
      return {
        alpha: this.__addimage__.arrayBufferToBinaryString(a),
        data: p,
        index: e,
        alias: r,
        colorSpace: "DeviceRGB",
        bitsPerComponent: 8,
        width: t.width,
        height: t.height,
      };
    }),
    (Ct.API.setLanguage = function (t) {
      return (
        void 0 === this.internal.languageSettings &&
          ((this.internal.languageSettings = {}),
          (this.internal.languageSettings.isSubscribed = !1)),
        void 0 !==
          {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic (Standard)",
            "ar-DZ": "Arabic (Algeria)",
            "ar-BH": "Arabic (Bahrain)",
            "ar-EG": "Arabic (Egypt)",
            "ar-IQ": "Arabic (Iraq)",
            "ar-JO": "Arabic (Jordan)",
            "ar-KW": "Arabic (Kuwait)",
            "ar-LB": "Arabic (Lebanon)",
            "ar-LY": "Arabic (Libya)",
            "ar-MA": "Arabic (Morocco)",
            "ar-OM": "Arabic (Oman)",
            "ar-QA": "Arabic (Qatar)",
            "ar-SA": "Arabic (Saudi Arabia)",
            "ar-SY": "Arabic (Syria)",
            "ar-TN": "Arabic (Tunisia)",
            "ar-AE": "Arabic (U.A.E.)",
            "ar-YE": "Arabic (Yemen)",
            an: "Aragonese",
            hy: "Armenian",
            as: "Assamese",
            ast: "Asturian",
            az: "Azerbaijani",
            eu: "Basque",
            be: "Belarusian",
            bn: "Bengali",
            bs: "Bosnian",
            br: "Breton",
            bg: "Bulgarian",
            my: "Burmese",
            ca: "Catalan",
            ch: "Chamorro",
            ce: "Chechen",
            zh: "Chinese",
            "zh-HK": "Chinese (Hong Kong)",
            "zh-CN": "Chinese (PRC)",
            "zh-SG": "Chinese (Singapore)",
            "zh-TW": "Chinese (Taiwan)",
            cv: "Chuvash",
            co: "Corsican",
            cr: "Cree",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch (Standard)",
            "nl-BE": "Dutch (Belgian)",
            en: "English",
            "en-AU": "English (Australia)",
            "en-BZ": "English (Belize)",
            "en-CA": "English (Canada)",
            "en-IE": "English (Ireland)",
            "en-JM": "English (Jamaica)",
            "en-NZ": "English (New Zealand)",
            "en-PH": "English (Philippines)",
            "en-ZA": "English (South Africa)",
            "en-TT": "English (Trinidad & Tobago)",
            "en-GB": "English (United Kingdom)",
            "en-US": "English (United States)",
            "en-ZW": "English (Zimbabwe)",
            eo: "Esperanto",
            et: "Estonian",
            fo: "Faeroese",
            fj: "Fijian",
            fi: "Finnish",
            fr: "French (Standard)",
            "fr-BE": "French (Belgium)",
            "fr-CA": "French (Canada)",
            "fr-FR": "French (France)",
            "fr-LU": "French (Luxembourg)",
            "fr-MC": "French (Monaco)",
            "fr-CH": "French (Switzerland)",
            fy: "Frisian",
            fur: "Friulian",
            gd: "Gaelic (Scots)",
            "gd-IE": "Gaelic (Irish)",
            gl: "Galacian",
            ka: "Georgian",
            de: "German (Standard)",
            "de-AT": "German (Austria)",
            "de-DE": "German (Germany)",
            "de-LI": "German (Liechtenstein)",
            "de-LU": "German (Luxembourg)",
            "de-CH": "German (Switzerland)",
            el: "Greek",
            gu: "Gujurati",
            ht: "Haitian",
            he: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            iu: "Inuktitut",
            ga: "Irish",
            it: "Italian (Standard)",
            "it-CH": "Italian (Switzerland)",
            ja: "Japanese",
            kn: "Kannada",
            ks: "Kashmiri",
            kk: "Kazakh",
            km: "Khmer",
            ky: "Kirghiz",
            tlh: "Klingon",
            ko: "Korean",
            "ko-KP": "Korean (North Korea)",
            "ko-KR": "Korean (South Korea)",
            la: "Latin",
            lv: "Latvian",
            lt: "Lithuanian",
            lb: "Luxembourgish",
            mk: "North Macedonia",
            ms: "Malay",
            ml: "Malayalam",
            mt: "Maltese",
            mi: "Maori",
            mr: "Marathi",
            mo: "Moldavian",
            nv: "Navajo",
            ng: "Ndonga",
            ne: "Nepali",
            no: "Norwegian",
            nb: "Norwegian (Bokmal)",
            nn: "Norwegian (Nynorsk)",
            oc: "Occitan",
            or: "Oriya",
            om: "Oromo",
            fa: "Persian",
            "fa-IR": "Persian/Iran",
            pl: "Polish",
            pt: "Portuguese",
            "pt-BR": "Portuguese (Brazil)",
            pa: "Punjabi",
            "pa-IN": "Punjabi (India)",
            "pa-PK": "Punjabi (Pakistan)",
            qu: "Quechua",
            rm: "Rhaeto-Romanic",
            ro: "Romanian",
            "ro-MO": "Romanian (Moldavia)",
            ru: "Russian",
            "ru-MO": "Russian (Moldavia)",
            sz: "Sami (Lappish)",
            sg: "Sango",
            sa: "Sanskrit",
            sc: "Sardinian",
            sd: "Sindhi",
            si: "Singhalese",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            so: "Somani",
            sb: "Sorbian",
            es: "Spanish",
            "es-AR": "Spanish (Argentina)",
            "es-BO": "Spanish (Bolivia)",
            "es-CL": "Spanish (Chile)",
            "es-CO": "Spanish (Colombia)",
            "es-CR": "Spanish (Costa Rica)",
            "es-DO": "Spanish (Dominican Republic)",
            "es-EC": "Spanish (Ecuador)",
            "es-SV": "Spanish (El Salvador)",
            "es-GT": "Spanish (Guatemala)",
            "es-HN": "Spanish (Honduras)",
            "es-MX": "Spanish (Mexico)",
            "es-NI": "Spanish (Nicaragua)",
            "es-PA": "Spanish (Panama)",
            "es-PY": "Spanish (Paraguay)",
            "es-PE": "Spanish (Peru)",
            "es-PR": "Spanish (Puerto Rico)",
            "es-ES": "Spanish (Spain)",
            "es-UY": "Spanish (Uruguay)",
            "es-VE": "Spanish (Venezuela)",
            sx: "Sutu",
            sw: "Swahili",
            sv: "Swedish",
            "sv-FI": "Swedish (Finland)",
            "sv-SV": "Swedish (Sweden)",
            ta: "Tamil",
            tt: "Tatar",
            te: "Teluga",
            th: "Thai",
            tig: "Tigre",
            ts: "Tsonga",
            tn: "Tswana",
            tr: "Turkish",
            tk: "Turkmen",
            uk: "Ukrainian",
            hsb: "Upper Sorbian",
            ur: "Urdu",
            ve: "Venda",
            vi: "Vietnamese",
            vo: "Volapuk",
            wa: "Walloon",
            cy: "Welsh",
            xh: "Xhosa",
            ji: "Yiddish",
            zu: "Zulu",
          }[t] &&
          ((this.internal.languageSettings.languageCode = t),
          !1 === this.internal.languageSettings.isSubscribed &&
            (this.internal.events.subscribe("putCatalog", function () {
              this.internal.write(
                "/Lang (" + this.internal.languageSettings.languageCode + ")",
              );
            }),
            (this.internal.languageSettings.isSubscribed = !0))),
        this
      );
    }),
    (Oe = Ct.API),
    (Me = Oe.getCharWidthsArray =
      function (t, e) {
        var r,
          i,
          s = (e = e || {}).font || this.internal.getFont(),
          a = e.fontSize || this.internal.getFontSize(),
          o = e.charSpace || this.internal.getCharSpace(),
          h = e.widths ? e.widths : s.metadata.Unicode.widths,
          u = h.fof ? h.fof : 1,
          c = e.kerning ? e.kerning : s.metadata.Unicode.kerning,
          l = c.fof ? c.fof : 1,
          f = !1 !== e.doKerning,
          d = 0,
          p = t.length,
          g = 0,
          v = h[0] || u,
          m = [];
        for (r = 0; r < p; r++)
          ((i = t.charCodeAt(r)),
            "function" == typeof s.metadata.widthOfString
              ? m.push(
                  (s.metadata.widthOfGlyph(s.metadata.characterToGlyph(i)) +
                    o * (1e3 / a) || 0) / 1e3,
                )
              : ((d =
                  f &&
                  "object" === (0, n.Z)(c[i]) &&
                  !isNaN(parseInt(c[i][g], 10))
                    ? c[i][g] / l
                    : 0),
                m.push((h[i] || v) / u + d)),
            (g = i));
        return m;
      }),
    (qe = Oe.getStringUnitWidth =
      function (t, e) {
        var r = (e = e || {}).fontSize || this.internal.getFontSize(),
          n = e.font || this.internal.getFont(),
          i = e.charSpace || this.internal.getCharSpace();
        return (
          Oe.processArabic && (t = Oe.processArabic(t)),
          "function" == typeof n.metadata.widthOfString
            ? n.metadata.widthOfString(t, r, i) / r
            : Me.apply(this, arguments).reduce(function (t, e) {
                return t + e;
              }, 0)
        );
      }),
    (He = function (t, e, r, n) {
      for (var i = [], s = 0, a = t.length, o = 0; s !== a && o + e[s] < r; )
        ((o += e[s]), s++);
      i.push(t.slice(0, s));
      var h = s;
      for (o = 0; s !== a; )
        (o + e[s] > n && (i.push(t.slice(h, s)), (o = 0), (h = s)),
          (o += e[s]),
          s++);
      return (h !== s && i.push(t.slice(h, s)), i);
    }),
    (Ve = function (t, e, r) {
      r || (r = {});
      var n,
        i,
        s,
        a,
        o,
        h,
        u,
        c = [],
        l = [c],
        f = r.textIndent || 0,
        d = 0,
        p = 0,
        g = t.split(" "),
        v = Me.apply(this, [" ", r])[0];
      if ((h = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0)) {
        var m = Array(h).join(" "),
          y = [];
        (g.map(function (t) {
          (t = t.split(/\s*\n/)).length > 1
            ? (y = y.concat(
                t.map(function (t, e) {
                  return (e && t.length ? "\n" : "") + t;
                }),
              ))
            : y.push(t[0]);
        }),
          (g = y),
          (h = qe.apply(this, [m, r])));
      }
      for (s = 0, a = g.length; s < a; s++) {
        var b = 0;
        if (
          ((n = g[s]),
          h && "\n" == n[0] && ((n = n.substr(1)), (b = 1)),
          f +
            d +
            (p = (i = Me.apply(this, [n, r])).reduce(function (t, e) {
              return t + e;
            }, 0)) >
            e || b)
        ) {
          if (p > e) {
            for (
              o = He.apply(this, [n, i, e - (f + d), e]),
                c.push(o.shift()),
                c = [o.pop()];
              o.length;
            )
              l.push([o.shift()]);
            p = i.slice(n.length - (c[0] ? c[0].length : 0)).reduce(function (
              t,
              e,
            ) {
              return t + e;
            }, 0);
          } else c = [n];
          (l.push(c), (f = p + h), (d = v));
        } else (c.push(n), (f += d + p), (d = v));
      }
      return (
        (u = h
          ? function (t, e) {
              return (e ? m : "") + t.join(" ");
            }
          : function (t) {
              return t.join(" ");
            }),
        l.map(u)
      );
    }),
    (Oe.splitTextToSize = function (t, e, r) {
      var n,
        i = (r = r || {}).fontSize || this.internal.getFontSize(),
        s = function (t) {
          if (t.widths && t.kerning)
            return { widths: t.widths, kerning: t.kerning };
          var e = this.internal.getFont(t.fontName, t.fontStyle);
          return e.metadata.Unicode
            ? {
                widths: e.metadata.Unicode.widths || { 0: 1 },
                kerning: e.metadata.Unicode.kerning || {},
              }
            : {
                font: e.metadata,
                fontSize: this.internal.getFontSize(),
                charSpace: this.internal.getCharSpace(),
              };
        }.call(this, r);
      n = Array.isArray(t) ? t : String(t).split(/\r?\n/);
      var a = (1 * this.internal.scaleFactor * e) / i;
      ((s.textIndent = r.textIndent
        ? (1 * r.textIndent * this.internal.scaleFactor) / i
        : 0),
        (s.lineIndent = r.lineIndent));
      var o,
        h,
        u = [];
      for (o = 0, h = n.length; o < h; o++)
        u = u.concat(Ve.apply(this, [n[o], a, s]));
      return u;
    }),
    (function (t) {
      t.__fontmetrics__ = t.__fontmetrics__ || {};
      for (var e = "klmnopqrstuvwxyz", r = {}, i = {}, s = 0; s < e.length; s++)
        ((r[e[s]] = "0123456789abcdef"[s]), (i["0123456789abcdef"[s]] = e[s]));
      var a = function (t) {
          return "0x" + parseInt(t, 10).toString(16);
        },
        o = (t.__fontmetrics__.compress = function (t) {
          var e,
            r,
            s,
            h,
            u = ["{"];
          for (var c in t) {
            if (
              ((e = t[c]),
              isNaN(parseInt(c, 10))
                ? (r = "'" + c + "'")
                : ((c = parseInt(c, 10)),
                  (r = (r = a(c).slice(2)).slice(0, -1) + i[r.slice(-1)])),
              "number" == typeof e)
            )
              (e < 0
                ? ((s = a(e).slice(3)), (h = "-"))
                : ((s = a(e).slice(2)), (h = "")),
                (s = h + s.slice(0, -1) + i[s.slice(-1)]));
            else {
              if ("object" !== (0, n.Z)(e))
                throw new Error(
                  "Don't know what to do with value type " + (0, n.Z)(e) + ".",
                );
              s = o(e);
            }
            u.push(r + s);
          }
          return (u.push("}"), u.join(""));
        }),
        h = (t.__fontmetrics__.uncompress = function (t) {
          if ("string" != typeof t)
            throw new Error("Invalid argument passed to uncompress.");
          for (
            var e,
              n,
              i,
              s,
              a = {},
              o = 1,
              h = a,
              u = [],
              c = "",
              l = "",
              f = t.length - 1,
              d = 1;
            d < f;
            d += 1
          )
            "'" == (s = t[d])
              ? e
                ? ((i = e.join("")), (e = void 0))
                : (e = [])
              : e
                ? e.push(s)
                : "{" == s
                  ? (u.push([h, i]), (h = {}), (i = void 0))
                  : "}" == s
                    ? (((n = u.pop())[0][n[1]] = h), (i = void 0), (h = n[0]))
                    : "-" == s
                      ? (o = -1)
                      : void 0 === i
                        ? r.hasOwnProperty(s)
                          ? ((c += r[s]),
                            (i = parseInt(c, 16) * o),
                            (o = 1),
                            (c = ""))
                          : (c += s)
                        : r.hasOwnProperty(s)
                          ? ((l += r[s]),
                            (h[i] = parseInt(l, 16) * o),
                            (o = 1),
                            (i = void 0),
                            (l = ""))
                          : (l += s);
          return a;
        }),
        u = {
          codePages: ["WinAnsiEncoding"],
          WinAnsiEncoding: h(
            "{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}",
          ),
        },
        c = {
          Unicode: {
            Courier: u,
            "Courier-Bold": u,
            "Courier-BoldOblique": u,
            "Courier-Oblique": u,
            Helvetica: u,
            "Helvetica-Bold": u,
            "Helvetica-BoldOblique": u,
            "Helvetica-Oblique": u,
            "Times-Roman": u,
            "Times-Bold": u,
            "Times-BoldItalic": u,
            "Times-Italic": u,
          },
        },
        l = {
          Unicode: {
            "Courier-Oblique": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-BoldItalic": h(
              "{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}",
            ),
            "Helvetica-Bold": h(
              "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}",
            ),
            Courier: h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-BoldOblique": h(
              "{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}",
            ),
            "Times-Bold": h(
              "{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}",
            ),
            Symbol: h(
              "{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}",
            ),
            Helvetica: h(
              "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}",
            ),
            "Helvetica-BoldOblique": h(
              "{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}",
            ),
            ZapfDingbats: h("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-Bold": h("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Italic": h(
              "{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}",
            ),
            "Times-Roman": h(
              "{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}",
            ),
            "Helvetica-Oblique": h(
              "{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}",
            ),
          },
        };
      t.events.push([
        "addFont",
        function (t) {
          var e = t.font,
            r = l.Unicode[e.postScriptName];
          r &&
            ((e.metadata.Unicode = {}),
            (e.metadata.Unicode.widths = r.widths),
            (e.metadata.Unicode.kerning = r.kerning));
          var n = c.Unicode[e.postScriptName];
          n &&
            ((e.metadata.Unicode.encoding = n), (e.encoding = n.codePages[0]));
        },
      ]);
    })(Ct.API),
    /**
     * @license
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = function (t) {
        for (var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)
          r[n] = t.charCodeAt(n);
        return r;
      };
      t.API.events.push([
        "addFont",
        function (r) {
          var n = void 0,
            i = r.font,
            s = r.instance;
          if (!i.isStandardFont) {
            if (void 0 === s)
              throw new Error(
                "Font does not exist in vFS, import fonts or remove declaration doc.addFont('" +
                  i.postScriptName +
                  "').",
              );
            if (
              "string" !=
              typeof (n =
                !1 === s.existsFileInVFS(i.postScriptName)
                  ? s.loadFile(i.postScriptName)
                  : s.getFileFromVFS(i.postScriptName))
            )
              throw new Error(
                "Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" +
                  i.postScriptName +
                  "').",
              );
            !(function (r, n) {
              ((n = /^\x00\x01\x00\x00/.test(n) ? e(n) : e(nt(n))),
                (r.metadata = t.API.TTFFont.open(n)),
                (r.metadata.Unicode = r.metadata.Unicode || {
                  encoding: {},
                  kerning: {},
                  widths: [],
                }),
                (r.metadata.glyIdsUsed = [0]));
            })(i, n);
          }
        },
      ]);
    })(Ct),
    /** @license
     * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    (function (t) {
      function e() {
        return (
          $.canvg
            ? Promise.resolve($.canvg)
            : Promise.all([
                r.e(9823),
                r.e(5099),
                r.e(2704),
                r.e(3166),
                r.e(910),
                r.e(5200),
                r.e(8953),
                r.e(9613),
                r.e(6306),
                r.e(2171),
                r.e(4236),
                r.e(3697),
                r.e(4383),
                r.e(3115),
                r.e(3986),
                r.e(3543),
                r.e(6390),
                r.e(63),
                r.e(4577),
                r.e(6400),
                r.e(7476),
                r.e(9161),
                r.e(3426),
                r.e(3073),
                r.e(602),
                r.e(1922),
                r.e(8353),
                r.e(1893),
                r.e(1587),
                r.e(1611),
                r.e(5604),
                r.e(5738),
                r.e(2826),
              ]).then(r.bind(r, 34668))
        )
          .catch(function (t) {
            return Promise.reject(new Error("Could not load canvg: " + t));
          })
          .then(function (t) {
            return t.default ? t.default : t;
          });
      }
      Ct.API.addSvgAsImage = function (t, r, n, i, s, a, o, h) {
        if (isNaN(r) || isNaN(n))
          throw (
            Q.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments),
            new Error("Invalid coordinates passed to jsPDF.addSvgAsImage")
          );
        if (isNaN(i) || isNaN(s))
          throw (
            Q.error("jsPDF.addSvgAsImage: Invalid measurements", arguments),
            new Error(
              "Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage",
            )
          );
        var u = document.createElement("canvas");
        ((u.width = i), (u.height = s));
        var c = u.getContext("2d");
        ((c.fillStyle = "#fff"), c.fillRect(0, 0, u.width, u.height));
        var l = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
          f = this;
        return e()
          .then(
            function (e) {
              return e.fromString(c, t, l);
            },
            function () {
              return Promise.reject(new Error("Could not load canvg."));
            },
          )
          .then(function (t) {
            return t.render(l);
          })
          .then(function () {
            f.addImage(u.toDataURL("image/jpeg", 1), r, n, i, s, o, h);
          });
      };
    })(),
    (Ct.API.putTotalPages = function (t) {
      var e,
        r = 0;
      parseInt(this.internal.getFont().id.substr(1), 10) < 15
        ? ((e = new RegExp(t, "g")), (r = this.internal.getNumberOfPages()))
        : ((e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g")),
          (r = this.pdfEscape16(
            this.internal.getNumberOfPages() + "",
            this.internal.getFont(),
          )));
      for (var n = 1; n <= this.internal.getNumberOfPages(); n++)
        for (var i = 0; i < this.internal.pages[n].length; i++)
          this.internal.pages[n][i] = this.internal.pages[n][i].replace(e, r);
      return this;
    }),
    (Ct.API.viewerPreferences = function (t, e) {
      var r;
      ((t = t || {}), (e = e || !1));
      var i,
        s,
        a,
        o = {
          HideToolbar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3,
          },
          HideMenubar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3,
          },
          HideWindowUI: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3,
          },
          FitWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3,
          },
          CenterWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.3,
          },
          DisplayDocTitle: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.4,
          },
          NonFullScreenPageMode: {
            defaultValue: "UseNone",
            value: "UseNone",
            type: "name",
            explicitSet: !1,
            valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
            pdfVersion: 1.3,
          },
          Direction: {
            defaultValue: "L2R",
            value: "L2R",
            type: "name",
            explicitSet: !1,
            valueSet: ["L2R", "R2L"],
            pdfVersion: 1.3,
          },
          ViewArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4,
          },
          ViewClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4,
          },
          PrintArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4,
          },
          PrintClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
            pdfVersion: 1.4,
          },
          PrintScaling: {
            defaultValue: "AppDefault",
            value: "AppDefault",
            type: "name",
            explicitSet: !1,
            valueSet: ["AppDefault", "None"],
            pdfVersion: 1.6,
          },
          Duplex: {
            defaultValue: "",
            value: "none",
            type: "name",
            explicitSet: !1,
            valueSet: [
              "Simplex",
              "DuplexFlipShortEdge",
              "DuplexFlipLongEdge",
              "none",
            ],
            pdfVersion: 1.7,
          },
          PickTrayByPDFSize: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [!0, !1],
            pdfVersion: 1.7,
          },
          PrintPageRange: {
            defaultValue: "",
            value: "",
            type: "array",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7,
          },
          NumCopies: {
            defaultValue: 1,
            value: 1,
            type: "integer",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7,
          },
        },
        h = Object.keys(o),
        u = [],
        c = 0,
        l = 0,
        f = 0;
      function d(t, e) {
        var r,
          n = !1;
        for (r = 0; r < t.length; r += 1) t[r] === e && (n = !0);
        return n;
      }
      if (
        (void 0 === this.internal.viewerpreferences &&
          ((this.internal.viewerpreferences = {}),
          (this.internal.viewerpreferences.configuration = JSON.parse(
            JSON.stringify(o),
          )),
          (this.internal.viewerpreferences.isSubscribed = !1)),
        (r = this.internal.viewerpreferences.configuration),
        "reset" === t || !0 === e)
      ) {
        var p = h.length;
        for (f = 0; f < p; f += 1)
          ((r[h[f]].value = r[h[f]].defaultValue), (r[h[f]].explicitSet = !1));
      }
      if ("object" === (0, n.Z)(t))
        for (s in t)
          if (((a = t[s]), d(h, s) && void 0 !== a)) {
            if ("boolean" === r[s].type && "boolean" == typeof a)
              r[s].value = a;
            else if ("name" === r[s].type && d(r[s].valueSet, a))
              r[s].value = a;
            else if ("integer" === r[s].type && Number.isInteger(a))
              r[s].value = a;
            else if ("array" === r[s].type) {
              for (c = 0; c < a.length; c += 1)
                if (((i = !0), 1 === a[c].length && "number" == typeof a[c][0]))
                  u.push(String(a[c] - 1));
                else if (a[c].length > 1) {
                  for (l = 0; l < a[c].length; l += 1)
                    "number" != typeof a[c][l] && (i = !1);
                  !0 === i && u.push([a[c][0] - 1, a[c][1] - 1].join(" "));
                }
              r[s].value = "[" + u.join(" ") + "]";
            } else r[s].value = r[s].defaultValue;
            r[s].explicitSet = !0;
          }
      return (
        !1 === this.internal.viewerpreferences.isSubscribed &&
          (this.internal.events.subscribe("putCatalog", function () {
            var t,
              e = [];
            for (t in r)
              !0 === r[t].explicitSet &&
                ("name" === r[t].type
                  ? e.push("/" + t + " /" + r[t].value)
                  : e.push("/" + t + " " + r[t].value));
            0 !== e.length &&
              this.internal.write(
                "/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>",
              );
          }),
          (this.internal.viewerpreferences.isSubscribed = !0)),
        (this.internal.viewerpreferences.configuration = r),
        this
      );
    }),
    /** ====================================================================
     * @license
     * jsPDF XMP metadata plugin
     * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    (function (t) {
      var e = function () {
          var t =
              '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
              this.internal.__metadata__.namespaceuri +
              '"><jspdf:metadata>',
            e = unescape(
              encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">'),
            ),
            r = unescape(encodeURIComponent(t)),
            n = unescape(
              encodeURIComponent(this.internal.__metadata__.metadata),
            ),
            i = unescape(
              encodeURIComponent(
                "</jspdf:metadata></rdf:Description></rdf:RDF>",
              ),
            ),
            s = unescape(encodeURIComponent("</x:xmpmeta>")),
            a = r.length + n.length + i.length + e.length + s.length;
          ((this.internal.__metadata__.metadata_object_number =
            this.internal.newObject()),
            this.internal.write(
              "<< /Type /Metadata /Subtype /XML /Length " + a + " >>",
            ),
            this.internal.write("stream"),
            this.internal.write(e + r + n + i + s),
            this.internal.write("endstream"),
            this.internal.write("endobj"));
        },
        r = function () {
          this.internal.__metadata__.metadata_object_number &&
            this.internal.write(
              "/Metadata " +
                this.internal.__metadata__.metadata_object_number +
                " 0 R",
            );
        };
      t.addMetadata = function (t, n) {
        return (
          void 0 === this.internal.__metadata__ &&
            ((this.internal.__metadata__ = {
              metadata: t,
              namespaceuri: n || "http://jspdf.default.namespaceuri/",
            }),
            this.internal.events.subscribe("putCatalog", r),
            this.internal.events.subscribe("postPutResources", e)),
          this
        );
      };
    })(Ct.API),
    (function (t) {
      var e = t.API,
        r = (e.pdfEscape16 = function (t, e) {
          for (
            var r,
              n = e.metadata.Unicode.widths,
              i = ["", "0", "00", "000", "0000"],
              s = [""],
              a = 0,
              o = t.length;
            a < o;
            ++a
          ) {
            if (
              ((r = e.metadata.characterToGlyph(t.charCodeAt(a))),
              e.metadata.glyIdsUsed.push(r),
              (e.metadata.toUnicode[r] = t.charCodeAt(a)),
              -1 == n.indexOf(r) &&
                (n.push(r), n.push([parseInt(e.metadata.widthOfGlyph(r), 10)])),
              "0" == r)
            )
              return s.join("");
            ((r = r.toString(16)), s.push(i[4 - r.length], r));
          }
          return s.join("");
        }),
        n = function (t) {
          var e, r, n, i, s, a, o;
          for (
            s =
              "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange",
              n = [],
              a = 0,
              o = (r = Object.keys(t).sort(function (t, e) {
                return t - e;
              })).length;
            a < o;
            a++
          )
            ((e = r[a]),
              n.length >= 100 &&
                ((s +=
                  "\n" +
                  n.length +
                  " beginbfchar\n" +
                  n.join("\n") +
                  "\nendbfchar"),
                (n = [])),
              void 0 !== t[e] &&
                null !== t[e] &&
                "function" == typeof t[e].toString &&
                ((i = ("0000" + t[e].toString(16)).slice(-4)),
                (e = ("0000" + (+e).toString(16)).slice(-4)),
                n.push("<" + e + "><" + i + ">")));
          return (
            n.length &&
              (s +=
                "\n" +
                n.length +
                " beginbfchar\n" +
                n.join("\n") +
                "\nendbfchar\n"),
            s +
              "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
          );
        };
      (e.events.push([
        "putFont",
        function (e) {
          !(function (e) {
            var r = e.font,
              i = e.out,
              s = e.newObject,
              a = e.putStream;
            if (
              r.metadata instanceof t.API.TTFFont &&
              "Identity-H" === r.encoding
            ) {
              for (
                var o = r.metadata.Unicode.widths,
                  h = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1),
                  u = "",
                  c = 0;
                c < h.length;
                c++
              )
                u += String.fromCharCode(h[c]);
              var l = s();
              (a({ data: u, addLength1: !0, objectId: l }), i("endobj"));
              var f = s();
              (a({
                data: n(r.metadata.toUnicode),
                addLength1: !0,
                objectId: f,
              }),
                i("endobj"));
              var d = s();
              (i("<<"),
                i("/Type /FontDescriptor"),
                i("/FontName /" + Et(r.fontName)),
                i("/FontFile2 " + l + " 0 R"),
                i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                i("/Flags " + r.metadata.flags),
                i("/StemV " + r.metadata.stemV),
                i("/ItalicAngle " + r.metadata.italicAngle),
                i("/Ascent " + r.metadata.ascender),
                i("/Descent " + r.metadata.decender),
                i("/CapHeight " + r.metadata.capHeight),
                i(">>"),
                i("endobj"));
              var p = s();
              (i("<<"),
                i("/Type /Font"),
                i("/BaseFont /" + Et(r.fontName)),
                i("/FontDescriptor " + d + " 0 R"),
                i("/W " + t.API.PDFObject.convert(o)),
                i("/CIDToGIDMap /Identity"),
                i("/DW 1000"),
                i("/Subtype /CIDFontType2"),
                i("/CIDSystemInfo"),
                i("<<"),
                i("/Supplement 0"),
                i("/Registry (Adobe)"),
                i("/Ordering (" + r.encoding + ")"),
                i(">>"),
                i(">>"),
                i("endobj"),
                (r.objectNumber = s()),
                i("<<"),
                i("/Type /Font"),
                i("/Subtype /Type0"),
                i("/ToUnicode " + f + " 0 R"),
                i("/BaseFont /" + Et(r.fontName)),
                i("/Encoding /" + r.encoding),
                i("/DescendantFonts [" + p + " 0 R]"),
                i(">>"),
                i("endobj"),
                (r.isAlreadyPutted = !0));
            }
          })(e);
        },
      ]),
        e.events.push([
          "putFont",
          function (e) {
            !(function (e) {
              var r = e.font,
                i = e.out,
                s = e.newObject,
                a = e.putStream;
              if (
                r.metadata instanceof t.API.TTFFont &&
                "WinAnsiEncoding" === r.encoding
              ) {
                for (
                  var o = r.metadata.rawData, h = "", u = 0;
                  u < o.length;
                  u++
                )
                  h += String.fromCharCode(o[u]);
                var c = s();
                (a({ data: h, addLength1: !0, objectId: c }), i("endobj"));
                var l = s();
                (a({
                  data: n(r.metadata.toUnicode),
                  addLength1: !0,
                  objectId: l,
                }),
                  i("endobj"));
                var f = s();
                (i("<<"),
                  i("/Descent " + r.metadata.decender),
                  i("/CapHeight " + r.metadata.capHeight),
                  i("/StemV " + r.metadata.stemV),
                  i("/Type /FontDescriptor"),
                  i("/FontFile2 " + c + " 0 R"),
                  i("/Flags 96"),
                  i("/FontBBox " + t.API.PDFObject.convert(r.metadata.bbox)),
                  i("/FontName /" + Et(r.fontName)),
                  i("/ItalicAngle " + r.metadata.italicAngle),
                  i("/Ascent " + r.metadata.ascender),
                  i(">>"),
                  i("endobj"),
                  (r.objectNumber = s()));
                for (var d = 0; d < r.metadata.hmtx.widths.length; d++)
                  r.metadata.hmtx.widths[d] = parseInt(
                    r.metadata.hmtx.widths[d] *
                      (1e3 / r.metadata.head.unitsPerEm),
                  );
                (i(
                  "<</Subtype/TrueType/Type/Font/ToUnicode " +
                    l +
                    " 0 R/BaseFont/" +
                    Et(r.fontName) +
                    "/FontDescriptor " +
                    f +
                    " 0 R/Encoding/" +
                    r.encoding +
                    " /FirstChar 29 /LastChar 255 /Widths " +
                    t.API.PDFObject.convert(r.metadata.hmtx.widths) +
                    ">>",
                ),
                  i("endobj"),
                  (r.isAlreadyPutted = !0));
              }
            })(e);
          },
        ]));
      var i = function (t) {
        var e,
          n = t.text || "",
          i = t.x,
          s = t.y,
          a = t.options || {},
          o = t.mutex || {},
          h = o.pdfEscape,
          u = o.activeFontKey,
          c = o.fonts,
          l = u,
          f = "",
          d = 0,
          p = "",
          g = c[l].encoding;
        if ("Identity-H" !== c[l].encoding)
          return { text: n, x: i, y: s, options: a, mutex: o };
        for (
          p = n, l = u, Array.isArray(n) && (p = n[0]), d = 0;
          d < p.length;
          d += 1
        )
          (c[l].metadata.hasOwnProperty("cmap") &&
            (e = c[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]),
            e ||
            (p[d].charCodeAt(0) < 256 &&
              c[l].metadata.hasOwnProperty("Unicode"))
              ? (f += p[d])
              : (f += ""));
        var v = "";
        return (
          parseInt(l.slice(1)) < 14 || "WinAnsiEncoding" === g
            ? (v = h(f, l)
                .split("")
                .map(function (t) {
                  return t.charCodeAt(0).toString(16);
                })
                .join(""))
            : "Identity-H" === g && (v = r(f, c[l])),
          (o.isHex = !0),
          { text: v, x: i, y: s, options: a, mutex: o }
        );
      };
      e.events.push([
        "postProcessText",
        function (t) {
          var e = t.text || "",
            r = [],
            n = { text: e, x: t.x, y: t.y, options: t.options, mutex: t.mutex };
          if (Array.isArray(e)) {
            var s = 0;
            for (s = 0; s < e.length; s += 1)
              Array.isArray(e[s]) && 3 === e[s].length
                ? r.push([
                    i(Object.assign({}, n, { text: e[s][0] })).text,
                    e[s][1],
                    e[s][2],
                  ])
                : r.push(i(Object.assign({}, n, { text: e[s] })).text);
            t.text = r;
          } else t.text = i(Object.assign({}, n, { text: e })).text;
        },
      ]);
    })(Ct),
    /**
     * @license
     * jsPDF virtual FileSystem functionality
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function (t) {
      var e = function () {
        return (void 0 === this.internal.vFS && (this.internal.vFS = {}), !0);
      };
      ((t.existsFileInVFS = function (t) {
        return (e.call(this), void 0 !== this.internal.vFS[t]);
      }),
        (t.addFileToVFS = function (t, r) {
          return (e.call(this), (this.internal.vFS[t] = r), this);
        }),
        (t.getFileFromVFS = function (t) {
          return (
            e.call(this),
            void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null
          );
        }));
    })(Ct.API),
    /**
     * @license
     * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
     * MIT License
     */
    (function (t) {
      t.__bidiEngine__ = t.prototype.__bidiEngine__ = function (t) {
        var r,
          n,
          i,
          s,
          a,
          o,
          h,
          u = e,
          c = [
            [0, 3, 0, 1, 0, 0, 0],
            [0, 3, 0, 1, 2, 2, 0],
            [0, 3, 0, 17, 2, 0, 1],
            [0, 3, 5, 5, 4, 1, 0],
            [0, 3, 21, 21, 4, 0, 1],
            [0, 3, 5, 5, 4, 2, 0],
          ],
          l = [
            [2, 0, 1, 1, 0, 1, 0],
            [2, 0, 1, 1, 0, 2, 0],
            [2, 0, 2, 1, 3, 2, 0],
            [2, 0, 2, 33, 3, 1, 1],
          ],
          f = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
          d = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
          p = [
            "(",
            ")",
            "(",
            "<",
            ">",
            "<",
            "[",
            "]",
            "[",
            "{",
            "}",
            "{",
            "«",
            "»",
            "«",
            "‹",
            "›",
            "‹",
            "⁅",
            "⁆",
            "⁅",
            "⁽",
            "⁾",
            "⁽",
            "₍",
            "₎",
            "₍",
            "≤",
            "≥",
            "≤",
            "〈",
            "〉",
            "〈",
            "﹙",
            "﹚",
            "﹙",
            "﹛",
            "﹜",
            "﹛",
            "﹝",
            "﹞",
            "﹝",
            "﹤",
            "﹥",
            "﹤",
          ],
          g = new RegExp(
            /^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/,
          ),
          v = !1,
          m = 0;
        this.__bidiEngine__ = {};
        var y = function (t) {
            var e = t.charCodeAt(),
              r = e >> 8,
              n = d[r];
            return void 0 !== n
              ? u[256 * n + (255 & e)]
              : 252 === r || 253 === r
                ? "AL"
                : g.test(r)
                  ? "L"
                  : 8 === r
                    ? "R"
                    : "N";
          },
          b = function (t) {
            for (var e, r = 0; r < t.length; r++) {
              if ("L" === (e = y(t.charAt(r)))) return !1;
              if ("R" === e) return !0;
            }
            return !1;
          },
          w = function (t, e, a, o) {
            var h,
              u,
              c,
              l,
              f = e[o];
            switch (f) {
              case "L":
              case "R":
                v = !1;
                break;
              case "N":
              case "AN":
                break;
              case "EN":
                v && (f = "AN");
                break;
              case "AL":
                ((v = !0), (f = "R"));
                break;
              case "WS":
                f = "N";
                break;
              case "CS":
                (o < 1 ||
                o + 1 >= e.length ||
                ("EN" !== (h = a[o - 1]) && "AN" !== h) ||
                ("EN" !== (u = e[o + 1]) && "AN" !== u)
                  ? (f = "N")
                  : v && (u = "AN"),
                  (f = u === h ? u : "N"));
                break;
              case "ES":
                f =
                  "EN" === (h = o > 0 ? a[o - 1] : "B") &&
                  o + 1 < e.length &&
                  "EN" === e[o + 1]
                    ? "EN"
                    : "N";
                break;
              case "ET":
                if (o > 0 && "EN" === a[o - 1]) {
                  f = "EN";
                  break;
                }
                if (v) {
                  f = "N";
                  break;
                }
                for (c = o + 1, l = e.length; c < l && "ET" === e[c]; ) c++;
                f = c < l && "EN" === e[c] ? "EN" : "N";
                break;
              case "NSM":
                if (i && !s) {
                  for (l = e.length, c = o + 1; c < l && "NSM" === e[c]; ) c++;
                  if (c < l) {
                    var d = t[o],
                      p = (d >= 1425 && d <= 2303) || 64286 === d;
                    if (((h = e[c]), p && ("R" === h || "AL" === h))) {
                      f = "R";
                      break;
                    }
                  }
                }
                f = o < 1 || "B" === (h = e[o - 1]) ? "N" : a[o - 1];
                break;
              case "B":
                ((v = !1), (r = !0), (f = m));
                break;
              case "S":
                ((n = !0), (f = "N"));
                break;
              case "LRE":
              case "RLE":
              case "LRO":
              case "RLO":
              case "PDF":
                v = !1;
                break;
              case "BN":
                f = "N";
            }
            return f;
          },
          x = function (t, e, r) {
            var n = t.split("");
            return (
              r && S(n, r, { hiLevel: m }),
              n.reverse(),
              e && e.reverse(),
              n.join("")
            );
          },
          S = function (t, e, i) {
            var s,
              a,
              o,
              h,
              u,
              d = -1,
              p = t.length,
              g = 0,
              b = [],
              x = m ? l : c,
              S = [];
            for (v = !1, r = !1, n = !1, a = 0; a < p; a++) S[a] = y(t[a]);
            for (o = 0; o < p; o++) {
              if (
                ((u = g),
                (b[o] = w(t, S, b, o)),
                (s = 240 & (g = x[u][f[b[o]]])),
                (g &= 15),
                (e[o] = h = x[g][5]),
                s > 0)
              )
                if (16 === s) {
                  for (a = d; a < o; a++) e[a] = 1;
                  d = -1;
                } else d = -1;
              if (x[g][6]) -1 === d && (d = o);
              else if (d > -1) {
                for (a = d; a < o; a++) e[a] = h;
                d = -1;
              }
              ("B" === S[o] && (e[o] = 0), (i.hiLevel |= h));
            }
            n &&
              (function (t, e, r) {
                for (var n = 0; n < r; n++)
                  if ("S" === t[n]) {
                    e[n] = m;
                    for (var i = n - 1; i >= 0 && "WS" === t[i]; i--) e[i] = m;
                  }
              })(S, e, p);
          },
          A = function (t, e, n, i, s) {
            if (!(s.hiLevel < t)) {
              if (1 === t && 1 === m && !r)
                return (e.reverse(), void (n && n.reverse()));
              for (var a, o, h, u, c = e.length, l = 0; l < c; ) {
                if (i[l] >= t) {
                  for (h = l + 1; h < c && i[h] >= t; ) h++;
                  for (u = l, o = h - 1; u < o; u++, o--)
                    ((a = e[u]),
                      (e[u] = e[o]),
                      (e[o] = a),
                      n && ((a = n[u]), (n[u] = n[o]), (n[o] = a)));
                  l = h;
                }
                l++;
              }
            }
          },
          E = function (t, e, r) {
            var n = t.split(""),
              i = { hiLevel: m };
            return (
              r || (r = []),
              S(n, r, i),
              (function (t, e, r) {
                if (0 !== r.hiLevel && h)
                  for (var n, i = 0; i < t.length; i++)
                    1 === e[i] &&
                      (n = p.indexOf(t[i])) >= 0 &&
                      (t[i] = p[n + 1]);
              })(n, r, i),
              A(2, n, e, r, i),
              A(1, n, e, r, i),
              n.join("")
            );
          };
        return (
          (this.__bidiEngine__.doBidiReorder = function (t, e, r) {
            if (
              ((function (t, e) {
                if (e) for (var r = 0; r < t.length; r++) e[r] = r;
                (void 0 === s && (s = b(t)), void 0 === o && (o = b(t)));
              })(t, e),
              i || !a || o)
            )
              if (i && a && s ^ o) ((m = s ? 1 : 0), (t = x(t, e, r)));
              else if (!i && a && o)
                ((m = s ? 1 : 0), (t = E(t, e, r)), (t = x(t, e)));
              else if (!i || s || a || o) {
                if (i && !a && s ^ o)
                  ((t = x(t, e)),
                    s
                      ? ((m = 0), (t = E(t, e, r)))
                      : ((m = 1), (t = E(t, e, r)), (t = x(t, e))));
                else if (i && s && !a && o)
                  ((m = 1), (t = E(t, e, r)), (t = x(t, e)));
                else if (!i && !a && s ^ o) {
                  var n = h;
                  s
                    ? ((m = 1),
                      (t = E(t, e, r)),
                      (m = 0),
                      (h = !1),
                      (t = E(t, e, r)),
                      (h = n))
                    : ((m = 0),
                      (t = E(t, e, r)),
                      (t = x(t, e)),
                      (m = 1),
                      (h = !1),
                      (t = E(t, e, r)),
                      (h = n),
                      (t = x(t, e)));
                }
              } else ((m = 0), (t = E(t, e, r)));
            else ((m = s ? 1 : 0), (t = E(t, e, r)));
            return t;
          }),
          (this.__bidiEngine__.setOptions = function (t) {
            t &&
              ((i = t.isInputVisual),
              (a = t.isOutputVisual),
              (s = t.isInputRtl),
              (o = t.isOutputRtl),
              (h = t.isSymmetricSwapping));
          }),
          this.__bidiEngine__.setOptions(t),
          this.__bidiEngine__
        );
      };
      var e = [
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "S",
          "B",
          "S",
          "WS",
          "B",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "B",
          "B",
          "B",
          "S",
          "WS",
          "N",
          "N",
          "ET",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "N",
          "ES",
          "CS",
          "ES",
          "CS",
          "CS",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "CS",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "N",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "B",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "CS",
          "N",
          "ET",
          "ET",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "L",
          "N",
          "N",
          "BN",
          "N",
          "N",
          "ET",
          "ET",
          "EN",
          "EN",
          "N",
          "L",
          "N",
          "N",
          "N",
          "EN",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "ET",
          "N",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "R",
          "NSM",
          "R",
          "NSM",
          "NSM",
          "R",
          "NSM",
          "NSM",
          "R",
          "NSM",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "N",
          "N",
          "N",
          "N",
          "N",
          "R",
          "R",
          "R",
          "R",
          "R",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "N",
          "N",
          "AL",
          "ET",
          "ET",
          "AL",
          "CS",
          "AL",
          "N",
          "N",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "AL",
          "AL",
          "N",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "AN",
          "ET",
          "AN",
          "AN",
          "AL",
          "AL",
          "AL",
          "NSM",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "AN",
          "N",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "AL",
          "AL",
          "NSM",
          "NSM",
          "N",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "AL",
          "AL",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "N",
          "AL",
          "AL",
          "NSM",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "N",
          "N",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "AL",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "R",
          "R",
          "N",
          "N",
          "N",
          "N",
          "R",
          "N",
          "N",
          "N",
          "N",
          "N",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "WS",
          "BN",
          "BN",
          "BN",
          "L",
          "R",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "WS",
          "B",
          "LRE",
          "RLE",
          "PDF",
          "LRO",
          "RLO",
          "CS",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "CS",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "WS",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "N",
          "LRI",
          "RLI",
          "FSI",
          "PDI",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "BN",
          "EN",
          "L",
          "N",
          "N",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "ES",
          "ES",
          "N",
          "N",
          "N",
          "L",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "ES",
          "ES",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "R",
          "NSM",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "ES",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "N",
          "R",
          "R",
          "R",
          "R",
          "R",
          "N",
          "R",
          "N",
          "R",
          "R",
          "N",
          "R",
          "R",
          "N",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "R",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "NSM",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "CS",
          "N",
          "CS",
          "N",
          "N",
          "CS",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "ET",
          "N",
          "N",
          "ES",
          "ES",
          "N",
          "N",
          "N",
          "N",
          "N",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "N",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "N",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "AL",
          "N",
          "N",
          "BN",
          "N",
          "N",
          "N",
          "ET",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "N",
          "ES",
          "CS",
          "ES",
          "CS",
          "CS",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "EN",
          "CS",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "L",
          "L",
          "L",
          "L",
          "L",
          "L",
          "N",
          "N",
          "L",
          "L",
          "L",
          "N",
          "N",
          "N",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "ET",
          "ET",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
          "N",
        ],
        r = new t.__bidiEngine__({ isInputVisual: !0 });
      t.API.events.push([
        "postProcessText",
        function (t) {
          var e = t.text,
            n = (t.x, t.y, t.options || {}),
            i = (t.mutex, n.lang, []);
          if (
            ((n.isInputVisual =
              "boolean" != typeof n.isInputVisual || n.isInputVisual),
            r.setOptions(n),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            var s = 0;
            for (i = [], s = 0; s < e.length; s += 1)
              "[object Array]" === Object.prototype.toString.call(e[s])
                ? i.push([r.doBidiReorder(e[s][0]), e[s][1], e[s][2]])
                : i.push([r.doBidiReorder(e[s])]);
            t.text = i;
          } else t.text = r.doBidiReorder(e);
          r.setOptions({ isInputVisual: !0 });
        },
      ]);
    })(Ct),
    (Ct.API.TTFFont = (function () {
      function t(t) {
        var e;
        if (
          ((this.rawData = t),
          (e = this.contents = new Ye(t)),
          (this.contents.pos = 4),
          "ttcf" === e.readString(4))
        )
          throw new Error("TTCF not supported.");
        ((e.pos = 0),
          this.parse(),
          (this.subset = new gr(this)),
          this.registerTTF());
      }
      return (
        (t.open = function (e) {
          return new t(e);
        }),
        (t.prototype.parse = function () {
          return (
            (this.directory = new $e(this.contents)),
            (this.head = new tr(this)),
            (this.name = new or(this)),
            (this.cmap = new rr(this)),
            (this.toUnicode = {}),
            (this.hhea = new nr(this)),
            (this.maxp = new hr(this)),
            (this.hmtx = new ur(this)),
            (this.post = new sr(this)),
            (this.os2 = new ir(this)),
            (this.loca = new pr(this)),
            (this.glyf = new lr(this)),
            (this.ascender =
              (this.os2.exists && this.os2.ascender) || this.hhea.ascender),
            (this.decender =
              (this.os2.exists && this.os2.decender) || this.hhea.decender),
            (this.lineGap =
              (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
            (this.bbox = [
              this.head.xMin,
              this.head.yMin,
              this.head.xMax,
              this.head.yMax,
            ])
          );
        }),
        (t.prototype.registerTTF = function () {
          var t, e, r, n, i;
          if (
            ((this.scaleFactor = 1e3 / this.head.unitsPerEm),
            (this.bbox = function () {
              var e, r, n, i;
              for (i = [], e = 0, r = (n = this.bbox).length; e < r; e++)
                ((t = n[e]), i.push(Math.round(t * this.scaleFactor)));
              return i;
            }.call(this)),
            (this.stemV = 0),
            this.post.exists
              ? ((r = 255 & (n = this.post.italic_angle)),
                0 != (32768 & (e = n >> 16)) && (e = -(1 + (65535 ^ e))),
                (this.italicAngle = +(e + "." + r)))
              : (this.italicAngle = 0),
            (this.ascender = Math.round(this.ascender * this.scaleFactor)),
            (this.decender = Math.round(this.decender * this.scaleFactor)),
            (this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
            (this.capHeight =
              (this.os2.exists && this.os2.capHeight) || this.ascender),
            (this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
            (this.familyClass =
              ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
            (this.isSerif =
              1 === (i = this.familyClass) ||
              2 === i ||
              3 === i ||
              4 === i ||
              5 === i ||
              7 === i),
            (this.isScript = 10 === this.familyClass),
            (this.flags = 0),
            this.post.isFixedPitch && (this.flags |= 1),
            this.isSerif && (this.flags |= 2),
            this.isScript && (this.flags |= 8),
            0 !== this.italicAngle && (this.flags |= 64),
            (this.flags |= 32),
            !this.cmap.unicode)
          )
            throw new Error("No unicode cmap for font");
        }),
        (t.prototype.characterToGlyph = function (t) {
          var e;
          return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0;
        }),
        (t.prototype.widthOfGlyph = function (t) {
          var e;
          return (
            (e = 1e3 / this.head.unitsPerEm),
            this.hmtx.forGlyph(t).advance * e
          );
        }),
        (t.prototype.widthOfString = function (t, e, r) {
          var n, i, s, a;
          for (
            s = 0, i = 0, a = (t = "" + t).length;
            0 <= a ? i < a : i > a;
            i = 0 <= a ? ++i : --i
          )
            ((n = t.charCodeAt(i)),
              (s +=
                this.widthOfGlyph(this.characterToGlyph(n)) + r * (1e3 / e) ||
                0));
          return s * (e / 1e3);
        }),
        (t.prototype.lineHeight = function (t, e) {
          var r;
          return (
            null == e && (e = !1),
            (r = e ? this.lineGap : 0),
            ((this.ascender + r - this.decender) / 1e3) * t
          );
        }),
        t
      );
    })()));
  var Xe,
    Ye = (function () {
      function t(t) {
        ((this.data = null != t ? t : []),
          (this.pos = 0),
          (this.length = this.data.length));
      }
      return (
        (t.prototype.readByte = function () {
          return this.data[this.pos++];
        }),
        (t.prototype.writeByte = function (t) {
          return (this.data[this.pos++] = t);
        }),
        (t.prototype.readUInt32 = function () {
          return (
            16777216 * this.readByte() +
            (this.readByte() << 16) +
            (this.readByte() << 8) +
            this.readByte()
          );
        }),
        (t.prototype.writeUInt32 = function (t) {
          return (
            this.writeByte((t >>> 24) & 255),
            this.writeByte((t >> 16) & 255),
            this.writeByte((t >> 8) & 255),
            this.writeByte(255 & t)
          );
        }),
        (t.prototype.readInt32 = function () {
          var t;
          return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
        }),
        (t.prototype.writeInt32 = function (t) {
          return (t < 0 && (t += 4294967296), this.writeUInt32(t));
        }),
        (t.prototype.readUInt16 = function () {
          return (this.readByte() << 8) | this.readByte();
        }),
        (t.prototype.writeUInt16 = function (t) {
          return (this.writeByte((t >> 8) & 255), this.writeByte(255 & t));
        }),
        (t.prototype.readInt16 = function () {
          var t;
          return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
        }),
        (t.prototype.writeInt16 = function (t) {
          return (t < 0 && (t += 65536), this.writeUInt16(t));
        }),
        (t.prototype.readString = function (t) {
          var e, r;
          for (r = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e)
            r[e] = String.fromCharCode(this.readByte());
          return r.join("");
        }),
        (t.prototype.writeString = function (t) {
          var e, r, n;
          for (
            n = [], e = 0, r = t.length;
            0 <= r ? e < r : e > r;
            e = 0 <= r ? ++e : --e
          )
            n.push(this.writeByte(t.charCodeAt(e)));
          return n;
        }),
        (t.prototype.readShort = function () {
          return this.readInt16();
        }),
        (t.prototype.writeShort = function (t) {
          return this.writeInt16(t);
        }),
        (t.prototype.readLongLong = function () {
          var t, e, r, n, i, s, a, o;
          return (
            (t = this.readByte()),
            (e = this.readByte()),
            (r = this.readByte()),
            (n = this.readByte()),
            (i = this.readByte()),
            (s = this.readByte()),
            (a = this.readByte()),
            (o = this.readByte()),
            128 & t
              ? -1 *
                (72057594037927940 * (255 ^ t) +
                  281474976710656 * (255 ^ e) +
                  1099511627776 * (255 ^ r) +
                  4294967296 * (255 ^ n) +
                  16777216 * (255 ^ i) +
                  65536 * (255 ^ s) +
                  256 * (255 ^ a) +
                  (255 ^ o) +
                  1)
              : 72057594037927940 * t +
                281474976710656 * e +
                1099511627776 * r +
                4294967296 * n +
                16777216 * i +
                65536 * s +
                256 * a +
                o
          );
        }),
        (t.prototype.writeLongLong = function (t) {
          var e, r;
          return (
            (e = Math.floor(t / 4294967296)),
            (r = 4294967295 & t),
            this.writeByte((e >> 24) & 255),
            this.writeByte((e >> 16) & 255),
            this.writeByte((e >> 8) & 255),
            this.writeByte(255 & e),
            this.writeByte((r >> 24) & 255),
            this.writeByte((r >> 16) & 255),
            this.writeByte((r >> 8) & 255),
            this.writeByte(255 & r)
          );
        }),
        (t.prototype.readInt = function () {
          return this.readInt32();
        }),
        (t.prototype.writeInt = function (t) {
          return this.writeInt32(t);
        }),
        (t.prototype.read = function (t) {
          var e, r;
          for (e = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r)
            e.push(this.readByte());
          return e;
        }),
        (t.prototype.write = function (t) {
          var e, r, n, i;
          for (i = [], r = 0, n = t.length; r < n; r++)
            ((e = t[r]), i.push(this.writeByte(e)));
          return i;
        }),
        t
      );
    })(),
    $e = (function () {
      var t;
      function e(t) {
        var e, r, n;
        for (
          this.scalarType = t.readInt(),
            this.tableCount = t.readShort(),
            this.searchRange = t.readShort(),
            this.entrySelector = t.readShort(),
            this.rangeShift = t.readShort(),
            this.tables = {},
            r = 0,
            n = this.tableCount;
          0 <= n ? r < n : r > n;
          r = 0 <= n ? ++r : --r
        )
          ((e = {
            tag: t.readString(4),
            checksum: t.readInt(),
            offset: t.readInt(),
            length: t.readInt(),
          }),
            (this.tables[e.tag] = e));
      }
      return (
        (e.prototype.encode = function (e) {
          var r, n, i, s, a, o, h, u, c, l, f, d, p;
          for (p in ((f = Object.keys(e).length),
          (o = Math.log(2)),
          (c = 16 * Math.floor(Math.log(f) / o)),
          (s = Math.floor(c / o)),
          (u = 16 * f - c),
          (n = new Ye()).writeInt(this.scalarType),
          n.writeShort(f),
          n.writeShort(c),
          n.writeShort(s),
          n.writeShort(u),
          (i = 16 * f),
          (h = n.pos + i),
          (a = null),
          (d = []),
          e))
            for (
              l = e[p],
                n.writeString(p),
                n.writeInt(t(l)),
                n.writeInt(h),
                n.writeInt(l.length),
                d = d.concat(l),
                "head" === p && (a = h),
                h += l.length;
              h % 4;
            )
              (d.push(0), h++);
          return (
            n.write(d),
            (r = 2981146554 - t(n.data)),
            (n.pos = a + 8),
            n.writeUInt32(r),
            n.data
          );
        }),
        (t = function (t) {
          var e, r, n, i;
          for (t = cr.call(t); t.length % 4; ) t.push(0);
          for (n = new Ye(t), r = 0, e = 0, i = t.length; e < i; e = e += 4)
            r += n.readUInt32();
          return 4294967295 & r;
        }),
        e
      );
    })(),
    Ze = {}.hasOwnProperty,
    Qe = function (t, e) {
      for (var r in e) Ze.call(e, r) && (t[r] = e[r]);
      function n() {
        this.constructor = t;
      }
      return (
        (n.prototype = e.prototype),
        (t.prototype = new n()),
        (t.__super__ = e.prototype),
        t
      );
    };
  Xe = (function () {
    function t(t) {
      var e;
      ((this.file = t),
        (e = this.file.directory.tables[this.tag]),
        (this.exists = !!e),
        e &&
          ((this.offset = e.offset),
          (this.length = e.length),
          this.parse(this.file.contents)));
    }
    return (
      (t.prototype.parse = function () {}),
      (t.prototype.encode = function () {}),
      (t.prototype.raw = function () {
        return this.exists
          ? ((this.file.contents.pos = this.offset),
            this.file.contents.read(this.length))
          : null;
      }),
      t
    );
  })();
  var tr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "head"),
        (e.prototype.parse = function (t) {
          return (
            (t.pos = this.offset),
            (this.version = t.readInt()),
            (this.revision = t.readInt()),
            (this.checkSumAdjustment = t.readInt()),
            (this.magicNumber = t.readInt()),
            (this.flags = t.readShort()),
            (this.unitsPerEm = t.readShort()),
            (this.created = t.readLongLong()),
            (this.modified = t.readLongLong()),
            (this.xMin = t.readShort()),
            (this.yMin = t.readShort()),
            (this.xMax = t.readShort()),
            (this.yMax = t.readShort()),
            (this.macStyle = t.readShort()),
            (this.lowestRecPPEM = t.readShort()),
            (this.fontDirectionHint = t.readShort()),
            (this.indexToLocFormat = t.readShort()),
            (this.glyphDataFormat = t.readShort())
          );
        }),
        (e.prototype.encode = function (t) {
          var e;
          return (
            (e = new Ye()).writeInt(this.version),
            e.writeInt(this.revision),
            e.writeInt(this.checkSumAdjustment),
            e.writeInt(this.magicNumber),
            e.writeShort(this.flags),
            e.writeShort(this.unitsPerEm),
            e.writeLongLong(this.created),
            e.writeLongLong(this.modified),
            e.writeShort(this.xMin),
            e.writeShort(this.yMin),
            e.writeShort(this.xMax),
            e.writeShort(this.yMax),
            e.writeShort(this.macStyle),
            e.writeShort(this.lowestRecPPEM),
            e.writeShort(this.fontDirectionHint),
            e.writeShort(t),
            e.writeShort(this.glyphDataFormat),
            e.data
          );
        }),
        e
      );
    })(),
    er = (function () {
      function t(t, e) {
        var r, n, i, s, a, o, h, u, c, l, f, d, p, g, v, m, y;
        switch (
          ((this.platformID = t.readUInt16()),
          (this.encodingID = t.readShort()),
          (this.offset = e + t.readInt()),
          (c = t.pos),
          (t.pos = this.offset),
          (this.format = t.readUInt16()),
          (this.length = t.readUInt16()),
          (this.language = t.readUInt16()),
          (this.isUnicode =
            (3 === this.platformID &&
              1 === this.encodingID &&
              4 === this.format) ||
            (0 === this.platformID && 4 === this.format)),
          (this.codeMap = {}),
          this.format)
        ) {
          case 0:
            for (o = 0; o < 256; ++o) this.codeMap[o] = t.readByte();
            break;
          case 4:
            for (
              f = t.readUInt16(),
                l = f / 2,
                t.pos += 6,
                i = (function () {
                  var e, r;
                  for (
                    r = [], o = e = 0;
                    0 <= l ? e < l : e > l;
                    o = 0 <= l ? ++e : --e
                  )
                    r.push(t.readUInt16());
                  return r;
                })(),
                t.pos += 2,
                p = (function () {
                  var e, r;
                  for (
                    r = [], o = e = 0;
                    0 <= l ? e < l : e > l;
                    o = 0 <= l ? ++e : --e
                  )
                    r.push(t.readUInt16());
                  return r;
                })(),
                h = (function () {
                  var e, r;
                  for (
                    r = [], o = e = 0;
                    0 <= l ? e < l : e > l;
                    o = 0 <= l ? ++e : --e
                  )
                    r.push(t.readUInt16());
                  return r;
                })(),
                u = (function () {
                  var e, r;
                  for (
                    r = [], o = e = 0;
                    0 <= l ? e < l : e > l;
                    o = 0 <= l ? ++e : --e
                  )
                    r.push(t.readUInt16());
                  return r;
                })(),
                n = (this.length - t.pos + this.offset) / 2,
                a = (function () {
                  var e, r;
                  for (
                    r = [], o = e = 0;
                    0 <= n ? e < n : e > n;
                    o = 0 <= n ? ++e : --e
                  )
                    r.push(t.readUInt16());
                  return r;
                })(),
                o = v = 0,
                y = i.length;
              v < y;
              o = ++v
            )
              for (
                g = i[o], r = m = d = p[o];
                d <= g ? m <= g : m >= g;
                r = d <= g ? ++m : --m
              )
                (0 === u[o]
                  ? (s = r + h[o])
                  : 0 !== (s = a[u[o] / 2 + (r - d) - (l - o)] || 0) &&
                    (s += h[o]),
                  (this.codeMap[r] = 65535 & s));
        }
        t.pos = c;
      }
      return (
        (t.encode = function (t, e) {
          var r,
            n,
            i,
            s,
            a,
            o,
            h,
            u,
            c,
            l,
            f,
            d,
            p,
            g,
            v,
            m,
            y,
            b,
            w,
            x,
            S,
            A,
            E,
            F,
            N,
            P,
            I,
            L,
            C,
            D,
            _,
            R,
            B,
            T,
            j,
            k,
            O,
            M,
            q,
            H,
            V,
            U,
            K,
            z,
            W,
            G;
          switch (
            ((L = new Ye()),
            (s = Object.keys(t).sort(function (t, e) {
              return t - e;
            })),
            e)
          ) {
            case "macroman":
              for (
                p = 0,
                  g = (function () {
                    var t = [];
                    for (d = 0; d < 256; ++d) t.push(0);
                    return t;
                  })(),
                  m = { 0: 0 },
                  i = {},
                  C = 0,
                  B = s.length;
                C < B;
                C++
              )
                (null == m[(K = t[(n = s[C])])] && (m[K] = ++p),
                  (i[n] = { old: t[n], new: m[t[n]] }),
                  (g[n] = m[t[n]]));
              return (
                L.writeUInt16(1),
                L.writeUInt16(0),
                L.writeUInt32(12),
                L.writeUInt16(0),
                L.writeUInt16(262),
                L.writeUInt16(0),
                L.write(g),
                { charMap: i, subtable: L.data, maxGlyphID: p + 1 }
              );
            case "unicode":
              for (
                P = [],
                  c = [],
                  y = 0,
                  m = {},
                  r = {},
                  v = h = null,
                  D = 0,
                  T = s.length;
                D < T;
                D++
              )
                (null == m[(w = t[(n = s[D])])] && (m[w] = ++y),
                  (r[n] = { old: w, new: m[w] }),
                  (a = m[w] - n),
                  (null != v && a === h) ||
                    (v && c.push(v), P.push(n), (h = a)),
                  (v = n));
              for (
                v && c.push(v),
                  c.push(65535),
                  P.push(65535),
                  F = 2 * (E = P.length),
                  A = 2 * Math.pow(Math.log(E) / Math.LN2, 2),
                  l = Math.log(A / 2) / Math.LN2,
                  S = 2 * E - A,
                  o = [],
                  x = [],
                  f = [],
                  d = _ = 0,
                  j = P.length;
                _ < j;
                d = ++_
              ) {
                if (((N = P[d]), (u = c[d]), 65535 === N)) {
                  (o.push(0), x.push(0));
                  break;
                }
                if (N - (I = r[N].new) >= 32768)
                  for (
                    o.push(0), x.push(2 * (f.length + E - d)), n = R = N;
                    N <= u ? R <= u : R >= u;
                    n = N <= u ? ++R : --R
                  )
                    f.push(r[n].new);
                else (o.push(I - N), x.push(0));
              }
              for (
                L.writeUInt16(3),
                  L.writeUInt16(1),
                  L.writeUInt32(12),
                  L.writeUInt16(4),
                  L.writeUInt16(16 + 8 * E + 2 * f.length),
                  L.writeUInt16(0),
                  L.writeUInt16(F),
                  L.writeUInt16(A),
                  L.writeUInt16(l),
                  L.writeUInt16(S),
                  V = 0,
                  k = c.length;
                V < k;
                V++
              )
                ((n = c[V]), L.writeUInt16(n));
              for (L.writeUInt16(0), U = 0, O = P.length; U < O; U++)
                ((n = P[U]), L.writeUInt16(n));
              for (z = 0, M = o.length; z < M; z++)
                ((a = o[z]), L.writeUInt16(a));
              for (W = 0, q = x.length; W < q; W++)
                ((b = x[W]), L.writeUInt16(b));
              for (G = 0, H = f.length; G < H; G++)
                ((p = f[G]), L.writeUInt16(p));
              return { charMap: r, subtable: L.data, maxGlyphID: y + 1 };
          }
        }),
        t
      );
    })(),
    rr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "cmap"),
        (e.prototype.parse = function (t) {
          var e, r, n;
          for (
            t.pos = this.offset,
              this.version = t.readUInt16(),
              n = t.readUInt16(),
              this.tables = [],
              this.unicode = null,
              r = 0;
            0 <= n ? r < n : r > n;
            r = 0 <= n ? ++r : --r
          )
            ((e = new er(t, this.offset)),
              this.tables.push(e),
              e.isUnicode && null == this.unicode && (this.unicode = e));
          return !0;
        }),
        (e.encode = function (t, e) {
          var r, n;
          return (
            null == e && (e = "macroman"),
            (r = er.encode(t, e)),
            (n = new Ye()).writeUInt16(0),
            n.writeUInt16(1),
            (r.table = n.data.concat(r.subtable)),
            r
          );
        }),
        e
      );
    })(),
    nr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "hhea"),
        (e.prototype.parse = function (t) {
          return (
            (t.pos = this.offset),
            (this.version = t.readInt()),
            (this.ascender = t.readShort()),
            (this.decender = t.readShort()),
            (this.lineGap = t.readShort()),
            (this.advanceWidthMax = t.readShort()),
            (this.minLeftSideBearing = t.readShort()),
            (this.minRightSideBearing = t.readShort()),
            (this.xMaxExtent = t.readShort()),
            (this.caretSlopeRise = t.readShort()),
            (this.caretSlopeRun = t.readShort()),
            (this.caretOffset = t.readShort()),
            (t.pos += 8),
            (this.metricDataFormat = t.readShort()),
            (this.numberOfMetrics = t.readUInt16())
          );
        }),
        e
      );
    })(),
    ir = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "OS/2"),
        (e.prototype.parse = function (t) {
          if (
            ((t.pos = this.offset),
            (this.version = t.readUInt16()),
            (this.averageCharWidth = t.readShort()),
            (this.weightClass = t.readUInt16()),
            (this.widthClass = t.readUInt16()),
            (this.type = t.readShort()),
            (this.ySubscriptXSize = t.readShort()),
            (this.ySubscriptYSize = t.readShort()),
            (this.ySubscriptXOffset = t.readShort()),
            (this.ySubscriptYOffset = t.readShort()),
            (this.ySuperscriptXSize = t.readShort()),
            (this.ySuperscriptYSize = t.readShort()),
            (this.ySuperscriptXOffset = t.readShort()),
            (this.ySuperscriptYOffset = t.readShort()),
            (this.yStrikeoutSize = t.readShort()),
            (this.yStrikeoutPosition = t.readShort()),
            (this.familyClass = t.readShort()),
            (this.panose = (function () {
              var e, r;
              for (r = [], e = 0; e < 10; ++e) r.push(t.readByte());
              return r;
            })()),
            (this.charRange = (function () {
              var e, r;
              for (r = [], e = 0; e < 4; ++e) r.push(t.readInt());
              return r;
            })()),
            (this.vendorID = t.readString(4)),
            (this.selection = t.readShort()),
            (this.firstCharIndex = t.readShort()),
            (this.lastCharIndex = t.readShort()),
            this.version > 0 &&
              ((this.ascent = t.readShort()),
              (this.descent = t.readShort()),
              (this.lineGap = t.readShort()),
              (this.winAscent = t.readShort()),
              (this.winDescent = t.readShort()),
              (this.codePageRange = (function () {
                var e, r;
                for (r = [], e = 0; e < 2; e = ++e) r.push(t.readInt());
                return r;
              })()),
              this.version > 1))
          )
            return (
              (this.xHeight = t.readShort()),
              (this.capHeight = t.readShort()),
              (this.defaultChar = t.readShort()),
              (this.breakChar = t.readShort()),
              (this.maxContext = t.readShort())
            );
        }),
        e
      );
    })(),
    sr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "post"),
        (e.prototype.parse = function (t) {
          var e, r, n;
          switch (
            ((t.pos = this.offset),
            (this.format = t.readInt()),
            (this.italicAngle = t.readInt()),
            (this.underlinePosition = t.readShort()),
            (this.underlineThickness = t.readShort()),
            (this.isFixedPitch = t.readInt()),
            (this.minMemType42 = t.readInt()),
            (this.maxMemType42 = t.readInt()),
            (this.minMemType1 = t.readInt()),
            (this.maxMemType1 = t.readInt()),
            this.format)
          ) {
            case 65536:
              break;
            case 131072:
              var i;
              for (
                r = t.readUInt16(), this.glyphNameIndex = [], i = 0;
                0 <= r ? i < r : i > r;
                i = 0 <= r ? ++i : --i
              )
                this.glyphNameIndex.push(t.readUInt16());
              for (this.names = [], n = []; t.pos < this.offset + this.length; )
                ((e = t.readByte()), n.push(this.names.push(t.readString(e))));
              return n;
            case 151552:
              return ((r = t.readUInt16()), (this.offsets = t.read(r)));
            case 196608:
              break;
            case 262144:
              return (this.map = function () {
                var e, r, n;
                for (
                  n = [], i = e = 0, r = this.file.maxp.numGlyphs;
                  0 <= r ? e < r : e > r;
                  i = 0 <= r ? ++e : --e
                )
                  n.push(t.readUInt32());
                return n;
              }.call(this));
          }
        }),
        e
      );
    })(),
    ar = function (t, e) {
      ((this.raw = t),
        (this.length = t.length),
        (this.platformID = e.platformID),
        (this.encodingID = e.encodingID),
        (this.languageID = e.languageID));
    },
    or = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "name"),
        (e.prototype.parse = function (t) {
          var e, r, n, i, s, a, o, h, u, c, l;
          for (
            t.pos = this.offset,
              t.readShort(),
              e = t.readShort(),
              a = t.readShort(),
              r = [],
              i = 0;
            0 <= e ? i < e : i > e;
            i = 0 <= e ? ++i : --i
          )
            r.push({
              platformID: t.readShort(),
              encodingID: t.readShort(),
              languageID: t.readShort(),
              nameID: t.readShort(),
              length: t.readShort(),
              offset: this.offset + a + t.readShort(),
            });
          for (o = {}, i = u = 0, c = r.length; u < c; i = ++u)
            ((n = r[i]),
              (t.pos = n.offset),
              (h = t.readString(n.length)),
              (s = new ar(h, n)),
              null == o[(l = n.nameID)] && (o[l] = []),
              o[n.nameID].push(s));
          ((this.strings = o),
            (this.copyright = o[0]),
            (this.fontFamily = o[1]),
            (this.fontSubfamily = o[2]),
            (this.uniqueSubfamily = o[3]),
            (this.fontName = o[4]),
            (this.version = o[5]));
          try {
            this.postscriptName = o[6][0].raw.replace(
              /[\x00-\x19\x80-\xff]/g,
              "",
            );
          } catch (t) {
            this.postscriptName = o[4][0].raw.replace(
              /[\x00-\x19\x80-\xff]/g,
              "",
            );
          }
          return (
            (this.trademark = o[7]),
            (this.manufacturer = o[8]),
            (this.designer = o[9]),
            (this.description = o[10]),
            (this.vendorUrl = o[11]),
            (this.designerUrl = o[12]),
            (this.license = o[13]),
            (this.licenseUrl = o[14]),
            (this.preferredFamily = o[15]),
            (this.preferredSubfamily = o[17]),
            (this.compatibleFull = o[18]),
            (this.sampleText = o[19])
          );
        }),
        e
      );
    })(),
    hr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "maxp"),
        (e.prototype.parse = function (t) {
          return (
            (t.pos = this.offset),
            (this.version = t.readInt()),
            (this.numGlyphs = t.readUInt16()),
            (this.maxPoints = t.readUInt16()),
            (this.maxContours = t.readUInt16()),
            (this.maxCompositePoints = t.readUInt16()),
            (this.maxComponentContours = t.readUInt16()),
            (this.maxZones = t.readUInt16()),
            (this.maxTwilightPoints = t.readUInt16()),
            (this.maxStorage = t.readUInt16()),
            (this.maxFunctionDefs = t.readUInt16()),
            (this.maxInstructionDefs = t.readUInt16()),
            (this.maxStackElements = t.readUInt16()),
            (this.maxSizeOfInstructions = t.readUInt16()),
            (this.maxComponentElements = t.readUInt16()),
            (this.maxComponentDepth = t.readUInt16())
          );
        }),
        e
      );
    })(),
    ur = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "hmtx"),
        (e.prototype.parse = function (t) {
          var e, r, n, i, s, a, o;
          for (
            t.pos = this.offset,
              this.metrics = [],
              e = 0,
              a = this.file.hhea.numberOfMetrics;
            0 <= a ? e < a : e > a;
            e = 0 <= a ? ++e : --e
          )
            this.metrics.push({ advance: t.readUInt16(), lsb: t.readInt16() });
          for (
            n = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
              this.leftSideBearings = (function () {
                var r, i;
                for (
                  i = [], e = r = 0;
                  0 <= n ? r < n : r > n;
                  e = 0 <= n ? ++r : --r
                )
                  i.push(t.readInt16());
                return i;
              })(),
              this.widths = function () {
                var t, e, r, n;
                for (n = [], t = 0, e = (r = this.metrics).length; t < e; t++)
                  ((i = r[t]), n.push(i.advance));
                return n;
              }.call(this),
              r = this.widths[this.widths.length - 1],
              o = [],
              e = s = 0;
            0 <= n ? s < n : s > n;
            e = 0 <= n ? ++s : --s
          )
            o.push(this.widths.push(r));
          return o;
        }),
        (e.prototype.forGlyph = function (t) {
          return t in this.metrics
            ? this.metrics[t]
            : {
                advance: this.metrics[this.metrics.length - 1].advance,
                lsb: this.leftSideBearings[t - this.metrics.length],
              };
        }),
        e
      );
    })(),
    cr = [].slice,
    lr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "glyf"),
        (e.prototype.parse = function () {
          return (this.cache = {});
        }),
        (e.prototype.glyphFor = function (t) {
          var e, r, n, i, s, a, o, h, u, c;
          return t in this.cache
            ? this.cache[t]
            : ((i = this.file.loca),
              (e = this.file.contents),
              (r = i.indexOf(t)),
              0 === (n = i.lengthOf(t))
                ? (this.cache[t] = null)
                : ((e.pos = this.offset + r),
                  (s = (a = new Ye(e.read(n))).readShort()),
                  (h = a.readShort()),
                  (c = a.readShort()),
                  (o = a.readShort()),
                  (u = a.readShort()),
                  (this.cache[t] =
                    -1 === s
                      ? new dr(a, h, c, o, u)
                      : new fr(a, s, h, c, o, u)),
                  this.cache[t]));
        }),
        (e.prototype.encode = function (t, e, r) {
          var n, i, s, a, o;
          for (s = [], i = [], a = 0, o = e.length; a < o; a++)
            ((n = t[e[a]]), i.push(s.length), n && (s = s.concat(n.encode(r))));
          return (i.push(s.length), { table: s, offsets: i });
        }),
        e
      );
    })(),
    fr = (function () {
      function t(t, e, r, n, i, s) {
        ((this.raw = t),
          (this.numberOfContours = e),
          (this.xMin = r),
          (this.yMin = n),
          (this.xMax = i),
          (this.yMax = s),
          (this.compound = !1));
      }
      return (
        (t.prototype.encode = function () {
          return this.raw.data;
        }),
        t
      );
    })(),
    dr = (function () {
      function t(t, e, r, n, i) {
        var s, a;
        for (
          this.raw = t,
            this.xMin = e,
            this.yMin = r,
            this.xMax = n,
            this.yMax = i,
            this.compound = !0,
            this.glyphIDs = [],
            this.glyphOffsets = [],
            s = this.raw;
          (a = s.readShort()),
            this.glyphOffsets.push(s.pos),
            this.glyphIDs.push(s.readUInt16()),
            32 & a;
        )
          ((s.pos += 1 & a ? 4 : 2),
            128 & a
              ? (s.pos += 8)
              : 64 & a
                ? (s.pos += 4)
                : 8 & a && (s.pos += 2));
      }
      return (
        (t.prototype.encode = function () {
          var t, e, r;
          for (
            e = new Ye(cr.call(this.raw.data)), t = 0, r = this.glyphIDs.length;
            t < r;
            ++t
          )
            e.pos = this.glyphOffsets[t];
          return e.data;
        }),
        t
      );
    })(),
    pr = (function (t) {
      function e() {
        return e.__super__.constructor.apply(this, arguments);
      }
      return (
        Qe(e, Xe),
        (e.prototype.tag = "loca"),
        (e.prototype.parse = function (t) {
          var e, r;
          return (
            (t.pos = this.offset),
            (e = this.file.head.indexToLocFormat),
            (this.offsets =
              0 === e
                ? function () {
                    var e, n;
                    for (n = [], r = 0, e = this.length; r < e; r += 2)
                      n.push(2 * t.readUInt16());
                    return n;
                  }.call(this)
                : function () {
                    var e, n;
                    for (n = [], r = 0, e = this.length; r < e; r += 4)
                      n.push(t.readUInt32());
                    return n;
                  }.call(this))
          );
        }),
        (e.prototype.indexOf = function (t) {
          return this.offsets[t];
        }),
        (e.prototype.lengthOf = function (t) {
          return this.offsets[t + 1] - this.offsets[t];
        }),
        (e.prototype.encode = function (t, e) {
          for (
            var r = new Uint32Array(this.offsets.length), n = 0, i = 0, s = 0;
            s < r.length;
            ++s
          )
            if (((r[s] = n), i < e.length && e[i] == s)) {
              (++i, (r[s] = n));
              var a = this.offsets[s],
                o = this.offsets[s + 1] - a;
              o > 0 && (n += o);
            }
          for (var h = new Array(4 * r.length), u = 0; u < r.length; ++u)
            ((h[4 * u + 3] = 255 & r[u]),
              (h[4 * u + 2] = (65280 & r[u]) >> 8),
              (h[4 * u + 1] = (16711680 & r[u]) >> 16),
              (h[4 * u] = (4278190080 & r[u]) >> 24));
          return h;
        }),
        e
      );
    })(),
    gr = (function () {
      function t(t) {
        ((this.font = t),
          (this.subset = {}),
          (this.unicodes = {}),
          (this.next = 33));
      }
      return (
        (t.prototype.generateCmap = function () {
          var t, e, r, n, i;
          for (e in ((n = this.font.cmap.tables[0].codeMap),
          (t = {}),
          (i = this.subset)))
            ((r = i[e]), (t[e] = n[r]));
          return t;
        }),
        (t.prototype.glyphsFor = function (t) {
          var e, r, n, i, s, a, o;
          for (n = {}, s = 0, a = t.length; s < a; s++)
            n[(i = t[s])] = this.font.glyf.glyphFor(i);
          for (i in ((e = []), n))
            (null != (r = n[i]) ? r.compound : void 0) &&
              e.push.apply(e, r.glyphIDs);
          if (e.length > 0)
            for (i in (o = this.glyphsFor(e))) ((r = o[i]), (n[i] = r));
          return n;
        }),
        (t.prototype.encode = function (t, e) {
          var r, n, i, s, a, o, h, u, c, l, f, d, p, g, v;
          for (n in ((r = rr.encode(this.generateCmap(), "unicode")),
          (s = this.glyphsFor(t)),
          (f = { 0: 0 }),
          (v = r.charMap)))
            f[(o = v[n]).old] = o.new;
          for (d in ((l = r.maxGlyphID), s)) d in f || (f[d] = l++);
          return (
            (u = (function (t) {
              var e, r;
              for (e in ((r = {}), t)) r[t[e]] = e;
              return r;
            })(f)),
            (c = Object.keys(u).sort(function (t, e) {
              return t - e;
            })),
            (p = (function () {
              var t, e, r;
              for (r = [], t = 0, e = c.length; t < e; t++)
                ((a = c[t]), r.push(u[a]));
              return r;
            })()),
            (i = this.font.glyf.encode(s, p, f)),
            (h = this.font.loca.encode(i.offsets, p)),
            (g = {
              cmap: this.font.cmap.raw(),
              glyf: i.table,
              loca: h,
              hmtx: this.font.hmtx.raw(),
              hhea: this.font.hhea.raw(),
              maxp: this.font.maxp.raw(),
              post: this.font.post.raw(),
              name: this.font.name.raw(),
              head: this.font.head.encode(e),
            }),
            this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()),
            this.font.directory.encode(g)
          );
        }),
        t
      );
    })();
  Ct.API.PDFObject = (function () {
    var t;
    function e() {}
    return (
      (t = function (t, e) {
        return (Array(e + 1).join("0") + t).slice(-e);
      }),
      (e.convert = function (r) {
        var n, i, s, a;
        if (Array.isArray(r))
          return (
            "[" +
            (function () {
              var t, i, s;
              for (s = [], t = 0, i = r.length; t < i; t++)
                ((n = r[t]), s.push(e.convert(n)));
              return s;
            })().join(" ") +
            "]"
          );
        if ("string" == typeof r) return "/" + r;
        if (null != r ? r.isString : void 0) return "(" + r + ")";
        if (r instanceof Date)
          return (
            "(D:" +
            t(r.getUTCFullYear(), 4) +
            t(r.getUTCMonth(), 2) +
            t(r.getUTCDate(), 2) +
            t(r.getUTCHours(), 2) +
            t(r.getUTCMinutes(), 2) +
            t(r.getUTCSeconds(), 2) +
            "Z)"
          );
        if ("[object Object]" === {}.toString.call(r)) {
          for (i in ((s = ["<<"]), r))
            ((a = r[i]), s.push("/" + i + " " + e.convert(a)));
          return (s.push(">>"), s.join("\n"));
        }
        return "" + r;
      }),
      e
    );
  })();
};
