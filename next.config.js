const path = require("path");

module.exports = {
    trailingSlash: true,
    images: {
        unoptimized: true,  // Cloudflare Pages対応: 画像最適化を無効化
    },
    future: {
        webpack5: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
