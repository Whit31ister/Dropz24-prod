// ===== Product Data =====
const products = [
    // Stationery
    {
        id: 1,
        name: 'Notebook Set',
        category: 'stationery',
        price: 149,
        originalPrice: 199,
        description: '200 pages ruled',
        emoji: '📓'
    },
    {
        id: 2,
        name: 'Ballpoint Pens',
        category: 'stationery',
        price: 79,
        originalPrice: 99,
        description: 'Pack of 10',
        emoji: '🖊️'
    },
    {
        id: 3,
        name: 'Highlighters',
        category: 'stationery',
        price: 99,
        originalPrice: 129,
        description: 'Set of 5 colors',
        emoji: '🖍️'
    },
    {
        id: 4,
        name: 'Pencil Box',
        category: 'stationery',
        price: 189,
        originalPrice: 249,
        description: 'Wooden with lock',
        emoji: '📦'
    },
    {
        id: 5,
        name: 'A4 Paper Ream',
        category: 'stationery',
        price: 299,
        originalPrice: 349,
        description: '500 sheets',
        emoji: '📄'
    },
    {
        id: 6,
        name: 'Calculator',
        category: 'stationery',
        price: 249,
        originalPrice: 349,
        description: 'Scientific',
        emoji: '🧮'
    },

    // Snacks
    {
        id: 7,
        name: 'Potato Chips',
        category: 'snacks',
        price: 39,
        originalPrice: 49,
        description: 'Salted 40g',
        emoji: '🥔'
    },
    {
        id: 8,
        name: 'Chocolate Bar',
        category: 'snacks',
        price: 29,
        originalPrice: 39,
        description: 'Dark chocolate',
        emoji: '🍫'
    },
    {
        id: 9,
        name: 'Mixed Nuts',
        category: 'snacks',
        price: 149,
        originalPrice: 199,
        description: 'Premium 200g',
        emoji: '🥜'
    },
    {
        id: 10,
        name: 'Granola Bar',
        category: 'snacks',
        price: 45,
        originalPrice: 59,
        description: 'Honey oats',
        emoji: '🍪'
    },
    {
        id: 11,
        name: 'Energy Drink',
        category: 'snacks',
        price: 99,
        originalPrice: 129,
        description: 'Electrolyte mix',
        emoji: '⚡'
    },
    {
        id: 12,
        name: 'Dried Fruits',
        category: 'snacks',
        price: 199,
        originalPrice: 259,
        description: 'Mixed 150g',
        emoji: '🍇'
    },

    // Beverages
    {
        id: 13,
        name: 'Cold Coffee',
        category: 'beverages',
        price: 69,
        originalPrice: 89,
        description: '200ml ready-made',
        emoji: '☕'
    },
    {
        id: 14,
        name: 'Green Tea',
        category: 'beverages',
        price: 39,
        originalPrice: 49,
        description: 'Organic tea bags',
        emoji: '🍵'
    },
    {
        id: 15,
        name: 'Orange Juice',
        category: 'beverages',
        price: 79,
        originalPrice: 99,
        description: '250ml fresh',
        emoji: '🧃'
    },
    {
        id: 16,
        name: 'Protein Shake',
        category: 'beverages',
        price: 149,
        originalPrice: 189,
        description: 'Chocolate flavor',
        emoji: '🥛'
    },
    {
        id: 17,
        name: 'Coconut Water',
        category: 'beverages',
        price: 59,
        originalPrice: 79,
        description: 'Natural 200ml',
        emoji: '🥥'
    },
    {
        id: 18,
        name: 'Lemonade',
        category: 'beverages',
        price: 49,
        originalPrice: 69,
        description: 'Chilled 250ml',
        emoji: '🍋'
    },

    // Daily Essentials
    {
        id: 19,
        name: 'Hand Sanitizer',
        category: 'essentials',
        price: 39,
        originalPrice: 59,
        description: '100ml bottle',
        emoji: '🧴'
    },
    {
        id: 20,
        name: 'Tissues',
        category: 'essentials',
        price: 29,
        originalPrice: 49,
        description: 'Pack of 100',
        emoji: '🧻'
    },
    {
        id: 21,
        name: 'Phone Charger',
        category: 'essentials',
        price: 299,
        originalPrice: 399,
        description: 'Fast charging',
        emoji: '⚡'
    },
    {
        id: 22,
        name: 'USB Cable',
        category: 'essentials',
        price: 99,
        originalPrice: 149,
        description: 'Type-C 1m',
        emoji: '🔌'
    },
    {
        id: 23,
        name: 'Earbuds',
        category: 'essentials',
        price: 399,
        originalPrice: 549,
        description: 'Wireless with case',
        emoji: '🎧'
    },
    {
        id: 24,
        name: 'Notebook Diary',
        category: 'essentials',
        price: 179,
        originalPrice: 249,
        description: 'Monthly planner',
        emoji: '📅'
    }
];

// ===== Cart State =====
let cart = [];

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
});

// ===== Render Products =====
function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToRender.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <span style="font-size: 64px;">${product.emoji}</span>
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div>
                        <span class="product-price">₹${product.price}</span>
                        <span class="product-original-price">₹${product.originalPrice}</span>
                    </div>
                    <span style="background-color: #ffd000; color: #1c1c1c; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">${discount}% OFF</span>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add</button>
        `;
        grid.appendChild(card);
    });
}

// ===== Filter Products =====
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and render
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// ===== Add to Cart =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showAddToCartAnimation();
}

// ===== Remove from Cart =====
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// ===== Update Quantity =====
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

// ===== Update Cart Display =====
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;

    // Update cart items
    const cartItemsContainer = document.getElementById('cartItems');
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `₹${total}`;
}

// ===== Toggle Cart =====
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');

    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

// ===== Show Add to Cart Animation =====
function showAddToCartAnimation() {
    // Simple visual feedback
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
        renderProducts(filtered);
    });

    // Checkout button
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        alert(`Order placed successfully! Total: ₹${total}\n\nDelivery expected in 10-15 minutes.`);
        cart = [];
        updateCart();
        toggleCart();
    });

    // Close cart on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });
}
