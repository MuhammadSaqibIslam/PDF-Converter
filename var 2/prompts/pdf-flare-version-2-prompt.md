# PDF Forge --- Version 2 Website Build & Functional Implementation Prompt

## 1. Role

Act as a Senior UI/UX Designer, Product Designer, Frontend Engineer,
JavaScript Developer, Accessibility Specialist, and QA Engineer. You
specialize in screenshot-based website recreation and turning polished
utility interfaces into reliable, genuinely functional web applications.

Skills: HTML5, CSS3, JavaScript, responsive design systems, reusable
components, PDF.js, pdf-lib, browser-based image processing, secure file
handling, Lucide SVG icons, accessibility, debugging, and end-to-end
testing.

## 2. Task

Create **PDF Forge Version 2** based on the supplied screenshot. The
reference shows a modern PDF tools directory with compact top
navigation, a centered headline, category chips, and a grid of
individual PDF tool cards.

Use the screenshot as the primary visual reference for Version 2's home
page, while retaining the functional requirements established for
Version 1.

Build a polished, responsive, browser-based web application. **Do not
convert it to Electron or add SQLite.** Use the existing project
architecture wherever possible.

Create an original PDF Forge interface and brand identity. Do not copy
the reference brand's logo or imply affiliation with another service.

## 3. Inspect the Existing Project First

Before changing code:

1.  Inspect the project structure, current pages, CSS, JavaScript,
    assets, dependencies, and routing.
2.  Identify existing working tools and reuse their implementations.
3.  Study the supplied screenshot carefully.
4.  Determine whether the project uses plain HTML/CSS/JavaScript or a
    framework, and keep that architecture.
5.  Plan the Version 2 page and tool workflows.
6.  Implement changes directly in the existing project.

Do not delete working features or overwrite the entire project with a
generic template. Keep Version 1 available if it already has a version
selector or separate route; otherwise, build Version 2 in a clearly
separated page or route without breaking Version 1.

## 4. Design Direction

### Overall style

-   Clean, light interface with a very pale lavender-gray background.
-   White tool cards with subtle gray borders and soft shadows where
    appropriate.
-   Dark charcoal headings and muted gray supporting text.
-   Small, colorful tool icons in restrained colored tiles.
-   Rounded category chips and compact cards.
-   Centered, prominent headline with concise supporting text.
-   Dense but readable tool grid.
-   Minimal decoration, with faint geometric background shapes or soft
    gradients only where useful.
-   No oversized illustrations, dashboard widgets, or unrelated
    sections.

### Suggested design tokens

-   Page background: `#F6F6FA` or similar pale cool gray.
-   Card background: `#FFFFFF`.
-   Primary text: `#292936`.
-   Secondary text: `#777784`.
-   Borders: `#E5E5EC`.
-   PDF Forge accent: approximately `#F04B2B`.
-   Supporting icon colors: muted orange, blue, green, purple, teal, and
    yellow.
-   Card radius: approximately `8–12px`.
-   Use consistent spacing based on multiples of `4px` or `8px`.

Do not use the old dark theme for this Version 2 home page. Match the
supplied light-theme reference while retaining PDF Forge branding.

## 5. Page Layout

### A. Compact top navigation

Create a slim header with: - Left: PDF Forge logo and wordmark. - Main
navigation: Merge PDF, Split PDF, Compress PDF, Convert PDF dropdown,
All PDF Tools dropdown. - Right: Login and Sign Up actions, plus a
compact apps/menu icon if appropriate. - Thin bottom divider and
compact, legible typography.

Functional behavior: - Logo returns to the Version 2 home page. - Each
navigation link opens the correct tool or category. - Dropdowns open on
click, close on outside click and Escape, and support keyboard
navigation. - Login and Sign Up open real pages/dialogs if
authentication exists. Otherwise, show a clearly labelled coming-soon
state instead of a dead link. - Internal navigation stays in the same
tab; do not use `target="_blank"` for internal links. - On narrow
screens, use an accessible mobile menu and prevent horizontal overflow.

### B. Hero section

Use a centered headline with a hierarchy similar to the screenshot:

**Every PDF tool you need in one place**

Write original supporting copy explaining that PDF Forge helps users
merge, split, compress, convert, edit, sign, and organize PDFs online.

-   Large, bold heading.
-   Short centered description with comfortable line height.
-   Compact vertical spacing.
-   Faint, low-contrast geometric shapes or soft background accents only
    if they help match the screenshot.
-   No oversized hero illustration.
-   Avoid unverified security guarantees, statistics, or certifications.

### C. Category chips

Place these filters under the hero: - All - Workflows - Organize PDF -
Optimize PDF - Convert PDF - Edit PDF - PDF Security - PDF Intelligence

