# GRABZ - Quick Setup & Usage Guide

## 🚀 Getting Started

### Quick Start (2 minutes)

1. **Option A: Direct Browser**
   - Open `index.html` in your browser
   - No installation needed!

2. **Option B: Local Server (Recommended)**
   
   **Python 3:**
   ```bash
   cd /path/to/Dropz24-prod
   python -m http.server 8000
   # Visit: http://localhost:8000
   ```

   **Node.js:**
   ```bash
   cd /path/to/Dropz24-prod
   npx http-server
   # Visit: http://localhost:8080
   ```

## 📱 Pages Overview

### Home Page (`/index.html`)
- Main landing page
- Browse products by category
- Quick add to cart
- **Features:**
  - Product grid (160px cards)
  - Category filters
  - Cart sidebar
  - Responsive design

### Search Page (`/pages/search.html`)
- Advanced product search
- Filter by category
- Sort by price/discount
- **Access via:**
  - Type in header search → Press Enter
  - Navigate: `/pages/search.html?q=search+term`

### Orders Page (`/pages/orders.html`)
- View order history
- Filter by status (all, processing, delivered, cancelled)
- Reorder items
- View order details
- **Access via:**
  - Account page → My Orders link
  - Direct: `/pages/orders.html`

### Account Page (`/pages/account.html`)
- Edit profile information
- Manage delivery addresses
- Set preferences & notifications
- View user information
- **Access via:**
  - Click user icon in header
  - Direct: `/pages/account.html`

## 🛍️ How to Use

### 1. Browse & Shop
```
1. Open index.html
2. Scroll through products OR
3. Click category buttons to filter
4. Click "Add" on any product
```

### 2. Manage Cart
```
1. Click cart icon (top-right)
2. View items in sidebar
3. Adjust quantity with ± buttons
4. Remove items with trash icon
5. Click "Checkout" to place order
```

### 3. Search Products
```
1. Type in search bar at top
2. Press Enter
3. Browse filtered results
4. Use category filters
5. Sort by price/discount
```

### 4. View Orders
```
1. Go to Account page
2. Click "My Orders" in menu
3. View all orders
4. Filter by status
5. Reorder or view details
```

### 5. Manage Account
```
1. Click user icon in header
2. Edit profile (name, email, phone)
3. Manage addresses
4. Adjust preferences
5. Enable/disable notifications
```

## 💾 Data Persistence

All data is automatically saved to your browser:
- **Cart items** persist even after closing browser
- **User profile** saved locally
- **Orders** stored in history
- **Preferences** remembered

### Clear Data (Advanced)
Open browser console and run:
```javascript
// Clear cart
localStorage.removeItem('grabz_cart');

// Clear all GRABZ data
localStorage.removeItem('grabz_cart');
localStorage.removeItem('grabz_user');
localStorage.removeItem('grabz_orders');
localStorage.removeItem('grabz_preferences');

// Full reset
localStorage.clear();
```

## 🎨 Product Categories

### Stationery (6 items)
- Notebook Set - ₹149
- Ballpoint Pens - ₹79
- Highlighters - ₹99
- Pencil Box - ₹189
- A4 Paper Ream - ₹299
- Calculator - ₹249

### Snacks (6 items)
- Potato Chips - ₹39
- Chocolate Bar - ₹29
- Mixed Nuts - ₹149
- Granola Bar - ₹45
- Energy Drink - ₹99
- Dried Fruits - ₹199

### Beverages (6 items)
- Cold Coffee - ₹69
- Green Tea - ₹39
- Orange Juice - ₹79
- Protein Shake - ₹149
- Coconut Water - ₹59
- Lemonade - ₹49

### Essentials (6 items)
- Hand Sanitizer - ₹39
- Tissues - ₹29
- Phone Charger - ₹299
- USB Cable - ₹99
- Earbuds - ₹399
- Notebook Diary - ₹179

## 🔑 Key Features

✅ **Shopping Cart**
- Add/remove items
- Adjust quantities
- Real-time total calculation
- Persistent cart

✅ **Search & Filter**
- Real-time search
- Category filtering
- Sort options
- Advanced filters

✅ **Order Management**
- Order history
- Status tracking
- Reorder items
- Order details

✅ **User Account**
- Profile management
- Address management
- Preferences
- Notification settings

