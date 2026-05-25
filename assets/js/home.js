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

function filterProducts(category, triggerButton) {
    // Update active button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (triggerButton) {
        triggerButton.classList.add('active');
    } else if (typeof event !== 'undefined' && event.target) {
        event.target.classList.add('active');
    }

    // Filter and render
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

function renderHomeDealsRail() {
    const rail = document.getElementById('homeDealsRail');
    if (!rail || typeof getTopLimitedOffers !== 'function') return;

    const deals = getTopLimitedOffers(4);
    if (deals.length === 0) {
        rail.style.display = 'none';
        return;
    }

    rail.innerHTML = deals.map((offer) => {
        const product = products.find((item) => item.id === offer.productId);
        if (!product) return '';
        return `
            <button class="deal-chip" onclick="navigateTo('${getSearchPagePath(`${product.brand} ${product.name}`)}')">
                <span class="deal-chip-percent">${offer.percent}% OFF</span>
                <span class="deal-chip-name">${product.brand} ${product.name}</span>
            </button>
        `;
    }).join('');
}

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderHomeDealsRail();
    
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
    const textEl = banner.querySelector('.offer-text');
    const featuredOffer = (typeof getTopLimitedOffers === 'function') ? getTopLimitedOffers(1)[0] : null;

    if (!featuredOffer) {
      banner.style.display = 'none';
      return;
    }

    const featuredProduct = products.find((product) => product.id === featuredOffer.productId);
    if (featuredProduct && textEl) {
      textEl.innerHTML = `Limited Time: Extra <strong>${featuredOffer.percent}% OFF</strong> on ${featuredProduct.brand} ${featuredProduct.name}`;
    }

    startCountdown(countdownEl, featuredOffer.expiresAt);
    const closeBtn = document.getElementById('closeLimitedBanner');
    if (closeBtn) closeBtn.addEventListener('click', () => { banner.style.display = 'none'; });

    // subtle entrance animation
    banner.style.opacity = 0; banner.style.transform = 'translateY(-6px)';
    setTimeout(()=>{ banner.style.transition = 'opacity 320ms, transform 320ms'; banner.style.opacity = 1; banner.style.transform = 'translateY(0)'; }, 80);
  }

  document.addEventListener('DOMContentLoaded', initLimitedOffer);
})();
