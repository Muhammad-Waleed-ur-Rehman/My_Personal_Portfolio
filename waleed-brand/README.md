# Muhammad Waleed Ur Rehman - Personal Brand Website

A production-ready React Vite portfolio website for Muhammad Waleed Ur Rehman, featuring AI engineering, Web3 building, and audit automation expertise.

## 🚀 Features

- **Dark Premium Theme** - Glassmorphism design with gradient accents
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Smooth Animations** - Framer Motion for scroll/fade/hover effects
- **Interactive Sections**:
  - Hero with call-to-action
  - About & professional journey
  - Experience timeline
  - Skills showcase with progress bars
  - Featured projects
  - Analytics dashboard (GitHub contributions)
  - Blog with markdown support
  - AI chatbot
  - Contact section
  - Advanced features page (Web3, AI agents, etc.)

## 📋 Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast bundler
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **ethers.js** - Web3 integration
- **React Helmet** - Meta tags management

## 🛠️ Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Navigate to project directory
cd waleed-brand

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
waleed-brand/
├── index.html                 # Main HTML entry
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # TailwindCSS config
├── postcss.config.js         # PostCSS config
├── src/
│   ├── index.css            # Global styles + Tailwind
│   ├── main.jsx             # React entry point
│   ├── App.jsx              # Main app component
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── Navbar.jsx       # Navigation
│   │   ├── Footer.jsx       # Footer
│   │   ├── StickyChatButton.jsx
│   │   └── AdvancedFeatures.jsx  # Advanced page features
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── BlogList.jsx     # All articles
│   │   └── BlogDetail.jsx   # Single article
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Blog.jsx
│   │   ├── Chatbot.jsx
│   │   └── Contact.jsx
│   └── data/
│       ├── blogPosts.js     # Blog content
│       └── dashboardData.js # Analytics data
└── public/
    └── vite.svg             # Favicon
```

## 🎨 Design System

### Colors
- **Background**: `#050814` (dark navy)
- **Glass Cards**: `rgba(255,255,255,0.03)` with blur
- **Border**: `rgba(255,255,255,0.06)`
- **Gradient**: Blue → Cyan → Purple

### Typography
- **Font**: Inter (loaded from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Glass Cards**: Blur + transparency effects
- **Gradient Text**: Colorful text overlay
- **Smooth Transitions**: 200-300ms duration

## 📝 Customization

### Adding Blog Posts
Edit `src/data/blogPosts.js`:
```javascript
{
  slug: "url-friendly-title",
  title: "Article Title",
  date: "2025-12-10",
  category: "AI & ML",
  readTime: "5 min",
  excerpt: "Short summary",
  content: "Full markdown content"
}
```

### Updating Skills
Edit `src/sections/Skills.jsx` - modify `skillGroups` array.

### Modifying Projects
Edit `src/sections/Projects.jsx` - update `projects` array.

### Changing Social Links
Edit `src/sections/Contact.jsx` - update the links array.

## 🔐 Environment Variables

This project uses centralized environment variable management for security.

### Quick Setup
```bash
# Copy the template
cp .env.example .env.local

# Edit .env.local with your actual values
nano .env.local
```

### Required Variables
- `VITE_GITHUB_API_TOKEN` - For live GitHub stats (get from https://github.com/settings/tokens)
- `VITE_ETHERSCAN_API_KEY` - For smart contract integration (get from https://etherscan.io/apis)
- `VITE_FORMSPREE_ID` - For contact forms (get from https://formspree.io)

### Optional Variables
- `VITE_GISCUS_*` - For blog comments (get from https://giscus.app)
- `VITE_YOUTUBE_*` - For video embeds
- `VITE_COLAB_NOTEBOOK` - For Google Colab integration
- Social URLs and contact information

### Important Security Notes
- ⚠️ **Never commit `.env.local`** - it contains secrets
- ✅ `.env.local` is in `.gitignore`
- ✅ `.env.example` is safe to commit (no secrets)
- ✅ Use `src/config.js` to access all variables from components

### Detailed Setup Guide
See [ENV_SETUP.md](./ENV_SETUP.md) for:
- Step-by-step instructions for each API
- How to get each token/key
- Security best practices
- Troubleshooting

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
✨ Automatically handles environment variables via dashboard

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```
Add environment variables in **Site settings → Build & deploy → Environment**

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

### Self-Hosted
See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md) for complete setup instructions for all platforms.

**Before deploying**, run through the [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md):
- [ ] All environment variables are set
- [ ] `.env.local` is git-ignored
- [ ] Production build works locally
- [ ] Security audit complete


## 🔧 Advanced Features

The `/advanced` route includes:
- Interactive timeline
- GitHub stats (live)
- Resume customizer (skill matcher)
- Decision tree (service finder)
- Whitepaper vault (Formspree integration)
- Web3 wallet connection
- Advanced chatbot
- Multi-step hiring form

## 📊 Analytics Setup

To enable analytics:
1. Get a Plausible shared link
2. Update `AnalyticsDashboard` component with your link

## 🔐 Environment Variables

Create `.env.local` if needed:
```
VITE_API_KEY=your_key_here
```

## 🎯 SEO Optimization

- Meta tags via React Helmet
- Structured data (JSON-LD)
- Open Graph tags
- Mobile viewport configured
- Semantic HTML structure

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Vite for fast builds
- Code splitting via React Router
- Image optimization ready
- Lazy loading via Framer Motion
- CSS optimized by TailwindCSS

## 🔄 Updates & Maintenance

To update dependencies:
```bash
npm outdated
npm update
```

## 📄 License

Personal use - customize as needed.

## 👋 Support

For issues or questions, contact:
- Email: waleedrehman20197@gmail.com
- LinkedIn: linkedin.com/in/muhammad-waleed-ur-rehman-8a9607222
- GitHub: github.com/Muhammad-Waleed-ur-Rehman

---

**Built with AI + Web3 precision** ✨
