# AGENTS.md

## Cursor Cloud specific instructions

`skovhus.dev` is a static Next.js 14 (App Router) personal site/blog. Content lives in `content/` and is compiled by Contentlayer (`contentlayer.config.ts`) into `.contentlayer/`. There is no backend, database, or external service.

Standard commands are in `package.json` (`dev`, `build`, `start`, `lint`, `typecheck`, `verify`) and CI runs in `.github/workflows/verify.yml`.

Non-obvious notes:

- `pnpm dev` serves on http://localhost:3000 and regenerates Contentlayer docs on startup; the first request can be slow due to on-demand compilation.
- `pnpm lint` runs `prettier --write` (not `--check`), so it reformats files in place across the repo. Use `git checkout -- .` afterward to drop unrelated formatting changes you did not intend.
- `pnpm install` reports ignored build scripts (`contentlayer2`, `esbuild`, `protobufjs`); this is expected and matches CI (`--ignore-scripts`). Build, dev, and `verify` all work without approving them.
- `pnpm verify` (`contentlayer2 build && pnpm lint && pnpm typecheck`) is the full check; run it before pushing.
