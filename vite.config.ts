import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    setupFiles: ['./__test__/test-setup.ts'],
    environment: 'jsdom',
    includeSource: ['src/**/*.{ts,tsx}'],
    coverage: {
      reporter: ['text-summary', 'text'],
    },
    mockReset: true,
    restoreMocks: true,
    deps: {
      inline: [/styled-components/],
    },
    // alias: [{ find: /^styled-components/, replacement: './node_modules/.pnpm/styled-components@6.0.0-rc.3/node_modules/styled-components/dist/styled-components.esm.js' }]
  },
})
