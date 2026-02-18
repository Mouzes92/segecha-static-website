# Deploy Static Segecha Site to cPanel

This guide is for the **static** website (HTML, CSS, JS, images). No Python or database is required.

---

## Before you upload

1. **Domain**  
   The site uses `https://www.segecha.com` in sitemap, robots, and meta tags. If your live URL is different (e.g. `segecha.com` without www, or another domain):
   - Edit **sitemap.xml**: replace `https://www.segecha.com` with your full URL.
   - Edit **robots.txt**: replace `https://www.segecha.com` in the Sitemap line.
   - In every HTML file, search for `https://www.segecha.com` and replace with your full URL (in `<link rel="canonical">` and `<meta property="og:...">` tags).

2. **Images**  
   Ensure the **images/** folder is filled. Copy from your Flask project’s `static/images/` if needed. Required for the design:
   - `logo-main.png`, `logo-sg-group.png`, `logo-icon.png`
   - `hero_mercedes_actros.jpg`, `hero_truck.jpg`, `fleet_tracking_room.jpg`, `tracking_page_map.jpg`
   - `fleet_africa.jpg`, `team_dispatch.jpg`, `gps_tracking_map.jpg`, `border_checkpoint.jpg`, `warehouse_loading.jpg`

---

## What to upload

Upload the **entire** contents of this folder so the structure on the server looks like this:

```
public_html/          (or your subdomain folder)
├── index.html
├── about.html
├── services.html
├── contact.html
├── quote.html
├── faq.html
├── privacy-policy.html
├── terms-of-service.html
├── cookie-policy.html
├── robots.txt
├── sitemap.xml
├── .htaccess
├── css/
│   └── style.css
├── js/
│   └── scripts.js
└── images/
    └── (all your images)
```

Do **not** upload: `README.md`, `DEPLOY_CPANEL.md`, or any `.git` folder if present.

---

## Step 1: Create a ZIP (optional but recommended)

1. On your computer, open the **Segecha Webpage Converted** folder.
2. Select **all** of these at once:
   - All `.html` files
   - `robots.txt`
   - `sitemap.xml`
   - `.htaccess`
   - The **css** folder (with `style.css` inside)
   - The **js** folder (with `scripts.js` inside)
   - The **images** folder (with all images inside)
3. Right‑click → **Compress** (Mac) or **Send to → Compressed folder** (Windows). Name it e.g. `segecha-website.zip`.

---

## Step 2: Upload to cPanel

1. Log in to **cPanel**.
2. Open **File Manager**.
3. Go to the folder where the site should live:
   - **Main domain:** `public_html`
   - **Subdomain:** e.g. `public_html/subdomainname` (create the subdomain in cPanel first if needed).
4. **Option A – Upload ZIP**
   - Click **Upload**.
   - Choose `segecha-website.zip`.
   - After upload, go back to File Manager, right‑click the ZIP → **Extract**.
   - Extract into the current folder (e.g. `public_html`). If the ZIP contains one top-level folder, move its contents up into `public_html` so `index.html` is directly inside `public_html`.
   - Delete the empty folder and the ZIP when done.
5. **Option B – Upload folders and files**
   - Upload each file and folder one by one (or drag and drop) so the structure matches the tree above.

---

## Step 3: Set permissions (if needed)

- Folders: **755**
- Files: **644**

In File Manager, right‑click a file or folder → **Change Permissions** and set the above. Most hosts work with these defaults.

---

## Step 4: Default document

cPanel usually serves `index.html` when someone visits the root URL. The included **.htaccess** sets `DirectoryIndex index.html` so the home page loads correctly. If your host ignores .htaccess, ensure in cPanel that the default document for the domain includes `index.html`.

---

## Step 5: Test

1. Visit your site URL (e.g. `https://www.segecha.com` or your subdomain).
2. Check:
   - Home loads (`index.html`).
   - Navigation: Home, Services, About, Contact, FAQ, Get a quote.
   - CSS and images load (no broken layout or images).
   - Quote page opens and the “Submit” mailto works.
   - Contact page and legal pages (Privacy, Terms, Cookies) open.

---

## Optional: Force HTTPS

If your host supports it and you want to force HTTPS, add this line **inside** the existing `.htaccess` (or create `.htaccess` with this and the existing rules):

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Some cPanel setups use “SSL Redirect” in the domain settings instead; use that if available.

---

## Quick checklist

- [ ] Replaced `https://www.segecha.com` everywhere if your URL is different
- [ ] Images folder filled and uploaded
- [ ] All files and folders uploaded (html, css, js, images, robots.txt, sitemap.xml, .htaccess)
- [ ] Permissions 755 (folders) and 644 (files)
- [ ] Home page and main links tested in the browser
- [ ] (Optional) HTTPS redirect enabled
