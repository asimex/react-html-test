const fs = require("fs");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const fse = require("fs-extra"); // install with: npm install fs-extra

// Enable JSX + React support with Babel
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  extensions: [".js", ".jsx"],
});

// Pages to render
const routes = [
  { name: "home", component: "./src/pages/Home.jsx" },
  { name: "about", component: "./src/pages/About.jsx" },
  { name: "contact", component: "./src/pages/Contact.jsx" },
  { name: "products", component: "./src/pages/Products.jsx" },
  { name: "dashboard", component: "./src/pages/Dashboard.jsx" },
];

// Output directory
const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir);

// ✅ Copy public assets into dist/assets
const sourceAssets = path.join(__dirname, "public", "assets");
const destAssets = path.join(distDir, "assets");

if (fs.existsSync(sourceAssets)) {
  fse.copySync(sourceAssets, destAssets);
  console.log("📦 Copied: public/assets → dist/assets");
} else {
  console.warn("⚠️  No public/assets folder found. Skipping asset copy.");
}

// 🔁 Render each page
routes.forEach(({ name, component }) => {
  try {
    const PageComponent = require(component).default;

    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(PageComponent)
    );

    const fullHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${name.charAt(0).toUpperCase() + name.slice(1)} | Shopping Time</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/antd@4.24.13/dist/antd.min.css" rel="stylesheet" />
    <style>
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`;

    fs.writeFileSync(path.join(distDir, `${name}.html`), fullHtml);
    console.log(`✅ Rendered: dist/${name}.html`);
  } catch (err) {
    console.error(`❌ Failed to render ${name}:`, err.message);
  }
});
