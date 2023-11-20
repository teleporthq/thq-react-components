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
  return ScrollRevealElement;
});