✅ **Responsive Design**
- Mobile-friendly
- Tablet optimized
- Desktop perfect
- Touch-friendly

## 🎯 Testing Scenarios

### Scenario 1: Complete Purchase
```
1. Go to home page
2. Click "Add" on 3-4 products
3. Click cart icon
4. Adjust quantities
5. Click "Checkout"
6. Confirm order
7. Check "My Orders"
```

### Scenario 2: Search & Filter
```
1. Go to search page
2. Type "Stationery"
3. Filter by category
4. Sort by price
5. Add items to cart
```

### Scenario 3: Account Management
```
1. Go to account page
2. Update profile info
3. Add/manage addresses
4. Toggle preferences
5. Save changes
```

## 🐛 Troubleshooting

### Cart Not Showing Items?
- Browser cache issue
- Solution: Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Search Not Working?
- Check query parameter format
- Try: `search.html?q=notebooks`

### Orders Not Saving?
- localStorage might be disabled
- Check browser privacy settings
- Enable localStorage in settings

### Pages Not Loading?
- Verify file paths in relative links
- Check browser console for errors
- Ensure all files are in correct folders

### Styles Not Appearing?
- CSS file paths might be wrong
- Clear browser cache
- Check network tab in DevTools

## 📊 Sample Test Data

### Default User
```
Name: John Doe
Email: john@example.com
Phone: +91 9876543210
```

### Sample Order
```
Order ID: ORD1234567890
Items: 3-5 products
Total: ₹500-1000
Status: Processing
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Enter (in search) | Perform search |
| Esc | Close cart sidebar |
| Tab | Navigate between fields |
| Ctrl+Shift+R | Hard refresh |

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Chromium | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ❌ Not supported |

## 📂 File Structure Quick Reference

```
index.html                    → Home page
pages/
  ├── search.html            → Search page
  ├── orders.html            → Orders page
  └── account.html           → Account page
assets/
  ├── css/
  │   ├── styles.css         → Master CSS
  │   ├── variables.css      → Design tokens
  │   ├── header.css         → Header styles
  │   ├── products.css       → Product styles
  │   ├── cart.css           → Cart styles
  │   ├── search.css         → Search styles
  │   ├── orders.css         → Orders styles
  │   └── account.css        → Account styles
  └── js/
      ├── products.js        → Product data
      ├── cart.js            → Cart logic
      ├── utils.js           → Utilities
      ├── home.js            → Home logic
      ├── search.js          → Search logic
      ├── orders.js          → Orders logic
      └── account.js         → Account logic
```

## 🔄 Development Workflow

1. **Edit HTML**
   - Modify page structure
   - Add new elements
   - Update content

2. **Update Styles**
   - Edit relevant CSS file
   - Add to variables.css for constants
   - Test responsive design

3. **Add Logic**
   - Update JavaScript module
   - Keep functions modular
   - Use utils.js for shared code

4. **Test**
   - Open in browser
   - Test on mobile/tablet
   - Check console for errors
   - Verify data persistence

## 💡 Pro Tips

1. **Faster Development**
   - Use local server instead of file://
   - Keep DevTools open
   - Use mobile view in DevTools

2. **Better Testing**
   - Add multiple items to cart
   - Test with different browsers
   - Clear data between tests
   - Check localStorage in DevTools

3. **Better Performance**
   - Minimize CSS on production
   - Combine JS files if needed
   - Use image optimization
   - Enable gzip compression

## 🚀 Next Steps

After getting familiar with the prototype:

1. Add backend API integration
2. Implement real payment gateway
3. Add user authentication
4. Connect to real database
5. Deploy to production
6. Add analytics
7. Implement push notifications
8. Build admin dashboard

## 📞 Support

For issues or questions:
1. Check browser console (F12)
2. Verify file paths
3. Check localStorage data
4. Review PROJECT_STRUCTURE.md
5. Check README.md

## ✨ Features Checklist

- [x] Home page with product grid
- [x] Search & filter functionality
- [x] Shopping cart with persistence
- [x] Order management
- [x] User account page
- [x] Multiple pages with routing
- [x] Responsive design
- [x] localStorage data persistence
- [x] Modular CSS & JS
- [x] Product categories

---

**Enjoy using GRABZ! 🎉**
