/**
 * animation.js
 * TRS+ Bolivia Corporate Platform
 *
 * Section Reveal — uses IntersectionObserver to trigger
 * .reveal and .reveal-stagger animations defined in animations.css.
 * Runs each animation once. No repeated triggering.
 */

const REVEAL_SELECTOR        = '.reveal';
const REVEAL_STAGGER_SELECTOR = '.reveal-stagger';
const THRESHOLD               = 0.15; // 15% visible before triggering

/**
 * Initialize all scroll-triggered reveal animations.
 */
export function initAnimations() {
  // Check for IntersectionObserver support
  if (!('IntersectionObserver' in window)) {
    // Graceful fallback: make all elements visible immediately
    showAllImmediately();
    return;
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    showAllImmediately();
    return;
  }

  observeRevealElements();
  observeStaggerElements();
}

/**
 * Observe .reveal elements and add --visible when in viewport.
 */
function observeRevealElements() {
  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('reveal--visible');
        obs.unobserve(entry.target); // Run once only
      });
    },
    { threshold: THRESHOLD }
  );

  elements.forEach(el => observer.observe(el));
}

/**
 * Observe .reveal-stagger containers and add --visible to trigger
 * staggered child animations via CSS delay classes.
 */
function observeStaggerElements() {
  const containers = document.querySelectorAll(REVEAL_STAGGER_SELECTOR);
  if (containers.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('reveal-stagger--visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: THRESHOLD }
  );

  containers.forEach(el => observer.observe(el));
}

/**
 * Fallback: show all animated elements immediately without animation.
 * Used when IntersectionObserver is unavailable or motion is reduced.
 */
function showAllImmediately() {
  document.querySelectorAll(REVEAL_SELECTOR).forEach(el => {
    el.classList.add('reveal--visible');
  });

  document.querySelectorAll(REVEAL_STAGGER_SELECTOR).forEach(el => {
    el.classList.add('reveal-stagger--visible');
  });
}
