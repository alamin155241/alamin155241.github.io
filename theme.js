/* Light is the default. Each visitor's choice is saved in their own browser. */
(() => {
  'use strict';
  const key = 'alamin-portfolio-theme';
  const root = document.documentElement;
  let theme = 'light';

  // Some private browsing/file:// environments block storage; switching still works.
  try {
    if (localStorage.getItem(key) === 'dark') theme = 'dark';
  } catch { /* Use the light default when storage is unavailable. */ }

  const applyTheme = value => {
    theme = value === 'dark' ? 'dark' : 'light';
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#0d171b' : '#f6f7f2';
    const button = document.getElementById('themeToggle');
    if (button) {
      const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
      button.setAttribute('aria-label', label);
      button.title = label;
    }
  };

  applyTheme(theme);
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('themeToggle');
    if (!button) return;
    applyTheme(theme);
    button.hidden = false;
    button.addEventListener('click', () => {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
      try { localStorage.setItem(key, theme); } catch { /* Keep the in-page choice. */ }
    });
  });

  // Keep another open portfolio tab consistent with this tab's saved choice.
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) applyTheme(event.newValue);
  });
})();
