(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["scroll-reveal"] = factory());
})(this, function() {
  "use strict";
  const DEV_COMPONENT_TAG_NAME = "animate-on-reveal";
  const _AnimateOnElementReveal = class _AnimateOnElementReveal2 extends HTMLElement {
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
          _AnimateOnElementReveal2
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
  return AnimateOnElementReveal;
});
