# 🔐 Environment Variables Setup Guide

This document explains how to configure all environment variables for the Muhammad Waleed Ur Rehman portfolio website.

## 📋 Quick Setup (2 Steps)

### Step 1: Copy the Template
```bash
cp .env.example .env.local
```

### Step 2: Fill in Your Values
Edit `.env.local` and add your actual API keys and configuration.

---

## 🔑 Environment Variables Explained

### GitHub API Token
**File:** `.env.local`
```
VITE_GITHUB_API_TOKEN= VITE_GITHUB_API_TOKEN
VITE_GITHUB_USERNAME=Muhammad-Waleed-ur-Rehman
VITE_GITHUB_PROFILE_URL=https://github.com/Muhammad-Waleed-ur-Rehman
```

**Used in:**
- `src/components/AdvancedFeatures.jsx` - GitHub stats (real-time fetch)
- `src/sections/Contact.jsx` - GitHub profile link

**How to Get:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo`, `read:user`
4. Copy the token and paste in `.env.local`

**Rate Limits:**
- Without token: 60 requests/hour
- With token: 5,000 requests/hour (recommended!)

---

### Etherscan API Key
**File:** `.env.local`
```
VITE_ETHERSCAN_API_KEY= VITE_ETHERSCAN_API_KEY
VITE_ETHERSCAN_CONTRACT=VITE_ETHERSCAN_CONTRACT
```

**Used in:**
- `src/components/AdvancedFeatures.jsx` - Smart contract link
- Etherscan API calls (for future implementations)

**How to Get:**
1. Go to https://etherscan.io/apis
2. Create an account (free)
3. Create a new API key
4. Copy and paste in `.env.local`

**What is the Contract Address?**
- Your deployed smart contract address on Ethereum
- Format: `0x...` (42 characters)
- Can be left blank if you don't have one yet

---

### Formspree (Email Form Integration)
**File:** `.env.local`
```
VITE_FORMSPREE_ID=mrejvdza
```

**Used in:**
- `src/components/AdvancedFeatures.jsx` - Contact forms, whitepaper vault
- Email lead capture

**How to Get:**
1. Go to https://formspree.io
2. Sign up for free
3. Create a new form
4. Copy the form ID (after `/f/`)
5. Paste in `.env.local`

**Example:**
- Form URL: `https://formspree.io/f/mrejvdza`
- Form ID: `mrejvdza` ← This goes in `.env.local`

---

### Giscus (Comments System)
**File:** `.env.local`
```
VITE_GISCUS_REPO=Muhammad-Waleed-ur-Rehman/personal-brand-comments
VITE_GISCUS_REPO_ID=R_kgDOSdSCow
VITE_GISCUS_CATEGORY=General
VITE_GISCUS_CATEGORY_ID=DIC_kwDOSdSCo84C9CNm
```

**Used in:**
- `src/components/GiscusComments.jsx` - Blog comments
- `src/pages/BlogDetail.jsx` - Integrated into blog posts

**How to Get:**
1. Go to https://giscus.app
2. Enter your repository (must be public)
3. Follow the setup guide
4. You'll get a snippet with all 4 values
5. Copy them to `.env.local`

**Setup Steps:**
- Create a GitHub repo for comments: `personal-brand-comments`
- Enable "Discussions" in repo settings
- Run Giscus setup wizard
- Copy the generated values

---

### YouTube Video Embeds
**File:** `.env.local`
```
VITE_YOUTUBE_AI_AUDIT=https://www.youtube.com/embed/_-b3fCu-9c8?si=fu1p3dbOcqs1R_1t
VITE_YOUTUBE_WEB3=https://www.youtube.com/embed/VIDEO_ID_HERE
```

**Used in:**
- `src/components/AdvancedFeatures.jsx` - MediaSection

**How to Get:**
1. Go to your YouTube video
2. Click "Share" → "Embed"
3. Copy the `src` URL from the iframe
4. Paste in `.env.local`

**Format:**
```
https://www.youtube.com/embed/VIDEO_ID
```

---

### Google Colab Notebook
**File:** `.env.local`
```
VITE_COLAB_NOTEBOOK=https://colab.research.google.com/drive/1Og-5l7SI67wuxFMfEK36vtI8XNUGmLLf?usp=sharing
```

**Used in:**
- `src/components/AdvancedFeatures.jsx` - CodeSandbox section

**How to Get:**
1. Open your Colab notebook
2. Click "Share" at the top right
3. Copy the shareable link
4. Paste in `.env.local`

---

