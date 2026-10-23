# PDF Forge Website --- AI Website-Building Prompt

## 1. Role

Act as a **senior UI/UX designer, product designer, visual-design
specialist, and expert frontend developer** with strong skills in:

-   Screenshot-based website recreation and visual reverse engineering
-   Responsive web design and mobile-first implementation
-   Semantic HTML5, modern CSS3, and vanilla JavaScript
-   Design systems, reusable components, spacing systems, typography,
    and color tokens
-   Accessibility, keyboard navigation, and clear interaction states
-   Frontend performance, clean code, and maintainable project structure
-   Functional file-upload interfaces and browser-based tool workflows
-   Visual quality assurance and cross-browser testing

Work like a careful professional who studies the reference before
coding. Do not produce a generic website inspired by the screenshot;
recreate its visual structure and overall appearance as closely as
practical.

## 2. Task

Build a polished, responsive website named **PDF Forge**, closely
matching the supplied screenshot.

The reference is a dark-themed online utility platform for PDF files,
images, JSON, and developer/text tools. Recreate the page as a complete
landing page with a top navigation, hero section, trust/benefit
indicators, featured tools, a large all-tools directory, an
informational section, benefit cards, and a multi-column footer.

Use the supplied screenshot as the primary visual reference. Treat it as
the source of truth for layout, hierarchy, proportions, colors, spacing,
card styling, and content density.

## 3. Context and visual direction

### Overall look

-   A premium, minimal, dark utility website.
-   Near-black page background with subtle warm undertones.
-   Charcoal cards and panels, thin low-contrast borders, rounded
    corners, and restrained orange accents.
-   White headings, muted gray supporting text, and orange calls to
    action.
-   Small, precise icons and compact tool listings.
-   A centered content container with generous horizontal margins on
    desktop.
-   A modern, clean, technical aesthetic rather than a colorful or
    playful style.
-   The page is long and content-dense, but its sections remain clearly
    separated.

### Suggested design tokens

Use these as a starting point and tune them against the screenshot:

-   Page background: `#0B0908` or a visually similar near-black.
-   Card background: `#1A1817`.
-   Secondary surface: `#211B18`.
-   Primary accent: `#F97316` or a similar vivid orange.
-   Main text: `#F5F3F1`.
-   Secondary text: `#918A85`.
-   Border: `#2B2623`.
-   Success/secure accent: muted green.
-   Tool category accents: restrained red, cyan, teal, purple, and
    amber.
-   Large desktop content width: approximately `1200px`, adjusted to
    match the screenshot.
-   Card corner radius: approximately `10–14px`.
-   Use a consistent spacing scale, such as multiples of `4px` or `8px`.

Do not apply these values blindly. Refine them so the finished page
visually matches the reference.

## 4. Required page structure

### A. Header / navigation

Create a compact top navigation bar with:

-   Left: small orange app/logo mark and the **PDF Forge** wordmark.
-   Middle/right: compact navigation links for PDF Tools, Image Tools,
    JSON Tools, Dev Tools, Text Tools, and Blog.
-   Right: a small search control and compact utility/theme-style icon
    controls if they can be implemented meaningfully.
-   Subtle bottom border or divider.
-   Dark background consistent with the page.
-   Small typography and tight spacing, matching the reference.

On smaller screens, collapse navigation into a clean mobile menu. Do not
allow the links to overflow horizontally.

### B. Hero section

Build a centered hero with:

-   A small pill/badge near the top communicating that the tools are
    free and do not require registration.
-   A large, bold, two-line headline:
    -   "Free Online PDF & File Tools"
    -   "That Just Work"
-   Make the second line orange.
-   A short, muted description explaining that users can merge, split,
    compress, convert, and manage files directly in their browser.
-   A prominent orange CTA button labelled **Explore All Tools** with a
    small arrow icon.
-   Three compact metrics below the CTA:
    -   `67+` --- Free tools
    -   `100%` --- Private & secure
    -   `0` --- Signup needed
-   Keep the hero centered and relatively compact, with plenty of dark
    negative space around it.
-   If recreating the subtle background glow, use a restrained CSS
    radial gradient; avoid strong gradients or distracting effects.

