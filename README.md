# ZUPONA — Trusted Online Shop

A complete, responsive e-commerce front-end (mobile + desktop) inspired by Amazon / Daraz / Alibaba.
Pure HTML + CSS + vanilla JavaScript. No build step, no dependencies, works offline.

## Run it
Open `index.html` in any browser. To host: upload the whole `zupona` folder to Netlify, Vercel, GitHub Pages or any shared hosting `public_html`.

## Pages
| File | What it does |
|---|---|
| index.html | Home: hero slider, categories, best sellers, flash deals + countdown, top picks, banners, new arrivals, brands, newsletter |
| shop.html | Listing: category/brand/price/rating filters, sort, grid & list view, pagination, search results |
| product.html | Product: gallery + thumbnails, variants, quantity, add to cart / buy now, tabs (description, specs, reviews, delivery), related items |
| cart.html | Cart: qty update, remove, coupons, free-delivery progress bar, order summary |
| checkout.html | 4-step checkout: shipping form → payment method → review → order confirmation |
| account.html | Dashboard, order history, wishlist, addresses, profile, sign in / register |

## Features
- Fully responsive: 360px phone → 4K desktop. Mobile bottom nav, slide-in menu, slide-in cart drawer, filter drawer.
- Cart, wishlist and orders persist in localStorage (survive refresh).
- Working coupons: `ZUPONA10` (10%), `EID25` (25%), `WELCOME5` (5%).
- Free delivery over Tk 999, otherwise Tk 60 — configurable.
- Product artwork is generated as inline SVG, so nothing breaks without internet. Replace `pImg()` in js/app.js with your real image URLs.

## Customise
Everything lives in two files:
- `css/style.css` → top `:root` block holds colours, radius, shadows, container width.
- `js/app.js` → `CONFIG` (currency, shipping, coupons), `CATEGORIES`, `PRODUCTS` (add your catalogue here).

## Connecting a backend
Replace the `PRODUCTS` array with a `fetch('/api/products')` call and post the cart from `Store.totals()` in `initCheckout()` to your order endpoint. Everything else stays the same.
