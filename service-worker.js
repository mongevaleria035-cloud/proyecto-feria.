const CACHE_NAME = "real-o-ia-v1";

const urlsToCache = [

"/",
"index.html",
"style.css",
"script.js",
"manifest.json",

"logo.png",

"img/nivel1_1.jpg",
"img/nivel1_2.jpg",
"img/nivel1_3.jpg",
"img/nivel1_4.jpg",
"img/nivel1_5.jpg",

"img/nivel2_1.jpg",
"img/nivel2_2.jpg",
"img/nivel2_3.jpg",
"img/nivel2_4.jpg",
"img/nivel2_5.jpg"

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