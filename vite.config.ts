import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.',
    build: {
        outDir: 'portfolio/client-dist',
        emptyOutDir: true,
    },
    server: {
        middlewareMode: true,
    },
});
