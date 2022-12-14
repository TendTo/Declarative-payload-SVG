import { SVGComponent, SVGComponentAttr } from './svgComponent';

export class SVGComponentRect extends SVGComponent {
  public constructor(className?: string, attr?: SVGComponentAttr) {
    super('rect', className, attr);
  }
}
