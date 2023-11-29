(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["scroll-reveal"] = factory());
})(this, function() {
  "use strict";
  const DEV_COMPONENT_TAG_NAME = "reveal-on-scroll";
  const _RevealOnScrollElement = class _RevealOnScrollElement2 extends HTMLElement {
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
        window.customElements.define(
          DEV_COMPONENT_TAG_NAME,
          _RevealOnScrollElement2
        );
      }
    }
    connectedCallback() {
      this.style.animationPlayState = "paused";
      this.intersectionObserver.observe(this);
    }
    disconnectedCallback() {
      this.intersectionObserver.disconnect();
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "animation":
          if (this.getAttribute(name)) {
            this.style.animationName = this.getAttribute("animation");
          }
          break;
        case "duration":
          this.style.animationDuration = this.getAttribute(name) || "0s";
          break;
        case "delay":
          this.style.animationDelay = this.getAttribute(name) || "0s";
          break;
        case "easing":
          this.style.animationTimingFunction = this.getAttribute(name) || "ease";
          break;
        case "direction":
          this.style.animationDirection = this.getAttribute(name) || "normal";
          break;
        case "revealed":
          this.style.animationPlayState = this.hasAttribute("revealed") ? "running" : "paused";
          break;
        case "classname":
          if (oldValue) {
            this.classList.remove(oldValue);
          }
          if (newValue) {
            this.classList.add(newValue);
          }
          break;
      }
    }
  };
  _RevealOnScrollElement.observedAttributes = [
    "animation",
    "duration",
    "delay",
    "direction",
    "easing",
    "revealed",
    "class",
    "classname"
  ];
  let RevealOnScrollElement = _RevealOnScrollElement;
  RevealOnScrollElement.registerSelf();
  return RevealOnScrollElement;
});
