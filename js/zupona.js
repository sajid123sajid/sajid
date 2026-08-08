/* =====================================================================
   ZUPONA — Application  (single script, no dependencies)
   Sections: 1 config  2 catalog  3 helpers  4 photos  5 store
             6 components  7 chrome  8 search  9 sheets
             10 home  11 shop  12 product  13 cart  14 checkout
             15 account  16 boot
   ===================================================================== */
(function () {
"use strict";

/* ============================================================ 1. CONFIG */
var CFG = {
  cur: "Tk",
  freeOver: 999,
  ship: 60,
  coupons: { ZUPONA10: .10, EID25: .25, WELCOME5: .05, FREESHIP: 0 },
  phone: "+880 961 000 0000",
  mail: "care@zupona.com"
};

/* =========================================================== 2. CATALOG */
var CATS = [
  { id: "bath",    name: "Bath & Body",     icon: "🧴", hue: 36,  keys: "bathroom,soap,spa" },
  { id: "beauty",  name: "Beauty",          icon: "💧", hue: 340, keys: "skincare,cosmetics,beauty" },
  { id: "macc",    name: "Men's Accessories",icon: "⌚", hue: 214, keys: "wristwatch,wallet,leather" },
  { id: "wacc",    name: "Women's Bags",    icon: "👜", hue: 24,  keys: "handbag,bag,jewellery" },
  { id: "mfash",   name: "Men's Fashion",   icon: "👔", hue: 200, keys: "menfashion,shirt,suit" },
  { id: "wfash",   name: "Women's Fashion", icon: "👗", hue: 318, keys: "womenfashion,dress,abaya" },
  { id: "baby",    name: "Baby & Kids",     icon: "🍼", hue: 186, keys: "baby,nursery,kids" },
  { id: "toys",    name: "Toys & Games",    icon: "🧸", hue: 262, keys: "toys,kids,play" }
];

var RAW = [
  ["p01","Lux Botanicals Fragrant Liquid Soap 500ml","Lux","bath",320,450,4.8,125,1420,38,"","liquidsoap,dispenser","Silky hand wash infused with real botanical extracts. Leaves hands soft and lightly perfumed.",["Green","Pink"],0],
  ["p02","Dove Beauty Cream Bar Soap · Pack of 3","Dove","bath",210,260,4.7,98,2310,64,"","soap,bar,bathroom","With ¼ moisturising cream. Gentle on dry and sensitive skin, dermatologist recommended.",0,0],
  ["p03","The Ordinary Niacinamide 10% + Zinc 1%","The Ordinary","beauty",980,1400,4.9,210,860,21,"hot","serum,skincare,bottle","High-strength blemish formula that visibly reduces the look of blemishes and congestion.",0,0],
  ["p04","NAVIFORCE NF9163 Steel Chronograph Watch","Naviforce","macc",2850,3900,4.6,76,540,12,"","wristwatch,men,watch","Quartz chronograph with luminous hands, 3ATM water resistance and a solid steel bracelet.",["Silver","Black","Gold"],0],
  ["p05","Nivea Men Dark Spot Face Wash 100ml","Nivea","beauty",430,520,4.5,143,1180,50,"","facewash,skincare,tube","10x Vitamin C effect. Deep cleans, fights dark spots and leaves skin visibly fresh.",0,0],
  ["p06","Premium Leather Chain Handbag","Zupona Luxe","wacc",1990,2900,4.7,64,320,9,"new","handbag,leather,bag","Structured top-handle bag in soft PU leather with a detachable gold chain strap.",["Beige","Black","Brown"],0],
  ["p07","Cotton Slim-Fit Polo Shirt","Urbana","mfash",790,1150,4.4,187,1620,80,"","poloshirt,men,fashion","Breathable pique cotton polo with a ribbed collar. An everyday smart-casual staple.",["Black","Navy","White"],["S","M","L","XL","XXL"]],
  ["p08","Embroidered Party Abaya with Hijab","Noor","wfash",2450,3400,4.8,92,410,15,"hot","abaya,modestfashion,dress","Flowing georgette abaya with hand-finished embroidery. Includes a matching hijab.",["Beige","Black","Maroon"],["S","M","L","XL"]],
  ["p09","Anti-Colic Baby Feeding Bottle 250ml","BabyJoy","baby",520,700,4.6,110,980,44,"","babybottle,baby,feeding","BPA-free bottle with an anti-colic valve and soft silicone nipple. Dishwasher safe.",0,0],
  ["p10","Smart RC Robot with Voice Control","ToyVerse","toys",1750,2400,4.5,58,300,18,"new","robot,toy,kids","Walks, dances, sings and responds to gestures. USB-C rechargeable, 60 minutes of play.",0,0],
  ["p11","Vaseline Intensive Care Body Lotion 400ml","Vaseline","bath",540,690,4.7,166,1740,55,"","bodylotion,skincare","Clinically proven to heal dry skin in 5 days with micro-droplets of Vaseline jelly.",0,0],
  ["p12","CeraVe Hydrating Facial Cleanser 236ml","CeraVe","beauty",1290,1690,4.9,143,620,17,"hot","cleanser,skincare,face","Non-foaming cleanser with 3 essential ceramides and hyaluronic acid. Fragrance free.",0,0],
  ["p13","Classic Leather Wallet with RFID Block","Zupona Luxe","macc",890,1300,4.5,71,760,33,"","wallet,leather,men","Full-grain leather bifold with 8 card slots and an RFID-blocking lining.",["Brown","Black"],0],
  ["p14","Gold Plated Minimal Pendant Necklace","Aurea","wacc",1150,1650,4.6,48,290,20,"","necklace,gold,jewellery","18K gold plated over brass, tarnish resistant. Adjustable 42–48 cm chain.",0,0],
  ["p15","Oversized Heavyweight Denim Jacket","Urbana","mfash",1890,2600,4.4,64,430,24,"","denim,jacket,fashion","Heavyweight 12oz denim with dropped shoulders and antique brass buttons.",["Blue","Black"],["M","L","XL"]],
  ["p16","Silk Blend Printed Scarf","Noor","wfash",690,980,4.5,55,510,40,"","scarf,silk,fashion","Lightweight silk-blend square scarf with a hand-drawn floral print and rolled hem.",["Cream","Rose","Teal"],0],
  ["p17","Orthodontic Silicone Pacifier · 2 Pack","BabyJoy","baby",320,450,4.4,88,870,60,"","pacifier,baby","Symmetrical orthodontic shield supports healthy palate development. Sterilizer safe.",0,0],
  ["p18","Wooden Educational Building Blocks · 100pc","ToyVerse","toys",980,1400,4.8,102,640,26,"","woodenblocks,toys,kids","Non-toxic beech wood blocks in 12 shapes. Builds motor skills and spatial reasoning.",0,0],
  ["p19","Head & Shoulders Anti-Dandruff 650ml","Head & Shoulders","bath",760,980,4.6,204,2050,48,"","shampoo,haircare,bottle","Up to 100% dandruff protection with pyrithione zinc. Suitable for daily use.",0,0],
  ["p20","Garnier Vitamin C Sheet Mask · 5 Pack","Garnier","beauty",450,650,4.3,131,1330,70,"","sheetmask,facemask,spa","One mask contains a full bottle of serum. Instantly brightens dull, tired skin.",0,0],
  ["p21","Aviator Polarized Sunglasses UV400","Zupona Luxe","macc",1150,1750,4.5,66,480,28,"","sunglasses,aviator","Polarized lenses cut glare by 99%. Lightweight alloy frame with spring hinges.",["Gold","Silver"],0],
  ["p22","Everyday Structured Tote Bag","Aurea","wacc",1590,2200,4.6,59,340,22,"new","totebag,handbag,women","Fits a 14-inch laptop. Reinforced base, interior zip pocket and magnetic closure.",["Tan","Black"],0],
  ["p23","Half-Canvas Slim Fit Blazer","Urbana","mfash",3450,4900,4.7,44,210,10,"","blazer,suit,men","Half-canvas construction in wrinkle-resistant poly-viscose. Two-button notch lapel.",["Beige","Charcoal"],["38","40","42","44"]],
  ["p24","Chiffon Everyday Hijab · Pack of 3","Noor","wfash",850,1200,4.7,158,1290,52,"","hijab,scarf,women","Non-slip premium chiffon, 175 × 75 cm. Breathable and crease resistant.",["Nude","Pastel","Dark"],0],
  ["p25","Baby Soft Cotton Bodysuit · 5 Pack","BabyJoy","baby",1150,1600,4.8,97,690,30,"","babyclothes,baby,cotton","100% combed cotton with nickel-free snaps. Pre-washed for extra softness.",0,["0-3M","3-6M","6-9M","9-12M"]],
  ["p26","Remote Control Racing Car 1:16","ToyVerse","toys",1450,2100,4.4,73,520,19,"","remotecar,toy,racing","2.4GHz controller, 20 km/h top speed, rechargeable battery and rubber grip tyres.",0,0],
  ["p27","Luxury Oud Eau de Parfum 100ml","Zupona Luxe","beauty",2250,3200,4.8,86,470,14,"hot","perfume,bottle,luxury","Warm oud, amber and vanilla. Long-lasting parfum in a heavy glass flacon.",0,0],
  ["p28","Bamboo Bath Towel Set · 2 Pack","Zupona Home","bath",1290,1800,4.6,68,410,25,"","towel,bath,spa","600 GSM bamboo-cotton blend. Ultra absorbent, quick drying and fade resistant.",["Ivory","Grey"],0]
];

var P = RAW.map(function (r) {
  var c = CATS.filter(function (x) { return x.id === r[3]; })[0] || {};
  return {
    id: r[0], name: r[1], brand: r[2], cat: r[3], price: r[4], old: r[5],
    rating: r[6], reviews: r[7], sold: r[8], stock: r[9], tag: r[10],
    keys: r[11], desc: r[12], colors: r[13] || null, sizes: r[14] || null,
    catName: c.name || "", hue: c.hue || 34,
    off: r[5] ? Math.round((1 - r[4] / r[5]) * 100) : 0
  };
});

/* =========================================================== 3. HELPERS */
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
var money = function (n) { return CFG.cur + " " + Number(n).toLocaleString("en-US"); };
var esc = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
};
var byId = function (id) { return P.filter(function (p) { return p.id === id; })[0]; };
var qs = function (k) { return new URLSearchParams(location.search).get(k); };
var stars = function (r) { var f = Math.round(r); return "★★★★★".slice(0, f) + "☆☆☆☆☆".slice(0, 5 - f); };
var buzz = function (n) { if (navigator.vibrate) { try { navigator.vibrate(n || 12); } catch (e) {} } };
var phone = function () { return window.matchMedia("(max-width:991px)").matches; };
var seed = function (t) { var s = 7; for (var i = 0; i < t.length; i++) s = (s * 33 + t.charCodeAt(i)) % 99991; return s; };

var SVG = {
  menu: 'M3 6h18M3 12h18M3 18h18',
  cart: 'M3 4h2.2l2.3 11.2h9.9l1.9-8H6.3',
  chevL: 'M15 5l-7 7 7 7', chevR: 'M9 5l7 7-7 7',
  close: 'M6 6l12 12M18 6L6 18', arrow: 'M5 12h13M13 6l6 6-6 6',
  up: 'M12 19V6M6 12l6-6 6 6', plus: 'M12 5v14M5 12h14'
};
var ic = function (d, w) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w || 1.9) +
    '" stroke-linecap="round" stroke-linejoin="round"><path d="' + d + '"/></svg>';
};
var ICO = {
  menu: ic(SVG.menu, 2), close: ic(SVG.close, 2), chevL: ic(SVG.chevL, 2), chevR: ic(SVG.chevR, 2),
  arrow: ic(SVG.arrow, 2), up: ic(SVG.up, 2.2), plus: ic(SVG.plus, 2.2),
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.2-3.2"/></svg>',
  cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.9l1.2-2h6.8l1.2 2h1.9A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-9.6A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20z"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="12" cy="8.2" r="3.6"/><path d="M4.6 20c.8-3.7 3.8-5.6 7.4-5.6S18.6 16.3 19.4 20"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M3 4h2.2l2.3 11.2h9.9l1.9-8H6.3"/><circle cx="9.5" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M3.5 11 12 4l8.5 7"/><path d="M5.8 10.2V20h12.4v-9.8"/></svg>',
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></svg>',
  list: ic('M4 6h16M4 12h16M4 18h16', 2),
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M2.5 6.5h11v10h-11z"/><path d="M13.5 10h4l3 3v3.5h-7z"/><circle cx="6.5" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
  back: ic('M20 12a8 8 0 1 1-2.4-5.7M20 4v4h-4', 1.8),
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3v11"/><path d="M8 7l4-4 4 4"/><path d="M5 14v6h14v-6"/></svg>'
};

