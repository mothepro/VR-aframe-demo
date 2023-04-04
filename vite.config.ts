import { defineConfig } from 'vite'

export default defineConfig({
  // Define the base URL for our application
  base: '/',
  
  // build: {
  //   rollupOptions: {
  //     output: {
  //       // Tell Rollup to include external dependencies in the final build
  //       // instead of bundling them with our code
  //       inlineDynamicImports: true,
  //     },
  //   },

  //   // Add a Vite plugin to modify the HTML template during production builds
  //   html: {
  //     minify: true,
  //     transform: (content, _) => {
  //       // During production builds, update all script tags that don't have a "data-vite-asset-url" attribute
  //       if (process.env.NODE_ENV === 'production') {
  //         content = content.replace(
  //           /<script(?!.*data-vite-asset-url).*src="(.*?)"><\/script>/g,
  //           `<script data-vite-asset-url $1 defer></script>`
  //         )
  //       }

  //       // Return the modified HTML
  //       return {
  //         code: content,
  //       }
  //     },
  //   },
  // },

  // // Use the "unpkg.com" CDN as the asset URL during production builds
  // optimizeDeps: {
  //   include: ['react', 'react-dom'],
  //   entries: ['index.html'],
  //   // cdn: {
  //   //   // Replace the default CDN URL with unpkg.com
  //   //   url: 'https://unpkg.com',
  //   // },
  // },
})
