import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import svgLoader from "vite-svg-loader";
import path from 'path';

export default defineConfig({
    server: {
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    includeAbsolute: false,
                    base: null,
                },
            },
        }),
        svgLoader(),
        laravel({
            buildDirectory: "app/client",
            input: [
                // Client
                'resources/client/app.js',
                'resources/client/assets/scss/main.scss',
                // Admin
                'resources/admin/js/admin.js',
            ],
            refresh: true,
            detectTls: 'inertia-vue.loc',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/client'),
            "~": path.join(__dirname, "/node_modules"),
        }
    },
});
