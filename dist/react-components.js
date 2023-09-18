import p from "dayjs";
import n, { useRef as f, useEffect as E, useState as d } from "react";
const I = ({ date: t, format: e }) => {
  const r = p.unix(new Date(t).getTime() / 1e3), a = p(r).format(e);
  return /* @__PURE__ */ n.createElement(n.Fragment, null, a);
}, M = ({ html: t }) => {
  const e = f(null);
  return E(() => {
    if (!t || !e.current)
      return;
    const r = document.createRange().createContextualFragment(t);
    e.current.append(r);
  }, []), /* @__PURE__ */ n.createElement("div", { style: { display: "contents" }, ref: e });
}, S = (t) => {
  const {
    fetchData: e,
    params: r,
    initialData: a,
    persistDataDuringLoading: c = !1,
    renderLoading: l = () => null,
    renderSuccess: s,
    renderError: u = () => null
  } = t, [R, i] = d("idle"), [o, g] = d(a), [F, h] = d(null), y = f(
    t.initialData !== void 0
  ), D = f(c);
  switch (D.current = c, E(() => {
    if (y.current) {
      y.current = !1;
      return;
    }
    (async () => {
      i("loading"), D.current || g(void 0);
      try {
        const m = await e(r);
        g(m), i("success");
      } catch (m) {
        h(m), i("error");
      }
    })();
  }, [r, e]), R) {
    case "idle":
    case "loading":
      return t.persistDataDuringLoading && o ? s(o, !0) : l();
    case "success":
      return s(o, !1);
    case "error":
      return u(F);
    default:
      return null;
  }
}, w = (t) => {
  const { items: e, renderItem: r, renderEmpty: a } = t;
  if ("data" in e && "meta" in e) {
    const { data: c, meta: l } = e;
    return Array.isArray(c) === !1 ? null : c.length === 0 ? a ? a() : null : /* @__PURE__ */ n.createElement(n.Fragment, null, c.map(
      (s, u) => r(typeof s == "object" ? { ...s, teleportMeta: l } : s, u)
    ));
  }
  return Array.isArray(e) ? e.length === 0 ? a ? a() : null : /* @__PURE__ */ n.createElement(n.Fragment, null, e.map((c, l) => r(c, l))) : null;
}, A = ({ src: t, description: e }) => /* @__PURE__ */ n.createElement(n.Fragment, null, t && /* @__PURE__ */ n.createElement(
  "img",
  {
    loading: "lazy",
    src: t,
    alt: e ?? ""
  }
)), x = ({ node: t, children: e }) => t.attrs.src ? /* @__PURE__ */ n.createElement(A, { ...t.attrs }) : /* @__PURE__ */ n.createElement(n.Fragment, null, e), H = ({ itemData: t, mappingConfiguration: e, renderDefault: r, renderError: a }) => {
  try {
    return e?.[t.typeId] ? /* @__PURE__ */ React.createElement(React.Fragment, null, e[t.typeId]?.(t.attributes) ?? null) : /* @__PURE__ */ React.createElement(React.Fragment, null, r ? r(t) : "default case");
  } catch (c) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, a ? a(c) : "error case");
  }
};
export {
  H as CMSMixedType,
  x as CaisyDocumentLink,
  M as DangerousHTML,
  S as DataProvider,
  I as DateTimePrimitive,
  w as Repeater
};
