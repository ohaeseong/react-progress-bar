import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: './src/index.ts',
    output: {
      file: './build/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      resolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }),
      typescript({
        tsconfig: './tsconfig.json',
      })
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime']
  };