### C. Trust / benefit strip

Below the hero, add three small horizontal cards:

1.  **Secure & Private** --- files stay private and are processed
    safely.
2.  **Lightning Fast** --- emphasize quick, browser-based processing.
3.  **100% Free** --- no subscription or signup required.

Each card should contain a small accent icon, a short bold label, and
one line of subdued supporting text. Keep the cards compact and aligned.

### D. Featured tools section

Add a centered section heading:

-   Small orange eyebrow: "MOST USED TOOLS"
-   Heading: **Start With the Essentials**
-   Short muted subtitle explaining that these are popular tools.

Create a featured-tools grid similar to the screenshot:

-   One large, highlighted **Merge PDF** card on the left, spanning the
    height of two smaller cards.
-   Four smaller cards on the right:
    -   Edit PDF
    -   Split PDF
    -   PDF to JPG
    -   Rotate PDF

Each tool card should include:

-   A small icon inside a colored icon tile.
-   Tool name.
-   Short descriptive copy.
-   A small orange action label, such as "Merge PDF →" or "Split PDF →".
-   Hover and keyboard-focus states.
-   A small "Hot Popular" or "Most Popular" badge on the large featured
    card, styled to fit the reference.

Use CSS Grid for the layout. At tablet and mobile widths, reorganize the
cards into fewer columns without breaking their hierarchy.

### E. All Tools directory

This is the largest and most important content section. Build a broad,
rounded, dark panel containing a large directory of tools.

At the top of the panel, add compact category filter tabs:

-   All
-   PDF Tools
-   Image Tools
-   JSON Tools
-   Text & Dev

Below the tabs, group tools under small uppercase, muted category
labels. Recreate the dense multi-column directory visible in the
screenshot.

Include representative tools from these groups:

**PDF Tools** - Merge PDF - Split PDF - Compress PDF - PDF to Word -
Word to PDF - Excel to PDF - PowerPoint to PDF - HTML to PDF - PDF to
JPG - JPG to PDF - Rotate PDF - Crop PDF - Edit PDF - Fill & Sign PDF -
Sign PDF - OCR PDF - Add Page Numbers - Rearrange PDF Pages - Remove PDF
Pages - Password Protect PDF - Unlock PDF

**Image Tools** - Resize Image - Compress Image - Compress Image to KB -
Convert Image - Crop Image - Flip Image - Add Watermark

**JSON Tools** - JSON Formatter - JSON Viewer - JSON Diff - JSON to
YAML - JSON to CSV - JSON Validator - JSON to XML - JSON to HTML - JSON
to TOML - JSON to Go - JSON to Python - JSON to Java - JSON to C# - JSON
to SQL - JSON to TypeScript - JSON to Schema - JSON Path Tester - JSON
Minifier - JSON Beautifier - JSON to Markdown - JSON to PHP - JSON to
Ruby

**Text & Developer Tools** - Word Counter - Readability Checker - Hash
Generator - HMAC Generator - File Checksum - Verify Checksum - Random
Secret - Timestamp Converter - Case Converter - Regex Generator - Regex
Tester - JWT Decoder - URL Encoder/Decoder - Base64 Encoder/Decoder -
UUID Generator - Cron Converter - Password Generator - Lorem Ipsum -
Color Converter - Text Diff - QR Code Generator - Markdown to HTML -
Markdown Editor

The screenshot contains many compact tool entries. Prioritize a similar
content density and multi-column rhythm. It is acceptable to use
representative entries if necessary, but aim to include the full list
above so the directory feels complete.

Each tool entry should have:

-   A small category-colored icon or symbol.
-   A concise tool name.
-   A short muted description.
-   A consistent, compact row layout.

#### Tool filter behavior

Implement the category tabs using JavaScript:

-   **All** shows every category.
-   Each category tab displays only its matching tools.
-   The active tab has a clearly visible but restrained selected state.
-   Filtering must work without refreshing the page.
-   On narrow screens, keep tabs usable by wrapping them or allowing
    controlled horizontal scrolling.

Do not add a search bar inside the tool directory unless it is clearly
needed; the reference primarily uses category tabs.

### F. About section

Below the tool directory, create a narrow, centered text section with:

