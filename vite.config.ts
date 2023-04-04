import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  appType: 'spa',
  build: {
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['aframe'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          aframe: 'AFRAME',
        },
      },
    },
  },
})
