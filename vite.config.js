import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

// Custom plugin to persist user progress to disk for the PM Retention Coach Agent
const progressStoragePlugin = () => ({
  name: 'progress-storage-plugin',
  configureServer(server) {
    server.middlewares.use('/api/save-progress', (req, res) => {
      if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const dataDir = path.resolve('data');
            if (!fs.existsSync(dataDir)) {
              fs.mkdirSync(dataDir, { recursive: true });
            }
            fs.writeFileSync(
              path.join(dataDir, 'user_stats.json'),
              body,
              'utf-8'
            );
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      } else {
        res.statusCode = 404;
        res.end();
      }
    });
  }
});

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    progressStoragePlugin()
  ],
  server: {
    port: 3000,
    open: false
  }
});
