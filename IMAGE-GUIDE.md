# Zupona — Image Guide

Photos load from **loremflickr** (keyword-matched) → fall back to **picsum** → fall back to built-in
SVG artwork. Nothing ever shows a broken image, even fully offline.

| Section | Picture needed | Size | Count |
|---|---|---|---|
| Hero slide 1 | Boutique / lifestyle interior, subject right of frame | 1200 × 900 | 1 |
| Hero slide 2 | Abaya / modest-wear model | 1200 × 900 | 1 |
| Hero slide 3 | Skincare flatlay, soft light | 1200 × 900 | 1 |
| Category tiles | One clean packshot per department | 420 × 420 | 8 |
| Product cards (all rails and grids) | Square packshot, plain light background | 700 × 700 | per product |
| Today's deals | Same packshots, discounted items | 700 × 700 | 12 |
| Editorial split | Beauty scene · watch & leather flatlay | 1000 × 800 | 2 |
| Shop the edits | Tall styled model shots | 700 × 940 | 4 |
| Testimonials | Customer faces, round crop | 96 × 96 | 3 |
| Journal cards | Editorial photos | 800 × 520 | 3 |
| Product gallery | 4 angles: front, detail, in use, packaging | 700 × 700 | 4 per product |
| Review avatars | Reviewer faces | 96 × 96 | 4 |
| Cart / checkout thumbs | Product packshot, auto-cropped | 700 × 700 | per line |

## Rules that keep it clean
- **Packshots:** square 1:1, subject centred, ~15% padding, plain white or very light background.
- **Lifestyle:** keep the subject on the **right** in hero and banner shots — text sits on the left.
- **Faces:** square source; CSS crops to a circle.
- **Weight:** WebP or JPEG at 70–80%. Under 120 KB per packshot, under 300 KB for hero images.
- Hero image 1 loads eagerly; everything else is lazy.

## Using your own photos
1. Create an `images/` folder beside `index.html`.
2. Name product shots `p01-0.jpg`, `p01-1.jpg` … matching product ids.
3. In `js/zupona.js`, replace the body of `pSrc`:

```js
function pSrc(p, i) { return "images/" + p.id + "-" + (i || 0) + ".jpg"; }
```

Set `PHOTO.on = false` to disable remote photos entirely.
To change a product's photo subject, edit its keyword string (field 12) in `RAW`.
