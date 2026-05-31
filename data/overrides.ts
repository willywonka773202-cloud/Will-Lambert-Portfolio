import type { Project } from "./types";

/**
 * Manual curation layer. Keyed by GitHub repo name.
 *
 * Anything set here wins over the values auto-derived from the GitHub API, so
 * known projects keep their verified, grounded descriptions, featured status,
 * and case-study detail — while brand-new repos still appear automatically with
 * sensible auto-detected defaults. To promote a freshly detected repo, just add
 * an entry here; you never have to touch the rendering code.
 */
export type ProjectOverride = Partial<
  Omit<Project, "slug" | "github" | "githubUrl" | "name">
> & { name?: string };

export const projectOverrides: Record<string, ProjectOverride> = {
  sylistly: {
    name: "Sylistly",
    tagline: "Your closet, curated — outfit inspiration that's ready to wear.",
    brand: { from: "#fb7185", to: "#a855f7" },
    description:
      "Fashion/outfit app with a closet flow, catalog expansion, and product-focused UI work.",
    status: "In Progress",
    category: "AI / Fashion / Web App",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://sylistly.vercel.app",
    featured: true,
    detail: {
      what:
        "Sylistly curates and displays pre-styled outfit combinations as themed boards organized by style and occasion. Outfits are browsable through multiple lenses — style tags (Clean, Streetwear, Preppy, Edgy, Techwear), occasions (Night Out, Gym, Office, Date night, Vacation), and gender presentation. Each look breaks down into its component pieces (tops, bottoms, shoes, bags, accessories, outerwear) with images and an estimated total cost.",
      why:
        "Built to explore product-focused UI for fashion discovery — turning the messy problem of \"what do I wear\" into a clean, swipeable catalog with a closet/build flow.",
      features: [
        "Themed outfit boards (e.g. \"Clean daily core\", \"Airport uniform\", \"Studio to street\")",
        "Filtering by style tag, occasion, and gender presentation",
        "Per-outfit piece breakdown with images and estimated total cost",
        "\"Build this\" and \"Shop Fit\" interactions",
        "Bottom navigation across Feed, Swipe, Build, Discover, Saved, and Profile",
      ],
      learned: [
        "Designing a catalog data model that stays clean as the outfit library grows",
        "Balancing dense product information against a calm, browsable UI",
      ],
      next: [
        "Personalized recommendations based on saved fits",
        "Real shopping/checkout integration behind \"Shop Fit\"",
      ],
    },
  },
  "bertos-ai-os": {
    name: "BertOS — AI OS",
    tagline: "One command center for every AI model, agent, and automation.",
    brand: { from: "#34d399", to: "#06b6d4" },
    description:
      "Personal AI operating system / command center with AI creation workflows and Hermes provider integration.",
    status: "In Progress",
    category: "AI / Developer Tools / Automation",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://bertos-ai-os.vercel.app",
    featured: true,
    detail: {
      what:
        "BertOS is a local-first AI operating system dashboard — a \"command center\" for managing AI workflows and providers. It routes prompts across multiple models and tracks objectives, automations, and agent roles from a single cockpit-style interface.",
      why:
        "Built to centralize day-to-day AI work — model routing, task tracking, and automation — into one transparent control surface instead of scattered tabs and tools.",
      features: [
        "Oracle Channel — route prompts to providers (Claude, Codex, Ollama, Gemini, Hermes)",
        "Mission Control — objective and task tracking with XP-based progression",
        "Provider Pantheon — live status monitoring for connected model providers",
        "Memory & Brief — daily planning and persistent context",
        "Autopilot — rule-based automation with approval gates for safety",
        "Agent Legion — role-based AI agent team assignments",
      ],
      learned: [
        "Designing an honest UI that surfaces what's working vs. what needs setup (\"Daemon offline\", \"needs setup\")",
        "Abstracting multiple AI providers behind one routing surface",
      ],
      next: [
        "Verified local bridge / daemon onboarding flow",
        "Persisting Mission Control state and provider credentials",
      ],
    },
  },
  "carpool-optimizer": {
    name: "Carpool Optimizer",
    tagline: "The fastest drop-off order, shared in a tap.",
    brand: { from: "#38bdf8", to: "#6366f1" },
    description:
      "Route-planning / carpool app with shareable route links and copyable route itineraries.",
    status: "Prototype",
    category: "Utility / Maps / Productivity",
    techStack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://carpool-optimizer-five.vercel.app",
    featured: true,
    detail: {
      what:
        "Carpool Optimizer plans the fastest drop-off order for a carpool. You add riders and stops, assign drivers and seats, set a schedule, and generate a drop-off route — with shareable links and copyable itineraries so everyone knows the plan.",
      why:
        "Built to take the guesswork out of recurring carpools — ordering stops sensibly and sharing the plan without a group-chat mess.",
      features: [
        "Drop-off order planning with route personality (Fastest, Balanced, Alternate)",
        "Avoidance preferences for tolls, highways, ferries, and hazards",
        "Rider management with named stops and scheduling",
        "Driver assignment with seat allocation",
        "Repeat scheduling (one-time, daily, weekday, weekly)",
        "Pre-drive checklist and departure reminders",
        "Shareable route links and copyable itineraries",
      ],
      learned: [
        "Modeling a multi-stop routing problem in a simple, friendly UI",
        "Designing share/copy flows so a plan survives outside the app",
      ],
      next: [
        "Real maps/traffic integration for true fastest-order optimization",
        "Saved carpools and recurring-ride notifications",
      ],
    },
  },
  "deerfield-aquatics-schedule": {
    name: "Deerfield Aquatics Schedule",
    tagline: "Scheduling for Deerfield aquatics, in a clean TypeScript web app.",
    brand: { from: "#22d3ee", to: "#3b82f6" },
    description:
      "Scheduling app for Deerfield aquatics — a TypeScript web app in active development.",
    status: "In Progress",
    category: "Utility / Scheduling / Web App",
    techStack: ["TypeScript"],
    featured: false,
    detail: {
      what:
        "A scheduling app for Deerfield aquatics, built as a TypeScript web app. The repository is public and under active development.",
      why:
        "Built to make aquatics scheduling easier to organize and share.",
      features: [],
      learned: [],
      next: [
        "Publish a live deployment",
        "Write up the full feature set and a case study",
      ],
    },
  },
  "vibe-coding-platform": {
    name: "Vibe Coding Platform",
    tagline: "A coding/productivity platform, wired to GitHub and Vercel.",
    brand: { from: "#a78bfa", to: "#ec4899" },
    description:
      "Coding/productivity platform project connected to GitHub and Vercel. Repository is private and currently empty — under review.",
    status: "Needs Review",
    category: "Developer Tools / Web App",
    techStack: ["TypeScript"],
    featured: false,
    detail: {
      what:
        "A coding/productivity platform concept connected to GitHub and Vercel. The repository currently exists but has no published content, so its scope and deployment are not yet verified.",
      why:
        "Listed here for transparency. It is included as a real repository under the account, not as a finished product.",
      features: [
        "Repository created under the account and linked to the GitHub/Vercel workflow",
      ],
      learned: [],
      next: [
        "Publish initial source and a README",
        "Confirm a working deployment before promoting it to a featured project",
      ],
    },
  },
};
