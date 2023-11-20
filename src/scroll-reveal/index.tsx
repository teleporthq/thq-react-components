export const DEV_COMPONENT_TAG_NAME = 'scroll-reveal'


class ScrollRevealElement extends HTMLElement {
  static observedAttributes: string[] = ['animation', 'duration', 'delay', 'revealed'];

  private intersectionObserver: IntersectionObserver;

  static registerSelf() {
    if (!window.customElements.get(DEV_COMPONENT_TAG_NAME)) {
      window.customElements.define(DEV_COMPONENT_TAG_NAME, ScrollRevealElement)
    }
  }

  constructor() {
    super();

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.setAttribute('revealed', '');
          } else {
            this.removeAttribute('revealed');
          }
        });
      },
      { threshold: 0.5 }
    );
  }

  connectedCallback(): void {
    this.style.display = 'block';
    this.style.animationPlayState = 'paused';

    this.intersectionObserver.observe(this);
  }

  disconnectedCallback(): void {
    this.intersectionObserver.disconnect();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'animation' || name === 'duration' || name === 'delay') {
      this.style.animationName = this.getAttribute('animation') || '';
      this.style.animationDuration = this.getAttribute('duration') || '';
      this.style.animationDelay = this.getAttribute('delay') || '';
    }

    if (name === 'revealed') {
      if (this.hasAttribute('revealed')) {
        this.style.animationPlayState = 'running';
      } else {
        this.style.animationPlayState = 'paused';
      }
    }
  }
}

ScrollRevealElement.registerSelf()
export default ScrollRevealElement
