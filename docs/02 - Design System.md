
# 02 - Design System

Project:
TRS+ Bolivia Corporate Website

Version:
1.0

Status:
Approved

---

# 1. Design Philosophy

The interface must communicate confidence before content.

The user should perceive TRS+ as a mature, technologically advanced and highly organized company within the first five seconds.

The interface should feel calm, structured and intentional.

The design should never compete with the content.

Instead, it should reinforce it.

---

# 2. Design Principles

The interface should always prioritize:

Clarity

Consistency

Hierarchy

Whitespace

Accessibility

Performance

Scalability

Maintainability

Every visual decision should have a purpose.

---

# 3. Color System

## Primary

Primary 900

#071A5C

Primary 800

#0C2C8C

Primary 700

#123FB8

Primary 600

#1B47D6

Primary 500

#3A63FF

Primary 400

#5A8BFF

---

## Accent

Accent

#66C7FF

Accent Light

#B8E7FF

---

## Success

#12B76A

---

## Warning

#F79009

---

## Error

#F04438

---

## Neutral

Gray 50

#F8FAFC

Gray 100

#F1F5F9

Gray 200

#E2E8F0

Gray 300

#CBD5E1

Gray 400

#94A3B8

Gray 500

#64748B

Gray 700

#334155

Gray 900

#0F172A

---

# 4. Color Usage

Primary

Navigation

Buttons

Links

Titles

Cards

Accent

Highlights

Hover

Icons

Counters

Charts

Gray

Backgrounds

Paragraphs

Borders

Cards

---

# 5. Typography

Fonts

Headings

Archivo

Body

Inter

Technical Labels

IBM Plex Mono

---

# 6. Typography Scale

Display

72

Hero

64

H1

52

H2

42

H3

34

H4

28

H5

22

Body XL

20

Body

18

Small

16

Caption

14

Micro

12

---

# 7. Font Weight

400

Regular

500

Medium

600

SemiBold

700

Bold

800

ExtraBold

---

# 8. Layout

Container

1280px

Content Width

720px

Section Width

1180px

---

# 9. Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Gap

32px

---

# 10. Spacing Scale

4

8

12

16

24

32

48

64

80

96

120

160

Never use arbitrary spacing.

---

# 11. Border Radius

Small

8

Medium

12

Large

18

XL

24

Pill

999px

---

# 12. Shadows

Shadow Small

Cards

Shadow Medium

Floating Cards

Shadow Large

Hero Image

Only three shadow levels are allowed.

---

# 13. Buttons

Only two button styles exist.

Primary

Solid Blue

Secondary

Outlined

No additional button variations should be created.

---

# 14. Cards

Every card should inherit from a common component.

Cards should always include:

Padding

Border Radius

Shadow

Hover State

Transition

Optional Icon

Optional Image

Optional CTA

---

# 15. Icons

Use SVG only.

No PNG icons.

Preferred library:

Heroicons

Lucide

Phosphor

Never mix icon styles.

---

# 16. Images

Images should always have:

Rounded corners

Consistent aspect ratio

Lazy Loading

Meaningful alt text

WebP when possible

---

# 17. Animations

Animations should be subtle.

Allowed

Fade Up

Fade Left

Fade Right

Zoom

Scale

Floating

Shine

Pulse

Not allowed

Bounce

Shake

Flip

Rotate

Excessive motion

---

# 18. Hover Effects

Every interactive element should have a hover state.

Buttons

Cards

Links

Navigation

Icons

Hover should communicate interactivity without distraction.

---

# 19. Sections

Every section should contain:

Section Badge

Heading

Supporting Text

Content

CTA

Consistent vertical spacing.

---

# 20. Accessibility

Minimum contrast ratio:

4.5

Visible focus state

Keyboard navigation

Semantic HTML

ARIA labels where appropriate

---

# 21. Responsive Rules

Mobile First

Desktop enhancements

Never hide important content.

Instead:

Reorganize it.

---

# 22. Performance

Avoid unnecessary DOM nodes.

Avoid oversized images.

Avoid animation libraries.

Prefer CSS transitions.

Use IntersectionObserver.

---

# 23. Naming Convention

BEM-inspired naming.

Examples

hero

hero__content

hero__image

service-card

service-card__title

service-card__icon

service-card__description

Avoid deeply nested selectors.

Maximum nesting depth:

Three.

---

# 24. CSS Variables

All design tokens must use CSS variables.

Hardcoded values are prohibited unless justified.

Example

--color-primary

--space-lg

--radius-xl

--shadow-md

---

# 25. Final Rule

If a new component introduces inconsistency,

the Design System should be updated before the component is implemented.

Never adapt the Design System to fit poor components.

Always adapt components to fit the Design System.
