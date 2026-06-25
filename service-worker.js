const CACHE_NAME = "real-o-ia-v2";

const urlsToCache = [

    "/",
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",

   "Logo-pagina.png",

"nivel1.jpg",
"IA nivel 1.webp.webp",
"IA nivel 1,.webp.webp",
"real1.jpg",
"realnivel1.jpg",

"nivel2.jpg",
"realnivel2.jpg",
"verdadnivel2.jpg",
"ainivel2.png",
"ianivel2.png"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })

    );

});
