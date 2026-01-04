# LOCANOVA - Admissions Growth Systems

A modern, SEO-optimized landing page for LOCANOVA, providing premium lead management, student CRM, and automated growth systems for academies.

## 🚀 Features

- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Performance**: Optimized with Vite for fast builds and hot module replacement
- **Accessibility**: Semantic HTML and ARIA labels for better accessibility

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd admissions-growth-systems-_-scale-your-academy-automatically
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Running Locally

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── OurWork.tsx     # Work showcase
│   ├── Testimonials.tsx # Client testimonials
│   ├── OurTeam.tsx     # Team section
│   ├── Clients.tsx     # Client logos
│   ├── WhatsAppCTA.tsx # WhatsApp CTA section
│   ├── FloatingWhatsApp.tsx # Floating WhatsApp button
│   └── Footer.tsx      # Footer
├── public/             # Static assets
│   ├── assets/         # Images and assets
│   ├── robots.txt      # SEO robots file
│   ├── sitemap.xml     # SEO sitemap
│   └── site.webmanifest # PWA manifest
├── App.tsx             # Main app component
├── index.html          # HTML template with SEO meta tags
└── vite.config.ts      # Vite configuration
```

## 🔍 SEO Features

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data (JSON-LD) for:
  - Organization schema
  - Website schema
  - Service schema
  - Breadcrumb schema
- Sitemap.xml for search engines
- Robots.txt for crawler instructions
- Semantic HTML with proper ARIA labels

## 🌐 Domain Configuration

The site is configured for `https://locanova.in`. Update the following files if using a different domain:
- `index.html` - All meta tags and structured data
- `public/sitemap.xml` - Sitemap URLs
- `public/robots.txt` - Sitemap URL

## 📝 Environment Variables

No environment variables are required for basic functionality. The project uses Vite's built-in environment variable support if needed.

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 📧 Contact

- Email: locanova.digital@gmail.com
- Phone: +91 7766828618
- Location: Gaya, Bihar, India

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

Built with:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- GSAP (for animations - currently disabled)
"# locanova" 
