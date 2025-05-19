const fs = require("fs");
const path = require("path");

const pagesDir = path.join(__dirname, "src", "pages");
const baseUrl = "http://localhost:3000"; // or your dev server URL
const pageConfig = {};

const usesHooks = (code) =>
  /useState|useEffect|useReducer|useRef|useMemo|useCallback/.test(code);

fs.readdirSync(pagesDir)
  .filter((file) => file.endsWith(".jsx"))
  .forEach((file) => {
    const filePath = path.join(pagesDir, file);
    const code = fs.readFileSync(filePath, "utf-8");

    const name = path.basename(file, ".jsx").toLowerCase();
    if (usesHooks(code)) {
      pageConfig[name] = {
        type: "browser",
        url: `${baseUrl}/${name}`,
      };
    } else {
      pageConfig[name] = {
        type: "static",
        file: `./src/pages/${file}`,
      };
    }
  });

fs.writeFileSync("pageConfig.json", JSON.stringify(pageConfig, null, 2));
console.log("✅ pageConfig.json generated dynamically.");