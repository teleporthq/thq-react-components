import Le, { useRef as ur, useEffect as or } from "react";
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cr(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
var Ee = { exports: {} }, ae = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ye, Ae;
function Fe() {
  if (Ae)
    return ye;
  Ae = 1;
  var E = Object.getOwnPropertySymbols, F = Object.prototype.hasOwnProperty, D = Object.prototype.propertyIsEnumerable;
  function Y(P) {
    if (P == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(P);
  }
  function B() {
    try {
      if (!Object.assign)
        return !1;
      var P = new String("abc");
      if (P[5] = "de", Object.getOwnPropertyNames(P)[0] === "5")
        return !1;
      for (var M = {}, g = 0; g < 10; g++)
        M["_" + String.fromCharCode(g)] = g;
      var _ = Object.getOwnPropertyNames(M).map(function(h) {
        return M[h];
      });
      if (_.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        b[h] = h;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ye = B() ? Object.assign : function(P, M) {
    for (var g, _ = Y(P), b, h = 1; h < arguments.length; h++) {
      g = Object(arguments[h]);
      for (var $ in g)
        F.call(g, $) && (_[$] = g[$]);
      if (E) {
        b = E(g);
        for (var k = 0; k < b.length; k++)
          D.call(g, b[k]) && (_[b[k]] = g[b[k]]);
      }
    }
    return _;
  }, ye;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function fr() {
  if (Ye)
    return ae;
  Ye = 1, Fe();
  var E = Le, F = 60103;
  if (ae.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var D = Symbol.for;
    F = D("react.element"), ae.Fragment = D("react.fragment");
  }
  var Y = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, B = Object.prototype.hasOwnProperty, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function M(g, _, b) {
    var h, $ = {}, k = null, I = null;
    b !== void 0 && (k = "" + b), _.key !== void 0 && (k = "" + _.key), _.ref !== void 0 && (I = _.ref);
    for (h in _)
      B.call(_, h) && !P.hasOwnProperty(h) && ($[h] = _[h]);
    if (g && g.defaultProps)
      for (h in _ = g.defaultProps, _)
        $[h] === void 0 && ($[h] = _[h]);
    return { $$typeof: F, type: g, key: k, ref: I, props: $, _owner: Y.current };
  }
  return ae.jsx = M, ae.jsxs = M, ae;
}
var be = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function lr() {
  return Ie || (Ie = 1, function(E) {
    process.env.NODE_ENV !== "production" && function() {
      var F = Le, D = Fe(), Y = 60103, B = 60106;
      E.Fragment = 60107;
      var P = 60108, M = 60114, g = 60109, _ = 60110, b = 60112, h = 60113, $ = 60120, k = 60115, I = 60116, V = 60121, ie = 60122, oe = 60117, se = 60129, ce = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var O = Symbol.for;
        Y = O("react.element"), B = O("react.portal"), E.Fragment = O("react.fragment"), P = O("react.strict_mode"), M = O("react.profiler"), g = O("react.provider"), _ = O("react.context"), b = O("react.forward_ref"), h = O("react.suspense"), $ = O("react.suspense_list"), k = O("react.memo"), I = O("react.lazy"), V = O("react.block"), ie = O("react.server.block"), oe = O("react.fundamental"), O("react.scope"), O("react.opaque.id"), se = O("react.debug_trace_mode"), O("react.offscreen"), ce = O("react.legacy_hidden");
      }
      var fe = typeof Symbol == "function" && Symbol.iterator, X = "@@iterator";
      function J(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = fe && e[fe] || e[X];
        return typeof r == "function" ? r : null;
      }
      var q = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function x(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          S("error", e, a);
        }
      }
      function S(e, r, a) {
        {
          var o = q.ReactDebugCurrentFrame, m = o.getStackAddendum();
          m !== "" && (r += "%s", a = a.concat([m]));
          var y = a.map(function(d) {
            return "" + d;
          });
          y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
        }
      }
      var v = !1;
      function re(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === E.Fragment || e === M || e === se || e === P || e === h || e === $ || e === ce || v || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === k || e.$$typeof === g || e.$$typeof === _ || e.$$typeof === b || e.$$typeof === oe || e.$$typeof === V || e[0] === ie));
      }
      function le(e, r, a) {
        var o = r.displayName || r.name || "";
        return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
      }
      function s(e) {
        return e.displayName || "Context";
      }
      function n(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && x("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case E.Fragment:
            return "Fragment";
          case B:
            return "Portal";
          case M:
            return "Profiler";
          case P:
            return "StrictMode";
          case h:
            return "Suspense";
          case $:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case _:
              var r = e;
              return s(r) + ".Consumer";
            case g:
              var a = e;
              return s(a._context) + ".Provider";
            case b:
              return le(e, e.render, "ForwardRef");
            case k:
              return n(e.type);
            case V:
              return n(e._render);
            case I: {
              var o = e, m = o._payload, y = o._init;
              try {
                return n(y(m));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var t = 0, u, i, c, f, p, R, w;
      function C() {
      }
      C.__reactDisabledLog = !0;
      function L() {
        {
          if (t === 0) {
            u = console.log, i = console.info, c = console.warn, f = console.error, p = console.group, R = console.groupCollapsed, w = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: C,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          t++;
        }
      }
      function Z() {
        {
          if (t--, t === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: D({}, e, {
                value: u
              }),
              info: D({}, e, {
                value: i
              }),
              warn: D({}, e, {
                value: c
              }),
              error: D({}, e, {
                value: f
              }),
              group: D({}, e, {
                value: p
              }),
              groupCollapsed: D({}, e, {
                value: R
              }),
              groupEnd: D({}, e, {
                value: w
              })
            });
          }
          t < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var H = q.ReactCurrentDispatcher, G;
      function U(e, r, a) {
        {
          if (G === void 0)
            try {
              throw Error();
            } catch (m) {
              var o = m.stack.trim().match(/\n( *(at )?)/);
              G = o && o[1] || "";
            }
          return `
` + G + e;
        }
      }
      var A = !1, N;
      {
        var Q = typeof WeakMap == "function" ? WeakMap : Map;
        N = new Q();
      }
      function ee(e, r) {
        if (!e || A)
          return "";
        {
          var a = N.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        A = !0;
        var m = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var y;
        y = H.current, H.current = null, L();
        try {
          if (r) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (K) {
                o = K;
              }
              Reflect.construct(e, [], d);
            } else {
              try {
                d.call();
              } catch (K) {
                o = K;
              }
              e.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (K) {
              o = K;
            }
            e();
          }
        } catch (K) {
          if (K && o && typeof K.stack == "string") {
            for (var l = K.stack.split(`
`), W = o.stack.split(`
`), T = l.length - 1, j = W.length - 1; T >= 1 && j >= 0 && l[T] !== W[j]; )
              j--;
            for (; T >= 1 && j >= 0; T--, j--)
              if (l[T] !== W[j]) {
                if (T !== 1 || j !== 1)
                  do
                    if (T--, j--, j < 0 || l[T] !== W[j]) {
                      var z = `
` + l[T].replace(" at new ", " at ");
                      return typeof e == "function" && N.set(e, z), z;
                    }
                  while (T >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          A = !1, H.current = y, Z(), Error.prepareStackTrace = m;
        }
        var ne = e ? e.displayName || e.name : "", ke = ne ? U(ne) : "";
        return typeof e == "function" && N.set(e, ke), ke;
      }
      function Oe(e, r, a) {
        return ee(e, !1);
      }
      function Ue(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function de(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ee(e, Ue(e));
        if (typeof e == "string")
          return U(e);
        switch (e) {
          case h:
            return U("Suspense");
          case $:
            return U("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case b:
              return Oe(e.render);
            case k:
              return de(e.type, r, a);
            case V:
              return Oe(e._render);
            case I: {
              var o = e, m = o._payload, y = o._init;
              try {
                return de(y(m), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Re = {}, we = q.ReactDebugCurrentFrame;
      function ve(e) {
        if (e) {
          var r = e._owner, a = de(e.type, e._source, r ? r.type : null);
          we.setExtraStackFrame(a);
        } else
          we.setExtraStackFrame(null);
      }
      function Ve(e, r, a, o, m) {
        {
          var y = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var d in e)
            if (y(e, d)) {
              var l = void 0;
              try {
                if (typeof e[d] != "function") {
                  var W = Error((o || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                l = e[d](r, d, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (T) {
                l = T;
              }
              l && !(l instanceof Error) && (ve(m), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, d, typeof l), ve(null)), l instanceof Error && !(l.message in Re) && (Re[l.message] = !0, ve(m), x("Failed %s type: %s", a, l.message), ve(null));
            }
        }
      }
      var ue = q.ReactCurrentOwner, he = Object.prototype.hasOwnProperty, He = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Te, De, pe;
      pe = {};
      function qe(e) {
        if (he.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Be(e) {
        if (he.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Je(e, r) {
        if (typeof e.ref == "string" && ue.current && r && ue.current.stateNode !== r) {
          var a = n(ue.current.type);
          pe[a] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', n(ue.current.type), e.ref), pe[a] = !0);
        }
      }
      function Ge(e, r) {
        {
          var a = function() {
            Te || (Te = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          a.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: a,
            configurable: !0
          });
        }
      }
      function ze(e, r) {
        {
          var a = function() {
            De || (De = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
          };
          a.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: a,
            configurable: !0
          });
        }
      }
      var Ke = function(e, r, a, o, m, y, d) {
        var l = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Y,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: d,
          // Record the component responsible for creating this element.
          _owner: y
        };
        return l._store = {}, Object.defineProperty(l._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(l, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(l, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: m
        }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
      };
      function Ze(e, r, a, o, m) {
        {
          var y, d = {}, l = null, W = null;
          a !== void 0 && (l = "" + a), Be(r) && (l = "" + r.key), qe(r) && (W = r.ref, Je(r, m));
          for (y in r)
            he.call(r, y) && !He.hasOwnProperty(y) && (d[y] = r[y]);
          if (e && e.defaultProps) {
            var T = e.defaultProps;
            for (y in T)
              d[y] === void 0 && (d[y] = T[y]);
          }
          if (l || W) {
            var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            l && Ge(d, j), W && ze(d, j);
          }
          return Ke(e, l, W, m, o, ue.current, d);
        }
      }
      var ge = q.ReactCurrentOwner, Se = q.ReactDebugCurrentFrame;
      function te(e) {
        if (e) {
          var r = e._owner, a = de(e.type, e._source, r ? r.type : null);
          Se.setExtraStackFrame(a);
        } else
          Se.setExtraStackFrame(null);
      }
      var _e;
      _e = !1;
      function me(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Y;
      }
      function je() {
        {
          if (ge.current) {
            var e = n(ge.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Xe(e) {
        {
          if (e !== void 0) {
            var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
            return `

Check your code at ` + r + ":" + a + ".";
          }
          return "";
        }
      }
      var xe = {};
      function Qe(e) {
        {
          var r = je();
          if (!r) {
            var a = typeof e == "string" ? e : e.displayName || e.name;
            a && (r = `

Check the top-level render call using <` + a + ">.");
          }
          return r;
        }
      }
      function Ce(e, r) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var a = Qe(r);
          if (xe[a])
            return;
          xe[a] = !0;
          var o = "";
          e && e._owner && e._owner !== ge.current && (o = " It was passed a child from " + n(e._owner.type) + "."), te(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), te(null);
        }
      }
      function Pe(e, r) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              me(o) && Ce(o, r);
            }
          else if (me(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var m = J(e);
            if (typeof m == "function" && m !== e.entries)
              for (var y = m.call(e), d; !(d = y.next()).done; )
                me(d.value) && Ce(d.value, r);
          }
        }
      }
      function er(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === k))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = n(r);
            Ve(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !_e) {
            _e = !0;
            var m = n(r);
            x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function rr(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              te(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), te(null);
              break;
            }
          }
          e.ref !== null && (te(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
        }
      }
      function Me(e, r, a, o, m, y) {
        {
          var d = re(e);
          if (!d) {
            var l = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var W = Xe(m);
            W ? l += W : l += je();
            var T;
            e === null ? T = "null" : Array.isArray(e) ? T = "array" : e !== void 0 && e.$$typeof === Y ? (T = "<" + (n(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, l);
          }
          var j = Ze(e, r, a, m, y);
          if (j == null)
            return j;
          if (d) {
            var z = r.children;
            if (z !== void 0)
              if (o)
                if (Array.isArray(z)) {
                  for (var ne = 0; ne < z.length; ne++)
                    Pe(z[ne], e);
                  Object.freeze && Object.freeze(z);
                } else
                  x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Pe(z, e);
          }
          return e === E.Fragment ? rr(j) : er(j), j;
        }
      }
      function tr(e, r, a) {
        return Me(e, r, a, !0);
      }
      function nr(e, r, a) {
        return Me(e, r, a, !1);
      }
      var ar = nr, ir = tr;
      E.jsx = ar, E.jsxs = ir;
    }();
  }(be)), be;
}
process.env.NODE_ENV === "production" ? Ee.exports = fr() : Ee.exports = lr();
var $e = Ee.exports, Ne = { exports: {} };
(function(E, F) {
  (function(D, Y) {
    E.exports = Y();
  })(sr, function() {
    var D = 1e3, Y = 6e4, B = 36e5, P = "millisecond", M = "second", g = "minute", _ = "hour", b = "day", h = "week", $ = "month", k = "quarter", I = "year", V = "date", ie = "Invalid Date", oe = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, se = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ce = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, O = function(s, n, t) {
      var u = String(s);
      return !u || u.length >= n ? s : "" + Array(n + 1 - u.length).join(t) + s;
    }, fe = { s: O, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), u = Math.floor(t / 60), i = t % 60;
      return (n <= 0 ? "+" : "-") + O(u, 2, "0") + ":" + O(i, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var u = 12 * (t.year() - n.year()) + (t.month() - n.month()), i = n.clone().add(u, $), c = t - i < 0, f = n.clone().add(u + (c ? -1 : 1), $);
      return +(-(u + (t - i) / (c ? i - f : f - i)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: $, y: I, w: h, d: b, D: V, h: _, m: g, s: M, ms: P, Q: k }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, X = "en", J = {};
    J[X] = ce;
    var q = function(s) {
      return s instanceof re;
    }, x = function s(n, t, u) {
      var i;
      if (!n)
        return X;
      if (typeof n == "string") {
        var c = n.toLowerCase();
        J[c] && (i = c), t && (J[c] = t, i = c);
        var f = n.split("-");
        if (!i && f.length > 1)
          return s(f[0]);
      } else {
        var p = n.name;
        J[p] = n, i = p;
      }
      return !u && i && (X = i), i || !u && X;
    }, S = function(s, n) {
      if (q(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new re(t);
    }, v = fe;
    v.l = x, v.i = q, v.w = function(s, n) {
      return S(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var re = function() {
      function s(t) {
        this.$L = x(t.locale, null, !0), this.parse(t);
      }
      var n = s.prototype;
      return n.parse = function(t) {
        this.$d = function(u) {
          var i = u.date, c = u.utc;
          if (i === null)
            return /* @__PURE__ */ new Date(NaN);
          if (v.u(i))
            return /* @__PURE__ */ new Date();
          if (i instanceof Date)
            return new Date(i);
          if (typeof i == "string" && !/Z$/i.test(i)) {
            var f = i.match(oe);
            if (f) {
              var p = f[2] - 1 || 0, R = (f[7] || "0").substring(0, 3);
              return c ? new Date(Date.UTC(f[1], p, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, R)) : new Date(f[1], p, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, R);
            }
          }
          return new Date(i);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return v;
      }, n.isValid = function() {
        return this.$d.toString() !== ie;
      }, n.isSame = function(t, u) {
        var i = S(t);
        return this.startOf(u) <= i && i <= this.endOf(u);
      }, n.isAfter = function(t, u) {
        return S(t) < this.startOf(u);
      }, n.isBefore = function(t, u) {
        return this.endOf(u) < S(t);
      }, n.$g = function(t, u, i) {
        return v.u(t) ? this[u] : this.set(i, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, u) {
        var i = this, c = !!v.u(u) || u, f = v.p(t), p = function(U, A) {
          var N = v.w(i.$u ? Date.UTC(i.$y, A, U) : new Date(i.$y, A, U), i);
          return c ? N : N.endOf(b);
        }, R = function(U, A) {
          return v.w(i.toDate()[U].apply(i.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(A)), i);
        }, w = this.$W, C = this.$M, L = this.$D, Z = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case I:
            return c ? p(1, 0) : p(31, 11);
          case $:
            return c ? p(1, C) : p(0, C + 1);
          case h:
            var H = this.$locale().weekStart || 0, G = (w < H ? w + 7 : w) - H;
            return p(c ? L - G : L + (6 - G), C);
          case b:
          case V:
            return R(Z + "Hours", 0);
          case _:
            return R(Z + "Minutes", 1);
          case g:
            return R(Z + "Seconds", 2);
          case M:
            return R(Z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, u) {
        var i, c = v.p(t), f = "set" + (this.$u ? "UTC" : ""), p = (i = {}, i[b] = f + "Date", i[V] = f + "Date", i[$] = f + "Month", i[I] = f + "FullYear", i[_] = f + "Hours", i[g] = f + "Minutes", i[M] = f + "Seconds", i[P] = f + "Milliseconds", i)[c], R = c === b ? this.$D + (u - this.$W) : u;
        if (c === $ || c === I) {
          var w = this.clone().set(V, 1);
          w.$d[p](R), w.init(), this.$d = w.set(V, Math.min(this.$D, w.daysInMonth())).$d;
        } else
          p && this.$d[p](R);
        return this.init(), this;
      }, n.set = function(t, u) {
        return this.clone().$set(t, u);
      }, n.get = function(t) {
        return this[v.p(t)]();
      }, n.add = function(t, u) {
        var i, c = this;
        t = Number(t);
        var f = v.p(u), p = function(C) {
          var L = S(c);
          return v.w(L.date(L.date() + Math.round(C * t)), c);
        };
        if (f === $)
          return this.set($, this.$M + t);
        if (f === I)
          return this.set(I, this.$y + t);
        if (f === b)
          return p(1);
        if (f === h)
          return p(7);
        var R = (i = {}, i[g] = Y, i[_] = B, i[M] = D, i)[f] || 1, w = this.$d.getTime() + t * R;
        return v.w(w, this);
      }, n.subtract = function(t, u) {
        return this.add(-1 * t, u);
      }, n.format = function(t) {
        var u = this, i = this.$locale();
        if (!this.isValid())
          return i.invalidDate || ie;
        var c = t || "YYYY-MM-DDTHH:mm:ssZ", f = v.z(this), p = this.$H, R = this.$m, w = this.$M, C = i.weekdays, L = i.months, Z = i.meridiem, H = function(A, N, Q, ee) {
          return A && (A[N] || A(u, c)) || Q[N].slice(0, ee);
        }, G = function(A) {
          return v.s(p % 12 || 12, A, "0");
        }, U = Z || function(A, N, Q) {
          var ee = A < 12 ? "AM" : "PM";
          return Q ? ee.toLowerCase() : ee;
        };
        return c.replace(se, function(A, N) {
          return N || function(Q) {
            switch (Q) {
              case "YY":
                return String(u.$y).slice(-2);
              case "YYYY":
                return v.s(u.$y, 4, "0");
              case "M":
                return w + 1;
              case "MM":
                return v.s(w + 1, 2, "0");
              case "MMM":
                return H(i.monthsShort, w, L, 3);
              case "MMMM":
                return H(L, w);
              case "D":
                return u.$D;
              case "DD":
                return v.s(u.$D, 2, "0");
              case "d":
                return String(u.$W);
              case "dd":
                return H(i.weekdaysMin, u.$W, C, 2);
              case "ddd":
                return H(i.weekdaysShort, u.$W, C, 3);
              case "dddd":
                return C[u.$W];
              case "H":
                return String(p);
              case "HH":
                return v.s(p, 2, "0");
              case "h":
                return G(1);
              case "hh":
                return G(2);
              case "a":
                return U(p, R, !0);
              case "A":
                return U(p, R, !1);
              case "m":
                return String(R);
              case "mm":
                return v.s(R, 2, "0");
              case "s":
                return String(u.$s);
              case "ss":
                return v.s(u.$s, 2, "0");
              case "SSS":
                return v.s(u.$ms, 3, "0");
              case "Z":
                return f;
            }
            return null;
          }(A) || f.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, u, i) {
        var c, f = this, p = v.p(u), R = S(t), w = (R.utcOffset() - this.utcOffset()) * Y, C = this - R, L = function() {
          return v.m(f, R);
        };
        switch (p) {
          case I:
            c = L() / 12;
            break;
          case $:
            c = L();
            break;
          case k:
            c = L() / 3;
            break;
          case h:
            c = (C - w) / 6048e5;
            break;
          case b:
            c = (C - w) / 864e5;
            break;
          case _:
            c = C / B;
            break;
          case g:
            c = C / Y;
            break;
          case M:
            c = C / D;
            break;
          default:
            c = C;
        }
        return i ? c : v.a(c);
      }, n.daysInMonth = function() {
        return this.endOf($).$D;
      }, n.$locale = function() {
        return J[this.$L];
      }, n.locale = function(t, u) {
        if (!t)
          return this.$L;
        var i = this.clone(), c = x(t, u, !0);
        return c && (i.$L = c), i;
      }, n.clone = function() {
        return v.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), le = re.prototype;
    return S.prototype = le, [["$ms", P], ["$s", M], ["$m", g], ["$H", _], ["$W", b], ["$M", $], ["$y", I], ["$D", V]].forEach(function(s) {
      le[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), S.extend = function(s, n) {
      return s.$i || (s(n, re, S), s.$i = !0), S;
    }, S.locale = x, S.isDayjs = q, S.unix = function(s) {
      return S(1e3 * s);
    }, S.en = J[X], S.Ls = J, S.p = {}, S;
  });
})(Ne);
var dr = Ne.exports;
const We = /* @__PURE__ */ cr(dr), hr = ({ date: E, format: F }) => {
  const D = We.unix(new Date(E).getTime() / 1e3), Y = We(D).format(F);
  return /* @__PURE__ */ $e.jsx($e.Fragment, { children: Y });
}, pr = ({ html: E }) => {
  const F = ur(null);
  return or(() => {
    if (!E || !F.current)
      return;
    const D = document.createRange().createContextualFragment(E);
    F.current.append(D);
  }, []), /* @__PURE__ */ $e.jsx("div", { style: { display: "contents" }, ref: F });
};
export {
  pr as DangerousHTML,
  hr as DateTimePrimitive
};
