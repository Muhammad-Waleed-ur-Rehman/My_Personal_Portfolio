# 🎉 Environment Variables Setup - QUICK REFERENCE

> **Status**: ✅ Complete & Ready to Use

## 🚀 Get Started in 5 Minutes

### Step 1: Setup Environment
```bash
cd waleed-brand
cp .env.example .env.local
```

### Step 2: Edit Credentials
```bash
nano .env.local
# or use your favorite editor
```

### Step 3: Install & Run
```bash
npm install
npm run dev
```

✨ **Done!** Your portfolio is running at http://localhost:5173

---

## 📋 What You Need in `.env.local`

### Must Have (3 Required)
```env
VITE_GITHUB_API_TOKEN=VITE_GITHUB_API_TOKEN
VITE_ETHERSCAN_API_KEY=VITE_ETHERSCAN_API_KEY
VITE_FORMSPREE_ID=mrejvdza
```

### Should Have (Better Experience)
```env
VITE_GISCUS_REPO=Muhammad-Waleed-ur-Rehman/personal-brand-comments
VITE_GISCUS_REPO_ID=R_kgDOSdSCow
VITE_GISCUS_CATEGORY=General
VITE_GISCUS_CATEGORY_ID=DIC_kwDOSdSCo84C9CNm

VITE_YOUTUBE_AI_AUDIT=https://www.youtube.com/embed/_-b3fCu-9c8?si=...
VITE_YOUTUBE_WEB3=https://www.youtube.com/embed/VIDEO_ID_HERE
VITE_COLAB_NOTEBOOK=https://colab.research.google.com/drive/...
```

### Social & Contact
```env
VITE_EMAIL=waleedrehman20197@gmail.com
VITE_GITHUB_USERNAME=Muhammad-Waleed-ur-Rehman
VITE_GITHUB_PROFILE_URL=https://github.com/Muhammad-Waleed-ur-Rehman
VITE_LINKEDIN_URL=https://linkedin.com/in/muhammad-waleed-ur-rehman-8a9607222
VITE_TELEGRAM_URL=https://t.me/Waleedman
VITE_TWITTER_URL=https://x.com/Waled_rehmanlov
VITE_INSTAGRAM_URL=https://www.instagram.com/waleedman_
VITE_DISCORD_URL=https://discord.com/users/952535088611090503
VITE_CALENDLY_URL=https://calendly.com/waleedrehman20197/30min
VITE_ETHERSCAN_CONTRACT=0xd9145CCE52D386f254917e481eB44e9943F39138
```

**See `.env.example` for all 23 variables with descriptions**

---

## 📂 Files You Got

| File | What It Does | Safe to Share |
|------|-------------|---------------|
| `.env.example` | Template (safe) | ✅ Yes - Commit to Git |
| `.env.local` | Your secrets | ❌ No - Keep locally |
| `src/config.js` | Config access | ✅ Yes - Commit to Git |
| `ENV_SETUP.md` | Setup guide | ✅ Yes - Commit to Git |
| `DEPLOYMENT_CHECKLIST.md` | Deploy guide | ✅ Yes - Commit to Git |
| `README.md` | Project info | ✅ Yes - Commit to Git |

---

## 💻 Where Everything Is Used

| Variable | Component | What It Does |
|----------|-----------|-------------|
| `GITHUB_API_TOKEN` | AdvancedFeatures | Shows your real-time GitHub stats |
| `ETHERSCAN_API_KEY` | AdvancedFeatures | Links to your smart contract |
| `FORMSPREE_ID` | Contact Forms | Email submissions to your inbox |
| `GISCUS_*` | Blog Comments | Lets visitors comment on posts |
| `YOUTUBE_*` | Video Embeds | Shows your video tutorials |
| `COLAB_NOTEBOOK` | Code Section | Interactive Google Colab |
| `EMAIL` | Contact Section | Your email for visitors |
| `SOCIAL_*` | Footer & Contact | Links to your social profiles |
| `CALENDLY_URL` | Schedule Button | Book meetings with you |

---

## 🔐 Security Checklist

- [ ] `.env.local` created
- [ ] All values filled in
- [ ] `.env.local` not in git (auto: it's in .gitignore)
- [ ] `npm install` completed
- [ ] `npm run dev` works
- [ ] No errors in console

---

## 🛠️ Common Tasks

### Change an API Key
1. Edit `.env.local`
2. Update the value
3. Dev server auto-reloads
4. Done! ✅

### Add a New Environment Variable
1. Add to `.env.example` with comment
2. Add to `.env.local` with actual value
3. Add to `src/config.js` in appropriate section
4. Use in component: `import config from "../config"`

### Deploy to Production
1. See [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
2. For Vercel: Add env vars in dashboard
3. For Netlify: Add in Build & Deploy settings
4. For others: See detailed guide

### Rotate API Keys
1. Generate new key on API provider
2. Update `.env.local`
3. Update hosting platform
4. Revoke old key
5. Done! ✅

---

## ⚠️ Important Rules

✅ **DO:**
- Keep `.env.local` local only
- Use config.js for accessing variables
- Rotate API keys regularly
- Check git before pushing

❌ **DON'T:**
- Commit `.env.local` to git
- Hardcode API keys in components
- Share `.env.local` with others
- Use same keys everywhere

---

## 🆘 Troubleshooting

### "Cannot read property of undefined"
→ Check that variable exists in `.env.local`

### Form doesn't submit
→ Verify `VITE_FORMSPREE_ID` is correct

### GitHub stats don't load
→ Check `VITE_GITHUB_API_TOKEN` and username

### Comments not showing
→ Verify all `VITE_GISCUS_*` variables are set

### Videos don't embed
→ Check `VITE_YOUTUBE_*` URLs are complete

---

## 📚 Need More Help?

- **Setup Questions**: See `ENV_SETUP.md`
- **Deployment Help**: See `DEPLOYMENT_CHECKLIST.md`
- **Architecture**: See `ARCHITECTURE.md`
- **What Changed**: See `INTEGRATION_SUMMARY.md`

---

## 🎯 Next Steps

```
1. ✅ Copy .env.example to .env.local
2. ✅ Fill in your API keys
3. ✅ npm install
4. ✅ npm run dev
5. ✅ Test everything works
6. ✅ npm run build
7. ✅ Deploy! (see DEPLOYMENT_CHECKLIST.md)
```

---

## 📞 Quick Reference

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |
| Check env setup | See console for warnings |
| Get API token | Visit link in ENV_SETUP.md |
| Deploy | Follow DEPLOYMENT_CHECKLIST.md |

---

**Everything is ready to go! 🚀**

Your portfolio now has enterprise-grade secret management with zero hardcoded credentials. You're ready for production!

**Questions?** Check the documentation files listed above.
