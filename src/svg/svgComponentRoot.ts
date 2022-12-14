import { SVGComponent, SVGComponentAttr } from './svgComponent';

export class SVGComponentRoot extends SVGComponent {
  public constructor(className?: string, attr?: SVGComponentAttr) {
    super('svg', className, attr);
  }
}
