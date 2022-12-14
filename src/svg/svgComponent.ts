export type SVGComponentAttr = {
  [key: string]: string;
};

export class SVGComponent {
  protected _element?: SVGElement;
  public readonly type: string;
  public readonly attr: SVGComponentAttr;
  public readonly className?: string;

  public constructor(type: string, className?: string, attr?: SVGComponentAttr) {
    this.type = type;
    this.className = className;
    this.attr = attr ?? {};
  }

  get element() {
    if (!this._element) {
      this._element = this.createSVGComponent();
    }
    return this._element;
  }

  public createSVGComponent() {
    const element = document.createElementNS('http://www.w3.org/2000/svg', this.type);
    if (this.className) {
      element.setAttributeNS(null, 'class', this.className);
    }
    Object.keys(this.attr).forEach((k) => {
      const value = this.attr[k];
      const key = k === k.toLowerCase() ? k : k.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`);
      element.setAttributeNS(null, key, value);
    });
    return element;
  }
}
