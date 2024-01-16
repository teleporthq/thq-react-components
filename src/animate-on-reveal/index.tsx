const DEV_COMPONENT_TAG_NAME = 'animate-on-reveal';

class AnimateOnElementReveal extends HTMLElement {
  static observedAttributes: string[] = [
    'animation',
    'duration',
    'delay',
    'direction',
    'easing',
    'revealed',
    'class',
    'classname',
    'iteration',
  ];

  static registerSelf(): void {
    if (!window.customElements.get(DEV_COMPONENT_TAG_NAME)) {
      window.customElements.define(
        DEV_COMPONENT_TAG_NAME,
        AnimateOnElementReveal
      );
    }
  }

  private intersectionObserver: IntersectionObserver;

  constructor() {
    super();
    this.intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
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

  connectedCallback(): void {
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
    const firstChild = this.firstElementChild as HTMLElement;

    switch (name) {
      case 'animation':
        if (newValue) {
          firstChild.style.animationName = newValue;
        }
        break;

      case 'duration':
        firstChild.style.animationDuration = newValue || '0s';
        break;

      case 'delay':
        firstChild.style.animationDelay = newValue || '0s';
        break;

      case 'easing':
        firstChild.style.animationTimingFunction = newValue || 'ease';
        break;

      case 'iteration':
        firstChild.style.animationIterationCount = newValue || '1';
        break;

      case 'direction':
        firstChild.style.animationDirection = newValue || 'normal';
        break;

      case 'revealed':
        firstChild.style.animationPlayState = newValue ? 'running' : 'paused';
        break;

      default:
        break;
    }
  }

  private firstChildReveal(revealed: boolean): void {
    const firstChild = this.firstElementChild as HTMLElement;
    if (firstChild) {
      if (revealed) {
        firstChild.setAttribute('revealed', '');
      } else {
        firstChild.removeAttribute('revealed');
      }
    }
  }
}

AnimateOnElementReveal.registerSelf();
export default AnimateOnElementReveal;
