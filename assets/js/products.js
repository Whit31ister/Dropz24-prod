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
    },
    {
        id: 25,
        name: 'Power Bank',
        category: 'essentials',
        price: 449,
        originalPrice: 599,
        description: '20000mAh',
        emoji: '🔋'
    },
    {
        id: 26,
        name: 'Deodorant',
        category: 'essentials',
        price: 149,
        originalPrice: 199,
        description: '150ml spray',
        emoji: '💨'
    },
    {
        id: 27,
        name: 'Moisturizer',
        category: 'essentials',
        price: 199,
        originalPrice: 299,
        description: '50ml moisturizing',
        emoji: '🧴'
    },
    {
        id: 28,
        name: 'Toothbrush',
        category: 'essentials',
        price: 49,
        originalPrice: 79,
        description: 'Soft bristles',
        emoji: '🪥'
    },

    // Additional Stationery
    {
        id: 29,
        name: 'Markers Set',
        category: 'stationery',
        price: 129,
        originalPrice: 179,
        description: '12 colors',
        emoji: '🖌️'
    },
    {
        id: 30,
        name: 'Correction Fluid',
        category: 'stationery',
        price: 39,
        originalPrice: 59,
        description: '20ml bottle',
        emoji: '⚪'
    },
    {
        id: 31,
        name: 'Sticky Notes',
        category: 'stationery',
        price: 59,
        originalPrice: 89,
        description: '300 notes',
        emoji: '📌'
    },
    {
        id: 32,
        name: 'Eraser Set',
        category: 'stationery',
        price: 49,
        originalPrice: 79,
        description: 'Pack of 5',
        emoji: '🧹'
    },

    // Additional Snacks
    {
        id: 33,
        name: 'Biscuits',
        category: 'snacks',
        price: 59,
        originalPrice: 89,
        description: 'Butter flavor',
        emoji: '🍘'
    },
    {
        id: 34,
        name: 'Instant Noodles',
        category: 'snacks',
        price: 29,
        originalPrice: 49,
        description: 'Quick meal',
        emoji: '🍜'
    },
    {
        id: 35,
        name: 'Candy Pack',
        category: 'snacks',
        price: 69,
        originalPrice: 99,
        description: 'Assorted flavors',
        emoji: '🍬'
    },
    {
        id: 36,
        name: 'Popcorn',
        category: 'snacks',
        price: 79,
        originalPrice: 109,
        description: 'Caramel flavor',
        emoji: '🍿'
    },

    // Additional Beverages
    {
        id: 37,
        name: 'Iced Tea',
        category: 'beverages',
        price: 59,
        originalPrice: 79,
        description: '250ml chilled',
        emoji: '🧋'
    },
    {
        id: 38,
        name: 'Energy Bar',
        category: 'beverages',
        price: 89,
        originalPrice: 119,
        description: 'Chocolate',
        emoji: '🍫'
    },
    {
        id: 39,
        name: 'Vitamin Water',
        category: 'beverages',
        price: 79,
        originalPrice: 99,
        description: '500ml bottle',
        emoji: '💧'
    },
    {
        id: 40,
        name: 'Smoothie Mix',
        category: 'beverages',
        price: 149,
        originalPrice: 199,
        description: 'Fruit blend',
        emoji: '🥤'
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
