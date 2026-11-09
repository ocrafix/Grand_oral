/* Major de promo : petit service worker pour l’installation sur mobile.
   Il cherche toujours la dernière version en ligne et ne garde une copie que pour jouer hors connexion. */
const CACHE='major-de-promo-v9';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','index.html','firebase-config.js','manifest.webmanifest','icon-192.png','icon-512.png']).catch(()=>{})));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin) return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return r;}).catch(()=>caches.match(e.request)));
});
