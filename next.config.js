/** @type {import("next").NextConfig} */
module.exports = {
    // 静的書き出し（out/）を Cloudflare Workers の静的アセットとして配信する
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
    reactStrictMode: true,
};
