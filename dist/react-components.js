import y from "dayjs";
import r, { useRef as f, useEffect as E, useState as d } from "react";
const S = ({ date: e, format: t }) => {
  const n = y.unix(new Date(e).getTime() / 1e3), a = y(n).format(t);
  return /* @__PURE__ */ r.createElement(r.Fragment, null, a);
}, T = ({ html: e }) => {
  const t = f(null);
  return E(() => {
    if (!e || !t.current)
      return;
    const n = document.createRange().createContextualFragment(e);
    t.current.append(n);
  }, []), /* @__PURE__ */ r.createElement("div", { style: { display: "contents" }, ref: t });
}, $ = (e) => {
  const {
    fetchData: t,
    params: n,
    initialData: a,
    persistDataDuringLoading: s = !1,
    renderLoading: c,
    renderSuccess: u,
    renderError: l
  } = e, [h, i] = d("idle"), [o, g] = d(a), [w, F] = d(null), D = f(e.initialData !== void 0), p = f(s);
  switch (p.current = s, E(() => {
    if (D.current) {
      D.current = !1;
      return;
    }
    (async () => {
      i("loading"), p.current || g(void 0);
      try {
        const m = await t(n);
        g(m), i("success");
      } catch (m) {
        F(m), i("error");
      }
    })();
  }, [n, t]), h) {
    case "idle":
    case "loading":
      return e.persistDataDuringLoading && o ? u(o, !0) : c ? c() : null;
    case "success":
      return u(o, !1);
    case "error":
      return l(w);
    default:
      return null;
  }
}, H = (e) => {
  const { items: t, renderItem: n, renderEmpty: a } = e;
  if ("data" in t && "meta" in t) {
    const { data: s, meta: c } = t;
    return s.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, s.map(
      (u, l) => n(typeof u == "object" ? { ...u, teleportMeta: c } : u, l)
    ));
  }
  if (Array.isArray(t))
    return t.length === 0 ? a ? a() : null : /* @__PURE__ */ r.createElement(r.Fragment, null, t.map((s, c) => n(s, c)));
}, v = ({ src: e, description: t }) => /* @__PURE__ */ r.createElement(r.Fragment, null, e && /* @__PURE__ */ r.createElement(
  "img",
  {
    loading: "lazy",
    src: `${e}?w=1920&h=960`,
    srcSet: `${e}?w=3840&h=1920 1920w, ${e}?w=1920&h=960 1280w, ${e}?w=1280&h=640 640w`,
    alt: t ?? ""
  }
)), j = ({ node: e, children: t }) => e.attrs.src ? /* @__PURE__ */ r.createElement(v, { ...e.attrs }) : /* @__PURE__ */ r.createElement(r.Fragment, null, t);
export {
  j as CaisyDocumentLink,
  T as DangerousHTML,
  $ as DataProvider,
  S as DateTimePrimitive,
  H as Repeater
};
