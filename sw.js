// ═══════════════════════════════════════════════
// SERVICE WORKER — Discover Bank PWA
// Enables offline access & app-like experience
// ═══════════════════════════════════════════════

const CACHE_NAME = 'discover-bank-v1';
const OFFLINE_URL = '/offline.html';

// Files to cache for offline use
const CACHE_FILES = [
  '/',
  '/index.html',
  '/login.html',
  '/dashboard.html',
  '/admin.html',
  '/signup.html',
  '/contact.html',
  '/customers-data.js',
  '/offline.html',
  '/manifest.json'
];

// Install — cache all files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CACHE_FILES).catch(err => {
        console.log('Cache error (some files may not exist yet):', err);
      });
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch — serve from cache, fallback to network
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache a copy of successful responses
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => {
        // If offline, serve from cache
        return caches.match(event.request).then(cached => {
          return cached || caches.match(OFFLINE_URL);
        });
      })
  );
});
