const filesToCache = [
  '.',
  '/',
  '/index.html',
  '/views/offline.html',
  '/css/style.css',
  'app.js'
];
var versionNum = 1;
var testCache = 'V-' + versionNum;

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(testCache)
    .then((cache) => {
      versionNum++;
      return cache.addAll(filesToCache)
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    console.log('Activating SW', e)
  )
})

self.addEventListener('fetch', function(e) {
  var eRequest = e.request;
  e.respondWith(
    caches.match(eRequest)
      .then((res) => {
        return res || fAndC(eRequest);
      })
  );
});

function fAndC(url){
  return fetch(url)
    .then((res) => {
      if(!res.ok) {
        throw Error(res.statusText);
      }
      return caches.open(testCache)
        .then((cache) => {
          cache.put(url, res.clone());
          return res;
        });
    })
    .catch((err) => {
      console.log('request failed', err)
    })
};