Behavior: - Clicking a category filters tool cards without a full page
reload. - All resets the filter. - The active chip has a clear and
accessible selected state. - Use actual tool metadata to filter
results. - On mobile, chips may wrap or use controlled horizontal
scrolling.

### D. Tool card grid

Create compact white cards similar to the screenshot. Aim for six
columns on wide desktop screens, reducing columns naturally for tablets
and phones.

Each card must include: - A meaningful icon. - Tool title. - One or two
lines of concise description. - Optional "New" label only for genuinely
new features. - Hover, focus, and active states. - A clickable card that
opens its corresponding tool interface.

Include these tools:

**Workflows / Organize PDF** - Merge PDF - Split PDF - Organize PDF -
Rotate PDF - Add Page Numbers - Crop PDF - Remove Pages - Rearrange
Pages

**Optimize PDF** - Compress PDF - Repair PDF - Compare PDF - Redact PDF

**Convert PDF** - PDF to Word - PDF to PowerPoint - PDF to Excel - Word
to PDF - PowerPoint to PDF - Excel to PDF - PDF to JPG - JPG to PDF -
HTML to PDF - PDF to PDF/A - PDF to Markdown

**Edit PDF** - Edit PDF - Sign PDF - Watermark PDF - PDF Forms

**PDF Security** - Unlock PDF - Protect PDF

**PDF Intelligence** - OCR PDF - AI Summarizer - Translate PDF

Include every tool above. If a tool cannot be implemented reliably in
the browser, clearly label its status and do not pretend it works.

## 6. Icon System --- Mandatory

Use a consistent icon system throughout Version 2. Prefer Lucide icons
or another lightweight, compatible SVG icon library.

-   Use a distinct, semantically appropriate icon for each tool.
-   Keep icon dimensions, stroke widths, alignment, and tile sizes
    consistent.
-   Use restrained category-specific colors inspired by the reference.
-   Apply icons to navbar items where appropriate, dropdowns,
    upload/download actions, tool controls, empty states, errors, and
    success messages.
-   Ensure icons actually render in the browser.
-   Check imports, script loading, CSS visibility, and console errors.
-   Do not use emoji as the primary icon system.
-   Do not use random symbols or the same icon for every tool.
-   Do not merely install the library; render actual icons.
-   Provide accessible labels for icon-only buttons.

## 7. Tool Workflow --- Every Card Must Lead Somewhere Real

When a user clicks a tool card:

1.  Open the correct tool interface in the current tab.
2.  Show the tool name and description.
3.  Display an appropriate file upload/drop zone or text input.
4.  Provide the relevant settings.
5.  Validate selected files and input values.
6.  Show an importing/reading state.
7.  Perform the actual operation.
8.  Show progress where measurable.
9.  Generate a real output file or result.
10. Display Download only after successful output generation.
11. Provide Show in Finder only in an environment that genuinely
    supports native Finder integration. In a browser-only app, use
    normal downloads and explain that direct Finder reveal is restricted
    by browser security.
12. Provide Reset or Process Another File.

Use browser-native file selection through `<input type="file">` or the
File System Access API where supported. Internal navigation must not
open new tabs.

For local browser processing, describe the first stage as
selecting/importing files, not uploading to a remote server.

## 8. Implement Real PDF Functionality

Use suitable maintained libraries, such as PDF.js for rendering and
pdf-lib for supported PDF modifications. Check compatibility and
licensing.

### Merge PDF

-   Select multiple PDFs.
-   Display filenames and allow removal and reordering.
-   Merge pages in the chosen order.
-   Produce a valid combined PDF.

### Split PDF

-   Select a PDF.
-   Display page count.
-   Accept and validate page ranges or a defined split mode.
-   Generate valid outputs.
-   If multiple files result, optionally package them into ZIP.

### Compress PDF

-   Implement genuine compression where feasible.
-   Display original and output file sizes.
-   Never claim compression occurred if no reduction happened.
-   Explain technical limitations.

### Convert PDF

Implement supported conversions honestly: - PDF to JPG: render pages as
images. - JPG to PDF: combine images into a valid PDF. - PDF to
Word/Excel/PowerPoint: use a genuine conversion implementation or a
suitable disclosed service. Never merely rename files. - HTML to PDF:
use a reliable compatible approach. - PDF/A: claim compliance only if
the output is validated against the relevant standard.

### Edit PDF

-   Render pages and thumbnails.
-   Add text, images, shapes, signatures, highlights, and supported
    annotations.
-   Provide editing properties.
-   Export actual changes to a valid PDF.
-   Distinguish text overlays from directly editing existing embedded
    PDF text.

### Organize PDF

-   Reorder, rotate, delete, and extract pages.
-   Save the resulting document.

