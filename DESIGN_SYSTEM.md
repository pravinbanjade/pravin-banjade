# Design System Documentation

## 🎨 Design Principles

### 1. Consistency
- Uniform spacing, typography, and visual elements
- Predictable user experience

### 2. Hierarchy
- Clear visual hierarchy through size, weight, and color
- Guide user attention to important elements

### 3. Rhythm
- Consistent spacing creates visual rhythm
- Proportional scaling across breakpoints

---

## 📏 Spacing System

### Base Unit: 4px (0.25rem)

```
spacing-1  = 4px   (0.25rem)
spacing-2  = 8px   (0.5rem)
spacing-3  = 12px  (0.75rem)
spacing-4  = 16px  (1rem)
spacing-5  = 20px  (1.25rem)
spacing-6  = 24px  (1.5rem)
spacing-8  = 32px  (2rem)
spacing-10 = 40px  (2.5rem)
spacing-12 = 48px  (3rem)
spacing-16 = 64px  (4rem)
spacing-20 = 80px  (5rem)
spacing-24 = 96px  (6rem)
```

### Section Padding
```
Mobile:  py-16 (4rem / 64px)
Tablet:  py-20 (5rem / 80px)  
Desktop: py-24 (6rem / 96px)
```

### Container Padding
```
Mobile:  px-4  (1rem / 16px)
Tablet:  px-6  (1.5rem / 24px)
Desktop: px-8  (2rem / 32px)
```

### Card Padding
```
Small:  p-4 md:p-5  (16-20px)
Medium: p-5 md:p-6  (20-24px)
Large:  p-6 md:p-8  (24-32px)
```

### Gap Spacing
```
Tight:  gap-3 md:gap-4  (12-16px)
Normal: gap-4 md:gap-6  (16-24px)
Loose:  gap-6 md:gap-8  (24-32px)
```

---

## 📝 Typography Scale

### Headings

```css
/* Page Title (Hero) */
h1: text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    font-bold leading-tight
    (36-40-48-56-72px)

/* Section Title */
h2: text-3xl md:text-4xl lg:text-5xl
    font-bold
    (30-36-48px)

/* Subsection Title */
h3: text-xl md:text-2xl lg:text-3xl
    font-semibold
    (20-24-30px)

/* Card Title */
h4: text-lg md:text-xl
    font-semibold or font-bold
    (18-20px)

/* Small Heading */
h5: text-base md:text-lg
    font-medium
    (16-18px)
```

### Body Text

```css
/* Large Body */
.text-large: text-lg md:text-xl
             (18-20px)

/* Normal Body */
.text-normal: text-base md:text-lg
              (16-18px)

/* Small Body */
.text-small: text-sm md:text-base
             (14-16px)

/* Caption */
.text-caption: text-xs md:text-sm
               (12-14px)
```

### Line Heights
```
Tight:   leading-tight (1.25)
Normal:  leading-normal (1.5)
Relaxed: leading-relaxed (1.625)
Loose:   leading-loose (2)
```

---

## 🎯 Component Specifications

### Section Structure
```tsx
<section className="section-padding bg-[variant]">
  <div className="container-custom">
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
        Title <span className="text-gradient">Highlight</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8" />
      <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
        Description
      </p>
    </div>
    
    {/* Section Content */}
    <div className="[content-layout]">
      {/* ... */}
    </div>
  </div>
</section>
```

### Card Structure
```tsx
<Card className="card-glass card-hover">
  <CardContent className="p-5 md:p-6">
    {/* Icon/Image (optional) */}
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10">
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
    </div>
    
    {/* Title */}
    <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
      Card Title
    </h4>
    
    {/* Description */}
    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
      Card description text
    </p>
  </CardContent>
</Card>
```

### Button Sizes
```css
Small:  px-4 py-2 text-sm
Medium: px-6 py-3 text-base (default)
Large:  px-8 py-4 text-lg
```

