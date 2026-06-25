const CACHE_NAME = "real-o-ia-v2";

const urlsToCache = [

    "/",
    "index.html",
    "style.css",
    "script.js",
    "manifest.json",

    "Logo-pagina.png",

    "Nivel IA 1.jpg.jpg",
    "IA nivel 1.webp.webp",
    "IA nivel 1,.webp.webp",

    "De verdad nivel1. JPG.jpg",
    "Nivel real1,. JPG.jpg",

    "realnivel2. JPG.jpg",
    "realnivel2,. JPG.jpg",
    "realnivel2,,. JPG.jpg",

    "IAnivel2.PNG.png",
    "Nivel 2,.. PNG.png"

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
