// ===== Home Page Script =====

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';

    productsToRender.forEach(product => {
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
                <div class="product-brand">${product.brand}</div>
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
        checkoutBtn.addEventListener('click', openOrderModal);
    }
});

// ===== Limited Offer Banner & Countdown (adds interactive countdown) =====
(function(){
  function startCountdown(el, expiresAt) {
    function update() {
      const now = Date.now();
      const diff = Math.max(0, expiresAt - now);
      const hrs = Math.floor(diff / (1000*60*60));
      const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
      const secs = Math.floor((diff % (1000*60)) / 1000);
      const pad = n => String(n).padStart(2, '0');
      el.textContent = `Ends in ${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
      if (diff <= 0) { el.textContent = 'Offer ended'; clearInterval(timer); document.getElementById('limitedOfferBanner').style.display = 'none'; }
    }
    update();
    const timer = setInterval(update, 1000);
    return timer;
  }

  function initLimitedOffer() {
    const banner = document.getElementById('limitedOfferBanner');
    if (!banner) return;
    const countdownEl = document.getElementById('limitedCountdown');
    // offer: 15% off, expires in 2 hours from first load
    const expiresAt = Date.now() + (2 * 60 * 60 * 1000);
    startCountdown(countdownEl, expiresAt);
    const closeBtn = document.getElementById('closeLimitedBanner');
    if (closeBtn) closeBtn.addEventListener('click', () => { banner.style.display = 'none'; });

    // subtle entrance animation
    banner.style.opacity = 0; banner.style.transform = 'translateY(-6px)';
    setTimeout(()=>{ banner.style.transition = 'opacity 320ms, transform 320ms'; banner.style.opacity = 1; banner.style.transform = 'translateY(0)'; }, 80);
  }

  document.addEventListener('DOMContentLoaded', initLimitedOffer);
})();
