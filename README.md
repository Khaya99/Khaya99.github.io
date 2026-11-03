# Khaya Nyawose — Portfolio

Static portfolio for GitHub Pages. Open `index.html` or serve this directory with any static web server.

## Content

- Introduction and data-inspired decorative artwork.
- Official World Bank pipeline and dashboard (30 countries, 720 country-year observations, two CSV exports).
- Original SQL cleaning work, explicitly labelled as simulated practice data and an earlier chapter of the same project.
- Skills, about and contact sections.

The dashboard PNG is a saved snapshot, not a live connection. Replace `assets/world-bank-dashboard.png` when publishing a revised dashboard. The original portrait and contact details have been retained.

## Accessibility and implementation

No external fonts, scripts, frameworks or tracking. The layout adapts to mobile, tablet and desktop. Native expandable project details work with keyboard controls and without JavaScript. Decorative SVGs are hidden from assistive technology. Introductory animation stops after four seconds and is disabled by `prefers-reduced-motion`.

The site does not perform the data refresh; that is handled by the separate pipeline repository and the local Windows scheduled task.
