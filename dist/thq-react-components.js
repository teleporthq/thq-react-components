import A, { useRef as V, useEffect as Q, useState as z } from "react";
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var K = { exports: {} };
(function(f, h) {
  (function(m, g) {
    f.exports = g();
  })(et, function() {
    var m = 1e3, g = 6e4, S = 36e5, b = "millisecond", p = "second", w = "minute", T = "hour", v = "day", H = "week", y = "month", N = "quarter", O = "year", _ = "date", j = "Invalid Date", B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, P = function(s, n, t) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
    }, tt = { s: P, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + P(r, 2, "0") + ":" + P(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, y), a = t - e < 0, i = n.clone().add(r + (a ? -1 : 1), y);
      return +(-(r + (t - e) / (a ? e - i : i - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: y, y: O, w: H, d: v, D: _, h: T, m: w, s: p, ms: b, Q: N }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, F = "en", L = {};
    L[F] = X;
    var Z = function(s) {
      return s instanceof U;
    }, R = function s(n, t, r) {
      var e;
      if (!n)
        return F;
      if (typeof n == "string") {
        var a = n.toLowerCase();
        L[a] && (e = a), t && (L[a] = t, e = a);
        var i = n.split("-");
        if (!e && i.length > 1)
          return s(i[0]);
      } else {
        var o = n.name;
        L[o] = n, e = o;
      }
      return !r && e && (F = e), e || !r && F;
    }, l = function(s, n) {
      if (Z(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new U(t);
    }, u = tt;
    u.l = R, u.i = Z, u.w = function(s, n) {
      return l(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var U = function() {
      function s(t) {
        this.$L = R(t.locale, null, !0), this.parse(t);
      }
      var n = s.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, a = r.utc;
          if (e === null)
            return /* @__PURE__ */ new Date(NaN);
          if (u.u(e))
            return /* @__PURE__ */ new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var i = e.match(B);
            if (i) {
              var o = i[2] - 1 || 0, c = (i[7] || "0").substring(0, 3);
              return a ? new Date(Date.UTC(i[1], o, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, c)) : new Date(i[1], o, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, c);
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
        return this.$d.toString() !== j;
      }, n.isSame = function(t, r) {
        var e = l(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return l(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < l(t);
      }, n.$g = function(t, r, e) {
        return u.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, a = !!u.u(r) || r, i = u.p(t), o = function(x, D) {
          var k = u.w(e.$u ? Date.UTC(e.$y, D, x) : new Date(e.$y, D, x), e);
          return a ? k : k.endOf(v);
        }, c = function(x, D) {
          return u.w(e.toDate()[x].apply(e.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)), e);
        }, d = this.$W, $ = this.$M, M = this.$D, E = "set" + (this.$u ? "UTC" : "");
        switch (i) {
          case O:
            return a ? o(1, 0) : o(31, 11);
          case y:
            return a ? o(1, $) : o(0, $ + 1);
          case H:
            var Y = this.$locale().weekStart || 0, W = (d < Y ? d + 7 : d) - Y;
            return o(a ? M - W : M + (6 - W), $);
          case v:
          case _:
            return c(E + "Hours", 0);
          case T:
            return c(E + "Minutes", 1);
          case w:
            return c(E + "Seconds", 2);
          case p:
            return c(E + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, a = u.p(t), i = "set" + (this.$u ? "UTC" : ""), o = (e = {}, e[v] = i + "Date", e[_] = i + "Date", e[y] = i + "Month", e[O] = i + "FullYear", e[T] = i + "Hours", e[w] = i + "Minutes", e[p] = i + "Seconds", e[b] = i + "Milliseconds", e)[a], c = a === v ? this.$D + (r - this.$W) : r;
        if (a === y || a === O) {
          var d = this.clone().set(_, 1);
          d.$d[o](c), d.init(), this.$d = d.set(_, Math.min(this.$D, d.daysInMonth())).$d;
        } else
          o && this.$d[o](c);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[u.p(t)]();
      }, n.add = function(t, r) {
        var e, a = this;
        t = Number(t);
        var i = u.p(r), o = function($) {
          var M = l(a);
          return u.w(M.date(M.date() + Math.round($ * t)), a);
        };
        if (i === y)
          return this.set(y, this.$M + t);
        if (i === O)
          return this.set(O, this.$y + t);
        if (i === v)
          return o(1);
        if (i === H)
          return o(7);
        var c = (e = {}, e[w] = g, e[T] = S, e[p] = m, e)[i] || 1, d = this.$d.getTime() + t * c;
        return u.w(d, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || j;
        var a = t || "YYYY-MM-DDTHH:mm:ssZ", i = u.z(this), o = this.$H, c = this.$m, d = this.$M, $ = e.weekdays, M = e.months, E = e.meridiem, Y = function(D, k, I, J) {
          return D && (D[k] || D(r, a)) || I[k].slice(0, J);
        }, W = function(D) {
          return u.s(o % 12 || 12, D, "0");
        }, x = E || function(D, k, I) {
          var J = D < 12 ? "AM" : "PM";
          return I ? J.toLowerCase() : J;
        };
        return a.replace(C, function(D, k) {
          return k || function(I) {
            switch (I) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return u.s(r.$y, 4, "0");
              case "M":
                return d + 1;
              case "MM":
                return u.s(d + 1, 2, "0");
              case "MMM":
                return Y(e.monthsShort, d, M, 3);
              case "MMMM":
                return Y(M, d);
              case "D":
                return r.$D;
              case "DD":
                return u.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return Y(e.weekdaysMin, r.$W, $, 2);
              case "ddd":
                return Y(e.weekdaysShort, r.$W, $, 3);
              case "dddd":
                return $[r.$W];
              case "H":
                return String(o);
              case "HH":
                return u.s(o, 2, "0");
              case "h":
                return W(1);
              case "hh":
                return W(2);
              case "a":
                return x(o, c, !0);
              case "A":
                return x(o, c, !1);
              case "m":
                return String(c);
              case "mm":
                return u.s(c, 2, "0");
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
        var a, i = this, o = u.p(r), c = l(t), d = (c.utcOffset() - this.utcOffset()) * g, $ = this - c, M = function() {
          return u.m(i, c);
        };
        switch (o) {
          case O:
            a = M() / 12;
            break;
          case y:
            a = M();
            break;
          case N:
            a = M() / 3;
            break;
          case H:
            a = ($ - d) / 6048e5;
            break;
          case v:
            a = ($ - d) / 864e5;
            break;
          case T:
            a = $ / S;
            break;
          case w:
            a = $ / g;
            break;
          case p:
            a = $ / m;
            break;
          default:
            a = $;
        }
        return e ? a : u.a(a);
      }, n.daysInMonth = function() {
        return this.endOf(y).$D;
      }, n.$locale = function() {
        return L[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), a = R(t, r, !0);
        return a && (e.$L = a), e;
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
      }, s;
    }(), q = U.prototype;
    return l.prototype = q, [["$ms", b], ["$s", p], ["$m", w], ["$H", T], ["$W", v], ["$M", y], ["$y", O], ["$D", _]].forEach(function(s) {
      q[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), l.extend = function(s, n) {
      return s.$i || (s(n, U, l), s.$i = !0), l;
    }, l.locale = R, l.isDayjs = Z, l.unix = function(s) {
      return l(1e3 * s);
    }, l.en = L[F], l.Ls = L, l.p = {}, l;
  });
})(K);
var rt = K.exports;
const G = /* @__PURE__ */ nt(rt), at = ({ date: f, format: h }) => {
  const m = G.unix(new Date(f).getTime() / 1e3), g = G(m).format(h);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, g);
}, it = ({ html: f }) => {
  const h = V(null);
  return Q(() => {
    if (!f || !h.current)
      return;
    const m = document.createRange().createContextualFragment(f);
    h.current.append(m);
  }, []), /* @__PURE__ */ A.createElement("div", { style: { display: "contents" }, ref: h });
}, ut = (f) => {
  const {
    fetchData: h,
    params: m,
    initialData: g,
    persistDataDuringLoading: S = !1,
    renderLoading: b,
    renderSuccess: p,
    renderError: w
  } = f, [T, v] = z("idle"), [H, y] = z(g), [N, O] = z(null), _ = V(f.initialData !== void 0), j = V(S);
  switch (j.current = S, Q(() => {
    if (_.current) {
      _.current = !1;
      return;
    }
    (async () => {
      v("loading"), j.current || y(void 0);
      try {
        const C = await h(m);
        y(C), v("success");
      } catch (C) {
        O(C), v("error");
      }
    })();
  }, [m, h]), T) {
    case "idle":
    case "loading":
      return f.persistDataDuringLoading && H ? p(H, !0) : b ? b() : null;
    case "success":
      return p(H, !1);
    case "error":
      return w(N);
    default:
      return null;
  }
}, ot = (f) => {
  const { items: h, renderItem: m, renderEmpty: g } = f;
  if ("data" in h && "meta" in h) {
    const { data: S, meta: b } = h;
    return S.length === 0 ? g ? g() : null : /* @__PURE__ */ A.createElement(A.Fragment, null, S.map(
      (p, w) => m(typeof p == "object" ? { ...p, teleportMeta: b } : p, w)
    ));
  }
  if (Array.isArray(h))
    return h.length === 0 ? g ? g() : null : /* @__PURE__ */ A.createElement(A.Fragment, null, h.map((S, b) => m(S, b)));
};
export {
  it as DangerousHTML,
  ut as DataProvider,
  at as DateTimePrimitive,
  ot as Repeater
};
