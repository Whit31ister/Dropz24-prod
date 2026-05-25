// ===== Utility Functions =====

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');

    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('open');
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
            navigateTo('index.html');
        });
    }

    // Cart icon click
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCart);
    }

    // Account icon click
    const accountIcon = document.querySelector('.account-icon');
    if (accountIcon) {
        accountIcon.addEventListener('click', () => {
            navigateTo('pages/account.html');
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
                    navigateTo(`pages/search.html?q=${encodeURIComponent(query)}`);
                }
            }
        });
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    setupGlobalListeners();
    updateCartDisplay();
});
