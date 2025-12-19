# Customization Guide

This guide will help you customize the Code Meld Labs website to match your agency's branding and content.

## 📝 Content Editing

All content is centralized in **`lib/data.ts`**. This makes it easy to update without touching component code.

### Site Configuration

```typescript
export const SITE_CONFIG = {
  name: 'Your Agency Name',
  tagline: 'Your Tagline',
  description: 'Your description',
  email: 'your@email.com',
  upworkUrl: 'your-upwork-url',
  githubUrl: 'your-github-url',
}
```

### Upwork Stats

```typescript
export const UPWORK_STATS = {
  rating: '5.0',
  successRate: '100%',
  reviews: '10+',
  jobsCompleted: '25+',
  totalEarnings: '$50K+',
  hours: '500+',
}
```

### Team Members

Add or modify team members:

```typescript
export const TEAM_MEMBERS = [
  {
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio...',
    avatar: 'url-to-avatar',
    skills: ['Skill1', 'Skill2', ...],
    github: 'github-url',
    upwork: 'upwork-url',
  },
  // Add more team members
]
```

**Avatar Options**:
- Use UI Avatars: `https://ui-avatars.com/api/?name=Your+Name&size=400&background=6366f1&color=fff&bold=true`
- Upload your own images to `/public/team/` and reference them
- Use services like Gravatar, Cloudinary, etc.

### Projects

```typescript
export const PROJECTS = [
  {
    id: 'unique-id',
    title: 'Project Title',
    category: 'SaaS', // or 'Web App', 'AI', 'E-commerce', 'Mobile'
    tags: ['Next.js', 'React', ...],
    description: 'Short description',
    image: 'url-to-image',
    liveUrl: 'live-site-url',
    githubUrl: 'github-repo-url', // or null
    caseStudy: {
      challenge: 'The challenge...',
      solution: 'Our solution...',
      results: 'The results...',
      testimonial: 'Client quote...',
      client: 'Client Name, Title',
    },
  },
  // Add more projects
]
```

**Project Images**:
- Recommended size: 800x600px or larger
- Use Unsplash, your own screenshots, or mockups
- Optimize for web (WebP format preferred)

### Services

```typescript
export const SERVICES = [
  {
    id: 'unique-id',
    title: 'Service Title',
    description: 'Service description',
    icon: '🚀', // Emoji or use Lucide icon in component
    features: [
      'Feature 1',
      'Feature 2',
      // ...
    ],
    pricing: 'Starting at $X',
  },
  // Add more services
]
```

### Testimonials

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Client Name',
    role: 'Client Title',
    avatar: 'avatar-url',
    content: 'Testimonial text...',
    rating: 5,
    project: 'Project Name',
  },
  // Add more testimonials
]
```

## 🎨 Design Customization

### Colors

Edit **`tailwind.config.js`**:

```javascript
colors: {
  primary: {
    DEFAULT: '#6366f1', // Change to your brand color
    // Adjust shades as needed
  },
  accent: {
    DEFAULT: '#ec4899', // Change accent color
  },
}
```

Generate color shades: [https://uicolors.app](https://uicolors.app)

### Fonts

#### Change Heading Font (Currently Geist)

In **`app/layout.tsx`**:

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
  display: 'swap',
})

// Update className
<html className={`${yourFont.variable} ${manrope.variable}`}>
```

Update **`tailwind.config.js`**:

```javascript
fontFamily: {
  geist: ['var(--font-your-font)', 'system-ui', 'sans-serif'],
}
```

#### Change Body Font (Currently Manrope)

Same process but for the body font variable.

