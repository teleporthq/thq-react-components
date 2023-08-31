import y from "dayjs";
import r, { useRef as f, useEffect as E, useState as d } from "react";
const w = ({ date: t, format: e }) => {
  const n = y.unix(new Date(t).getTime() / 1e3), a = y(n).format(e);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, a);
}, H = ({ html: t }) => {
  const e = f(null);
  return E(() => {
    if (!t || !e.current)
      return;
    const n = document.createRange().createContextualFragment(t);
    e.current.append(n);
  }, []), /* @__PURE__ */ r.createElement("div", { style: { display: "contents" }, ref: e });
}, S = (t) => {
  const {
    fetchData: e,
    params: n,
    initialData: a,
    persistDataDuringLoading: s = !1,
    renderLoading: c,
    renderSuccess: u,
    renderError: l
  } = t, [h, i] = d("idle"), [o, g] = d(a), [F, v] = d(null), D = f(t.initialData !== void 0), p = f(s);
  switch (p.current = s, E(() => {
    if (D.current) {
      D.current = !1;
      return;
    }
    (async () => {
      i("loading"), p.current || g(void 0);
      try {
        const m = await e(n);
        g(m), i("success");
      } catch (m) {
        v(m), i("error");
      }
    })();
  }, [n, e]), h) {
    case "idle":
    case "loading":
      return t.persistDataDuringLoading && o ? u(o, !0) : c ? c() : null;
    case "success":
      return u(o, !1);
    case "error":
      return l(F);
    default:
      return null;
  }
}, j = (t) => {
  const { items: e, renderItem: n, renderEmpty: a } = t;
  if ("data" in e && "meta" in e) {
    const { data: s, meta: c } = e;
    return s.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, s.map(
      (u, l) => n(typeof u == "object" ? { ...u, teleportMeta: c } : u, l)
    ));
  }
  if (Array.isArray(e))
    return e.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, e.map((s, c) => n(s, c)));
}, L = ({ src: t, description: e }) => /* @__PURE__ */ r.createElement(r.Fragment, null, t && /* @__PURE__ */ r.createElement(
  "img",
  {
    loading: "lazy",
    src: t,
    alt: e ?? ""
  }
)), x = ({ node: t, children: e }) => t.attrs.src ? /* @__PURE__ */ r.createElement(L, { ...t.attrs }) : /* @__PURE__ */ r.createElement(r.Fragment, null, e);
export {
  x as CaisyDocumentLink,
  H as DangerousHTML,
  S as DataProvider,
  w as DateTimePrimitive,
  j as Repeater
};
