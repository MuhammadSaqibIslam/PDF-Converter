// PDF Forge Version 2 — JavaScript

document.addEventListener('DOMContentLoaded', () => {

    // ===== Tool URL Map =====
    const toolMap = {
        'Merge PDF': 'tools/merge-pdf.html',
        'Split PDF': 'tools/split-pdf.html',
        'Compress PDF': 'tools/compress-pdf.html',
        'PDF to Word': 'tools/pdf-to-word.html',
        'PDF to PowerPoint': 'tools/powerpoint-to-pdf.html',
        'PDF to Excel': 'tools/excel-to-pdf.html',
        'Word to PDF': 'tools/word-to-pdf.html',
        'PowerPoint to PDF': 'tools/powerpoint-to-pdf.html',
        'Excel to PDF': 'tools/excel-to-pdf.html',
        'Edit PDF': 'tools/edit-pdf.html',
        'PDF to JPG': 'tools/pdf-to-jpg.html',
        'JPG to PDF': 'tools/jpg-to-pdf.html',
        'Sign PDF': 'tools/sign-pdf.html',
        'Watermark PDF': 'tools/add-watermark.html',
        'HTML to PDF': 'tools/html-to-pdf.html',
        'Rotate PDF': 'tools/rotate-pdf.html',
        'Add Page Numbers': 'tools/add-page-numbers.html',
        'Crop PDF': 'tools/crop-pdf.html',
        'Remove Pages': 'tools/remove-pages.html',
        'Rearrange Pages': 'tools/rearrange-pages.html',
        'Organize PDF': 'tools/rearrange-pages.html',
        'Repair PDF': 'tools/compress-pdf.html',
        'Compare PDF': 'tools/text-diff.html',
        'Redact PDF': 'tools/edit-pdf.html',
        'PDF to PDF/A': 'tools/compress-pdf.html',
        'PDF to Markdown': 'tools/markdown-to-html.html',
        'PDF Forms': 'tools/fill-sign-pdf.html',
        'Unlock PDF': 'tools/unlock-pdf.html',
        'Protect PDF': 'tools/protect-pdf.html',
        'OCR PDF': 'tools/ocr-pdf.html',
        'AI Summarizer': 'tools/ocr-pdf.html',
        'Translate PDF': 'tools/ocr-pdf.html',
        'Scan to PDF': 'tools/jpg-to-pdf.html',
    };

    // ===== Link all tool cards =====
    document.querySelectorAll('[data-tool]').forEach(el => {
        const tool = el.dataset.tool;
        if (!toolMap[tool]) return;

        // Card links
        const cardLink = el.querySelector('.v2-card-link');
        if (cardLink) {
            cardLink.href = toolMap[tool];
            return;
        }

        // Nav links, dropdown items, footer links
        if (el.tagName === 'A') {
            el.href = toolMap[tool];
        }
    });

    // ===== Mobile Menu =====
    const mobileBtn = document.getElementById('v2MobileBtn');
    const nav = document.getElementById('v2Nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('active');
            mobileBtn.classList.toggle('active');
            mobileBtn.setAttribute('aria-expanded', isOpen);
        });
    }

    // ===== Dropdowns =====
    document.querySelectorAll('.v2-dropdown').forEach(dd => {
        const trigger = dd.querySelector('.v2-dropdown-trigger');

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = dd.classList.contains('open');

            // Close all dropdowns first
            document.querySelectorAll('.v2-dropdown.open').forEach(d => {
                d.classList.remove('open');
                d.querySelector('.v2-dropdown-trigger').setAttribute('aria-expanded', 'false');
            });

            if (!wasOpen) {
                dd.classList.add('open');
                trigger.setAttribute('aria-expanded', 'true');
            }
        });

        // Keyboard support
        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dd.classList.remove('open');
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            }
        });

        dd.querySelector('.v2-dropdown-menu').addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                dd.classList.remove('open');
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            }
        });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', () => {
        document.querySelectorAll('.v2-dropdown.open').forEach(d => {
            d.classList.remove('open');
            d.querySelector('.v2-dropdown-trigger').setAttribute('aria-expanded', 'false');
        });
    });

    // ===== Category Chips =====
    const chips = document.querySelectorAll('.v2-chip');
    const cards = document.querySelectorAll('.v2-tool-card');

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update active chip
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const cat = chip.dataset.cat;

            cards.forEach(card => {
                if (cat === 'all' || card.dataset.cat === cat) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ===== Login/Signup Coming Soon =====
    document.querySelector('.v2-btn-login')?.addEventListener('click', () => {
        alert('Login is coming soon!');
    });

    document.querySelector('.v2-btn-signup')?.addEventListener('click', () => {
        alert('Sign up is coming soon!');
    });
});
