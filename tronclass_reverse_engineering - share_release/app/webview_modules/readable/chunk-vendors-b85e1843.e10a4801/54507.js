// Source: decompiled/web-modules-acorn/chunk-vendors-b85e1843.e10a4801/54507.js
// Webpack module id: 54507
const __webpack_module_54507 = function (t, e, n) {
  var r = n(3336),
    i =
      (n(68304),
      n(69070),
      n(96647),
      n(75505),
      n(87714),
      n(82801),
      n(1174),
      n(57658),
      n(39575),
      n(41539),
      n(82472),
      n(48675),
      n(92990),
      n(18927),
      n(33105),
      n(35035),
      n(74345),
      n(7174),
      n(63408),
      n(14590),
      n(32846),
      n(44731),
      n(77209),
      n(96319),
      n(58867),
      n(37789),
      n(33739),
      n(29368),
      n(14483),
      n(12056),
      n(3462),
      n(30678),
      n(27462),
      n(33824),
      n(12974),
      n(15016),
      n(23767),
      n(8585),
      n(68696),
      n(82772),
      n(74916),
      n(15306),
      n(4723),
      n(39714),
      n(47042),
      n(24603),
      n(28450),
      n(88386),
      n(18264),
      n(21249),
      n(54747),
      n(94986),
      n(57327),
      n(9653),
      n(38862),
      n(26699),
      n(32023),
      n(78783),
      n(33948),
      n(40561),
      n(77601),
      n(70189),
      n(47856)),
    o = n(70655),
    s = n(20661),
    a = n(95924),
    u = "firebasestorage.googleapis.com",
    c = "storageBucket",
    h = 12e4,
    l = 6e5,
    f = (function (t) {
      function e(n, r) {
        var i =
          t.call(this, p(n), "Firebase Storage: " + r + " (" + p(n) + ")") ||
          this;
        return (
          (i.customData = { serverResponse: null }),
          (i._baseMessage = i.message),
          Object.setPrototypeOf(i, e.prototype),
          i
        );
      }
      return (
        (0, o.ZT)(e, t),
        (e.prototype._codeEquals = function (t) {
          return p(t) === this.code;
        }),
        Object.defineProperty(e.prototype, "serverResponse", {
          get: function () {
            return this.customData.serverResponse;
          },
          set: function (t) {
            ((this.customData.serverResponse = t),
              this.customData.serverResponse
                ? (this.message =
                    this._baseMessage + "\n" + this.customData.serverResponse)
                : (this.message = this._baseMessage));
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })(s.ZR);
  function p(t) {
    return "storage/" + t;
  }
  function d() {
    var t =
      "An unknown error occurred, please check the error payload for server response.";
    return new f("unknown", t);
  }
  function v(t) {
    return new f("object-not-found", "Object '" + t + "' does not exist.");
  }
  function g(t) {
    return new f(
      "quota-exceeded",
      "Quota for bucket '" +
        t +
        "' exceeded, please view quota on https://firebase.google.com/pricing/.",
    );
  }
  function y() {
    var t =
      "User is not authenticated, please authenticate using Firebase Authentication and try again.";
    return new f("unauthenticated", t);
  }
  function m() {
    return new f(
      "unauthorized-app",
      "This app does not have permission to access Firebase Storage on this project.",
    );
  }
  function b(t) {
    return new f(
      "unauthorized",
      "User does not have permission to access '" + t + "'.",
    );
  }
  function w() {
    return new f(
      "retry-limit-exceeded",
      "Max retry time for operation exceeded, please try again.",
    );
  }
  function _() {
    return new f("canceled", "User canceled the upload/download.");
  }
  function T(t) {
    return new f("invalid-url", "Invalid URL '" + t + "'.");
  }
  function E(t) {
    return new f(
      "invalid-default-bucket",
      "Invalid default bucket '" + t + "'.",
    );
  }
  function I() {
    return new f(
      "no-default-bucket",
      "No default bucket found. Did you set the '" +
        c +
        "' property when initializing the app?",
    );
  }
  function S() {
    return new f(
      "cannot-slice-blob",
      "Cannot slice blob for upload. Please retry the upload.",
    );
  }
  function A() {
    return new f(
      "server-file-wrong-size",
      "Server recorded incorrect upload file size, please retry the upload.",
    );
  }
  function k() {
    return new f(
      "no-download-url",
      "The given file does not have any download URLs.",
    );
  }
  function N(t) {
    return new f("invalid-argument", t);
  }
  function R() {
    return new f("app-deleted", "The Firebase app was deleted.");
  }
  function D(t) {
    return new f(
      "invalid-root-operation",
      "The operation '" +
        t +
        "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').",
    );
  }
  function C(t, e) {
    return new f(
      "invalid-format",
      "String does not match format '" + t + "': " + e,
    );
  }
  function O(t) {
    throw new f("internal-error", "Internal error: " + t);
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function x(t) {
    return atob(t);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var P = {
      RAW: "raw",
      BASE64: "base64",
      BASE64URL: "base64url",
      DATA_URL: "data_url",
    },
    L = (function () {
      function t(t, e) {
        ((this.data = t), (this.contentType = e || null));
      }
      return t;
    })();
  function M(t, e) {
    switch (t) {
      case P.RAW:
        return new L(F(e));
      case P.BASE64:
      case P.BASE64URL:
        return new L(V(t, e));
      case P.DATA_URL:
        return new L(j(e), B(e));
    }
    throw d();
  }
  function F(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var r = t.charCodeAt(n);
      if (r <= 127) e.push(r);
      else if (r <= 2047) e.push(192 | (r >> 6), 128 | (63 & r));
      else if (55296 === (64512 & r)) {
        var i = n < t.length - 1 && 56320 === (64512 & t.charCodeAt(n + 1));
        if (i) {
          var o = r,
            s = t.charCodeAt(++n);
          ((r = 65536 | ((1023 & o) << 10) | (1023 & s)),
            e.push(
              240 | (r >> 18),
              128 | ((r >> 12) & 63),
              128 | ((r >> 6) & 63),
              128 | (63 & r),
            ));
        } else e.push(239, 191, 189);
      } else
        56320 === (64512 & r)
          ? e.push(239, 191, 189)
          : e.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r));
    }
    return new Uint8Array(e);
  }
  function U(t) {
    var e;
    try {
      e = decodeURIComponent(t);
    } catch (n) {
      throw C(P.DATA_URL, "Malformed data URL.");
    }
    return F(e);
  }
  function V(t, e) {
    switch (t) {
      case P.BASE64:
        var n = -1 !== e.indexOf("-"),
          r = -1 !== e.indexOf("_");
        if (n || r) {
          var i = n ? "-" : "_";
          throw C(
            t,
            "Invalid character '" + i + "' found: is it base64url encoded?",
          );
        }
        break;
      case P.BASE64URL:
        var o = -1 !== e.indexOf("+"),
          s = -1 !== e.indexOf("/");
        if (o || s) {
          i = o ? "+" : "/";
          throw C(
            t,
            "Invalid character '" + i + "' found: is it base64 encoded?",
          );
        }
        e = e.replace(/-/g, "+").replace(/_/g, "/");
        break;
    }
    var a;
    try {
      a = x(e);
    } catch (h) {
      throw C(t, "Invalid character found");
    }
    for (var u = new Uint8Array(a.length), c = 0; c < a.length; c++)
      u[c] = a.charCodeAt(c);
    return u;
  }
  var q = (function () {
    function t(t) {
      ((this.base64 = !1), (this.contentType = null));
      var e = t.match(/^data:([^,]+)?,/);
      if (null === e)
        throw C(
          P.DATA_URL,
          "Must be formatted 'data:[<mediatype>][;base64],<data>",
        );
      var n = e[1] || null;
      (null != n &&
        ((this.base64 = G(n, ";base64")),
        (this.contentType = this.base64 ? n.substring(0, n.length - 7) : n)),
        (this.rest = t.substring(t.indexOf(",") + 1)));
    }
    return t;
  })();
  function j(t) {
    var e = new q(t);
    return e.base64 ? V(P.BASE64, e.rest) : U(e.rest);
  }
  function B(t) {
    var e = new q(t);
    return e.contentType;
  }
  function G(t, e) {
    var n = t.length >= e.length;
    return !!n && t.substring(t.length - e.length) === e;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var z,
    K = { STATE_CHANGED: "state_changed" },
    H = {
      RUNNING: "running",
      PAUSED: "paused",
      SUCCESS: "success",
      CANCELED: "canceled",
      ERROR: "error",
    };
  function J(t) {
    switch (t) {
      case "running":
      case "pausing":
      case "canceling":
        return H.RUNNING;
      case "paused":
        return H.PAUSED;
      case "success":
        return H.SUCCESS;
      case "canceled":
        return H.CANCELED;
      case "error":
        return H.ERROR;
      default:
        return H.ERROR;
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ (function (t) {
    ((t[(t["NO_ERROR"] = 0)] = "NO_ERROR"),
      (t[(t["NETWORK_ERROR"] = 1)] = "NETWORK_ERROR"),
      (t[(t["ABORT"] = 2)] = "ABORT"));
  })(z || (z = {}));
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var Q = (function () {
    function t() {
      var t = this;
      ((this.sent_ = !1),
        (this.xhr_ = new XMLHttpRequest()),
        (this.errorCode_ = z.NO_ERROR),
        (this.sendPromise_ = new Promise(function (e) {
          (t.xhr_.addEventListener("abort", function () {
            ((t.errorCode_ = z.ABORT), e());
          }),
            t.xhr_.addEventListener("error", function () {
              ((t.errorCode_ = z.NETWORK_ERROR), e());
            }),
            t.xhr_.addEventListener("load", function () {
              e();
            }));
        })));
    }
    return (
      (t.prototype.send = function (t, e, n, r) {
        if (this.sent_) throw O("cannot .send() more than once");
        if (((this.sent_ = !0), this.xhr_.open(e, t, !0), void 0 !== r))
          for (var i in r)
            r.hasOwnProperty(i) &&
              this.xhr_.setRequestHeader(i, r[i].toString());
        return (
          void 0 !== n ? this.xhr_.send(n) : this.xhr_.send(),
          this.sendPromise_
        );
      }),
      (t.prototype.getErrorCode = function () {
        if (!this.sent_) throw O("cannot .getErrorCode() before sending");
        return this.errorCode_;
      }),
      (t.prototype.getStatus = function () {
        if (!this.sent_) throw O("cannot .getStatus() before sending");
        try {
          return this.xhr_.status;
        } catch (t) {
          return -1;
        }
      }),
      (t.prototype.getResponseText = function () {
        if (!this.sent_) throw O("cannot .getResponseText() before sending");
        return this.xhr_.responseText;
      }),
      (t.prototype.abort = function () {
        this.xhr_.abort();
      }),
      (t.prototype.getResponseHeader = function (t) {
        return this.xhr_.getResponseHeader(t);
      }),
      (t.prototype.addUploadProgressListener = function (t) {
        null != this.xhr_.upload &&
          this.xhr_.upload.addEventListener("progress", t);
      }),
      (t.prototype.removeUploadProgressListener = function (t) {
        null != this.xhr_.upload &&
          this.xhr_.upload.removeEventListener("progress", t);
      }),
      t
    );
  })();
  function W() {
    return new Q();
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Z = (function () {
      function t() {}
      return (
        (t.prototype.createConnection = function () {
          return W();
        }),
        t
      );
    })(),
    X = (function () {
      function t(t, e) {
        ((this.bucket = t), (this.path_ = e));
      }
      return (
        Object.defineProperty(t.prototype, "path", {
          get: function () {
            return this.path_;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isRoot", {
          get: function () {
            return 0 === this.path.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.fullServerUrl = function () {
          var t = encodeURIComponent;
          return "/b/" + t(this.bucket) + "/o/" + t(this.path);
        }),
        (t.prototype.bucketOnlyServerUrl = function () {
          var t = encodeURIComponent;
          return "/b/" + t(this.bucket) + "/o";
        }),
        (t.makeFromBucketSpec = function (e, n) {
          var r;
          try {
            r = t.makeFromUrl(e, n);
          } catch (i) {
            return new t(e, "");
          }
          if ("" === r.path) return r;
          throw E(e);
        }),
        (t.makeFromUrl = function (e, n) {
          var r = null,
            i = "([A-Za-z0-9.\\-_]+)";
          function o(t) {
            "/" === t.path.charAt(t.path.length - 1) &&
              (t.path_ = t.path_.slice(0, -1));
          }
          var s = "(/(.*))?$",
            a = new RegExp("^gs://" + i + s, "i"),
            c = { bucket: 1, path: 3 };
          function h(t) {
            t.path_ = decodeURIComponent(t.path);
          }
          for (
            var l = "v[A-Za-z0-9_]+",
              f = n.replace(/[.]/g, "\\."),
              p = "(/([^?#]*).*)?$",
              d = new RegExp(
                "^https?://" + f + "/" + l + "/b/" + i + "/o" + p,
                "i",
              ),
              v = { bucket: 1, path: 3 },
              g =
                n === u
                  ? "(?:storage.googleapis.com|storage.cloud.google.com)"
                  : n,
              y = "([^?#]*)",
              m = new RegExp("^https?://" + g + "/" + i + "/" + y, "i"),
              b = { bucket: 1, path: 2 },
              w = [
                { regex: a, indices: c, postModify: o },
                { regex: d, indices: v, postModify: h },
                { regex: m, indices: b, postModify: h },
              ],
              _ = 0;
            _ < w.length;
            _++
          ) {
            var E = w[_],
              I = E.regex.exec(e);
            if (I) {
              var S = I[E.indices.bucket],
                A = I[E.indices.path];
              (A || (A = ""), (r = new t(S, A)), E.postModify(r));
              break;
            }
          }
          if (null == r) throw T(e);
          return r;
        }),
        t
      );
    })(),
    Y = (function () {
      function t(t) {
        this.promise_ = Promise.reject(t);
      }
      return (
        (t.prototype.getPromise = function () {
          return this.promise_;
        }),
        (t.prototype.cancel = function (t) {}),
        t
      );
    })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  function $(t, e, n) {
    var r = 1,
      i = null,
      s = !1,
      a = 0;
    function u() {
      return 2 === a;
    }
    var c = !1;
    function h() {
      for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
      c || ((c = !0), e.apply(null, t));
    }
    function l(e) {
      i = setTimeout(function () {
        ((i = null), t(f, u()));
      }, e);
    }
    function f(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (!c)
        if (t) h.call.apply(h, (0, o.ev)([null, t], e));
        else {
          var i,
            f = u() || s;
          if (f) h.call.apply(h, (0, o.ev)([null, t], e));
          else
            (r < 64 && (r *= 2),
              1 === a ? ((a = 2), (i = 0)) : (i = 1e3 * (r + Math.random())),
              l(i));
        }
    }
    var p = !1;
    function d(t) {
      p ||
        ((p = !0),
        c ||
          (null !== i ? (t || (a = 2), clearTimeout(i), l(0)) : t || (a = 1)));
    }
    return (
      l(0),
      setTimeout(function () {
        ((s = !0), d(!0));
      }, n),
      d
    );
  }
  function tt(t) {
    t(!1);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function et(t) {
    return void 0 !== t;
  }
  function nt(t) {
    return "function" === typeof t;
  }
  function rt(t) {
    return "object" === (0, r.Z)(t) && !Array.isArray(t);
  }
  function it(t) {
    return "string" === typeof t || t instanceof String;
  }
  function ot(t) {
    return st() && t instanceof Blob;
  }
  function st() {
    return "undefined" !== typeof Blob;
  }
  function at(t, e, n, r) {
    if (r < e)
      throw N("Invalid value for '" + t + "'. Expected " + e + " or greater.");
    if (r > n)
      throw N("Invalid value for '" + t + "'. Expected " + n + " or less.");
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ut(t, e) {
    var n = e.match(/^(\w+):\/\/.+/),
      r = null === n || void 0 === n ? void 0 : n[1],
      i = e;
    return (null == r && (i = "https://" + e), i + "/v0" + t);
  }
  function ct(t) {
    var e = encodeURIComponent,
      n = "?";
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var i = e(r) + "=" + e(t[r]);
        n = n + i + "&";
      }
    return ((n = n.slice(0, -1)), n);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var ht = (function () {
      function t(t, e, n, r, i, o, s, a, u, c, h) {
        var l = this;
        ((this.pendingConnection_ = null),
          (this.backoffId_ = null),
          (this.canceled_ = !1),
          (this.appDelete_ = !1),
          (this.url_ = t),
          (this.method_ = e),
          (this.headers_ = n),
          (this.body_ = r),
          (this.successCodes_ = i.slice()),
          (this.additionalRetryCodes_ = o.slice()),
          (this.callback_ = s),
          (this.errorCallback_ = a),
          (this.progressCallback_ = c),
          (this.timeout_ = u),
          (this.pool_ = h),
          (this.promise_ = new Promise(function (t, e) {
            ((l.resolve_ = t), (l.reject_ = e), l.start_());
          })));
      }
      return (
        (t.prototype.start_ = function () {
          var t = this;
          function e(e, n) {
            if (n) e(!1, new lt(!1, null, !0));
            else {
              var r = t.pool_.createConnection();
              ((t.pendingConnection_ = r),
                null !== t.progressCallback_ && r.addUploadProgressListener(i),
                r
                  .send(t.url_, t.method_, t.body_, t.headers_)
                  .then(function () {
                    (null !== t.progressCallback_ &&
                      r.removeUploadProgressListener(i),
                      (t.pendingConnection_ = null));
                    var n = r.getErrorCode() === z.NO_ERROR,
                      o = r.getStatus();
                    if (n && !t.isRetryStatusCode_(o)) {
                      var s = -1 !== t.successCodes_.indexOf(o);
                      e(!0, new lt(s, r));
                    } else {
                      var a = r.getErrorCode() === z.ABORT;
                      e(!1, new lt(!1, null, a));
                    }
                  }));
            }
            function i(e) {
              var n = e.loaded,
                r = e.lengthComputable ? e.total : -1;
              null !== t.progressCallback_ && t.progressCallback_(n, r);
            }
          }
          function n(e, n) {
            var r = t.resolve_,
              i = t.reject_,
              o = n.connection;
            if (n.wasSuccessCode)
              try {
                var s = t.callback_(o, o.getResponseText());
                et(s) ? r(s) : r();
              } catch (u) {
                i(u);
              }
            else if (null !== o) {
              var a = d();
              ((a.serverResponse = o.getResponseText()),
                t.errorCallback_ ? i(t.errorCallback_(o, a)) : i(a));
            } else if (n.canceled) {
              a = t.appDelete_ ? R() : _();
              i(a);
            } else {
              a = w();
              i(a);
            }
          }
          this.canceled_
            ? n(!1, new lt(!1, null, !0))
            : (this.backoffId_ = $(e, n, this.timeout_));
        }),
        (t.prototype.getPromise = function () {
          return this.promise_;
        }),
        (t.prototype.cancel = function (t) {
          ((this.canceled_ = !0),
            (this.appDelete_ = t || !1),
            null !== this.backoffId_ && tt(this.backoffId_),
            null !== this.pendingConnection_ &&
              this.pendingConnection_.abort());
        }),
        (t.prototype.isRetryStatusCode_ = function (t) {
          var e = t >= 500 && t < 600,
            n = [408, 429],
            r = -1 !== n.indexOf(t),
            i = -1 !== this.additionalRetryCodes_.indexOf(t);
          return e || r || i;
        }),
        t
      );
    })(),
    lt = (function () {
      function t(t, e, n) {
        ((this.wasSuccessCode = t),
          (this.connection = e),
          (this.canceled = !!n));
      }
      return t;
    })();
  function ft(t, e) {
    null !== e && e.length > 0 && (t["Authorization"] = "Firebase " + e);
  }
  function pt(t, e) {
    t["X-Firebase-Storage-Version"] =
      "webjs/" + (null !== e && void 0 !== e ? e : "AppManager");
  }
  function dt(t, e) {
    e && (t["X-Firebase-GMPID"] = e);
  }
  function vt(t, e) {
    null !== e && (t["X-Firebase-AppCheck"] = e);
  }
  function gt(t, e, n, r, i, o) {
    var s = ct(t.urlParams),
      a = t.url + s,
      u = Object.assign({}, t.headers);
    return (
      dt(u, e),
      ft(u, n),
      pt(u, o),
      vt(u, r),
      new ht(
        a,
        t.method,
        u,
        t.body,
        t.successCodes,
        t.additionalRetryCodes,
        t.handler,
        t.errorHandler,
        t.timeout,
        t.progressCallback,
        i,
      )
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function yt() {
    return "undefined" !== typeof BlobBuilder
      ? BlobBuilder
      : "undefined" !== typeof WebKitBlobBuilder
        ? WebKitBlobBuilder
        : void 0;
  }
  function mt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = yt();
    if (void 0 !== n) {
      for (var r = new n(), i = 0; i < t.length; i++) r.append(t[i]);
      return r.getBlob();
    }
    if (st()) return new Blob(t);
    throw new f(
      "unsupported-environment",
      "This browser doesn't seem to support creating Blobs",
    );
  }
  function bt(t, e, n) {
    return t.webkitSlice
      ? t.webkitSlice(e, n)
      : t.mozSlice
        ? t.mozSlice(e, n)
        : t.slice
          ? t.slice(e, n)
          : null;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var wt = (function () {
    function t(t, e) {
      var n = 0,
        r = "";
      (ot(t)
        ? ((this.data_ = t), (n = t.size), (r = t.type))
        : t instanceof ArrayBuffer
          ? (e
              ? (this.data_ = new Uint8Array(t))
              : ((this.data_ = new Uint8Array(t.byteLength)),
                this.data_.set(new Uint8Array(t))),
            (n = this.data_.length))
          : t instanceof Uint8Array &&
            (e
              ? (this.data_ = t)
              : ((this.data_ = new Uint8Array(t.length)), this.data_.set(t)),
            (n = t.length)),
        (this.size_ = n),
        (this.type_ = r));
    }
    return (
      (t.prototype.size = function () {
        return this.size_;
      }),
      (t.prototype.type = function () {
        return this.type_;
      }),
      (t.prototype.slice = function (e, n) {
        if (ot(this.data_)) {
          var r = this.data_,
            i = bt(r, e, n);
          return null === i ? null : new t(i);
        }
        var o = new Uint8Array(this.data_.buffer, e, n - e);
        return new t(o, !0);
      }),
      (t.getBlob = function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        if (st()) {
          var r = e.map(function (e) {
            return e instanceof t ? e.data_ : e;
          });
          return new t(mt.apply(null, r));
        }
        var i = e.map(function (t) {
            return it(t) ? M(P.RAW, t).data : t.data_;
          }),
          o = 0;
        i.forEach(function (t) {
          o += t.byteLength;
        });
        var s = new Uint8Array(o),
          a = 0;
        return (
          i.forEach(function (t) {
            for (var e = 0; e < t.length; e++) s[a++] = t[e];
          }),
          new t(s, !0)
        );
      }),
      (t.prototype.uploadData = function () {
        return this.data_;
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function _t(t) {
    var e;
    try {
      e = JSON.parse(t);
    } catch (n) {
      return null;
    }
    return rt(e) ? e : null;
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Tt(t) {
    if (0 === t.length) return null;
    var e = t.lastIndexOf("/");
    if (-1 === e) return "";
    var n = t.slice(0, e);
    return n;
  }
  function Et(t, e) {
    var n = e
      .split("/")
      .filter(function (t) {
        return t.length > 0;
      })
      .join("/");
    return 0 === t.length ? n : t + "/" + n;
  }
  function It(t) {
    var e = t.lastIndexOf("/", t.length - 2);
    return -1 === e ? t : t.slice(e + 1);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function St(t, e) {
    return e;
  }
  var At = (function () {
      function t(t, e, n, r) {
        ((this.server = t),
          (this.local = e || t),
          (this.writable = !!n),
          (this.xform = r || St));
      }
      return t;
    })(),
    kt = null;
  function Nt(t) {
    return !it(t) || t.length < 2 ? t : It(t);
  }
  function Rt() {
    if (kt) return kt;
    var t = [];
    function e(t, e) {
      return Nt(e);
    }
    (t.push(new At("bucket")),
      t.push(new At("generation")),
      t.push(new At("metageneration")),
      t.push(new At("name", "fullPath", !0)));
    var n = new At("name");
    function r(t, e) {
      return void 0 !== e ? Number(e) : e;
    }
    ((n.xform = e), t.push(n));
    var i = new At("size");
    return (
      (i.xform = r),
      t.push(i),
      t.push(new At("timeCreated")),
      t.push(new At("updated")),
      t.push(new At("md5Hash", null, !0)),
      t.push(new At("cacheControl", null, !0)),
      t.push(new At("contentDisposition", null, !0)),
      t.push(new At("contentEncoding", null, !0)),
      t.push(new At("contentLanguage", null, !0)),
      t.push(new At("contentType", null, !0)),
      t.push(new At("metadata", "customMetadata", !0)),
      (kt = t),
      kt
    );
  }
  function Dt(t, e) {
    function n() {
      var n = t["bucket"],
        r = t["fullPath"],
        i = new X(n, r);
      return e._makeStorageReference(i);
    }
    Object.defineProperty(t, "ref", { get: n });
  }
  function Ct(t, e, n) {
    for (var r = { type: "file" }, i = n.length, o = 0; o < i; o++) {
      var s = n[o];
      r[s.local] = s.xform(r, e[s.server]);
    }
    return (Dt(r, t), r);
  }
  function Ot(t, e, n) {
    var r = _t(e);
    if (null === r) return null;
    var i = r;
    return Ct(t, i, n);
  }
  function xt(t, e, n) {
    var r = _t(e);
    if (null === r) return null;
    if (!it(r["downloadTokens"])) return null;
    var i = r["downloadTokens"];
    if (0 === i.length) return null;
    var o = encodeURIComponent,
      s = i.split(","),
      a = s.map(function (e) {
        var r = t["bucket"],
          i = t["fullPath"],
          s = "/b/" + o(r) + "/o/" + o(i),
          a = ut(s, n),
          u = ct({ alt: "media", token: e });
        return a + u;
      });
    return a[0];
  }
  function Pt(t, e) {
    for (var n = {}, r = e.length, i = 0; i < r; i++) {
      var o = e[i];
      o.writable && (n[o.server] = t[o.local]);
    }
    return JSON.stringify(n);
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Lt = "prefixes",
    Mt = "items";
  function Ft(t, e, n) {
    var r = { prefixes: [], items: [], nextPageToken: n["nextPageToken"] };
    if (n[Lt])
      for (var i = 0, o = n[Lt]; i < o.length; i++) {
        var s = o[i],
          a = s.replace(/\/$/, ""),
          u = t._makeStorageReference(new X(e, a));
        r.prefixes.push(u);
      }
    if (n[Mt])
      for (var c = 0, h = n[Mt]; c < h.length; c++) {
        var l = h[c];
        u = t._makeStorageReference(new X(e, l["name"]));
        r.items.push(u);
      }
    return r;
  }
  function Ut(t, e, n) {
    var r = _t(n);
    if (null === r) return null;
    var i = r;
    return Ft(t, e, i);
  }
  var Vt = (function () {
    function t(t, e, n, r) {
      ((this.url = t),
        (this.method = e),
        (this.handler = n),
        (this.timeout = r),
        (this.urlParams = {}),
        (this.headers = {}),
        (this.body = null),
        (this.errorHandler = null),
        (this.progressCallback = null),
        (this.successCodes = [200]),
        (this.additionalRetryCodes = []));
    }
    return t;
  })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function qt(t) {
    if (!t) throw d();
  }
  function jt(t, e) {
    function n(n, r) {
      var i = Ot(t, r, e);
      return (qt(null !== i), i);
    }
    return n;
  }
  function Bt(t, e) {
    function n(n, r) {
      var i = Ut(t, e, r);
      return (qt(null !== i), i);
    }
    return n;
  }
  function Gt(t, e) {
    function n(n, r) {
      var i = Ot(t, r, e);
      return (qt(null !== i), xt(i, r, t.host));
    }
    return n;
  }
  function zt(t) {
    function e(e, n) {
      var r;
      return (
        (r =
          401 === e.getStatus()
            ? e
                .getResponseText()
                .includes("Firebase App Check token is invalid")
              ? m()
              : y()
            : 402 === e.getStatus()
              ? g(t.bucket)
              : 403 === e.getStatus()
                ? b(t.path)
                : n),
        (r.serverResponse = n.serverResponse),
        r
      );
    }
    return e;
  }
  function Kt(t) {
    var e = zt(t);
    function n(n, r) {
      var i = e(n, r);
      return (
        404 === n.getStatus() && (i = v(t.path)),
        (i.serverResponse = r.serverResponse),
        i
      );
    }
    return n;
  }
  function Ht(t, e, n) {
    var r = e.fullServerUrl(),
      i = ut(r, t.host),
      o = "GET",
      s = t.maxOperationRetryTime,
      a = new Vt(i, o, jt(t, n), s);
    return ((a.errorHandler = Kt(e)), a);
  }
  function Jt(t, e, n, r, i) {
    var o = {};
    (e.isRoot ? (o["prefix"] = "") : (o["prefix"] = e.path + "/"),
      n && n.length > 0 && (o["delimiter"] = n),
      r && (o["pageToken"] = r),
      i && (o["maxResults"] = i));
    var s = e.bucketOnlyServerUrl(),
      a = ut(s, t.host),
      u = "GET",
      c = t.maxOperationRetryTime,
      h = new Vt(a, u, Bt(t, e.bucket), c);
    return ((h.urlParams = o), (h.errorHandler = zt(e)), h);
  }
  function Qt(t, e, n) {
    var r = e.fullServerUrl(),
      i = ut(r, t.host),
      o = "GET",
      s = t.maxOperationRetryTime,
      a = new Vt(i, o, Gt(t, n), s);
    return ((a.errorHandler = Kt(e)), a);
  }
  function Wt(t, e, n, r) {
    var i = e.fullServerUrl(),
      o = ut(i, t.host),
      s = "PATCH",
      a = Pt(n, r),
      u = { "Content-Type": "application/json; charset=utf-8" },
      c = t.maxOperationRetryTime,
      h = new Vt(o, s, jt(t, r), c);
    return ((h.headers = u), (h.body = a), (h.errorHandler = Kt(e)), h);
  }
  function Zt(t, e) {
    var n = e.fullServerUrl(),
      r = ut(n, t.host),
      i = "DELETE",
      o = t.maxOperationRetryTime;
    function s(t, e) {}
    var a = new Vt(r, i, s, o);
    return ((a.successCodes = [200, 204]), (a.errorHandler = Kt(e)), a);
  }
  function Xt(t, e) {
    return (
      (t && t["contentType"]) || (e && e.type()) || "application/octet-stream"
    );
  }
  function Yt(t, e, n) {
    var r = Object.assign({}, n);
    return (
      (r["fullPath"] = t.path),
      (r["size"] = e.size()),
      r["contentType"] || (r["contentType"] = Xt(null, e)),
      r
    );
  }
  function $t(t, e, n, r, i) {
    var o = e.bucketOnlyServerUrl(),
      s = { "X-Goog-Upload-Protocol": "multipart" };
    function a() {
      for (var t = "", e = 0; e < 2; e++)
        t += Math.random().toString().slice(2);
      return t;
    }
    var u = a();
    s["Content-Type"] = "multipart/related; boundary=" + u;
    var c = Yt(e, r, i),
      h = Pt(c, n),
      l =
        "--" +
        u +
        "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" +
        h +
        "\r\n--" +
        u +
        "\r\nContent-Type: " +
        c["contentType"] +
        "\r\n\r\n",
      f = "\r\n--" + u + "--",
      p = wt.getBlob(l, r, f);
    if (null === p) throw S();
    var d = { name: c["fullPath"] },
      v = ut(o, t.host),
      g = "POST",
      y = t.maxUploadRetryTime,
      m = new Vt(v, g, jt(t, n), y);
    return (
      (m.urlParams = d),
      (m.headers = s),
      (m.body = p.uploadData()),
      (m.errorHandler = zt(e)),
      m
    );
  }
  var te = (function () {
    function t(t, e, n, r) {
      ((this.current = t),
        (this.total = e),
        (this.finalized = !!n),
        (this.metadata = r || null));
    }
    return t;
  })();
  function ee(t, e) {
    var n = null;
    try {
      n = t.getResponseHeader("X-Goog-Upload-Status");
    } catch (i) {
      qt(!1);
    }
    var r = e || ["active"];
    return (qt(!!n && -1 !== r.indexOf(n)), n);
  }
  function ne(t, e, n, r, i) {
    var o = e.bucketOnlyServerUrl(),
      s = Yt(e, r, i),
      a = { name: s["fullPath"] },
      u = ut(o, t.host),
      c = "POST",
      h = {
        "X-Goog-Upload-Protocol": "resumable",
        "X-Goog-Upload-Command": "start",
        "X-Goog-Upload-Header-Content-Length": "" + r.size(),
        "X-Goog-Upload-Header-Content-Type": s["contentType"],
        "Content-Type": "application/json; charset=utf-8",
      },
      l = Pt(s, n),
      f = t.maxUploadRetryTime;
    function p(t) {
      var e;
      ee(t);
      try {
        e = t.getResponseHeader("X-Goog-Upload-URL");
      } catch (n) {
        qt(!1);
      }
      return (qt(it(e)), e);
    }
    var d = new Vt(u, c, p, f);
    return (
      (d.urlParams = a),
      (d.headers = h),
      (d.body = l),
      (d.errorHandler = zt(e)),
      d
    );
  }
  function re(t, e, n, r) {
    var i = { "X-Goog-Upload-Command": "query" };
    function o(t) {
      var e = ee(t, ["active", "final"]),
        n = null;
      try {
        n = t.getResponseHeader("X-Goog-Upload-Size-Received");
      } catch (o) {
        qt(!1);
      }
      n || qt(!1);
      var i = Number(n);
      return (qt(!isNaN(i)), new te(i, r.size(), "final" === e));
    }
    var s = "POST",
      a = t.maxUploadRetryTime,
      u = new Vt(n, s, o, a);
    return ((u.headers = i), (u.errorHandler = zt(e)), u);
  }
  var ie = 262144;
  function oe(t, e, n, r, i, o, s, a) {
    var u = new te(0, 0);
    if (
      (s
        ? ((u.current = s.current), (u.total = s.total))
        : ((u.current = 0), (u.total = r.size())),
      r.size() !== u.total)
    )
      throw A();
    var c = u.total - u.current,
      h = c;
    i > 0 && (h = Math.min(h, i));
    var l = u.current,
      f = l + h,
      p = h === c ? "upload, finalize" : "upload",
      d = {
        "X-Goog-Upload-Command": p,
        "X-Goog-Upload-Offset": "" + u.current,
      },
      v = r.slice(l, f);
    if (null === v) throw S();
    function g(t, n) {
      var i,
        s = ee(t, ["active", "final"]),
        a = u.current + h,
        c = r.size();
      return (
        (i = "final" === s ? jt(e, o)(t, n) : null),
        new te(a, c, "final" === s, i)
      );
    }
    var y = "POST",
      m = e.maxUploadRetryTime,
      b = new Vt(n, y, g, m);
    return (
      (b.headers = d),
      (b.body = v.uploadData()),
      (b.progressCallback = a || null),
      (b.errorHandler = zt(t)),
      b
    );
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var se = (function () {
    function t(t, e, n) {
      var r = nt(t) || null != e || null != n;
      if (r) ((this.next = t), (this.error = e), (this.complete = n));
      else {
        var i = t;
        ((this.next = i.next),
          (this.error = i.error),
          (this.complete = i.complete));
      }
    }
    return t;
  })();
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ae(t) {
    return function () {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      Promise.resolve().then(function () {
        return t.apply(void 0, e);
      });
    };
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var ue = (function () {
      function t(t, e, n) {
        var r = this;
        (void 0 === n && (n = null),
          (this._transferred = 0),
          (this._needToFetchStatus = !1),
          (this._needToFetchMetadata = !1),
          (this._observers = []),
          (this._error = void 0),
          (this._uploadUrl = void 0),
          (this._request = void 0),
          (this._chunkMultiplier = 1),
          (this._resolve = void 0),
          (this._reject = void 0),
          (this._ref = t),
          (this._blob = e),
          (this._metadata = n),
          (this._mappings = Rt()),
          (this._resumable = this._shouldDoResumable(this._blob)),
          (this._state = "running"),
          (this._errorHandler = function (t) {
            ((r._request = void 0),
              (r._chunkMultiplier = 1),
              t._codeEquals("canceled")
                ? ((r._needToFetchStatus = !0), r.completeTransitions_())
                : ((r._error = t), r._transition("error")));
          }),
          (this._metadataErrorHandler = function (t) {
            ((r._request = void 0),
              t._codeEquals("canceled")
                ? r.completeTransitions_()
                : ((r._error = t), r._transition("error")));
          }),
          (this._promise = new Promise(function (t, e) {
            ((r._resolve = t), (r._reject = e), r._start());
          })),
          this._promise.then(null, function () {}));
      }
      return (
        (t.prototype._makeProgressCallback = function () {
          var t = this,
            e = this._transferred;
          return function (n) {
            return t._updateProgress(e + n);
          };
        }),
        (t.prototype._shouldDoResumable = function (t) {
          return t.size() > 262144;
        }),
        (t.prototype._start = function () {
          "running" === this._state &&
            void 0 === this._request &&
            (this._resumable
              ? void 0 === this._uploadUrl
                ? this._createResumable()
                : this._needToFetchStatus
                  ? this._fetchStatus()
                  : this._needToFetchMetadata
                    ? this._fetchMetadata()
                    : this._continueUpload()
              : this._oneShotUpload());
        }),
        (t.prototype._resolveToken = function (t) {
          var e = this;
          Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken(),
          ]).then(function (n) {
            var r = n[0],
              i = n[1];
            switch (e._state) {
              case "running":
                t(r, i);
                break;
              case "canceling":
                e._transition("canceled");
                break;
              case "pausing":
                e._transition("paused");
                break;
            }
          });
        }),
        (t.prototype._createResumable = function () {
          var t = this;
          this._resolveToken(function (e, n) {
            var r = ne(
                t._ref.storage,
                t._ref._location,
                t._mappings,
                t._blob,
                t._metadata,
              ),
              i = t._ref.storage._makeRequest(r, e, n);
            ((t._request = i),
              i.getPromise().then(function (e) {
                ((t._request = void 0),
                  (t._uploadUrl = e),
                  (t._needToFetchStatus = !1),
                  t.completeTransitions_());
              }, t._errorHandler));
          });
        }),
        (t.prototype._fetchStatus = function () {
          var t = this,
            e = this._uploadUrl;
          this._resolveToken(function (n, r) {
            var i = re(t._ref.storage, t._ref._location, e, t._blob),
              o = t._ref.storage._makeRequest(i, n, r);
            ((t._request = o),
              o.getPromise().then(function (e) {
                ((t._request = void 0),
                  t._updateProgress(e.current),
                  (t._needToFetchStatus = !1),
                  e.finalized && (t._needToFetchMetadata = !0),
                  t.completeTransitions_());
              }, t._errorHandler));
          });
        }),
        (t.prototype._continueUpload = function () {
          var t = this,
            e = ie * this._chunkMultiplier,
            n = new te(this._transferred, this._blob.size()),
            r = this._uploadUrl;
          this._resolveToken(function (i, o) {
            var s;
            try {
              s = oe(
                t._ref._location,
                t._ref.storage,
                r,
                t._blob,
                e,
                t._mappings,
                n,
                t._makeProgressCallback(),
              );
            } catch (u) {
              return ((t._error = u), void t._transition("error"));
            }
            var a = t._ref.storage._makeRequest(s, i, o);
            ((t._request = a),
              a.getPromise().then(function (e) {
                (t._increaseMultiplier(),
                  (t._request = void 0),
                  t._updateProgress(e.current),
                  e.finalized
                    ? ((t._metadata = e.metadata), t._transition("success"))
                    : t.completeTransitions_());
              }, t._errorHandler));
          });
        }),
        (t.prototype._increaseMultiplier = function () {
          var t = ie * this._chunkMultiplier;
          t < 33554432 && (this._chunkMultiplier *= 2);
        }),
        (t.prototype._fetchMetadata = function () {
          var t = this;
          this._resolveToken(function (e, n) {
            var r = Ht(t._ref.storage, t._ref._location, t._mappings),
              i = t._ref.storage._makeRequest(r, e, n);
            ((t._request = i),
              i.getPromise().then(function (e) {
                ((t._request = void 0),
                  (t._metadata = e),
                  t._transition("success"));
              }, t._metadataErrorHandler));
          });
        }),
        (t.prototype._oneShotUpload = function () {
          var t = this;
          this._resolveToken(function (e, n) {
            var r = $t(
                t._ref.storage,
                t._ref._location,
                t._mappings,
                t._blob,
                t._metadata,
              ),
              i = t._ref.storage._makeRequest(r, e, n);
            ((t._request = i),
              i.getPromise().then(function (e) {
                ((t._request = void 0),
                  (t._metadata = e),
                  t._updateProgress(t._blob.size()),
                  t._transition("success"));
              }, t._errorHandler));
          });
        }),
        (t.prototype._updateProgress = function (t) {
          var e = this._transferred;
          ((this._transferred = t),
            this._transferred !== e && this._notifyObservers());
        }),
        (t.prototype._transition = function (t) {
          if (this._state !== t)
            switch (t) {
              case "canceling":
                ((this._state = t),
                  void 0 !== this._request && this._request.cancel());
                break;
              case "pausing":
                ((this._state = t),
                  void 0 !== this._request && this._request.cancel());
                break;
              case "running":
                var e = "paused" === this._state;
                ((this._state = t),
                  e && (this._notifyObservers(), this._start()));
                break;
              case "paused":
                ((this._state = t), this._notifyObservers());
                break;
              case "canceled":
                ((this._error = _()),
                  (this._state = t),
                  this._notifyObservers());
                break;
              case "error":
                ((this._state = t), this._notifyObservers());
                break;
              case "success":
                ((this._state = t), this._notifyObservers());
                break;
            }
        }),
        (t.prototype.completeTransitions_ = function () {
          switch (this._state) {
            case "pausing":
              this._transition("paused");
              break;
            case "canceling":
              this._transition("canceled");
              break;
            case "running":
              this._start();
              break;
          }
        }),
        Object.defineProperty(t.prototype, "snapshot", {
          get: function () {
            var t = J(this._state);
            return {
              bytesTransferred: this._transferred,
              totalBytes: this._blob.size(),
              state: t,
              metadata: this._metadata,
              task: this,
              ref: this._ref,
            };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.on = function (t, e, n, r) {
          var i = this,
            o = new se(e, n, r);
          return (
            this._addObserver(o),
            function () {
              i._removeObserver(o);
            }
          );
        }),
        (t.prototype.then = function (t, e) {
          return this._promise.then(t, e);
        }),
        (t.prototype.catch = function (t) {
          return this.then(null, t);
        }),
        (t.prototype._addObserver = function (t) {
          (this._observers.push(t), this._notifyObserver(t));
        }),
        (t.prototype._removeObserver = function (t) {
          var e = this._observers.indexOf(t);
          -1 !== e && this._observers.splice(e, 1);
        }),
        (t.prototype._notifyObservers = function () {
          var t = this;
          this._finishPromise();
          var e = this._observers.slice();
          e.forEach(function (e) {
            t._notifyObserver(e);
          });
        }),
        (t.prototype._finishPromise = function () {
          if (void 0 !== this._resolve) {
            var t = !0;
            switch (J(this._state)) {
              case H.SUCCESS:
                ae(this._resolve.bind(null, this.snapshot))();
                break;
              case H.CANCELED:
              case H.ERROR:
                var e = this._reject;
                ae(e.bind(null, this._error))();
                break;
              default:
                t = !1;
                break;
            }
            t && ((this._resolve = void 0), (this._reject = void 0));
          }
        }),
        (t.prototype._notifyObserver = function (t) {
          var e = J(this._state);
          switch (e) {
            case H.RUNNING:
            case H.PAUSED:
              t.next && ae(t.next.bind(t, this.snapshot))();
              break;
            case H.SUCCESS:
              t.complete && ae(t.complete.bind(t))();
              break;
            case H.CANCELED:
            case H.ERROR:
              t.error && ae(t.error.bind(t, this._error))();
              break;
            default:
              t.error && ae(t.error.bind(t, this._error))();
          }
        }),
        (t.prototype.resume = function () {
          var t = "paused" === this._state || "pausing" === this._state;
          return (t && this._transition("running"), t);
        }),
        (t.prototype.pause = function () {
          var t = "running" === this._state;
          return (t && this._transition("pausing"), t);
        }),
        (t.prototype.cancel = function () {
          var t = "running" === this._state || "pausing" === this._state;
          return (t && this._transition("canceling"), t);
        }),
        t
      );
    })(),
    ce = (function () {
      function t(t, e) {
        ((this._service = t),
          (this._location = e instanceof X ? e : X.makeFromUrl(e, t.host)));
      }
      return (
        (t.prototype.toString = function () {
          return "gs://" + this._location.bucket + "/" + this._location.path;
        }),
        (t.prototype._newRef = function (e, n) {
          return new t(e, n);
        }),
        Object.defineProperty(t.prototype, "root", {
          get: function () {
            var t = new X(this._location.bucket, "");
            return this._newRef(this._service, t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "bucket", {
          get: function () {
            return this._location.bucket;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "fullPath", {
          get: function () {
            return this._location.path;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return It(this._location.path);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "storage", {
          get: function () {
            return this._service;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "parent", {
          get: function () {
            var e = Tt(this._location.path);
            if (null === e) return null;
            var n = new X(this._location.bucket, e);
            return new t(this._service, n);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype._throwIfRoot = function (t) {
          if ("" === this._location.path) throw D(t);
        }),
        t
      );
    })();
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function he(t, e, n) {
    return (t._throwIfRoot("uploadBytesResumable"), new ue(t, new wt(e), n));
  }
  function le(t) {
    var e = { prefixes: [], items: [] };
    return fe(t, e).then(function () {
      return e;
    });
  }
  function fe(t, e, n) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var r, i, s, a;
      return (0, o.Jh)(this, function (o) {
        switch (o.label) {
          case 0:
            return ((r = { pageToken: n }), [4, pe(t, r)]);
          case 1:
            return (
              (i = o.sent()),
              (s = e.prefixes).push.apply(s, i.prefixes),
              (a = e.items).push.apply(a, i.items),
              null == i.nextPageToken ? [3, 3] : [4, fe(t, e, i.nextPageToken)]
            );
          case 2:
            (o.sent(), (o.label = 3));
          case 3:
            return [2];
        }
      });
    });
  }
  function pe(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n, r;
      return (0, o.Jh)(this, function (i) {
        switch (i.label) {
          case 0:
            return (
              null != e &&
                "number" === typeof e.maxResults &&
                at("options.maxResults", 1, 1e3, e.maxResults),
              (n = e || {}),
              (r = Jt(t.storage, t._location, "/", n.pageToken, n.maxResults)),
              [4, t.storage.makeRequestWithTokens(r)]
            );
          case 1:
            return [2, i.sent().getPromise()];
        }
      });
    });
  }
  function de(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e;
      return (0, o.Jh)(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              t._throwIfRoot("getMetadata"),
              (e = Ht(t.storage, t._location, Rt())),
              [4, t.storage.makeRequestWithTokens(e)]
            );
          case 1:
            return [2, n.sent().getPromise()];
        }
      });
    });
  }
  function ve(t, e) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var n;
      return (0, o.Jh)(this, function (r) {
        switch (r.label) {
          case 0:
            return (
              t._throwIfRoot("updateMetadata"),
              (n = Wt(t.storage, t._location, e, Rt())),
              [4, t.storage.makeRequestWithTokens(n)]
            );
          case 1:
            return [2, r.sent().getPromise()];
        }
      });
    });
  }
  function ge(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e;
      return (0, o.Jh)(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              t._throwIfRoot("getDownloadURL"),
              (e = Qt(t.storage, t._location, Rt())),
              [4, t.storage.makeRequestWithTokens(e)]
            );
          case 1:
            return [
              2,
              n
                .sent()
                .getPromise()
                .then(function (t) {
                  if (null === t) throw k();
                  return t;
                }),
            ];
        }
      });
    });
  }
  function ye(t) {
    return (0, o.mG)(this, void 0, void 0, function () {
      var e;
      return (0, o.Jh)(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              t._throwIfRoot("deleteObject"),
              (e = Zt(t.storage, t._location)),
              [4, t.storage.makeRequestWithTokens(e)]
            );
          case 1:
            return [2, n.sent().getPromise()];
        }
      });
    });
  }
  function me(t, e) {
    var n = Et(t._location.path, e),
      r = new X(t._location.bucket, n);
    return new ce(t.storage, r);
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function be(t) {
    return /^[A-Za-z]+:\/\//.test(t);
  }
  function we(t, e) {
    return new ce(t, e);
  }
  function _e(t, e) {
    if (t instanceof Se) {
      var n = t;
      if (null == n._bucket) throw I();
      var r = new ce(n, n._bucket);
      return null != e ? _e(r, e) : r;
    }
    return void 0 !== e ? me(t, e) : t;
  }
  function Te(t, e) {
    if (e && be(e)) {
      if (t instanceof Se) return we(t, e);
      throw N(
        "To use ref(service, url), the first argument must be a Storage instance.",
      );
    }
    return _e(t, e);
  }
  function Ee(t, e) {
    var n = null === e || void 0 === e ? void 0 : e[c];
    return null == n ? null : X.makeFromBucketSpec(n, t);
  }
  function Ie(t, e, n, r) {
    (void 0 === r && (r = {}), (t.host = "http://" + e + ":" + n));
    var i = r.mockUserToken;
    i &&
      (t._overrideAuthToken =
        "string" === typeof i ? i : (0, s.Sg)(i, t.app.options.projectId));
  }
  var Se = (function () {
    function t(t, e, n, r, i, o) {
      ((this.app = t),
        (this._authProvider = e),
        (this._appCheckProvider = n),
        (this._pool = r),
        (this._url = i),
        (this._firebaseVersion = o),
        (this._bucket = null),
        (this._host = u),
        (this._appId = null),
        (this._deleted = !1),
        (this._maxOperationRetryTime = h),
        (this._maxUploadRetryTime = l),
        (this._requests = new Set()),
        (this._bucket =
          null != i
            ? X.makeFromBucketSpec(i, this._host)
            : Ee(this._host, this.app.options)));
    }
    return (
      Object.defineProperty(t.prototype, "host", {
        get: function () {
          return this._host;
        },
        set: function (t) {
          ((this._host = t),
            null != this._url
              ? (this._bucket = X.makeFromBucketSpec(this._url, t))
              : (this._bucket = Ee(t, this.app.options)));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "maxUploadRetryTime", {
        get: function () {
          return this._maxUploadRetryTime;
        },
        set: function (t) {
          (at("time", 0, Number.POSITIVE_INFINITY, t),
            (this._maxUploadRetryTime = t));
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "maxOperationRetryTime", {
        get: function () {
          return this._maxOperationRetryTime;
        },
        set: function (t) {
          (at("time", 0, Number.POSITIVE_INFINITY, t),
            (this._maxOperationRetryTime = t));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype._getAuthToken = function () {
        return (0, o.mG)(this, void 0, void 0, function () {
          var t, e;
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return this._overrideAuthToken
                  ? [2, this._overrideAuthToken]
                  : ((t = this._authProvider.getImmediate({ optional: !0 })),
                    t ? [4, t.getToken()] : [3, 2]);
              case 1:
                if (((e = n.sent()), null !== e)) return [2, e.accessToken];
                n.label = 2;
              case 2:
                return [2, null];
            }
          });
        });
      }),
      (t.prototype._getAppCheckToken = function () {
        return (0, o.mG)(this, void 0, void 0, function () {
          var t, e;
          return (0, o.Jh)(this, function (n) {
            switch (n.label) {
              case 0:
                return (
                  (t = this._appCheckProvider.getImmediate({ optional: !0 })),
                  t ? [4, t.getToken()] : [3, 2]
                );
              case 1:
                return ((e = n.sent()), [2, e.token]);
              case 2:
                return [2, null];
            }
          });
        });
      }),
      (t.prototype._delete = function () {
        return (
          this._deleted ||
            ((this._deleted = !0),
            this._requests.forEach(function (t) {
              return t.cancel();
            }),
            this._requests.clear()),
          Promise.resolve()
        );
      }),
      (t.prototype._makeStorageReference = function (t) {
        return new ce(this, t);
      }),
      (t.prototype._makeRequest = function (t, e, n) {
        var r = this;
        if (this._deleted) return new Y(R());
        var i = gt(t, this._appId, e, n, this._pool, this._firebaseVersion);
        return (
          this._requests.add(i),
          i.getPromise().then(
            function () {
              return r._requests.delete(i);
            },
            function () {
              return r._requests.delete(i);
            },
          ),
          i
        );
      }),
      (t.prototype.makeRequestWithTokens = function (t) {
        return (0, o.mG)(this, void 0, void 0, function () {
          var e, n, r;
          return (0, o.Jh)(this, function (i) {
            switch (i.label) {
              case 0:
                return [
                  4,
                  Promise.all([this._getAuthToken(), this._getAppCheckToken()]),
                ];
              case 1:
                return (
                  (e = i.sent()),
                  (n = e[0]),
                  (r = e[1]),
                  [2, this._makeRequest(t, n, r)]
                );
            }
          });
        });
      }),
      t
    );
  })();
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Ae(t, e, n) {
    return ((t = (0, s.m9)(t)), he(t, e, n));
  }
  function ke(t) {
    return ((t = (0, s.m9)(t)), de(t));
  }
  function Ne(t, e) {
    return ((t = (0, s.m9)(t)), ve(t, e));
  }
  function Re(t, e) {
    return ((t = (0, s.m9)(t)), pe(t, e));
  }
  function De(t) {
    return ((t = (0, s.m9)(t)), le(t));
  }
  function Ce(t) {
    return ((t = (0, s.m9)(t)), ge(t));
  }
  function Oe(t) {
    return ((t = (0, s.m9)(t)), ye(t));
  }
  function xe(t, e) {
    return ((t = (0, s.m9)(t)), Te(t, e));
  }
  function Pe(t, e) {
    return me(t, e);
  }
  function Le(t, e, n, r) {
    (void 0 === r && (r = {}), Ie(t, e, n, r));
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Me = (function () {
      function t(t, e, n) {
        ((this._delegate = t), (this.task = e), (this.ref = n));
      }
      return (
        Object.defineProperty(t.prototype, "bytesTransferred", {
          get: function () {
            return this._delegate.bytesTransferred;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "metadata", {
          get: function () {
            return this._delegate.metadata;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "state", {
          get: function () {
            return this._delegate.state;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "totalBytes", {
          get: function () {
            return this._delegate.totalBytes;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    Fe = (function () {
      function t(t, e) {
        ((this._delegate = t),
          (this._ref = e),
          (this.cancel = this._delegate.cancel.bind(this._delegate)),
          (this.catch = this._delegate.catch.bind(this._delegate)),
          (this.pause = this._delegate.pause.bind(this._delegate)),
          (this.resume = this._delegate.resume.bind(this._delegate)));
      }
      return (
        Object.defineProperty(t.prototype, "snapshot", {
          get: function () {
            return new Me(this._delegate.snapshot, this, this._ref);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.then = function (t, e) {
          var n = this;
          return this._delegate.then(function (e) {
            if (t) return t(new Me(e, n, n._ref));
          }, e);
        }),
        (t.prototype.on = function (t, e, n, r) {
          var i = this,
            o = void 0;
          return (
            e &&
              (o =
                "function" === typeof e
                  ? function (t) {
                      return e(new Me(t, i, i._ref));
                    }
                  : {
                      next: e.next
                        ? function (t) {
                            return e.next(new Me(t, i, i._ref));
                          }
                        : void 0,
                      complete: e.complete || void 0,
                      error: e.error || void 0,
                    }),
            this._delegate.on(t, o, n || void 0, r || void 0)
          );
        }),
        t
      );
    })(),
    Ue = (function () {
      function t(t, e) {
        ((this._delegate = t), (this._service = e));
      }
      return (
        Object.defineProperty(t.prototype, "prefixes", {
          get: function () {
            var t = this;
            return this._delegate.prefixes.map(function (e) {
              return new Ve(e, t._service);
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "items", {
          get: function () {
            var t = this;
            return this._delegate.items.map(function (e) {
              return new Ve(e, t._service);
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "nextPageToken", {
          get: function () {
            return this._delegate.nextPageToken || null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })(),
    Ve = (function () {
      function t(t, e) {
        ((this._delegate = t), (this.storage = e));
      }
      return (
        Object.defineProperty(t.prototype, "name", {
          get: function () {
            return this._delegate.name;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "bucket", {
          get: function () {
            return this._delegate.bucket;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "fullPath", {
          get: function () {
            return this._delegate.fullPath;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.toString = function () {
          return this._delegate.toString();
        }),
        (t.prototype.child = function (e) {
          var n = Pe(this._delegate, e);
          return new t(n, this.storage);
        }),
        Object.defineProperty(t.prototype, "root", {
          get: function () {
            return new t(this._delegate.root, this.storage);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "parent", {
          get: function () {
            var e = this._delegate.parent;
            return null == e ? null : new t(e, this.storage);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.put = function (t, e) {
          return (
            this._throwIfRoot("put"),
            new Fe(Ae(this._delegate, t, e), this)
          );
        }),
        (t.prototype.putString = function (t, e, n) {
          (void 0 === e && (e = P.RAW), this._throwIfRoot("putString"));
          var r = M(e, t),
            i = (0, o.pi)({}, n);
          return (
            null == i["contentType"] &&
              null != r.contentType &&
              (i["contentType"] = r.contentType),
            new Fe(new ue(this._delegate, new wt(r.data, !0), i), this)
          );
        }),
        (t.prototype.listAll = function () {
          var t = this;
          return De(this._delegate).then(function (e) {
            return new Ue(e, t.storage);
          });
        }),
        (t.prototype.list = function (t) {
          var e = this;
          return Re(this._delegate, t || void 0).then(function (t) {
            return new Ue(t, e.storage);
          });
        }),
        (t.prototype.getMetadata = function () {
          return ke(this._delegate);
        }),
        (t.prototype.updateMetadata = function (t) {
          return Ne(this._delegate, t);
        }),
        (t.prototype.getDownloadURL = function () {
          return Ce(this._delegate);
        }),
        (t.prototype.delete = function () {
          return (this._throwIfRoot("delete"), Oe(this._delegate));
        }),
        (t.prototype._throwIfRoot = function (t) {
          if ("" === this._delegate._location.path) throw D(t);
        }),
        t
      );
    })(),
    qe = (function () {
      function t(t, e) {
        ((this.app = t), (this._delegate = e));
      }
      return (
        Object.defineProperty(t.prototype, "maxOperationRetryTime", {
          get: function () {
            return this._delegate.maxOperationRetryTime;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "maxUploadRetryTime", {
          get: function () {
            return this._delegate.maxUploadRetryTime;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.ref = function (t) {
          if (be(t))
            throw N(
              "ref() expected a child path but got a URL, use refFromURL instead.",
            );
          return new Ve(xe(this._delegate, t), this);
        }),
        (t.prototype.refFromURL = function (t) {
          if (!be(t))
            throw N(
              "refFromURL() expected a full URL but got a child path, use ref() instead.",
            );
          try {
            X.makeFromUrl(t, this._delegate.host);
          } catch (e) {
            throw N(
              "refFromUrl() expected a valid full URL but got an invalid one.",
            );
          }
          return new Ve(xe(this._delegate, t), this);
        }),
        (t.prototype.setMaxUploadRetryTime = function (t) {
          this._delegate.maxUploadRetryTime = t;
        }),
        (t.prototype.setMaxOperationRetryTime = function (t) {
          this._delegate.maxOperationRetryTime = t;
        }),
        (t.prototype.useEmulator = function (t, e, n) {
          (void 0 === n && (n = {}), Le(this._delegate, t, e, n));
        }),
        t
      );
    })(),
    je = "@firebase/storage",
    Be = "0.7.1",
    Ge = "storage";
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ze(t, e) {
    var n = e.instanceIdentifier,
      r = t.getProvider("app").getImmediate(),
      o = t.getProvider("auth-internal"),
      s = t.getProvider("app-check-internal"),
      a = new qe(r, new Se(r, o, s, new Z(), n, i.Z.SDK_VERSION));
    return a;
  }
  function Ke(t) {
    var e = {
      TaskState: H,
      TaskEvent: K,
      StringFormat: P,
      Storage: Se,
      Reference: Ve,
    };
    (t.INTERNAL.registerComponent(
      new a.wA(Ge, ze, "PUBLIC").setServiceProps(e).setMultipleInstances(!0),
    ),
      t.registerVersion(je, Be));
  }
  Ke(i.Z);
};
