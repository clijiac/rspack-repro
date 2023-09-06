import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from 'html-webpack-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
    throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
    mode: "development",
    devtool: false,
    entry: {
        main: "./src/index",
    },
    module: isRunningWebpack ? {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    // `.swcrc` can be used to configure swc
                    loader: "swc-loader"
                }
            },
        ]
    } : {
        rules: [
            {
                test: /\.js$/,
                type: "jsx",
            },
        ]
    },
    plugins: [
        ...(isRunningWebpack ? [
            new HtmlWebpackPlugin(),
        ] : [])
    ],
    ...(isRunningRspack ? {
        builtins: {
            html: [{}],
        },
    } : {}),
    output: {
        clean: true,
        path: isRunningWebpack
            ? path.resolve(__dirname, "webpack-dist")
            : path.resolve(__dirname, "rspack-dist"),
        filename: "[name].js",
    },
    experiments: {
        css: true,
    }
};

export default config;
