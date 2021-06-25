const path = require("path");

module.exports = {
    trailingSlash: true,
    future: {
        webpack5: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
};
