# GRABZ Project Structure Documentation

## Overview
GRABZ is a modular, well-organized frontend e-commerce application for campus quick delivery. The project follows a clear separation of concerns with dedicated folders for different functionalities.

## Directory Tree

```
Dropz24-prod/
│
├── 📄 index.html                          # Main home page entry point
├── 📄 LICENSE                             # Project license
├── 📄 README.md                           # Project documentation
│
├── 📁 pages/                              # Separate pages
│   ├── 📄 search.html                     # Search & filter page
│   ├── 📄 orders.html                     # Order history page
│   └── 📄 account.html                    # User account management page
│
├── 📁 assets/                             # All static assets
│   │
│   ├── 📁 css/                            # Stylesheets (modular)
│   │   ├── 📄 styles.css                  # Master stylesheet (imports all)
│   │   ├── 📄 variables.css               # CSS custom properties & color scheme
│   │   ├── 📄 base.css                    # Global reset & base styles
│   │   ├── 📄 header.css                  # Header & navigation component
│   │   ├── 📄 products.css                # Product grid & card layouts
│   │   ├── 📄 cart.css                    # Shopping cart sidebar
│   │   ├── 📄 search.css                  # Search page specific styles
│   │   ├── 📄 orders.css                  # Orders page specific styles
│   │   └── 📄 account.css                 # Account page specific styles
│   │
│   └── 📁 js/                             # JavaScript modules
│       ├── 📄 products.js                 # Product data & constants
│       ├── 📄 cart.js                     # Shopping cart logic & localStorage
│       ├── 📄 utils.js                    # Shared utility functions
│       ├── 📄 home.js                     # Home page functionality
│       ├── 📄 search.js                   # Search page functionality
│       ├── 📄 orders.js                   # Orders page functionality
│       └── 📄 account.js                  # Account page functionality
│
└── 📁 .git/                               # Git repository
└── 📁 .idea/                              # IDE configuration
```

## File Organization Details

### Root Files
- **index.html**: Main landing page and home view
- **README.md**: Complete project documentation
- **LICENSE**: Project license file

### Pages Folder (`/pages`)
Contains all multi-page views:
- **search.html**: Advanced search with filters and sorting
- **orders.html**: Order history and management
- **account.html**: User profile, addresses, and settings

### Assets Folder (`/assets`)

#### CSS Structure (`/assets/css`)
Modular CSS architecture with single-responsibility principle:

1. **variables.css** - Design system
   - Color variables (primary, secondary, accent)
   - Typography scales
   - Shadow definitions
   - Transition timing
   - Grid/spacing values

2. **base.css** - Foundation
   - CSS reset
   - HTML/body base styles
   - Global typography
   - Container class
   - Default element styles

3. **header.css** - Header component
   - Header layout
   - Logo styling
   - Search container
   - Navigation
   - Header actions (cart, account)
   - Mobile menu

4. **products.css** - Product display
   - Product grid layout
   - Product cards
   - Product images
   - Product info sections
   - Add to cart button
   - Empty state styling

5. **cart.css** - Shopping cart
   - Cart sidebar layout
   - Cart items display
   - Quantity controls
   - Cart totals
   - Cart overlay/backdrop

6. **search.css** - Search page specific
   - Search input styling
   - Filter buttons
   - Sort options
   - Results information
   - No results state

7. **orders.css** - Orders page specific
   - Order cards layout
   - Order status badges
   - Order information sections
   - Order actions
   - Empty orders state

8. **account.css** - Account page specific
   - Sidebar navigation
   - Account sections
   - Form elements
   - Toggle switches
   - Address cards
   - Profile sections

9. **styles.css** - Master stylesheet
   - Imports all CSS modules in correct order
   - Single entry point for styles

#### JavaScript Modules (`/assets/js`)

1. **products.js** - Data layer
   - Product constants array
   - Product schema
   - Category definitions
   - Pricing information
   - 24 sample products

