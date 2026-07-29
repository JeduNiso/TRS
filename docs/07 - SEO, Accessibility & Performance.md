# 07 - SEO, Accessibility & Performance

Project:
TRS+ Bolivia Corporate Website

Version:
1.0

Status:
Approved

---

# Introduction

This document defines the technical quality standards for the TRS+ Corporate Website.

The website must be discoverable, accessible, fast and maintainable.

SEO, Accessibility and Performance are first-class features.

They are not optional improvements.

Every page must comply with this document.

---

# 1. SEO Philosophy

The website is designed for humans first.

Search engines second.

Never sacrifice usability for SEO.

Good SEO is the consequence of good architecture.

---

# 2. SEO Goals

The website should achieve:

Lighthouse SEO

100

Accessibility

100

Performance

95+

Best Practices

100

Core Web Vitals

Green

---

# 3. Page Metadata

Every page must include

Title

Meta Description

Canonical URL

Open Graph

Twitter Card

Theme Color

Language

Viewport

Charset

Robots

Example

Home

Title

TRS+ Bolivia | Integrated Corporate Solutions

Description

Integrated logistics, operational security, transportation, outsourcing and business solutions.

Never duplicate metadata.

---

# 4. HTML Semantics

Use semantic HTML only.

Required elements

header

nav

main

section

article

aside

footer

address

figure

figcaption

Never abuse div.

HTML should describe meaning.

CSS defines appearance.

---

# 5. Heading Hierarchy

Only one H1 per page.

H2

Major Sections

H3

Component Titles

H4

Subsections

Never skip heading levels.

Correct

H1

↓

H2

↓

H3

Incorrect

H1

↓

H4

---

# 6. URLs

URLs should be

Readable

Descriptive

Lowercase

Hyphen-separated

Correct

/services

/technology

/contact

Avoid

/page1

/index2

/servicePage

---

# 7. Images

Every image must include

alt

width

height

loading="lazy"

decoding="async"

Prefer

WebP

Fallback

PNG

JPEG only when appropriate.

---

# 8. Open Graph

Every page should include

og:title

og:description

og:image

og:url

og:type

Twitter Cards should also be configured.

---

# 9. Structured Data

Use Schema.org.

Organization

Website

Breadcrumb

Service

ContactPage

Future

FAQ

Article

News

Use JSON-LD only.

Avoid Microdata.

---

# 10. Robots

Provide

robots.txt

Allow indexing.

Disallow

Temporary folders

CMS private routes

Future admin area

---

# 11. Sitemap

Generate

sitemap.xml

Automatically.

Include

All public pages.

Exclude

Admin

Private

Test pages.

---

# 12. Internal Linking

Every page should link naturally.

Home

↓

Services

↓

Technology

↓

Contact

Avoid orphan pages.

---

# 13. Accessibility Philosophy

Accessibility is mandatory.

Every user should access the website regardless of ability.

Accessibility must never be postponed.

---

# 14. WCAG Target

Target

WCAG 2.2 AA

Minimum.

AAA when practical.

---

# 15. Keyboard Navigation

Every interactive element must be accessible.

Buttons

Links

Forms

Navigation

Modal

Accordion

Carousel

Visible focus is mandatory.

---

# 16. Focus State

Every interactive element requires

Visible outline

High contrast

Logical navigation order

Never remove outline.

Replace it with a better one.

---

# 17. Color Contrast

Minimum

4.5:1

Large Text

3:1

Never use low contrast text.

---

# 18. Screen Readers

Use

ARIA Labels

ARIA Expanded

ARIA Current

ARIA Hidden

ARIA Live

Only when appropriate.

Prefer semantic HTML over ARIA.

---

# 19. Forms

Every input requires

Label

Validation

Accessible error

Autocomplete

Keyboard support

Never use placeholder as label.

---

# 20. Motion Accessibility

Respect

prefers-reduced-motion

Disable

Floating

Parallax

Reveal

Counters

If enabled.

---

# 21. Responsive Accessibility

Touch targets

Minimum

48px

Spacing

Comfortable

Avoid accidental taps.

---

# 22. Performance Philosophy

Users should feel the site is instant.

Perceived speed is as important as measured speed.

---

# 23. Core Web Vitals

Target

Largest Contentful Paint

< 2.5s

Interaction to Next Paint

< 200ms

Cumulative Layout Shift

< 0.1

---

# 24. Image Optimization

Compress

Resize

Lazy Load

Use srcset

Use sizes

Never load oversized images.

---

# 25. Fonts

Use

font-display: swap

Preconnect

Google Fonts

Limit font families

Maximum

Three.

---

# 26. CSS

Minify

Avoid duplication

Use CSS variables

Avoid unused styles

Critical CSS above the fold.

---

# 27. JavaScript

Load deferred.

Split responsibilities.

Avoid blocking rendering.

No unused libraries.

Prefer native APIs.

---

# 28. Third-party Scripts

Only include

Google Analytics

Google Maps

reCAPTCHA (if needed)

Avoid unnecessary trackers.

Every script must justify its existence.

---

# 29. Caching

Use

Cache-Control

ETag

Immutable assets

Long cache for images.

Version static assets.

---

# 30. Security Headers

Future production

Content-Security-Policy

Strict-Transport-Security

Referrer-Policy

Permissions-Policy

X-Content-Type-Options

X-Frame-Options

---

# 31. Error Pages

Provide

404

500

Maintenance

Same design language.

Useful navigation.

CTA back to Home.

---

# 32. Browser Support

Latest

Chrome

Edge

Firefox

Safari

Graceful degradation elsewhere.

---

# 33. Lighthouse Checklist

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

No console errors.

No accessibility warnings.

---

# 34. CMS Readiness

Meta titles editable.

Descriptions editable.

Open Graph editable.

Canonical editable.

Robots configurable.

Schema configurable.

---

# 35. Future Features

Multi-language SEO

News

Blog

FAQ Schema

Service Schema

Organization Schema

Customer Portal

---

# 36. Definition of Done

A page is complete only if

✓ Semantic HTML

✓ Responsive

✓ Accessible

✓ SEO optimized

✓ Fast

✓ CMS Ready

✓ No console errors

✓ Lighthouse compliant

✓ Cross-browser tested

---

# 37. Golden Rule

A fast website builds trust.

An accessible website reaches everyone.

A well-structured website grows with the business.

Quality is not an optimization.

Quality is the default.
