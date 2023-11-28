const DEV_COMPONENT_TAG_NAME = 'scroll-reveal'


class ScrollRevealElement extends HTMLElement {
  static observedAttributes: string[] = [
    'animation',
    'duration',
    'delay',
    'revealed',
    'class',
    'classname',
  ];

  static registerSelf() {
    if (!window.customElements.get(DEV_COMPONENT_TAG_NAME)) {
      window.customElements.define(DEV_COMPONENT_TAG_NAME, ScrollRevealElement)
    }
  }


  private intersectionObserver: IntersectionObserver;

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
    this.style.animationPlayState = 'paused';

    this.intersectionObserver.observe(this);
  }

  disconnectedCallback(): void {
    this.intersectionObserver.disconnect();
  }

  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null
  ): void {
    switch (name) {
      case 'animation':
        this.style.animationName = this.getAttribute('animation') || '';
        break;

      case 'duration':
        this.style.animationDuration = this.getAttribute(name) || '';
        break;
      case 'delay':
        this.style.animationDelay = this.getAttribute(name) || '';
        break;

      case 'revealed':
        this.style.animationPlayState = this.hasAttribute('revealed')
          ? 'running'
          : 'paused';
        break;

      case 'classname':
        if (oldValue) {
          this.classList.remove(oldValue);
        }
        if (newValue) {
          this.classList.add(newValue);
        }
        break;

      default:
        break;
    }
  }
}

ScrollRevealElement.registerSelf()
export default ScrollRevealElement