2. **cart.js** - Cart management
   - Cart state
   - localStorage integration
   - Add to cart
   - Remove from cart
   - Update quantity
   - Calculate totals
   - Cart persistence

3. **utils.js** - Utility layer
   - Navigation functions
   - Formatting utilities
   - localStorage helpers
   - User data management
   - Orders management
   - Global event listeners
   - Debounce function

4. **home.js** - Home page
   - Product rendering
   - Category filtering
   - Checkout functionality
   - Product display logic

5. **search.js** - Search page
   - Search functionality
   - Category filtering
   - Sorting logic
   - Results display
   - Query parameter handling

6. **orders.js** - Orders page
   - Orders display
   - Status filtering
   - Order details
   - Reorder functionality
   - Orders management

7. **account.js** - Account page
   - Profile management
   - Address management
   - Preferences handling
   - Toggle switches
   - User data updates
   - Logout functionality

## HTML Page Structure

### index.html (Home Page)
```
- Header (logo, search, location, cart, account)
- Categories Navigation
- Main Content
  - Promotional Banner
  - Products Grid
- Cart Sidebar
- Cart Overlay
```

### pages/search.html (Search Page)
```
- Header (same as home)
- Main Content
  - Search Box
  - Category Filters
  - Sort Options
  - Results Info
  - Products Grid
- Cart Sidebar
- Cart Overlay
```

### pages/orders.html (Orders Page)
```
- Header (same as home)
- Main Content
  - Orders Header with Filters
  - Orders Container
    - Order Cards (multiple)
- Cart Sidebar
- Cart Overlay
```

### pages/account.html (Account Page)
```
- Header (same as home)
- Main Content
  - Account Container
    - Sidebar (menu, avatar, profile info)
    - Content Area
      - Profile Section
      - Addresses Section
      - Preferences Section
- Cart Sidebar
- Cart Overlay
```

## CSS Custom Properties (Variables)

```css
Primary Colors:
--primary-color: #12a94f (Green)
--secondary-color: #0c6c3f (Dark Green)
--accent-color: #ffd000 (Yellow)

Text Colors:
--text-dark: #1c1c1c
--text-light: #666
--text-lighter: #999

Background Colors:
--bg-light: #f7f7f7
--bg-lighter: #fafafa

Borders:
--border-color: #e8e8e8
--border-light: #f0f0f0

Status Colors:
--error-color: #d32f2f
--success-color: #4caf50
--warning-color: #ff9800

Shadows:
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15)

Effects:
--transition: all 0.3s ease
```

## Component Architecture

### Reusable Components
1. **Product Card**
   - Image placeholder
   - Name & description
   - Pricing section
   - Discount badge
   - Add button

2. **Cart Item**
   - Item image
   - Item details
   - Quantity controls
   - Remove button

3. **Header**
   - Logo
   - Search
   - Navigation actions
   - Category tabs

4. **Order Card**
   - Order ID & status
   - Items list
   - Total & actions
   - Timestamps

## Data Flow

### Product Data
```
products.js (data)
  ↓
home.js / search.js (render)
  ↓
HTML (display)
```

### Cart Management
```
Home/Search (add item)
  ↓
cart.js (update state)
  ↓
localStorage (persist)
  ↓
cart.js (retrieve)
  ↓
utils.js (display)
```

### User Data
```
account.js (edit)
  ↓
utils.js (saveUserData)
  ↓
localStorage (persist)
  ↓
account.js (retrieve & display)
```

### Orders
```
home/search (checkout)
  ↓
utils.js (addOrder)
  ↓
localStorage (persist)
  ↓
orders.js (display)
```

## Navigation Flow

