---
name: fix-dependencies
description: Update all npm dependencies to their latest versions, verify the site still builds and serves correctly, then commit, push to main, and deploy. Use when the user asks to update/upgrade/bump dependencies, or to "fix dependencies" for this portfolio app.
user-invocable: true
allowed-tools:
  - Read
  - Bash
  - PowerShell
---

# /fix-dependencies — Update, verify, and ship dependency upgrades

Runs `npm-check-updates`, installs, verifies nothing broke, then commits, pushes to `main`, and deploys. Each step gates the next — **stop and report on the first failure**, do not skip ahead.

## 0. Preconditions

- `git status` must be clean (no staged or unstaged changes) before starting. If it isn't, stop and tell the user — do not commit unrelated in-progress work as part of a dependency bump.
- Confirm the current branch is `main` (or ask before pushing if not).

## 1. Bump dependencies

```
npx npm-check-updates -u
```

This rewrites version ranges in `package.json`. Then check `git diff package.json`:

- If there's no diff, everything is already up to date — report that and stop here (no install/build/deploy needed).

## 2. Install

```
npm install
```

If this fails (peer dependency conflicts, registry errors, etc.):
- Run `git checkout -- package.json package-lock.json` to revert.
- Report the failure output to the user and stop. Do not proceed to build/commit/deploy.

## 3. Build check (catches broken imports/APIs from the bump)

```
npm run build
```

This runs the production webpack build across every route (Home + all project pages under `src/pages/`), so a dependency bump that breaks an import or a component API surfaces here as a compile error.

If the build fails:
- Run `git checkout -- package.json package-lock.json` and `npm install` to restore the last known-good state.
- Report the build error and stop.

## 4. Dev-server smoke test

Start the dev server in the background and confirm it actually serves the app (catches dev-server-specific config/plugin breakage that a production build wouldn't):

```
npm start
```

- Run this with `run_in_background: true` (Bash) since it's a long-running process.
- Poll `http://localhost:5000/` (port from `webpack.config.js` `devServer.port`) with `curl -sS -o /dev/null -w "%{http_code}"` until it returns `200` or ~30s elapses.
- Confirm the response body contains the app's root mount point (e.g. `id="root"`) and a reference to a bundled script — this is a static-shell check, not a rendered-page check, since the app is a client-side `HashRouter` SPA and this environment has no headless browser. It's a proxy for "the server is up and serving the built shell," not proof every route renders — step 3's build success is what actually catches broken pages/imports.
- Stop the background dev-server process once the check completes (success or failure) — don't leave it running.

If the server never comes up or returns a non-200:
- Run `git checkout -- package.json package-lock.json` and `npm install` to restore.
- Report the failure and stop.

## 5. Commit, push, deploy

Only if steps 2–4 all passed:

```
git add package.json package-lock.json
git commit -m "Update dependencies via npm-check-updates"
git push origin main
npm run deploy
```

`npm run deploy` runs `gh-pages -d build` (via `predeploy` → `npm run build`), publishing to the live site at elisalupin.com. This is a real, visible deploy — if anything about steps 1–4 felt uncertain, pause and confirm with the user before this step rather than pushing ahead.

## 6. Report

Summarize: which packages were updated (from the `package.json` diff) and old → new versions, that the build and smoke test passed, and confirm the push + deploy completed.
