# 🚀 Deployment Guide

This guide covers how to deploy the Alenton Perfect Touch portfolio website to production.

## ⚡ Quick Start - GitHub Pages (Recommended)

### For Client Repository Deployment

1. **Create GitHub Repository**
   - Create a new repository on GitHub for your client
   - Make sure it's public (or private if you have GitHub Pro)

2. **Push Code to Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/your-client/repository-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will be automatically deployed at: `https://your-client.github.io/repository-name`

4. **Optional: Custom Domain**
   - Add your custom domain in **Settings** → **Pages** → **Custom domain**
   - Create a `CNAME` file in the `public` folder with your domain name

### Repository Name Configuration

If your repository name is not the default, update the base path in `vite.config.js`:

```javascript
// For repository named "portfolio"
base: '/portfolio/'

// For repository named "alenton-design"
base: '/alenton-design/'
```

**That's it!** Your site will be live within 2-3 minutes after pushing to the main branch.

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git repository access
- Hosting platform account (Vercel, Netlify, etc.)

## 🛠️ Pre-deployment Checklist

### ✅ Environment Setup
- [ ] Copy `.env.example` to `.env` and fill in production values
- [ ] Verify all environment variables are set correctly
- [ ] Test environment variables in development

### ✅ Build Optimization
- [ ] Run `npm run build` to ensure production build works
- [ ] Check build output for any warnings or errors
- [ ] Verify bundle size is optimized
- [ ] Test production build locally with `npm run preview`

### ✅ SEO & Performance
- [ ] Meta tags are properly configured
- [ ] Open Graph tags are set for social sharing
- [ ] Images are optimized and properly sized
- [ ] Core Web Vitals are monitored

### ✅ Functionality Testing
- [ ] All components render correctly
- [ ] Navigation works on all pages
- [ ] Forms submit properly (if any)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Cross-browser compatibility verified

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login to Vercel
   vercel login

   # Deploy
   vercel
   ```

2. **Environment Variables**
   - Set environment variables in Vercel dashboard
   - Or use `vercel env add` command

3. **Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Node Version: 18+

### Option 2: Netlify

1. **Connect Repository**
   - Go to Netlify dashboard
   - Connect Git repository
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Environment Variables**
   - Set in Netlify dashboard under Site Settings > Environment Variables

### Option 3: GitHub Pages (Free & Easy)

1. **Repository Setup**
   ```bash
   # Create a new repository on GitHub
   # Push your code to the main branch
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. **Alternative: Use Automated Deployment Script**
   ```bash
   # Windows PowerShell
   .\deploy-to-github.bat

   # Linux/Mac Terminal
   ./deploy-to-github.sh
   ```
   The script will automatically configure everything for your repository!

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy your site

3. **Custom Domain (Optional)**
   - In repository **Settings** → **Pages**
   - Add your custom domain in the **Custom domain** field
   - Configure DNS records as instructed
   - Create a `CNAME` file in your `public` folder with your domain

4. **Repository Name Configuration**
   - If using a project repository (not user/org page), update `vite.config.js`:
   ```javascript
   base: '/your-repository-name/'
   ```
   - Replace `your-repository-name` with your actual repository name

### Option 4: Manual Deployment

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Deploy Build Files**
   - Upload `dist` folder contents to your hosting provider
   - Configure server for SPA routing (handle 404s)

## 🔧 Post-deployment Configuration

### Custom Domain Setup
1. Add your domain in hosting platform settings
2. Configure DNS records as instructed
3. Enable SSL certificate (usually automatic)

### Analytics Setup
1. Set up Google Analytics or similar
2. Add tracking codes to environment variables
3. Configure event tracking for important actions

### Performance Monitoring
1. Set up error tracking (Sentry, LogRocket, etc.)
2. Configure performance monitoring
3. Set up uptime monitoring

## 🔍 Testing Production Deployment

### Automated Testing
```bash
# Run tests before deployment
npm run test

# Check build
npm run build

# Preview production build
npm run preview
```

### Manual Testing Checklist
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Images load properly
- [ ] Forms work (if any)
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Social sharing works
- [ ] Performance is good (Lighthouse score)

## 🐛 Troubleshooting

### Common Issues

**Build Fails**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors
- Ensure environment variables are set

**Assets Not Loading**
- Verify public path configuration
- Check asset paths in components
- Ensure images are in correct directories

**Routing Issues**
- Configure server for SPA routing
- Check base path settings
- Verify all routes work in production

**Performance Issues**
- Enable gzip compression
- Optimize images
- Implement code splitting
- Use CDN for assets

## 📊 Monitoring & Maintenance

### Regular Tasks
- Monitor error logs
- Check performance metrics
- Update dependencies regularly
- Backup data if applicable

### Performance Optimization
- Implement caching strategies
- Optimize bundle size
- Use lazy loading for images
- Implement service worker for caching

## 📞 Support

For deployment issues:
1. Check this documentation first
2. Review error logs
3. Test in development environment
4. Check hosting platform documentation
5. Contact development team if needed

## 🔄 Deployment Workflow

1. **Development** → Create feature branch
2. **Testing** → Test thoroughly in development
3. **Staging** → Deploy to staging environment
4. **Production** → Deploy to production
5. **Monitoring** → Monitor for issues
6. **Rollback** → Have rollback plan ready

---

**Last Updated:** December 2024
**Version:** 1.0.0