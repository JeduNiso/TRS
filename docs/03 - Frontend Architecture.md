# 03 - Frontend Architecture

Project:
TRS+ Bolivia Corporate Website

Version:
1.0

Status:
Approved

Author:
Jorge Niño de Guzmán

Architecture:
ChatGPT + Claude Code

---

# 1. Purpose

This document defines the architectural rules for the frontend application.

Every HTML, CSS and JavaScript file must follow these standards.

These rules take priority over personal preferences.

Consistency is more important than individual coding style.

---

# 2. Architecture Philosophy

The frontend is designed as a scalable application.

Although today it is a corporate website, tomorrow it should become a Laravel application without rewriting the frontend.

Therefore every decision must prioritize:

Scalability

Maintainability

Reusability

Performance

Accessibility

Future CMS Integration

---

# 3. General Principles

The project must follow these principles.

Single Responsibility

Every component has one purpose.

Don't Repeat Yourself (DRY)

Never duplicate HTML or CSS unnecessarily.

Keep It Simple

Avoid unnecessary complexity.

Composition over duplication.

Semantic HTML first.

Accessibility first.

Mobile first.

Performance first.

---

# 4. Folder Structure

The project should always follow this structure.

/
│
├── index.html
├── empresa.html
├── servicios.html
├── sectores.html
├── tecnologia.html
├── contacto.html
│
├── css/
│
│   reset.css
│   variables.css
│   typography.css
│   layout.css
│   components.css
│   animations.css
│   responsive.css
│
├── js/
│
│   app.js
│   menu.js
│   animation.js
│   counters.js
│   slider.js
│
├── assets/
│
│   images/
│   icons/
│   logos/
│   illustrations/
│   videos/
│
└── docs/

No file should exist outside this structure unless justified.

---

# 5. HTML Principles

HTML should be semantic.

Use:

header

nav

main

section

article

aside

footer

Avoid meaningless div nesting.

Never create div wrappers unless they provide layout or styling value.

Maximum nesting depth:

Five.

---

# 6. Section Structure

Every section follows exactly the same pattern.

<section>

container

section header

content

cta (optional)

</section>

Example

<section id="services">

<div class="container">

<header class="section-header">

<h2>

...

</h2>

<p>

...

</p>

</header>

<div class="section-content">

...

</div>

</div>

</section>

---

# 7. Component Architecture

Every visual element should become a reusable component.

Examples

Navbar

Hero

Button

Badge

Counter

Service Card

Industry Card

Technology Card

Timeline

Accordion

FAQ

CTA

Footer

Each component should have:

HTML

CSS

Optional JS

---

# 8. CSS Architecture

CSS files have specific responsibilities.

variables.css

Only Design Tokens.

reset.css

Browser normalization.

typography.css

Fonts.

Text styles.

layout.css

Grid

Container

Spacing

Positioning

components.css

Buttons

Cards

Forms

Timeline

Navbar

Footer

animations.css

Only animation definitions.

responsive.css

Media Queries only.

Never mix responsibilities.

---

# 9. CSS Methodology

Use a BEM-inspired naming convention.

Example

hero

hero__content

hero__image

hero__badge

service-card

service-card__icon

service-card__title

service-card__description

service-card--featured

Never use IDs for styling.

IDs exist only for navigation and JavaScript.

---

# 10. CSS Rules

Never use !important.

Never use inline styles.

Never use hardcoded colors.

Never use hardcoded spacing.

Always use CSS variables.

---

# 11. JavaScript Philosophy

JavaScript enhances the experience.

The website must remain functional without JavaScript.

JS should never generate page layout.

Only improve interaction.

---

# 12. JavaScript Organization

One responsibility per file.

app.js

Initialization.

menu.js

Navigation.

animations.js

IntersectionObserver

Reveal

Parallax

counters.js

Animated Counters

slider.js

Carousel Logic

No file should exceed approximately 300 lines without justification.

---

# 13. Naming Standards

Variables

camelCase

Functions

verb + noun

Examples

toggleMenu()

openModal()

animateCounters()

Classes

kebab-case

Files

kebab-case

Never mix conventions.

---

# 14. Images

Every image should include

alt

width

height

loading="lazy"

decoding="async"

Prefer WebP.

PNG only when transparency is required.

---

# 15. SVG

Icons must be SVG.

Do not use PNG icons.

Avoid icon fonts.

---

# 16. Performance Rules

Avoid unnecessary wrappers.

Avoid duplicated CSS.

Avoid duplicated JavaScript.

Avoid layout shifts.

Lazy load images.

Use modern image formats.

Minimize DOM depth.

---

# 17. Accessibility

Semantic HTML.

Keyboard navigation.

Visible focus.

Meaningful alt text.

ARIA labels when appropriate.

Minimum WCAG AA contrast.

---

# 18. SEO

Every page requires

Title

Description

Canonical

Open Graph

Twitter Cards

Schema.org

Breadcrumbs (when appropriate)

Semantic headings.

---

# 19. CMS Compatibility

No text should be tightly coupled to HTML.

Every title should be replaceable.

Every paragraph replaceable.

Every image replaceable.

Every button replaceable.

Future Blade Example

{{ page.hero.title }}

{{ service.description }}

{{ company.phone }}

The frontend must not require structural changes after CMS integration.

---

# 20. Laravel Ready

The architecture should map naturally into Laravel.

Example

HeroComponent

↓

resources/views/components/hero.blade.php

ServicesSection

↓

resources/views/components/services.blade.php

Footer

↓

resources/views/components/footer.blade.php

The HTML structure should anticipate this migration.

---

# 21. Git Workflow

Every change should belong to a feature branch.

feature/navbar

feature/hero

feature/services

feature/contact

Commits should be atomic.

Examples

feat(hero): create corporate hero layout

feat(navbar): add glass navigation

fix(button): improve hover animation

Never commit unrelated changes together.

---

# 22. Code Quality

Readable code is more important than clever code.

Future developers should understand every file within minutes.

Favor explicitness over abstraction.

Comment only when necessary.

Code should explain itself.

---

# 23. Definition of Done

A component is considered complete only if:

✔ Semantic HTML

✔ Responsive

✔ Accessible

✔ Optimized

✔ Reusable

✔ CMS Ready

✔ Design System compliant

✔ Cross-browser compatible

✔ No console errors

✔ Lighthouse compliant

---

# 24. Golden Rule

Build every component as if it will be reused in five future projects.

Never build components specifically for one page.

Think in systems.

Not pages.
