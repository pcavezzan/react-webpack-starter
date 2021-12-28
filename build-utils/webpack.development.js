module.exports = () => ({
    output: {
        filename: "development.js"
    },
    module: {
        rules: [
            {
                test: /\.sa?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
});
