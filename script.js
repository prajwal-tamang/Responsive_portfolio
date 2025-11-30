// script.js - Mobile menu toggle with accessibility + close behaviours

const toggleBtn = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const navLinks = navbar ? navbar.querySelectorAll('a') : [];

if (toggleBtn && navbar) {
  // initialize aria
  toggleBtn.setAttribute('role', 'button');
  toggleBtn.setAttribute('aria-controls', 'main-navigation');
  toggleBtn.setAttribute('aria-expanded', 'false');

  // (optional) give nav an id for aria-controls (only if not present)
  if (!navbar.id) navbar.id = 'main-navigation';

  function openMenu() {
    navbar.classList.add('active');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    // Prevent body scroll when menu open on small screens (uncomment if desired)
    // document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navbar.classList.remove('active');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    // document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (navbar.classList.contains('active')) closeMenu();
    else openMenu();
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when any nav link is clicked (useful for single-page anchors)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // small delay so anchor jump still happens smoothly
      setTimeout(closeMenu, 50);
    });
  });

  // Close if clicking outside header/navbar
  document.addEventListener('click', (e) => {
    if (!navbar.classList.contains('active')) return;
    // if the click target is NOT inside header (toggle or nav), close
    if (!header.contains(e.target)) closeMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('active')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Optional: close menu on resize to desktop (when nav is shown by CSS)
  window.addEventListener('resize', () => {
    // match CSS breakpoint (850px) used in your CSS
    if (window.innerWidth > 850 && navbar.classList.contains('active')) {
      closeMenu();
    }
  });
}
