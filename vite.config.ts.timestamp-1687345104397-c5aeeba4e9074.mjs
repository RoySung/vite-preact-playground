// vite.config.ts
import { defineConfig } from "file:///Users/roytsai/projects/test/vite-preact-playground/node_modules/.pnpm/vite@4.3.8/node_modules/vite/dist/node/index.js";
import preact from "file:///Users/roytsai/projects/test/vite-preact-playground/node_modules/.pnpm/@preact+preset-vite@2.5.0_preact@10.15.1+vite@4.3.8/node_modules/@preact/preset-vite/dist/esm/index.mjs";
var vite_config_default = defineConfig({
  plugins: [preact()],
  test: {
    globals: true,
    setupFiles: ["./__test__/test-setup.ts"],
    environment: "happy-dom",
    includeSource: ["src/**/*.{ts,tsx}"],
    coverage: {
      reporter: ["text-summary", "text"]
    },
    mockReset: true,
    restoreMocks: true,
    deps: {
      inline: ["styled-components"]
    }
    // alias: [{ find: /^styled-components/, replacement: './node_modules/.pnpm/styled-components@6.0.0-rc.3/node_modules/styled-components/dist/styled-components.esm.js' }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcm95dHNhaS9wcm9qZWN0cy90ZXN0L3ZpdGUtcHJlYWN0LXBsYXlncm91bmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yb3l0c2FpL3Byb2plY3RzL3Rlc3Qvdml0ZS1wcmVhY3QtcGxheWdyb3VuZC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcm95dHNhaS9wcm9qZWN0cy90ZXN0L3ZpdGUtcHJlYWN0LXBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHByZWFjdCBmcm9tICdAcHJlYWN0L3ByZXNldC12aXRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3ByZWFjdCgpXSxcbiAgdGVzdDoge1xuICAgIGdsb2JhbHM6IHRydWUsXG4gICAgc2V0dXBGaWxlczogWycuL19fdGVzdF9fL3Rlc3Qtc2V0dXAudHMnXSxcbiAgICBlbnZpcm9ubWVudDogJ2hhcHB5LWRvbScsXG4gICAgaW5jbHVkZVNvdXJjZTogWydzcmMvKiovKi57dHMsdHN4fSddLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICByZXBvcnRlcjogWyd0ZXh0LXN1bW1hcnknLCAndGV4dCddLFxuICAgIH0sXG4gICAgbW9ja1Jlc2V0OiB0cnVlLFxuICAgIHJlc3RvcmVNb2NrczogdHJ1ZSxcbiAgICBkZXBzOiB7XG4gICAgICBpbmxpbmU6IFtcInN0eWxlZC1jb21wb25lbnRzXCJdLFxuICAgIH0sXG4gICAgLy8gYWxpYXM6IFt7IGZpbmQ6IC9ec3R5bGVkLWNvbXBvbmVudHMvLCByZXBsYWNlbWVudDogJy4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlZC1jb21wb25lbnRzQDYuMC4wLXJjLjMvbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuZXNtLmpzJyB9XVxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlUsU0FBUyxvQkFBb0I7QUFDeFcsT0FBTyxZQUFZO0FBR25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQSxFQUNsQixNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxZQUFZLENBQUMsMEJBQTBCO0FBQUEsSUFDdkMsYUFBYTtBQUFBLElBQ2IsZUFBZSxDQUFDLG1CQUFtQjtBQUFBLElBQ25DLFVBQVU7QUFBQSxNQUNSLFVBQVUsQ0FBQyxnQkFBZ0IsTUFBTTtBQUFBLElBQ25DO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxjQUFjO0FBQUEsSUFDZCxNQUFNO0FBQUEsTUFDSixRQUFRLENBQUMsbUJBQW1CO0FBQUEsSUFDOUI7QUFBQTtBQUFBLEVBRUY7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
