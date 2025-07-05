// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
        },
    },
    server: {
        port: 3000,
        open: true,
        cors: true,
    },
    build: {
        outDir: "dist",
        sourcemap: true,
        // Optimize bundle size
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom"],
                    utils: ["axios", "lucide-react"],
                },
            },
        },
    },
    // Environment variables
    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
});
