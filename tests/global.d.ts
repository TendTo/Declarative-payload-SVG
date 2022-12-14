import type { SVGFactory } from '../src/index';

declare global {
  const DeclarativePayloadSvg: {
    // Import and add all the exports from the index file
    SVGFactory: typeof SVGFactory;
  };
}
