// Below the Dead - offline support. Bump the version when you upload a new index.html.
const CACHE = 'btd-v19';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-180.png', './icon-512-maskable.png', './sprites/aris.webp?v=1', './sprites/armored.webp?v=1', './sprites/ben.webp?v=1', './sprites/bloater.webp?v=1', './sprites/brute.webp?v=1', './sprites/cat.webp?v=1', './sprites/chloe.webp?v=1', './sprites/dog.webp?v=1', './sprites/dummy.webp?v=1', './sprites/ghoul.webp?v=1', './sprites/ironhide.webp?v=1', './sprites/leo.webp?v=1', './sprites/matriarch.webp?v=1', './sprites/maya.webp?v=1', './sprites/necromancer.webp?v=1', './sprites/props.webp?v=1', './sprites/puker.webp?v=1', './sprites/riot.webp?v=1', './sprites/scrambler.webp?v=1', './sprites/screecher.webp?v=1', './sprites/shambler.webp?v=1', './sprites/spiker.webp?v=1', './sprites/sprinter.webp?v=1', './sprites/subjectzero.webp?v=1', './sprites/survivor.webp?v=1', './sprites/w_aris.webp?v=1', './sprites/w_ben.webp?v=1', './sprites/w_chloe.webp?v=1', './sprites/w_leo.webp?v=1', './sprites/w_maya.webp?v=1', './sprites/ui/ic_app.webp', './sprites/ui/ic_base.webp', './sprites/ui/ic_dex.webp', './sprites/ui/ic_gear.webp', './sprites/ui/ic_km.webp', './sprites/ui/ic_ms.webp', './sprites/ui/ic_play.webp', './sprites/ui/ic_shop.webp', './sprites/ui/ic_surv.webp'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // network first, so new versions show up; fall back to cache when offline
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r; }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else if (url.hostname.includes('fonts.g')) {
    // fonts: cache first
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
  }
});