/* ============================================================ 4. PHOTOS */
var PHOTO = { on: true, w: 700 };
function art(sd, hue) {
  var s = seed(sd), h2 = (hue + 20) % 360;
  var cx = 150 + (s % 30) - 15, cy = 158 + (s % 20) - 10, r = 70 + (s % 20);
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">' +
    '<defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="hsl(' + hue + ',34%,95%)"/><stop offset="1" stop-color="hsl(' + h2 + ',26%,86%)"/>' +
    '</linearGradient><linearGradient id="b" x1="0" y1="0" x2=".6" y2="1">' +
    '<stop offset="0" stop-color="hsl(' + hue + ',30%,74%)"/><stop offset="1" stop-color="hsl(' + h2 + ',26%,54%)"/>' +
    '</linearGradient></defs><rect width="300" height="300" fill="url(#a)"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (r + 24) + '" fill="#fff" opacity=".5"/>' +
    '<rect x="' + (cx - r / 1.7) + '" y="' + (cy - r) + '" width="' + (r * 1.2) + '" height="' + (r * 2) +
    '" rx="' + (r / 2.6) + '" fill="url(#b)"/></svg>';
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function ph(keys, w, h, sd) {
  if (!PHOTO.on) return art(sd || keys, 34);
  return "https://loremflickr.com/" + w + "/" + h + "/" + encodeURIComponent(keys) + "?lock=" + seed(sd || keys);
}
function alt2(sd, w, h) { return "https://picsum.photos/seed/z" + seed(sd) + "/" + w + "/" + h; }
/* full <img> attributes with a 3-step fallback chain baked in */
function att(keys, w, h, sd, hue) {
  sd = sd || keys;
  return 'src="' + ph(keys, w, h, sd) + '" data-a="' + alt2(sd, w, h) + '" data-s="' + art(sd, hue || 34) + '"';
}
function pAtt(p, i) { return att(p.keys, PHOTO.w, PHOTO.w, p.id + "-" + (i || 0), p.hue); }
function pSrc(p, i) { return ph(p.keys, PHOTO.w, PHOTO.w, p.id + "-" + (i || 0)); }
function face(sd) { return PHOTO.on ? "https://i.pravatar.cc/96?u=z" + seed(sd) : art(sd, 210); }

document.addEventListener("error", function (e) {
  var el = e.target;
  if (!el || el.tagName !== "IMG") return;
  if (el.dataset.f === undefined && el.dataset.a) { el.dataset.f = "1"; el.src = el.dataset.a; }
  else if (el.dataset.f !== "2" && el.dataset.s) { el.dataset.f = "2"; el.src = el.dataset.s; }
}, true);

/* ============================================================= 5. STORE */
var S = {
  get: function (k, d) { try { var v = localStorage.getItem("zup:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
  set: function (k, v) { try { localStorage.setItem("zup:" + k, JSON.stringify(v)); } catch (e) {} },
  cart: function () { return S.get("cart", []); },
  wish: function () { return S.get("wish", []); },
  orders: function () { return S.get("orders", []); },
  add: function (id, q, v) {
    var c = S.cart(), key = id + "|" + (v || "");
    var line = c.filter(function (l) { return l.key === key; })[0];
    if (line) line.q += (q || 1); else c.push({ key: key, id: id, q: q || 1, v: v || "" });
    S.set("cart", c); S.sync(); return c;
  },
  qty: function (key, q) {
    S.set("cart", S.cart().map(function (l) { if (l.key === key) l.q = Math.max(1, q); return l; }));
    S.sync();
  },
  drop: function (key) { S.set("cart", S.cart().filter(function (l) { return l.key !== key; })); S.sync(); },
  clear: function () { S.set("cart", []); S.sync(); },
  toggleWish: function (id) {
    var w = S.wish(), i = w.indexOf(id);
    if (i > -1) w.splice(i, 1); else w.push(id);
    S.set("wish", w); S.sync(); return i === -1;
  },
  inWish: function (id) { return S.wish().indexOf(id) > -1; },
  sum: function (code) {
    var lines = S.cart().map(function (l) {
      var p = byId(l.id) || { price: 0 };
      return { key: l.key, q: l.q, v: l.v, p: p, tot: p.price * l.q };
    }).filter(function (l) { return l.p.id; });
    var sub = lines.reduce(function (a, l) { return a + l.tot; }, 0);
    var code2 = (code || "").toUpperCase();
    var rate = CFG.coupons[code2] || 0;
    var disc = Math.round(sub * rate);
    var after = sub - disc;
    var free = code2 === "FREESHIP";
    var ship = sub === 0 ? 0 : (free || after >= CFG.freeOver ? 0 : CFG.ship);
    return { lines: lines, sub: sub, disc: disc, ship: ship, rate: rate,
             total: after + ship, n: lines.reduce(function (a, l) { return a + l.q; }, 0) };
  },
  sync: function () {
    var t = S.sum();
    $$("[data-n]").forEach(function (el) {
      el.textContent = t.n; el.classList.toggle("hide", t.n === 0);
    });
    $$("[data-wn]").forEach(function (el) {
      var n = S.wish().length; el.textContent = n; el.classList.toggle("hide", n === 0);
    });
    if ($("#dwCart")) drawCart();
    document.dispatchEvent(new CustomEvent("zup"));
  }
};

/* ============================================================= 6. TOAST */
function toast(msg, act) {
  var w = $(".tw");
  if (!w) { w = document.createElement("div"); w.className = "tw"; document.body.appendChild(w); }
  var el = document.createElement("div");
  el.className = "to";
  el.innerHTML = '<i>✓</i><span style="flex:1">' + esc(msg) + '</span>';
  if (act) {
    var b = document.createElement("button");
    b.className = "to-a"; b.textContent = act.label;
    b.onclick = function () { el.remove(); act.fn(); };
    el.appendChild(b);
  }
  w.appendChild(el);
  var life = act ? 4600 : 2100;
  setTimeout(function () { el.style.transition = ".3s"; el.style.opacity = 0; el.style.transform = "translateY(10px)"; }, life);
  setTimeout(function () { el.remove(); }, life + 400);
}
function confetti() {
  var w = document.createElement("div"); w.className = "conf";
  var c = ["#B8912F", "#D9B457", "#C2352B", "#1F7A46", "#41434C"];
  for (var i = 0; i < 60; i++) {
    var b = document.createElement("i");
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = c[i % c.length];
    b.style.animationDuration = (1.5 + Math.random() * 1.5) + "s";
    b.style.animationDelay = Math.random() * .35 + "s";
    w.appendChild(b);
  }
  document.body.appendChild(w);
  setTimeout(function () { w.remove(); }, 3400);
}

/* ======================================================== 7. COMPONENTS */
function card(p) {
  return '<article class="pc" data-id="' + p.id + '">' +
    '<div class="pc-i">' +
      (p.off ? '<span class="pc-tag">−' + p.off + '%</span>' : "") +
      (p.tag === "new" && !p.off ? '<span class="pc-tag new">NEW</span>' : "") +
      '<a href="product.html?id=' + p.id + '" aria-label="' + esc(p.name) + '">' +
      '<img ' + pAtt(p) + ' alt="' + esc(p.name) + '" loading="lazy"></a>' +
      '<button class="pc-w' + (S.inWish(p.id) ? " on" : "") + '" data-w="' + p.id + '" aria-label="Save">' + ICO.heart + '</button>' +
    '</div>' +
    '<div class="pc-b">' +
      '<a href="product.html?id=' + p.id + '"><h3 class="pc-n">' + esc(p.name) + '</h3></a>' +
      '<div class="pc-p"><b>' + money(p.price) + '</b>' + (p.old ? '<s>' + money(p.old) + '</s>' : "") + '</div>' +
      '<div class="pc-r"><span class="stars">' + stars(p.rating) + '</span>' + p.rating +
        ' <span>· ' + p.sold + ' sold</span></div>' +
      '<button class="pc-add" data-add="' + p.id + '" aria-label="Add to cart">' + ICO.plus + '</button>' +
    '</div></article>';
}
function fill(sel, list) { var el = $(sel); if (el) el.innerHTML = list.map(card).join(""); }

/* =========================================================== 8. CHROME */
function headHTML(page) {
  var nav = CATS.map(function (c) {
    return '<li><a href="shop.html?cat=' + c.id + '">' + esc(c.name) + '</a></li>';
  }).join("");
  return '<div class="hd">' +
    '<div class="wrap">' +
      '<div class="hd-row">' +
        '<button class="ico mb" data-open="menu" aria-label="Menu">' + ICO.menu + '</button>' +
        '<a class="mark" href="index.html">' +
          '<span class="mark-z">Z</span>' +
          '<span class="mark-t"><span class="mark-n">ZUPONA</span>' +
          '<span class="mark-s">Trusted Online Shop</span></span>' +
        '</a>' +
        '<form class="find find-dt dt" role="search" data-find>' +
          '<select name="cat" aria-label="Category"><option value="">All</option>' +
            CATS.map(function (c) { return '<option value="' + c.id + '">' + esc(c.name) + '</option>'; }).join("") +
          '</select>' +
          '<input name="q" type="search" placeholder="Search for products, brands and more" autocomplete="off">' +
          ICO.cam +
          '<button class="go" type="submit" aria-label="Search">' + ICO.search + '</button>' +
        '</form>' +
        '<div class="hd-act">' +
          '<a class="ico dt" href="account.html?tab=wish" aria-label="Wishlist">' + ICO.heart +
            '<span class="n hide" data-wn>0</span></a>' +
          '<a class="ico dt" href="account.html" aria-label="Account">' + ICO.user + '</a>' +
          '<button class="ico" data-open="cart" aria-label="Cart">' + ICO.cart +
            '<span class="n hide" data-n>0</span></button>' +
        '</div>' +
      '</div>' +
      '<div class="hd-find mb">' +
        '<button class="find" data-search style="text-align:left">' + ICO.search +
          '<span style="flex:1;color:var(--muted);font-size:14px">Search products, brands…</span>' +
          '<span style="font-size:16px;padding-right:10px">🎙</span></button>' +
      '</div>' +
    '</div>' +
    '<nav class="hd-nav"><div class="wrap"><ul>' + nav +
      '<li><a class="sale" href="shop.html?sort=off">Today\'s Deals</a></li>' +
    '</ul></div></nav>' +
    (page === "home" ? "" :
      '<nav class="rail-cat"><a href="shop.html">All</a>' +
      CATS.map(function (c) { return '<a href="shop.html?cat=' + c.id + '">' + esc(c.name) + '</a>'; }).join("") +
      '</nav>') +
    '</div>';
}

function footHTML() {
  return '<footer class="ft"><div class="wrap">' +
    '<div class="ft-g">' +
      '<div class="ft-ab">' +
        '<a class="mark" href="index.html" style="margin:0"><span class="mark-z">Z</span>' +
        '<span class="mark-t"><span class="mark-n">ZUPONA</span>' +
        '<span class="mark-s">Trusted Online Shop</span></span></a>' +
        '<p>Premium products for every lifestyle — beauty, fashion, accessories, baby care and toys. ' +
        'Authentic brands, nationwide delivery and a 30-day return promise.</p>' +
        '<div class="soc"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">ig</a>' +
        '<a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="WhatsApp">✆</a></div>' +
      '</div>' +
      '<div><h4>Shop</h4><ul>' +
        CATS.slice(0, 6).map(function (c) {
          return '<li><a href="shop.html?cat=' + c.id + '">' + esc(c.name) + '</a></li>';
        }).join("") + '</ul></div>' +
      '<div><h4>Help</h4><ul>' +
        '<li><a href="account.html?tab=orders">Track my order</a></li>' +
        '<li><a href="#">Shipping &amp; delivery</a></li>' +
        '<li><a href="#">Returns &amp; refunds</a></li>' +
        '<li><a href="#">Payment methods</a></li>' +
        '<li><a href="#">Contact us</a></li></ul></div>' +
      '<div><h4>Get in touch</h4><ul>' +
        '<li>House 12, Road 7, Banani, Dhaka 1213</li>' +
        '<li><a href="tel:' + CFG.phone.replace(/\s/g, "") + '">' + CFG.phone + '</a></li>' +
        '<li><a href="mailto:' + CFG.mail + '">' + CFG.mail + '</a></li>' +
        '<li>Sat–Thu, 9:00 – 22:00</li></ul>' +
        '<div class="pays"><span>bKash</span><span>Nagad</span><span>Rocket</span>' +
        '<span>VISA</span><span>Mastercard</span><span>COD</span></div></div>' +
    '</div>' +
    '<div class="ft-b"><span>© ' + new Date().getFullYear() + ' Zupona. All rights reserved.</span>' +
    '<span>Privacy · Terms · Cookies</span></div>' +
    '</div></footer>';
}

function extrasHTML(page) {
  var items = [
    ["index.html", "home", "Home", ICO.home],
    ["shop.html", "shop", "Shop", ICO.grid],
    ["", "cart", "Cart", ""],
    ["account.html?tab=wish", "wish", "Saved", ICO.heart],
    ["account.html", "account", "Account", ICO.user]
  ];
  var bn = items.map(function (it) {
    if (it[1] === "cart") {
      return '<div class="bn-f"><button data-open="cart" aria-label="Cart">' + ICO.cart +
        '<span class="n hide" data-n>0</span></button><span>Cart</span></div>';
    }
    return '<a href="' + it[0] + '" class="' + (page === it[1] ? "on" : "") + '">' + it[3] +
      (it[1] === "wish" ? '<span class="n hide" data-wn style="top:2px;right:22%">0</span>' : "") +
      '<span>' + it[2] + '</span></a>';
  }).join("");

  return '<div class="veil" data-veil></div>' +
    '<aside class="dw dw-l" id="dwMenu" aria-label="Menu">' +
      '<div class="dw-h"><h3>Browse Zupona</h3>' +
      '<button class="ico" data-close aria-label="Close">' + ICO.close + '</button></div>' +
      '<div class="dw-b">' +
        '<div class="mt">Categories</div>' +
        CATS.map(function (c) {
          return '<a class="ml" href="shop.html?cat=' + c.id + '"><i>' + c.icon + '</i>' + esc(c.name) + '</a>';
        }).join("") +
        '<div class="mt">Your account</div>' +
        '<a class="ml" href="account.html"><i>👤</i>My profile</a>' +
        '<a class="ml" href="account.html?tab=orders"><i>📦</i>My orders</a>' +
        '<a class="ml" href="account.html?tab=wish"><i>❤</i>Saved items</a>' +
        '<a class="ml" href="cart.html"><i>🛒</i>Shopping cart</a>' +
        '<div class="mt">Preferences</div>' +
        '<button class="ml" data-tt><i data-ti>🌙</i>Dark mode</button>' +
        '<a class="ml" href="#"><i>💬</i>24/7 customer care</a>' +
      '</div>' +
      '<div class="dw-f"><a class="btn btn-gold btn-full" href="account.html?tab=in">Sign in / Register</a></div>' +
    '</aside>' +
    '<aside class="dw dw-r" id="dwCart" aria-label="Cart">' +
      '<div class="dw-h"><h3>My cart (<span data-n>0</span>)</h3>' +
      '<button class="ico" data-close aria-label="Close">' + ICO.close + '</button></div>' +
      '<div class="dw-b" id="cartLines"></div>' +
      '<div class="dw-f">' +
        '<div class="shipbar"><i id="dwBar" style="width:0%"></i></div>' +
        '<p id="dwNote" style="font-size:11.5px;color:var(--ink-3);margin-bottom:12px"></p>' +
        '<div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:14px">' +
        '<span>Subtotal</span><b style="font-family:var(--serif);font-size:17px" id="dwSub">' + money(0) + '</b></div>' +
        '<div style="display:flex;gap:8px">' +
        '<a class="btn btn-line" href="cart.html" style="flex:1">View cart</a>' +
        '<a class="btn btn-ink" href="checkout.html" style="flex:1">Checkout</a></div>' +
      '</div>' +
    '</aside>' +
    '<nav class="bn">' + bn + '</nav>' +
    '<button class="help" id="helpB" aria-label="Help and support">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
      'stroke-width="1.9" stroke-linejoin="round"><path d="M4 5h16v11H9l-5 4z"/></svg></button>' +
    '<div class="tw"></div>';
}

function drawCart() {
  var box = $("#cartLines"); if (!box) return;
  var t = S.sum();
  $("#dwSub") && ($("#dwSub").textContent = money(t.sub));
  var db = $("#dwBar"), dn = $("#dwNote");
  if (db) db.style.width = Math.min(100, Math.round(t.sub / CFG.freeOver * 100)) + "%";
  if (dn) dn.innerHTML = (!t.sub) ? "Free delivery on orders over " + money(CFG.freeOver)
    : (t.sub >= CFG.freeOver ? '<span style="color:var(--ok);font-weight:600">Free delivery unlocked ✓</span>'
    : 'Add <b>' + money(CFG.freeOver - t.sub) + '</b> more for free delivery');
  if (!t.lines.length) {
    box.innerHTML = '<div style="padding:48px 24px;text-align:center;color:var(--ink-3)">' +
      '<div style="font-size:34px">🛍</div><h3 style="font-family:var(--serif);font-weight:500;' +
      'font-size:18px;color:var(--ink);margin:10px 0 6px">Your cart is empty</h3>' +
      '<p style="font-size:13px">Items you add will appear here.</p>' +
      '<a class="btn btn-gold btn-sm" style="margin-top:16px" href="shop.html">Start shopping</a></div>';
    return;
  }
  box.innerHTML = t.lines.map(function (l) {
    return '<div class="cl"><img ' + pAtt(l.p) + ' alt="">' +
      '<div style="flex:1;min-width:0">' +
        '<div class="cl-n">' + esc(l.p.name) + '</div>' +
        (l.v ? '<div class="cl-v">' + esc(l.v) + '</div>' : "") +
        '<div class="cl-p">' + money(l.p.price) + '</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:9px;gap:8px">' +
          '<span class="qty"><button data-q="-1" data-k="' + l.key + '">−</button><span>' + l.q +
          '</span><button data-q="1" data-k="' + l.key + '">+</button></span>' +
          '<button class="del" data-rm="' + l.key + '">Remove</button>' +
        '</div></div></div>';
  }).join("");
}

/* ------------------------------------------------------- theme + scroll */
function theme() {
  var saved = S.get("theme", null);
  var mode = saved || (window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
  document.documentElement.dataset.theme = mode;
  window.zTheme = function () {
    var n = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = n;
    S.set("theme", n);
    $$("[data-ti]").forEach(function (e) { e.textContent = n === "dark" ? "☀" : "🌙"; });
    buzz(10); toast(n === "dark" ? "Dark mode on" : "Light mode on");
  };
  $$("[data-ti]").forEach(function (e) { e.textContent = mode === "dark" ? "☀" : "🌙"; });
}

function scrollFx() {
  var bar = document.createElement("div"); bar.className = "bar"; document.body.appendChild(bar);
  var top = document.createElement("button");
  top.className = "top"; top.setAttribute("aria-label", "Back to top");
  top.innerHTML = ICO.up;
  top.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
  document.body.appendChild(top);
  function on() {
    var y = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? y / h * 100 : 0) + "%";
    document.body.classList.toggle("scr", y > 20);
    top.classList.toggle("on", y > 640);
  }
  window.addEventListener("scroll", on, { passive: true });
  on();
}

function cartBar() {
  var pg = document.body.dataset.page;
  if (pg === "cart" || pg === "checkout") return;
  var b = document.createElement("div");
  b.className = "cbar";
  b.innerHTML = '<i data-n>0</i><span><small>Cart subtotal</small><b id="cbT">' + money(0) + '</b></span>' +
    '<a class="btn btn-gold btn-sm" href="cart.html">Checkout</a>';
  document.body.appendChild(b);
  function on() {
    var t = S.sum();
    $("#cbT").textContent = money(t.sub);
    var show = t.n > 0 && phone();
    b.classList.toggle("on", show);
    document.body.classList.toggle("cbar-on", show);
  }
  document.addEventListener("zup", on);
  window.addEventListener("resize", on);
  on();
}

function reveal() {
  if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (rows) {
    rows.forEach(function (r) { if (r.isIntersecting) { r.target.classList.add("in"); io.unobserve(r.target); } });
  }, { rootMargin: "0px 0px -6% 0px", threshold: .05 });
  $$("main.wrap > .sec").forEach(function (s, i) {
    if (i < 2) return;
    s.classList.add("rv"); io.observe(s);
  });
}

/* ============================================================ 9. SHEETS */
var shEl;
function sheet(title, body, foot) {
  if (!shEl) {
    shEl = document.createElement("div");
    shEl.className = "sh-w";
    shEl.innerHTML = '<div class="sh-v" data-shc></div><div class="sh" role="dialog" aria-modal="true">' +
      '<span class="sh-g"></span><div class="sh-h"><h3 id="shT"></h3>' +
      '<button class="ico" data-shc aria-label="Close">' + ICO.close + '</button></div>' +
      '<div class="sh-b" id="shB"></div><div class="sh-f hide" id="shF"></div></div>';
    document.body.appendChild(shEl);
    shEl.addEventListener("click", function (e) { if (e.target.closest("[data-shc]")) shClose(); });
    var s = $(".sh", shEl), y0 = null;
    s.addEventListener("touchstart", function (e) { if (s.scrollTop <= 0) y0 = e.touches[0].clientY; }, { passive: true });
    s.addEventListener("touchmove", function (e) {
      if (y0 === null) return;
      var d = e.touches[0].clientY - y0;
      if (d > 0) s.style.transform = "translateY(" + d + "px)";
    }, { passive: true });
    s.addEventListener("touchend", function (e) {
      if (y0 === null) return;
      var d = e.changedTouches[0].clientY - y0;
      s.style.transform = "";
      if (d > 100) shClose();
      y0 = null;
    }, { passive: true });
  }
  $("#shT").textContent = title;
  $("#shB").innerHTML = body;
  var f = $("#shF"); f.innerHTML = foot || ""; f.classList.toggle("hide", !foot);
  shEl.classList.add("on");
  document.body.style.overflow = "hidden";
}
function shClose() { if (shEl) { shEl.classList.remove("on"); document.body.style.overflow = ""; } }

/* ------------------------------------------------------ search overlay */
var TREND = ["watch for men", "niacinamide serum", "abaya", "baby bottle", "perfume", "denim jacket", "hijab", "rc car"];
var soEl;
function soBuild() {
  if (soEl) return;
  soEl = document.createElement("div");
  soEl.className = "so";
  soEl.innerHTML = '<div class="so-t">' +
    '<button class="ico" id="soX" aria-label="Back">' + ICO.chevL + '</button>' +
    '<form class="find" id="soF">' + ICO.search +
      '<input id="soI" type="search" placeholder="Search products, brands…" autocomplete="off">' +
    '</form>' +
    '<button class="mic" id="soM" aria-label="Voice search">🎙</button>' +
    '</div><div class="so-b" id="soB"></div>';
  document.body.appendChild(soEl);
  $("#soX").onclick = soClose;
  $("#soF").onsubmit = function (e) {
    e.preventDefault();
    var q = $("#soI").value.trim(); if (!q) return;
    recent(q); location.href = "shop.html?q=" + encodeURIComponent(q);
  };
  $("#soI").addEventListener("input", function () { soPaint(this.value.trim()); });
  $("#soB").addEventListener("click", function (e) {
    var c = e.target.closest("[data-q]");
    if (c) { recent(c.dataset.q); location.href = "shop.html?q=" + encodeURIComponent(c.dataset.q); }
    if (e.target.closest("#soC")) { S.set("recent", []); soPaint($("#soI").value.trim()); }
  });
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition, m = $("#soM");
  m.onclick = function () {
    if (!SR) { toast("Voice search isn't supported here"); return; }
    var r = new SR(); r.lang = "en-US"; r.interimResults = false;
    m.classList.add("rec"); buzz(20);
    r.onresult = function (ev) { var t = ev.results[0][0].transcript; $("#soI").value = t; soPaint(t.trim()); };
    r.onend = function () { m.classList.remove("rec"); };
    r.onerror = function () { m.classList.remove("rec"); toast("Didn't catch that"); };
    r.start();
  };
}
function recent(q) {
  var r = S.get("recent", []).filter(function (x) { return x.toLowerCase() !== q.toLowerCase(); });
  r.unshift(q); S.set("recent", r.slice(0, 8));
}
function soPaint(q) {
  var b = $("#soB"); if (!b) return;
  var h = "";
  if (q) {
    var t = q.toLowerCase();
    var hits = P.filter(function (p) {
      return (p.name + " " + p.brand + " " + p.catName).toLowerCase().indexOf(t) > -1;
    }).slice(0, 7);
    h += '<div class="sp"><h4>' + (hits.length ? "Products" : "No match — try another word") + '</h4>' +
      hits.map(function (p) {
        return '<a class="hit" href="product.html?id=' + p.id + '"><img src="' + pSrc(p) + '" alt="">' +
          '<span><b>' + esc(p.name) + '</b><small>' + esc(p.brand) + ' · ' + esc(p.catName) + '</small></span>' +
          '<i>' + money(p.price) + '</i></a>';
      }).join("") + '</div>';
    var cs = CATS.filter(function (c) { return c.name.toLowerCase().indexOf(t) > -1; });
    if (cs.length) h += '<div class="sp"><h4>Categories</h4><div class="sp-c">' +
      cs.map(function (c) { return '<a class="chip" href="shop.html?cat=' + c.id + '">' + c.icon + " " + esc(c.name) + '</a>'; }).join("") +
      '</div></div>';
  } else {
    var rc = S.get("recent", []);
    if (rc.length) h += '<div class="sp"><h4>Recent<button id="soC" class="del">Clear</button></h4><div class="sp-c">' +
      rc.map(function (r) { return '<button class="chip" data-q="' + esc(r) + '">' + esc(r) + '</button>'; }).join("") + '</div></div>';
    h += '<div class="sp"><h4>Trending</h4><div class="sp-c">' +
      TREND.map(function (r) { return '<button class="chip" data-q="' + esc(r) + '">' + esc(r) + '</button>'; }).join("") + '</div></div>';
    h += '<div class="sp"><h4>Categories</h4><div class="sp-c">' +
      CATS.map(function (c) { return '<a class="chip" href="shop.html?cat=' + c.id + '">' + c.icon + " " + esc(c.name) + '</a>'; }).join("") + '</div></div>';
    h += '<div class="sp"><h4>Most wanted</h4>' +
      P.slice().sort(function (a, b2) { return b2.sold - a.sold; }).slice(0, 4).map(function (p) {
        return '<a class="hit" href="product.html?id=' + p.id + '"><img src="' + pSrc(p) + '" alt="">' +
          '<span><b>' + esc(p.name) + '</b><small>' + p.sold + ' sold</small></span><i>' + money(p.price) + '</i></a>';
      }).join("") + '</div>';
  }
  b.innerHTML = h;
}
function soOpen(v) {
  soBuild(); soEl.classList.add("on"); document.body.style.overflow = "hidden";
  $("#soI").value = v || ""; soPaint((v || "").trim());
  setTimeout(function () { $("#soI").focus(); }, 320);
}
function soClose() { if (soEl) { soEl.classList.remove("on"); document.body.style.overflow = ""; } }

/* --------------------------------------------------------- quick view */
function quick(id) {
  var p = byId(id); if (!p) return;
  buzz(18);
  var opts = [];
  if (p.colors) opts.push(["Colour", p.colors]);
  if (p.sizes) opts.push(["Size", p.sizes]);
  sheet("Quick view",
    '<div style="display:flex;gap:14px">' +
      '<img src="' + pSrc(p) + '" alt="" style="width:112px;height:112px;border-radius:14px;object-fit:cover;flex:0 0 auto">' +
      '<div style="min-width:0"><span class="pd-br">' + esc(p.brand) + '</span>' +
      '<h3 style="font-family:var(--serif);font-weight:500;font-size:16px;margin:6px 0 8px">' + esc(p.name) + '</h3>' +
      '<div class="pc-p"><b style="font-size:19px">' + money(p.price) + '</b>' +
      (p.old ? '<s>' + money(p.old) + '</s>' : "") + '</div>' +
      '<div class="pc-r"><span class="stars">' + stars(p.rating) + '</span>' + p.rating + ' (' + p.reviews + ')</div>' +
      '</div></div>' +
    opts.map(function (o) {
      return '<div class="opt" style="margin-top:18px"><span class="opt-l">' + o[0] + '</span>' +
        '<div class="opt-v" data-pick="' + o[0] + '">' +
        o[1].map(function (v, i) { return '<button class="chip' + (i ? "" : " on") + '">' + esc(v) + '</button>'; }).join("") +
        '</div></div>';
    }).join("") +
    '<p style="margin-top:16px;font-size:13px;color:var(--ink-3);line-height:1.6">' + esc(p.desc) + '</p>',
    '<a class="btn btn-line" href="product.html?id=' + p.id + '">Full details</a>' +
    '<button class="btn btn-ink" id="qvA">Add to cart</button>');
  $$("[data-pick]").forEach(function (g) {
    g.onclick = function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", g).forEach(function (x) { x.classList.toggle("on", x === b); });
    };
  });
  $("#qvA").onclick = function () {
    var v = $$("[data-pick]").map(function (g) {
      var a = $(".chip.on", g); return a ? g.dataset.pick + ": " + a.textContent : "";
    }).filter(Boolean).join(", ");
    S.add(p.id, 1, v); buzz(14); shClose(); toast("Added to cart");
  };
}

/* ============================================================= 10. HOME */
var SLIDES = [
  { k: "Trusted online shop",
    h: 'Everything you love,<br><em>delivered with care</em>',
    p: "Authentic beauty, fashion and home essentials from the brands you already trust.",
    c: "Start shopping", href: "shop.html", keys: "boutique,interior,elegant" },
  { k: "Eid collection 2026",
    h: 'Dress the<br><em>occasion</em>',
    p: "Abayas, panjabis and gifting sets — up to 40% off this week only.",
    c: "Explore the edit", href: "shop.html?cat=wfash", keys: "abaya,modestfashion,elegant" },
  { k: "Beauty essentials",
    h: 'Skincare that<br><em>actually works</em>',
    p: "Sealed, original products sourced directly from authorised distributors.",
    c: "Shop beauty", href: "shop.html?cat=beauty", keys: "skincare,cosmetics,minimal" }
];
var VOUCH = [
  ["10%", "OFF", "ZUPONA10", "On everything, no minimum spend"],
  ["25%", "OFF", "EID25", "Eid special · min spend Tk 1,500"],
  ["5%", "OFF", "WELCOME5", "Your first order only"],
  ["Free", "SHIP", "FREESHIP", "Free delivery on any order"]
];
var LOOKS = [
  ["Modest evening", "wfash", "abaya,modestfashion,elegant", "Edit 01"],
  ["Smart casual", "mfash", "menfashion,streetstyle", "Edit 02"],
  ["The glow routine", "beauty", "skincare,routine,flatlay", "Edit 03"],
  ["Little ones", "baby", "baby,nursery,kids", "Edit 04"]
];
var POSTS = [
  ["Five skincare steps that survive Dhaka humidity", "Beauty", "skincare,routine,beauty", "6 min read"],
  ["How to style an abaya for Eid morning", "Fashion", "abaya,fashion,style", "4 min read"],
  ["Choosing your first watch under Tk 5,000", "Guide", "wristwatch,watch,men", "5 min read"]
];
var SAYS = [
  ["Sadia Islam", "Dhaka", "Ordered a full skincare set at 11pm and it arrived the next afternoon. Everything sealed and original."],
  ["Tanvir Ahmed", "Chattogram", "The watch looks even better in person. Cash on delivery made it completely risk free."],
  ["Nusrat Jahan", "Sylhet", "I returned one item and nobody argued. The refund hit my bKash within three days."]
];

function home() {
  /* hero */
  var t = $("#heroT");
  t.innerHTML = SLIDES.map(function (s, i) {
    return '<div class="hero-s"><img ' + att(s.keys, 1200, 900, "hero" + i, 34) + ' alt="" ' +
      (i ? 'loading="lazy"' : 'fetchpriority="high"') + '>' +
      '<div class="hero-c"><span class="hero-k">' + esc(s.k) + '</span>' +
      '<h1>' + s.h + '</h1><p>' + esc(s.p) + '</p>' +
      '<a class="btn btn-gold" href="' + s.href + '">' + esc(s.c) + '</a></div></div>';
  }).join("");
  var d = $("#heroD"), i = 0, tm;
  d.innerHTML = SLIDES.map(function (_, k) {
    return '<button data-g="' + k + '" class="' + (k ? "" : "on") + '" aria-label="Slide ' + (k + 1) + '"></button>';
  }).join("");
  function go(n) {
    i = (n + SLIDES.length) % SLIDES.length;
    t.style.transform = "translateX(-" + i * 100 + "%)";
    $$("#heroD button").forEach(function (b, k) { b.classList.toggle("on", k === i); });
  }
  function auto() { clearInterval(tm); tm = setInterval(function () { go(i + 1); }, 6200); }
  d.onclick = function (e) { var b = e.target.closest("[data-g]"); if (b) { go(+b.dataset.g); auto(); } };
  $("#heroP").onclick = function () { go(i - 1); auto(); };
  $("#heroN").onclick = function () { go(i + 1); auto(); };
  var x0 = null;
  t.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  t.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 42) go(i + (dx < 0 ? 1 : -1));
    x0 = null; auto();
  }, { passive: true });
  document.addEventListener("visibilitychange", function () { document.hidden ? clearInterval(tm) : auto(); });
  auto();

  /* categories */
  $("#cats").innerHTML = CATS.map(function (c) {
    return '<a class="cat" href="shop.html?cat=' + c.id + '">' +
      '<span class="cat-i"><img ' + att(c.keys, 420, 420, "cat" + c.id, c.hue) + ' alt="" loading="lazy"></span>' +
      '<b>' + esc(c.name) + '</b></a>';
  }).join("");

  /* deals */
  var deals = P.slice().sort(function (a, b) { return b.off - a.off; }).slice(0, 12);
  $("#deals").innerHTML = deals.map(function (p) {
    var pct = Math.max(14, Math.min(92, Math.round(p.sold / (p.sold + p.stock) * 100)));
    return '<a class="dc" href="product.html?id=' + p.id + '">' +
      '<div class="dc-i"><span class="dc-s">−' + p.off + '%</span>' +
      '<img ' + pAtt(p) + ' alt="' + esc(p.name) + '" loading="lazy"></div>' +
      '<div class="dc-b"><span class="dc-p">' + money(p.price) + '</span>' +
      '<s class="dc-o">' + money(p.old) + '</s>' +
      '<span class="dc-bar"><i style="width:' + pct + '%"></i></span>' +
      '<span class="dc-left">' + (100 - pct) + '% of stock left</span></div></a>';
  }).join("");
  var cd = $("#cd");
  (function tick() {
    var now = new Date(), end = new Date(now); end.setHours(23, 59, 59, 999);
    var s = Math.max(0, Math.floor((end - now) / 1000));
    var pad = function (n) { return String(n).padStart(2, "0"); };
    cd.innerHTML = '<b>' + pad(Math.floor(s / 3600)) + '</b><i>:</i><b>' + pad(Math.floor(s % 3600 / 60)) +
      '</b><i>:</i><b>' + pad(s % 60) + '</b>';
    setTimeout(tick, 1000);
  })();

  /* rails + grids */
  fill("#best", P.slice().sort(function (a, b) { return b.sold - a.sold; }).slice(0, 10));
  fill("#picks", P.slice().sort(function (a, b) { return b.rating - a.rating; }).slice(0, 10));
  fill("#fresh", P.filter(function (p) { return p.tag === "new"; })
    .concat(P.slice(14, 24)).slice(0, 10));

  /* editorial */
  $("#split").innerHTML = [
    ["Beauty week", "Up to 40% off skincare", "Sealed, original, dermatologist-loved formulas.", "shop.html?cat=beauty", "skincare,cosmetics,spa"],
    ["Accessories", "Watches & leather", "Quiet details that finish the outfit.", "shop.html?cat=macc", "wristwatch,leather,wallet"]
  ].map(function (b, k) {
    return '<a class="ed" href="' + b[3] + '"><img ' + att(b[4], 1000, 800, "ed" + k, 34) + ' alt="" loading="lazy">' +
      '<div class="ed-c"><span>' + esc(b[0]) + '</span><h3>' + esc(b[1]) + '</h3>' +
      '<p>' + esc(b[2]) + '</p><em>Shop now ' + ICO.arrow + '</em></div></a>';
  }).join("");

  /* vouchers */
  function vpaint() {
    var got = S.get("vouch", []);
    $("#vouch").innerHTML = VOUCH.map(function (v) {
      var has = got.indexOf(v[2]) > -1;
      return '<div class="v"><span class="v-a"><b>' + v[0] + '</b><span>' + v[1] + '</span></span>' +
        '<span class="v-b"><strong>' + v[2] + '</strong><small>' + esc(v[3]) + '</small></span>' +
        '<button class="v-g' + (has ? " got" : "") + '" data-v="' + v[2] + '">' +
        (has ? "Saved ✓" : "Collect") + '</button></div>';
    }).join("");
  }
  vpaint();
  $("#vouch").onclick = function (e) {
    var b = e.target.closest("[data-v]"); if (!b) return;
    var code = b.dataset.v, list = S.get("vouch", []);
    if (list.indexOf(code) < 0) { list.push(code); S.set("vouch", list); }
    vpaint(); buzz(16);
    if (navigator.clipboard) navigator.clipboard.writeText(code).catch(function () {});
    toast(code + " saved — code copied");
  };

  /* collections */
  $("#looks").innerHTML = LOOKS.map(function (l, k) {
    return '<a class="look" href="shop.html?cat=' + l[1] + '">' +
      '<img ' + att(l[2], 700, 940, "look" + k, 30) + ' alt="' + esc(l[0]) + '" loading="lazy">' +
      '<span class="look-c"><span>' + esc(l[3]) + '</span><b>' + esc(l[0]) + '</b></span></a>';
  }).join("");

  /* why */
  $("#why").innerHTML = [
    [ICO.shield, "100% authentic", "Sourced from authorised distributors and quality-checked before dispatch."],
    [ICO.truck, "Fast nationwide delivery", "24–48 hours inside Dhaka, 2–4 days everywhere else in Bangladesh."],
    [ICO.back, "30-day free returns", "Changed your mind? Send it back unused, no questions asked."],
    [ICO.chat, "Real human support", "Sat–Thu, 9am–10pm on phone, chat and WhatsApp."]
  ].map(function (w) {
    return '<div><i>' + w[0] + '</i><b>' + w[1] + '</b><p>' + w[2] + '</p></div>';
  }).join("");

  /* testimonials */
  $("#says").innerHTML = SAYS.map(function (s) {
    return '<div class="say"><span class="stars" style="font-size:13px">★★★★★</span>' +
      '<q>' + esc(s[2]) + '</q>' +
      '<div class="say-w"><img src="' + face(s[0]) + '" alt="" loading="lazy">' +
      '<span><b>' + esc(s[0]) + '</b><small>' + esc(s[1]) + ' · Verified buyer</small></span></div></div>';
  }).join("");

  /* journal */
  $("#posts").innerHTML = POSTS.map(function (b, k) {
    return '<a class="post" href="#"><img ' + att(b[2], 800, 520, "post" + k, 30) + ' alt="" loading="lazy">' +
      '<div><span>' + esc(b[1]) + '</span><h3>' + esc(b[0]) + '</h3><small>' + esc(b[3]) + '</small></div></a>';
  }).join("");

  /* brands */
  $("#brands").innerHTML = ["Lux", "Dove", "NIVEA", "CeraVe", "Garnier", "Naviforce"].map(function (b) {
    return '<a href="shop.html?q=' + encodeURIComponent(b) + '">' + b + '</a>';
  }).join("");

  viewedRail();
}

