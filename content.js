/* Renders portfolio.js. Everyday content changes belong in that file. */
(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return; // The original static content is the no-JavaScript fallback.

  const make = (tag, className = '', text = '') => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    return node;
  };
  const setText = (selector, text) => {
    document.querySelectorAll(selector).forEach(node => { node.textContent = text; });
  };
  const arrow = () => {
    const node = make('span', '', '↗');
    node.setAttribute('aria-hidden', 'true');
    return node;
  };
  const lines = (node, text, accent = '') => {
    node.replaceChildren();
    const parts = String(text).split('\n');
    parts.forEach((part, index) => {
      if (index) node.append(document.createElement('br'));
      node.append(accent && index === parts.length - 1 ? make('span', accent, part) : document.createTextNode(part));
    });
  };
  // Accept web URLs or relative asset paths, never executable URL schemes.
  const safeURL = (value, local = false) => {
    if (typeof value !== 'string' || !value.trim()) return '';
    const text = value.trim();
    if (/^https?:\/\//i.test(text)) return text;
    if (local && !/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(text) && !text.includes('\\')) return text;
    return '';
  };
  const profile = data.profile;
  const education = data.education;
  const email = `mailto:${encodeURIComponent(profile.email).replace(/%40/g, '@')}`;
  const github = safeURL(profile.github);

  document.title = `${profile.name} — ${profile.pageTitle}`;
  document.querySelector('meta[name="description"]').content = `${profile.name}, ${education.degree} ${education.status.toLowerCase()} at ${education.university}. ${data.hero.introduction}`;
  document.querySelectorAll('.brand').forEach(brand => {
    brand.setAttribute('aria-label', `${profile.name} home`);
    const mark = make('span', 'brand-mark', profile.initials);
    mark.append(make('span', '', '•'));
    brand.replaceChildren(mark, make('span', '', `${profile.brand}.`));
  });
  // Every existing contact/profile link uses the same central identity.
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => { link.href = email; });
  document.querySelectorAll('a[href^="https://github.com/"]').forEach(link => {
    if (github) link.href = github;
    else link.hidden = true;
  });
  document.querySelector('.email-link').replaceChildren(document.createTextNode(profile.email + ' '), arrow());
  document.querySelector('.contact-arrow').setAttribute('aria-label', `Email ${profile.name}`);

  const eyebrow = document.querySelector('.eyebrow');
  const dot = make('span', 'status-dot'); dot.setAttribute('aria-hidden', 'true');
  eyebrow.replaceChildren(dot, document.createTextNode(`${education.degree} ${education.status}`));
  lines(document.getElementById('hero-title'), data.hero.title, 'hero-accent');
  const lede = document.querySelector('.hero-lede');
  lede.replaceChildren(document.createTextNode("I'm "), make('strong', '', `${profile.name}.`), document.createTextNode(' ' + data.hero.introduction));
  const heroButton = document.querySelector('.hero-actions .button');
  const down = make('span', '', '↘'); down.setAttribute('aria-hidden', 'true');
  heroButton.replaceChildren(document.createTextNode(data.hero.button), down);
  setText('.hero-meta > span:first-child', `BASED IN ${profile.country.toUpperCase()}`);
  setText('.hero-meta > span:last-child', data.hero.note.toUpperCase());

  const photo = safeURL(profile.photo, true);
  if (photo) {
    const portrait = new Image();
    portrait.alt = `Portrait of ${profile.name}`;
    portrait.className = 'profile-photo';
    portrait.width = 560; portrait.height = 560;
    // Switch only after loading succeeds, so a typo never shows a broken image.
    portrait.onload = () => {
      document.querySelector('.system-art').replaceWith(portrait);
      document.querySelector('.hero-art').classList.add('portrait-art');
      setText('.art-topline > span:first-child', 'THE PERSON BEHIND THE WORK');
      setText('.art-topline > span:last-child', profile.name.toUpperCase());
      setText('.art-caption > span:first-child', education.status.toUpperCase());
      setText('.art-caption > span:last-child', profile.country.toUpperCase());
    };
    portrait.src = photo;
  }

  const resume = safeURL(profile.resume, true);
  const cvLink = document.getElementById('cvPdfLink');
  const cvStatus = document.getElementById('cvStatus');
  if (resume) {
    cvLink.href = resume;
    cvLink.hidden = false;
    cvStatus.hidden = true;
  }
  if (resume) {
    const link = make('a', 'nav-resume', 'CV / Resume');
    link.href = resume;
    link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.append(arrow(), make('span', 'sr-only', ' (opens in a new tab)'));
    document.getElementById('navLinks').append(link);
    document.querySelector('.header').classList.add('has-resume');
  }

  const interests = document.querySelector('.interest-list');
  interests.replaceChildren();
  data.interests.forEach((interest, index) => {
    if (index) { const separator = make('i', '', '✳'); separator.setAttribute('aria-hidden', 'true'); interests.append(separator); }
    interests.append(make('span', '', interest));
  });

  const projectList = document.getElementById('projectList');
  projectList.replaceChildren();
  data.projects.forEach((project, index) => {
    const number = String(index + 1).padStart(2, '0');
    const article = make('article', `project reveal${index % 2 ? ' project-reverse' : ''}`);
    const titleID = `project-title-${index + 1}`;
    article.setAttribute('aria-labelledby', titleID);
    const dark = project.theme === 'dark';
    const visual = make('div', `project-visual ${dark ? 'rice-visual' : 'home-visual'}`);
    const label = make('div', 'visual-label');
    label.append(make('span', '', `${number} / ${project.field.toUpperCase()}`), make('span', 'visual-pill', project.badge.toUpperCase()));
    visual.append(label);
    const imageURL = safeURL(project.image, true);
    const fallback = make('div', 'project-image-fallback', project.fullName || project.title.replaceAll('\n', ' '));
    const frame = make('div', dark ? 'leaf-frame' : 'project-image-frame');
    frame.append(fallback);
    if (imageURL) {
      fallback.hidden = true;
      const img = make('img', dark ? '' : 'home-art');
      img.alt = project.imageAlt; img.loading = 'lazy';
      img.width = dark ? 440 : 560; img.height = dark ? 290 : 390;
      img.addEventListener('load', () => { fallback.hidden = true; });
      img.addEventListener('error', () => { img.hidden = true; fallback.hidden = false; });
      img.src = imageURL;
      frame.append(img);
    }
    if (dark) ['tl', 'tr', 'bl', 'br'].forEach(corner => frame.append(make('span', `frame-corner corner-${corner}`)));
    visual.append(frame);
    const caption = make('div', 'visual-footer');
    caption.append(make('span', '', project.visualCaption.toUpperCase()), make('span', '', project.imageLabel.toUpperCase()));
    visual.append(caption);
    const info = make('div', 'project-info');
    const title = make('h3'); title.id = titleID; lines(title, project.title);
    const tags = make('ul', 'tag-list'); tags.setAttribute('aria-label', 'Project technologies and topics');
    project.tags.forEach(tag => tags.append(make('li', '', tag)));
    const url = safeURL(project.url);
    const link = make('a', 'project-link', url ? project.linkLabel : 'Discuss this project');
    link.href = url || `${email}?subject=${encodeURIComponent(project.fullName || project.title.replaceAll('\n', ' '))}`;
    link.append(arrow());
    if (url) { link.target = '_blank'; link.rel = 'noopener noreferrer'; link.append(make('span', 'sr-only', ' (opens in a new tab)')); }
    info.append(make('p', 'project-category', project.category.toUpperCase()), title, make('p', 'project-fullname', project.fullName), make('p', '', project.description), tags, link);
    article.append(visual, info); projectList.append(article);
  });
  document.getElementById('projects').hidden = data.projects.length === 0;
  document.querySelector('.nav-pill a[href="#projects"]').hidden = data.projects.length === 0;
  if (!data.projects.length) {
    heroButton.href = '#about';
    document.querySelector('.hero-bottom a').href = '#about';
  }

  lines(document.getElementById('about-title'), data.about.title, 'about-accent');
  document.querySelector('.about-signature').replaceChildren(document.createTextNode(profile.name + ' '), arrow());
  setText('.about-heading .small-label', `${education.degree} ${education.status}`);
  const aboutCopy = document.querySelector('.about-copy');
  const intro = make('p', 'large-copy');
  const highlight = data.about.highlight;
  const position = highlight ? data.about.introduction.indexOf(highlight) : -1;
  if (position >= 0) intro.append(document.createTextNode(data.about.introduction.slice(0, position)), make('em', '', highlight), document.createTextNode(data.about.introduction.slice(position + highlight.length)));
  else intro.textContent = data.about.introduction;
  const aboutLink = aboutCopy.querySelector('a');
  const biography = `I'm an ${education.degree} ${education.status.toLowerCase()} at ${education.university}. My interests include ${data.interests.join(', ')}.`;
  aboutCopy.replaceChildren(intro, make('p', '', biography), ...data.about.paragraphs.map(text => make('p', '', text)), aboutLink);

  const skills = document.querySelector('.skill-groups');
  skills.replaceChildren();
  data.skills.forEach((group, index) => {
    const row = make('div', 'skill-group reveal');
    const body = make('div'); const list = make('ul', 'skill-chips');
    group.items.forEach(skill => list.append(make('li', '', skill)));
    body.append(make('h3', '', group.title), make('p', '', group.description), list);
    const symbol = make('span', 'skill-symbol', group.symbol); symbol.setAttribute('aria-hidden', 'true');
    row.append(make('span', 'skill-number', String(index + 1).padStart(2, '0')), body, symbol);
    skills.append(row);
  });
  setText('.education-status', education.status.toUpperCase());
  setText('.education-details h3', education.degree);
  setText('.education-details p', education.university);
  setText('.education-details .small-label', [profile.country, education.dates].filter(Boolean).join(' · '));
  // Certificates use the same content file as projects. Never populate demo awards.
  const certificates = Array.isArray(data.certificates) ? data.certificates : [];
  const certificateGrid = document.getElementById('certificateGrid');
  const certificateMore = document.getElementById('certificateMore');
  document.getElementById('certificatesEmpty').hidden = certificates.length > 0;
  certificates.forEach((certificate, index) => {
    const card = make('article', 'certificate-card');
    card.hidden = index >= 3;
    const file = safeURL(certificate.file, true);
    const url = file || safeURL(certificate.url);
    const isPDF = /\.pdf(?:[?#]|$)/i.test(file);
    const previewURL = safeURL(certificate.image, true) || (/\.(?:png|jpe?g|webp|gif|avif|svg)(?:[?#]|$)/i.test(file) ? file : '');
    const preview = make('div', 'certificate-preview');
    const fallback = make('div', 'certificate-document');
    const icon = make('span', 'certificate-file-icon', isPDF ? 'PDF' : 'DOC');
    icon.setAttribute('aria-hidden', 'true');
    fallback.append(icon, make('span', 'certificate-file-label', isPDF ? 'PDF Certificate' : 'Certificate'));
    if (file) fallback.append(make('span', 'certificate-filename', file.split('/').pop().split(/[?#]/)[0]));
    preview.append(fallback);
    if (previewURL) {
      const image = make('img');
      image.alt = `${certificate.title} — certificate preview`;
      image.loading = 'lazy'; image.width = 600; image.height = 400;
      image.addEventListener('load', () => { fallback.hidden = true; });
      image.addEventListener('error', () => { image.hidden = true; fallback.hidden = false; });
      image.src = previewURL;
      preview.append(image);
    }
    const body = make('div', 'certificate-body');
    const title = make('h3');
    if (url) {
      const link = make('a', 'certificate-link', certificate.title);
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.append(arrow(), make('span', 'sr-only', ' (opens in a new tab)'));
      title.append(link);
    } else title.textContent = certificate.title;
    body.append(title);
    if (certificate.issuer) body.append(make('p', 'certificate-issuer', certificate.issuer));
    const metadata = [certificate.type, certificate.date].filter(Boolean).join(' · ');
    if (metadata) body.append(make('p', 'certificate-meta', metadata));
    card.append(preview, body); certificateGrid.append(card);
  });
  certificateMore.hidden = certificates.length <= 3;
  certificateMore.addEventListener('click', () => {
    const expanded = certificateMore.getAttribute('aria-expanded') !== 'true';
    certificateMore.setAttribute('aria-expanded', String(expanded));
    [...certificateGrid.children].forEach((card, index) => { card.hidden = !expanded && index >= 3; });
    certificateMore.querySelector('.certificate-more-label').textContent = expanded ? 'Show fewer certificates' : 'View all certificates';
    certificateMore.querySelector('[aria-hidden]').textContent = expanded ? '−' : '+';
  });

  lines(document.getElementById('contact-title'), data.contact.title);
  lines(document.querySelector('.contact-bottom > p'), data.contact.description);
  const footer = document.querySelector('.footer-inner > p');
  const year = make('span', '', String(new Date().getFullYear())); year.id = 'year';
  footer.replaceChildren(document.createTextNode('© '), year, document.createTextNode(` ${profile.name}. Built with curiosity.`));
})();
