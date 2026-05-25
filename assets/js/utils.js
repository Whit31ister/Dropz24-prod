// ===== Campus Selection =====
let selectedCampus = 'Select Campus';
const campuses = ['Select Campus', 'North Campus', 'South Campus', 'East Campus', 'West Campus', 'Main Building'];
const campusMapPoints = {
    'North Campus': { x: 32, y: 18 },
    'South Campus': { x: 36, y: 80 },
    'East Campus': { x: 76, y: 48 },
    'West Campus': { x: 14, y: 50 },
    'Main Building': { x: 50, y: 44 }
};

function openCampusModal() {
    const modal = document.getElementById('campusModal');
    if (modal) {
        modal.classList.add('open');
        populateCampusOptions();
    }
}

function closeCampusModal() {
    const modal = document.getElementById('campusModal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function selectCampus(campus) {
    selectedCampus = campus;
    document.querySelector('.location span').textContent = campus;
    closeCampusModal();
}

function populateCampusOptions() {
    const options = document.getElementById('campusOptions');
    if (options) {
        const mappedCampuses = campuses.filter(campus => campus !== 'Select Campus');
        const mapPins = mappedCampuses.map(campus => {
            const point = campusMapPoints[campus];
            const activeClass = selectedCampus === campus ? 'active' : '';
            return `
                <button
                    class="campus-pin ${activeClass}"
                    style="left:${point.x}%; top:${point.y}%;"
                    onclick="selectCampus('${campus}')"
                    aria-label="${campus}"
                    title="${campus}"
                >
                    <span class="campus-pin-dot"></span>
                    <span class="campus-pin-label">${campus}</span>
                </button>
            `;
        }).join('');

        const campusButtons = campuses.map(campus => {
            const activeClass = selectedCampus === campus ? 'active' : '';
            return `<button class="campus-option ${activeClass}" onclick="selectCampus('${campus}')">${campus}</button>`;
        }).join('');

        options.innerHTML = `
            <div class="campus-map-box">
                <div class="campus-map">
                    <svg class="campus-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M50 44 L32 18 L14 50 L36 80 L76 48 L50 44" />
                        <path d="M14 50 L50 44 L76 48" />
                    </svg>
                    ${mapPins}
                </div>
            </div>
            <div class="campus-list">
                ${campusButtons}
            </div>
        `;
    }
}

// ===== Order Placement Modal =====
function openOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
        const total = getCartTotal();
        const itemCount = getCartItemCount();
        document.getElementById('modalOrderTotal').textContent = formatCurrency(total);
        document.getElementById('modalItems').textContent = itemCount + ' item' + (itemCount !== 1 ? 's' : '');
        document.getElementById('modalDeliveryTime').textContent = new Date(Date.now() + 15 * 60000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        document.getElementById('modalCampus').textContent = selectedCampus;
        modal.classList.add('open');
    }
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.classList.remove('open');
    }
}

function confirmOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    if (selectedCampus === 'Select Campus') {
        alert('Please select a campus first!');
        return;
    }

    const total = getCartTotal();
    const order = addOrder(cart, total);
    
    closeOrderModal();
    clearCart();
    toggleCart();
    
    // Show tracking animation
    showOrderTracking(order);
}

// ===== Order Tracking Animation =====
function showOrderTracking(order) {
    const tracker = document.getElementById('orderTracker');
    if (tracker) {
        tracker.classList.add('open');
        animateDelivery(order, tracker);
    }
}