-   Small orange eyebrow: "ABOUT PDF FORGE"
-   Heading: **The All-In-One Toolkit for PDFs, Images & Documents**
-   Several short, readable paragraphs describing the platform, its
    privacy-first approach, file-processing utilities, browser
    compatibility, and usefulness for everyday tasks.

Keep the content column narrower than the tool directory. Use small,
readable text with comfortable line height and muted contrast. Avoid
making the paragraphs too bright or too wide.

### G. Benefits section

Add another centered section with:

-   Small orange eyebrow: "WHY PDF FORGE"
-   Heading: **Built for People Who Value Their Time**
-   Short subtitle about simplicity, speed, and privacy.

Below it, create four benefit cards:

1.  **Privacy First** --- files are processed with privacy in mind.
2.  **No Upload Needed** --- emphasize local/browser-based processing
    where technically true.
3.  **Genuinely Free** --- no hidden subscription requirement.
4.  **Pro-Grade Outputs** --- useful, high-quality results for everyday
    work.

Each card needs a small icon, a bold title, and a short muted
description. Use a four-column layout on wide screens, two columns on
tablets, and one column on small phones.

### H. Footer

Create a compact footer matching the screenshot, with:

-   PDF Forge logo and a short brand statement on the left.
-   A **PDF Tools** link column.
-   An **Image Tools** link column.
-   A **Company** link column containing About, Blog, Privacy Policy,
    Terms of Service, and Contact.
-   A subtle divider above the copyright line.
-   A small copyright notice at the bottom.

Keep the footer visually quiet, with small text, muted colors, and
consistent spacing. On mobile, stack the columns neatly.

## 5. Functional requirements

The page must not be a static mockup only. Implement sensible
interactions.

-   Header links scroll to relevant sections or navigate to valid local
    pages if those pages are created.
-   The hero CTA scrolls smoothly to the All Tools section.
-   Category tabs filter the tool directory correctly.
-   Tool cards have meaningful hover and focus states.
-   The mobile navigation opens and closes correctly.
-   Any search or theme control that is shown must perform a real,
    understandable action. If a control is not implemented, do not
    present it as an active control.
-   Use clear button labels and accessible focus indicators.
-   Avoid dead links, broken controls, fake loading indicators, and
    buttons that do nothing.

### Tool functionality honesty

This project is primarily a faithful landing-page recreation. Do not
falsely claim that every PDF/image/JSON utility is fully implemented if
it is not.

If implementing working tools is in scope, build a clearly separated,
reusable tool interface and implement only tools that can actually work
in the browser. Explain any limitations in the UI. For file-processing
features, use appropriate browser APIs or reliable, compatible libraries
only when genuinely needed, and verify that they work. Do not upload
user files to a server unless the project explicitly requires it and
clearly explains that behavior.

If time or scope is limited, make the landing page and category
filtering functional first, and structure tool links so individual tool
pages can be added later.

## 6. Technology and implementation constraints

Use:

-   **HTML5** for semantic structure.
-   **CSS3** for layout, design tokens, responsive behavior, animation,
    and states.
-   **Vanilla JavaScript** for interactions and filtering.
-   Inline SVG icons or a lightweight icon library only if it is
    properly included and works.
-   No frontend framework unless the project environment explicitly
    requires one.

Recommended project structure:

``` text
pdf-forge/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── (optional local assets and icons)
```

If the environment expects a different structure, adapt it while keeping
HTML, CSS, and JavaScript logically separated.

### Code quality

-   Use semantic HTML elements such as `header`, `nav`, `main`,
    `section`, and `footer`.
-   Use reusable CSS classes and custom properties for colors, spacing,
    radii, and typography.
-   Avoid unnecessarily duplicated markup and CSS.
-   Keep JavaScript readable and organized into small functions.
-   Use meaningful class and variable names.
-   Avoid excessive dependencies.
-   Do not use emoji as the main icon system; prefer simple SVG or
    consistent icon components.
-   Do not use large stock photos or illustrations. The reference is
    typography- and interface-led.
-   Add comments only where they clarify non-obvious logic.
-   Ensure all local assets and file paths resolve correctly.

## 7. Responsive design requirements

