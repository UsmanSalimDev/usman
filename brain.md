# Portfolio Project - Architecture Documentation

## 📋 Project Overview

This is a modern, animated portfolio website built with React, Tailwind CSS, Framer Motion, GSAP, and Lenis for smooth scrolling. The project is structured with reusable components and a centralized theme system for maintainability.

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Reusable button components
│   ├── Navbar.jsx          # Navigation bar with logo and menu
│   ├── Hero.jsx            # Hero section with main content
│   ├── SkillsSection.jsx   # Skills showcase with progress bars
│   ├── ExperienceSection.jsx # Timeline of work experience
│   └── ConnectSection.jsx  # Contact and social media links
├── config/
│   ├── theme.js            # Centralized theme configuration
│   └── animations.js       # Framer Motion animation variants
├── App.jsx                 # Main app with Lenis integration
├── main.jsx                # React entry point
├── index.css               # Global styles with Tailwind
└── App.css                 # Additional app-specific styles
```

---

## 🎨 Components Overview

### 1. **Button.jsx**
Reusable button component with multiple variants and sizes.

**Variants:**
- `primary`: Red background with hover effect
- `secondary`: Transparent with white border
- `outline`: Gray border with hover animation

**Sizes:**
- `sm`: Small (px-4 py-2)
- `md`: Medium (px-6 py-3)
- `lg`: Large (px-8 py-4)

**Features:**
- Framer Motion hover and tap animations
- Customizable className support
- IconButton variant for icon-only buttons

**Usage:**
```jsx
<Button variant="primary" size="lg">Hire me</Button>
<IconButton icon={Mail} onClick={handleClick} />
```

---

### 2. **Navbar.jsx**
Fixed navigation bar at the top of the page.

**Features:**
- Logo and brand name
- Navigation links (Home, Skills, Experience, Connect)
- Download Resume button
- Smooth entrance animation
- Responsive design (hidden on mobile)
- Backdrop blur effect with semi-transparent background

**Animation Details:**
- Initial fade-in from top
- Staggered animation for nav items
- Smooth scroll links to sections

---

### 3. **Hero.jsx**
Main hero section with introduction and testimonial card.

**Sections:**
- **Left Content**
  - Introduction text ("Hey, I am Noah")
  - Heading ("Web developer")
  - Description
  - Hire me button with mail icon
  
- **Right Content**
  - Testimonial card with quote
  - Author information with avatar
  - Floating animation effect

**Features:**
- Gradient background
- Animated rotating element (⚡)
- Staggered content animations
- Card with hover lift effect
- Dark glass-morphism style

---

### 4. **SkillsSection.jsx**
Showcase of technical skills with proficiency levels.

**Features:**
- 6 skill cards in a grid (3 columns on desktop)
- Progress bars for each skill
- Hover scale effect
- Animated progress bar fill on scroll into view
- Skill icons and proficiency percentages
- Gradient backgrounds

**Skills Included:**
- React
- JavaScript
- Tailwind CSS
- GSAP
- Framer Motion
- Node.js

---

### 5. **ExperienceSection.jsx**
Timeline of work experience and professional history.

**Features:**
- Timeline layout with vertical line
- Timeline indicators (circles)
- Company, role, period information
- Gradient accent bars
- Hover slide animation
- WhileInView animation for performance

**Experience Format:**
- Company name
- Job title
- Period (dates)
- Job description
- Colored accent gradient

---

### 6. **ConnectSection.jsx**
Contact section with CTA and social media links.

**Features:**
- Main heading and description
- "Get In Touch" CTA button
- Social media icon links (Email, GitHub, LinkedIn, Twitter)
- Footer copyright text
- Smooth animations on scroll into view
- Hover and tap animations for social icons

**Social Links:**
- Each with custom hover colors
- Rotate animation on hover
- Scale animation on tap

---

## 🎭 Animation System

### Framer Motion Animations

**Global Animation Variants** (from `animations.js`):

```javascript
fadeInUp       // Fade in with upward movement
fadeInLeft     // Fade in from left
fadeInRight    // Fade in from right
slideInDown    // Slide down from top
scaleIn        // Scale up entrance
staggerContainer // Container for staggered children
buttonHover    // Button hover/tap animations
cardHover      // Card hover effects
floatingAnimation // Floating motion effect
rotatingAnimation // 360-degree rotation
```

**Usage Pattern:**
```jsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

---

### Lenis Smooth Scrolling

**Configuration:**
- Duration: 1.2 seconds per scroll animation
- Custom easing function for natural motion
- Direction: vertical
- Smooth touch gestures enabled

