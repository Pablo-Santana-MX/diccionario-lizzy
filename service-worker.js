self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("diccionario-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./data/rae_dictionary.json", // Nombre y ruta igual que en tu index.html
        "./manifest.json",
        "./icons/icon-192.png", // Cacheamos los íconos principales
        "./icons/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});