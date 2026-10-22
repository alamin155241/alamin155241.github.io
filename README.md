# Al Amin — Engineering Portfolio

A responsive engineering portfolio built with plain HTML, CSS, and JavaScript. Its one-page storytelling and emphasis on projects are inspired by [Simplefolio](https://github.com/cobiwave/simplefolio); the layout, styling, copy, and new SVG illustrations are custom. No framework, package installation, or build step is required.

## Project structure

The VS Code workspace contains a second `alamin-simplefolio-custom` directory. **That inner directory is the website root.**

```text
alamin-simplefolio-custom/       # Website root
  portfolio.js                  # EDIT THIS: your content, photo, resume, projects, skills
  content.js                    # Renders that content safely into the page
  theme.js                      # Dark/light toggle and saved browser preference
  index.html                    # Layout and original no-JavaScript fallback
  style.css                     # Theme, layout, responsive and motion rules
  script.js                     # Menu, active section, progress, reveal effects
  src/
    assets/
      engineering-system.svg    # Original conceptual hero illustration
      rice-leaf.svg             # Illustration retained from the original page
      smart-home.svg            # Original conceptual home automation illustration
      favicon.svg               # Personal monogram
  README.md
  EDIT-FIRST.txt
```

Before the redesign, all illustrations were inline HTML/CSS/SVG and `src/assets/` was empty. There were no dependencies, build configuration, tests, or Git metadata in the supplied workspace. A copy of the five original files is saved in `../portfolio-backup-before-redesign/` outside the website root.

## Preview locally

**Quickest:** open this directory's `index.html` directly in a browser. All local assets and navigation work without a server.

**VS Code:** right-click this directory's `index.html` and choose **Open with Live Server** if that extension is installed.

**Python:** from the website root, run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then visit <http://127.0.0.1:4173>. Stop the server with Ctrl+C. If starting in the outer workspace directory, run `cd .\alamin-simplefolio-custom` first. Use a different port if 4173 is occupied.

## Content and design

- Hero, selected projects, about, technical skills, education, and contact.
- Warm off-white, deep navy, botanical green, and lime accents.
- Dark/light mode via the moon/sun button in the header. Light is the default; each visitor's choice is saved in their browser and restored on refresh. Switching still works if browser storage is blocked, but the choice cannot persist in that case.
- Responsive project cards, original engineering diagrams, and subtle reveal/hover effects.
- Mobile navigation with Escape/outside-click dismissal, active-section indication, skip link, visible keyboard focus, and reduced-motion support.
- Content and navigation remain accessible when JavaScript is disabled.
- Email actions open the visitor's email application. There is no form backend and no message is sent automatically.
- GitHub links point to the supplied profile. Project actions are explicitly labeled email discussions; no repository or demo URLs have been invented.

Identity and the two project subjects come from the supplied brief. Technical skills were checked against [Al Amin's public GitHub profile](https://github.com/alamin155241) on October 10, 2026. No results, accuracy figures, publications, or awards are claimed. The original RTOS study and graduation date are omitted from the revised page. The project artwork is labeled **concept illustration**, not presented as actual hardware photos or application screenshots.

## Update your portfolio ? one file

Open **`portfolio.js`**, edit the values, save, and refresh the browser. You do not need to edit HTML, CSS, or the rendering code. Live Server refreshes automatically. This also works when opening `index.html` directly; no fetch request, installation, or build is required.

| Update | Field in portfolio.js |
| --- | --- |
| Name, email, GitHub, country | `profile` |
| Browser-tab title | `profile.pageTitle` |
| Your photo | `profile.photo` |
| CV / Resume button | `profile.resume` |
| Hero headline and introduction | `hero` |
| Interests strip | `interests` |
| About text | `about` |
| Add, remove, reorder projects | `projects` |
| Add, remove, reorder skills | `skills` |
| Certificate cards and documents | `certificates` |
| University, degree, status, optional dates | `education` |
| Contact heading and message | `contact` |

### Add your photo

1. Copy the actual image file into `src/assets/`, for example `profile.png`.
2. Change this one line inside `profile`:

```js
photo: "src/assets/profile.png",
```

The photo replaces the engineering illustration in the hero, with a responsive portrait frame. It is cropped by CSS; your original file is not modified. Adjust `.profile-photo`'s `object-position` in `style.css` only if you want a different crop. An empty or unloadable photo keeps the existing illustration. The supplied portrait is stored in `src/assets/profile.png`; the original screenshot is preserved in the outer workspace folder.

### Add your CV

Copy your PDF to `src/assets/resume.pdf`, then set:

```js
resume: "src/assets/resume.pdf",
```

A CV / Resume button appears in the navigation, and View CV (PDF) appears in the one-page CV section. Both open the same PDF in a new tab (the browser may download it depending on its PDF settings). Leave the value empty to hide it. Use a valid file path; the site cannot verify the contents of a PDF for you.

### Add a project

Copy one complete object inside `projects`, change its text, tags, and image, and save. Cards are numbered and laid out automatically. `theme` can be `"dark"` or `"light"`. Use `\n` in a title for a line break. Set `url` to an actual public repository or demo link and edit `linkLabel` accordingly. Leave `url` empty to use an email discussion link. Change `imageLabel` to `"Project screenshot"` when you use a real screenshot. Remove an object to remove its card; reorder objects to reorder cards.

### Add certificates

The Certificates navigation link opens the Certificates & Achievements section. It is currently empty because no personal certificate files were supplied. No achievements from the reference screenshot were copied.

1. Put your actual PDFs or images in `src/assets/certificates/`.
2. In `portfolio.js`, uncomment the example inside `certificates`, replace the example values, and save.
3. Refresh the browser. Duplicate that object for each additional certificate.

```js
certificates: [
  {
    title: "Your actual certificate title",
    issuer: "Issuing organization",
    type: "Certificate of completion",
    date: "2026",
    file: "src/assets/certificates/your-certificate.pdf",
    image: "", // Optional: a JPG/PNG preview of the PDF.
    url: "",   // Optional: official verification link, used when file is empty.
  },
],
```

Image files in `file` preview automatically. PDFs show a document card unless you provide an `image` preview. Cards open their file (or verification URL) in a new tab. Without either link, a card is informational. Missing preview images fall back to a document icon. Check the actual file path before sharing the site.

The first three certificates appear initially; **View all certificates** reveals the remaining cards and **Show fewer certificates** collapses them. The button is hidden for three or fewer entries. The section supports both themes and keyboard navigation. Leave `certificates: []` to show the neutral empty state.

Keep quotation marks, commas, and brackets intact. User content is inserted as text, so HTML markup is not needed. Empty GitHub and resume values hide those optional links. Missing project images show a text fallback instead of a broken image.

`index.html` retains the original static portfolio if JavaScript is disabled or the data file fails to load. **New edits in `portfolio.js` require JavaScript**; the static fallback is not automatically synchronized. All standard browser previews use the central content file.

For design changes only, use the color tokens in `style.css`. Google Fonts provides Manrope and DM Mono, with system font fallbacks. All illustrations are local.

## Publishing

This work is local only. Nothing has been pushed or published. The website root and its `src/assets/` directory can be deployed together to a static host after explicit approval. Keep the backup and any QA artifacts outside the published directory.

## Verification performed

Headless Chrome checks passed at 320, 375, 390, 768, 1024, 1440, and 1920 pixels, with no horizontal overflow. Desktop and mobile screenshots were visually reviewed. All navigation targets, mobile menu dismissal, Escape/focus behavior, reduced motion, reveal effects, JavaScript-disabled navigation, and direct-file preview passed. No JavaScript errors or failed local HTTP asset requests were detected. IDs, ARIA references, SVG XML, email destinations, and local asset paths were checked. The GitHub profile was reachable; no email was sent.

Screenshots and the check results are in `../portfolio-qa/`. Browser checks used a temporary Playwright installation outside the site; it is not a website dependency. Testing used desktop Chrome with mobile viewport emulation, not physical mobile devices.

The content-file workflow was also tested by changing browser-only fixtures: identity/contact propagation, education updates, adding projects and skills, safe text rendering, optional portrait and resume, missing-image fallback, empty projects, and responsive navigation with the CV button. Those test values were not written to `portfolio.js`.
