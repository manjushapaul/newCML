# Deployment Guide for Code Meld Labs

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Prerequisites
- GitHub account
- Vercel account (free tier works great)

### Steps

1. **Push to GitHub**
```bash
cd /Users/manjushapaul/Projects/CML
git init
git add .
git commit -m "Initial commit: Code Meld Labs portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - ✨ Your site will be live in ~2 minutes!

3. **Get Your Live URL**
   - Vercel provides a free `.vercel.app` subdomain
   - Example: `code-meld-labs.vercel.app`
   - Share this URL immediately!

### Custom Domain (Optional)

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`

## Alternative: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

## Environment Variables Setup

If using EmailJS for the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Add to Vercel/Netlify environment variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Post-Deployment Checklist

- [ ] Update `SITE_CONFIG.email` in `/lib/constants.ts`
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Verify responsive design on mobile
- [ ] Test dark mode toggle
- [ ] Check social media links
- [ ] Update Open Graph image (`/public/og-image.png`)
- [ ] Add favicon (`/public/favicon.ico`)
- [ ] Test performance with Lighthouse
- [ ] Submit sitemap to Google Search Console

## Performance Optimization

Your site is already optimized with:
- ✅ Next.js Image optimization
- ✅ Font optimization
- ✅ Code splitting
- ✅ Static generation
- ✅ Minimal dependencies

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## Monitoring

Set up analytics (optional):
- Google Analytics 4
- Vercel Analytics (built-in)
- Plausible Analytics (privacy-focused)

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Every push to `main` branch = automatic deployment
- Pull requests get preview URLs
- Rollback to previous versions anytime

## Custom Configuration

### Update Site URL
After deployment, update the site URL in:
1. `/app/layout.tsx` - `metadataBase`
2. `/app/sitemap.ts` - `baseUrl`
3. `/app/robots.ts` - `sitemap` URL

### Add Google Analytics
Add to `/app/layout.tsx` in the `<head>` section:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## Troubleshooting

### Build Fails
- Check Node.js version (use 18.x or 20.x)
- Run `npm install` locally first
- Check for TypeScript errors: `npm run lint`

### Images Not Loading
- Ensure image domains are listed in `next.config.js`
- Use Next.js Image component for all images

### Fonts Not Loading
- The app uses Google Fonts (Inter & Manrope)
- No additional setup needed
- To use Geist font, see `/public/fonts/README.md`

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: manjushapaul39@gmail.com

---

**Total Deployment Time: ~5 minutes** 🚀
