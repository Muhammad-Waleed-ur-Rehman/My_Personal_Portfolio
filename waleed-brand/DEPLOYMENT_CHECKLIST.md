# 🚀 Production Deployment Checklist

Complete this checklist before deploying to production.

## ✅ Pre-Deployment Security Audit

### 1. Environment Variables
- [ ] All `.env.local` variables are filled in
- [ ] `.env.local` is in `.gitignore`
- [ ] `.env.example` has been created (safe to commit)
- [ ] No secrets in code files (searched entire codebase)
- [ ] All API keys have proper permissions/scopes

### 2. API Keys & Tokens
- [ ] GitHub token has only necessary scopes (public_repo, read:user)
- [ ] Etherscan API key is active
- [ ] Formspree form is configured and tested
- [ ] Giscus repo is public and Discussions enabled
- [ ] YouTube video IDs are correct and public
- [ ] Colab notebook is shareable

### 3. Configuration Files
- [ ] `src/config.js` exports all variables correctly
- [ ] No hardcoded URLs or credentials in components
- [ ] `.gitignore` includes comprehensive patterns:
  - [ ] `.env`, `.env.local`, `.env.*.local`
  - [ ] `.git`, `node_modules`, `dist`, `build`
  - [ ] `.DS_Store`, `Thumbs.db`, editor configs

### 4. Code Quality
- [ ] All components import from `src/config.js`
- [ ] No console.log() statements in production code
- [ ] All fetch calls use correct endpoints from config
- [ ] Error handling for missing environment variables
- [ ] No credentials in error messages or logs

---

## 🔑 Secrets Management Checklist

### API Keys
- [ ] GitHub Token: Only needed for public data reads (rate limits)
- [ ] Etherscan Key: Only for contract verification (rate limited)
- [ ] Formspree ID: Public (not a secret), but validate on submit
- [ ] Giscus Config: Repo must be public (not sensitive)

### Rotation Schedule
- [ ] GitHub token: Rotate every 90 days
- [ ] Etherscan key: Rotate every 6 months
- [ ] Calendly link: Update if account changes
- [ ] All other keys: Rotate on suspected compromise

### Revocation List
Track revoked keys for audit:
```
| Key | Date Revoked | Reason |
|-----|--------------|--------|
| ... | YYYY-MM-DD   | ...    |
```

---

## 🌐 Platform-Specific Deployment

### Vercel
```bash
# 1. Push code to GitHub (without .env.local)
git add -A
git commit -m "Ready for deployment"
git push origin main

# 2. In Vercel Dashboard:
# - Link GitHub repository
# - Add environment variables in Settings → Environment Variables:
#   * VITE_GITHUB_API_TOKEN
#   * VITE_ETHERSCAN_API_KEY
#   * All other VITE_* variables
#
# 3. Deploy
# - Auto-deploys on push (or manually trigger)
# - Environment variables automatically injected
```

### Netlify
```bash
# 1. Create netlify.toml in root:
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# 2. In Netlify Dashboard:
# - Settings → Build & Deploy → Environment
# - Add all VITE_* variables
```

### GitHub Pages
```bash
# 1. Create .github/workflows/deploy.yml
# 2. Set secrets in repository Settings → Secrets and variables
# 3. Workflow runs on push to main, builds and deploys to gh-pages branch
```

### Self-Hosted (VPS/Server)
```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Create .env.local
cd /var/www/portfolio
nano .env.local
# Paste all environment variables

# 3. Install and build
npm install
npm run build

# 4. Serve dist/ folder with nginx or Apache
# Point to /var/www/portfolio/dist
```

---

## 📋 Environment Variable Setup per Platform

### Vercel Environment Variables
Navigate to: **Project Settings** → **Environment Variables**

Add each variable:
```
Key: VITE_GITHUB_API_TOKEN
Value: VITE_GITHUB_API_TOKEN
Development: ✓ Preview: ✓ Production: ✓
```

**Important:** Check the boxes for all environments (Development, Preview, Production)

---