**Implementation:**
- Initialized in `App.jsx` useEffect
- RAF (requestAnimationFrame) loop for smooth 60fps scrolling
- Automatically destroyed on component unmount

---

## 🎨 Theme System

**Centralized Configuration** (`config/theme.js`):

```javascript
theme = {
  colors: { /* Brand colors */ }
  gradients: { /* Reusable gradients */ }
  spacing: { /* Consistent spacing values */ }
  borderRadius: { /* Border radius tokens */ }
  shadows: { /* Shadow styles */ }
  transitions: { /* Transition durations */ }
}
```

**Usage:**
```javascript
import { theme } from './config/theme'
// Use theme.colors.primary, theme.gradients.card, etc.
```

---

## 🛠️ Technology Stack

### Core
- **React 19.2.8**: UI library
- **Vite 8.2.2**: Build tool and dev server

### Styling
- **Tailwind CSS 3.4.19**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefixes

### Animations
- **Framer Motion**: React animation library
- **GSAP 3.x**: Advanced animations (installed but can be used for complex sequences)
- **Lenis**: Smooth scroll library

### Development
- **ESLint**: Code quality
- **React Plugin**: React-specific linting

---

## 📱 Responsive Design

**Breakpoints Used:**
- `md`: 768px (Tailwind medium breakpoint)
- Hidden elements on mobile: Navbar nav items, Resume button
- Grid adjustments: Skills section (3 cols desktop, 1 col mobile)

---

## 🎯 Key Features

1. **Reusable Components**: Button, IconButton, all sections
2. **Consistent Styling**: Theme configuration ensures brand consistency
3. **Smooth Animations**: Framer Motion + Lenis for professional feel
4. **Performance**: WhileInView animations trigger only when in viewport
5. **Dark Mode**: Complete dark theme implementation
6. **Glass Morphism**: Modern frosted glass effect on cards
7. **Interactive Elements**: Hover effects, scale animations, smooth transitions

---

## 🚀 Installation & Usage

### Install Dependencies
```bash
npm install
npm install framer-motion gsap lenis
```

### Development
```bash
npm run dev
# Open http://localhost:5173
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📝 Customization Guide

### Change Brand Colors
Edit `src/config/theme.js`:
```javascript
colors: {
  primary: '#your-color',
  secondary: '#your-color',
  // ... other colors
}
```

### Add New Skills
In `src/components/SkillsSection.jsx`, add to the `skills` array:
```javascript
{ name: 'Vue', icon: '💚', level: 80 }
```

### Add New Experience
In `src/components/ExperienceSection.jsx`, add to the `experiences` array:
```javascript
{
  company: 'Your Company',
  role: 'Your Role',
  period: '2023 - 2024',
  description: 'Your description',
  color: 'from-purple-500 to-pink-500',
}
```

### Modify Navigation Links
Edit `Navbar.jsx`:
```javascript
const navItems = ['Home', 'About', 'Projects', 'Contact']
```

---

## 🎬 Animation Tips

**For Complex Animations:**
Use GSAP in combination with Framer Motion:
```javascript
import gsap from 'gsap'

// Advanced timeline sequences
useEffect(() => {
  gsap.timeline()
    .to('.element', { duration: 1, x: 100 })
    .to('.element', { duration: 1, y: 50 }, '-=0.5')
}, [])
```

**For Scroll-Based Animations:**
Use Framer Motion's `whileInView`:
```jsx
<motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
  Content
</motion.div>
```

---

## 🔧 Best Practices

1. **Component Reusability**: Create small, focused components
2. **Theme Configuration**: Always use theme.js for colors
3. **Animation Performance**: Use `willChange` CSS for GPU acceleration
4. **Responsive**: Test on mobile, tablet, and desktop
5. **Accessibility**: Maintain semantic HTML, alt text for images
6. **Performance**: Use React.memo for expensive components

---

## 📊 Lighthouse Optimization Tips

- Code split with React.lazy() for heavy components
- Image optimization for hero images
- Minimize animation on low-power devices
- Use CSS transforms instead of position changes

---

## 🤝 Contributing

To add new features:
1. Create new component in `src/components/`
2. Define animation variants in `src/config/animations.js`
3. Add theme variables if needed
4. Import and integrate in `App.jsx`

---

## 📄 License

This portfolio template is free to use and modify.

---

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://gsap.com/docs/)
- [Lenis Docs](https://lenis.studiofreight.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

---

**Last Updated**: 2024
**Version**: 1.0.0
