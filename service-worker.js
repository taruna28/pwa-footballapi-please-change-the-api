const CACHE_NAME = "firstpwa37";

var urlsToCache = [
  "/",
  "/css/fontawesome/fontawesome.min.css", "/css/fontawesome/all.min.css",
  "css/webfonts/fa-regular-400.woff2","css/webfonts/fa-regular-400.ttf ",
  "/css/webfonts/fa-solid-900.woff2",
  "/navigation.html",
  "/index.html",
  "/pages/home.html",
  "/pages/match.html",
  "/pages/favorite.html",
  "/css/materialize.min.css",
  "/css/main.css",
  "/js/materialize.min.js",
  "/js/api.js",
  "/js/navigation.js",
  "/js/dbfunc.js",
  "/js/dbteamfootball.js",
  "/js/detailteam.js",
  "/js/idb.js",
  "/js/jquery.min.js",
  "/js/match.js",
  "/js/time.js",
  "/detail_team.html",

  "https://fonts.googleapis.com/icon?family=Material+Icons",
"https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
"/image.png",
"/manifest.json"
];

var baseUrl ='https://api.football-data.org/v2'
 
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {

  if (event.request.url.indexOf(baseUrl) > -1) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request.url, response.clone());
          return response;
        })
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request ,{ ignoreSearch: true }).then(function(response) {
        return response || fetch (event.request);
      })
    )
  }
});
  
  self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  self.addEventListener("push", function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: 'img/notification.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });