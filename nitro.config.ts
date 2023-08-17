//https://nitro.unjs.io/config
export default defineNitroConfig({
  preset: 'vercel-edge',
  experimental: {
    wasm: true,
  },
  esbuild: {
    options: {
      // This was needed to get React ro work
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
    },
  },
})
