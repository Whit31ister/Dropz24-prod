// ===== Cart Management =====

let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('grabz_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('grabz_cart', JSON.stringify(cart));
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    const effectivePrice = (typeof getEffectivePrice === 'function') ? getEffectivePrice(product) : product.price;

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand || '',
            emoji: product.emoji,
            price: effectivePrice,
            originalPrice: product.originalPrice || product.price,
            quantity: 1
        });
    }

    saveCart();
    updateCartDisplay();
    showAddToCartAnimation();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

// Get cart total
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Get total items in cart
function getCartItemCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Clear cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cartCount) {
        cartCount.textContent = getCartItemCount();
    }

    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.emoji}</div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.brand ? item.brand + ' ' : ''}${item.name}</div>
                        <div class="cart-item-price">${item.price < item.originalPrice ? '<span class="cart-price-now">₹' + item.price + '</span> <span class="cart-price-original">₹' + item.originalPrice + '</span>' : '₹' + item.price}</div>
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
    }

    if (cartTotal) {
        cartTotal.textContent = `₹${getCartTotal()}`;
    }
}

// Show animation feedback
function showAddToCartAnimation() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

// Initialize cart on page load
loadCart();