function animateDelivery(order, tracker) {
    let stage = 0;
    const stages = [
        { step: 'Order Confirmed', icon: '✓', color: '#000', progress: 8, eta: 'Packing starts now' },
        { step: 'Preparing Items', icon: '📦', color: '#333', progress: 28, eta: 'Rider assignment in progress' },
        { step: 'Order Dispatched', icon: '🛵', color: '#000', progress: 52, eta: 'Rider left the store' },
        { step: 'Out for Delivery', icon: '🛵', color: '#333', progress: 80, eta: 'Almost at your campus' },
        { step: 'Delivered!', icon: '🎉', color: '#000', progress: 100, eta: 'Order delivered successfully' }
    ];

    function renderDeliveryPath(progress) {
        const safeProgress = Math.max(0, Math.min(100, progress));
        const riderLeft = `calc(${safeProgress}% - 14px)`;

        return `
            <div class="delivery-diagram">
                <div class="delivery-route-track"></div>
                <div class="delivery-route-progress" style="width:${safeProgress}%"></div>
                <div class="delivery-node node-store">
                    <span class="node-emoji">🏬</span>
                    <span class="node-label">Store</span>
                </div>
                <div class="delivery-node node-campus">
                    <span class="node-emoji">📍</span>
                    <span class="node-label">${selectedCampus}</span>
                </div>
                <div class="delivery-rider" style="left:${riderLeft}">🛵</div>
            </div>
        `;
    }

    function updateStage() {
        if (stage < stages.length) {
            const stageData = stages[stage];
            
            tracker.innerHTML = `
                <div class="tracker-content">
                    <div class="tracker-header">
                        <h3>Order ${order.id}</h3>
                        <button onclick="closeOrderTracker()" class="close-tracker">×</button>
                    </div>
                    <div class="tracker-progress">
                        <div class="progress-bar" style="width: ${(stage + 1) / stages.length * 100}%"></div>
                    </div>
                    <div class="tracker-current" style="color: ${stageData.color}">
                        <div class="tracker-icon">${stageData.icon}</div>
                        <div class="tracker-status">
                            <h4>${stageData.step}</h4>
                            <p id="eta">${stageData.eta}</p>
                        </div>
                    </div>
                    ${renderDeliveryPath(stageData.progress)}
                    <div class="tracker-details">
                        <p><strong>Delivery to:</strong> ${selectedCampus}</p>
                        <p><strong>Order Total:</strong> ${formatCurrency(order.total)}</p>
                        <p><strong>Items:</strong> ${order.items.length}</p>
                    </div>
                </div>
            `;
            
            stage++;
            setTimeout(updateStage, 3000);
        } else {
            setTimeout(() => closeOrderTracker(), 2000);
        }
    }

    updateStage();
}

function closeOrderTracker() {
    const tracker = document.getElementById('orderTracker');
    if (tracker) {
        tracker.classList.remove('open');
    }
}

// ===== Price Helpers & Offers Banner =====

function getEffectivePrice(product) {
    try {
        const offer = getLimitedOfferForProduct(product.id);
        if (offer) {
            const discounted = Math.round(product.price * (1 - offer.percent / 100));
            return discounted;
        }
    } catch (e) {
        // If products.js helper not available, fallback
    }
    return product.price;
}

function renderOffersBanner() {
    const banner = document.getElementById('offersBanner');
    if (!banner) return;

    const activeOffers = (typeof limitedOffers !== 'undefined')
        ? limitedOffers.filter(o => Date.now() < o.expiresAt)
        : [];

    if (activeOffers.length === 0) {
        banner.style.display = 'none';
        return;
    }

    activeOffers.sort((a, b) => b.percent - a.percent);
    let offerIndex = 0;
    banner.style.display = 'block';

    function updateBanner() {
        const offer = activeOffers[offerIndex % activeOffers.length];
        const product = products.find(p => p.id === offer.productId);
        if (!product) return;

        const productQuery = `${product.brand} ${product.name}`;
        banner.innerHTML = `
            <div class="offers-banner-inner">
                <div class="offers-left">
                    <span class="offers-kicker">Limited Time</span>
                    <strong>${offer.percent}% OFF</strong> on ${product.brand} ${product.name}
                </div>
                <div class="offers-right">
                    <span id="offerCountdown">--:--:--</span>
                    <button class="offer-cta" onclick="navigateTo('${getSearchPagePath(productQuery)}')">Shop Deal</button>
                </div>
            </div>
        `;
        return offer;
    }

    function updateCountdown(offer) {
        const now = Date.now();
        const diff = offer.expiresAt - now;
        if (diff <= 0) {
            offerIndex += 1;
            const refreshedOffer = updateBanner();
            if (!refreshedOffer) {
                banner.style.display = 'none';
                clearInterval(interval);
                clearInterval(rotateInterval);
                return;
            }
            currentOffer = refreshedOffer;
            return;
        }
        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        const pad = (n) => String(n).padStart(2, '0');
        const el = document.getElementById('offerCountdown');
        if (el) el.textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }

    let currentOffer = updateBanner();
    if (!currentOffer) {
        banner.style.display = 'none';
        return;
    }

    updateCountdown(currentOffer);

    const interval = setInterval(() => {
        if (currentOffer) updateCountdown(currentOffer);
    }, 1000);

    const rotateInterval = setInterval(() => {
        offerIndex += 1;
        currentOffer = updateBanner();
    }, 5000);
}

