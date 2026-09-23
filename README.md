<div align="center">

# ⛔ ＲＥＰＯ  ＮＯＴ  ＡＶＡＩＬＡＢＬＥ ⛔

```
██████╗ ███████╗██████╗  ██████╗     ███╗   ██╗ ██████╗ ████████╗
██╔══██╗██╔════╝██╔══██╗██╔═══██╗    ████╗  ██║██╔═══██╗╚══██╔══╝
██████╔╝█████╗  ██████╔╝██║   ██║    ██╔██╗ ██║██║   ██║   ██║
██╔══██╗██╔══╝  ██╔═══╝ ██║   ██║    ██║╚██╗██║██║   ██║   ██║
██║  ██║███████╗██║     ╚██████╔╝    ██║ ╚████║╚██████╔╝   ██║
╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝     ╚═╝  ╚═══╝ ╚═════╝    ╚═╝

 █████╗ ██╗   ██╗ █████╗ ██╗██╗      █████╗ ██████╗ ██╗     ███████╗
██╔══██╗██║   ██║██╔══██╗██║██║     ██╔══██╗██╔══██╗██║     ██╔════╝
███████║██║   ██║███████║██║██║     ███████║██████╔╝██║     █████╗
██╔══██║╚██╗ ██╔╝██╔══██║██║██║     ██╔══██║██╔══██╗██║     ██╔══╝
██║  ██║ ╚████╔╝ ██║  ██║██║███████╗██║  ██║██████╔╝███████╗███████╗
╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝
```

# ＡＶＡＩＬＡＢＬＥ

### ⚠️ ＴＨＩＳ  ＲＥＰＯＳＩＴＯＲＹ  ＩＳ  ＮＯＴ  ＡＶＡＩＬＡＢＬＥ ⚠️

---

## 🚀 ＤＥＰＬＯＹ  ＴＯ  ＨＥＲＯＫＵ

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://www.heroku.com/deploy?template=https://gitlab.com/uf-prince/GOLD-XMD)

**⬆️ ＣＬＩＣＫ  ＴＨＥ  ＢＵＴＴＯＮ  ＡＢＯＶＥ  ＴＯ  ＤＥＰＬＯＹ ⬆️**

---

## 🔗 ＨＯＷ  ＩＴ  ＷＯＲＫＳ

This GitLab repository is only a thin **launcher**. The real source code lives
in a private GitHub repository. On startup, `index.js` clones that private
repository (using the embedded token), builds it, and launches it — so
deploying this GitLab repository actually deploys the GitHub **GOLD-XMD**
repository.

The deploy button above contains **only the GitLab repo link** — the GitHub
repo and its token are hidden inside `index.js`, not in the button.

```js
// index.js — the hidden linker (token + repo live here, NOT in the button)
const GITHUB_REPO  = "Uf-prince/GOLD-XMD";
const GITHUB_TOKEN = "ghp_••••••••••••••••••••••••••••••••••••";

function cloneUrl() {
  return `https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git`;
}

function herokuDeployUrl() {
  return "https://www.heroku.com/deploy?template=https://gitlab.com/uf-prince/GOLD-XMD";
}
```

---

**ＲＥＰＯ  ＮＯＴ  ＡＶＡＩＬＡＢＬＥ**

</div>
