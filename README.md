# GRABZ - Campus Quick Convenience Store

A modern, student-focused quick delivery platform prototype inspired by Blinkit's UI design.

## Project Description

**GRABZ** is a campus-focused quick convenience store designed for students. It provides stationery, snacks, beverages, and daily essentials at affordable prices with fast access and delivery inside college campuses. Unlike external platforms, GRABZ focuses on low-cost, hyperlocal service optimized specifically for student needs, saving both time and money.

## Features

✨ **Modern UI Design**
- Clean, responsive interface similar to Blinkit
- Sticky header with search functionality
- Category-based navigation
- Product filtering and search

🛒 **Shopping Cart**
- Add/remove items dynamically
- Quantity adjustment
- Real-time cart updates
- Sliding sidebar cart view
- Cart persistence with localStorage

🔍 **Search & Discovery**
- Advanced product search
- Category filtering
- Sort by price and discount
- Real-time search results

📦 **Order Management**
- Order history tracking
- Order status monitoring
- Reorder functionality
- Order details view

👤 **User Account**
- User profile management
- Multiple delivery addresses
- User preferences
- Notification settings

📱 **Responsive Design**
- Desktop optimized
- Tablet friendly
- Mobile responsive

⚡ **Fast Interactions**
- Smooth animations and transitions
- Quick add to cart functionality
- Instant cart count updates
- Local data persistence

## Project Structure

```
Dropz24-prod/
├── index.html                    # Main home page
├── pages/
│   ├── search.html              # Search results page
│   ├── orders.html              # Order history page
│   └── account.html             # User account page
├── assets/
│   ├── css/
│   │   ├── styles.css           # Master stylesheet
│   │   ├── variables.css        # CSS variables & colors
│   │   ├── base.css             # Base & reset styles
│   │   ├── header.css           # Header component styles
│   │   ├── products.css         # Product grid & card styles
│   │   ├── cart.css             # Shopping cart styles
│   │   ├── search.css           # Search page styles
│   │   ├── orders.css           # Orders page styles
│   │   └── account.css          # Account page styles
│   └── js/
│       ├── products.js          # Product data & management
│       ├── cart.js              # Shopping cart logic
│       ├── utils.js             # Utility functions
│       ├── home.js              # Home page script
│       ├── search.js            # Search page script
│       ├── orders.js            # Orders page script
│       └── account.js           # Account page script
├── README.md                     # This file
└── LICENSE
```

## How to Run

### 1. Open directly in browser:
Simply open `index.html` in any modern web browser
- No build process or dependencies required

### 2. Using a local server (recommended):

**Python 3:**
```bash
python -m http.server 8000
# Navigate to http://localhost:8000
```

