# 🚀 React Page HTML Exporter with Static + Dynamic Rendering

This project allows you to render multiple React pages into standalone `.html` files using either:

- `renderToStaticMarkup` (for static pages without hooks)
- `Puppeteer` (for dynamic pages with `useEffect`, `useState`, etc.)

These HTML files can then be loaded directly into **GrapesJS** using the Pages Manager.

---

## ✅ Step-by-Step Setup

### 1. Clone this repo

```bash
git clone https://github.com/your-repo/html-exporter
cd html-exporter

2. Inject generatePageConfig.js

This script scans your /src/pages/ folder and determines which pages:

#  **Do not use React hooks** (rendered statically)
    
#  **Do use hooks** (require browser-based rendering via Puppeteer)

3. Inject render-all.js

This script reads pageConfig.json and dynamically:

#  Renders static pages using react-dom/server
    
#   Renders dynamic pages using Puppeteer
    
#  Saves all .html files into /dist

4. Inject Babel Config

Ensure Babel supports:

#   JSX
    
#   ESNext syntax
    

Using:

#   @babel/register
    
#  @babel/preset-env
    
#   @babel/preset-react

 5. Auto-scan package.json and inject CDN links

The render-all.js script automatically:

#   Parses package.json
    
#   Injects appropriate CDN  tags for popular UI frameworks like:
    

# <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/antd@4.24.13/dist/antd.min.css">


You can extend this via the cdnMap inside render-all.js.

6. Install Dependencies

# npm install
7. Generate Page Config File
# npm run generate:config
# This creates a pageConfig.json file like:
###
{
  "home": { "type": "static", "file": "./src/pages/Home.jsx" },
  "dashboard": { "type": "browser", "url": "http://localhost:3000/dashboard" }
}
8. Render All Pages
## 
npm run start      # In one terminal (React dev server)
npm run render     # In another terminal (exports all pages to /dist)

9. Use /dist/*.html in GrapesJS
