import { wasm } from '@rollup/plugin-wasm';
import copy from 'rollup-plugin-copy'

//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'vercel-edge',
  // experimental: {
  //   wasm: true,
  // },
  esbuild: {
    options: {
      // This was needed to get React ro work
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
    },
  },
  rollupConfig: {
    // extner
    external: [
      './yoga.wasm?module',
      './resvg.wasm?module',
    ],
    plugins: [
      copy({
        targets: [
          { src: './node_modules/@vercel/og/dist/yoga.wasm', dest: './.vercel/output/functions/__nitro.func' },
          { src: './node_modules/@vercel/og/dist/resvg.wasm', dest: './.vercel/output/functions/__nitro.func' },
        ]
      })
      // wasm({
      //   sync: [
      //     '@vercel/og/dist/yoga.wasm?module',
      //     '@vercel/og/dist/resvg.wasm?module',
      //     // 'web/foobar.wasm'
      //   ]
      // }),

    ]
  }
})
