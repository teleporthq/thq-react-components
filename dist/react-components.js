import p from "dayjs";
import r, { useRef as f, useEffect as y, useState as m } from "react";
const H = ({ date: e, format: t }) => {
  const n = p.unix(new Date(e).getTime() / 1e3), a = p(n).format(t);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, a);
}, S = ({ html: e }) => {
  const t = f(null);
  return y(() => {
    if (!e || !t.current)
      return;
    const n = document.createRange().createContextualFragment(e);
    t.current.append(n);
  }, []), /* @__PURE__ */ r.createElement("div", { style: { display: "contents" }, ref: t });
}, j = (e) => {
  const {
    fetchData: t,
    params: n,
    initialData: a,
    persistDataDuringLoading: s = !1,
    renderLoading: c = () => null,
    renderSuccess: l,
    renderError: u = () => null
  } = e, [h, o] = m("idle"), [v, d] = m(a), [A, E] = m(null), g = f(
    e.initialData !== void 0
  ), D = f(s);
  return D.current = s, y(() => {
    if (g.current) {
      g.current = !1;
      return;
    }
    (async () => {
      o("loading"), D.current || d(void 0);
      try {
        const i = await t(n);
        d(i), o("success");
      } catch (i) {
        E(i), o("error");
      }
    })();
  }, [n, t]), null;
}, w = (e) => {
  const { items: t, renderItem: n, renderEmpty: a } = e;
  if ("data" in t && "meta" in t) {
    const { data: s, meta: c } = t;
    return s.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, s.map(
      (l, u) => n(typeof l == "object" ? { ...l, teleportMeta: c } : l, u)
    ));
  }
  return Array.isArray(t) ? t.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, t.map((s, c) => n(s, c))) : null;
}, F = ({ src: e, description: t }) => /* @__PURE__ */ r.createElement(r.Fragment, null, e && /* @__PURE__ */ r.createElement(
  "img",
  {
    loading: "lazy",
    src: e,
    alt: t ?? ""
  }
)), x = ({ node: e, children: t }) => e.attrs.src ? /* @__PURE__ */ r.createElement(F, { ...e.attrs }) : /* @__PURE__ */ r.createElement(r.Fragment, null, t);
export {
  x as CaisyDocumentLink,
  S as DangerousHTML,
  j as DataProvider,
  H as DateTimePrimitive,
  w as Repeater
};
