/**
 * app.js
 * TRS+ Bolivia Corporate Platform
 *
 * Initialization — bootstraps all modules after DOM is ready.
 * One responsibility: orchestrate startup sequence.
 */

import { initMenu }       from './menu.js';
import { initAnimations } from './animation.js';
import { initCounters }   from './counters.js';

/**
 * Bootstrap the application.
 * Called once the DOM is fully parsed.
 */
function init() {
  initMenu();
  initAnimations();
  initCounters();
  initHero();
}

/**
 * Trigger hero entry animation sequence.
 * Adds .hero--loaded to the hero element, which activates
 * the CSS animation classes defined in animations.css.
 */
function initHero() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Small rAF delay ensures the browser has painted the initial frame
  // before triggering the staggered animation sequence.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hero.classList.add('hero--loaded');
    });
  });
}

// Entry point
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