### Netlify Environment Variables
Navigate to: **Site settings** → **Build & deploy** → **Environment**

Click **New variable** for each:
```
Key: VITE_GITHUB_API_TOKEN
Value: [paste token]
```

---

### GitHub Actions Secrets
Navigate to: **Settings** → **Secrets and variables** → **Actions**

Click **New repository secret**:
```
Name: VITE_GITHUB_API_TOKEN
Value: [paste token]
```

Reference in workflow:
```yaml
env:
  VITE_GITHUB_API_TOKEN: ${{ secrets.VITE_GITHUB_API_TOKEN }}
```

---

## 🧪 Pre-Launch Testing

### Local Testing
```bash
# 1. Build production bundle
npm run build

# 2. Test with production build
npm run preview

# 3. Check all features work:
# - [ ] GitHub stats load
# - [ ] Contact forms submit
# - [ ] Blog comments appear
# - [ ] Social links work
# - [ ] Videos embed properly
# - [ ] No console errors
```

### Production Testing
```bash
# After deployment, test:
# - [ ] Site loads without errors
# - [ ] All links are active
# - [ ] Forms submit successfully
# - [ ] API calls complete
# - [ ] Images load correctly
# - [ ] Responsive on mobile
# - [ ] Performance is acceptable
```

---

## 🔒 Post-Deployment Security

### Monitoring
- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Monitor API rate limits
- [ ] Watch for unusual form submissions
- [ ] Track failed API calls

### Backup & Recovery
- [ ] Backup .env.local in secure location
- [ ] Document all API credentials in password manager
- [ ] Have recovery plan for compromised keys
- [ ] Test deployment process regularly

### Updates
- [ ] Keep dependencies updated (`npm update`)
- [ ] Monitor security advisories (`npm audit`)
- [ ] Review GitHub security alerts
- [ ] Test updates in staging before production

---

## 🚨 Emergency Response

### If API Key is Compromised

**GitHub Token:**
1. Go to https://github.com/settings/tokens
2. Revoke the token immediately
3. Generate new token with same scopes
4. Update in all deployment platforms

**Etherscan Key:**
1. Go to https://etherscan.io/apis
2. Disable the compromised key
3. Generate new key
4. Update in all deployment platforms

**Formspree Form:**
1. Log in to https://formspree.io
2. Check submission logs for suspicious activity
3. Delete compromised form
4. Create new form and update ID

**Quick Update Process:**
```bash
# 1. Update .env.local locally
nano .env.local

# 2. Update all deployment platforms
# Vercel → Settings → Environment Variables
# Netlify → Build & Deploy → Environment
# GitHub → Settings → Secrets

# 3. Trigger new deployment
# Should happen automatically or manually trigger
```

---

## 📊 Environment Variables Summary

| Variable | Sensitivity | Scope | Rotation |
|----------|-------------|-------|----------|
| VITE_GITHUB_API_TOKEN | High | Production | 90 days |
| VITE_ETHERSCAN_API_KEY | Medium | Production | 6 months |
| VITE_FORMSPREE_ID | Low | All | As needed |
| VITE_GISCUS_* | Low | All | Rarely |
| VITE_*_URL | Low | All | As needed |
| VITE_EMAIL | Low | All | As needed |

---

## ✨ Final Checklist

- [ ] All environment variables tested locally
- [ ] Production build works: `npm run build && npm run preview`
- [ ] No console errors or warnings
- [ ] `.env.local` is git-ignored
- [ ] Code is pushed to GitHub (without secrets)
- [ ] Environment variables added to hosting platform
- [ ] Deployment triggered and successful
- [ ] All features tested in production
- [ ] Performance metrics acceptable
- [ ] Security audit complete
- [ ] Backup of secrets created
- [ ] Team members informed of deployment

---

**🎉 You're ready to deploy!**

For questions, refer to:
- [Environment Setup Guide](./ENV_SETUP.md)
- [README.md](./README.md)
- Original API documentation links in ENV_SETUP.md

---

**Last Updated:** [Date]
**Deployed By:** [Your Name]
**Deployment Time:** [Time]
