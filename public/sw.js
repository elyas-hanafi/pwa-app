console.warn('heyy i am ok');

// install service worker
this.addEventListener('install', (evt) => {
  console.log('service worker installed');
});

// activate event
this.addEventListener('activate', (evt) => {
  console.log('service worker has been activated');
});

// fetch event
this.addEventListener('fetch', (evt) => {
  console.log('fechy fechy');
});
