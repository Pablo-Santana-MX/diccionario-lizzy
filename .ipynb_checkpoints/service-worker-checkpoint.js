self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("diccionario-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "../data/diccionario_limpio.json?v=1", // Ruta corregida
        "manifest.json",
        "icon.png"
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