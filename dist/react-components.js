import dayjs from 'dayjs';
import React, { useRef, useEffect, useState } from 'react';

const style = '';

const DateTimePrimitive = ({ date, format }) => {
  const dateTime = dayjs.unix(new Date(date).getTime() / 1e3);
  const formattedDate = dayjs(dateTime).format(format);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, formattedDate);
};

const DangerousHTML = ({ html }) => {
  const ref = useRef(null);
  useEffect(() => {
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
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const passFetchBecauseWeHaveInitialData = useRef(
    props.initialData !== void 0
  );
  const persistDataDuringLoadingRef = useRef(persistDataDuringLoading);
  persistDataDuringLoadingRef.current = persistDataDuringLoading;
  useEffect(() => {
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

const DEV_COMPONENT_TAG_NAME = "animate-on-reveal";
const _AnimateOnElementReveal = class _AnimateOnElementReveal extends HTMLElement {
  constructor() {
    super();
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.firstChildReveal(true);
          } else {
            this.firstChildReveal(false);
          }
        });
      },
      { threshold: 0.5 }
    );
    this.style.display = "contents";
  }
  static registerSelf() {
    if (!window.customElements.get(DEV_COMPONENT_TAG_NAME)) {
      window.customElements.define(
        DEV_COMPONENT_TAG_NAME,
        _AnimateOnElementReveal
      );
    }
  }
  connectedCallback() {
    this.intersectionObserver.observe(this);
  }
  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    const firstChild = this.firstElementChild;
    switch (name) {
      case "animation":
        if (newValue) {
          firstChild.style.animationName = newValue;
        }
        break;
      case "duration":
        firstChild.style.animationDuration = newValue || "0s";
        break;
      case "delay":
        firstChild.style.animationDelay = newValue || "0s";
        break;
      case "easing":
        firstChild.style.animationTimingFunction = newValue || "ease";
        break;
      case "iteration":
        firstChild.style.animationIterationCount = newValue || "1";
        break;
      case "direction":
        firstChild.style.animationDirection = newValue || "normal";
        break;
      case "revealed":
        firstChild.style.animationPlayState = newValue ? "running" : "paused";
        break;
    }
  }
  firstChildReveal(revealed) {
    const firstChild = this.firstElementChild;
    if (firstChild) {
      if (revealed) {
        firstChild.setAttribute("revealed", "");
      } else {
        firstChild.removeAttribute("revealed");
      }
    }
  }
};
_AnimateOnElementReveal.observedAttributes = [
  "animation",
  "duration",
  "delay",
  "direction",
  "easing",
  "revealed",
  "class",
  "classname",
  "iteration"
];
let AnimateOnElementReveal = _AnimateOnElementReveal;
AnimateOnElementReveal.registerSelf();

export { AnimateOnElementReveal, CMSMixedType, CaisyDocumentLink, DangerousHTML, DataProvider, DateTimePrimitive, Repeater };
