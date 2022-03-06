const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
    entry: {
        app: './assets/js/src/app.js',
        noise: './assets/js/src/noise.js',
        shift: './assets/js/src/shift.js',
        style: './assets/scss/style.scss',
    },
    output: {
        filename: 'assets/js/min/[name].js',
        path: __dirname,
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {

        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                loader: require.resolve('ts-loader'),
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: require.resolve('babel-loader'),
                    options: {
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.(gif|png|jpe?g|svg|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/min/[name][ext]',
                },
                rules: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new StyleLintPlugin({
            configFile: '.stylelintrc',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css',
        }),
    ],
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        //...
    }

    return config;
};
