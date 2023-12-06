const DEV_COMPONENT_TAG_NAME = "animate-on-reveal";

class AnimateOnElementReveal extends HTMLElement {
  static observedAttributes: string[] = [
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

  static registerSelf() {
    if (!window.customElements.get(DEV_COMPONENT_TAG_NAME)) {
      window.customElements.define(
        DEV_COMPONENT_TAG_NAME,
        AnimateOnElementReveal,
      );
    }
  }

  private intersectionObserver: IntersectionObserver;

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
      { threshold: 0.5 },
    );
  }

  connectedCallback(): void {
    this.style.animationPlayState = "paused";

    this.intersectionObserver.observe(this);
  }

  disconnectedCallback(): void {
    this.intersectionObserver.disconnect();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
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

      case "iteration":
        this.style.animationIterationCount = this.getAttribute(name) || "1";
        break;

      case "direction":
        this.style.animationDirection = this.getAttribute(name) || "normal";
        break;

      case "revealed":
        this.style.animationPlayState = this.hasAttribute("revealed")
          ? "running"
          : "paused";
        break;

      case "classname":
        if (oldValue) {
          this.classList.remove(oldValue);
        }
        if (newValue) {
          const classNames = newValue.split(' ');

          classNames.forEach(className => {
            this.classList.add(className);
          });
        }
        break;

      default:
        break;
    }
  }
}

AnimateOnElementReveal.registerSelf();
export default AnimateOnElementReveal;
