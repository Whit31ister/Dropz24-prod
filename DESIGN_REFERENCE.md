# 🎨 GRABZ - New Monotone Theme Visual Guide

## Color Palette Reference

### Primary Colors
```
⬛ PRIMARY BLACK
#000000
Used for: Main buttons, primary text, borders

⬛ SECONDARY GRAY  
#1a1a1a
Used for: Hover states, secondary backgrounds

⬛ ACCENT GRAY
#333333
Used for: Badges, accents, emphasis
```

### Text Colors
```
⬛ TEXT DARK (#000000)
For: Main headings, primary content

⬛ TEXT MEDIUM (#333333)
For: Secondary content, body text

⬛ TEXT LIGHT (#666666)
For: Tertiary content, helper text

⬛ TEXT LIGHTER (#999999)
For: Disabled states, muted text
```

### Background & Borders
```
⬜ BACKGROUND LIGHT (#f9f9f9)
For: Page background, subtle sections

⬜ BACKGROUND MEDIUM (#f3f3f3)
For: Category nav, secondary bg

⬜ PURE WHITE (#ffffff)
For: Cards, main background

⬜ BORDER COLOR (#e0e0e0)
For: Card borders, dividers
```

---

## Component Styling

### Buttons

**Primary Button (Black)**
```
Background:  #000000 (Black)
Text:        #ffffff (White)
Hover:       #1a1a1a (Dark gray)
Active:      Darker shade
Border:      None
Radius:      8px
Padding:     12px 24px
Font Weight: Bold (700)
```

**Example:**
```
┌─────────────────┐
│    CHECKOUT     │  (Black bg, white text)
└─────────────────┘
  Hover → Slightly darker
```

### Form Inputs

**Text Input/Select**
```
Background:  #ffffff (White)
Border:      1px solid #e0e0e0
Text:        #000000 (Black)
Focus Border: #000000 (Black)
Focus Shadow: Subtle shadow
Radius:      8px
Padding:     12px
```

**Example:**
```
┌──────────────────────┐
│ [Enter email...]     │  (White bg, black text)
└──────────────────────┘
  Focus → Black border
```

### Cards

**Product Card**
```
Background:  #ffffff (White)
Border:      1px solid #e0e0e0
Hover Border: #000000 (Black)
Hover Shadow: 0 4px 12px rgba(0,0,0,0.12)
Radius:      12px
```

**Example:**
```
┌──────────────────┐
│   📓 (emoji)     │
│ Product Name     │
│ ₹149  ₹199  ⬛25%│
│ [⬛ Add]         │
└──────────────────┘
  Hover → Black border, shadow
```

### Badges

**Discount Badge**
```
Background:  #000000 (Black)
Text:        #ffffff (White)
Radius:      4px
Padding:     4px 8px
Font Size:   11px
Font Weight: Bold (700)
```

**Example:**
```
┌─────┐
│⬛25%│  (Black badge)
└─────┘
```

### Status Indicators

**Processing**
```
Background:  #e8f4f8 (Light blue)
Text:        #0c4a6e (Dark blue)
```

**Delivered**
```
Background:  #f0f9f0 (Light green)
Text:        #0a3622 (Dark green)
```

**Cancelled**
```
Background:  #fef2f2 (Light red)
Text:        #842029 (Dark red)
```

---

## Typography Reference

### Font Families
```
Display Font:  Segoe UI, Tahoma, Geneva, Verdana
Body Font:     -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
```

### Heading Styles

**H1 (32px)**
```
Font Size:     32px
Font Weight:   Bold (700)
Line Height:   1.2
Letter Spacing: -1px
Color:         #000000
Margin Bottom: 12px

Example: "My Profile"
```

**H2 (24px)**
```
Font Size:     24px
Font Weight:   Bold (700)
Line Height:   1.2
Letter Spacing: -0.5px
Color:         #000000
Margin Bottom: 12px

Example: "Popular Items"
```

**H3 (20px)**
```
Font Size:     20px
Font Weight:   Semibold (600)
Line Height:   1.2
Letter Spacing: 0
Color:         #000000
Margin Bottom: 12px

Example: "Product Name"
```

### Body Text

**Regular (16px)**
```
Font Size:     16px
Font Weight:   Regular (400)
Line Height:   1.5
Color:         #333333
```

**Small (14px)**
```
Font Size:     14px
Font Weight:   Regular (400)
Line Height:   1.5
Color:         #333333
```

**Tiny (12px)**
```
Font Size:     12px
Font Weight:   Regular (400)
Line Height:   1.5
Color:         #666666
```

---

## Spacing System

```
XS:   4px   (Minimal spacing)
SM:   8px   (Small gaps)
MD:   12px  (Standard padding)
LG:   16px  (Large padding)
XL:   24px  (Section spacing)
2XL:  32px  (Large sections)
```

