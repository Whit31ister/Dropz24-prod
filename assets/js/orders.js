// ===== Orders Page Script =====

function displayOrders(filter = 'all') {
    const orders = getOrders();
    const ordersContainer = document.getElementById('ordersContainer');

    if (!ordersContainer) return;

    let filteredOrders = orders;

    if (filter !== 'all') {
        filteredOrders = orders.filter(order => order.status === filter);
    }

    if (filteredOrders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="no-orders">
                <div class="no-orders-icon">📦</div>
                <h2>No orders yet</h2>
                <p>Start shopping to place your first order</p>
                <button class="no-orders-btn" onclick="navigateTo('../index.html')">Continue Shopping</button>
            </div>
        `;
        return;
    }

    ordersContainer.innerHTML = filteredOrders.map(order => {
        const statusClass = order.status.toLowerCase();
        const estimatedDate = formatDate(order.estimatedDelivery);
        
        const itemsList = order.items.map(item => 
            `<li>${item.name} × ${item.quantity}</li>`
        ).join('');

        return `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-id">Order ID: <strong>${order.id}</strong></div>
                        <div style="font-size: 12px; color: var(--text-light); margin-top: 4px;">
                            ${formatDate(order.date)}
                        </div>
                    </div>
                    <span class="order-status ${statusClass}">
                        ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                </div>
                <div class="order-body">
                    <div class="order-info">
                        <div class="order-info-label">Estimated Delivery</div>
                        <div class="order-info-value">${estimatedDate}</div>
                    </div>
                    <div class="order-items">
                        <div class="order-items-label">Items</div>
                        <ul class="order-items-list">
                            ${itemsList}
                        </ul>
                    </div>
                </div>
                <div class="order-footer">
                    <div class="order-total">${formatCurrency(order.total)}</div>
                    <div class="order-actions">
                        <button class="order-btn" onclick="viewOrderDetails('${order.id}')">Details</button>
                        <button class="order-btn primary" onclick="reorderItems('${order.id}')">Reorder</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function filterOrders(status, triggerButton) {
    document.querySelectorAll('.orders-filter button').forEach(btn => {
        btn.classList.remove('active');
    });
    if (triggerButton) {
        triggerButton.classList.add('active');
    } else if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    }

    displayOrders(status);
}

function viewOrderDetails(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);

    if (order) {
        let details = `Order Details\n\nOrder ID: ${order.id}\n`;
        details += `Status: ${order.status}\n`;
        details += `Date: ${formatDate(order.date)}\n\n`;
        details += `Items:\n`;
        
        order.items.forEach(item => {
            details += `- ${item.name} × ${item.quantity} = ${formatCurrency(item.price * item.quantity)}\n`;
        });

        details += `\nTotal: ${formatCurrency(order.total)}`;
        alert(details);
    }
}

function reorderItems(orderId) {
    const orders = getOrders();
    const order = orders.find(o => o.id === orderId);

    if (order) {
        clearCart();
        order.items.forEach(item => {
            cart.push(item);
        });
        saveCart();
        updateCartDisplay();
        alert('Items added to cart! Proceed to checkout.');
        navigateTo('../index.html');
    }
}

// Initialize orders page
document.addEventListener('DOMContentLoaded', () => {
    displayOrders('all');

    // Set first filter as active
    const filterBtns = document.querySelectorAll('.orders-filter button');
    if (filterBtns.length > 0) {
        filterBtns[0].classList.add('active');
    }
});
