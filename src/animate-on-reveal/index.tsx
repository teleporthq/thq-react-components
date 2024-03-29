import "./style.css";
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
    "iteration",
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
  private nodeToObserve: HTMLElement | null;

  constructor() {
    super();
    if (!this.firstElementChild) {
      return;
    }
    this.nodeToObserve = this.findObservableNodeFromTree(
      this.firstElementChild,
    );
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
    this.style.display = "contents";
  }

  connectedCallback() {
    if (!this.nodeToObserve) {
      return;
    }
    this.nodeToObserve.style.animationPlayState = "paused";
    this.intersectionObserver.observe(this.nodeToObserve);
  }

  disconnectedCallback() {
    this.intersectionObserver.disconnect();
  }

  findObservableNodeFromTree(node: Element) {
    const style = window.getComputedStyle(node);
    if (style.getPropertyValue("display") !== "contents") {
      return node;
    }

    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      const descendant = this.findObservableNodeFromTree(children[i]);
      if (descendant) {
        return descendant;
      }
    }

    return null;
  }

  attributeChangedCallback(name) {
    switch (name) {
      case "animation":
        this.nodeToObserve.style.animationName =
          this.getAttribute("animation") || "";
        break;
      case "duration":
        this.nodeToObserve.style.animationDuration =
          this.getAttribute(name) || "0s";
        break;
      case "delay":
        this.nodeToObserve.style.animationDelay =
          this.getAttribute(name) || "0s";
        break;
      case "easing":
        this.nodeToObserve.style.animationTimingFunction =
          this.getAttribute(name) || "ease";
        break;
      case "iteration":
        this.nodeToObserve.style.animationIterationCount =
          this.getAttribute(name) || "1";
        break;
      case "direction":
        this.nodeToObserve.style.animationDirection =
          this.getAttribute(name) || "normal";
        break;
      case "revealed":
        this.nodeToObserve.style.animationPlayState = this.hasAttribute(
          "revealed",
        )
          ? "running"
          : "paused";
        break;
      default:
        break;
    }
  }
}

AnimateOnElementReveal.registerSelf();
export default AnimateOnElementReveal;
