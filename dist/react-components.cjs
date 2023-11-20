'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const dayjs = require('dayjs');
const React = require('react');

const DateTimePrimitive = ({ date, format }) => {
  const dateTime = dayjs.unix(new Date(date).getTime() / 1e3);
  const formattedDate = dayjs(dateTime).format(format);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, formattedDate);
};

const DangerousHTML = ({ html }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!html || !ref.current) {
      return;
    }
    const slotHtml = document.createRange().createContextualFragment(html);
    ref.current.append(slotHtml);
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { display: "contents" }, ref });
};

const DataProvider = (props) => {
  const {
    fetchData,
    params,
    initialData,
    persistDataDuringLoading = false,
    renderLoading = () => null,
    renderSuccess,
    renderError = () => null
  } = props;
  const [status, setStatus] = React.useState("idle");
  const [data, setData] = React.useState(initialData);
  const [error, setError] = React.useState(null);
  const passFetchBecauseWeHaveInitialData = React.useRef(
    props.initialData !== void 0
  );
  const persistDataDuringLoadingRef = React.useRef(persistDataDuringLoading);
  persistDataDuringLoadingRef.current = persistDataDuringLoading;
  React.useEffect(() => {
    if (passFetchBecauseWeHaveInitialData.current) {
      passFetchBecauseWeHaveInitialData.current = false;
      return;
    }
    const fetchDataAsync = async () => {
      setStatus("loading");
      if (!persistDataDuringLoadingRef.current) {
        setData(void 0);
      }
      try {
        const result = await fetchData(params);
        setData(result);
        setStatus("success");
      } catch (err) {
        setError(err);
        setStatus("error");
      }
    };
    fetchDataAsync();
  }, [params, fetchData]);
  switch (status) {
    case "idle":
    case "loading":
      return props.persistDataDuringLoading && data ? renderSuccess(data, true) : renderLoading();
    case "success":
      return renderSuccess(data, false);
    case "error":
      return renderError(error);
    default:
      return null;
  }
};

const Repeater = (props) => {
  const { items, renderItem, renderEmpty } = props;
  if ("data" in items && "meta" in items) {
    const { data, meta } = items;
    if (Array.isArray(data) === false) {
      return null;
    }
    if (data.length === 0) {
      return renderEmpty ? renderEmpty() : null;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, data.map(
      (item, index) => typeof item === "object" ? renderItem({ ...item, teleportMeta: meta }, index) : renderItem(item, index)
    ));
  }
  if (!Array.isArray(items)) {
    return null;
  }
  if (items.length === 0) {
    return renderEmpty ? renderEmpty() : null;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, items.map((item, index) => renderItem(item, index)));
};

const Asset = ({ src, description }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, src && /* @__PURE__ */ React.createElement(
    "img",
    {
      loading: "lazy",
      src,
      alt: description ?? ""
    }
  ));
};
const CaisyDocumentLink = ({ node, children }) => {
  if (node.attrs.src) {
    return /* @__PURE__ */ React.createElement(Asset, { ...node.attrs });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
};

const CMSMixedType = ({ itemData, mappingConfiguration, renderDefault, renderError }) => {
  try {
    if (mappingConfiguration?.[itemData.typeId]) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, mappingConfiguration[itemData.typeId]?.(itemData.attributes ?? itemData) ?? null);
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, renderDefault ? renderDefault(itemData) : "default case");
  } catch (err) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, renderError ? renderError(err) : "error case");
  }
};

const DEV_COMPONENT_TAG_NAME = "scroll-reveal";
const _ScrollRevealElement = class _ScrollRevealElement extends HTMLElement {
  constructor() {
    super();
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setAttribute("revealed", "");
          } else {
            this.removeAttribute("revealed");
          }
        });
      },
      { threshold: 0.5 }
    );
  }
  static registerSelf() {
    if (!window.customElements.get(DEV_COMPONENT_TAG_NAME)) {
      window.customElements.define(DEV_COMPONENT_TAG_NAME, _ScrollRevealElement);
    }
  }
  connectedCallback() {
    this.style.display = "block";
    this.style.animationPlayState = "paused";
    this.intersectionObserver.observe(this);
  }
  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }
  attributeChangedCallback(name) {
    if (name === "animation" || name === "duration" || name === "delay") {
      this.style.animationName = this.getAttribute("animation") || "";
      this.style.animationDuration = this.getAttribute("duration") || "";
      this.style.animationDelay = this.getAttribute("delay") || "";
    }
    if (name === "revealed") {
      if (this.hasAttribute("revealed")) {
        this.style.animationPlayState = "running";
      } else {
        this.style.animationPlayState = "paused";
      }
    }
  }
};
_ScrollRevealElement.observedAttributes = ["animation", "duration", "delay", "revealed"];
let ScrollRevealElement = _ScrollRevealElement;
ScrollRevealElement.registerSelf();

exports.CMSMixedType = CMSMixedType;
exports.CaisyDocumentLink = CaisyDocumentLink;
exports.DangerousHTML = DangerousHTML;
exports.DataProvider = DataProvider;
exports.DateTimePrimitive = DateTimePrimitive;
exports.Repeater = Repeater;
exports.ScrollReveal = ScrollRevealElement;
