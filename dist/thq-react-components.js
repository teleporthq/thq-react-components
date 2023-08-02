import v, { useRef as V, useEffect as Q, useState as Z } from "react";
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nt(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var K = { exports: {} };
(function(o, l) {
  (function(m, g) {
    o.exports = g();
  })(et, function() {
    var m = 1e3, g = 6e4, b = 36e5, O = "millisecond", p = "second", S = "minute", k = "hour", M = "day", E = "week", y = "month", N = "quarter", _ = "year", T = "date", x = "Invalid Date", B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, X = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, J = function(s, n, t) {
      var r = String(s);
      return !r || r.length >= n ? s : "" + Array(n + 1 - r.length).join(t) + s;
    }, tt = { s: J, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), r = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + J(r, 2, "0") + ":" + J(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var r = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(r, y), a = t - e < 0, i = n.clone().add(r + (a ? -1 : 1), y);
      return +(-(r + (t - e) / (a ? e - i : i - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: y, y: _, w: E, d: M, D: T, h: k, m: S, s: p, ms: O, Q: N }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, j = "en", L = {};
    L[j] = X;
    var P = function(s) {
      return s instanceof U;
    }, R = function s(n, t, r) {
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
        var c = n.name;
        L[c] = n, e = c;
      }
      return !r && e && (j = e), e || !r && j;
    }, d = function(s, n) {
      if (P(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new U(t);
    }, u = tt;
    u.l = R, u.i = P, u.w = function(s, n) {
      return d(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
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
              var c = i[2] - 1 || 0, f = (i[7] || "0").substring(0, 3);
              return a ? new Date(Date.UTC(i[1], c, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, f)) : new Date(i[1], c, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, f);
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
        var e = this, a = !!u.u(r) || r, i = u.p(t), c = function(A, D) {
          var H = u.w(e.$u ? Date.UTC(e.$y, D, A) : new Date(e.$y, D, A), e);
          return a ? H : H.endOf(M);
        }, f = function(A, D) {
          return u.w(e.toDate()[A].apply(e.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D)), e);
        }, h = this.$W, $ = this.$M, w = this.$D, F = "set" + (this.$u ? "UTC" : "");
        switch (i) {
          case _:
            return a ? c(1, 0) : c(31, 11);
          case y:
            return a ? c(1, $) : c(0, $ + 1);
          case E:
            var Y = this.$locale().weekStart || 0, W = (h < Y ? h + 7 : h) - Y;
            return c(a ? w - W : w + (6 - W), $);
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
        var e, a = u.p(t), i = "set" + (this.$u ? "UTC" : ""), c = (e = {}, e[M] = i + "Date", e[T] = i + "Date", e[y] = i + "Month", e[_] = i + "FullYear", e[k] = i + "Hours", e[S] = i + "Minutes", e[p] = i + "Seconds", e[O] = i + "Milliseconds", e)[a], f = a === M ? this.$D + (r - this.$W) : r;
        if (a === y || a === _) {
          var h = this.clone().set(T, 1);
          h.$d[c](f), h.init(), this.$d = h.set(T, Math.min(this.$D, h.daysInMonth())).$d;
        } else
          c && this.$d[c](f);
        return this.init(), this;
      }, n.set = function(t, r) {
        return this.clone().$set(t, r);
      }, n.get = function(t) {
        return this[u.p(t)]();
      }, n.add = function(t, r) {
        var e, a = this;
        t = Number(t);
        var i = u.p(r), c = function($) {
          var w = d(a);
          return u.w(w.date(w.date() + Math.round($ * t)), a);
        };
        if (i === y)
          return this.set(y, this.$M + t);
        if (i === _)
          return this.set(_, this.$y + t);
        if (i === M)
          return c(1);
        if (i === E)
          return c(7);
        var f = (e = {}, e[S] = g, e[k] = b, e[p] = m, e)[i] || 1, h = this.$d.getTime() + t * f;
        return u.w(h, this);
      }, n.subtract = function(t, r) {
        return this.add(-1 * t, r);
      }, n.format = function(t) {
        var r = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || x;
        var a = t || "YYYY-MM-DDTHH:mm:ssZ", i = u.z(this), c = this.$H, f = this.$m, h = this.$M, $ = e.weekdays, w = e.months, F = e.meridiem, Y = function(D, H, I, z) {
          return D && (D[H] || D(r, a)) || I[H].slice(0, z);
        }, W = function(D) {
          return u.s(c % 12 || 12, D, "0");
        }, A = F || function(D, H, I) {
          var z = D < 12 ? "AM" : "PM";
          return I ? z.toLowerCase() : z;
        };
        return a.replace(C, function(D, H) {
          return H || function(I) {
            switch (I) {
              case "YY":
                return String(r.$y).slice(-2);
              case "YYYY":
                return u.s(r.$y, 4, "0");
              case "M":
                return h + 1;
              case "MM":
                return u.s(h + 1, 2, "0");
              case "MMM":
                return Y(e.monthsShort, h, w, 3);
              case "MMMM":
                return Y(w, h);
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
                return String(c);
              case "HH":
                return u.s(c, 2, "0");
              case "h":
                return W(1);
              case "hh":
                return W(2);
              case "a":
                return A(c, f, !0);
              case "A":
                return A(c, f, !1);
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
        var a, i = this, c = u.p(r), f = d(t), h = (f.utcOffset() - this.utcOffset()) * g, $ = this - f, w = function() {
          return u.m(i, f);
        };
        switch (c) {
          case _:
            a = w() / 12;
            break;
          case y:
            a = w();
            break;
          case N:
            a = w() / 3;
            break;
          case E:
            a = ($ - h) / 6048e5;
            break;
          case M:
            a = ($ - h) / 864e5;
            break;
          case k:
            a = $ / b;
            break;
          case S:
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
    return d.prototype = q, [["$ms", O], ["$s", p], ["$m", S], ["$H", k], ["$W", M], ["$M", y], ["$y", _], ["$D", T]].forEach(function(s) {
      q[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), d.extend = function(s, n) {
      return s.$i || (s(n, U, d), s.$i = !0), d;
    }, d.locale = R, d.isDayjs = P, d.unix = function(s) {
      return d(1e3 * s);
    }, d.en = L[j], d.Ls = L, d.p = {}, d;
  });
})(K);
var rt = K.exports;
const G = /* @__PURE__ */ nt(rt), it = ({ date: o, format: l }) => {
  const m = G.unix(new Date(o).getTime() / 1e3), g = G(m).format(l);
  return /* @__PURE__ */ v.createElement(v.Fragment, null, g);
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
    initialData: g,
    persistDataDuringLoading: b = !1,
    renderLoading: O,
    renderSuccess: p,
    renderError: S
  } = o, [k, M] = Z("idle"), [E, y] = Z(g), [N, _] = Z(null), T = V(o.initialData !== void 0), x = V(b);
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
        _(C), M("error");
      }
    })();
  }, [m, l]), k) {
    case "idle":
    case "loading":
      return o.persistDataDuringLoading && E ? p(E, !0) : O ? O() : null;
    case "success":
      return p(E, !1);
    case "error":
      return S(N);
    default:
      return null;
  }
}, ct = (o) => {
  const { items: l, renderItem: m, renderEmpty: g } = o;
  if ("data" in l && "meta" in l) {
    const { data: b, meta: O } = l;
    return b.length === 0 ? g ? g() : null : /* @__PURE__ */ v.createElement(v.Fragment, null, b.map(
      (p, S) => m(typeof p == "object" ? { ...p, teleportMeta: O } : p, S)
    ));
  }
  if (Array.isArray(l))
    return l.length === 0 ? g ? g() : null : /* @__PURE__ */ v.createElement(v.Fragment, null, l.map((b, O) => m(b, O)));
}, st = ({ src: o, description: l }) => /* @__PURE__ */ v.createElement(v.Fragment, null, o && /* @__PURE__ */ v.createElement(
  "img",
  {
    loading: "lazy",
    src: `${o}?w=1920&h=960`,
    srcSet: `${o}?w=3840&h=1920 1920w, ${o}?w=1920&h=960 1280w, ${o}?w=1280&h=640 640w`,
    alt: l ?? ""
  }
)), ft = ({ node: o, children: l }) => o.attrs.src ? /* @__PURE__ */ v.createElement(st, { ...o.attrs }) : /* @__PURE__ */ v.createElement(v.Fragment, null, l);
export {
  ft as CaisyDocumentLink,
  ut as DangerousHTML,
  ot as DataProvider,
  it as DateTimePrimitive,
  ct as Repeater
};
