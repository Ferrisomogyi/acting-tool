const CACHE_NAME = 'actors-tool-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Laat API calls door zonder caching
  if (e.request.url.includes('workers.dev') || e.request.url.includes('anthropic.com')) {
    return;
  }
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
