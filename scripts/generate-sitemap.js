/**
 * generate-sitemap.js
 * ビルド時に content/ 配下の Markdown ファイルを走査して
 * public/sitemap.xml を動的生成するスクリプト。
 *
 * 使い方: node scripts/generate-sitemap.js
 * package.json の build スクリプトに組み込む:
 *   "build": "node scripts/generate-sitemap.js && next build"
 */

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://newcreator.org";
const CONTENT_DIR = path.join(__dirname, "..", "content");
const OUTPUT_PATH = path.join(__dirname, "..", "public", "sitemap.xml");

// 静的ページ一覧（priority, changefreq を個別設定）
const STATIC_PAGES = [
  { path: "/",                    priority: "1.0", changefreq: "weekly"  },
  { path: "/about",               priority: "0.9", changefreq: "monthly" },
  { path: "/about/company",       priority: "0.7", changefreq: "monthly" },
  { path: "/about/transparency",  priority: "0.7", changefreq: "monthly" },
  { path: "/activities",          priority: "0.8", changefreq: "monthly" },
  { path: "/for-educators",       priority: "0.9", changefreq: "weekly"  },
  { path: "/for-educators/guides",        priority: "0.7", changefreq: "monthly" },
  { path: "/for-educators/case-studies",  priority: "0.7", changefreq: "monthly" },
  { path: "/for-educators/faq",           priority: "0.7", changefreq: "monthly" },
  { path: "/for-educators/resources",     priority: "0.6", changefreq: "monthly" },
  { path: "/information",         priority: "0.8", changefreq: "weekly"  },
  { path: "/archives",            priority: "0.7", changefreq: "weekly"  },
  { path: "/media",               priority: "0.7", changefreq: "monthly" },
  { path: "/apply",               priority: "0.8", changefreq: "monthly" },
  { path: "/legal/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/legal/terms",          priority: "0.3", changefreq: "yearly" },
  { path: "/legal/tokushoho",      priority: "0.3", changefreq: "yearly" },
];

// content/ 配下の Markdown から動的ページ URL を生成
// { contentDir, urlPrefix, priority, changefreq }
const DYNAMIC_SOURCES = [
  {
    contentDir: path.join(CONTENT_DIR, "news"),
    urlPrefix: "/information",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    contentDir: path.join(CONTENT_DIR, "archives"),
    urlPrefix: "/archives",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    contentDir: path.join(CONTENT_DIR, "media"),
    urlPrefix: "/media",
    priority: "0.5",
    changefreq: "monthly",
  },
  {
    contentDir: path.join(CONTENT_DIR, "for-educators", "guides"),
    urlPrefix: "/for-educators/guides",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    contentDir: path.join(CONTENT_DIR, "for-educators", "case-studies"),
    urlPrefix: "/for-educators/case-studies",
    priority: "0.6",
    changefreq: "monthly",
  },
];

/**
 * Markdown ファイル名からスラグ（id）を取得する。
 * frontmatter の id フィールドを優先し、なければファイル名のステムを使う。
 */
function getIdFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^id:\s*["']?([^"'\n]+)["']?/m);
  if (match) return match[1].trim();
  return path.basename(filePath, ".md");
}

/**
 * Markdown ファイルの date フィールドを取得する。
 */
function getDateFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const match = content.match(/^date:\s*["']?([^"'\n]+)["']?/m);
  if (match) {
    const d = new Date(match[1].trim());
    if (!isNaN(d)) return d.toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

function buildUrl(urlPath) {
  return `${BASE_URL}${urlPath}/`;
}

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : "",
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

// --- 生成処理 ---
const today = new Date().toISOString().split("T")[0];
const entries = [];

// 静的ページ
for (const page of STATIC_PAGES) {
  entries.push(
    urlEntry({
      loc: buildUrl(page.path === "/" ? "" : page.path),
      lastmod: today,
      changefreq: page.changefreq,
      priority: page.priority,
    })
  );
}

// 動的ページ（Markdown から生成）
for (const source of DYNAMIC_SOURCES) {
  if (!fs.existsSync(source.contentDir)) continue;
  const files = fs
    .readdirSync(source.contentDir)
    .filter((f) => f.endsWith(".md"));

  for (const file of files) {
    const filePath = path.join(source.contentDir, file);
    const id = getIdFromFile(filePath);
    const lastmod = getDateFromFile(filePath);
    entries.push(
      urlEntry({
        loc: buildUrl(`${source.urlPrefix}/${id}`),
        lastmod,
        changefreq: source.changefreq,
        priority: source.priority,
      })
    );
  }
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries,
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(OUTPUT_PATH, xml, "utf-8");
console.log(`✅ sitemap.xml generated: ${entries.length} URLs → ${OUTPUT_PATH}`);
