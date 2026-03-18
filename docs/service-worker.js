self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("calc-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/main.js",
        "/pkg/panic_calculators_bg.wasm",
        "/pkg/panic_calculators.js"
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