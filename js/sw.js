const cacheName = 'v1';
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js'
];

self.addEventListener('install', function(e) {
  console.log('Service Worker is installed');

  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(cacheFiles);
    })
  );
});

// self.addEventListener('activate', function() {
//
// })
//
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//     })
//   );
// })
