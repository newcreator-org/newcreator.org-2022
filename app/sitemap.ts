import fs from "fs";
import type { MetadataRoute } from "next";
import path from "path";
import { getAllArchives, getAllEducatorCaseStudies, getAllEducatorGuides, getAllMedia, getAllNews } from "../libs/markdown";
import { SITE } from "../libs/site";

export const dynamic = "force-static";

/** app/ の下にある固定ページ（[id] などの動的ルート・internal を除く）を拾う */
function staticRoutes(dir = path.join(process.cwd(), "app"), base = ""): string[] {
    const routes: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) routes.push(`${base}/`);
            continue;
        }
        if (entry.name.startsWith("[") || entry.name.startsWith("_") || entry.name === "internal") continue;
        const segment = entry.name.startsWith("(") ? "" : `/${entry.name}`;
        routes.push(...staticRoutes(path.join(dir, entry.name), base + segment));
    }
    return routes;
}

function lastmod(date?: string): Date | undefined {
    const d = date ? new Date(date) : undefined;
    return d && !Number.isNaN(d.getTime()) ? d : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const fixed = staticRoutes().map((route) => ({
        url: `${SITE.url}${route}`,
        changeFrequency: "monthly" as const,
        priority: route === "/" ? 1 : route.startsWith("/legal") ? 0.3 : 0.7,
    }));
    const dynamic = [
        ...getAllNews().map((p) => ({ url: `/information/${p.id}/`, date: p.date })),
        ...getAllArchives().map((p) => ({ url: `/archives/${p.id}/`, date: p.date })),
        ...getAllMedia().map((p) => ({ url: `/media/${p.id}/`, date: p.date })),
        ...getAllEducatorGuides().map((p) => ({ url: `/for-educators/guides/${p.id}/`, date: p.date })),
        ...getAllEducatorCaseStudies().map((p) => ({ url: `/for-educators/case-studies/${p.id}/`, date: p.date })),
    ].map((p) => ({ url: `${SITE.url}${p.url}`, lastModified: lastmod(p.date), changeFrequency: "yearly" as const, priority: 0.5 }));
    return [...fixed, ...dynamic];
}