### Contact & Social Links
**File:** `.env.local`
```
VITE_EMAIL=waleedrehman20197@gmail.com
VITE_LINKEDIN_URL=https://linkedin.com/in/muhammad-waleed-ur-rehman-8a9607222
VITE_CALENDLY_URL=https://calendly.com/waleedrehman20197/30min
```

**Used in:**
- `src/sections/Contact.jsx` - Contact section
- `src/sections/Chatbot.jsx` - Chatbot responses
- `src/components/AdvancedFeatures.jsx` - Form submissions

---

### App Settings (Optional)
**File:** `.env.local`
```
VITE_APP_NAME=Muhammad Waleed Ur Rehman
VITE_APP_TITLE=AI Engineer & Web3 Builder
VITE_API_BASE_URL=http://localhost:5173
```

**Used in:**
- `src/config.js` - Fallback values
- Future API integrations

---

## 🚨 Security Best Practices

### ✅ DO:
- ✅ Store secrets in `.env.local` (never commit!)
- ✅ Use `.env.example` as template
- ✅ Rotate API keys periodically
- ✅ Use environment-specific tokens
- ✅ Keep `.env.local` in `.gitignore`
- ✅ Never push secrets to GitHub

### ❌ DON'T:
- ❌ Commit `.env.local` to version control
- ❌ Share API keys in pull requests
- ❌ Hardcode secrets in code
- ❌ Use production secrets in development
- ❌ Post keys in issues or discussions
- ❌ Use the same token everywhere

---

## 🔄 How Environment Variables Work

### In Development
1. Vite reads `.env.local`
2. Variables prefixed with `VITE_` are available at runtime
3. Access via `import.meta.env.VITE_VARIABLE_NAME`
4. Hot reload works automatically

### In Production
1. Create `.env.prod` with production keys
2. Or set environment variables in hosting platform
3. Build uses the production values
4. Secrets never exposed in compiled code

---

## 📦 Using Config in Components

All environment variables are centralized in `src/config.js`:

```javascript
import config from "../config";

// Use in components
const email = config.social.email;
const formEndpoint = config.formspree.endpoint;
const githubStats = config.github.apiToken;
```

**Benefits:**
- Single source of truth
- Easy to update values
- Type-safe access
- Fallback values
- Validation checks

---

## ✅ Validation

The app validates critical variables on startup:

```javascript
// In src/config.js
if (import.meta.env.DEV) {
  const requiredVars = [
    'VITE_GITHUB_API_TOKEN',
    'VITE_ETHERSCAN_API_KEY',
    'VITE_FORMSPREE_ID',
  ];
  // Warns if any are missing
}
```

Check the console for warnings if variables are missing!

---

## 🧪 Testing Variables

### Test GitHub Token
```bash
curl -H "Authorization: token YOUR_TOKEN" \
  https://api.github.com/user
```

### Test Formspree Endpoint
```bash
curl -X POST https://formspree.io/f/YOUR_FORM_ID \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

---

## 📋 Checklist

Before deploying:

- [ ] `.env.local` exists in root directory
- [ ] All API keys are filled in
- [ ] `.env.local` is in `.gitignore`
- [ ] `npm run dev` shows no warnings
- [ ] GitHub stats load correctly
- [ ] Forms submit successfully
- [ ] Comments section works (if enabled)
- [ ] Social links are correct

---

## 🆘 Troubleshooting

### "undefined is not a function"
- Missing API key
- Check `.env.local` file
- Restart dev server: `Ctrl+C` + `npm run dev`

### "Cannot read property of undefined"
- Check config.js for correct property names
- Verify environment variable spelling

### Forms not submitting
- Check Formspree form ID
- Test endpoint with curl
- Check browser console for errors

### GitHub stats won't load
- Verify API token is correct
- Check GitHub API rate limits
- Ensure username is correct

### Comments not showing
- Verify Giscus repo is public
- Enable "Discussions" in repo settings
- Check all 4 Giscus variables are set
- Clear browser cache

---

## 📖 Links

- [Vite Env Variables](https://vitejs.dev/guide/env-and-mode.html)
- [GitHub API Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [Etherscan API](https://etherscan.io/apis)
- [Formspree](https://formspree.io)
- [Giscus Setup](https://giscus.app)

---

## 💡 Advanced: Custom Environments

Create environment-specific files:

```bash
.env.local       # Development (Git ignored)
.env.staging     # Staging (Git ignored)
.env.prod        # Production (Git ignored)
.env.example     # Template (Committed)
```

Vite automatically loads the correct file based on `NODE_ENV`.

---

**Questions?** Check the relevant API documentation or this guide again. All variables are configured to be safe and not expose sensitive data in the compiled code.
