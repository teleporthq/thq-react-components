import E from "dayjs";
import a, { useRef as f, useEffect as T, useState as d } from "react";
const M = ({ date: e, format: t }) => {
  const r = E.unix(new Date(e).getTime() / 1e3), s = E(r).format(t);
  return /* @__PURE__ */ a.createElement(a.Fragment, null, s);
}, S = ({ html: e }) => {
  const t = f(null);
  return T(() => {
    if (!e || !t.current)
      return;
    const r = document.createRange().createContextualFragment(e);
    t.current.append(r);
  }, []), /* @__PURE__ */ a.createElement("div", { style: { display: "contents" }, ref: t });
}, x = (e) => {
  const {
    fetchData: t,
    params: r,
    initialData: s,
    persistDataDuringLoading: n = !1,
    renderLoading: u = () => null,
    renderSuccess: c,
    renderError: l = () => null
  } = e, [D, o] = d("idle"), [i, y] = d(s), [h, F] = d(null), p = f(
    e.initialData !== void 0
  ), g = f(n);
  switch (g.current = n, T(() => {
    if (p.current) {
      p.current = !1;
      return;
    }
    (async () => {
      o("loading"), g.current || y(void 0);
      try {
        const m = await t(r);
        y(m), o("success");
      } catch (m) {
        F(m), o("error");
      }
    })();
  }, [r, t]), D) {
    case "idle":
    case "loading":
      return e.persistDataDuringLoading && i ? c(i, !0) : u();
    case "success":
      return c(i, !1);
    case "error":
      return l(h);
    default:
      return null;
  }
}, B = (e) => {
  const { items: t, renderItem: r, renderEmpty: s } = e;
  if ("data" in t && "meta" in t) {
    const { data: n, meta: u } = t;
    return Array.isArray(n) === !1 ? null : n.length === 0 ? s ? s() : null : /* @__PURE__ */ a.createElement(a.Fragment, null, n.map(
      (c, l) => r(typeof c == "object" ? { ...c, teleportMeta: u } : c, l)
    ));
  }
  return Array.isArray(t) ? t.length === 0 ? s ? s() : null : /* @__PURE__ */ a.createElement(a.Fragment, null, t.map((n, u) => r(n, u))) : null;
}, R = ({ src: e, description: t }) => /* @__PURE__ */ a.createElement(a.Fragment, null, e && /* @__PURE__ */ a.createElement(
  "img",
  {
    loading: "lazy",
    src: e,
    alt: t ?? ""
  }
)), H = ({ node: e, children: t }) => e.attrs.src ? /* @__PURE__ */ a.createElement(R, { ...e.attrs }) : /* @__PURE__ */ a.createElement(a.Fragment, null, t), b = (e, t) => t?.components?.[e.subType] ? [
  !0,
  t.components[e.subType]?.(e.attributes)
] : [!1], A = (e, t) => t.contentTypes?.[e.subType] ? [
  !0,
  t.contentTypes[e.subType]?.(e.attributes)
] : [!1], j = ({ itemData: e, mappingConfiguration: t, renderDefault: r, renderError: s }) => {
  try {
    const n = e.type === "component" ? b(e, t) : A(e, t);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, n[0] ? n[1] ?? null : r ? r(e) : "default case");
  } catch (n) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, s ? s(n) : "error case");
  }
};
export {
  j as CMSMixedType,
  H as CaisyDocumentLink,
  S as DangerousHTML,
  x as DataProvider,
  M as DateTimePrimitive,
  B as Repeater
};