```
index.html (Home)
    ├── Search → pages/search.html
    ├── Cart Icon → Cart Sidebar
    ├── Account Icon → pages/account.html
    └── Category → Filtered view

pages/search.html (Search)
    ├── Home Logo → index.html
    ├── Cart Icon → Cart Sidebar
    ├── Account Icon → pages/account.html
    ├── Search → Updated results
    └── Filters → Filtered view

pages/account.html (Account)
    ├── Home Logo → index.html
    ├── Cart Icon → Cart Sidebar
    ├── My Orders Link → pages/orders.html
    ├── Menu Items → Different sections
    └── Logout → index.html

pages/orders.html (Orders)
    ├── Home Logo → index.html
    ├── Cart Icon → Cart Sidebar
    ├── Account Icon → pages/account.html
    ├── Status Filters → Filtered orders
    └── Reorder → Cart + index.html
```

## localStorage Schema

### Cart (`grabz_cart`)
```json
[
  {
    "id": 1,
    "name": "Product Name",
    "price": 149,
    "quantity": 2,
    ...
  }
]
```

### User (`grabz_user`)
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "addresses": [...]
}
```

### Orders (`grabz_orders`)
```json
[
  {
    "id": "ORD1234567890",
    "items": [...],
    "total": 500,
    "status": "processing",
    "date": "2024-05-25T10:30:00Z",
    "estimatedDelivery": "2024-05-25T10:45:00Z"
  }
]
```

### Preferences (`grabz_preferences`)
```json
{
  "notifications": true,
  "newsletter": false,
  "savedCards": true
}
```

## Key Functions by Module

### products.js
- Product array export

### cart.js
- loadCart()
- saveCart()
- addToCart(productId)
- removeFromCart(productId)
- updateQuantity(productId, change)
- getCartTotal()
- getCartItemCount()
- clearCart()
- updateCartDisplay()

### utils.js
- toggleCart()
- navigateTo(page)
- formatCurrency(amount)
- calculateDiscount(original, sale)
- formatDate(date)
- debounce(func, wait)
- getUserData()
- saveUserData(userData)
- getOrders()
- saveOrders(orders)
- addOrder(items, total)
- setupGlobalListeners()

### home.js
- renderProducts(productsArray)
- filterProducts(category)

### search.js
- getQueryParameter(param)
- performSearch(query)
- filterByCategory(category)
- displaySearchResults(results, query, category)
- sortResults(sortBy)

### orders.js
- displayOrders(filter)
- filterOrders(status)
- viewOrderDetails(orderId)
- reorderItems(orderId)

### account.js
- initAccountPage()
- populateUserProfile(userData)
- setupAccountMenu()
- initProfileSection()
- initAddressesSection()
- editAddress(index)
- deleteAddress(index)
- initPreferencesSection()
- logout()

## Styling Methodology

- **Modular CSS**: Each feature has its own stylesheet
- **CSS Variables**: Consistent design system
- **Mobile-First**: Responsive design approach
- **BEM-like**: Consistent class naming
- **Component-Based**: Reusable component styles

## Build & Deployment

### Development
- Open index.html directly or use local server
- All changes reflected immediately
- No build process required

### Production
- Minify CSS files
- Minify JavaScript files
- Optimize images
- Enable gzip compression
- Add service worker for offline support
- Consider CDN for assets

## Performance Considerations

- Lightweight CSS (modular, no duplication)
- Vanilla JavaScript (no framework overhead)
- localStorage for client-side caching
- Emoji images (no file downloads)
- Minimal external dependencies (only Font Awesome)
- Debounced search input
- Lazy loading opportunities (future)

## Testing Considerations

### Unit Tests (JavaScript)
- Cart operations
- Utility functions
- Data calculations

### Integration Tests
- Page navigation
- Cart persistence
- Order creation
- User data management

### E2E Tests
- Complete shopping flow
- Account management
- Search functionality
- Order history

## Future Scalability

- Backend API integration
- Database for products/orders
- User authentication
- Payment gateway
- Real inventory system
- Admin dashboard
- Analytics
- Multiple languages
- Caching strategy
- CDN integration

---

**This structure ensures clean, maintainable, and scalable code for future development.**
