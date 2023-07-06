import { useRef as z, useEffect as G, useState as Z } from "react";
var tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function et(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Q = { exports: {} };
(function(f, g) {
  (function(D, v) {
    f.exports = v();
  })(tt, function() {
    var D = 1e3, v = 6e4, H = 36e5, k = "millisecond", w = "second", b = "minute", O = "hour", y = "day", _ = "week", $ = "month", R = "quarter", M = "year", S = "date", E = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, W = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, K = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, J = function(s, n, t) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
    }, X = { s: J, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + J(r, 2, "0") + ":" + J(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, $), a = t - e < 0, i = n.clone().add(r + (a ? -1 : 1), $);
      return +(-(r + (t - e) / (a ? e - i : i - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: $, y: M, w: _, d: y, D: S, h: O, m: b, s: w, ms: k, Q: R }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, j = "en", L = {};
    L[j] = K;
    var P = function(s) {
      return s instanceof N;
    }, I = function s(n, t, r) {
      var e;
      if (!n)
        return j;
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
      return !r && e && (j = e), e || !r && j;
    }, d = function(s, n) {
      if (P(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new N(t);
    }, u = X;
    u.l = I, u.i = P, u.w = function(s, n) {
      return d(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var N = function() {
      function s(t) {
        this.$L = I(t.locale, null, !0), this.parse(t);
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
            var i = e.match(V);
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
        return this.$d.toString() !== E;
      }, n.isSame = function(t, r) {
        var e = d(t);
        return this.startOf(r) <= e && e <= this.endOf(r);
      }, n.isAfter = function(t, r) {
        return d(t) < this.startOf(r);
      }, n.isBefore = function(t, r) {
        return this.endOf(r) < d(t);
      }, n.$g = function(t, r, e) {
        return u.u(t) ? this[r] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, r) {
        var e = this, a = !!u.u(r) || r, i = u.p(t), o = function(x, m) {
          var T = u.w(e.$u ? Date.UTC(e.$y, m, x) : new Date(e.$y, m, x), e);
          return a ? T : T.endOf(y);
        }, c = function(x, m) {
          return u.w(e.toDate()[x].apply(e.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(m)), e);
        }, l = this.$W, h = this.$M, p = this.$D, C = "set" + (this.$u ? "UTC" : "");
        switch (i) {
          case M:
            return a ? o(1, 0) : o(31, 11);
          case $:
            return a ? o(1, h) : o(0, h + 1);
          case _:
            var Y = this.$locale().weekStart || 0, A = (l < Y ? l + 7 : l) - Y;
            return o(a ? p - A : p + (6 - A), h);
          case y:
          case S:
            return c(C + "Hours", 0);
          case O:
            return c(C + "Minutes", 1);
          case b:
            return c(C + "Seconds", 2);
          case w:
            return c(C + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, r) {
        var e, a = u.p(t), i = "set" + (this.$u ? "UTC" : ""), o = (e = {}, e[y] = i + "Date", e[S] = i + "Date", e[$] = i + "Month", e[M] = i + "FullYear", e[O] = i + "Hours", e[b] = i + "Minutes", e[w] = i + "Seconds", e[k] = i + "Milliseconds", e)[a], c = a === y ? this.$D + (r - this.$W) : r;
        if (a === $ || a === M) {
          var l = this.clone().set(S, 1);
          l.$d[o](c), l.init(), this.$d = l.set(S, Math.min(this.$D, l.daysInMonth())).$d;
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
        var i = u.p(r), o = function(h) {
          var p = d(a);
          return u.w(p.date(p.date() + Math.round(h * t)), a);
        };
        if (i === $)
          return this.set($, this.$M + t);
        if (i === M)
          return this.set(M, this.$y + t);
        if (i === y)
          return o(1);
        if (i === _)
          return o(7);
        var c = (e = {}, e[b] = v, e[O] = H, e[w] = D, e)[i] || 1, l = this.$d.getTime() + t * c;
        return u.w(l, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || E;
        var a = t || "YYYY-MM-DDTHH:mm:ssZ", i = u.z(this), o = this.$H, c = this.$m, l = this.$M, h = e.weekdays, p = e.months, C = e.meridiem, Y = function(m, T, F, U) {
          return m && (m[T] || m(r, a)) || F[T].slice(0, U);
        }, A = function(m) {
          return u.s(o % 12 || 12, m, "0");
        }, x = C || function(m, T, F) {
          var U = m < 12 ? "AM" : "PM";
          return F ? U.toLowerCase() : U;
        };
        return a.replace(W, function(m, T) {
          return T || function(F) {
            switch (F) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return u.s(r.$y, 4, "0");
              case "M":
                return l + 1;
              case "MM":
                return u.s(l + 1, 2, "0");
              case "MMM":
                return Y(e.monthsShort, l, p, 3);
              case "MMMM":
                return Y(p, l);
              case "D":
                return r.$D;
              case "DD":
                return u.s(r.$D, 2, "0");
              case "d":
                return String(r.$W);
              case "dd":
                return Y(e.weekdaysMin, r.$W, h, 2);
              case "ddd":
                return Y(e.weekdaysShort, r.$W, h, 3);
              case "dddd":
                return h[r.$W];
              case "H":
                return String(o);
              case "HH":
                return u.s(o, 2, "0");
              case "h":
                return A(1);
              case "hh":
                return A(2);
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
          }(m) || i.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, r, e) {
        var a, i = this, o = u.p(r), c = d(t), l = (c.utcOffset() - this.utcOffset()) * v, h = this - c, p = function() {
          return u.m(i, c);
        };
        switch (o) {
          case M:
            a = p() / 12;
            break;
          case $:
            a = p();
            break;
          case R:
            a = p() / 3;
            break;
          case _:
            a = (h - l) / 6048e5;
            break;
          case y:
            a = (h - l) / 864e5;
            break;
          case O:
            a = h / H;
            break;
          case b:
            a = h / v;
            break;
          case w:
            a = h / D;
            break;
          default:
            a = h;
        }
        return e ? a : u.a(a);
      }, n.daysInMonth = function() {
        return this.endOf($).$D;
      }, n.$locale = function() {
        return L[this.$L];
      }, n.locale = function(t, r) {
        if (!t)
          return this.$L;
        var e = this.clone(), a = I(t, r, !0);
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
    }(), B = N.prototype;
    return d.prototype = B, [["$ms", k], ["$s", w], ["$m", b], ["$H", O], ["$W", y], ["$M", $], ["$y", M], ["$D", S]].forEach(function(s) {
      B[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), d.extend = function(s, n) {
      return s.$i || (s(n, N, d), s.$i = !0), d;
    }, d.locale = I, d.isDayjs = P, d.unix = function(s) {
      return d(1e3 * s);
    }, d.en = L[j], d.Ls = L, d.p = {}, d;
  });
})(Q);
var nt = Q.exports;
const q = /* @__PURE__ */ et(nt), st = ({ date: f, format: g }) => {
  const D = q.unix(new Date(f).getTime() / 1e3), v = q(D).format(g);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, v);
}, at = ({ html: f }) => {
  const g = z(null);
  return G(() => {
    if (!f || !g.current)
      return;
    const D = document.createRange().createContextualFragment(f);
    g.current.append(D);
  }, []), /* @__PURE__ */ React.createElement("div", { style: { display: "contents" }, ref: g });
}, it = (f) => {
  const {
    fetchData: g,
    params: D,
    initialData: v,
    persistDataDuringLoading: H = !1,
    renderLoading: k,
    renderSuccess: w,
    renderError: b
  } = f, [O, y] = Z("idle"), [_, $] = Z(v), [R, M] = Z(null), S = z(f.initialData !== void 0), E = z(H);
  switch (E.current = H, G(() => {
    if (S.current) {
      S.current = !1;
      return;
    }
    (async () => {
      y("loading"), E.current || $(void 0);
      try {
        const W = await g(D);
        $(W), y("success");
      } catch (W) {
        M(W), y("error");
      }
    })();
  }, [D, g]), O) {
    case "idle":
    case "loading":
      return f.persistDataDuringLoading && _ ? w(_, !0) : k();
    case "success":
      return w(_, !1);
    case "error":
      return b(R);
    default:
      return null;
  }
}, ut = (f) => {
  const { items: g, renderItem: D, renderEmpty: v } = f;
  return g.length === 0 ? v() : /* @__PURE__ */ React.createElement(React.Fragment, null, g.map((H, k) => D(H, k)));
};
export {
  at as DangerousHTML,
  it as DataProvider,
  st as DateTimePrimitive,
  ut as Repeater
};
