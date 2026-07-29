
# 06 - Motion & Animation System

Project:
TRS+ Bolivia Corporate Website

Version:
1.0

Status:
Approved

---

# 1. Motion Philosophy

Motion is communication.

Animations should guide attention, reinforce hierarchy and improve perceived quality.

Animations must never exist only for decoration.

Every animation must have a purpose.

The interface should feel calm, controlled and professional.

Think Apple.

Think Stripe.

Think IBM.

Not gaming websites.

---

# 2. Motion Principles

Every animation must satisfy these rules.

• Purposeful
• Fast
• Predictable
• Smooth
• Lightweight
• Accessible

If an animation does not improve usability,
remove it.

---

# 3. Motion Personality

The website should feel

Calm

Elegant

Corporate

Premium

Technological

Never

Playful

Aggressive

Distracting

Chaotic

---

# 4. Animation Timing

Use a limited timing scale.

Fast

150ms

Normal

250ms

Slow

400ms

Reveal

600ms

Never exceed

800ms

Animations longer than 800ms reduce perceived performance.

---

# 5. Easing

Preferred easing

ease-out

ease-in-out

Custom cubic-bezier

cubic-bezier(.22,.61,.36,1)

Avoid

linear

bounce

elastic

---

# 6. Animation Properties

Animate only GPU-friendly properties.

Allowed

opacity

transform

scale

translate

rotate (small amounts)

Not Allowed

width

height

top

left

margin

padding

box-shadow (continuous)

filter (heavy)

Animating layout properties creates reflows.

---

# 7. Hero Animation

Sequence

1

Navbar fades in.

↓

2

Badge appears.

↓

3

Headline fades up.

↓

4

Supporting text.

↓

5

CTA buttons.

↓

6

Hero image.

↓

7

Trust cards.

The animation should feel progressive.

Never animate everything simultaneously.

---

# 8. Navbar Motion

Initial state

Transparent

↓

Scroll

Glass

↓

Blur

↓

Shadow

↓

Logo shrinks slightly

Transition

250ms

---

# 9. Section Reveal

Every section should reveal once.

Behavior

Fade Up

Distance

32px

Duration

600ms

Trigger

IntersectionObserver

Threshold

15%

Repeat

No

---

# 10. Cards

Hover

TranslateY(-8px)

Scale(1.02)

Duration

250ms

Shadow increases

No rotation.

No bouncing.

---

# 11. Buttons

Hover

Lift 2px

Brightness +5%

Transition

200ms

Click

Scale(.98)

Duration

120ms

Loading

Spinner

Opacity reduction

Disabled

Opacity 50%

Cursor not-allowed

---

# 12. Links

Hover

Underline grows from left to right.

Duration

200ms

Avoid color flashes.

---

# 13. Icons

Icons may animate only on interaction.

Examples

Arrow slides 4px.

Chevron rotates 180°.

Plus becomes Minus.

Never animate continuously.

---

# 14. Dashboard

Purpose

Suggest operational activity.

Widgets

Counters

Status indicators

Small pulses

Subtle glow

Never simulate fake live data.

Avoid flashing numbers.

---

# 15. Counter Animation

Trigger

IntersectionObserver

Run once.

Duration

1.5 seconds

Ease-out.

No repeated animation.

---

# 16. Forms

Focus

Blue border.

Soft glow.

Error

Shake is NOT allowed.

Use

Border

Icon

Message

Success

Check icon.

Subtle fade.

---

# 17. Images

Hover

Scale 1.03

Duration

350ms

No zoom larger than 5%.

---

# 18. Floating Elements

Allowed

Trust Cards

Badges

Dashboard widgets

Movement

6–10px vertical

Duration

4–6 seconds

Infinite

Alternate

Must remain subtle.

---

# 19. Background Effects

Allowed

Gradient movement

Glow

Grid opacity

Particles (minimal)

Not Allowed

Heavy particles

Fireworks

Sparkles

Continuous spinning

---

# 20. Loading Experience

Future CMS

Skeleton loaders.

Fade transition.

Avoid loading spinners whenever possible.

Content should appear progressively.

---

# 21. Page Transitions

If implemented later.

Fade

200ms

Keep scroll position when appropriate.

No dramatic transitions.

---

# 22. Accessibility

Support

prefers-reduced-motion

When enabled

Disable

Floating

Parallax

Reveal

Counter animation

Replace with instant appearance.

Accessibility has priority over aesthetics.

---

# 23. Performance

Animations should maintain

60 FPS

Use requestAnimationFrame only when necessary.

Prefer CSS transitions.

Avoid large animation libraries.

No GSAP unless justified.

---

# 24. JavaScript Rules

IntersectionObserver

for reveal.

CSS

for transitions.

JS

only when CSS cannot achieve the behavior.

---

# 25. Motion Inventory

Hero

Fade

Navbar

Glass Transition

Cards

Lift

Buttons

Lift

Dashboard

Counter

Sections

Reveal

Timeline

Fade

Images

Scale

Footer

Fade

No other animation types should exist.

---

# 26. Definition of Good Motion

The user notices the interface feels polished.

The user should never consciously notice the animations.

Good motion is invisible.

---

# 27. Golden Rule

Motion should support trust.

Never distract from content.

The interface should feel engineered,
not animated.
