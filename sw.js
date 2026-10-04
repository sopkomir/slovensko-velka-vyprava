/* Slovensko – veľká výprava: offline režim
   Pri každej novej verzii aplikácií zvýšte číslo VERZIA, aby si zariadenia stiahli nové súbory. */
const VERZIA = 'vyprava-v13';
const SUBORY = ['./','index.html','male-objavitelia.html','cestovatelia.html','badatelia.html','experti.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png','og.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERZIA).then(c => Promise.all(SUBORY.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERZIA).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // stránky: najprv sieť (aby sa ukázala nová verzia), pri výpadku záloha
  if (req.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(VERZIA).then(x => x.put(req, c)); return r; })
      .catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    return;
  }
  // ostatné (ikony, písma): najprv zo zálohy
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const c = res.clone(); caches.open(VERZIA).then(x => x.put(req, c)); }
    return res;
  }).catch(() => r)));
});