/* ============================================================= 11. SHOP */
function shop() {
  var st = {
    q: qs("q") || "", cats: qs("cat") ? [qs("cat")] : [], brands: [], min: "", max: "",
    rate: 0, sort: qs("sort") || "pop", view: "grid", page: 1, per: 12
  };
  var BR = P.map(function (p) { return p.brand; })
    .filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();

  $("#fCats").innerHTML = CATS.map(function (c) {
    return '<li><label class="ck"><input type="checkbox" value="' + c.id + '"' +
      (st.cats.indexOf(c.id) > -1 ? " checked" : "") + '><span>' + esc(c.name) + '</span></label></li>';
  }).join("");
  $("#fBr").innerHTML = BR.map(function (b) {
    return '<li><label class="ck"><input type="checkbox" value="' + esc(b) + '"><span>' + esc(b) + '</span></label></li>';
  }).join("");
  $("#fRt").innerHTML = [4, 3, 2].map(function (r) {
    return '<li><label class="ck"><input type="radio" name="rt" value="' + r + '">' +
      '<span class="stars">' + stars(r) + '</span><span>' + r + ' & up</span></label></li>';
  }).join("");
  if (st.q) { $("#echo").textContent = 'Results for “' + st.q + '”'; }
  $("#sort").value = st.sort;
  var ttl = $("#shTitle");
  if (st.cats.length && ttl) {
    var c0 = CATS.filter(function (c) { return c.id === st.cats[0]; })[0];
    if (c0) { ttl.textContent = c0.name; document.title = c0.name + " — Zupona"; }
  }

  function list() {
    var l = P.slice();
    if (st.q) {
      var t = st.q.toLowerCase();
      l = l.filter(function (p) { return (p.name + " " + p.brand + " " + p.catName).toLowerCase().indexOf(t) > -1; });
    }
    if (st.cats.length) l = l.filter(function (p) { return st.cats.indexOf(p.cat) > -1; });
    if (st.brands.length) l = l.filter(function (p) { return st.brands.indexOf(p.brand) > -1; });
    if (st.min !== "") l = l.filter(function (p) { return p.price >= +st.min; });
    if (st.max !== "") l = l.filter(function (p) { return p.price <= +st.max; });
    if (st.rate) l = l.filter(function (p) { return p.rating >= st.rate; });
    var s = st.sort;
    l.sort(function (a, b) {
      return s === "low" ? a.price - b.price : s === "high" ? b.price - a.price :
        s === "rate" ? b.rating - a.rating : s === "off" ? b.off - a.off :
        s === "new" ? (b.tag === "new") - (a.tag === "new") : b.sold - a.sold;
    });
    return l;
  }
  function draw() {
    var l = list();
    var pages = Math.max(1, Math.ceil(l.length / st.per));
    st.page = Math.min(st.page, pages);
    var slice = l.slice((st.page - 1) * st.per, st.page * st.per);
    var g = $("#grid");
    g.className = "grid" + (st.view === "list" ? " list" : "");
    g.innerHTML = slice.map(card).join("");
    $("#none").classList.toggle("hide", slice.length > 0);
    $("#cnt").textContent = l.length + (l.length === 1 ? " product" : " products");
    $("#pg").innerHTML = pages > 1
      ? '<button data-p="' + (st.page - 1) + '"' + (st.page === 1 ? " disabled" : "") + '>Prev</button>' +
        Array.from({ length: pages }, function (_, k) {
          return '<button data-p="' + (k + 1) + '" class="' + (st.page === k + 1 ? "on" : "") + '">' + (k + 1) + '</button>';
        }).join("") +
        '<button data-p="' + (st.page + 1) + '"' + (st.page === pages ? " disabled" : "") + '>Next</button>'
      : "";
    var act = [];
    st.cats.forEach(function (c) {
      var o = CATS.filter(function (x) { return x.id === c; })[0];
      act.push(["cat", c, o ? o.name : c]);
    });
    st.brands.forEach(function (b) { act.push(["br", b, b]); });
    if (st.rate) act.push(["rt", st.rate, st.rate + "★ & up"]);
    $("#chips").innerHTML = act.map(function (a) {
      return '<button class="chip on" data-x="' + a[0] + '" data-v="' + esc(a[1]) + '">' + esc(a[2]) + ' ✕</button>';
    }).join("");
  }
  $("#fCats").onchange = function () { st.cats = $$("#fCats input:checked").map(function (i2) { return i2.value; }); st.page = 1; draw(); };
  $("#fBr").onchange = function () { st.brands = $$("#fBr input:checked").map(function (i2) { return i2.value; }); st.page = 1; draw(); };
  $("#fRt").onchange = function (e) { st.rate = +e.target.value; st.page = 1; draw(); };
  $("#applyP").onclick = function () { st.min = $("#pMin").value; st.max = $("#pMax").value; st.page = 1; draw(); };
  $("#sort").onchange = function (e) { st.sort = e.target.value; st.page = 1; draw(); };
  $("#pg").onclick = function (e) {
    var b = e.target.closest("[data-p]"); if (!b || b.disabled) return;
    st.page = +b.dataset.p; draw(); window.scrollTo({ top: 0, behavior: "smooth" });
  };
  $("#chips").onclick = function (e) {
    var b = e.target.closest("[data-x]"); if (!b) return;
    var k = b.dataset.x, v = b.dataset.v;
    if (k === "cat") { st.cats = st.cats.filter(function (c) { return c !== v; }); $$("#fCats input").forEach(function (i2) { if (i2.value === v) i2.checked = false; }); }
    if (k === "br") { st.brands = st.brands.filter(function (c) { return c !== v; }); $$("#fBr input").forEach(function (i2) { if (i2.value === v) i2.checked = false; }); }
    if (k === "rt") { st.rate = 0; $$("#fRt input").forEach(function (i2) { i2.checked = false; }); }
    draw();
  };
  $("#reset").onclick = function () {
    st.cats = []; st.brands = []; st.rate = 0; st.min = ""; st.max = ""; st.q = "";
    $$(".fl input").forEach(function (i2) { if (i2.type === "number") i2.value = ""; else i2.checked = false; });
    $("#echo").textContent = ""; draw();
  };
  $$("[data-view]").forEach(function (b) {
    b.onclick = function () {
      st.view = b.dataset.view;
      $$("[data-view]").forEach(function (x) { x.classList.toggle("on", x === b); });
      draw();
    };
  });
  /* mobile sort sheet */
  var sb = $("#sortBtn");
  if (sb) sb.onclick = function () {
    var opts = $$("#sort option");
    sheet("Sort by", '<div class="sp-c">' + opts.map(function (o) {
      return '<button class="chip' + (o.value === st.sort ? " on" : "") + '" data-s="' + o.value + '">' + o.textContent + '</button>';
    }).join("") + '</div>', "");
    $("#shB").onclick = function (e) {
      var b = e.target.closest("[data-s]"); if (!b) return;
      st.sort = b.dataset.s; $("#sort").value = st.sort; st.page = 1; draw(); shClose();
      toast("Sorted by " + b.textContent.toLowerCase());
    };
  };
  draw();
}

