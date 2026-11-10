# Hillgrove: Website

A one-page site for Hillgrove, which provides Solo and self-directed 401(k) plan support from an
office in Austin, Texas. It's static with no dependencies, built with Node and deployed
to **Netlify** at `https://hillgrove.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `hillgrove`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under Texas law
plus `/thank-you/` and `404.html`.

## Office

Hillgrove is a **storefront office** (`locationType: 'office'`) at **1011 Meredith Dr, Austin,
TX 78748**, phone **(737) 265-2709**. The address shows in the hero card, footer and contact
section, with a map and storefront structured data. Keep it identical to the Google Business Profile.

## Design

- **Palette:** bluebonnet night `#1F2140`, bluebonnet `#4054A8`, live-oak sage `#4E6B42`, wildflower gold `#F2C14E`, limestone `#FAF8F2`
- **Type:** Gelasio (display) and Hanken Grotesk (text), both self-hosted
- **Logo:** a leaf-shaped badge with a grove of live oaks on rolling hills under a gold sun (`src/brand.mjs`)
- **Hero:** slow-zoom aerial photo of downtown Austin and Lady Bird Lake (no verified Austin video was available)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
