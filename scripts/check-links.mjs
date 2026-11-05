#!/usr/bin/env node
/**
 * 書き出した静的サイト（out/）のサイト内リンク切れを調べる。
 * HTML の href / src のうち "/" で始まるものと、sitemap.xml の URL を、out/ の実ファイルと突き合わせる。
 * 1 件でも切れていたら終了コード 1（CI で落とす）。
 *
 * 使い方: node scripts/check-links.mjs out
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || "out");
if (!fs.existsSync(root)) {
    console.error(`${root} がありません。先に npm run build を実行してください。`);
    process.exit(1);
}

function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
    });
}

// _redirects の元 URL は、ファイルが無くても切れていない
const redirects = new Set();
const redirectsFile = path.join(root, "_redirects");
if (fs.existsSync(redirectsFile)) {
    for (const line of fs.readFileSync(redirectsFile, "utf8").split("\n")) {
        const [from] = line.trim().split(/\s+/);
        if (from && !from.startsWith("#")) redirects.add(from);
    }
}

function exists(urlPath) {
    const clean = decodeURIComponent(urlPath.split(/[?#]/)[0]);
    if (clean === "" || redirects.has(clean)) return true;
    const target = path.join(root, clean);
    if (!target.startsWith(root)) return false;
    if (clean.endsWith("/")) return fs.existsSync(path.join(target, "index.html"));
    return fs.existsSync(target) || fs.existsSync(`${target}.html`) || fs.existsSync(path.join(target, "index.html"));
}

const files = walk(root);
const htmlFiles = files.filter((f) => f.endsWith(".html"));
const broken = new Map();
const attr = /\s(?:href|src)="([^"]+)"/g;

for (const file of htmlFiles) {
    const html = fs.readFileSync(file, "utf8");
    for (const [, raw] of html.matchAll(attr)) {
        const url = raw.replace(/&amp;/g, "&");
        if (!url.startsWith("/") || url.startsWith("//")) continue;
        if (!exists(url)) {
            const from = "/" + path.relative(root, file);
            if (!broken.has(url)) broken.set(url, new Set());
            broken.get(url).add(from);
        }
    }
}

const sitemap = path.join(root, "sitemap.xml");
if (fs.existsSync(sitemap)) {
    for (const [, loc] of fs.readFileSync(sitemap, "utf8").matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)) {
        if (!exists(loc)) {
            if (!broken.has(loc)) broken.set(loc, new Set());
            broken.get(loc).add("/sitemap.xml");
        }
    }
} else {
    broken.set("/sitemap.xml", new Set(["(生成されていない)"]));
}

console.log(`HTML ${htmlFiles.length} 件を検査しました。`);
if (broken.size === 0) {
    console.log("サイト内リンク切れはありません。");
    process.exit(0);
}
console.error(`リンク切れ ${broken.size} 件:`);
for (const [url, from] of broken) {
    console.error(`  ${url}  ← ${[...from].slice(0, 3).join(", ")}${from.size > 3 ? ` ほか${from.size - 3}件` : ""}`);
}
process.exit(1);
