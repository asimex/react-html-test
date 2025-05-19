const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fse = require("fs-extra");
const puppeteer = require("puppeteer");
const waitOn = require("wait-on");

// Enable JSX
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  extensions: [".js", ".jsx"],
});

const config = require("./pageConfig.json");
const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// --- Static Pages ---
async function renderStatic(name, componentPath) {
  const Component = require(componentPath).default;
  const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Component));
  const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
  <link href="https://cdn.jsdelivr.net/npm/antd@4.24.13/dist/antd.min.css" rel="stylesheet">
  <style>body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto }</style>
</head>
<body>${html}</body>
</html>`;
  fs.writeFileSync(path.join(distDir, `${name}.html`), fullHtml);
  console.log(`✅ Static rendered: ${name}.html`);
}

// --- Puppeteer Pages ---
async function renderDynamic(name, url) {
  console.log(`🕓 Waiting for server...`);
  await waitOn({ resources: ["http://localhost:3000"], timeout: 60000 });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`⏳ Navigating to ${url}...`);
  await page.goto(url, { waitUntil: "networkidle0" });

  await page.waitForSelector(".ant-spin", { hidden: true }).catch(() => {});
  const html = await page.content();

  fs.writeFileSync(path.join(distDir, `${name}.html`), html);
  console.log(`✅ Puppeteer rendered: ${name}.html`);
  await browser.close();
}

// --- Main Loop ---
(async () => {
  for (const [name, meta] of Object.entries(config)) {
    try {
      if (meta.type === "static") {
        await renderStatic(name, meta.file);
      } else if (meta.type === "browser") {
        await renderDynamic(name, meta.url);
      }
    } catch (err) {
      console.error(`❌ Failed to render ${name}:`, err.message);
    }
  }
})();
