# CliniclyPro - Medical Practice Management Website

A modern, responsive landing page for CliniclyPro medical practice management software built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional medical-focused design
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Interactive**: YouTube video popups, email subscription, testimonials carousel
- **Performance**: Built with Vite for fast development and optimal builds
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Prerequisites

- Node.js 18+ and npm (or yarn)
- Git (optional)

## 🛠️ Local Development Setup

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd cliniclypro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will run on `http://localhost:3000`
   - Hot reload is enabled for instant updates

## 📦 Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Preview production build locally**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` folder, ready for deployment.

## 🌐 Deployment Options

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting provider
3. Configure your domain

### Option 2: Traditional Web Hosting

1. Build the project: `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Configure your web server to serve the files

### Option 3: Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

### Option 4: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📁 Project Structure

```
cliniclypro/
├── src/
│   ├── App.tsx                 # Main app component
│   ├── main.tsx               # App entry point
│   ├── index.css              # Global styles
│   └── lib/
│       └── utils.ts           # Utility functions
├── components/                 # React components
│   ├── Header.tsx             # Navigation
│   ├── Hero.tsx               # Hero section
│   ├── Features.tsx           # Features grid
│   ├── HowItWorks.tsx         # Process steps
│   ├── InfoSection.tsx        # Training section
│   ├── ProductShowcase.tsx    # Product demo
│   ├── Testimonial.tsx        # Customer testimonials
│   ├── Pricing.tsx            # Pricing plans
│   ├── StatsSection.tsx       # Statistics
│   ├── Footer.tsx             # Footer with contact
│   ├── YouTubePopup.tsx       # Video modal
│   └── ui/                    # ShadCN UI components
├── styles/
│   └── globals.css            # Tailwind configuration
├── index.html                 # HTML template
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite configuration
```

## 🔧 Customization

### Colors and Branding
- Update CSS variables in `src/index.css`
- Modify Tailwind theme in `tailwind.config.js`

### Content
- Edit text content in individual component files
- Update contact information in `components/Footer.tsx`
- Change links in `components/Header.tsx`

### Images
- Replace image URLs throughout components
- Add your own assets to the `public/` folder

## 📧 Email Subscription

The email subscription functionality is currently set up to send emails to `cliniclypro@gmail.com`. To integrate with a real backend:

1. Update the `handleEmailSubmit` function in `components/Footer.tsx`
2. Replace the mock implementation with actual API calls
3. Set up your backend service (e.g., Node.js, PHP, etc.)

## 🚨 Troubleshooting

### Common Issues

**Port 3000 already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or run on different port
npm run dev -- --port 3001
```

**Build errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
- Check that all dependencies are installed
- Verify TypeScript configuration in `tsconfig.json`

## 📞 Support

For questions or issues with the CliniclyPro website:
- Email: cliniclypro@gmail.com
- Phone: +212 0605993696

## 📄 License

© 2025 CliniclyPro. All rights reserved.