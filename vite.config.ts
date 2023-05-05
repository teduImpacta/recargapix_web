import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svg from "vite-plugin-svgr";
import http from "http";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [react(), svg()],
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "src"),
            },
        },
        server: {
            proxy: {
                "/api": {
                    target: env.API_URL,
                    changeOrigin: true,
                    secure: false,
                    agent: new http.Agent(),
                    preserveHeaderKeyCase: true,
                    rewrite: (path) => path.replace(/^\/api/, ""),
                },
            },
        },
    };
});
