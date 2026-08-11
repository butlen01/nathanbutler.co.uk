# nathanbutler.co.uk

Nathan Butler's personal executive site — a CV/portfolio site for a commercial and operational leadership job search (Commercial Director / Sales Director / COO / Country Manager / divisional MD roles). Not a company site, not a marketing product. Static HTML/CSS/JS, no build step, no CMS, no framework.

## Three rules that override everything else

1. **Visual design is locked.** Do not restyle anything — colors, type, spacing, layout are fixed. See `css/styles.css` as the single source of truth; the Brand Guidelines doc documents it but the CSS file is authoritative.
2. **Copy is final and verbatim where it already exists.** Don't rewrite existing published copy without being asked. When adding new copy, match the established voice exactly (see Voice rules below).
3. **Never invent a figure, a date, or a claim.** If a fact isn't verified, mark it `TODO(NB)` as an HTML comment and leave that section unpublished — don't fill gaps with plausible-sounding placeholders. This is the rule that governs everything else here.

## Voice rules (apply to any new copy)

- Strict first person: "I", never "we / our / us". This describes one person's own record.
- Zero spaced em-dashes (—) anywhere in site copy. Resolve with a colon, comma, sentence split, or hyphen for ranges. En-dashes in date ranges (2023–2026) are fine and are not the same thing.
- Numbers: the real value always exists as static text in the HTML first (e.g. `<span data-count-to="4">4</span>`). JavaScript only re-animates it, and only when `IntersectionObserver` exists and `prefers-reduced-motion` is off. Never make a number JS-dependent to display.

## Discoverability: intentionally off

**Do not add SEO improvements, a sitemap.xml, or structured data (JSON-LD) without being explicitly asked.** Every page carries `<meta name="robots" content="noindex, nofollow" />` and `robots.txt` disallows all crawling. This was a deliberate reversal (the site was briefly optimized for search, then intentionally de-indexed) — the site is meant to be reached only via a direct link (CV, LinkedIn, email), not discovered cold. If a task seems to call for improving search visibility, flag the conflict with this rule rather than just doing it.

## Site conventions

- `case-row-noimg` class + simply omitting the `.case-image` div = the established pattern for a case/story card with no approved photography. Never insert a placeholder or broken image.
- `TODO(NB): ...` as an HTML comment = a section pending real facts from Nathan. Never draft placeholder content for these.
- Story pages follow Situation/Approach/Result (Track Record) or Commercial Outcome/Customer Outcome (Client Case Studies) as their `<h2>` structure.
- Full page inventory, link structure, and how everything connects: see the Site Map section of the Runbook (linked below).

## Stack

GitHub (`butlen01/nathanbutler.co.uk`, branch `main` = production) → Netlify (auto-deploy, no build command, `netlify.toml` pins `publish = "."`) → GoDaddy (registrar, nameservers point to Netlify DNS). Contact form uses Netlify Forms. Analytics is Plausible (cookieless). Full operational detail — deploying, common edits, DNS troubleshooting, rollback — is in the Runbook, not repeated here.

## Reference documents

Full detail lives in these, not in this file. Start here: **[Document Index](https://claude.ai/code/artifact/2161a52c-013d-4dbd-807a-8c09f9c32cfc)** — links every document below plus the two file-based ones (copy spreadsheet, launch summary PDF).

- [Site Map & Operations Runbook](https://claude.ai/code/artifact/bea71d72-14a4-47cc-a294-e34a61a09184) — page structure + how to deploy, edit, fix DNS, roll back
- [Brand Guidelines](https://claude.ai/code/artifact/a49efdf0-4e61-4ff6-9027-c9626f65e449) — colors, type, logo, photography treatment
- [UI Kit](https://claude.ai/code/artifact/7e156067-4048-4f02-9ed2-72d43db139a8) — every component rendered with the real stylesheet
- [Wireframes](https://claude.ai/code/artifact/d2816188-fb0b-463a-9661-61cf5ed09be4) — structural layout of the four page templates
- [QA & Browser Support Checklist](https://claude.ai/code/artifact/892e15a3-fb6e-4492-b873-e8ef4e328339)
- [Marketing & Positioning Brief](https://claude.ai/code/artifact/fce8abbb-0c97-4929-b90a-c04f88ddfab9) — why the site is de-indexed, positioning, analytics plan
- `WEBSITE REBUILD BRIEF.md` (repo root) — the original spec the full rebuild was implemented against
- Live: [Privacy Policy](https://nathanbutler.co.uk/privacy-policy.html)

## Outstanding — not yet resolved

Six `TODO(NB)` items from the original brief remain open (grep the repo for `TODO(NB)` to find them): CV PDF link, Affordable Housing "Approach" section, homepage Endorsements section, a health & safety accountability figure, a sales conversion metric, and a partner/framework case study. None have real facts to draw on yet — don't draft placeholder content for any of them.

The Runbook's "Access & Accounts" table (GitHub collaborators, Netlify/GoDaddy/Plausible logins) is deliberately blank, marked `[enter here]` — fill it in directly in that document, not here.

## How Nathan works with Claude on this repo

Prefers direct instructions over back-and-forth conversation for routine changes. Verify changes locally (a static file server + Playwright, not manual eyeballing) before committing. Always run a full-site crawl check (no broken links, no console errors) before pushing anything that touches multiple pages. Commit messages should explain *why*, not restate the diff.
