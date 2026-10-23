// PDF Forge V2 — Shared Navigation (auto-injected)
(function() {
    // Detect if we're in tools/ or pages/ subfolder
    const path = window.location.pathname;
    const inSub = path.includes('/tools/') || path.includes('/pages/');
    const pre = inSub ? '../' : '';
    const tPre = inSub ? '' : 'tools/';

    // Detect current tool for active state
    const filename = path.split('/').pop().replace('.html','');

    function activeClass(slug) {
        return filename === slug ? ' active' : '';
    }

    const navHTML = `
    <nav class="pf-nav">
        <a href="${pre}v2.html" class="pf-logo" aria-label="PDF Forge Home">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect width="28" height="28" rx="6" fill="#C0392B"/><path d="M8 7h8a4 4 0 010 8h-3v6H9V7z" fill="#fff"/></svg>
        </a>
        <button class="pf-mobile-btn" id="pfMobileBtn" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        <div class="pf-nav-links" id="pfNavLinks">
            <a href="${tPre}merge-pdf.html" class="pf-nav-link${activeClass('merge-pdf')}">Merge PDF</a>
            <a href="${tPre}split-pdf.html" class="pf-nav-link${activeClass('split-pdf')}">Split PDF</a>
            <a href="${tPre}compress-pdf.html" class="pf-nav-link${activeClass('compress-pdf')}">Compress PDF</a>
            <div class="pf-cvt" id="pfCvt">
                <button class="pf-dd-trigger" id="pfCvtTrigger" aria-expanded="false" aria-controls="pfCvtPanel">Convert PDF <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
                <div class="pf-cvt-panel" id="pfCvtPanel">
                    <div class="pf-cvt-arrow"></div>
                    <div class="pf-cvt-grid">
                        <div class="pf-cvt-col">
                            <h4 class="pf-mega-h">Convert to PDF</h4>
                            <a href="${tPre}jpg-to-pdf.html" class="pf-mega-item${activeClass('jpg-to-pdf')}"><span class="pf-mi" style="background:rgba(241,196,15,0.12);color:#D4A800"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>JPG to PDF</a>
                            <a href="${tPre}word-to-pdf.html" class="pf-mega-item${activeClass('word-to-pdf')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>WORD to PDF</a>
                            <a href="${tPre}powerpoint-to-pdf.html" class="pf-mega-item${activeClass('powerpoint-to-pdf')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><rect x="8" y="12" width="8" height="6" rx="1"/></svg></span>POWERPOINT to PDF</a>
                            <a href="${tPre}excel-to-pdf.html" class="pf-mega-item${activeClass('excel-to-pdf')}"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="12" y1="9" x2="12" y2="21"/></svg></span>EXCEL to PDF</a>
                            <a href="${tPre}html-to-pdf.html" class="pf-mega-item${activeClass('html-to-pdf')}"><span class="pf-mi" style="background:rgba(241,196,15,0.12);color:#D4A800"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>HTML to PDF</a>
                        </div>
                        <div class="pf-cvt-col">
                            <h4 class="pf-mega-h">Convert from PDF</h4>
                            <a href="${tPre}pdf-to-jpg.html" class="pf-mega-item${activeClass('pdf-to-jpg')}"><span class="pf-mi" style="background:rgba(241,196,15,0.12);color:#D4A800"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>PDF to JPG</a>
                            <a href="${tPre}pdf-to-word.html" class="pf-mega-item${activeClass('pdf-to-word')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>PDF to WORD</a>
                            <a href="${tPre}powerpoint-to-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><rect x="8" y="12" width="8" height="6" rx="1"/></svg></span>PDF to POWERPOINT</a>
                            <a href="${tPre}excel-to-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/><line x1="12" y1="9" x2="12" y2="21"/></svg></span>PDF to EXCEL</a>
                            <a href="${tPre}compress-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(91,106,191,0.1);color:#5B6ABF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>PDF to PDF/A</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pf-mega" id="pfMega">
                <button class="pf-dd-trigger" id="pfMegaTrigger" aria-expanded="false" aria-controls="pfMegaPanel">All PDF Tools <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button>
                <div class="pf-mega-panel" id="pfMegaPanel">
                    <div class="pf-mega-arrow"></div>
                    <div class="pf-mega-grid">
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">Organize PDF</h4>
                            <a href="${tPre}merge-pdf.html" class="pf-mega-item${activeClass('merge-pdf')}"><span class="pf-mi" style="background:rgba(231,76,60,0.1);color:#E74C3C"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8"/><path d="M20 3l-8 8-8-8"/></svg></span>Merge PDF</a>
                            <a href="${tPre}split-pdf.html" class="pf-mega-item${activeClass('split-pdf')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16" y1="3" x2="16" y2="21"/><line x1="8" y1="3" x2="8" y2="21"/></svg></span>Split PDF</a>
                            <a href="${tPre}remove-pages.html" class="pf-mega-item${activeClass('remove-pages')}"><span class="pf-mi" style="background:rgba(231,76,60,0.1);color:#E74C3C"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg></span>Remove pages</a>
                            <a href="${tPre}rearrange-pages.html" class="pf-mega-item${activeClass('rearrange-pages')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="16 17 21 12 16 7"/></svg></span>Extract pages</a>
                            <a href="${tPre}rearrange-pages.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(155,89,182,0.1);color:#9B59B6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></span>Organize PDF</a>
                            <a href="${tPre}jpg-to-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2"/><path d="M17 3h2a2 2 0 012 2v2"/><path d="M21 17v2a2 2 0 01-2 2h-2"/><path d="M7 21H5a2 2 0 01-2-2v-2"/><line x1="3" y1="12" x2="21" y2="12"/></svg></span>Scan to PDF</a>
                        </div>
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">Optimize PDF</h4>
                            <a href="${tPre}compress-pdf.html" class="pf-mega-item${activeClass('compress-pdf')}"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span>Compress PDF</a>
                            <a href="${tPre}compress-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(231,76,60,0.1);color:#E74C3C"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></span>Repair PDF</a>
                            <a href="${tPre}ocr-pdf.html" class="pf-mega-item${activeClass('ocr-pdf')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>OCR PDF</a>
                        </div>
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">Convert to PDF</h4>
                            <a href="${tPre}jpg-to-pdf.html" class="pf-mega-item${activeClass('jpg-to-pdf')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>JPG to PDF</a>
                            <a href="${tPre}word-to-pdf.html" class="pf-mega-item${activeClass('word-to-pdf')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>Word to PDF</a>
                            <a href="${tPre}powerpoint-to-pdf.html" class="pf-mega-item${activeClass('powerpoint-to-pdf')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>PowerPoint to PDF</a>
                            <a href="${tPre}excel-to-pdf.html" class="pf-mega-item${activeClass('excel-to-pdf')}"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>Excel to PDF</a>
                            <a href="${tPre}html-to-pdf.html" class="pf-mega-item${activeClass('html-to-pdf')}"><span class="pf-mi" style="background:rgba(155,89,182,0.1);color:#9B59B6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>HTML to PDF</a>
                        </div>
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">Convert from PDF</h4>
                            <a href="${tPre}pdf-to-jpg.html" class="pf-mega-item${activeClass('pdf-to-jpg')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>PDF to JPG</a>
                            <a href="${tPre}pdf-to-word.html" class="pf-mega-item${activeClass('pdf-to-word')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>PDF to Word</a>
                            <a href="${tPre}powerpoint-to-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(231,76,60,0.1);color:#E74C3C"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>PDF to PowerPoint</a>
                            <a href="${tPre}excel-to-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>PDF to Excel</a>
                            <a href="${tPre}compress-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(91,106,191,0.1);color:#5B6ABF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>PDF to PDF/A</a>
                        </div>
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">Edit PDF</h4>
                            <a href="${tPre}rotate-pdf.html" class="pf-mega-item${activeClass('rotate-pdf')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg></span>Rotate PDF</a>
                            <a href="${tPre}add-page-numbers.html" class="pf-mega-item${activeClass('add-page-numbers')}"><span class="pf-mi" style="background:rgba(155,89,182,0.1);color:#9B59B6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/></svg></span>Add page numbers</a>
                            <a href="${tPre}add-watermark.html" class="pf-mega-item${activeClass('add-watermark')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></span>Add watermark</a>
                            <a href="${tPre}crop-pdf.html" class="pf-mega-item${activeClass('crop-pdf')}"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.13 1L6 16a2 2 0 002 2h15"/><path d="M1 6.13L16 6a2 2 0 012 2v15"/></svg></span>Crop PDF</a>
                            <a href="${tPre}edit-pdf.html" class="pf-mega-item${activeClass('edit-pdf')}"><span class="pf-mi" style="background:rgba(155,89,182,0.1);color:#9B59B6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></span>Edit PDF</a>
                            <a href="${tPre}fill-sign-pdf.html" class="pf-mega-item${activeClass('fill-sign-pdf')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>PDF Forms</a>
                        </div>
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">PDF Security</h4>
                            <a href="${tPre}unlock-pdf.html" class="pf-mega-item${activeClass('unlock-pdf')}"><span class="pf-mi" style="background:rgba(39,174,96,0.1);color:#27AE60"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 019.9-1"/></svg></span>Unlock PDF</a>
                            <a href="${tPre}protect-pdf.html" class="pf-mega-item${activeClass('protect-pdf')}"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Protect PDF</a>
                            <a href="${tPre}sign-pdf.html" class="pf-mega-item${activeClass('sign-pdf')}"><span class="pf-mi" style="background:rgba(91,106,191,0.1);color:#5B6ABF"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></span>Sign PDF</a>
                            <a href="${tPre}edit-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(155,89,182,0.1);color:#9B59B6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg></span>Redact PDF</a>
                            <a href="${tPre}text-diff.html" class="pf-mega-item${activeClass('text-diff')}"><span class="pf-mi" style="background:rgba(230,126,34,0.1);color:#E67E22"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/></svg></span>Compare PDF</a>
                        </div>
                        <div class="pf-mega-col">
                            <h4 class="pf-mega-h">PDF Intelligence</h4>
                            <a href="${tPre}ocr-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(52,152,219,0.1);color:#3498DB"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>AI Summarizer</a>
                            <a href="${tPre}ocr-pdf.html" class="pf-mega-item"><span class="pf-mi" style="background:rgba(231,76,60,0.1);color:#E74C3C"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg></span>Translate PDF</a>
                            <a href="${tPre}markdown-to-html.html" class="pf-mega-item${activeClass('markdown-to-html')}"><span class="pf-mi" style="background:rgba(155,89,182,0.1);color:#9B59B6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>PDF to Markdown</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pf-nav-right">
            <button class="pf-btn-login" onclick="alert('Login coming soon!')">Login</button>
            <button class="pf-btn-signup" onclick="alert('Sign up coming soon!')">Sign up</button>
        </div>
    </nav>`;

    // Inject nav at start of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Remove old header if exists
    const oldHeader = document.querySelector('header.site-header');
    if (oldHeader) oldHeader.remove();

    // Add backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'pf-backdrop';
    document.body.appendChild(backdrop);

    // Add footer if not exists
    if (!document.querySelector('.pf-footer') && !document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', `
            <footer class="pf-footer"><div class="pf-container pf-footer-inner"><p>&copy; 2026 PDF Forge. All rights reserved.</p></div></footer>
        `);
    }

    // ===== Interactions =====
    const mobileBtn = document.getElementById('pfMobileBtn');
    const navLinks = document.getElementById('pfNavLinks');
    const megaDD = document.getElementById('pfMega');
    const megaTrigger = document.getElementById('pfMegaTrigger');

    // Mobile menu
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });

    // Small dropdowns
    document.querySelectorAll('.pf-dd').forEach(dd => {
        dd.querySelector('.pf-dd-trigger').addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = dd.classList.contains('open');
            closeAll();
            if (!wasOpen) { dd.classList.add('open'); dd.querySelector('.pf-dd-trigger').setAttribute('aria-expanded','true'); }
        });
    });

    // Convert PDF mega dropdown
    const cvtDD = document.getElementById('pfCvt');
    const cvtTrigger = document.getElementById('pfCvtTrigger');

    if (cvtTrigger) {
        cvtTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const wasOpen = cvtDD.classList.contains('open');
            closeAll();
            if (!wasOpen) { cvtDD.classList.add('open'); cvtTrigger.setAttribute('aria-expanded','true'); backdrop.classList.add('visible'); }
        });
    }

    // All PDF Tools mega menu
    megaTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const wasOpen = megaDD.classList.contains('open');
        closeAll();
        if (!wasOpen) { megaDD.classList.add('open'); megaTrigger.setAttribute('aria-expanded','true'); backdrop.classList.add('visible'); }
    });

    backdrop.addEventListener('click', closeAll);
    document.addEventListener('click', (e) => { if (!e.target.closest('.pf-dd') && !e.target.closest('.pf-mega') && !e.target.closest('.pf-cvt')) closeAll(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

    function closeAll() {
        document.querySelectorAll('.pf-dd.open, .pf-mega.open, .pf-cvt.open').forEach(d => {
            d.classList.remove('open');
            const t = d.querySelector('.pf-dd-trigger');
            if (t) t.setAttribute('aria-expanded','false');
        });
        backdrop.classList.remove('visible');
    }
})();
