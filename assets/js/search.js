// ===== Search Page Script =====

function getQueryParameter(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function performSearch(query = '') {
    let filtered = products;

    if (query) {
        filtered = products.filter(p =>
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
    }

    displaySearchResults(filtered, query);
}

function filterByCategory(category, triggerButton) {
    const query = document.getElementById('searchInput')?.value || '';
    
    if (category === 'all') {
        performSearch(query);
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        if (triggerButton) {
            triggerButton.classList.add('active');
        } else {
            document.querySelector('[data-category="all"]')?.classList.add('active');
        }
    } else {
        let filtered = products;

        if (query) {
            filtered = filtered.filter(p =>
                p.brand.toLowerCase().includes(query.toLowerCase()) ||
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.description.toLowerCase().includes(query.toLowerCase())
            );
        }

        filtered = filtered.filter(p => p.category === category);
        displaySearchResults(filtered, query, category);
        
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        if (triggerButton) {
            triggerButton.classList.add('active');
        } else if (typeof event !== 'undefined' && event.target) {
            event.target.classList.add('active');
        }
    }
}

function displaySearchResults(results, query, category = 'all') {
    const grid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');

    if (!grid) return;

    const totalResults = results.length;
    let infoText = `Found ${totalResults} item${totalResults !== 1 ? 's' : ''}`;
    if (query) infoText += ` for "${query}"`;
    if (category !== 'all') infoText += ` in ${category}`;

    if (resultsCount) resultsCount.textContent = infoText;

    if (results.length === 0) {
        grid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <div class="no-results-icon">🔍</div>
                <h2>No products found</h2>
                <p>Try adjusting your search terms or browse by category</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = '';

    results.forEach(product => {
        const offer = (typeof getLimitedOfferForProduct === 'function') ? getLimitedOfferForProduct(product.id) : null;
        const effectivePrice = (typeof getEffectivePrice === 'function') ? getEffectivePrice(product) : product.price;
        const discount = Math.round(((product.originalPrice - effectivePrice) / product.originalPrice) * 100);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <span style="font-size: 64px;">${product.emoji}</span>
                ${offer ? `<span class="lt-badge">${offer.percent}% OFF</span>` : ''}
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                ${product.brand ? `<div class="product-brand">${product.brand}</div>` : ''}
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div>
                        <span class="product-price">${formatCurrency(effectivePrice)}</span>
                        <span class="product-original-price">${formatCurrency(product.originalPrice)}</span>
                    </div>
                    <span class="discount-badge">${discount > 0 ? discount + '% OFF' : ''}</span>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add</button>
        `;
        grid.appendChild(card);
    });
}

function sortResults(sortBy) {
    const query = document.getElementById('searchInput')?.value || '';
    let filtered = products;

    if (query) {
        filtered = filtered.filter(p =>
            p.brand.toLowerCase().includes(query.toLowerCase()) ||
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Apply active category filter
    const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-category');
    if (activeCategory && activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Sort
    if (sortBy === 'price-low') {
        filtered.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
    } else if (sortBy === 'price-high') {
        filtered.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
    } else if (sortBy === 'discount') {
        filtered.sort((a, b) => 
            calculateDiscount(b.originalPrice, getEffectivePrice(b)) -
            calculateDiscount(a.originalPrice, getEffectivePrice(a))
        );
    }

    displaySearchResults(filtered, query);
}

// Initialize search page
document.addEventListener('DOMContentLoaded', () => {
    const initialQuery = getQueryParameter('q') || '';
    const searchInput = document.getElementById('searchInput');

    if (searchInput) {
        searchInput.value = initialQuery;
        searchInput.addEventListener('input', debounce(() => {
            performSearch(searchInput.value);
        }, 300));
    }

    performSearch(initialQuery);

    // Checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openOrderModal);
    }
});
