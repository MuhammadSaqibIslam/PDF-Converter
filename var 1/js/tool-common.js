// Shared tool utilities
const ToolUtils = {
    formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    },

    // Supports both: showStatus(el, msg, type) and showStatus(msg, type)
    showStatus(elOrMsg, messageOrType, maybeType) {
        let el, message, type;
        if (typeof elOrMsg === 'string') {
            el = document.getElementById('status');
            message = elOrMsg;
            type = messageOrType || 'info';
        } else {
            el = elOrMsg;
            message = messageOrType;
            type = maybeType || 'info';
        }
        if (!el) return;
        el.textContent = message;
        el.className = 'status-msg visible ' + type;
    },

    // Supports both: hideStatus(el) and hideStatus()
    hideStatus(el) {
        if (!el || typeof el === 'string') el = document.getElementById('status');
        if (!el) return;
        el.className = 'status-msg';
    },

    showProcessing(el, text = 'Processing...') {
        el.querySelector('.processing-text').textContent = text;
        el.classList.add('visible');
    },

    hideProcessing(el) {
        el.classList.remove('visible');
    },

    async copyToClipboard(text, feedbackEl) {
        try {
            await navigator.clipboard.writeText(text);
            if (feedbackEl) {
                feedbackEl.classList.add('show');
                setTimeout(() => feedbackEl.classList.remove('show'), 2000);
            }
        } catch {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            if (feedbackEl) {
                feedbackEl.classList.add('show');
                setTimeout(() => feedbackEl.classList.remove('show'), 2000);
            }
        }
    },

    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 5000);
    },

    downloadText(text, filename, mimeType = 'text/plain') {
        const blob = new Blob([text], { type: mimeType });
        this.downloadBlob(blob, filename);
    },

    // Supports both: setupDragDrop(area, onFiles) and setupDragDrop(area, fileInput, handler)
    setupDragDrop(area, onFilesOrInput, maybeHandler) {
        let onFiles;
        if (typeof maybeHandler === 'function') {
            onFiles = (files) => maybeHandler(files[0]);
        } else if (typeof onFilesOrInput === 'function') {
            onFiles = onFilesOrInput;
        } else {
            return;
        }
        ['dragenter', 'dragover'].forEach(e => {
            area.addEventListener(e, (ev) => { ev.preventDefault(); area.classList.add('drag-over'); });
        });
        ['dragleave', 'drop'].forEach(e => {
            area.addEventListener(e, (ev) => { ev.preventDefault(); area.classList.remove('drag-over'); });
        });
        area.addEventListener('drop', (ev) => {
            const files = Array.from(ev.dataTransfer.files);
            if (files.length) onFiles(files);
        });
    },

    // Supports both: createFileItem(fileObj, onRemove) and createFileItem('name', 'size')
    createFileItem(fileOrName, onRemoveOrSize) {
        const item = document.createElement('div');
        item.className = 'file-item';
        if (typeof fileOrName === 'string') {
            item.innerHTML = `
                <span class="file-name">${fileOrName}</span>
                <span class="file-size">${onRemoveOrSize || ''}</span>
            `;
        } else {
            item.innerHTML = `
                <span class="file-name">${fileOrName.name}</span>
                <span class="file-size">${this.formatFileSize(fileOrName.size)}</span>
                <button class="file-remove" aria-label="Remove file">&times;</button>
            `;
            item.querySelector('.file-remove').addEventListener('click', () => {
                item.remove();
                if (typeof onRemoveOrSize === 'function') onRemoveOrSize(fileOrName);
            });
        }
        return item;
    }
};

// Mobile nav for tool pages
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('mainNav');
    if (btn && nav) {
        btn.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('active');
            btn.classList.toggle('active');
            btn.setAttribute('aria-expanded', isOpen);
        });
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                btn.classList.remove('active');
                btn.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
