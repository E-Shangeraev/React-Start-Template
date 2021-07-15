const staticCacheName = 's-app-v1';
const assetUrls = ['index.html', 'offline.html'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(assetUrls);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      console.log('Updated cache');
      return fetch(event.request).catch((error) =>
        caches.match('offline.html'),
      );
    }),
  );
});

self.addEventListener('activate', (event) => {
  console.log('[SW]: activate');
  const cacheWhitelist = [];
  cacheWhitelist.push(staticCacheName);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});
