/**
 * Environment Configuration
 * Centralized place to access all environment variables
 * Used throughout the application
 */

const config = {
  // API Keys & Tokens
  github: {
    apiToken: import.meta.env.VITE_GITHUB_API_TOKEN,
    username: import.meta.env.VITE_GITHUB_USERNAME,
    profileUrl: import.meta.env.VITE_GITHUB_PROFILE_URL,
  },

  etherscan: {
    apiKey: import.meta.env.VITE_ETHERSCAN_API_KEY,
    contractAddress: import.meta.env.VITE_ETHERSCAN_CONTRACT,
  },

  // Form Integration
  formspree: {
    formId: import.meta.env.VITE_FORMSPREE_ID,
    endpoint: `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
  },

  // Giscus (Comments)
  giscus: {
    repo: import.meta.env.VITE_GISCUS_REPO,
    repoId: import.meta.env.VITE_GISCUS_REPO_ID,
    category: import.meta.env.VITE_GISCUS_CATEGORY,
    categoryId: import.meta.env.VITE_GISCUS_CATEGORY_ID,
  },

  // External URLs
  embeds: {
    youtubeAiAudit: import.meta.env.VITE_YOUTUBE_AI_AUDIT,
    youtubeWeb3: import.meta.env.VITE_YOUTUBE_WEB3,
    colabNotebook: import.meta.env.VITE_COLAB_NOTEBOOK,
  },

  // Social & Contact
  social: {
    email: import.meta.env.VITE_EMAIL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    github: import.meta.env.VITE_GITHUB_PROFILE_URL,
    telegram: import.meta.env.VITE_TELEGRAM_URL,
    twitter: import.meta.env.VITE_TWITTER_URL,
    instagram: import.meta.env.VITE_INSTAGRAM_URL,
    discord: import.meta.env.VITE_DISCORD_URL,
    calendly: import.meta.env.VITE_CALENDLY_URL,
  },

  // App Settings
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Muhammad Waleed Ur Rehman',
    title: import.meta.env.VITE_APP_TITLE || 'AI Engineer & Web3 Builder',
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173',
  },
};

// Validate critical environment variables in development
if (import.meta.env.DEV) {
  const requiredVars = [
    'VITE_GITHUB_API_TOKEN',
    'VITE_ETHERSCAN_API_KEY',
    'VITE_FORMSPREE_ID',
  ];

  const missing = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missing.length > 0) {
    console.warn(
      `⚠️  Missing environment variables: ${missing.join(', ')}\n` +
      `📖 Copy .env.example to .env.local and fill in the values.`
    );
  }
}

export default config;
