// Auto-link all tool entries and navigation to their pages
document.addEventListener('DOMContentLoaded', () => {
    const toolMap = {
        // PDF Tools
        'Merge PDF': 'tools/merge-pdf.html',
        'Split PDF': 'tools/split-pdf.html',
        'Compress PDF': 'tools/compress-pdf.html',
        'PDF to Word': 'tools/pdf-to-word.html',
        'Word to PDF': 'tools/word-to-pdf.html',
        'Excel to PDF': 'tools/excel-to-pdf.html',
        'PowerPoint to PDF': 'tools/powerpoint-to-pdf.html',
        'HTML to PDF': 'tools/html-to-pdf.html',
        'PDF to JPG': 'tools/pdf-to-jpg.html',
        'JPG to PDF': 'tools/jpg-to-pdf.html',
        'Rotate PDF': 'tools/rotate-pdf.html',
        'Crop PDF': 'tools/crop-pdf.html',
        'Edit PDF': 'tools/edit-pdf.html',
        'Fill & Sign PDF': 'tools/fill-sign-pdf.html',
        'Sign PDF': 'tools/sign-pdf.html',
        'OCR PDF': 'tools/ocr-pdf.html',
        'Add Page Numbers': 'tools/add-page-numbers.html',
        'Rearrange Pages': 'tools/rearrange-pages.html',
        'Remove Pages': 'tools/remove-pages.html',
        'Protect PDF': 'tools/protect-pdf.html',
        'Unlock PDF': 'tools/unlock-pdf.html',
        // Image Tools
        'Resize Image': 'tools/resize-image.html',
        'Compress Image': 'tools/compress-image.html',
        'Compress to KB': 'tools/compress-image.html',
        'Convert Image': 'tools/convert-image.html',
        'Crop Image': 'tools/crop-image.html',
        'Flip Image': 'tools/flip-image.html',
        'Add Watermark': 'tools/add-watermark.html',
        // JSON Tools
        'JSON Formatter': 'tools/json-formatter.html',
        'JSON Viewer': 'tools/json-formatter.html',
        'JSON Diff': 'tools/text-diff.html',
        'JSON to YAML': 'tools/json-formatter.html',
        'JSON to CSV': 'tools/json-formatter.html',
        'JSON Validator': 'tools/json-validator.html',
        'JSON to XML': 'tools/json-formatter.html',
        'JSON to HTML': 'tools/json-formatter.html',
        'JSON to TOML': 'tools/json-formatter.html',
        'JSON to Go': 'tools/json-formatter.html',
        'JSON to Python': 'tools/json-formatter.html',
        'JSON to Java': 'tools/json-formatter.html',
        'JSON to C#': 'tools/json-formatter.html',
        'JSON to SQL': 'tools/json-formatter.html',
        'JSON to TypeScript': 'tools/json-formatter.html',
        'JSON to Schema': 'tools/json-formatter.html',
        'JSON Path Tester': 'tools/json-formatter.html',
        'JSON Minifier': 'tools/json-minifier.html',
        'JSON Beautifier': 'tools/json-formatter.html',
        'JSON to Markdown': 'tools/json-formatter.html',
        'JSON to PHP': 'tools/json-formatter.html',
        'JSON to Ruby': 'tools/json-formatter.html',
        // Text & Dev Tools
        'Word Counter': 'tools/word-counter.html',
        'Readability Checker': 'tools/word-counter.html',
        'Hash Generator': 'tools/hash-generator.html',
        'HMAC Generator': 'tools/hash-generator.html',
        'File Checksum': 'tools/hash-generator.html',
        'Verify Checksum': 'tools/hash-generator.html',
        'Random Secret': 'tools/password-generator.html',
        'Timestamp Converter': 'tools/timestamp-converter.html',
        'Case Converter': 'tools/case-converter.html',
        'Regex Generator': 'tools/json-formatter.html',
        'Regex Tester': 'tools/json-formatter.html',
        'JWT Decoder': 'tools/base64-encode-decode.html',
        'URL Encoder/Decoder': 'tools/url-encode-decode.html',
        'Base64 Encode/Decode': 'tools/base64-encode-decode.html',
        'UUID Generator': 'tools/uuid-generator.html',
        'Cron Converter': 'tools/timestamp-converter.html',
        'Password Generator': 'tools/password-generator.html',
        'Lorem Ipsum': 'tools/lorem-ipsum.html',
        'Color Converter': 'tools/color-converter.html',
        'Text Diff': 'tools/text-diff.html',
        'QR Code Generator': 'tools/uuid-generator.html',
        'Markdown to HTML': 'tools/markdown-to-html.html',
        'Markdown Editor': 'tools/markdown-to-html.html',
    };

    // Link all tool entries in the directory
    document.querySelectorAll('.tool-entry').forEach(entry => {
        const name = entry.querySelector('.entry-name');
        if (name && toolMap[name.textContent]) {
            entry.href = toolMap[name.textContent];
        }
    });

    // Link featured tool cards
    document.querySelectorAll('.tool-action').forEach(link => {
        const text = link.textContent.replace(/\s*\u2192\s*/, '').trim();
        if (toolMap[text]) {
            link.href = toolMap[text];
        }
    });

    // Link footer tool links
    document.querySelectorAll('.footer-links a').forEach(link => {
        const text = link.textContent.trim();
        if (toolMap[text]) {
            link.href = toolMap[text];
        } else {
            const pageMap = {
                'About': 'pages/about.html',
                'Blog': 'pages/blog.html',
                'Privacy Policy': 'pages/privacy.html',
                'Terms of Service': 'pages/terms.html',
                'Contact': 'pages/contact.html',
            };
            if (pageMap[text]) link.href = pageMap[text];
        }
    });

    // Fix logo link
    document.querySelectorAll('.logo').forEach(logo => {
        if (logo.getAttribute('href') === '#') logo.href = 'index.html';
    });

    // Fix blog nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent.trim() === 'Blog' && link.getAttribute('href') === '#') {
            link.href = 'pages/blog.html';
        }
    });
});
