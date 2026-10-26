import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./dist/', import.meta.url));
const basePath = '/yemin-pixel-homepage/';
const port = Number(process.env.PORT || 4173);
const types = {
  '.html': 'text/html;charset=utf-8', '.css': 'text/css;charset=utf-8',
  '.js': 'text/javascript;charset=utf-8', '.ttf': 'font/ttf',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.wasm': 'application/wasm', '.json': 'application/json',
  '.splinecode': 'application/octet-stream',
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400); res.end('Bad request'); return; }
  if (pathname === '/' || pathname === basePath.slice(0, -1)) {
    res.writeHead(302, { Location: basePath }); res.end(); return;
  }
  if (!pathname.startsWith(basePath)) {
    res.writeHead(404); res.end('Not found'); return;
  }
  const relative = pathname.slice(basePath.length) || 'index.html';
  const file = path.resolve(root, relative);
  if (!file.startsWith(root)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Content-Length': data.length,
      'Cache-Control': 'no-cache',
    });
    res.end(data);
  });
}).listen(port, '127.0.0.1', () => {
  console.log(`Open http://127.0.0.1:${port}${basePath}`);
});
