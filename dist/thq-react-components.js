import v, { useRef as V, useEffect as Q, useState as Z } from "react";
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var K = { exports: {} };
(function(o, l) {
  (function(m, d) {
    o.exports = d();
  })(et, function() {
    var m = 1e3, d = 6e4, b = 36e5, _ = "millisecond", p = "second", S = "minute", k = "hour", M = "day", L = "week", y = "month", N = "quarter", O = "year", T = "date", x = "Invalid Date", B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(a) {
      var n = ["th", "st", "nd", "rd"], t = a % 100;
      return "[" + a + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, J = function(a, n, t) {
      var r = String(a);
      return !r || r.length >= n ? a : "" + Array(n + 1 - r.length).join(t) + a;
    }, tt = { s: J, z: function(a) {
      var n = -a.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + J(r, 2, "0") + ":" + J(e, 2, "0");
    }, m: function a(n, t) {
      if (n.date() < t.date())
        return -a(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, y), s = t - e < 0, i = n.clone().add(r + (s ? -1 : 1), y);
      return +(-(r + (t - e) / (s ? e - i : i - e)) || 0);
    }, a: function(a) {
      return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
    }, p: function(a) {
      return { M: y, y: O, w: L, d: M, D: T, h: k, m: S, s: p, ms: _, Q: N }[a] || String(a || "").toLowerCase().replace(/s$/, "");
    }, u: function(a) {
      return a === void 0;
    } }, j = "en", H = {};
    H[j] = X;
    var P = function(a) {
      return a instanceof U;
    }, R = function a(n, t, r) {
      var e;
      if (!n)
        return j;
      if (typeof n == "string") {
        var s = n.toLowerCase();
        H[s] && (e = s), t && (H[s] = t, e = s);
        var i = n.split("-");
        if (!e && i.length > 1)
          return a(i[0]);
      } else {
        var c = n.name;
        H[c] = n, e = c;
      }
      return !r && e && (j = e), e || !r && j;
    }, h = function(a, n) {
      if (P(a))
        return a.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = a, t.args = arguments, new U(t);
    }, u = tt;
    u.l = R, u.i = P, u.w = function(a, n) {
      return h(a, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var U = function() {
      function a(t) {
        this.$L = R(t.locale, null, !0), this.parse(t);
      }
      var n = a.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, s = r.utc;
          if (e === null)
            return /* @__PURE__ */ new Date(NaN);
          if (u.u(e))
            return /* @__PURE__ */ new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var i = e.match(B);
            if (i) {
              var c = i[2] - 1 || 0, f = (i[7] || "0").substring(0, 3);
              return s ? new Date(Date.UTC(i[1], c, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, f)) : new Date(i[1], c, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, f);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return u;
      }, n.isValid = function() {
        return this.$d.toString() !== x;
      }, n.isSame = function(t, r) {
        var e = h(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return h(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < h(t);
      }, n.$g = function(t, r, e) {
        return u.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, s = !!u.u(r) || r, i = u.p(t), c = function(Y, D) {
          var E = u.w(e.$u ? Date.UTC(e.$y, D, Y) : new Date(e.$y, D, Y), e);
          return s ? E : E.endOf(M);
        }, f = function(Y, D) {
          return u.w(e.toDate()[Y].apply(e.toDate("s"), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)), e);
        }, $ = this.$W, g = this.$M, w = this.$D, F = "set" + (this.$u ? "UTC" : "");
        switch (i) {
          case O:
            return s ? c(1, 0) : c(31, 11);
          case y:
            return s ? c(1, g) : c(0, g + 1);
          case L:
            var A = this.$locale().weekStart || 0, W = ($ < A ? $ + 7 : $) - A;
            return c(s ? w - W : w + (6 - W), g);
          case M:
          case T:
            return f(F + "Hours", 0);
          case k:
            return f(F + "Minutes", 1);
          case S:
            return f(F + "Seconds", 2);
          case p:
            return f(F + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, s = u.p(t), i = "set" + (this.$u ? "UTC" : ""), c = (e = {}, e[M] = i + "Date", e[T] = i + "Date", e[y] = i + "Month", e[O] = i + "FullYear", e[k] = i + "Hours", e[S] = i + "Minutes", e[p] = i + "Seconds", e[_] = i + "Milliseconds", e)[s], f = s === M ? this.$D + (r - this.$W) : r;
        if (s === y || s === O) {
          var $ = this.clone().set(T, 1);
          $.$d[c](f), $.init(), this.$d = $.set(T, Math.min(this.$D, $.daysInMonth())).$d;
        } else
          c && this.$d[c](f);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[u.p(t)]();
      }, n.add = function(t, r) {
        var e, s = this;
        t = Number(t);
        var i = u.p(r), c = function(g) {
          var w = h(s);
          return u.w(w.date(w.date() + Math.round(g * t)), s);
        };
        if (i === y)
          return this.set(y, this.$M + t);
        if (i === O)
          return this.set(O, this.$y + t);
        if (i === M)
          return c(1);
        if (i === L)
          return c(7);
        var f = (e = {}, e[S] = d, e[k] = b, e[p] = m, e)[i] || 1, $ = this.$d.getTime() + t * f;
        return u.w($, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || x;
        var s = t || "YYYY-MM-DDTHH:mm:ssZ", i = u.z(this), c = this.$H, f = this.$m, $ = this.$M, g = e.weekdays, w = e.months, F = e.meridiem, A = function(D, E, I, z) {
          return D && (D[E] || D(r, s)) || I[E].slice(0, z);
        }, W = function(D) {
          return u.s(c % 12 || 12, D, "0");
        }, Y = F || function(D, E, I) {
          var z = D < 12 ? "AM" : "PM";
          return I ? z.toLowerCase() : z;
        };
        return s.replace(C, function(D, E) {
          return E || function(I) {
            switch (I) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return u.s(r.$y, 4, "0");
              case "M":
                return $ + 1;
              case "MM":
                return u.s($ + 1, 2, "0");
              case "MMM":
                return A(e.monthsShort, $, w, 3);
              case "MMMM":
                return A(w, $);
              case "D":
                return r.$D;
              case "DD":
                return u.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return A(e.weekdaysMin, r.$W, g, 2);
              case "ddd":
                return A(e.weekdaysShort, r.$W, g, 3);
              case "dddd":
                return g[r.$W];
              case "H":
                return String(c);
              case "HH":
                return u.s(c, 2, "0");
              case "h":
                return W(1);
              case "hh":
                return W(2);
              case "a":
                return Y(c, f, !0);
              case "A":
                return Y(c, f, !1);
              case "m":
                return String(f);
              case "mm":
                return u.s(f, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return u.s(r.$s, 2, "0");
              case "SSS":
                return u.s(r.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(D) || i.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var s, i = this, c = u.p(r), f = h(t), $ = (f.utcOffset() - this.utcOffset()) * d, g = this - f, w = function() {
          return u.m(i, f);
        };
        switch (c) {
          case O:
            s = w() / 12;
            break;
          case y:
            s = w();
            break;
          case N:
            s = w() / 3;
            break;
          case L:
            s = (g - $) / 6048e5;
            break;
          case M:
            s = (g - $) / 864e5;
            break;
          case k:
            s = g / b;
            break;
          case S:
            s = g / d;
            break;
          case p:
            s = g / m;
            break;
          default:
            s = g;
        }
        return e ? s : u.a(s);
      }, n.daysInMonth = function() {
        return this.endOf(y).$D;
      }, n.$locale = function() {
        return H[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), s = R(t, r, !0);
        return s && (e.$L = s), e;
      }, n.clone = function() {
        return u.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, a;
    }(), q = U.prototype;
    return h.prototype = q, [["$ms", _], ["$s", p], ["$m", S], ["$H", k], ["$W", M], ["$M", y], ["$y", O], ["$D", T]].forEach(function(a) {
      q[a[1]] = function(n) {
        return this.$g(n, a[0], a[1]);
      };
    }), h.extend = function(a, n) {
      return a.$i || (a(n, U, h), a.$i = !0), h;
    }, h.locale = R, h.isDayjs = P, h.unix = function(a) {
      return h(1e3 * a);
    }, h.en = H[j], h.Ls = H, h.p = {}, h;
  });
})(K);
var rt = K.exports;
const G = /* @__PURE__ */ nt(rt), it = ({ date: o, format: l }) => {
  const m = G.unix(new Date(o).getTime() / 1e3), d = G(m).format(l);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, d);
}, ut = ({ html: o }) => {
  const l = V(null);
  return Q(() => {
    if (!o || !l.current)
      return;
    const m = document.createRange().createContextualFragment(o);
    l.current.append(m);
  }, []), /* @__PURE__ */ v.createElement("div", { style: { display: "contents" }, ref: l });
}, ot = (o) => {
  const {
    fetchData: l,
    params: m,
    initialData: d,
    persistDataDuringLoading: b = !1,
    renderLoading: _,
    renderSuccess: p,
    renderError: S
  } = o, [k, M] = Z("idle"), [L, y] = Z(d), [N, O] = Z(null), T = V(o.initialData !== void 0), x = V(b);
  switch (x.current = b, Q(() => {
    if (T.current) {
      T.current = !1;
      return;
    }
    (async () => {
      M("loading"), x.current || y(void 0);
      try {
        const C = await l(m);
        y(C), M("success");
      } catch (C) {
        O(C), M("error");
      }
    })();
  }, [m, l]), k) {
    case "idle":
    case "loading":
      return o.persistDataDuringLoading && L ? p(L, !0) : _ ? _() : null;
    case "success":
      return p(L, !1);
    case "error":
      return S(N);
    default:
      return null;
  }
}, ct = (o) => {
  const { items: l, renderItem: m, renderEmpty: d } = o;
  if ("data" in l && "meta" in l) {
    const { data: b, meta: _ } = l;
    return b.length === 0 ? d ? d() : null : /* @__PURE__ */ v.createElement(v.Fragment, null, b.map(
      (p, S) => m(typeof p == "object" ? { ...p, teleportMeta: _ } : p, S)
    ));
  }
  if (Array.isArray(l))
    return l.length === 0 ? d ? d() : null : /* @__PURE__ */ v.createElement(v.Fragment, null, l.map((b, _) => m(b, _)));
}, at = ({ src: o, description: l }) => /* @__PURE__ */ v.createElement(v.Fragment, null, o && /* @__PURE__ */ v.createElement(
  "img",
  {
    loading: "lazy",
    src: `${o}?w=1920&h=960`,
    srcSet: `${o}?w=3840&h=1920 1920w, ${o}?w=1920&h=960 1280w, ${o}?w=1280&h=640 640w`,
    alt: l ?? ""
  }
)), ft = ({ connections: o, node: l, children: m }) => /* @__PURE__ */ v.createElement(v.Fragment, null, o?.map(
  (d) => d?.__typename == "Asset" && l?.attrs?.documentId == d.id && /* @__PURE__ */ v.createElement(at, { key: d.id, ...d })
), m);
export {
  ft as CaisyDocumentLink,
  ut as DangerousHTML,
  ot as DataProvider,
  it as DateTimePrimitive,
  ct as Repeater
};
