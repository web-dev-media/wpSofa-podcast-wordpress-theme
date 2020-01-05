// webpack v4
const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require("glob");
const AssetsPlugin = require('assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const log = require('signale');

module.exports = async (env, argv) => {
    const mode = argv.mode || 'development';
    let devToolMode = 'hidden-source-map';
    let host = 'https://wp-sofa.de/';
    let StyleInjectMode = 'styleTag';

    if (mode === 'development') {
        host = 'http://wpsofa.podcast/';
        devToolMode = 'source-map';
        StyleInjectMode = 'styleTag';
    }


    const logOutput = `
        mode: ${mode}
        devtool: ${devToolMode},
        host: ${host},
        StyleInjectMode: ${StyleInjectMode}`;

    log.info(logOutput);

    const entries = (moduleBase, webpackImports) => {
        var entries = {
            aa_coreBundle: glob.sync('./assets/js/**/*.js'),
            themesPluginsBundle: glob.sync('./**/assets/*.' + webpackImports),
        };

        const moduleWebpackFiles = glob.sync('./' + moduleBase + '/**/assets/' + webpackImports);

        if(moduleWebpackFiles.length > 0){
            moduleWebpackFiles.map((file) => {
                const pattern = moduleBase+"[\\/](.*?)[\\/]assets[\\/]*.+\\.js$";
                const entry = file.match(pattern);

                entries[entry[1]] = './' + moduleBase + '/' + entry[1] + '/assets/' + webpackImports;
            });
        }

        const webpackFiles = glob.sync('./**/assets/*.' + webpackImports);
/*
        if(webpackFiles.length > 0){
            webpackFiles.map((file) => {
                const pattern = "[\\/]assets[\\/](.*?)\\..*?\\.js$";
                const entry = file.match(pattern);

                entries[entry[1]] = file;
            });
        }*/

        return entries;
    };

    const config = {
        mode:         mode,
        devtool:      devToolMode,
        entry: entries('template-parts', 'webpack.imports.js'),
        output: {
            path: path.resolve(__dirname, 'assets/dist/' + mode),
            filename: '[name].bundle.[chunkhash].js',
            chunkFilename: '[name].chunk.js',
            publicPath: () => {
                let pathAsArray = path.resolve(__dirname).split('/').reverse();
                let arrayPath = [];

                for(i=0;i < 3;i++){
                    arrayPath.push(pathAsArray[i]);
                }

                return host + arrayPath.reverse().join("\/") + "/assets/dist/" + mode + '/';
            }
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
	         /* runtimeChunk: 'single',
	          splitChunks: {
		          chunks            : 'all',
		          maxInitialRequests: Infinity,
		          minSize           : 0,
		          cacheGroups       : {
			          vendor: {
				          test: /[\\/]node_modules[\\/]/,
				          name( module ) {
					          // get the name. E.g. node_modules/packageName/not/this/part.js
					          // or node_modules/packageName
					          const packageName = module.context.match( /[\\/]node_modules[\\/](.*?)([\\/]|$)/ )[ 1 ];

					          // npm package names are URL-safe, but some servers don't like @ symbols
					          return `npm.${packageName.replace( '@', '' )}`;
				          }
			          }
		          }
	          }*/
        },
        watchOptions: {
            ignored: /node_modules/
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    loader: 'url-loader?limit=100000'
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                //injectType: StyleInjectMode
                                injectType: 'styleTag'
                            }
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader?sourceMap'
                        ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                //injectType: StyleInjectMode
                                injectType: 'singletonStyleTag'
                            }
                        },
                        'css-loader'
                    ]
                }

            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new WebpackMd5Hash(),
            new AssetsPlugin({
                processOutput: function (assets) {
                    return 'window.staticMap = ' + JSON.stringify(assets)
                },
                filename: 'assets/dist/' + mode + '/assets.json'
            })
        ]
    };

    return config;
};