Browse fonts: [Google Fonts](https://fonts.google.com)

### Layout & Spacing

Edit **`app/globals.css`**:

```css
.section {
  @apply py-16 md:py-24 lg:py-32; /* Adjust section padding */
}

.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8; /* Adjust max width */
}
```

### Animations

Modify animation durations in **`tailwind.config.js`**:

```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out forwards',
  // Adjust duration (0.6s) as needed
}
```

Or disable animations for faster feel:
- Remove `motion` imports in components
- Replace with regular divs

## 🖼️ Images & Assets

### Logo

Currently using a "CM" text logo. To add a real logo:

1. Add logo file to `/public/logo.png`
2. Update **`components/Navbar.tsx`**:

```tsx
<Image
  src="/logo.png"
  alt="Code Meld Labs"
  width={40}
  height={40}
/>
```

### Favicon

1. Generate favicons: [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Add to `/public`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`

### Open Graph Image

Create a 1200x630px image for social sharing and save as `/public/og-image.png`.

Use tools like:
- [Canva](https://www.canva.com)
- [Figma](https://www.figma.com)
- [OG Image Generator](https://og-image.vercel.app/)

## 🔧 Component Customization

### Hero Section

Edit **`components/Hero.tsx`**:

```tsx
// Change gradient colors
className="bg-gradient-to-br from-primary-500 via-purple-500 to-primary-600"

// Adjust hero height
className="min-h-screen" // or "h-[600px]", "h-[80vh]", etc.
```

### Navbar

Edit **`components/Navbar.tsx`**:

```tsx
// Change navbar height
className="h-16 md:h-20" // Adjust as needed

// Make navbar always solid (not transparent)
const scrolled = true // Remove state management
```

### Footer

Edit **`components/Footer.tsx`**:

- Add/remove footer sections
- Change layout (3 columns, 4 columns, etc.)
- Modify links and content

## 🌐 SEO Customization

### Page Metadata

Edit **`app/layout.tsx`**:

```typescript
export const metadata: Metadata = {
  title: 'Your Title',
  description: 'Your description',
  // Update other fields
}
```

### Structured Data

Add more schema types for better SEO:

```tsx
// In app/layout.tsx <head>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      // Add relevant fields
    }),
  }}
/>
```

## 📱 Mobile Customization

### Responsive Breakpoints

Tailwind breakpoints (edit in `tailwind.config.js` if needed):

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Mobile Menu

Edit **`components/Navbar.tsx`** to customize the mobile menu appearance.

## ⚡ Performance Optimization

### Reduce Animation for Faster Feel

If you prefer less animation:

1. In **`app/providers.tsx`**, adjust Lenis:

```typescript
const lenis = new Lenis({
  duration: 0.8, // Reduce from 1.2 for faster scrolling
})
```

2. In components, reduce Framer Motion delays:

```tsx
transition={{ duration: 0.4, delay: 0 }} // Reduce delay
```

### Lazy Load Images

Images already use Next.js Image with lazy loading. To change:

```tsx
<Image
  loading="eager" // For above-the-fold images
  priority // For critical images
/>
```

## 🎭 Dark Mode

### Default Theme

Change in **`app/providers.tsx`**:

```tsx
<ThemeProvider defaultTheme="dark"> // or "light"
```

### Disable Dark Mode

Remove theme toggle from Navbar and set fixed theme:

```tsx
// In app/layout.tsx, add class directly
<html className="light"> // or "dark"

// Remove ThemeProvider
```

## 📊 Analytics Integration

### Add Google Analytics

1. Get GA4 tracking ID from Google Analytics
2. Add to **`app/layout.tsx`** in `<head>`:

```tsx
import Script from 'next/script'

<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Add Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
// In app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

// Add before closing </body>
<Analytics />
```

## 🎯 Call-to-Action Customization

### Change CTA Text/Links

Search for `btn-primary` and `btn-secondary` throughout components and update:

```tsx
<a href="#contact" className="btn-primary">
  Your CTA Text
</a>
```

### Add Calendly Link

Already configured in `lib/data.ts`:

```typescript
export const CONTACT_INFO = {
  calendly: 'https://calendly.com/your-link',
}
```

## 🔐 Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Never commit `.env.local` to git (already in `.gitignore`).

## 📞 Contact Form

### Change Email Destination

In **`lib/data.ts`**:

```typescript
export const CONTACT_INFO = {
  email: 'your@email.com',
}
```

### Setup EmailJS

See DEPLOYMENT.md for detailed EmailJS setup instructions.

### Use Different Email Service

Replace EmailJS with:
- **Resend**: [resend.com](https://resend.com)
- **SendGrid**: [sendgrid.com](https://sendgrid.com)
- **Nodemailer**: Self-hosted email

Update the form submission logic in **`components/Contact.tsx`**.

## 🚀 Quick Tips

1. **Start Simple**: Get the basic content updated first
2. **Test Locally**: Always test changes with `npm run dev`
3. **Mobile First**: Check mobile view frequently
4. **Performance**: Run Lighthouse audits after major changes
5. **Version Control**: Commit changes frequently with clear messages
6. **Backup**: Keep backups of working versions

## 🆘 Need Help?

- Check [README.md](README.md) for setup instructions
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- Email: manjushapaul39@gmail.com

Happy customizing! 🎨

