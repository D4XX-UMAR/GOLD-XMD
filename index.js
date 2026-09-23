/**
 * ============================================================================
 * GOLD-MD — GitLab launcher (index.js)
 * ============================================================================
 * Ye GitLab repository sirf ek "front" hai. Asli source code private GitHub
 * repository me rehta hai. Ye file us private repo ko (embedded token ke sath)
 * clone karti hai, build karti hai, aur launch karti hai — is liye GitLab repo
 * deploy karne pe piche se GitHub GOLD-MD repo deploy hota hai.
 *
 * Deploy button me sirf GitLab repo ka link hota hai — token/repo button me
 * NAHI dikhte, wo yahan index.js ke andar chhupe hue hain.
 * ============================================================================
 */

const { execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

// ── Public GitHub source (cloned directly — no token needed) ──────────────
const GITHUB_REPO   = "Uf-prince/GOLD-MD";
const GITHUB_BRANCH = "main";

const SRC_DIR = path.join(__dirname, ".gold-md-src");

function log(msg) {
  console.log(`[GOLD-MD] ${msg}`);
}

// Clone URL for the public GitHub repo (no token required).
function cloneUrl(repo = GITHUB_REPO, token = "") {
  return token
    ? `https://${token}@github.com/${repo}.git`
    : `https://github.com/${repo}.git`;
}

// One-click Heroku deploy URL — points at THIS GitLab repo (no token/repo).
function herokuDeployUrl() {
  return "https://www.heroku.com/deploy?template=https://gitlab.com/D4XX-UMAR/GOLD-XMD";
}

// Clone the private GitHub source repository.
function fetchSource() {
  if (fs.existsSync(SRC_DIR)) {
    fs.rmSync(SRC_DIR, { recursive: true, force: true });
  }
  log("Starting......");
  execSync(
    `git clone --depth 1 --branch ${GITHUB_BRANCH} "${cloneUrl()}" "${SRC_DIR}"`,
    { stdio: "inherit" }
  );
  log("Source repository fetched.");
}

// Build the Go bot from the fetched source.
function buildSource() {
  log("Building GOLD-MD binary...");
  execSync(
    "CGO_ENABLED=0 go build -mod=vendor -ldflags='-s -w' -o gold-md ./src",
    { cwd: SRC_DIR, stdio: "inherit" }
  );
  log("Build complete.");
}

// Launch the bot via the source repo's start.sh.
function launch() {
  const startScript = path.join(SRC_DIR, "start.sh");
  if (!fs.existsSync(startScript)) {
    throw new Error("start.sh not found in source repository");
  }
  fs.chmodSync(startScript, 0o755);
  log("Launching start.sh ...");
  const child = spawn("bash", [startScript], {
    cwd: SRC_DIR,
    stdio: "inherit",
    env: process.env,
  });
  child.on("exit", (code) => process.exit(code ?? 0));
}

function main() {
  try {
    fetchSource();
    buildSource();
    launch();
  } catch (err) {
    console.error(`[GOLD-MD] Launcher error: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { cloneUrl, herokuDeployUrl, GITHUB_REPO };
