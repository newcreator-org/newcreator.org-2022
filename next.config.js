const path = require("path");

module.exports = {
    output: "export",         // next export 廃止に伴う代替設定 (Next.js 14+)
    trailingSlash: true,
    images: {
        unoptimized: true,  // Cloudflare Pages対応: 画像最適化を無効化
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