The website must work at desktop, tablet, and mobile widths.

-   Desktop: preserve the reference's centered content, compact
    navigation, multi-column tool grid, and spacious section layout.
-   Tablet: reduce grid columns and adjust card spans naturally.
-   Mobile: use a compact header, a readable hero, stacked trust cards,
    a single-column or two-column featured-tools layout where
    appropriate, and a tool directory that does not cause horizontal
    page overflow.
-   Body text must remain readable; do not shrink everything simply to
    fit the desktop screenshot.
-   Buttons and interactive targets must be comfortable to tap.
-   Prevent horizontal overflow at all common viewport widths.
-   Respect `prefers-reduced-motion` for non-essential transitions.

## 8. Accessibility and usability

-   Maintain adequate contrast for text and controls.
-   Use real buttons for actions and links for navigation.
-   Add accessible names to icon-only controls.
-   Support keyboard navigation.
-   Make focus states visible.
-   Use correct heading order.
-   Use `aria-expanded` and related attributes where appropriate for
    collapsible navigation.
-   Ensure filter tabs expose their selected state accessibly.
-   Do not communicate status through color alone.

## 9. Tone and content style

The brand voice should be:

-   Clear
-   Confident
-   Practical
-   Modern
-   Professional
-   Helpful, without exaggerated marketing language

Use concise sentences and straightforward labels. Avoid filler copy,
excessive exclamation marks, vague claims, and overly playful language.
Do not invent certifications, security guarantees, or performance
statistics beyond the content requested for the design. Any privacy or
local-processing statement must match the actual implementation.

## 10. Visual fidelity rules

-   Follow the screenshot's section order and overall proportions.
-   Match the near-black background, orange highlights, dark cards,
    subtle borders, and muted typography.
-   Preserve the distinction between the large featured Merge PDF card
    and the smaller tool cards.
-   Recreate the dense, multi-column tool directory as a key visual
    feature.
-   Keep section headings centered where shown.
-   Use consistent vertical spacing between sections.
-   Keep the page mostly dark and restrained; do not introduce bright
    backgrounds or unrelated decorative graphics.
-   Avoid oversized cards, excessive whitespace, huge icons, and overly
    rounded pill styling.
-   Do not add unrelated sections, testimonials, pricing tables,
    dashboards, or popups that are absent from the reference.
-   Use the screenshot as the primary guide, while making reasonable
    responsive adjustments for smaller screens.

## 11. Workflow to follow

Work in this order:

1.  **Inspect the reference** and identify its page structure, grid,
    visual hierarchy, colors, typography, and spacing.
2.  **Plan the design system** with reusable color, spacing, typography,
    and radius tokens.
3.  **Build the semantic HTML structure** for every section.
4.  **Implement the desktop layout** to match the reference as closely
    as possible.
5.  **Add responsive breakpoints** and test smaller screens.
6.  **Implement JavaScript interactions**, including tool filtering, CTA
    scrolling, and mobile navigation.
7.  **Run a visual QA pass** against the screenshot and correct the
    largest mismatches first.
8.  **Test all interactive controls**, keyboard navigation, and
    responsive states.
9.  **Check the console and file paths** for errors.
10. **Summarize the completed work** and disclose any features that are
    only visual placeholders.

## 12. Definition of done

The task is complete only when:

-   The page contains all required sections in the correct order.
-   The desktop appearance strongly resembles the supplied screenshot.
-   The dark palette, orange accents, typography hierarchy, card grid,
    and tool-directory density are consistent.
-   The layout responds properly to desktop, tablet, and mobile widths.
-   Tool filters and primary navigation interactions work.
-   No visible control falsely suggests functionality that does not
    exist.
-   The HTML, CSS, and JavaScript are organized and readable.
-   No obvious overflow, broken links, or console errors remain.
-   The final response identifies the files created and explains how to
    run the website.

## 13. Final instruction

**Prioritize visual fidelity, clean frontend implementation, responsive
behavior, and honest functionality.** Do not stop at a rough
approximation. Compare the result with the screenshot, identify the most
noticeable differences, and refine the layout until the page feels like
the same product and design system.

Start by inspecting the supplied screenshot, then implement the website.
