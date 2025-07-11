import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ fixed typo in import

export default defineConfig({
  plugins: [react()],
});