/* ========================================================== 12. PRODUCT */
function product() {
  var p = byId(qs("id")) || P[0];
  document.title = p.name + " — Zupona";
  $("#pdCrumb").textContent = p.name;
  var cc = $("#pdCat");
  cc.textContent = p.catName; cc.href = "shop.html?cat=" + p.cat;

  /* remember view */
  var v = S.get("viewed", []).filter(function (x) { return x !== p.id; });
  v.unshift(p.id); S.set("viewed", v.slice(0, 12));

  var imgs = [0, 1, 2, 3].map(function (i) {
    return { s: pSrc(p, i), a: alt2(p.id + "-" + i, PHOTO.w, PHOTO.w), v: art(p.id + "-" + i, p.hue) };
  });
  var main = $("#pdMain");
  function setMain(o) { delete main.dataset.f; main.dataset.a = o.a; main.dataset.s = o.v; main.src = o.s; }
  setMain(imgs[0]); main.alt = p.name;
  $("#pdThumbs").innerHTML = imgs.map(function (o, i) {
    return '<button class="' + (i ? "" : "on") + '" data-i="' + i + '" aria-label="View ' + (i + 1) + '">' +
      '<img src="' + o.s + '" data-a="' + o.a + '" data-s="' + o.v + '" alt=""></button>';
  }).join("");
  $("#pdThumbs").onclick = function (e) {
    var b = e.target.closest("button"); if (!b) return;
    setMain(imgs[+b.dataset.i]);
    $$("#pdThumbs button").forEach(function (x) { x.classList.toggle("on", x === b); });
  };
  main.onclick = function () {
    sheet(p.name, '<img src="' + main.src + '" alt="" style="width:100%;border-radius:16px">' +
      '<p style="margin-top:12px;font-size:12.5px;color:var(--ink-3)">Pinch to zoom · swipe down to close</p>', "");
  };

  $("#pdBrand").textContent = p.brand;
  $("#pdName").textContent = p.name;
  $("#pdMeta").innerHTML = '<span class="stars">' + stars(p.rating) + '</span> ' + p.rating +
    ' <a href="#rev" style="color:var(--gold)">(' + p.reviews + ' reviews)</a> · ' + p.sold + ' sold';
  $("#pdPrice").innerHTML = '<b>' + money(p.price) + '</b>' +
    (p.old ? '<s>' + money(p.old) + '</s><span class="off">−' + p.off + '%</span>' : "") +
    '<div style="font-size:12.5px;color:var(--ink-3);margin-top:8px">' +
    (p.stock > 0 ? '<span style="color:var(--ok);font-weight:600">In stock</span> · only ' + p.stock + ' left'
                 : '<span style="color:var(--sale);font-weight:600">Out of stock</span>') + '</div>';
  $("#pdDesc").textContent = p.desc;

  var opts = [];
  if (p.colors) opts.push(["Colour", p.colors]);
  if (p.sizes) opts.push(["Size", p.sizes]);
  $("#pdOpts").innerHTML = opts.map(function (o) {
    return '<div class="opt"><span class="opt-l">' + o[0] + '</span><div class="opt-v" data-o="' + o[0] + '">' +
      o[1].map(function (x, i) { return '<button class="chip' + (i ? "" : " on") + '" data-v="' + esc(x) + '">' + esc(x) + '</button>'; }).join("") +
      '</div></div>';
  }).join("");
  function variant() {
    return $$("#pdOpts .chip.on").map(function (b) {
      return b.closest("[data-o]").dataset.o + ": " + b.dataset.v;
    }).join(", ");
  }
  $("#pdOpts").onclick = function (e) {
    var b = e.target.closest("[data-v]"); if (!b) return;
    var g = b.closest("[data-o]");
    $$(".chip", g).forEach(function (x) { x.classList.toggle("on", x === b); });
  };

  var q = 1;
  $("#pdQ").onclick = function (e) {
    var b = e.target.closest("[data-q]"); if (!b) return;
    q = Math.max(1, Math.min(p.stock || 99, q + (+b.dataset.q)));
    $("#pdQn").textContent = q;
  };
  function add() { S.add(p.id, q, variant()); buzz(14); toast("Added " + q + " to cart"); }
  $("#pdAdd").onclick = add;
  $("#pdBuy").onclick = function () { S.add(p.id, q, variant()); location.href = "checkout.html"; };

  function wireWish(btn) {
    btn.classList.toggle("on", S.inWish(p.id));
    btn.onclick = function () {
      var on = S.toggleWish(p.id);
      $$("[data-pw]").forEach(function (b) {
        b.classList.toggle("on", on); b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
      });
      buzz(12); toast(on ? "Saved to your list" : "Removed from your list");
    };
  }
  $$("[data-pw]").forEach(wireWish);

  /* delivery info with real dates */
  var d1 = new Date(), d2 = new Date();
  d1.setDate(d1.getDate() + 1); d2.setDate(d2.getDate() + 3);
  var fmt = function (d) { return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }); };
  $("#pdInfo").innerHTML =
    '<div class="info-r"><i>📍</i><span><b>Deliver to Dhaka 1213</b>' +
      '<small>Tk ' + CFG.ship + ' · free over ' + money(CFG.freeOver) + '</small></span></div>' +
    '<div class="info-r"><i>🚚</i><span><b>Arrives ' + fmt(d1) + ' – ' + fmt(d2) + '</b>' +
      '<small>Order before 6 PM for same-day dispatch</small></span></div>' +
    '<div class="info-r"><i>↩</i><span><b>30-day free return</b>' +
      '<small>Unused items, original packaging</small></span></div>' +
    '<div class="info-r"><i>💵</i><span><b>Cash on delivery available</b>' +
      '<small>Pay the rider when it arrives</small></span></div>';

  $("#pdSpec").innerHTML = [
    ["Brand", p.brand], ["Category", p.catName], ["SKU", "ZUP-" + p.id.toUpperCase()],
    ["Availability", p.stock + " units"], ["Warranty", "7-day replacement"],
    ["Origin", "Officially imported"], ["Return window", "30 days"]
  ].map(function (r) { return '<tr><th>' + r[0] + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join("");

  var names = ["Rakib H.", "Sadia I.", "Tanvir A.", "Mim K."];
  var texts = ["Exactly as described, sealed packaging and quick delivery.",
    "Great value for the price. Would order from Zupona again.",
    "Original product, matches the photos. Arrived in two days.",
    "Good quality overall — recommended for daily use."];
  $("#pdRevs").innerHTML = names.map(function (n, i) {
    var r = Math.max(3, Math.round(p.rating) - (i % 2));
    return '<div class="rev"><div class="rev-t"><img src="' + face(n) + '" alt="" loading="lazy">' +
      '<b>' + n + '</b><span class="stars">' + stars(r) + '</span></div>' +
      '<p style="font-size:13.5px;color:var(--ink-2)">' + texts[i] + '</p>' +
      '<small style="color:var(--ink-3);font-size:11.5px">Verified purchase</small></div>';
  }).join("");
  $("#pdBig").innerHTML = '<div style="font-family:var(--serif);font-size:42px;line-height:1">' + p.rating + '</div>' +
    '<div class="stars" style="font-size:16px">' + stars(p.rating) + '</div>' +
    '<div style="color:var(--ink-3);font-size:12.5px">' + p.reviews + ' reviews</div>';

  $$("[data-tab]").forEach(function (b) {
    b.onclick = function () {
      $$("[data-tab]").forEach(function (x) { x.classList.toggle("on", x === b); });
      $$("[data-tp]").forEach(function (x) { x.classList.toggle("hide", x.dataset.tp !== b.dataset.tab); });
    };
  });

  $("#pdShare").onclick = function () {
    var d = { title: p.name, text: p.name + " on Zupona — " + money(p.price), url: location.href };
    if (navigator.share) navigator.share(d).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(function () { toast("Link copied"); });
  };

  fill("#related", P.filter(function (x) { return x.cat === p.cat && x.id !== p.id; })
    .concat(P.filter(function (x) { return x.cat !== p.cat; })).slice(0, 10));
  viewedRail(p.id);
}

function viewedRail(skip) {
  var el = $("#viewed"); if (!el) return;
  var l = S.get("viewed", []).filter(function (x) { return x !== skip; }).map(byId).filter(Boolean);
  var sec = el.closest(".sec");
  if (l.length < 2) { if (sec) sec.classList.add("hide"); return; }
  if (sec) sec.classList.remove("hide");
  el.innerHTML = l.slice(0, 10).map(card).join("");
}

/* ============================================================= 13. CART */
function cartPage() {
  var code = S.get("coupon", "");
  function draw() {
    var t = S.sum(code);
    $("#cN").textContent = t.n + (t.n === 1 ? " item" : " items");
    $("#cEmpty").classList.toggle("hide", t.lines.length > 0);
    $("#cBody").classList.toggle("hide", t.lines.length === 0);
    $("#cRows").innerHTML = t.lines.map(function (l) {
      return '<div class="cr"><img ' + pAtt(l.p) + ' alt="">' +
        '<div><a href="product.html?id=' + l.p.id + '"><div class="cr-n">' + esc(l.p.name) + '</div></a>' +
        '<div class="cr-m">' + esc(l.p.brand) + (l.v ? " · " + esc(l.v) : "") + '</div>' +
        '<div class="cr-m" style="color:var(--ok)">In stock · ships in 24h</div>' +
        '<button class="sv" data-save="' + l.key + '">♡ Save for later</button></div>' +
        '<div class="cr-u">' + money(l.p.price) + '</div>' +
        '<div class="cr-q"><span class="qty"><button data-q="-1" data-k="' + l.key + '">−</button>' +
        '<span>' + l.q + '</span><button data-q="1" data-k="' + l.key + '">+</button></span></div>' +
        '<div class="cr-t">' + money(l.tot) + '</div>' +
        '<button class="cr-x" data-rm="' + l.key + '" aria-label="Remove">' + ICO.close + '</button></div>';
    }).join("");
    $("#sSub").textContent = money(t.sub);
    $("#sDisc").textContent = "− " + money(t.disc);
    $("#sShip").textContent = t.ship ? money(t.ship) : "FREE";
    $("#sTot").textContent = money(t.total);
    var pct = Math.min(100, Math.round(t.sub / CFG.freeOver * 100));
    $("#sBar").style.width = pct + "%";
    var eta = $("#cEta");
    if (eta) {
      var a = new Date(), b2 = new Date();
      a.setDate(a.getDate() + 1); b2.setDate(b2.getDate() + 3);
      var f = function (d) { return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }); };
      eta.innerHTML = t.lines.length ? "🚚 Arrives " + f(a) + " – " + f(b2) : "";
    }
    $("#sNote").innerHTML = (t.sub >= CFG.freeOver || !t.sub)
      ? '<span style="color:var(--ok);font-weight:600">Free delivery unlocked</span>'
      : 'Add <b>' + money(CFG.freeOver - t.sub) + '</b> more for free delivery';
  }
  $("#cCoupon").onclick = function () {
    var v = $("#cCode").value.trim().toUpperCase();
    if (CFG.coupons[v] !== undefined) { code = v; S.set("coupon", v); toast(v + " applied"); }
    else { code = ""; S.set("coupon", ""); toast("That code isn't valid"); }
    draw();
  };
  $("#cClear").onclick = function () {
    var backup = S.cart();
    S.clear(); draw();
    toast("Cart cleared", { label: "Undo", fn: function () { S.set("cart", backup); S.sync(); draw(); } });
  };
  $("#cRows").addEventListener("click", function (e) {
    var b = e.target.closest("[data-save]"); if (!b) return;
    var l = S.cart().filter(function (x) { return x.key === b.dataset.save; })[0];
    if (!l) return;
    if (!S.inWish(l.id)) S.toggleWish(l.id);
    S.drop(l.key);
    toast("Moved to your saved items", { label: "Undo", fn: function () { S.add(l.id, l.q, l.v); } });
  });
  document.addEventListener("zup", draw);
  fill("#cSuggest", P.slice().sort(function (a, b) { return b.off - a.off; }).slice(0, 10));
  draw();
}

