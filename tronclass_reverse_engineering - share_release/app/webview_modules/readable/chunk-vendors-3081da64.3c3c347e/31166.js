// Source: decompiled/web-modules-acorn/chunk-vendors-3081da64.3c3c347e/31166.js
// Webpack module id: 31166
const __webpack_module_31166 = function (t, e, r) {
  var n = r(23085)["lW"],
    i = { userAgent: !1 },
    s = {},
    a = "10.8.3",
    o =
      "jsrsasign(all) 10.8.3 (2023-04-20) (c) 2010-2023 Kenji Urushima | kjur.github.io/jsrsasign/license",
    h =
      h ||
      (function (t, e) {
        var r = {},
          n = (r.lib = {}),
          i = (n.Base = (function () {
            function t() {}
            return {
              extend: function (e) {
                t.prototype = this;
                var r = new t();
                return (
                  e && r.mixIn(e),
                  r.hasOwnProperty("init") ||
                    (r.init = function () {
                      r.$super.init.apply(this, arguments);
                    }),
                  (r.init.prototype = r),
                  (r.$super = this),
                  r
                );
              },
              create: function () {
                var t = this.extend();
                return (t.init.apply(t, arguments), t);
              },
              init: function () {},
              mixIn: function (t) {
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              },
            };
          })()),
          s = (n.WordArray = i.extend({
            init: function (t, r) {
              ((t = this.words = t || []),
                (this.sigBytes = r != e ? r : 4 * t.length));
            },
            toString: function (t) {
              return (t || o).stringify(this);
            },
            concat: function (t) {
              var e = this.words,
                r = t.words,
                n = this.sigBytes,
                i = t.sigBytes;
              if ((this.clamp(), n % 4))
                for (var s = 0; s < i; s++) {
                  var a = (r[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
                  e[(n + s) >>> 2] |= a << (24 - ((n + s) % 4) * 8);
                }
              else for (s = 0; s < i; s += 4) e[(n + s) >>> 2] = r[s >>> 2];
              return ((this.sigBytes += i), this);
            },
            clamp: function () {
              var e = this.words,
                r = this.sigBytes;
              ((e[r >>> 2] &= 4294967295 << (32 - (r % 4) * 8)),
                (e.length = t.ceil(r / 4)));
            },
            clone: function () {
              var t = i.clone.call(this);
              return ((t.words = this.words.slice(0)), t);
            },
            random: function (e) {
              for (var r = [], n = 0; n < e; n += 4)
                r.push((4294967296 * t.random()) | 0);
              return new s.init(r, e);
            },
          })),
          a = (r.enc = {}),
          o = (a.Hex = {
            stringify: function (t) {
              for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i++) {
                var s = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                (n.push((s >>> 4).toString(16)), n.push((15 & s).toString(16)));
              }
              return n.join("");
            },
            parse: function (t) {
              for (var e = t.length, r = [], n = 0; n < e; n += 2)
                r[n >>> 3] |=
                  parseInt(t.substr(n, 2), 16) << (24 - (n % 8) * 4);
              return new s.init(r, e / 2);
            },
          }),
          h = (a.Latin1 = {
            stringify: function (t) {
              for (var e = t.words, r = t.sigBytes, n = [], i = 0; i < r; i++) {
                var s = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                n.push(String.fromCharCode(s));
              }
              return n.join("");
            },
            parse: function (t) {
              for (var e = t.length, r = [], n = 0; n < e; n++)
                r[n >>> 2] |= (255 & t.charCodeAt(n)) << (24 - (n % 4) * 8);
              return new s.init(r, e);
            },
          }),
          u = (a.Utf8 = {
            stringify: function (t) {
              try {
                return decodeURIComponent(escape(h.stringify(t)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (t) {
              return h.parse(unescape(encodeURIComponent(t)));
            },
          }),
          c = (n.BufferedBlockAlgorithm = i.extend({
            reset: function () {
              ((this._data = new s.init()), (this._nDataBytes = 0));
            },
            _append: function (t) {
              ("string" == typeof t && (t = u.parse(t)),
                this._data.concat(t),
                (this._nDataBytes += t.sigBytes));
            },
            _process: function (e) {
              var r = this._data,
                n = r.words,
                i = r.sigBytes,
                a = this.blockSize,
                o = 4 * a,
                h = i / o;
              h = e ? t.ceil(h) : t.max((0 | h) - this._minBufferSize, 0);
              var u = h * a,
                c = t.min(4 * u, i);
              if (u) {
                for (var l = 0; l < u; l += a) this._doProcessBlock(n, l);
                var f = n.splice(0, u);
                r.sigBytes -= c;
              }
              return new s.init(f, c);
            },
            clone: function () {
              var t = i.clone.call(this);
              return ((t._data = this._data.clone()), t);
            },
            _minBufferSize: 0,
          })),
          l =
            ((n.Hasher = c.extend({
              cfg: i.extend(),
              init: function (t) {
                ((this.cfg = this.cfg.extend(t)), this.reset());
              },
              reset: function () {
                (c.reset.call(this), this._doReset());
              },
              update: function (t) {
                return (this._append(t), this._process(), this);
              },
              finalize: function (t) {
                t && this._append(t);
                var e = this._doFinalize();
                return e;
              },
              blockSize: 16,
              _createHelper: function (t) {
                return function (e, r) {
                  return new t.init(r).finalize(e);
                };
              },
              _createHmacHelper: function (t) {
                return function (e, r) {
                  return new l.HMAC.init(t, r).finalize(e);
                };
              },
            })),
            (r.algo = {}));
        return r;
      })(Math);
  ((function (t) {
    var e = h,
      r = e.lib,
      n = r.Base,
      i = r.WordArray;
    e = e.x64 = {};
    ((e.Word = n.extend({
      init: function (t, e) {
        ((this.high = t), (this.low = e));
      },
    })),
      (e.WordArray = n.extend({
        init: function (e, r) {
          ((e = this.words = e || []),
            (this.sigBytes = r != t ? r : 8 * e.length));
        },
        toX32: function () {
          for (var t = this.words, e = t.length, r = [], n = 0; n < e; n++) {
            var s = t[n];
            (r.push(s.high), r.push(s.low));
          }
          return i.create(r, this.sigBytes);
        },
        clone: function () {
          for (
            var t = n.clone.call(this),
              e = (t.words = this.words.slice(0)),
              r = e.length,
              i = 0;
            i < r;
            i++
          )
            e[i] = e[i].clone();
          return t;
        },
      })));
  })(),
    h.lib.Cipher ||
      (function (t) {
        var e = h,
          r = e.lib,
          n = r.Base,
          i = r.WordArray,
          s = r.BufferedBlockAlgorithm,
          a = e.enc.Base64,
          o = e.algo.EvpKDF,
          u = (r.Cipher = s.extend({
            cfg: n.extend(),
            createEncryptor: function (t, e) {
              return this.create(this._ENC_XFORM_MODE, t, e);
            },
            createDecryptor: function (t, e) {
              return this.create(this._DEC_XFORM_MODE, t, e);
            },
            init: function (t, e, r) {
              ((this.cfg = this.cfg.extend(r)),
                (this._xformMode = t),
                (this._key = e),
                this.reset());
            },
            reset: function () {
              (s.reset.call(this), this._doReset());
            },
            process: function (t) {
              return (this._append(t), this._process());
            },
            finalize: function (t) {
              return (t && this._append(t), this._doFinalize());
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function (t) {
              return {
                encrypt: function (e, r, n) {
                  return ("string" == typeof r ? g : p).encrypt(t, e, r, n);
                },
                decrypt: function (e, r, n) {
                  return ("string" == typeof r ? g : p).decrypt(t, e, r, n);
                },
              };
            },
          }));
        r.StreamCipher = u.extend({
          _doFinalize: function () {
            return this._process(!0);
          },
          blockSize: 1,
        });
        var c = (e.mode = {}),
          l = function (e, r, n) {
            var i = this._iv;
            i ? (this._iv = t) : (i = this._prevBlock);
            for (var s = 0; s < n; s++) e[r + s] ^= i[s];
          },
          f = (r.BlockCipherMode = n.extend({
            createEncryptor: function (t, e) {
              return this.Encryptor.create(t, e);
            },
            createDecryptor: function (t, e) {
              return this.Decryptor.create(t, e);
            },
            init: function (t, e) {
              ((this._cipher = t), (this._iv = e));
            },
          })).extend();
        ((f.Encryptor = f.extend({
          processBlock: function (t, e) {
            var r = this._cipher,
              n = r.blockSize;
            (l.call(this, t, e, n),
              r.encryptBlock(t, e),
              (this._prevBlock = t.slice(e, e + n)));
          },
        })),
          (f.Decryptor = f.extend({
            processBlock: function (t, e) {
              var r = this._cipher,
                n = r.blockSize,
                i = t.slice(e, e + n);
              (r.decryptBlock(t, e),
                l.call(this, t, e, n),
                (this._prevBlock = i));
            },
          })),
          (c = c.CBC = f),
          (f = (e.pad = {}).Pkcs7 =
            {
              pad: function (t, e) {
                for (
                  var r = 4 * e,
                    n =
                      ((r = r - (t.sigBytes % r)),
                      (r << 24) | (r << 16) | (r << 8) | r),
                    s = [],
                    a = 0;
                  a < r;
                  a += 4
                )
                  s.push(n);
                ((r = i.create(s, r)), t.concat(r));
              },
              unpad: function (t) {
                t.sigBytes -= 255 & t.words[(t.sigBytes - 1) >>> 2];
              },
            }),
          (r.BlockCipher = u.extend({
            cfg: u.cfg.extend({ mode: c, padding: f }),
            reset: function () {
              u.reset.call(this);
              var t = this.cfg,
                e = t.iv;
              t = t.mode;
              if (this._xformMode == this._ENC_XFORM_MODE)
                var r = t.createEncryptor;
              else ((r = t.createDecryptor), (this._minBufferSize = 1));
              this._mode = r.call(t, this, e && e.words);
            },
            _doProcessBlock: function (t, e) {
              this._mode.processBlock(t, e);
            },
            _doFinalize: function () {
              var t = this.cfg.padding;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                t.pad(this._data, this.blockSize);
                var e = this._process(!0);
              } else ((e = this._process(!0)), t.unpad(e));
              return e;
            },
            blockSize: 4,
          })));
        var d = (r.CipherParams = n.extend({
            init: function (t) {
              this.mixIn(t);
            },
            toString: function (t) {
              return (t || this.formatter).stringify(this);
            },
          })),
          p =
            ((c = (e.format = {}).OpenSSL =
              {
                stringify: function (t) {
                  var e = t.ciphertext;
                  return (
                    (t = t.salt),
                    (t
                      ? i.create([1398893684, 1701076831]).concat(t).concat(e)
                      : e
                    ).toString(a)
                  );
                },
                parse: function (t) {
                  t = a.parse(t);
                  var e = t.words;
                  if (1398893684 == e[0] && 1701076831 == e[1]) {
                    var r = i.create(e.slice(2, 4));
                    (e.splice(0, 4), (t.sigBytes -= 16));
                  }
                  return d.create({ ciphertext: t, salt: r });
                },
              }),
            (r.SerializableCipher = n.extend({
              cfg: n.extend({ format: c }),
              encrypt: function (t, e, r, n) {
                n = this.cfg.extend(n);
                var i = t.createEncryptor(r, n);
                return (
                  (e = i.finalize(e)),
                  (i = i.cfg),
                  d.create({
                    ciphertext: e,
                    key: r,
                    iv: i.iv,
                    algorithm: t,
                    mode: i.mode,
                    padding: i.padding,
                    blockSize: t.blockSize,
                    formatter: n.format,
                  })
                );
              },
              decrypt: function (t, e, r, n) {
                return (
                  (n = this.cfg.extend(n)),
                  (e = this._parse(e, n.format)),
                  t.createDecryptor(r, n).finalize(e.ciphertext)
                );
              },
              _parse: function (t, e) {
                return "string" == typeof t ? e.parse(t, this) : t;
              },
            }))),
          g =
            ((e = (e.kdf = {}).OpenSSL =
              {
                execute: function (t, e, r, n) {
                  return (
                    n || (n = i.random(8)),
                    (t = o.create({ keySize: e + r }).compute(t, n)),
                    (r = i.create(t.words.slice(e), 4 * r)),
                    (t.sigBytes = 4 * e),
                    d.create({ key: t, iv: r, salt: n })
                  );
                },
              }),
            (r.PasswordBasedCipher = p.extend({
              cfg: p.cfg.extend({ kdf: e }),
              encrypt: function (t, e, r, n) {
                return (
                  (n = this.cfg.extend(n)),
                  (r = n.kdf.execute(r, t.keySize, t.ivSize)),
                  (n.iv = r.iv),
                  (t = p.encrypt.call(this, t, e, r.key, n)),
                  t.mixIn(r),
                  t
                );
              },
              decrypt: function (t, e, r, n) {
                return (
                  (n = this.cfg.extend(n)),
                  (e = this._parse(e, n.format)),
                  (r = n.kdf.execute(r, t.keySize, t.ivSize, e.salt)),
                  (n.iv = r.iv),
                  p.decrypt.call(this, t, e, r.key, n)
                );
              },
            })));
      })(),
    (function () {
      for (
        var t = h,
          e = t.lib.BlockCipher,
          r = t.algo,
          n = [],
          i = [],
          s = [],
          a = [],
          o = [],
          u = [],
          c = [],
          l = [],
          f = [],
          d = [],
          p = [],
          g = 0;
        256 > g;
        g++
      )
        p[g] = 128 > g ? g << 1 : (g << 1) ^ 283;
      var v = 0,
        m = 0;
      for (g = 0; 256 > g; g++) {
        var y = m ^ (m << 1) ^ (m << 2) ^ (m << 3) ^ (m << 4);
        y = (y >>> 8) ^ (255 & y) ^ 99;
        ((n[v] = y), (i[y] = v));
        var b = p[v],
          w = p[b],
          x = p[w],
          S = (257 * p[y]) ^ (16843008 * y);
        ((s[v] = (S << 24) | (S >>> 8)),
          (a[v] = (S << 16) | (S >>> 16)),
          (o[v] = (S << 8) | (S >>> 24)),
          (u[v] = S),
          (S = (16843009 * x) ^ (65537 * w) ^ (257 * b) ^ (16843008 * v)),
          (c[y] = (S << 24) | (S >>> 8)),
          (l[y] = (S << 16) | (S >>> 16)),
          (f[y] = (S << 8) | (S >>> 24)),
          (d[y] = S),
          v ? ((v = b ^ p[p[p[x ^ b]]]), (m ^= p[p[m]])) : (v = m = 1));
      }
      var A = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      r = r.AES = e.extend({
        _doReset: function () {
          for (
            var t = this._key,
              e = t.words,
              r = t.sigBytes / 4,
              i =
                ((t = 4 * ((this._nRounds = r + 6) + 1)),
                (this._keySchedule = [])),
              s = 0;
            s < t;
            s++
          )
            if (s < r) i[s] = e[s];
            else {
              var a = i[s - 1];
              (s % r
                ? 6 < r &&
                  4 == s % r &&
                  (a =
                    (n[a >>> 24] << 24) |
                    (n[(a >>> 16) & 255] << 16) |
                    (n[(a >>> 8) & 255] << 8) |
                    n[255 & a])
                : ((a = (a << 8) | (a >>> 24)),
                  (a =
                    (n[a >>> 24] << 24) |
                    (n[(a >>> 16) & 255] << 16) |
                    (n[(a >>> 8) & 255] << 8) |
                    n[255 & a]),
                  (a ^= A[(s / r) | 0] << 24)),
                (i[s] = i[s - r] ^ a));
            }
          for (e = this._invKeySchedule = [], r = 0; r < t; r++)
            ((s = t - r),
              (a = r % 4 ? i[s] : i[s - 4]),
              (e[r] =
                4 > r || 4 >= s
                  ? a
                  : c[n[a >>> 24]] ^
                    l[n[(a >>> 16) & 255]] ^
                    f[n[(a >>> 8) & 255]] ^
                    d[n[255 & a]]));
        },
        encryptBlock: function (t, e) {
          this._doCryptBlock(t, e, this._keySchedule, s, a, o, u, n);
        },
        decryptBlock: function (t, e) {
          var r = t[e + 1];
          ((t[e + 1] = t[e + 3]),
            (t[e + 3] = r),
            this._doCryptBlock(t, e, this._invKeySchedule, c, l, f, d, i),
            (r = t[e + 1]),
            (t[e + 1] = t[e + 3]),
            (t[e + 3] = r));
        },
        _doCryptBlock: function (t, e, r, n, i, s, a, o) {
          for (
            var h = this._nRounds,
              u = t[e] ^ r[0],
              c = t[e + 1] ^ r[1],
              l = t[e + 2] ^ r[2],
              f = t[e + 3] ^ r[3],
              d = 4,
              p = 1;
            p < h;
            p++
          ) {
            var g =
                n[u >>> 24] ^
                i[(c >>> 16) & 255] ^
                s[(l >>> 8) & 255] ^
                a[255 & f] ^
                r[d++],
              v =
                n[c >>> 24] ^
                i[(l >>> 16) & 255] ^
                s[(f >>> 8) & 255] ^
                a[255 & u] ^
                r[d++],
              m =
                n[l >>> 24] ^
                i[(f >>> 16) & 255] ^
                s[(u >>> 8) & 255] ^
                a[255 & c] ^
                r[d++];
            ((f =
              n[f >>> 24] ^
              i[(u >>> 16) & 255] ^
              s[(c >>> 8) & 255] ^
              a[255 & l] ^
              r[d++]),
              (u = g),
              (c = v),
              (l = m));
          }
          ((g =
            ((o[u >>> 24] << 24) |
              (o[(c >>> 16) & 255] << 16) |
              (o[(l >>> 8) & 255] << 8) |
              o[255 & f]) ^
            r[d++]),
            (v =
              ((o[c >>> 24] << 24) |
                (o[(l >>> 16) & 255] << 16) |
                (o[(f >>> 8) & 255] << 8) |
                o[255 & u]) ^
              r[d++]),
            (m =
              ((o[l >>> 24] << 24) |
                (o[(f >>> 16) & 255] << 16) |
                (o[(u >>> 8) & 255] << 8) |
                o[255 & c]) ^
              r[d++]),
            (f =
              ((o[f >>> 24] << 24) |
                (o[(u >>> 16) & 255] << 16) |
                (o[(c >>> 8) & 255] << 8) |
                o[255 & l]) ^
              r[d++]),
            (t[e] = g),
            (t[e + 1] = v),
            (t[e + 2] = m),
            (t[e + 3] = f));
        },
        keySize: 8,
      });
      t.AES = e._createHelper(r);
    })(),
    (function () {
      function t(t, e) {
        var r = ((this._lBlock >>> t) ^ this._rBlock) & e;
        ((this._rBlock ^= r), (this._lBlock ^= r << t));
      }
      function e(t, e) {
        var r = ((this._rBlock >>> t) ^ this._lBlock) & e;
        ((this._lBlock ^= r), (this._rBlock ^= r << t));
      }
      var r = h,
        n = r.lib,
        i = n.WordArray,
        s = ((n = n.BlockCipher), r.algo),
        a = [
          57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51,
          43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7,
          62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20,
          12, 4,
        ],
        o = [
          14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16,
          7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44,
          49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
        ],
        u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
        c = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378,
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672,
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792,
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464,
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040,
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656,
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577,
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848,
          },
        ],
        l = [
          4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
          2147483679,
        ],
        f = (s.DES = n.extend({
          _doReset: function () {
            for (var t = this._key.words, e = [], r = 0; 56 > r; r++) {
              var n = a[r] - 1;
              e[r] = (t[n >>> 5] >>> (31 - (n % 32))) & 1;
            }
            for (t = this._subKeys = [], n = 0; 16 > n; n++) {
              var i = (t[n] = []),
                s = u[n];
              for (r = 0; 24 > r; r++)
                ((i[(r / 6) | 0] |= e[(o[r] - 1 + s) % 28] << (31 - (r % 6))),
                  (i[4 + ((r / 6) | 0)] |=
                    e[28 + ((o[r + 24] - 1 + s) % 28)] << (31 - (r % 6))));
              for (i[0] = (i[0] << 1) | (i[0] >>> 31), r = 1; 7 > r; r++)
                i[r] >>>= 4 * (r - 1) + 3;
              i[7] = (i[7] << 5) | (i[7] >>> 27);
            }
            for (e = this._invSubKeys = [], r = 0; 16 > r; r++)
              e[r] = t[15 - r];
          },
          encryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._subKeys);
          },
          decryptBlock: function (t, e) {
            this._doCryptBlock(t, e, this._invSubKeys);
          },
          _doCryptBlock: function (r, n, i) {
            ((this._lBlock = r[n]),
              (this._rBlock = r[n + 1]),
              t.call(this, 4, 252645135),
              t.call(this, 16, 65535),
              e.call(this, 2, 858993459),
              e.call(this, 8, 16711935),
              t.call(this, 1, 1431655765));
            for (var s = 0; 16 > s; s++) {
              for (
                var a = i[s], o = this._lBlock, h = this._rBlock, u = 0, f = 0;
                8 > f;
                f++
              )
                u |= c[f][((h ^ a[f]) & l[f]) >>> 0];
              ((this._lBlock = h), (this._rBlock = o ^ u));
            }
            ((i = this._lBlock),
              (this._lBlock = this._rBlock),
              (this._rBlock = i),
              t.call(this, 1, 1431655765),
              e.call(this, 8, 16711935),
              e.call(this, 2, 858993459),
              t.call(this, 16, 65535),
              t.call(this, 4, 252645135),
              (r[n] = this._lBlock),
              (r[n + 1] = this._rBlock));
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2,
        }));
      ((r.DES = n._createHelper(f)),
        (s = s.TripleDES =
          n.extend({
            _doReset: function () {
              var t = this._key.words;
              ((this._des1 = f.createEncryptor(i.create(t.slice(0, 2)))),
                (this._des2 = f.createEncryptor(i.create(t.slice(2, 4)))),
                (this._des3 = f.createEncryptor(i.create(t.slice(4, 6)))));
            },
            encryptBlock: function (t, e) {
              (this._des1.encryptBlock(t, e),
                this._des2.decryptBlock(t, e),
                this._des3.encryptBlock(t, e));
            },
            decryptBlock: function (t, e) {
              (this._des3.decryptBlock(t, e),
                this._des2.encryptBlock(t, e),
                this._des1.decryptBlock(t, e));
            },
            keySize: 6,
            ivSize: 2,
            blockSize: 2,
          })),
        (r.TripleDES = n._createHelper(s)));
    })(),
    (function () {
      var t = h,
        e = t.lib.WordArray;
      t.enc.Base64 = {
        stringify: function (t) {
          var e = t.words,
            r = t.sigBytes,
            n = this._map;
          (t.clamp(), (t = []));
          for (var i = 0; i < r; i += 3)
            for (
              var s =
                  (((e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255) << 16) |
                  (((e[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255) <<
                    8) |
                  ((e[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255),
                a = 0;
              4 > a && i + 0.75 * a < r;
              a++
            )
              t.push(n.charAt((s >>> (6 * (3 - a))) & 63));
          if ((e = n.charAt(64))) for (; t.length % 4; ) t.push(e);
          return t.join("");
        },
        parse: function (t) {
          var r = t.length,
            n = this._map,
            i = n.charAt(64);
          i && ((i = t.indexOf(i)), -1 != i && (r = i));
          i = [];
          for (var s = 0, a = 0; a < r; a++)
            if (a % 4) {
              var o = n.indexOf(t.charAt(a - 1)) << ((a % 4) * 2),
                h = n.indexOf(t.charAt(a)) >>> (6 - (a % 4) * 2);
              ((i[s >>> 2] |= (o | h) << (24 - (s % 4) * 8)), s++);
            }
          return e.create(i, s);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      };
    })(),
    (function (t) {
      function e(t, e, r, n, i, s, a) {
        return (
          (t = t + ((e & r) | (~e & n)) + i + a),
          ((t << s) | (t >>> (32 - s))) + e
        );
      }
      function r(t, e, r, n, i, s, a) {
        return (
          (t = t + ((e & n) | (r & ~n)) + i + a),
          ((t << s) | (t >>> (32 - s))) + e
        );
      }
      function n(t, e, r, n, i, s, a) {
        return (
          (t = t + (e ^ r ^ n) + i + a),
          ((t << s) | (t >>> (32 - s))) + e
        );
      }
      function i(t, e, r, n, i, s, a) {
        return (
          (t = t + (r ^ (e | ~n)) + i + a),
          ((t << s) | (t >>> (32 - s))) + e
        );
      }
      for (
        var s = h,
          a = s.lib,
          o = a.WordArray,
          u = a.Hasher,
          c = ((a = s.algo), []),
          l = 0;
        64 > l;
        l++
      )
        c[l] = (4294967296 * t.abs(t.sin(l + 1))) | 0;
      ((a = a.MD5 =
        u.extend({
          _doReset: function () {
            this._hash = new o.init([
              1732584193, 4023233417, 2562383102, 271733878,
            ]);
          },
          _doProcessBlock: function (t, s) {
            for (var a = 0; 16 > a; a++) {
              var o = s + a,
                h = t[o];
              t[o] =
                (16711935 & ((h << 8) | (h >>> 24))) |
                (4278255360 & ((h << 24) | (h >>> 8)));
            }
            ((a = this._hash.words), (o = t[s + 0]), (h = t[s + 1]));
            var u = t[s + 2],
              l = t[s + 3],
              f = t[s + 4],
              d = t[s + 5],
              p = t[s + 6],
              g = t[s + 7],
              v = t[s + 8],
              m = t[s + 9],
              y = t[s + 10],
              b = t[s + 11],
              w = t[s + 12],
              x = t[s + 13],
              S = t[s + 14],
              A = t[s + 15],
              E = a[0],
              F = a[1],
              N = a[2],
              P = a[3];
            ((E = e(E, F, N, P, o, 7, c[0])),
              (P = e(P, E, F, N, h, 12, c[1])),
              (N = e(N, P, E, F, u, 17, c[2])),
              (F = e(F, N, P, E, l, 22, c[3])),
              (E = e(E, F, N, P, f, 7, c[4])),
              (P = e(P, E, F, N, d, 12, c[5])),
              (N = e(N, P, E, F, p, 17, c[6])),
              (F = e(F, N, P, E, g, 22, c[7])),
              (E = e(E, F, N, P, v, 7, c[8])),
              (P = e(P, E, F, N, m, 12, c[9])),
              (N = e(N, P, E, F, y, 17, c[10])),
              (F = e(F, N, P, E, b, 22, c[11])),
              (E = e(E, F, N, P, w, 7, c[12])),
              (P = e(P, E, F, N, x, 12, c[13])),
              (N = e(N, P, E, F, S, 17, c[14])),
              (F = e(F, N, P, E, A, 22, c[15])),
              (E = r(E, F, N, P, h, 5, c[16])),
              (P = r(P, E, F, N, p, 9, c[17])),
              (N = r(N, P, E, F, b, 14, c[18])),
              (F = r(F, N, P, E, o, 20, c[19])),
              (E = r(E, F, N, P, d, 5, c[20])),
              (P = r(P, E, F, N, y, 9, c[21])),
              (N = r(N, P, E, F, A, 14, c[22])),
              (F = r(F, N, P, E, f, 20, c[23])),
              (E = r(E, F, N, P, m, 5, c[24])),
              (P = r(P, E, F, N, S, 9, c[25])),
              (N = r(N, P, E, F, l, 14, c[26])),
              (F = r(F, N, P, E, v, 20, c[27])),
              (E = r(E, F, N, P, x, 5, c[28])),
              (P = r(P, E, F, N, u, 9, c[29])),
              (N = r(N, P, E, F, g, 14, c[30])),
              (F = r(F, N, P, E, w, 20, c[31])),
              (E = n(E, F, N, P, d, 4, c[32])),
              (P = n(P, E, F, N, v, 11, c[33])),
              (N = n(N, P, E, F, b, 16, c[34])),
              (F = n(F, N, P, E, S, 23, c[35])),
              (E = n(E, F, N, P, h, 4, c[36])),
              (P = n(P, E, F, N, f, 11, c[37])),
              (N = n(N, P, E, F, g, 16, c[38])),
              (F = n(F, N, P, E, y, 23, c[39])),
              (E = n(E, F, N, P, x, 4, c[40])),
              (P = n(P, E, F, N, o, 11, c[41])),
              (N = n(N, P, E, F, l, 16, c[42])),
              (F = n(F, N, P, E, p, 23, c[43])),
              (E = n(E, F, N, P, m, 4, c[44])),
              (P = n(P, E, F, N, w, 11, c[45])),
              (N = n(N, P, E, F, A, 16, c[46])),
              (F = n(F, N, P, E, u, 23, c[47])),
              (E = i(E, F, N, P, o, 6, c[48])),
              (P = i(P, E, F, N, g, 10, c[49])),
              (N = i(N, P, E, F, S, 15, c[50])),
              (F = i(F, N, P, E, d, 21, c[51])),
              (E = i(E, F, N, P, w, 6, c[52])),
              (P = i(P, E, F, N, l, 10, c[53])),
              (N = i(N, P, E, F, y, 15, c[54])),
              (F = i(F, N, P, E, h, 21, c[55])),
              (E = i(E, F, N, P, v, 6, c[56])),
              (P = i(P, E, F, N, A, 10, c[57])),
              (N = i(N, P, E, F, p, 15, c[58])),
              (F = i(F, N, P, E, x, 21, c[59])),
              (E = i(E, F, N, P, f, 6, c[60])),
              (P = i(P, E, F, N, b, 10, c[61])),
              (N = i(N, P, E, F, u, 15, c[62])),
              (F = i(F, N, P, E, m, 21, c[63])));
            ((a[0] = (a[0] + E) | 0),
              (a[1] = (a[1] + F) | 0),
              (a[2] = (a[2] + N) | 0),
              (a[3] = (a[3] + P) | 0));
          },
          _doFinalize: function () {
            var e = this._data,
              r = e.words,
              n = 8 * this._nDataBytes,
              i = 8 * e.sigBytes;
            r[i >>> 5] |= 128 << (24 - (i % 32));
            var s = t.floor(n / 4294967296);
            for (
              r[15 + (((i + 64) >>> 9) << 4)] =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8))),
                r[14 + (((i + 64) >>> 9) << 4)] =
                  (16711935 & ((n << 8) | (n >>> 24))) |
                  (4278255360 & ((n << 24) | (n >>> 8))),
                e.sigBytes = 4 * (r.length + 1),
                this._process(),
                e = this._hash,
                r = e.words,
                n = 0;
              4 > n;
              n++
            )
              ((i = r[n]),
                (r[n] =
                  (16711935 & ((i << 8) | (i >>> 24))) |
                  (4278255360 & ((i << 24) | (i >>> 8)))));
            return e;
          },
          clone: function () {
            var t = u.clone.call(this);
            return ((t._hash = this._hash.clone()), t);
          },
        })),
        (s.MD5 = u._createHelper(a)),
        (s.HmacMD5 = u._createHmacHelper(a)));
    })(Math),
    (function () {
      var t = h,
        e = t.lib,
        r = e.WordArray,
        n = e.Hasher,
        i = [];
      e = t.algo.SHA1 = n.extend({
        _doReset: function () {
          this._hash = new r.init([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        },
        _doProcessBlock: function (t, e) {
          for (
            var r = this._hash.words,
              n = r[0],
              s = r[1],
              a = r[2],
              o = r[3],
              h = r[4],
              u = 0;
            80 > u;
            u++
          ) {
            if (16 > u) i[u] = 0 | t[e + u];
            else {
              var c = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
              i[u] = (c << 1) | (c >>> 31);
            }
            ((c = ((n << 5) | (n >>> 27)) + h + i[u]),
              (c =
                20 > u
                  ? c + (1518500249 + ((s & a) | (~s & o)))
                  : 40 > u
                    ? c + (1859775393 + (s ^ a ^ o))
                    : 60 > u
                      ? c + (((s & a) | (s & o) | (a & o)) - 1894007588)
                      : c + ((s ^ a ^ o) - 899497514)),
              (h = o),
              (o = a),
              (a = (s << 30) | (s >>> 2)),
              (s = n),
              (n = c));
          }
          ((r[0] = (r[0] + n) | 0),
            (r[1] = (r[1] + s) | 0),
            (r[2] = (r[2] + a) | 0),
            (r[3] = (r[3] + o) | 0),
            (r[4] = (r[4] + h) | 0));
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = 8 * this._nDataBytes,
            n = 8 * t.sigBytes;
          return (
            (e[n >>> 5] |= 128 << (24 - (n % 32))),
            (e[14 + (((n + 64) >>> 9) << 4)] = Math.floor(r / 4294967296)),
            (e[15 + (((n + 64) >>> 9) << 4)] = r),
            (t.sigBytes = 4 * e.length),
            this._process(),
            this._hash
          );
        },
        clone: function () {
          var t = n.clone.call(this);
          return ((t._hash = this._hash.clone()), t);
        },
      });
      ((t.SHA1 = n._createHelper(e)), (t.HmacSHA1 = n._createHmacHelper(e)));
    })(),
    (function (t) {
      for (
        var e = h,
          r = e.lib,
          n = r.WordArray,
          i = r.Hasher,
          s = ((r = e.algo), []),
          a = [],
          o = function (t) {
            return (4294967296 * (t - (0 | t))) | 0;
          },
          u = 2,
          c = 0;
        64 > c;
      ) {
        var l;
        t: {
          l = u;
          for (var f = t.sqrt(l), d = 2; d <= f; d++)
            if (!(l % d)) {
              l = !1;
              break t;
            }
          l = !0;
        }
        (l &&
          (8 > c && (s[c] = o(t.pow(u, 0.5))),
          (a[c] = o(t.pow(u, 1 / 3))),
          c++),
          u++);
      }
      var p = [];
      r = r.SHA256 = i.extend({
        _doReset: function () {
          this._hash = new n.init(s.slice(0));
        },
        _doProcessBlock: function (t, e) {
          for (
            var r = this._hash.words,
              n = r[0],
              i = r[1],
              s = r[2],
              o = r[3],
              h = r[4],
              u = r[5],
              c = r[6],
              l = r[7],
              f = 0;
            64 > f;
            f++
          ) {
            if (16 > f) p[f] = 0 | t[e + f];
            else {
              var d = p[f - 15],
                g = p[f - 2];
              p[f] =
                (((d << 25) | (d >>> 7)) ^
                  ((d << 14) | (d >>> 18)) ^
                  (d >>> 3)) +
                p[f - 7] +
                (((g << 15) | (g >>> 17)) ^
                  ((g << 13) | (g >>> 19)) ^
                  (g >>> 10)) +
                p[f - 16];
            }
            ((d =
              l +
              (((h << 26) | (h >>> 6)) ^
                ((h << 21) | (h >>> 11)) ^
                ((h << 7) | (h >>> 25))) +
              ((h & u) ^ (~h & c)) +
              a[f] +
              p[f]),
              (g =
                (((n << 30) | (n >>> 2)) ^
                  ((n << 19) | (n >>> 13)) ^
                  ((n << 10) | (n >>> 22))) +
                ((n & i) ^ (n & s) ^ (i & s))),
              (l = c),
              (c = u),
              (u = h),
              (h = (o + d) | 0),
              (o = s),
              (s = i),
              (i = n),
              (n = (d + g) | 0));
          }
          ((r[0] = (r[0] + n) | 0),
            (r[1] = (r[1] + i) | 0),
            (r[2] = (r[2] + s) | 0),
            (r[3] = (r[3] + o) | 0),
            (r[4] = (r[4] + h) | 0),
            (r[5] = (r[5] + u) | 0),
            (r[6] = (r[6] + c) | 0),
            (r[7] = (r[7] + l) | 0));
        },
        _doFinalize: function () {
          var e = this._data,
            r = e.words,
            n = 8 * this._nDataBytes,
            i = 8 * e.sigBytes;
          return (
            (r[i >>> 5] |= 128 << (24 - (i % 32))),
            (r[14 + (((i + 64) >>> 9) << 4)] = t.floor(n / 4294967296)),
            (r[15 + (((i + 64) >>> 9) << 4)] = n),
            (e.sigBytes = 4 * r.length),
            this._process(),
            this._hash
          );
        },
        clone: function () {
          var t = i.clone.call(this);
          return ((t._hash = this._hash.clone()), t);
        },
      });
      ((e.SHA256 = i._createHelper(r)),
        (e.HmacSHA256 = i._createHmacHelper(r)));
    })(Math),
    (function () {
      var t = h,
        e = t.lib.WordArray,
        r = t.algo,
        n = r.SHA256;
      r = r.SHA224 = n.extend({
        _doReset: function () {
          this._hash = new e.init([
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
        },
        _doFinalize: function () {
          var t = n._doFinalize.call(this);
          return ((t.sigBytes -= 4), t);
        },
      });
      ((t.SHA224 = n._createHelper(r)),
        (t.HmacSHA224 = n._createHmacHelper(r)));
    })(),
    (function () {
      function t() {
        return i.create.apply(i, arguments);
      }
      for (
        var e = h,
          r = e.lib.Hasher,
          n = e.x64,
          i = n.Word,
          s = n.WordArray,
          a =
            ((n = e.algo),
            [
              t(1116352408, 3609767458),
              t(1899447441, 602891725),
              t(3049323471, 3964484399),
              t(3921009573, 2173295548),
              t(961987163, 4081628472),
              t(1508970993, 3053834265),
              t(2453635748, 2937671579),
              t(2870763221, 3664609560),
              t(3624381080, 2734883394),
              t(310598401, 1164996542),
              t(607225278, 1323610764),
              t(1426881987, 3590304994),
              t(1925078388, 4068182383),
              t(2162078206, 991336113),
              t(2614888103, 633803317),
              t(3248222580, 3479774868),
              t(3835390401, 2666613458),
              t(4022224774, 944711139),
              t(264347078, 2341262773),
              t(604807628, 2007800933),
              t(770255983, 1495990901),
              t(1249150122, 1856431235),
              t(1555081692, 3175218132),
              t(1996064986, 2198950837),
              t(2554220882, 3999719339),
              t(2821834349, 766784016),
              t(2952996808, 2566594879),
              t(3210313671, 3203337956),
              t(3336571891, 1034457026),
              t(3584528711, 2466948901),
              t(113926993, 3758326383),
              t(338241895, 168717936),
              t(666307205, 1188179964),
              t(773529912, 1546045734),
              t(1294757372, 1522805485),
              t(1396182291, 2643833823),
              t(1695183700, 2343527390),
              t(1986661051, 1014477480),
              t(2177026350, 1206759142),
              t(2456956037, 344077627),
              t(2730485921, 1290863460),
              t(2820302411, 3158454273),
              t(3259730800, 3505952657),
              t(3345764771, 106217008),
              t(3516065817, 3606008344),
              t(3600352804, 1432725776),
              t(4094571909, 1467031594),
              t(275423344, 851169720),
              t(430227734, 3100823752),
              t(506948616, 1363258195),
              t(659060556, 3750685593),
              t(883997877, 3785050280),
              t(958139571, 3318307427),
              t(1322822218, 3812723403),
              t(1537002063, 2003034995),
              t(1747873779, 3602036899),
              t(1955562222, 1575990012),
              t(2024104815, 1125592928),
              t(2227730452, 2716904306),
              t(2361852424, 442776044),
              t(2428436474, 593698344),
              t(2756734187, 3733110249),
              t(3204031479, 2999351573),
              t(3329325298, 3815920427),
              t(3391569614, 3928383900),
              t(3515267271, 566280711),
              t(3940187606, 3454069534),
              t(4118630271, 4000239992),
              t(116418474, 1914138554),
              t(174292421, 2731055270),
              t(289380356, 3203993006),
              t(460393269, 320620315),
              t(685471733, 587496836),
              t(852142971, 1086792851),
              t(1017036298, 365543100),
              t(1126000580, 2618297676),
              t(1288033470, 3409855158),
              t(1501505948, 4234509866),
              t(1607167915, 987167468),
              t(1816402316, 1246189591),
            ]),
          o = [],
          u = 0;
        80 > u;
        u++
      )
        o[u] = t();
      ((n = n.SHA512 =
        r.extend({
          _doReset: function () {
            this._hash = new s.init([
              new i.init(1779033703, 4089235720),
              new i.init(3144134277, 2227873595),
              new i.init(1013904242, 4271175723),
              new i.init(2773480762, 1595750129),
              new i.init(1359893119, 2917565137),
              new i.init(2600822924, 725511199),
              new i.init(528734635, 4215389547),
              new i.init(1541459225, 327033209),
            ]);
          },
          _doProcessBlock: function (t, e) {
            for (
              var r = this._hash.words,
                n = r[0],
                i = r[1],
                s = r[2],
                h = r[3],
                u = r[4],
                c = r[5],
                l = r[6],
                f = ((r = r[7]), n.high),
                d = n.low,
                p = i.high,
                g = i.low,
                v = s.high,
                m = s.low,
                y = h.high,
                b = h.low,
                w = u.high,
                x = u.low,
                S = c.high,
                A = c.low,
                E = l.high,
                F = l.low,
                N = r.high,
                P = r.low,
                I = f,
                L = d,
                C = p,
                D = g,
                _ = v,
                R = m,
                B = y,
                T = b,
                j = w,
                k = x,
                O = S,
                M = A,
                q = E,
                H = F,
                V = N,
                U = P,
                K = 0;
              80 > K;
              K++
            ) {
              var z = o[K];
              if (16 > K)
                var W = (z.high = 0 | t[e + 2 * K]),
                  G = (z.low = 0 | t[e + 2 * K + 1]);
              else {
                ((W = o[K - 15]), (G = W.high));
                var J = W.low,
                  X =
                    ((W =
                      ((G >>> 1) | (J << 31)) ^
                      ((G >>> 8) | (J << 24)) ^
                      (G >>> 7)),
                    (J =
                      ((J >>> 1) | (G << 31)) ^
                      ((J >>> 8) | (G << 24)) ^
                      ((J >>> 7) | (G << 25))),
                    o[K - 2]),
                  Y = ((G = X.high), X.low),
                  $ =
                    ((X =
                      ((G >>> 19) | (Y << 13)) ^
                      ((G << 3) | (Y >>> 29)) ^
                      (G >>> 6)),
                    (Y =
                      ((Y >>> 19) | (G << 13)) ^
                      ((Y << 3) | (G >>> 29)) ^
                      ((Y >>> 6) | (G << 26))),
                    (G = o[K - 7]),
                    G.high),
                  Z = o[K - 16],
                  Q = Z.high;
                ((Z = Z.low),
                  (G = J + G.low),
                  (W = W + $ + (G >>> 0 < J >>> 0 ? 1 : 0)),
                  (G = G + Y),
                  (W = W + X + (G >>> 0 < Y >>> 0 ? 1 : 0)),
                  (G = G + Z),
                  (W = W + Q + (G >>> 0 < Z >>> 0 ? 1 : 0)));
                ((z.high = W), (z.low = G));
              }
              (($ = (j & O) ^ (~j & q)),
                (Z = (k & M) ^ (~k & H)),
                (z = (I & C) ^ (I & _) ^ (C & _)));
              var tt = (L & D) ^ (L & R) ^ (D & R),
                et =
                  ((J =
                    ((I >>> 28) | (L << 4)) ^
                    ((I << 30) | (L >>> 2)) ^
                    ((I << 25) | (L >>> 7))),
                  (X =
                    ((L >>> 28) | (I << 4)) ^
                    ((L << 30) | (I >>> 2)) ^
                    ((L << 25) | (I >>> 7))),
                  (Y = a[K]),
                  Y.high),
                rt = Y.low;
              ((Y =
                U +
                (((k >>> 14) | (j << 18)) ^
                  ((k >>> 18) | (j << 14)) ^
                  ((k << 23) | (j >>> 9)))),
                (Q =
                  V +
                  (((j >>> 14) | (k << 18)) ^
                    ((j >>> 18) | (k << 14)) ^
                    ((j << 23) | (k >>> 9))) +
                  (Y >>> 0 < U >>> 0 ? 1 : 0)),
                (Y = Y + Z),
                (Q = Q + $ + (Y >>> 0 < Z >>> 0 ? 1 : 0)),
                (Y = Y + rt),
                (Q = Q + et + (Y >>> 0 < rt >>> 0 ? 1 : 0)),
                (Y = Y + G),
                (Q = Q + W + (Y >>> 0 < G >>> 0 ? 1 : 0)),
                (G = X + tt),
                (z = J + z + (G >>> 0 < X >>> 0 ? 1 : 0)),
                (V = q),
                (U = H),
                (q = O),
                (H = M),
                (O = j),
                (M = k),
                (k = (T + Y) | 0),
                (j = (B + Q + (k >>> 0 < T >>> 0 ? 1 : 0)) | 0),
                (B = _),
                (T = R),
                (_ = C),
                (R = D),
                (C = I),
                (D = L),
                (L = (Y + G) | 0),
                (I = (Q + z + (L >>> 0 < Y >>> 0 ? 1 : 0)) | 0));
            }
            ((d = n.low = d + L),
              (n.high = f + I + (d >>> 0 < L >>> 0 ? 1 : 0)),
              (g = i.low = g + D),
              (i.high = p + C + (g >>> 0 < D >>> 0 ? 1 : 0)),
              (m = s.low = m + R),
              (s.high = v + _ + (m >>> 0 < R >>> 0 ? 1 : 0)),
              (b = h.low = b + T),
              (h.high = y + B + (b >>> 0 < T >>> 0 ? 1 : 0)),
              (x = u.low = x + k),
              (u.high = w + j + (x >>> 0 < k >>> 0 ? 1 : 0)),
              (A = c.low = A + M),
              (c.high = S + O + (A >>> 0 < M >>> 0 ? 1 : 0)),
              (F = l.low = F + H),
              (l.high = E + q + (F >>> 0 < H >>> 0 ? 1 : 0)),
              (P = r.low = P + U),
              (r.high = N + V + (P >>> 0 < U >>> 0 ? 1 : 0)));
          },
          _doFinalize: function () {
            var t = this._data,
              e = t.words,
              r = 8 * this._nDataBytes,
              n = 8 * t.sigBytes;
            return (
              (e[n >>> 5] |= 128 << (24 - (n % 32))),
              (e[30 + (((n + 128) >>> 10) << 5)] = Math.floor(r / 4294967296)),
              (e[31 + (((n + 128) >>> 10) << 5)] = r),
              (t.sigBytes = 4 * e.length),
              this._process(),
              this._hash.toX32()
            );
          },
          clone: function () {
            var t = r.clone.call(this);
            return ((t._hash = this._hash.clone()), t);
          },
          blockSize: 32,
        })),
        (e.SHA512 = r._createHelper(n)),
        (e.HmacSHA512 = r._createHmacHelper(n)));
    })(),
    (function () {
      var t = h,
        e = t.x64,
        r = e.Word,
        n = e.WordArray,
        i = ((e = t.algo), e.SHA512);
      e = e.SHA384 = i.extend({
        _doReset: function () {
          this._hash = new n.init([
            new r.init(3418070365, 3238371032),
            new r.init(1654270250, 914150663),
            new r.init(2438529370, 812702999),
            new r.init(355462360, 4144912697),
            new r.init(1731405415, 4290775857),
            new r.init(2394180231, 1750603025),
            new r.init(3675008525, 1694076839),
            new r.init(1203062813, 3204075428),
          ]);
        },
        _doFinalize: function () {
          var t = i._doFinalize.call(this);
          return ((t.sigBytes -= 16), t);
        },
      });
      ((t.SHA384 = i._createHelper(e)),
        (t.HmacSHA384 = i._createHmacHelper(e)));
    })(),
    (function () {
      var t = h,
        e = t.lib,
        r = e.WordArray,
        n = e.Hasher,
        i =
          ((e = t.algo),
          r.create([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1,
            10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1,
            2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15,
            14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
          ])),
        s = r.create([
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ]),
        a = r.create([
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ]),
        o = r.create([
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ]),
        u = r.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
        c = r.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
      e = e.RIPEMD160 = n.extend({
        _doReset: function () {
          this._hash = r.create([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        },
        _doProcessBlock: function (t, e) {
          for (var r = 0; 16 > r; r++) {
            var n = e + r,
              h = t[n];
            t[n] =
              (16711935 & ((h << 8) | (h >>> 24))) |
              (4278255360 & ((h << 24) | (h >>> 8)));
          }
          ((n = this._hash.words), (h = u.words));
          var l,
            f,
            d,
            p,
            g,
            v,
            m,
            y,
            b,
            w,
            x = c.words,
            S = i.words,
            A = s.words,
            E = a.words,
            F = o.words;
          ((v = l = n[0]),
            (m = f = n[1]),
            (y = d = n[2]),
            (b = p = n[3]),
            (w = g = n[4]));
          var N;
          for (r = 0; 80 > r; r += 1)
            ((N = (l + t[e + S[r]]) | 0),
              (N =
                16 > r
                  ? N + ((f ^ d ^ p) + h[0])
                  : 32 > r
                    ? N + (((f & d) | (~f & p)) + h[1])
                    : 48 > r
                      ? N + (((f | ~d) ^ p) + h[2])
                      : 64 > r
                        ? N + (((f & p) | (d & ~p)) + h[3])
                        : N + ((f ^ (d | ~p)) + h[4])),
              (N |= 0),
              (N = (N << E[r]) | (N >>> (32 - E[r]))),
              (N = (N + g) | 0),
              (l = g),
              (g = p),
              (p = (d << 10) | (d >>> 22)),
              (d = f),
              (f = N),
              (N = (v + t[e + A[r]]) | 0),
              (N =
                16 > r
                  ? N + ((m ^ (y | ~b)) + x[0])
                  : 32 > r
                    ? N + (((m & b) | (y & ~b)) + x[1])
                    : 48 > r
                      ? N + (((m | ~y) ^ b) + x[2])
                      : 64 > r
                        ? N + (((m & y) | (~m & b)) + x[3])
                        : N + ((m ^ y ^ b) + x[4])),
              (N |= 0),
              (N = (N << F[r]) | (N >>> (32 - F[r]))),
              (N = (N + w) | 0),
              (v = w),
              (w = b),
              (b = (y << 10) | (y >>> 22)),
              (y = m),
              (m = N));
          ((N = (n[1] + d + b) | 0),
            (n[1] = (n[2] + p + w) | 0),
            (n[2] = (n[3] + g + v) | 0),
            (n[3] = (n[4] + l + m) | 0),
            (n[4] = (n[0] + f + y) | 0),
            (n[0] = N));
        },
        _doFinalize: function () {
          var t = this._data,
            e = t.words,
            r = 8 * this._nDataBytes,
            n = 8 * t.sigBytes;
          for (
            e[n >>> 5] |= 128 << (24 - (n % 32)),
              e[14 + (((n + 64) >>> 9) << 4)] =
                (16711935 & ((r << 8) | (r >>> 24))) |
                (4278255360 & ((r << 24) | (r >>> 8))),
              t.sigBytes = 4 * (e.length + 1),
              this._process(),
              t = this._hash,
              e = t.words,
              r = 0;
            5 > r;
            r++
          )
            ((n = e[r]),
              (e[r] =
                (16711935 & ((n << 8) | (n >>> 24))) |
                (4278255360 & ((n << 24) | (n >>> 8)))));
          return t;
        },
        clone: function () {
          var t = n.clone.call(this);
          return ((t._hash = this._hash.clone()), t);
        },
      });
      ((t.RIPEMD160 = n._createHelper(e)),
        (t.HmacRIPEMD160 = n._createHmacHelper(e)));
    })(Math),
    (function () {
      var t = h,
        e = t.enc.Utf8;
      t.algo.HMAC = t.lib.Base.extend({
        init: function (t, r) {
          ((t = this._hasher = new t.init()),
            "string" == typeof r && (r = e.parse(r)));
          var n = t.blockSize,
            i = 4 * n;
          (r.sigBytes > i && (r = t.finalize(r)), r.clamp());
          for (
            var s = (this._oKey = r.clone()),
              a = (this._iKey = r.clone()),
              o = s.words,
              h = a.words,
              u = 0;
            u < n;
            u++
          )
            ((o[u] ^= 1549556828), (h[u] ^= 909522486));
          ((s.sigBytes = a.sigBytes = i), this.reset());
        },
        reset: function () {
          var t = this._hasher;
          (t.reset(), t.update(this._iKey));
        },
        update: function (t) {
          return (this._hasher.update(t), this);
        },
        finalize: function (t) {
          var e = this._hasher;
          return (
            (t = e.finalize(t)),
            e.reset(),
            e.finalize(this._oKey.clone().concat(t))
          );
        },
      });
    })(),
    (function () {
      var t = h,
        e = t.lib,
        r = e.Base,
        n = e.WordArray,
        i = ((e = t.algo), e.HMAC),
        s = (e.PBKDF2 = r.extend({
          cfg: r.extend({ keySize: 4, hasher: e.SHA1, iterations: 1 }),
          init: function (t) {
            this.cfg = this.cfg.extend(t);
          },
          compute: function (t, e) {
            var r = this.cfg,
              s = i.create(r.hasher, t),
              a = n.create(),
              o = n.create([1]),
              h = a.words,
              u = o.words,
              c = r.keySize;
            for (r = r.iterations; h.length < c; ) {
              var l = s.update(e).finalize(o);
              s.reset();
              for (var f = l.words, d = f.length, p = l, g = 1; g < r; g++) {
                ((p = s.finalize(p)), s.reset());
                for (var v = p.words, m = 0; m < d; m++) f[m] ^= v[m];
              }
              (a.concat(l), u[0]++);
            }
            return ((a.sigBytes = 4 * c), a);
          },
        }));
      t.PBKDF2 = function (t, e, r) {
        return s.create(r).compute(t, e);
      };
    })());
  /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */
  var u,
    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    l = "=";
  function f(t) {
    var e,
      r,
      n = "";
    for (e = 0; e + 3 <= t.length; e += 3)
      ((r = parseInt(t.substring(e, e + 3), 16)),
        (n += c.charAt(r >> 6) + c.charAt(63 & r)));
    if (
      (e + 1 == t.length
        ? ((r = parseInt(t.substring(e, e + 1), 16)), (n += c.charAt(r << 2)))
        : e + 2 == t.length &&
          ((r = parseInt(t.substring(e, e + 2), 16)),
          (n += c.charAt(r >> 2) + c.charAt((3 & r) << 4))),
      l)
    )
      while ((3 & n.length) > 0) n += l;
    return n;
  }
  function d(t) {
    var e,
      r,
      n,
      i = "",
      s = 0;
    for (e = 0; e < t.length; ++e) {
      if (t.charAt(e) == l) break;
      ((n = c.indexOf(t.charAt(e))),
        n < 0 ||
          (0 == s
            ? ((i += P(n >> 2)), (r = 3 & n), (s = 1))
            : 1 == s
              ? ((i += P((r << 2) | (n >> 4))), (r = 15 & n), (s = 2))
              : 2 == s
                ? ((i += P(r)), (i += P(n >> 2)), (r = 3 & n), (s = 3))
                : ((i += P((r << 2) | (n >> 4))), (i += P(15 & n)), (s = 0))));
    }
    return (1 == s && (i += P(r << 2)), i);
  }
  function p(t) {
    var e,
      r = d(t),
      n = new Array();
    for (e = 0; 2 * e < r.length; ++e)
      n[e] = parseInt(r.substring(2 * e, 2 * e + 2), 16);
    return n;
  }
  var g = 0xdeadbeefcafe,
    v = 15715070 == (16777215 & g);
  function m(t, e, r) {
    null != t &&
      ("number" == typeof t
        ? this.fromNumber(t, e, r)
        : null == e && "string" != typeof t
          ? this.fromString(t, 256)
          : this.fromString(t, e));
  }
  function y() {
    return new m(null);
  }
  function b(t, e, r, n, i, s) {
    while (--s >= 0) {
      var a = e * this[t++] + r[n] + i;
      ((i = Math.floor(a / 67108864)), (r[n++] = 67108863 & a));
    }
    return i;
  }
  function w(t, e, r, n, i, s) {
    var a = 32767 & e,
      o = e >> 15;
    while (--s >= 0) {
      var h = 32767 & this[t],
        u = this[t++] >> 15,
        c = o * h + u * a;
      ((h = a * h + ((32767 & c) << 15) + r[n] + (1073741823 & i)),
        (i = (h >>> 30) + (c >>> 15) + o * u + (i >>> 30)),
        (r[n++] = 1073741823 & h));
    }
    return i;
  }
  function x(t, e, r, n, i, s) {
    var a = 16383 & e,
      o = e >> 14;
    while (--s >= 0) {
      var h = 16383 & this[t],
        u = this[t++] >> 14,
        c = o * h + u * a;
      ((h = a * h + ((16383 & c) << 14) + r[n] + i),
        (i = (h >> 28) + (c >> 14) + o * u),
        (r[n++] = 268435455 & h));
    }
    return i;
  }
  (v && "Microsoft Internet Explorer" == i.appName
    ? ((m.prototype.am = w), (u = 30))
    : v && "Netscape" != i.appName
      ? ((m.prototype.am = b), (u = 26))
      : ((m.prototype.am = x), (u = 28)),
    (m.prototype.DB = u),
    (m.prototype.DM = (1 << u) - 1),
    (m.prototype.DV = 1 << u));
  var S = 52;
  ((m.prototype.FV = Math.pow(2, S)),
    (m.prototype.F1 = S - u),
    (m.prototype.F2 = 2 * u - S));
  var A,
    E,
    F = "0123456789abcdefghijklmnopqrstuvwxyz",
    N = new Array();
  for (A = "0".charCodeAt(0), E = 0; E <= 9; ++E) N[A++] = E;
  for (A = "a".charCodeAt(0), E = 10; E < 36; ++E) N[A++] = E;
  for (A = "A".charCodeAt(0), E = 10; E < 36; ++E) N[A++] = E;
  function P(t) {
    return F.charAt(t);
  }
  function I(t, e) {
    var r = N[t.charCodeAt(e)];
    return null == r ? -1 : r;
  }
  function L(t) {
    for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
    ((t.t = this.t), (t.s = this.s));
  }
  function C(t) {
    ((this.t = 1),
      (this.s = t < 0 ? -1 : 0),
      t > 0 ? (this[0] = t) : t < -1 ? (this[0] = t + this.DV) : (this.t = 0));
  }
  function D(t) {
    var e = y();
    return (e.fromInt(t), e);
  }
  function _(t, e) {
    var r;
    if (16 == e) r = 4;
    else if (8 == e) r = 3;
    else if (256 == e) r = 8;
    else if (2 == e) r = 1;
    else if (32 == e) r = 5;
    else {
      if (4 != e) return void this.fromRadix(t, e);
      r = 2;
    }
    ((this.t = 0), (this.s = 0));
    var n = t.length,
      i = !1,
      s = 0;
    while (--n >= 0) {
      var a = 8 == r ? 255 & t[n] : I(t, n);
      a < 0
        ? "-" == t.charAt(n) && (i = !0)
        : ((i = !1),
          0 == s
            ? (this[this.t++] = a)
            : s + r > this.DB
              ? ((this[this.t - 1] |= (a & ((1 << (this.DB - s)) - 1)) << s),
                (this[this.t++] = a >> (this.DB - s)))
              : (this[this.t - 1] |= a << s),
          (s += r),
          s >= this.DB && (s -= this.DB));
    }
    (8 == r &&
      0 != (128 & t[0]) &&
      ((this.s = -1),
      s > 0 && (this[this.t - 1] |= ((1 << (this.DB - s)) - 1) << s)),
      this.clamp(),
      i && m.ZERO.subTo(this, this));
  }
  function R() {
    var t = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == t) --this.t;
  }
  function B(t) {
    if (this.s < 0) return "-" + this.negate().toString(t);
    var e;
    if (16 == t) e = 4;
    else if (8 == t) e = 3;
    else if (2 == t) e = 1;
    else if (32 == t) e = 5;
    else {
      if (4 != t) return this.toRadix(t);
      e = 2;
    }
    var r,
      n = (1 << e) - 1,
      i = !1,
      s = "",
      a = this.t,
      o = this.DB - ((a * this.DB) % e);
    if (a-- > 0) {
      o < this.DB && (r = this[a] >> o) > 0 && ((i = !0), (s = P(r)));
      while (a >= 0)
        (o < e
          ? ((r = (this[a] & ((1 << o) - 1)) << (e - o)),
            (r |= this[--a] >> (o += this.DB - e)))
          : ((r = (this[a] >> (o -= e)) & n), o <= 0 && ((o += this.DB), --a)),
          r > 0 && (i = !0),
          i && (s += P(r)));
    }
    return i ? s : "0";
  }
  function T() {
    var t = y();
    return (m.ZERO.subTo(this, t), t);
  }
  function j() {
    return this.s < 0 ? this.negate() : this;
  }
  function k(t) {
    var e = this.s - t.s;
    if (0 != e) return e;
    var r = this.t;
    if (((e = r - t.t), 0 != e)) return this.s < 0 ? -e : e;
    while (--r >= 0) if (0 != (e = this[r] - t[r])) return e;
    return 0;
  }
  function O(t) {
    var e,
      r = 1;
    return (
      0 != (e = t >>> 16) && ((t = e), (r += 16)),
      0 != (e = t >> 8) && ((t = e), (r += 8)),
      0 != (e = t >> 4) && ((t = e), (r += 4)),
      0 != (e = t >> 2) && ((t = e), (r += 2)),
      0 != (e = t >> 1) && ((t = e), (r += 1)),
      r
    );
  }
  function M() {
    return this.t <= 0
      ? 0
      : this.DB * (this.t - 1) + O(this[this.t - 1] ^ (this.s & this.DM));
  }
  function q(t, e) {
    var r;
    for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
    for (r = t - 1; r >= 0; --r) e[r] = 0;
    ((e.t = this.t + t), (e.s = this.s));
  }
  function H(t, e) {
    for (var r = t; r < this.t; ++r) e[r - t] = this[r];
    ((e.t = Math.max(this.t - t, 0)), (e.s = this.s));
  }
  function V(t, e) {
    var r,
      n = t % this.DB,
      i = this.DB - n,
      s = (1 << i) - 1,
      a = Math.floor(t / this.DB),
      o = (this.s << n) & this.DM;
    for (r = this.t - 1; r >= 0; --r)
      ((e[r + a + 1] = (this[r] >> i) | o), (o = (this[r] & s) << n));
    for (r = a - 1; r >= 0; --r) e[r] = 0;
    ((e[a] = o), (e.t = this.t + a + 1), (e.s = this.s), e.clamp());
  }
  function U(t, e) {
    e.s = this.s;
    var r = Math.floor(t / this.DB);
    if (r >= this.t) e.t = 0;
    else {
      var n = t % this.DB,
        i = this.DB - n,
        s = (1 << n) - 1;
      e[0] = this[r] >> n;
      for (var a = r + 1; a < this.t; ++a)
        ((e[a - r - 1] |= (this[a] & s) << i), (e[a - r] = this[a] >> n));
      (n > 0 && (e[this.t - r - 1] |= (this.s & s) << i),
        (e.t = this.t - r),
        e.clamp());
    }
  }
  function K(t, e) {
    var r = 0,
      n = 0,
      i = Math.min(t.t, this.t);
    while (r < i)
      ((n += this[r] - t[r]), (e[r++] = n & this.DM), (n >>= this.DB));
    if (t.t < this.t) {
      n -= t.s;
      while (r < this.t)
        ((n += this[r]), (e[r++] = n & this.DM), (n >>= this.DB));
      n += this.s;
    } else {
      n += this.s;
      while (r < t.t) ((n -= t[r]), (e[r++] = n & this.DM), (n >>= this.DB));
      n -= t.s;
    }
    ((e.s = n < 0 ? -1 : 0),
      n < -1 ? (e[r++] = this.DV + n) : n > 0 && (e[r++] = n),
      (e.t = r),
      e.clamp());
  }
  function z(t, e) {
    var r = this.abs(),
      n = t.abs(),
      i = r.t;
    e.t = i + n.t;
    while (--i >= 0) e[i] = 0;
    for (i = 0; i < n.t; ++i) e[i + r.t] = r.am(0, n[i], e, i, 0, r.t);
    ((e.s = 0), e.clamp(), this.s != t.s && m.ZERO.subTo(e, e));
  }
  function W(t) {
    var e = this.abs(),
      r = (t.t = 2 * e.t);
    while (--r >= 0) t[r] = 0;
    for (r = 0; r < e.t - 1; ++r) {
      var n = e.am(r, e[r], t, 2 * r, 0, 1);
      (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, n, e.t - r - 1)) >=
        e.DV && ((t[r + e.t] -= e.DV), (t[r + e.t + 1] = 1));
    }
    (t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)),
      (t.s = 0),
      t.clamp());
  }
  function G(t, e, r) {
    var n = t.abs();
    if (!(n.t <= 0)) {
      var i = this.abs();
      if (i.t < n.t)
        return (null != e && e.fromInt(0), void (null != r && this.copyTo(r)));
      null == r && (r = y());
      var s = y(),
        a = this.s,
        o = t.s,
        h = this.DB - O(n[n.t - 1]);
      h > 0 ? (n.lShiftTo(h, s), i.lShiftTo(h, r)) : (n.copyTo(s), i.copyTo(r));
      var u = s.t,
        c = s[u - 1];
      if (0 != c) {
        var l = c * (1 << this.F1) + (u > 1 ? s[u - 2] >> this.F2 : 0),
          f = this.FV / l,
          d = (1 << this.F1) / l,
          p = 1 << this.F2,
          g = r.t,
          v = g - u,
          b = null == e ? y() : e;
        (s.dlShiftTo(v, b),
          r.compareTo(b) >= 0 && ((r[r.t++] = 1), r.subTo(b, r)),
          m.ONE.dlShiftTo(u, b),
          b.subTo(s, s));
        while (s.t < u) s[s.t++] = 0;
        while (--v >= 0) {
          var w =
            r[--g] == c ? this.DM : Math.floor(r[g] * f + (r[g - 1] + p) * d);
          if ((r[g] += s.am(0, w, r, v, 0, u)) < w) {
            (s.dlShiftTo(v, b), r.subTo(b, r));
            while (r[g] < --w) r.subTo(b, r);
          }
        }
        (null != e && (r.drShiftTo(u, e), a != o && m.ZERO.subTo(e, e)),
          (r.t = u),
          r.clamp(),
          h > 0 && r.rShiftTo(h, r),
          a < 0 && m.ZERO.subTo(r, r));
      }
    }
  }
  function J(t) {
    var e = y();
    return (
      this.abs().divRemTo(t, null, e),
      this.s < 0 && e.compareTo(m.ZERO) > 0 && t.subTo(e, e),
      e
    );
  }
  function X(t) {
    this.m = t;
  }
  function Y(t) {
    return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t;
  }
  function $(t) {
    return t;
  }
  function Z(t) {
    t.divRemTo(this.m, null, t);
  }
  function Q(t, e, r) {
    (t.multiplyTo(e, r), this.reduce(r));
  }
  function tt(t, e) {
    (t.squareTo(e), this.reduce(e));
  }
  function et() {
    if (this.t < 1) return 0;
    var t = this[0];
    if (0 == (1 & t)) return 0;
    var e = 3 & t;
    return (
      (e = (e * (2 - (15 & t) * e)) & 15),
      (e = (e * (2 - (255 & t) * e)) & 255),
      (e = (e * (2 - (((65535 & t) * e) & 65535))) & 65535),
      (e = (e * (2 - ((t * e) % this.DV))) % this.DV),
      e > 0 ? this.DV - e : -e
    );
  }
  function rt(t) {
    ((this.m = t),
      (this.mp = t.invDigit()),
      (this.mpl = 32767 & this.mp),
      (this.mph = this.mp >> 15),
      (this.um = (1 << (t.DB - 15)) - 1),
      (this.mt2 = 2 * t.t));
  }
  function nt(t) {
    var e = y();
    return (
      t.abs().dlShiftTo(this.m.t, e),
      e.divRemTo(this.m, null, e),
      t.s < 0 && e.compareTo(m.ZERO) > 0 && this.m.subTo(e, e),
      e
    );
  }
  function it(t) {
    var e = y();
    return (t.copyTo(e), this.reduce(e), e);
  }
  function st(t) {
    while (t.t <= this.mt2) t[t.t++] = 0;
    for (var e = 0; e < this.m.t; ++e) {
      var r = 32767 & t[e],
        n =
          (r * this.mpl +
            (((r * this.mph + (t[e] >> 15) * this.mpl) & this.um) << 15)) &
          t.DM;
      ((r = e + this.m.t), (t[r] += this.m.am(0, n, t, e, 0, this.m.t)));
      while (t[r] >= t.DV) ((t[r] -= t.DV), t[++r]++);
    }
    (t.clamp(),
      t.drShiftTo(this.m.t, t),
      t.compareTo(this.m) >= 0 && t.subTo(this.m, t));
  }
  function at(t, e) {
    (t.squareTo(e), this.reduce(e));
  }
  function ot(t, e, r) {
    (t.multiplyTo(e, r), this.reduce(r));
  }
  function ht() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s);
  }
  function ut(t, e) {
    if (t > 4294967295 || t < 1) return m.ONE;
    var r = y(),
      n = y(),
      i = e.convert(this),
      s = O(t) - 1;
    i.copyTo(r);
    while (--s >= 0)
      if ((e.sqrTo(r, n), (t & (1 << s)) > 0)) e.mulTo(n, i, r);
      else {
        var a = r;
        ((r = n), (n = a));
      }
    return e.revert(r);
  }
  function ct(t, e) {
    var r;
    return ((r = t < 256 || e.isEven() ? new X(e) : new rt(e)), this.exp(t, r));
  }
  /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */
  function lt() {
    var t = y();
    return (this.copyTo(t), t);
  }
  function ft() {
    if (this.s < 0) {
      if (1 == this.t) return this[0] - this.DV;
      if (0 == this.t) return -1;
    } else {
      if (1 == this.t) return this[0];
      if (0 == this.t) return 0;
    }
    return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
  }
  function dt() {
    return 0 == this.t ? this.s : (this[0] << 24) >> 24;
  }
  function pt() {
    return 0 == this.t ? this.s : (this[0] << 16) >> 16;
  }
  function gt(t) {
    return Math.floor((Math.LN2 * this.DB) / Math.log(t));
  }
  function vt() {
    return this.s < 0
      ? -1
      : this.t <= 0 || (1 == this.t && this[0] <= 0)
        ? 0
        : 1;
  }
  function mt(t) {
    if ((null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36))
      return "0";
    var e = this.chunkSize(t),
      r = Math.pow(t, e),
      n = D(r),
      i = y(),
      s = y(),
      a = "";
    this.divRemTo(n, i, s);
    while (i.signum() > 0)
      ((a = (r + s.intValue()).toString(t).substr(1) + a), i.divRemTo(n, i, s));
    return s.intValue().toString(t) + a;
  }
  function yt(t, e) {
    (this.fromInt(0), null == e && (e = 10));
    for (
      var r = this.chunkSize(e),
        n = Math.pow(e, r),
        i = !1,
        s = 0,
        a = 0,
        o = 0;
      o < t.length;
      ++o
    ) {
      var h = I(t, o);
      h < 0
        ? "-" == t.charAt(o) && 0 == this.signum() && (i = !0)
        : ((a = e * a + h),
          ++s >= r &&
            (this.dMultiply(n), this.dAddOffset(a, 0), (s = 0), (a = 0)));
    }
    (s > 0 && (this.dMultiply(Math.pow(e, s)), this.dAddOffset(a, 0)),
      i && m.ZERO.subTo(this, this));
  }
  function bt(t, e, r) {
    if ("number" == typeof e)
      if (t < 2) this.fromInt(1);
      else {
        (this.fromNumber(t, r),
          this.testBit(t - 1) ||
            this.bitwiseTo(m.ONE.shiftLeft(t - 1), Pt, this),
          this.isEven() && this.dAddOffset(1, 0));
        while (!this.isProbablePrime(e))
          (this.dAddOffset(2, 0),
            this.bitLength() > t && this.subTo(m.ONE.shiftLeft(t - 1), this));
      }
    else {
      var n = new Array(),
        i = 7 & t;
      ((n.length = 1 + (t >> 3)),
        e.nextBytes(n),
        i > 0 ? (n[0] &= (1 << i) - 1) : (n[0] = 0),
        this.fromString(n, 256));
    }
  }
  function wt() {
    var t = this.t,
      e = new Array();
    e[0] = this.s;
    var r,
      n = this.DB - ((t * this.DB) % 8),
      i = 0;
    if (t-- > 0) {
      n < this.DB &&
        (r = this[t] >> n) != (this.s & this.DM) >> n &&
        (e[i++] = r | (this.s << (this.DB - n)));
      while (t >= 0)
        (n < 8
          ? ((r = (this[t] & ((1 << n) - 1)) << (8 - n)),
            (r |= this[--t] >> (n += this.DB - 8)))
          : ((r = (this[t] >> (n -= 8)) & 255),
            n <= 0 && ((n += this.DB), --t)),
          0 != (128 & r) && (r |= -256),
          0 == i && (128 & this.s) != (128 & r) && ++i,
          (i > 0 || r != this.s) && (e[i++] = r));
    }
    return e;
  }
  function xt(t) {
    return 0 == this.compareTo(t);
  }
  function St(t) {
    return this.compareTo(t) < 0 ? this : t;
  }
  function At(t) {
    return this.compareTo(t) > 0 ? this : t;
  }
  function Et(t, e, r) {
    var n,
      i,
      s = Math.min(t.t, this.t);
    for (n = 0; n < s; ++n) r[n] = e(this[n], t[n]);
    if (t.t < this.t) {
      for (i = t.s & this.DM, n = s; n < this.t; ++n) r[n] = e(this[n], i);
      r.t = this.t;
    } else {
      for (i = this.s & this.DM, n = s; n < t.t; ++n) r[n] = e(i, t[n]);
      r.t = t.t;
    }
    ((r.s = e(this.s, t.s)), r.clamp());
  }
  function Ft(t, e) {
    return t & e;
  }
  function Nt(t) {
    var e = y();
    return (this.bitwiseTo(t, Ft, e), e);
  }
  function Pt(t, e) {
    return t | e;
  }
  function It(t) {
    var e = y();
    return (this.bitwiseTo(t, Pt, e), e);
  }
  function Lt(t, e) {
    return t ^ e;
  }
  function Ct(t) {
    var e = y();
    return (this.bitwiseTo(t, Lt, e), e);
  }
  function Dt(t, e) {
    return t & ~e;
  }
  function _t(t) {
    var e = y();
    return (this.bitwiseTo(t, Dt, e), e);
  }
  function Rt() {
    for (var t = y(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
    return ((t.t = this.t), (t.s = ~this.s), t);
  }
  function Bt(t) {
    var e = y();
    return (t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e);
  }
  function Tt(t) {
    var e = y();
    return (t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e);
  }
  function jt(t) {
    if (0 == t) return -1;
    var e = 0;
    return (
      0 == (65535 & t) && ((t >>= 16), (e += 16)),
      0 == (255 & t) && ((t >>= 8), (e += 8)),
      0 == (15 & t) && ((t >>= 4), (e += 4)),
      0 == (3 & t) && ((t >>= 2), (e += 2)),
      0 == (1 & t) && ++e,
      e
    );
  }
  function kt() {
    for (var t = 0; t < this.t; ++t)
      if (0 != this[t]) return t * this.DB + jt(this[t]);
    return this.s < 0 ? this.t * this.DB : -1;
  }
  function Ot(t) {
    var e = 0;
    while (0 != t) ((t &= t - 1), ++e);
    return e;
  }
  function Mt() {
    for (var t = 0, e = this.s & this.DM, r = 0; r < this.t; ++r)
      t += Ot(this[r] ^ e);
    return t;
  }
  function qt(t) {
    var e = Math.floor(t / this.DB);
    return e >= this.t ? 0 != this.s : 0 != (this[e] & (1 << (t % this.DB)));
  }
  function Ht(t, e) {
    var r = m.ONE.shiftLeft(t);
    return (this.bitwiseTo(r, e, r), r);
  }
  function Vt(t) {
    return this.changeBit(t, Pt);
  }
  function Ut(t) {
    return this.changeBit(t, Dt);
  }
  function Kt(t) {
    return this.changeBit(t, Lt);
  }
  function zt(t, e) {
    var r = 0,
      n = 0,
      i = Math.min(t.t, this.t);
    while (r < i)
      ((n += this[r] + t[r]), (e[r++] = n & this.DM), (n >>= this.DB));
    if (t.t < this.t) {
      n += t.s;
      while (r < this.t)
        ((n += this[r]), (e[r++] = n & this.DM), (n >>= this.DB));
      n += this.s;
    } else {
      n += this.s;
      while (r < t.t) ((n += t[r]), (e[r++] = n & this.DM), (n >>= this.DB));
      n += t.s;
    }
    ((e.s = n < 0 ? -1 : 0),
      n > 0 ? (e[r++] = n) : n < -1 && (e[r++] = this.DV + n),
      (e.t = r),
      e.clamp());
  }
  function Wt(t) {
    var e = y();
    return (this.addTo(t, e), e);
  }
  function Gt(t) {
    var e = y();
    return (this.subTo(t, e), e);
  }
  function Jt(t) {
    var e = y();
    return (this.multiplyTo(t, e), e);
  }
  function Xt() {
    var t = y();
    return (this.squareTo(t), t);
  }
  function Yt(t) {
    var e = y();
    return (this.divRemTo(t, e, null), e);
  }
  function $t(t) {
    var e = y();
    return (this.divRemTo(t, null, e), e);
  }
  function Zt(t) {
    var e = y(),
      r = y();
    return (this.divRemTo(t, e, r), new Array(e, r));
  }
  function Qt(t) {
    ((this[this.t] = this.am(0, t - 1, this, 0, 0, this.t)),
      ++this.t,
      this.clamp());
  }
  function te(t, e) {
    if (0 != t) {
      while (this.t <= e) this[this.t++] = 0;
      this[e] += t;
      while (this[e] >= this.DV)
        ((this[e] -= this.DV),
          ++e >= this.t && (this[this.t++] = 0),
          ++this[e]);
    }
  }
  function ee() {}
  function re(t) {
    return t;
  }
  function ne(t, e, r) {
    t.multiplyTo(e, r);
  }
  function ie(t, e) {
    t.squareTo(e);
  }
  function se(t) {
    return this.exp(t, new ee());
  }
  function ae(t, e, r) {
    var n,
      i = Math.min(this.t + t.t, e);
    ((r.s = 0), (r.t = i));
    while (i > 0) r[--i] = 0;
    for (n = r.t - this.t; i < n; ++i)
      r[i + this.t] = this.am(0, t[i], r, i, 0, this.t);
    for (n = Math.min(t.t, e); i < n; ++i) this.am(0, t[i], r, i, 0, e - i);
    r.clamp();
  }
  function oe(t, e, r) {
    --e;
    var n = (r.t = this.t + t.t - e);
    r.s = 0;
    while (--n >= 0) r[n] = 0;
    for (n = Math.max(e - this.t, 0); n < t.t; ++n)
      r[this.t + n - e] = this.am(e - n, t[n], r, 0, 0, this.t + n - e);
    (r.clamp(), r.drShiftTo(1, r));
  }
  function he(t) {
    ((this.r2 = y()),
      (this.q3 = y()),
      m.ONE.dlShiftTo(2 * t.t, this.r2),
      (this.mu = this.r2.divide(t)),
      (this.m = t));
  }
  function ue(t) {
    if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
    if (t.compareTo(this.m) < 0) return t;
    var e = y();
    return (t.copyTo(e), this.reduce(e), e);
  }
  function ce(t) {
    return t;
  }
  function le(t) {
    (t.drShiftTo(this.m.t - 1, this.r2),
      t.t > this.m.t + 1 && ((t.t = this.m.t + 1), t.clamp()),
      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2));
    while (t.compareTo(this.r2) < 0) t.dAddOffset(1, this.m.t + 1);
    t.subTo(this.r2, t);
    while (t.compareTo(this.m) >= 0) t.subTo(this.m, t);
  }
  function fe(t, e) {
    (t.squareTo(e), this.reduce(e));
  }
  function de(t, e, r) {
    (t.multiplyTo(e, r), this.reduce(r));
  }
  function pe(t, e) {
    var r,
      n,
      i = t.bitLength(),
      s = D(1);
    if (i <= 0) return s;
    ((r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6),
      (n = i < 8 ? new X(e) : e.isEven() ? new he(e) : new rt(e)));
    var a = new Array(),
      o = 3,
      h = r - 1,
      u = (1 << r) - 1;
    if (((a[1] = n.convert(this)), r > 1)) {
      var c = y();
      n.sqrTo(a[1], c);
      while (o <= u) ((a[o] = y()), n.mulTo(c, a[o - 2], a[o]), (o += 2));
    }
    var l,
      f,
      d = t.t - 1,
      p = !0,
      g = y();
    i = O(t[d]) - 1;
    while (d >= 0) {
      (i >= h
        ? (l = (t[d] >> (i - h)) & u)
        : ((l = (t[d] & ((1 << (i + 1)) - 1)) << (h - i)),
          d > 0 && (l |= t[d - 1] >> (this.DB + i - h))),
        (o = r));
      while (0 == (1 & l)) ((l >>= 1), --o);
      if (((i -= o) < 0 && ((i += this.DB), --d), p))
        (a[l].copyTo(s), (p = !1));
      else {
        while (o > 1) (n.sqrTo(s, g), n.sqrTo(g, s), (o -= 2));
        (o > 0 ? n.sqrTo(s, g) : ((f = s), (s = g), (g = f)),
          n.mulTo(g, a[l], s));
      }
      while (d >= 0 && 0 == (t[d] & (1 << i)))
        (n.sqrTo(s, g),
          (f = s),
          (s = g),
          (g = f),
          --i < 0 && ((i = this.DB - 1), --d));
    }
    return n.revert(s);
  }
  function ge(t) {
    var e = this.s < 0 ? this.negate() : this.clone(),
      r = t.s < 0 ? t.negate() : t.clone();
    if (e.compareTo(r) < 0) {
      var n = e;
      ((e = r), (r = n));
    }
    var i = e.getLowestSetBit(),
      s = r.getLowestSetBit();
    if (s < 0) return e;
    (i < s && (s = i), s > 0 && (e.rShiftTo(s, e), r.rShiftTo(s, r)));
    while (e.signum() > 0)
      ((i = e.getLowestSetBit()) > 0 && e.rShiftTo(i, e),
        (i = r.getLowestSetBit()) > 0 && r.rShiftTo(i, r),
        e.compareTo(r) >= 0
          ? (e.subTo(r, e), e.rShiftTo(1, e))
          : (r.subTo(e, r), r.rShiftTo(1, r)));
    return (s > 0 && r.lShiftTo(s, r), r);
  }
  function ve(t) {
    if (t <= 0) return 0;
    var e = this.DV % t,
      r = this.s < 0 ? t - 1 : 0;
    if (this.t > 0)
      if (0 == e) r = this[0] % t;
      else for (var n = this.t - 1; n >= 0; --n) r = (e * r + this[n]) % t;
    return r;
  }
  function me(t) {
    var e = t.isEven();
    if ((this.isEven() && e) || 0 == t.signum()) return m.ZERO;
    var r = t.clone(),
      n = this.clone(),
      i = D(1),
      s = D(0),
      a = D(0),
      o = D(1);
    while (0 != r.signum()) {
      while (r.isEven())
        (r.rShiftTo(1, r),
          e
            ? ((i.isEven() && s.isEven()) || (i.addTo(this, i), s.subTo(t, s)),
              i.rShiftTo(1, i))
            : s.isEven() || s.subTo(t, s),
          s.rShiftTo(1, s));
      while (n.isEven())
        (n.rShiftTo(1, n),
          e
            ? ((a.isEven() && o.isEven()) || (a.addTo(this, a), o.subTo(t, o)),
              a.rShiftTo(1, a))
            : o.isEven() || o.subTo(t, o),
          o.rShiftTo(1, o));
      r.compareTo(n) >= 0
        ? (r.subTo(n, r), e && i.subTo(a, i), s.subTo(o, s))
        : (n.subTo(r, n), e && a.subTo(i, a), o.subTo(s, o));
    }
    return 0 != n.compareTo(m.ONE)
      ? m.ZERO
      : o.compareTo(t) >= 0
        ? o.subtract(t)
        : o.signum() < 0
          ? (o.addTo(t, o), o.signum() < 0 ? o.add(t) : o)
          : o;
  }
  ((X.prototype.convert = Y),
    (X.prototype.revert = $),
    (X.prototype.reduce = Z),
    (X.prototype.mulTo = Q),
    (X.prototype.sqrTo = tt),
    (rt.prototype.convert = nt),
    (rt.prototype.revert = it),
    (rt.prototype.reduce = st),
    (rt.prototype.mulTo = ot),
    (rt.prototype.sqrTo = at),
    (m.prototype.copyTo = L),
    (m.prototype.fromInt = C),
    (m.prototype.fromString = _),
    (m.prototype.clamp = R),
    (m.prototype.dlShiftTo = q),
    (m.prototype.drShiftTo = H),
    (m.prototype.lShiftTo = V),
    (m.prototype.rShiftTo = U),
    (m.prototype.subTo = K),
    (m.prototype.multiplyTo = z),
    (m.prototype.squareTo = W),
    (m.prototype.divRemTo = G),
    (m.prototype.invDigit = et),
    (m.prototype.isEven = ht),
    (m.prototype.exp = ut),
    (m.prototype.toString = B),
    (m.prototype.negate = T),
    (m.prototype.abs = j),
    (m.prototype.compareTo = k),
    (m.prototype.bitLength = M),
    (m.prototype.mod = J),
    (m.prototype.modPowInt = ct),
    (m.ZERO = D(0)),
    (m.ONE = D(1)),
    (ee.prototype.convert = re),
    (ee.prototype.revert = re),
    (ee.prototype.mulTo = ne),
    (ee.prototype.sqrTo = ie),
    (he.prototype.convert = ue),
    (he.prototype.revert = ce),
    (he.prototype.reduce = le),
    (he.prototype.mulTo = de),
    (he.prototype.sqrTo = fe));
  var ye = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
      151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229,
      233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
      317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
      419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499,
      503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601,
      607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691,
      701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
      811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907,
      911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
    ],
    be = (1 << 26) / ye[ye.length - 1];
  function we(t) {
    var e,
      r = this.abs();
    if (1 == r.t && r[0] <= ye[ye.length - 1]) {
      for (e = 0; e < ye.length; ++e) if (r[0] == ye[e]) return !0;
      return !1;
    }
    if (r.isEven()) return !1;
    e = 1;
    while (e < ye.length) {
      var n = ye[e],
        i = e + 1;
      while (i < ye.length && n < be) n *= ye[i++];
      n = r.modInt(n);
      while (e < i) if (n % ye[e++] == 0) return !1;
    }
    return r.millerRabin(t);
  }
  function xe(t) {
    var e = this.subtract(m.ONE),
      r = e.getLowestSetBit();
    if (r <= 0) return !1;
    var n = e.shiftRight(r);
    ((t = (t + 1) >> 1), t > ye.length && (t = ye.length));
    for (var i = y(), s = 0; s < t; ++s) {
      i.fromInt(ye[Math.floor(Math.random() * ye.length)]);
      var a = i.modPow(n, this);
      if (0 != a.compareTo(m.ONE) && 0 != a.compareTo(e)) {
        var o = 1;
        while (o++ < r && 0 != a.compareTo(e))
          if (((a = a.modPowInt(2, this)), 0 == a.compareTo(m.ONE))) return !1;
        if (0 != a.compareTo(e)) return !1;
      }
    }
    return !0;
  }
  /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */
  function Se() {
    ((this.i = 0), (this.j = 0), (this.S = new Array()));
  }
  function Ae(t) {
    var e, r, n;
    for (e = 0; e < 256; ++e) this.S[e] = e;
    for (r = 0, e = 0; e < 256; ++e)
      ((r = (r + this.S[e] + t[e % t.length]) & 255),
        (n = this.S[e]),
        (this.S[e] = this.S[r]),
        (this.S[r] = n));
    ((this.i = 0), (this.j = 0));
  }
  function Ee() {
    var t;
    return (
      (this.i = (this.i + 1) & 255),
      (this.j = (this.j + this.S[this.i]) & 255),
      (t = this.S[this.i]),
      (this.S[this.i] = this.S[this.j]),
      (this.S[this.j] = t),
      this.S[(t + this.S[this.i]) & 255]
    );
  }
  function Fe() {
    return new Se();
  }
  ((m.prototype.chunkSize = gt),
    (m.prototype.toRadix = mt),
    (m.prototype.fromRadix = yt),
    (m.prototype.fromNumber = bt),
    (m.prototype.bitwiseTo = Et),
    (m.prototype.changeBit = Ht),
    (m.prototype.addTo = zt),
    (m.prototype.dMultiply = Qt),
    (m.prototype.dAddOffset = te),
    (m.prototype.multiplyLowerTo = ae),
    (m.prototype.multiplyUpperTo = oe),
    (m.prototype.modInt = ve),
    (m.prototype.millerRabin = xe),
    (m.prototype.clone = lt),
    (m.prototype.intValue = ft),
    (m.prototype.byteValue = dt),
    (m.prototype.shortValue = pt),
    (m.prototype.signum = vt),
    (m.prototype.toByteArray = wt),
    (m.prototype.equals = xt),
    (m.prototype.min = St),
    (m.prototype.max = At),
    (m.prototype.and = Nt),
    (m.prototype.or = It),
    (m.prototype.xor = Ct),
    (m.prototype.andNot = _t),
    (m.prototype.not = Rt),
    (m.prototype.shiftLeft = Bt),
    (m.prototype.shiftRight = Tt),
    (m.prototype.getLowestSetBit = kt),
    (m.prototype.bitCount = Mt),
    (m.prototype.testBit = qt),
    (m.prototype.setBit = Vt),
    (m.prototype.clearBit = Ut),
    (m.prototype.flipBit = Kt),
    (m.prototype.add = Wt),
    (m.prototype.subtract = Gt),
    (m.prototype.multiply = Jt),
    (m.prototype.divide = Yt),
    (m.prototype.remainder = $t),
    (m.prototype.divideAndRemainder = Zt),
    (m.prototype.modPow = pe),
    (m.prototype.modInverse = me),
    (m.prototype.pow = se),
    (m.prototype.gcd = ge),
    (m.prototype.isProbablePrime = we),
    (m.prototype.square = Xt),
    (Se.prototype.init = Ae),
    (Se.prototype.next = Ee));
  var Ne,
    Pe,
    Ie,
    Le = 256;
  /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */ function Ce(t) {
    ((Pe[Ie++] ^= 255 & t),
      (Pe[Ie++] ^= (t >> 8) & 255),
      (Pe[Ie++] ^= (t >> 16) & 255),
      (Pe[Ie++] ^= (t >> 24) & 255),
      Ie >= Le && (Ie -= Le));
  }
  function De() {
    Ce(new Date().getTime());
  }
  if (null == Pe) {
    var _e;
    if (
      ((Pe = new Array()),
      (Ie = 0),
      void 0 !== s && (void 0 !== s.crypto || void 0 !== s.msCrypto))
    ) {
      var Re = s.crypto || s.msCrypto;
      if (Re.getRandomValues) {
        var Be = new Uint8Array(32);
        for (Re.getRandomValues(Be), _e = 0; _e < 32; ++_e) Pe[Ie++] = Be[_e];
      } else if ("Netscape" == i.appName && i.appVersion < "5") {
        var Te = s.crypto.random(32);
        for (_e = 0; _e < Te.length; ++_e) Pe[Ie++] = 255 & Te.charCodeAt(_e);
      }
    }
    while (Ie < Le)
      ((_e = Math.floor(65536 * Math.random())),
        (Pe[Ie++] = _e >>> 8),
        (Pe[Ie++] = 255 & _e));
    ((Ie = 0), De());
  }
  function je() {
    if (null == Ne) {
      for (De(), Ne = Fe(), Ne.init(Pe), Ie = 0; Ie < Pe.length; ++Ie)
        Pe[Ie] = 0;
      Ie = 0;
    }
    return Ne.next();
  }
  function ke(t) {
    var e;
    for (e = 0; e < t.length; ++e) t[e] = je();
  }
  function Oe() {}
  /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */
  function Me(t, e) {
    return new m(t, e);
  }
  function qe(t, e) {
    if (e < t.length + 11) throw "Message too long for RSA";
    var r = new Array(),
      n = t.length - 1;
    while (n >= 0 && e > 0) {
      var i = t.charCodeAt(n--);
      i < 128
        ? (r[--e] = i)
        : i > 127 && i < 2048
          ? ((r[--e] = (63 & i) | 128), (r[--e] = (i >> 6) | 192))
          : ((r[--e] = (63 & i) | 128),
            (r[--e] = ((i >> 6) & 63) | 128),
            (r[--e] = (i >> 12) | 224));
    }
    r[--e] = 0;
    var s = new Oe(),
      a = new Array();
    while (e > 2) {
      a[0] = 0;
      while (0 == a[0]) s.nextBytes(a);
      r[--e] = a[0];
    }
    return ((r[--e] = 2), (r[--e] = 0), new m(r));
  }
  function He(t, e, r) {
    var n = "",
      i = 0;
    while (n.length < e)
      ((n += r(
        String.fromCharCode.apply(
          String,
          t.concat([
            (4278190080 & i) >> 24,
            (16711680 & i) >> 16,
            (65280 & i) >> 8,
            255 & i,
          ]),
        ),
      )),
        (i += 1));
    return n;
  }
  function Ve(t, e, r, n) {
    var i = Dr.crypto.MessageDigest,
      s = Dr.crypto.Util,
      a = null;
    if (
      (r || (r = "sha1"),
      "string" === typeof r &&
        ((a = i.getCanonicalAlgName(r)),
        (n = i.getHashLength(a)),
        (r = function (t) {
          return Zr(s.hashHex(Qr(t), a));
        })),
      t.length + 2 * n + 2 > e)
    )
      throw "Message too long for RSA";
    var o,
      h = "";
    for (o = 0; o < e - t.length - 2 * n - 2; o += 1) h += "\0";
    var u = r("") + h + "" + t,
      c = new Array(n);
    new Oe().nextBytes(c);
    var l = He(c, u.length, r),
      f = [];
    for (o = 0; o < u.length; o += 1) f[o] = u.charCodeAt(o) ^ l.charCodeAt(o);
    var d = He(f, c.length, r),
      p = [0];
    for (o = 0; o < c.length; o += 1) p[o + 1] = c[o] ^ d.charCodeAt(o);
    return new m(p.concat(f));
  }
  function Ue() {
    ((this.n = null),
      (this.e = 0),
      (this.d = null),
      (this.p = null),
      (this.q = null),
      (this.dmp1 = null),
      (this.dmq1 = null),
      (this.coeff = null));
  }
  function Ke(t, e) {
    if (((this.isPublic = !0), (this.isPrivate = !1), "string" !== typeof t))
      ((this.n = t), (this.e = e));
    else {
      if (!(null != t && null != e && t.length > 0 && e.length > 0))
        throw "Invalid RSA public key";
      ((this.n = Me(t, 16)), (this.e = parseInt(e, 16)));
    }
  }
  function ze(t) {
    return t.modPowInt(this.e, this.n);
  }
  function We(t) {
    var e = qe(t, (this.n.bitLength() + 7) >> 3);
    if (null == e) return null;
    var r = this.doPublic(e);
    if (null == r) return null;
    var n = r.toString(16);
    return 0 == (1 & n.length) ? n : "0" + n;
  }
  function Ge(t, e, r) {
    var n = (this.n.bitLength() + 7) >> 3,
      i = Ve(t, n, e, r);
    if (null == i) return null;
    var s = this.doPublic(i);
    if (null == s) return null;
    var a = s.toString(16);
    while (a.length < 2 * n) a = "0" + a;
    return a;
  }
  /*! (c) Tom Wu, Kenji Urushima | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */
  function Je(t, e) {
    var r = t.toByteArray(),
      n = 0;
    while (n < r.length && 0 == r[n]) ++n;
    if (r.length - n != e - 1 || 2 != r[n]) return null;
    ++n;
    while (0 != r[n]) if (++n >= r.length) return null;
    var i = "";
    while (++n < r.length) {
      var s = 255 & r[n];
      s < 128
        ? (i += String.fromCharCode(s))
        : s > 191 && s < 224
          ? ((i += String.fromCharCode(((31 & s) << 6) | (63 & r[n + 1]))), ++n)
          : ((i += String.fromCharCode(
              ((15 & s) << 12) | ((63 & r[n + 1]) << 6) | (63 & r[n + 2]),
            )),
            (n += 2));
    }
    return i;
  }
  function Xe(t, e, r) {
    var n = "",
      i = 0;
    while (n.length < e)
      ((n += r(
        t +
          String.fromCharCode.apply(String, [
            (4278190080 & i) >> 24,
            (16711680 & i) >> 16,
            (65280 & i) >> 8,
            255 & i,
          ]),
      )),
        (i += 1));
    return n;
  }
  function Ye(t, e, r, n) {
    var i = Dr.crypto.MessageDigest,
      s = Dr.crypto.Util,
      a = null;
    for (
      r || (r = "sha1"),
        "string" === typeof r &&
          ((a = i.getCanonicalAlgName(r)),
          (n = i.getHashLength(a)),
          (r = function (t) {
            return Zr(s.hashHex(Qr(t), a));
          })),
        t = t.toByteArray(),
        o = 0;
      o < t.length;
      o += 1
    )
      t[o] &= 255;
    while (t.length < e) t.unshift(0);
    if (((t = String.fromCharCode.apply(String, t)), t.length < 2 * n + 2))
      throw "Cipher too short";
    var o,
      h = t.substr(1, n),
      u = t.substr(n + 1),
      c = Xe(u, n, r),
      l = [];
    for (o = 0; o < h.length; o += 1) l[o] = h.charCodeAt(o) ^ c.charCodeAt(o);
    var f = Xe(String.fromCharCode.apply(String, l), t.length - n, r),
      d = [];
    for (o = 0; o < u.length; o += 1) d[o] = u.charCodeAt(o) ^ f.charCodeAt(o);
    if (((d = String.fromCharCode.apply(String, d)), d.substr(0, n) !== r("")))
      throw "Hash mismatch";
    d = d.substr(n);
    var p = d.indexOf(""),
      g = -1 != p ? d.substr(0, p).lastIndexOf("\0") : -1;
    if (g + 1 != p) throw "Malformed data";
    return d.substr(p + 1);
  }
  function $e(t, e, r) {
    if (((this.isPrivate = !0), "string" !== typeof t))
      ((this.n = t), (this.e = e), (this.d = r));
    else {
      if (!(null != t && null != e && t.length > 0 && e.length > 0))
        throw "Invalid RSA private key";
      ((this.n = Me(t, 16)), (this.e = parseInt(e, 16)), (this.d = Me(r, 16)));
    }
  }
  function Ze(t, e, r, n, i, s, a, o) {
    if (((this.isPrivate = !0), (this.isPublic = !1), null == t))
      throw "RSASetPrivateEx N == null";
    if (null == e) throw "RSASetPrivateEx E == null";
    if (0 == t.length) throw "RSASetPrivateEx N.length == 0";
    if (0 == e.length) throw "RSASetPrivateEx E.length == 0";
    if (!(null != t && null != e && t.length > 0 && e.length > 0))
      throw "Invalid RSA private key in RSASetPrivateEx";
    ((this.n = Me(t, 16)),
      (this.e = parseInt(e, 16)),
      (this.d = Me(r, 16)),
      (this.p = Me(n, 16)),
      (this.q = Me(i, 16)),
      (this.dmp1 = Me(s, 16)),
      (this.dmq1 = Me(a, 16)),
      (this.coeff = Me(o, 16)));
  }
  function Qe(t, e) {
    var r = new Oe(),
      n = t >> 1;
    this.e = parseInt(e, 16);
    for (var i = new m(e, 16), s = t / 2 - 100, a = m.ONE.shiftLeft(s); ; ) {
      for (;;)
        if (
          ((this.p = new m(t - n, 1, r)),
          0 == this.p.subtract(m.ONE).gcd(i).compareTo(m.ONE) &&
            this.p.isProbablePrime(10))
        )
          break;
      for (;;)
        if (
          ((this.q = new m(n, 1, r)),
          0 == this.q.subtract(m.ONE).gcd(i).compareTo(m.ONE) &&
            this.q.isProbablePrime(10))
        )
          break;
      if (this.p.compareTo(this.q) <= 0) {
        var o = this.p;
        ((this.p = this.q), (this.q = o));
      }
      var h = this.q.subtract(this.p).abs();
      if (!(h.bitLength() < s || h.compareTo(a) <= 0)) {
        var u = this.p.subtract(m.ONE),
          c = this.q.subtract(m.ONE),
          l = u.multiply(c);
        if (
          0 == l.gcd(i).compareTo(m.ONE) &&
          ((this.n = this.p.multiply(this.q)), this.n.bitLength() == t)
        ) {
          ((this.d = i.modInverse(l)),
            (this.dmp1 = this.d.mod(u)),
            (this.dmq1 = this.d.mod(c)),
            (this.coeff = this.q.modInverse(this.p)));
          break;
        }
      }
    }
    this.isPrivate = !0;
  }
  function tr(t) {
    if (null == this.p || null == this.q) return t.modPow(this.d, this.n);
    var e = t.mod(this.p).modPow(this.dmp1, this.p),
      r = t.mod(this.q).modPow(this.dmq1, this.q);
    while (e.compareTo(r) < 0) e = e.add(this.p);
    return e
      .subtract(r)
      .multiply(this.coeff)
      .mod(this.p)
      .multiply(this.q)
      .add(r);
  }
  function er(t) {
    if (t.length != Math.ceil(this.n.bitLength() / 4))
      throw new Error("wrong ctext length");
    var e = Me(t, 16),
      r = this.doPrivate(e);
    return null == r ? null : Je(r, (this.n.bitLength() + 7) >> 3);
  }
  function rr(t, e, r) {
    if (t.length != Math.ceil(this.n.bitLength() / 4))
      throw new Error("wrong ctext length");
    var n = Me(t, 16),
      i = this.doPrivate(n);
    return null == i ? null : Ye(i, (this.n.bitLength() + 7) >> 3, e, r);
  }
  /*! (c) Tom Wu | http://www-cs-students.stanford.edu/~tjw/jsbn/
   */
  function nr(t, e) {
    ((this.x = e), (this.q = t));
  }
  function ir(t) {
    return t == this || (this.q.equals(t.q) && this.x.equals(t.x));
  }
  function sr() {
    return this.x;
  }
  function ar() {
    return new nr(this.q, this.x.negate().mod(this.q));
  }
  function or(t) {
    return new nr(this.q, this.x.add(t.toBigInteger()).mod(this.q));
  }
  function hr(t) {
    return new nr(this.q, this.x.subtract(t.toBigInteger()).mod(this.q));
  }
  function ur(t) {
    return new nr(this.q, this.x.multiply(t.toBigInteger()).mod(this.q));
  }
  function cr() {
    return new nr(this.q, this.x.square().mod(this.q));
  }
  function lr(t) {
    return new nr(
      this.q,
      this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q),
    );
  }
  function fr(t, e, r, n) {
    ((this.curve = t),
      (this.x = e),
      (this.y = r),
      (this.z = null == n ? m.ONE : n),
      (this.zinv = null));
  }
  function dr() {
    return (
      null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
      this.curve.fromBigInteger(
        this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q),
      )
    );
  }
  function pr() {
    return (
      null == this.zinv && (this.zinv = this.z.modInverse(this.curve.q)),
      this.curve.fromBigInteger(
        this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q),
      )
    );
  }
  function gr(t) {
    return (
      t == this ||
      (this.isInfinity()
        ? t.isInfinity()
        : t.isInfinity()
          ? this.isInfinity()
          : ((e = t.y
              .toBigInteger()
              .multiply(this.z)
              .subtract(this.y.toBigInteger().multiply(t.z))
              .mod(this.curve.q)),
            !!e.equals(m.ZERO) &&
              ((r = t.x
                .toBigInteger()
                .multiply(this.z)
                .subtract(this.x.toBigInteger().multiply(t.z))
                .mod(this.curve.q)),
              r.equals(m.ZERO))))
    );
    var e, r;
  }
  function vr() {
    return (
      (null == this.x && null == this.y) ||
      (this.z.equals(m.ZERO) && !this.y.toBigInteger().equals(m.ZERO))
    );
  }
  function mr() {
    return new fr(this.curve, this.x, this.y.negate(), this.z);
  }
  function yr(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var e = t.y
        .toBigInteger()
        .multiply(this.z)
        .subtract(this.y.toBigInteger().multiply(t.z))
        .mod(this.curve.q),
      r = t.x
        .toBigInteger()
        .multiply(this.z)
        .subtract(this.x.toBigInteger().multiply(t.z))
        .mod(this.curve.q);
    if (m.ZERO.equals(r))
      return m.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
    var n = new m("3"),
      i = this.x.toBigInteger(),
      s = this.y.toBigInteger(),
      a = (t.x.toBigInteger(), t.y.toBigInteger(), r.square()),
      o = a.multiply(r),
      h = i.multiply(a),
      u = e.square().multiply(this.z),
      c = u
        .subtract(h.shiftLeft(1))
        .multiply(t.z)
        .subtract(o)
        .multiply(r)
        .mod(this.curve.q),
      l = h
        .multiply(n)
        .multiply(e)
        .subtract(s.multiply(o))
        .subtract(u.multiply(e))
        .multiply(t.z)
        .add(e.multiply(o))
        .mod(this.curve.q),
      f = o.multiply(this.z).multiply(t.z).mod(this.curve.q);
    return new fr(
      this.curve,
      this.curve.fromBigInteger(c),
      this.curve.fromBigInteger(l),
      f,
    );
  }
  function br() {
    if (this.isInfinity()) return this;
    if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
    var t = new m("3"),
      e = this.x.toBigInteger(),
      r = this.y.toBigInteger(),
      n = r.multiply(this.z),
      i = n.multiply(r).mod(this.curve.q),
      s = this.curve.a.toBigInteger(),
      a = e.square().multiply(t);
    (m.ZERO.equals(s) || (a = a.add(this.z.square().multiply(s))),
      (a = a.mod(this.curve.q)));
    var o = a
        .square()
        .subtract(e.shiftLeft(3).multiply(i))
        .shiftLeft(1)
        .multiply(n)
        .mod(this.curve.q),
      h = a
        .multiply(t)
        .multiply(e)
        .subtract(i.shiftLeft(1))
        .shiftLeft(2)
        .multiply(i)
        .subtract(a.square().multiply(a))
        .mod(this.curve.q),
      u = n.square().multiply(n).shiftLeft(3).mod(this.curve.q);
    return new fr(
      this.curve,
      this.curve.fromBigInteger(o),
      this.curve.fromBigInteger(h),
      u,
    );
  }
  function wr(t) {
    if (this.isInfinity()) return this;
    if (0 == t.signum()) return this.curve.getInfinity();
    var e,
      r = t,
      n = r.multiply(new m("3")),
      i = this.negate(),
      s = this,
      a = this.curve.q.subtract(t),
      o = a.multiply(new m("3")),
      h = new fr(this.curve, this.x, this.y),
      u = h.negate();
    for (e = n.bitLength() - 2; e > 0; --e) {
      s = s.twice();
      var c = n.testBit(e),
        l = r.testBit(e);
      c != l && (s = s.add(c ? this : i));
    }
    for (e = o.bitLength() - 2; e > 0; --e) {
      h = h.twice();
      var f = o.testBit(e),
        d = a.testBit(e);
      f != d && (h = h.add(f ? h : u));
    }
    return s;
  }
  function xr(t, e, r) {
    var n;
    n = t.bitLength() > r.bitLength() ? t.bitLength() - 1 : r.bitLength() - 1;
    var i = this.curve.getInfinity(),
      s = this.add(e);
    while (n >= 0)
      ((i = i.twice()),
        t.testBit(n)
          ? (i = r.testBit(n) ? i.add(s) : i.add(this))
          : r.testBit(n) && (i = i.add(e)),
        --n);
    return i;
  }
  function Sr(t, e, r) {
    ((this.q = t),
      (this.a = this.fromBigInteger(e)),
      (this.b = this.fromBigInteger(r)),
      (this.infinity = new fr(this, null, null)));
  }
  function Ar() {
    return this.q;
  }
  function Er() {
    return this.a;
  }
  function Fr() {
    return this.b;
  }
  function Nr(t) {
    return (
      t == this ||
      (this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b))
    );
  }
  function Pr() {
    return this.infinity;
  }
  function Ir(t) {
    return new nr(this.q, t);
  }
  function Lr(t) {
    switch (parseInt(t.substr(0, 2), 16)) {
      case 0:
        return this.infinity;
      case 2:
      case 3:
        var e = t.substr(0, 2),
          r = (t.substr(2), this.fromBigInteger(new m(h, 16))),
          n = this.getA(),
          i = this.getB(),
          s = r.square().add(n).multiply(r).add(i),
          a = s.sqrt();
        return ("03" == e && (a = a.negate()), new fr(this, r, a));
      case 4:
      case 6:
      case 7:
        var o = (t.length - 2) / 2,
          h = t.substr(2, o),
          u = t.substr(o + 2, o);
        return new fr(
          this,
          this.fromBigInteger(new m(h, 16)),
          this.fromBigInteger(new m(u, 16)),
        );
      default:
        return null;
    }
  }
  ((Oe.prototype.nextBytes = ke),
    (Ue.prototype.doPublic = ze),
    (Ue.prototype.setPublic = Ke),
    (Ue.prototype.encrypt = We),
    (Ue.prototype.encryptOAEP = Ge),
    (Ue.prototype.type = "RSA"),
    (Ue.prototype.doPrivate = tr),
    (Ue.prototype.setPrivate = $e),
    (Ue.prototype.setPrivateEx = Ze),
    (Ue.prototype.generate = Qe),
    (Ue.prototype.decrypt = er),
    (Ue.prototype.decryptOAEP = rr),
    (nr.prototype.equals = ir),
    (nr.prototype.toBigInteger = sr),
    (nr.prototype.negate = ar),
    (nr.prototype.add = or),
    (nr.prototype.subtract = hr),
    (nr.prototype.multiply = ur),
    (nr.prototype.square = cr),
    (nr.prototype.divide = lr),
    (nr.prototype.sqrt = function () {
      return new nr(this.q, this.x.sqrt().mod(this.q));
    }),
    (fr.prototype.getX = dr),
    (fr.prototype.getY = pr),
    (fr.prototype.equals = gr),
    (fr.prototype.isInfinity = vr),
    (fr.prototype.negate = mr),
    (fr.prototype.add = yr),
    (fr.prototype.twice = br),
    (fr.prototype.multiply = wr),
    (fr.prototype.multiplyTwo = xr),
    (Sr.prototype.getQ = Ar),
    (Sr.prototype.getA = Er),
    (Sr.prototype.getB = Fr),
    (Sr.prototype.equals = Nr),
    (Sr.prototype.getInfinity = Pr),
    (Sr.prototype.fromBigInteger = Ir),
    (Sr.prototype.decodePointHex = Lr),
    /*! (c) Stefan Thomas | https://github.com/bitcoinjs/bitcoinjs-lib
     */
    (nr.prototype.getByteLength = function () {
      return Math.floor((this.toBigInteger().bitLength() + 7) / 8);
    }),
    (fr.prototype.getEncoded = function (t) {
      var e = function (t, e) {
          var r = t.toByteArrayUnsigned();
          if (e < r.length) r = r.slice(r.length - e);
          else while (e > r.length) r.unshift(0);
          return r;
        },
        r = this.getX().toBigInteger(),
        n = this.getY().toBigInteger(),
        i = e(r, 32);
      return (
        t
          ? n.isEven()
            ? i.unshift(2)
            : i.unshift(3)
          : (i.unshift(4), (i = i.concat(e(n, 32)))),
        i
      );
    }),
    (fr.decodeFrom = function (t, e) {
      e[0];
      var r = e.length - 1,
        n = e.slice(1, 1 + r / 2),
        i = e.slice(1 + r / 2, 1 + r);
      (n.unshift(0), i.unshift(0));
      var s = new m(n),
        a = new m(i);
      return new fr(t, t.fromBigInteger(s), t.fromBigInteger(a));
    }),
    (fr.decodeFromHex = function (t, e) {
      e.substr(0, 2);
      var r = e.length - 2,
        n = e.substr(2, r / 2),
        i = e.substr(2 + r / 2, r / 2),
        s = new m(n, 16),
        a = new m(i, 16);
      return new fr(t, t.fromBigInteger(s), t.fromBigInteger(a));
    }),
    (fr.prototype.add2D = function (t) {
      if (this.isInfinity()) return t;
      if (t.isInfinity()) return this;
      if (this.x.equals(t.x))
        return this.y.equals(t.y) ? this.twice() : this.curve.getInfinity();
      var e = t.x.subtract(this.x),
        r = t.y.subtract(this.y),
        n = r.divide(e),
        i = n.square().subtract(this.x).subtract(t.x),
        s = n.multiply(this.x.subtract(i)).subtract(this.y);
      return new fr(this.curve, i, s);
    }),
    (fr.prototype.twice2D = function () {
      if (this.isInfinity()) return this;
      if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
      var t = this.curve.fromBigInteger(m.valueOf(2)),
        e = this.curve.fromBigInteger(m.valueOf(3)),
        r = this.x
          .square()
          .multiply(e)
          .add(this.curve.a)
          .divide(this.y.multiply(t)),
        n = r.square().subtract(this.x.multiply(t)),
        i = r.multiply(this.x.subtract(n)).subtract(this.y);
      return new fr(this.curve, n, i);
    }),
    (fr.prototype.multiply2D = function (t) {
      if (this.isInfinity()) return this;
      if (0 == t.signum()) return this.curve.getInfinity();
      var e,
        r = t,
        n = r.multiply(new m("3")),
        i = this.negate(),
        s = this;
      for (e = n.bitLength() - 2; e > 0; --e) {
        s = s.twice();
        var a = n.testBit(e),
          o = r.testBit(e);
        a != o && (s = s.add2D(a ? this : i));
      }
      return s;
    }),
    (fr.prototype.isOnCurve = function () {
      var t = this.getX().toBigInteger(),
        e = this.getY().toBigInteger(),
        r = this.curve.getA().toBigInteger(),
        n = this.curve.getB().toBigInteger(),
        i = this.curve.getQ(),
        s = e.multiply(e).mod(i),
        a = t.multiply(t).multiply(t).add(r.multiply(t)).add(n).mod(i);
      return s.equals(a);
    }),
    (fr.prototype.toString = function () {
      return (
        "(" +
        this.getX().toBigInteger().toString() +
        "," +
        this.getY().toBigInteger().toString() +
        ")"
      );
    }),
    (fr.prototype.validate = function () {
      var t = this.curve.getQ();
      if (this.isInfinity()) throw new Error("Point is at infinity.");
      var e = this.getX().toBigInteger(),
        r = this.getY().toBigInteger();
      if (e.compareTo(m.ONE) < 0 || e.compareTo(t.subtract(m.ONE)) > 0)
        throw new Error("x coordinate out of bounds");
      if (r.compareTo(m.ONE) < 0 || r.compareTo(t.subtract(m.ONE)) > 0)
        throw new Error("y coordinate out of bounds");
      if (!this.isOnCurve()) throw new Error("Point is not on the curve.");
      if (this.multiply(t).isInfinity())
        throw new Error("Point is not a scalar multiple of G.");
      return !0;
    }));
  /*! Mike Samuel (c) 2009 | code.google.com/p/json-sans-eval
   */
  var Cr = (function () {
    var t = "(?:-?\\b(?:0|[1-9][0-9]*)(?:\\.[0-9]+)?(?:[eE][+-]?[0-9]+)?\\b)",
      e =
        '(?:[^\\0-\\x08\\x0a-\\x1f"\\\\]|\\\\(?:["/\\\\bfnrt]|u[0-9A-Fa-f]{4}))',
      r = '(?:"' + e + '*")',
      n = new RegExp(
        "(?:false|true|null|[\\{\\}\\[\\]]|" + t + "|" + r + ")",
        "g",
      ),
      i = new RegExp("\\\\(?:([^u])|u(.{4}))", "g"),
      s = {
        '"': '"',
        "/": "/",
        "\\": "\\",
        b: "\b",
        f: "\f",
        n: "\n",
        r: "\r",
        t: "\t",
      };
    function a(t, e, r) {
      return e ? s[e] : String.fromCharCode(parseInt(r, 16));
    }
    var o = new String(""),
      h = "\\",
      u = Object.hasOwnProperty;
    return function (t, e) {
      var r,
        s,
        c = t.match(n),
        l = c[0],
        f = !1;
      "{" === l ? (r = {}) : "[" === l ? (r = []) : ((r = []), (f = !0));
      for (var d = [r], p = 1 - f, g = c.length; p < g; ++p) {
        var v;
        switch (((l = c[p]), l.charCodeAt(0))) {
          default:
            ((v = d[0]), (v[s || v.length] = +l), (s = void 0));
            break;
          case 34:
            if (
              ((l = l.substring(1, l.length - 1)),
              -1 !== l.indexOf(h) && (l = l.replace(i, a)),
              (v = d[0]),
              !s)
            ) {
              if (!(v instanceof Array)) {
                s = l || o;
                break;
              }
              s = v.length;
            }
            ((v[s] = l), (s = void 0));
            break;
          case 91:
            ((v = d[0]), d.unshift((v[s || v.length] = [])), (s = void 0));
            break;
          case 93:
            d.shift();
            break;
          case 102:
            ((v = d[0]), (v[s || v.length] = !1), (s = void 0));
            break;
          case 110:
            ((v = d[0]), (v[s || v.length] = null), (s = void 0));
            break;
          case 116:
            ((v = d[0]), (v[s || v.length] = !0), (s = void 0));
            break;
          case 123:
            ((v = d[0]), d.unshift((v[s || v.length] = {})), (s = void 0));
            break;
          case 125:
            d.shift();
            break;
        }
      }
      if (f) {
        if (1 !== d.length) throw new Error();
        r = r[0];
      } else if (d.length) throw new Error();
      if (e) {
        var m = function (t, r) {
          var n = t[r];
          if (n && "object" === typeof n) {
            var i = null;
            for (var s in n)
              if (u.call(n, s) && n !== t) {
                var a = m(n, s);
                void 0 !== a ? (n[s] = a) : (i || (i = []), i.push(s));
              }
            if (i) for (var o = i.length; --o >= 0; ) delete n[i[o]];
          }
          return e.call(t, r, n);
        };
        r = m({ "": r }, "");
      }
      return r;
    };
  })();
  (("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.asn1 && Dr.asn1) || (Dr.asn1 = {}),
    (Dr.asn1.ASN1Util = new (function () {
      ((this.integerToByteHex = function (t) {
        var e = t.toString(16);
        return (e.length % 2 == 1 && (e = "0" + e), e);
      }),
        (this.bigIntToMinTwosComplementsHex = function (t) {
          var e = t.toString(16);
          if ("-" != e.substr(0, 1))
            e.length % 2 == 1
              ? (e = "0" + e)
              : e.match(/^[0-7]/) || (e = "00" + e);
          else {
            var r = e.substr(1),
              n = r.length;
            n % 2 == 1 ? (n += 1) : e.match(/^[0-7]/) || (n += 2);
            for (var i = "", s = 0; s < n; s++) i += "f";
            var a = new m(i, 16),
              o = a.xor(t).add(m.ONE);
            e = o.toString(16).replace(/^-/, "");
          }
          return e;
        }),
        (this.getPEMStringFromHex = function (t, e) {
          return an(t, e);
        }),
        (this.newObject = function (t) {
          var e = Dr,
            r = e.asn1,
            n = r.ASN1Object,
            i = r.DERBoolean,
            s = r.DERInteger,
            a = r.DERBitString,
            o = r.DEROctetString,
            h = r.DERNull,
            u = r.DERObjectIdentifier,
            c = r.DEREnumerated,
            l = r.DERUTF8String,
            f = r.DERNumericString,
            d = r.DERPrintableString,
            p = r.DERTeletexString,
            g = r.DERIA5String,
            v = r.DERUTCTime,
            m = r.DERGeneralizedTime,
            y = r.DERVisibleString,
            b = r.DERBMPString,
            w = r.DERSequence,
            x = r.DERSet,
            S = r.DERTaggedObject,
            A = r.ASN1Util.newObject;
          if (t instanceof r.ASN1Object) return t;
          var E = Object.keys(t);
          if (1 != E.length) throw new Error("key of param shall be only one.");
          var F = E[0];
          if (
            -1 ==
            ":asn1:bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:visstr:bmpstr:seq:set:tag:".indexOf(
              ":" + F + ":",
            )
          )
            throw new Error("undefined key: " + F);
          if ("bool" == F) return new i(t[F]);
          if ("int" == F) return new s(t[F]);
          if ("bitstr" == F) return new a(t[F]);
          if ("octstr" == F) return new o(t[F]);
          if ("null" == F) return new h(t[F]);
          if ("oid" == F) return new u(t[F]);
          if ("enum" == F) return new c(t[F]);
          if ("utf8str" == F) return new l(t[F]);
          if ("numstr" == F) return new f(t[F]);
          if ("prnstr" == F) return new d(t[F]);
          if ("telstr" == F) return new p(t[F]);
          if ("ia5str" == F) return new g(t[F]);
          if ("utctime" == F) return new v(t[F]);
          if ("gentime" == F) return new m(t[F]);
          if ("visstr" == F) return new y(t[F]);
          if ("bmpstr" == F) return new b(t[F]);
          if ("asn1" == F) return new n(t[F]);
          if ("seq" == F) {
            for (var N = t[F], P = [], I = 0; I < N.length; I++) {
              var L = A(N[I]);
              P.push(L);
            }
            return new w({ array: P });
          }
          if ("set" == F) {
            for (N = t[F], P = [], I = 0; I < N.length; I++) {
              L = A(N[I]);
              P.push(L);
            }
            return new x({ array: P });
          }
          if ("tag" == F) {
            var C = t[F];
            if (
              "[object Array]" === Object.prototype.toString.call(C) &&
              3 == C.length
            ) {
              var D = A(C[2]);
              return new S({ tag: C[0], explicit: C[1], obj: D });
            }
            return new S(C);
          }
        }),
        (this.jsonToASN1HEX = function (t) {
          var e = this.newObject(t);
          return e.tohex();
        }));
    })()),
    (Dr.asn1.ASN1Util.oidHexToInt = function (t) {
      for (
        var e = "",
          r = parseInt(t.substr(0, 2), 16),
          n = Math.floor(r / 40),
          i = r % 40,
          s = ((e = n + "." + i), ""),
          a = 2;
        a < t.length;
        a += 2
      ) {
        var o = parseInt(t.substr(a, 2), 16),
          h = ("00000000" + o.toString(2)).slice(-8);
        if (((s += h.substr(1, 7)), "0" == h.substr(0, 1))) {
          var u = new m(s, 2);
          ((e = e + "." + u.toString(10)), (s = ""));
        }
      }
      return e;
    }),
    (Dr.asn1.ASN1Util.oidIntToHex = function (t) {
      var e = function (t) {
          var e = t.toString(16);
          return (1 == e.length && (e = "0" + e), e);
        },
        r = function (t) {
          var r = "",
            n = new m(t, 10),
            i = n.toString(2),
            s = 7 - (i.length % 7);
          7 == s && (s = 0);
          for (var a = "", o = 0; o < s; o++) a += "0";
          i = a + i;
          for (o = 0; o < i.length - 1; o += 7) {
            var h = i.substr(o, 7);
            (o != i.length - 7 && (h = "1" + h), (r += e(parseInt(h, 2))));
          }
          return r;
        };
      if (!t.match(/^[0-9.]+$/)) throw "malformed oid string: " + t;
      var n = "",
        i = t.split("."),
        s = 40 * parseInt(i[0]) + parseInt(i[1]);
      ((n += e(s)), i.splice(0, 2));
      for (var a = 0; a < i.length; a++) n += r(i[a]);
      return n;
    }),
    (Dr.asn1.ASN1Object = function (t) {
      var e = "";
      ((this.params = null),
        (this.getLengthHexFromValue = function () {
          if ("undefined" == typeof this.hV || null == this.hV)
            throw new Error("this.hV is null or undefined");
          if (this.hV.length % 2 == 1)
            throw new Error(
              "value hex must be even length: n=" + e.length + ",v=" + this.hV,
            );
          var t = this.hV.length / 2,
            r = t.toString(16);
          if ((r.length % 2 == 1 && (r = "0" + r), t < 128)) return r;
          var n = r.length / 2;
          if (n > 15)
            throw new Error(
              "ASN.1 length too long to represent by 8x: n = " + t.toString(16),
            );
          var i = 128 + n;
          return i.toString(16) + r;
        }),
        (this.tohex = function () {
          return (
            (null == this.hTLV || this.isModified) &&
              ((this.hV = this.getFreshValueHex()),
              (this.hL = this.getLengthHexFromValue()),
              (this.hTLV = this.hT + this.hL + this.hV),
              (this.isModified = !1)),
            this.hTLV
          );
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.getValueHex = function () {
          return (this.tohex(), this.hV);
        }),
        (this.getFreshValueHex = function () {
          return "";
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 != t &&
          void 0 != t.tlv &&
          ((this.hTLV = t.tlv), (this.isModified = !1)));
    }),
    (Dr.asn1.DERAbstractString = function (t) {
      Dr.asn1.DERAbstractString.superclass.constructor.call(this);
      ((this.getString = function () {
        return this.s;
      }),
        (this.setString = function (t) {
          ((this.hTLV = null),
            (this.isModified = !0),
            (this.s = t),
            (this.hV = Jr(this.s).toLowerCase()));
        }),
        (this.setStringHex = function (t) {
          ((this.hTLV = null),
            (this.isModified = !0),
            (this.s = null),
            (this.hV = t));
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof t &&
          ("string" == typeof t
            ? this.setString(t)
            : "undefined" != typeof t.str
              ? this.setString(t.str)
              : "undefined" != typeof t.hex && this.setStringHex(t.hex)));
    }),
    Un(Dr.asn1.DERAbstractString, Dr.asn1.ASN1Object),
    (Dr.asn1.DERAbstractTime = function (t) {
      Dr.asn1.DERAbstractTime.superclass.constructor.call(this);
      ((this.localDateToUTC = function (t) {
        var e = t.getTime() + 6e4 * t.getTimezoneOffset(),
          r = new Date(e);
        return r;
      }),
        (this.formatDate = function (t, e, r) {
          var n = this.zeroPadding,
            i = this.localDateToUTC(t),
            s = String(i.getFullYear());
          "utc" == e && (s = s.substr(2, 2));
          var a = n(String(i.getMonth() + 1), 2),
            o = n(String(i.getDate()), 2),
            h = n(String(i.getHours()), 2),
            u = n(String(i.getMinutes()), 2),
            c = n(String(i.getSeconds()), 2),
            l = s + a + o + h + u + c;
          if (!0 === r) {
            var f = i.getMilliseconds();
            if (0 != f) {
              var d = n(String(f), 3);
              ((d = d.replace(/[0]+$/, "")), (l = l + "." + d));
            }
          }
          return l + "Z";
        }),
        (this.zeroPadding = function (t, e) {
          return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
        }),
        (this.setByParam = function (t) {
          ((this.hV = null), (this.hTLV = null), (this.params = t));
        }),
        (this.getString = function () {}),
        (this.setString = function (t) {
          ((this.hTLV = null),
            (this.isModified = !0),
            void 0 == this.params && (this.params = {}),
            (this.params.str = t));
        }),
        (this.setByDate = function (t) {
          ((this.hTLV = null),
            (this.isModified = !0),
            void 0 == this.params && (this.params = {}),
            (this.params.date = t));
        }),
        (this.setByDateValue = function (t, e, r, n, i, s) {
          var a = new Date(Date.UTC(t, e - 1, r, n, i, s, 0));
          this.setByDate(a);
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }));
    }),
    Un(Dr.asn1.DERAbstractTime, Dr.asn1.ASN1Object),
    (Dr.asn1.DERAbstractStructured = function (t) {
      Dr.asn1.DERAbstractString.superclass.constructor.call(this);
      ((this.setByASN1ObjectArray = function (t) {
        ((this.hTLV = null), (this.isModified = !0), (this.asn1Array = t));
      }),
        (this.appendASN1Object = function (t) {
          ((this.hTLV = null), (this.isModified = !0), this.asn1Array.push(t));
        }),
        (this.asn1Array = new Array()),
        "undefined" != typeof t &&
          "undefined" != typeof t.array &&
          (this.asn1Array = t.array));
    }),
    Un(Dr.asn1.DERAbstractStructured, Dr.asn1.ASN1Object),
    (Dr.asn1.DERBoolean = function (t) {
      (Dr.asn1.DERBoolean.superclass.constructor.call(this),
        (this.hT = "01"),
        (this.hTLV = 0 == t ? "010100" : "0101ff"));
    }),
    Un(Dr.asn1.DERBoolean, Dr.asn1.ASN1Object),
    (Dr.asn1.DERInteger = function (t) {
      (Dr.asn1.DERInteger.superclass.constructor.call(this),
        (this.hT = "02"),
        (this.params = null));
      var e = Dr.asn1.ASN1Util.bigIntToMinTwosComplementsHex;
      ((this.setByBigInteger = function (t) {
        ((this.isModified = !0), (this.params = { bigint: t }));
      }),
        (this.setByInteger = function (t) {
          ((this.isModified = !0), (this.params = t));
        }),
        (this.setValueHex = function (t) {
          ((this.isModified = !0), (this.params = { hex: t }));
        }),
        (this.getFreshValueHex = function () {
          var t = this.params,
            r = null;
          if (null == t) throw new Error("value not set");
          if ("object" == typeof t && void 0 != t.hex)
            return ((this.hV = t.hex), this.hV);
          if ("number" == typeof t) r = new m(String(t), 10);
          else if (void 0 != t["int"]) r = new m(String(t["int"]), 10);
          else {
            if (void 0 == t.bigint) throw new Error("wrong parameter");
            r = t.bigint;
          }
          return ((this.hV = e(r)), this.hV);
        }),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.DERInteger, Dr.asn1.ASN1Object),
    (Dr.asn1.DERBitString = function (t) {
      if (void 0 !== t && "undefined" !== typeof t.obj) {
        var e = Dr.asn1.ASN1Util.newObject(t.obj);
        t.hex = "00" + e.tohex();
      }
      (Dr.asn1.DERBitString.superclass.constructor.call(this),
        (this.hT = "03"),
        (this.setHexValueIncludingUnusedBits = function (t) {
          ((this.hTLV = null), (this.isModified = !0), (this.hV = t));
        }),
        (this.setUnusedBitsAndHexValue = function (t, e) {
          if (t < 0 || 7 < t)
            throw "unused bits shall be from 0 to 7: u = " + t;
          var r = "0" + t;
          ((this.hTLV = null), (this.isModified = !0), (this.hV = r + e));
        }),
        (this.setByBinaryString = function (t) {
          t = t.replace(/0+$/, "");
          var e = 8 - (t.length % 8);
          (8 == e && (e = 0), (t += "0000000".substr(0, e)));
          for (var r = "", n = 0; n < t.length - 1; n += 8) {
            var i = t.substr(n, 8),
              s = parseInt(i, 2).toString(16);
            (1 == s.length && (s = "0" + s), (r += s));
          }
          ((this.hTLV = null), (this.isModified = !0), (this.hV = "0" + e + r));
        }),
        (this.setByBooleanArray = function (t) {
          for (var e = "", r = 0; r < t.length; r++)
            1 == t[r] ? (e += "1") : (e += "0");
          this.setByBinaryString(e);
        }),
        (this.newFalseArray = function (t) {
          for (var e = new Array(t), r = 0; r < t; r++) e[r] = !1;
          return e;
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof t &&
          ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/)
            ? this.setHexValueIncludingUnusedBits(t)
            : "undefined" != typeof t.hex
              ? this.setHexValueIncludingUnusedBits(t.hex)
              : "undefined" != typeof t.bin
                ? this.setByBinaryString(t.bin)
                : "undefined" != typeof t.array &&
                  this.setByBooleanArray(t.array)));
    }),
    Un(Dr.asn1.DERBitString, Dr.asn1.ASN1Object),
    (Dr.asn1.DEROctetString = function (t) {
      if (void 0 !== t && "undefined" !== typeof t.obj) {
        var e = Dr.asn1.ASN1Util.newObject(t.obj);
        t.hex = e.tohex();
      }
      (Dr.asn1.DEROctetString.superclass.constructor.call(this, t),
        (this.hT = "04"));
    }),
    Un(Dr.asn1.DEROctetString, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERNull = function () {
      (Dr.asn1.DERNull.superclass.constructor.call(this),
        (this.hT = "05"),
        (this.hTLV = "0500"));
    }),
    Un(Dr.asn1.DERNull, Dr.asn1.ASN1Object),
    (Dr.asn1.DERObjectIdentifier = function (t) {
      (Dr.asn1.DERObjectIdentifier.superclass.constructor.call(this),
        (this.hT = "06"),
        (this.setValueHex = function (t) {
          ((this.hTLV = null),
            (this.isModified = !0),
            (this.s = null),
            (this.hV = t));
        }),
        (this.setValueOidString = function (t) {
          var e = Bn(t);
          if (null == e) throw new Error("malformed oid string: " + t);
          ((this.hTLV = null),
            (this.isModified = !0),
            (this.s = null),
            (this.hV = e));
        }),
        (this.setValueName = function (t) {
          var e = Dr.asn1.x509.OID.name2oid(t);
          if ("" === e)
            throw new Error("DERObjectIdentifier oidName undefined: " + t);
          this.setValueOidString(e);
        }),
        (this.setValueNameOrOid = function (t) {
          t.match(/^[0-2].[0-9.]+$/)
            ? this.setValueOidString(t)
            : this.setValueName(t);
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        (this.setByParam = function (t) {
          "string" === typeof t
            ? this.setValueNameOrOid(t)
            : void 0 !== t.oid
              ? this.setValueNameOrOid(t.oid)
              : void 0 !== t.name
                ? this.setValueNameOrOid(t.name)
                : void 0 !== t.hex && this.setValueHex(t.hex);
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.DERObjectIdentifier, Dr.asn1.ASN1Object),
    (Dr.asn1.DEREnumerated = function (t) {
      (Dr.asn1.DEREnumerated.superclass.constructor.call(this),
        (this.hT = "0a"),
        (this.setByBigInteger = function (t) {
          ((this.hTLV = null),
            (this.isModified = !0),
            (this.hV = Dr.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)));
        }),
        (this.setByInteger = function (t) {
          var e = new m(String(t), 10);
          this.setByBigInteger(e);
        }),
        (this.setValueHex = function (t) {
          this.hV = t;
        }),
        (this.getFreshValueHex = function () {
          return this.hV;
        }),
        "undefined" != typeof t &&
          ("undefined" != typeof t["int"]
            ? this.setByInteger(t["int"])
            : "number" == typeof t
              ? this.setByInteger(t)
              : "undefined" != typeof t.hex && this.setValueHex(t.hex)));
    }),
    Un(Dr.asn1.DEREnumerated, Dr.asn1.ASN1Object),
    (Dr.asn1.DERUTF8String = function (t) {
      (Dr.asn1.DERUTF8String.superclass.constructor.call(this, t),
        (this.hT = "0c"));
    }),
    Un(Dr.asn1.DERUTF8String, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERNumericString = function (t) {
      (Dr.asn1.DERNumericString.superclass.constructor.call(this, t),
        (this.hT = "12"));
    }),
    Un(Dr.asn1.DERNumericString, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERPrintableString = function (t) {
      (Dr.asn1.DERPrintableString.superclass.constructor.call(this, t),
        (this.hT = "13"));
    }),
    Un(Dr.asn1.DERPrintableString, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERTeletexString = function (t) {
      (Dr.asn1.DERTeletexString.superclass.constructor.call(this, t),
        (this.hT = "14"));
    }),
    Un(Dr.asn1.DERTeletexString, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERIA5String = function (t) {
      (Dr.asn1.DERIA5String.superclass.constructor.call(this, t),
        (this.hT = "16"));
    }),
    Un(Dr.asn1.DERIA5String, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERVisibleString = function (t) {
      (Dr.asn1.DERIA5String.superclass.constructor.call(this, t),
        (this.hT = "1a"));
    }),
    Un(Dr.asn1.DERVisibleString, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERBMPString = function (t) {
      (Dr.asn1.DERBMPString.superclass.constructor.call(this, t),
        (this.hT = "1e"));
    }),
    Un(Dr.asn1.DERBMPString, Dr.asn1.DERAbstractString),
    (Dr.asn1.DERUTCTime = function (t) {
      (Dr.asn1.DERUTCTime.superclass.constructor.call(this, t),
        (this.hT = "17"),
        (this.params = void 0),
        (this.getFreshValueHex = function () {
          var t = this.params;
          if (
            (void 0 == this.params && (t = { date: new Date() }),
            "string" == typeof t)
          ) {
            if (!t.match(/^[0-9]{12}Z$/) && !t.match(/^[0-9]{12}\.[0-9]+Z$/))
              throw new Error("malformed string for UTCTime: " + t);
            this.hV = Or(t);
          } else if (void 0 != t.str) this.hV = Or(t.str);
          else if (void 0 == t.date && 1 == t.millis) {
            var e = new Date();
            this.hV = Or(this.formatDate(e, "utc", !0));
          } else if (void 0 != t.date && t.date instanceof Date) {
            var r = !0 === t.millis;
            this.hV = Or(this.formatDate(t.date, "utc", r));
          } else t instanceof Date && (this.hV = Or(this.formatDate(t, "utc")));
          if (void 0 == this.hV)
            throw new Error("parameter not specified properly for UTCTime");
          return this.hV;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.DERUTCTime, Dr.asn1.DERAbstractTime),
    (Dr.asn1.DERGeneralizedTime = function (t) {
      (Dr.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
        (this.hT = "18"),
        (this.params = t),
        (this.getFreshValueHex = function () {
          var t = this.params;
          if (
            (void 0 == this.params && (t = { date: new Date() }),
            "string" == typeof t)
          ) {
            if (!t.match(/^[0-9]{14}Z$/) && !t.match(/^[0-9]{14}\.[0-9]+Z$/))
              throw new Error("malformed string for GeneralizedTime: " + t);
            this.hV = Or(t);
          } else if (void 0 != t.str) this.hV = Or(t.str);
          else if (void 0 == t.date && 1 == t.millis) {
            var e = new Date();
            this.hV = Or(this.formatDate(e, "gen", !0));
          } else if (void 0 != t.date && t.date instanceof Date) {
            var r = !0 === t.millis;
            this.hV = Or(this.formatDate(t.date, "gen", r));
          } else t instanceof Date && (this.hV = Or(this.formatDate(t, "gen")));
          if (void 0 == this.hV)
            throw new Error(
              "parameter not specified properly for GeneralizedTime",
            );
          return this.hV;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.DERGeneralizedTime, Dr.asn1.DERAbstractTime),
    (Dr.asn1.DERSequence = function (t) {
      (Dr.asn1.DERSequence.superclass.constructor.call(this, t),
        (this.hT = "30"),
        (this.getFreshValueHex = function () {
          for (var t = "", e = 0; e < this.asn1Array.length; e++) {
            var r = this.asn1Array[e];
            t += r.tohex();
          }
          return ((this.hV = t), this.hV);
        }));
    }),
    Un(Dr.asn1.DERSequence, Dr.asn1.DERAbstractStructured),
    (Dr.asn1.DERSet = function (t) {
      (Dr.asn1.DERSet.superclass.constructor.call(this, t),
        (this.hT = "31"),
        (this.sortFlag = !0),
        (this.getFreshValueHex = function () {
          for (var t = new Array(), e = 0; e < this.asn1Array.length; e++) {
            var r = this.asn1Array[e];
            t.push(r.tohex());
          }
          return (
            1 == this.sortFlag && t.sort(),
            (this.hV = t.join("")),
            this.hV
          );
        }),
        "undefined" != typeof t &&
          "undefined" != typeof t.sortflag &&
          0 == t.sortflag &&
          (this.sortFlag = !1));
    }),
    Un(Dr.asn1.DERSet, Dr.asn1.DERAbstractStructured),
    (Dr.asn1.DERTaggedObject = function (t) {
      Dr.asn1.DERTaggedObject.superclass.constructor.call(this);
      var e = Dr.asn1,
        r = Br,
        n = r.getV,
        i = (r.isASN1HEX, e.ASN1Util.newObject);
      ((this.hT = "a0"),
        (this.hV = ""),
        (this.isExplicit = !0),
        (this.asn1Object = null),
        (this.params = { tag: "a0", explicit: !0 }),
        (this.setASN1Object = function (t, e, r) {
          this.params = { tag: e, explicit: t, obj: r };
        }),
        (this.getFreshValueHex = function () {
          var t = this.params;
          if (
            (void 0 == t.explicit && (t.explicit = !0),
            void 0 != t.tage && ((t.tag = t.tage), (t.explicit = !0)),
            void 0 != t.tagi && ((t.tag = t.tagi), (t.explicit = !1)),
            void 0 != t.str)
          )
            this.hV = Jr(t.str);
          else if (void 0 != t.hex) this.hV = t.hex;
          else {
            if (void 0 == t.obj)
              throw new Error("str, hex nor obj not specified");
            var r;
            (t.obj instanceof e.ASN1Object
              ? (r = t.obj.tohex())
              : "object" == typeof t.obj && (r = i(t.obj).tohex()),
              t.explicit ? (this.hV = r) : (this.hV = n(r, 0)));
          }
          return (
            void 0 == t.tag && (t.tag = "a0"),
            (this.hT = t.tag),
            (this.hTLV = null),
            (this.isModified = !0),
            this.hV
          );
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.DERTaggedObject, Dr.asn1.ASN1Object));
  var Dr,
    _r,
    Rr,
    Br = new (function () {})();
  function Tr(t) {
    for (var e = new Array(), r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
    return e;
  }
  function jr(t) {
    for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
    return e;
  }
  function kr(t) {
    for (var e = "", r = 0; r < t.length; r++) {
      var n = t[r].toString(16);
      (1 == n.length && (n = "0" + n), (e += n));
    }
    return e;
  }
  function Or(t) {
    return kr(Tr(t));
  }
  function Mr(t) {
    return f(Or(t));
  }
  function qr(t) {
    return Vr(f(Or(t)));
  }
  function Hr(t) {
    return jr(p(Ur(t)));
  }
  function Vr(t) {
    return (
      (t = t.replace(/\=/g, "")),
      (t = t.replace(/\+/g, "-")),
      (t = t.replace(/\//g, "_")),
      t
    );
  }
  function Ur(t) {
    return (
      t.length % 4 == 2 ? (t += "==") : t.length % 4 == 3 && (t += "="),
      (t = t.replace(/-/g, "+")),
      (t = t.replace(/_/g, "/")),
      t
    );
  }
  function Kr(t) {
    return (t.length % 2 == 1 && (t = "0" + t), Vr(f(t)));
  }
  function zr(t) {
    return d(Ur(t));
  }
  function Wr(t) {
    return f(mn(Nn(t)));
  }
  function Gr(t) {
    return decodeURIComponent(yn(d(t)));
  }
  function Jr(t) {
    return mn(Nn(t)).toLowerCase();
  }
  function Xr(t) {
    try {
      return decodeURIComponent(yn(t));
    } catch (e) {
      return null;
    }
  }
  function Yr(t) {
    return Xr($r(t));
  }
  function $r(t) {
    for (var e = t.match(/.{1,2}/g), r = [], n = 0; n < e.length; n++) {
      var i = parseInt(e[n], 16);
      161 <= i && i <= 191
        ? (r.push("c2"), r.push(e[n]))
        : 192 <= i && i <= 255
          ? (r.push("c3"), r.push((i - 64).toString(16)))
          : r.push(e[n]);
    }
    return r.join("");
  }
  function Zr(t) {
    for (var e = "", r = 0; r < t.length - 1; r += 2)
      e += String.fromCharCode(parseInt(t.substr(r, 2), 16));
    return e;
  }
  function Qr(t) {
    for (var e = "", r = 0; r < t.length; r++)
      e += ("0" + t.charCodeAt(r).toString(16)).slice(-2);
    return e;
  }
  function tn(t) {
    return f(t);
  }
  function en(t) {
    return rn(tn(t), 64);
  }
  function rn(t, e) {
    return t.replace(new RegExp("(.{" + e + "})", "g"), "$1\r\n");
  }
  function nn(t) {
    var e = t.replace(/[^0-9A-Za-z\/+=]*/g, ""),
      r = d(e);
    return r;
  }
  function sn(t, e) {
    return (
      "-----BEGIN " +
      e +
      "-----\r\n" +
      rn(t, 64) +
      "\r\n-----END " +
      e +
      "-----\r\n"
    );
  }
  function an(t, e) {
    return (
      "-----BEGIN " +
      e +
      "-----\r\n" +
      rn(tn(t), 64) +
      "\r\n-----END " +
      e +
      "-----\r\n"
    );
  }
  function on(t, e) {
    if (-1 == t.indexOf("-----BEGIN "))
      throw new Error("can't find PEM header");
    return (
      void 0 !== e
        ? ((t = t.replace(new RegExp("^[^]*-----BEGIN " + e + "-----"), "")),
          (t = t.replace(new RegExp("-----END " + e + "-----[^]*$"), "")))
        : ((t = t.replace(/^[^]*-----BEGIN [^-]+-----/, "")),
          (t = t.replace(/-----END [^-]+-----[^]*$/, ""))),
      nn(t)
    );
  }
  function hn(t) {
    return -1 == t.indexOf("-----BEGIN ") || -1 == t.indexOf("-----END ")
      ? null
      : ((t = t.replace(/^[\s\S]*?-----BEGIN [^-]+-----/m, "")),
        (t = t.replace(/-----END [\s\S]+$/m, "")),
        (t = t.replace(/\s+/g, "")),
        t.match(/^[0-9a-zA-Z+/=]+$/) ? t : null);
  }
  function un(t) {
    if (t.length % 2 != 0) throw "input is not even length";
    if (null == t.match(/^[0-9A-Fa-f]+$/)) throw "input is not hexadecimal";
    for (
      var e = new ArrayBuffer(t.length / 2), r = new DataView(e), n = 0;
      n < t.length / 2;
      n++
    )
      r.setUint8(n, parseInt(t.substr(2 * n, 2), 16));
    return e;
  }
  function cn(t) {
    for (var e = "", r = new DataView(t), n = 0; n < t.byteLength; n++)
      e += ("00" + r.getUint8(n).toString(16)).slice(-2);
    return e;
  }
  function ln(t) {
    var e, r, n, i, s, a, o, h, u, c;
    if (
      ((t = vn(t)),
      (c = t.match(/^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(|\.\d+)Z$/)),
      c)
    )
      return (
        (e = parseInt(c[1])),
        (r = parseInt(c[2]) - 1),
        (n = parseInt(c[3])),
        (i = parseInt(c[4])),
        (s = parseInt(c[5])),
        (a = parseInt(c[6])),
        (o = 0),
        (h = c[7]),
        "" !== h &&
          ((u = (h.substr(1) + "00").substr(0, 3)), (o = parseInt(u))),
        Date.UTC(e, r, n, i, s, a, o)
      );
    throw new Error("unsupported zulu format: " + t);
  }
  function fn(t) {
    var e = new Date(t),
      r = ("0000" + e.getUTCFullYear()).slice(-4),
      n = ("00" + (e.getUTCMonth() + 1)).slice(-2),
      i = ("00" + e.getUTCDate()).slice(-2),
      s = ("00" + e.getUTCHours()).slice(-2),
      a = ("00" + e.getUTCMinutes()).slice(-2),
      o = ("00" + e.getUTCSeconds()).slice(-2),
      h = ("000" + e.getUTCMilliseconds()).slice(-3);
    return (
      (h = h.replace(/0+$/, "")),
      (h = "" != h ? "." + h : h),
      r + n + i + s + a + o + h + "Z"
    );
  }
  function dn(t) {
    return Math.round(ln(t) / 1e3);
  }
  function pn(t) {
    return new Date(ln(t));
  }
  function gn(t, e, r) {
    var n,
      i = t.getUTCFullYear();
    if (e) {
      if (i < 1950 || 2049 < i) throw "not proper year for UTCTime: " + i;
      n = ("" + i).slice(-2);
    } else n = ("000" + i).slice(-4);
    if (
      ((n += ("0" + (t.getUTCMonth() + 1)).slice(-2)),
      (n += ("0" + t.getUTCDate()).slice(-2)),
      (n += ("0" + t.getUTCHours()).slice(-2)),
      (n += ("0" + t.getUTCMinutes()).slice(-2)),
      (n += ("0" + t.getUTCSeconds()).slice(-2)),
      r)
    ) {
      var s = t.getUTCMilliseconds();
      0 !== s &&
        ((s = ("00" + s).slice(-3)),
        (s = s.replace(/0+$/g, "")),
        (n += "." + s));
    }
    return ((n += "Z"), n);
  }
  function vn(t) {
    return t.match(/^[0-9]{12}Z$/) || t.match(/^[0-9]{12}[.][0-9]*Z$/)
      ? t.match(/^[0-4]/)
        ? "20" + t
        : "19" + t
      : t;
  }
  function mn(t) {
    return t.replace(/%/g, "");
  }
  function yn(t) {
    return t.replace(/(..)/g, "%$1");
  }
  function bn(t) {
    var e = "malformed IPv6 address";
    if (!t.match(/^[0-9A-Fa-f:]+$/)) throw e;
    t = t.toLowerCase();
    var r = t.split(":").length - 1;
    if (r < 2) throw e;
    var n = ":".repeat(7 - r + 2);
    t = t.replace("::", n);
    var i = t.split(":");
    if (8 != i.length) throw e;
    for (var s = 0; s < 8; s++) i[s] = ("0000" + i[s]).slice(-4);
    return i.join("");
  }
  function wn(t) {
    if (!t.match(/^[0-9A-Fa-f]{32}$/))
      throw new Error("malformed IPv6 address: " + t);
    t = t.toLowerCase();
    var e = t.match(/.{1,4}/g);
    ((e = e.map(function (t) {
      return t.replace(/^0+/, "");
    })),
      (e = e.map(function (t) {
        return "" == t ? "0" : t;
      })),
      (t = ":" + e.join(":") + ":"));
    var r = t.match(/:(0:){2,}/g);
    if (null == r) return t.slice(1, -1);
    var n = r.sort().slice(-1)[0];
    return (
      (t = t.replace(n.substr(0, n.length - 1), ":")),
      "::" != t.substr(0, 2) && (t = t.substr(1)),
      "::" != t.substr(-2, 2) && (t = t.substr(0, t.length - 1)),
      t
    );
  }
  function xn(t) {
    var e = new Error("malformed hex value");
    if (!t.match(/^([0-9A-Fa-f][0-9A-Fa-f]){1,}$/)) throw e;
    if (8 == t.length) {
      var r;
      try {
        return (
          (r =
            parseInt(t.substr(0, 2), 16) +
            "." +
            parseInt(t.substr(2, 2), 16) +
            "." +
            parseInt(t.substr(4, 2), 16) +
            "." +
            parseInt(t.substr(6, 2), 16)),
          r
        );
      } catch (n) {
        throw e;
      }
    } else {
      if (16 != t.length) {
        if (32 == t.length) return wn(t);
        if (64 == t.length) {
          try {
            return wn(t.substr(0, 32)) + "/" + Sn(t.substr(32));
          } catch (n) {
            throw e;
          }
          return;
        }
        return t;
      }
      try {
        return xn(t.substr(0, 8)) + "/" + Sn(t.substr(8));
      } catch (n) {
        throw e;
      }
    }
  }
  function Sn(t) {
    var e,
      r = new Error("malformed mask");
    try {
      e = new m(t, 16).toString(2);
    } catch (n) {
      throw r;
    }
    if (!e.match(/^1*0*$/)) throw r;
    return e.replace(/0+$/, "").length;
  }
  function An(t) {
    var e = new Error("malformed IP address");
    if (((t = t.toLowerCase(t)), !t.match(/^[0-9a-f.:/]+$/))) throw e;
    if (!t.match(/^[0-9.]+$/)) {
      if (t.match(/^[0-9.]+\/[0-9]+$/)) {
        var r = t.split("/");
        return An(r[0]) + En(parseInt(r[1]), 32);
      }
      if (t.match(/^[0-9a-f:]+$/) && -1 !== t.indexOf(":")) return bn(t);
      if (t.match(/^[0-9a-f:]+\/[0-9]+$/) && -1 !== t.indexOf(":")) {
        r = t.split("/");
        return bn(r[0]) + En(parseInt(r[1]), 128);
      }
      throw e;
    }
    var n = t.split(".");
    if (4 !== n.length) throw e;
    var i = "";
    try {
      for (var s = 0; s < 4; s++) {
        var a = parseInt(n[s]);
        i += ("0" + a.toString(16)).slice(-2);
      }
      return i;
    } catch (o) {
      throw e;
    }
  }
  function En(t, e) {
    if (32 == e && 0 == t) return "00000000";
    if (128 == e && 0 == t) return "00000000000000000000000000000000";
    var r = Array(t + 1).join("1") + Array(e - t + 1).join("0");
    return new m(r, 2).toString(16);
  }
  function Fn(t) {
    function e(t) {
      var e = parseInt(t.substr(0, 2), 16),
        r = parseInt(t.substr(2), 16);
      if ((0 == e) & (r < 128)) return String.fromCharCode(r);
      if (e < 8) {
        var n = 192 | ((7 & e) << 3) | ((192 & r) >> 6),
          i = 128 | (63 & r);
        return Xr(n.toString(16) + i.toString(16));
      }
      ((n = 224 | ((240 & e) >> 4)),
        (i = 128 | ((15 & e) << 2) | ((192 & r) >> 6)));
      var s = 128 | (63 & r);
      return Xr(n.toString(16) + i.toString(16) + s.toString(16));
    }
    var r = t.match(/.{4}/g),
      n = r.map(e);
    return n.join("");
  }
  function Nn(t) {
    for (var e = encodeURIComponent(t), r = "", n = 0; n < e.length; n++)
      "%" == e[n]
        ? ((r += e.substr(n, 3)), (n += 2))
        : (r = r + "%" + Or(e[n]));
    return r;
  }
  function Pn(t) {
    return ((t = t.replace(/\r\n/gm, "\n")), t);
  }
  function In(t) {
    return (
      (t = t.replace(/\r\n/gm, "\n")),
      (t = t.replace(/\n/gm, "\r\n")),
      t
    );
  }
  function Ln(t) {
    return !(
      t.length % 2 != 0 ||
      (!t.match(/^[0-9a-f]+$/) && !t.match(/^[0-9A-F]+$/))
    );
  }
  function Cn(t) {
    return !!t.match(/^[0-9A-Za-z-_.]+$/);
  }
  function Dn(t) {
    return t.length % 2 == 1 ? "0" + t : t.substr(0, 1) > "7" ? "00" + t : t;
  }
  function _n(t) {
    ((t = t.replace(/^\s*\[\s*/, "")),
      (t = t.replace(/\s*\]\s*$/, "")),
      (t = t.replace(/\s*/g, "")));
    try {
      var e = t
        .split(/,/)
        .map(function (t, e, r) {
          var n = parseInt(t);
          if (n < 0 || 255 < n) throw "integer not in range 0-255";
          var i = ("00" + n.toString(16)).slice(-2);
          return i;
        })
        .join("");
      return e;
    } catch (r) {
      throw "malformed integer array string: " + r;
    }
  }
  ((Br.getLblen = function (t, e) {
    if ("8" != t.substr(e + 2, 1)) return 1;
    var r = parseInt(t.substr(e + 3, 1));
    return 0 == r ? -1 : 0 < r && r < 10 ? r + 1 : -2;
  }),
    (Br.getL = function (t, e) {
      var r = Br.getLblen(t, e);
      return r < 1 ? "" : t.substr(e + 2, 2 * r);
    }),
    (Br.getVblen = function (t, e) {
      var r, n;
      return (
        (r = Br.getL(t, e)),
        "" == r
          ? -1
          : ((n =
              "8" === r.substr(0, 1) ? new m(r.substr(2), 16) : new m(r, 16)),
            n.intValue())
      );
    }),
    (Br.getVidx = function (t, e) {
      var r = Br.getLblen(t, e);
      return r < 0 ? r : e + 2 * (r + 1);
    }),
    (Br.getV = function (t, e) {
      var r = Br.getVidx(t, e),
        n = Br.getVblen(t, e);
      return t.substr(r, 2 * n);
    }),
    (Br.getTLV = function (t, e) {
      return t.substr(e, 2) + Br.getL(t, e) + Br.getV(t, e);
    }),
    (Br.getTLVblen = function (t, e) {
      return 2 + 2 * Br.getLblen(t, e) + 2 * Br.getVblen(t, e);
    }),
    (Br.getNextSiblingIdx = function (t, e) {
      var r = Br.getVidx(t, e),
        n = Br.getVblen(t, e);
      return r + 2 * n;
    }),
    (Br.getChildIdx = function (t, e) {
      var r,
        n,
        i,
        s = Br,
        a = [];
      ((r = s.getVidx(t, e)),
        (n = 2 * s.getVblen(t, e)),
        "03" == t.substr(e, 2) && ((r += 2), (n -= 2)),
        (i = 0));
      var o = r;
      while (i <= n) {
        var h = s.getTLVblen(t, o);
        if (((i += h), i <= n && a.push(o), (o += h), i >= n)) break;
      }
      return a;
    }),
    (Br.getNthChildIdx = function (t, e, r) {
      var n = Br.getChildIdx(t, e);
      return n[r];
    }),
    (Br.getIdxbyList = function (t, e, r, n) {
      var i,
        s,
        a = Br;
      return 0 == r.length
        ? void 0 !== n && t.substr(e, 2) !== n
          ? -1
          : e
        : ((i = r.shift()),
          (s = a.getChildIdx(t, e)),
          i >= s.length ? -1 : a.getIdxbyList(t, s[i], r, n));
    }),
    (Br.getIdxbyListEx = function (t, e, r, n) {
      var i,
        s,
        a = Br;
      if (0 == r.length) return void 0 !== n && t.substr(e, 2) !== n ? -1 : e;
      ((i = r.shift()), (s = a.getChildIdx(t, e)));
      for (var o = 0, h = 0; h < s.length; h++) {
        var u = t.substr(s[h], 2);
        if (
          ("number" == typeof i && !a.isContextTag(u) && o == i) ||
          ("string" == typeof i && a.isContextTag(u, i))
        )
          return a.getIdxbyListEx(t, s[h], r, n);
        a.isContextTag(u) || o++;
      }
      return -1;
    }),
    (Br.getTLVbyList = function (t, e, r, n) {
      var i = Br,
        s = i.getIdxbyList(t, e, r, n);
      return -1 == s || s >= t.length ? null : i.getTLV(t, s);
    }),
    (Br.getTLVbyListEx = function (t, e, r, n) {
      var i = Br,
        s = i.getIdxbyListEx(t, e, r, n);
      return -1 == s ? null : i.getTLV(t, s);
    }),
    (Br.getVbyList = function (t, e, r, n, i) {
      var s,
        a,
        o = Br;
      return (
        (s = o.getIdxbyList(t, e, r, n)),
        -1 == s || s >= t.length
          ? null
          : ((a = o.getV(t, s)), !0 === i && (a = a.substr(2)), a)
      );
    }),
    (Br.getVbyListEx = function (t, e, r, n, i) {
      var s,
        a,
        o = Br;
      return (
        (s = o.getIdxbyListEx(t, e, r, n)),
        -1 == s
          ? null
          : ((a = o.getV(t, s)),
            "03" == t.substr(s, 2) && !1 !== i && (a = a.substr(2)),
            a)
      );
    }),
    (Br.getInt = function (t, e, r) {
      void 0 == r && (r = -1);
      try {
        var n = t.substr(e, 2);
        if ("02" != n && "03" != n) return r;
        var i = Br.getV(t, e);
        return "02" == n ? parseInt(i, 16) : kn(i);
      } catch (s) {
        return r;
      }
    }),
    (Br.getOID = function (t, e, r) {
      void 0 == r && (r = null);
      try {
        if ("06" != t.substr(e, 2)) return r;
        var n = Br.getV(t, e);
        return Tn(n);
      } catch (i) {
        return r;
      }
    }),
    (Br.getOIDName = function (t, e, r) {
      void 0 == r && (r = null);
      try {
        var n = Br.getOID(t, e, r);
        if (n == r) return r;
        var i = Dr.asn1.x509.OID.oid2name(n);
        return "" == i ? n : i;
      } catch (s) {
        return r;
      }
    }),
    (Br.getString = function (t, e, r) {
      void 0 == r && (r = null);
      try {
        var n = Br.getV(t, e);
        return Zr(n);
      } catch (i) {
        return r;
      }
    }),
    (Br.hextooidstr = function (t) {
      var e = function (t, e) {
          return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t;
        },
        r = [],
        n = t.substr(0, 2),
        i = parseInt(n, 16);
      ((r[0] = new String(Math.floor(i / 40))), (r[1] = new String(i % 40)));
      for (var s = t.substr(2), a = [], o = 0; o < s.length / 2; o++)
        a.push(parseInt(s.substr(2 * o, 2), 16));
      var h = [],
        u = "";
      for (o = 0; o < a.length; o++)
        128 & a[o]
          ? (u += e((127 & a[o]).toString(2), 7))
          : ((u += e((127 & a[o]).toString(2), 7)),
            h.push(new String(parseInt(u, 2))),
            (u = ""));
      var c = r.join(".");
      return (h.length > 0 && (c = c + "." + h.join(".")), c);
    }),
    (Br.dump = function (t, e, r, n) {
      var i = Br,
        s = i.getV,
        a = i.dump,
        o = i.getChildIdx,
        h = t;
      t instanceof Dr.asn1.ASN1Object && (h = t.tohex());
      var u = function (t, e) {
        if (t.length <= 2 * e) return t;
        var r =
          t.substr(0, e) +
          "..(total " +
          t.length / 2 +
          "bytes).." +
          t.substr(t.length - e, e);
        return r;
      };
      (void 0 === e && (e = { ommit_long_octet: 32 }),
        void 0 === r && (r = 0),
        void 0 === n && (n = ""));
      var c = e.ommit_long_octet,
        l = h.substr(r, 2);
      if ("01" == l) {
        var f = s(h, r);
        return "00" == f ? n + "BOOLEAN FALSE\n" : n + "BOOLEAN TRUE\n";
      }
      if ("02" == l) {
        f = s(h, r);
        return n + "INTEGER " + u(f, c) + "\n";
      }
      if ("03" == l) {
        f = s(h, r);
        if (i.isASN1HEX(f.substr(2))) {
          var d = n + "BITSTRING, encapsulates\n";
          return ((d += a(f.substr(2), e, 0, n + "  ")), d);
        }
        return n + "BITSTRING " + u(f, c) + "\n";
      }
      if ("04" == l) {
        f = s(h, r);
        if (i.isASN1HEX(f)) {
          d = n + "OCTETSTRING, encapsulates\n";
          return ((d += a(f, e, 0, n + "  ")), d);
        }
        return n + "OCTETSTRING " + u(f, c) + "\n";
      }
      if ("05" == l) return n + "NULL\n";
      if ("06" == l) {
        var p = s(h, r),
          g = Dr.asn1.ASN1Util.oidHexToInt(p),
          v = Dr.asn1.x509.OID.oid2name(g),
          m = g.replace(/\./g, " ");
        return "" != v
          ? n + "ObjectIdentifier " + v + " (" + m + ")\n"
          : n + "ObjectIdentifier (" + m + ")\n";
      }
      if ("0a" == l) return n + "ENUMERATED " + parseInt(s(h, r)) + "\n";
      if ("0c" == l) return n + "UTF8String '" + Xr(s(h, r)) + "'\n";
      if ("13" == l) return n + "PrintableString '" + Xr(s(h, r)) + "'\n";
      if ("14" == l) return n + "TeletexString '" + Xr(s(h, r)) + "'\n";
      if ("16" == l) return n + "IA5String '" + Xr(s(h, r)) + "'\n";
      if ("17" == l) return n + "UTCTime " + Xr(s(h, r)) + "\n";
      if ("18" == l) return n + "GeneralizedTime " + Xr(s(h, r)) + "\n";
      if ("1a" == l) return n + "VisualString '" + Xr(s(h, r)) + "'\n";
      if ("1e" == l) return n + "BMPString '" + Fn(s(h, r)) + "'\n";
      if ("30" == l) {
        if ("3000" == h.substr(r, 4)) return n + "SEQUENCE {}\n";
        d = n + "SEQUENCE\n";
        var y = o(h, r),
          b = e;
        if (
          (2 == y.length || 3 == y.length) &&
          "06" == h.substr(y[0], 2) &&
          "04" == h.substr(y[y.length - 1], 2)
        ) {
          v = i.oidname(s(h, y[0]));
          var w = JSON.parse(JSON.stringify(e));
          ((w.x509ExtName = v), (b = w));
        }
        for (var x = 0; x < y.length; x++) d += a(h, b, y[x], n + "  ");
        return d;
      }
      if ("31" == l) {
        for (d = n + "SET\n", y = o(h, r), x = 0; x < y.length; x++)
          d += a(h, e, y[x], n + "  ");
        return d;
      }
      l = parseInt(l, 16);
      if (0 != (128 & l)) {
        var S = 31 & l;
        if (0 != (32 & l)) {
          for (d = n + "[" + S + "]\n", y = o(h, r), x = 0; x < y.length; x++)
            d += a(h, e, y[x], n + "  ");
          return d;
        }
        f = s(h, r);
        if (Br.isASN1HEX(f)) {
          d = n + "[" + S + "]\n";
          return ((d += a(f, e, 0, n + "  ")), d);
        }
        ("68747470" == f.substr(0, 8) ||
          ("subjectAltName" === e.x509ExtName && 2 == S)) &&
          (f = Xr(f));
        d = n + "[" + S + "] " + f + "\n";
        return d;
      }
      return n + "UNKNOWN(" + l + ") " + s(h, r) + "\n";
    }),
    (Br.parse = function (t) {
      var e = Br,
        r = e.parse,
        n = e.isASN1HEX,
        i = e.getV,
        s = e.getTLV,
        a = e.getChildIdx,
        o = Dr.asn1,
        h = o.ASN1Util.oidHexToInt,
        u = o.x509.OID.oid2name,
        c = Xr,
        l = Fn,
        f = Yr,
        d = {
          "0c": "utf8str",
          12: "numstr",
          13: "prnstr",
          14: "telstr",
          16: "ia5str",
          17: "utctime",
          18: "gentime",
          "1a": "visstr",
          "1e": "bmpstr",
          30: "seq",
          31: "set",
        },
        p = function (t) {
          for (var e = [], n = a(t, 0), i = 0; i < n.length; i++) {
            var o = n[i],
              h = s(t, o),
              u = r(h);
            e.push(u);
          }
          return e;
        },
        g = t.substr(0, 2),
        v = {},
        m = i(t, 0);
      if ("01" == g) return "0101ff" == t ? { bool: !0 } : { bool: !1 };
      if ("02" == g) return { int: { hex: m } };
      if ("03" == g)
        try {
          if ("00" != m.substr(0, 2)) throw "not encap";
          var y = m.substr(2);
          if (!n(y)) throw "not encap";
          return { bitstr: { obj: r(y) } };
        } catch (Te) {
          var b = null;
          return (
            m.length <= 10 && (b = Mn(m)),
            null == b ? { bitstr: { hex: m } } : { bitstr: { bin: b } }
          );
        }
      else if ("04" == g)
        try {
          if (!n(m)) throw "not encap";
          return { octstr: { obj: r(m) } };
        } catch (Te) {
          return { octstr: { hex: m } };
        }
      else {
        if ("05" == g) return { null: "" };
        if ("06" == g) {
          var w = h(m),
            x = u(w);
          return "" == x ? { oid: w } : { oid: x };
        }
        if ("0a" == g)
          return m.length > 4
            ? { enum: { hex: m } }
            : { enum: parseInt(m, 16) };
        if ("30" == g || "31" == g) return ((v[d[g]] = p(t)), v);
        if ("14" == g) {
          var S = f(m);
          return ((v[d[g]] = { str: S }), v);
        }
        if ("1e" == g) {
          S = l(m);
          return ((v[d[g]] = { str: S }), v);
        }
        if (-1 != ":0c:12:13:16:17:18:1a:".indexOf(g)) {
          S = c(m);
          return ((v[d[g]] = { str: S }), v);
        }
        if (g.match(/^8[0-9]$/)) {
          S = c(m);
          return (null == S) | ("" == S) ||
            null != S.match(/[\x00-\x1F\x7F-\x9F]/) ||
            null != S.match(/[\u0000-\u001F\u0080–\u009F]/)
            ? { tag: { tag: g, explicit: !1, hex: m } }
            : { tag: { tag: g, explicit: !1, str: S } };
        }
        if (!g.match(/^a[0-9]$/)) {
          var A = new Dr.asn1.ASN1Object();
          A.hV = m;
          var E = A.getLengthHexFromValue();
          return { asn1: { tlv: g + E + m } };
        }
        try {
          if (!n(m)) throw new Error("not encap");
          return { tag: { tag: g, explicit: !0, obj: r(m) } };
        } catch (Te) {
          return { tag: { tag: g, explicit: !0, hex: m } };
        }
      }
    }),
    (Br.isContextTag = function (t, e) {
      var r, n;
      t = t.toLowerCase();
      try {
        r = parseInt(t, 16);
      } catch (s) {
        return -1;
      }
      if (void 0 === e) return 128 == (192 & r);
      try {
        var i = e.match(/^\[[0-9]+\]$/);
        return (
          null != i &&
          ((n = parseInt(e.substr(1, e.length - 1), 10)),
          !(n > 31) && 128 == (192 & r) && (31 & r) == n)
        );
      } catch (s) {
        return !1;
      }
    }),
    (Br.isASN1HEX = function (t) {
      var e = Br;
      if (t.length % 2 == 1) return !1;
      var r = e.getVblen(t, 0),
        n = t.substr(0, 2),
        i = e.getL(t, 0),
        s = t.length - n.length - i.length;
      return s == 2 * r;
    }),
    (Br.checkStrictDER = function (t, e, r, n, i) {
      var s = Br;
      if (void 0 === r) {
        if ("string" != typeof t) throw new Error("not hex string");
        if (((t = t.toLowerCase()), !Dr.lang.String.isHex(t)))
          throw new Error("not hex string");
        ((r = t.length),
          (n = t.length / 2),
          (i = n < 128 ? 1 : Math.ceil(n.toString(16)) + 1));
      }
      var a = s.getL(t, e);
      if (a.length > 2 * i) throw new Error("L of TLV too long: idx=" + e);
      var o = s.getVblen(t, e);
      if (o > n) throw new Error("value of L too long than hex: idx=" + e);
      var h = s.getTLV(t, e),
        u = h.length - 2 - s.getL(t, e).length;
      if (u !== 2 * o)
        throw new Error(
          "V string length and L's value not the same:" + u + "/" + 2 * o,
        );
      if (0 === e && t.length != h.length)
        throw new Error(
          "total length and TLV length unmatch:" + t.length + "!=" + h.length,
        );
      var c = t.substr(e, 2);
      if ("02" === c) {
        var l = s.getVidx(t, e);
        if ("00" == t.substr(l, 2) && t.charCodeAt(l + 2) < 56)
          throw new Error("not least zeros for DER INTEGER");
      }
      if (32 & parseInt(c, 16)) {
        for (
          var f = s.getVblen(t, e), d = 0, p = s.getChildIdx(t, e), g = 0;
          g < p.length;
          g++
        ) {
          var v = s.getTLV(t, p[g]);
          ((d += v.length), s.checkStrictDER(t, p[g], r, n, i));
        }
        if (2 * f != d)
          throw new Error(
            "sum of children's TLV length and L unmatch: " + 2 * f + "!=" + d,
          );
      }
    }),
    (Br.oidname = function (t) {
      var e = Dr.asn1;
      Dr.lang.String.isHex(t) && (t = e.ASN1Util.oidHexToInt(t));
      var r = e.x509.OID.oid2name(t);
      return ("" === r && (r = t), r);
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.asn1 && Dr.asn1) || (Dr.asn1 = {}),
    ("undefined" != typeof Dr.asn1.x509 && Dr.asn1.x509) || (Dr.asn1.x509 = {}),
    (Dr.asn1.x509.Certificate = function (t) {
      Dr.asn1.x509.Certificate.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERBitString,
        i = r.DERSequence,
        s = r.x509,
        a = s.TBSCertificate,
        o = s.AlgorithmIdentifier;
      ((this.params = void 0),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.sign = function () {
          var t = this.params,
            e = t.sigalg;
          void 0 != t.sigalg.name && (e = t.sigalg.name);
          var r = t.tbsobj.tohex(),
            n = new Dr.crypto.Signature({ alg: e });
          (n.init(t.cakey), n.updateHex(r), (t.sighex = n.sign()));
        }),
        (this.getPEM = function () {
          return an(this.tohex(), "CERTIFICATE");
        }),
        (this.tohex = function () {
          var t = this.params;
          if (
            ((void 0 != t.tbsobj && null != t.tbsobj) || (t.tbsobj = new a(t)),
            void 0 == t.sighex && void 0 != t.cakey && this.sign(),
            void 0 == t.sighex)
          )
            throw new Error("sighex or cakey parameter not defined");
          var e = [];
          (e.push(t.tbsobj),
            e.push(new o({ name: t.sigalg })),
            e.push(new n({ hex: "00" + t.sighex })));
          var r = new i({ array: e });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.x509.Certificate, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.TBSCertificate = function (t) {
      Dr.asn1.x509.TBSCertificate.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.x509,
        i = r.DERTaggedObject,
        s = r.DERInteger,
        a = r.DERSequence,
        o = n.AlgorithmIdentifier,
        h = n.Time,
        u = n.X500Name,
        c = n.Extensions,
        l = n.SubjectPublicKeyInfo;
      ((this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t = [],
            e = this.params;
          if (void 0 != e.version || 1 != e.version) {
            var r = 2;
            void 0 != e.version && (r = e.version - 1);
            var n = new i({ obj: new s({ int: r }) });
            t.push(n);
          }
          (t.push(new s(e.serial)),
            t.push(new o({ name: e.sigalg })),
            t.push(new u(e.issuer)),
            t.push(new a({ array: [new h(e.notbefore), new h(e.notafter)] })),
            t.push(new u(e.subject)),
            t.push(new l(Kn.getKey(e.sbjpubkey))),
            void 0 !== e.ext &&
              e.ext.length > 0 &&
              t.push(new i({ tag: "a3", obj: new c(e.ext) })));
          var f = new Dr.asn1.DERSequence({ array: t });
          return f.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.TBSCertificate, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.Extensions = function (t) {
      Dr.asn1.x509.Extensions.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.x509;
      ((this.aParam = []),
        (this.setByParam = function (t) {
          this.aParam = t;
        }),
        (this.tohex = function () {
          for (var t = [], e = 0; e < this.aParam.length; e++) {
            var r = this.aParam[e],
              s = r.extname,
              a = null;
            if (void 0 != r.extn) a = new i.PrivateExtension(r);
            else if ("subjectKeyIdentifier" == s)
              a = new i.SubjectKeyIdentifier(r);
            else if ("keyUsage" == s) a = new i.KeyUsage(r);
            else if ("subjectAltName" == s) a = new i.SubjectAltName(r);
            else if ("issuerAltName" == s) a = new i.IssuerAltName(r);
            else if ("basicConstraints" == s) a = new i.BasicConstraints(r);
            else if ("nameConstraints" == s) a = new i.NameConstraints(r);
            else if ("cRLDistributionPoints" == s)
              a = new i.CRLDistributionPoints(r);
            else if ("certificatePolicies" == s)
              a = new i.CertificatePolicies(r);
            else if ("policyMappings" == s) a = new i.PolicyMappings(r);
            else if ("policyConstraints" == s) a = new i.PolicyConstraints(r);
            else if ("inhibitAnyPolicy" == s) a = new i.InhibitAnyPolicy(r);
            else if ("authorityKeyIdentifier" == s)
              a = new i.AuthorityKeyIdentifier(r);
            else if ("extKeyUsage" == s) a = new i.ExtKeyUsage(r);
            else if ("authorityInfoAccess" == s)
              a = new i.AuthorityInfoAccess(r);
            else if ("cRLNumber" == s) a = new i.CRLNumber(r);
            else if ("cRLReason" == s) a = new i.CRLReason(r);
            else if ("ocspNonce" == s) a = new i.OCSPNonce(r);
            else if ("ocspNoCheck" == s) a = new i.OCSPNoCheck(r);
            else if ("adobeTimeStamp" == s) a = new i.AdobeTimeStamp(r);
            else {
              if ("subjectDirectoryAttributes" != s)
                throw new Error("extension not supported:" + JSON.stringify(r));
              a = new i.SubjectDirectoryAttributes(r);
            }
            null != a && t.push(a);
          }
          var o = new n({ array: t });
          return o.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.Extensions, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.Extension = function (t) {
      Dr.asn1.x509.Extension.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERObjectIdentifier,
        i = r.DEROctetString,
        s = (r.DERBitString, r.DERBoolean),
        a = r.DERSequence;
      ((this.tohex = function () {
        var t = new n({ oid: this.oid }),
          e = new i({ hex: this.getExtnValueHex() }),
          r = new Array();
        (r.push(t), this.critical && r.push(new s()), r.push(e));
        var o = new a({ array: r });
        return o.tohex();
      }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.critical = !1),
        void 0 !== t && void 0 !== t.critical && (this.critical = t.critical));
    }),
    Un(Dr.asn1.x509.Extension, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.KeyUsage = function (t) {
      Dr.asn1.x509.KeyUsage.superclass.constructor.call(this, t);
      var e = Error,
        r = {
          digitalSignature: 0,
          nonRepudiation: 1,
          keyEncipherment: 2,
          dataEncipherment: 3,
          keyAgreement: 4,
          keyCertSign: 5,
          cRLSign: 6,
          encipherOnly: 7,
          decipherOnly: 8,
        };
      ((this.getExtnValueHex = function () {
        var t = this.getBinValue();
        return (
          (this.asn1ExtnValue = new Dr.asn1.DERBitString({ bin: t })),
          this.asn1ExtnValue.tohex()
        );
      }),
        (this.getBinValue = function () {
          var t = this.params;
          if (
            "object" != typeof t ||
            ("object" != typeof t.names && "string" != typeof t.bin)
          )
            throw new e("parameter not yet set");
          if (void 0 != t.names) return Hn(t.names, r);
          if (void 0 != t.bin) return t.bin;
          throw new e("parameter not set properly");
        }),
        (this.oid = "2.5.29.15"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.KeyUsage, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.BasicConstraints = function (t) {
      Dr.asn1.x509.BasicConstraints.superclass.constructor.call(this, t);
      var e = Dr.asn1,
        r = e.DERBoolean,
        n = e.DERInteger,
        i = e.DERSequence;
      ((this.getExtnValueHex = function () {
        var t = new Array();
        (this.cA && t.push(new r()),
          this.pathLen > -1 && t.push(new n({ int: this.pathLen })));
        var e = new i({ array: t });
        return ((this.asn1ExtnValue = e), this.asn1ExtnValue.tohex());
      }),
        (this.oid = "2.5.29.19"),
        (this.cA = !1),
        (this.pathLen = -1),
        void 0 !== t &&
          (void 0 !== t.cA && (this.cA = t.cA),
          void 0 !== t.pathLen && (this.pathLen = t.pathLen)));
    }),
    Un(Dr.asn1.x509.BasicConstraints, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.CRLDistributionPoints = function (t) {
      Dr.asn1.x509.CRLDistributionPoints.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = r.x509;
      ((this.getExtnValueHex = function () {
        return this.asn1ExtnValue.tohex();
      }),
        (this.setByDPArray = function (t) {
          for (var e = [], i = 0; i < t.length; i++)
            if (t[i] instanceof Dr.asn1.ASN1Object) e.push(t[i]);
            else {
              var s = new n.DistributionPoint(t[i]);
              e.push(s);
            }
          this.asn1ExtnValue = new r.DERSequence({ array: e });
        }),
        (this.setByOneURI = function (t) {
          var e = new n.DistributionPoint({ fulluri: t });
          this.setByDPArray([e]);
        }),
        (this.oid = "2.5.29.31"),
        void 0 !== t &&
          (void 0 !== t.array
            ? this.setByDPArray(t.array)
            : void 0 !== t.uri && this.setByOneURI(t.uri)));
    }),
    Un(Dr.asn1.x509.CRLDistributionPoints, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.DistributionPoint = function (t) {
      Dr.asn1.x509.DistributionPoint.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.x509.DistributionPointName;
      ((this.tohex = function () {
        var t = new r.DERSequence();
        if (null != this.asn1DP) {
          var e = new r.DERTaggedObject({
            explicit: !0,
            tag: "a0",
            obj: this.asn1DP,
          });
          t.appendASN1Object(e);
        }
        return ((this.hTLV = t.tohex()), this.hTLV);
      }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t &&
          (void 0 !== t.dpobj
            ? (this.asn1DP = t.dpobj)
            : void 0 !== t.dpname
              ? (this.asn1DP = new n(t.dpname))
              : void 0 !== t.fulluri &&
                (this.asn1DP = new n({ full: [{ uri: t.fulluri }] }))));
    }),
    Un(Dr.asn1.x509.DistributionPoint, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.DistributionPointName = function (t) {
      Dr.asn1.x509.DistributionPointName.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERTaggedObject;
      if (
        ((this.tohex = function () {
          if ("full" != this.type)
            throw new Error("currently type shall be 'full': " + this.type);
          return (
            (this.asn1Obj = new n({
              explicit: !1,
              tag: this.tag,
              obj: this.asn1V,
            })),
            (this.hTLV = this.asn1Obj.tohex()),
            this.hTLV
          );
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t)
      )
        if (r.x509.GeneralNames.prototype.isPrototypeOf(t))
          ((this.type = "full"), (this.tag = "a0"), (this.asn1V = t));
        else {
          if (void 0 === t.full)
            throw new Error(
              "This class supports GeneralNames only as argument",
            );
          ((this.type = "full"),
            (this.tag = "a0"),
            (this.asn1V = new r.x509.GeneralNames(t.full)));
        }
    }),
    Un(Dr.asn1.x509.DistributionPointName, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.CertificatePolicies = function (t) {
      Dr.asn1.x509.CertificatePolicies.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = r.x509,
        i = r.DERSequence,
        s = n.PolicyInformation;
      ((this.params = null),
        (this.getExtnValueHex = function () {
          for (var t = [], e = 0; e < this.params.array.length; e++)
            t.push(new s(this.params.array[e]));
          var r = new i({ array: t });
          return ((this.asn1ExtnValue = r), this.asn1ExtnValue.tohex());
        }),
        (this.oid = "2.5.29.32"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.CertificatePolicies, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.PolicyInformation = function (t) {
      Dr.asn1.x509.PolicyInformation.superclass.constructor.call(this, t);
      var e = Dr.asn1,
        r = e.DERSequence,
        n = e.DERObjectIdentifier,
        i = e.x509.PolicyQualifierInfo;
      ((this.params = null),
        (this.tohex = function () {
          if (void 0 === this.params.policyoid && void 0 === this.params.array)
            throw new Error("parameter oid and array missing");
          var t = [new n(this.params.policyoid)];
          if (void 0 !== this.params.array) {
            for (var e = [], s = 0; s < this.params.array.length; s++)
              e.push(new i(this.params.array[s]));
            e.length > 0 && t.push(new r({ array: e }));
          }
          var a = new r({ array: t });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.PolicyInformation, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.PolicyQualifierInfo = function (t) {
      Dr.asn1.x509.PolicyQualifierInfo.superclass.constructor.call(this, t);
      var e = Dr.asn1,
        r = e.DERSequence,
        n = e.DERIA5String,
        i = e.DERObjectIdentifier,
        s = e.x509.UserNotice;
      ((this.params = null),
        (this.tohex = function () {
          if (void 0 !== this.params.cps) {
            var t = new r({
              array: [
                new i({ oid: "1.3.6.1.5.5.7.2.1" }),
                new n({ str: this.params.cps }),
              ],
            });
            return t.tohex();
          }
          if (void 0 != this.params.unotice) {
            t = new r({
              array: [
                new i({ oid: "1.3.6.1.5.5.7.2.2" }),
                new s(this.params.unotice),
              ],
            });
            return t.tohex();
          }
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.PolicyQualifierInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.UserNotice = function (t) {
      Dr.asn1.x509.UserNotice.superclass.constructor.call(this, t);
      var e = Dr.asn1.DERSequence,
        r = (Dr.asn1.DERInteger, Dr.asn1.x509.DisplayText),
        n = Dr.asn1.x509.NoticeReference;
      ((this.params = null),
        (this.tohex = function () {
          var t = [];
          (void 0 !== this.params.noticeref &&
            t.push(new n(this.params.noticeref)),
            void 0 !== this.params.exptext &&
              t.push(new r(this.params.exptext)));
          var i = new e({ array: t });
          return i.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.UserNotice, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.NoticeReference = function (t) {
      Dr.asn1.x509.NoticeReference.superclass.constructor.call(this, t);
      var e = Dr.asn1.DERSequence,
        r = Dr.asn1.DERInteger,
        n = Dr.asn1.x509.DisplayText;
      ((this.params = null),
        (this.tohex = function () {
          var t = [];
          if (
            (void 0 !== this.params.org && t.push(new n(this.params.org)),
            void 0 !== this.params.noticenum)
          ) {
            for (
              var i = [], s = this.params.noticenum, a = 0;
              a < s.length;
              a++
            )
              i.push(new r(s[a]));
            t.push(new e({ array: i }));
          }
          if (0 == t.length) throw new Error("parameter is empty");
          var o = new e({ array: t });
          return o.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.NoticeReference, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.DisplayText = function (t) {
      (Dr.asn1.x509.DisplayText.superclass.constructor.call(this, t),
        (this.hT = "0c"),
        void 0 !== t &&
          ("ia5" === t.type
            ? (this.hT = "16")
            : "vis" === t.type
              ? (this.hT = "1a")
              : "bmp" === t.type && (this.hT = "1e")));
    }),
    Un(Dr.asn1.x509.DisplayText, Dr.asn1.DERAbstractString),
    (Dr.asn1.x509.PolicyMappings = function (t) {
      Dr.asn1.x509.PolicyMappings.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = (r.x509, r.ASN1Util.newObject);
      ((this.params = null),
        (this.getExtnValueHex = function () {
          for (var t = this.params, e = [], r = 0; r < t.array.length; r++) {
            var i = t.array[r];
            e.push({ seq: [{ oid: i[0] }, { oid: i[1] }] });
          }
          return (
            (this.asn1ExtnValue = n({ seq: e })),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "2.5.29.33"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.PolicyMappings, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.PolicyConstraints = function (t) {
      Dr.asn1.x509.PolicyConstraints.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = (r.x509, r.ASN1Util.newObject);
      ((this.params = null),
        (this.getExtnValueHex = function () {
          var t = this.params,
            e = [];
          return (
            void 0 != t.reqexp &&
              e.push({ tag: { tagi: "80", obj: { int: t.reqexp } } }),
            void 0 != t.inhibit &&
              e.push({ tag: { tagi: "81", obj: { int: t.inhibit } } }),
            (this.asn1ExtnValue = n({ seq: e })),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "2.5.29.36"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.PolicyConstraints, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.InhibitAnyPolicy = function (t) {
      Dr.asn1.x509.InhibitAnyPolicy.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = (r.x509, r.ASN1Util.newObject);
      ((this.params = null),
        (this.getExtnValueHex = function () {
          return (
            (this.asn1ExtnValue = n({ int: this.params.skip })),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "2.5.29.54"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.InhibitAnyPolicy, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.NameConstraints = function (t) {
      Dr.asn1.x509.NameConstraints.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = r.x509,
        i = r.ASN1Util.newObject,
        s = n.GeneralSubtree;
      ((this.params = null),
        (this.getExtnValueHex = function () {
          var t = this.params,
            e = [];
          if (void 0 != t.permit && void 0 != t.permit.length) {
            for (var r = [], n = 0; n < t.permit.length; n++)
              r.push(new s(t.permit[n]));
            e.push({ tag: { tagi: "a0", obj: { seq: r } } });
          }
          if (void 0 != t.exclude && void 0 != t.exclude.length) {
            var a = [];
            for (n = 0; n < t.exclude.length; n++) a.push(new s(t.exclude[n]));
            e.push({ tag: { tagi: "a1", obj: { seq: a } } });
          }
          return (
            (this.asn1ExtnValue = i({ seq: e })),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "2.5.29.30"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.NameConstraints, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.GeneralSubtree = function (t) {
      Dr.asn1.x509.GeneralSubtree.superclass.constructor.call(this);
      var e = Dr.asn1,
        r = e.x509,
        n = r.GeneralName,
        i = e.ASN1Util.newObject;
      ((this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t = this.params,
            e = [new n(t)];
          (void 0 != t.min &&
            e.push({ tag: { tagi: "80", obj: { int: t.min } } }),
            void 0 != t.max &&
              e.push({ tag: { tagi: "81", obj: { int: t.max } } }));
          var r = i({ seq: e });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.GeneralSubtree, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.ExtKeyUsage = function (t) {
      Dr.asn1.x509.ExtKeyUsage.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1;
      ((this.setPurposeArray = function (t) {
        this.asn1ExtnValue = new r.DERSequence();
        for (var e = 0; e < t.length; e++) {
          var n = new r.DERObjectIdentifier(t[e]);
          this.asn1ExtnValue.appendASN1Object(n);
        }
      }),
        (this.getExtnValueHex = function () {
          return this.asn1ExtnValue.tohex();
        }),
        (this.oid = "2.5.29.37"),
        void 0 !== t && void 0 !== t.array && this.setPurposeArray(t.array));
    }),
    Un(Dr.asn1.x509.ExtKeyUsage, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.AuthorityKeyIdentifier = function (t) {
      Dr.asn1.x509.AuthorityKeyIdentifier.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = r.DERTaggedObject,
        i = r.x509.GeneralNames;
      e.crypto.Util.isKey;
      ((this.asn1KID = null),
        (this.asn1CertIssuer = null),
        (this.asn1CertSN = null),
        (this.getExtnValueHex = function () {
          var t = new Array();
          (this.asn1KID &&
            t.push(new n({ explicit: !1, tag: "80", obj: this.asn1KID })),
            this.asn1CertIssuer &&
              t.push(
                new n({
                  explicit: !1,
                  tag: "a1",
                  obj: new i([{ dn: this.asn1CertIssuer }]),
                }),
              ),
            this.asn1CertSN &&
              t.push(new n({ explicit: !1, tag: "82", obj: this.asn1CertSN })));
          var e = new r.DERSequence({ array: t });
          return ((this.asn1ExtnValue = e), this.asn1ExtnValue.tohex());
        }),
        (this.setKIDByParam = function (t) {
          if (void 0 !== t.str || void 0 !== t.hex)
            this.asn1KID = new Dr.asn1.DEROctetString(t);
          else if (
            ("object" === typeof t && Dr.crypto.Util.isKey(t)) ||
            ("string" === typeof t && -1 != t.indexOf("BEGIN "))
          ) {
            var e = t;
            "string" === typeof t && (e = Kn.getKey(t));
            var r = Kn.getKeyID(e);
            this.asn1KID = new Dr.asn1.DEROctetString({ hex: r });
          }
        }),
        (this.setCertIssuerByParam = function (t) {
          void 0 !== t.str ||
          void 0 !== t.ldapstr ||
          void 0 !== t.hex ||
          void 0 !== t.certsubject ||
          void 0 !== t.certissuer
            ? (this.asn1CertIssuer = new Dr.asn1.x509.X500Name(t))
            : "string" === typeof t &&
              -1 != t.indexOf("BEGIN ") &&
              -1 != t.indexOf("CERTIFICATE") &&
              (this.asn1CertIssuer = new Dr.asn1.x509.X500Name({
                certissuer: t,
              }));
        }),
        (this.setCertSNByParam = function (t) {
          if (void 0 !== t.str || void 0 !== t.bigint || void 0 !== t.hex)
            this.asn1CertSN = new Dr.asn1.DERInteger(t);
          else if (
            "string" === typeof t &&
            -1 != t.indexOf("BEGIN ") &&
            t.indexOf("CERTIFICATE")
          ) {
            var e = new Jn();
            e.readCertPEM(t);
            var r = e.getSerialNumberHex();
            this.asn1CertSN = new Dr.asn1.DERInteger({ hex: r });
          }
        }),
        (this.oid = "2.5.29.35"),
        void 0 !== t &&
          (void 0 !== t.kid && this.setKIDByParam(t.kid),
          void 0 !== t.issuer && this.setCertIssuerByParam(t.issuer),
          void 0 !== t.sn && this.setCertSNByParam(t.sn),
          void 0 !== t.issuersn &&
            "string" === typeof t.issuersn &&
            -1 != t.issuersn.indexOf("BEGIN ") &&
            t.issuersn.indexOf("CERTIFICATE") &&
            (this.setCertSNByParam(t.issuersn),
            this.setCertIssuerByParam(t.issuersn))));
    }),
    Un(Dr.asn1.x509.AuthorityKeyIdentifier, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.SubjectKeyIdentifier = function (t) {
      Dr.asn1.x509.SubjectKeyIdentifier.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = r.DEROctetString;
      ((this.asn1KID = null),
        (this.getExtnValueHex = function () {
          return (
            (this.asn1ExtnValue = this.asn1KID),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.setKIDByParam = function (t) {
          if (void 0 !== t.str || void 0 !== t.hex) this.asn1KID = new n(t);
          else if (
            ("object" === typeof t && Dr.crypto.Util.isKey(t)) ||
            ("string" === typeof t && -1 != t.indexOf("BEGIN"))
          ) {
            var e = t;
            "string" === typeof t && (e = Kn.getKey(t));
            var r = Kn.getKeyID(e);
            this.asn1KID = new Dr.asn1.DEROctetString({ hex: r });
          }
        }),
        (this.oid = "2.5.29.14"),
        void 0 !== t && void 0 !== t.kid && this.setKIDByParam(t.kid));
    }),
    Un(Dr.asn1.x509.SubjectKeyIdentifier, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.AuthorityInfoAccess = function (t) {
      (Dr.asn1.x509.AuthorityInfoAccess.superclass.constructor.call(this, t),
        (this.setAccessDescriptionArray = function (t) {
          for (
            var e = new Array(),
              r = Dr,
              n = r.asn1,
              i = n.DERSequence,
              s = n.DERObjectIdentifier,
              a = n.x509.GeneralName,
              o = 0;
            o < t.length;
            o++
          ) {
            var h,
              u = t[o];
            if (void 0 !== u.ocsp)
              h = new i({
                array: [
                  new s({ oid: "1.3.6.1.5.5.7.48.1" }),
                  new a({ uri: u.ocsp }),
                ],
              });
            else {
              if (void 0 === u.caissuer)
                throw new Error(
                  "unknown AccessMethod parameter: " + JSON.stringify(u),
                );
              h = new i({
                array: [
                  new s({ oid: "1.3.6.1.5.5.7.48.2" }),
                  new a({ uri: u.caissuer }),
                ],
              });
            }
            e.push(h);
          }
          this.asn1ExtnValue = new i({ array: e });
        }),
        (this.getExtnValueHex = function () {
          return this.asn1ExtnValue.tohex();
        }),
        (this.oid = "1.3.6.1.5.5.7.1.1"),
        void 0 !== t &&
          void 0 !== t.array &&
          this.setAccessDescriptionArray(t.array));
    }),
    Un(Dr.asn1.x509.AuthorityInfoAccess, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.SubjectAltName = function (t) {
      (Dr.asn1.x509.SubjectAltName.superclass.constructor.call(this, t),
        (this.setNameArray = function (t) {
          this.asn1ExtnValue = new Dr.asn1.x509.GeneralNames(t);
        }),
        (this.getExtnValueHex = function () {
          return this.asn1ExtnValue.tohex();
        }),
        (this.oid = "2.5.29.17"),
        void 0 !== t && void 0 !== t.array && this.setNameArray(t.array));
    }),
    Un(Dr.asn1.x509.SubjectAltName, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.IssuerAltName = function (t) {
      (Dr.asn1.x509.IssuerAltName.superclass.constructor.call(this, t),
        (this.setNameArray = function (t) {
          this.asn1ExtnValue = new Dr.asn1.x509.GeneralNames(t);
        }),
        (this.getExtnValueHex = function () {
          return this.asn1ExtnValue.tohex();
        }),
        (this.oid = "2.5.29.18"),
        void 0 !== t && void 0 !== t.array && this.setNameArray(t.array));
    }),
    Un(Dr.asn1.x509.IssuerAltName, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.SubjectDirectoryAttributes = function (t) {
      Dr.asn1.x509.SubjectDirectoryAttributes.superclass.constructor.call(
        this,
        t,
      );
      var e = Dr.asn1,
        r = e.DERSequence,
        n = e.ASN1Util.newObject,
        i = e.x509.OID.name2oid;
      ((this.params = null),
        (this.getExtnValueHex = function () {
          for (var t = [], e = 0; e < this.params.array.length; e++) {
            var s = this.params.array[e],
              a = { seq: [{ oid: "1.2.3.4" }, { set: [{ utf8str: "DE" }] }] };
            if ("dateOfBirth" == s.attr)
              ((a.seq[0].oid = i(s.attr)),
                (a.seq[1].set[0] = { gentime: s.str }));
            else if ("placeOfBirth" == s.attr)
              ((a.seq[0].oid = i(s.attr)),
                (a.seq[1].set[0] = { utf8str: s.str }));
            else if ("gender" == s.attr)
              ((a.seq[0].oid = i(s.attr)),
                (a.seq[1].set[0] = { prnstr: s.str }));
            else if ("countryOfCitizenship" == s.attr)
              ((a.seq[0].oid = i(s.attr)),
                (a.seq[1].set[0] = { prnstr: s.str }));
            else {
              if ("countryOfResidence" != s.attr)
                throw new Error("unsupported attribute: " + s.attr);
              ((a.seq[0].oid = i(s.attr)),
                (a.seq[1].set[0] = { prnstr: s.str }));
            }
            t.push(new n(a));
          }
          var o = new r({ array: t });
          return ((this.asn1ExtnValue = o), this.asn1ExtnValue.tohex());
        }),
        (this.oid = "2.5.29.9"),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.x509.SubjectDirectoryAttributes, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.PrivateExtension = function (t) {
      Dr.asn1.x509.PrivateExtension.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.lang.String.isHex,
        n = e.asn1,
        i = n.x509.OID.name2oid,
        s = n.ASN1Util.newObject;
      ((this.params = null),
        (this.setByParam = function (t) {
          ((this.oid = i(t.extname)), (this.params = t));
        }),
        (this.getExtnValueHex = function () {
          if (void 0 == this.params.extname || void 0 == this.params.extn)
            throw new Error("extname or extnhex not specified");
          var t = this.params.extn;
          if ("string" == typeof t && r(t)) return t;
          if ("object" == typeof t)
            try {
              return s(t).tohex();
            } catch (e) {}
          throw new Error("unsupported extn value");
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.PrivateExtension, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.CRL = function (t) {
      Dr.asn1.x509.CRL.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.DERBitString,
        s = r.x509,
        a = s.AlgorithmIdentifier,
        o = s.TBSCertList;
      ((this.params = void 0),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.sign = function () {
          var t = new o(this.params).tohex(),
            e = new Dr.crypto.Signature({ alg: this.params.sigalg });
          (e.init(this.params.cakey), e.updateHex(t));
          var r = e.sign();
          this.params.sighex = r;
        }),
        (this.getPEM = function () {
          return an(this.tohex(), "X509 CRL");
        }),
        (this.tohex = function () {
          var t = this.params;
          if (
            (void 0 == t.tbsobj && (t.tbsobj = new o(t)),
            void 0 == t.sighex && void 0 != t.cakey && this.sign(),
            void 0 == t.sighex)
          )
            throw new Error("sighex or cakey parameter not defined");
          var e = [];
          (e.push(t.tbsobj),
            e.push(new a({ name: t.sigalg })),
            e.push(new i({ hex: "00" + t.sighex })));
          var r = new n({ array: e });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.x509.CRL, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.TBSCertList = function (t) {
      Dr.asn1.x509.TBSCertList.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERInteger,
        i = r.DERSequence,
        s = r.DERTaggedObject,
        a = (r.DERObjectIdentifier, r.x509),
        o = a.AlgorithmIdentifier,
        h = a.Time,
        u = a.Extensions,
        c = a.X500Name;
      ((this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.getRevCertSequence = function () {
          for (var t = [], e = this.params.revcert, r = 0; r < e.length; r++) {
            var s = [new n(e[r].sn), new h(e[r].date)];
            (void 0 != e[r].ext && s.push(new u(e[r].ext)),
              t.push(new i({ array: s })));
          }
          return new i({ array: t });
        }),
        (this.tohex = function () {
          var t = [],
            e = this.params;
          if (void 0 != e.version) {
            var r = e.version - 1,
              a = new n({ int: r });
            t.push(a);
          }
          if (
            (t.push(new o({ name: e.sigalg })),
            t.push(new c(e.issuer)),
            t.push(new h(e.thisupdate)),
            void 0 != e.nextupdate && t.push(new h(e.nextupdate)),
            void 0 != e.revcert && t.push(this.getRevCertSequence()),
            void 0 != e.ext)
          ) {
            var l = new u(e.ext);
            t.push(new s({ tag: "a0", explicit: !0, obj: l }));
          }
          var f = new i({ array: t });
          return f.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.TBSCertList, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.CRLEntry = function (t) {
      Dr.asn1.x509.CRLEntry.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1;
      ((this.setCertSerial = function (t) {
        this.sn = new r.DERInteger(t);
      }),
        (this.setRevocationDate = function (t) {
          this.time = new r.x509.Time(t);
        }),
        (this.tohex = function () {
          var t = new r.DERSequence({ array: [this.sn, this.time] });
          return ((this.TLV = t.tohex()), this.TLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t &&
          (void 0 !== t.time && this.setRevocationDate(t.time),
          void 0 !== t.sn && this.setCertSerial(t.sn)));
    }),
    Un(Dr.asn1.x509.CRLEntry, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.CRLNumber = function (t) {
      (Dr.asn1.x509.CRLNumber.superclass.constructor.call(this, t),
        (this.params = void 0),
        (this.getExtnValueHex = function () {
          return (
            (this.asn1ExtnValue = new Dr.asn1.DERInteger(this.params.num)),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "2.5.29.20"),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.x509.CRLNumber, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.CRLReason = function (t) {
      (Dr.asn1.x509.CRLReason.superclass.constructor.call(this, t),
        (this.params = void 0),
        (this.getExtnValueHex = function () {
          return (
            (this.asn1ExtnValue = new Dr.asn1.DEREnumerated(this.params.code)),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "2.5.29.21"),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.x509.CRLReason, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.OCSPNonce = function (t) {
      (Dr.asn1.x509.OCSPNonce.superclass.constructor.call(this, t),
        (this.params = void 0),
        (this.getExtnValueHex = function () {
          return (
            (this.asn1ExtnValue = new Dr.asn1.DEROctetString(this.params)),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "1.3.6.1.5.5.7.48.1.2"),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.x509.OCSPNonce, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.OCSPNoCheck = function (t) {
      (Dr.asn1.x509.OCSPNoCheck.superclass.constructor.call(this, t),
        (this.params = void 0),
        (this.getExtnValueHex = function () {
          return (
            (this.asn1ExtnValue = new Dr.asn1.DERNull()),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "1.3.6.1.5.5.7.48.1.5"),
        void 0 != t && (this.params = t));
    }),
    Un(Dr.asn1.x509.OCSPNoCheck, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.AdobeTimeStamp = function (t) {
      Dr.asn1.x509.AdobeTimeStamp.superclass.constructor.call(this, t);
      var e = Dr,
        r = e.asn1,
        n = r.DERInteger,
        i = r.DERBoolean,
        s = r.DERSequence,
        a = r.x509.GeneralName;
      ((this.params = null),
        (this.getExtnValueHex = function () {
          var t = this.params,
            e = [new n(1)];
          return (
            e.push(new a({ uri: t.uri })),
            void 0 != t.reqauth && e.push(new i(t.reqauth)),
            (this.asn1ExtnValue = new s({ array: e })),
            this.asn1ExtnValue.tohex()
          );
        }),
        (this.oid = "1.2.840.113583.1.1.9.1"),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.AdobeTimeStamp, Dr.asn1.x509.Extension),
    (Dr.asn1.x509.X500Name = function (t) {
      (Dr.asn1.x509.X500Name.superclass.constructor.call(this),
        (this.asn1Array = []),
        (this.paramArray = []),
        (this.sRule = "utf8"));
      var e = Dr,
        r = e.asn1,
        n = r.x509,
        i = n.RDN;
      ((this.setByString = function (t, e) {
        void 0 !== e && (this.sRule = e);
        var r = t.split("/");
        r.shift();
        for (var n = [], s = 0; s < r.length; s++)
          if (r[s].match(/^[^=]+=.+$/)) n.push(r[s]);
          else {
            var a = n.length - 1;
            n[a] = n[a] + "/" + r[s];
          }
        for (s = 0; s < n.length; s++)
          this.asn1Array.push(new i({ str: n[s], rule: this.sRule }));
      }),
        (this.setByLdapString = function (t, e) {
          void 0 !== e && (this.sRule = e);
          var r = n.X500Name.ldapToCompat(t);
          this.setByString(r, e);
        }),
        (this.setByObject = function (t, e) {
          for (var r in (void 0 !== e && (this.sRule = e), t))
            if (t.hasOwnProperty(r)) {
              var n = new i({ str: r + "=" + t[r], rule: this.sRule });
              this.asn1Array ? this.asn1Array.push(n) : (this.asn1Array = [n]);
            }
        }),
        (this.setByParam = function (t) {
          if ((void 0 !== t.rule && (this.sRule = t.rule), void 0 !== t.array))
            this.paramArray = t.array;
          else if (void 0 !== t.str) this.setByString(t.str);
          else if (void 0 !== t.ldapstr) this.setByLdapString(t.ldapstr);
          else if (void 0 !== t.hex) this.hTLV = t.hex;
          else if (void 0 !== t.certissuer) {
            var e = new Jn();
            (e.readCertPEM(t.certissuer), (this.hTLV = e.getIssuerHex()));
          } else if (void 0 !== t.certsubject) {
            e = new Jn();
            (e.readCertPEM(t.certsubject), (this.hTLV = e.getSubjectHex()));
          } else
            "object" === typeof t &&
              void 0 === t.certsubject &&
              void 0 === t.certissuer &&
              this.setByObject(t);
        }),
        (this.tohex = function () {
          if ("string" == typeof this.hTLV) return this.hTLV;
          if (0 == this.asn1Array.length && this.paramArray.length > 0)
            for (var t = 0; t < this.paramArray.length; t++) {
              var e = { array: this.paramArray[t] };
              "utf8" != this.sRule && (e.rule = this.sRule);
              var n = new i(e);
              this.asn1Array.push(n);
            }
          var s = new r.DERSequence({ array: this.asn1Array });
          return ((this.hTLV = s.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.X500Name, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.X500Name.compatToLDAP = function (t) {
      if ("/" !== t.substr(0, 1)) throw "malformed input";
      t = t.substr(1);
      var e = t.split("/");
      return (
        e.reverse(),
        (e = e.map(function (t) {
          return t.replace(/,/, "\\,");
        })),
        e.join(",")
      );
    }),
    (Dr.asn1.x509.X500Name.onelineToLDAP = function (t) {
      return Dr.asn1.x509.X500Name.compatToLDAP(t);
    }),
    (Dr.asn1.x509.X500Name.ldapToCompat = function (t) {
      for (var e = t.split(","), r = !1, n = [], i = 0; e.length > 0; i++) {
        var s = e.shift();
        if (!0 === r) {
          var a = n.pop(),
            o = (a + "," + s).replace(/\\,/g, ",");
          (n.push(o), (r = !1));
        } else n.push(s);
        "\\" === s.substr(-1, 1) && (r = !0);
      }
      return (
        (n = n.map(function (t) {
          return t.replace("/", "\\/");
        })),
        n.reverse(),
        "/" + n.join("/")
      );
    }),
    (Dr.asn1.x509.X500Name.ldapToOneline = function (t) {
      return Dr.asn1.x509.X500Name.ldapToCompat(t);
    }),
    (Dr.asn1.x509.RDN = function (t) {
      (Dr.asn1.x509.RDN.superclass.constructor.call(this),
        (this.asn1Array = []),
        (this.paramArray = []),
        (this.sRule = "utf8"));
      var e = Dr.asn1.x509.AttributeTypeAndValue;
      ((this.setByParam = function (t) {
        (void 0 !== t.rule && (this.sRule = t.rule),
          void 0 !== t.str && this.addByMultiValuedString(t.str),
          void 0 !== t.array && (this.paramArray = t.array));
      }),
        (this.addByString = function (t) {
          this.asn1Array.push(
            new Dr.asn1.x509.AttributeTypeAndValue({
              str: t,
              rule: this.sRule,
            }),
          );
        }),
        (this.addByMultiValuedString = function (t) {
          for (
            var e = Dr.asn1.x509.RDN.parseString(t), r = 0;
            r < e.length;
            r++
          )
            this.addByString(e[r]);
        }),
        (this.tohex = function () {
          if (0 == this.asn1Array.length && this.paramArray.length > 0)
            for (var t = 0; t < this.paramArray.length; t++) {
              var r = this.paramArray[t];
              void 0 !== r.rule &&
                "utf8" != this.sRule &&
                (r.rule = this.sRule);
              var n = new e(r);
              this.asn1Array.push(n);
            }
          var i = new Dr.asn1.DERSet({ array: this.asn1Array });
          return ((this.TLV = i.tohex()), this.TLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.RDN, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.RDN.parseString = function (t) {
      for (var e = t.split(/\+/), r = !1, n = [], i = 0; e.length > 0; i++) {
        var s = e.shift();
        if (!0 === r) {
          var a = n.pop(),
            o = (a + "+" + s).replace(/\\\+/g, "+");
          (n.push(o), (r = !1));
        } else n.push(s);
        "\\" === s.substr(-1, 1) && (r = !0);
      }
      var h = !1,
        u = [];
      for (i = 0; n.length > 0; i++) {
        s = n.shift();
        if (!0 === h) {
          var c = u.pop();
          if (s.match(/"$/)) {
            o = (c + "+" + s).replace(/^([^=]+)="(.*)"$/, "$1=$2");
            (u.push(o), (h = !1));
          } else u.push(c + "+" + s);
        } else u.push(s);
        s.match(/^[^=]+="/) && (h = !0);
      }
      return u;
    }),
    (Dr.asn1.x509.AttributeTypeAndValue = function (t) {
      (Dr.asn1.x509.AttributeTypeAndValue.superclass.constructor.call(this),
        (this.sRule = "utf8"),
        (this.sType = null),
        (this.sValue = null),
        (this.dsType = null));
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.DERUTF8String,
        s = r.DERPrintableString,
        a = r.DERTeletexString,
        o = r.DERIA5String,
        h = r.DERVisibleString,
        u = r.DERBMPString,
        c = e.lang.String.isMail,
        l = e.lang.String.isPrintable;
      ((this.setByParam = function (t) {
        if (
          (void 0 !== t.rule && (this.sRule = t.rule),
          void 0 !== t.ds && (this.dsType = t.ds),
          void 0 === t.value && void 0 !== t.str)
        ) {
          var e = t.str,
            r = e.match(/^([^=]+)=(.+)$/);
          if (!r)
            throw new Error(
              "malformed attrTypeAndValueStr: " + attrTypeAndValueStr,
            );
          ((this.sType = r[1]), (this.sValue = r[2]));
        } else ((this.sType = t.type), (this.sValue = t.value));
      }),
        (this.setByString = function (t, e) {
          void 0 !== e && (this.sRule = e);
          var r = t.match(/^([^=]+)=(.+)$/);
          if (!r)
            throw new Error(
              "malformed attrTypeAndValueStr: " + attrTypeAndValueStr,
            );
          this.setByAttrTypeAndValueStr(r[1], r[2]);
        }),
        (this._getDsType = function () {
          var t = this.sType,
            e = this.sValue,
            r = this.sRule;
          return "prn" === r
            ? "CN" == t && c(e)
              ? "ia5"
              : l(e)
                ? "prn"
                : "utf8"
            : "utf8" === r
              ? "CN" == t && c(e)
                ? "ia5"
                : "C" == t
                  ? "prn"
                  : "utf8"
              : "utf8";
        }),
        (this.setByAttrTypeAndValueStr = function (t, e, r) {
          (void 0 !== r && (this.sRule = r),
            (this.sType = t),
            (this.sValue = e));
        }),
        (this.getValueObj = function (t, e) {
          if ("utf8" == t) return new i({ str: e });
          if ("prn" == t) return new s({ str: e });
          if ("tel" == t) return new a({ str: e });
          if ("ia5" == t) return new o({ str: e });
          if ("vis" == t) return new h({ str: e });
          if ("bmp" == t) return new u({ str: e });
          throw new Error(
            "unsupported directory string type: type=" + t + " value=" + e,
          );
        }),
        (this.tohex = function () {
          null == this.dsType && (this.dsType = this._getDsType());
          var t = Dr.asn1.x509.OID.atype2obj(this.sType),
            e = this.getValueObj(this.dsType, this.sValue),
            r = new n({ array: [t, e] });
          return ((this.TLV = r.tohex()), this.TLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.AttributeTypeAndValue, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.SubjectPublicKeyInfo = function (t) {
      Dr.asn1.x509.SubjectPublicKeyInfo.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERInteger,
        i = r.DERBitString,
        s = r.DERObjectIdentifier,
        a = r.DERSequence,
        o = r.ASN1Util.newObject,
        h = r.x509,
        u = h.AlgorithmIdentifier,
        c = e.crypto;
      (c.ECDSA, c.DSA);
      ((this.getASN1Object = function () {
        if (null == this.asn1AlgId || null == this.asn1SubjPKey)
          throw "algId and/or subjPubKey not set";
        var t = new a({ array: [this.asn1AlgId, this.asn1SubjPKey] });
        return t;
      }),
        (this.tohex = function () {
          var t = this.getASN1Object();
          return ((this.hTLV = t.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setPubKey = function (t) {
          try {
            if (t instanceof Ue) {
              var e = o({
                  seq: [{ int: { bigint: t.n } }, { int: { int: t.e } }],
                }),
                r = e.tohex();
              ((this.asn1AlgId = new u({ name: "rsaEncryption" })),
                (this.asn1SubjPKey = new i({ hex: "00" + r })));
            }
          } catch (c) {}
          try {
            if (t instanceof Dr.crypto.ECDSA) {
              var a = new s({ name: t.curveName });
              ((this.asn1AlgId = new u({ name: "ecPublicKey", asn1params: a })),
                (this.asn1SubjPKey = new i({ hex: "00" + t.pubKeyHex })));
            }
          } catch (c) {}
          try {
            if (t instanceof Dr.crypto.DSA) {
              a = new o({
                seq: [
                  { int: { bigint: t.p } },
                  { int: { bigint: t.q } },
                  { int: { bigint: t.g } },
                ],
              });
              this.asn1AlgId = new u({ name: "dsa", asn1params: a });
              var h = new n({ bigint: t.y });
              this.asn1SubjPKey = new i({ hex: "00" + h.tohex() });
            }
          } catch (c) {}
        }),
        void 0 !== t && this.setPubKey(t));
    }),
    Un(Dr.asn1.x509.SubjectPublicKeyInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.Time = function (t) {
      Dr.asn1.x509.Time.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERUTCTime,
        i = r.DERGeneralizedTime;
      ((this.params = null),
        (this.type = null),
        (this.setTimeParams = function (t) {
          this.timeParams = t;
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.getType = function (t) {
          return t.match(/^[0-9]{12}Z$/)
            ? "utc"
            : t.match(/^[0-9]{14}Z$/)
              ? "gen"
              : t.match(/^[0-9]{12}\.[0-9]+Z$/)
                ? "utc"
                : t.match(/^[0-9]{14}\.[0-9]+Z$/)
                  ? "gen"
                  : null;
        }),
        (this.tohex = function () {
          var t = this.params,
            e = null;
          if (
            ("string" == typeof t && (t = { str: t }),
            null == t ||
              !t.str ||
              (null != t.type && void 0 != t.type) ||
              (t.type = this.getType(t.str)),
            null != t && t.str
              ? ("utc" == t.type && (e = new n(t.str)),
                "gen" == t.type && (e = new i(t.str)))
              : (e = "gen" == this.type ? new i() : new n()),
            null == e)
          )
            throw new Error("wrong setting for Time");
          return ((this.TLV = e.tohex()), this.TLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    (Dr.asn1.x509.Time_bak = function (t) {
      Dr.asn1.x509.Time_bak.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERUTCTime,
        i = r.DERGeneralizedTime;
      ((this.setTimeParams = function (t) {
        this.timeParams = t;
      }),
        (this.tohex = function () {
          var t = null;
          return (
            (t =
              null != this.timeParams
                ? "utc" == this.type
                  ? new n(this.timeParams)
                  : new i(this.timeParams)
                : "utc" == this.type
                  ? new n()
                  : new i()),
            (this.TLV = t.tohex()),
            this.TLV
          );
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.type = "utc"),
        void 0 !== t &&
          (void 0 !== t.type
            ? (this.type = t.type)
            : void 0 !== t.str &&
              (t.str.match(/^[0-9]{12}Z$/) && (this.type = "utc"),
              t.str.match(/^[0-9]{14}Z$/) && (this.type = "gen")),
          (this.timeParams = t)));
    }),
    Un(Dr.asn1.x509.Time, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.AlgorithmIdentifier = function (t) {
      (Dr.asn1.x509.AlgorithmIdentifier.superclass.constructor.call(this),
        (this.nameAlg = null),
        (this.asn1Alg = null),
        (this.asn1Params = null),
        (this.paramEmpty = !1));
      var e = Dr,
        r = e.asn1,
        n = r.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
      if (
        ((this.tohex = function () {
          if (null === this.nameAlg && null === this.asn1Alg)
            throw new Error("algorithm not specified");
          if (null !== this.nameAlg) {
            var t = null;
            for (var e in n) e === this.nameAlg && (t = n[e]);
            if (null !== t) return ((this.hTLV = t), this.hTLV);
          }
          null !== this.nameAlg &&
            null === this.asn1Alg &&
            (this.asn1Alg = r.x509.OID.name2obj(this.nameAlg));
          var i = [this.asn1Alg];
          null !== this.asn1Params && i.push(this.asn1Params);
          var s = new r.DERSequence({ array: i });
          return ((this.hTLV = s.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t &&
          (void 0 !== t.name && (this.nameAlg = t.name),
          void 0 !== t.asn1params && (this.asn1Params = t.asn1params),
          void 0 !== t.paramempty && (this.paramEmpty = t.paramempty)),
        null === this.asn1Params &&
          !1 === this.paramEmpty &&
          null !== this.nameAlg)
      ) {
        void 0 !== this.nameAlg.name && (this.nameAlg = this.nameAlg.name);
        var i = this.nameAlg.toLowerCase();
        "withdsa" !== i.substr(-7, 7) &&
          "withecdsa" !== i.substr(-9, 9) &&
          (this.asn1Params = new r.DERNull());
      }
    }),
    Un(Dr.asn1.x509.AlgorithmIdentifier, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV = {
      SHAwithRSAandMGF1: "300d06092a864886f70d01010a3000",
      SHA256withRSAandMGF1:
        "303d06092a864886f70d01010a3030a00d300b0609608648016503040201a11a301806092a864886f70d010108300b0609608648016503040201a203020120",
      SHA384withRSAandMGF1:
        "303d06092a864886f70d01010a3030a00d300b0609608648016503040202a11a301806092a864886f70d010108300b0609608648016503040202a203020130",
      SHA512withRSAandMGF1:
        "303d06092a864886f70d01010a3030a00d300b0609608648016503040203a11a301806092a864886f70d010108300b0609608648016503040203a203020140",
    }),
    (Dr.asn1.x509.GeneralName = function (t) {
      Dr.asn1.x509.GeneralName.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.x509,
        i = n.X500Name,
        s = n.OtherName,
        a = r.DERIA5String,
        o = (r.DERPrintableString, r.DEROctetString),
        h = r.DERTaggedObject,
        u = r.ASN1Object,
        c = Error;
      ((this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t,
            e,
            r = this.params,
            n = !1;
          if (void 0 !== r.other) ((t = "a0"), (e = new s(r.other)));
          else if (void 0 !== r.rfc822)
            ((t = "81"), (e = new a({ str: r.rfc822 })));
          else if (void 0 !== r.dns) ((t = "82"), (e = new a({ str: r.dns })));
          else if (void 0 !== r.dn)
            ((t = "a4"),
              (n = !0),
              (e =
                "string" === typeof r.dn
                  ? new i({ str: r.dn })
                  : r.dn instanceof Dr.asn1.x509.X500Name
                    ? r.dn
                    : new i(r.dn)));
          else if (void 0 !== r.ldapdn)
            ((t = "a4"), (n = !0), (e = new i({ ldapstr: r.ldapdn })));
          else if (void 0 !== r.certissuer || void 0 !== r.certsubj) {
            var l, f;
            ((t = "a4"), (n = !0));
            var d = null;
            if (
              (void 0 !== r.certsubj
                ? ((l = !1), (f = r.certsubj))
                : ((l = !0), (f = r.certissuer)),
              f.match(/^[0-9A-Fa-f]+$/),
              -1 != f.indexOf("-----BEGIN ") && (d = on(f)),
              null == d)
            )
              throw new Error("certsubj/certissuer not cert");
            var p,
              g = new Jn();
            ((g.hex = d),
              (p = l ? g.getIssuerHex() : g.getSubjectHex()),
              (e = new u()),
              (e.hTLV = p));
          } else if (void 0 !== r.uri)
            ((t = "86"), (e = new a({ str: r.uri })));
          else {
            if (void 0 === r.ip) throw new c("improper params");
            var v;
            t = "87";
            var m = r.ip;
            try {
              if (m.match(/^[0-9a-f]+$/)) {
                var y = m.length;
                if (8 != y && 16 != y && 32 != y && 64 != y) throw "err";
                v = m;
              } else v = An(m);
            } catch (w) {
              throw new c("malformed IP address: " + r.ip + ":" + w.message);
            }
            e = new o({ hex: v });
          }
          var b = new h({ tag: t, explicit: n, obj: e });
          return b.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.GeneralName, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.GeneralNames = function (t) {
      Dr.asn1.x509.GeneralNames.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1;
      ((this.setByParamArray = function (t) {
        for (var e = 0; e < t.length; e++) {
          var n = new r.x509.GeneralName(t[e]);
          this.asn1Array.push(n);
        }
      }),
        (this.tohex = function () {
          var t = new r.DERSequence({ array: this.asn1Array });
          return t.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.asn1Array = new Array()),
        "undefined" != typeof t && this.setByParamArray(t));
    }),
    Un(Dr.asn1.x509.GeneralNames, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.OtherName = function (t) {
      Dr.asn1.x509.OtherName.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.DERObjectIdentifier,
        i = r.DERSequence,
        s = r.ASN1Util.newObject;
      ((this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t = this.params;
          if (void 0 == t.oid || void 0 == t.value)
            throw new Error("oid or value not specified");
          var e = new n({ oid: t.oid }),
            r = s({ tag: { tag: "a0", explicit: !0, obj: t.value } }),
            a = new i({ array: [e, r] });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.x509.OtherName, Dr.asn1.ASN1Object),
    (Dr.asn1.x509.OID = new (function () {
      var t = Dr.asn1.DERObjectIdentifier;
      ((this.name2oidList = {
        sha1: "1.3.14.3.2.26",
        sha256: "2.16.840.1.101.3.4.2.1",
        sha384: "2.16.840.1.101.3.4.2.2",
        sha512: "2.16.840.1.101.3.4.2.3",
        sha224: "2.16.840.1.101.3.4.2.4",
        md5: "1.2.840.113549.2.5",
        md2: "1.3.14.7.2.2.1",
        ripemd160: "1.3.36.3.2.1",
        MD2withRSA: "1.2.840.113549.1.1.2",
        MD4withRSA: "1.2.840.113549.1.1.3",
        MD5withRSA: "1.2.840.113549.1.1.4",
        SHA1withRSA: "1.2.840.113549.1.1.5",
        "pkcs1-MGF": "1.2.840.113549.1.1.8",
        rsaPSS: "1.2.840.113549.1.1.10",
        SHA224withRSA: "1.2.840.113549.1.1.14",
        SHA256withRSA: "1.2.840.113549.1.1.11",
        SHA384withRSA: "1.2.840.113549.1.1.12",
        SHA512withRSA: "1.2.840.113549.1.1.13",
        SHA1withECDSA: "1.2.840.10045.4.1",
        SHA224withECDSA: "1.2.840.10045.4.3.1",
        SHA256withECDSA: "1.2.840.10045.4.3.2",
        SHA384withECDSA: "1.2.840.10045.4.3.3",
        SHA512withECDSA: "1.2.840.10045.4.3.4",
        dsa: "1.2.840.10040.4.1",
        SHA1withDSA: "1.2.840.10040.4.3",
        SHA224withDSA: "2.16.840.1.101.3.4.3.1",
        SHA256withDSA: "2.16.840.1.101.3.4.3.2",
        rsaEncryption: "1.2.840.113549.1.1.1",
        commonName: "2.5.4.3",
        countryName: "2.5.4.6",
        localityName: "2.5.4.7",
        stateOrProvinceName: "2.5.4.8",
        streetAddress: "2.5.4.9",
        organizationName: "2.5.4.10",
        organizationalUnitName: "2.5.4.11",
        domainComponent: "0.9.2342.19200300.100.1.25",
        userId: "0.9.2342.19200300.100.1.1",
        surname: "2.5.4.4",
        givenName: "2.5.4.42",
        title: "2.5.4.12",
        distinguishedName: "2.5.4.49",
        emailAddress: "1.2.840.113549.1.9.1",
        description: "2.5.4.13",
        businessCategory: "2.5.4.15",
        postalCode: "2.5.4.17",
        uniqueIdentifier: "2.5.4.45",
        organizationIdentifier: "2.5.4.97",
        jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
        jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
        jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
        subjectDirectoryAttributes: "2.5.29.9",
        subjectKeyIdentifier: "2.5.29.14",
        keyUsage: "2.5.29.15",
        subjectAltName: "2.5.29.17",
        issuerAltName: "2.5.29.18",
        basicConstraints: "2.5.29.19",
        cRLNumber: "2.5.29.20",
        cRLReason: "2.5.29.21",
        nameConstraints: "2.5.29.30",
        cRLDistributionPoints: "2.5.29.31",
        certificatePolicies: "2.5.29.32",
        anyPolicy: "2.5.29.32.0",
        policyMappings: "2.5.29.33",
        authorityKeyIdentifier: "2.5.29.35",
        policyConstraints: "2.5.29.36",
        extKeyUsage: "2.5.29.37",
        inhibitAnyPolicy: "2.5.29.54",
        authorityInfoAccess: "1.3.6.1.5.5.7.1.1",
        ocsp: "1.3.6.1.5.5.7.48.1",
        ocspBasic: "1.3.6.1.5.5.7.48.1.1",
        ocspNonce: "1.3.6.1.5.5.7.48.1.2",
        ocspNoCheck: "1.3.6.1.5.5.7.48.1.5",
        caIssuers: "1.3.6.1.5.5.7.48.2",
        anyExtendedKeyUsage: "2.5.29.37.0",
        serverAuth: "1.3.6.1.5.5.7.3.1",
        clientAuth: "1.3.6.1.5.5.7.3.2",
        codeSigning: "1.3.6.1.5.5.7.3.3",
        emailProtection: "1.3.6.1.5.5.7.3.4",
        timeStamping: "1.3.6.1.5.5.7.3.8",
        ocspSigning: "1.3.6.1.5.5.7.3.9",
        smtpUTF8Mailbox: "1.3.6.1.5.5.7.8.9",
        dateOfBirth: "1.3.6.1.5.5.7.9.1",
        placeOfBirth: "1.3.6.1.5.5.7.9.2",
        gender: "1.3.6.1.5.5.7.9.3",
        countryOfCitizenship: "1.3.6.1.5.5.7.9.4",
        countryOfResidence: "1.3.6.1.5.5.7.9.5",
        ecPublicKey: "1.2.840.10045.2.1",
        "P-256": "1.2.840.10045.3.1.7",
        secp256r1: "1.2.840.10045.3.1.7",
        secp256k1: "1.3.132.0.10",
        secp384r1: "1.3.132.0.34",
        secp521r1: "1.3.132.0.35",
        pkcs5PBES2: "1.2.840.113549.1.5.13",
        pkcs5PBKDF2: "1.2.840.113549.1.5.12",
        "des-EDE3-CBC": "1.2.840.113549.3.7",
        data: "1.2.840.113549.1.7.1",
        "signed-data": "1.2.840.113549.1.7.2",
        "enveloped-data": "1.2.840.113549.1.7.3",
        "digested-data": "1.2.840.113549.1.7.5",
        "encrypted-data": "1.2.840.113549.1.7.6",
        "authenticated-data": "1.2.840.113549.1.9.16.1.2",
        tstinfo: "1.2.840.113549.1.9.16.1.4",
        signingCertificate: "1.2.840.113549.1.9.16.2.12",
        timeStampToken: "1.2.840.113549.1.9.16.2.14",
        signaturePolicyIdentifier: "1.2.840.113549.1.9.16.2.15",
        etsArchiveTimeStamp: "1.2.840.113549.1.9.16.2.27",
        signingCertificateV2: "1.2.840.113549.1.9.16.2.47",
        etsArchiveTimeStampV2: "1.2.840.113549.1.9.16.2.48",
        extensionRequest: "1.2.840.113549.1.9.14",
        contentType: "1.2.840.113549.1.9.3",
        messageDigest: "1.2.840.113549.1.9.4",
        signingTime: "1.2.840.113549.1.9.5",
        counterSignature: "1.2.840.113549.1.9.6",
        archiveTimeStampV3: "0.4.0.1733.2.4",
        pdfRevocationInfoArchival: "1.2.840.113583.1.1.8",
        adobeTimeStamp: "1.2.840.113583.1.1.9.1",
        smimeMailboxLegacy: "2.23.140.1.5.1.1",
        smimeMailboxMulti: "2.23.140.1.5.1.2",
        smimeMailboxStrict: "2.23.140.1.5.1.3",
        smimeOrganizationLegacy: "2.23.140.1.5.2.1",
        smimeOrganizationMulti: "2.23.140.1.5.2.2",
        smimeOrganizationStrict: "2.23.140.1.5.2.3",
        smimeSponsorLegacy: "2.23.140.1.5.3.1",
        smimeSponsorMulti: "2.23.140.1.5.3.2",
        smimeSponsorStrict: "2.23.140.1.5.3.3",
        smimeIndividualLegacy: "2.23.140.1.5.4.1",
        smimeIndividualMulti: "2.23.140.1.5.4.2",
        smimeIndividualStrict: "2.23.140.1.5.4.3",
      }),
        (this.atype2oidList = {
          CN: "2.5.4.3",
          L: "2.5.4.7",
          ST: "2.5.4.8",
          O: "2.5.4.10",
          OU: "2.5.4.11",
          C: "2.5.4.6",
          STREET: "2.5.4.9",
          DC: "0.9.2342.19200300.100.1.25",
          UID: "0.9.2342.19200300.100.1.1",
          SN: "2.5.4.4",
          T: "2.5.4.12",
          GN: "2.5.4.42",
          DN: "2.5.4.49",
          E: "1.2.840.113549.1.9.1",
          description: "2.5.4.13",
          businessCategory: "2.5.4.15",
          postalCode: "2.5.4.17",
          serialNumber: "2.5.4.5",
          uniqueIdentifier: "2.5.4.45",
          organizationIdentifier: "2.5.4.97",
          jurisdictionOfIncorporationL: "1.3.6.1.4.1.311.60.2.1.1",
          jurisdictionOfIncorporationSP: "1.3.6.1.4.1.311.60.2.1.2",
          jurisdictionOfIncorporationC: "1.3.6.1.4.1.311.60.2.1.3",
        }),
        (this.objCache = {}),
        (this.name2obj = function (e) {
          if ("undefined" != typeof this.objCache[e]) return this.objCache[e];
          if ("undefined" == typeof this.name2oidList[e])
            throw "Name of ObjectIdentifier not defined: " + e;
          var r = this.name2oidList[e],
            n = new t({ oid: r });
          return ((this.objCache[e] = n), n);
        }),
        (this.atype2obj = function (e) {
          if (void 0 !== this.objCache[e]) return this.objCache[e];
          var r;
          if (e.match(/^\d+\.\d+\.[0-9.]+$/)) r = e;
          else if (void 0 !== this.atype2oidList[e]) r = this.atype2oidList[e];
          else {
            if (void 0 === this.name2oidList[e])
              throw new Error("AttributeType name undefined: " + e);
            r = this.name2oidList[e];
          }
          var n = new t({ oid: r });
          return ((this.objCache[e] = n), n);
        }),
        (this.registerOIDs = function (t) {
          if (this.checkOIDs(t)) for (var e in t) this.name2oidList[e] = t[e];
        }),
        (this.checkOIDs = function (t) {
          try {
            var e = Object.keys(t);
            return (
              0 != e.length &&
              (e.map(function (t, e, r) {
                var n = this[t];
                if (!n.match(/^[0-2]\.[0-9.]+$/))
                  throw new Error("value is not OID");
              }, t),
              !0)
            );
          } catch (r) {
            return !1;
          }
        }));
    })()),
    (Dr.asn1.x509.OID.oid2name = function (t) {
      var e = Dr.asn1.x509.OID.name2oidList;
      for (var r in e) if (e[r] == t) return r;
      return "";
    }),
    (Dr.asn1.x509.OID.oid2atype = function (t) {
      var e = Dr.asn1.x509.OID.atype2oidList;
      for (var r in e) if (e[r] == t) return r;
      return t;
    }),
    (Dr.asn1.x509.OID.name2oid = function (t) {
      if (t.match(/^[0-9.]+$/)) return t;
      var e = Dr.asn1.x509.OID.name2oidList;
      return void 0 === e[t] ? "" : e[t];
    }),
    (Dr.asn1.x509.X509Util = {}),
    (Dr.asn1.x509.X509Util.newCertPEM = function (t) {
      var e = Dr.asn1.x509,
        r = (e.TBSCertificate, e.Certificate),
        n = new r(t);
      return n.getPEM();
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.asn1 && Dr.asn1) || (Dr.asn1 = {}),
    ("undefined" != typeof Dr.asn1.cms && Dr.asn1.cms) || (Dr.asn1.cms = {}),
    (Dr.asn1.cms.Attribute = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.DERSet,
        a = n.DERObjectIdentifier;
      ((this.params = null),
        (this.typeOid = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.getValueArray = function () {
          throw new e("not yet implemented abstract");
        }),
        (this.tohex = function () {
          var t = new a({ oid: this.typeOid }),
            e = new s({ array: this.getValueArray() }),
            r = new i({ array: [t, e] });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }));
    }),
    Un(Dr.asn1.cms.Attribute, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.ContentType = function (t) {
      var e = Dr,
        r = e.asn1;
      (r.cms.ContentType.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.3"),
        (this.getValueArray = function () {
          var t = new r.DERObjectIdentifier(this.params.type);
          return [t];
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.ContentType, Dr.asn1.cms.Attribute),
    (Dr.asn1.cms.MessageDigest = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DEROctetString,
        i = r.cms;
      (i.MessageDigest.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.4"),
        (this.getValueArray = function () {
          var t = new n(this.params);
          return [t];
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.MessageDigest, Dr.asn1.cms.Attribute),
    (Dr.asn1.cms.SigningTime = function (t) {
      var e = Dr,
        r = e.asn1;
      (r.cms.SigningTime.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.5"),
        (this.getValueArray = function () {
          var t = new r.x509.Time(this.params);
          return [t];
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SigningTime, Dr.asn1.cms.Attribute),
    (Dr.asn1.cms.SigningCertificate = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.cms,
        a = s.ESSCertID;
      r.crypto;
      (s.SigningCertificate.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.16.2.12"),
        (this.getValueArray = function () {
          if (
            null == this.params ||
            void 0 == this.params ||
            void 0 == this.params.array
          )
            throw new e("parameter 'array' not specified");
          for (var r = this.params.array, n = [], s = 0; s < r.length; s++) {
            var o = r[s];
            (0 != t.hasis ||
              "string" != typeof o ||
              (-1 == o.indexOf("-----BEGIN") && !Br.isASN1HEX(o)) ||
              (o = { cert: o }),
              0 != o.hasis && 0 == t.hasis && (o.hasis = !1),
              n.push(new a(o)));
          }
          var h = new i({ array: n }),
            u = new i({ array: [h] });
          return [u];
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SigningCertificate, Dr.asn1.cms.Attribute),
    (Dr.asn1.cms.ESSCertID = function (t) {
      Dr.asn1.cms.ESSCertID.superclass.constructor.call(this);
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DEROctetString,
        s = n.DERSequence,
        a = n.cms.IssuerSerial;
      ((this.params = null),
        (this.getCertHash = function (t, n) {
          if (void 0 != t.hash) return t.hash;
          if (
            "string" == typeof t &&
            -1 == t.indexOf("-----BEGIN") &&
            !Br.isASN1HEX(t)
          )
            return t;
          var i, s, a;
          if ("string" == typeof t) i = t;
          else {
            if (void 0 == t.cert) throw new e("hash nor cert unspecified");
            i = t.cert;
          }
          if (
            ((s = -1 != i.indexOf("-----BEGIN") ? on(i) : i),
            "string" == typeof t &&
              (-1 != t.indexOf("-----BEGIN")
                ? (s = on(t))
                : Br.isASN1HEX(t) && (s = t)),
            void 0 != t.alg)
          )
            a = t.alg;
          else {
            if (void 0 == n) throw new e("hash alg unspecified");
            a = n;
          }
          return r.crypto.Util.hashHex(s, a);
        }),
        (this.tohex = function () {
          var t = this.params,
            e = this.getCertHash(t, "sha1"),
            r = [];
          (r.push(new i({ hex: e })),
            (("string" == typeof t && -1 != t.indexOf("-----BEGIN")) ||
              (void 0 != t.cert && 0 != t.hasis) ||
              (void 0 != t.issuer && void 0 != t.serial)) &&
              r.push(new a(t)));
          var n = new s({ array: r });
          return n.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.ESSCertID, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.SigningCertificateV2 = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = (n.x509, n.cms),
        a = s.ESSCertIDv2;
      r.crypto;
      (s.SigningCertificateV2.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.16.2.47"),
        (this.getValueArray = function () {
          if (
            null == this.params ||
            void 0 == this.params ||
            void 0 == this.params.array
          )
            throw new e("parameter 'array' not specified");
          for (var r = this.params.array, n = [], s = 0; s < r.length; s++) {
            var o = r[s];
            ((void 0 == t.alg && 0 != t.hasis) ||
              "string" != typeof o ||
              (-1 == o.indexOf("-----BEGIN") && !Br.isASN1HEX(o)) ||
              (o = { cert: o }),
              void 0 == o.alg && void 0 != t.alg && (o.alg = t.alg),
              0 != o.hasis && 0 == t.hasis && (o.hasis = !1),
              n.push(new a(o)));
          }
          var h = new i({ array: n }),
            u = new i({ array: [h] });
          return [u];
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SigningCertificateV2, Dr.asn1.cms.Attribute),
    (Dr.asn1.cms.ESSCertIDv2 = function (t) {
      Dr.asn1.cms.ESSCertIDv2.superclass.constructor.call(this);
      Error;
      var e = Dr,
        r = e.asn1,
        n = r.DEROctetString,
        i = r.DERSequence,
        s = r.cms.IssuerSerial,
        a = r.x509.AlgorithmIdentifier;
      ((this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = this.getCertHash(t, "sha256"),
            r = [];
          (void 0 != t.alg &&
            "sha256" != t.alg &&
            r.push(new a({ name: t.alg })),
            r.push(new n({ hex: e })),
            (("string" == typeof t && -1 != t.indexOf("-----BEGIN")) ||
              (void 0 != t.cert && 0 != t.hasis) ||
              (void 0 != t.issuer && void 0 != t.serial)) &&
              r.push(new s(t)));
          var o = new i({ array: r });
          return o.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.ESSCertIDv2, Dr.asn1.cms.ESSCertID),
    (Dr.asn1.cms.IssuerSerial = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERInteger,
        s = n.DERSequence,
        a = n.cms,
        o = n.x509,
        h = o.GeneralNames,
        u = Jn;
      (a.IssuerSerial.superclass.constructor.call(this),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t,
            r,
            n = this.params;
          if (
            ("string" == typeof n && -1 != n.indexOf("-----BEGIN")) ||
            void 0 != n.cert
          ) {
            var a;
            a = void 0 != n.cert ? n.cert : n;
            var o = new u();
            (o.readCertPEM(a),
              (t = o.getIssuer()),
              (r = { hex: o.getSerialNumberHex() }));
          } else {
            if (void 0 == n.issuer || !n.serial)
              throw new e("cert or issuer and serial parameter not specified");
            ((t = n.issuer), (r = n.serial));
          }
          var c = new h([{ dn: t }]),
            l = new i(r),
            f = new s({ array: [c, l] });
          return f.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.IssuerSerial, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.SignerIdentifier = function (t) {
      var e = Dr,
        r = e.asn1,
        n = (r.DERInteger, r.DERSequence, r.cms),
        i = n.IssuerAndSerialNumber,
        s = n.SubjectKeyIdentifier,
        a = r.x509;
      (a.X500Name, Error);
      (n.SignerIdentifier.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if ("isssn" == t.type) {
            var e = new i(t);
            return e.tohex();
          }
          if ("skid" == t.type) {
            var r = new s(t);
            return r.tohex();
          }
          throw new Error("wrong property for isssn or skid");
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SignerIdentifier, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.IssuerAndSerialNumber = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERInteger,
        i = r.DERSequence,
        s = r.cms,
        a = r.x509,
        o = a.X500Name,
        h = Jn,
        u = Error;
      (s.IssuerAndSerialNumber.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t,
            e,
            r = this.params;
          if (
            ("string" == typeof r && -1 != r.indexOf("-----BEGIN")) ||
            void 0 != r.cert
          ) {
            var s;
            s = void 0 != r.cert ? r.cert : r;
            var a = new h();
            (a.readCertPEM(s),
              (t = a.getIssuer()),
              (e = { hex: a.getSerialNumberHex() }));
          } else {
            if (void 0 == r.issuer || !r.serial)
              throw new u("cert or issuer and serial parameter not specified");
            ((t = r.issuer), (e = r.serial));
          }
          var c = new o(t),
            l = new n(e),
            f = new i({ array: [c, l] });
          return f.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.IssuerAndSerialNumber, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.SubjectKeyIdentifier = function (t) {
      var e = Dr,
        r = e.asn1,
        n = (r.DERInteger, r.DERSequence, r.ASN1Util.newObject),
        i = r.cms,
        s = (i.IssuerAndSerialName, i.SubjectKeyIdentifier, r.x509),
        a = (s.X500Name, Jn),
        o = Error;
      (i.SubjectKeyIdentifier.superclass.constructor.call(this),
        (this.tohex = function () {
          var t,
            e = this.params;
          if (void 0 == e.cert && void 0 == e.skid)
            throw new o("property cert nor skid undefined");
          if (void 0 != e.cert) {
            var r = new a(e.cert),
              i = r.getExtSubjectKeyIdentifier();
            t = i.kid.hex;
          } else void 0 != e.skid && (t = e.skid);
          var s = n({ tag: { tage: "a0", obj: { octstr: { hex: t } } } });
          return s.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SubjectKeyIdentifier, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.AttributeList = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSet,
        s = n.cms;
      (s.AttributeList.superclass.constructor.call(this),
        (this.params = null),
        (this.hTLV = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t = this.params;
          if (null != this.hTLV) return this.hTLV;
          var r = !0;
          void 0 != t.sortflag && (r = t.sortflag);
          for (var n = t.array, a = [], o = 0; o < n.length; o++) {
            var h = n[o],
              u = h.attr;
            if ("contentType" == u) a.push(new s.ContentType(h));
            else if ("messageDigest" == u) a.push(new s.MessageDigest(h));
            else if ("signingTime" == u) a.push(new s.SigningTime(h));
            else if ("signingCertificate" == u)
              a.push(new s.SigningCertificate(h));
            else if ("signingCertificateV2" == u)
              a.push(new s.SigningCertificateV2(h));
            else if ("signaturePolicyIdentifier" == u)
              a.push(new Dr.asn1.cades.SignaturePolicyIdentifier(h));
            else {
              if ("signatureTimeStamp" != u && "timeStampToken" != u)
                throw new e("unknown attr: " + u);
              a.push(new Dr.asn1.cades.SignatureTimeStamp(h));
            }
          }
          var c = new i({ array: a, sortflag: r });
          return ((this.hTLV = c.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.AttributeList, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.SignerInfo = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERInteger,
        s = n.DEROctetString,
        a = n.DERSequence,
        o = n.DERTaggedObject,
        h = n.cms,
        u = h.SignerIdentifier,
        c = h.AttributeList,
        l =
          (h.ContentType,
          h.EncapsulatedContentInfo,
          h.MessageDigest,
          h.SignedData,
          n.x509),
        f = l.AlgorithmIdentifier,
        d = r.crypto,
        p = Kn;
      (h.SignerInfo.superclass.constructor.call(this),
        (this.params = null),
        (this.sign = function () {
          var t = this.params,
            e = t.sigalg,
            r = new c(t.sattrs).tohex(),
            n = p.getKey(t.signkey),
            i = new d.Signature({ alg: e });
          (i.init(n), i.updateHex(r));
          var s = i.sign();
          t.sighex = s;
        }),
        (this.tohex = function () {
          var t = this.params,
            r = [];
          if (
            (r.push(new i({ int: t.version })),
            r.push(new u(t.id)),
            r.push(new f({ name: t.hashalg })),
            void 0 != t.sattrs)
          ) {
            var n = new c(t.sattrs);
            try {
              r.push(new o({ tag: "a0", explicit: !1, obj: n }));
            } catch (l) {
              throw new e("si sattr error: " + l);
            }
          }
          if (
            (void 0 != t.sigalgfield
              ? r.push(new f({ name: t.sigalgfield }))
              : r.push(new f({ name: t.sigalg })),
            void 0 == t.sighex && void 0 != t.signkey && this.sign(),
            r.push(new s({ hex: t.sighex })),
            void 0 != t.uattrs)
          ) {
            n = new c(t.uattrs);
            try {
              r.push(new o({ tag: "a1", explicit: !1, obj: n }));
            } catch (l) {
              throw new e("si uattr error: " + l);
            }
          }
          var h = new a({ array: r });
          return h.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SignerInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.EncapsulatedContentInfo = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERTaggedObject,
        i = r.DERSequence,
        s = r.DERObjectIdentifier,
        a = r.DEROctetString,
        o = r.cms;
      (o.EncapsulatedContentInfo.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          if (
            (e.push(new s(t.type)),
            void 0 != t.content &&
              (void 0 != t.content.hex || void 0 != t.content.str) &&
              1 != t.isDetached)
          ) {
            var r = new a(t.content),
              o = new n({ tag: "a0", explicit: !0, obj: r });
            e.push(o);
          }
          var h = new i({ array: e });
          return h.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.EncapsulatedContentInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.ContentInfo = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERTaggedObject,
        i = r.DERSequence,
        s = r.DERObjectIdentifier,
        a = r.x509;
      a.OID.name2obj;
      (Dr.asn1.cms.ContentInfo.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          e.push(new s(t.type));
          var r = new n({ tag: "a0", explicit: !0, obj: t.obj });
          e.push(r);
          var a = new i({ array: e });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.ContentInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.SignedData = function (t) {
      Error;
      var e = Dr,
        r = e.asn1,
        n = (r.ASN1Object, r.DERInteger),
        i = r.DERSet,
        s = r.DERSequence,
        a = (r.DERTaggedObject, r.cms),
        o = a.EncapsulatedContentInfo,
        h = a.SignerInfo,
        u = a.ContentInfo,
        c = a.CertificateSet,
        l = a.RevocationInfoChoices,
        f = r.x509,
        d = f.AlgorithmIdentifier;
      (Dr.asn1.cms.SignedData.superclass.constructor.call(this),
        (this.params = null),
        (this.checkAndFixParam = function () {
          var t = this.params;
          (this._setDigestAlgs(t),
            this._setContentTypeByEContent(t),
            this._setMessageDigestByEContent(t),
            this._setSignerInfoVersion(t),
            this._setSignedDataVersion(t));
        }),
        (this._setDigestAlgs = function (t) {
          for (var e = {}, r = t.sinfos, n = 0; n < r.length; n++) {
            var i = r[n];
            e[i.hashalg] = 1;
          }
          t.hashalgs = Object.keys(e).sort();
        }),
        (this._setContentTypeByEContent = function (t) {
          for (
            var e = t.econtent.type, r = t.sinfos, n = 0;
            n < r.length;
            n++
          ) {
            var i = r[n],
              s = this._getAttrParamByName(i, "contentType");
            s.type = e;
          }
        }),
        (this._setMessageDigestByEContent = function (t) {
          var e = t.econtent,
            r = (t.econtent.type, e.content.hex);
          void 0 == r &&
            "data" == e.type &&
            void 0 != e.content.str &&
            (r = Qr(e.content.str));
          for (var n = t.sinfos, i = 0; i < n.length; i++) {
            var s = n[i],
              a = s.hashalg,
              o = this._getAttrParamByName(s, "messageDigest"),
              h = Dr.crypto.Util.hashHex(r, a);
            o.hex = h;
          }
        }),
        (this._getAttrParamByName = function (t, e) {
          for (var r = t.sattrs.array, n = 0; n < r.length; n++)
            if (r[n].attr == e) return r[n];
        }),
        (this._setSignerInfoVersion = function (t) {
          for (var e = t.sinfos, r = 0; r < e.length; r++) {
            var n = e[r],
              i = 1;
            ("skid" == n.id.type && (i = 3), (n.version = i));
          }
        }),
        (this._setSignedDataVersion = function (t) {
          var e = this._getSignedDataVersion(t);
          t.version = e;
        }),
        (this._getSignedDataVersion = function (t) {
          if (void 0 != t.revinfos)
            for (var e = t.revinfos, r = 0; r < e.length; r++) {
              var n = e[r];
              if (void 0 != n.ocsp) return 5;
            }
          var i = t.sinfos;
          for (r = 0; r < i.length; r++) {
            var s = t.sinfos[r];
            if (3 == s.version) return 3;
          }
          return "data" != t.econtent.type ? 3 : 1;
        }),
        (this.tohex = function () {
          var t = this.params;
          (void 0 != this.getEncodedHexPrepare && this.getEncodedHexPrepare(),
            1 != t.fixed && this.checkAndFixParam());
          var e = [];
          e.push(new n({ int: t.version }));
          for (var r = [], a = 0; a < t.hashalgs.length; a++) {
            var u = t.hashalgs[a];
            r.push(new d({ name: u }));
          }
          (e.push(new i({ array: r })),
            e.push(new o(t.econtent)),
            void 0 != t.certs && e.push(new c(t.certs)),
            void 0 != t.revinfos && e.push(new l(t.revinfos)));
          var f = [];
          for (a = 0; a < t.sinfos.length; a++) {
            var p = t.sinfos[a];
            f.push(new h(p));
          }
          e.push(new i({ array: f }));
          var g = new s({ array: e });
          return g.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.getContentInfo = function () {
          var t = new u({ type: "signed-data", obj: this });
          return t;
        }),
        (this.getContentInfoEncodedHex = function () {
          return this.getContentInfo().tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.SignedData, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.CertificateSet = function (t) {
      Dr.asn1.cms.CertificateSet.superclass.constructor.call(this);
      var e = Error,
        r = Dr.asn1,
        n = r.DERTaggedObject,
        i = r.DERSet,
        s = r.ASN1Object;
      ((this.params = null),
        (this.tohex = function () {
          var t,
            r = this.params,
            a = [];
          if (r instanceof Array) t = r;
          else {
            if (void 0 == r.array) throw new e("cert array not specified");
            t = r.array;
          }
          for (var o = 0; o < t.length; o++) {
            var h = t[o],
              u = on(h),
              c = new s();
            ((c.hTLV = u), a.push(c));
          }
          var l = { array: a };
          0 == r.sortflag && (l.sortflag = !1);
          var f = new i(l),
            d = new n({ tag: "a0", explicit: !1, obj: f });
          return d.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.CertificateSet, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.RevocationInfoChoices = function (t) {
      (Dr.asn1.cms.RevocationInfoChoices.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if ((!t) instanceof Array) throw new Error("params is not array");
          for (var e = [], r = 0; r < t.length; r++)
            e.push(new Dr.asn1.cms.RevocationInfoChoice(t[r]));
          var n = Dr.asn1.ASN1Util.newObject({
            tag: { tagi: "a1", obj: { set: e } },
          });
          return n.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.RevocationInfoChoices, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.RevocationInfoChoice = function (t) {
      (Dr.asn1.cms.RevocationInfoChoice.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if (void 0 != t.crl && "string" == typeof t.crl) {
            var e = t.crl;
            return (-1 != t.crl.indexOf("-----BEGIN") && (e = on(t.crl)), e);
          }
          if (void 0 != t.ocsp) {
            var r = Dr.asn1.ASN1Util.newObject({
              tag: {
                tagi: "a1",
                obj: new Dr.asn1.cms.OtherRevocationFormat(t),
              },
            });
            return r.tohex();
          }
          throw new Error("property crl or ocsp undefined");
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.RevocationInfoChoice, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.OtherRevocationFormat = function (t) {
      Dr.asn1.cms.OtherRevocationFormat.superclass.constructor.call(this);
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.ASN1Util.newObject,
        s = r.lang.String.isHex;
      ((this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if (void 0 == t.ocsp) throw new e("property ocsp not specified");
          if (!s(t.ocsp) || !Br.isASN1HEX(t.ocsp))
            throw new e("ocsp value not ASN.1 hex string");
          var r = i({
            seq: [{ oid: "1.3.6.1.5.5.7.16.2" }, { asn1: { tlv: t.ocsp } }],
          });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cms.OtherRevocationFormat, Dr.asn1.ASN1Object),
    (Dr.asn1.cms.CMSUtil = new (function () {})()),
    (Dr.asn1.cms.CMSUtil.newSignedData = function (t) {
      return new Dr.asn1.cms.SignedData(t);
    }),
    (Dr.asn1.cms.CMSUtil.verifySignedData = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.cms,
        i =
          (n.SignerInfo,
          n.SignedData,
          n.SigningTime,
          n.SigningCertificate,
          n.SigningCertificateV2,
          r.cades),
        s = (i.SignaturePolicyIdentifier, e.lang.String.isHex),
        a = Br,
        o = a.getVbyList,
        h = a.getTLVbyList,
        u = a.getIdxbyList,
        c = a.getChildIdx,
        l = a.getTLV,
        f = a.oidname,
        d = e.crypto.Util.hashHex;
      void 0 === t.cms && s(t.cms);
      var p = t.cms,
        g = function (t, e) {
          for (var r, n = 3; n < 6; n++)
            if (((r = u(t, 0, [1, 0, n])), void 0 !== r)) {
              var i = t.substr(r, 2);
              ("a0" === i && (e.certsIdx = r),
                "a1" === i && (e.revinfosIdx = r),
                "31" === i && (e.signerinfosIdx = r));
            }
        },
        v = function (t, e) {
          var r = e.signerinfosIdx;
          if (void 0 !== r) {
            var n = c(t, r);
            e.signerInfoIdxList = n;
            for (var i = 0; i < n.length; i++) {
              var s = n[i],
                a = { idx: s };
              (m(t, a), e.signerInfos.push(a));
            }
          }
        },
        m = function (t, e) {
          var r = e.idx;
          ((e.signerid_issuer1 = h(t, r, [1, 0], "30")),
            (e.signerid_serial1 = o(t, r, [1, 1], "02")),
            (e.hashalg = f(o(t, r, [2, 0], "06"))));
          var n = u(t, r, [3], "a0");
          ((e.idxSignedAttrs = n), y(t, e, n));
          var i = c(t, r),
            s = i.length;
          if (s < 6) throw "malformed SignerInfo";
          ((e.sigalg = f(o(t, r, [s - 2, 0], "06"))),
            (e.sigval = o(t, r, [s - 1], "04")));
        },
        y = function (t, e, r) {
          var n = c(t, r);
          e.signedAttrIdxList = n;
          for (var i = 0; i < n.length; i++) {
            var s,
              a = n[i],
              h = o(t, a, [0], "06");
            "2a864886f70d010905" === h
              ? ((s = Xr(o(t, a, [1, 0]))), (e.saSigningTime = s))
              : "2a864886f70d010904" === h &&
                ((s = o(t, a, [1, 0], "04")), (e.saMessageDigest = s));
          }
        },
        b = function (t, e) {
          if ("2a864886f70d010702" !== o(t, 0, [0], "06")) return e;
          ((e.cmsType = "signedData"),
            (e.econtent = o(t, 0, [1, 0, 2, 1, 0])),
            g(t, e),
            (e.signerInfos = []),
            v(t, e));
        },
        w = function (t, e) {
          for (
            var r = e.parse.signerInfos, n = r.length, i = !0, s = 0;
            s < n;
            s++
          ) {
            var a = r[s];
            (S(t, e, a, s), a.isValid || (i = !1));
          }
          e.isValid = i;
        },
        x = function (t, e, r, n) {
          var i,
            s = e.parse.certsIdx;
          if (void 0 === e.certs) {
            ((i = []), (e.certkeys = []));
            for (var a = c(t, s), o = 0; o < a.length; o++) {
              var h = l(t, a[o]),
                u = new Jn();
              (u.readCertHex(h),
                (i[o] = u),
                (e.certkeys[o] = u.getPublicKey()));
            }
            e.certs = i;
          } else i = e.certs;
          ((e.cccc = i.length), (e.cccci = a.length));
          for (o = 0; o < i.length; o++) {
            var f = u.getIssuerHex(),
              d = u.getSerialNumberHex();
            r.signerid_issuer1 === f &&
              r.signerid_serial1 === d &&
              (r.certkey_idx = o);
          }
        },
        S = function (t, e, r, n) {
          r.verifyDetail = {};
          var i = r.verifyDetail,
            s = e.parse.econtent,
            a = r.hashalg,
            o = r.saMessageDigest;
          ((i.validMessageDigest = !1),
            d(s, a) === o && (i.validMessageDigest = !0),
            x(t, e, r, n),
            (i.validSignatureValue = !1));
          var h = r.sigalg,
            u = "31" + l(t, r.idxSignedAttrs).substr(2);
          r.signedattrshex = u;
          var c = e.certs[r.certkey_idx].getPublicKey(),
            f = new Dr.crypto.Signature({ alg: h });
          (f.init(c), f.updateHex(u));
          var p = f.verify(r.sigval);
          ((i.validSignatureValue_isValid = p),
            !0 === p && (i.validSignatureValue = !0),
            (r.isValid = !1),
            i.validMessageDigest && i.validSignatureValue && (r.isValid = !0));
        },
        A = { isValid: !1, parse: {} };
      return (b(p, A.parse), w(p, A), A);
    }),
    (Dr.asn1.cms.CMSParser = function () {
      var t = Error,
        e = Jn,
        r = new e(),
        n = Br,
        i = n.getV,
        s = n.getTLV,
        a = (n.getIdxbyList, n.getTLVbyList),
        o = n.getTLVbyListEx,
        h = n.getVbyList,
        u = n.getVbyListEx,
        c = n.getChildIdx;
      ((this.getCMSSignedData = function (t) {
        var e = a(t, 0, [1, 0]),
          r = this.getSignedData(e);
        return r;
      }),
        (this.getSignedData = function (t) {
          var e = c(t, 0),
            r = {},
            n = i(t, e[0]),
            a = parseInt(n, 16);
          r.version = a;
          var h = s(t, e[1]);
          r.hashalgs = this.getHashAlgArray(h);
          var u = s(t, e[2]);
          r.econtent = this.getEContent(u);
          var l = o(t, 0, ["[0]"]);
          null != l && (r.certs = this.getCertificateSet(l));
          o(t, 0, ["[1]"]);
          var f = o(t, 0, [3]);
          return ((r.sinfos = this.getSignerInfos(f)), r);
        }),
        (this.getHashAlgArray = function (t) {
          for (var r = c(t, 0), n = new e(), i = [], a = 0; a < r.length; a++) {
            var o = s(t, r[a]),
              h = n.getAlgorithmIdentifierName(o);
            i.push(h);
          }
          return i;
        }),
        (this.getEContent = function (t) {
          var e = {},
            r = h(t, 0, [0]),
            n = h(t, 0, [1, 0]);
          return (
            (e.type = Dr.asn1.x509.OID.oid2name(Br.hextooidstr(r))),
            (e.content = { hex: n }),
            e
          );
        }),
        (this.getSignerInfos = function (t) {
          for (var e = [], r = c(t, 0), n = 0; n < r.length; n++) {
            var i = s(t, r[n]),
              a = this.getSignerInfo(i);
            e.push(a);
          }
          return e;
        }),
        (this.getSignerInfo = function (t) {
          var e = {},
            i = c(t, 0),
            a = n.getInt(t, i[0], -1);
          -1 != a && (e.version = a);
          var h = s(t, i[1]),
            l = this.getIssuerAndSerialNumber(h);
          e.id = l;
          var f = s(t, i[2]),
            d = r.getAlgorithmIdentifierName(f);
          e.hashalg = d;
          var p = o(t, 0, ["[0]"]);
          if (null != p) {
            var g = this.getAttributeList(p);
            e.sattrs = g;
          }
          var v = o(t, 0, [3]),
            m = r.getAlgorithmIdentifierName(v);
          e.sigalg = m;
          var y = u(t, 0, [4]);
          e.sighex = y;
          var b = o(t, 0, ["[1]"]);
          if (null != b) {
            var w = this.getAttributeList(b);
            e.uattrs = w;
          }
          return e;
        }),
        (this.getSignerIdentifier = function (t) {
          if ("30" == t.substr(0, 2)) return this.getIssuerAndSerialNumber(t);
          throw new Error("SKID of signerIdentifier not supported");
        }),
        (this.getIssuerAndSerialNumber = function (t) {
          var e = { type: "isssn" },
            n = c(t, 0),
            a = s(t, n[0]);
          e.issuer = r.getX500Name(a);
          var o = i(t, n[1]);
          return ((e.serial = { hex: o }), e);
        }),
        (this.getAttributeList = function (t) {
          for (var e = [], r = c(t, 0), n = 0; n < r.length; n++) {
            var i = s(t, r[n]),
              a = this.getAttribute(i);
            e.push(a);
          }
          return { array: e };
        }),
        (this.getAttribute = function (t) {
          var e = {},
            r = c(t, 0),
            i = n.getOID(t, r[0]),
            a = Dr.asn1.x509.OID.oid2name(i);
          e.attr = a;
          var o = s(t, r[1]),
            h = c(o, 0);
          if (1 == h.length) e.valhex = s(o, h[0]);
          else {
            for (var u = [], l = 0; l < h.length; l++) u.push(s(o, h[l]));
            e.valhex = u;
          }
          return (
            "contentType" == a
              ? this.setContentType(e)
              : "messageDigest" == a
                ? this.setMessageDigest(e)
                : "signingTime" == a
                  ? this.setSigningTime(e)
                  : "signingCertificate" == a
                    ? this.setSigningCertificate(e)
                    : "signingCertificateV2" == a
                      ? this.setSigningCertificateV2(e)
                      : "signaturePolicyIdentifier" == a &&
                        this.setSignaturePolicyIdentifier(e),
            e
          );
        }),
        (this.setContentType = function (t) {
          var e = n.getOIDName(t.valhex, 0, null);
          null != e && ((t.type = e), delete t.valhex);
        }),
        (this.setSigningTime = function (t) {
          var e = i(t.valhex, 0),
            r = Xr(e);
          ((t.str = r), delete t.valhex);
        }),
        (this.setMessageDigest = function (t) {
          var e = i(t.valhex, 0);
          ((t.hex = e), delete t.valhex);
        }),
        (this.setSigningCertificate = function (t) {
          var e = c(t.valhex, 0);
          if (e.length > 0) {
            for (
              var r = s(t.valhex, e[0]), n = c(r, 0), i = [], a = 0;
              a < n.length;
              a++
            ) {
              var o = s(r, n[a]),
                h = this.getESSCertID(o);
              i.push(h);
            }
            t.array = i;
          }
          if (e.length > 1) {
            var u = s(t.valhex, e[1]);
            t.polhex = u;
          }
          delete t.valhex;
        }),
        (this.setSignaturePolicyIdentifier = function (t) {
          var r = c(t.valhex, 0);
          if (r.length > 0) {
            var a = n.getOID(t.valhex, r[0]);
            t.oid = a;
          }
          if (r.length > 1) {
            var o = new e(),
              h = c(t.valhex, r[1]),
              u = s(t.valhex, h[0]),
              l = o.getAlgorithmIdentifierName(u);
            t.alg = l;
            var f = i(t.valhex, h[1]);
            t.hash = f;
          }
          delete t.valhex;
        }),
        (this.setSigningCertificateV2 = function (t) {
          var e = c(t.valhex, 0);
          if (e.length > 0) {
            for (
              var r = s(t.valhex, e[0]), n = c(r, 0), i = [], a = 0;
              a < n.length;
              a++
            ) {
              var o = s(r, n[a]),
                h = this.getESSCertIDv2(o);
              i.push(h);
            }
            t.array = i;
          }
          if (e.length > 1) {
            var u = s(t.valhex, e[1]);
            t.polhex = u;
          }
          delete t.valhex;
        }),
        (this.getESSCertID = function (t) {
          var e = {},
            r = c(t, 0);
          if (r.length > 0) {
            var n = i(t, r[0]);
            e.hash = n;
          }
          if (r.length > 1) {
            var a = s(t, r[1]),
              o = this.getIssuerSerial(a);
            (void 0 != o.serial && (e.serial = o.serial),
              void 0 != o.issuer && (e.issuer = o.issuer));
          }
          return e;
        }),
        (this.getESSCertIDv2 = function (e) {
          var n = {},
            a = c(e, 0);
          if (a.length < 1 || 3 < a.length)
            throw new t("wrong number of elements");
          var o = 0;
          if ("30" == e.substr(a[0], 2)) {
            var h = s(e, a[0]);
            ((n.alg = r.getAlgorithmIdentifierName(h)), o++);
          } else n.alg = "sha256";
          var u = i(e, a[o]);
          if (((n.hash = u), a.length > o + 1)) {
            var l = s(e, a[o + 1]),
              f = this.getIssuerSerial(l);
            ((n.issuer = f.issuer), (n.serial = f.serial));
          }
          return n;
        }),
        (this.getIssuerSerial = function (t) {
          var e = {},
            n = c(t, 0),
            a = s(t, n[0]),
            o = r.getGeneralNames(a),
            h = o[0].dn;
          e.issuer = h;
          var u = i(t, n[1]);
          return ((e.serial = { hex: u }), e);
        }),
        (this.getCertificateSet = function (t) {
          for (var e = c(t, 0), r = [], n = 0; n < e.length; n++) {
            var i = s(t, e[n]);
            if ("30" == i.substr(0, 2)) {
              var a = an(i, "CERTIFICATE");
              r.push(a);
            }
          }
          return { array: r, sortflag: !1 };
        }));
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.asn1 && Dr.asn1) || (Dr.asn1 = {}),
    ("undefined" != typeof Dr.asn1.tsp && Dr.asn1.tsp) || (Dr.asn1.tsp = {}),
    (Dr.asn1.tsp.TimeStampToken = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.tsp;
      (n.TimeStampToken.superclass.constructor.call(this),
        (this.params = null),
        (this.getEncodedHexPrepare = function () {
          var t = new n.TSTInfo(this.params.econtent.content);
          this.params.econtent.content.hex = t.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.TimeStampToken, Dr.asn1.cms.SignedData),
    (Dr.asn1.tsp.TSTInfo = function (t) {
      Error;
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.DERInteger,
        s = r.DERBoolean,
        a = r.DERGeneralizedTime,
        o = r.DERObjectIdentifier,
        h = r.DERTaggedObject,
        u = r.tsp,
        c = u.MessageImprint,
        l = u.Accuracy,
        f = (r.x509.X500Name, r.x509.GeneralName);
      if (
        (u.TSTInfo.superclass.constructor.call(this),
        (this.dVersion = new i({ int: 1 })),
        (this.dPolicy = null),
        (this.dMessageImprint = null),
        (this.dSerial = null),
        (this.dGenTime = null),
        (this.dAccuracy = null),
        (this.dOrdering = null),
        (this.dNonce = null),
        (this.dTsa = null),
        (this.tohex = function () {
          var t = [this.dVersion];
          if (null == this.dPolicy)
            throw new Error("policy shall be specified.");
          if ((t.push(this.dPolicy), null == this.dMessageImprint))
            throw new Error("messageImprint shall be specified.");
          if ((t.push(this.dMessageImprint), null == this.dSerial))
            throw new Error("serialNumber shall be specified.");
          if ((t.push(this.dSerial), null == this.dGenTime))
            throw new Error("genTime shall be specified.");
          (t.push(this.dGenTime),
            null != this.dAccuracy && t.push(this.dAccuracy),
            null != this.dOrdering && t.push(this.dOrdering),
            null != this.dNonce && t.push(this.dNonce),
            null != this.dTsa && t.push(this.dTsa));
          var e = new n({ array: t });
          return ((this.hTLV = e.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t)
      ) {
        if ("string" == typeof t.policy) {
          if (!t.policy.match(/^[0-9.]+$/))
            throw "policy shall be oid like 0.1.4.134";
          this.dPolicy = new o({ oid: t.policy });
        }
        (void 0 !== t.messageImprint &&
          (this.dMessageImprint = new c(t.messageImprint)),
          void 0 !== t.serial && (this.dSerial = new i(t.serial)),
          void 0 !== t.genTime && (this.dGenTime = new a(t.genTime)),
          void 0 !== t.accuracy && (this.dAccuracy = new l(t.accuracy)),
          void 0 !== t.ordering &&
            1 == t.ordering &&
            (this.dOrdering = new s()),
          void 0 !== t.nonce && (this.dNonce = new i(t.nonce)),
          void 0 !== t.tsa &&
            (this.dTsa = new h({
              tag: "a0",
              explicit: !0,
              obj: new f({ dn: t.tsa }),
            })));
      }
    }),
    Un(Dr.asn1.tsp.TSTInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.Accuracy = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.ASN1Util.newObject;
      (r.tsp.Accuracy.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          return (
            void 0 != t.seconds &&
              "number" == typeof t.seconds &&
              e.push({ int: t.seconds }),
            void 0 != t.millis &&
              "number" == typeof t.millis &&
              e.push({ tag: { tagi: "80", obj: { int: t.millis } } }),
            void 0 != t.micros &&
              "number" == typeof t.micros &&
              e.push({ tag: { tagi: "81", obj: { int: t.micros } } }),
            n({ seq: e }).tohex()
          );
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.Accuracy, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.MessageImprint = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.DEROctetString,
        s = r.x509,
        a = s.AlgorithmIdentifier;
      (r.tsp.MessageImprint.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = new a({ name: t.alg }),
            r = new i({ hex: t.hash }),
            s = new n({ array: [e, r] });
          return s.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.MessageImprint, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.TimeStampReq = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.DERInteger,
        s = r.DERBoolean,
        a = (r.ASN1Object, r.DERObjectIdentifier),
        o = r.tsp,
        h = o.MessageImprint;
      (o.TimeStampReq.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          (e.push(new i({ int: 1 })),
            t.messageImprint instanceof Dr.asn1.ASN1Object
              ? e.push(t.messageImprint)
              : e.push(new h(t.messageImprint)),
            void 0 != t.policy && e.push(new a(t.policy)),
            void 0 != t.nonce && e.push(new i(t.nonce)),
            1 == t.certreq && e.push(new s()));
          var r = new n({ array: e });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.TimeStampReq, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.TimeStampResp = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = (r.ASN1Object, r.tsp),
        s = i.PKIStatusInfo;
      (i.TimeStampResp.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          if (void 0 != t.econtent || void 0 != t.tst)
            if (
              (void 0 != t.statusinfo
                ? e.push(new s(t.statusinfo))
                : e.push(new s("granted")),
              void 0 != t.econtent)
            )
              e.push(new i.TimeStampToken(t).getContentInfo());
            else {
              if (!(t.tst instanceof r.ASN1Object))
                throw new Error("improper member tst value");
              e.push(t.tst);
            }
          else {
            if (void 0 == t.statusinfo)
              throw new Error(
                "parameter for token nor statusinfo not specified",
              );
            e.push(new s(t.statusinfo));
          }
          var a = new n({ array: e });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.TimeStampResp, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.PKIStatusInfo = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.tsp,
        a = s.PKIStatus,
        o = s.PKIFreeText,
        h = s.PKIFailureInfo;
      (s.PKIStatusInfo.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            r = [];
          if ("string" == typeof t) r.push(new a(t));
          else {
            if (void 0 == t.status)
              throw new e("property 'status' unspecified");
            (r.push(new a(t.status)),
              void 0 != t.statusstr && r.push(new o(t.statusstr)),
              void 0 != t.failinfo && r.push(new h(t.failinfo)));
          }
          var n = new i({ array: r });
          return n.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.PKIStatusInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.PKIStatus = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERInteger,
        s = n.tsp;
      s.PKIStatus.superclass.constructor.call(this);
      var a = {
        granted: 0,
        grantedWithMods: 1,
        rejection: 2,
        waiting: 3,
        revocationWarning: 4,
        revocationNotification: 5,
      };
      ((this.params = null),
        (this.tohex = function () {
          var t,
            r = this.params;
          if ("string" == typeof r)
            try {
              t = a[r];
            } catch (n) {
              throw new e("undefined name: " + r);
            }
          else {
            if ("number" != typeof r) throw new e("unsupported params");
            t = r;
          }
          return new i({ int: t }).tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.PKIStatus, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.PKIFreeText = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.DERUTF8String,
        a = n.tsp;
      (a.PKIFreeText.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if ((!t) instanceof Array) throw new e("wrong params: not array");
          for (var r = [], n = 0; n < t.length; n++)
            r.push(new s({ str: t[n] }));
          var a = new i({ array: r });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.PKIFreeText, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.PKIFailureInfo = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERBitString,
        s = n.tsp,
        a = s.PKIFailureInfo,
        o = {
          badAlg: 0,
          badRequest: 2,
          badDataFormat: 5,
          timeNotAvailable: 14,
          unacceptedPolicy: 15,
          unacceptedExtension: 16,
          addInfoNotAvailable: 17,
          systemFailure: 25,
        };
      (a.superclass.constructor.call(this),
        (this.params = null),
        (this.getBinValue = function () {
          var t = this.params,
            r = 0;
          if ("number" == typeof t && 0 <= t && t <= 25) {
            r |= 1 << t;
            for (var n = r.toString(2), i = "", s = n.length - 1; s >= 0; s--)
              i += n[s];
            return i;
          }
          if ("string" == typeof t && void 0 != o[t]) return Hn([t], o);
          if ("object" == typeof t && void 0 != t.length) return Hn(t, o);
          throw new e("wrong params");
        }),
        (this.tohex = function () {
          this.params;
          var t = this.getBinValue();
          return new i({ bin: t }).tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.tsp.PKIFailureInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.tsp.AbstractTSAAdapter = function (t) {
      this.getTSTHex = function (t, e) {
        throw "not implemented yet";
      };
    }),
    (Dr.asn1.tsp.SimpleTSAAdapter = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.tsp,
        i = e.crypto.Util.hashHex;
      (n.SimpleTSAAdapter.superclass.constructor.call(this),
        (this.params = null),
        (this.serial = 0),
        (this.getTSTHex = function (t, e) {
          var r = i(t, e);
          ((this.params.econtent.content.messageImprint = { alg: e, hash: r }),
            (this.params.econtent.content.serial = { int: this.serial++ }));
          var s = Math.floor(1e9 * Math.random());
          this.params.econtent.content.nonce = { int: s };
          var a = new n.TimeStampToken(this.params);
          return a.getContentInfoEncodedHex();
        }),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.tsp.SimpleTSAAdapter, Dr.asn1.tsp.AbstractTSAAdapter),
    (Dr.asn1.tsp.FixedTSAAdapter = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.tsp,
        i = e.crypto.Util.hashHex;
      (n.FixedTSAAdapter.superclass.constructor.call(this),
        (this.params = null),
        (this.getTSTHex = function (t, e) {
          var r = i(t, e);
          this.params.econtent.content.messageImprint = { alg: e, hash: r };
          var s = new n.TimeStampToken(this.params);
          return s.getContentInfoEncodedHex();
        }),
        void 0 !== t && (this.params = t));
    }),
    Un(Dr.asn1.tsp.FixedTSAAdapter, Dr.asn1.tsp.AbstractTSAAdapter),
    (Dr.asn1.tsp.TSPUtil = new (function () {})()),
    (Dr.asn1.tsp.TSPUtil.newTimeStampToken = function (t) {
      return new Dr.asn1.tsp.TimeStampToken(t);
    }),
    (Dr.asn1.tsp.TSPUtil.parseTimeStampReq = function (t) {
      var e = new Dr.asn1.tsp.TSPParser();
      return e.getTimeStampReq(t);
    }),
    (Dr.asn1.tsp.TSPUtil.parseMessageImprint = function (t) {
      var e = new Dr.asn1.tsp.TSPParser();
      return e.getMessageImprint(t);
    }),
    (Dr.asn1.tsp.TSPParser = function () {
      Error;
      var t = Jn,
        e = new t(),
        r = Br,
        n = r.getV,
        i = r.getTLV,
        s = r.getIdxbyList,
        a = (r.getTLVbyListEx, r.getChildIdx),
        o = [
          "granted",
          "grantedWithMods",
          "rejection",
          "waiting",
          "revocationWarning",
          "revocationNotification",
        ],
        h = {
          0: "badAlg",
          2: "badRequest",
          5: "badDataFormat",
          14: "timeNotAvailable",
          15: "unacceptedPolicy",
          16: "unacceptedExtension",
          17: "addInfoNotAvailable",
          25: "systemFailure",
        };
      ((this.getResponse = function (t) {
        var e = a(t, 0);
        if (1 == e.length) return this.getPKIStatusInfo(i(t, e[0]));
        if (e.length > 1) {
          var r = this.getPKIStatusInfo(i(t, e[0])),
            n = i(t, e[1]),
            s = this.getToken(n);
          return ((s.statusinfo = r), s);
        }
      }),
        (this.getToken = function (t) {
          var e = new Dr.asn1.cms.CMSParser(),
            r = e.getCMSSignedData(t);
          return (this.setTSTInfo(r), r);
        }),
        (this.setTSTInfo = function (t) {
          var e = t.econtent;
          if ("tstinfo" == e.type) {
            var r = e.content.hex,
              n = this.getTSTInfo(r);
            e.content = n;
          }
        }),
        (this.getTSTInfo = function (t) {
          var r = {},
            s = a(t, 0),
            o = n(t, s[1]);
          r.policy = Tn(o);
          var h = i(t, s[2]);
          r.messageImprint = this.getMessageImprint(h);
          var u = n(t, s[3]);
          r.serial = { hex: u };
          var c = n(t, s[4]);
          r.genTime = { str: Xr(c) };
          var l = 0;
          if (s.length > 5 && "30" == t.substr(s[5], 2)) {
            var f = i(t, s[5]);
            ((r.accuracy = this.getAccuracy(f)), l++);
          }
          if (s.length > 5 + l && "01" == t.substr(s[5 + l], 2)) {
            var d = n(t, s[5 + l]);
            ("ff" == d && (r.ordering = !0), l++);
          }
          if (s.length > 5 + l && "02" == t.substr(s[5 + l], 2)) {
            var p = n(t, s[5 + l]);
            ((r.nonce = { hex: p }), l++);
          }
          if (s.length > 5 + l && "a0" == t.substr(s[5 + l], 2)) {
            var g = i(t, s[5 + l]);
            ((g = "30" + g.substr(2)), (pGeneralNames = e.getGeneralNames(g)));
            var v = pGeneralNames[0].dn;
            ((r.tsa = v), l++);
          }
          if (s.length > 5 + l && "a1" == t.substr(s[5 + l], 2)) {
            var m = i(t, s[5 + l]);
            m = "30" + m.substr(2);
            var y = e.getExtParamArray(m);
            ((r.ext = y), l++);
          }
          return r;
        }),
        (this.getAccuracy = function (t) {
          for (var e = {}, r = a(t, 0), i = 0; i < r.length; i++) {
            var s = t.substr(r[i], 2),
              o = n(t, r[i]),
              h = parseInt(o, 16);
            "02" == s
              ? (e.seconds = h)
              : "80" == s
                ? (e.millis = h)
                : "81" == s && (e.micros = h);
          }
          return e;
        }),
        (this.getMessageImprint = function (t) {
          if ("30" != t.substr(0, 2))
            throw new Error("head of messageImprint hex shall be x30");
          var e = {},
            i = (a(t, 0), s(t, 0, [0, 0])),
            o = n(t, i),
            h = r.hextooidstr(o),
            u = Dr.asn1.x509.OID.oid2name(h);
          if ("" == u) throw new Error("hashAlg name undefined: " + h);
          var c = u,
            l = s(t, 0, [1]);
          return ((e.alg = c), (e.hash = n(t, l)), e);
        }),
        (this.getPKIStatusInfo = function (t) {
          var e = {},
            r = a(t, 0),
            s = 0;
          try {
            var h = n(t, r[0]),
              u = parseInt(h, 16);
            e.status = o[u];
          } catch (f) {}
          if (r.length > 1 && "30" == t.substr(r[1], 2)) {
            var c = i(t, r[1]);
            ((e.statusstr = this.getPKIFreeText(c)), s++);
          }
          if (r.length > s && "03" == t.substr(r[1 + s], 2)) {
            var l = i(t, r[1 + s]);
            e.failinfo = this.getPKIFailureInfo(l);
          }
          return e;
        }),
        (this.getPKIFreeText = function (t) {
          for (var e = [], n = a(t, 0), i = 0; i < n.length; i++)
            e.push(r.getString(t, n[i]));
          return e;
        }),
        (this.getPKIFailureInfo = function (t) {
          var e = r.getInt(t, 0);
          return void 0 != h[e] ? h[e] : e;
        }),
        (this.getTimeStampReq = function (t) {
          var e = { certreq: !1 },
            s = a(t, 0);
          if (s.length < 2)
            throw new Error("TimeStampReq must have at least 2 items");
          var o = i(t, s[1]);
          e.messageImprint = Dr.asn1.tsp.TSPUtil.parseMessageImprint(o);
          for (var h = 2; h < s.length; h++) {
            var u = s[h],
              c = t.substr(u, 2);
            if ("06" == c) {
              var l = n(t, u);
              e.policy = r.hextooidstr(l);
            }
            ("02" == c && (e.nonce = n(t, u)), "01" == c && (e.certreq = !0));
          }
          return e;
        }));
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.asn1 && Dr.asn1) || (Dr.asn1 = {}),
    ("undefined" != typeof Dr.asn1.cades && Dr.asn1.cades) ||
      (Dr.asn1.cades = {}),
    (Dr.asn1.cades.SignaturePolicyIdentifier = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.cades,
        i = n.SignaturePolicyId;
      (n.SignaturePolicyIdentifier.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.16.2.15"),
        (this.params = null),
        (this.getValueArray = function () {
          return [new i(this.params)];
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.SignaturePolicyIdentifier, Dr.asn1.cms.Attribute),
    (Dr.asn1.cades.SignaturePolicyId = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.DERObjectIdentifier,
        s = r.x509,
        a = (s.AlgorithmIdentifier, r.cades),
        o = a.SignaturePolicyId,
        h = a.OtherHashAlgAndValue;
      (o.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          (e.push(new i(t.oid)), e.push(new h(t)));
          var r = new n({ array: e });
          return r.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.SignaturePolicyId, Dr.asn1.ASN1Object),
    (Dr.asn1.cades.OtherHashAlgAndValue = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.DEROctetString,
        a = n.x509,
        o = a.AlgorithmIdentifier,
        h = n.cades,
        u = h.OtherHashAlgAndValue;
      (u.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if (void 0 == t.alg) throw new e("property 'alg' not specified");
          if (void 0 == t.hash && void 0 == t.cert)
            throw new e("property 'hash' nor 'cert' not specified");
          var r = null;
          if (void 0 != t.hash) r = t.hash;
          else if (void 0 != t.cert) {
            if ("string" != typeof t.cert) throw new e("cert not string");
            var n = t.cert;
            (-1 != t.cert.indexOf("-----BEGIN") && (n = on(t.cert)),
              (r = Dr.crypto.Util.hashHex(n, t.alg)));
          }
          var a = [];
          (a.push(new o({ name: t.alg })), a.push(new s({ hex: r })));
          var h = new i({ array: a });
          return h.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.OtherHashAlgAndValue, Dr.asn1.ASN1Object),
    (Dr.asn1.cades.OtherHashValue = function (t) {
      Dr.asn1.cades.OtherHashValue.superclass.constructor.call(this);
      var e = Error,
        r = Dr,
        n = (r.lang.String.isHex, r.asn1),
        i = n.DEROctetString;
      r.crypto.Util.hashHex;
      ((this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if (void 0 == t.hash && void 0 == t.cert)
            throw new e("hash or cert not specified");
          var r = null;
          if (void 0 != t.hash) r = t.hash;
          else if (void 0 != t.cert) {
            if ("string" != typeof t.cert) throw new e("cert not string");
            var n = t.cert;
            (-1 != t.cert.indexOf("-----BEGIN") && (n = on(t.cert)),
              (r = Dr.crypto.Util.hashHex(n, "sha1")));
          }
          return new i({ hex: r }).tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.OtherHashValue, Dr.asn1.ASN1Object),
    (Dr.asn1.cades.SignatureTimeStamp = function (t) {
      var e = Error,
        r = Dr,
        n = r.lang.String.isHex,
        i = r.asn1,
        s = i.ASN1Object,
        a = (i.x509, i.cades);
      (a.SignatureTimeStamp.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.16.2.14"),
        (this.params = null),
        (this.getValueArray = function () {
          var t = this.params;
          if (void 0 != t.tst) {
            if (n(t.tst)) {
              var r = new s();
              return ((r.hTLV = t.tst), [r]);
            }
            if (t.tst instanceof s) return [t.tst];
            throw new e("params.tst has wrong value");
          }
          if (void 0 != t.res) {
            var i = t.res;
            if (
              (i instanceof s && (i = i.tohex()), "string" != typeof i || !n(i))
            )
              throw new e("params.res has wrong value");
            (Br.getTLVbyList(i, 0, [1]), (r = new s()));
            return ((r.hTLV = t.tst), [r]);
          }
        }),
        null != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.SignatureTimeStamp, Dr.asn1.cms.Attribute),
    (Dr.asn1.cades.CompleteCertificateRefs = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.cades,
        a = s.OtherCertID,
        o = r.lang.String.isHex;
      (s.CompleteCertificateRefs.superclass.constructor.call(this),
        (this.typeOid = "1.2.840.113549.1.9.16.2.21"),
        (this.params = null),
        (this.getValueArray = function () {
          for (var t = this.params, r = [], n = 0; n < t.array.length; n++) {
            var s = t.array[n];
            if ("string" == typeof s)
              if (-1 != s.indexOf("-----BEGIN")) s = { cert: s };
              else {
                if (!o(s)) throw new e("unsupported value: " + s);
                s = { hash: s };
              }
            (void 0 != t.alg && void 0 == s.alg && (s.alg = t.alg),
              void 0 != t.hasis && void 0 == s.hasis && (s.hasis = t.hasis));
            var h = new a(s);
            r.push(h);
          }
          var u = new i({ array: r });
          return [u];
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.CompleteCertificateRefs, Dr.asn1.cms.Attribute),
    (Dr.asn1.cades.OtherCertID = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.cms,
        s = i.IssuerSerial,
        a = r.cades,
        o = a.OtherHashValue,
        h = a.OtherHashAlgAndValue;
      (a.OtherCertID.superclass.constructor.call(this),
        (this.params = t),
        (this.tohex = function () {
          var t = this.params;
          "string" == typeof t &&
            (-1 != t.indexOf("-----BEGIN")
              ? (t = { cert: t })
              : _isHex(t) && (t = { hash: t }));
          var e = [],
            r = null;
          if (
            ((r = void 0 != t.alg ? new h(t) : new o(t)),
            e.push(r),
            (void 0 != t.cert && 1 == t.hasis) ||
              (void 0 != t.issuer && void 0 != t.serial))
          ) {
            var i = new s(t);
            e.push(i);
          }
          var a = new n({ array: e });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.OtherCertID, Dr.asn1.ASN1Object),
    (Dr.asn1.cades.OtherHash = function (t) {
      Error;
      var e = Dr,
        r = e.asn1,
        n = (r.cms, r.cades),
        i = n.OtherHashAlgAndValue,
        s = n.OtherHashValue,
        a = (e.crypto.Util.hashHex, e.lang.String.isHex);
      (n.OtherHash.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          "string" == typeof t &&
            (-1 != t.indexOf("-----BEGIN")
              ? (t = { cert: t })
              : a(t) && (t = { hash: t }));
          var e = null;
          return ((e = void 0 != t.alg ? new i(t) : new s(t)), e.tohex());
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.cades.OtherHash, Dr.asn1.ASN1Object),
    (Dr.asn1.cades.CAdESUtil = new (function () {})()),
    (Dr.asn1.cades.CAdESUtil.parseSignedDataForAddingUnsigned = function (t) {
      var e = new Dr.asn1.cms.CMSParser(),
        r = e.getCMSSignedData(t);
      return r;
    }),
    (Dr.asn1.cades.CAdESUtil.parseSignerInfoForAddingUnsigned = function (
      t,
      e,
      r,
    ) {
      var n = Br,
        i = n.getChildIdx,
        s = n.getTLV,
        a = n.getV,
        o = Dr,
        h = o.asn1,
        u = h.ASN1Object,
        c = h.cms,
        l = c.AttributeList,
        f = c.SignerInfo,
        d = {},
        p = i(t, e);
      if (6 != p.length) throw "not supported items for SignerInfo (!=6)";
      var g = p.shift();
      d.version = s(t, g);
      var v = p.shift();
      d.si = s(t, v);
      var m = p.shift();
      d.digalg = s(t, m);
      var y = p.shift();
      d.sattrs = s(t, y);
      var b = p.shift();
      d.sigalg = s(t, b);
      var w = p.shift();
      ((d.sig = s(t, w)), (d.sigval = a(t, w)));
      var x = null;
      return (
        (d.obj = new f()),
        (x = new u()),
        (x.hTLV = d.version),
        (d.obj.dCMSVersion = x),
        (x = new u()),
        (x.hTLV = d.si),
        (d.obj.dSignerIdentifier = x),
        (x = new u()),
        (x.hTLV = d.digalg),
        (d.obj.dDigestAlgorithm = x),
        (x = new u()),
        (x.hTLV = d.sattrs),
        (d.obj.dSignedAttrs = x),
        (x = new u()),
        (x.hTLV = d.sigalg),
        (d.obj.dSigAlg = x),
        (x = new u()),
        (x.hTLV = d.sig),
        (d.obj.dSig = x),
        (d.obj.dUnsignedAttrs = new l()),
        d
      );
    }),
    ("undefined" != typeof Dr.asn1.csr && Dr.asn1.csr) || (Dr.asn1.csr = {}),
    (Dr.asn1.csr.CertificationRequest = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERBitString,
        i = r.DERSequence,
        s = r.csr,
        a = (r.x509, s.CertificationRequestInfo);
      (s.CertificationRequest.superclass.constructor.call(this),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.sign = function () {
          var t = new a(this.params).tohex(),
            e = new Dr.crypto.Signature({ alg: this.params.sigalg });
          (e.init(this.params.sbjprvkey), e.updateHex(t));
          var r = e.sign();
          this.params.sighex = r;
        }),
        (this.getPEM = function () {
          return an(this.tohex(), "CERTIFICATE REQUEST");
        }),
        (this.tohex = function () {
          var t = this.params,
            e = new Dr.asn1.csr.CertificationRequestInfo(this.params),
            r = new Dr.asn1.x509.AlgorithmIdentifier({ name: t.sigalg });
          if (
            (void 0 == t.sighex && void 0 != t.sbjprvkey && this.sign(),
            void 0 == t.sighex)
          )
            throw new Error("sighex or sbjprvkey parameter not defined");
          var s = new n({ hex: "00" + t.sighex }),
            a = new i({ array: [e, r, s] });
          return a.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.csr.CertificationRequest, Dr.asn1.ASN1Object),
    (Dr.asn1.csr.CertificationRequestInfo = function (t) {
      var e = Dr,
        r = e.asn1,
        n = (r.DERBitString, r.DERSequence),
        i = r.DERInteger,
        s = r.DERUTF8String,
        a = r.DERTaggedObject,
        o = r.ASN1Util.newObject,
        h = r.csr,
        u = r.x509,
        c = u.X500Name,
        l = u.Extensions,
        f = u.SubjectPublicKeyInfo;
      h.AttributeList;
      function d(t) {
        for (
          var e = Error, r = Dr.asn1.x509.Extensions, n = [], i = 0;
          i < t.length;
          i++
        ) {
          var s = t[i],
            a = s.attr;
          if ("extensionRequest" == a) {
            var o = new r(s.ext),
              h = { seq: [{ oid: "1.2.840.113549.1.9.14" }, { set: [o] }] };
            n.push(h);
          } else if ("unstructuredName" == a) {
            h = { seq: [{ oid: "1.2.840.113549.1.9.2" }, { set: s.names }] };
            n.push(h);
          } else {
            if ("challengePassword" != a) throw new e("unknown CSR attribute");
            h = {
              seq: [
                { oid: "1.2.840.113549.1.9.7" },
                { set: [{ utf8str: s.password }] },
              ],
            };
            n.push(h);
          }
        }
        return { set: n };
      }
      (h.CertificationRequestInfo.superclass.constructor.call(this),
        (this.params = null),
        (this.setByParam = function (t) {
          void 0 != t && (this.params = t);
        }),
        (this.tohex = function () {
          var t = this.params,
            e = [];
          if (
            (e.push(new i({ int: 0 })),
            e.push(new c(t.subject)),
            e.push(new f(Kn.getKey(t.sbjpubkey))),
            void 0 != t.attrs)
          ) {
            var r = d(t.attrs),
              h = o({ tag: { tage: "a0", obj: r } });
            e.push(h);
          } else if (void 0 != t.extreq) {
            var u = new l(t.extreq);
            h = o({
              tag: {
                tage: "a0",
                obj: { seq: [{ oid: "1.2.840.113549.1.9.14" }, { set: [u] }] },
              },
            });
            e.push(h);
          } else
            e.push(new a({ tag: "a0", explicit: !1, obj: new s({ str: "" }) }));
          var p = new n({ array: e });
          return p.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 != t && this.setByParam(t));
    }),
    Un(Dr.asn1.csr.CertificationRequestInfo, Dr.asn1.ASN1Object),
    (Dr.asn1.csr.AttributeList = function (t) {}),
    Un(Dr.asn1.csr.AttributeList, Dr.asn1.ASN1Object),
    (Dr.asn1.csr.CSRUtil = new (function () {})()),
    (Dr.asn1.csr.CSRUtil.newCSRPEM = function (t) {
      var e = Dr.asn1.csr,
        r = new e.CertificationRequest(t),
        n = r.getPEM();
      return n;
    }),
    (Dr.asn1.csr.CSRUtil.getParam = function (t, e) {
      var r = Br,
        n = r.getV,
        i = r.getIdxbyList,
        s = r.getTLVbyList,
        a = r.getTLVbyListEx,
        o = r.getVbyListEx,
        h = function (t) {
          var e = i(t, 0, [0, 3, 0, 0], "06");
          return "2a864886f70d01090e" != n(t, e)
            ? null
            : s(t, 0, [0, 3, 0, 1, 0], "30");
        },
        u = {};
      if (-1 == t.indexOf("-----BEGIN CERTIFICATE REQUEST"))
        throw new Error("argument is not PEM file");
      var c = on(t, "CERTIFICATE REQUEST");
      e && (u.tbs = s(c, 0, [0]));
      try {
        var l = a(c, 0, [0, 1]);
        if ("3000" == l) u.subject = {};
        else {
          var f = new Jn();
          u.subject = f.getX500Name(l);
        }
      } catch (y) {}
      var d = a(c, 0, [0, 2]),
        p = Kn.getKey(d, null, "pkcs8pub");
      u.sbjpubkey = Kn.getPEM(p, "PKCS8PUB");
      var g = h(c);
      f = new Jn();
      null != g && (u.extreq = f.getExtParamArray(g));
      try {
        var v = a(c, 0, [1], "30");
        f = new Jn();
        u.sigalg = f.getAlgorithmIdentifierName(v);
      } catch (y) {}
      try {
        var m = o(c, 0, [2]);
        u.sighex = m;
      } catch (y) {}
      return u;
    }),
    (Dr.asn1.csr.CSRUtil.verifySignature = function (t) {
      try {
        var e = null;
        if (
          ("string" == typeof t &&
          -1 != t.indexOf("-----BEGIN CERTIFICATE REQUEST")
            ? (e = Dr.asn1.csr.CSRUtil.getParam(t, !0))
            : "object" == typeof t &&
              void 0 != t.sbjpubkey &&
              void 0 != t.sigalg &&
              void 0 != t.sighex &&
              void 0 != t.tbs &&
              (e = t),
          null == e)
        )
          return !1;
        var r = new Dr.crypto.Signature({ alg: e.sigalg });
        return (r.init(e.sbjpubkey), r.updateHex(e.tbs), r.verify(e.sighex));
      } catch (n) {
        return (alert(n), !1);
      }
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.asn1 && Dr.asn1) || (Dr.asn1 = {}),
    ("undefined" != typeof Dr.asn1.ocsp && Dr.asn1.ocsp) || (Dr.asn1.ocsp = {}),
    (Dr.asn1.ocsp.DEFAULT_HASH = "sha1"),
    (Dr.asn1.ocsp.OCSPResponse = function (t) {
      Dr.asn1.ocsp.OCSPResponse.superclass.constructor.call(this);
      Dr.asn1.DEREnumerated;
      var e = Dr.asn1.ASN1Util.newObject,
        r = Dr.asn1.ocsp.ResponseBytes,
        n = [
          "successful",
          "malformedRequest",
          "internalError",
          "tryLater",
          "_not_used_",
          "sigRequired",
          "unauthorized",
        ];
      ((this.params = null),
        (this._getStatusCode = function () {
          var t = this.params.resstatus;
          return "number" == typeof t
            ? t
            : "string" != typeof t
              ? -1
              : n.indexOf(t);
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t = this.params,
            n = this._getStatusCode();
          if (-1 == n)
            throw new Error("responseStatus not supported: " + t.resstatus);
          if (0 != n) return e({ seq: [{ enum: { int: n } }] }).tohex();
          var i = new r(t);
          return e({
            seq: [
              { enum: { int: 0 } },
              { tag: { tag: "a0", explicit: !0, obj: i } },
            ],
          }).tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.OCSPResponse, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.ResponseBytes = function (t) {
      Dr.asn1.ocsp.ResponseBytes.superclass.constructor.call(this);
      var e = Dr.asn1,
        r = e.DERSequence,
        n = e.DERObjectIdentifier,
        i = e.DEROctetString,
        s = e.ocsp.BasicOCSPResponse;
      ((this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.tohex = function () {
          var t = this.params;
          if ("ocspBasic" != t.restype)
            throw new Error("not supported responseType: " + t.restype);
          var e = new s(t),
            a = [];
          (a.push(new n({ name: "ocspBasic" })),
            a.push(new i({ hex: e.tohex() })));
          var o = new r({ array: a });
          return o.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.ResponseBytes, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.BasicOCSPResponse = function (t) {
      Dr.asn1.ocsp.BasicOCSPResponse.superclass.constructor.call(this);
      var e = Error,
        r = Dr.asn1,
        n = r.ASN1Object,
        i = r.DERSequence,
        s = (r.DERGeneralizedTime, r.DERTaggedObject),
        a = r.DERBitString,
        o = (r.x509.Extensions, r.x509.AlgorithmIdentifier),
        h = r.ocsp;
      h.ResponderID;
      ((_SingleResponseList = h.SingleResponseList),
        (_ResponseData = h.ResponseData),
        (this.params = null),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        (this.sign = function () {
          var t = this.params,
            e = t.tbsresp.tohex(),
            r = new Dr.crypto.Signature({ alg: t.sigalg });
          (r.init(t.reskey), r.updateHex(e), (t.sighex = r.sign()));
        }),
        (this.tohex = function () {
          var t = this.params;
          (void 0 == t.tbsresp && (t.tbsresp = new _ResponseData(t)),
            void 0 == t.sighex && void 0 != t.reskey && this.sign());
          var r = [];
          if (
            (r.push(t.tbsresp),
            r.push(new o({ name: t.sigalg })),
            r.push(new a({ hex: "00" + t.sighex })),
            void 0 != t.certs && void 0 != t.certs.length)
          ) {
            for (var h = [], u = 0; u < t.certs.length; u++) {
              var c = t.certs[u],
                l = null;
              if (Br.isASN1HEX(c)) l = c;
              else {
                if (!c.match(/-----BEGIN/))
                  throw new e("certs[" + u + "] not hex or PEM");
                l = on(c);
              }
              h.push(new n({ tlv: l }));
            }
            var f = new i({ array: h });
            r.push(new s({ tag: "a0", explicit: !0, obj: f }));
          }
          var d = new i({ array: r });
          return d.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.BasicOCSPResponse, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.ResponseData = function (t) {
      Dr.asn1.ocsp.ResponseData.superclass.constructor.call(this);
      var e = Error,
        r = Dr.asn1,
        n = r.DERSequence,
        i = r.DERGeneralizedTime,
        s = r.DERTaggedObject,
        a = r.x509.Extensions,
        o = r.ocsp,
        h = o.ResponderID;
      ((_SingleResponseList = o.SingleResponseList),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          (void 0 != t.respid && new e("respid not specified"),
            void 0 != t.prodat && new e("prodat not specified"),
            void 0 != t.array && new e("array not specified"));
          var r = [];
          if (
            (r.push(new h(t.respid)),
            r.push(new i(t.prodat)),
            r.push(new _SingleResponseList(t.array)),
            void 0 != t.ext)
          ) {
            var o = new a(t.ext);
            r.push(new s({ tag: "a1", explicit: !0, obj: o }));
          }
          var u = new n({ array: r });
          return u.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.ResponseData, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.ResponderID = function (t) {
      Dr.asn1.ocsp.ResponderID.superclass.constructor.call(this);
      var e = Dr,
        r = e.asn1,
        n = r.ASN1Util.newObject,
        i = r.x509.X500Name,
        s = e.lang.String.isHex,
        a = Error;
      ((this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if (void 0 != t.key) {
            var e = null;
            if ("string" == typeof t.key) {
              if (
                (s(t.key) && (e = t.key), t.key.match(/-----BEGIN CERTIFICATE/))
              ) {
                var r = new Jn(t.key),
                  o = r.getExtSubjectKeyIdentifier();
                null != o && (e = o.kid.hex);
              }
            } else if (t.key instanceof Jn) {
              o = t.key.getExtSubjectKeyIdentifier();
              null != o && (e = o.kid.hex);
            }
            if (null == e) throw new a("wrong key member value");
            var h = n({
              tag: { tag: "a2", explicit: !0, obj: { octstr: { hex: e } } },
            });
            return h.tohex();
          }
          if (void 0 != t.name) {
            var u = null;
            if (
              "string" == typeof t.name &&
              t.name.match(/-----BEGIN CERTIFICATE/)
            ) {
              r = new Jn(t.name);
              u = r.getSubject();
            } else
              t.name instanceof Jn
                ? (u = t.name.getSubject())
                : "object" != typeof t.name ||
                  (void 0 == t.name.array && void 0 == t.name.str) ||
                  (u = t.name);
            if (null == u) throw new a("wrong name member value");
            h = n({ tag: { tag: "a1", explicit: !0, obj: new i(u) } });
            return h.tohex();
          }
          throw new a("key or name not specified");
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.ResponderID, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.SingleResponseList = function (t) {
      Dr.asn1.ocsp.SingleResponseList.superclass.constructor.call(this);
      var e = Dr.asn1,
        r = e.DERSequence,
        n = e.ocsp.SingleResponse;
      ((this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if ("object" != typeof t || void 0 == t.length)
            throw new Error("params not specified properly");
          for (var e = [], i = 0; i < t.length; i++) e.push(new n(t[i]));
          var s = new r({ array: e });
          return s.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.SingleResponseList, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.SingleResponse = function (t) {
      var e = Error,
        r = Dr,
        n = r.asn1,
        i = n.DERSequence,
        s = n.DERGeneralizedTime,
        a = n.DERTaggedObject,
        o = n.ocsp,
        h = o.CertID,
        u = o.CertStatus,
        c = n.x509,
        l = c.Extensions;
      (o.SingleResponse.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params,
            r = [];
          if (void 0 == t.certid) throw new e("certid unspecified");
          if (void 0 == t.status) throw new e("status unspecified");
          if (void 0 == t.thisupdate) throw new e("thisupdate unspecified");
          if (
            (r.push(new h(t.certid)),
            r.push(new u(t.status)),
            r.push(new s(t.thisupdate)),
            void 0 != t.nextupdate)
          ) {
            var n = new s(t.nextupdate);
            r.push(new a({ tag: "a0", explicit: !0, obj: n }));
          }
          if (void 0 != t.ext) {
            var o = new l(t.ext);
            r.push(new a({ tag: "a1", explicit: !0, obj: o }));
          }
          var c = new i({ array: r });
          return c.tohex();
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.SingleResponse, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.CertID = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DEROctetString,
        i = r.DERInteger,
        s = r.DERSequence,
        a = r.x509,
        o = a.AlgorithmIdentifier,
        h = r.ocsp,
        u = (h.DEFAULT_HASH, e.crypto),
        c = u.Util.hashHex,
        l = Jn,
        f = Br,
        d = f.getVbyList;
      (h.CertID.superclass.constructor.call(this),
        (this.DEFAULT_HASH = "sha1"),
        (this.params = null),
        (this.setByValue = function (t, e, r, n) {
          (void 0 == n && (n = this.DEFAULT_HASH),
            (this.params = { alg: n, issname: t, isskey: e, sbjsn: r }));
        }),
        (this.setByCert = function (t, e, r) {
          (void 0 == r && (r = this.DEFAULT_HASH),
            (this.params = { alg: r, issuerCert: t, subjectCert: e }));
        }),
        (this.getParamByCerts = function (t, e, r) {
          void 0 == r && (r = this.DEFAULT_HASH);
          var n = new l(t),
            i = new l(e),
            s = c(n.getSubjectHex(), r),
            a = n.getPublicKeyHex(),
            o = c(d(a, 0, [1], "03", !0), r),
            h = i.getSerialNumberHex(),
            u = { alg: r, issname: s, isskey: o, sbjsn: h };
          return u;
        }),
        (this.tohex = function () {
          if ("object" != typeof this.params) throw new Error("params not set");
          var t,
            e,
            r,
            a,
            h = this.params;
          if (
            ((a = void 0 == h.alg ? this.DEFAULT_HASH : h.alg),
            void 0 != h.issuerCert && void 0 != h.subjectCert)
          ) {
            var u = this.getParamByCerts(h.issuerCert, h.subjectCert, a);
            ((t = u.issname), (e = u.isskey), (r = u.sbjsn));
          } else {
            if (void 0 == h.issname || void 0 == h.isskey || void 0 == h.sbjsn)
              throw new Error("required param members not defined");
            ((t = h.issname), (e = h.isskey), (r = h.sbjsn));
          }
          var c = new o({ name: a }),
            l = new n({ hex: t }),
            f = new n({ hex: e }),
            d = new i({ hex: r }),
            p = new s({ array: [c, l, f, d] });
          return ((this.hTLV = p.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.CertID, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.CertStatus = function (t) {
      (Dr.asn1.ocsp.CertStatus.superclass.constructor.call(this),
        (this.params = null),
        (this.tohex = function () {
          var t = this.params;
          if ("good" == t.status) return "8000";
          if ("unknown" == t.status) return "8200";
          if ("revoked" == t.status) {
            var e = [{ gentime: { str: t.time } }];
            void 0 != t.reason &&
              e.push({
                tag: {
                  tag: "a0",
                  explicit: !0,
                  obj: { enum: { int: t.reason } },
                },
              });
            var r = { tag: "a1", explicit: !1, obj: { seq: e } };
            return Dr.asn1.ASN1Util.newObject({ tag: r }).tohex();
          }
          throw new Error("bad status");
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        (this.setByParam = function (t) {
          this.params = t;
        }),
        void 0 !== t && this.setByParam(t));
    }),
    Un(Dr.asn1.ocsp.CertStatus, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.Request = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.ocsp;
      if (
        (i.Request.superclass.constructor.call(this),
        (this.dReqCert = null),
        (this.dExt = null),
        (this.tohex = function () {
          var t = [];
          if (null === this.dReqCert) throw "reqCert not set";
          t.push(this.dReqCert);
          var e = new n({ array: t });
          return ((this.hTLV = e.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        "undefined" !== typeof t)
      ) {
        var s = new i.CertID(t);
        this.dReqCert = s;
      }
    }),
    Un(Dr.asn1.ocsp.Request, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.TBSRequest = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.ocsp;
      (i.TBSRequest.superclass.constructor.call(this),
        (this.version = 0),
        (this.dRequestorName = null),
        (this.dRequestList = []),
        (this.dRequestExt = null),
        (this.setRequestListByParam = function (t) {
          for (var e = [], r = 0; r < t.length; r++) {
            var n = new i.Request(t[0]);
            e.push(n);
          }
          this.dRequestList = e;
        }),
        (this.tohex = function () {
          var t = [];
          if (0 !== this.version)
            throw "not supported version: " + this.version;
          if (null !== this.dRequestorName) throw "requestorName not supported";
          var e = new n({ array: this.dRequestList });
          if ((t.push(e), null !== this.dRequestExt))
            throw "requestExtensions not supported";
          var r = new n({ array: t });
          return ((this.hTLV = r.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t &&
          void 0 !== t.reqList &&
          this.setRequestListByParam(t.reqList));
    }),
    Un(Dr.asn1.ocsp.TBSRequest, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.OCSPRequest = function (t) {
      var e = Dr,
        r = e.asn1,
        n = r.DERSequence,
        i = r.ocsp;
      if (
        (i.OCSPRequest.superclass.constructor.call(this),
        (this.dTbsRequest = null),
        (this.dOptionalSignature = null),
        (this.tohex = function () {
          var t = [];
          if (null === this.dTbsRequest) throw "tbsRequest not set";
          if ((t.push(this.dTbsRequest), null !== this.dOptionalSignature))
            throw "optionalSignature not supported";
          var e = new n({ array: t });
          return ((this.hTLV = e.tohex()), this.hTLV);
        }),
        (this.getEncodedHex = function () {
          return this.tohex();
        }),
        void 0 !== t && void 0 !== t.reqList)
      ) {
        var s = new i.TBSRequest(t);
        this.dTbsRequest = s;
      }
    }),
    Un(Dr.asn1.ocsp.OCSPRequest, Dr.asn1.ASN1Object),
    (Dr.asn1.ocsp.OCSPUtil = {}),
    (Dr.asn1.ocsp.OCSPUtil.getRequestHex = function (t, e, r) {
      var n = Dr,
        i = n.asn1,
        s = i.ocsp;
      void 0 === r && (r = s.DEFAULT_HASH);
      var a = { alg: r, issuerCert: t, subjectCert: e },
        o = new s.OCSPRequest({ reqList: [a] });
      return o.tohex();
    }),
    (Dr.asn1.ocsp.OCSPUtil.getOCSPResponseInfo = function (t) {
      var e = Br,
        r = e.getVbyList,
        n = e.getVbyListEx,
        i = e.getIdxbyList,
        s = (e.getIdxbyListEx, e.getV),
        a = {};
      try {
        var o = n(t, 0, [0], "0a");
        a.responseStatus = parseInt(o, 16);
      } catch (l) {}
      if (0 !== a.responseStatus) return a;
      try {
        var h = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 1]);
        "80" === t.substr(h, 2)
          ? (a.certStatus = "good")
          : "a1" === t.substr(h, 2)
            ? ((a.certStatus = "revoked"),
              (a.revocationTime = Xr(r(t, h, [0]))))
            : "82" === t.substr(h, 2) && (a.certStatus = "unknown");
      } catch (l) {}
      try {
        var u = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 2]);
        a.thisUpdate = Xr(s(t, u));
      } catch (l) {}
      try {
        var c = i(t, 0, [1, 0, 1, 0, 0, 2, 0, 3]);
        "a0" === t.substr(c, 2) && (a.nextUpdate = Xr(r(t, c, [0])));
      } catch (l) {}
      return a;
    }),
    (Dr.asn1.ocsp.OCSPParser = function () {
      var t = Error,
        e = Jn,
        r = new e(),
        n = Br,
        i = n.getV,
        s = n.getTLV,
        a = n.getIdxbyList,
        o = n.getVbyList,
        h = n.getTLVbyList,
        u = n.getVbyListEx,
        c = n.getTLVbyListEx,
        l = n.getChildIdx;
      ((this.getOCSPRequest = function (e) {
        var r = l(e, 0);
        if (1 != r.length && 2 != r.length)
          throw new t("wrong number elements: " + r.length);
        var n = this.getTBSRequest(s(e, r[0]));
        return n;
      }),
        (this.getTBSRequest = function (t) {
          var e = {},
            n = c(t, 0, [0], "30");
          e.array = this.getRequestList(n);
          var i = c(t, 0, ["[2]", 0], "30");
          return (null != i && (e.ext = r.getExtParamArray(i)), e);
        }),
        (this.getRequestList = function (t) {
          for (var e = [], r = l(t, 0), n = 0; n < r.length; n++) {
            t = s(t, r[n]);
            e.push(this.getRequest(t));
          }
          return e;
        }),
        (this.getRequest = function (e) {
          var n = l(e, 0);
          if (1 != n.length && 2 != n.length)
            throw new t("wrong number elements: " + n.length);
          var i = this.getCertID(s(e, n[0]));
          if (2 == n.length) {
            var o = a(e, 0, [1, 0]);
            i.ext = r.getExtParamArray(s(e, o));
          }
          return i;
        }),
        (this.getCertID = function (r) {
          var n = l(r, 0);
          if (4 != n.length) throw new t("wrong number elements: " + n.length);
          var a = new e(),
            o = {};
          return (
            (o.alg = a.getAlgorithmIdentifierName(s(r, n[0]))),
            (o.issname = i(r, n[1])),
            (o.isskey = i(r, n[2])),
            (o.sbjsn = i(r, n[3])),
            o
          );
        }),
        (this.getOCSPResponse = function (t) {
          var e,
            r = l(t, 0),
            n = i(t, r[0]),
            s = parseInt(n);
          if (1 == r.length) return { resstatus: s };
          var a = h(t, 0, [1, 0]);
          return ((e = this.getResponseBytes(a)), (e.resstatus = s), e);
        }),
        (this.getResponseBytes = function (t) {
          var e,
            r = l(t, 0),
            n = h(t, 0, [1, 0]);
          e = this.getBasicOCSPResponse(n);
          var s = i(t, r[0]);
          return ((e.restype = Dr.asn1.x509.OID.oid2name(Tn(s))), e);
        }),
        (this.getBasicOCSPResponse = function (t) {
          var e,
            r = l(t, 0);
          e = this.getResponseData(s(t, r[0]));
          var n = new Jn();
          e.alg = n.getAlgorithmIdentifierName(s(t, r[1]));
          var a = i(t, r[2]);
          e.sighex = a.substr(2);
          var o = u(t, 0, ["[0]"]);
          if (null != o) {
            for (var h = l(o, 0), c = [], f = 0; f < h.length; f++) {
              var d = s(o, h[f]);
              c.push(d);
            }
            e.certs = c;
          }
          return e;
        }),
        (this.getResponseData = function (t) {
          var e = l(t, 0),
            r = e.length,
            n = {},
            a = 0;
          ("a0" == t.substr(e[0], 2) && a++,
            (n.respid = this.getResponderID(s(t, e[a++]))));
          var o = i(t, e[a++]);
          if (
            ((n.prodat = Xr(o)),
            (n.array = this.getSingleResponseList(s(t, e[a++]))),
            "a1" == t.substr(e[r - 1], 2))
          ) {
            var u = h(t, e[r - 1], [0]),
              c = new Jn();
            n.ext = c.getExtParamArray(u);
          }
          return n;
        }),
        (this.getResponderID = function (t) {
          var e = {};
          if ("a2" == t.substr(0, 2)) {
            var r = o(t, 0, [0]);
            e.key = r;
          }
          if ("a1" == t.substr(0, 2)) {
            var n = h(t, 0, [0]),
              i = new Jn();
            e.name = i.getX500Name(n);
          }
          return e;
        }),
        (this.getSingleResponseList = function (t) {
          for (var e = l(t, 0), r = [], n = 0; n < e.length; n++) {
            var i = this.getSingleResponse(s(t, e[n]));
            r.push(i);
          }
          return r;
        }),
        (this.getSingleResponse = function (t) {
          var e = l(t, 0),
            r = {},
            n = this.getCertID(s(t, e[0]));
          r.certid = n;
          var a = this.getCertStatus(s(t, e[1]));
          if (((r.status = a), "18" == t.substr(e[2], 2))) {
            var u = i(t, e[2]);
            r.thisupdate = Xr(u);
          }
          for (var c = 3; c < e.length; c++) {
            if ("a0" == t.substr(e[c], 2)) {
              var f = o(t, e[c], [0], "18");
              r.nextupdate = Xr(f);
            }
            if ("a1" == t.substr(e[c], 2)) {
              var d = new Jn(),
                p = h(t, 0, [c, 0]);
              r.ext = d.getExtParamArray(p);
            }
          }
          return r;
        }),
        (this.getCertStatus = function (t) {
          var e = {};
          if ("8000" == t) return { status: "good" };
          if ("8200" == t) return { status: "unknown" };
          if ("a1" == t.substr(0, 2)) {
            e.status = "revoked";
            var r = o(t, 0, [0]),
              n = Xr(r);
            e.time = n;
          }
          return e;
        }));
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.lang && Dr.lang) || (Dr.lang = {}),
    (Dr.lang.String = function () {}),
    "function" === typeof n
      ? ((_r = function (t) {
          return Vr(n.from(t, "utf8").toString("base64"));
        }),
        (Rr = function (t) {
          return n.from(Ur(t), "base64").toString("utf8");
        }))
      : ((_r = function (t) {
          return Kr(mn(Nn(t)));
        }),
        (Rr = function (t) {
          return decodeURIComponent(yn(zr(t)));
        })),
    (Dr.lang.String.isInteger = function (t) {
      return !!t.match(/^[0-9]+$/) || !!t.match(/^-[0-9]+$/);
    }),
    (Dr.lang.String.isHex = function (t) {
      return Ln(t);
    }),
    (Dr.lang.String.isBase64 = function (t) {
      return (
        (t = t.replace(/\s+/g, "")),
        !(!t.match(/^[0-9A-Za-z+\/]+={0,3}$/) || t.length % 4 != 0)
      );
    }),
    (Dr.lang.String.isBase64URL = function (t) {
      return !t.match(/[+/=]/) && ((t = Ur(t)), Dr.lang.String.isBase64(t));
    }),
    (Dr.lang.String.isIntegerArray = function (t) {
      return ((t = t.replace(/\s+/g, "")), !!t.match(/^\[[0-9,]+\]$/));
    }),
    (Dr.lang.String.isPrintable = function (t) {
      return null !== t.match(/^[0-9A-Za-z '()+,-./:=?]*$/);
    }),
    (Dr.lang.String.isIA5 = function (t) {
      return null !== t.match(/^[\x20-\x21\x23-\x7f]*$/);
    }),
    (Dr.lang.String.isMail = function (t) {
      return (
        null !==
        t.match(
          /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
        )
      );
    }));
  var Rn = function (t, e) {
    var r = t.length;
    t.length > e.length && (r = e.length);
    for (var n = 0; n < r; n++)
      if (t.charCodeAt(n) != e.charCodeAt(n)) return n;
    return t.length != e.length ? r : -1;
  };
  function Bn(t) {
    var e = function (t) {
        var e = t.toString(16);
        return (1 == e.length && (e = "0" + e), e);
      },
      r = function (t) {
        var r = "",
          n = parseInt(t, 10),
          i = n.toString(2),
          s = 7 - (i.length % 7);
        7 == s && (s = 0);
        for (var a = "", o = 0; o < s; o++) a += "0";
        i = a + i;
        for (o = 0; o < i.length - 1; o += 7) {
          var h = i.substr(o, 7);
          (o != i.length - 7 && (h = "1" + h), (r += e(parseInt(h, 2))));
        }
        return r;
      };
    try {
      if (!t.match(/^[0-9.]+$/)) return null;
      var n = "",
        i = t.split("."),
        s = 40 * parseInt(i[0], 10) + parseInt(i[1], 10);
      ((n += e(s)), i.splice(0, 2));
      for (var a = 0; a < i.length; a++) n += r(i[a]);
      return n;
    } catch (o) {
      return null;
    }
  }
  function Tn(t) {
    if (!Ln(t)) return null;
    try {
      var e = [],
        r = t.substr(0, 2),
        n = parseInt(r, 16);
      ((e[0] = new String(Math.floor(n / 40))), (e[1] = new String(n % 40)));
      for (var i = t.substr(2), s = [], a = 0; a < i.length / 2; a++)
        s.push(parseInt(i.substr(2 * a, 2), 16));
      var o = [],
        h = "";
      for (a = 0; a < s.length; a++)
        128 & s[a]
          ? (h += jn((127 & s[a]).toString(2), 7))
          : ((h += jn((127 & s[a]).toString(2), 7)),
            o.push(new String(parseInt(h, 2))),
            (h = ""));
      var u = e.join(".");
      return (o.length > 0 && (u = u + "." + o.join(".")), u);
    } catch (c) {
      return null;
    }
  }
  var jn = function (t, e, r) {
    return (
      void 0 == r && (r = "0"),
      t.length >= e ? t : new Array(e - t.length + 1).join(r) + t
    );
  };
  function kn(t) {
    if (t.length % 2 != 0) return -1;
    if (((t = t.toLowerCase()), null == t.match(/^[0-9a-f]+$/))) return -1;
    try {
      var e = t.substr(0, 2);
      if ("00" == e) return parseInt(t.substr(2), 16);
      var r = parseInt(e, 16);
      if (r > 7) return -1;
      var n = t.substr(2),
        i = parseInt(n, 16).toString(2);
      ("0" == i && (i = "00000000"), (i = i.slice(0, 0 - r)));
      var s = parseInt(i, 2);
      return NaN == s ? -1 : s;
    } catch (a) {
      return -1;
    }
  }
  function On(t) {
    if ("number" != typeof t) return null;
    if (t < 0) return null;
    var e = Number(t).toString(2),
      r = 8 - (e.length % 8);
    (8 == r && (r = 0), (e += jn("", r, "0")));
    var n = parseInt(e, 2).toString(16);
    n.length % 2 == 1 && (n = "0" + n);
    var i = "0" + r;
    return i + n;
  }
  function Mn(t) {
    if ("string" != typeof t) return null;
    if (t.length % 2 != 0) return null;
    if (!t.match(/^[0-9a-f]+$/)) return null;
    try {
      var e = parseInt(t.substr(0, 2), 16);
      if (e < 0 || 7 < e) return null;
      for (var r = t.substr(2), n = "", i = 0; i < r.length; i += 2) {
        var s = r.substr(i, 2),
          a = parseInt(s, 16).toString(2);
        ((a = ("0000000" + a).slice(-8)), (n += a));
      }
      return n.substr(0, n.length - e);
    } catch (o) {
      return null;
    }
  }
  function qn(t) {
    if ("string" != typeof t) return null;
    if (null == t.match(/^[01]+$/)) return null;
    try {
      var e = parseInt(t, 2);
      return On(e);
    } catch (r) {
      return null;
    }
  }
  function Hn(t, e) {
    for (var r = 0, n = 0; n < t.length; n++) r |= 1 << e[t[n]];
    var i = r.toString(2),
      s = "";
    for (n = i.length - 1; n >= 0; n--) s += i[n];
    return s;
  }
  function Vn(t, e, r) {
    if ("object" == typeof t) {
      e = String(e).split(".");
      for (var n = 0; n < e.length && t; n++) {
        var i = e[n];
        (i.match(/^[0-9]+$/) && (i = parseInt(i)), (t = t[i]));
      }
      return t || !1 === t ? t : r;
    }
  }
  function Un(t, e) {
    var r = function () {};
    ((r.prototype = e.prototype),
      (t.prototype = new r()),
      (t.prototype.constructor = t),
      (t.superclass = e.prototype),
      e.prototype.constructor == Object.prototype.constructor &&
        (e.prototype.constructor = e));
  }
  (("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.crypto && Dr.crypto) || (Dr.crypto = {}),
    (Dr.crypto.Util = new (function () {
      ((this.DIGESTINFOHEAD = {
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        ripemd160: "3021300906052b2403020105000414",
      }),
        (this.DEFAULTPROVIDER = {
          md5: "cryptojs",
          sha1: "cryptojs",
          sha224: "cryptojs",
          sha256: "cryptojs",
          sha384: "cryptojs",
          sha512: "cryptojs",
          ripemd160: "cryptojs",
          hmacmd5: "cryptojs",
          hmacsha1: "cryptojs",
          hmacsha224: "cryptojs",
          hmacsha256: "cryptojs",
          hmacsha384: "cryptojs",
          hmacsha512: "cryptojs",
          hmacripemd160: "cryptojs",
          MD5withRSA: "cryptojs/jsrsa",
          SHA1withRSA: "cryptojs/jsrsa",
          SHA224withRSA: "cryptojs/jsrsa",
          SHA256withRSA: "cryptojs/jsrsa",
          SHA384withRSA: "cryptojs/jsrsa",
          SHA512withRSA: "cryptojs/jsrsa",
          RIPEMD160withRSA: "cryptojs/jsrsa",
          MD5withECDSA: "cryptojs/jsrsa",
          SHA1withECDSA: "cryptojs/jsrsa",
          SHA224withECDSA: "cryptojs/jsrsa",
          SHA256withECDSA: "cryptojs/jsrsa",
          SHA384withECDSA: "cryptojs/jsrsa",
          SHA512withECDSA: "cryptojs/jsrsa",
          RIPEMD160withECDSA: "cryptojs/jsrsa",
          SHA1withDSA: "cryptojs/jsrsa",
          SHA224withDSA: "cryptojs/jsrsa",
          SHA256withDSA: "cryptojs/jsrsa",
          MD5withRSAandMGF1: "cryptojs/jsrsa",
          SHAwithRSAandMGF1: "cryptojs/jsrsa",
          SHA1withRSAandMGF1: "cryptojs/jsrsa",
          SHA224withRSAandMGF1: "cryptojs/jsrsa",
          SHA256withRSAandMGF1: "cryptojs/jsrsa",
          SHA384withRSAandMGF1: "cryptojs/jsrsa",
          SHA512withRSAandMGF1: "cryptojs/jsrsa",
          RIPEMD160withRSAandMGF1: "cryptojs/jsrsa",
        }),
        (this.CRYPTOJSMESSAGEDIGESTNAME = {
          md5: h.algo.MD5,
          sha1: h.algo.SHA1,
          sha224: h.algo.SHA224,
          sha256: h.algo.SHA256,
          sha384: h.algo.SHA384,
          sha512: h.algo.SHA512,
          ripemd160: h.algo.RIPEMD160,
        }),
        (this.getDigestInfoHex = function (t, e) {
          if ("undefined" == typeof this.DIGESTINFOHEAD[e])
            throw "alg not supported in Util.DIGESTINFOHEAD: " + e;
          return this.DIGESTINFOHEAD[e] + t;
        }),
        (this.getPaddedDigestInfoHex = function (t, e, r) {
          var n = this.getDigestInfoHex(t, e),
            i = r / 4;
          if (n.length + 22 > i)
            throw "key is too short for SigAlg: keylen=" + r + "," + e;
          for (
            var s = "0001",
              a = "00" + n,
              o = "",
              h = i - s.length - a.length,
              u = 0;
            u < h;
            u += 2
          )
            o += "ff";
          var c = s + o + a;
          return c;
        }),
        (this.hashString = function (t, e) {
          var r = new Dr.crypto.MessageDigest({ alg: e });
          return r.digestString(t);
        }),
        (this.hashHex = function (t, e) {
          var r = new Dr.crypto.MessageDigest({ alg: e });
          return r.digestHex(t);
        }),
        (this.sha1 = function (t) {
          return this.hashString(t, "sha1");
        }),
        (this.sha256 = function (t) {
          return this.hashString(t, "sha256");
        }),
        (this.sha256Hex = function (t) {
          return this.hashHex(t, "sha256");
        }),
        (this.sha512 = function (t) {
          return this.hashString(t, "sha512");
        }),
        (this.sha512Hex = function (t) {
          return this.hashHex(t, "sha512");
        }),
        (this.isKey = function (t) {
          return (
            t instanceof Ue ||
            t instanceof Dr.crypto.DSA ||
            t instanceof Dr.crypto.ECDSA
          );
        }));
    })()),
    (Dr.crypto.Util.md5 = function (t) {
      var e = new Dr.crypto.MessageDigest({ alg: "md5", prov: "cryptojs" });
      return e.digestString(t);
    }),
    (Dr.crypto.Util.ripemd160 = function (t) {
      var e = new Dr.crypto.MessageDigest({
        alg: "ripemd160",
        prov: "cryptojs",
      });
      return e.digestString(t);
    }),
    (Dr.crypto.Util.SECURERANDOMGEN = new Oe()),
    (Dr.crypto.Util.getRandomHexOfNbytes = function (t) {
      var e = new Array(t);
      return (Dr.crypto.Util.SECURERANDOMGEN.nextBytes(e), kr(e));
    }),
    (Dr.crypto.Util.getRandomBigIntegerOfNbytes = function (t) {
      return new m(Dr.crypto.Util.getRandomHexOfNbytes(t), 16);
    }),
    (Dr.crypto.Util.getRandomHexOfNbits = function (t) {
      var e = t % 8,
        r = (t - e) / 8,
        n = new Array(r + 1);
      return (
        Dr.crypto.Util.SECURERANDOMGEN.nextBytes(n),
        (n[0] = (((255 << e) & 255) ^ 255) & n[0]),
        kr(n)
      );
    }),
    (Dr.crypto.Util.getRandomBigIntegerOfNbits = function (t) {
      return new m(Dr.crypto.Util.getRandomHexOfNbits(t), 16);
    }),
    (Dr.crypto.Util.getRandomBigIntegerZeroToMax = function (t) {
      var e = t.bitLength();
      while (1) {
        var r = Dr.crypto.Util.getRandomBigIntegerOfNbits(e);
        if (-1 != t.compareTo(r)) return r;
      }
    }),
    (Dr.crypto.Util.getRandomBigIntegerMinToMax = function (t, e) {
      var r = t.compareTo(e);
      if (1 == r) throw "biMin is greater than biMax";
      if (0 == r) return t;
      var n = e.subtract(t),
        i = Dr.crypto.Util.getRandomBigIntegerZeroToMax(n);
      return i.add(t);
    }),
    (Dr.crypto.MessageDigest = function (t) {
      ((this.setAlgAndProvider = function (t, e) {
        if (
          ((t = Dr.crypto.MessageDigest.getCanonicalAlgName(t)),
          null !== t && void 0 === e && (e = Dr.crypto.Util.DEFAULTPROVIDER[t]),
          -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(t) &&
            "cryptojs" == e)
        ) {
          try {
            this.md = Dr.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[t].create();
          } catch (r) {
            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + r;
          }
          ((this.updateString = function (t) {
            this.md.update(t);
          }),
            (this.updateHex = function (t) {
              var e = h.enc.Hex.parse(t);
              this.md.update(e);
            }),
            (this.digest = function () {
              var t = this.md.finalize();
              return t.toString(h.enc.Hex);
            }),
            (this.digestString = function (t) {
              return (this.updateString(t), this.digest());
            }),
            (this.digestHex = function (t) {
              return (this.updateHex(t), this.digest());
            }));
        }
        if (-1 != ":sha256:".indexOf(t) && "sjcl" == e) {
          try {
            this.md = new sjcl.hash.sha256();
          } catch (r) {
            throw "setAlgAndProvider hash alg set fail alg=" + t + "/" + r;
          }
          ((this.updateString = function (t) {
            this.md.update(t);
          }),
            (this.updateHex = function (t) {
              var e = sjcl.codec.hex.toBits(t);
              this.md.update(e);
            }),
            (this.digest = function () {
              var t = this.md.finalize();
              return sjcl.codec.hex.fromBits(t);
            }),
            (this.digestString = function (t) {
              return (this.updateString(t), this.digest());
            }),
            (this.digestHex = function (t) {
              return (this.updateHex(t), this.digest());
            }));
        }
      }),
        (this.updateString = function (t) {
          throw (
            "updateString(str) not supported for this alg/prov: " +
            this.algName +
            "/" +
            this.provName
          );
        }),
        (this.updateHex = function (t) {
          throw (
            "updateHex(hex) not supported for this alg/prov: " +
            this.algName +
            "/" +
            this.provName
          );
        }),
        (this.digest = function () {
          throw (
            "digest() not supported for this alg/prov: " +
            this.algName +
            "/" +
            this.provName
          );
        }),
        (this.digestString = function (t) {
          throw (
            "digestString(str) not supported for this alg/prov: " +
            this.algName +
            "/" +
            this.provName
          );
        }),
        (this.digestHex = function (t) {
          throw (
            "digestHex(hex) not supported for this alg/prov: " +
            this.algName +
            "/" +
            this.provName
          );
        }),
        void 0 !== t &&
          void 0 !== t.alg &&
          ((this.algName = t.alg),
          void 0 === t.prov &&
            (this.provName = Dr.crypto.Util.DEFAULTPROVIDER[this.algName]),
          this.setAlgAndProvider(this.algName, this.provName)));
    }),
    (Dr.crypto.MessageDigest.getCanonicalAlgName = function (t) {
      return (
        "string" === typeof t &&
          ((t = t.toLowerCase()), (t = t.replace(/-/, ""))),
        t
      );
    }),
    (Dr.crypto.MessageDigest.getHashLength = function (t) {
      var e = Dr.crypto.MessageDigest,
        r = e.getCanonicalAlgName(t);
      if (void 0 === e.HASHLENGTH[r]) throw "not supported algorithm: " + t;
      return e.HASHLENGTH[r];
    }),
    (Dr.crypto.MessageDigest.HASHLENGTH = {
      md5: 16,
      sha1: 20,
      sha224: 28,
      sha256: 32,
      sha384: 48,
      sha512: 64,
      ripemd160: 20,
    }),
    (Dr.crypto.Mac = function (t) {
      ((this.setAlgAndProvider = function (t, e) {
        if (
          ((t = t.toLowerCase()),
          null == t && (t = "hmacsha1"),
          (t = t.toLowerCase()),
          "hmac" != t.substr(0, 4))
        )
          throw "setAlgAndProvider unsupported HMAC alg: " + t;
        (void 0 === e && (e = Dr.crypto.Util.DEFAULTPROVIDER[t]),
          (this.algProv = t + "/" + e));
        var r = t.substr(4);
        if (
          -1 != ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(r) &&
          "cryptojs" == e
        ) {
          try {
            var n = Dr.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[r];
            this.mac = h.algo.HMAC.create(n, this.pass);
          } catch (i) {
            throw "setAlgAndProvider hash alg set fail hashAlg=" + r + "/" + i;
          }
          ((this.updateString = function (t) {
            this.mac.update(t);
          }),
            (this.updateHex = function (t) {
              var e = h.enc.Hex.parse(t);
              this.mac.update(e);
            }),
            (this.doFinal = function () {
              var t = this.mac.finalize();
              return t.toString(h.enc.Hex);
            }),
            (this.doFinalString = function (t) {
              return (this.updateString(t), this.doFinal());
            }),
            (this.doFinalHex = function (t) {
              return (this.updateHex(t), this.doFinal());
            }));
        }
      }),
        (this.updateString = function (t) {
          throw (
            "updateString(str) not supported for this alg/prov: " + this.algProv
          );
        }),
        (this.updateHex = function (t) {
          throw (
            "updateHex(hex) not supported for this alg/prov: " + this.algProv
          );
        }),
        (this.doFinal = function () {
          throw "digest() not supported for this alg/prov: " + this.algProv;
        }),
        (this.doFinalString = function (t) {
          throw (
            "digestString(str) not supported for this alg/prov: " + this.algProv
          );
        }),
        (this.doFinalHex = function (t) {
          throw (
            "digestHex(hex) not supported for this alg/prov: " + this.algProv
          );
        }),
        (this.setPassword = function (t) {
          if ("string" == typeof t) {
            var e = t;
            return (
              (t.length % 2 != 1 && t.match(/^[0-9A-Fa-f]+$/)) || (e = Qr(t)),
              void (this.pass = h.enc.Hex.parse(e))
            );
          }
          if ("object" != typeof t)
            throw "KJUR.crypto.Mac unsupported password type: " + t;
          e = null;
          if (void 0 !== t.hex) {
            if (t.hex.length % 2 != 0 || !t.hex.match(/^[0-9A-Fa-f]+$/))
              throw "Mac: wrong hex password: " + t.hex;
            e = t.hex;
          }
          if (
            (void 0 !== t.utf8 && (e = Jr(t.utf8)),
            void 0 !== t.rstr && (e = Qr(t.rstr)),
            void 0 !== t.b64 && (e = d(t.b64)),
            void 0 !== t.b64u && (e = zr(t.b64u)),
            null == e)
          )
            throw "KJUR.crypto.Mac unsupported password type: " + t;
          this.pass = h.enc.Hex.parse(e);
        }),
        void 0 !== t &&
          (void 0 !== t.pass && this.setPassword(t.pass),
          void 0 !== t.alg &&
            ((this.algName = t.alg),
            void 0 === t.prov &&
              (this.provName = Dr.crypto.Util.DEFAULTPROVIDER[this.algName]),
            this.setAlgAndProvider(this.algName, this.provName))));
    }),
    (Dr.crypto.Signature = function (t) {
      var e = null;
      if (
        ((this._setAlgNames = function () {
          var t = this.algName.match(/^(.+)with(.+)$/);
          t &&
            ((this.mdAlgName = t[1].toLowerCase()),
            (this.pubkeyAlgName = t[2].toLowerCase()),
            "rsaandmgf1" == this.pubkeyAlgName &&
              "sha" == this.mdAlgName &&
              (this.mdAlgName = "sha1"));
        }),
        (this._zeroPaddingOfSignature = function (t, e) {
          for (var r = "", n = e / 4 - t.length, i = 0; i < n; i++) r += "0";
          return r + t;
        }),
        (this.setAlgAndProvider = function (t, e) {
          if ((this._setAlgNames(), "cryptojs/jsrsa" != e))
            throw new Error("provider not supported: " + e);
          if (
            -1 !=
            ":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(
              this.mdAlgName,
            )
          ) {
            try {
              this.md = new Dr.crypto.MessageDigest({ alg: this.mdAlgName });
            } catch (r) {
              throw new Error(
                "setAlgAndProvider hash alg set fail alg=" +
                  this.mdAlgName +
                  "/" +
                  r,
              );
            }
            ((this.init = function (t, e) {
              var r = null;
              try {
                r = void 0 === e ? Kn.getKey(t) : Kn.getKey(t, e);
              } catch (n) {
                throw "init failed:" + n;
              }
              if (!0 === r.isPrivate)
                ((this.prvKey = r), (this.state = "SIGN"));
              else {
                if (!0 !== r.isPublic) throw "init failed.:" + r;
                ((this.pubKey = r), (this.state = "VERIFY"));
              }
            }),
              (this.updateString = function (t) {
                this.md.updateString(t);
              }),
              (this.updateHex = function (t) {
                this.md.updateHex(t);
              }),
              (this.sign = function () {
                if (
                  ((this.sHashHex = this.md.digest()),
                  void 0 === this.prvKey &&
                    void 0 !== this.ecprvhex &&
                    void 0 !== this.eccurvename &&
                    void 0 !== Dr.crypto.ECDSA &&
                    (this.prvKey = new Dr.crypto.ECDSA({
                      curve: this.eccurvename,
                      prv: this.ecprvhex,
                    })),
                  this.prvKey instanceof Ue &&
                    "rsaandmgf1" === this.pubkeyAlgName)
                )
                  this.hSign = this.prvKey.signWithMessageHashPSS(
                    this.sHashHex,
                    this.mdAlgName,
                    this.pssSaltLen,
                  );
                else if (
                  this.prvKey instanceof Ue &&
                  "rsa" === this.pubkeyAlgName
                )
                  this.hSign = this.prvKey.signWithMessageHash(
                    this.sHashHex,
                    this.mdAlgName,
                  );
                else if (this.prvKey instanceof Dr.crypto.ECDSA)
                  this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                else {
                  if (!(this.prvKey instanceof Dr.crypto.DSA))
                    throw (
                      "Signature: unsupported private key alg: " +
                      this.pubkeyAlgName
                    );
                  this.hSign = this.prvKey.signWithMessageHash(this.sHashHex);
                }
                return this.hSign;
              }),
              (this.signString = function (t) {
                return (this.updateString(t), this.sign());
              }),
              (this.signHex = function (t) {
                return (this.updateHex(t), this.sign());
              }),
              (this.verify = function (t) {
                if (
                  ((this.sHashHex = this.md.digest()),
                  void 0 === this.pubKey &&
                    void 0 !== this.ecpubhex &&
                    void 0 !== this.eccurvename &&
                    void 0 !== Dr.crypto.ECDSA &&
                    (this.pubKey = new Dr.crypto.ECDSA({
                      curve: this.eccurvename,
                      pub: this.ecpubhex,
                    })),
                  this.pubKey instanceof Ue &&
                    "rsaandmgf1" === this.pubkeyAlgName)
                )
                  return this.pubKey.verifyWithMessageHashPSS(
                    this.sHashHex,
                    t,
                    this.mdAlgName,
                    this.pssSaltLen,
                  );
                if (this.pubKey instanceof Ue && "rsa" === this.pubkeyAlgName)
                  return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                if (
                  void 0 !== Dr.crypto.ECDSA &&
                  this.pubKey instanceof Dr.crypto.ECDSA
                )
                  return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                if (
                  void 0 !== Dr.crypto.DSA &&
                  this.pubKey instanceof Dr.crypto.DSA
                )
                  return this.pubKey.verifyWithMessageHash(this.sHashHex, t);
                throw (
                  "Signature: unsupported public key alg: " + this.pubkeyAlgName
                );
              }));
          }
        }),
        (this.init = function (t, e) {
          throw (
            "init(key, pass) not supported for this alg:prov=" +
            this.algProvName
          );
        }),
        (this.updateString = function (t) {
          throw (
            "updateString(str) not supported for this alg:prov=" +
            this.algProvName
          );
        }),
        (this.updateHex = function (t) {
          throw (
            "updateHex(hex) not supported for this alg:prov=" + this.algProvName
          );
        }),
        (this.sign = function () {
          throw "sign() not supported for this alg:prov=" + this.algProvName;
        }),
        (this.signString = function (t) {
          throw (
            "digestString(str) not supported for this alg:prov=" +
            this.algProvName
          );
        }),
        (this.signHex = function (t) {
          throw (
            "digestHex(hex) not supported for this alg:prov=" + this.algProvName
          );
        }),
        (this.verify = function (t) {
          throw (
            "verify(hSigVal) not supported for this alg:prov=" +
            this.algProvName
          );
        }),
        (this.initParams = t),
        void 0 !== t &&
          (void 0 !== t.alg &&
            ((this.algName = t.alg),
            void 0 === t.prov
              ? (this.provName = Dr.crypto.Util.DEFAULTPROVIDER[this.algName])
              : (this.provName = t.prov),
            (this.algProvName = this.algName + ":" + this.provName),
            this.setAlgAndProvider(this.algName, this.provName),
            this._setAlgNames()),
          void 0 !== t.psssaltlen && (this.pssSaltLen = t.psssaltlen),
          void 0 !== t.prvkeypem))
      ) {
        if (void 0 !== t.prvkeypas)
          throw "both prvkeypem and prvkeypas parameters not supported";
        try {
          e = Kn.getKey(t.prvkeypem);
          this.init(e);
        } catch (r) {
          throw "fatal error to load pem private key: " + r;
        }
      }
    }),
    (Dr.crypto.Cipher = function (t) {}),
    (Dr.crypto.Cipher.encrypt = function (t, e, r) {
      if (e instanceof Ue && e.isPublic) {
        var n = Dr.crypto.Cipher.getAlgByKeyAndName(e, r);
        if ("RSA" === n) return e.encrypt(t);
        if ("RSAOAEP" === n) return e.encryptOAEP(t, "sha1");
        var i = n.match(/^RSAOAEP(\d+)$/);
        if (null !== i) return e.encryptOAEP(t, "sha" + i[1]);
        throw "Cipher.encrypt: unsupported algorithm for RSAKey: " + r;
      }
      throw "Cipher.encrypt: unsupported key or algorithm";
    }),
    (Dr.crypto.Cipher.decrypt = function (t, e, r) {
      if (e instanceof Ue && e.isPrivate) {
        var n = Dr.crypto.Cipher.getAlgByKeyAndName(e, r);
        if ("RSA" === n) return e.decrypt(t);
        if ("RSAOAEP" === n) return e.decryptOAEP(t, "sha1");
        var i = n.match(/^RSAOAEP(\d+)$/);
        if (null !== i) return e.decryptOAEP(t, "sha" + i[1]);
        throw "Cipher.decrypt: unsupported algorithm for RSAKey: " + r;
      }
      throw "Cipher.decrypt: unsupported key or algorithm";
    }),
    (Dr.crypto.Cipher.getAlgByKeyAndName = function (t, e) {
      if (t instanceof Ue) {
        if (
          -1 !=
          ":RSA:RSAOAEP:RSAOAEP224:RSAOAEP256:RSAOAEP384:RSAOAEP512:".indexOf(e)
        )
          return e;
        if (null === e || void 0 === e) return "RSA";
        throw (
          "getAlgByKeyAndName: not supported algorithm name for RSAKey: " + e
        );
      }
      throw "getAlgByKeyAndName: not supported algorithm name: " + e;
    }),
    (Dr.crypto.OID = new (function () {
      this.oidhex2name = {
        "2a864886f70d010101": "rsaEncryption",
        "2a8648ce3d0201": "ecPublicKey",
        "2a8648ce380401": "dsa",
        "2a8648ce3d030107": "secp256r1",
        "2b8104001f": "secp192k1",
        "2b81040021": "secp224r1",
        "2b8104000a": "secp256k1",
        "2b81040022": "secp384r1",
        "2b81040023": "secp521r1",
        "2a8648ce380403": "SHA1withDSA",
        "608648016503040301": "SHA224withDSA",
        "608648016503040302": "SHA256withDSA",
      };
    })()),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.crypto && Dr.crypto) || (Dr.crypto = {}),
    (Dr.crypto.ECDSA = function (t) {
      var e = "secp256r1",
        r = Error,
        n = m,
        i = fr,
        s = Dr.crypto.ECDSA,
        a = Dr.crypto.ECParameterDB,
        o = s.getName,
        h = Br,
        u = h.getVbyListEx,
        c = h.isASN1HEX,
        l = new Oe();
      ((this.type = "EC"),
        (this.isPrivate = !1),
        (this.isPublic = !1),
        (this.getBigRandom = function (t) {
          return new n(t.bitLength(), l).mod(t.subtract(n.ONE)).add(n.ONE);
        }),
        (this.setNamedCurve = function (t) {
          ((this.ecparams = a.getByName(t)),
            (this.prvKeyHex = null),
            (this.pubKeyHex = null),
            (this.curveName = t));
        }),
        (this.setPrivateKeyHex = function (t) {
          ((this.isPrivate = !0), (this.prvKeyHex = t));
        }),
        (this.setPublicKeyHex = function (t) {
          ((this.isPublic = !0), (this.pubKeyHex = t));
        }),
        (this.getPublicKeyXYHex = function () {
          var t = this.pubKeyHex;
          if ("04" !== t.substr(0, 2))
            throw "this method supports uncompressed format(04) only";
          var e = this.ecparams.keycharlen;
          if (t.length !== 2 + 2 * e) throw "malformed public key hex length";
          var r = {};
          return ((r.x = t.substr(2, e)), (r.y = t.substr(2 + e)), r);
        }),
        (this.getShortNISTPCurveName = function () {
          var t = this.curveName;
          return "secp256r1" === t ||
            "NIST P-256" === t ||
            "P-256" === t ||
            "prime256v1" === t
            ? "P-256"
            : "secp384r1" === t || "NIST P-384" === t || "P-384" === t
              ? "P-384"
              : "secp521r1" === t || "NIST P-521" === t || "P-521" === t
                ? "P-521"
                : null;
        }),
        (this.generateKeyPairHex = function () {
          var t = this.ecparams.n,
            e = this.getBigRandom(t),
            r = this.ecparams.keycharlen,
            n = ("0000000000" + e.toString(16)).slice(-r);
          this.setPrivateKeyHex(n);
          var i = this.generatePublicKeyHex();
          return { ecprvhex: n, ecpubhex: i };
        }),
        (this.generatePublicKeyHex = function () {
          var t = new n(this.prvKeyHex, 16),
            e = this.ecparams.G.multiply(t),
            r = e.getX().toBigInteger(),
            i = e.getY().toBigInteger(),
            s = this.ecparams.keycharlen,
            a = ("0000000000" + r.toString(16)).slice(-s),
            o = ("0000000000" + i.toString(16)).slice(-s),
            h = "04" + a + o;
          return (this.setPublicKeyHex(h), h);
        }),
        (this.signWithMessageHash = function (t) {
          return this.signHex(t, this.prvKeyHex);
        }),
        (this.signHex = function (t, e) {
          var r = new n(e, 16),
            i = this.ecparams.n,
            a = new n(t.substring(0, this.ecparams.keycharlen), 16);
          do {
            var o = this.getBigRandom(i),
              h = this.ecparams.G,
              u = h.multiply(o),
              c = u.getX().toBigInteger().mod(i);
          } while (c.compareTo(n.ZERO) <= 0);
          var l = o
            .modInverse(i)
            .multiply(a.add(r.multiply(c)))
            .mod(i);
          return s.biRSSigToASN1Sig(c, l);
        }),
        (this.sign = function (t, e) {
          var r = e,
            i = this.ecparams.n,
            s = n.fromByteArrayUnsigned(t);
          do {
            var a = this.getBigRandom(i),
              o = this.ecparams.G,
              h = o.multiply(a),
              u = h.getX().toBigInteger().mod(i);
          } while (u.compareTo(m.ZERO) <= 0);
          var c = a
            .modInverse(i)
            .multiply(s.add(r.multiply(u)))
            .mod(i);
          return this.serializeSig(u, c);
        }),
        (this.verifyWithMessageHash = function (t, e) {
          return this.verifyHex(t, e, this.pubKeyHex);
        }),
        (this.verifyHex = function (t, e, r) {
          try {
            var a,
              o,
              h = s.parseSigHex(e);
            ((a = h.r), (o = h.s));
            var u = i.decodeFromHex(this.ecparams.curve, r),
              c = new n(t.substring(0, this.ecparams.keycharlen), 16);
            return this.verifyRaw(c, a, o, u);
          } catch (l) {
            return !1;
          }
        }),
        (this.verify = function (t, e, r) {
          var s, a, o;
          if (Bitcoin.Util.isArray(e)) {
            var h = this.parseSig(e);
            ((s = h.r), (a = h.s));
          } else {
            if ("object" !== typeof e || !e.r || !e.s)
              throw "Invalid value for signature";
            ((s = e.r), (a = e.s));
          }
          if (r instanceof fr) o = r;
          else {
            if (!Bitcoin.Util.isArray(r))
              throw "Invalid format for pubkey value, must be byte array or ECPointFp";
            o = i.decodeFrom(this.ecparams.curve, r);
          }
          var u = n.fromByteArrayUnsigned(t);
          return this.verifyRaw(u, s, a, o);
        }),
        (this.verifyRaw = function (t, e, r, i) {
          var s = this.ecparams.n,
            a = this.ecparams.G;
          if (e.compareTo(n.ONE) < 0 || e.compareTo(s) >= 0) return !1;
          if (r.compareTo(n.ONE) < 0 || r.compareTo(s) >= 0) return !1;
          var o = r.modInverse(s),
            h = t.multiply(o).mod(s),
            u = e.multiply(o).mod(s),
            c = a.multiply(h).add(i.multiply(u)),
            l = c.getX().toBigInteger().mod(s);
          return l.equals(e);
        }),
        (this.serializeSig = function (t, e) {
          var r = t.toByteArraySigned(),
            n = e.toByteArraySigned(),
            i = [];
          return (
            i.push(2),
            i.push(r.length),
            (i = i.concat(r)),
            i.push(2),
            i.push(n.length),
            (i = i.concat(n)),
            i.unshift(i.length),
            i.unshift(48),
            i
          );
        }),
        (this.parseSig = function (t) {
          var e;
          if (48 != t[0]) throw new Error("Signature not a valid DERSequence");
          if (((e = 2), 2 != t[e]))
            throw new Error("First element in signature must be a DERInteger");
          var r = t.slice(e + 2, e + 2 + t[e + 1]);
          if (((e += 2 + t[e + 1]), 2 != t[e]))
            throw new Error("Second element in signature must be a DERInteger");
          var i = t.slice(e + 2, e + 2 + t[e + 1]);
          e += 2 + t[e + 1];
          var s = n.fromByteArrayUnsigned(r),
            a = n.fromByteArrayUnsigned(i);
          return { r: s, s: a };
        }),
        (this.parseSigCompact = function (t) {
          if (65 !== t.length) throw "Signature has the wrong length";
          var e = t[0] - 27;
          if (e < 0 || e > 7) throw "Invalid signature type";
          var r = this.ecparams.n,
            i = n.fromByteArrayUnsigned(t.slice(1, 33)).mod(r),
            s = n.fromByteArrayUnsigned(t.slice(33, 65)).mod(r);
          return { r: i, s: s, i: e };
        }),
        (this.readPKCS5PrvKeyHex = function (t) {
          if (!1 === c(t)) throw new Error("not ASN.1 hex string");
          var e, r, n;
          try {
            ((e = u(t, 0, ["[0]", 0], "06")), (r = u(t, 0, [1], "04")));
            try {
              n = u(t, 0, ["[1]", 0], "03");
            } catch (i) {}
          } catch (i) {
            throw new Error("malformed PKCS#1/5 plain ECC private key");
          }
          if (((this.curveName = o(e)), void 0 === this.curveName))
            throw "unsupported curve name";
          (this.setNamedCurve(this.curveName),
            this.setPublicKeyHex(n),
            this.setPrivateKeyHex(r),
            (this.isPublic = !1));
        }),
        (this.readPKCS8PrvKeyHex = function (t) {
          if (!1 === c(t)) throw new r("not ASN.1 hex string");
          var e, n, i;
          try {
            (u(t, 0, [1, 0], "06"),
              (e = u(t, 0, [1, 1], "06")),
              (n = u(t, 0, [2, 0, 1], "04")));
            try {
              i = u(t, 0, [2, 0, "[1]", 0], "03");
            } catch (s) {}
          } catch (s) {
            throw new r("malformed PKCS#8 plain ECC private key");
          }
          if (((this.curveName = o(e)), void 0 === this.curveName))
            throw new r("unsupported curve name");
          (this.setNamedCurve(this.curveName),
            this.setPublicKeyHex(i),
            this.setPrivateKeyHex(n),
            (this.isPublic = !1));
        }),
        (this.readPKCS8PubKeyHex = function (t) {
          if (!1 === c(t)) throw new r("not ASN.1 hex string");
          var e, n;
          try {
            (u(t, 0, [0, 0], "06"),
              (e = u(t, 0, [0, 1], "06")),
              (n = u(t, 0, [1], "03")));
          } catch (i) {
            throw new r("malformed PKCS#8 ECC public key");
          }
          if (((this.curveName = o(e)), null === this.curveName))
            throw new r("unsupported curve name");
          (this.setNamedCurve(this.curveName), this.setPublicKeyHex(n));
        }),
        (this.readCertPubKeyHex = function (t, e) {
          if (!1 === c(t)) throw new r("not ASN.1 hex string");
          var n, i;
          try {
            ((n = u(t, 0, [0, 5, 0, 1], "06")), (i = u(t, 0, [0, 5, 1], "03")));
          } catch (s) {
            throw new r("malformed X.509 certificate ECC public key");
          }
          if (((this.curveName = o(n)), null === this.curveName))
            throw new r("unsupported curve name");
          (this.setNamedCurve(this.curveName), this.setPublicKeyHex(i));
        }),
        void 0 !== t && void 0 !== t.curve && (this.curveName = t.curve),
        void 0 === this.curveName && (this.curveName = e),
        this.setNamedCurve(this.curveName),
        void 0 !== t &&
          (void 0 !== t.prv && this.setPrivateKeyHex(t.prv),
          void 0 !== t.pub && this.setPublicKeyHex(t.pub)));
    }),
    (Dr.crypto.ECDSA.parseSigHex = function (t) {
      var e = Dr.crypto.ECDSA.parseSigHexInHexRS(t),
        r = new m(e.r, 16),
        n = new m(e.s, 16);
      return { r: r, s: n };
    }),
    (Dr.crypto.ECDSA.parseSigHexInHexRS = function (t) {
      var e = Br,
        r = e.getChildIdx,
        n = e.getV;
      if ((e.checkStrictDER(t, 0), "30" != t.substr(0, 2)))
        throw new Error("signature is not a ASN.1 sequence");
      var i = r(t, 0);
      if (2 != i.length) throw new Error("signature shall have two elements");
      var s = i[0],
        a = i[1];
      if ("02" != t.substr(s, 2)) throw new Error("1st item not ASN.1 integer");
      if ("02" != t.substr(a, 2)) throw new Error("2nd item not ASN.1 integer");
      var o = n(t, s),
        h = n(t, a);
      return { r: o, s: h };
    }),
    (Dr.crypto.ECDSA.asn1SigToConcatSig = function (t) {
      var e = Dr.crypto.ECDSA.parseSigHexInHexRS(t),
        r = e.r,
        n = e.s;
      if (r.length >= 130 && r.length <= 134) {
        if (r.length % 2 != 0) throw Error("unknown ECDSA sig r length error");
        if (n.length % 2 != 0) throw Error("unknown ECDSA sig s length error");
        ("00" == r.substr(0, 2) && (r = r.substr(2)),
          "00" == n.substr(0, 2) && (n = n.substr(2)));
        var i = Math.max(r.length, n.length);
        return (
          (r = ("000000" + r).slice(-i)),
          (n = ("000000" + n).slice(-i)),
          r + n
        );
      }
      if (
        ("00" == r.substr(0, 2) && r.length % 32 == 2 && (r = r.substr(2)),
        "00" == n.substr(0, 2) && n.length % 32 == 2 && (n = n.substr(2)),
        r.length % 32 == 30 && (r = "00" + r),
        n.length % 32 == 30 && (n = "00" + n),
        r.length % 32 != 0)
      )
        throw Error("unknown ECDSA sig r length error");
      if (n.length % 32 != 0) throw Error("unknown ECDSA sig s length error");
      return r + n;
    }),
    (Dr.crypto.ECDSA.concatSigToASN1Sig = function (t) {
      if (t.length % 4 != 0)
        throw Error("unknown ECDSA concatinated r-s sig length error");
      var e = t.substr(0, t.length / 2),
        r = t.substr(t.length / 2);
      return Dr.crypto.ECDSA.hexRSSigToASN1Sig(e, r);
    }),
    (Dr.crypto.ECDSA.hexRSSigToASN1Sig = function (t, e) {
      var r = new m(t, 16),
        n = new m(e, 16);
      return Dr.crypto.ECDSA.biRSSigToASN1Sig(r, n);
    }),
    (Dr.crypto.ECDSA.biRSSigToASN1Sig = function (t, e) {
      var r = Dr.asn1,
        n = new r.DERInteger({ bigint: t }),
        i = new r.DERInteger({ bigint: e }),
        s = new r.DERSequence({ array: [n, i] });
      return s.tohex();
    }),
    (Dr.crypto.ECDSA.getName = function (t) {
      return "2b8104001f" === t
        ? "secp192k1"
        : "2a8648ce3d030107" === t
          ? "secp256r1"
          : "2b8104000a" === t
            ? "secp256k1"
            : "2b81040021" === t
              ? "secp224r1"
              : "2b81040022" === t
                ? "secp384r1"
                : "2b81040023" === t
                  ? "secp521r1"
                  : -1 !== "|secp256r1|NIST P-256|P-256|prime256v1|".indexOf(t)
                    ? "secp256r1"
                    : -1 !== "|secp256k1|".indexOf(t)
                      ? "secp256k1"
                      : -1 !== "|secp224r1|NIST P-224|P-224|".indexOf(t)
                        ? "secp224r1"
                        : -1 !== "|secp384r1|NIST P-384|P-384|".indexOf(t)
                          ? "secp384r1"
                          : -1 !== "|secp521r1|NIST P-521|P-521|".indexOf(t)
                            ? "secp521r1"
                            : null;
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.crypto && Dr.crypto) || (Dr.crypto = {}),
    (Dr.crypto.ECParameterDB = new (function () {
      var t = {},
        e = {};
      function r(t) {
        return new m(t, 16);
      }
      ((this.getByName = function (r) {
        var n = r;
        if (
          ("undefined" != typeof e[n] && (n = e[r]), "undefined" != typeof t[n])
        )
          return t[n];
        throw "unregistered EC curve name: " + n;
      }),
        (this.regist = function (n, i, s, a, o, h, u, c, l, f, d, p) {
          t[n] = {};
          var g = r(s),
            v = r(a),
            m = r(o),
            y = r(h),
            b = r(u),
            w = new Sr(g, v, m),
            x = w.decodePointHex("04" + c + l);
          ((t[n]["name"] = n),
            (t[n]["keylen"] = i),
            (t[n]["keycharlen"] = 2 * Math.ceil(i / 8)),
            (t[n]["curve"] = w),
            (t[n]["G"] = x),
            (t[n]["n"] = y),
            (t[n]["h"] = b),
            (t[n]["oid"] = d),
            (t[n]["info"] = p));
          for (var S = 0; S < f.length; S++) e[f[S]] = n;
        }));
    })()),
    Dr.crypto.ECParameterDB.regist(
      "secp128r1",
      128,
      "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF",
      "FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC",
      "E87579C11079F43DD824993C2CEE5ED3",
      "FFFFFFFE0000000075A30D1B9038A115",
      "1",
      "161FF7528B899B2D0C28607CA52C5B86",
      "CF5AC8395BAFEB13C02DA292DDED7A83",
      [],
      "",
      "secp128r1 : SECG curve over a 128 bit prime field",
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp160k1",
      160,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73",
      "0",
      "7",
      "0100000000000000000001B8FA16DFAB9ACA16B6B3",
      "1",
      "3B4C382CE37AA192A4019E763036F4F5DD4D7EBB",
      "938CF935318FDCED6BC28286531733C3F03C4FEE",
      [],
      "",
      "secp160k1 : SECG curve over a 160 bit prime field",
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp160r1",
      160,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC",
      "1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45",
      "0100000000000000000001F4C8F927AED3CA752257",
      "1",
      "4A96B5688EF573284664698968C38BB913CBFC82",
      "23A628553168947D59DCC912042351377AC5FB32",
      [],
      "",
      "secp160r1 : SECG curve over a 160 bit prime field",
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp192k1",
      192,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37",
      "0",
      "3",
      "FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D",
      "1",
      "DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D",
      "9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",
      [],
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp192r1",
      192,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC",
      "64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1",
      "FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831",
      "1",
      "188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012",
      "07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",
      [],
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp224r1",
      224,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE",
      "B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D",
      "1",
      "B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21",
      "BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",
      [],
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp256k1",
      256,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",
      "0",
      "7",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141",
      "1",
      "79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798",
      "483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",
      [],
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp256r1",
      256,
      "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF",
      "FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC",
      "5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B",
      "FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551",
      "1",
      "6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296",
      "4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",
      ["NIST P-256", "P-256", "prime256v1"],
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp384r1",
      384,
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC",
      "B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF",
      "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973",
      "1",
      "AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7",
      "3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",
      ["NIST P-384", "P-384"],
    ),
    Dr.crypto.ECParameterDB.regist(
      "secp521r1",
      521,
      "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
      "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC",
      "051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00",
      "1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409",
      "1",
      "00C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66",
      "011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",
      ["NIST P-521", "P-521"],
    ),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.crypto && Dr.crypto) || (Dr.crypto = {}),
    (Dr.crypto.DSA = function () {
      var t = Br,
        e = (t.getVbyList, t.getVbyListEx),
        r = t.isASN1HEX,
        n = m;
      ((this.p = null),
        (this.q = null),
        (this.g = null),
        (this.y = null),
        (this.x = null),
        (this.type = "DSA"),
        (this.isPrivate = !1),
        (this.isPublic = !1),
        (this.setPrivate = function (t, e, r, n, i) {
          ((this.isPrivate = !0),
            (this.p = t),
            (this.q = e),
            (this.g = r),
            (this.y = n),
            (this.x = i));
        }),
        (this.setPrivateHex = function (t, e, r, n, i) {
          var s, a, o, h, u;
          ((s = new m(t, 16)),
            (a = new m(e, 16)),
            (o = new m(r, 16)),
            (h = "string" === typeof n && n.length > 1 ? new m(n, 16) : null),
            (u = new m(i, 16)),
            this.setPrivate(s, a, o, h, u));
        }),
        (this.setPublic = function (t, e, r, n) {
          ((this.isPublic = !0),
            (this.p = t),
            (this.q = e),
            (this.g = r),
            (this.y = n),
            (this.x = null));
        }),
        (this.setPublicHex = function (t, e, r, n) {
          var i, s, a, o;
          ((i = new m(t, 16)),
            (s = new m(e, 16)),
            (a = new m(r, 16)),
            (o = new m(n, 16)),
            this.setPublic(i, s, a, o));
        }),
        (this.signWithMessageHash = function (t) {
          var e = this.p,
            r = this.q,
            n = this.g,
            i = (this.y, this.x),
            s = Dr.crypto.Util.getRandomBigIntegerMinToMax(
              m.ONE.add(m.ONE),
              r.subtract(m.ONE),
            ),
            a = t.substr(0, r.bitLength() / 4),
            o = new m(a, 16),
            h = n.modPow(s, e).mod(r),
            u = s
              .modInverse(r)
              .multiply(o.add(i.multiply(h)))
              .mod(r),
            c = Dr.asn1.ASN1Util.jsonToASN1HEX({
              seq: [{ int: { bigint: h } }, { int: { bigint: u } }],
            });
          return c;
        }),
        (this.verifyWithMessageHash = function (t, e) {
          var r = this.p,
            n = this.q,
            i = this.g,
            s = this.y,
            a = this.parseASN1Signature(e),
            o = a[0],
            h = a[1],
            u = t.substr(0, n.bitLength() / 4),
            c = new m(u, 16);
          if (m.ZERO.compareTo(o) > 0 || o.compareTo(n) > 0)
            throw "invalid DSA signature";
          if (m.ZERO.compareTo(h) >= 0 || h.compareTo(n) > 0)
            throw "invalid DSA signature";
          var l = h.modInverse(n),
            f = c.multiply(l).mod(n),
            d = o.multiply(l).mod(n),
            p = i.modPow(f, r).multiply(s.modPow(d, r)).mod(r).mod(n);
          return 0 == p.compareTo(o);
        }),
        (this.parseASN1Signature = function (t) {
          try {
            var r = new n(e(t, 0, [0], "02"), 16),
              i = new n(e(t, 0, [1], "02"), 16);
            return [r, i];
          } catch (s) {
            throw new Error("malformed ASN.1 DSA signature");
          }
        }),
        (this.readPKCS5PrvKeyHex = function (t) {
          var n, i, s, a, o;
          if (!1 === r(t)) throw new Error("not ASN.1 hex string");
          try {
            ((n = e(t, 0, [1], "02")),
              (i = e(t, 0, [2], "02")),
              (s = e(t, 0, [3], "02")),
              (a = e(t, 0, [4], "02")),
              (o = e(t, 0, [5], "02")));
          } catch (h) {
            throw new Error("malformed PKCS#1/5 plain DSA private key");
          }
          this.setPrivateHex(n, i, s, a, o);
        }),
        (this.readPKCS8PrvKeyHex = function (t) {
          var n, i, s, a;
          if (!1 === r(t)) throw new Error("not ASN.1 hex string");
          try {
            ((n = e(t, 0, [1, 1, 0], "02")),
              (i = e(t, 0, [1, 1, 1], "02")),
              (s = e(t, 0, [1, 1, 2], "02")),
              (a = e(t, 0, [2, 0], "02")));
          } catch (o) {
            throw new Error("malformed PKCS#8 plain DSA private key");
          }
          this.setPrivateHex(n, i, s, null, a);
        }),
        (this.readPKCS8PubKeyHex = function (t) {
          var n, i, s, a;
          if (!1 === r(t)) throw new Error("not ASN.1 hex string");
          try {
            ((n = e(t, 0, [0, 1, 0], "02")),
              (i = e(t, 0, [0, 1, 1], "02")),
              (s = e(t, 0, [0, 1, 2], "02")),
              (a = e(t, 0, [1, 0], "02")));
          } catch (o) {
            throw new Error("malformed PKCS#8 DSA public key");
          }
          this.setPublicHex(n, i, s, a);
        }),
        (this.readCertPubKeyHex = function (t, n) {
          var i, s, a, o;
          if (!1 === r(t)) throw new Error("not ASN.1 hex string");
          try {
            ((i = e(t, 0, [0, 5, 0, 1, 0], "02")),
              (s = e(t, 0, [0, 5, 0, 1, 1], "02")),
              (a = e(t, 0, [0, 5, 0, 1, 2], "02")),
              (o = e(t, 0, [0, 5, 1, 0], "02")));
          } catch (h) {
            throw new Error("malformed X.509 certificate DSA public key");
          }
          this.setPublicHex(i, s, a, o);
        }));
    }));
  var Kn = (function () {
    var t = function (t, e, r) {
        return n(h.AES, t, e, r);
      },
      e = function (t, e, r) {
        return n(h.TripleDES, t, e, r);
      },
      r = function (t, e, r) {
        return n(h.DES, t, e, r);
      },
      n = function (t, e, r, n) {
        var i = h.enc.Hex.parse(e),
          s = h.enc.Hex.parse(r),
          a = h.enc.Hex.parse(n),
          o = {};
        ((o.key = s), (o.iv = a), (o.ciphertext = i));
        var u = t.decrypt(o, s, { iv: a });
        return h.enc.Hex.stringify(u);
      },
      i = function (t, e, r) {
        return o(h.AES, t, e, r);
      },
      s = function (t, e, r) {
        return o(h.TripleDES, t, e, r);
      },
      a = function (t, e, r) {
        return o(h.DES, t, e, r);
      },
      o = function (t, e, r, n) {
        var i = h.enc.Hex.parse(e),
          s = h.enc.Hex.parse(r),
          a = h.enc.Hex.parse(n),
          o = t.encrypt(i, s, { iv: a }),
          u = h.enc.Hex.parse(o.toString()),
          c = h.enc.Base64.stringify(u);
        return c;
      },
      u = {
        "AES-256-CBC": { proc: t, eproc: i, keylen: 32, ivlen: 16 },
        "AES-192-CBC": { proc: t, eproc: i, keylen: 24, ivlen: 16 },
        "AES-128-CBC": { proc: t, eproc: i, keylen: 16, ivlen: 16 },
        "DES-EDE3-CBC": { proc: e, eproc: s, keylen: 24, ivlen: 8 },
        "DES-CBC": { proc: r, eproc: a, keylen: 8, ivlen: 8 },
      },
      c = function (t) {
        var e = h.lib.WordArray.random(t),
          r = h.enc.Hex.stringify(e);
        return r;
      },
      l = function (t) {
        var e = {},
          r = t.match(new RegExp("DEK-Info: ([^,]+),([0-9A-Fa-f]+)", "m"));
        r && ((e.cipher = r[1]), (e.ivsalt = r[2]));
        var n = t.match(new RegExp("-----BEGIN ([A-Z]+) PRIVATE KEY-----"));
        n && (e.type = n[1]);
        var i = -1,
          s = 0;
        (-1 != t.indexOf("\r\n\r\n") && ((i = t.indexOf("\r\n\r\n")), (s = 2)),
          -1 != t.indexOf("\n\n") && ((i = t.indexOf("\n\n")), (s = 1)));
        var a = t.indexOf("-----END");
        if (-1 != i && -1 != a) {
          var o = t.substring(i + 2 * s, a - s);
          ((o = o.replace(/\s+/g, "")), (e.data = o));
        }
        return e;
      },
      f = function (t, e, r) {
        for (
          var n = r.substring(0, 16),
            i = h.enc.Hex.parse(n),
            s = h.enc.Utf8.parse(e),
            a = u[t]["keylen"] + u[t]["ivlen"],
            o = "",
            c = null;
          ;
        ) {
          var l = h.algo.MD5.create();
          if (
            (null != c && l.update(c),
            l.update(s),
            l.update(i),
            (c = l.finalize()),
            (o += h.enc.Hex.stringify(c)),
            o.length >= 2 * a)
          )
            break;
        }
        var f = {};
        return (
          (f.keyhex = o.substr(0, 2 * u[t]["keylen"])),
          (f.ivhex = o.substr(2 * u[t]["keylen"], 2 * u[t]["ivlen"])),
          f
        );
      },
      d = function (t, e, r, n) {
        var i = h.enc.Base64.parse(t),
          s = h.enc.Hex.stringify(i),
          a = u[e]["proc"],
          o = a(s, r, n);
        return o;
      },
      p = function (t, e, r, n) {
        var i = u[e]["eproc"],
          s = i(t, r, n);
        return s;
      };
    return {
      version: "1.0.0",
      parsePKCS5PEM: function (t) {
        return l(t);
      },
      getKeyAndUnusedIvByPasscodeAndIvsalt: function (t, e, r) {
        return f(t, e, r);
      },
      decryptKeyB64: function (t, e, r, n) {
        return d(t, e, r, n);
      },
      getDecryptedKeyHex: function (t, e) {
        var r = l(t),
          n = (r.type, r.cipher),
          i = r.ivsalt,
          s = r.data,
          a = f(n, e, i),
          o = a.keyhex,
          h = d(s, n, o, i);
        return h;
      },
      getEncryptedPKCS5PEMFromPrvKeyHex: function (t, e, r, n, i) {
        var s = "";
        if (
          (("undefined" != typeof n && null != n) || (n = "AES-256-CBC"),
          "undefined" == typeof u[n])
        )
          throw new Error("KEYUTIL unsupported algorithm: " + n);
        if ("undefined" == typeof i || null == i) {
          var a = u[n]["ivlen"],
            o = c(a);
          i = o.toUpperCase();
        }
        var h = f(n, r, i),
          l = h.keyhex,
          d = p(e, n, l, i),
          g = d.replace(/(.{64})/g, "$1\r\n");
        s = "-----BEGIN " + t + " PRIVATE KEY-----\r\n";
        return (
          (s += "Proc-Type: 4,ENCRYPTED\r\n"),
          (s += "DEK-Info: " + n + "," + i + "\r\n"),
          (s += "\r\n"),
          (s += g),
          (s += "\r\n-----END " + t + " PRIVATE KEY-----\r\n"),
          s
        );
      },
      parseHexOfEncryptedPKCS8: function (t) {
        var e = Br,
          r = e.getChildIdx,
          n = e.getV,
          i = {},
          s = r(t, 0);
        if (2 != s.length)
          throw new Error(
            "malformed format: SEQUENCE(0).items != 2: " + s.length,
          );
        i.ciphertext = n(t, s[1]);
        var a = r(t, s[0]);
        if (2 != a.length)
          throw new Error(
            "malformed format: SEQUENCE(0.0).items != 2: " + a.length,
          );
        if ("2a864886f70d01050d" != n(t, a[0]))
          throw new Error("this only supports pkcs5PBES2");
        var o = r(t, a[1]);
        if (2 != a.length)
          throw new Error(
            "malformed format: SEQUENCE(0.0.1).items != 2: " + o.length,
          );
        var h = r(t, o[1]);
        if (2 != h.length)
          throw new Error(
            "malformed format: SEQUENCE(0.0.1.1).items != 2: " + h.length,
          );
        if ("2a864886f70d0307" != n(t, h[0]))
          throw "this only supports TripleDES";
        ((i.encryptionSchemeAlg = "TripleDES"),
          (i.encryptionSchemeIV = n(t, h[1])));
        var u = r(t, o[0]);
        if (2 != u.length)
          throw new Error(
            "malformed format: SEQUENCE(0.0.1.0).items != 2: " + u.length,
          );
        if ("2a864886f70d01050c" != n(t, u[0]))
          throw new Error("this only supports pkcs5PBKDF2");
        var c = r(t, u[1]);
        if (c.length < 2)
          throw new Error(
            "malformed format: SEQUENCE(0.0.1.0.1).items < 2: " + c.length,
          );
        i.pbkdf2Salt = n(t, c[0]);
        var l = n(t, c[1]);
        try {
          i.pbkdf2Iter = parseInt(l, 16);
        } catch (f) {
          throw new Error("malformed format pbkdf2Iter: " + l);
        }
        return i;
      },
      getPBKDF2KeyHexFromParam: function (t, e) {
        var r = h.enc.Hex.parse(t.pbkdf2Salt),
          n = t.pbkdf2Iter,
          i = h.PBKDF2(e, r, { keySize: 6, iterations: n }),
          s = h.enc.Hex.stringify(i);
        return s;
      },
      _getPlainPKCS8HexFromEncryptedPKCS8PEM: function (t, e) {
        var r = on(t, "ENCRYPTED PRIVATE KEY"),
          n = this.parseHexOfEncryptedPKCS8(r),
          i = Kn.getPBKDF2KeyHexFromParam(n, e),
          s = {};
        s.ciphertext = h.enc.Hex.parse(n.ciphertext);
        var a = h.enc.Hex.parse(i),
          o = h.enc.Hex.parse(n.encryptionSchemeIV),
          u = h.TripleDES.decrypt(s, a, { iv: o }),
          c = h.enc.Hex.stringify(u);
        return c;
      },
      getKeyFromEncryptedPKCS8PEM: function (t, e) {
        var r = this._getPlainPKCS8HexFromEncryptedPKCS8PEM(t, e),
          n = this.getKeyFromPlainPrivatePKCS8Hex(r);
        return n;
      },
      parsePlainPrivatePKCS8Hex: function (t) {
        var e = Br,
          r = e.getChildIdx,
          n = e.getV,
          i = { algparam: null };
        if ("30" != t.substr(0, 2))
          throw new Error("malformed plain PKCS8 private key(code:001)");
        var s = r(t, 0);
        if (s.length < 3)
          throw new Error("malformed plain PKCS8 private key(code:002)");
        if ("30" != t.substr(s[1], 2))
          throw new Error("malformed PKCS8 private key(code:003)");
        var a = r(t, s[1]);
        if (2 != a.length)
          throw new Error("malformed PKCS8 private key(code:004)");
        if ("06" != t.substr(a[0], 2))
          throw new Error("malformed PKCS8 private key(code:005)");
        if (
          ((i.algoid = n(t, a[0])),
          "06" == t.substr(a[1], 2) && (i.algparam = n(t, a[1])),
          "04" != t.substr(s[2], 2))
        )
          throw new Error("malformed PKCS8 private key(code:006)");
        return ((i.keyidx = e.getVidx(t, s[2])), i);
      },
      getKeyFromPlainPrivatePKCS8PEM: function (t) {
        var e = on(t, "PRIVATE KEY"),
          r = this.getKeyFromPlainPrivatePKCS8Hex(e);
        return r;
      },
      getKeyFromPlainPrivatePKCS8Hex: function (t) {
        var e,
          r = this.parsePlainPrivatePKCS8Hex(t);
        if ("2a864886f70d010101" == r.algoid) e = new Ue();
        else if ("2a8648ce380401" == r.algoid) e = new Dr.crypto.DSA();
        else {
          if ("2a8648ce3d0201" != r.algoid)
            throw new Error("unsupported private key algorithm");
          e = new Dr.crypto.ECDSA();
        }
        return (e.readPKCS8PrvKeyHex(t), e);
      },
      _getKeyFromPublicPKCS8Hex: function (t) {
        var e,
          r = Br.getVbyList(t, 0, [0, 0], "06");
        if ("2a864886f70d010101" === r) e = new Ue();
        else if ("2a8648ce380401" === r) e = new Dr.crypto.DSA();
        else {
          if ("2a8648ce3d0201" !== r)
            throw new Error("unsupported PKCS#8 public key hex");
          e = new Dr.crypto.ECDSA();
        }
        return (e.readPKCS8PubKeyHex(t), e);
      },
      parsePublicRawRSAKeyHex: function (t) {
        var e = Br,
          r = e.getChildIdx,
          n = e.getV,
          i = {};
        if ("30" != t.substr(0, 2))
          throw new Error("malformed RSA key(code:001)");
        var s = r(t, 0);
        if (2 != s.length) throw new Error("malformed RSA key(code:002)");
        if ("02" != t.substr(s[0], 2))
          throw new Error("malformed RSA key(code:003)");
        if (((i.n = n(t, s[0])), "02" != t.substr(s[1], 2)))
          throw new Error("malformed RSA key(code:004)");
        return ((i.e = n(t, s[1])), i);
      },
      parsePublicPKCS8Hex: function (t) {
        var e = Br,
          r = e.getChildIdx,
          n = e.getV,
          i = { algparam: null },
          s = r(t, 0);
        if (2 != s.length)
          throw new Error(
            "outer DERSequence shall have 2 elements: " + s.length,
          );
        var a = s[0];
        if ("30" != t.substr(a, 2))
          throw new Error("malformed PKCS8 public key(code:001)");
        var o = r(t, a);
        if (2 != o.length)
          throw new Error("malformed PKCS8 public key(code:002)");
        if ("06" != t.substr(o[0], 2))
          throw new Error("malformed PKCS8 public key(code:003)");
        if (
          ((i.algoid = n(t, o[0])),
          "06" == t.substr(o[1], 2)
            ? (i.algparam = n(t, o[1]))
            : "30" == t.substr(o[1], 2) &&
              ((i.algparam = {}),
              (i.algparam.p = e.getVbyList(t, o[1], [0], "02")),
              (i.algparam.q = e.getVbyList(t, o[1], [1], "02")),
              (i.algparam.g = e.getVbyList(t, o[1], [2], "02"))),
          "03" != t.substr(s[1], 2))
        )
          throw new Error("malformed PKCS8 public key(code:004)");
        return ((i.key = n(t, s[1]).substr(2)), i);
      },
    };
  })();
  ((Kn.getKey = function (t, e, r) {
    var n = Br,
      i = n.getChildIdx,
      s = (n.getV, n.getVbyList),
      a = Dr.crypto,
      o = a.ECDSA,
      h = a.DSA,
      u = Ue,
      c = on,
      l = Kn;
    if ("undefined" != typeof u && t instanceof u) return t;
    if ("undefined" != typeof o && t instanceof o) return t;
    if ("undefined" != typeof h && t instanceof h) return t;
    if (void 0 !== t.curve && void 0 !== t.xy && void 0 === t.d)
      return new o({ pub: t.xy, curve: t.curve });
    if (void 0 !== t.curve && void 0 !== t.d)
      return new o({ prv: t.d, curve: t.curve });
    if (
      void 0 === t.kty &&
      void 0 !== t.n &&
      void 0 !== t.e &&
      void 0 === t.d
    ) {
      var f = new u();
      return (f.setPublic(t.n, t.e), f);
    }
    if (
      void 0 === t.kty &&
      void 0 !== t.n &&
      void 0 !== t.e &&
      void 0 !== t.d &&
      void 0 !== t.p &&
      void 0 !== t.q &&
      void 0 !== t.dp &&
      void 0 !== t.dq &&
      void 0 !== t.co &&
      void 0 === t.qi
    ) {
      f = new u();
      return (f.setPrivateEx(t.n, t.e, t.d, t.p, t.q, t.dp, t.dq, t.co), f);
    }
    if (
      void 0 === t.kty &&
      void 0 !== t.n &&
      void 0 !== t.e &&
      void 0 !== t.d &&
      void 0 === t.p
    ) {
      f = new u();
      return (f.setPrivate(t.n, t.e, t.d), f);
    }
    if (
      void 0 !== t.p &&
      void 0 !== t.q &&
      void 0 !== t.g &&
      void 0 !== t.y &&
      void 0 === t.x
    ) {
      f = new h();
      return (f.setPublic(t.p, t.q, t.g, t.y), f);
    }
    if (
      void 0 !== t.p &&
      void 0 !== t.q &&
      void 0 !== t.g &&
      void 0 !== t.y &&
      void 0 !== t.x
    ) {
      f = new h();
      return (f.setPrivate(t.p, t.q, t.g, t.y, t.x), f);
    }
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 === t.d) {
      f = new u();
      return (f.setPublic(zr(t.n), zr(t.e)), f);
    }
    if (
      "RSA" === t.kty &&
      void 0 !== t.n &&
      void 0 !== t.e &&
      void 0 !== t.d &&
      void 0 !== t.p &&
      void 0 !== t.q &&
      void 0 !== t.dp &&
      void 0 !== t.dq &&
      void 0 !== t.qi
    ) {
      f = new u();
      return (
        f.setPrivateEx(
          zr(t.n),
          zr(t.e),
          zr(t.d),
          zr(t.p),
          zr(t.q),
          zr(t.dp),
          zr(t.dq),
          zr(t.qi),
        ),
        f
      );
    }
    if ("RSA" === t.kty && void 0 !== t.n && void 0 !== t.e && void 0 !== t.d) {
      f = new u();
      return (f.setPrivate(zr(t.n), zr(t.e), zr(t.d)), f);
    }
    if (
      "EC" === t.kty &&
      void 0 !== t.crv &&
      void 0 !== t.x &&
      void 0 !== t.y &&
      void 0 === t.d
    ) {
      var d = new o({ curve: t.crv }),
        p = d.ecparams.keycharlen,
        g = ("0000000000" + zr(t.x)).slice(-p),
        v = ("0000000000" + zr(t.y)).slice(-p),
        y = "04" + g + v;
      return (d.setPublicKeyHex(y), d);
    }
    if (
      "EC" === t.kty &&
      void 0 !== t.crv &&
      void 0 !== t.x &&
      void 0 !== t.y &&
      void 0 !== t.d
    ) {
      ((d = new o({ curve: t.crv })),
        (p = d.ecparams.keycharlen),
        (g = ("0000000000" + zr(t.x)).slice(-p)),
        (v = ("0000000000" + zr(t.y)).slice(-p)),
        (y = "04" + g + v));
      var b = ("0000000000" + zr(t.d)).slice(-p);
      return (d.setPublicKeyHex(y), d.setPrivateKeyHex(b), d);
    }
    if ("pkcs5prv" === r) {
      var w,
        x = t;
      n = Br;
      if (((w = i(x, 0)), 9 === w.length))
        ((f = new u()), f.readPKCS5PrvKeyHex(x));
      else if (6 === w.length) ((f = new h()), f.readPKCS5PrvKeyHex(x));
      else {
        if (!(w.length > 2 && "04" === x.substr(w[1], 2)))
          throw new Error("unsupported PKCS#1/5 hexadecimal key");
        ((f = new o()), f.readPKCS5PrvKeyHex(x));
      }
      return f;
    }
    if ("pkcs8prv" === r) {
      f = l.getKeyFromPlainPrivatePKCS8Hex(t);
      return f;
    }
    if ("pkcs8pub" === r) return l._getKeyFromPublicPKCS8Hex(t);
    if ("x509pub" === r) return Jn.getPublicKeyFromCertHex(t);
    if (
      -1 != t.indexOf("-END CERTIFICATE-", 0) ||
      -1 != t.indexOf("-END X509 CERTIFICATE-", 0) ||
      -1 != t.indexOf("-END TRUSTED CERTIFICATE-", 0)
    )
      return Jn.getPublicKeyFromCertPEM(t);
    if (-1 != t.indexOf("-END PUBLIC KEY-")) {
      var S = on(t, "PUBLIC KEY");
      return l._getKeyFromPublicPKCS8Hex(S);
    }
    if (
      -1 != t.indexOf("-END RSA PRIVATE KEY-") &&
      -1 == t.indexOf("4,ENCRYPTED")
    ) {
      var A = c(t, "RSA PRIVATE KEY");
      return l.getKey(A, null, "pkcs5prv");
    }
    if (
      -1 != t.indexOf("-END DSA PRIVATE KEY-") &&
      -1 == t.indexOf("4,ENCRYPTED")
    ) {
      var E = c(t, "DSA PRIVATE KEY"),
        F = s(E, 0, [1], "02"),
        N = s(E, 0, [2], "02"),
        P = s(E, 0, [3], "02"),
        I = s(E, 0, [4], "02"),
        L = s(E, 0, [5], "02");
      f = new h();
      return (
        f.setPrivate(
          new m(F, 16),
          new m(N, 16),
          new m(P, 16),
          new m(I, 16),
          new m(L, 16),
        ),
        f
      );
    }
    if (
      -1 != t.indexOf("-END EC PRIVATE KEY-") &&
      -1 == t.indexOf("4,ENCRYPTED")
    ) {
      A = c(t, "EC PRIVATE KEY");
      return l.getKey(A, null, "pkcs5prv");
    }
    if (-1 != t.indexOf("-END PRIVATE KEY-"))
      return l.getKeyFromPlainPrivatePKCS8PEM(t);
    if (
      -1 != t.indexOf("-END RSA PRIVATE KEY-") &&
      -1 != t.indexOf("4,ENCRYPTED")
    ) {
      var C = l.getDecryptedKeyHex(t, e),
        D = new Ue();
      return (D.readPKCS5PrvKeyHex(C), D);
    }
    if (
      -1 != t.indexOf("-END EC PRIVATE KEY-") &&
      -1 != t.indexOf("4,ENCRYPTED")
    ) {
      ((E = l.getDecryptedKeyHex(t, e)), (f = s(E, 0, [1], "04")));
      var _ = s(E, 0, [2, 0], "06"),
        R = s(E, 0, [3, 0], "03").substr(2),
        B = "";
      if (void 0 === Dr.crypto.OID.oidhex2name[_])
        throw new Error("undefined OID(hex) in KJUR.crypto.OID: " + _);
      B = Dr.crypto.OID.oidhex2name[_];
      d = new o({ curve: B });
      return (
        d.setPublicKeyHex(R),
        d.setPrivateKeyHex(f),
        (d.isPublic = !1),
        d
      );
    }
    if (
      -1 != t.indexOf("-END DSA PRIVATE KEY-") &&
      -1 != t.indexOf("4,ENCRYPTED")
    ) {
      ((E = l.getDecryptedKeyHex(t, e)),
        (F = s(E, 0, [1], "02")),
        (N = s(E, 0, [2], "02")),
        (P = s(E, 0, [3], "02")),
        (I = s(E, 0, [4], "02")),
        (L = s(E, 0, [5], "02")),
        (f = new h()));
      return (
        f.setPrivate(
          new m(F, 16),
          new m(N, 16),
          new m(P, 16),
          new m(I, 16),
          new m(L, 16),
        ),
        f
      );
    }
    if (-1 != t.indexOf("-END ENCRYPTED PRIVATE KEY-"))
      return l.getKeyFromEncryptedPKCS8PEM(t, e);
    throw new Error("not supported argument");
  }),
    (Kn.generateKeypair = function (t, e) {
      if ("RSA" == t) {
        var r = e,
          n = new Ue();
        (n.generate(r, "10001"), (n.isPrivate = !0), (n.isPublic = !0));
        var i = new Ue(),
          s = n.n.toString(16),
          a = n.e.toString(16);
        (i.setPublic(s, a), (i.isPrivate = !1), (i.isPublic = !0));
        var o = {};
        return ((o.prvKeyObj = n), (o.pubKeyObj = i), o);
      }
      if ("EC" == t) {
        var h = e,
          u = new Dr.crypto.ECDSA({ curve: h }),
          c = u.generateKeyPairHex();
        n = new Dr.crypto.ECDSA({ curve: h });
        (n.setPublicKeyHex(c.ecpubhex),
          n.setPrivateKeyHex(c.ecprvhex),
          (n.isPrivate = !0),
          (n.isPublic = !1));
        i = new Dr.crypto.ECDSA({ curve: h });
        (i.setPublicKeyHex(c.ecpubhex), (i.isPrivate = !1), (i.isPublic = !0));
        o = {};
        return ((o.prvKeyObj = n), (o.pubKeyObj = i), o);
      }
      throw new Error("unknown algorithm: " + t);
    }),
    (Kn.getPEM = function (t, e, r, n, i, s) {
      var a = Dr,
        o = a.asn1,
        u = o.DERObjectIdentifier,
        c = o.DERInteger,
        l = o.ASN1Util.newObject,
        f = o.x509,
        d = f.SubjectPublicKeyInfo,
        p = a.crypto,
        g = p.DSA,
        v = p.ECDSA,
        m = Ue;
      function y(t) {
        var e = l({
          seq: [
            { int: 0 },
            { int: { bigint: t.n } },
            { int: t.e },
            { int: { bigint: t.d } },
            { int: { bigint: t.p } },
            { int: { bigint: t.q } },
            { int: { bigint: t.dmp1 } },
            { int: { bigint: t.dmq1 } },
            { int: { bigint: t.coeff } },
          ],
        });
        return e;
      }
      function b(t) {
        var e = l({
          seq: [
            { int: 1 },
            { octstr: { hex: t.prvKeyHex } },
            { tag: ["a0", !0, { oid: { name: t.curveName } }] },
            { tag: ["a1", !0, { bitstr: { hex: "00" + t.pubKeyHex } }] },
          ],
        });
        return e;
      }
      function w(t) {
        var e = l({
          seq: [
            { int: 0 },
            { int: { bigint: t.p } },
            { int: { bigint: t.q } },
            { int: { bigint: t.g } },
            { int: { bigint: t.y } },
            { int: { bigint: t.x } },
          ],
        });
        return e;
      }
      if (
        ((void 0 !== m && t instanceof m) ||
          (void 0 !== g && t instanceof g) ||
          (void 0 !== v && t instanceof v)) &&
        1 == t.isPublic &&
        (void 0 === e || "PKCS8PUB" == e)
      ) {
        var x = new d(t),
          S = x.tohex();
        return an(S, "PUBLIC KEY");
      }
      if (
        "PKCS1PRV" == e &&
        void 0 !== m &&
        t instanceof m &&
        (void 0 === r || null == r) &&
        1 == t.isPrivate
      ) {
        ((x = y(t)), (S = x.tohex()));
        return an(S, "RSA PRIVATE KEY");
      }
      if (
        "PKCS1PRV" == e &&
        void 0 !== v &&
        t instanceof v &&
        (void 0 === r || null == r) &&
        1 == t.isPrivate
      ) {
        var A = new u({ name: t.curveName }),
          E = A.tohex(),
          F = b(t),
          N = F.tohex(),
          P = "";
        return (
          (P += an(E, "EC PARAMETERS")),
          (P += an(N, "EC PRIVATE KEY")),
          P
        );
      }
      if (
        "PKCS1PRV" == e &&
        void 0 !== g &&
        t instanceof g &&
        (void 0 === r || null == r) &&
        1 == t.isPrivate
      ) {
        ((x = w(t)), (S = x.tohex()));
        return an(S, "DSA PRIVATE KEY");
      }
      if (
        "PKCS5PRV" == e &&
        void 0 !== m &&
        t instanceof m &&
        void 0 !== r &&
        null != r &&
        1 == t.isPrivate
      ) {
        ((x = y(t)), (S = x.tohex()));
        return (
          void 0 === n && (n = "DES-EDE3-CBC"),
          this.getEncryptedPKCS5PEMFromPrvKeyHex("RSA", S, r, n, s)
        );
      }
      if (
        "PKCS5PRV" == e &&
        void 0 !== v &&
        t instanceof v &&
        void 0 !== r &&
        null != r &&
        1 == t.isPrivate
      ) {
        ((x = b(t)), (S = x.tohex()));
        return (
          void 0 === n && (n = "DES-EDE3-CBC"),
          this.getEncryptedPKCS5PEMFromPrvKeyHex("EC", S, r, n, s)
        );
      }
      if (
        "PKCS5PRV" == e &&
        void 0 !== g &&
        t instanceof g &&
        void 0 !== r &&
        null != r &&
        1 == t.isPrivate
      ) {
        ((x = w(t)), (S = x.tohex()));
        return (
          void 0 === n && (n = "DES-EDE3-CBC"),
          this.getEncryptedPKCS5PEMFromPrvKeyHex("DSA", S, r, n, s)
        );
      }
      var I = function (t, e) {
          var r = L(t, e),
            n = new l({
              seq: [
                {
                  seq: [
                    { oid: { name: "pkcs5PBES2" } },
                    {
                      seq: [
                        {
                          seq: [
                            { oid: { name: "pkcs5PBKDF2" } },
                            {
                              seq: [
                                { octstr: { hex: r.pbkdf2Salt } },
                                { int: r.pbkdf2Iter },
                              ],
                            },
                          ],
                        },
                        {
                          seq: [
                            { oid: { name: "des-EDE3-CBC" } },
                            { octstr: { hex: r.encryptionSchemeIV } },
                          ],
                        },
                      ],
                    },
                  ],
                },
                { octstr: { hex: r.ciphertext } },
              ],
            });
          return n.tohex();
        },
        L = function (t, e) {
          var r = 100,
            n = h.lib.WordArray.random(8),
            i = "DES-EDE3-CBC",
            s = h.lib.WordArray.random(8),
            a = h.PBKDF2(e, n, { keySize: 6, iterations: r }),
            o = h.enc.Hex.parse(t),
            u = h.TripleDES.encrypt(o, a, { iv: s }) + "",
            c = {};
          return (
            (c.ciphertext = u),
            (c.pbkdf2Salt = h.enc.Hex.stringify(n)),
            (c.pbkdf2Iter = r),
            (c.encryptionSchemeAlg = i),
            (c.encryptionSchemeIV = h.enc.Hex.stringify(s)),
            c
          );
        };
      if (
        "PKCS8PRV" == e &&
        void 0 != m &&
        t instanceof m &&
        1 == t.isPrivate
      ) {
        var C = y(t),
          D = C.tohex();
        ((x = l({
          seq: [
            { int: 0 },
            { seq: [{ oid: { name: "rsaEncryption" } }, { null: !0 }] },
            { octstr: { hex: D } },
          ],
        })),
          (S = x.tohex()));
        if (void 0 === r || null == r) return an(S, "PRIVATE KEY");
        N = I(S, r);
        return an(N, "ENCRYPTED PRIVATE KEY");
      }
      if (
        "PKCS8PRV" == e &&
        void 0 !== v &&
        t instanceof v &&
        1 == t.isPrivate
      ) {
        var _ = { seq: [{ int: 1 }, { octstr: { hex: t.prvKeyHex } }] };
        "string" == typeof t.pubKeyHex &&
          _.seq.push({
            tag: ["a1", !0, { bitstr: { hex: "00" + t.pubKeyHex } }],
          });
        ((C = new l(_)),
          (D = C.tohex()),
          (x = l({
            seq: [
              { int: 0 },
              {
                seq: [
                  { oid: { name: "ecPublicKey" } },
                  { oid: { name: t.curveName } },
                ],
              },
              { octstr: { hex: D } },
            ],
          })),
          (S = x.tohex()));
        if (void 0 === r || null == r) return an(S, "PRIVATE KEY");
        N = I(S, r);
        return an(N, "ENCRYPTED PRIVATE KEY");
      }
      if (
        "PKCS8PRV" == e &&
        void 0 !== g &&
        t instanceof g &&
        1 == t.isPrivate
      ) {
        ((C = new c({ bigint: t.x })),
          (D = C.tohex()),
          (x = l({
            seq: [
              { int: 0 },
              {
                seq: [
                  { oid: { name: "dsa" } },
                  {
                    seq: [
                      { int: { bigint: t.p } },
                      { int: { bigint: t.q } },
                      { int: { bigint: t.g } },
                    ],
                  },
                ],
              },
              { octstr: { hex: D } },
            ],
          })),
          (S = x.tohex()));
        if (void 0 === r || null == r) return an(S, "PRIVATE KEY");
        N = I(S, r);
        return an(N, "ENCRYPTED PRIVATE KEY");
      }
      throw new Error("unsupported object nor format");
    }),
    (Kn.getKeyFromCSRPEM = function (t) {
      var e = on(t, "CERTIFICATE REQUEST"),
        r = Kn.getKeyFromCSRHex(e);
      return r;
    }),
    (Kn.getKeyFromCSRHex = function (t) {
      var e = Kn.parseCSRHex(t),
        r = Kn.getKey(e.p8pubkeyhex, null, "pkcs8pub");
      return r;
    }),
    (Kn.parseCSRHex = function (t) {
      var e = Br,
        r = e.getChildIdx,
        n = e.getTLV,
        i = {},
        s = t;
      if ("30" != s.substr(0, 2)) throw new Error("malformed CSR(code:001)");
      var a = r(s, 0);
      if (a.length < 1) throw new Error("malformed CSR(code:002)");
      if ("30" != s.substr(a[0], 2)) throw new Error("malformed CSR(code:003)");
      var o = r(s, a[0]);
      if (o.length < 3) throw new Error("malformed CSR(code:004)");
      return ((i.p8pubkeyhex = n(s, o[2])), i);
    }),
    (Kn.getKeyID = function (t) {
      var e = Kn,
        r = Br;
      "string" === typeof t && -1 != t.indexOf("BEGIN ") && (t = e.getKey(t));
      var n = on(e.getPEM(t)),
        i = r.getIdxbyList(n, 0, [1]),
        s = r.getV(n, i).substring(2);
      return Dr.crypto.Util.hashHex(s, "sha1");
    }),
    (Kn.getJWK = function (t, e, r, n, i) {
      var s,
        a,
        o = {},
        h = Dr.crypto.Util.hashHex;
      if ("string" == typeof t)
        ((s = Kn.getKey(t)), -1 != t.indexOf("CERTIFICATE") && (a = on(t)));
      else {
        if ("object" != typeof t) throw new Error("unsupported keyinfo type");
        t instanceof Jn ? ((s = t.getPublicKey()), (a = t.hex)) : (s = t);
      }
      if (s instanceof Ue && s.isPrivate)
        ((o.kty = "RSA"),
          (o.n = Kr(s.n.toString(16))),
          (o.e = Kr(s.e.toString(16))),
          (o.d = Kr(s.d.toString(16))),
          (o.p = Kr(s.p.toString(16))),
          (o.q = Kr(s.q.toString(16))),
          (o.dp = Kr(s.dmp1.toString(16))),
          (o.dq = Kr(s.dmq1.toString(16))),
          (o.qi = Kr(s.coeff.toString(16))));
      else if (s instanceof Ue && s.isPublic)
        ((o.kty = "RSA"),
          (o.n = Kr(s.n.toString(16))),
          (o.e = Kr(s.e.toString(16))));
      else if (s instanceof Dr.crypto.ECDSA && s.isPrivate) {
        var u = s.getShortNISTPCurveName();
        if ("P-256" !== u && "P-384" !== u && "P-521" !== u)
          throw new Error("unsupported curve name for JWT: " + u);
        var c = s.getPublicKeyXYHex();
        ((o.kty = "EC"),
          (o.crv = u),
          (o.x = Kr(c.x)),
          (o.y = Kr(c.y)),
          (o.d = Kr(s.prvKeyHex)));
      } else if (s instanceof Dr.crypto.ECDSA && s.isPublic) {
        u = s.getShortNISTPCurveName();
        if ("P-256" !== u && "P-384" !== u && "P-521" !== u)
          throw new Error("unsupported curve name for JWT: " + u);
        c = s.getPublicKeyXYHex();
        ((o.kty = "EC"), (o.crv = u), (o.x = Kr(c.x)), (o.y = Kr(c.y)));
      }
      if (void 0 == o.kty) throw new Error("unsupported keyinfo");
      return (
        s.isPrivate || 1 == e || (o.kid = Dr.jws.JWS.getJWKthumbprint(o)),
        void 0 != a && 1 != r && (o.x5c = [f(a)]),
        void 0 != a && 1 != n && (o.x5t = Vr(f(h(a, "sha1")))),
        void 0 != a && 1 != i && (o["x5t#S256"] = Vr(f(h(a, "sha256")))),
        o
      );
    }),
    (Kn.getJWKFromKey = function (t) {
      return Kn.getJWK(t, !0, !0, !0, !0);
    }),
    (Ue.getPosArrayOfChildrenFromHex = function (t) {
      return Br.getChildIdx(t, 0);
    }),
    (Ue.getHexValueArrayOfChildrenFromHex = function (t) {
      var e = Br,
        r = e.getV,
        n = Ue.getPosArrayOfChildrenFromHex(t),
        i = r(t, n[0]),
        s = r(t, n[1]),
        a = r(t, n[2]),
        o = r(t, n[3]),
        h = r(t, n[4]),
        u = r(t, n[5]),
        c = r(t, n[6]),
        l = r(t, n[7]),
        f = r(t, n[8]);
      n = new Array();
      return (n.push(i, s, a, o, h, u, c, l, f), n);
    }),
    (Ue.prototype.readPrivateKeyFromPEMString = function (t) {
      var e = on(t),
        r = Ue.getHexValueArrayOfChildrenFromHex(e);
      this.setPrivateEx(r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]);
    }),
    (Ue.prototype.readPKCS5PrvKeyHex = function (t) {
      var e = Ue.getHexValueArrayOfChildrenFromHex(t);
      this.setPrivateEx(e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
    }),
    (Ue.prototype.readPKCS8PrvKeyHex = function (t) {
      var e,
        r,
        n,
        i,
        s,
        a,
        o,
        h,
        u = Br,
        c = u.getVbyListEx;
      if (!1 === u.isASN1HEX(t)) throw new Error("not ASN.1 hex string");
      try {
        ((e = c(t, 0, [2, 0, 1], "02")),
          (r = c(t, 0, [2, 0, 2], "02")),
          (n = c(t, 0, [2, 0, 3], "02")),
          (i = c(t, 0, [2, 0, 4], "02")),
          (s = c(t, 0, [2, 0, 5], "02")),
          (a = c(t, 0, [2, 0, 6], "02")),
          (o = c(t, 0, [2, 0, 7], "02")),
          (h = c(t, 0, [2, 0, 8], "02")));
      } catch (l) {
        throw new Error("malformed PKCS#8 plain RSA private key");
      }
      this.setPrivateEx(e, r, n, i, s, a, o, h);
    }),
    (Ue.prototype.readPKCS5PubKeyHex = function (t) {
      var e = Br,
        r = e.getV;
      if (!1 === e.isASN1HEX(t))
        throw new Error("keyHex is not ASN.1 hex string");
      var n = e.getChildIdx(t, 0);
      if (
        2 !== n.length ||
        "02" !== t.substr(n[0], 2) ||
        "02" !== t.substr(n[1], 2)
      )
        throw new Error("wrong hex for PKCS#5 public key");
      var i = r(t, n[0]),
        s = r(t, n[1]);
      this.setPublic(i, s);
    }),
    (Ue.prototype.readPKCS8PubKeyHex = function (t) {
      var e = Br;
      if (!1 === e.isASN1HEX(t)) throw new Error("not ASN.1 hex string");
      if ("06092a864886f70d010101" !== e.getTLVbyListEx(t, 0, [0, 0]))
        throw new Error("not PKCS8 RSA public key");
      var r = e.getTLVbyListEx(t, 0, [1, 0]);
      this.readPKCS5PubKeyHex(r);
    }),
    (Ue.prototype.readCertPubKeyHex = function (t, e) {
      var r, n;
      ((r = new Jn()),
        r.readCertHex(t),
        (n = r.getPublicKeyHex()),
        this.readPKCS8PubKeyHex(n));
    }));
  function zn(t, e) {
    for (var r = "", n = e / 4 - t.length, i = 0; i < n; i++) r += "0";
    return r + t;
  }
  function Wn(t, e, r) {
    var n = "",
      i = 0;
    while (n.length < e)
      ((n += Zr(
        r(
          Qr(
            t +
              String.fromCharCode.apply(String, [
                (4278190080 & i) >> 24,
                (16711680 & i) >> 16,
                (65280 & i) >> 8,
                255 & i,
              ]),
          ),
        ),
      )),
        (i += 1));
    return n;
  }
  function Gn(t) {
    for (var e in Dr.crypto.Util.DIGESTINFOHEAD) {
      var r = Dr.crypto.Util.DIGESTINFOHEAD[e],
        n = r.length;
      if (t.substring(0, n) == r) {
        var i = [e, t.substring(n)];
        return i;
      }
    }
    return [];
  }
  function Jn(t) {
    var e,
      r = Br,
      n = r.getChildIdx,
      i = r.getV,
      s = (r.dump, r.parse),
      a = r.getTLV,
      o = r.getVbyList,
      h = r.getVbyListEx,
      u = r.getTLVbyList,
      c = r.getTLVbyListEx,
      l = r.getIdxbyList,
      f = r.getIdxbyListEx,
      d = r.getVidx,
      p = r.getInt,
      g = r.oidname,
      v = r.hextooidstr,
      m = on,
      y = Error;
    try {
      e = Dr.asn1.x509.AlgorithmIdentifier.PSSNAME2ASN1TLV;
    } catch (_e) {}
    ((this.HEX2STAG = {
      "0c": "utf8",
      13: "prn",
      16: "ia5",
      "1a": "vis",
      "1e": "bmp",
    }),
      (this.hex = null),
      (this.version = 0),
      (this.foffset = 0),
      (this.aExtInfo = null),
      (this.getVersion = function () {
        if (null === this.hex || 0 !== this.version) return this.version;
        var t = u(this.hex, 0, [0, 0]);
        if ("a0" == t.substr(0, 2)) {
          var e = u(t, 0, [0]),
            r = p(e, 0);
          if (r < 0 || 2 < r) throw new Error("malformed version field");
          return ((this.version = r + 1), this.version);
        }
        return ((this.version = 1), (this.foffset = -1), 1);
      }),
      (this.getSerialNumberHex = function () {
        return h(this.hex, 0, [0, 0], "02");
      }),
      (this.getSignatureAlgorithmField = function () {
        var t = c(this.hex, 0, [0, 1]);
        return this.getAlgorithmIdentifierName(t);
      }),
      (this.getAlgorithmIdentifierName = function (t) {
        for (var r in e) if (t === e[r]) return r;
        return g(h(t, 0, [0], "06"));
      }),
      (this.getIssuer = function (t, e) {
        return this.getX500Name(this.getIssuerHex(), t, e);
      }),
      (this.getIssuerHex = function () {
        return u(this.hex, 0, [0, 3 + this.foffset], "30");
      }),
      (this.getIssuerString = function () {
        var t = this.getIssuer();
        return t.str;
      }),
      (this.getSubject = function (t, e) {
        return this.getX500Name(this.getSubjectHex(), t, e);
      }),
      (this.getSubjectHex = function () {
        return u(this.hex, 0, [0, 5 + this.foffset], "30");
      }),
      (this.getSubjectString = function () {
        var t = this.getSubject();
        return t.str;
      }),
      (this.getNotBefore = function () {
        var t = o(this.hex, 0, [0, 4 + this.foffset, 0]);
        return (
          (t = t.replace(/(..)/g, "%$1")),
          (t = decodeURIComponent(t)),
          t
        );
      }),
      (this.getNotAfter = function () {
        var t = o(this.hex, 0, [0, 4 + this.foffset, 1]);
        return (
          (t = t.replace(/(..)/g, "%$1")),
          (t = decodeURIComponent(t)),
          t
        );
      }),
      (this.getPublicKeyHex = function () {
        return this.getSPKI();
      }),
      (this.getSPKI = function () {
        return u(this.hex, 0, [0, 6 + this.foffset], "30");
      }),
      (this.getSPKIValue = function () {
        var t = this.getSPKI();
        return null == t ? null : o(t, 0, [1], "03", !0);
      }),
      (this.getPublicKeyIdx = function () {
        return l(this.hex, 0, [0, 6 + this.foffset], "30");
      }),
      (this.getPublicKeyContentIdx = function () {
        var t = this.getPublicKeyIdx();
        return l(this.hex, t, [1, 0], "30");
      }),
      (this.getPublicKey = function () {
        return Kn.getKey(this.getPublicKeyHex(), null, "pkcs8pub");
      }),
      (this.getSignatureAlgorithmName = function () {
        var t = u(this.hex, 0, [1], "30");
        return this.getAlgorithmIdentifierName(t);
      }),
      (this.getSignatureValueHex = function () {
        return o(this.hex, 0, [2], "03", !0);
      }),
      (this.verifySignature = function (t) {
        var e = this.getSignatureAlgorithmField(),
          r = this.getSignatureValueHex(),
          n = u(this.hex, 0, [0], "30"),
          i = new Dr.crypto.Signature({ alg: e });
        return (i.init(t), i.updateHex(n), i.verify(r));
      }),
      (this.parseExt = function (t) {
        var e, s, a;
        if (void 0 === t) {
          if (((a = this.hex), 3 !== this.version)) return -1;
          ((e = l(a, 0, [0, 7, 0], "30")), (s = n(a, e)));
        } else {
          a = on(t);
          var h = l(a, 0, [0, 3, 0, 0], "06");
          if ("2a864886f70d01090e" != i(a, h))
            return void (this.aExtInfo = new Array());
          ((e = l(a, 0, [0, 3, 0, 1, 0], "30")), (s = n(a, e)), (this.hex = a));
        }
        this.aExtInfo = new Array();
        for (var u = 0; u < s.length; u++) {
          var c = { critical: !1 },
            f = n(a, s[u]),
            p = 0;
          (3 === f.length && ((c.critical = !0), (p = 1)),
            (c.oid = r.hextooidstr(o(a, s[u], [0], "06"))));
          var g = l(a, s[u], [1 + p]);
          ((c.vidx = d(a, g)), this.aExtInfo.push(c));
        }
      }),
      (this.getExtInfo = function (t) {
        var e = this.aExtInfo,
          r = t;
        if (
          (t.match(/^[0-9.]+$/) || (r = Dr.asn1.x509.OID.name2oid(t)), "" !== r)
        )
          for (var n = 0; n < e.length; n++) if (e[n].oid === r) return e[n];
      }),
      (this.getCriticalExtV = function (t, e, r) {
        if (void 0 != e) return [e, r];
        var n = this.getExtInfo(t);
        return void 0 == n ? [null, null] : [a(this.hex, n.vidx), n.critical];
      }),
      (this.getExtBasicConstraints = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("basicConstraints");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var n = { extname: "basicConstraints" };
        if ((e && (n.critical = !0), "3000" === t)) return n;
        if ("30030101ff" === t) return ((n.cA = !0), n);
        if ("30060101ff02" === t.substr(0, 12)) {
          var s = i(t, 10),
            o = parseInt(s, 16);
          return ((n.cA = !0), (n.pathLen = o), n);
        }
        throw new Error("hExtV parse error: " + t);
      }),
      (this.getExtNameConstraints = function (t, e) {
        var r = this.getCriticalExtV("nameConstraints", t, e);
        if (((t = r[0]), (e = r[1]), null != t)) {
          var i = { extname: "nameConstraints" };
          e && (i.critical = !0);
          for (var s = n(t, 0), o = 0; o < s.length; o++) {
            for (var h = [], u = n(t, s[o]), c = 0; c < u.length; c++) {
              var l = a(t, u[c]),
                f = this.getGeneralSubtree(l);
              h.push(f);
            }
            var d = t.substr(s[o], 2);
            "a0" == d ? (i.permit = h) : "a1" == d && (i.exclude = h);
          }
          return i;
        }
      }),
      (this.getGeneralSubtree = function (t) {
        var e = n(t, 0),
          r = e.length;
        if (r < 1 || 2 < r) throw new Error("wrong num elements");
        for (var s = this.getGeneralName(a(t, e[0])), o = 1; o < r; o++) {
          var h = t.substr(e[o], 2),
            u = i(t, e[o]),
            c = parseInt(u, 16);
          ("80" == h && (s.min = c), "81" == h && (s.max = c));
        }
        return s;
      }),
      (this.getExtKeyUsage = function (t, e) {
        var r = this.getCriticalExtV("keyUsage", t, e);
        if (((t = r[0]), (e = r[1]), null != t)) {
          var n = { extname: "keyUsage" };
          return (
            e && (n.critical = !0),
            (n.names = this.getExtKeyUsageString(t).split(",")),
            n
          );
        }
      }),
      (this.getExtKeyUsageBin = function (t) {
        if (void 0 === t) {
          var e = this.getExtInfo("keyUsage");
          if (void 0 === e) return "";
          t = a(this.hex, e.vidx);
        }
        if (8 != t.length && 10 != t.length)
          throw new Error("malformed key usage value: " + t);
        var r = "000000000000000" + parseInt(t.substr(6), 16).toString(2);
        return (
          8 == t.length && (r = r.slice(-8)),
          10 == t.length && (r = r.slice(-16)),
          (r = r.replace(/0+$/, "")),
          "" == r && (r = "0"),
          r
        );
      }),
      (this.getExtKeyUsageString = function (t) {
        for (
          var e = this.getExtKeyUsageBin(t), r = new Array(), n = 0;
          n < e.length;
          n++
        )
          "1" == e.substr(n, 1) && r.push(Jn.KEYUSAGE_NAME[n]);
        return r.join(",");
      }),
      (this.getExtSubjectKeyIdentifier = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("subjectKeyIdentifier");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var n = { extname: "subjectKeyIdentifier" };
        e && (n.critical = !0);
        var s = i(t, 0);
        return ((n.kid = { hex: s }), n);
      }),
      (this.getExtAuthorityKeyIdentifier = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("authorityKeyIdentifier");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var s = { extname: "authorityKeyIdentifier" };
        e && (s.critical = !0);
        for (var o = n(t, 0), h = 0; h < o.length; h++) {
          var u = t.substr(o[h], 2);
          if (("80" === u && (s.kid = { hex: i(t, o[h]) }), "a1" === u)) {
            var c = a(t, o[h]),
              l = this.getGeneralNames(c);
            s.issuer = l[0]["dn"];
          }
          "82" === u && (s.sn = { hex: i(t, o[h]) });
        }
        return s;
      }),
      (this.getExtExtKeyUsage = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("extKeyUsage");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var s = { extname: "extKeyUsage", array: [] };
        e && (s.critical = !0);
        for (var o = n(t, 0), h = 0; h < o.length; h++)
          s.array.push(g(i(t, o[h])));
        return s;
      }),
      (this.getExtExtKeyUsageName = function () {
        var t = this.getExtInfo("extKeyUsage");
        if (void 0 === t) return t;
        var e = new Array(),
          r = a(this.hex, t.vidx);
        if ("" === r) return e;
        for (var s = n(r, 0), o = 0; o < s.length; o++) e.push(g(i(r, s[o])));
        return e;
      }),
      (this.getExtSubjectAltName = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("subjectAltName");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var n = { extname: "subjectAltName", array: [] };
        return (e && (n.critical = !0), (n.array = this.getGeneralNames(t)), n);
      }),
      (this.getExtIssuerAltName = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("issuerAltName");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var n = { extname: "issuerAltName", array: [] };
        return (e && (n.critical = !0), (n.array = this.getGeneralNames(t)), n);
      }),
      (this.getGeneralNames = function (t) {
        for (var e = n(t, 0), r = [], i = 0; i < e.length; i++) {
          var s = this.getGeneralName(a(t, e[i]));
          void 0 !== s && r.push(s);
        }
        return r;
      }),
      (this.getGeneralName = function (t) {
        var e = t.substr(0, 2),
          r = i(t, 0),
          n = Zr(r);
        return "81" == e
          ? { rfc822: n }
          : "82" == e
            ? { dns: n }
            : "86" == e
              ? { uri: n }
              : "87" == e
                ? { ip: xn(r) }
                : "a4" == e
                  ? { dn: this.getX500Name(r) }
                  : "a0" == e
                    ? { other: this.getOtherName(t) }
                    : void 0;
      }),
      (this.getExtSubjectAltName2 = function () {
        var t,
          e,
          r,
          s = this.getExtInfo("subjectAltName");
        if (void 0 === s) return s;
        for (
          var o = new Array(), h = a(this.hex, s.vidx), u = n(h, 0), c = 0;
          c < u.length;
          c++
        )
          ((r = h.substr(u[c], 2)),
            (t = i(h, u[c])),
            "81" === r && ((e = Xr(t)), o.push(["MAIL", e])),
            "82" === r && ((e = Xr(t)), o.push(["DNS", e])),
            "84" === r && ((e = Jn.hex2dn(t, 0)), o.push(["DN", e])),
            "86" === r && ((e = Xr(t)), o.push(["URI", e])),
            "87" === r && ((e = xn(t)), o.push(["IP", e])));
        return o;
      }),
      (this.getExtCRLDistributionPoints = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("cRLDistributionPoints");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var i = { extname: "cRLDistributionPoints", array: [] };
        e && (i.critical = !0);
        for (var s = n(t, 0), o = 0; o < s.length; o++) {
          var h = a(t, s[o]);
          i.array.push(this.getDistributionPoint(h));
        }
        return i;
      }),
      (this.getDistributionPoint = function (t) {
        for (var e = {}, r = n(t, 0), i = 0; i < r.length; i++) {
          var s = t.substr(r[i], 2),
            o = a(t, r[i]);
          "a0" == s && (e.dpname = this.getDistributionPointName(o));
        }
        return e;
      }),
      (this.getDistributionPointName = function (t) {
        for (var e = {}, r = n(t, 0), i = 0; i < r.length; i++) {
          var s = t.substr(r[i], 2),
            o = a(t, r[i]);
          "a0" == s && (e.full = this.getGeneralNames(o));
        }
        return e;
      }),
      (this.getExtCRLDistributionPointsURI = function () {
        var t = this.getExtCRLDistributionPoints();
        if (void 0 == t) return t;
        for (var e = t.array, r = [], n = 0; n < e.length; n++)
          try {
            void 0 != e[n].dpname.full[0].uri &&
              r.push(e[n].dpname.full[0].uri);
          } catch (i) {}
        return r;
      }),
      (this.getExtAIAInfo = function () {
        var t = this.getExtInfo("authorityInfoAccess");
        if (void 0 === t) return t;
        for (
          var e = { ocsp: [], caissuer: [] }, r = n(this.hex, t.vidx), i = 0;
          i < r.length;
          i++
        ) {
          var s = o(this.hex, r[i], [0], "06"),
            a = o(this.hex, r[i], [1], "86");
          ("2b06010505073001" === s && e.ocsp.push(Xr(a)),
            "2b06010505073002" === s && e.caissuer.push(Xr(a)));
        }
        return e;
      }),
      (this.getExtAuthorityInfoAccess = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("authorityInfoAccess");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var i = { extname: "authorityInfoAccess", array: [] };
        e && (i.critical = !0);
        for (var s = n(t, 0), u = 0; u < s.length; u++) {
          var c = h(t, s[u], [0], "06"),
            l = o(t, s[u], [1], "86"),
            f = Xr(l);
          if ("2b06010505073001" == c) i.array.push({ ocsp: f });
          else {
            if ("2b06010505073002" != c)
              throw new Error("unknown method: " + c);
            i.array.push({ caissuer: f });
          }
        }
        return i;
      }),
      (this.getExtCertificatePolicies = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("certificatePolicies");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var i = { extname: "certificatePolicies", array: [] };
        e && (i.critical = !0);
        for (var s = n(t, 0), o = 0; o < s.length; o++) {
          var h = a(t, s[o]),
            u = this.getPolicyInformation(h);
          i.array.push(u);
        }
        return i;
      }),
      (this.getPolicyInformation = function (t) {
        var e = {},
          r = o(t, 0, [0], "06");
        e.policyoid = g(r);
        var i = f(t, 0, [1], "30");
        if (-1 != i) {
          e.array = [];
          for (var s = n(t, i), h = 0; h < s.length; h++) {
            var u = a(t, s[h]),
              c = this.getPolicyQualifierInfo(u);
            e.array.push(c);
          }
        }
        return e;
      }),
      (this.getOtherName = function (t) {
        var e = {},
          r = n(t, 0),
          i = o(t, r[0], [], "06"),
          a = o(t, r[1], []);
        return ((e.oid = g(i)), (e.value = s(a)), e);
      }),
      (this.getPolicyQualifierInfo = function (t) {
        var e = {},
          r = o(t, 0, [0], "06");
        if ("2b06010505070201" === r) {
          var n = h(t, 0, [1], "16");
          e.cps = Zr(n);
        } else if ("2b06010505070202" === r) {
          var i = u(t, 0, [1], "30");
          e.unotice = this.getUserNotice(i);
        }
        return e;
      }),
      (this.getUserNotice = function (t) {
        var e = null;
        try {
          e = r.parse(t);
          var n = this._asn1ToUnotice(e);
          return n;
        } catch (i) {
          return;
        }
      }),
      (this._asn1ToUnotice = function (t) {
        try {
          for (var e = {}, r = Vn(t, "seq"), n = 0; n < r.length; n++) {
            var i = this._asn1ToNoticeRef(r[n]);
            void 0 != i && (e.noticeref = i);
            var s = this.asn1ToDisplayText(r[n]);
            void 0 != s && (e.exptext = s);
          }
          return Object.keys(e).length > 0 ? e : void 0;
        } catch (a) {
          return;
        }
      }),
      (this._asn1ToNoticeRef = function (t) {
        try {
          for (var e = {}, r = Vn(t, "seq"), n = 0; n < r.length; n++) {
            var i = this._asn1ToNoticeNum(r[n]);
            void 0 != i && (e.noticenum = i);
            var s = this.asn1ToDisplayText(r[n]);
            void 0 != s && (e.org = s);
          }
          return Object.keys(e).length > 0 ? e : void 0;
        } catch (a) {
          return;
        }
      }),
      (this._asn1ToNoticeNum = function (t) {
        try {
          for (var e = Vn(t, "seq"), r = [], n = 0; n < e.length; n++) {
            var i = e[n];
            r.push(parseInt(Vn(i, "int.hex"), 16));
          }
          return r;
        } catch (s) {
          return;
        }
      }),
      (this.getDisplayText = function (t) {
        var e = { "0c": "utf8", 16: "ia5", "1a": "vis", "1e": "bmp" },
          r = {};
        return ((r.type = e[t.substr(0, 2)]), (r.str = Zr(i(t, 0))), r);
      }),
      (this.asn1ToDisplayText = function (t) {
        return void 0 != t.utf8str
          ? { type: "utf8", str: t.utf8str.str }
          : void 0 != t.ia5str
            ? { type: "ia5", str: t.ia5str.str }
            : void 0 != t.visstr
              ? { type: "vis", str: t.visstr.str }
              : void 0 != t.bmpstr
                ? { type: "bmp", str: t.bmpstr.str }
                : void 0 != t.prnstr
                  ? { type: "prn", str: t.prnstr.str }
                  : void 0;
      }),
      (this.getExtPolicyMappings = function (t, e) {
        var r = this.getCriticalExtV("policyMappings", t, e);
        if (((t = r[0]), (e = r[1]), null != t)) {
          var n = { extname: "policyMappings" };
          e && (n.critical = !0);
          try {
            for (var i = s(t), a = i.seq, o = [], h = 0; h < a.length; h++) {
              var u = a[h].seq;
              o.push([u[0].oid, u[1].oid]);
            }
            n.array = o;
          } catch (c) {
            throw new y("malformed policyMappings");
          }
          return n;
        }
      }),
      (this.getExtPolicyConstraints = function (t, e) {
        var r = this.getCriticalExtV("policyConstraints", t, e);
        if (((t = r[0]), (e = r[1]), null != t)) {
          var n = { extname: "policyConstraints" };
          e && (n.critical = !0);
          var i = s(t);
          try {
            for (var a = i.seq, o = 0; o < a.length; o++) {
              var h = a[o].tag;
              0 == h.explicit &&
                ("80" == h.tag && (n.reqexp = parseInt(h.hex, 16)),
                "81" == h.tag && (n.inhibit = parseInt(h.hex, 16)));
            }
          } catch (u) {
            return new y("malformed policyConstraints value");
          }
          return n;
        }
      }),
      (this.getExtInhibitAnyPolicy = function (t, e) {
        var r = this.getCriticalExtV("inhibitAnyPolicy", t, e);
        if (((t = r[0]), (e = r[1]), null != t)) {
          var n = { extname: "inhibitAnyPolicy" };
          e && (n.critical = !0);
          var i = p(t, 0);
          return -1 == i ? new y("wrong value") : ((n.skip = i), n);
        }
      }),
      (this.getExtCRLNumber = function (t, e) {
        var r = { extname: "cRLNumber" };
        if ((e && (r.critical = !0), "02" == t.substr(0, 2)))
          return ((r.num = { hex: i(t, 0) }), r);
        throw new y("hExtV parse error: " + t);
      }),
      (this.getExtCRLReason = function (t, e) {
        var r = { extname: "cRLReason" };
        if ((e && (r.critical = !0), "0a" == t.substr(0, 2)))
          return ((r.code = parseInt(i(t, 0), 16)), r);
        throw new Error("hExtV parse error: " + t);
      }),
      (this.getExtOcspNonce = function (t, e) {
        var r = { extname: "ocspNonce" };
        e && (r.critical = !0);
        var n = i(t, 0);
        return ((r.hex = n), r);
      }),
      (this.getExtOcspNoCheck = function (t, e) {
        var r = { extname: "ocspNoCheck" };
        return (e && (r.critical = !0), r);
      }),
      (this.getExtAdobeTimeStamp = function (t, e) {
        if (void 0 === t && void 0 === e) {
          var r = this.getExtInfo("adobeTimeStamp");
          if (void 0 === r) return;
          ((t = a(this.hex, r.vidx)), (e = r.critical));
        }
        var i = { extname: "adobeTimeStamp" };
        e && (i.critical = !0);
        var s = n(t, 0);
        if (s.length > 1) {
          var o = a(t, s[1]),
            h = this.getGeneralName(o);
          void 0 != h.uri && (i.uri = h.uri);
        }
        if (s.length > 2) {
          var u = a(t, s[2]);
          ("0101ff" == u && (i.reqauth = !0),
            "010100" == u && (i.reqauth = !1));
        }
        return i;
      }));
    var b = function (t) {
        var e = {};
        try {
          var r = t.seq[0].oid,
            n = Dr.asn1.x509.OID.name2oid(r);
          e.type = Dr.asn1.x509.OID.oid2atype(n);
          var i = t.seq[1];
          if (void 0 != i.utf8str) ((e.ds = "utf8"), (e.value = i.utf8str.str));
          else if (void 0 != i.numstr)
            ((e.ds = "num"), (e.value = i.numstr.str));
          else if (void 0 != i.telstr)
            ((e.ds = "tel"), (e.value = i.telstr.str));
          else if (void 0 != i.prnstr)
            ((e.ds = "prn"), (e.value = i.prnstr.str));
          else if (void 0 != i.ia5str)
            ((e.ds = "ia5"), (e.value = i.ia5str.str));
          else if (void 0 != i.visstr)
            ((e.ds = "vis"), (e.value = i.visstr.str));
          else {
            if (void 0 == i.bmpstr) throw "error";
            ((e.ds = "bmp"), (e.value = i.bmpstr.str));
          }
          return e;
        } catch (s) {
          throw new Erorr("improper ASN.1 parsed AttrTypeAndValue");
        }
      },
      w = function (t) {
        try {
          return t.set.map(function (t) {
            return b(t);
          });
        } catch (Te) {
          throw new Error("improper ASN.1 parsed RDN: " + Te);
        }
      },
      x = function (t) {
        try {
          return t.seq.map(function (t) {
            return w(t);
          });
        } catch (Te) {
          throw new Error("improper ASN.1 parsed X500Name: " + Te);
        }
      };
    ((this.getX500NameRule = function (t) {
      for (var e = null, r = [], n = 0; n < t.length; n++)
        for (var i = t[n], s = 0; s < i.length; s++) r.push(i[s]);
      for (n = 0; n < r.length; n++) {
        var a = r[n],
          o = a.ds,
          h = a.value,
          u = a.type;
        if ((":" + o, "prn" != o && "utf8" != o && "ia5" != o)) return "mixed";
        if ("ia5" == o) {
          if ("CN" != u) return "mixed";
          if (Dr.lang.String.isMail(h)) continue;
          return "mixed";
        }
        if ("C" == u) {
          if ("prn" == o) continue;
          return "mixed";
        }
        if ((":" + o, null == e)) e = o;
        else if (e !== o) return "mixed";
      }
      return null == e ? "prn" : e;
    }),
      (this.getAttrTypeAndValue = function (t) {
        var e = s(t);
        return b(e);
      }),
      (this.getRDN = function (t) {
        var e = s(t);
        return w(e);
      }),
      (this.getX500NameArray = function (t) {
        var e = s(t);
        return x(e);
      }),
      (this.getX500Name = function (t, e, r) {
        var n = this.getX500NameArray(t),
          i = this.dnarraytostr(n),
          s = { str: i };
        return (
          (s.array = n),
          1 == r && (s.hex = t),
          1 == e && (s.canon = this.c14nRDNArray(n)),
          s
        );
      }),
      (this.readCertPEM = function (t) {
        this.readCertHex(m(t));
      }),
      (this.readCertHex = function (t) {
        ((this.hex = t), this.getVersion());
        try {
          (l(this.hex, 0, [0, 7], "a3"), this.parseExt());
        } catch (e) {}
      }),
      (this.getParam = function (t) {
        var e = {};
        return (
          void 0 == t && (t = {}),
          (e.version = this.getVersion()),
          (e.serial = { hex: this.getSerialNumberHex() }),
          (e.sigalg = this.getSignatureAlgorithmField()),
          (e.issuer = this.getIssuer(t.dncanon, t.dnhex)),
          (e.notbefore = this.getNotBefore()),
          (e.notafter = this.getNotAfter()),
          (e.subject = this.getSubject(t.dncanon, t.dnhex)),
          (e.sbjpubkey = an(this.getPublicKeyHex(), "PUBLIC KEY")),
          void 0 != this.aExtInfo &&
            this.aExtInfo.length > 0 &&
            (e.ext = this.getExtParamArray()),
          (e.sighex = this.getSignatureValueHex()),
          1 == t.tbshex && (e.tbshex = u(this.hex, 0, [0])),
          1 == t.nodnarray && (delete e.issuer.array, delete e.subject.array),
          e
        );
      }),
      (this.getExtParamArray = function (t) {
        if (void 0 == t) {
          var e = f(this.hex, 0, [0, "[3]"]);
          -1 != e && (t = c(this.hex, 0, [0, "[3]", 0], "30"));
        }
        for (var r = [], i = n(t, 0), s = 0; s < i.length; s++) {
          var o = a(t, i[s]),
            h = this.getExtParam(o);
          null != h && r.push(h);
        }
        return r;
      }),
      (this.getExtParam = function (t) {
        var e = n(t, 0),
          r = e.length;
        if (2 != r && 3 != r)
          throw new Error("wrong number elements in Extension: " + r + " " + t);
        var i = v(o(t, 0, [0], "06")),
          s = !1;
        3 == r && "0101ff" == u(t, 0, [1]) && (s = !0);
        var a = u(t, 0, [r - 1, 0]),
          h = void 0;
        if (
          ("2.5.29.14" == i
            ? (h = this.getExtSubjectKeyIdentifier(a, s))
            : "2.5.29.15" == i
              ? (h = this.getExtKeyUsage(a, s))
              : "2.5.29.17" == i
                ? (h = this.getExtSubjectAltName(a, s))
                : "2.5.29.18" == i
                  ? (h = this.getExtIssuerAltName(a, s))
                  : "2.5.29.19" == i
                    ? (h = this.getExtBasicConstraints(a, s))
                    : "2.5.29.30" == i
                      ? (h = this.getExtNameConstraints(a, s))
                      : "2.5.29.31" == i
                        ? (h = this.getExtCRLDistributionPoints(a, s))
                        : "2.5.29.32" == i
                          ? (h = this.getExtCertificatePolicies(a, s))
                          : "2.5.29.33" == i
                            ? (h = this.getExtPolicyMappings(a, s))
                            : "2.5.29.35" == i
                              ? (h = this.getExtAuthorityKeyIdentifier(a, s))
                              : "2.5.29.36" == i
                                ? (h = this.getExtPolicyConstraints(a, s))
                                : "2.5.29.37" == i
                                  ? (h = this.getExtExtKeyUsage(a, s))
                                  : "2.5.29.54" == i
                                    ? (h = this.getExtInhibitAnyPolicy(a, s))
                                    : "1.3.6.1.5.5.7.1.1" == i
                                      ? (h = this.getExtAuthorityInfoAccess(
                                          a,
                                          s,
                                        ))
                                      : "2.5.29.20" == i
                                        ? (h = this.getExtCRLNumber(a, s))
                                        : "2.5.29.21" == i
                                          ? (h = this.getExtCRLReason(a, s))
                                          : "1.3.6.1.5.5.7.48.1.2" == i
                                            ? (h = this.getExtOcspNonce(a, s))
                                            : "1.3.6.1.5.5.7.48.1.5" == i
                                              ? (h = this.getExtOcspNoCheck(
                                                  a,
                                                  s,
                                                ))
                                              : "1.2.840.113583.1.1.9.1" == i
                                                ? (h =
                                                    this.getExtAdobeTimeStamp(
                                                      a,
                                                      s,
                                                    ))
                                                : void 0 != Jn.EXT_PARSER[i] &&
                                                  (h = Jn.EXT_PARSER[i](
                                                    i,
                                                    s,
                                                    a,
                                                  )),
          void 0 != h)
        )
          return h;
        var c = { extname: i, extn: a };
        return (s && (c.critical = !0), c);
      }),
      (this.findExt = function (t, e) {
        for (var r = 0; r < t.length; r++) if (t[r].extname == e) return t[r];
        return null;
      }),
      (this.updateExtCDPFullURI = function (t, e) {
        var r = this.findExt(t, "cRLDistributionPoints");
        if (null != r && void 0 != r.array)
          for (var n = r.array, i = 0; i < n.length; i++)
            if (void 0 != n[i].dpname && void 0 != n[i].dpname.full)
              for (var s = n[i].dpname.full, a = 0; a < s.length; a++) {
                var o = s[i];
                void 0 != o.uri && (o.uri = e);
              }
      }),
      (this.updateExtAIAOCSP = function (t, e) {
        var r = this.findExt(t, "authorityInfoAccess");
        if (null != r && void 0 != r.array)
          for (var n = r.array, i = 0; i < n.length; i++)
            void 0 != n[i].ocsp && (n[i].ocsp = e);
      }),
      (this.updateExtAIACAIssuer = function (t, e) {
        var r = this.findExt(t, "authorityInfoAccess");
        if (null != r && void 0 != r.array)
          for (var n = r.array, i = 0; i < n.length; i++)
            void 0 != n[i].caissuer && (n[i].caissuer = e);
      }),
      (this.dnarraytostr = function (t) {
        function e(t) {
          return t
            .map(function (t) {
              return r(t).replace(/\+/, "\\+");
            })
            .join("+");
        }
        function r(t) {
          return t.type + "=" + t.value;
        }
        return (
          "/" +
          t
            .map(function (t) {
              return e(t).replace(/\//, "\\/");
            })
            .join("/")
        );
      }),
      (this.setCanonicalizedDN = function (t) {
        var e;
        if (void 0 != t.str && void 0 == t.array) {
          var r = new Dr.asn1.x509.X500Name({ str: t.str }),
            n = r.tohex();
          e = this.getX500NameArray(n);
        } else e = t.array;
        void 0 == t.canon && (t.canon = this.c14nRDNArray(e));
      }),
      (this.c14nRDNArray = function (t) {
        for (var e = [], r = 0; r < t.length; r++) {
          for (var n = t[r], i = [], s = 0; s < n.length; s++) {
            var a = n[s],
              o = a.value;
            ((o = o.replace(/^\s*/, "")),
              (o = o.replace(/\s*$/, "")),
              (o = o.replace(/\s+/g, " ")),
              (o = o.toLowerCase()),
              i.push(a.type.toLowerCase() + "=" + o));
          }
          e.push(i.join("+"));
        }
        return "/" + e.join("/");
      }),
      (this.getInfo = function () {
        var t,
          e,
          r,
          n = function (t) {
            for (
              var e = "", r = "    ", n = "\n", i = t.array, s = 0;
              s < i.length;
              s++
            ) {
              var a = i[s];
              if (
                (void 0 != a.dn && (e += r + "dn: " + a.dn.str + n),
                void 0 != a.ip && (e += r + "ip: " + a.ip + n),
                void 0 != a.rfc822 && (e += r + "rfc822: " + a.rfc822 + n),
                void 0 != a.dns && (e += r + "dns: " + a.dns + n),
                void 0 != a.uri && (e += r + "uri: " + a.uri + n),
                void 0 != a.other)
              ) {
                var o = a.other.oid,
                  h = JSON.stringify(a.other.value).replace(/\"/g, "");
                e += r + "other: " + o + "=" + h + n;
              }
            }
            return ((e = e.replace(/\n$/, "")), e);
          },
          i = function (t) {
            for (var e = "", r = t.array, n = 0; n < r.length; n++) {
              var i = r[n];
              if (
                ((e += "    policy oid: " + i.policyoid + "\n"),
                void 0 !== i.array)
              )
                for (var s = 0; s < i.array.length; s++) {
                  var a = i.array[s];
                  void 0 !== a.cps && (e += "    cps: " + a.cps + "\n");
                }
            }
            return e;
          },
          s = function (t) {
            for (var e = "", r = t.array, n = 0; n < r.length; n++) {
              var i = r[n];
              try {
                void 0 !== i.dpname.full[0].uri &&
                  (e += "    " + i.dpname.full[0].uri + "\n");
              } catch (s) {}
              try {
                void 0 !== i.dname.full[0].dn.hex &&
                  (e += "    " + Jn.hex2dn(i.dpname.full[0].dn.hex) + "\n");
              } catch (s) {}
            }
            return e;
          },
          a = function (t) {
            for (var e = "", r = t.array, n = 0; n < r.length; n++) {
              var i = r[n];
              (void 0 !== i.caissuer &&
                (e += "    caissuer: " + i.caissuer + "\n"),
                void 0 !== i.ocsp && (e += "    ocsp: " + i.ocsp + "\n"));
            }
            return e;
          };
        if (
          ((t = "Basic Fields\n"),
          (t += "  serial number: " + this.getSerialNumberHex() + "\n"),
          (t +=
            "  signature algorithm: " +
            this.getSignatureAlgorithmField() +
            "\n"),
          (t += "  issuer: " + this.getIssuerString() + "\n"),
          (t += "  notBefore: " + this.getNotBefore() + "\n"),
          (t += "  notAfter: " + this.getNotAfter() + "\n"),
          (t += "  subject: " + this.getSubjectString() + "\n"),
          (t += "  subject public key info: \n"),
          (e = this.getPublicKey()),
          (t += "    key algorithm: " + e.type + "\n"),
          "RSA" === e.type &&
            ((t += "    n=" + Dn(e.n.toString(16)).substr(0, 16) + "...\n"),
            (t += "    e=" + Dn(e.e.toString(16)) + "\n")),
          (r = this.aExtInfo),
          void 0 !== r && null !== r)
        ) {
          t += "X509v3 Extensions:\n";
          for (var o = 0; o < r.length; o++) {
            var h = r[o],
              u = Dr.asn1.x509.OID.oid2name(h.oid);
            "" === u && (u = h.oid);
            var c = "";
            if (
              (!0 === h.critical && (c = "CRITICAL"),
              (t += "  " + u + " " + c + ":\n"),
              "basicConstraints" === u)
            ) {
              var l = this.getExtBasicConstraints();
              void 0 === l.cA
                ? (t += "    {}\n")
                : ((t += "    cA=true"),
                  void 0 !== l.pathLen && (t += ", pathLen=" + l.pathLen),
                  (t += "\n"));
            } else if ("policyMappings" == u) {
              var f = this.getExtPolicyMappings().array,
                d = f
                  .map(function (t) {
                    var e = t;
                    return e[0] + ":" + e[1];
                  })
                  .join(", ");
              t += "    " + d + "\n";
            } else if ("policyConstraints" == u) {
              var p = this.getExtPolicyConstraints();
              ((t += "    "),
                void 0 != p.reqexp && (t += " reqexp=" + p.reqexp),
                void 0 != p.inhibit && (t += " inhibit=" + p.inhibit),
                (t += "\n"));
            } else if ("inhibitAnyPolicy" == u) {
              p = this.getExtInhibitAnyPolicy();
              t += "    skip=" + p.skip + "\n";
            } else if ("keyUsage" == u)
              t += "    " + this.getExtKeyUsageString() + "\n";
            else if ("subjectKeyIdentifier" == u)
              t += "    " + this.getExtSubjectKeyIdentifier().kid.hex + "\n";
            else if ("authorityKeyIdentifier" == u) {
              var g = this.getExtAuthorityKeyIdentifier();
              void 0 !== g.kid && (t += "    kid=" + g.kid.hex + "\n");
            } else if ("extKeyUsage" == u) {
              var v = this.getExtExtKeyUsage().array;
              t += "    " + v.join(", ") + "\n";
            } else if ("subjectAltName" == u) {
              var m = n(this.getExtSubjectAltName());
              t += m + "\n";
            } else if ("cRLDistributionPoints" == u) {
              var y = this.getExtCRLDistributionPoints();
              t += s(y);
            } else if ("authorityInfoAccess" == u) {
              var b = this.getExtAuthorityInfoAccess();
              t += a(b);
            } else
              "certificatePolicies" == u &&
                (t += i(this.getExtCertificatePolicies()));
          }
        }
        return (
          (t +=
            "signature algorithm: " + this.getSignatureAlgorithmName() + "\n"),
          (t +=
            "signature: " +
            this.getSignatureValueHex().substr(0, 16) +
            "...\n"),
          t
        );
      }),
      "string" == typeof t &&
        (-1 != t.indexOf("-----BEGIN")
          ? this.readCertPEM(t)
          : Dr.lang.String.isHex(t) && this.readCertHex(t)));
  }
  ((Ue.prototype.sign = function (t, e) {
    var r = function (t) {
        return Dr.crypto.Util.hashString(t, e);
      },
      n = r(t);
    return this.signWithMessageHash(n, e);
  }),
    (Ue.prototype.signWithMessageHash = function (t, e) {
      var r = Dr.crypto.Util.getPaddedDigestInfoHex(t, e, this.n.bitLength()),
        n = Me(r, 16),
        i = this.doPrivate(n),
        s = i.toString(16);
      return zn(s, this.n.bitLength());
    }),
    (Ue.prototype.signPSS = function (t, e, r) {
      var n = function (t) {
          return Dr.crypto.Util.hashHex(t, e);
        },
        i = n(Qr(t));
      return (void 0 === r && (r = -1), this.signWithMessageHashPSS(i, e, r));
    }),
    (Ue.prototype.signWithMessageHashPSS = function (t, e, r) {
      var n,
        i = Zr(t),
        s = i.length,
        a = this.n.bitLength() - 1,
        o = Math.ceil(a / 8),
        h = function (t) {
          return Dr.crypto.Util.hashHex(t, e);
        };
      if (-1 === r || void 0 === r) r = s;
      else if (-2 === r) r = o - s - 2;
      else if (r < -2) throw new Error("invalid salt length");
      if (o < s + r + 2) throw new Error("data too long");
      var u = "";
      r > 0 &&
        ((u = new Array(r)),
        new Oe().nextBytes(u),
        (u = String.fromCharCode.apply(String, u)));
      var c = Zr(h(Qr("\0\0\0\0\0\0\0\0" + i + u))),
        l = [];
      for (n = 0; n < o - r - s - 2; n += 1) l[n] = 0;
      var f = String.fromCharCode.apply(String, l) + "" + u,
        d = Wn(c, f.length, h),
        p = [];
      for (n = 0; n < f.length; n += 1)
        p[n] = f.charCodeAt(n) ^ d.charCodeAt(n);
      var g = (65280 >> (8 * o - a)) & 255;
      for (p[0] &= ~g, n = 0; n < s; n++) p.push(c.charCodeAt(n));
      return (
        p.push(188),
        zn(this.doPrivate(new m(p)).toString(16), this.n.bitLength())
      );
    }),
    (Ue.prototype.verify = function (t, e) {
      if (((e = e.toLowerCase()), null == e.match(/^[0-9a-f]+$/))) return !1;
      var r = Me(e, 16),
        n = this.n.bitLength();
      if (r.bitLength() > n) return !1;
      var i = this.doPublic(r),
        s = i.toString(16);
      if (s.length + 3 != n / 4) return !1;
      var a = s.replace(/^1f+00/, ""),
        o = Gn(a);
      if (0 == o.length) return !1;
      var h = o[0],
        u = o[1],
        c = function (t) {
          return Dr.crypto.Util.hashString(t, h);
        },
        l = c(t);
      return u == l;
    }),
    (Ue.prototype.verifyWithMessageHash = function (t, e) {
      if (e.length != Math.ceil(this.n.bitLength() / 4)) return !1;
      var r = Me(e, 16);
      if (r.bitLength() > this.n.bitLength()) return 0;
      var n = this.doPublic(r),
        i = n.toString(16).replace(/^1f+00/, ""),
        s = Gn(i);
      if (0 == s.length) return !1;
      s[0];
      var a = s[1];
      return a == t;
    }),
    (Ue.prototype.verifyPSS = function (t, e, r, n) {
      var i = function (t) {
          return Dr.crypto.Util.hashHex(t, r);
        },
        s = i(Qr(t));
      return (
        void 0 === n && (n = -1),
        this.verifyWithMessageHashPSS(s, e, r, n)
      );
    }),
    (Ue.prototype.verifyWithMessageHashPSS = function (t, e, r, n) {
      if (e.length != Math.ceil(this.n.bitLength() / 4)) return !1;
      var i,
        s = new m(e, 16),
        a = function (t) {
          return Dr.crypto.Util.hashHex(t, r);
        },
        o = Zr(t),
        h = o.length,
        u = this.n.bitLength() - 1,
        c = Math.ceil(u / 8);
      if (-1 === n || void 0 === n) n = h;
      else if (-2 === n) n = c - h - 2;
      else if (n < -2) throw new Error("invalid salt length");
      if (c < h + n + 2) throw new Error("data too long");
      var l = this.doPublic(s).toByteArray();
      for (i = 0; i < l.length; i += 1) l[i] &= 255;
      while (l.length < c) l.unshift(0);
      if (188 !== l[c - 1])
        throw new Error("encoded message does not end in 0xbc");
      l = String.fromCharCode.apply(String, l);
      var f = l.substr(0, c - h - 1),
        d = l.substr(f.length, h),
        p = (65280 >> (8 * c - u)) & 255;
      if (0 !== (f.charCodeAt(0) & p))
        throw new Error("bits beyond keysize not zero");
      var g = Wn(d, f.length, a),
        v = [];
      for (i = 0; i < f.length; i += 1)
        v[i] = f.charCodeAt(i) ^ g.charCodeAt(i);
      v[0] &= ~p;
      var y = c - h - n - 2;
      for (i = 0; i < y; i += 1)
        if (0 !== v[i]) throw new Error("leftmost octets not zero");
      if (1 !== v[y]) throw new Error("0x01 marker not found");
      return (
        d ===
        Zr(
          a(
            Qr(
              "\0\0\0\0\0\0\0\0" +
                o +
                String.fromCharCode.apply(String, v.slice(-n)),
            ),
          ),
        )
      );
    }),
    (Ue.SALT_LEN_HLEN = -1),
    (Ue.SALT_LEN_MAX = -2),
    (Ue.SALT_LEN_RECOVER = -2),
    (Jn.EXT_PARSER = {}),
    (Jn.registExtParser = function (t, e) {
      Jn.EXT_PARSER[t] = e;
    }),
    (Jn.hex2dn = function (t, e) {
      void 0 === e && (e = 0);
      var r = new Jn(),
        n = (Br.getTLV(t, e), r.getX500Name(t));
      return n.str;
    }),
    (Jn.hex2rdn = function (t, e) {
      if ((void 0 === e && (e = 0), "31" !== t.substr(e, 2)))
        throw new Error("malformed RDN");
      for (
        var r = new Array(), n = Br.getChildIdx(t, e), i = 0;
        i < n.length;
        i++
      )
        r.push(Jn.hex2attrTypeValue(t, n[i]));
      return (
        (r = r.map(function (t) {
          return t.replace("+", "\\+");
        })),
        r.join("+")
      );
    }),
    (Jn.hex2attrTypeValue = function (t, e) {
      var r = Br,
        n = r.getV;
      if ((void 0 === e && (e = 0), "30" !== t.substr(e, 2)))
        throw new Error("malformed attribute type and value");
      var i = r.getChildIdx(t, e);
      2 !== i.length || t.substr(i[0], 2);
      var s = n(t, i[0]),
        a = Dr.asn1.ASN1Util.oidHexToInt(s),
        o = Dr.asn1.x509.OID.oid2atype(a),
        h = n(t, i[1]),
        u = Zr(h);
      return o + "=" + u;
    }),
    (Jn.getPublicKeyFromCertHex = function (t) {
      var e = new Jn();
      return (e.readCertHex(t), e.getPublicKey());
    }),
    (Jn.getPublicKeyFromCertPEM = function (t) {
      var e = new Jn();
      return (e.readCertPEM(t), e.getPublicKey());
    }),
    (Jn.getPublicKeyInfoPropOfCertPEM = function (t) {
      var e,
        r,
        n = Br,
        i = n.getVbyList,
        s = {};
      return (
        (s.algparam = null),
        (e = new Jn()),
        e.readCertPEM(t),
        (r = e.getPublicKeyHex()),
        (s.keyhex = i(r, 0, [1], "03").substr(2)),
        (s.algoid = i(r, 0, [0, 0], "06")),
        "2a8648ce3d0201" === s.algoid && (s.algparam = i(r, 0, [0, 1], "06")),
        s
      );
    }),
    (Jn.KEYUSAGE_NAME = [
      "digitalSignature",
      "nonRepudiation",
      "keyEncipherment",
      "dataEncipherment",
      "keyAgreement",
      "keyCertSign",
      "cRLSign",
      "encipherOnly",
      "decipherOnly",
    ]));
  var Xn = function (t) {
    var e = Dr,
      r = e.lang.String.isHex,
      n = Br,
      i = n.getV,
      s = n.getTLV,
      a = n.getVbyList,
      o = n.getTLVbyList,
      h = n.getTLVbyListEx,
      u = n.getIdxbyList,
      c = n.getIdxbyListEx,
      l = n.getChildIdx,
      f = new Jn();
    ((this.hex = null),
      (this.posSigAlg = null),
      (this.posRevCert = null),
      (this.parsed = null),
      (this._setPos = function () {
        var t = u(this.hex, 0, [0, 0]),
          e = this.hex.substr(t, 2);
        if ("02" == e) this.posSigAlg = 1;
        else {
          if ("30" != e)
            throw new Error("malformed 1st item of TBSCertList: " + e);
          this.posSigAlg = 0;
        }
        var r,
          n,
          i = u(this.hex, 0, [0, this.posSigAlg + 3]),
          s = this.hex.substr(i, 2);
        if ("17" == s || "18" == s)
          ((r = u(this.hex, 0, [0, this.posSigAlg + 4])),
            (this.posRevCert = null),
            -1 != r &&
              ((n = this.hex.substr(r, 2)),
              "30" == n && (this.posRevCert = this.posSigAlg + 4)));
        else if ("30" == s) this.posRevCert = this.posSigAlg + 3;
        else {
          if ("a0" != s)
            throw new Error("malformed nextUpdate or revCert tag: " + s);
          this.posRevCert = null;
        }
      }),
      (this.getVersion = function () {
        return 0 == this.posSigAlg
          ? null
          : parseInt(a(this.hex, 0, [0, 0], "02"), 16) + 1;
      }),
      (this.getSignatureAlgorithmField = function () {
        var t = o(this.hex, 0, [0, this.posSigAlg], "30");
        return f.getAlgorithmIdentifierName(t);
      }),
      (this.getIssuer = function () {
        return f.getX500Name(this.getIssuerHex());
      }),
      (this.getIssuerHex = function () {
        return o(this.hex, 0, [0, this.posSigAlg + 1], "30");
      }),
      (this.getThisUpdate = function () {
        var t = a(this.hex, 0, [0, this.posSigAlg + 2]);
        return (result = Zr(t));
      }),
      (this.getNextUpdate = function () {
        var t = u(this.hex, 0, [0, this.posSigAlg + 3]),
          e = this.hex.substr(t, 2);
        return "17" != e && "18" != e ? null : Zr(i(this.hex, t));
      }),
      (this.getRevCertArray = function () {
        if (null == this.posRevCert) return null;
        for (
          var t = [],
            e = u(this.hex, 0, [0, this.posRevCert]),
            r = l(this.hex, e),
            n = 0;
          n < r.length;
          n++
        ) {
          var i = s(this.hex, r[n]);
          t.push(this.getRevCert(i));
        }
        return t;
      }),
      (this.getRevCert = function (t) {
        var e = {},
          r = l(t, 0);
        return (
          (e.sn = { hex: a(t, 0, [0], "02") }),
          (e.date = Zr(a(t, 0, [1]))),
          3 == r.length && (e.ext = f.getExtParamArray(o(t, 0, [2]))),
          e
        );
      }),
      (this.findRevCert = function (t) {
        var e = new Jn(t),
          r = e.getSerialNumberHex();
        return this.findRevCertBySN(r);
      }),
      (this.findRevCertBySN = function (t) {
        if (
          (null == this.parsed && this.getParam(), null == this.parsed.revcert)
        )
          return null;
        for (var e = this.parsed.revcert, r = 0; r < e.length; r++)
          if (t == e[r].sn.hex) return e[r];
        return null;
      }),
      (this.getSignatureValueHex = function () {
        return a(this.hex, 0, [2], "03", !0);
      }),
      (this.verifySignature = function (t) {
        var e = this.getSignatureAlgorithmField(),
          r = this.getSignatureValueHex(),
          n = o(this.hex, 0, [0], "30"),
          i = new Dr.crypto.Signature({ alg: e });
        return (i.init(t), i.updateHex(n), i.verify(r));
      }),
      (this.getParam = function (t) {
        var e = {},
          r = this.getVersion();
        (null != r && (e.version = r),
          (e.sigalg = this.getSignatureAlgorithmField()),
          (e.issuer = this.getIssuer()),
          (e.thisupdate = this.getThisUpdate()));
        var n = this.getNextUpdate();
        null != n && (e.nextupdate = n);
        var i = this.getRevCertArray();
        null != i && (e.revcert = i);
        var s = c(this.hex, 0, [0, "[0]"]);
        if (-1 != s) {
          var a = h(this.hex, 0, [0, "[0]", 0]);
          e.ext = f.getExtParamArray(a);
        }
        return (
          (e.sighex = this.getSignatureValueHex()),
          (this.parsed = e),
          "object" == typeof t &&
            (1 == t.tbshex && (e.tbshex = o(this.hex, 0, [0])),
            1 == t.nodnarray && delete e.issuer.array),
          e
        );
      }),
      "string" == typeof t &&
        (r(t)
          ? (this.hex = t)
          : t.match(/-----BEGIN X509 CRL/) && (this.hex = on(t)),
        this._setPos()));
  };
  (("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.jws && Dr.jws) || (Dr.jws = {}),
    (Dr.jws.JWS = function () {
      var t = Dr,
        e = t.jws.JWS,
        r = e.isSafeJSONString;
      this.parseJWS = function (t, e) {
        if (
          void 0 === this.parsedJWS ||
          (!e && void 0 === this.parsedJWS.sigvalH)
        ) {
          var n = t.match(/^([^.]+)\.([^.]+)\.([^.]+)$/);
          if (null == n)
            throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
          var i = n[1],
            s = n[2],
            a = n[3],
            o = i + "." + s;
          if (
            ((this.parsedJWS = {}),
            (this.parsedJWS.headB64U = i),
            (this.parsedJWS.payloadB64U = s),
            (this.parsedJWS.sigvalB64U = a),
            (this.parsedJWS.si = o),
            !e)
          ) {
            var h = zr(a),
              u = Me(h, 16);
            ((this.parsedJWS.sigvalH = h), (this.parsedJWS.sigvalBI = u));
          }
          var c = Rr(i),
            l = Rr(s);
          if (
            ((this.parsedJWS.headS = c),
            (this.parsedJWS.payloadS = l),
            !r(c, this.parsedJWS, "headP"))
          )
            throw "malformed JSON string for JWS Head: " + c;
        }
      };
    }),
    (Dr.jws.JWS.sign = function (t, e, r, n, i) {
      var s,
        a,
        o,
        h = Dr,
        u = h.jws,
        c = u.JWS,
        l = c.readSafeJSONString,
        f = c.isSafeJSONString,
        d = h.crypto,
        p = (d.ECDSA, d.Mac),
        g = d.Signature,
        v = JSON;
      if ("string" != typeof e && "object" != typeof e)
        throw "spHeader must be JSON string or object: " + e;
      if (
        ("object" == typeof e && ((a = e), (s = v.stringify(a))),
        "string" == typeof e)
      ) {
        if (((s = e), !f(s))) throw "JWS Head is not safe JSON string: " + s;
        a = l(s);
      }
      if (
        ((o = r),
        "object" == typeof r && (o = v.stringify(r)),
        ("" != t && null != t) || void 0 === a.alg || (t = a.alg),
        "" != t &&
          null != t &&
          void 0 === a.alg &&
          ((a.alg = t), (s = v.stringify(a))),
        t !== a.alg)
      )
        throw "alg and sHeader.alg doesn't match: " + t + "!=" + a.alg;
      var m = null;
      if (void 0 === c.jwsalg2sigalg[t]) throw "unsupported alg name: " + t;
      m = c.jwsalg2sigalg[t];
      var y = _r(s),
        b = _r(o),
        w = y + "." + b,
        x = "";
      if ("Hmac" == m.substr(0, 4)) {
        if (void 0 === n) throw "mac key shall be specified for HS* alg";
        var S = new p({ alg: m, prov: "cryptojs", pass: n });
        (S.updateString(w), (x = S.doFinal()));
      } else if (-1 != m.indexOf("withECDSA")) {
        var A = new g({ alg: m });
        (A.init(n, i), A.updateString(w));
        var E = A.sign();
        x = Dr.crypto.ECDSA.asn1SigToConcatSig(E);
      } else if ("none" != m) {
        A = new g({ alg: m });
        (A.init(n, i), A.updateString(w), (x = A.sign()));
      }
      var F = Kr(x);
      return w + "." + F;
    }),
    (Dr.jws.JWS.verify = function (t, e, r) {
      var n,
        i = Dr,
        s = i.jws,
        a = s.JWS,
        o = a.readSafeJSONString,
        h = i.crypto,
        u = h.ECDSA,
        c = h.Mac,
        l = h.Signature;
      if ((void 0 !== typeof Ue && (n = Ue), !Cn(t))) return !1;
      var f = t.split(".");
      if (3 !== f.length) return !1;
      var d = f[0],
        p = f[1],
        g = d + "." + p,
        v = zr(f[2]),
        m = o(Rr(f[0])),
        y = null,
        b = null;
      if (void 0 === m.alg) throw "algorithm not specified in header";
      if (
        ((y = m.alg),
        (b = y.substr(0, 2)),
        null != r &&
          "[object Array]" === Object.prototype.toString.call(r) &&
          r.length > 0)
      ) {
        var w = ":" + r.join(":") + ":";
        if (-1 == w.indexOf(":" + y + ":"))
          throw "algorithm '" + y + "' not accepted in the list";
      }
      if ("none" != y && null === e) throw "key shall be specified to verify.";
      if (
        ("string" == typeof e &&
          -1 != e.indexOf("-----BEGIN ") &&
          (e = Kn.getKey(e)),
        ("RS" == b || "PS" == b) && !(e instanceof n))
      )
        throw "key shall be a RSAKey obj for RS* and PS* algs";
      if ("ES" == b && !(e instanceof u))
        throw "key shall be a ECDSA obj for ES* algs";
      var x = null;
      if (void 0 === a.jwsalg2sigalg[m.alg]) throw "unsupported alg name: " + y;
      if (((x = a.jwsalg2sigalg[y]), "none" == x)) throw "not supported";
      if ("Hmac" == x.substr(0, 4)) {
        var S = null;
        if (void 0 === e) throw "hexadecimal key shall be specified for HMAC";
        var A = new c({ alg: x, pass: e });
        return (A.updateString(g), (S = A.doFinal()), v == S);
      }
      if (-1 != x.indexOf("withECDSA")) {
        var E = null;
        try {
          E = u.concatSigToASN1Sig(v);
        } catch (N) {
          return !1;
        }
        var F = new l({ alg: x });
        return (F.init(e), F.updateString(g), F.verify(E));
      }
      F = new l({ alg: x });
      return (F.init(e), F.updateString(g), F.verify(v));
    }),
    (Dr.jws.JWS.parse = function (t) {
      var e,
        r,
        n,
        i = t.split("."),
        s = {};
      if (2 != i.length && 3 != i.length)
        throw "malformed sJWS: wrong number of '.' splitted elements";
      return (
        (e = i[0]),
        (r = i[1]),
        3 == i.length && (n = i[2]),
        (s.headerObj = Dr.jws.JWS.readSafeJSONString(Rr(e))),
        (s.payloadObj = Dr.jws.JWS.readSafeJSONString(Rr(r))),
        (s.headerPP = JSON.stringify(s.headerObj, null, "  ")),
        null == s.payloadObj
          ? (s.payloadPP = Rr(r))
          : (s.payloadPP = JSON.stringify(s.payloadObj, null, "  ")),
        void 0 !== n && (s.sigHex = zr(n)),
        s
      );
    }),
    (Dr.jws.JWS.verifyJWT = function (t, e, r) {
      var n = Dr,
        i = n.jws,
        s = i.JWS,
        a = s.readSafeJSONString,
        o = s.inArray,
        h = s.includedArray;
      if (!Cn(t)) return !1;
      var u = t.split(".");
      if (3 != u.length) return !1;
      var c = u[0],
        l = u[1],
        f = (zr(u[2]), a(Rr(c))),
        d = a(Rr(l));
      if (void 0 === f.alg) return !1;
      if (void 0 === r.alg) throw "acceptField.alg shall be specified";
      if (!o(f.alg, r.alg)) return !1;
      if (void 0 !== d.iss && "object" === typeof r.iss && !o(d.iss, r.iss))
        return !1;
      if (void 0 !== d.sub && "object" === typeof r.sub && !o(d.sub, r.sub))
        return !1;
      if (void 0 !== d.aud && "object" === typeof r.aud)
        if ("string" == typeof d.aud) {
          if (!o(d.aud, r.aud)) return !1;
        } else if ("object" == typeof d.aud && !h(d.aud, r.aud)) return !1;
      var p = i.IntDate.getNow();
      return (
        void 0 !== r.verifyAt &&
          "number" === typeof r.verifyAt &&
          (p = r.verifyAt),
        (void 0 !== r.gracePeriod && "number" === typeof r.gracePeriod) ||
          (r.gracePeriod = 0),
        !(
          void 0 !== d.exp &&
          "number" == typeof d.exp &&
          d.exp + r.gracePeriod < p
        ) &&
          !(
            void 0 !== d.nbf &&
            "number" == typeof d.nbf &&
            p < d.nbf - r.gracePeriod
          ) &&
          !(
            void 0 !== d.iat &&
            "number" == typeof d.iat &&
            p < d.iat - r.gracePeriod
          ) &&
          (void 0 === d.jti || void 0 === r.jti || d.jti === r.jti) &&
          !!s.verify(t, e, r.alg)
      );
    }),
    (Dr.jws.JWS.includedArray = function (t, e) {
      var r = Dr.jws.JWS.inArray;
      if (null === t) return !1;
      if ("object" !== typeof t) return !1;
      if ("number" !== typeof t.length) return !1;
      for (var n = 0; n < t.length; n++) if (!r(t[n], e)) return !1;
      return !0;
    }),
    (Dr.jws.JWS.inArray = function (t, e) {
      if (null === e) return !1;
      if ("object" !== typeof e) return !1;
      if ("number" !== typeof e.length) return !1;
      for (var r = 0; r < e.length; r++) if (e[r] == t) return !0;
      return !1;
    }),
    (Dr.jws.JWS.jwsalg2sigalg = {
      HS256: "HmacSHA256",
      HS384: "HmacSHA384",
      HS512: "HmacSHA512",
      RS256: "SHA256withRSA",
      RS384: "SHA384withRSA",
      RS512: "SHA512withRSA",
      ES256: "SHA256withECDSA",
      ES384: "SHA384withECDSA",
      ES512: "SHA512withECDSA",
      PS256: "SHA256withRSAandMGF1",
      PS384: "SHA384withRSAandMGF1",
      PS512: "SHA512withRSAandMGF1",
      none: "none",
    }),
    (Dr.jws.JWS.isSafeJSONString = function (t, e, r) {
      var n = null;
      try {
        return (
          (n = Cr(t)),
          "object" != typeof n
            ? 0
            : n.constructor === Array
              ? 0
              : (e && (e[r] = n), 1)
        );
      } catch (i) {
        return 0;
      }
    }),
    (Dr.jws.JWS.readSafeJSONString = function (t) {
      var e = null;
      try {
        return (
          (e = Cr(t)),
          "object" != typeof e || e.constructor === Array ? null : e
        );
      } catch (r) {
        return null;
      }
    }),
    (Dr.jws.JWS.getEncodedSignatureValueFromJWS = function (t) {
      var e = t.match(/^[^.]+\.[^.]+\.([^.]+)$/);
      if (null == e)
        throw "JWS signature is not a form of 'Head.Payload.SigValue'.";
      return e[1];
    }),
    (Dr.jws.JWS.getJWKthumbprint = function (t) {
      if ("RSA" !== t.kty && "EC" !== t.kty && "oct" !== t.kty)
        throw "unsupported algorithm for JWK Thumprint";
      var e = "{";
      if ("RSA" === t.kty) {
        if ("string" != typeof t.n || "string" != typeof t.e)
          throw "wrong n and e value for RSA key";
        ((e += '"e":"' + t.e + '",'),
          (e += '"kty":"' + t.kty + '",'),
          (e += '"n":"' + t.n + '"}'));
      } else if ("EC" === t.kty) {
        if (
          "string" != typeof t.crv ||
          "string" != typeof t.x ||
          "string" != typeof t.y
        )
          throw "wrong crv, x and y value for EC key";
        ((e += '"crv":"' + t.crv + '",'),
          (e += '"kty":"' + t.kty + '",'),
          (e += '"x":"' + t.x + '",'),
          (e += '"y":"' + t.y + '"}'));
      } else if ("oct" === t.kty) {
        if ("string" != typeof t.k)
          throw "wrong k value for oct(symmetric) key";
        ((e += '"kty":"' + t.kty + '",'), (e += '"k":"' + t.k + '"}'));
      }
      var r = Qr(e),
        n = Dr.crypto.Util.hashHex(r, "sha256"),
        i = Kr(n);
      return i;
    }),
    (Dr.jws.IntDate = {}),
    (Dr.jws.IntDate.get = function (t) {
      var e = Dr.jws.IntDate,
        r = e.getNow,
        n = e.getZulu;
      if ("now" == t) return r();
      if ("now + 1hour" == t) return r() + 3600;
      if ("now + 1day" == t) return r() + 86400;
      if ("now + 1month" == t) return r() + 2592e3;
      if ("now + 1year" == t) return r() + 31536e3;
      if (t.match(/Z$/)) return n(t);
      if (t.match(/^[0-9]+$/)) return parseInt(t);
      throw "unsupported format: " + t;
    }),
    (Dr.jws.IntDate.getZulu = function (t) {
      return dn(t);
    }),
    (Dr.jws.IntDate.getNow = function () {
      var t = ~~(new Date() / 1e3);
      return t;
    }),
    (Dr.jws.IntDate.intDate2UTCString = function (t) {
      var e = new Date(1e3 * t);
      return e.toUTCString();
    }),
    (Dr.jws.IntDate.intDate2Zulu = function (t) {
      var e = new Date(1e3 * t),
        r = ("0000" + e.getUTCFullYear()).slice(-4),
        n = ("00" + (e.getUTCMonth() + 1)).slice(-2),
        i = ("00" + e.getUTCDate()).slice(-2),
        s = ("00" + e.getUTCHours()).slice(-2),
        a = ("00" + e.getUTCMinutes()).slice(-2),
        o = ("00" + e.getUTCSeconds()).slice(-2);
      return r + n + i + s + a + o + "Z";
    }),
    ("undefined" != typeof Dr && Dr) || (Dr = {}),
    ("undefined" != typeof Dr.jws && Dr.jws) || (Dr.jws = {}),
    (Dr.jws.JWSJS = function () {
      var t = Dr,
        e = t.jws,
        r = e.JWS,
        n = r.readSafeJSONString;
      ((this.aHeader = []),
        (this.sPayload = ""),
        (this.aSignature = []),
        (this.init = function () {
          ((this.aHeader = []),
            (this.sPayload = void 0),
            (this.aSignature = []));
        }),
        (this.initWithJWS = function (t) {
          this.init();
          var e = t.split(".");
          if (3 != e.length) throw "malformed input JWS";
          (this.aHeader.push(e[0]),
            (this.sPayload = e[1]),
            this.aSignature.push(e[2]));
        }),
        (this.addSignature = function (t, e, r, n) {
          if (void 0 === this.sPayload || null === this.sPayload)
            throw "there's no JSON-JS signature to add.";
          var i = this.aHeader.length;
          if (this.aHeader.length != this.aSignature.length)
            throw "aHeader.length != aSignature.length";
          try {
            var s = Dr.jws.JWS.sign(t, e, this.sPayload, r, n),
              a = s.split(".");
            (a[0], a[2]);
            (this.aHeader.push(a[0]), this.aSignature.push(a[2]));
          } catch (o) {
            throw (
              this.aHeader.length > i && this.aHeader.pop(),
              this.aSignature.length > i && this.aSignature.pop(),
              "addSignature failed: " + o
            );
          }
        }),
        (this.verifyAll = function (t) {
          if (
            this.aHeader.length !== t.length ||
            this.aSignature.length !== t.length
          )
            return !1;
          for (var e = 0; e < t.length; e++) {
            var r = t[e];
            if (2 !== r.length) return !1;
            var n = this.verifyNth(e, r[0], r[1]);
            if (!1 === n) return !1;
          }
          return !0;
        }),
        (this.verifyNth = function (t, e, n) {
          if (this.aHeader.length <= t || this.aSignature.length <= t)
            return !1;
          var i = this.aHeader[t],
            s = this.aSignature[t],
            a = i + "." + this.sPayload + "." + s,
            o = !1;
          try {
            o = r.verify(a, e, n);
          } catch (h) {
            return !1;
          }
          return o;
        }),
        (this.readJWSJS = function (t) {
          if ("string" === typeof t) {
            var e = n(t);
            if (null == e) throw "argument is not safe JSON object string";
            ((this.aHeader = e.headers),
              (this.sPayload = e.payload),
              (this.aSignature = e.signatures));
          } else
            try {
              if (!(t.headers.length > 0)) throw "malformed header";
              if (((this.aHeader = t.headers), "string" !== typeof t.payload))
                throw "malformed signatures";
              if (((this.sPayload = t.payload), !(t.signatures.length > 0)))
                throw "malformed signatures";
              this.aSignature = t.signatures;
            } catch (r) {
              throw "malformed JWS-JS JSON object: " + r;
            }
        }),
        (this.getJSON = function () {
          return {
            headers: this.aHeader,
            payload: this.sPayload,
            signatures: this.aSignature,
          };
        }),
        (this.isEmpty = function () {
          return 0 == this.aHeader.length ? 1 : 0;
        }));
    }),
    Dr.crypto.ECDSA,
    Dr.crypto.DSA,
    Dr.crypto.Signature,
    Dr.crypto.MessageDigest,
    Dr.crypto.Mac,
    Dr.crypto.Cipher,
    (e.fs = Dr),
    Dr.crypto,
    Dr.asn1,
    (e.dQ = Dr.jws),
    Dr.lang);
};
