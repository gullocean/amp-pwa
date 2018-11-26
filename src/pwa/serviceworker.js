// var CACHE_NAME = 'gullocean-amp-pwa-cache-v1';
// var urlsToCache = [
//   '/pwa',
//   '/pwa/styles/main.css',
//   '/pwa/script/main.js'
// ];

// self.addEventListener('install', function(event) {
//   // Perform install steps
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Opened cache');
//         return cache.addAll(urlsToCache, { mode: 'same-origin', redirect: 'follow' });
//       })
//   );
// });

// self.addEventListener('fetch', event => {
//   if (event.request.mode === 'navigate') {
//     event.respondWith(fetch('/pwa'));

//     // Immediately start downloading the actual resource.
//     fetch(event.request.url);
//   }

// });
importScripts('workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.routing.registerRoute(
    /\*/,
    workbox.strategies.cacheFirst()
  );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
