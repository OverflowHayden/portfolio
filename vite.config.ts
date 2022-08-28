import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    root: path.resolve(process.cwd()),
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [],
    define: {
        'global': {},
    },
    optimizeDeps: {},
    build: {
        outDir: 'dist',
    },
});
