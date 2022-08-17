import vue from '@vitejs/plugin-vue'
import { defineConfig, UserConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import typescript2 from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'

const config: UserConfig = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['vue'],
  },
  plugins: [
    vue(),
    {
      ...typescript2({
        tsconfigOverride: { compilerOptions: { declaration: true } },
      }),
      apply: 'build',
      enforce: 'pre',
    },
    viteStaticCopy({
      targets: [
        { src: './src/utils', dest: '' },
        { src: './src/styles', dest: '' },
      ],
    }),
    nodeResolve(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Lr',
      fileName: format => (format === 'cjs' ? 'lrui.cjs' : `lrui.${format}.js`),
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          globals: {
            vue: 'Vue',
          },
        },
        {
          globals: {
            vue: 'Vue',
          },
          inlineDynamicImports: true,
          format: 'umd',
        },
        {
          globals: {
            vue: 'Vue',
          },
          inlineDynamicImports: true,
          format: 'cjs',
        },
      ],
    },
  },
}

export default defineConfig(config)
