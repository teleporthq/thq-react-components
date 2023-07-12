import y from "dayjs";
import s, { useRef as f, useEffect as E, useState as m } from "react";
const T = ({ date: t, format: e }) => {
  const r = y.unix(new Date(t).getTime() / 1e3), a = y(r).format(e);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, a);
}, w = ({ html: t }) => {
  const e = f(null);
  return E(() => {
    if (!t || !e.current)
      return;
    const r = document.createRange().createContextualFragment(t);
    e.current.append(r);
  }, []), /* @__PURE__ */ s.createElement("div", { style: { display: "contents" }, ref: e });
}, H = (t) => {
  const {
    fetchData: e,
    params: r,
    initialData: a,
    persistDataDuringLoading: n = !1,
    renderLoading: c,
    renderSuccess: u,
    renderError: i
  } = t, [h, o] = m("idle"), [l, g] = m(a), [v, F] = m(null), D = f(t.initialData !== void 0), p = f(n);
  switch (p.current = n, E(() => {
    if (D.current) {
      D.current = !1;
      return;
    }
    (async () => {
      o("loading"), p.current || g(void 0);
      try {
        const d = await e(r);
        g(d), o("success");
      } catch (d) {
        F(d), o("error");
      }
    })();
  }, [r, e]), h) {
    case "idle":
    case "loading":
      return t.persistDataDuringLoading && l ? u(l, !0) : c ? c() : null;
    case "success":
      return u(l, !1);
    case "error":
      return i(v);
    default:
      return null;
  }
}, S = (t) => {
  const { items: e, renderItem: r, renderEmpty: a } = t;
  if ("data" in e && "meta" in e) {
    const { data: n, meta: c } = e;
    return n.length === 0 ? a ? a() : null : /* @__PURE__ */ s.createElement(s.Fragment, null, n.map(
      (u, i) => r(typeof u == "object" ? { ...u, teleportMeta: c } : u, i)
    ));
  }
  if (Array.isArray(e))
    return e.length === 0 ? a ? a() : null : /* @__PURE__ */ s.createElement(s.Fragment, null, e.map((n, c) => r(n, c)));
};
export {
  w as DangerousHTML,
  H as DataProvider,
  T as DateTimePrimitive,
  S as Repeater
};
