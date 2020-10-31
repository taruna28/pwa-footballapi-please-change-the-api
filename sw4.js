importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');


workbox.precaching.precacheAndRoute([
  {
    revision: "08ad7a4a944e7564adf9414e9626f501",
    url: "css/fontawesome/all.min.css",
  },
  {
    revision: "f65791dea3d1e31cd6a5f53a3708e098",
    url: "css/fontawesome/fontawesome.min.css",
  },
  { revision: "07a2f477f2501d4d81e45d75ae6982f8", url: "css/main.css" },
  { revision: "b0663391a6dd5efed956259f29fa18dd", url: "css/materialize.css" },
  {
    revision: "ec1df3ba49973dcb9ff212f052d39483",
    url: "css/materialize.min.css",
  },
  {
    revision: "5063b105c7646c8043d58c5289f02cca",
    url: "css/webfonts/fa-brands-400.eot",
  },
  {
    revision: "9d204f50ec8e5bcc5dcda0132d404b48",
    url: "css/webfonts/fa-brands-400.svg",
  },
  {
    revision: "06147b6cd88c7346cecd1edd060cd5de",
    url: "css/webfonts/fa-brands-400.ttf",
  },
  {
    revision: "c5e0f14f88a828261ba01558ce2bf26f",
    url: "css/webfonts/fa-brands-400.woff",
  },
  {
    revision: "cccc9d29470e879e40eb70249d9a2705",
    url: "css/webfonts/fa-brands-400.woff2",
  },
  {
    revision: "c1a866ec0e04a5e1915b41fcf261457c",
    url: "css/webfonts/fa-regular-400.eot",
  },
  {
    revision: "9443c1e7fdf95d739af3f0901224f90a",
    url: "css/webfonts/fa-regular-400.svg",
  },
  {
    revision: "65b286af947c0d982ca01b40e1fcab38",
    url: "css/webfonts/fa-regular-400.ttf",
  },
  {
    revision: "c4f508e7c4f01a9eeba7f08155cde04e",
    url: "css/webfonts/fa-regular-400.woff",
  },
  {
    revision: "f5f2566b93e89391da4db79462b8078b",
    url: "css/webfonts/fa-regular-400.woff2",
  },
  {
    revision: "8e4a6dcc692b3887f9f542cd6894d6d4",
    url: "css/webfonts/fa-solid-900.eot",
  },
  {
    revision: "3d102342391af184d5ae9e7708d8220f",
    url: "css/webfonts/fa-solid-900.svg",
  },
  {
    revision: "0bff33a5fd7ec390235476b4859747a0",
    url: "css/webfonts/fa-solid-900.ttf",
  },
  {
    revision: "333bae208dc363746961b234ff6c2500",
    url: "css/webfonts/fa-solid-900.woff",
  },
  {
    revision: "44d537ab79f921fde5a28b2c1636f397",
    url: "css/webfonts/fa-solid-900.woff2",
  },
  { revision: "d6da40db2c23fcdd7b21f58326cf2f48", url: "detail_team.html" },
  { revision: "d3b570f6f83ab98fd8af959e023912ce", url: "generator.js" },
  { revision: "9ab10ca6559b89044e58f1c2f2e55870", url: "image.png" },
  { revision: "e0d57d9d95c5383b41ec9e0f29a3df0b", url: "index.html" },
  { revision: "755d43ad49940e51da88840463a364c5", url: "js/api.js" },
  { revision: "5c9be925f3816c09856fbd1cdb18134c", url: "js/dbfunc.js" },
  { revision: "f61a48ef21b6bfdf9403cfea27674313", url: "js/dbteamfootball.js" },
  { revision: "b4e06b8fcbfa1cc01d6cf60ec8e09943", url: "js/detailteam.js" },
  { revision: "a66942528a8af114e8a0ae4b517ab0be", url: "js/idb.js" },
  { revision: "81ed7a494e1943be2844e95f9770844c", url: "js/jquery.min.js" },
  { revision: "9da5b85de397f537d03e4b891737a184", url: "js/match.js" },
  { revision: "9832259e6e013b2e55f342c053c26104", url: "js/materialize.js" },
  {
    revision: "5dcfc8944ed380b2215dc28b3f13835f",
    url: "js/materialize.min.js",
  },
  { revision: "ea91b51972a6efc70d1425b1afbab2d0", url: "js/navigation.js" },
  { revision: "ed680c7e475d92c661e67165ba95994b", url: "js/time.js" },
  { revision: "b5af12d9899ff12a5c5255640026661f", url: "manifest.json" },
  { revision: "9d8501d3c42d33c9228dd21d3fc05d90", url: "navigation.html" },
  { revision: "ec4bc4c1a3583ebc8ba01c051c8eb953", url: "package-lock.json" },
  { revision: "b322fbcead1967a7c7b8cc59e931d583", url: "package.json" },
  { revision: "c7c989b2ece348d0f7a6905cb10b400d", url: "pages/favorite.html" },
  { revision: "1b0afbd44c21000338f4c8b1156cefac", url: "pages/home.html" },
  { revision: "ddcf8bb77aeb75894ea157c67cbcbe64", url: "pages/match.html" },
  { revision: "0f35f46bd3ccbee08868388d3da6592a", url: "push.js" },
  { revision: "b3175d7625f672ad9671621453782ba2", url: "service-worker.js" },
  { revision: "224788cd38ee6296a0998e4a38a6b02b", url: "sw.js" },
  { revision: "a15a52b2e70714901b844ae7f20136b0", url: "sw3.js" },
  { revision: "f24a8d9db41b9f392d3884e1f2946208", url: "workbox-config.js" },
],
  {ignoreURLParametersMatching: [/.*/]});

workbox.routing.registerRoute(
    /.*(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images-cache',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
            }),
        ]
    })
);


workbox.routing.registerRoute(
    new RegExp('https://api.football-data.org/v2/'),
    workbox.strategies.staleWhileRevalidate()
)

// Menyimpan cache dari CSS Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

// Menyimpan cache untuk file font selama 1 tahun
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);

workbox.routing.registerRoute(
    new RegExp('/pages/'),
    workbox.strategies.staleWhileRevalidate()
);
//====================================
// workbox.routing.registerRoute(
//     new RegExp('/'),
//     workbox.strategies.staleWhileRevalidate()
// );


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