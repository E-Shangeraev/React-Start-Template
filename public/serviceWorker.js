const staticCacheName = 's-app-v1';

const assetUrls = ['index.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => cache.addAll([])),
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW]: activate');
});
