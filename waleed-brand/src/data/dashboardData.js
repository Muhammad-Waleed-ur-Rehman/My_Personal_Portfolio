export const gitHubContributions = Array.from({ length: 365 }, (_, i) => ({
  day: i + 1,
  count: Math.floor(Math.random() * 8)
}));

export const repoStats = [
  { label: "Total Stars", value: "247", change: "+12%" },
  { label: "Forks", value: "89", change: "+5%" },
  { label: "Open Issues", value: "3", change: "-40%" },
  { label: "Pull Requests", value: "18", change: "+3" }
];

export const learningProgress = [
  { skill: "AI / Deep Learning", progress: 82 },
  { skill: "Solidity & Smart Contracts", progress: 75 },
  { skill: "Financial Engineering", progress: 90 }
];
