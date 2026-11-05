import type { MetadataRoute } from "next";
import { SITE } from "../libs/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{ userAgent: "*", allow: "/", disallow: ["/internal/"] }],
        sitemap: `${SITE.url}/sitemap.xml`,
    };
}