### Security tools

-   Protect PDFs with passwords if supported by a reliable library.
-   Unlock PDFs only when the user is authorized and the required
    encryption method is supported.
-   Do not claim secure redaction unless underlying sensitive content is
    actually removed.

### OCR and intelligent tools

-   Implement OCR with a real compatible OCR engine or clearly disclosed
    service.
-   AI summaries and translations must use an actual configured
    model/service.
-   If no API or service is configured, show an honest setup/unavailable
    state instead of fabricating results.
-   Never send files to external services without clear disclosure.

## 9. Image and Supporting Functionality

Implement real image operations where relevant: - Resize - Compress -
Convert - Crop - Rotate - Watermark

Support valid inputs, settings, previews, output generation, and
downloads. For unavailable capabilities, explain limitations rather than
faking results.

## 10. Shared Processing Interface

Build reusable components for common workflows while keeping
tool-specific processing separate.

Where appropriate, each tool should include: - Tool title and
description. - Drag-and-drop upload zone. - Browse files button. -
Accepted file types. - Selected file list. - Remove/replace file
actions. - Relevant settings. - Primary action button. -
Loading/processing state. - Progress where measurable. - Error and
validation messages. - Output preview or file details. - Download
button. - Reset action.

Do not use one generic processor for unrelated tools. Each tool must
invoke its own correct processing function.

## 11. Search, Navigation, and Interactions

If search exists: - Search tool names and descriptions. - Show matching
tools. - Support keyboard interaction. - Display a helpful empty
state. - Link results to the correct tool.

Also ensure: - Navbar links work. - Dropdowns work. - Category filters
work. - Cards navigate to correct tools. - Browser back navigation
behaves sensibly. - Internal links stay in the same tab. - No `href="#"`
placeholders or dead buttons remain. - Loading, error, success, and
empty states work correctly.

## 12. Accessibility and Responsive Design

-   Use semantic HTML.
-   Ensure sufficient text contrast.
-   Provide visible keyboard focus.
-   Add accessible labels to icon-only controls.
-   Support keyboard navigation in dropdowns and category filters.
-   Make cards and buttons touch-friendly.
-   Respect reduced-motion preferences.
-   Prevent horizontal overflow.
-   Test desktop, tablet, and mobile.

## 13. Technical and Privacy Requirements

-   Keep the existing project's technology stack.
-   Do not convert to Electron.
-   Do not add SQLite.
-   Do not introduce a new framework unnecessarily.
-   Keep source code organized and reusable.
-   Use local browser processing whenever feasible.
-   Do not upload files remotely without clear disclosure and an actual
    configured implementation.
-   Validate file types and handle corrupted files.
-   Clean up temporary object URLs and resources.
-   Do not store sensitive file contents unnecessarily.
-   Never fabricate successful processing or output files.

## 14. Visual Quality Assurance

Compare the finished page against the supplied screenshot. Verify: -
Compact navigation and correct alignment. - Centered hero heading and
supporting text. - Correct category chip layout. - Consistent tool card
dimensions. - Six-column desktop grid where space permits. - Appropriate
icon sizes and colors. - Subtle borders and card spacing. - Light
background and restrained decoration. - Responsive behavior at common
viewport widths.

Do not add unrelated pricing tables, dashboards, testimonials, or large
illustrations absent from the reference.

## 15. Workflow

1.  Inspect the existing codebase.
2.  Study the screenshot.
3.  Plan the Version 2 design and tool metadata.
4.  Implement the light-theme home page.
5.  Build category filtering and navigation.
6.  Implement and verify the icon system.
7.  Connect every card to its correct tool.
8.  Complete real processing for each implemented tool.
9.  Test outputs with real sample files.
10. Compare the result visually with the screenshot.
11. Fix console errors, broken links, and responsive issues.
12. Report completed features and honest limitations.

Do not stop after writing a plan. Implement changes directly in the
existing project.

## 16. Definition of Done

The task is complete only when: - Version 2 visually matches the
reference layout and light theme. - PDF Forge branding remains
original. - All listed tool cards are present. - Every card has a valid
destination. - Icons render consistently and correctly. - Category
filters work. - All visible navigation links work. - Implemented tools
process real inputs and produce real outputs. - Download actions work. -
Unsupported tools are clearly identified instead of faked. - The website
is responsive and has no major console errors. - Existing Version 1
functionality remains intact.

## Final Instruction

Build a complete Version 2 of PDF Forge using the supplied screenshot as
the visual reference and Version 1's functional requirements as the
baseline. Prioritize visual fidelity, real file-processing
functionality, consistent icons, and reliable navigation. Preserve
existing working code, test every advertised workflow, and never mark a
tool functional unless its output has been verified.
