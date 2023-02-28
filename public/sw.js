console.warn('heyy i am ok');
const staticCacheName = 'site-static';
const asset = ['/static/js/bundle.js', '`/', '/index.html'];
// install service worker
this.addEventListener('install', (evt) => {
  //   console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(asset);
    })
  );
});

// activate event
this.addEventListener('activate', (evt) => {
  console.log('service worker has been activated');
});

// fetch event
this.addEventListener('fetch', (evt) => {
  console.log('fechy fechy');

  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
