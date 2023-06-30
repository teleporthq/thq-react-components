import { jsx as V, Fragment as K } from "react/jsx-runtime";
import { useRef as X, useEffect as tt } from "react";
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function et($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var R = { exports: {} };
(function($, O) {
  (function(D, S) {
    $.exports = S();
  })(nt, function() {
    var D = 1e3, S = 6e4, E = 36e5, k = "millisecond", _ = "second", T = "minute", b = "hour", M = "day", L = "week", m = "month", J = "quarter", g = "year", H = "date", Z = "Invalid Date", q = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, B = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, G = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
      var e = ["th", "st", "nd", "rd"], t = r % 100;
      return "[" + r + (e[(t - 20) % 10] || e[t] || e[0]) + "]";
    } }, I = function(r, e, t) {
      var i = String(r);
      return !i || i.length >= e ? r : "" + Array(e + 1 - i.length).join(t) + r;
    }, Q = { s: I, z: function(r) {
      var e = -r.utcOffset(), t = Math.abs(e), i = Math.floor(t / 60), n = t % 60;
      return (e <= 0 ? "+" : "-") + I(i, 2, "0") + ":" + I(n, 2, "0");
    }, m: function r(e, t) {
      if (e.date() < t.date())
        return -r(t, e);
      var i = 12 * (t.year() - e.year()) + (t.month() - e.month()), n = e.clone().add(i, m), u = t - n < 0, s = e.clone().add(i + (u ? -1 : 1), m);
      return +(-(i + (t - n) / (u ? n - s : s - n)) || 0);
    }, a: function(r) {
      return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
    }, p: function(r) {
      return { M: m, y: g, w: L, d: M, D: H, h: b, m: T, s: _, ms: k, Q: J }[r] || String(r || "").toLowerCase().replace(/s$/, "");
    }, u: function(r) {
      return r === void 0;
    } }, Y = "en", w = {};
    w[Y] = G;
    var N = function(r) {
      return r instanceof A;
    }, W = function r(e, t, i) {
      var n;
      if (!e)
        return Y;
      if (typeof e == "string") {
        var u = e.toLowerCase();
        w[u] && (n = u), t && (w[u] = t, n = u);
        var s = e.split("-");
        if (!n && s.length > 1)
          return r(s[0]);
      } else {
        var a = e.name;
        w[a] = e, n = a;
      }
      return !i && n && (Y = n), n || !i && Y;
    }, h = function(r, e) {
      if (N(r))
        return r.clone();
      var t = typeof e == "object" ? e : {};
      return t.date = r, t.args = arguments, new A(t);
    }, o = Q;
    o.l = W, o.i = N, o.w = function(r, e) {
      return h(r, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
    };
    var A = function() {
      function r(t) {
        this.$L = W(t.locale, null, !0), this.parse(t);
      }
      var e = r.prototype;
      return e.parse = function(t) {
        this.$d = function(i) {
          var n = i.date, u = i.utc;
          if (n === null)
            return /* @__PURE__ */ new Date(NaN);
          if (o.u(n))
            return /* @__PURE__ */ new Date();
          if (n instanceof Date)
            return new Date(n);
          if (typeof n == "string" && !/Z$/i.test(n)) {
            var s = n.match(q);
            if (s) {
              var a = s[2] - 1 || 0, c = (s[7] || "0").substring(0, 3);
              return u ? new Date(Date.UTC(s[1], a, s[3] || 1, s[4] || 0, s[5] || 0, s[6] || 0, c)) : new Date(s[1], a, s[3] || 1, s[4] || 0, s[5] || 0, s[6] || 0, c);
            }
          }
          return new Date(n);
        }(t), this.$x = t.x || {}, this.init();
      }, e.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, e.$utils = function() {
        return o;
      }, e.isValid = function() {
        return this.$d.toString() !== Z;
      }, e.isSame = function(t, i) {
        var n = h(t);
        return this.startOf(i) <= n && n <= this.endOf(i);
      }, e.isAfter = function(t, i) {
        return h(t) < this.startOf(i);
      }, e.isBefore = function(t, i) {
        return this.endOf(i) < h(t);
      }, e.$g = function(t, i, n) {
        return o.u(t) ? this[i] : this.set(n, t);
      }, e.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, e.valueOf = function() {
        return this.$d.getTime();
      }, e.startOf = function(t, i) {
        var n = this, u = !!o.u(i) || i, s = o.p(t), a = function(x, l) {
          var v = o.w(n.$u ? Date.UTC(n.$y, l, x) : new Date(n.$y, l, x), n);
          return u ? v : v.endOf(M);
        }, c = function(x, l) {
          return o.w(n.toDate()[x].apply(n.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(l)), n);
        }, f = this.$W, d = this.$M, p = this.$D, y = "set" + (this.$u ? "UTC" : "");
        switch (s) {
          case g:
            return u ? a(1, 0) : a(31, 11);
          case m:
            return u ? a(1, d) : a(0, d + 1);
          case L:
            var j = this.$locale().weekStart || 0, C = (f < j ? f + 7 : f) - j;
            return a(u ? p - C : p + (6 - C), d);
          case M:
          case H:
            return c(y + "Hours", 0);
          case b:
            return c(y + "Minutes", 1);
          case T:
            return c(y + "Seconds", 2);
          case _:
            return c(y + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, e.endOf = function(t) {
        return this.startOf(t, !1);
      }, e.$set = function(t, i) {
        var n, u = o.p(t), s = "set" + (this.$u ? "UTC" : ""), a = (n = {}, n[M] = s + "Date", n[H] = s + "Date", n[m] = s + "Month", n[g] = s + "FullYear", n[b] = s + "Hours", n[T] = s + "Minutes", n[_] = s + "Seconds", n[k] = s + "Milliseconds", n)[u], c = u === M ? this.$D + (i - this.$W) : i;
        if (u === m || u === g) {
          var f = this.clone().set(H, 1);
          f.$d[a](c), f.init(), this.$d = f.set(H, Math.min(this.$D, f.daysInMonth())).$d;
        } else
          a && this.$d[a](c);
        return this.init(), this;
      }, e.set = function(t, i) {
        return this.clone().$set(t, i);
      }, e.get = function(t) {
        return this[o.p(t)]();
      }, e.add = function(t, i) {
        var n, u = this;
        t = Number(t);
        var s = o.p(i), a = function(d) {
          var p = h(u);
          return o.w(p.date(p.date() + Math.round(d * t)), u);
        };
        if (s === m)
          return this.set(m, this.$M + t);
        if (s === g)
          return this.set(g, this.$y + t);
        if (s === M)
          return a(1);
        if (s === L)
          return a(7);
        var c = (n = {}, n[T] = S, n[b] = E, n[_] = D, n)[s] || 1, f = this.$d.getTime() + t * c;
        return o.w(f, this);
      }, e.subtract = function(t, i) {
        return this.add(-1 * t, i);
      }, e.format = function(t) {
        var i = this, n = this.$locale();
        if (!this.isValid())
          return n.invalidDate || Z;
        var u = t || "YYYY-MM-DDTHH:mm:ssZ", s = o.z(this), a = this.$H, c = this.$m, f = this.$M, d = n.weekdays, p = n.months, y = function(l, v, U, F) {
          return l && (l[v] || l(i, u)) || U[v].slice(0, F);
        }, j = function(l) {
          return o.s(a % 12 || 12, l, "0");
        }, C = n.meridiem || function(l, v, U) {
          var F = l < 12 ? "AM" : "PM";
          return U ? F.toLowerCase() : F;
        }, x = { YY: String(this.$y).slice(-2), YYYY: o.s(this.$y, 4, "0"), M: f + 1, MM: o.s(f + 1, 2, "0"), MMM: y(n.monthsShort, f, p, 3), MMMM: y(p, f), D: this.$D, DD: o.s(this.$D, 2, "0"), d: String(this.$W), dd: y(n.weekdaysMin, this.$W, d, 2), ddd: y(n.weekdaysShort, this.$W, d, 3), dddd: d[this.$W], H: String(a), HH: o.s(a, 2, "0"), h: j(1), hh: j(2), a: C(a, c, !0), A: C(a, c, !1), m: String(c), mm: o.s(c, 2, "0"), s: String(this.$s), ss: o.s(this.$s, 2, "0"), SSS: o.s(this.$ms, 3, "0"), Z: s };
        return u.replace(B, function(l, v) {
          return v || x[l] || s.replace(":", "");
        });
      }, e.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, e.diff = function(t, i, n) {
        var u, s = o.p(i), a = h(t), c = (a.utcOffset() - this.utcOffset()) * S, f = this - a, d = o.m(this, a);
        return d = (u = {}, u[g] = d / 12, u[m] = d, u[J] = d / 3, u[L] = (f - c) / 6048e5, u[M] = (f - c) / 864e5, u[b] = f / E, u[T] = f / S, u[_] = f / D, u)[s] || f, n ? d : o.a(d);
      }, e.daysInMonth = function() {
        return this.endOf(m).$D;
      }, e.$locale = function() {
        return w[this.$L];
      }, e.locale = function(t, i) {
        if (!t)
          return this.$L;
        var n = this.clone(), u = W(t, i, !0);
        return u && (n.$L = u), n;
      }, e.clone = function() {
        return o.w(this.$d, this);
      }, e.toDate = function() {
        return new Date(this.valueOf());
      }, e.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, e.toISOString = function() {
        return this.$d.toISOString();
      }, e.toString = function() {
        return this.$d.toUTCString();
      }, r;
    }(), z = A.prototype;
    return h.prototype = z, [["$ms", k], ["$s", _], ["$m", T], ["$H", b], ["$W", M], ["$M", m], ["$y", g], ["$D", H]].forEach(function(r) {
      z[r[1]] = function(e) {
        return this.$g(e, r[0], r[1]);
      };
    }), h.extend = function(r, e) {
      return r.$i || (r(e, A, h), r.$i = !0), h;
    }, h.locale = W, h.isDayjs = N, h.unix = function(r) {
      return h(1e3 * r);
    }, h.en = w[Y], h.Ls = w, h.p = {}, h;
  });
})(R);
var rt = R.exports;
const P = /* @__PURE__ */ et(rt), ut = ({ date: $, format: O }) => {
  const D = P.unix(new Date($).getTime() / 1e3), S = P(D).format(O);
  return /* @__PURE__ */ V(K, { children: S });
}, ot = ({ html: $ }) => {
  const O = X(null);
  return tt(() => {
    if (!$ || !O.current)
      return;
    const D = document.createRange().createContextualFragment($);
    O.current.append(D);
  }, []), /* @__PURE__ */ V("div", { style: { display: "contents" }, ref: O });
};
export {
  ot as DangerousHTML,
  ut as DateTimePrimitive
};
