import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: 'src/main.ts',
      fileName: 'index',
      name: 'TypeScript Action template',
      formats: ['es'],
    },
  },
});
