/**
 * ============================================================================
 *  HILLGROVE — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://hillgrove.netlify.app', // no trailing slash
    googleSiteVerification: 'lSPug_WgQjQUE7yzFmKn7kmZj3qvnN3DkkXwYH-b0zI', // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Hillgrove',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the assumed name certificate is filed (Texas SOS, or county clerk for a sole proprietor)
    owner: null, // optional
    foundingYear: null,

    phone: '(737) 265-2709',
    phoneE164: '+17372652709',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '1011 Meredith Dr', // real, staffed office — add suite if any
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78748',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Austin, TX'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Central Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // No verified Austin video on Pexels — the hero uses a slow-zoom photo instead.
    // Pexels photo 18583622 — downtown Austin and Lady Bird Lake from the air (Pexels License)
    heroVideo: { webm: null, mp4: null, poster: '/assets/media/hero.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      pennybacker: { src: '/assets/media/pennybacker.webp', pos: '50% 45%', alt: 'Pennybacker Bridge arching over Lake Austin among Hill Country trees' },
      capitol: { src: '/assets/media/capitol.webp', pos: '50% 35%', alt: 'Dome of the Texas State Capitol with the Texas flag' },
      skyline: { src: '/assets/media/skyline.webp', pos: '50% 60%', alt: 'Downtown Austin skyline under a clear blue sky' },
    },
  },
};
