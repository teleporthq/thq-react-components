(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["scroll-reveal"] = factory());
})(this, function() {
  "use strict";
  const DEV_COMPONENT_TAG_NAME = "scroll-reveal";
  const _ScrollRevealElement = class _ScrollRevealElement2 extends HTMLElement {
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
        window.customElements.define(DEV_COMPONENT_TAG_NAME, _ScrollRevealElement2);
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
          this.style.animationName = this.getAttribute("animation") || "";
          break;
        case "duration":
          this.style.animationDuration = this.getAttribute(name) || "";
          break;
        case "delay":
          this.style.animationDelay = this.getAttribute(name) || "";
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
  _ScrollRevealElement.observedAttributes = [
    "animation",
    "duration",
    "delay",
    "revealed",
    "class",
    "classname"
  ];
  let ScrollRevealElement = _ScrollRevealElement;
  ScrollRevealElement.registerSelf();
  return ScrollRevealElement;
});
