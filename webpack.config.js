const path = require('path');

const LAMBDA_FILE_LOC = path.join(__dirname, './build/lambda.js');
const LAMBDA_DIR = path.join(__dirname, './build');
const LAMBDA_FILE_PROD = './lambda_prod.js';

module.exports = {
    entry: LAMBDA_FILE_LOC,
    externals: ['aws-sdk'],
    mode: 'production',
    node: {
        __dirname: false,
        __filename: false
    },
    output: {
        filename: LAMBDA_FILE_PROD,
        libraryTarget: 'commonjs',
        path: LAMBDA_DIR
    },
    target: 'node'
}
