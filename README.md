# ZUPONA — Trusted Online Shop

A complete, responsive marketplace front-end. **Two source files** (`css/zupona.css`, `js/zupona.js`)
plus six pages. Pure HTML + CSS + vanilla JavaScript — no build step, no dependencies, installable as an app.

## Run it
Open `index.html`. For the install prompt and offline mode, serve over http(s) — Netlify, Vercel,
GitHub Pages, or any `public_html` folder.

## Design identity
| Choice | Why it's Zupona and not a clone |
|---|---|
| Warm ivory canvas `#FAF8F4` | Marketplaces default to cold grey or red-on-white. Ivory reads premium and calm. |
| One gold accent `#B8912F` | Used once per screen — CTA, price, or active state. Never two at once. |
| Serif headlines | Amazon, Daraz and Alibaba are all sans. A serif display face is instantly distinctive. |
| Full-bleed hero + scrim | One image, one promise, one action. Nothing competes above the fold. |

## The first five seconds (mobile)
1. **Who is this?** — 56px header: menu, wordmark, cart. One soft search pill below.
2. **What's the promise?** — full-bleed hero, kicker, serif headline, single gold CTA.
3. **Why keep scrolling?** — trust ribbon: 100% authentic · 24–48h delivery · 30-day returns.

Then: categories → today's deals → best sellers → editorial → vouchers → the rest.

## Pages
| File | Contents |
|---|---|
| index.html | Hero, trust ribbon, categories, deals + countdown, best sellers, editorial split, vouchers, top rated, edits, new arrivals, recently viewed, why Zupona, testimonials, brands, journal, newsletter |
| shop.html | Filters (category, brand, price, rating), sort sheet, grid/list, chips, pagination |
| product.html | 4-image gallery, variants, sticky mobile action bar, delivery dates, tabs, reviews, related |
| cart.html | Quantity, save for later, coupons, free-delivery progress, delivery estimate, totals |
| checkout.html | 4 steps: shipping → payment → review → confirmation |
| account.html | Dashboard, orders with tracking + one-tap reorder, saved items, addresses, profile |

## Convenience features
- **Undo** on every removal — remove an item or clear the cart and the toast offers a one-tap undo.
- **Save for later** in the cart — moves an item to your saved list instead of deleting it.
- **Order again** — one tap on any past order refills the cart.
- **Free-delivery progress** in the cart drawer: "Add Tk 240 more for free delivery".
- **Delivery estimate** with real dates on both the product page and the cart.
- **Floating help button** — call, WhatsApp, email, track order, plus delivery and return terms.
- Dark mode (follows your system, toggle in the menu drawer).
- Full-screen search with live suggestions, trending terms, recent history and voice input.
- Long-press any product for quick view. Swipe-down to dismiss sheets. Pull to refresh.
- PWA install + offline caching. Haptic feedback. Reduced-motion respected.

**Coupons:** `ZUPONA10` 10% · `EID25` 25% · `WELCOME5` 5% · `FREESHIP` free delivery.
Free delivery over Tk 999, otherwise Tk 60.

## Customise
`css/zupona.css` → the `:root` block: colours, type scale, spacing scale, radii, shadows.

`js/zupona.js` → `CFG` (currency, shipping, coupons) · `CATS` (departments) · `RAW` (catalogue)
· `SLIDES` (hero) · `VOUCH` · `LOOKS` · `POSTS` · `SAYS` · `PHOTO`.

Adding a product is one row in `RAW`:
```js
["p29","Product name","Brand","cat",price,oldPrice,rating,reviews,sold,stock,"hot","photo,keywords","Description",["Colour"],["Size"]]
```
