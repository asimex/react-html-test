const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const waitOn = require("wait-on");

(async () => {
  const url = "http://localhost:3000/dashboard";
  const distDir = path.join(__dirname, "dist");

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  console.log("🕓 Waiting for server...");
  await waitOn({ resources: ["http://localhost:3000"], timeout: 60000 });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  console.log(`⏳ Navigating to ${url}...`);
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });

  // Optional: wait for spinner to disappear
  await page.waitForSelector(".ant-spin", { hidden: true, timeout: 10000 });

  const html = await page.content();
  fs.writeFileSync(path.join(distDir, "dashboard.html"), html);

  console.log("✅ Saved: dist/dashboard.html");
  await browser.close();
})();
