var C="zupona-4";
var A=["index.html","shop.html","product.html","cart.html","checkout.html","account.html",
"css/zupona.css","js/zupona.js","manifest.json","icon.svg"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(C).then(function(c){
    return Promise.all(A.map(function(a){return c.add(a).catch(function(){});}));
  }).then(function(){return self.skipWaiting();}));
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(k){
    return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener("fetch",function(e){
  var r=e.request; if(r.method!=="GET") return;
  e.respondWith(caches.match(r).then(function(hit){
    var live=fetch(r).then(function(res){
      var copy=res.clone(); caches.open(C).then(function(c){c.put(r,copy);}); return res;
    }).catch(function(){return hit||caches.match("index.html");});
    return hit||live;
  }));
});
