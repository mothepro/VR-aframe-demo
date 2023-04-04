import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'spa',
  base: '/VR-aframe-demo/',
  build: {
    rollupOptions: {
      input: './src/index.ts',
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['aframe'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          aframe: 'AFRAME',
        },
        // paths: {
        //   aframe: 'https://aframe.io/releases/1.4.0/aframe.min.js',
        // },
      },
    },
  },
})
