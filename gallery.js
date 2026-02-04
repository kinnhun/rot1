// ========================================
// PHOTOGRAPHY GALLERY - Interactive Features
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    initFilters();
    initSearch();
    initLightbox();
});

// ========================================
// MASONRY INITIALIZATION + DATA LOADING
// ========================================
let galleryData = [];

async function initGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    try {
        // Fetch gallery data from JSON
        const response = await fetch('gallery-data.json');
        galleryData = await response.json();

        // Render gallery items
        renderGallery(galleryData);

        // Add entrance animations
        const items = grid.querySelectorAll('.gallery-item');
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.05}s`;
            item.classList.add('gallery-item-reveal');
        });

        // Lazy loading images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src || img.src;
                        if (src && !img.complete) {
                            img.src = src;
                            img.classList.add('loaded');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            items.forEach(item => {
                const img = item.querySelector('img');
                if (img) imageObserver.observe(img);
            });
        }
    } catch (error) {
        console.error('Error loading gallery data:', error);
        grid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #999;">Không thể tải dữ liệu gallery. Vui lòng thử lại sau.</p>';
    }
}

// ========================================
// RENDER GALLERY ITEMS FROM DATA
// ========================================
function renderGallery(data) {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    // Clear existing content
    grid.innerHTML = '';

    // Create gallery items
    data.forEach(item => {
        const categoryLabels = {
            'wedding': 'Ảnh Cưới',
            'graduation': 'Kỷ Yếu',
            'personal': 'Cá Nhân',
            'product': 'Sản Phẩm'
        };

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.category = item.category;
        galleryItem.dataset.title = item.title.toLowerCase();

        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
            <div class="gallery-overlay">
                <span class="category-badge">${categoryLabels[item.category] || item.category}</span>
                <h3>${item.caption}</h3>
            </div>
        `;

        grid.appendChild(galleryItem);
    });

    // Reinitialize lightbox after rendering
    initLightbox();
}

// ========================================
// CATEGORY FILTERS
// ========================================
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            galleryItems.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.classList.add('gallery-item-reveal');
                    }, 10);
                } else {
                    item.classList.remove('gallery-item-reveal');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ========================================
// SEARCH FUNCTIONALITY
// ========================================
function initSearch() {
    const searchInput = document.getElementById('gallerySearch');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        galleryItems.forEach(item => {
            const title = item.dataset.title.toLowerCase();
            const category = item.dataset.category.toLowerCase();
            const caption = item.querySelector('h3')?.textContent.toLowerCase() || '';

            const matches = title.includes(query) ||
                category.includes(query) ||
                caption.includes(query);

            if (matches || query === '') {
                item.style.display = 'block';
                setTimeout(() => {
                    item.classList.add('gallery-item-reveal');
                }, 10);
            } else {
                item.classList.remove('gallery-item-reveal');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });

        // Reset filter buttons if searching
        if (query !== '') {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }
    });
}

// ========================================
// LIGHTBOX / MODAL VIEWER
// ========================================
let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox) return;

    // Build images array from current gallery items
    galleryImages = Array.from(galleryItems).map(item => ({
        src: item.querySelector('img').src,
        caption: item.querySelector('h3')?.textContent || '',
        category: item.querySelector('.category-badge')?.textContent || ''
    }));

    // Remove old event listeners by cloning (prevents duplicates)
    galleryItems.forEach((item, index) => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
    });

    // Add new event listeners
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox();
        });
    });

    // Close lightbox (only set once)
    if (!closeBtn.hasAttribute('data-listener')) {
        closeBtn.addEventListener('click', closeLightbox);
        closeBtn.setAttribute('data-listener', 'true');
    }

    if (!lightbox.hasAttribute('data-listener')) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        lightbox.setAttribute('data-listener', 'true');
    }

    // Navigation (only set once)
    if (!prevBtn.hasAttribute('data-listener')) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(-1);
        });
        prevBtn.setAttribute('data-listener', 'true');
    }

    if (!nextBtn.hasAttribute('data-listener')) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(1);
        });
        nextBtn.setAttribute('data-listener', 'true');
    }

    // Keyboard navigation (only set once)
    if (!document.body.hasAttribute('data-lightbox-keys')) {
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
        });
        document.body.setAttribute('data-lightbox-keys', 'true');
    }

    function openLightbox() {
        const image = galleryImages[currentImageIndex];
        lightboxImg.src = image.src;
        lightboxCaption.innerHTML = `
            <span class="category-badge">${image.category}</span>
            <h3>${image.caption}</h3>
            <p>${currentImageIndex + 1} / ${galleryImages.length}</p>
        `;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function navigateLightbox(direction) {
        currentImageIndex += direction;

        // Loop around
        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        } else if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        openLightbox();
    }
}

// ========================================
// LOAD MORE FUNCTIONALITY
// ========================================
const loadMoreBtn = document.querySelector('.load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        // In a real app, this would fetch more images from an API
        alert('Tính năng "Xem thêm" sẽ tải thêm ảnh từ server. Hiện tại đang dùng dữ liệu mẫu.');
    });
}
