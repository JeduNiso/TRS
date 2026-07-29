/**
 * counters.js
 * TRS+ Bolivia Corporate Platform
 *
 * Animated Counters — triggers count-up animation when a
 * [data-counter] element enters the viewport.
 * Runs once per element. Uses ease-out easing.
 * Respects prefers-reduced-motion.
 */

const COUNTER_SELECTOR = '[data-counter]';
const DURATION_MS      = 1500; // 1.5 seconds as per design spec

/**
 * Initialize counter animations.
 */
export function initCounters() {
  const elements = document.querySelectorAll(COUNTER_SELECTOR);
  if (elements.length === 0) return;

  // Respect user motion preference
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    // Show final values immediately
    elements.forEach(el => {
      el.textContent = el.dataset.counter;
    });
    return;
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => {
      el.textContent = el.dataset.counter;
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        animateCounter(entry.target);
        obs.unobserve(entry.target); // Run once
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach(el => observer.observe(el));
}

/**
 * Animate a single counter element from 0 to its target value.
 * Supports integer and decimal values, and optional suffix.
 *
 * @param {HTMLElement} el - Element with data-counter attribute
 */
function animateCounter(el) {
  const raw    = el.dataset.counter;        // e.g. "98.5" or "1200"
  const suffix = el.dataset.suffix ?? '';   // e.g. "+" or "%"
  const target = parseFloat(raw);

  if (isNaN(target)) {
    el.textContent = raw + suffix;
    return;
  }

  const isDecimal  = raw.includes('.');
  const decimals   = isDecimal ? (raw.split('.')[1]?.length ?? 1) : 0;
  const startTime  = performance.now();

  const tick = (now) => {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / DURATION_MS, 1);
    const eased    = easeOut(progress);
    const current  = target * eased;

    el.textContent = current.toFixed(decimals) + suffix;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target.toFixed(decimals) + suffix;
    }
  };

  requestAnimationFrame(tick);
}

/**
 * Ease-out cubic function.
 * Matches the design system easing spec.
 *
 * @param {number} t - Progress from 0 to 1
 * @returns {number}
 */
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}
