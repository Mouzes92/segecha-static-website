# AGENTS.md

## Cursor Cloud specific instructions

This is a **static HTML/CSS/JS website** with zero build dependencies. There is no package manager, no build step, and no backend.

### Running the dev server

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. All pages are plain `.html` files in the repo root.

### Key notes

- **Tailwind CSS, Font Awesome, and Google Fonts** are loaded from external CDNs at runtime — the browser needs internet access for correct rendering.
- There are **no lint, test, or build commands** — the project has no `package.json`, no test framework, and no CI pipeline.
- The quote form (`quote.html`) uses a `mailto:` link; clicking Submit opens the system email client rather than making an HTTP request.
- Images are committed under `images/`. See `README.md` for the expected filenames.
- `.htaccess` configures Apache `DirectoryIndex`; it is irrelevant when using `python3 -m http.server`.
