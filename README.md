# 🎨 Alenton Perfect Touch - Portfolio Website

A modern, responsive portfolio website for Alenton Perfect Touch, showcasing design work and services with a sleek glassmorphism design.

![Portfolio Preview](./public/vite.svg)

## ✨ Features

- **Glassmorphism Design** - Modern frosted glass effects with backdrop blur
- **Responsive Layout** - Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered transitions and effects
- **Image Gallery** - Interactive portfolio showcase with modal views
- **SEO Optimized** - Meta tags and Open Graph support for social sharing
- **Performance Focused** - Lazy loading, code splitting, and optimized assets
- **Error Boundaries** - Graceful error handling for production stability

## 🚀 Quick Deploy to GitHub Pages

### 1. Create Repository
Create a new repository on GitHub for your client.

### 2. Push Code
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
git branch -M main
git remote add origin https://github.com/your-client/repository-name.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to repository **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**
- Your site will be live at: `https://your-client.github.io/repository-name`

### 4. Optional: Custom Domain
- Add your domain in **Settings** → **Pages** → **Custom domain**
- Create a `CNAME` file in the `public` folder with your domain

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-client/repository-name.git
cd repository-name

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── About.jsx     # About section
│   ├── HeroSection.jsx
│   ├── PortfolioHighlights.jsx
│   ├── GallerySection.jsx
│   ├── PhilosophySection.jsx
│   ├── PersonalSection.jsx
│   └── ErrorBoundary.jsx
├── assets/
│   └── images/       # Portfolio images
├── styles/
│   └── tailwind.css  # Global styles and Tailwind config
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## 🎨 Customization

### Colors and Branding
Edit the color variables in `src/styles/tailwind.css`:

```css
@theme {
  --color-primary: #1a1a1a;      /* Main brand color */
  --color-accent: #ffae00;       /* Accent color */
  --color-brand-gold: #f4a261;   /* Gold accent */
}
```

### Content Updates
- **Hero Section**: Edit `src/components/HeroSection.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Portfolio**: Edit `src/components/PortfolioHighlights.jsx`
- **Gallery**: Edit `src/components/GallerySection.jsx`
- **Contact Info**: Update in respective components

### Images
- Add new images to `src/assets/images/`
- Import them in the respective components
- Update image references in the gallery arrays

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:

```env
VITE_APP_TITLE="Alenton Perfect Touch"
VITE_APP_DESCRIPTION="Strategic Design Solutions"
VITE_APP_URL="https://yourdomain.com"
VITE_CONTACT_EMAIL="your-email@example.com"
```

### Repository Name (Important!)
If deploying to a project repository (not user/org page), update `vite.config.js`:

```javascript
base: '/your-repository-name/'
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment Options

- **GitHub Pages** (Free) - Automatic deployment via GitHub Actions
- **Vercel** - Enhanced performance and analytics
- **Netlify** - Easy setup with form handling
- **Any static host** - Manual deployment of build files

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Bundle Size**: Optimized with code splitting
- **Loading**: Lazy loading for images and components
- **Caching**: Service worker ready for offline functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary to Alenton Perfect Touch.

## 📞 Support

For technical support or customization requests:
- Contact the development team
- Check the `DEPLOYMENT.md` file for detailed instructions
- Review GitHub Issues for known problems

---

**Built with:** React 19, Vite, Tailwind CSS, Framer Motion
**Deployed on:** GitHub Pages
**Last Updated:** December 2024
