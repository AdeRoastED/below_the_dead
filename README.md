# Below the Dead

Zombie survival game for phones (landscape).

## Put it online with GitHub Pages
1. Upload ALL these files to the top of a **Public** repository (not inside a folder):
   `index.html`, `manifest.json`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`
2. Settings -> Pages -> Source: "Deploy from a branch" -> Branch: `main` / `(root)` -> Save
3. Wait 1-5 minutes, then open the link shown on that Pages page.

## Install as an app
Open the link in Chrome (Android) or Safari (iPhone), tap **GET THE APP** in the menu and follow the steps.

## Updating
Upload the new `index.html` over the old one. If the installed app keeps showing the old version,
change `btd-v1` to `btd-v2` (and so on) at the top of `sw.js` and upload that too.
