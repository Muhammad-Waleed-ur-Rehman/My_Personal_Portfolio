# Quick Start Guide

## 🚀 Installation & Setup (5 minutes)

### Step 1: Install Dependencies
```bash
cd waleed-brand
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

You should see:
```
  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Open `http://localhost:5173` in your browser.

## 📖 Project Structure Quick Reference

```
src/
├── components/
│   ├── ui/           ← Reusable components (Button, GlassCard)
│   ├── Navbar.jsx    ← Navigation bar
│   ├── Footer.jsx    ← Footer
│   └── AdvancedFeatures.jsx  ← /advanced page
├── pages/
│   ├── Home.jsx      ← Main homepage
│   ├── BlogList.jsx  ← /blog route
│   └── BlogDetail.jsx ← /blog/:slug route
├── sections/         ← Home page sections
│   ├── Hero.jsx      ← Main hero section
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Dashboard.jsx
│   ├── Blog.jsx
│   ├── Chatbot.jsx
│   └── Contact.jsx
└── data/
    ├── blogPosts.js     ← Blog content
    └── dashboardData.js ← Analytics
```

## 🎯 First Changes (Customization)

### 1. Update Your Info
Edit these files to add your content:

**Contact Section** - `src/sections/Contact.jsx`
- Change email: `waleedrehman20197@gmail.com`
- Update social links (LinkedIn, GitHub, etc.)
- Update Calendly link

**Blog Posts** - `src/data/blogPosts.js`
- Add/edit blog articles
- Update categories, dates, content

**Skills** - `src/sections/Skills.jsx`
- Add your skill groups and percentages

**Projects** - `src/sections/Projects.jsx`
- Replace with your actual projects

### 2. Customize Colors (Optional)
Edit `tailwind.config.js`:
```javascript
colors: {
  brand: {
    bg: "#050814",      // Change background
    accent: "#3b82f6",  // Change accent
  }
}
```

### 3. Update Branding
Edit `index.html`:
```html
<title>Your Name | Your Title</title>
```

## 🔗 Routes

- `/` - Home page
- `/blog` - All articles
- `/blog/:slug` - Single article (e.g., `/blog/ai-financial-audit-future`)
- `/advanced` - Advanced features page

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy.

## 🚀 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy `dist/` folder to Netlify

### GitHub Pages
1. Build: `npm run build`
2. Push `dist/` to `gh-pages` branch

## 🐛 Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Module not found errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not loading?**
- Make sure TailwindCSS is in `src/index.css`
- Check that `tailwind.config.js` exists

## 📚 Key Files to Edit

| File | Purpose |
|------|---------|
| `src/sections/Contact.jsx` | Add your email/social links |
| `src/data/blogPosts.js` | Add blog articles |
| `src/sections/Projects.jsx` | Showcase your work |
| `index.html` | Meta tags, title |
| `tailwind.config.js` | Colors, fonts |

## ✨ Next Steps

1. **Customize content** - Update all sections with your info
2. **Add images** - Place in `public/` folder
3. **Test on mobile** - Open DevTools (F12) and test responsiveness
4. **Deploy** - Follow deployment guide above
5. **Setup analytics** - Connect Plausible or Google Analytics

## 💡 Tips

- Use `npm run dev` during development
- Use React DevTools browser extension for debugging
- Tailwind classes autocomplete in VSCode with Tailwind CSS IntelliSense
- Save files and changes hot-reload instantly

## 🆘 Need Help?

- Check README.md for detailed docs
- Look at existing components for examples
- VSCode Extensions: ES7+ React/Redux, Tailwind CSS IntelliSense

---

Happy building! 🚀