---

## 🎨 Color Usage

### Primary Actions
- Buttons, CTAs, important links
- `bg-primary`, `text-primary`, `border-primary`

### Secondary Elements
- Less important actions, backgrounds
- `bg-secondary`, `text-secondary`

### Muted/Subtle
- Descriptions, secondary text
- `text-muted-foreground`

### Backgrounds
```
Light overlay:  bg-primary/5 to bg-primary/10
Medium overlay: bg-primary/10 to bg-primary/20
Strong overlay: bg-primary/20 to bg-primary/30
```

---

## 🔄 Responsive Breakpoints

### Tailwind Breakpoints
```
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Small laptops
xl:  1280px - Desktops
2xl: 1536px - Large screens
```

### Grid Layouts
```
Mobile:  1 column
Tablet:  2 columns (sm: or md:)
Desktop: 3-4 columns (lg: or xl:)
```

### Common Patterns
```tsx
// Two-column layout
grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8

// Three-column layout
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6

// Four-column layout
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6
```

---

## 🎭 Animation Guidelines

### Timing Functions
```
Smooth:  cubic-bezier(0.4, 0, 0.2, 1)  - 0.3s
Spring:  cubic-bezier(0.175, 0.885, 0.32, 1.275) - 0.5s
Ease-out: ease-out - 0.6-0.8s
```

### Animation Delays
```
Staggered items:
- Item 1: 0s
- Item 2: 0.1s
- Item 3: 0.2s
- Increment by 0.1s or 0.08s
```

### Hover States
```
Scale:     hover:scale-105 (cards, buttons)
Translate: hover:-translate-y-1 (cards)
Shadow:    hover:shadow-lg (cards)
Color:     hover:text-primary (links)
```

---

## ✅ Checklist for Each Component

### Spacing
- [ ] Consistent section padding (py-16 md:py-20 lg:py-24)
- [ ] Consistent container padding (px-4 sm:px-6 lg:px-8)
- [ ] Consistent card padding (p-5 md:p-6 or p-6 md:p-8)
- [ ] Consistent gaps (gap-4 md:gap-6 or gap-6 md:gap-8)

### Typography
- [ ] Section title: text-3xl md:text-4xl lg:text-5xl
- [ ] Subsection title: text-xl md:text-2xl lg:text-3xl
- [ ] Card title: text-lg md:text-xl
- [ ] Body text: text-base md:text-lg or text-sm md:text-base
- [ ] Consistent line-height (leading-relaxed for body)

### Colors
- [ ] Uses primary color consistently
- [ ] Muted text for descriptions
- [ ] Consistent background overlays
- [ ] Proper light/dark mode support

### Responsiveness
- [ ] Mobile-first approach
- [ ] Proper breakpoint usage (sm:, md:, lg:, xl:)
- [ ] Grid columns scale properly
- [ ] Text sizes scale across breakpoints

### Animations
- [ ] Scroll animations applied
- [ ] Consistent hover effects
- [ ] Staggered delays where appropriate
- [ ] Smooth transitions (0.3s or 0.5s)

---

## 🎯 Quick Reference

### Section Header (Standard)
```tsx
<div className="text-center mb-12 md:mb-16 scroll-animate animate-fade-in">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
    Title <span className="text-gradient">Highlight</span>
  </h2>
  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6 md:mb-8"></div>
  <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
    Description text
  </p>
</div>
```

### Subsection Header
```tsx
<h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
  <Icon className="w-6 h-6 md:w-8 md:h-8 mr-2 md:mr-3 text-primary" />
  Subsection Title
</h3>
```

### Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {items.map((item, index) => (
    <Card 
      key={item.id}
      className="card-glass card-hover scroll-animate animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-5 md:p-6">
        {/* Content */}
      </CardContent>
    </Card>
  ))}
</div>
```

---

**Last Updated**: January 2026  
**Version**: 1.0