// ===== Utility Functions ===== 
function isSubPage() {
    return window.location.pathname.includes('/pages/');
}

function getHomePagePath() {
    return isSubPage() ? '../index.html' : 'index.html';
}

function getAccountPagePath() {
    return isSubPage() ? 'account.html' : 'pages/account.html';
}

function getSearchPagePath(query = '') {
    const searchPath = isSubPage() ? 'search.html' : 'pages/search.html';
    if (!query) return searchPath;
    return `${searchPath}?q=${encodeURIComponent(query)}`;
}

const THEME_STORAGE_KEY = 'grabz_theme';

function resolveInitialTheme() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light';
}

function setTheme(theme) {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const toggle = document.getElementById('themeToggleBtn');
    if (toggle) {
        const iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon';
        toggle.innerHTML = `<i class="fas ${iconClass}"></i>`;
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        toggle.setAttribute('title', theme === 'dark' ? 'Light mode' : 'Dark mode');
    }
}

function toggleTheme() {
    const nextTheme = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    setTheme(nextTheme);
}

function ensureThemeToggle() {
    const actions = document.querySelector('.header-actions');
    if (!actions || document.getElementById('themeToggleBtn')) return;

    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.id = 'themeToggleBtn';
    button.type = 'button';
    button.addEventListener('click', toggleTheme);

    const accountIcon = actions.querySelector('.account-icon');
    if (accountIcon) {
        actions.insertBefore(button, accountIcon);
    } else {
        actions.appendChild(button);
    }
}

// Navigate to page
function navigateTo(page) {
    window.location.href = page;
}

// Format currency
function formatCurrency(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
}

// Calculate discount percentage
function calculateDiscount(originalPrice, salePrice) {
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-IN', options);
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Get user data from localStorage
function getUserData() {
    const userData = localStorage.getItem('grabz_user');
    return userData ? JSON.parse(userData) : {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+91 9876543210',
        addresses: []
    };
}

// Save user data to localStorage
function saveUserData(userData) {
    localStorage.setItem('grabz_user', JSON.stringify(userData));
}

// Get orders from localStorage
function getOrders() {
    const orders = localStorage.getItem('grabz_orders');
    return orders ? JSON.parse(orders) : [];
}

// Save orders to localStorage
function saveOrders(orders) {
    localStorage.setItem('grabz_orders', JSON.stringify(orders));
}

// Add new order
function addOrder(items, total) {
    const orders = getOrders();
    const newOrder = {
        id: 'ORD' + Date.now(),
        items: items,
        total: total,
        status: 'processing',
        date: new Date().toISOString(),
        estimatedDelivery: new Date(Date.now() + 15 * 60000).toISOString()
    };
    orders.unshift(newOrder);
    saveOrders(orders);
    return newOrder;
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
    }
}

// Setup global event listeners
function setupGlobalListeners() {
    // Close cart on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar && cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });

    // Logo click to home
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            navigateTo(getHomePagePath());
        });
    }

    // Cart icon click
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
    }

    // Close cart button click
    const closeCartBtn = document.querySelector('.close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', toggleCart);
    }

    // Account icon click
    const accountIcon = document.querySelector('.account-icon');
    if (accountIcon) {
        accountIcon.addEventListener('click', () => {
            navigateTo(getAccountPagePath());
        });
    }

    // Cart overlay click
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }

    // Search navigation
    const searchInput = document.querySelector('.search-input');
    if (searchInput && !window.location.pathname.includes('search.html')) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    navigateTo(getSearchPagePath(query));
                }
            }
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    ensureThemeToggle();
    setTheme(resolveInitialTheme());
    setupGlobalListeners();
    updateCartDisplay();
    renderOffersBanner();
});
