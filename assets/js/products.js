// ===== Product Data =====
const products = [
    // Stationery
    { id: 1, category: 'stationery', brand: 'Classmate', name: 'Ruled Notebook 180 Pages', price: 79, originalPrice: 119, description: 'Single notebook, soft cover', emoji: '📓' },
    { id: 2, category: 'stationery', brand: 'Moleskine', name: 'Pocket Notebook Set', price: 249, originalPrice: 349, description: 'Set of 3 pocket notebooks', emoji: '📒' },
    { id: 3, category: 'stationery', brand: 'Pilot', name: 'G2 Gel Pen 0.7mm Pack', price: 129, originalPrice: 179, description: 'Pack of 3 smooth pens', emoji: '🖊️' },
    { id: 4, category: 'stationery', brand: 'Reynolds', name: 'Trimax Pen Twin Pack', price: 85, originalPrice: 119, description: 'Blue ink, refillable', emoji: '✒️' },
    { id: 5, category: 'stationery', brand: 'Stabilo', name: 'Pastel Highlighter Set', price: 149, originalPrice: 229, description: 'Set of 4 colors', emoji: '🖍️' },
    { id: 6, category: 'stationery', brand: 'Faber-Castell', name: 'Mechanical Pencil 0.5mm', price: 99, originalPrice: 149, description: 'Includes lead tube', emoji: '✏️' },
    { id: 7, category: 'stationery', brand: 'Camlin', name: 'Geometry Box', price: 139, originalPrice: 189, description: 'Metal set with compass', emoji: '📐' },
    { id: 8, category: 'stationery', brand: 'Post-it', name: 'Sticky Notes Combo', price: 119, originalPrice: 159, description: '5 pads assorted colors', emoji: '📌' },
    { id: 9, category: 'stationery', brand: 'Scotch', name: 'Transparent Tape Roll', price: 59, originalPrice: 89, description: '18mm multipurpose tape', emoji: '🧷' },
    { id: 10, category: 'stationery', brand: 'Staedtler', name: 'Eraser Pack of 3', price: 45, originalPrice: 69, description: 'Dust-free erasing', emoji: '🧽' },
    { id: 11, category: 'stationery', brand: 'Deli', name: 'Mini Stapler Set', price: 109, originalPrice: 149, description: 'Stapler with pin strips', emoji: '📎' },
    { id: 12, category: 'stationery', brand: 'Casio', name: 'Scientific Calculator FX-82MS', price: 499, originalPrice: 699, description: 'Exam friendly model', emoji: '🧮' },
    { id: 13, category: 'stationery', brand: 'HP', name: 'A4 Copier Paper 500 Sheets', price: 249, originalPrice: 329, description: '80 GSM white sheets', emoji: '📄' },
    { id: 14, category: 'stationery', brand: 'Kangaro', name: 'Punch Machine Single Hole', price: 89, originalPrice: 129, description: 'Compact desk punch', emoji: '🕳️' },
    { id: 15, category: 'stationery', brand: 'Maped', name: 'Color Pencil Set 24', price: 179, originalPrice: 249, description: 'Rich pigment colors', emoji: '🎨' },
    { id: 16, category: 'stationery', brand: 'Parker', name: 'Vector Roller Pen', price: 299, originalPrice: 449, description: 'Gift-ready signature pen', emoji: '🖋️' },

    // Snacks
    { id: 17, category: 'snacks', brand: "Lay's", name: 'Classic Salted Chips 52g', price: 20, originalPrice: 30, description: 'Crunchy potato chips', emoji: '🥔' },
    { id: 18, category: 'snacks', brand: 'Doritos', name: 'Nacho Cheese Chips 60g', price: 45, originalPrice: 60, description: 'Bold cheesy flavor', emoji: '🧀' },
    { id: 19, category: 'snacks', brand: 'Cadbury', name: 'Dairy Milk Silk 60g', price: 85, originalPrice: 110, description: 'Creamy milk chocolate', emoji: '🍫' },
    { id: 20, category: 'snacks', brand: 'KitKat', name: '4 Finger Wafer Bar', price: 35, originalPrice: 45, description: 'Crispy wafer layers', emoji: '🍫' },
    { id: 21, category: 'snacks', brand: 'Britannia', name: 'Good Day Butter Cookies', price: 30, originalPrice: 45, description: 'Pack of crunchy cookies', emoji: '🍪' },
    { id: 22, category: 'snacks', brand: 'Parle', name: 'Hide & Seek Choco Chip', price: 35, originalPrice: 50, description: 'Chocolate chip cookies', emoji: '🍪' },
    { id: 23, category: 'snacks', brand: 'Haldiram', name: 'Aloo Bhujia 150g', price: 55, originalPrice: 75, description: 'Classic namkeen snack', emoji: '🥨' },
    { id: 24, category: 'snacks', brand: 'Too Yumm', name: 'Multigrain Chips 65g', price: 35, originalPrice: 49, description: 'Lightly seasoned chips', emoji: '🥔' },
    { id: 25, category: 'snacks', brand: 'Pringles', name: 'Original Snack Stack 42g', price: 79, originalPrice: 99, description: 'Portable can', emoji: '🍟' },
    { id: 26, category: 'snacks', brand: 'Kellogg’s', name: 'Chocos Energy Bar', price: 40, originalPrice: 55, description: 'Cocoa cereal bar', emoji: '🍫' },
    { id: 27, category: 'snacks', brand: 'Yoga Bar', name: 'Peanut Butter Protein Bar', price: 59, originalPrice: 79, description: '10g protein bar', emoji: '🍯' },
    { id: 28, category: 'snacks', brand: 'Cornitos', name: 'Nacho Crisps Jalapeno', price: 55, originalPrice: 75, description: 'Corn-based crispy snack', emoji: '🌽' },
    { id: 29, category: 'snacks', brand: 'Maggi', name: 'Masala Noodles Single Pack', price: 18, originalPrice: 24, description: '2-minute instant noodles', emoji: '🍜' },
    { id: 30, category: 'snacks', brand: 'Bingo', name: 'Mad Angles Achaari Masti', price: 25, originalPrice: 35, description: 'Tangy triangle chips', emoji: '🔺' },
    { id: 31, category: 'snacks', brand: 'Ferrero', name: 'Rocher 3 Piece Pack', price: 129, originalPrice: 159, description: 'Premium chocolate bites', emoji: '🍬' },
    { id: 32, category: 'snacks', brand: 'Unibic', name: 'Choco Nut Cookies', price: 40, originalPrice: 59, description: 'Cookie pack 75g', emoji: '🍪' },

    // Beverages
    { id: 33, category: 'beverages', brand: 'Coca-Cola', name: 'Can 300ml', price: 35, originalPrice: 45, description: 'Chilled fizzy drink', emoji: '🥤' },
    { id: 34, category: 'beverages', brand: 'Pepsi', name: 'Can 250ml', price: 30, originalPrice: 40, description: 'Refreshing cola', emoji: '🥤' },
    { id: 35, category: 'beverages', brand: 'Red Bull', name: 'Energy Drink 250ml', price: 99, originalPrice: 125, description: 'Instant energy boost', emoji: '⚡' },
    { id: 36, category: 'beverages', brand: 'Monster', name: 'Energy Drink 350ml', price: 110, originalPrice: 140, description: 'High-caffeine drink', emoji: '⚡' },
    { id: 37, category: 'beverages', brand: 'Tropicana', name: 'Orange Juice 250ml', price: 55, originalPrice: 75, description: 'Fruit juice drink', emoji: '🍊' },
    { id: 38, category: 'beverages', brand: 'Real', name: 'Mixed Fruit Juice 250ml', price: 49, originalPrice: 69, description: 'Vitamin-rich fruit blend', emoji: '🧃' },
    { id: 39, category: 'beverages', brand: 'Minute Maid', name: 'Lemonade 250ml', price: 45, originalPrice: 59, description: 'Tangy and cool', emoji: '🍋' },
    { id: 40, category: 'beverages', brand: 'Starbucks', name: 'Cold Brew Bottle 200ml', price: 119, originalPrice: 159, description: 'Ready-to-drink coffee', emoji: '☕' },
    { id: 41, category: 'beverages', brand: 'Nescafe', name: 'Chilled Latte Can', price: 60, originalPrice: 85, description: 'Smooth milk coffee', emoji: '☕' },
    { id: 42, category: 'beverages', brand: 'Lipton', name: 'Peach Iced Tea 250ml', price: 45, originalPrice: 65, description: 'Tea with peach notes', emoji: '🧋' },
    { id: 43, category: 'beverages', brand: 'Tetley', name: 'Green Tea 25 Bags', price: 89, originalPrice: 119, description: 'Herbal tea infusion', emoji: '🍵' },
    { id: 44, category: 'beverages', brand: 'Paper Boat', name: 'Aamras Drink 200ml', price: 35, originalPrice: 49, description: 'Traditional mango drink', emoji: '🥭' },
    { id: 45, category: 'beverages', brand: 'Amul', name: 'Chocolate Milk 180ml', price: 35, originalPrice: 45, description: 'Milk drink tetra pack', emoji: '🥛' },
    { id: 46, category: 'beverages', brand: 'Epigamia', name: 'Mango Lassi 200ml', price: 55, originalPrice: 75, description: 'Greek-style lassi', emoji: '🥛' },
    { id: 47, category: 'beverages', brand: 'Bisleri', name: 'Soda 750ml', price: 30, originalPrice: 40, description: 'Sparkling soda water', emoji: '💧' },
    { id: 48, category: 'beverages', brand: 'Celsius', name: 'Fitness Drink Can', price: 129, originalPrice: 169, description: 'Vitamin energy blend', emoji: '⚡' },

    // Essentials
    { id: 49, category: 'essentials', brand: 'Dettol', name: 'Hand Sanitizer 100ml', price: 35, originalPrice: 55, description: 'Kills 99.9% germs', emoji: '🧴' },
    { id: 50, category: 'essentials', brand: 'Lifebuoy', name: 'Total Soap Pack of 3', price: 79, originalPrice: 109, description: 'Daily hygiene soap bars', emoji: '🧼' },
    { id: 51, category: 'essentials', brand: 'Nivea', name: 'Deodorant Spray 150ml', price: 129, originalPrice: 189, description: 'Long-lasting freshness', emoji: '💨' },
    { id: 52, category: 'essentials', brand: 'Dove', name: 'Deep Moisture Body Wash', price: 159, originalPrice: 229, description: '250ml shower gel', emoji: '🫧' },
    { id: 53, category: 'essentials', brand: 'Colgate', name: 'Strong Teeth Toothpaste 200g', price: 109, originalPrice: 149, description: 'Calcium boost formula', emoji: '🪥' },
    { id: 54, category: 'essentials', brand: 'Oral-B', name: 'Soft Toothbrush Twin Pack', price: 95, originalPrice: 139, description: 'Comfort grip design', emoji: '🪥' },
    { id: 55, category: 'essentials', brand: 'Gillette', name: 'Mach3 Razor', price: 199, originalPrice: 279, description: '3-blade close shave', emoji: '🪒' },
    { id: 56, category: 'essentials', brand: 'Vaseline', name: 'Petroleum Jelly 100ml', price: 69, originalPrice: 99, description: 'Skin moisture lock', emoji: '🧴' },
    { id: 57, category: 'essentials', brand: 'Pond’s', name: 'Super Light Gel 73g', price: 149, originalPrice: 199, description: 'Hydrating face gel', emoji: '💧' },
    { id: 58, category: 'essentials', brand: 'Neutrogena', name: 'Hydro Boost Moisturizer', price: 249, originalPrice: 329, description: 'Daily hydration cream', emoji: '🧴' },
    { id: 59, category: 'essentials', brand: 'boAt', name: 'Airdopes Earbuds', price: 799, originalPrice: 1199, description: 'True wireless earbuds', emoji: '🎧' },
    { id: 60, category: 'essentials', brand: 'Anker', name: 'USB-C Fast Charger 20W', price: 349, originalPrice: 499, description: 'Compact power adapter', emoji: '🔌' },
    { id: 61, category: 'essentials', brand: 'Xiaomi', name: '10000mAh Power Bank', price: 749, originalPrice: 999, description: 'Dual output fast charge', emoji: '🔋' },
    { id: 62, category: 'essentials', brand: 'SanDisk', name: '32GB Pendrive USB 3.0', price: 299, originalPrice: 399, description: 'High-speed data transfer', emoji: '💾' },
    { id: 63, category: 'essentials', brand: 'Duracell', name: 'AA Battery Pack of 4', price: 139, originalPrice: 189, description: 'Long-lasting alkaline cells', emoji: '🔋' },
    { id: 64, category: 'essentials', brand: 'Whisper', name: 'Ultra Pads Pack', price: 169, originalPrice: 239, description: 'XL hygienic protection', emoji: '📦' }
];

