(() => {
  'use strict';
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  const mobile = window.matchMedia('(max-width: 1200px)');
  if (toggle && links) {
    const setMenu = (open, restoreFocus = false) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      links.classList.toggle('open', open);
      if (restoreFocus) toggle.focus();
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.nav')) setMenu(false);
    });
    document.querySelector('.header').addEventListener('focusout', event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setMenu(false);
    });
    mobile.addEventListener('change', () => setMenu(false));
    document.documentElement.classList.add('nav-ready');
  }
  const progress = document.getElementById('scrollProgress');
  const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  // Navigation labels may be arranged differently from the page sections.
  const sections = navAnchors.map(link => document.querySelector(link.getAttribute('href')))
    .filter(section => section && !section.hidden)
    .sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
  let scheduled = false;
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0}%`;
    let current = null;
    sections.forEach(section => {
      if (section && section.getBoundingClientRect().top <= 150) current = section.id;
    });
    navAnchors.forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  };
  const scheduleScroll = () => {
    if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateScroll); }
  };
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll);
  window.addEventListener('load', scheduleScroll);
  updateScroll();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(item => {
      // Keep anything already in view visible; animate only below-fold content.
      if (item.getBoundingClientRect().top > window.innerHeight) {
        item.classList.add('is-pending');
        observer.observe(item);
      }
    });
    motion.addEventListener('change', event => {
      if (event.matches) {
        observer.disconnect();
        document.querySelectorAll('.is-pending').forEach(item => item.classList.remove('is-pending'));
      }
    });
  }
})();
