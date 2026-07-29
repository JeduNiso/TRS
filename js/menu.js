/**
 * menu.js
 * TRS+ Bolivia Corporate Platform
 *
 * Navigation — handles:
 *   - Navbar glass transition on scroll
 *   - Mobile menu open/close
 *   - Focus trap inside mobile menu
 *   - Keyboard navigation (Escape to close)
 *   - Active link detection
 */

const SELECTORS = {
  navbar:        '.navbar',
  hamburger:     '.navbar__hamburger',
  mobileMenu:    '.mobile-menu',
  mobileLinks:   '.mobile-menu__nav-link',
  navLinks:      '.navbar__nav-link',
};

const CSS = {
  scrolled:    'navbar--scrolled',
  transparent: 'navbar--transparent',
  menuOpen:    'mobile-menu--open',
};

const SCROLL_THRESHOLD = 10; // px before glass effect activates

/**
 * Initialize all navigation behaviors.
 */
export function initMenu() {
  const navbar     = document.querySelector(SELECTORS.navbar);
  const hamburger  = document.querySelector(SELECTORS.hamburger);
  const mobileMenu = document.querySelector(SELECTORS.mobileMenu);

  if (!navbar) return;

  initScrollBehavior(navbar);
  markActiveLink();

  if (hamburger && mobileMenu) {
    initMobileMenu(hamburger, mobileMenu, navbar);
  }
}

/**
 * Apply glass effect when page is scrolled past threshold.
 */
function initScrollBehavior(navbar) {
  const handleScroll = () => {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add(CSS.scrolled);
      navbar.classList.remove(CSS.transparent);
    } else {
      navbar.classList.remove(CSS.scrolled);
      navbar.classList.add(CSS.transparent);
    }
  };

  // Run on load to handle direct deep-link navigation
  handleScroll();

  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Set aria-current="page" on the matching nav link.
 */
function markActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll(SELECTORS.navLinks).forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || href === `./${currentPath}`) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll(SELECTORS.mobileLinks).forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || href === `./${currentPath}`) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

/**
 * Mobile menu — open, close, focus trap, keyboard.
 */
function initMobileMenu(hamburger, mobileMenu, navbar) {
  let isOpen = false;

  const openMenu = () => {
    isOpen = true;
    mobileMenu.classList.add(CSS.menuOpen);
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Move focus to the first link
    const firstLink = mobileMenu.querySelector(SELECTORS.mobileLinks);
    if (firstLink) firstLink.focus();
  };

  const closeMenu = () => {
    isOpen = false;
    mobileMenu.classList.remove(CSS.menuOpen);
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.focus();
  };

  const toggleMenu = () => {
    if (isOpen) closeMenu();
    else openMenu();
  };

  // Toggle on hamburger click
  hamburger.addEventListener('click', toggleMenu);

  // Close on Escape
  document.addEventListener('keydown', event => {
    if (isOpen && event.key === 'Escape') {
      closeMenu();
    }
  });

  // Close when a mobile nav link is clicked
  mobileMenu.querySelectorAll(SELECTORS.mobileLinks).forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Focus trap inside mobile menu
  mobileMenu.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;

    const focusable = Array.from(
      mobileMenu.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}