// ===== Limited-Time Offers =====
const limitedOffers = [
    { id: 'LTO1', productId: 2, percent: 28, expiresAt: Date.now() + 6 * 60 * 60 * 1000 },
    { id: 'LTO2', productId: 9, percent: 22, expiresAt: Date.now() + 4 * 60 * 60 * 1000 },
    { id: 'LTO3', productId: 17, percent: 35, expiresAt: Date.now() + 5 * 60 * 60 * 1000 },
    { id: 'LTO4', productId: 21, percent: 30, expiresAt: Date.now() + 8 * 60 * 60 * 1000 },
    { id: 'LTO5', productId: 31, percent: 20, expiresAt: Date.now() + 3 * 60 * 60 * 1000 },
    { id: 'LTO6', productId: 35, percent: 18, expiresAt: Date.now() + 7 * 60 * 60 * 1000 },
    { id: 'LTO7', productId: 40, percent: 25, expiresAt: Date.now() + 6 * 60 * 60 * 1000 },
    { id: 'LTO8', productId: 44, percent: 26, expiresAt: Date.now() + 4 * 60 * 60 * 1000 },
    { id: 'LTO9', productId: 49, percent: 32, expiresAt: Date.now() + 9 * 60 * 60 * 1000 },
    { id: 'LTO10', productId: 52, percent: 24, expiresAt: Date.now() + 5 * 60 * 60 * 1000 },
    { id: 'LTO11', productId: 59, percent: 16, expiresAt: Date.now() + 10 * 60 * 60 * 1000 },
    { id: 'LTO12', productId: 62, percent: 22, expiresAt: Date.now() + 7 * 60 * 60 * 1000 }
];

function getLimitedOfferForProduct(productId) {
    const now = Date.now();
    const offers = limitedOffers.filter(
        offer => offer.productId === productId && offer.expiresAt > now
    );

    if (offers.length === 0) return null;
    offers.sort((a, b) => b.percent - a.percent);
    return offers[0];
}

function getTopLimitedOffers(limit = 3) {
    const now = Date.now();
    return limitedOffers
        .filter(offer => offer.expiresAt > now)
        .sort((a, b) => b.percent - a.percent)
        .slice(0, limit);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        limitedOffers,
        getLimitedOfferForProduct,
        getTopLimitedOffers
    };
}
