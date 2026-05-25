// ===== Home Page Script =====

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    productsToRender.forEach(product => {
        const discount = calculateDiscount(product.originalPrice, product.price);
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
                        <span class="product-price">${formatCurrency(product.price)}</span>
                        <span class="product-original-price">${formatCurrency(product.originalPrice)}</span>
                    </div>
                    <span class="discount-badge">${discount}% OFF</span>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add</button>
        `;
        grid.appendChild(card);
    });
}

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

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    
    // Checkout button handler
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            const total = getCartTotal();
            const order = addOrder(cart, total);
            alert(`Order placed successfully!\nOrder ID: ${order.id}\nTotal: ${formatCurrency(total)}\n\nDelivery expected in 10-15 minutes.`);
            clearCart();
            toggleCart();
        });
    }
});
