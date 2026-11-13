# Below the Dead

Zombie survival game for phones (landscape). Works fully offline once loaded.

## Put it online with GitHub Pages
1. Upload ALL these files to the top of a **Public** repository (not inside a folder):
   `index.html`, `manifest.json`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`
2. Settings -> Pages -> Source: "Deploy from a branch" -> Branch: `main` / `(root)` -> Save
3. Wait 1-5 minutes, then open the link shown on that Pages page.

## Install as an app
Open the link in Chrome (Android) or Safari (iPhone), tap **GET THE APP** in the menu and follow the steps.

## Updating
Upload the new `index.html` AND `sw.js` over the old ones (the version number inside sw.js makes
installed apps pick up the update). If the app still shows the old version, close it fully and reopen.

## Test mode
Settings -> "Test mode" unlocks every chapter, sublevel, challenge and Leo without touching real progress.
Before publishing for players you can hide it: in index.html search for `cfgTest` and delete that settings row.

## Ads and purchases
They are placeholders. Replace `showRewardedAd()` and `purchaseProduct()` in index.html with the real
SDK of the platform you publish on (CrazyGames / Poki / GameDistribution, or AdMob + store billing in an app).
