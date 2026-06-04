# Codex Handoff

This folder hands the portfolio off to Codex (or any agent) to rebuild it better
without losing any context.

## Files
- **`PROMPT.md`** — paste its contents into Codex as your first message.
- **`PROJECT_CONTEXT.md`** — full verified reference (real repos, live URLs, the
  auto-sync architecture, design system, commands). The prompt tells Codex to read it.

## Use it on your laptop
```bash
# 1. Clone the project to your laptop (this folder comes with it)
git clone https://github.com/willywonka773202-cloud/will-lambert-portfolio.git
cd will-lambert-portfolio

# 2. Open the folder in Codex, then paste the contents of:
#    codex-handoff/PROMPT.md
```

That's it — Codex will read the prompt, read `PROJECT_CONTEXT.md`, re-verify the real
projects against GitHub, and rebuild the site while keeping the hard rules
(only real projects, auto-detection, grounded descriptions).
