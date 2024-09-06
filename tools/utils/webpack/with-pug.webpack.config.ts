import type { Configuration } from 'webpack';

const { merge } = require('webpack-merge');

export const withPug = () => {
    return (config: Configuration) => {
        return merge(config, {
            module: {
                rules: [
                    {
                        test: /\.pug$/,
                        loader: '@webdiscus/pug-loader',
                        options: {
                            method: 'render',
                            doctype: 'html',
                            plugins: [require('pug-plugin-ng')]
                        }
                    }
                ]
            }
        });
    };
};
