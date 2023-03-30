//STORAGE OF BROWSER
const CACHE_NAME = "version-1";
const urlsToCache = [
    // "/",
    // "/index.html",
    "/offline.html",
    "./assets/offline_image.jpg"
    // "/static/js/main.chunk.js",
    // "/static/js/0.chunk.js",
    // "/static/js/bundle.js",
];

//Install SW

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened Cache");
            return cache.addAll(urlsToCache);
        })
    );
});

//Listen for Requests

self.addEventListener("fetch", (event) => {
    // var request = event.request;
    // if (request.method === "GET") {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then(() => {
                return fetch(event.request).catch(() =>
                    caches.match("offline.html")
                );
            })
        );
    }
    // }
});

//Activate the SW

self.addEventListener("activate", (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhiteList.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});
