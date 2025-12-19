# Code Meld Labs - Production-Ready Next.js 15 Portfolio

A modern, high-performance portfolio website for Code Meld Labs - a 3-freelancer agency specializing in Next.js, PHP, and AI development.

## 🚀 Features

- **Next.js 15** with App Router and Server Components
- **TypeScript** for type safety
- **Tailwind CSS v3** for styling
- **Framer Motion** for smooth animations
- **Dark Mode** with system preference detection
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** with metadata and structured data
- **Performance Optimized** - Fast loading with Next Image
- **Accessibility** - ARIA labels and semantic HTML
- **PWA Ready** with manifest.json

## 📦 Tech Stack

- Next.js 15.0.3
- React 18.3.1
- TypeScript 5.6.2
- Tailwind CSS 3.4.13
- Framer Motion 11.5.4
- EmailJS (for contact form)
- Lucide React (icons)

## 🎨 Design Philosophy

Inspired by [dejan.works](https://www.dejan.works/), featuring:
- Clean, minimalist interface
- Subtle animations and hover effects
- Glassmorphism card designs
- Gradient backgrounds
- Smooth scrolling experience

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/code-meld-labs.git
cd code-meld-labs
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (optional for EmailJS)
```bash
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
code-meld-labs/
├── app/
│   ├── layout.tsx         # Root layout with fonts and providers
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section with Upwork stats
│   ├── About.tsx          # Team member cards
│   ├── Projects.tsx       # Project showcase with filters
│   ├── Services.tsx       # Services catalog
│   ├── Testimonials.tsx   # Testimonials carousel
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── BackToTop.tsx      # Scroll to top button
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/
│   └── constants.ts       # Editable content (team, projects, etc.)
├── public/
│   ├── fonts/            # Geist font files (add woff2 files here)
│   └── manifest.json     # PWA manifest
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎯 Customization

### Update Content

Edit `/lib/constants.ts` to customize:
- Site name and tagline
- Team members
- Projects
- Services
- Testimonials
- Social media links
- Contact email

### Update Styles

Edit `tailwind.config.js` for:
- Color scheme (primary, accent colors)
- Font families
- Custom animations

### Update Fonts

1. Download Geist font files (.woff2) from [Vercel's Geist font](https://vercel.com/font)
2. Place them in `/public/fonts/`
3. Update paths in `app/layout.tsx`

Or use Google Fonts alternative (already configured with Inter as fallback)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy
   - Add environment variables if using EmailJS

3. **Custom Domain** (optional)
   - Add your custom domain in Vercel dashboard
   - Update `NEXT_PUBLIC_SITE_URL` in environment variables

### Deploy to Other Platforms

The app can also be deployed to:
- Netlify
- Railway
- AWS Amplify
- Any platform supporting Next.js

## 📧 Contact Form Setup

To enable the contact form with EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your credentials
5. Update `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Update `/components/Contact.tsx` to use EmailJS instead of mailto

## 🔍 SEO

The site includes:
- Dynamic metadata in `app/layout.tsx`
- Open Graph tags for social sharing
- Structured data (add JSON-LD in layout)
- Sitemap generation (add `app/sitemap.ts`)
- Robots.txt (add `app/robots.ts`)

## ⚡ Performance

Optimizations included:
- Next.js Image component for optimized images
- Font optimization with `next/font`
- Code splitting and lazy loading
- Static generation where possible
- Minimal dependencies

## 🧪 Development

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 📄 License

MIT License - feel free to use this template for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Code Meld Labs - manjushapaul39@gmail.com

Project Link: [https://github.com/yourusername/code-meld-labs](https://github.com/yourusername/code-meld-labs)

---

Built with ❤️ by Code Meld Labs
