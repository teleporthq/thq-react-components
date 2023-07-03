import { jsx as V, Fragment as K } from "react/jsx-runtime";
import { useRef as X, useEffect as tt } from "react";
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var R = { exports: {} };
(function($, O) {
  (function(v, D) {
    $.exports = D();
  })(et, function() {
    var v = 1e3, D = 6e4, E = 36e5, I = "millisecond", _ = "second", T = "minute", k = "hour", M = "day", L = "week", y = "month", J = "quarter", g = "year", H = "date", Z = "Invalid Date", q = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, B = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, N = function(s, n, t) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
    }, Q = { s: N, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + N(r, 2, "0") + ":" + N(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, y), i = t - e < 0, u = n.clone().add(r + (i ? -1 : 1), y);
      return +(-(r + (t - e) / (i ? e - u : u - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: y, y: g, w: L, d: M, D: H, h: k, m: T, s: _, ms: I, Q: J }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, Y = "en", w = {};
    w[Y] = G;
    var U = function(s) {
      return s instanceof A;
    }, W = function s(n, t, r) {
      var e;
      if (!n)
        return Y;
      if (typeof n == "string") {
        var i = n.toLowerCase();
        w[i] && (e = i), t && (w[i] = t, e = i);
        var u = n.split("-");
        if (!e && u.length > 1)
          return s(u[0]);
      } else {
        var o = n.name;
        w[o] = n, e = o;
      }
      return !r && e && (Y = e), e || !r && Y;
    }, f = function(s, n) {
      if (U(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new A(t);
    }, a = Q;
    a.l = W, a.i = U, a.w = function(s, n) {
      return f(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var A = function() {
      function s(t) {
        this.$L = W(t.locale, null, !0), this.parse(t);
      }
      var n = s.prototype;
      return n.parse = function(t) {
        this.$d = function(r) {
          var e = r.date, i = r.utc;
          if (e === null)
            return /* @__PURE__ */ new Date(NaN);
          if (a.u(e))
            return /* @__PURE__ */ new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var u = e.match(q);
            if (u) {
              var o = u[2] - 1 || 0, c = (u[7] || "0").substring(0, 3);
              return i ? new Date(Date.UTC(u[1], o, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, c)) : new Date(u[1], o, u[3] || 1, u[4] || 0, u[5] || 0, u[6] || 0, c);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return a;
      }, n.isValid = function() {
        return this.$d.toString() !== Z;
      }, n.isSame = function(t, r) {
        var e = f(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return f(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < f(t);
      }, n.$g = function(t, r, e) {
        return a.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, i = !!a.u(r) || r, u = a.p(t), o = function(b, l) {
          var p = a.w(e.$u ? Date.UTC(e.$y, l, b) : new Date(e.$y, l, b), e);
          return i ? p : p.endOf(M);
        }, c = function(b, l) {
          return a.w(e.toDate()[b].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(l)), e);
        }, d = this.$W, h = this.$M, m = this.$D, x = "set" + (this.$u ? "UTC" : "");
        switch (u) {
          case g:
            return i ? o(1, 0) : o(31, 11);
          case y:
            return i ? o(1, h) : o(0, h + 1);
          case L:
            var S = this.$locale().weekStart || 0, j = (d < S ? d + 7 : d) - S;
            return o(i ? m - j : m + (6 - j), h);
          case M:
          case H:
            return c(x + "Hours", 0);
          case k:
            return c(x + "Minutes", 1);
          case T:
            return c(x + "Seconds", 2);
          case _:
            return c(x + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, i = a.p(t), u = "set" + (this.$u ? "UTC" : ""), o = (e = {}, e[M] = u + "Date", e[H] = u + "Date", e[y] = u + "Month", e[g] = u + "FullYear", e[k] = u + "Hours", e[T] = u + "Minutes", e[_] = u + "Seconds", e[I] = u + "Milliseconds", e)[i], c = i === M ? this.$D + (r - this.$W) : r;
        if (i === y || i === g) {
          var d = this.clone().set(H, 1);
          d.$d[o](c), d.init(), this.$d = d.set(H, Math.min(this.$D, d.daysInMonth())).$d;
        } else
          o && this.$d[o](c);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[a.p(t)]();
      }, n.add = function(t, r) {
        var e, i = this;
        t = Number(t);
        var u = a.p(r), o = function(h) {
          var m = f(i);
          return a.w(m.date(m.date() + Math.round(h * t)), i);
        };
        if (u === y)
          return this.set(y, this.$M + t);
        if (u === g)
          return this.set(g, this.$y + t);
        if (u === M)
          return o(1);
        if (u === L)
          return o(7);
        var c = (e = {}, e[T] = D, e[k] = E, e[_] = v, e)[u] || 1, d = this.$d.getTime() + t * c;
        return a.w(d, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || Z;
        var i = t || "YYYY-MM-DDTHH:mm:ssZ", u = a.z(this), o = this.$H, c = this.$m, d = this.$M, h = e.weekdays, m = e.months, x = e.meridiem, S = function(l, p, C, F) {
          return l && (l[p] || l(r, i)) || C[p].slice(0, F);
        }, j = function(l) {
          return a.s(o % 12 || 12, l, "0");
        }, b = x || function(l, p, C) {
          var F = l < 12 ? "AM" : "PM";
          return C ? F.toLowerCase() : F;
        };
        return i.replace(B, function(l, p) {
          return p || function(C) {
            switch (C) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return a.s(r.$y, 4, "0");
              case "M":
                return d + 1;
              case "MM":
                return a.s(d + 1, 2, "0");
              case "MMM":
                return S(e.monthsShort, d, m, 3);
              case "MMMM":
                return S(m, d);
              case "D":
                return r.$D;
              case "DD":
                return a.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return S(e.weekdaysMin, r.$W, h, 2);
              case "ddd":
                return S(e.weekdaysShort, r.$W, h, 3);
              case "dddd":
                return h[r.$W];
              case "H":
                return String(o);
              case "HH":
                return a.s(o, 2, "0");
              case "h":
                return j(1);
              case "hh":
                return j(2);
              case "a":
                return b(o, c, !0);
              case "A":
                return b(o, c, !1);
              case "m":
                return String(c);
              case "mm":
                return a.s(c, 2, "0");
              case "s":
                return String(r.$s);
              case "ss":
                return a.s(r.$s, 2, "0");
              case "SSS":
                return a.s(r.$ms, 3, "0");
              case "Z":
                return u;
            }
            return null;
          }(l) || u.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var i, u = this, o = a.p(r), c = f(t), d = (c.utcOffset() - this.utcOffset()) * D, h = this - c, m = function() {
          return a.m(u, c);
        };
        switch (o) {
          case g:
            i = m() / 12;
            break;
          case y:
            i = m();
            break;
          case J:
            i = m() / 3;
            break;
          case L:
            i = (h - d) / 6048e5;
            break;
          case M:
            i = (h - d) / 864e5;
            break;
          case k:
            i = h / E;
            break;
          case T:
            i = h / D;
            break;
          case _:
            i = h / v;
            break;
          default:
            i = h;
        }
        return e ? i : a.a(i);
      }, n.daysInMonth = function() {
        return this.endOf(y).$D;
      }, n.$locale = function() {
        return w[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), i = W(t, r, !0);
        return i && (e.$L = i), e;
      }, n.clone = function() {
        return a.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), z = A.prototype;
    return f.prototype = z, [["$ms", I], ["$s", _], ["$m", T], ["$H", k], ["$W", M], ["$M", y], ["$y", g], ["$D", H]].forEach(function(s) {
      z[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), f.extend = function(s, n) {
      return s.$i || (s(n, A, f), s.$i = !0), f;
    }, f.locale = W, f.isDayjs = U, f.unix = function(s) {
      return f(1e3 * s);
    }, f.en = w[Y], f.Ls = w, f.p = {}, f;
  });
})(R);
var rt = R.exports;
const P = /* @__PURE__ */ nt(rt), ut = ({ date: $, format: O }) => {
  const v = P.unix(new Date($).getTime() / 1e3), D = P(v).format(O);
  return /* @__PURE__ */ V(K, { children: D });
}, at = ({ html: $ }) => {
  const O = X(null);
  return tt(() => {
    if (!$ || !O.current)
      return;
    const v = document.createRange().createContextualFragment($);
    O.current.append(v);
  }, []), /* @__PURE__ */ V("div", { style: { display: "contents" }, ref: O });
};
export {
  at as DangerousHTML,
  ut as DateTimePrimitive
};
