# 04 - UI Components

Project:
TRS+ Bolivia Corporate Website

Version:
1.0

Status:
Approved

---

# Introduction

This document defines every reusable UI component used throughout the TRS+ Corporate Website.

All pages must be built using these components.

No component should be redesigned independently.

Consistency has priority over creativity.

Every component must inherit the Design System.

---

# Component Rules

Every component must satisfy the following:

✔ Responsive

✔ Accessible

✔ Reusable

✔ CMS Ready

✔ Keyboard Friendly

✔ WCAG AA

✔ Design System Compliant

✔ Performance Optimized

---

# Component Anatomy

Every component should define:

Purpose

Structure

Props (future CMS)

Variants

States

Responsive Behavior

Accessibility Rules

Animation Rules

---

====================================================

COMPONENT

BUTTON

====================================================

Purpose

Call users to action.

Variants

Primary

Secondary

Ghost

Icon Button

Sizes

Small

Medium

Large

States

Default

Hover

Focus

Pressed

Loading

Disabled

Rules

Never more than two primary buttons per section.

Buttons should never exceed 220px width.

Primary buttons always use brand color.

Secondary buttons always use outline.

Accessibility

Minimum height 48px.

Keyboard focus visible.

---

====================================================

COMPONENT

BADGE

====================================================

Purpose

Highlight information.

Examples

24/7

GPS

Corporate

Secure

Variants

Solid

Outline

Glass

Icon Badge

Rules

Maximum 3 badges per section.

Never use paragraphs inside badges.

---

====================================================

COMPONENT

SECTION HEADER

====================================================

Structure

Section Badge

↓

Title

↓

Supporting Paragraph

↓

Optional CTA

Rules

Every section must start with a Section Header.

Maximum title length

12 words.

Maximum paragraph

3 lines.

---

====================================================

COMPONENT

NAVBAR

====================================================

Desktop

Logo

Navigation

CTA

Mobile

Logo

Hamburger

Full Screen Menu

States

Transparent

Scrolled

Open

Rules

Height

90px

Scrolled Height

72px

Behavior

Sticky

Glass Effect

Blur

Shadow

Accessibility

Keyboard Navigation

ARIA Labels

Focus States

---

====================================================

COMPONENT

HERO

====================================================

Purpose

Create immediate trust.

Structure

Badge

↓

Headline

↓

Supporting Text

↓

CTA Group

↓

Trust Cards

↓

Hero Image

Responsive

Desktop

2 Columns

Tablet

1 Column

Mobile

1 Column

Rules

Maximum title

2 lines.

Maximum paragraph

4 lines.

Only two CTAs.

Hero image always visible.

Never hide the image.

---

====================================================

COMPONENT

TRUST CARD

====================================================

Purpose

Reinforce credibility.

Examples

24/7

GPS Monitoring

National Coverage

Insurance

Technology

States

Default

Hover

Rules

Always grouped.

Maximum 4 cards.

---

====================================================

COMPONENT

SERVICE CARD

====================================================

Purpose

Present a business service.

Structure

Icon

↓

Title

↓

Description

↓

Benefits

↓

CTA

Variants

Standard

Featured

Dark

Rules

Maximum description

60 words.

Never place long paragraphs.

Animation

Lift

Shadow

Glow

---

====================================================

COMPONENT

INDUSTRY CARD

====================================================

Purpose

Present business sectors.

Examples

Banking

Mining

Retail

Healthcare

Government

Manufacturing

Transportation

Structure

Illustration

↓

Title

↓

Description

Hover

Scale

Shadow

Accent Border

---

====================================================

COMPONENT

TECHNOLOGY CARD

====================================================

Purpose

Present operational capabilities.

Examples

GPS

Monitoring

Communication

Fleet

Reports

Tracking

---

====================================================

COMPONENT

TIMELINE

====================================================

Purpose

Explain operational process.

Structure

Step Number

↓

Title

↓

Description

Desktop

Horizontal

Mobile

Vertical

---

====================================================

COMPONENT

COUNTER

====================================================

Purpose

Display key metrics.

Examples

24/7

100%

National

7 Services

Behavior

Animated

IntersectionObserver

Never animate repeatedly.

---

====================================================

COMPONENT

CTA

====================================================

Purpose

Generate conversions.

Structure

Headline

↓

Supporting Text

↓

Primary Button

↓

Optional Secondary Button

Rules

One CTA per page.

---

====================================================

COMPONENT

FOOTER

====================================================

Columns

Company

Services

Contact

Social

Copyright

Rules

Dark background.

Never overload.

Always include contact information.

---

====================================================

COMPONENT

FORM

====================================================

Fields

Name

Company

Email

Phone

Message

Rules

Labels required.

Validation required.

Accessible.

Responsive.

Future CMS Ready.

---

====================================================

COMPONENT

DASHBOARD

====================================================

Purpose

Demonstrate operational capability.

NOT a real dashboard.

Only visual.

Widgets

Operations

Coverage

GPS

Fleet

Monitoring

Rules

Use subtle animations.

Avoid fake charts.

Show realistic operational information.

---

====================================================

COMPONENT

MODAL

====================================================

Future Component.

Purpose

Corporate brochures

PDF downloads

Privacy Policy

Accessibility

Trap Focus

ESC Close

ARIA

---

====================================================

COMPONENT

ACCORDION

====================================================

Purpose

FAQ

Corporate Policies

Behavior

Only one open by default.

Keyboard Accessible.

---

====================================================

Animation Rules

Every component may have

Fade

Slide

Scale

Glow

Hover

Never Bounce.

Never Shake.

Never Flash.

---

Spacing Rules

Components should never touch.

Use spacing tokens only.

No arbitrary margins.

---

Golden Rule

Every component should be reusable in another corporate project without modification.
