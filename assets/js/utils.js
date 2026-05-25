// ===== Campus Selection =====
let selectedCampus = 'Select Campus';
const campuses = ['Select Campus', 'North Campus', 'South Campus', 'East Campus', 'West Campus', 'Main Building'];

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
        options.innerHTML = campuses.map(campus => 
            `<button class="campus-option" onclick="selectCampus('${campus}')">${campus}</button>`
        ).join('');
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
        { step: 'Order Confirmed', icon: '✓', color: '#000' },
        { step: 'Preparing Items', icon: '📦', color: '#333' },
        { step: 'Order Dispatched', icon: '🚴', color: '#000' },
        { step: 'Out for Delivery', icon: '🚗', color: '#333' },
        { step: 'Delivered!', icon: '🎉', color: '#000' }
    ];

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
                            <p id="eta">Estimated delivery: 10-15 minutes</p>
                        </div>
                    </div>
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

// ===== Utility Functions ===== 
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