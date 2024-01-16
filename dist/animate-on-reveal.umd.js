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
              this.setAttribute("revealed", "");
            } else {
              this.removeAttribute("revealed");
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
      const firstChild = this.firstElementChild;
      if (firstChild) {
        firstChild.style.animationPlayState = "paused";
      }
      this.intersectionObserver.observe(this.firstElementChild);
    }
    disconnectedCallback() {
      this.intersectionObserver.disconnect();
    }
    attributeChangedCallback(name) {
      const firstChild = this.firstElementChild;
      switch (name) {
        case "animation":
          if (this.getAttribute(name)) {
            firstChild.style.animationName = this.getAttribute("animation");
          }
          break;
        case "duration":
          firstChild.style.animationDuration = this.getAttribute(name) || "0s";
          break;
        case "delay":
          firstChild.style.animationDelay = this.getAttribute(name) || "0s";
          break;
        case "easing":
          firstChild.style.animationTimingFunction = this.getAttribute(name) || "ease";
          break;
        case "iteration":
          firstChild.style.animationIterationCount = this.getAttribute(name) || "1";
          break;
        case "direction":
          firstChild.style.animationDirection = this.getAttribute(name) || "normal";
          break;
        case "revealed":
          firstChild.style.animationPlayState = this.hasAttribute("revealed") ? "running" : "paused";
          break;
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
