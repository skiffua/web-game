const path = require('path');

module.exports = {
    entry: './index.js',
    mode: 'development',
    devServer: {
        watchFiles: ['index.js'],
        client: {
            webSocketURL: {
                hostname: '0.0.0.0',
                pathname: '/ws',
                password: 'dev-server',
                port: 8080,
                protocol: 'ws',
                username: 'webpack',
            },
        },
        static: {
            directory: path.join(__dirname, '/'),
            watch: true
        }
    },
    watchOptions: {
        ignored: ['**/node_modules']
    },
    output: {
        filename: 'bundle.js',
        path: __dirname
    }
};
