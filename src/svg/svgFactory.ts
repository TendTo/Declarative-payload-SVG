import { SVGComponent, SVGComponentAttr } from './svgComponent';
import { SVGComponentRoot } from './svgComponentRoot';

export class SVGFactory {
  private _components: SVGComponent[] = [];

  public get components() {
    return this._components;
  }

  public get componentCount() {
    return this._components.length;
  }

  public add(component: SVGComponent) {
    this._components.push(component);
  }

  public remove(component: SVGComponent) {
    const index = this._components.indexOf(component);
    if (index > -1) {
      this._components.splice(index, 1);
    }
  }

  public draw(rootElement: HTMLElement, className?: string, attr?: SVGComponentAttr) {
    const svg = new SVGComponentRoot(className, attr).element;
    this._components.forEach((component) => {
      svg.appendChild(component.element);
    });
    rootElement.appendChild(svg);
  }
}
