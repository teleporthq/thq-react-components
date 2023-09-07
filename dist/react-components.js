import p from "dayjs";
import r, { useRef as d, useEffect as E, useState as f } from "react";
const w = ({ date: t, format: e }) => {
  const n = p.unix(new Date(t).getTime() / 1e3), a = p(n).format(e);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, a);
}, H = ({ html: t }) => {
  const e = d(null);
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
    renderLoading: l = () => null,
    renderSuccess: c,
    renderError: u = () => null
  } = t, [h, i] = f("idle"), [o, g] = f(a), [A, F] = f(null), D = d(
    t.initialData !== void 0
  ), y = d(s);
  switch (y.current = s, E(() => {
    if (D.current) {
      D.current = !1;
      return;
    }
    (async () => {
      i("loading"), y.current || g(void 0);
      try {
        const m = await e(n);
        g(m), i("success");
      } catch (m) {
        F(m), i("error");
      }
    })();
  }, [n, e]), h) {
    case "idle":
    case "loading":
      return t.persistDataDuringLoading && o ? c(o, !0) : l();
    case "success":
      return c(o, !1);
    case "error":
      return u(A);
    default:
      return null;
  }
}, j = (t) => {
  const { items: e, renderItem: n, renderEmpty: a } = t;
  if ("data" in e && "meta" in e) {
    const { data: s, meta: l } = e;
    return Array.isArray(s) === !1 ? null : s.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, s.map(
      (c, u) => n(typeof c == "object" ? { ...c, teleportMeta: l } : c, u)
    ));
  }
  return Array.isArray(e) ? e.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, e.map((s, l) => n(s, l))) : null;
}, v = ({ src: t, description: e }) => /* @__PURE__ */ r.createElement(r.Fragment, null, t && /* @__PURE__ */ r.createElement(
  "img",
  {
    loading: "lazy",
    src: t,
    alt: e ?? ""
  }
)), x = ({ node: t, children: e }) => t.attrs.src ? /* @__PURE__ */ r.createElement(v, { ...t.attrs }) : /* @__PURE__ */ r.createElement(r.Fragment, null, e);
export {
  x as CaisyDocumentLink,
  H as DangerousHTML,
  S as DataProvider,
  w as DateTimePrimitive,
  j as Repeater
};
