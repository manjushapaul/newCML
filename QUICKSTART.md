# Quick Start Guide

Get your Code Meld Labs website up and running in 5 minutes!

## 1️⃣ Install Dependencies

```bash
npm install
```

This installs all required packages (Next.js, Tailwind, Framer Motion, etc.)

## 2️⃣ Update Your Content

Open **`lib/data.ts`** and update:

### Essential Updates

```typescript
// 1. Site name and email
export const SITE_CONFIG = {
  name: 'Your Agency Name',           // ✏️ Change this
  email: 'your@email.com',             // ✏️ Change this
  // ... rest stays the same initially
}

// 2. Your Upwork stats (or remove if not using Upwork)
export const UPWORK_STATS = {
  rating: '5.0',                       // ✏️ Update yours
  successRate: '100%',                 // ✏️ Update yours
  reviews: '10+',                      // ✏️ Update yours
  // ...
}

// 3. Team members
export const TEAM_MEMBERS = [
  {
    name: 'Your Name',                 // ✏️ Change this
    role: 'Your Role',                 // ✏️ Change this
    bio: 'Your bio...',                // ✏️ Change this
    skills: ['Your', 'Skills'],        // ✏️ Change this
    // ...
  },
]
```

## 3️⃣ Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site! 🎉

## 4️⃣ Add Your Projects

In **`lib/data.ts`**, update the `PROJECTS` array:

```typescript
export const PROJECTS = [
  {
    id: 'your-project',
    title: 'Your Project Name',
    category: 'SaaS', // or Web App, AI, etc.
    tags: ['Next.js', 'React'],
    description: 'What you built...',
    image: 'https://images.unsplash.com/photo-...',
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/you/project',
    caseStudy: {
      challenge: 'The problem...',
      solution: 'How you solved it...',
      results: 'The outcomes...',
      testimonial: 'What client said...',
      client: 'Client Name, Title',
    },
  },
  // Add more projects
]
```

**Image Tips**:
- Use [Unsplash](https://unsplash.com/) for free stock photos
- Or add your screenshots to `/public/projects/` folder
- Recommended size: 800x600px

## 5️⃣ Deploy to Vercel

### Method 1: GitHub (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your site is live! 🚀

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts.

## 🎨 Customization (Optional)

### Change Colors

Edit **`tailwind.config.js`**:

```javascript
colors: {
  primary: {
    DEFAULT: '#6366f1', // 👈 Your brand color
  },
}
```

### Add Your Logo

1. Add logo to `/public/logo.png`
2. Update `components/Navbar.tsx`

### Setup Contact Form (EmailJS)

See [DEPLOYMENT.md](DEPLOYMENT.md) for EmailJS setup.

## 📝 Content Checklist

Before deploying, update these in **`lib/data.ts`**:

- [ ] Site name
- [ ] Email address
- [ ] Tagline and description
- [ ] Team members (name, bio, skills, links)
- [ ] At least 3-6 projects
- [ ] Services you offer
- [ ] Client testimonials
- [ ] Social media links
- [ ] Contact information

## 🎯 Next Steps

1. **Images**: Add favicons and OG image to `/public`
2. **Content**: Add more projects and testimonials
3. **Branding**: Customize colors and fonts
4. **SEO**: Update metadata in `app/layout.tsx`
5. **Analytics**: Add Google Analytics or Vercel Analytics

## 📚 More Help

- **Full Customization**: See [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment Details**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Project Overview**: See [README.md](README.md)

## 🐛 Common Issues

### "Module not found" error
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not loading
- Check image URLs are accessible
- Add domains to `next.config.js` if using external images

### Dark mode not working
```bash
npm install next-themes
```

### Build errors
```bash
npm run build
# Check the error messages and fix accordingly
```

## 💡 Pro Tips

1. **Start with dummy content** - Get it deployed first, refine later
2. **Mobile first** - Always check mobile view (Chrome DevTools)
3. **Fast iteration** - Make small changes, test frequently
4. **Performance** - Keep images optimized, under 200KB each
5. **Accessibility** - Use descriptive alt text for images

## 🆘 Need Help?

- Email: manjushapaul39@gmail.com
- Check the detailed guides in this project
- Search for Next.js 15 docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Ready to launch?** Let's go! 🚀

```bash
npm run dev  # Start developing
npm run build  # Test production build
vercel  # Deploy!
```

