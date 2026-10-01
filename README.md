# FitLife — Function-Based VS Code Project

This version divides the FitLife website into reusable files while preserving the existing design and functionality.

## Structure

- `index.html` — main shell
- `components/` — Header, Home, About, Services, Classes, Trainers, Facilities, Membership, Testimonials, CTA, Contact, Footer
- `css/` — feature-based CSS files (base, theme, navigation, hero, sections, responsive, etc.)
- `js/` — component loader + navigation + theme + feedback modules

## Run in VS Code

1. Open this folder in VS Code.
2. Install/use **Live Server**.
3. Right-click `index.html` → **Open with Live Server**.
4. Keep the folder structure unchanged.

Important: the component files are loaded with `fetch()`, so use Live Server rather than opening `index.html` directly with `file://`.
