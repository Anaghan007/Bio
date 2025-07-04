const CACHE_NAME = 'anaghan-pwa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './my-avatar.png',
  './1.jpg',
  './2.jpg',
  './3.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then(response => response || caches.match('./offline.html'))
    )
  );
});