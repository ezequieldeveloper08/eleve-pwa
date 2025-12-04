self.addEventListener("install", () => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open("eleve-cache").then(async (cache) => {
      const cached = await cache.match(event.request);
      if (cached) return cached;

      const response = await fetch(event.request);
      cache.put(event.request, response.clone());
      return response;
    })
  );
});