/* ========================================================= 14. CHECKOUT */
function checkout() {
  var code = S.get("coupon", ""), step = 1;
  function sum() {
    var t = S.sum(code);
    $("#coItems").innerHTML = t.lines.map(function (l) {
      return '<div class="co"><span class="co-i"><img src="' + pSrc(l.p) + '" alt=""><em>' + l.q + '</em></span>' +
        '<span class="co-n">' + esc(l.p.name) + '<small>' + esc(l.v || l.p.brand) + '</small></span>' +
        '<span class="co-a">' + money(l.tot) + '</span></div>';
    }).join("") || '<p style="color:var(--ink-3);font-size:13px">Your cart is empty.</p>';
    $("#coSub").textContent = money(t.sub);
    $("#coDisc").textContent = "− " + money(t.disc);
    $("#coShip").textContent = t.ship ? money(t.ship) : "FREE";
    $("#coTot").textContent = money(t.total);
    return t;
  }
  function show(n) {
    step = n;
    $$("[data-step]").forEach(function (s) { s.classList.toggle("hide", +s.dataset.step !== n); });
    $$(".st").forEach(function (d) {
      var k = +d.dataset.d;
      d.classList.toggle("on", k === n);
      d.classList.toggle("ok", k < n);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  $$("[data-next]").forEach(function (b) {
    b.onclick = function () {
      var f = b.closest("[data-step]").querySelector("form");
      if (f && !f.reportValidity()) return;
      show(step + 1);
    };
  });
  $$("[data-back]").forEach(function (b) { b.onclick = function () { show(step - 1); }; });
  $$(".pay").forEach(function (b) {
    b.onclick = function () {
      $$(".pay").forEach(function (x) { x.classList.toggle("on", x === b); });
      $("#payNote").textContent = b.dataset.note || "";
    };
  });
  $("#place").onclick = function () {
    var t = S.sum(code);
    if (!t.lines.length) { toast("Your cart is empty"); return; }
    var f = $("#shipF");
    if (f && !f.reportValidity()) { show(1); return; }
    var id = "ZUP" + Date.now().toString().slice(-8);
    var o = S.orders();
    o.unshift({
      id: id, date: new Date().toISOString(), total: t.total, status: "Processing",
      items: t.lines.map(function (l) { return { id: l.p.id, name: l.p.name, q: l.q, v: l.v }; }),
      name: $("#fName").value, phone: $("#fPhone").value,
      addr: $("#fAddr").value + ", " + $("#fCity").value,
      pay: ($(".pay.on") || {}).dataset ? $(".pay.on").dataset.pay : "Cash on delivery"
    });
    S.set("orders", o); S.clear(); S.set("coupon", "");
    $("#okId").textContent = id;
    $("#okTot").textContent = money(t.total);
    show(4); confetti(); buzz(40);
  };
  document.addEventListener("zup", sum);
  sum(); show(1);
}

/* ========================================================== 15. ACCOUNT */
function account() {
  var tab = qs("tab") || "dash";
  function show(t) {
    $$("[data-acc]").forEach(function (p) { p.classList.toggle("hide", p.dataset.acc !== t); });
    $$("[data-at]").forEach(function (b) { b.classList.toggle("on", b.dataset.at === t); });
    history.replaceState(null, "", "account.html?tab=" + t);
  }
  $$("[data-at]").forEach(function (b) { b.onclick = function () { show(b.dataset.at); }; });

  var o = S.orders();
  $("#accOrders").innerHTML = o.length ? o.map(function (r, i) {
    var steps = ["Order placed", "Packed at warehouse", "Handed to courier", "Out for delivery", "Delivered"];
    var at = i === 0 ? 2 : 4;
    return '<div class="oc"><div class="oc-t"><div><b>#' + esc(r.id) + '</b>' +
      '<small>' + new Date(r.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) + '</small></div>' +
      '<span class="pill">' + esc(r.status) + '</span></div>' +
      '<div class="oc-i">' + r.items.map(function (it) { return '<span>' + esc(it.name) + ' × ' + it.q + '</span>'; }).join("") + '</div>' +
      '<div class="oc-b"><span>Paid via ' + esc(r.pay || "COD") + '</span><b>' + money(r.total) + '</b></div>' +
      '<button class="btn btn-line btn-sm" style="margin-top:12px" data-re="' + esc(r.id) + '">Order again</button>' +
      '<div class="trk">' + steps.map(function (s, k) {
        var d = new Date(); d.setDate(d.getDate() - (steps.length - k - 1));
        return '<div class="' + (k < at ? "ok" : k === at ? "now" : "") + '"><b>' + s + '</b><small>' +
          (k <= at ? d.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + " · Dhaka hub" : "Pending") +
          '</small></div>';
      }).join("") + '</div></div>';
  }).join("")
    : '<div class="none"><h3>No orders yet</h3><p>Orders you place will appear here with live tracking.</p>' +
      '<a class="btn btn-gold btn-sm" style="margin-top:16px" href="shop.html">Start shopping</a></div>';

  function wish() {
    var l = S.wish().map(byId).filter(Boolean);
    $("#accWish").innerHTML = l.length
      ? '<div class="grid">' + l.map(card).join("") + '</div>'
      : '<div class="none"><h3>Nothing saved yet</h3><p>Tap the heart on any product to keep it here.</p>' +
        '<a class="btn btn-gold btn-sm" style="margin-top:16px" href="shop.html">Browse products</a></div>';
  }
  document.addEventListener("zup", wish); wish();

  $("#accOrders").addEventListener("click", function (e) {
    var b = e.target.closest("[data-re]"); if (!b) return;
    var r = S.orders().filter(function (x) { return x.id === b.dataset.re; })[0];
    if (!r) return;
    var n = 0;
    r.items.forEach(function (it) { if (byId(it.id)) { S.add(it.id, it.q, it.v || ""); n += it.q; } });
    buzz(16);
    toast(n ? n + " item" + (n === 1 ? "" : "s") + " added to your cart" : "Those items are no longer available");
  });

  $("#accStats").innerHTML = [
    ["Orders", o.length], ["Saved", S.wish().length],
    ["In cart", S.sum().n], ["Points", o.length * 120]
  ].map(function (s) { return '<div class="stat"><b>' + s[1] + '</b><span>' + s[0] + '</span></div>'; }).join("");

  $$(".accF").forEach(function (f) {
    f.onsubmit = function (e) { e.preventDefault(); toast("Saved successfully"); };
  });
  show(tab);
}

/* ============================================================= 16. BOOT */
function mount() {
  var page = document.body.dataset.page || "";
  var h = $("#hd"), f = $("#ft"), x = $("#xt");
  if (h) h.innerHTML = headHTML(page);
  if (f) f.innerHTML = footHTML();
  if (x) x.innerHTML = extrasHTML(page);

  var veil = $("[data-veil]");
  function close() {
    $$(".dw").forEach(function (d) { d.classList.remove("on"); });
    $$(".fl").forEach(function (d) { d.classList.remove("on"); });
    veil && veil.classList.remove("on");
    document.body.style.overflow = "";
  }
  function open(sel) {
    var d = $(sel); if (!d) return;
    d.classList.add("on");
    veil && veil.classList.add("on");
    document.body.style.overflow = "hidden";
  }

  document.addEventListener("click", function (e) {
    var o = e.target.closest("[data-open]");
    if (o) {
      var k = o.dataset.open;
      open(k === "menu" ? "#dwMenu" : k === "cart" ? "#dwCart" : k === "filters" ? ".fl" : "");
      return;
    }
    if (e.target.closest("[data-close]") || e.target.closest("[data-veil]")) { close(); return; }
    if (e.target.closest("[data-search]")) { e.preventDefault(); soOpen(""); return; }
    if (e.target.closest("[data-tt]")) { window.zTheme(); return; }

    var a = e.target.closest("[data-add]");
    if (a) {
      var p = byId(a.dataset.add);
      if (p) { S.add(p.id, 1, ""); buzz(14); toast("Added to cart"); }
      return;
    }
    var w = e.target.closest("[data-w]");
    if (w) {
      var on = S.toggleWish(w.dataset.w);
      $$('[data-w="' + w.dataset.w + '"]').forEach(function (b) {
        b.classList.toggle("on", on);
        b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
      });
      buzz(12); toast(on ? "Saved to your list" : "Removed");
      return;
    }
    var q = e.target.closest("[data-q][data-k]");
    if (q) {
      var line = S.cart().filter(function (l) { return l.key === q.dataset.k; })[0];
      if (line) S.qty(q.dataset.k, line.q + (+q.dataset.q));
      return;
    }
    var rm = e.target.closest("[data-rm]");
    if (rm) {
      var k2 = rm.dataset.rm;
      var gone = S.cart().filter(function (l) { return l.key === k2; })[0];
      S.drop(k2);
      toast("Item removed", gone ? { label: "Undo", fn: function () {
        S.add(gone.id, gone.q, gone.v); toast("Item restored");
      } } : null);
      return;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { close(); shClose(); soClose(); }
  });

  /* desktop search submit */
  $$("[data-find]").forEach(function (form) {
    form.onsubmit = function (e) {
      e.preventDefault();
      var fd = new FormData(form), pr = new URLSearchParams();
      var v = (fd.get("q") || "").trim();
      if (v) pr.set("q", v);
      if (fd.get("cat")) pr.set("cat", fd.get("cat"));
      location.href = "shop.html" + (pr.toString() ? "?" + pr : "");
    };
  });

  /* long-press quick view (touch) + right-click (desktop) */
  var t2 = null, moved = false;
  document.addEventListener("touchstart", function (e) {
    var c = e.target.closest(".pc[data-id]"); if (!c) return;
    moved = false;
    t2 = setTimeout(function () { if (!moved) quick(c.dataset.id); }, 460);
  }, { passive: true });
  document.addEventListener("touchmove", function () { moved = true; clearTimeout(t2); }, { passive: true });
  document.addEventListener("touchend", function () { clearTimeout(t2); }, { passive: true });
  document.addEventListener("contextmenu", function (e) {
    var c = e.target.closest(".pc[data-id]");
    if (c && !phone()) { e.preventDefault(); quick(c.dataset.id); }
  });

  /* pull to refresh */
  if ("ontouchstart" in window) {
    var y0 = null, dy = 0;
    var ind = document.createElement("div");
    ind.style.cssText = "position:fixed;top:0;left:0;right:0;height:0;display:grid;place-items:center;" +
      "z-index:120;overflow:hidden;color:var(--gold);font-size:12px;font-weight:700;pointer-events:none";
    ind.textContent = "↻";
    document.body.appendChild(ind);
    window.addEventListener("touchstart", function (e) {
      if (window.scrollY <= 0 && !document.body.style.overflow) y0 = e.touches[0].clientY;
    }, { passive: true });
    window.addEventListener("touchmove", function (e) {
      if (y0 === null) return;
      dy = e.touches[0].clientY - y0;
      if (dy > 0) ind.style.height = Math.min(64, dy * .5) + "px";
    }, { passive: true });
    window.addEventListener("touchend", function () {
      if (y0 === null) return;
      if (dy > 96) { ind.style.height = "48px"; setTimeout(function () { location.reload(); }, 320); }
      else ind.style.height = "0";
      y0 = null; dy = 0;
    }, { passive: true });
  }

  /* PWA */
  if ("serviceWorker" in navigator && location.protocol.indexOf("http") === 0) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }

  var hb = $("#helpB");
  if (hb) hb.onclick = function () {
    sheet("How can we help?",
      '<a class="ml" style="border-radius:14px" href="tel:' + CFG.phone.replace(/\s/g, "") + '">' +
        '<i>📞</i><span><b style="display:block;font-size:13.5px">Call us</b>' +
        '<small style="color:var(--ink-3);font-size:11.5px">' + CFG.phone + ' · 9am–10pm</small></span></a>' +
      '<a class="ml" style="border-radius:14px" href="https://wa.me/8809610000000" target="_blank" rel="noopener">' +
        '<i>💬</i><span><b style="display:block;font-size:13.5px">WhatsApp</b>' +
        '<small style="color:var(--ink-3);font-size:11.5px">Usually replies in a few minutes</small></span></a>' +
      '<a class="ml" style="border-radius:14px" href="mailto:' + CFG.mail + '">' +
        '<i>✉</i><span><b style="display:block;font-size:13.5px">Email us</b>' +
        '<small style="color:var(--ink-3);font-size:11.5px">' + CFG.mail + '</small></span></a>' +
      '<a class="ml" style="border-radius:14px" href="account.html?tab=orders">' +
        '<i>📦</i><span><b style="display:block;font-size:13.5px">Track my order</b>' +
        '<small style="color:var(--ink-3);font-size:11.5px">See live delivery status</small></span></a>' +
      '<div style="border-top:1px solid var(--line);margin-top:14px;padding-top:14px">' +
      '<p style="font-size:12.5px;color:var(--ink-3);line-height:1.6">' +
      '<b style="color:var(--ink)">Delivery</b> — 24–48h inside Dhaka, 2–4 days elsewhere. Free over ' +
      money(CFG.freeOver) + '.<br><b style="color:var(--ink)">Returns</b> — 30 days, unused, no questions asked.' +
      '</p></div>', "");
  };

  S.sync();
}

document.addEventListener("DOMContentLoaded", function () {
  theme();
  mount();
  scrollFx();
  cartBar();
  var page = document.body.dataset.page;
  try {
    if (page === "home") home();
    else if (page === "shop") shop();
    else if (page === "product") product();
    else if (page === "cart") cartPage();
    else if (page === "checkout") checkout();
    else if (page === "account") account();
  } catch (err) { console.error("[zupona]", err); }
  reveal();
});

window.ZUPONA = { P: P, CATS: CATS, CFG: CFG, S: S, toast: toast, sheet: sheet, quick: quick, search: soOpen };
})();
