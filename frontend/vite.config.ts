import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDevelopment = mode === 'development' || process.env.NODE_ENV === 'development';

  return {
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
    },
    plugins: [
      react(),
      // Add development-only plugins
      isDevelopment && {
        name: 'dev-mode-plugin',
        configureServer(server) {
          console.log('Running in development mode');
        }
      }
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production')
    },
    build: {
      outDir: 'dist',
      sourcemap: isDevelopment,
      minify: !isDevelopment,
    },
  };
});
