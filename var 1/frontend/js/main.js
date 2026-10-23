// Mobile Navigation
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
});

// Nav links scroll to All Tools AND activate the right category tab
document.querySelectorAll('.nav-link[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        const allToolsSection = document.getElementById('all-tools');
        if (allToolsSection) {
            allToolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Activate the matching tab after scroll
            setTimeout(() => {
                const tab = document.querySelector(`.tab[data-filter="${filter}"]`);
                if (tab) tab.click();
            }, 400);
        }
    });
});

// Search Toggle
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
    }
});

// Search functionality - filter tools in the directory
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const toolEntries = document.querySelectorAll('.tool-entry');
    const categories = document.querySelectorAll('.tool-category');

    // Reset tabs to "All" when searching
    if (query) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
        categories.forEach(cat => cat.classList.remove('hidden'));
    }

    toolEntries.forEach(entry => {
        const name = entry.querySelector('.entry-name').textContent.toLowerCase();
        const desc = entry.querySelector('.entry-desc').textContent.toLowerCase();
        const match = !query || name.includes(query) || desc.includes(query);
        entry.style.display = match ? '' : 'none';
    });

    // Hide empty categories
    categories.forEach(cat => {
        const visibleTools = cat.querySelectorAll('.tool-entry:not([style*="display: none"])');
        cat.style.display = visibleTools.length === 0 ? 'none' : '';
    });
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') searchOverlay.classList.remove('active');
});

// Tool Category Filter Tabs
const tabs = document.querySelectorAll('.tab');
const categories = document.querySelectorAll('.tool-category');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Clear search
        searchInput.value = '';
        document.querySelectorAll('.tool-entry').forEach(e => e.style.display = '');
        categories.forEach(c => c.style.display = '');

        // Update active tab
        tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const filter = tab.dataset.filter;

        categories.forEach(cat => {
            if (filter === 'all') {
                cat.classList.remove('hidden');
            } else {
                cat.classList.toggle('hidden', cat.dataset.category !== filter);
            }
        });
    });
});

// Smooth scroll for CTA and other anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = anchor.getAttribute('href');
        if (target === '#') return;
        // Skip nav-links with data-filter (handled above)
        if (anchor.dataset.filter) return;
        const el = document.querySelector(target);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
