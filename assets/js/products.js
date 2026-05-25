// ===== Product Data =====
const products = [
    // Stationery - popular branded examples
    {
        id: 1,
        name: 'Moleskine Classic Notebook — Ruled (Moleskine)',
        category: 'stationery',
        price: 799,
        originalPrice: 999,
        description: 'Hardcover, 192 pages ruled',
        emoji: '📓'
    },
    {
        id: 2,
        name: 'Pilot G2 Gel Pens — 0.7mm (Pilot)',
        category: 'stationery',
        price: 249,
        originalPrice: 349,
        description: 'Pack of 5 smooth-writing gel pens',
        emoji: '🖊️'
    },
    {
        id: 3,
        name: 'Stabilo Highlighters — Pastel Set (Stabilo)',
        category: 'stationery',
        price: 179,
        originalPrice: 249,
        description: 'Set of 6 pastel highlighters',
        emoji: '🖍️'
    },
    {
        id: 4,
        name: 'Faber-Castell Mechanical Pencil — 0.5mm',
        category: 'stationery',
        price: 129,
        originalPrice: 179,
        description: 'Durable metal tip, refillable',
        emoji: '✏️'
    },
    {
        id: 5,
        name: 'HP A4 Paper Ream — 80gsm (HP)',
        category: 'stationery',
        price: 299,
        originalPrice: 399,
        description: '500 sheets, multipurpose',
        emoji: '📄'
    },
    {
        id: 6,
        name: 'Casio Scientific Calculator — FX-991 (Casio)',
        category: 'stationery',
        price: 899,
        originalPrice: 1199,
        description: 'Scientific functions, solar backed',
        emoji: '🧮'
    },

    // Snacks — brand examples
    {
        id: 7,
        name: "Lay's Classic Potato Chips — 40g (Lay's)",
        category: 'snacks',
        price: 25,
        originalPrice: 40,
        description: 'Salted, crunchy',
        emoji: '🥔'
    },
    {
        id: 8,
        name: 'Cadbury Dairy Milk — 60g (Cadbury)',
        category: 'snacks',
        price: 45,
        originalPrice: 60,
        description: 'Milk chocolate bar',
        emoji: '🍫'
    },
    {
        id: 9,
        name: 'Nature Valley Granola Bar — Oats & Honey',
        category: 'snacks',
        price: 35,
        originalPrice: 49,
        description: 'Single bar, crunchy oats',
        emoji: '🍪'
    },
    {
        id: 10,
        name: 'Pringles Original — Snack Can (Pringles)',
        category: 'snacks',
        price: 79,
        originalPrice: 119,
        description: 'Crispy potato crisps',
        emoji: '🥔'
    },
    {
        id: 11,
        name: 'Blue Diamond Almonds — Smokehouse (Blue Diamond)',
        category: 'snacks',
        price: 149,
        originalPrice: 199,
        description: 'Roasted almonds, 120g',
        emoji: '🥜'
    },
    {
        id: 12,
        name: 'Trail Mix — Healthy Bites (BrandX)',
        category: 'snacks',
        price: 129,
        originalPrice: 179,
        description: 'Assorted nuts & dried fruit, 150g',
        emoji: '🍇'
    },

    // Beverages — examples
    {
        id: 13,
        name: 'Starbucks Cold Brew — Bottled (Starbucks)',
        category: 'beverages',
        price: 129,
        originalPrice: 169,
        description: 'Ready-to-drink cold brew, 200ml',
        emoji: '☕'
    },
    {
        id: 14,
        name: 'Tetley Green Tea — 25 Bags (Tetley)',
        category: 'beverages',
        price: 99,
        originalPrice: 129,
        description: 'Antioxidant rich green tea bags',
        emoji: '🍵'
    },
    {
        id: 15,
        name: 'Tropicana Orange Juice — 250ml (Tropicana)',
        category: 'beverages',
        price: 69,
        originalPrice: 99,
        description: 'Fresh squeezed taste',
        emoji: '🧃'
    },
    {
        id: 16,
        name: 'MuscleBlaze Protein Shake — Chocolate (MuscleBlaze)',
        category: 'beverages',
        price: 179,
        originalPrice: 249,
        description: 'Ready-to-drink protein shake, 250ml',
        emoji: '🥛'
    },
    {
        id: 17,
        name: 'Coconut Water — Real (Real)',
        category: 'beverages',
        price: 59,
        originalPrice: 79,
        description: 'Natural electrolytes, 200ml',
        emoji: '🥥'
    },
    {
        id: 18,
        name: 'Minute Maid Lemonade — 250ml (Minute Maid)',
        category: 'beverages',
        price: 49,
        originalPrice: 69,
        description: 'Refreshing lemonade',
        emoji: '🍋'
    },

    // Essentials — brand examples
    {
        id: 19,
        name: 'Dettol Hand Sanitizer — 100ml (Dettol)',
        category: 'essentials',
        price: 39,
        originalPrice: 59,
        description: 'Kills 99.9% germs',
        emoji: '🧴'
    },
    {
        id: 20,
        name: 'Kleenex Facial Tissues — 100 Sheets (Kleenex)',
        category: 'essentials',
        price: 49,
        originalPrice: 79,
        description: 'Soft & strong',
        emoji: '🧻'
    },
    {
        id: 21,
        name: 'Anker PowerPort Charger — 18W (Anker)',
        category: 'essentials',
        price: 599,
        originalPrice: 899,
        description: 'Fast charging wall adapter',
        emoji: '🔌'
    },
    {
        id: 22,
        name: 'Anker PowerLine USB-C Cable — 1m (Anker)',
        category: 'essentials',
        price: 199,
        originalPrice: 299,
        description: 'Durable braided cable',
        emoji: '🔌'
    },
    {
        id: 23,
        name: 'boAt Airdopes — True Wireless Earbuds (boAt)',
        category: 'essentials',
        price: 899,
        originalPrice: 1299,
        description: 'Wireless earbuds with charging case',
        emoji: '🎧'
    },
    {
        id: 24,
        name: 'Moleskine Planner — Monthly (Moleskine)',
        category: 'essentials',
        price: 249,
        originalPrice: 349,
        description: 'Monthly planner diary',
        emoji: '📅'
    },
    {
        id: 25,
        name: 'Xiaomi 10000mAh Power Bank — Compact (Xiaomi)',
        category: 'essentials',
        price: 999,
        originalPrice: 1299,
        description: 'Compact fast charge power bank',
        emoji: '🔋'
    },
    {
        id: 26,
        name: 'Nivea Deodorant — 150ml (Nivea)',
        category: 'essentials',
        price: 149,
        originalPrice: 199,
        description: '48h protection spray',
        emoji: '💨'
    },
    {
        id: 27,
        name: 'Neutrogena Moisturizer — 50ml (Neutrogena)',
        category: 'essentials',
        price: 229,
        originalPrice: 329,
        description: 'Daily hydration cream',
        emoji: '🧴'
    },
    {
        id: 28,
        name: 'Colgate Toothbrush — Soft (Colgate)',
        category: 'essentials',
        price: 59,
        originalPrice: 99,
        description: 'Soft bristles, ergonomic handle',
        emoji: '🪥'
    },

    // More Stationery
    {
        id: 29,
        name: 'Sharpie Permanent Marker — Black (Sharpie)',
        category: 'stationery',
        price: 99,
        originalPrice: 149,
        description: 'Permanent fine point',
        emoji: '🖌️'
    },
    {
        id: 30,
        name: 'Paper Mate Correction Tape — 5mm (Paper Mate)',
        category: 'stationery',
        price: 69,
        originalPrice: 99,
        description: 'Clean correction tape',
        emoji: '⚪'
    },
    {
        id: 31,
        name: 'Post-it Notes — 3x3 Inch (Post-it)',
        category: 'stationery',
        price: 99,
        originalPrice: 129,
        description: 'Pack of 5 pads',
        emoji: '📌'
    },
    {
        id: 32,
        name: 'Staedtler Eraser — Pack of 2 (Staedtler)',
        category: 'stationery',
        price: 49,
        originalPrice: 79,
        description: 'Clean erasing',
        emoji: '🧹'
    },

    // More Snacks
    {
        id: 33,
        name: 'Britannia Good Day — Butter Cookies (Britannia)',
        category: 'snacks',
        price: 45,
        originalPrice: 69,
        description: 'Rich buttery cookies',
        emoji: '🍪'
    },
    {
        id: 34,
        name: 'Maggi Masala Noodles — Single Pack (Maggi)',
        category: 'snacks',
        price: 25,
        originalPrice: 35,
        description: 'Quick instant noodles',
        emoji: '🍜'
    },
    {
        id: 35,
        name: 'Ferrero Rocher — 3 Pieces (Ferrero)',
        category: 'snacks',
        price: 149,
        originalPrice: 199,
        description: 'Hazelnut chocolate delight',
        emoji: '🍫'
    },
    {
        id: 36,
        name: 'Joe & Sephs Popcorn — Caramel (Joe & Sephs)',
        category: 'snacks',
        price: 89,
        originalPrice: 129,
        description: 'Gourmet caramel popcorn',
        emoji: '🍿'
    },

    // More Beverages
    {
        id: 37,
        name: 'Lipton Iced Tea — Peach (Lipton)',
        category: 'beverages',
        price: 59,
        originalPrice: 79,
        description: '250ml chilled',
        emoji: '🧋'
    },
    {
        id: 38,
        name: 'Nature''s Own Vitamin Water — 500ml',
        category: 'beverages',
        price: 79,
        originalPrice: 99,
        description: 'Electrolyte boost',
        emoji: '💧'
    },
    {
        id: 39,
        name: 'True Elements Energy Bar — Peanut (True Elements)',
        category: 'beverages',
        price: 89,
        originalPrice: 119,
        description: 'Nutritious energy bar',
        emoji: '🍫'
    },
    {
        id: 40,
        name: 'Real Smoothie — Mixed Berry (Real)',
        category: 'beverages',
        price: 129,
        originalPrice: 179,
        description: 'Fruit blend smoothie',
        emoji: '🥤'
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