**Usage:**
```
Padding:  var(--spacing-lg)    = 16px
Margin:   var(--spacing-xl)    = 24px
Gap:      var(--spacing-md)    = 12px
```

---

## Border Radius

```
SM:    4px    (Small radius)
MD:    8px    (Standard buttons)
LG:    12px   (Cards)
XL:    16px   (Large components)
2XL:   24px   (Extra large)
Full:  999px  (Pills, circles)
```

**Examples:**
```
Input fields:    8px
Buttons:         8px
Cards:           12px
Category pills:  24px (rounded)
Badges:          4px
```

---

## Shadows

### Subtle (SM)
```
0 2px 4px rgba(0, 0, 0, 0.08)
Used for: Hover effects, light emphasis
```

### Medium (MD)
```
0 4px 12px rgba(0, 0, 0, 0.12)
Used for: Cards on hover, modals
```

### Large (LG)
```
0 8px 24px rgba(0, 0, 0, 0.15)
Used for: Elevated components
```

### Extra Large (XL)
```
0 12px 32px rgba(0, 0, 0, 0.18)
Used for: Important overlays
```

---

## Responsive Typography

### Mobile (480px)
```
H1:  28px (down from 32px)
H2:  22px (down from 24px)
H3:  18px (down from 20px)
Body: 14px (down from 16px)
```

### Tablet (768px)
```
H1:  30px
H2:  23px
H3:  19px
Body: 15px
```

### Desktop (1024px+)
```
H1:  32px
H2:  24px
H3:  20px
Body: 16px (Full size)
```

---

## Interactive States

### Buttons

**Normal**
```
Background:  #000000
Text:        #ffffff
Cursor:      pointer
```

**Hover**
```
Background:  #1a1a1a (Slightly lighter)
Transform:   translateY(-2px)
Shadow:      0 4px 12px rgba(0,0,0,0.12)
```

**Active/Pressed**
```
Background:  #000000
Transform:   translateY(0)
Shadow:      None
```

### Links

**Normal**
```
Color:       #000000
Underline:   None
```

**Hover**
```
Color:       #666666 (Lighter gray)
Transition:  Smooth (0.3s)
```

### Form Inputs

**Normal**
```
Border:      1px solid #e0e0e0
Background:  #ffffff
```

**Focus**
```
Border:      1px solid #000000
Background:  #ffffff
Shadow:      0 2px 4px rgba(0,0,0,0.08)
```

---

## Mobile Optimization

### Touch Targets
```
Minimum Size: 44px × 44px
Button Height: 44-48px
Padding: Adequate spacing
Tap Delay: None (removes 300ms delay)
```

### Mobile Typography
```
Headings: Larger on mobile (18-28px)
Body Text: Readable (14px minimum)
Line Height: Generous (1.5+)
```

### Mobile Spacing
```
Margins:   12-16px (XS:4px, SM:8px)
Padding:   12-16px in inputs
Gaps:      8-12px between elements
```

---

## Color Contrast

### WCAG Compliance

**Black on White**
```
#000000 on #ffffff
Contrast: 21:1 (AAA - Best)
```

**Dark Gray on White**
```
#333333 on #ffffff
Contrast: 12.6:1 (AAA - Excellent)
```

**Medium Gray on White**
```
#666666 on #ffffff
Contrast: 7.5:1 (AA - Good)
```

---

## CSS Variables Quick Reference

```css
/* Colors */
--primary-color: #000000;
--secondary-color: #1a1a1a;
--accent-color: #333333;
--text-dark: #000000;
--text-medium: #333333;
--text-light: #666666;
--bg-light: #ffffff;

/* Typography */
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-xl: 20px;
--font-size-2xl: 24px;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--line-height-normal: 1.5;

/* Spacing */
--spacing-md: 12px;
--spacing-lg: 16px;
--spacing-xl: 24px;

/* Radius */
--radius-md: 8px;
--radius-lg: 12px;

/* Shadows */
--shadow-sm: 0 2px 4px rgba(0,0,0,0.08);
--shadow-md: 0 4px 12px rgba(0,0,0,0.12);

/* Transitions */
--transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
```

---

## Usage Examples

### Button
```html
<button class="btn-save">Save Changes</button>
```
```css
.btn-save {
    background-color: var(--primary-color);
    color: var(--bg-light);
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-md);
    font-weight: var(--font-weight-bold);
}
```

### Card
```css
.card {
    background: var(--bg-light);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
}
.card:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
}
```

### Heading
```css
h2 {
    font-size: var(--font-size-2xl);
    font-weight: var(--font-weight-bold);
    color: var(--text-dark);
    line-height: var(--line-height-tight);
}
```

---

**Reference Guide Complete! 🎨**

Use this guide to understand and customize the GRABZ design system.
