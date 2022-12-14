import { SVGComponent, SVGComponentAttr } from './svgComponent';

export class SVGComponentCircle extends SVGComponent {
  public constructor(className?: string, attr?: SVGComponentAttr) {
    super('circle', className, attr);
  }
}
