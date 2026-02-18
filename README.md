# Segecha Webpage (Static)

This is a **static** version of the Segecha Logistics website. No server, database, or backend is required. You can host it on any static hosting (Netlify, GitHub Pages, cPanel static site, etc.).

## Home page

The **home page** is **`index.html`**. Open this file in a browser (or use your host’s default document) to view the site. When you upload the folder to a web host, the server will usually serve `index.html` when someone visits your domain root (e.g. `https://yoursite.com/`).

## What’s included

- **index.html** – Home page (hero, why choose us, CTA, testimonials, stats)  
- **about.html** – About / Why Choose Us  
- **services.html** – Services overview  
- **contact.html** – Contact details, map, business hours  
- **quote.html** – Simple quote request form (see “Quote form” below)  
- **privacy-policy.html**, **terms-of-service.html**, **cookie-policy.html** – Legal pages  
- **css/style.css** – Custom styles  
- **js/scripts.js** – Mobile menu and scroll animations  

## Images

Place your images in the **`images/`** folder. The site expects these files (paths used in the HTML):

- `images/logo-main.png`
- `images/logo-sg-group.png`
- `images/logo-sg.png` (optional, for mobile menu)
- `images/logo-icon.png` (optional, favicon)
- `images/hero_mercedes_actros.jpg` (hero background; if missing, the hero uses a dark blue fallback)
- `images/hero_truck.jpg`
- `images/fleet_tracking_room.jpg`
- `images/tracking_page_map.jpg`
- `images/fleet_africa.jpg`
- `images/team_dispatch.jpg`
- `images/gps_tracking_map.jpg`
- `images/border_checkpoint.jpg`
- `images/warehouse_loading.jpg`

You can copy them from the original Flask project’s `segecha-logistics/static/images/` if you have that folder.

## Quote form

The quote form in **quote.html** sends submissions to **quote@segecha.com** by email. When the user clicks **Submit**, their default email app (Outlook, Mail, Gmail, etc.) opens with a new message already addressed to quote@segecha.com and the form data in the body. The user only has to click **Send** in their email client.

No Formspree or other service is required. If you want to use a different address, change `quote@segecha.com` in the form’s JavaScript (search for `mailto:quote@segecha.com` in `quote.html`).

## How to run locally

1. Put all files in a folder (e.g. `Segecha Webpage Converted`).  
2. Add your images to `images/` as above.  
3. Open `index.html` in a browser, or run a simple local server, e.g.:

   ```bash
   cd "Segecha Webpage Converted"
   python3 -m http.server 8000
   ```

   Then visit `http://localhost:8000`.

## Hosting

Upload the whole folder to your host’s `public_html` (or equivalent). Ensure:

- `index.html` is the default document (the included **.htaccess** sets this).  
- All links are relative (e.g. `about.html`, `css/style.css`, `images/logo-main.png`) so they work in any subfolder or domain.

**cPanel:** See **DEPLOY_CPANEL.md** for step-by-step upload, ZIP instructions, and domain/URL checklist.

---

Converted from the Segecha Logistics Flask app to a static site. No Python or server required.
