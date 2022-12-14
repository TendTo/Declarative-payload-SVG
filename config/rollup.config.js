import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'iife',
      file: 'dist/bundle/dp-svg.min.js',
      name: 'DeclarativePayloadSvg',
      plugins: [terser()],
    },
    {
      format: 'iife',
      file: 'dist/bundle/dp-svg.js',
      name: 'DeclarativePayloadSvg',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
    },
    {
      dir: 'lib/cjs',
      format: 'cjs',
      preserveModules: true,
    },
    {
      dir: 'lib/esm',
      format: 'esm',
      preserveModules: true,
    },
  ],
  plugins: [
    typescript({
      declaration: false,
      module: 'esnext',
      declarationMap: false,
      declarationDir: undefined,
    }),
  ],
};