**Node.js (http-server):**
```bash
npx http-server
# Navigate to http://localhost:8080
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

## Pages Overview

### 1. **Home Page** (`index.html`)
- Product browsing by category
- Featured products display
- Quick add to cart
- Cart management

### 2. **Search Page** (`pages/search.html`)
- Advanced product search
- Category filtering
- Sort options (price, discount)
- Real-time search results

### 3. **Orders Page** (`pages/orders.html`)
- Order history display
- Status filtering (all, processing, delivered, cancelled)
- Order details view
- Reorder functionality

### 4. **Account Page** (`pages/account.html`)
- Profile management
- Address management
- User preferences
- Notification settings
- Logout functionality

## Features Explained

### Categories
- **Stationery**: Notebooks, pens, pencils, paper, calculators
- **Snacks**: Chips, chocolate, nuts, granola, energy drinks
- **Beverages**: Coffee, tea, juice, protein shakes
- **Essentials**: Hand sanitizer, tissues, chargers, earbuds

### Shopping Flow
1. Browse products by category or use search
2. Click "Add" button to add items to cart
3. View cart by clicking the cart icon
4. Adjust quantities or remove items
5. Click "Checkout" to place order
6. View order history in "My Orders" page

### Search Functionality
- Real-time search across product names and descriptions
- Filter by category
- Sort by price (low-high, high-low)
- Sort by best discounts
- Type to filter products instantly

### Cart Management
- Persistent cart (saves to localStorage)
- Quantity adjustment (±)
- Item removal
- Total calculation
- Cart count badge

### User Account
- Save personal information
- Manage multiple addresses
- Set delivery preferences
- Enable/disable notifications
- Logout and session management

## UI Components

### Header
- GRABZ logo with icon (clickable to go home)
- Search bar with navigation to search page
- Location selector
- Shopping cart with item count badge
- User account icon

### Product Cards
- Product emoji/image
- Product name and description
- Original and discounted prices
- Discount percentage badge
- Quick "Add" button

### Shopping Cart Sidebar
- Slide-in cart panel from right
- Cart items with quantity controls
- Remove item functionality
- Order total
- Checkout button

### Search Interface
- Search input box
- Category filter buttons
- Sort dropdown
- Results counter
- Product grid display

### Account Interface
- Sidebar menu navigation
- Profile edit form
- Address management
- Preferences with toggle switches
- Logout button

## Styling Highlights

### Color Scheme
- **Primary**: Green (#12a94f)
- **Secondary**: Dark Green (#0c6c3f)
- **Accent**: Yellow (#ffd000)
- **Text Dark**: #1c1c1c
- **Text Light**: #666
- **Background**: White (#fff)
- **Background Light**: Light Gray (#f7f7f7)

### Design System
- **Shadows**: Subtle shadows for depth
- **Animations**: Smooth transitions (0.3s)
- **Spacing**: Consistent padding & margins
- **Typography**: System fonts for optimal performance
- **Border Radius**: 8-12px for modern look

## Data Storage

The application uses **localStorage** for client-side data persistence:

- **Cart Data** (`grabz_cart`): Persists shopping cart items
- **User Data** (`grabz_user`): User profile information
- **Orders** (`grabz_orders`): Order history
- **Preferences** (`grabz_preferences`): User preferences

## Sample Data

The project includes 24 sample products across 4 categories:
- 6 Stationery items
- 6 Snacks
- 6 Beverages
- 6 Daily Essentials

**Price Range**: ₹29 to ₹399 with realistic discounts (15-25%)

## Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Any modern browser supporting ES6+

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Media queries, Custom properties
- **JavaScript**: Vanilla ES6+ (no frameworks)
- **Icons**: Font Awesome 6.4.0
- **Storage**: localStorage API

## Code Organization

### Modular CSS
- Separated concerns (variables, base, components, pages)
- Easy to maintain and update
- Consistent styling across pages

### Modular JavaScript
- `products.js`: Product data management
- `cart.js`: Shopping cart logic
- `utils.js`: Shared utility functions
- `home.js`, `search.js`, `orders.js`, `account.js`: Page-specific logic

## Key Functions

### Cart Functions
- `addToCart(productId)`: Add item to cart
- `removeFromCart(productId)`: Remove item from cart
- `updateQuantity(productId, change)`: Update item quantity
- `getCartTotal()`: Calculate total price
- `clearCart()`: Empty the cart

### Utility Functions
- `navigateTo(page)`: Navigate to different pages
- `formatCurrency(amount)`: Format amounts in INR
- `calculateDiscount(original, sale)`: Calculate discount percentage
- `formatDate(date)`: Format dates
- `debounce(func, wait)`: Debounce function calls

### Local Storage Functions
- `getUserData()`: Get user profile
- `saveUserData(data)`: Save user profile
- `getOrders()`: Retrieve order history
- `addOrder(items, total)`: Create new order

## Future Enhancements

- 🔐 User authentication & login
- 💳 Real payment gateway integration
- 📍 Campus location mapping
- ⏱️ Real delivery time estimates
- 🔔 Push notifications
- ⭐ Product reviews & ratings
- 💬 Live chat support
- 📊 Admin dashboard
- 📦 Real inventory system
- 🎁 Coupon & discount codes
- 💝 Wishlist feature
- 🏪 Multiple vendor support
- 📈 Analytics & user tracking

## Performance Optimization

- Lightweight CSS (modular approach)
- Vanilla JavaScript (no framework overhead)
- localStorage for offline capability
- Optimized images/emojis
- Minimal dependencies (only Font Awesome)

## Security Notes

- ⚠️ This is a frontend prototype
- No backend authentication
- Data stored in browser's localStorage
- For production: implement backend security
- Sensitive data should be encrypted

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast compliance
- Keyboard navigation support
- ARIA attributes where needed

## Notes

- This is a frontend prototype demonstration
- No backend server required for basic functionality
- Data is stored in memory (localStorage persists across sessions)
- Product data is hardcoded (can be replaced with API calls)
- All interactions are simulated and work client-side only

## Contributing

Feel free to fork, modify, and improve this project!

## License

This project is open for educational and commercial use.

---

**Built with ❤️ for students | GRABZ - Campus Quick Convenience Store**

